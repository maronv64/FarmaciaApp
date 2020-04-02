(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-carrito-carrito-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/carrito-item-modal/carrito-item-modal.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/carrito-item-modal/carrito-item-modal.page.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\r\n  <ion-toolbar>\r\n    <ion-title text-capitalize>Informacion</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"salir()\">\r\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-grid >\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        <ion-list>\r\n          \r\n          <ion-item lines=\"none\" *ngIf=\"item.producto.descripcion != null\">\r\n            <ion-text slot=\"start\" color=\"primary\">Nombre:</ion-text> <ion-text slot=\"end\" class=\"ion-text-lowercase\"> {{item.producto.descripcion}} </ion-text>\r\n          </ion-item>\r\n          <!-- <ion-item *ngIf=\"item.producto.descripcion != null\">\r\n            <ion-text>{{item.producto.descripcion}}</ion-text>\r\n          </ion-item>           -->\r\n          <ion-item lines=\"none\" *ngIf=\"item.precio_u != null\">\r\n            <ion-text slot=\"start\" color=\"cruz-primary\">Precio:</ion-text> <ion-text slot=\"end\"> {{item.precio_u | currency :'USD':'symbol':'2.2-2'}} </ion-text>\r\n          </ion-item>\r\n          <!-- <ion-item *ngIf=\"item.precio_u != null\">\r\n            <ion-text>{{item.precio_u | currency :'USD':'symbol':'2.2-2'}}</ion-text>\r\n          </ion-item> -->\r\n          <ion-item lines=\"none\" *ngIf=\"item.cantidad != null\">\r\n            <ion-text color=\"cruz-primary\">Pedidos:</ion-text> <ion-text slot=\"end\">{{item.cantidad}}</ion-text>\r\n          </ion-item>\r\n          <!-- <ion-item *ngIf=\"item.cantidad != null\">\r\n            <ion-text>{{item.cantidad}}</ion-text>\r\n          </ion-item>   -->\r\n          <ion-item lines=\"none\" *ngIf=\"item.producto.presentacion != null\">\r\n            <ion-text slot=\"start\" color=\"cruz-primary\">Presentacion:</ion-text> <ion-text slot=\"end\">{{item.producto.presentacion}}</ion-text>\r\n          </ion-item>\r\n          <!-- <ion-item *ngIf=\"item.producto.presentacion != null\">\r\n            <ion-text>{{item.producto.presentacion}}</ion-text>\r\n          </ion-item> -->\r\n          <ion-item lines=\"none\" *ngIf=\"item.producto.consentracion != null\">\r\n            <ion-text slot=\"start\" color=\"cruz-primary\">Consentracion:</ion-text> <ion-text slot=\"end\">{{item.producto.consentracion}}</ion-text>\r\n          </ion-item>\r\n          <!-- <ion-item *ngIf=\"item.producto.consentracion != null\">\r\n            <ion-text>{{item.producto.consentracion}}</ion-text>\r\n          </ion-item> -->\r\n          <ion-item lines=\"none\" *ngIf=\"item.producto.observacion != null\">\r\n            <ion-text color=\"cruz-primary\">Observaciones:</ion-text>\r\n          </ion-item>\r\n          <ion-item lines=\"none\" *ngIf=\"item.producto.observacion != null\">\r\n            <ion-text>{{item.producto.observacion}}</ion-text>\r\n          </ion-item>\r\n          \r\n        </ion-list>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n</ion-content>\r\n\r\n<!-- <ion-footer  no-border>\r\n  <ion-toolbar>\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        <ion-button (click)=\"salir()\" color=\"cruz-primary\" expand=\"full\">Salir</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-footer> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/carrito/carrito.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/carrito/carrito.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button color=\"cruz-primary\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      Carrito\r\n    </ion-title>\r\n  </ion-toolbar>\r\n  \r\n  <!-- <ion-searchbar placeholder=\"Buscar...\"></ion-searchbar> -->\r\n\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-grid fixed *ngIf=\"items.length <=0\">\r\n    <br><br><br>\r\n    <ion-row >\r\n      <ion-col size=\"1\"></ion-col>\r\n      <ion-col size=\"10\">\r\n        <ion-img src=\"/assets/img/fondo_1.png\"></ion-img>\r\n      </ion-col>\r\n      <ion-col size=\"1\"></ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <ion-grid fixed  *ngIf=\"items.length > 0\">\r\n    \r\n    <ion-row>\r\n      <ion-col>\r\n\r\n        <ion-list #listaCarrito>\r\n      \r\n          <ion-item-sliding *ngFor=\"let item of items\">\r\n            <!-- datos del item -->\r\n            <ion-item >\r\n              <ion-text color=\"cruz-primary\" class=\"ion-text-lowercase\">\r\n                {{ item.producto.descripcion }} : [{{ item.cantidad }}]\r\n              </ion-text>\r\n              <ion-text slot=\"end\" color=\"cruz-tertiary\">\r\n                {{ item.subtotal | currency :'USD':'symbol':'2.2-2' }}\r\n              </ion-text>\r\n            </ion-item>\r\n            <!-- Opciones del item -->\r\n            <ion-item-options side=\"start\">\r\n              <ion-item-option color=\"cruz-primary\" (click)=\"verItem(item)\">\r\n                <ion-icon slot=\"icon-only\" name=\"clipboard\"></ion-icon>\r\n              </ion-item-option>\r\n            </ion-item-options>\r\n\r\n            <ion-item-options side=\"end\">\r\n              <ion-item-option color=\"cruz-tertiary\" (click)=\"eliminar(item)\">\r\n                <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\r\n              </ion-item-option>\r\n            </ion-item-options>\r\n      \r\n          </ion-item-sliding>\r\n      \r\n        </ion-list>\r\n        \r\n\r\n      </ion-col>\r\n    </ion-row>\r\n    \r\n  </ion-grid>\r\n\r\n</ion-content>\r\n\r\n<ion-footer no-border *ngIf=\"items.length > 0\">\r\n  <ion-toolbar>\r\n\r\n    <!-- <ion-grid > -->\r\n      <ion-row>\r\n        <ion-col size=\"12\">\r\n          <ion-button color=\"cruz-primary\" expand=\"full\" (click)=\"escojerUbicacion()\">\r\n            <ion-icon slot=\"start\" name=\"checkbox-outline\"></ion-icon>\r\n            Realizar Pedido\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    <!-- </ion-grid> -->\r\n\r\n    <!-- <ion-title>Footer</ion-title> -->\r\n  </ion-toolbar>\r\n</ion-footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/ubicacion-item-modal/ubicacion-item-modal.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/ubicacion-item-modal/ubicacion-item-modal.page.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-title>Ubicacion</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"salir()\">\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <!-- <ion-searchbar placeholder=\"Lugar\" inputmode=\"email\" type=\"decimal\" (ionChange)=\"onSearchChange($event)\" [debounce]=\"250\"></ion-searchbar> -->\n\n</ion-header>\n\n<ion-content >\n    <input type=\"hidden\" id=\"search\">\n  <div id=\"map_modal\"></div> \n\n</ion-content>\n\n<ion-footer no-border>\n  <ion-toolbar>\n    <!-- <ion-title>Footer</ion-title> -->\n    <ion-button expand=\"full\" color=\"cruz-primary\" (click)=\"guardarUBi()\">Guardar Ubicación</ion-button>\n  </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/pages/carrito-item-modal/carrito-item-modal.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/carrito-item-modal/carrito-item-modal.module.ts ***!
  \***********************************************************************/
/*! exports provided: CarritoItemModalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarritoItemModalPageModule", function() { return CarritoItemModalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _carrito_item_modal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./carrito-item-modal.page */ "./src/app/pages/carrito-item-modal/carrito-item-modal.page.ts");






