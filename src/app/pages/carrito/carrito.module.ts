import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CarritoPage } from './carrito.page';
import { CarritoItemModalPageModule } from '../carrito-item-modal/carrito-item-modal.module'; //add
import { CarritoItemModalPage } from '../carrito-item-modal/carrito-item-modal.page'; //add
import { UbicacionItemModalPage } from '../ubicacion-item-modal/ubicacion-item-modal.page';
import { UbicacionItemModalPageModule } from '../ubicacion-item-modal/ubicacion-item-modal.module';

const routes: Routes = [
  {
    path: '',
    component: CarritoPage
  }
];

@NgModule({
  entryComponents:[CarritoItemModalPage,UbicacionItemModalPage], //add
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    CarritoItemModalPageModule,  //add
    UbicacionItemModalPageModule //add
  ],
  declarations: [CarritoPage]
})
export class CarritoPageModule {}
