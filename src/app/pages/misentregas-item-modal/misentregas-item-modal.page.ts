import { Component, OnInit, Input } from '@angular/core';
import { Venta } from 'src/app/interfaces/venta/venta';
import { ModalController } from '@ionic/angular';
import { modalController } from '@ionic/core';

@Component({
  selector: 'app-misentregas-item-modal',
  templateUrl: './misentregas-item-modal.page.html',
  styleUrls: ['./misentregas-item-modal.page.scss'],
})
export class MisentregasItemModalPage implements OnInit {

  @Input() item:Venta={};
  constructor(modalController:ModalController) { }

  ngOnInit() {
  }

  salir(){
    modalController.dismiss();
  }

}
