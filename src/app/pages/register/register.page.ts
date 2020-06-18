import { Component, OnInit, ViewChild } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario/usuario';
import { Form } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { Router } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private usuarioService:UsuarioService,
              private router:Router,
              private alertController:AlertController,
              private menuController:MenuController,
              private appComponent: AppComponent,
              ) { }
  usuario:Usuario={};
  nome_token_user:string='';


  @ViewChild('frmRegister',{static:false}) frmRegister:Form;

  ngOnInit() {
    this.menuController.enable(false);
  }

  async register(){
    // this.nome_token_user = localStorage.getItem("miCuenta.nome_token");
    this.usuarioService.register(this.usuario)
        .subscribe(item=>{
          localStorage.setItem("miCuenta.nome_token",item.items.nome_token);
          localStorage.setItem('miCuenta.tipo.cod',item.items.tipo.cod)
          console.log(localStorage.getItem("miCuenta.nome_token"));

          // console.log('cuenta',item);
          
          this.appComponent.menu();
          this.router.navigateByUrl("/home");
        },error=>{
          this.presentAlert();
        });
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Error',
      subHeader: 'verifica los campos a ingresar...',
      message: 'Intenta nuevamente',
      buttons: [{
        text:'ok',
        handler:(input)=>{
          this.router.navigateByUrl("/register");
        }
      }]
    });
  
    await alert.present();
  }

  login(){}

}
