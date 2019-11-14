import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MiscomprasPage } from './miscompras.page';
import { MiscomprasItemModalPage } from '../miscompras-item-modal/miscompras-item-modal.page';
import { MiscomprasItemModalPageModule } from '../miscompras-item-modal/miscompras-item-modal.module';

const routes: Routes = [
  {
    path: '',
    component: MiscomprasPage
  }
];

@NgModule({
  entryComponents:[MiscomprasItemModalPage], //add
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
   MiscomprasItemModalPageModule //add
  ],
  declarations: [MiscomprasPage]
})
export class MiscomprasPageModule {}
