import { Component, OnInit, ViewChild } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario/usuario';
import { Form, Validator } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private usuarioService:UsuarioService,
              private router:Router,
              private alertController:AlertController,
              private validator:Validator) { }
  usuario:Usuario={};
  nome_token_user:string='';


  @ViewChild('frmRegister',{static:false}) frmRegister:Form;

  ngOnInit() {
  }

  async register(){
    // this.nome_token_user = localStorage.getItem("miCuenta.nome_token");
    this.usuarioService.register(this.usuario)
        .subscribe(item=>{
          localStorage.setItem("miCuenta.nome_token",item.items.nome_token);
          console.log(localStorage.getItem("miCuenta.nome_token"));
          
          this.router.navigateByUrl("/productos");
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

}
