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

  constructor( private dbEntity: LoginService, private router:Router) { }
  usuario:Usuario={};
  // existe:boolean;

  ngOnInit() {
  }

  login(){

    // this.dbEntity.setlogin(this.usuario.email,this.usuario.password).subscribe(item=>{
    //   localStorage.setItem('miCuenta.nome_token',item.nome_token);
    //   this.router.navigateByUrl('/home');
    // });

    this.dbEntity.setlogin(this.usuario.email,this.usuario.password).subscribe(item=>{
      localStorage.setItem('miCuenta.nome_token',item.items.nome_token);
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
