import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { Usuario } from '../../interfaces/usuario/usuario';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {

  usuario:Usuario={};
  nome_token:string;
  constructor(private usuarioService:UsuarioService) { }

  ngOnInit() {
    // this.usuario = new Usuario();
    this.nome_token = localStorage.getItem('miCuenta.nome_token');
    //console.log(this.nome_token);
    // var contador:number = 0;
    this.usuarioService.show(this.nome_token,this.nome_token).subscribe(item=>{
      console.log("item: ");
      //console.log(item);
      this.usuario.name = item.items.name;
      this.usuario.email = item.items.email;
      this.usuario.cedula = item.items.cedula;
      this.usuario.celular = item.items.celular;
      this.usuario.password2 = item.items.password2;
    });
  }

  editar(){

  }

}
