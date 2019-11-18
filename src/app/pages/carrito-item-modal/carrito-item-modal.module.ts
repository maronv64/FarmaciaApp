import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CarritoItemModalPage } from './carrito-item-modal.page';

// const routes: Routes = [
//   {
//     path: '',
//     component: CarritoItemModalPage
//   }
// ];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    // RouterModule.forChild(routes)
  ],
  declarations: [CarritoItemModalPage]
})
export class CarritoItemModalPageModule {}
