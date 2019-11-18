import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProductosPage } from './productos.page';
import { ProductoModalPage } from '../producto-modal/producto-modal.page';
import { ProductoModalPageModule } from '../producto-modal/producto-modal.module';

const routes: Routes = [
  {
    path: '',
    component: ProductosPage
  }
];

@NgModule({
  entryComponents:[ProductoModalPage],//add
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ProductoModalPageModule //add
  ],
  declarations: [ProductosPage]
})
export class ProductosPageModule {}
