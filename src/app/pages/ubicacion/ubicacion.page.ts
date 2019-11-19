import { Component, OnInit } from '@angular/core';
import { Geolocation } from "@ionic-native/geolocation/ngx";
import { LoadingController } from '@ionic/angular';

declare var google;

@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.page.html',
  styleUrls: ['./ubicacion.page.scss'],
})
export class UbicacionPage implements OnInit {

  map=null;

  constructor(private geolocation:Geolocation,
              private loadingController:LoadingController) { }

  ngOnInit() {
    this.loadMap();
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
    const loading = await this.loadingController.create({
      message:'espere por favor...',
      spinner:'bubbles'
    });
    loading.present();
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

    google.maps.event.addListenerOnce(this.map,'idle',()=>{
      console.log('added');
      loading.dismiss();
      this.addMarker(myLatLog.lat,myLatLog.lng);
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

  }

  private addMarker(lat:number,lng:number){
    const marker = new google.maps.Marker({
      position: {
        lat: lat,
        lng: lng
      },
      zoom:8,
      map:this.map,
      title:'Mi Ubicacion'
    });
  }

  private async getLocation(){
    const rta = await this.geolocation.getCurrentPosition();
    return  {
      lat: rta.coords.latitude,
      lng: rta.coords.longitude
    };
  }

  

}
