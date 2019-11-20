import { Component, OnInit } from '@angular/core';
import { Geolocation } from "@ionic-native/geolocation/ngx";
import { LoadingController, AlertController } from '@ionic/angular';

declare var google;
@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.page.html',
  styleUrls: ['./ubicacion.page.scss'],
})
export class UbicacionPage implements OnInit {

  map=null;


  constructor(private geolocation:Geolocation,
              private loadingController:LoadingController,
              private alertController:AlertController) { }

  ngOnInit() {
    this.loadMap();
    //this.hola();
  }

  // async presentLoading() {
  //   const loading = await this.loadingController.create({
  //     message: 'Hellooo',
  //     duration: 2000,
  //     spinner: 'bubbles'
  //   });
  //   await loading.present();
  // }

  async loadMap(){
    //////////////////////////////////////////////////////////////////////////////////////////
    const loading = await this.loadingController.create({
      message:'espere por favor...',
      spinner:'bubbles'
    });
    loading.present();
    /////////////////////////////////////////////////////////////////////////////////////////
    // const rta = await this.geolocation.getCurrentPosition();
    // const myLatLog = {
    //   lat: rta.coords.latitude,
    //   lng: rta.coords.longitude
    // };
    const myLatLog = await this.getLocation();
    console.log(myLatLog);
    const mapEle :HTMLElement = document.getElementById('map'); // en esta linea construye el mapa en el div
    this.map = new google.maps.Map(mapEle,{
      center: myLatLog,
      zoom:12
    });

    // const map = new google.maps.Map(mapEle,{
    //   center: myLatLog,
    //   zoom:12
    // });
    

    google.maps.event.addListenerOnce(this.map,'idle',(data)=>{
      console.log('added');
      console.log(data);
      
      loading.dismiss();
      //this.hola(myLatLog.lat,myLatLog.lng,google);
       this.addMarker(myLatLog.lat,myLatLog.lng,google);
      // this.addMarker(-0.85,-80.1795618,google);
      //this.getLocationSearch();
      // const marker = new google.maps.Marker({
      //   position: {
      //     lat: myLatLog.lat,
      //     lng: myLatLog.lng
      //   },
      //   zoom:8,
      //   map:this.map,
      //   title:'Mi Ubicacion'
      // });
      
    });

    google.maps.event.addListener(this.map,'click',(data)=>{
      console.log(data.latLng.lat());
      const x:number = data.latLng.lat();
      const y:number = data.latLng.lng();
      //this.addMarker(x,y,google);
      this.hola(x,y,google);
    });

  }

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

    
        
    this.markers.forEach((item,a) => {
      // console.log(item);
      item.setMap(null);
    });

    this.markers.push(marker);
   

    //Zoom a la zona del marker seleccionado
    google.maps.event.addListener(marker,'click',function() {
      this.map.setZoom(14);
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
      // this.latitude =  data.coords.latitude,
      // this.longitude = data.coords.longitude
      //this.addMarker(data.coords.latitude,data.coords.longitude);
    });

    return {
      lat: this.latitude,
      lng: this.longitude
    }

  }
  

}
