import { Component, OnInit, ViewChild } from '@angular/core';
import { CarritoService } from 'src/app/services/carrito/carrito.service';
import { DetalleVenta } from 'src/app/interfaces/detalle-venta/detalle-venta';
import { Producto } from 'src/app/interfaces/producto/producto';
import { IonList, ModalController, AlertController } from '@ionic/angular';
import { CarritoItemModalPage } from '../carrito-item-modal/carrito-item-modal.page'; //add
import { Venta } from 'src/app/interfaces/venta/venta';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {

  nome_token_user:string;
  items:DetalleVenta[]=[];
  @ViewChild('listaCarrito',{static:false}) listaCarrito:IonList;

  constructor(private carritoService:CarritoService,
              private usuarioService:UsuarioService,
              private alertController:AlertController,
              private modalController:ModalController) { }

  ngOnInit() {
    this.filtro('');
  }

  async filtro(_value:string){
    this.nome_token_user = localStorage.getItem('miCuenta.nome_token');
    this.carritoService.filtro(this.nome_token_user,_value)
        .subscribe(
          item=>{
            this.items = item.items;
          },error=>{
            console.log(error);
          });
  }

  async eliminar(_item:DetalleVenta){

    const alert = await this.alertController.create({
      header: 'Esta seguro?',
      message: 'que desea eliminar',
      buttons: [
        {
          text:'Cancelar',
          role:'cancel',
          cssClass:'secondary',
          handler: () => {
            console.log('confirmar salida');
          }
        },
        {
          text:'Ok',
          handler: ()=>{
            // =================Eliminar========================
            this.nome_token_user = localStorage.getItem('miCuenta.nome_token');
            this.carritoService.delete(this.nome_token_user,_item)
              .subscribe(
                item=>{
                  console.log('hola');
                },error=>{console.log('error: ',error);}
              );
            this.listaCarrito.closeSlidingItems();
            console.log('eliminacion confirmada');
            //==========================================
          }
        }
      ]
    });


    await alert.present();
    // console.log('hola');
    
    
  }

  async verItem(_item:Producto){
    const modal = await this.modalController.create({
      component: CarritoItemModalPage, //add
      componentProps: {
        item:_item
      }
    });
    this.listaCarrito.closeSlidingItems();
    await modal.present();
  }

  async generar_pedido(){
    //obtener el token del usuario logeado.
    this.nome_token_user = localStorage.getItem('miCuenta.nome_token');
    //creo un objeto de tipo venta y lleno los campos correspondientes...
    // let _venta:Venta={
    //   'idcliente' : localStorage.getItem('miCuenta.id'),
    //   'subtotal'  : '0',
    //   'total'     : '0'
    // };
    let _venta:Venta = {};
    // _venta.idcliente =  localStorage.getItem('miCuenta.id');
    _venta.nome_token_cliente = localStorage.getItem("miCuenta.nome_token");
    _venta.subtotal = '0';
    _venta.total = '0';

    // console.log(_venta);
    // const _pedido:Venta ={};

    this.carritoService.generar_venta(this.nome_token_user,_venta)
          .subscribe(
            item=>{

              _venta = item.items;
              console.log('se genero la venta en cero',_venta.id); 
              this.carritoService.generar_pedido(this.nome_token_user,item.items) 
                    .subscribe(
                      item=>{
                        console.log('se genero el pedido:',item);
                      },error=>{
                        console.log('error al generar el pedido: ',error);
                      }
                    );
                    
            },error=>{
              console.log('error al generar venta en cero ',error);
            }
          );
  }



}
