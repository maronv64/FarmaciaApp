import { Component, OnInit } from '@angular/core';
import { Geolocation } from "@ionic-native/geolocation/ngx";
import { LoadingController, AlertController } from '@ionic/angular';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { Ubicacion } from 'src/app/interfaces/ubicacion/ubicacion';
// import { Platform } from "@ionic/angular";


declare var google;
@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.page.html',
  styleUrls: ['./ubicacion.page.scss'],
})
export class UbicacionPage implements OnInit {

  map=null;
  filtro:string="Ecuador";

  latitudee:any="";
  longitudee:any="";
  timestamp:any="";
  nome_token_user:string;

  _ubicacion:Ubicacion={};

  constructor(private geolocation:Geolocation,
              private loadingController:LoadingController,
              private alertController:AlertController,
              private usuarioService:UsuarioService
             ) {
    // this.platform.ready().then(()=>{
    //   var mapOption={
    //     center:{lat:23.2366,lng:79.3822},
    //     zoom: 7
    //   }

    //   this.map = new google.maps.Map(document.getElementById("map"),mapOption);

    //   this.getGeoLocation();

    // });
               }

  ngOnInit() {
    this.loadMap();
    //this.hola();
  }


  async guardarUBi(){
    this.nome_token_user= localStorage.getItem("miCuenta.nome_token");
    this.usuarioService.ubicacion(this.nome_token_user,this._ubicacion).subscribe(
      item=>{

      },error=>{}
    );

    const alert = await this.alertController.create({
      header: 'Alerta!',
      message: 'Desea Guardar la ubicacion Actual?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Ubicacion Guardada...');
          }
        }
      ]
    });
  
    await alert.present();
    
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
    const mapEle :HTMLElement = document.getElementById('map'); // en esta linea construye el mapa en el div
    this.map = new google.maps.Map(mapEle,{
      center: myLatLog, 
      zoom:12,
    });
    
    
    // const map = new google.maps.Map(mapEle,{
    //   center: myLatLog,
    //   zoom:12
    // });

    

    google.maps.event.addListenerOnce(this.map,'idle',(data)=>{
  
      
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
      // console.log("otra coordenada",data.latLng.lat());
      console.log("otra coordenada",data.latLng);
      const x:number = data.latLng.lat();
      const y:number = data.latLng.lng();
      //this.addMarker(x,y,google);
      this.hola(x,y,google);
    });

    ///////////////////////////////localizacion por descripcion/////////////////////////////////////////////////////////////////////
    // const search :HTMLElement = document.getElementById('search');
    
    // var defaultBounds = new google.maps.LatLngBounds(
    //   new google.maps.LatLng(-33.8902, 151.1759),
    //   new google.maps.LatLng(-33.8474, 151.2631));
    
    // var input = document.getElementById('search');
    // var options = {
    //   bounds: defaultBounds,
    //   types: ['establishment']
    // };

    // const autocomplete = new google.maps.places.Autocomplete(input, options);

    /////////////////////////////////////////////////////////////////////////////////////////////////////

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

}
