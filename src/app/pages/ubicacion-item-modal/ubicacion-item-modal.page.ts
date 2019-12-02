import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Ubicacion } from 'src/app/interfaces/ubicacion/ubicacion';

@Component({
  selector: 'app-ubicacion-item-modal',
  templateUrl: './ubicacion-item-modal.page.html',
  styleUrls: ['./ubicacion-item-modal.page.scss'],
})
export class UbicacionItemModalPage implements OnInit {

  _ubicacion:Ubicacion={};

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  guardarUBi(){
    this._ubicacion.latitud= -1.222;
    this._ubicacion.longitud = -3.00;
    this.modalController.dismiss(this._ubicacion);
  }

  salir(){
    this.modalController.dismiss();
  }


}
