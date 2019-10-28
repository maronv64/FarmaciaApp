import { Component, OnInit, Input } from '@angular/core';
import { DetalleVenta } from 'src/app/interfaces/detalle-venta/detalle-venta';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-carrito-item-modal',
  templateUrl: './carrito-item-modal.page.html',
  styleUrls: ['./carrito-item-modal.page.scss'],
})
export class CarritoItemModalPage implements OnInit {

  @Input() item: DetalleVenta={};


  constructor(private modalController:ModalController) { }

  ngOnInit() {
  }
  async salir(){
    this.modalController.dismiss();
  }
}
