(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-misentregas-misentregas-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/misentregas-item-modal/misentregas-item-modal.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/misentregas-item-modal/misentregas-item-modal.page.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\r\n  <ion-toolbar>\r\n    <ion-title>Detalle del Pedido</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"salir()\">\r\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content> \r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          \r\n          <!-- <ion-item (click)=\"verUbicacionCliente()\">\r\n            <ion-text color=\"cruz-primary\">\r\n              <p>Cliente:{{item.cliente.name}}</p>\r\n            </ion-text>\r\n          </ion-item> -->\r\n          <ion-item>\r\n            <ion-text > Cliente: </ion-text>\r\n            <ion-text color=\"cruz-primary\"> {{item.cliente.name}} </ion-text>\r\n            <ion-buttons slot=\"end\">\r\n              <ion-button (click)=\"verUbicacionCliente()\">\r\n                <ion-icon slot=\"icon-only\" name=\"pin\"></ion-icon>\r\n              </ion-button>\r\n            </ion-buttons>\r\n          </ion-item>\r\n          \r\n          <div id=\"detalleEntrega\">\r\n            <ion-item *ngFor=\"let item of item.detalle\"> \r\n              <ion-col size=\"7\" class=\"ion-text-lowercase\">  {{item.producto.descripcion}}</ion-col>\r\n              <ion-col size=\"2\">  [{{item.cantidad}}]</ion-col>\r\n              <ion-col size=\"3\"> \r\n                <ion-text color=\"cruz-tertiary\">\r\n                  {{item.subtotal | currency :'USD':'symbol':'2.2-2'}}\r\n                </ion-text> \r\n              </ion-col>\r\n            </ion-item>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n    <div id=\"map_ubi_cliente\" hidden> </div>\r\n\r\n  </ion-content>\r\n\r\n<ion-footer no-border>\r\n  <ion-toolbar>\r\n    <!-- <ion-title>Footer</ion-title> -->\r\n    <ion-row *ngIf=\"item.estado.cod == '002'\">\r\n      <ion-col size=\"6\">\r\n        <ion-button color=\"cruz-tertiary\" expand=\"full\" (click)=\"rechazarPedido(item)\">\r\n          <ion-icon slot=\"start\" name=\"close-circle-outline\"></ion-icon>\r\n           Rechazar \r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col size=\"6\">\r\n        <ion-button color=\"cruz-primary\" expand=\"full\" (click)=\"salir()\">  <!--(click)=\"generarFactura(item)\"-->\r\n          <ion-icon slot=\"start\" name=\"add-circle-outline\"></ion-icon>\r\n          Aceptar \r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n  </ion-toolbar>\r\n</ion-footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/misentregas/misentregas.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/misentregas/misentregas.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button color=\"cruz-primary\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Mis Entregas</ion-title>\r\n  </ion-toolbar>\r\n  <ion-toolbar>\r\n    <ion-segment #segmentoEntregas (ionChange)=\"segmentChanged($event)\" color=\"cruz-primary\">\r\n      <!-- <ion-segment-button value=\"pedidos\" class=\"ion-no-padding\">\r\n        <ion-label>Pedidos</ion-label>\r\n      </ion-segment-button> -->\r\n      <ion-segment-button value=\"en_proceso\" class=\"ion-no-padding\">\r\n        <ion-label>Por Entregar</ion-label>\r\n      </ion-segment-button>\r\n      <ion-segment-button value=\"finalizados\" class=\"ion-no-padding\">\r\n        <ion-label>Finalizadas</ion-label>\r\n      </ion-segment-button>\r\n    </ion-segment>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <!-- <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"4\"></ion-col>\r\n      <ion-col size=\"4\">\r\n          \r\n      </ion-col>\r\n      <ion-col size=\"4\"></ion-col>\r\n    </ion-row>\r\n  </ion-grid> -->\r\n\r\n  <ion-grid >\r\n    <ion-row>\r\n      <ion-col>\r\n\r\n          <ion-list #ListaEntregas>\r\n      \r\n            <ion-item-sliding *ngFor=\"let item of items | filtroRelacion: textoBuscar :'estado':'cod'\">\r\n              <!-- datos del item -->\r\n              <ion-item >\r\n                <ion-text color=\"cruz-primary\">\r\n                  {{item.fecha}} <!-- [{{ item.estado.descripcion }}]-->\r\n                </ion-text>\r\n                <ion-text slot=\"end\" color=\"cruz-tertiary\">\r\n                  {{ item.total | currency :'USD':'symbol':'2.2-2' }}\r\n                </ion-text>\r\n              </ion-item>\r\n              <!-- Opciones del item -->\r\n              <ion-item-options side=\"start\">\r\n                <ion-item-option color=\"cruz-primary\" (click)=\"verItem(item)\">\r\n                  <ion-icon slot=\"icon-only\" name=\"clipboard\"></ion-icon>\r\n                </ion-item-option>\r\n              </ion-item-options>\r\n              <!-- <ion-item-options side=\"end\">\r\n                <ion-item-option color=\"cruz-tertiary\" (click)=\"eliminar(item)\">\r\n                  <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\r\n                </ion-item-option>\r\n              </ion-item-options> -->\r\n        \r\n            </ion-item-sliding>\r\n        \r\n          </ion-list>\r\n    \r\n\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/misentregas-item-modal/misentregas-item-modal.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/misentregas-item-modal/misentregas-item-modal.module.ts ***!
  \*******************************************************************************/
/*! exports provided: MisentregasItemModalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MisentregasItemModalPageModule", function() { return MisentregasItemModalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _misentregas_item_modal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./misentregas-item-modal.page */ "./src/app/pages/misentregas-item-modal/misentregas-item-modal.page.ts");






