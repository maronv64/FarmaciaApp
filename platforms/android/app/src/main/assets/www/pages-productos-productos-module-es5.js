(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-productos-productos-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/productos-item-modal/productos-item-modal.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/productos-item-modal/productos-item-modal.page.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\r\n  <ion-toolbar>\r\n    <ion-title  text-capitalize>Informacion</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"salir()\">\r\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-grid >\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        <ion-list>\r\n          \r\n          <ion-item lines=\"none\" *ngIf=\"item.descripcion != null\">\r\n            <ion-text slot=\"start\" color=\"primary\">Nombre:</ion-text> <ion-text slot=\"end\" class=\"ion-text-lowercase\"> {{item.descripcion}} </ion-text>\r\n          </ion-item>\r\n          <!-- <ion-item lines=\"none\" *ngIf=\"item.descripcion != null\" >\r\n            <ion-text class=\"ion-text-lowercase\">{{item.descripcion}}</ion-text>\r\n          </ion-item>           -->\r\n          <ion-item lines=\"none\" *ngIf=\"item.precio != null\">\r\n            <ion-text slot=\"start\" color=\"cruz-primary\">Precio:</ion-text> <ion-text slot=\"end\"> {{item.precio | currency :'USD':'symbol':'2.2-2' }}</ion-text>\r\n          </ion-item>\r\n          <!-- <ion-item lines=\"none\" *ngIf=\"item.precio != null\">\r\n            <ion-text>{{item.precio | currency :'USD':'symbol':'2.2-2' }}</ion-text>\r\n          </ion-item> -->\r\n          <ion-item lines=\"none\" *ngIf=\"item.cantidad != null\">\r\n            <ion-text slot=\"start\" color=\"cruz-primary\">Existencias:</ion-text>\r\n            <ion-text slot=\"end\"> {{item.cantidad}} </ion-text>\r\n          </ion-item>\r\n          <!-- <ion-item lines=\"none\" *ngIf=\"item.cantidad != null\">\r\n            <ion-text>{{item.cantidad}}</ion-text>\r\n          </ion-item>   -->\r\n          <ion-item lines=\"none\" *ngIf=\"item.presentacion != null\">\r\n            <ion-text slot=\"start\" color=\"cruz-primary\">Presentacion:</ion-text>\r\n            <ion-text slot=\"end\" > {{item.presentacion}} </ion-text>\r\n          </ion-item>\r\n          <!-- <ion-item lines=\"none\" *ngIf=\"item.presentacion != null\">\r\n            <ion-text>{{item.presentacion}}</ion-text>\r\n          </ion-item> -->\r\n          <ion-item lines=\"none\" *ngIf=\"item.consentracion != null\">\r\n            <ion-text slot=\"start\" color=\"cruz-primary\">Consentracion:</ion-text>\r\n            <ion-text slot=\"end\">\r\n              <h1>Awesome text</h1>\r\n            </ion-text>\r\n          </ion-item>\r\n          <!-- <ion-item lines=\"none\" *ngIf=\"item.consentracion != null\">\r\n            <ion-text>{{item.consentracion}}</ion-text>\r\n          </ion-item> -->\r\n          <ion-item lines=\"none\" *ngIf=\"item.observacion != null\">\r\n            <ion-text color=\"cruz-primary\">Observaciones:</ion-text>\r\n          </ion-item>\r\n          <ion-item lines=\"none\" *ngIf=\"item.observacion != null\">\r\n            <ion-text class=\"ion-text-lowercase\">{{item.observacion}}</ion-text>\r\n          </ion-item>\r\n          \r\n        </ion-list>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n</ion-content>\r\n\r\n<ion-footer no-border>\r\n  <ion-toolbar>\r\n    <ion-row>\r\n      <ion-col size=\"6\">\r\n        <ion-button (click)=\"salir()\" color=\"cruz-tertiary\" expand=\"full\">\r\n          <ion-icon slot=\"start\" name=\"close-circle-outline\"></ion-icon>\r\n          Cancelar\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col size=\"6\">\r\n        <ion-button (click)=\"add()\" color=\"cruz-primary\" expand=\"full\">\r\n          <ion-icon slot=\"start\" name=\"add-circle-outline\"></ion-icon>\r\n          Agregar\r\n        </ion-button>        \r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/productos/productos.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/productos/productos.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>productos</ion-title>\r\n  </ion-toolbar>\r\n</ion-header> -->\r\n\r\n<ion-header no-border>\r\n  <ion-toolbar >\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button color=\"cruz-primary\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      Productos\r\n    </ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"verCarrito()\"> <!--routerLink=\"/carrito\"-->\r\n        <ion-icon slot=\"icon-only\" name=\"cart\" [color]=\"colorCarrito\"></ion-icon><ion-label [color]=\"colorCarrito\">{{contadorCarrito || '' }}</ion-label>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n  \r\n  <!-- <ion-grid fixed>\r\n    <ion-row>\r\n      <ion-col size=\"12\"> -->\r\n        <ion-searchbar placeholder=\"Nombre del producto...\" (ionChange)=\"onSearchChange($event)\" [debounce]=\"250\"></ion-searchbar>\r\n      <!-- </ion-col>\r\n    </ion-row>\r\n  </ion-grid> -->\r\n  \r\n\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content\r\n      pullingIcon=\"arrow-dropdown\"\r\n      pullingText=\"Refrescar...\"\r\n      refreshingSpinner=\"bubbles\"\r\n      refreshingText=\"Refrescando...\">\r\n    </ion-refresher-content>\r\n  </ion-refresher>\r\n\r\n  <ion-grid >\r\n    <ion-row >\r\n      <ion-col class=\"ion-no-padding\" *ngFor=\"let item of items | filtro: textoBuscar : 'descripcion'\" size=\"12\" size-lg=\"3\" size-md=\"4\" size-sm=\"6\" size-xs=\"12\">\r\n        <ion-card button (click)=\"verItem(item)\">\r\n          <ion-img *ngIf=\"item.file_name == null\" src=\"/assets/img/logocruzazul.jpg\"></ion-img>\r\n          <ion-img *ngIf=\"item.file_name != null\" src=\"http://localhost:8000/img/items/{{item.file_name}}.{{item.file_extension}}\"></ion-img>\r\n          \r\n          <ion-card-content>\r\n            <ion-text color=\"primary\">\r\n              {{ item.descripcion }} \r\n            </ion-text>\r\n            <ion-card-title> <p> c/u: {{ item.precio | currency :'USD':'symbol':'2.2-2' }}</p> </ion-card-title>\r\n          </ion-card-content>\r\n\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n\r\n\r\n  <!-- <ion-grid fixed>\r\n    <ion-row>\r\n      <ion-col *ngFor=\"let item of items\" size=\"12\" size-lg=\"3\" size-md=\"4\" size-sm=\"6\" size-xs=\"12\">\r\n        <ion-card >\r\n          <ion-img *ngIf=\"item.file_name == null\" src=\"/assets/img/logocruzazul.jpg\"></ion-img>\r\n          <ion-img *ngIf=\"item.file_name != null\" src=\"http://localhost:8000/img/items/{{item.file_name}}.{{item.file_extension}}\"></ion-img>\r\n          <ion-card-header>\r\n            <ion-card-subtitle>\r\n              {{ item.descripcion }} \r\n            </ion-card-subtitle>\r\n\r\n            <ion-card-title>\r\n              c/u: $ {{ item.precio }} \r\n            </ion-card-title>\r\n\r\n          </ion-card-header>\r\n\r\n          <ion-card-content>\r\n            <ion-button color=\"cruz-primary\" expand=\"full\" (click)=\"verItem(item)\">\r\n              <ion-icon slot=\"icon-only\" name=\"add\"></ion-icon>\r\n            </ion-button>\r\n          </ion-card-content>\r\n        </ion-card>            \r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid> -->\r\n\r\n      \r\n  \r\n</ion-content>\r\n\r\n\r\n<!-- \r\n<ion-content>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n\r\n        <ion-list #listaProductos>     \r\n  \r\n\r\n          <ion-item-sliding *ngFor=\"let item of items\">        \r\n\r\n            <ion-item >\r\n              <ion-label>\r\n                <h3>{{ item.descripcion }}</h3>\r\n                <p>[{{ item.cantidad }}]</p>\r\n              </ion-label>\r\n              <ion-label slot=\"end\" text-rigth>$ {{ item.precio }}</ion-label>\r\n            </ion-item>\r\n\r\n            <ion-item-options side=\"start\">\r\n              <ion-item-option color=\"cruz-primary\" (click)=\"verItem(item)\">\r\n                <ion-icon slot=\"icon-only\" name=\"heart\"></ion-icon>\r\n              </ion-item-option>\r\n            </ion-item-options>\r\n      \r\n          </ion-item-sliding>\r\n      \r\n        </ion-list>\r\n        \r\n\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n</ion-content> -->\r\n"

/***/ }),

