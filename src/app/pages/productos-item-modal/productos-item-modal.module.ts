import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProductosItemModalPage } from './productos-item-modal.page';

// const routes: Routes = [
//   {
//     path: '',
//     component: ProductosItemModalPage
//   }
// ];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    // RouterModule.forChild(routes)
  ],
  declarations: [ProductosItemModalPage]
})
export class ProductosItemModalPageModule {}
