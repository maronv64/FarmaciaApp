import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/services/carrito/carrito.service';
import { DetalleVenta } from 'src/app/interfaces/detalle-venta/detalle-venta';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {

  nome_token_user:string;
  items:DetalleVenta[]=[];


  constructor(private dbEntity:CarritoService) { }

  ngOnInit() {
    this.filtro('');
  }

  async filtro(_value:string){
    this.nome_token_user = localStorage.getItem('miCuenta.nome_token');
    this.dbEntity.filtro(this.nome_token_user,_value)
        .subscribe(
          item=>{
            this.items = item.items;
          },error=>{
            console.log(error);
          });
  }

}