/***/ "./src/app/pages/productos-item-modal/productos-item-modal.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/productos-item-modal/productos-item-modal.module.ts ***!
  \***************************************************************************/
/*! exports provided: ProductosItemModalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductosItemModalPageModule", function() { return ProductosItemModalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _productos_item_modal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./productos-item-modal.page */ "./src/app/pages/productos-item-modal/productos-item-modal.page.ts");




// import { Routes, RouterModule } from '@angular/router';


// const routes: Routes = [
//   {
//     path: '',
//     component: ProductosItemModalPage
//   }
// ];
var ProductosItemModalPageModule = /** @class */ (function () {
    function ProductosItemModalPageModule() {
    }
    ProductosItemModalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            ],
            declarations: [_productos_item_modal_page__WEBPACK_IMPORTED_MODULE_5__["ProductosItemModalPage"]]
        })
    ], ProductosItemModalPageModule);
    return ProductosItemModalPageModule;
}());



/***/ }),

/***/ "./src/app/pages/productos-item-modal/productos-item-modal.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/productos-item-modal/productos-item-modal.page.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3Rvcy1pdGVtLW1vZGFsL3Byb2R1Y3Rvcy1pdGVtLW1vZGFsLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/productos-item-modal/productos-item-modal.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/productos-item-modal/productos-item-modal.page.ts ***!
  \*************************************************************************/