// const routes: Routes = [
//   {
//     path: '',
//     component: CarritoItemModalPage
//   }
// ];
let CarritoItemModalPageModule = class CarritoItemModalPageModule {
};
CarritoItemModalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
        ],
        declarations: [_carrito_item_modal_page__WEBPACK_IMPORTED_MODULE_5__["CarritoItemModalPage"]]
    })
], CarritoItemModalPageModule);



/***/ }),

/***/ "./src/app/pages/carrito-item-modal/carrito-item-modal.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/carrito-item-modal/carrito-item-modal.page.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhcnJpdG8taXRlbS1tb2RhbC9jYXJyaXRvLWl0ZW0tbW9kYWwucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/carrito-item-modal/carrito-item-modal.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/carrito-item-modal/carrito-item-modal.page.ts ***!
  \*********************************************************************/
/*! exports provided: CarritoItemModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarritoItemModalPage", function() { return CarritoItemModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



let CarritoItemModalPage = class CarritoItemModalPage {
    constructor(modalController) {
        this.modalController = modalController;
        this.item = {};
    }
    ngOnInit() {
    }
    salir() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.modalController.dismiss();
        });
    }
};
CarritoItemModalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CarritoItemModalPage.prototype, "item", void 0);
CarritoItemModalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-carrito-item-modal',
        template: __webpack_require__(/*! raw-loader!./carrito-item-modal.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/carrito-item-modal/carrito-item-modal.page.html"),
        styles: [__webpack_require__(/*! ./carrito-item-modal.page.scss */ "./src/app/pages/carrito-item-modal/carrito-item-modal.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
], CarritoItemModalPage);



