import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { ProductoService } from "src/app/services/producto/producto.service";

import { Producto } from "src/app/interfaces/producto/producto";
import { ProductoResult } from "src/app/interfaces/producto/producto-result";
import { ProductosResult } from "src/app/interfaces/producto/productos-result";

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {

  constructor(private dbEntity: ProductoService, private router:Router) {
    this.filtroProductos('');
  }

  _request:Producto={};
  items:Producto[];
  nome_token_user:string;

  ngOnInit() {
    // console.log("recibido:"+localStorage.getItem('Usuario.name'));
  }
  filtroProductos(_nome_token:string){
    this._request.nome_token = _nome_token;
    this.nome_token_user = localStorage.getItem('miCuenta.nome_token');
    this.dbEntity.filtro(this.nome_token_user,this._request).subscribe(
      item=>{
        this.items = item.items;
        console.log(this.items);
      },error=>{
        console.log(error);
      }
    );

  }

}
