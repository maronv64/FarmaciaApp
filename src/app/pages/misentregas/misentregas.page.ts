import { Component, OnInit, ViewChild } from '@angular/core';
import { Venta } from 'src/app/interfaces/venta/venta';
import { IonList, ModalController, LoadingController } from '@ionic/angular';
import { EntregasService } from 'src/app/services/entregas/entregas.service';
import { Router } from '@angular/router';
import { MisentregasItemModalPage } from '../misentregas-item-modal/misentregas-item-modal.page';

@Component({
  selector: 'app-misentregas',
  templateUrl: './misentregas.page.html',
  styleUrls: ['./misentregas.page.scss'],
})
export class MisentregasPage implements OnInit {

  nome_token_user:string;
  items:Venta[]=[];
  @ViewChild('ListaEntregas',{static:false}) ListaEntregas:IonList;

  constructor(private entregasService:EntregasService,
              private modalController:ModalController,
              private loadingController:LoadingController,
              private router:Router) { }

  ngOnInit() {
    this.filtro('');
  }

  async filtro(_value:string){

    const loading = await this.loadingController.create({
      message: 'Espere un monento...',
      spinner: 'bubbles'
    });
    await loading.present();

    this.nome_token_user= localStorage.getItem('miCuenta.nome_token');
    this.entregasService.filtro(this.nome_token_user,_value)
        .subscribe(item=>{
          this.items = item.items;
          loading.dismiss();
        },error=>{
          console.log(error);
        });
  }

  async verItem(_item:Venta){
    console.log(_item);
    const modal = await this.modalController.create({
      component: MisentregasItemModalPage,
      componentProps:{
        item:_item
      }
    });

    this.ListaEntregas.closeSlidingItems();
    await modal.present();
    const {data} = await modal.onDidDismiss();
    this.router.navigateByUrl('/misentregas');
  }

}