/***/ }),

/***/ "./src/app/pages/carrito/carrito.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/carrito/carrito.module.ts ***!
  \*************************************************/
/*! exports provided: CarritoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarritoPageModule", function() { return CarritoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _carrito_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./carrito.page */ "./src/app/pages/carrito/carrito.page.ts");
/* harmony import */ var _carrito_item_modal_carrito_item_modal_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../carrito-item-modal/carrito-item-modal.module */ "./src/app/pages/carrito-item-modal/carrito-item-modal.module.ts");
/* harmony import */ var _carrito_item_modal_carrito_item_modal_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../carrito-item-modal/carrito-item-modal.page */ "./src/app/pages/carrito-item-modal/carrito-item-modal.page.ts");
/* harmony import */ var _ubicacion_item_modal_ubicacion_item_modal_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ubicacion-item-modal/ubicacion-item-modal.page */ "./src/app/pages/ubicacion-item-modal/ubicacion-item-modal.page.ts");
/* harmony import */ var _ubicacion_item_modal_ubicacion_item_modal_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../ubicacion-item-modal/ubicacion-item-modal.module */ "./src/app/pages/ubicacion-item-modal/ubicacion-item-modal.module.ts");







 //add
 //add


const routes = [
    {
        path: '',
        component: _carrito_page__WEBPACK_IMPORTED_MODULE_6__["CarritoPage"]
    }
];
let CarritoPageModule = class CarritoPageModule {
};
CarritoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        entryComponents: [_carrito_item_modal_carrito_item_modal_page__WEBPACK_IMPORTED_MODULE_8__["CarritoItemModalPage"], _ubicacion_item_modal_ubicacion_item_modal_page__WEBPACK_IMPORTED_MODULE_9__["UbicacionItemModalPage"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _carrito_item_modal_carrito_item_modal_module__WEBPACK_IMPORTED_MODULE_7__["CarritoItemModalPageModule"],
            _ubicacion_item_modal_ubicacion_item_modal_module__WEBPACK_IMPORTED_MODULE_10__["UbicacionItemModalPageModule"],
        ],
        declarations: [_carrito_page__WEBPACK_IMPORTED_MODULE_6__["CarritoPage"]]
    })
], CarritoPageModule);



/***/ }),

/***/ "./src/app/pages/carrito/carrito.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/carrito/carrito.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhcnJpdG8vY2Fycml0by5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/carrito/carrito.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/carrito/carrito.page.ts ***!
  \***********************************************/
/*! exports provided: CarritoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarritoPage", function() { return CarritoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_carrito_carrito_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/carrito/carrito.service */ "./src/app/services/carrito/carrito.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _carrito_item_modal_carrito_item_modal_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../carrito-item-modal/carrito-item-modal.page */ "./src/app/pages/carrito-item-modal/carrito-item-modal.page.ts");
/* harmony import */ var _ubicacion_item_modal_ubicacion_item_modal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ubicacion-item-modal/ubicacion-item-modal.page */ "./src/app/pages/ubicacion-item-modal/ubicacion-item-modal.page.ts");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");




 //add