// const routes: Routes = [
//   {
//     path: '',
//     component: MisentregasItemModalPage
//   }
// ];
let MisentregasItemModalPageModule = class MisentregasItemModalPageModule {
};
MisentregasItemModalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
        ],
        declarations: [_misentregas_item_modal_page__WEBPACK_IMPORTED_MODULE_5__["MisentregasItemModalPage"]]
    })
], MisentregasItemModalPageModule);



/***/ }),

/***/ "./src/app/pages/misentregas-item-modal/misentregas-item-modal.page.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/misentregas-item-modal/misentregas-item-modal.page.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#map_ubi_cliente {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ptYXJvbnY2NC9Fc2NyaXRvcmlvL0RFU0FSUk9MTE8vRmFybWFjaWFBcHAvc3JjL2FwcC9wYWdlcy9taXNlbnRyZWdhcy1pdGVtLW1vZGFsL21pc2VudHJlZ2FzLWl0ZW0tbW9kYWwucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9taXNlbnRyZWdhcy1pdGVtLW1vZGFsL21pc2VudHJlZ2FzLWl0ZW0tbW9kYWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21pc2VudHJlZ2FzLWl0ZW0tbW9kYWwvbWlzZW50cmVnYXMtaXRlbS1tb2RhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFwX3ViaV9jbGllbnRle1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAvLyB2aXNpYmlsaXR5OmhpZGRlbjtcclxuICAgIC8vIGRpc3BsYXk6IGJsb2NrO1xyXG59IiwiI21hcF91YmlfY2xpZW50ZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/misentregas-item-modal/misentregas-item-modal.page.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/misentregas-item-modal/misentregas-item-modal.page.ts ***!
  \*****************************************************************************/
/*! exports provided: MisentregasItemModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MisentregasItemModalPage", function() { return MisentregasItemModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/core */ "./node_modules/@ionic/core/dist/esm/index.mjs");
/* harmony import */ var src_app_services_entregas_entregas_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/entregas/entregas.service */ "./src/app/services/entregas/entregas.service.ts");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");






