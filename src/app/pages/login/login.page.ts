import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../interfaces/usuario/usuario';
import { LoginService } from '../../services/login/login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor( private loginService: LoginService, private router:Router) { }
  usuario:Usuario={};
  // existe:boolean;

  ngOnInit() {
  }

  login(){

    // this.loginService.setlogin(this.usuario.email,this.usuario.password).subscribe(item=>{
    //   localStorage.setItem('miCuenta.nome_token',item.nome_token);
    //   this.router.navigateByUrl('/home');
    // });

    this.loginService.setlogin(this.usuario.email,this.usuario.password).subscribe(item=>{
      //guardando en una variable global el token del usuario
      localStorage.setItem('miCuenta.nome_token',item.items.nome_token);
      localStorage.setItem('miCuenta.id',item.items.id);
      // localStorage.setItem('miCuenta.id')
      // this.router.navigateByUrl('/home');
      console.log(item);
      if (item.items.nome_token!=null) {
        this.router.navigateByUrl('/home');
        console.log('ingresado: '+localStorage.getItem('miCuenta.nome_token'));        
      }
    },error=>{
      console.log(error);
    });

  }

}