/*! exports provided: ProductosItemModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductosItemModalPage", function() { return ProductosItemModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_carrito_carrito_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/carrito/carrito.service */ "./src/app/services/carrito/carrito.service.ts");




var ProductosItemModalPage = /** @class */ (function () {
    function ProductosItemModalPage(modalController, alertController, carritoService) {
        this.modalController = modalController;
        this.alertController = alertController;
        this.carritoService = carritoService;
        this.item = {};
        this.newItemCarrito = {};
    }
    ProductosItemModalPage.prototype.ngOnInit = function () {
    };
    ProductosItemModalPage.prototype.salir = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.modalController.dismiss();
                return [2 /*return*/];
            });
        });
    };
    ProductosItemModalPage.prototype.add = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Elija la cantidad!',
                            // message:'hola',
                            inputs: [
                                {
                                    name: '_cantidad',
                                    type: 'number',
                                    value: 1,
                                    min: 1,
                                    max: this.item.cantidad,
                                }
                            ],
                            buttons: [
                                {
                                    text: 'Cancelar',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                        console.log('Confirm Cancel');
                                    }
                                }, {
                                    text: 'Ok',
                                    handler: function (input) {
                                        console.log('Confirm Ok');
                                        if (input._cantidad != "") {
                                            _this.newItemCarrito.cantidad = input._cantidad;
                                            _this.newItemCarrito.idproducto = _this.item.id;
                                            // this.itemCarrito.precio_u   = this.item.precio;
                                            var nome_token_user = localStorage.getItem('miCuenta.nome_token');
                                            _this.carritoService.store(nome_token_user, _this.newItemCarrito)
                                                .subscribe(function (data) {
                                                //console.log(data);
                                                _this.modalController.dismiss(parseInt(input._cantidad));
                                            }, function (error) {
                                                console.log(error);
                                            });
                                        }
                                        // const _item = this.item;
                                        // this.modalController.dismiss({ _item,_cantidad});
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductosItemModalPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: src_app_services_carrito_carrito_service__WEBPACK_IMPORTED_MODULE_3__["CarritoService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProductosItemModalPage.prototype, "item", void 0);
    ProductosItemModalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-productos-item-modal',
            template: __webpack_require__(/*! raw-loader!./productos-item-modal.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/productos-item-modal/productos-item-modal.page.html"),
            styles: [__webpack_require__(/*! ./productos-item-modal.page.scss */ "./src/app/pages/productos-item-modal/productos-item-modal.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            src_app_services_carrito_carrito_service__WEBPACK_IMPORTED_MODULE_3__["CarritoService"]])
    ], ProductosItemModalPage);
    return ProductosItemModalPage;
}());



