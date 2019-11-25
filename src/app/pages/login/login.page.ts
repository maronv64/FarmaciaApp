import { Component, OnInit, ViewChild } from '@angular/core';
import { Usuario } from '../../interfaces/usuario/usuario';
// import { LoginService } from '../../services/login/login.service';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { Form } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor( private usuarioService: UsuarioService, private router:Router) { }
  usuario:Usuario={};
  // existe:boolean;
  @ViewChild('frmLogin',{static:false}) frmLogin:Form;
  
  ngOnInit() {
    console.log(localStorage.getItem("miCuenta.nome_token"));
    if (localStorage.getItem("miCuenta.nome_token")!=null) {
      this.router.navigateByUrl("/productos");
    }
  }

  login(){

    // this.loginService.setlogin(this.usuario.email,this.usuario.password).subscribe(item=>{
    //   localStorage.setItem('miCuenta.nome_token',item.nome_token);
    //   this.router.navigateByUrl('/home');
    // });

    this.usuarioService.login(this.usuario.email,this.usuario.password).subscribe(item=>{
      //guardando en una variable global el token del usuario
      localStorage.setItem('miCuenta.nome_token',item.items.nome_token);
      // localStorage.setItem('miCuenta.id',item.items.id);
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
