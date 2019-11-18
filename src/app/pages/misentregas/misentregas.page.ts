import { Component, OnInit, ViewChild } from '@angular/core';
import { Venta } from 'src/app/interfaces/venta/venta';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-misentregas',
  templateUrl: './misentregas.page.html',
  styleUrls: ['./misentregas.page.scss'],
})
export class MisentregasPage implements OnInit {

  nome_token_user:string;
  items:Venta;
  @ViewChild('ListaEntregas',{static:false}) ListaEntregas:IonList;

  constructor() { }

  ngOnInit() {
  }

}
