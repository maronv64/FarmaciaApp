import { NgModule } from '@angular/core';
import { FiltroPipe } from './filtro.pipe';
import { FiltroRelacionPipe } from './filtro-relacion.pipe';
//import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [FiltroPipe, FiltroRelacionPipe],
  imports: [
    //CommonModule
  ],
  exports:[FiltroPipe,FiltroRelacionPipe]
})
export class PipesModule { }
