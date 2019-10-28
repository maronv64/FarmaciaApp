import { Component, OnInit, ViewChild } from '@angular/core';
import { CarritoService } from 'src/app/services/carrito/carrito.service';
import { DetalleVenta } from 'src/app/interfaces/detalle-venta/detalle-venta';
import { Producto } from 'src/app/interfaces/producto/producto';
import { IonList, ModalController } from '@ionic/angular';
import { CarritoItemModalPage } from '../carrito-item-modal/carrito-item-modal.page'; //add

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {

  nome_token_user:string;
  items:DetalleVenta[]=[];
  @ViewChild('listaCarrito',{static:false}) listaCarrito:IonList;

  constructor(private dbEntity:CarritoService,
              private modalController:ModalController) { }

  ngOnInit() {
    this.filtro('');
  }

  async filtro(_value:string){
    this.nome_token_user = localStorage.getItem('miCuenta.nome_token');
    this.dbEntity.filtro(this.nome_token_user,_value)
        .subscribe(
          item=>{
            this.items = item.items;
          },error=>{
            console.log(error);
          });
  }

  async eliminar(_item:DetalleVenta){
    this.nome_token_user = localStorage.getItem('miCuenta.nome_token');
    this.dbEntity.delete(this.nome_token_user,_item)
      .subscribe(
        item=>{
          console.log('hola');
        },error=>{console.log('error: ',error);}
      );
    this.listaCarrito.closeSlidingItems();

    // console.log('hola');
    
    
  }

  async verItem(_item:Producto){
    const modal = await this.modalController.create({
      component: CarritoItemModalPage, //add
      componentProps: {
        item:_item
      }
    });
    this.listaCarrito.closeSlidingItems();
    await modal.present();
  }

}
