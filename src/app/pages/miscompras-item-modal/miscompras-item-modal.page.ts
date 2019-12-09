import { Component, OnInit, Input } from '@angular/core';
import { Venta } from 'src/app/interfaces/venta/venta';
import { ModalController, AlertController } from '@ionic/angular';
import { ComprasService } from 'src/app/services/compras/compras.service';

@Component({
  selector: 'app-miscompras-item-modal',
  templateUrl: './miscompras-item-modal.page.html',
  styleUrls: ['./miscompras-item-modal.page.scss'],
})
export class MiscomprasItemModalPage implements OnInit {

  @Input() item:Venta={};
  constructor(  private modalController:ModalController,
                private comprasService:ComprasService,
                private alertController: AlertController) { }

  ngOnInit() {
  }

  nome_token_user:string='';

  async salir(){
    this.modalController.dismiss(0);
  }

  async generarFactura(_item:Venta) {
    this.nome_token_user = localStorage.getItem('miCuenta.nome_token');
    const alert = await this.alertController.create({
      header: 'Mensaje',
      message: 'Al generar la factura se procedera a finalizar la entrega del pedido, está de acuerdo con esto?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel: blah');
            this.modalController.dismiss(0);
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Okay');
            this.nome_token_user = localStorage.getItem('miCuenta.nome_token');
            this.comprasService.finalizar_venta(this.nome_token_user,_item).subscribe(
              item=>{
                this.modalController.dismiss(1);
              },error=>{
                this.modalController.dismiss(0);
              });
          }
        }
      ]
    });
  
    await alert.present();
  }

}
