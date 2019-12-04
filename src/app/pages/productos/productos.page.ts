import { Component, OnInit, ViewChild, Input } from '@angular/core';

import { Router } from '@angular/router';
import { ProductoService } from "src/app/services/producto/producto.service";

import { Producto } from "src/app/interfaces/producto/producto";
import { ProductoResult } from "src/app/interfaces/producto/producto-result";
import { ProductosResult } from "src/app/interfaces/producto/productos-result";
import { IonList, ModalController, LoadingController } from '@ionic/angular';
import { ProductosItemModalPage } from '../productos-item-modal/productos-item-modal.page';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {

  constructor(private productoService: ProductoService, 
              private router:Router, 
              private modalController:ModalController,
              private loadingController:LoadingController) {
  }

  _request:Producto={};
  items:Producto[];
  nome_token_user:string;

  // contadorCarrito:number=0;
  contadorCarrito : number=null; 
  colorCarrito: string = null;

  @ViewChild('listaProductos',{static:false}) listaProductos:IonList;

  ngOnInit() {
    this.filtro('');
    // console.log("recibido:"+localStorage.getItem('Usuario.name'));
  }



  ionViewWillEnter(){
    console.log("hola->cargar pagina");
    this.filtro('');
  }

  async doRefresh(event){
    setTimeout(() => {
      this.filtro('');
      event.target.complete();  
    }, 1000);
    
  }

  async filtro(_nome_token:string){
   
    const loading = await this.loadingController.create({
      message: 'Espere un monento...',
      spinner: 'bubbles'
    });
    await loading.present();

    this._request.nome_token = _nome_token;
    this.nome_token_user = localStorage.getItem('miCuenta.nome_token');
    this.productoService.filtro(this.nome_token_user,this._request).subscribe(
      item=>{
        this.items = item.items;
        loading.dismiss();
        //console.log(this.items);
      },error=>{
        console.log(error);
      }
    );

  }

  async verItem(_item:Producto){
    const modal = await this.modalController.create({
      component: ProductosItemModalPage,
      componentProps: {
        item:_item
      }
      // componentProps:{
      //   descripcion:item.descripcion,
      //   descripcion_larga:item.descripcion_larga,
      //   precio:item.precio,
      //   observacion:item.observacion,
      //   marca:item.marca,
      //   presentacion:item.presentacion,
      //   medida:item.medida,
      //   concentracion:item.concentracion
      // }
    });
    //this.listaProductos.closeSlidingItems();
    await modal.present();
    const {data} = await modal.onDidDismiss();
    //console.log(data);
    if (data!=null) {
      this.contadorCarrito +=data;
      this.colorCarrito = "primary";    
    }

    //this.router.navigateByUrl('/productos');
    // console.log(data._cantidad._cantidad);
    
  }

  async verCarrito(){
    this.contadorCarrito = null;
    this.colorCarrito = null;  
    this.router.navigateByUrl('/carrito');
  }

}
