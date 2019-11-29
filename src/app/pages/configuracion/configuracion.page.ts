import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.scss'],
})
export class ConfiguracionPage implements OnInit {

  constructor(private alertController:AlertController,private router:Router) { }

  ngOnInit() {
  }

  async cerrarSesion() {
    const alert = await this.alertController.create({
      header: 'Sesion!',
      message: 'Desea cerrar la sesion?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Ok',
          handler: () => {
            // console.log('Confirm Okay');
            localStorage.removeItem("miCuenta.nome_token");
            this.router.navigateByUrl("/login");
          }
        }
      ]
    });
  
    await alert.present();
  }

}
