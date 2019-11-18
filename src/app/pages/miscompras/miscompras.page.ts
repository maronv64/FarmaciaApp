import { Component, OnInit, ViewChild } from '@angular/core';
import { ComprasService } from 'src/app/services/compras/compras.service';
import { Venta } from 'src/app/interfaces/venta/venta';
import { IonList, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { MiscomprasItemModalPage } from '../miscompras-item-modal/miscompras-item-modal.page';

@Component({
  selector: 'app-miscompras',
  templateUrl: './miscompras.page.html',
  styleUrls: ['./miscompras.page.scss'],
})
export class MiscomprasPage implements OnInit {

  nome_token_user:string;
  items:Venta[]=[];
  @ViewChild('ListaCompras',{static:false}) ListaCompras:IonList;

  constructor(private comprasService:ComprasService,
              private modalController:ModalController,
              private router:Router) { }

  ngOnInit() {
    this.filtro('');
  }
  //esta funcion sirve para traer los productos almacenados en la farmacia y almacenarlos en una lista
  async filtro(_value:string){
    this.nome_token_user = localStorage.getItem('miCuenta.nome_token');
    this.comprasService.filtro(this.nome_token_user,_value)
        .subscribe(item=>{
          this.items = item.items;
        },error=>{
          console.log(error);
        });
  }

  async verItem(_item:Venta){
    console.log(_item);
    const modal = await this.modalController.create({
      component: MiscomprasItemModalPage,
      componentProps:{
        item:_item
      }
    });

    this.ListaCompras.closeSlidingItems();
    await modal.present();
    const {data} = await modal.onDidDismiss();
    this.router.navigateByUrl('/miscompras');
  }

}
