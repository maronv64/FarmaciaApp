import { Component, Input} from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
// import { Usuario } from './interfaces/usuario';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  // @Input() mi_usuario:Usuario={name:"maronv64"};

  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Mi Perfil',
      url: '/usuario',
      icon: 'person'
    },
    {
      title: 'Productos',
      url: '/productos',
      icon: 'pricetags'
    },
    {
      title: 'Carrito',
      url: '/carrito',
      icon: 'cart'
    },
    {
      title: 'Mis Compras',
      url: '/miscompras',
      icon: 'cart'
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
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
