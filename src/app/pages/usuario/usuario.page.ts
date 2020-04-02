import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { Usuario } from '../../interfaces/usuario/usuario';
import { AlertController } from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {

  //usuario:Usuario={};
  nome_token_user:string;
  inputType:string='password';
  newcolor:string=null;

  constructor(private usuarioService:UsuarioService,
              private alertController: AlertController) { 
    this.formUsuario = new FormGroup({
      
      _name       : new FormControl('',Validators.required),
      _email      : new FormControl('',Validators.required),
      _cedula     : new FormControl('',Validators.required),
      _celular    : new FormControl('',Validators.required),
      _password   : new FormControl(''),
      _password2  : new FormControl('',Validators.required),
      _nome_token : new FormControl('',Validators.required),
    });
    
  }

  formUsuario:FormGroup;

  ngOnInit() {
    this.traerUsuario();
  }

  async traerUsuario(){
    // this.usuario = new Usuario();
    this.nome_token_user = localStorage.getItem('miCuenta.nome_token');
    //console.log(this.nome_token);
    // var contador:number = 0;
    this.usuarioService.show(this.nome_token_user,this.nome_token_user).subscribe(item=>{
       //console.log("item: ",this.usuario);
      //console.log(item);
      // this.usuario.name = item.items.name;
      // this.usuario.email = item.items.email;
      // this.usuario.cedula = item.items.cedula;
      // this.usuario.celular = item.items.celular;
      // this.usuario.password2 = item.items.password2;

      this.formUsuario.get('_name')       .setValue(item.items.name);
      this.formUsuario.get('_email')      .setValue(item.items.email);
      this.formUsuario.get('_cedula')     .setValue(item.items.cedula);
      this.formUsuario.get('_celular')     .setValue(item.items.celular);
      // this.formUsuario.get('_password')   .setValue(item.items.password);
      this.formUsuario.get('_password2')  .setValue(item.items.password2);
      this.formUsuario.get('_nome_token') .setValue(item.items.nome_token);



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
            //console.log(this.usuario);
            let usuario:Usuario={
              name       :  this.formUsuario.get('_name').value  ,
              email      : this.formUsuario.get('_email').value ,
              cedula     : this.formUsuario.get('_cedula').value,  
              celular    : this.formUsuario.get('_celular').value,
              password2  : this.formUsuario.get('_password2').value,

              password   : this.formUsuario.get('_password2').value,
              nome_token : this.formUsuario.get('_nome_token').value,
            };
            // this.usuario.name       = this.formUsuario.get('_name').value  ;
            // this.usuario.email      = this.formUsuario.get('_email').value ;
            // this.usuario.cedula     = this.formUsuario.get('_cedula').value;  
            // this.usuario.celular    = this.formUsuario.get('_celular').value;
            // this.usuario.password2  = this.formUsuario.get('_password2').value;

            // this.usuario.password   = this.formUsuario.get('_password2').value;
            // this.usuario.nome_token = this.formUsuario.get('_nome_token').value;
            
            this.usuarioService.update(this.nome_token_user,usuario).subscribe(
              item=>{
                // console.log(item);
                this.traerUsuario();
                console.log(usuario);
                
                
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

  hola(){
    console.log('hola');
    
  }

}
