import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProductosPage } from './productos.page';
import { ProductosItemModalPage } from '../productos-item-modal/productos-item-modal.page';
import { ProductosItemModalPageModule } from '../productos-item-modal/productos-item-modal.module';

const routes: Routes = [
  {
    path: '',
    component: ProductosPage
  }
];

@NgModule({
  entryComponents:[ProductosItemModalPage],//add
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ProductosItemModalPageModule //add
  ],
  declarations: [ProductosPage]
})
export class ProductosPageModule {}
