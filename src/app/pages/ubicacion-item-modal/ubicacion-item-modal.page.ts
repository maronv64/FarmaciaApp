import { Component, OnInit, Input } from '@angular/core';
import { ModalController, AlertController, LoadingController } from '@ionic/angular';
import { Ubicacion } from 'src/app/interfaces/ubicacion/ubicacion';
import { Geolocation } from "@ionic-native/geolocation/ngx";


declare var google;

@Component({
  selector: 'app-ubicacion-item-modal',
  templateUrl: './ubicacion-item-modal.page.html',
  styleUrls: ['./ubicacion-item-modal.page.scss'],
})


export class UbicacionItemModalPage implements OnInit {

  map=null;
  filtro:string="Ecuador";

  latitudee:any=""; // variable global para almacenar la nogitud
  longitudee:any=""; // lo mismo de arriba
  timestamp:any="";
  nome_token_user:string;

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
      // duration:5000
    });
    loading.present();
    /////////////////////////////////////////////////////////////////////////////////////////

    const myLatLog = await this.getLocation();
    console.log("coordenadas de inicio",myLatLog);
    const mapEle:HTMLElement = document.getElementById('map_modal'); // en esta linea construye el mapa en el div
    this.map = new google.maps.Map(mapEle,{
      center: myLatLog, 
      zoom:12,
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
    const alert = await this.alertController.create({
      header: 'Esta seguro?',
      message: 'que desea agregar esta ubicacion',
      buttons: [
        {
          text:'Cancelar',
          role:'cancel',
          cssClass:'secondary',
          handler: () => {
            //===============================================
            console.log('confirmar salida');
            //===============================================
          }
        },
        {
          text:'Ok',
          handler: ()=>{
            // =================ok===========================
            this.addMarker(lat,lng,google);
            //===============================================
          }
        }
      ]
    });

    await alert.present();
  }
  
  /////////////////////////////////////Construir el marker//////////////////////////////////////////////////////////////
  // se envia las cordenadas para construir el marker y 
  //tambien la variable google para hacer modificaciones al mapa..
  private markers:any[]=[];
  private addMarker(lat:number,lng:number,google){

    const hooo:any[]=['1','2','3'];

    console.log(lat,lng);
    

    const marker = new google.maps.Marker({
      position: {
        lat: lat,
        lng: lng
      },
      zoom:8,
      map:this.map,
      title:'Mi Ubicacion',
      animation:google.maps.Animation.BOUNCE // animacion
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
    

    // marker.on(google.maps.event.MARKER_CLICK).subscribe(() => {
    //   alert('clicked');
    // });
  }
//////////////////////////////buscar la ubicacion actual///////////////////////////////////////////////////////////////
  private async getLocation(){
    
    const rta = await this.geolocation.getCurrentPosition();
    return  {
      lat: rta.coords.latitude,
      lng: rta.coords.longitude
    };
  }

  latitude:number=null;
  longitude:number=null;

  private async getLocationSearch(){
    const watch = await this.geolocation.watchPosition();
    watch.subscribe((data) => {
      console.log(data);
      this.latitude =  data.coords.latitude,
      this.longitude = data.coords.longitude
      //this.addMarker(data.coords.latitude,data.coords.longitude);
    });

    return {
      lat: this.latitude,
      lng: this.longitude
    }

  }
  
  onSearchChange(event:any){

  }
  




  async guardarUBi(){
    // this._ubicacion.latitud= -1.222;
    // this._ubicacion.longitud = -3.00;

    const myLatLog = await this.getLocation();

    this._ubicacion.latitud= myLatLog.lat;
    this._ubicacion.longitud = myLatLog.lng;

    if (myLatLog.lng != null) {
      this.modalController.dismiss(this._ubicacion);
    }

  }

  salir(){
    this.modalController.dismiss();
  }

 



}