/***/ }),

/***/ "./src/app/pages/productos/productos.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/productos/productos.module.ts ***!
  \*****************************************************/
/*! exports provided: ProductosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductosPageModule", function() { return ProductosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _productos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./productos.page */ "./src/app/pages/productos/productos.page.ts");
/* harmony import */ var _productos_item_modal_productos_item_modal_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../productos-item-modal/productos-item-modal.page */ "./src/app/pages/productos-item-modal/productos-item-modal.page.ts");
/* harmony import */ var _productos_item_modal_productos_item_modal_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../productos-item-modal/productos-item-modal.module */ "./src/app/pages/productos-item-modal/productos-item-modal.module.ts");
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");










var routes = [
    {
        path: '',
        component: _productos_page__WEBPACK_IMPORTED_MODULE_6__["ProductosPage"]
    }
];
var ProductosPageModule = /** @class */ (function () {
    function ProductosPageModule() {
    }
    ProductosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            entryComponents: [_productos_item_modal_productos_item_modal_page__WEBPACK_IMPORTED_MODULE_7__["ProductosItemModalPage"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _productos_item_modal_productos_item_modal_module__WEBPACK_IMPORTED_MODULE_8__["ProductosItemModalPageModule"],
                src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_9__["PipesModule"]
            ],
            declarations: [_productos_page__WEBPACK_IMPORTED_MODULE_6__["ProductosPage"]]
        })
    ], ProductosPageModule);
    return ProductosPageModule;
}());



/***/ }),

/***/ "./src/app/pages/productos/productos.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/productos/productos.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3Rvcy9wcm9kdWN0b3MucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/productos/productos.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/productos/productos.page.ts ***!
  \***************************************************/
/*! exports provided: ProductosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductosPage", function() { return ProductosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_producto_producto_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/producto/producto.service */ "./src/app/services/producto/producto.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _productos_item_modal_productos_item_modal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../productos-item-modal/productos-item-modal.page */ "./src/app/pages/productos-item-modal/productos-item-modal.page.ts");