let MisentregasItemModalPage = class MisentregasItemModalPage {
    constructor(modalController, alertController, loadingController, entregasService, geolocation
    // private router: Router
    ) {
        this.modalController = modalController;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.entregasService = entregasService;
        this.geolocation = geolocation;
        this.map = null;
        this.item = {};
        this.nome_token_user = '';
        this.cont = 0;
        this.lati = null;
        this.longi = null;
        /////////////////////////////////////Construir el marker//////////////////////////////////////////////////////////////
        // se envia las cordenadas para construir el marker y 
        //tambien la variable google para hacer modificaciones al mapa..
        this.markers = [];
    }
    ngOnInit() {
    }
    salir() {
        _ionic_core__WEBPACK_IMPORTED_MODULE_3__["modalController"].dismiss();
    }
    verUbicacionCliente() {
        if (this.cont == 0) {
            document.getElementById("detalleEntrega").hidden = true;
            document.getElementById("map_ubi_cliente").hidden = false;
            this.loadMap();
            this.cont = 1;
        }
        else if (this.cont == 1) {
            document.getElementById("detalleEntrega").hidden = false;
            document.getElementById("map_ubi_cliente").hidden = true;
            this.cont = 0;
        }
    }
    mensaje() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Mensaje',
                // subHeader: 'Error:',
                message: 'Por el momento no puedes rechazar el pedio...',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    rechazarPedido(item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Pedido',
                message: 'Desea rechazar el pedido?',
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Ok',
                        handler: () => {
                            console.log('Confirm Okay');
                            this.nome_token_user = localStorage.getItem('miCuenta.nome_token');
                            this.entregasService.rechazar_entrega(this.nome_token_user, item).subscribe(item => {
                                if (item.code == "418") {
                                    this.mensaje();
                                    this.modalController.dismiss(0);
                                }
                                else {
                                    this.modalController.dismiss(1);
                                }
                            }, error => { });
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    aceptarPedido() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Pedido',
                message: 'Desea aceptar el pedido?',
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Ok',
                        handler: () => {
                            console.log('Confirm Okay');
                            _ionic_core__WEBPACK_IMPORTED_MODULE_3__["modalController"].dismiss();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    generarFactura(item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.nome_token_user = localStorage.getItem('miCuenta.nome_token');
            const alert = yield this.alertController.create({
                header: 'Mensaje',
                message: 'Al generar la factura se procedera a finalizar la entrega del pedido, está de acuerdo con esto?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Confirm Cancel: blah');
                            _ionic_core__WEBPACK_IMPORTED_MODULE_3__["modalController"].dismiss(0);
                        }
                    }, {
                        text: 'Ok',
                        handler: () => {
                            console.log('Confirm Okay');
                            this.entregasService.finalizar_venta(this.nome_token_user, item).subscribe(item => {
                                _ionic_core__WEBPACK_IMPORTED_MODULE_3__["modalController"].dismiss(1);
                            }, error => {
                                _ionic_core__WEBPACK_IMPORTED_MODULE_3__["modalController"].dismiss(0);
                            });
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    loadMap() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            //////////////////////////////////////////////////////////////////////////////////////////
            const loading = yield this.loadingController.create({
                message: 'espere por favor...',
                spinner: 'bubbles',
                duration: 1000
            });
            loading.present();
            /////////////////////////////////////////////////////////////////////////////////////////
            this.lati = Number(this.item.ubicacion_latitud);
            this.longi = Number(this.item.ubicacion_longitud);
            console.log(this.lati, this.longi);
            // const myLatLog = await this.getLocation();
            //console.log("coordenadas de inicio",myLatLog);
            const mapEle = document.getElementById('map_ubi_cliente'); // en esta linea construye el mapa en el div
            this.map = new google.maps.Map(mapEle, {
                center: { lat: this.lati, lng: this.longi },
                zoom: 15,
            });
            // este controlador de evento se dipara cuando se  el mapa  esta activo, llamo a la funcion addMarker
            const myLatLog = yield this.getLocation();
            google.maps.event.addListenerOnce(this.map, 'idle', (data) => {
                loading.dismiss();
                // this.markers.push(marker);
                // this.addMarker(this.lati,this.longi,google);
                // this.addMarker(myLatLog.lat,myLatLog.lng,google);
            });
            yield this.trazarRuta(myLatLog, { lat: this.lati, lng: this.longi }, google);
            // const start = this.markers[0].position;
            // const end = this.markers[1].position;
            // const request = {
            //   origin: start,
            //   destination: end,
            //   travelMode: 'DRIVING'
            // };
            console.log(this.markers);
        });
    }
    trazarRuta(start, end, google) {
        // var iconBase = {
        //   url: '/assets/img/logocruzazul_logo.png',
        //   // This marker is 20 pixels wide by 32 pixels high.
        //   size: new google.maps.Size(32, 32),
        //   scaledSize: new google.maps.Size(24, 24),
        //   // The origin for this image is (0, 0).
        //   origin: new google.maps.Point(0, 0),
        //   // The anchor for this image is the base of the flagpole at (0, 32).
        //   anchor: new google.maps.Point(0, 10)
        // };
        const marker_inicio = new google.maps.Marker({
            position: {
                lat: start.lat,
                lng: start.lng
            },
            zoom: 8,
            map: this.map,
            title: 'Mi Ubicacion',
            icon: { url: '/assets/img/blue-dot.png' },
            // icon:iconBase,
            // icon:'/assets/img/logocruzazul_logo.png',
            animation: google.maps.Animation.BOUNCE,
        });
        const marker_fin = new google.maps.Marker({
            position: {
                lat: end.lat,
                lng: end.lng
            },
            zoom: 8,
            map: this.map,
            title: 'Mi Ubicacion',
            // icon:iconBase,
            // icon:'/assets/img/logocruzazul_logo.png',
            animation: google.maps.Animation.DROP,
        });
        // const directionsService = new google.maps.DirectionsService;
        // const directionsDisplay = new google.maps.DirectionsRenderer;
        // directionsDisplay.setMap(this.map);  
        // directionsService.route({
        //   origin: start,
        //   destination: end,
        //   travelMode: 'DRIVING'
        // }, (response, status) => {
        //   if (status === 'OK') {
        //     directionsDisplay.setDirections(response);
        //   } else {
        //     window.alert('Directions request failed due to ' + status);
        //   }
        // });
        // this.markers.forEach((item,a) => {
        //   item.setMap(null);
        // });
        // this.markers.push(marker);
        // //Zoom a la zona del marker seleccionado
        // google.maps.event.addListener(marker,'click',function() {
        //   //marker.setMap(null);
        //   this.map.setZoom(16);
        //   this.map.setCenter(marker.getPosition());
        // }); 
        // google.maps.event.addListener(marker,'dblclick',function() {
        //   marker.setMap(null);
        // }); 
    }
    getLocation() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const rta = yield this.geolocation.getCurrentPosition();
            return {
                lat: rta.coords.latitude,
                lng: rta.coords.longitude
            };
        });
    }
};
MisentregasItemModalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: src_app_services_entregas_entregas_service__WEBPACK_IMPORTED_MODULE_4__["EntregasService"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__["Geolocation"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], MisentregasItemModalPage.prototype, "item", void 0);
MisentregasItemModalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-misentregas-item-modal',
        template: __webpack_require__(/*! raw-loader!./misentregas-item-modal.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/misentregas-item-modal/misentregas-item-modal.page.html"),
        styles: [__webpack_require__(/*! ./misentregas-item-modal.page.scss */ "./src/app/pages/misentregas-item-modal/misentregas-item-modal.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        src_app_services_entregas_entregas_service__WEBPACK_IMPORTED_MODULE_4__["EntregasService"],
        _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__["Geolocation"]
        // private router: Router
    ])
], MisentregasItemModalPage);



