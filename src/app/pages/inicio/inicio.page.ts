import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private router:Router,
              private menuController:MenuController
              ) { }

  ngOnInit() {
    this.menuController.enable(false);
  }

  startApp(){
    if (localStorage.getItem("miCuente.nome_token")==null) {
      console.log(localStorage.getItem("miCuente.nome_token"));
      
      this.router.navigateByUrl("/login");
    }else{
      this.router.navigateByUrl("/home");
    }
    // this.router.navigateByUrl('/home');
  }

}
