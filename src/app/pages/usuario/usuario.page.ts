import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { Usuario } from '../../interfaces/usuario/usuario';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {

  usuario:Usuario={};
  nome_token_user:string;
  inputType:string='password';
  newcolor:string=null;

  constructor(private usuarioService:UsuarioService,
              private alertController: AlertController) { }

  ngOnInit() {
    this.traerUsuario();
  }

  async traerUsuario(){
    // this.usuario = new Usuario();
    this.nome_token_user = localStorage.getItem('miCuenta.nome_token');
    //console.log(this.nome_token);
    // var contador:number = 0;
    this.usuarioService.show(this.nome_token_user,this.nome_token_user).subscribe(item=>{
      console.log("item: ",this.usuario.name);
      //console.log(item);
      this.usuario.name = item.items.name;
      this.usuario.email = item.items.email;
      this.usuario.cedula = item.items.cedula;
      this.usuario.celular = item.items.celular;
      this.usuario.password2 = item.items.password2;
    },error=>{
      console.log(error);
    });
  }

  async editar() {
    const alert = await this.alertController.create({
      header: 'Alerta!',
      message: 'Desea editar su perfil?',
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
            console.log('Confirm Okay');
            this.nome_token_user = localStorage.getItem('miCuenta.nome_token');
            console.log(this.usuario);
            this.usuario.password = this.usuario.password2;
            this.usuarioService.update(this.nome_token_user,this.usuario).subscribe(
              item=>{
                // console.log(item);
                this.traerUsuario();
              },error=>{
                console.log(error);
                
              });
          }
        }
      ]
    });
  
    await alert.present();
  }

  contador:string='0';
  verPassword(){
    if (this.contador=='0') {
      this.inputType="text";
      this.contador='1';
      this.newcolor='primary';
    }else if(this.contador=='1'){
      this.inputType="password";
      this.contador='0';
      this.newcolor=null;
    }

  }

}
