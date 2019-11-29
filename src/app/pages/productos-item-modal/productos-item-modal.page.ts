import { Component, OnInit, Input } from '@angular/core';

import { ModalController, AlertController } from '@ionic/angular';
import { Producto } from 'src/app/interfaces/producto/producto';

import { CarritoService } from "src/app/services/carrito/carrito.service";
import { DetalleVenta } from "src/app/interfaces/detalle-venta/detalle-venta";


@Component({
  selector: 'app-productos-item-modal',
  templateUrl: './productos-item-modal.page.html',
  styleUrls: ['./productos-item-modal.page.scss'],
})
export class ProductosItemModalPage implements OnInit {
  
  @Input() item: Producto={};

  newItemCarrito:DetalleVenta={};

  constructor(private modalController:ModalController,
              private alertController:AlertController,
              private carritoService:CarritoService) { }

  ngOnInit() {
  }

  async salir(){
    this.modalController.dismiss();
  }

  async add(){
    const alert = await this.alertController.create({
      header: 'Elija la cantidad!',
      // message:'hola',
      inputs: [
        {
          name: '_cantidad',
          type: 'number',
          value: 1,
          min: 1,
          max: this.item.cantidad
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (input) => {
            console.log('Confirm Ok');

            this.newItemCarrito.cantidad   = input._cantidad;
            this.newItemCarrito.idproducto = this.item.id;
            // this.itemCarrito.precio_u   = this.item.precio;
            const nome_token_user =localStorage.getItem('miCuenta.nome_token');
            this.carritoService.store(nome_token_user,this.newItemCarrito)
                .subscribe(
                  data=>{
                    //console.log(data);
                    this.modalController.dismiss(1);
                  },
                  error=>{
                    console.log(error);
                  }
                );
            // const _item = this.item;
            // this.modalController.dismiss({ _item,_cantidad});
          }
        }
      ]
    });

    await alert.present();

    // this.modalController.dismiss(_item);
  }

}
