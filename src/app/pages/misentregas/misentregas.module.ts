import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MisentregasPage } from './misentregas.page';
import { MisentregasItemModalPageModule } from '../misentregas-item-modal/misentregas-item-modal.module';
import { MisentregasItemModalPage } from '../misentregas-item-modal/misentregas-item-modal.page';
import { PipesModule } from "src/app/pipes/pipes.module";

const routes: Routes = [
  {
    path: '',
    component: MisentregasPage
  }
];

@NgModule({
  entryComponents:[MisentregasItemModalPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    MisentregasItemModalPageModule,
    PipesModule
  ],
  declarations: [MisentregasPage]
})
export class MisentregasPageModule {}
