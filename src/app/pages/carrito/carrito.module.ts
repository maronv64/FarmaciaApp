import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CarritoPage } from './carrito.page';
import { CarritoItemModalPageModule } from '../carrito-item-modal/carrito-item-modal.module'; //add
import { CarritoItemModalPage } from '../carrito-item-modal/carrito-item-modal.page'; //add
import { UbicacionPage } from '../ubicacion/ubicacion.page';
import { UbicacionPageModule } from '../ubicacion/ubicacion.module';
import { UbicacionItemModalPage } from '../ubicacion-item-modal/ubicacion-item-modal.page';
import { UbicacionItemModalPageModule } from '../ubicacion-item-modal/ubicacion-item-modal.module';

const routes: Routes = [
  {
    path: '',
    component: CarritoPage
  }
];

@NgModule({
  entryComponents:[CarritoItemModalPage,UbicacionItemModalPage], //add UbicacionPage
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    CarritoItemModalPageModule,  //add
    UbicacionItemModalPageModule, //add
    // UbicacionPageModule //add
  ],
  declarations: [CarritoPage]
})
export class CarritoPageModule {}
