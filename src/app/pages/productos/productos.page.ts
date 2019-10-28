import { Component, OnInit, ViewChild } from '@angular/core';

import { Router } from '@angular/router';
import { ProductoService } from "src/app/services/producto/producto.service";

import { Producto } from "src/app/interfaces/producto/producto";
import { ProductoResult } from "src/app/interfaces/producto/producto-result";
import { ProductosResult } from "src/app/interfaces/producto/productos-result";
import { IonList, ModalController } from '@ionic/angular';
import { ProductoModalPage } from '../producto-modal/producto-modal.page';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {

  constructor(private dbEntity: ProductoService, 
              private router:Router, 
              private modalController:ModalController) {
  }

  _request:Producto={};
  items:Producto[];
  nome_token_user:string;

  @ViewChild('listaProductos',{static:false}) listaProductos:IonList;

  ngOnInit() {
    this.filtroProductos('');
    // console.log("recibido:"+localStorage.getItem('Usuario.name'));
  }
  async filtroProductos(_nome_token:string){
    this._request.nome_token = _nome_token;
    this.nome_token_user = localStorage.getItem('miCuenta.nome_token');
    this.dbEntity.filtro(this.nome_token_user,this._request).subscribe(
      item=>{
        this.items = item.items;
        console.log(this.items);
      },error=>{
        console.log(error);
      }
    );

  }

  async verItem(_item:Producto){
    const modal = await this.modalController.create({
      component: ProductoModalPage,
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
    this.listaProductos.closeSlidingItems();
    await modal.present();
    const {data} = await modal.onDidDismiss();
    this.router.navigateByUrl('/productos');
    // console.log(data._cantidad._cantidad);
    
  }

}