/***/ }),

/***/ "./src/app/pages/misentregas/misentregas.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/misentregas/misentregas.module.ts ***!
  \*********************************************************/
/*! exports provided: MisentregasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MisentregasPageModule", function() { return MisentregasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _misentregas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./misentregas.page */ "./src/app/pages/misentregas/misentregas.page.ts");
/* harmony import */ var _misentregas_item_modal_misentregas_item_modal_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../misentregas-item-modal/misentregas-item-modal.module */ "./src/app/pages/misentregas-item-modal/misentregas-item-modal.module.ts");
/* harmony import */ var _misentregas_item_modal_misentregas_item_modal_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../misentregas-item-modal/misentregas-item-modal.page */ "./src/app/pages/misentregas-item-modal/misentregas-item-modal.page.ts");
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");










const routes = [
    {
        path: '',
        component: _misentregas_page__WEBPACK_IMPORTED_MODULE_6__["MisentregasPage"]
    }
];
let MisentregasPageModule = class MisentregasPageModule {
};
MisentregasPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        entryComponents: [_misentregas_item_modal_misentregas_item_modal_page__WEBPACK_IMPORTED_MODULE_8__["MisentregasItemModalPage"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _misentregas_item_modal_misentregas_item_modal_module__WEBPACK_IMPORTED_MODULE_7__["MisentregasItemModalPageModule"],
            src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_9__["PipesModule"]
        ],
        declarations: [_misentregas_page__WEBPACK_IMPORTED_MODULE_6__["MisentregasPage"]]
    })
], MisentregasPageModule);



/***/ }),

/***/ "./src/app/pages/misentregas/misentregas.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/misentregas/misentregas.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21pc2VudHJlZ2FzL21pc2VudHJlZ2FzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/misentregas/misentregas.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/misentregas/misentregas.page.ts ***!
  \*******************************************************/
