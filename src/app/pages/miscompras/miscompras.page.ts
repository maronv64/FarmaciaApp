import { Component, OnInit, ViewChild } from '@angular/core';
import { ComprasService } from 'src/app/services/compras/compras.service';
import { Venta } from 'src/app/interfaces/venta/venta';
import { IonList, ModalController, AlertController, IonSegment, Platform } from '@ionic/angular';
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
  textoBuscar: string = '001';

  @ViewChild('ListaCompras',{static:false}) ListaCompras:IonList;
  @ViewChild('segmentoCompras',{static:false}) segmentoCompras:IonSegment;

  constructor(private comprasService:ComprasService,
              private modalController:ModalController,
              private alertController: AlertController,
              private router:Router,
              private platform:Platform) { }

  ngOnInit() {
    //this.segmentoCompras.value = 'pedidos';
    //this.segmentoCompras.value="pedidos";
    
    this.filtro('');
    this.platform.ready().then(()=>{
      this.segmentoCompras.value = "pedidos";
    });
  }

  ionViewWillEnter(){
    console.log("en la pagina");
    // this.filtro("");
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

  segmentChanged(event){
    if (event.target.value==="pedidos") {
      this.textoBuscar = '001';
    } else if(event.target.value==="en_proceso") {
      this.textoBuscar = '002';
    } else if(event.target.value==="finalizados") {
      this.textoBuscar = '003';
    }
    console.log(event.target.value);
    
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
    console.log(data);
    if (data==0) {
      
    }else if(data==1){
      this.filtro('');
    }
  }
  
  async eliminar(_item:Venta){

    const alert = await this.alertController.create({
      header: 'Esta seguro?',
      message: 'que desea eliminar',
      buttons: [
        {
          text:'Cancelar',
          role:'cancel',
          cssClass:'secondary',
          handler: () => {
            console.log('confirmar salida');
          }
        },
        {
          text:'Ok',
          handler: ()=>{
            // =================Eliminar========================
            this.nome_token_user = localStorage.getItem('miCuenta.nome_token');
            this.comprasService.delete(this.nome_token_user,_item).subscribe(
              item=>{
                this.filtro("");
              },error=>{
                this.ListaCompras.closeSlidingItems();
              }
            );
              
            console.log('eliminacion confirmada');
            //==========================================
          }
        }
      ]
    });


  }


}