// import { UbicacionPage } from '../ubicacion/ubicacion.page';
let CarritoPage = class CarritoPage {
    constructor(carritoService, alertController, modalController, loadingController, geolocation) {
        this.carritoService = carritoService;
        this.alertController = alertController;
        this.modalController = modalController;
        this.loadingController = loadingController;
        this.geolocation = geolocation;
        this.items = [];
        this._ubicacion = {};
    }
    ngOnInit() {
        this.filtro('');
    }
    ngOnDestroy() {
        this.filtro('');
    }
    filtro(_value) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Espere un monento...',
                // duration: 2000,
                spinner: 'bubbles'
            });
            yield loading.present();
            this.nome_token_user = localStorage.getItem('miCuenta.nome_token');
            this.carritoService.filtro(this.nome_token_user, _value)
                .subscribe(item => {
                this.items = item.items;
                loading.dismiss();
            }, error => {
                console.log(error);
            });
        });
    }
    eliminar(_item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Esta seguro?',
                message: 'que desea eliminar',
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('confirmar salida');
                        }
                    },
                    {
                        text: 'Ok',
                        handler: () => {
                            // =================Eliminar========================
                            this.nome_token_user = localStorage.getItem('miCuenta.nome_token');
                            this.carritoService.delete(this.nome_token_user, _item)
                                .subscribe(item => {
                                console.log('hola');
                                this.filtro("");
                            }, error => {
                                console.log('error: ', error);
                                this.listaCarrito.closeSlidingItems();
                            });
                            console.log('eliminacion confirmada');
                            //==========================================
                        }
                    }
                ]
            });
            yield alert.present();
            // console.log('hola');
        });
    }
    verModalUbicacion() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _ubicacion_item_modal_ubicacion_item_modal_page__WEBPACK_IMPORTED_MODULE_5__["UbicacionItemModalPage"],
            });
            yield modal.present();
            const { data } = yield modal.onDidDismiss();
            this._ubicacion = data; //obtenemos la ubicacion que escojio el usuario de la modal ubicacion y el valor se lo enviamos la la variable ubicacion
            console.log(this._ubicacion);
            if (this._ubicacion.longitud != null) {
                this.generar_pedido2();
            }
        });
    }
    verItem(_item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _carrito_item_modal_carrito_item_modal_page__WEBPACK_IMPORTED_MODULE_4__["CarritoItemModalPage"],
                componentProps: {
                    item: _item
                }
            });
            this.listaCarrito.closeSlidingItems();
            yield modal.present();
        });
    }
    escojerUbicacion() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Lugar de Entrega',
                inputs: [
                    {
                        name: 'btnRadioUBiActual',
                        type: 'radio',
                        label: 'Ubicacion Actual',
                        value: 'actual',
                        checked: true
                    },
                    {
                        name: 'btnRadioUBiNueva',
                        type: 'radio',
                        label: 'Nueva',
                        value: 'nueva'
                    }
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Confirm Cancel');
                        }
                    }, {
                        text: 'Ok',
                        handler: (input) => {
                            console.log('Confirm Ok', input);
                            if (input == "actual") {
                                this.guardarUBiActual();
                            }
                            else if (input == "nueva") {
                                this.verModalUbicacion();
                                // this.generar_pedido2();  //no lo utilizo aqui porque el metodo verModalUbicacion es async y cuando abro la modal se genera la venta y no cuando se preciona el boton guardar
                            }
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    generar_pedido2() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            //obtener el token del usuario logeado.
            this.nome_token_user = localStorage.getItem('miCuenta.nome_token');
            let _venta = {};
            _venta.nome_token_cliente = this.nome_token_user;
            _venta.subtotal = '0';
            _venta.total = '0';
            // _venta.ubicacion_descripcion="";
            _venta.ubicacion_latitud = this._ubicacion.latitud;
            _venta.ubicacion_longitud = this._ubicacion.longitud;
            if (this._ubicacion != null) {
                console.log("entro al if");
                this.carritoService.generar_venta(this.nome_token_user, _venta)
                    .subscribe(item => {
                    _venta = item.items;
                    console.log('se genero la venta en cero', _venta.id);
                    this.carritoService.generar_pedido(this.nome_token_user, item.items)
                        .subscribe(item => {
                        console.log('se genero el pedido:', item);
                        this.filtro('');
                    }, error => {
                        console.log('error al generar el pedido: ', error);
                    });
                }, error => {
                    console.log('error al generar venta en cero ', error);
                });
            }
        });
    }
    generar_pedido() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            //obtener el token del usuario logeado.
            this.nome_token_user = localStorage.getItem('miCuenta.nome_token');
            //creo un objeto de tipo venta y lleno los campos correspondientes...
            // let _venta:Venta={
            //   'idcliente' : localStorage.getItem('miCuenta.id'),
            //   'subtotal'  : '0',
            //   'total'     : '0'
            // };
            let _venta = {};
            // _venta.idcliente =  localStorage.getItem('miCuenta.id');
            _venta.nome_token_cliente = localStorage.getItem("miCuenta.nome_token");
            _venta.subtotal = '0';
            _venta.total = '0';
            const alert = yield this.alertController.create({
                header: 'Confirmar!',
                message: 'Desea realizar el Pedido?',
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
                            this.carritoService.generar_venta(this.nome_token_user, _venta)
                                .subscribe(item => {
                                _venta = item.items;
                                console.log('se genero la venta en cero', _venta.id);
                                this.carritoService.generar_pedido(this.nome_token_user, item.items)
                                    .subscribe(item => {
                                    console.log('se genero el pedido:', item);
                                    this.filtro('');
                                }, error => {
                                    console.log('error al generar el pedido: ', error);
                                });
                            }, error => {
                                console.log('error al generar venta en cero ', error);
                            });
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    ////////////////////////encontrar ubicacion actual///////////////////////////////////////////
    guardarUBiActual() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const myLatLog = yield this.getLocation();
            console.log(myLatLog);
            this._ubicacion.latitud = myLatLog.lat;
            this._ubicacion.longitud = myLatLog.lng;
            // this._ubicacion.latitud= 89.38293823;
            // this._ubicacion.longitud = -89.38293823;
            if (this._ubicacion.longitud != null) {
                this.generar_pedido2();
            }
        });
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
CarritoPage.ctorParameters = () => [
    { type: src_app_services_carrito_carrito_service__WEBPACK_IMPORTED_MODULE_2__["CarritoService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__["Geolocation"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('listaCarrito', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonList"])
], CarritoPage.prototype, "listaCarrito", void 0);
CarritoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-carrito',
        template: __webpack_require__(/*! raw-loader!./carrito.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/carrito/carrito.page.html"),
        styles: [__webpack_require__(/*! ./carrito.page.scss */ "./src/app/pages/carrito/carrito.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_carrito_carrito_service__WEBPACK_IMPORTED_MODULE_2__["CarritoService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
        _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__["Geolocation"]])
], CarritoPage);



