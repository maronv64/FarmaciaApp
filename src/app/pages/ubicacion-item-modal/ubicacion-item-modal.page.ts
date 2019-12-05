import { Component, OnInit } from '@angular/core';
import { Geolocation } from "@ionic-native/geolocation/ngx";
import { LoadingController, AlertController, ModalController } from '@ionic/angular';
import { Ubicacion } from 'src/app/interfaces/ubicacion/ubicacion';
// import { Platform } from "@ionic/angular";


declare var google;
@Component({
  selector: 'app-ubicacion-item-modal',
  templateUrl: './ubicacion-item-modal.page.html',
  styleUrls: ['./ubicacion-item-modal.page.scss'],
})
export class UbicacionItemModalPage implements OnInit {

  map=null;

  _ubicacion:Ubicacion={};


  constructor(private geolocation:Geolocation,
              private loadingController:LoadingController,
              private alertController:AlertController,
              private modalController: ModalController
            ) {
    
  }
  ngOnInit() {
    this.loadMap();
  }

 
  async loadMap(){
    //////////////////////////////////////////////////////////////////////////////////////////
    const loading = await this.loadingController.create({
      message:'espere por favor...',
      spinner:'bubbles',
      duration:3000
    });
    loading.present();
    /////////////////////////////////////////////////////////////////////////////////////////

    const myLatLog = await this.getLocation();
    console.log("coordenadas de inicio",myLatLog);
    const mapEle:HTMLElement = document.getElementById('map_modal'); // en esta linea construye el mapa en el div
    this.map = new google.maps.Map(mapEle,{
      center: myLatLog, 
      zoom:15,
    });
    
    // este controlador de evento se dipara cuando se  el mapa  esta activo, llamo a la funcion addMarker

    google.maps.event.addListenerOnce(this.map,'idle',(data)=>{
       
      loading.dismiss();
      //this.hola(myLatLog.lat,myLatLog.lng,google);
       this.addMarker(myLatLog.lat,myLatLog.lng,google);

      
    });
    
    // este evento se dispara  cuando se le da click al mapa
    google.maps.event.addListener(this.map,'click',(data)=>{
      // console.log("otra coordenada",data.latLng.lat());
      console.log("otra coordenada",data.latLng);
      const x:number = data.latLng.lat();
      const y:number = data.latLng.lng();
      //this.addMarker(x,y,google);
      this.hola(x,y,google);
    });

  }

  // esta funcion manda una alerta en caso de querer crear un marker
  async hola(lat:number,lng:number,google){
    this.addMarker(lat,lng,google);
    // const alert = await this.alertController.create({
    //   header: 'Esta seguro?',
    //   message: 'que desea agregar esta ubicacion',
    //   buttons: [
    //     {
    //       text:'Cancelar',
    //       role:'cancel',
    //       cssClass:'secondary',
    //       handler: () => {
    //         //===============================================
    //         console.log('confirmar salida');
    //         //===============================================
    //       }
    //     },
    //     {
    //       text:'Ok',
    //       handler: ()=>{
    //         // =================ok===========================
    //         this.addMarker(lat,lng,google);
    //         //===============================================
    //       }
    //     }
    //   ]
    // });

    // await alert.present();
  }
  
  /////////////////////////////////////Construir el marker//////////////////////////////////////////////////////////////
  // se envia las cordenadas para construir el marker y 
  //tambien la variable google para hacer modificaciones al mapa..
  private markers:any[]=[];
  private addMarker(lat:number,lng:number,google){

    

    console.log(lat,lng);
    
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

    const marker = new google.maps.Marker({
      position: {
        lat: lat,
        lng: lng
      },
      zoom:8,
      map:this.map,
      title:'Mi Ubicacion',
      // icon:iconBase,
      // icon:'/assets/img/logocruzazul_logo.png',
      animation:google.maps.Animation.BOUNCE, // animacion
    });

    this._ubicacion.latitud=lat;
    this._ubicacion.longitud=lng;
    console.log(this._ubicacion);
    
    //console.log(marker);
    
        
    this.markers.forEach((item,a) => {
      item.setMap(null);
    });

    this.markers.push(marker);
   

    //Zoom a la zona del marker seleccionado
    google.maps.event.addListener(marker,'click',function() {
      //marker.setMap(null);
      this.map.setZoom(16);
      this.map.setCenter(marker.getPosition());
    }); 

    google.maps.event.addListener(marker,'dblclick',function() {
      marker.setMap(null);
    }); 
    
  }
//////////////////////////////buscar la ubicacion actual///////////////////////////////////////////////////////////////
  private async getLocation(){
    
    const rta = await this.geolocation.getCurrentPosition();
    return  {
      lat: rta.coords.latitude,
      lng: rta.coords.longitude
    };
  }


  async guardarUBi(){
    // this._ubicacion.latitud= -1.222;
    // this._ubicacion.longitud = -3.00;

    // const myLatLog = await this.getLocation();

    // this._ubicacion.latitud= myLatLog.lat;
    // this._ubicacion.longitud = myLatLog.lng;

    if (this._ubicacion.longitud != null) {
      this.modalController.dismiss(this._ubicacion);
    }

  }

  salir(){
    this._ubicacion.latitud=null;
    this._ubicacion.longitud=null;
    this.modalController.dismiss(this._ubicacion);
  }

 



}
