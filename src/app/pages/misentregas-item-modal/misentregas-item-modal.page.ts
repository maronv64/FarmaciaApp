import { Component, OnInit, Input } from '@angular/core';
import { Venta } from 'src/app/interfaces/venta/venta';
import { ModalController, AlertController, LoadingController } from '@ionic/angular';
import { modalController } from '@ionic/core';
import { EntregasService } from 'src/app/services/entregas/entregas.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
// import { Router } from '@angular/router';

declare var google;

@Component({
  selector: 'app-misentregas-item-modal',
  templateUrl: './misentregas-item-modal.page.html',
  styleUrls: ['./misentregas-item-modal.page.scss'],
})
export class MisentregasItemModalPage implements OnInit {

  map=null;
  @Input() item:Venta={};
  nome_token_user:string='';

  constructor(private modalController:ModalController,
              private alertController: AlertController,
              private loadingController: LoadingController,
              private entregasService: EntregasService,
              private geolocation: Geolocation
              // private router: Router
              ) { }

  ngOnInit() {
  }

  salir(){
    modalController.dismiss();
  }
  cont:number=0;
   verUbicacionCliente(){
    if (this.cont==0) {
      document.getElementById("detalleEntrega").hidden=true;
      document.getElementById("map_ubi_cliente").hidden=false;
      this.loadMap();
      this.cont=1;
    }else if(this.cont==1){
      document.getElementById("detalleEntrega").hidden=false;
      document.getElementById("map_ubi_cliente").hidden=true;
      this.cont=0;
    }
  }

  async mensaje() {
    const alert = await this.alertController.create({
      header: 'Mensaje',
      // subHeader: 'Error:',
      message: 'Por el momento no puedes rechazar el pedio...',
      buttons: ['OK']
    });
  
    await alert.present();
  }
  
  async rechazarPedido(item:Venta) {
    const alert = await this.alertController.create({
      header: 'Pedido',
      message: 'Desea rechazar el pedido?',
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
            this.nome_token_user = localStorage.getItem('miCuenta.nome_token');
            this.entregasService.rechazar_entrega(this.nome_token_user,item).subscribe(item=>{
              if (item.code=="418") {
                this.mensaje();
                modalController.dismiss(0);
              } else{
                modalController.dismiss(1);
              }
               
               
            },error=>{});
          }
        }
      ]
    });
  
    await alert.present();
  }

  async aceptarPedido() {
    const alert = await this.alertController.create({
      header: 'Pedido',
      message: 'Desea aceptar el pedido?',
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
            modalController.dismiss();
          }
        }
      ]
    });
  
    await alert.present();
  }

  async generarFactura(item) {
    this.nome_token_user = localStorage.getItem('miCuenta.nome_token');
    const alert = await this.alertController.create({
      header: 'Mensaje',
      message: 'Al generar la factura se procedera a finalizar la entrega del pedido, está de acuerdo con esto?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel: blah');
            modalController.dismiss(0);
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Okay');
            this.entregasService.finalizar_venta(this.nome_token_user,item).subscribe(
              item=>{
                modalController.dismiss(1);
              },error=>{
                modalController.dismiss(0);
              });
          }
        }
      ]
    });
  
    await alert.present();
  }
  
  lati:number=null;
  longi:number=null;
  
  async loadMap(){
    //////////////////////////////////////////////////////////////////////////////////////////
    const loading = await this.loadingController.create({
      message:'espere por favor...',
      spinner:'bubbles',
      duration:1000
    });
    loading.present();
    /////////////////////////////////////////////////////////////////////////////////////////
    this.lati=    Number(this.item.ubicacion_latitud);
    this.longi =  Number(this.item.ubicacion_longitud);
    console.log(this.lati,this.longi);
    
    // const myLatLog = await this.getLocation();
    //console.log("coordenadas de inicio",myLatLog);
    const mapEle:HTMLElement = document.getElementById('map_ubi_cliente'); // en esta linea construye el mapa en el div
    this.map = new google.maps.Map(mapEle,{
      center: {lat:this.lati,lng:this.longi}, 
      zoom:15,
    });
    
    // este controlador de evento se dipara cuando se  el mapa  esta activo, llamo a la funcion addMarker
    const myLatLog = await this.getLocation();
    google.maps.event.addListenerOnce(this.map,'idle',(data)=>{
       
      loading.dismiss();
      // this.markers.push(marker);
      // this.addMarker(this.lati,this.longi,google);
      // this.addMarker(myLatLog.lat,myLatLog.lng,google);
    });
   
    await this.trazarRuta(myLatLog,{lat:this.lati,lng:this.longi},google);

    // const start = this.markers[0].position;
    // const end = this.markers[1].position;
    // const request = {
    //   origin: start,
    //   destination: end,
    //   travelMode: 'DRIVING'
    // };
    
    console.log(this.markers);
    


  }
  /////////////////////////////////////Construir el marker//////////////////////////////////////////////////////////////
  // se envia las cordenadas para construir el marker y 
  //tambien la variable google para hacer modificaciones al mapa..
  private markers:any[]=[];
  private trazarRuta(start,end,google){
  
    
    // var iconBase = {

    //   url: '/assets/img/logocruzazul_logo.png',
    //   // This marker is 20 pixels wide by 32 pixels high.
    //   size: new google.maps.Size(32, 32),
    //   scaledSize: new google.maps.Size(24, 24),
    //   // The origin for this image is (0, 0).
    //   origin: new google.maps.Point(0, 0),
    //   // The anchor for this image is the base of the flagpole at (0, 32).
    //   anchor: new google.maps.Point(0, 10)

    // };
   
    const marker_inicio = new google.maps.Marker({
      position: {
        lat: start.lat,
        lng: start.lng
      },
      zoom:8,
      map:this.map,
      title:'Mi Ubicacion',
      icon: {url:'/assets/img/blue-dot.png'},
      // icon:iconBase,
      // icon:'/assets/img/logocruzazul_logo.png',
      animation:google.maps.Animation.BOUNCE, // animacion
    });
    const marker_fin = new google.maps.Marker({
      position: {
        lat: end.lat,
        lng: end.lng
      },
      zoom:8,
      map:this.map,
      title:'Mi Ubicacion',
      // icon:iconBase,
      // icon:'/assets/img/logocruzazul_logo.png',
      animation:google.maps.Animation.DROP, // animacion
    });
  
    // const directionsService = new google.maps.DirectionsService;
    // const directionsDisplay = new google.maps.DirectionsRenderer;
    // directionsDisplay.setMap(this.map);  
    
    // directionsService.route({
    //   origin: start,
    //   destination: end,
    //   travelMode: 'DRIVING'
    // }, (response, status) => {
    //   if (status === 'OK') {
    //     directionsDisplay.setDirections(response);
    //   } else {
    //     window.alert('Directions request failed due to ' + status);
    //   }
    // });


    
    // this.markers.forEach((item,a) => {
    //   item.setMap(null);
    // });

    // this.markers.push(marker);
    // //Zoom a la zona del marker seleccionado
    // google.maps.event.addListener(marker,'click',function() {
    //   //marker.setMap(null);
    //   this.map.setZoom(16);
    //   this.map.setCenter(marker.getPosition());
    // }); 

    // google.maps.event.addListener(marker,'dblclick',function() {
    //   marker.setMap(null);
    // }); 
    
  }

  private async getLocation(){
    
    const rta = await this.geolocation.getCurrentPosition();
    return  {
      lat: rta.coords.latitude,
      lng: rta.coords.longitude
    };
  }

}
