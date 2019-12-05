import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';  // cominicacion con las apis

import { Geolocation } from "@ionic-native/geolocation/ngx";  //add
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';//add
import { PipesModule } from "./pipes/pipes.module"; //add

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    PipesModule //add
  ],
  providers: [
    Geolocation, //add
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    LocalNotifications//add
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