/***/ }),

/***/ "./src/app/pages/ubicacion-item-modal/ubicacion-item-modal.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/ubicacion-item-modal/ubicacion-item-modal.module.ts ***!
  \***************************************************************************/
/*! exports provided: UbicacionItemModalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UbicacionItemModalPageModule", function() { return UbicacionItemModalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ubicacion_item_modal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ubicacion-item-modal.page */ "./src/app/pages/ubicacion-item-modal/ubicacion-item-modal.page.ts");






// const routes: Routes = [
//   {
//     path: '',
//     component: UbicacionItemModalPage
//   }
// ];
let UbicacionItemModalPageModule = class UbicacionItemModalPageModule {
};
UbicacionItemModalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
        ],
        declarations: [_ubicacion_item_modal_page__WEBPACK_IMPORTED_MODULE_5__["UbicacionItemModalPage"]]
    })
], UbicacionItemModalPageModule);



/***/ }),

/***/ "./src/app/pages/ubicacion-item-modal/ubicacion-item-modal.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/ubicacion-item-modal/ubicacion-item-modal.page.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#map_modal {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ptYXJvbnY2NC9Fc2NyaXRvcmlvL0RFU0FSUk9MTE8vRmFybWFjaWFBcHAvc3JjL2FwcC9wYWdlcy91YmljYWNpb24taXRlbS1tb2RhbC91YmljYWNpb24taXRlbS1tb2RhbC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3ViaWNhY2lvbi1pdGVtLW1vZGFsL3ViaWNhY2lvbi1pdGVtLW1vZGFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy91YmljYWNpb24taXRlbS1tb2RhbC91YmljYWNpb24taXRlbS1tb2RhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFwX21vZGFse1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICAvLyBkaXNwbGF5OiBibG9jaztcbn0iLCIjbWFwX21vZGFsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/ubicacion-item-modal/ubicacion-item-modal.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/ubicacion-item-modal/ubicacion-item-modal.page.ts ***!
  \*************************************************************************/
