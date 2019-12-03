import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { CarritoService } from 'src/app/services/carrito/carrito.service';
import { DetalleVenta } from 'src/app/interfaces/detalle-venta/detalle-venta';
import { Producto } from 'src/app/interfaces/producto/producto';
import { IonList, ModalController, AlertController, LoadingController } from '@ionic/angular';
import { CarritoItemModalPage } from '../carrito-item-modal/carrito-item-modal.page'; //add
import { Venta } from 'src/app/interfaces/venta/venta';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { UbicacionItemModalPage } from '../ubicacion-item-modal/ubicacion-item-modal.page';
import { Ubicacion } from 'src/app/interfaces/ubicacion/ubicacion';
import { Geolocation } from "@ionic-native/geolocation/ngx";

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit,OnDestroy {

  nome_token_user:string;
  items:DetalleVenta[]=[];

  _ubicacion:Ubicacion={};

  @ViewChild('listaCarrito',{static:false}) listaCarrito:IonList;

  constructor(private carritoService:CarritoService,
              private alertController:AlertController,
              private modalController:ModalController,
              private loadingController:LoadingController,
              private geolocation:Geolocation) { }

  ngOnInit() {
    this.filtro('');
  }

  ngOnDestroy(){
    this.filtro('');
  }

  async filtro(_value:string){

    const loading = await this.loadingController.create({
      message: 'Espere un monento...',
      // duration: 2000,
      spinner: 'bubbles'
    });
    await loading.present();

    this.nome_token_user = localStorage.getItem('miCuenta.nome_token');
    this.carritoService.filtro(this.nome_token_user,_value)
        .subscribe(
          item=>{
            this.items = item.items;
            loading.dismiss();
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
                  this.filtro("");
                },error=>{
                  console.log('error: ',error);
                  this.listaCarrito.closeSlidingItems();
                }
              );
            
            console.log('eliminacion confirmada');
            //==========================================
          }
        }
      ]
    });


    await alert.present();
    // console.log('hola');
    
    
  }

  async verModalUbicacion(){
    const modal = await this.modalController.create({
      component: UbicacionItemModalPage, //add
      // componentProps: {
      //   item:_item
      // }
    });
    await modal.present();
    const {data} = await modal.onDidDismiss();
    this._ubicacion = data; //obtenemos la ubicacion que escojio el usuario de la modal ubicacion y el valor se lo enviamos la la variable ubicacion
    console.log(this._ubicacion);
    if (this._ubicacion.longitud!=null) {
      this.generar_pedido2();
    }
    
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

  async escojerUbicacion() {
    const alert = await this.alertController.create({
      header: 'Lugar de Entrega',
      inputs: [
        {
          name: 'btnRadioUBiActual',
          type: 'radio',
          label: 'Ubicacion Actual',
          value: 'actual',
          checked: true
        },
        {
          name: 'btnRadioUBiNueva',
          type: 'radio',
          label: 'Nueva',
          value: 'nueva'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (input) => {
            console.log('Confirm Ok',input);
            if (input=="actual") {
              this.guardarUBiActual();
            }else if (input=="nueva") {
              this.verModalUbicacion();
              // this.generar_pedido2();  //no lo utilizo aqui porque el metodo verModalUbicacion es async y cuando abro la modal se genera la venta y no cuando se preciona el boton guardar
            } 
          }
        }
      ]
    });

    await alert.present();
  }

  async generar_pedido2(){
    //obtener el token del usuario logeado.
    this.nome_token_user = localStorage.getItem('miCuenta.nome_token');
    let _venta:Venta = {};
    _venta.nome_token_cliente = this.nome_token_user;
    _venta.subtotal = '0';
    _venta.total = '0';
    // _venta.ubicacion_descripcion="";
    _venta.ubicacion_latitud=this._ubicacion.latitud;
    _venta.ubicacion_longitud=this._ubicacion.longitud;
   
    if (this._ubicacion!=null) {
      console.log("entro al if");
      
      this.carritoService.generar_venta(this.nome_token_user,_venta)
            .subscribe(
              item=>{
  
                _venta = item.items;
                console.log('se genero la venta en cero',_venta.id); 
                this.carritoService.generar_pedido(this.nome_token_user,item.items) 
                      .subscribe(
                        item=>{
                          console.log('se genero el pedido:',item);
                          this.filtro('');
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
   
    const alert = await this.alertController.create({
      header: 'Confirmar!',
      message: 'Desea realizar el Pedido?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Okay');

            this.carritoService.generar_venta(this.nome_token_user,_venta)
            .subscribe(
              item=>{
  
                _venta = item.items;
                console.log('se genero la venta en cero',_venta.id); 
                this.carritoService.generar_pedido(this.nome_token_user,item.items) 
                      .subscribe(
                        item=>{
                          console.log('se genero el pedido:',item);
                          this.filtro('');
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
      ]
    });
  
    await alert.present();
    


 
  }

////////////////////////encontrar ubicacion actual///////////////////////////////////////////

  async guardarUBiActual(){

    const myLatLog = await this.getLocation();
    console.log(myLatLog);
    
    this._ubicacion.latitud= myLatLog.lat;
    this._ubicacion.longitud = myLatLog.lng;
    if (this._ubicacion.longitud != null) {
      this.generar_pedido2();
    }
    
    

  }

  private async getLocation(){
    
    const rta = await this.geolocation.getCurrentPosition();
    return  {
      lat: rta.coords.latitude,
      lng: rta.coords.longitude
    };
  }

  ////////////////////fin de encontrar ubicacion actual//////////////////////////////////////////////////////////////

}