var ProductosPage = /** @class */ (function () {
    function ProductosPage(productoService, router, modalController, loadingController) {
        this.productoService = productoService;
        this.router = router;
        this.modalController = modalController;
        this.loadingController = loadingController;
        this._request = {};
        // contadorCarrito:number=0;
        this.contadorCarrito = null;
        this.colorCarrito = null;
        this.textoBuscar = '';
    }
    ProductosPage.prototype.ngOnInit = function () {
        this.filtro('');
        // console.log("recibido:"+localStorage.getItem('Usuario.name'));
    };
    ProductosPage.prototype.onSearchChange = function (event) {
        this.textoBuscar = event.target.value;
    };
    ProductosPage.prototype.ionViewWillEnter = function () {
        console.log("hola->cargar pagina");
        this.filtro('');
    };
    ProductosPage.prototype.doRefresh = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                setTimeout(function () {
                    _this.filtro('');
                    event.target.complete();
                }, 1000);
                return [2 /*return*/];
            });
        });
    };
    ProductosPage.prototype.filtro = function (_nome_token) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Espere un monento...',
                            spinner: 'bubbles'
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        this._request.nome_token = _nome_token;
                        this.nome_token_user = localStorage.getItem('miCuenta.nome_token');
                        this.productoService.filtro(this.nome_token_user, this._request).subscribe(function (item) {
                            _this.items = item.items;
                            loading.dismiss();
                            //console.log(this.items);
                        }, function (error) {
                            console.log(error);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductosPage.prototype.verItem = function (_item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _productos_item_modal_productos_item_modal_page__WEBPACK_IMPORTED_MODULE_5__["ProductosItemModalPage"],
                            componentProps: {
                                item: _item
                            }
                            // componentProps:{
                            //   descripcion:item.descripcion,
                            //   descripcion_larga:item.descripcion_larga,
                            //   precio:item.precio,
                            //   observacion:item.observacion,
                            //   marca:item.marca,
                            //   presentacion:item.presentacion,
                            //   medida:item.medida,
                            //   concentracion:item.concentracion
                            // }
                        })];
                    case 1:
                        modal = _a.sent();
                        //this.listaProductos.closeSlidingItems();
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        //this.listaProductos.closeSlidingItems();
                        _a.sent();
                        return [4 /*yield*/, modal.onDidDismiss()];
                    case 3:
                        data = (_a.sent()).data;
                        //console.log(data);
                        if (data != null) {
                            this.contadorCarrito += data;
                            console.log(data);
                            this.colorCarrito = "primary";
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductosPage.prototype.verCarrito = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.contadorCarrito = null;
                this.colorCarrito = null;
                this.router.navigateByUrl('/carrito');
                return [2 /*return*/];
            });
        });
    };
    ProductosPage.ctorParameters = function () { return [
        { type: src_app_services_producto_producto_service__WEBPACK_IMPORTED_MODULE_3__["ProductoService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('listaProductos', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonList"])
    ], ProductosPage.prototype, "listaProductos", void 0);
    ProductosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-productos',
            template: __webpack_require__(/*! raw-loader!./productos.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/productos/productos.page.html"),
            styles: [__webpack_require__(/*! ./productos.page.scss */ "./src/app/pages/productos/productos.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_producto_producto_service__WEBPACK_IMPORTED_MODULE_3__["ProductoService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]])
    ], ProductosPage);
    return ProductosPage;
}());



/***/ }),

/***/ "./src/app/services/producto/producto.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/producto/producto.service.ts ***!
  \*******************************************************/
/*! exports provided: ProductoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductoService", function() { return ProductoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");


 // comunicacion con las apis
var ProductoService = /** @class */ (function () {
    function ProductoService(http) {
        this.http = http;
        this.apiUrl = "http://127.0.0.1:8000/api/v0/";
        this._headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        this._params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
    }
    // private httpOptions={headers:this._headers,params:};
    ProductoService.prototype.show = function (_nome_token_user, _request) {
        var _params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({
            fromObject: {
                'nome_token': _request.nome_token,
            }
        });
        return this.http.get(this.apiUrl + "productos_show/" + _nome_token_user + "/", { headers: this._headers, params: _params });
    };
    ProductoService.prototype.filtro = function (_nome_token_user, _request) {
        var _params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({
            fromObject: {
                'nome_token': _request.nome_token,
            }
        });
        return this.http.get(this.apiUrl + "productos_filtro/" + _nome_token_user + "/", { headers: this._headers, params: _params });
    };
    ProductoService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ProductoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProductoService);
    return ProductoService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-productos-productos-module-es5.js.map