/*! exports provided: MisentregasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MisentregasPage", function() { return MisentregasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_entregas_entregas_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/entregas/entregas.service */ "./src/app/services/entregas/entregas.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _misentregas_item_modal_misentregas_item_modal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../misentregas-item-modal/misentregas-item-modal.page */ "./src/app/pages/misentregas-item-modal/misentregas-item-modal.page.ts");






let MisentregasPage = class MisentregasPage {
    constructor(entregasService, modalController, loadingController, router, platform) {
        this.entregasService = entregasService;
        this.modalController = modalController;
        this.loadingController = loadingController;
        this.router = router;
        this.platform = platform;
        this.items = [];
        this.textoBuscar = '002';
    }
    ngOnInit() {
        this.filtro('');
        this.platform.ready().then(() => {
            this.segmentoCompras.value = "en_proceso";
        });
    }
    segmentChanged(event) {
        // if (event.target.value==="pedidos") {
        //   this.textoBuscar = '001';
        // } else 
        if (event.target.value === "en_proceso") {
            this.textoBuscar = '002';
        }
        else if (event.target.value === "finalizados") {
            this.textoBuscar = '003';
        }
        console.log(event.target.value);
    }
    filtro(_value) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Espere un monento...',
                spinner: 'bubbles'
            });
            yield loading.present();
            this.nome_token_user = localStorage.getItem('miCuenta.nome_token');
            this.entregasService.filtro(this.nome_token_user, _value)
                .subscribe(item => {
                this.items = item.items;
                loading.dismiss();
            }, error => {
                console.log(error);
            });
        });
    }
    verItem(_item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(_item);
            const modal = yield this.modalController.create({
                component: _misentregas_item_modal_misentregas_item_modal_page__WEBPACK_IMPORTED_MODULE_5__["MisentregasItemModalPage"],
                componentProps: {
                    item: _item
                }
            });
            this.ListaEntregas.closeSlidingItems();
            yield modal.present();
            const { data } = yield modal.onDidDismiss();
            if (data == 1) {
                this.filtro('');
            }
        });
    }
};
MisentregasPage.ctorParameters = () => [
    { type: src_app_services_entregas_entregas_service__WEBPACK_IMPORTED_MODULE_3__["EntregasService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ListaEntregas', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonList"])
], MisentregasPage.prototype, "ListaEntregas", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('segmentoEntregas', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSegment"])
], MisentregasPage.prototype, "segmentoCompras", void 0);
MisentregasPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-misentregas',
        template: __webpack_require__(/*! raw-loader!./misentregas.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/misentregas/misentregas.page.html"),
        styles: [__webpack_require__(/*! ./misentregas.page.scss */ "./src/app/pages/misentregas/misentregas.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_entregas_entregas_service__WEBPACK_IMPORTED_MODULE_3__["EntregasService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]])
], MisentregasPage);



/***/ }),

/***/ "./src/app/services/entregas/entregas.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/entregas/entregas.service.ts ***!
  \*******************************************************/
/*! exports provided: EntregasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntregasService", function() { return EntregasService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let EntregasService = class EntregasService {
    constructor(http) {
        this.http = http;
        this.apiUrl = "http://127.0.0.1:8000/api/v0/";
        this._headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        this._params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
    }
    filtro(_nome_token_user, _value) {
        let _params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({
            fromObject: {
                'value': _value,
            }
        });
        return this.http.get(`${this.apiUrl}ventas_mi_historial_entregas/${_nome_token_user}/`, { headers: this._headers, params: _params });
    }
    rechazar_entrega(_nome_token_user, _request) {
        let _params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({
            fromObject: {
                'nome_token': _request.nome_token,
            }
        });
        return this.http.put(`${this.apiUrl}ventas_rechazar_entrega/${_nome_token_user}/`, _request, { headers: this._headers });
    }
    finalizar_venta(_nome_token_user, _request) {
        let _params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({
            fromObject: {
                'nome_token': _request.nome_token,
            }
        });
        return this.http.put(`${this.apiUrl}vemtas_finalizar_venta/${_nome_token_user}/`, _request, { headers: this._headers });
    }
};
EntregasService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
EntregasService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], EntregasService);



/***/ })

}]);
//# sourceMappingURL=pages-misentregas-misentregas-module-es2015.js.map