/*! exports provided: UbicacionItemModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UbicacionItemModalPage", function() { return UbicacionItemModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




let UbicacionItemModalPage = class UbicacionItemModalPage {
    constructor(geolocation, loadingController, alertController, modalController) {
        this.geolocation = geolocation;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.modalController = modalController;
        this.map = null;
        this._ubicacion = {};
        /////////////////////////////////////Construir el marker//////////////////////////////////////////////////////////////
        // se envia las cordenadas para construir el marker y 
        //tambien la variable google para hacer modificaciones al mapa..
        this.markers = [];
    }
    ngOnInit() {
        this.loadMap();
    }
    loadMap() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            //////////////////////////////////////////////////////////////////////////////////////////
            const loading = yield this.loadingController.create({
                message: 'espere por favor...',
                spinner: 'bubbles',
                duration: 3000
            });
            loading.present();
            /////////////////////////////////////////////////////////////////////////////////////////
            const myLatLog = yield this.getLocation();
            console.log("coordenadas de inicio", myLatLog);
            const mapEle = document.getElementById('map_modal'); // en esta linea construye el mapa en el div
            this.map = new google.maps.Map(mapEle, {
                center: myLatLog,
                zoom: 15,
            });
            // este controlador de evento se dipara cuando se  el mapa  esta activo, llamo a la funcion addMarker
            google.maps.event.addListenerOnce(this.map, 'idle', (data) => {
                loading.dismiss();
                //this.hola(myLatLog.lat,myLatLog.lng,google);
                this.addMarker(myLatLog.lat, myLatLog.lng, google);
            });
            // este evento se dispara  cuando se le da click al mapa
            google.maps.event.addListener(this.map, 'click', (data) => {
                // console.log("otra coordenada",data.latLng.lat());
                console.log("otra coordenada", data.latLng);
                const x = data.latLng.lat();
                const y = data.latLng.lng();
                //this.addMarker(x,y,google);
                this.hola(x, y, google);
            });
        });
    }
    // esta funcion manda una alerta en caso de querer crear un marker
    hola(lat, lng, google) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.addMarker(lat, lng, google);
            // const alert = await this.alertController.create({
            //   header: 'Esta seguro?',
            //   message: 'que desea agregar esta ubicacion',
            //   buttons: [
            //     {
            //       text:'Cancelar',
            //       role:'cancel',
            //       cssClass:'secondary',
            //       handler: () => {
            //         //===============================================
            //         console.log('confirmar salida');
            //         //===============================================
            //       }
            //     },
            //     {
            //       text:'Ok',
            //       handler: ()=>{
            //         // =================ok===========================
            //         this.addMarker(lat,lng,google);
            //         //===============================================
            //       }
            //     }
            //   ]
            // });
            // await alert.present();
        });
    }
    addMarker(lat, lng, google) {
        console.log(lat, lng);
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
        const marker = new google.maps.Marker({
            position: {
                lat: lat,
                lng: lng
            },
            zoom: 8,
            map: this.map,
            title: 'Mi Ubicacion',
            // icon:iconBase,
            // icon:'/assets/img/logocruzazul_logo.png',
            animation: google.maps.Animation.BOUNCE,
        });
        this._ubicacion.latitud = lat;
        this._ubicacion.longitud = lng;
        console.log(this._ubicacion);
        //console.log(marker);
        this.markers.forEach((item, a) => {
            item.setMap(null);
        });
        this.markers.push(marker);
        //Zoom a la zona del marker seleccionado
        google.maps.event.addListener(marker, 'click', function () {
            //marker.setMap(null);
            this.map.setZoom(16);
            this.map.setCenter(marker.getPosition());
        });
        google.maps.event.addListener(marker, 'dblclick', function () {
            marker.setMap(null);
        });
    }
    //////////////////////////////buscar la ubicacion actual///////////////////////////////////////////////////////////////
    getLocation() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const rta = yield this.geolocation.getCurrentPosition();
            return {
                lat: rta.coords.latitude,
                lng: rta.coords.longitude
            };
        });
    }
    guardarUBi() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // this._ubicacion.latitud= -1.222;
            // this._ubicacion.longitud = -3.00;
            // const myLatLog = await this.getLocation();
            // this._ubicacion.latitud= myLatLog.lat;
            // this._ubicacion.longitud = myLatLog.lng;
            if (this._ubicacion.longitud != null) {
                this.modalController.dismiss(this._ubicacion);
            }
        });
    }
    salir() {
        this._ubicacion.latitud = null;
        this._ubicacion.longitud = null;
        this.modalController.dismiss(this._ubicacion);
    }
};
UbicacionItemModalPage.ctorParameters = () => [
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] }
];
UbicacionItemModalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ubicacion-item-modal',
        template: __webpack_require__(/*! raw-loader!./ubicacion-item-modal.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/ubicacion-item-modal/ubicacion-item-modal.page.html"),
        styles: [__webpack_require__(/*! ./ubicacion-item-modal.page.scss */ "./src/app/pages/ubicacion-item-modal/ubicacion-item-modal.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]])
], UbicacionItemModalPage);



/***/ })

}]);
//# sourceMappingURL=pages-carrito-carrito-module-es2015.js.map