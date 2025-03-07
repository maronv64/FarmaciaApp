import { Component, Input} from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { UsuarioService } from "src/app/services/usuario/usuario.service";
import { Router } from '@angular/router';
// import { Usuario } from './interfaces/usuario';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  // @Input() mi_usuario:Usuario={name:"maronv64"};

  public appPages = [
    // {
    //   title: 'Home',
    //   url: '/home',
    //   icon: 'home'
    // },
    // {
    //   title: 'Mi Perfil',
    //   url: '/usuario',
    //   icon: 'person'
    // },
    // {
    //   title: 'Productos',
    //   url: '/productos',
    //   icon: 'medkit'
    // },
    // {
    //   title: 'Carrito',
    //   url: '/carrito',
    //   icon: 'cart'
    // },
    // {
    //   title: 'Mis Compras',
    //   url: '/miscompras',
    //   icon: 'pricetags'
    // },
    // {
    //   title: 'Mis Entregas',
    //   url: '/misentregas',
    //   icon: 'car'
    // },
    // {
    //   title: 'Ubicacion',
    //   url: '/ubicacion',
    //   icon: 'list'
    // },
    {
      title: 'Configuracion',
      url: '/configuracion',
      icon: 'settings'
    }
    // {
    //   title: 'List',
    //   url: '/list',
    //   icon: 'list'
    // }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private usuarioService:UsuarioService,
    private router:Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    this.menu();
  }

  irA(_ruta:string){
    this.router.navigateByUrl(_ruta);
  }

  menu(){
    const rutasTodo = [
      {
        title: 'Productos',
        url: '/productos',
        icon: 'medkit'
      },
      {
        title: 'Carrito',
        url: '/carrito',
        icon: 'cart'
      },
      {
        title: 'Mis Compras',
        url: '/miscompras',
        icon: 'pricetags'
      },
      {
        title: 'Mis Entregas',
        url: '/misentregas',
        icon: 'car'
      },
      {
        title: 'Configuracion',
        url: '/configuracion',
        icon: 'settings'
      }
    ];

    const rutasCliente = [

      {
        title: 'Productos',
        url: '/productos',
        icon: 'medkit'
      },
      {
        title: 'Carrito',
        url: '/carrito',
        icon: 'cart'
      },
      {
        title: 'Mis Compras',
        url: '/miscompras',
        icon: 'pricetags'
      },
      {
        title: 'Configuracion',
        url: '/configuracion',
        icon: 'settings'
      }
    ];

    const rutasCourier = [
      {
        title: 'Mis Entregas',
        url: '/misentregas',
        icon: 'car'
      },
      {
        title: 'Configuracion',
        url: '/configuracion',
        icon: 'settings'
      }
    ];

    const miCuenta_tipo_cod= localStorage.getItem("miCuenta.tipo.cod");
    
    if (miCuenta_tipo_cod=="003") {
      this.appPages= rutasCourier;
    }
    // else{
    //   this.appPages= rutasCliente;
    // }
    if (miCuenta_tipo_cod=="004") {
      this.appPages= rutasCliente;
    }
    if (miCuenta_tipo_cod=="001") {
      //console.log(item.items.tipo.cod );      
      this.appPages= rutasTodo;
    }
  }

}
