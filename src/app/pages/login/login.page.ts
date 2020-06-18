import { Component, OnInit, ViewChild } from '@angular/core';
import { Usuario } from '../../interfaces/usuario/usuario';
// import { LoginService } from '../../services/login/login.service';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { Form } from '@angular/forms';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { AlertController, LoadingController, MenuController, ToastController } from '@ionic/angular';

import { AppComponent } from "../../app.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor( private usuarioService: UsuarioService,
               private router: Router, 
               private localNotifications: LocalNotifications,
               private loadingController: LoadingController,
               private appComponent: AppComponent,
               private menuController: MenuController,
               private toastController: ToastController,
               ) { }
  
  usuario: Usuario = {};
  // existe:boolean;
  @ViewChild('frmLogin',{static: false}) frmLogin: Form;
  
  ngOnInit() {
    //this.presentToast();
    this.menuController.enable(false);
    console.log(localStorage.getItem('miCuenta.nome_token'));
    if (localStorage.getItem('miCuenta.nome_token') != null) {
      this.router.navigateByUrl('/home');
    }

    this.usuarioService.hola().subscribe(data=>{
      console.log(data);
      
    },error=>{
      console.log("EERRP:",error);
      
    });
    
    // this.schedule();
  }

  async presentToast(_mensaje:string,_duracion:number) {
    const toast = await this.toastController.create({
      message: _mensaje,
      duration: _duracion,
      buttons: [
        {
          text: 'Cerrar',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ],
    });
    toast.present();
  }

  schedule(){
  
// Schedule a single notification
    this.localNotifications.schedule({
      id: 1,
      text: 'Noemy y Dolo',
      // sound: isAndroid? 'file://sound.mp3': 'file://beep.caf',
      data: { secret: "key" }
    });
    console.log("message");
    
  }

  
  async login(){

    // this.loginService.setlogin(this.usuario.email,this.usuario.password).subscribe(item=>{
    //   localStorage.setItem('miCuenta.nome_token',item.nome_token);
    //   this.router.navigateByUrl('/home');
    // });
    const loading = await this.loadingController.create({
      message: 'Espere un monento...',
      spinner: 'bubbles'
    });
    await loading.present();

    this.usuarioService.login(this.usuario.email,this.usuario.password).subscribe(item=>{
      try {
        if (item.items.nome_token!=null) {
          if (item.code =='200') {
            localStorage.setItem('miCuenta.nome_token',item.items.nome_token);
            localStorage.setItem('miCuenta.tipo.cod',item.items.tipo.cod)
            
            loading.dismiss();
            this.router.navigateByUrl('/home');
            console.log('ingresado: '+localStorage.getItem('miCuenta.nome_token')); 
            this.appComponent.menu();      
          } else {
            this.presentToast("El usuario o la contraceña son incorrectos",3000);
          }
           
        }
      } catch (error) {
        this.presentToast("El usuario o la contraceña son incorrectos",3000);
        loading.dismiss();
        this.router.navigateByUrl('/login');
      }
     
    },error=>{
      console.log(error);
      loading.dismiss();
      this.router.navigateByUrl('/login');
    });

  }

}
