import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
// import { UsuarioService } from 'src/app/services/usuario/usuario.service';
// import { Usuario } from 'src/app/interfaces/usuario/usuario';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.scss'],
})
export class ConfiguracionPage implements OnInit {

  constructor(private alertController: AlertController,
              private router: Router,
              ) { }

  ngOnInit() {
  }

  // nome_token_user: string="";
  // usuario:Usuario={};



  async cerrarSesion() {
    
    // this.nome_token_user = localStorage.getItem('miCuenta.nome_token');
    // console.log(this.nome_token_user);
    
    // this.usuarioService.show(this.nome_token_user,this.nome_token_user).subscribe(
    //   item=>{
    //     console.log(item.items.name);
    //     this.usuario.name = item.items.name;
    //   },error=>{
    //     console.log(error);
    // });

    
    const alert = await this.alertController.create({
      header: `Sesion`,
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
