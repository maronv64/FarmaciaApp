import { Component, OnInit, Input } from '@angular/core';
import { Venta } from 'src/app/interfaces/venta/venta';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-miscompras-item-modal',
  templateUrl: './miscompras-item-modal.page.html',
  styleUrls: ['./miscompras-item-modal.page.scss'],
})
export class MiscomprasItemModalPage implements OnInit {

  @Input() item:Venta={};
  constructor( private modalController:ModalController) { }

  ngOnInit() {
  }

  async salir(){
    this.modalController.dismiss();
  }

}
