(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-miscompras-miscompras-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/miscompras-item-modal/miscompras-item-modal.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/miscompras-item-modal/miscompras-item-modal.page.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\r\n  <ion-toolbar>\r\n    <ion-title>Detalle de la Compra</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"salir()\">\r\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid fixed>\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        \r\n        <ion-list>\r\n          <!-- <ion-list-header>\r\n\r\n          </ion-list-header> -->\r\n          <ion-item *ngFor=\"let item of item.detalle\">\r\n              <ion-col size=\"8\" class=\"ion-text-lowercase\">  {{item.producto.descripcion}}</ion-col>\r\n              <ion-col size=\"1\">  {{item.cantidad}}</ion-col>\r\n              <ion-col size=\"3\"> \r\n                <ion-text color=\"cruz-tertiary\">\r\n                  {{item.subtotal | currency :'USD':'symbol':'2.2-2'}}\r\n                </ion-text> \r\n              </ion-col>\r\n          </ion-item>\r\n        </ion-list>\r\n\r\n      </ion-col>\r\n    </ion-row>\r\n    <!-- <ion-row>\r\n      <ion-col size=\"6\">NOMBRE</ion-col>\r\n      <ion-col size=\"3\">CANTIDAD</ion-col>\r\n      <ion-col size=\"3\">SUBTOTAL</ion-col>\r\n    </ion-row> -->\r\n    <!-- <hr class=\"hola\">\r\n    <ion-row *ngFor=\"let item of item.detalle\">\r\n      <ion-col size=\"6\">{{item.producto.descripcion}}</ion-col>\r\n      <ion-col size=\"3\">{{item.cantidad}}</ion-col>\r\n      <ion-col size=\"3\">{{item.subtotal}}</ion-col>\r\n    </ion-row> -->\r\n  </ion-grid>\r\n</ion-content>\r\n<ion-footer *ngIf=\"item.estado.cod === '002'\" no-border>\r\n  <ion-toolbar>\r\n    <ion-button (click)=\"generarFactura(item)\" color=\"cruz-primary\" expand=\"full\">Finalizar</ion-button>\r\n  </ion-toolbar>\r\n</ion-footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/miscompras/miscompras.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/miscompras/miscompras.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>miscompras</ion-title>\r\n  </ion-toolbar>\r\n</ion-header> -->\r\n\r\n<ion-header no-border>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button color=\"cruz-primary\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      Mis Compras\r\n    </ion-title>\r\n  </ion-toolbar>\r\n  <ion-toolbar>\r\n    <ion-segment #segmentoCompras (ionChange)=\"segmentChanged($event)\" color=\"cruz-primary\">\r\n      <ion-segment-button value=\"pedidos\" class=\"ion-no-padding\">\r\n        <ion-label>Pendientes</ion-label>\r\n      </ion-segment-button>\r\n      <ion-segment-button value=\"en_proceso\" class=\"ion-no-padding\">\r\n        <ion-label>En Proceso</ion-label>\r\n      </ion-segment-button>\r\n      <ion-segment-button value=\"finalizados\" class=\"ion-no-padding\">\r\n        <ion-label>Finalizadas</ion-label>\r\n      </ion-segment-button>\r\n    </ion-segment>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n\r\n        <ion-list #ListaCompras>\r\n      \r\n          <ion-item-sliding *ngFor=\"let item of items | filtroRelacion: textoBuscar :'estado':'cod'\">\r\n            <!-- datos del item -->\r\n            <ion-item >\r\n              <ion-text color=\"cruz-primary\">\r\n                {{item.fecha}} <!--[{{ item.estado.descripcion }}]--> \r\n              </ion-text>\r\n              <ion-text slot=\"end\" color=\"cruz-tertiary\">\r\n                {{ item.total | currency :'USD':'symbol':'2.2-2'  }}\r\n              </ion-text>\r\n            </ion-item>\r\n            <!-- Opciones del item -->\r\n            <ion-item-options side=\"start\">\r\n              <ion-item-option color=\"cruz-primary\" (click)=\"verItem(item)\">\r\n                <ion-icon slot=\"icon-only\" name=\"clipboard\"></ion-icon>\r\n              </ion-item-option>\r\n            </ion-item-options>\r\n            <!-- <ion-item-options side=\"end\">\r\n              <ion-item-option color=\"cruz-tertiary\" (click)=\"eliminar(item)\">\r\n                <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\r\n              </ion-item-option>\r\n            </ion-item-options> -->\r\n      \r\n          </ion-item-sliding>\r\n      \r\n        </ion-list>\r\n        \r\n\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/miscompras-item-modal/miscompras-item-modal.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/miscompras-item-modal/miscompras-item-modal.module.ts ***!
  \*****************************************************************************/
/*! exports provided: MiscomprasItemModalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiscomprasItemModalPageModule", function() { return MiscomprasItemModalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _miscompras_item_modal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./miscompras-item-modal.page */ "./src/app/pages/miscompras-item-modal/miscompras-item-modal.page.ts");






// const routes: Routes = [
//   {
//     path: '',
//     component: MiscomprasItemModalPage
//   }
// ];
var MiscomprasItemModalPageModule = /** @class */ (function () {
    function MiscomprasItemModalPageModule() {
    }
    MiscomprasItemModalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            ],
            declarations: [_miscompras_item_modal_page__WEBPACK_IMPORTED_MODULE_5__["MiscomprasItemModalPage"]]
        })
    ], MiscomprasItemModalPageModule);
    return MiscomprasItemModalPageModule;
}());



/***/ }),

/***/ "./src/app/pages/miscompras-item-modal/miscompras-item-modal.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/miscompras-item-modal/miscompras-item-modal.page.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hola {\n  border-bottom: 1px solid #ccc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ptYXJvbnY2NC9Fc2NyaXRvcmlvL0RFU0FSUk9MTE8vRmFybWFjaWFBcHAvc3JjL2FwcC9wYWdlcy9taXNjb21wcmFzLWl0ZW0tbW9kYWwvbWlzY29tcHJhcy1pdGVtLW1vZGFsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbWlzY29tcHJhcy1pdGVtLW1vZGFsL21pc2NvbXByYXMtaXRlbS1tb2RhbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw2QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbWlzY29tcHJhcy1pdGVtLW1vZGFsL21pc2NvbXByYXMtaXRlbS1tb2RhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9sYXtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjOztcclxufSIsIi5ob2xhIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/miscompras-item-modal/miscompras-item-modal.page.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/miscompras-item-modal/miscompras-item-modal.page.ts ***!
  \***************************************************************************/
/*! exports provided: MiscomprasItemModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiscomprasItemModalPage", function() { return MiscomprasItemModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_compras_compras_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/compras/compras.service */ "./src/app/services/compras/compras.service.ts");




var MiscomprasItemModalPage = /** @class */ (function () {
    function MiscomprasItemModalPage(modalController, comprasService, alertController) {
        this.modalController = modalController;
        this.comprasService = comprasService;
        this.alertController = alertController;
        this.item = {};
        this.nome_token_user = '';
    }
    MiscomprasItemModalPage.prototype.ngOnInit = function () {
    };
    MiscomprasItemModalPage.prototype.salir = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.modalController.dismiss(0);
                return [2 /*return*/];
            });
        });
    };
    MiscomprasItemModalPage.prototype.generarFactura = function (_item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.nome_token_user = localStorage.getItem('miCuenta.nome_token');
                        return [4 /*yield*/, this.alertController.create({
                                header: 'Mensaje',
                                message: 'Al generar la factura se procedera a finalizar la entrega del pedido, está de acuerdo con esto?',
                                buttons: [
                                    {
                                        text: 'Cancel',
                                        role: 'cancel',
                                        cssClass: 'secondary',
                                        handler: function () {
                                            console.log('Confirm Cancel: blah');
                                            _this.modalController.dismiss(0);
                                        }
                                    }, {
                                        text: 'Ok',
                                        handler: function () {
                                            console.log('Confirm Okay');
                                            _this.nome_token_user = localStorage.getItem('miCuenta.nome_token');
                                            _this.comprasService.finalizar_venta(_this.nome_token_user, _item).subscribe(function (item) {
                                                _this.modalController.dismiss(1);
                                            }, function (error) {
                                                _this.modalController.dismiss(0);
                                            });
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
    MiscomprasItemModalPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: src_app_services_compras_compras_service__WEBPACK_IMPORTED_MODULE_3__["ComprasService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MiscomprasItemModalPage.prototype, "item", void 0);
    MiscomprasItemModalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-miscompras-item-modal',
            template: __webpack_require__(/*! raw-loader!./miscompras-item-modal.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/miscompras-item-modal/miscompras-item-modal.page.html"),
            styles: [__webpack_require__(/*! ./miscompras-item-modal.page.scss */ "./src/app/pages/miscompras-item-modal/miscompras-item-modal.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            src_app_services_compras_compras_service__WEBPACK_IMPORTED_MODULE_3__["ComprasService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], MiscomprasItemModalPage);
    return MiscomprasItemModalPage;
}());



/***/ }),

/***/ "./src/app/pages/miscompras/miscompras.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/miscompras/miscompras.module.ts ***!
  \*******************************************************/
/*! exports provided: MiscomprasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiscomprasPageModule", function() { return MiscomprasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _miscompras_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./miscompras.page */ "./src/app/pages/miscompras/miscompras.page.ts");
/* harmony import */ var _miscompras_item_modal_miscompras_item_modal_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../miscompras-item-modal/miscompras-item-modal.page */ "./src/app/pages/miscompras-item-modal/miscompras-item-modal.page.ts");
/* harmony import */ var _miscompras_item_modal_miscompras_item_modal_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../miscompras-item-modal/miscompras-item-modal.module */ "./src/app/pages/miscompras-item-modal/miscompras-item-modal.module.ts");
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");










var routes = [
    {
        path: '',
        component: _miscompras_page__WEBPACK_IMPORTED_MODULE_6__["MiscomprasPage"]
    }
];
var MiscomprasPageModule = /** @class */ (function () {
    function MiscomprasPageModule() {
    }
    MiscomprasPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            entryComponents: [_miscompras_item_modal_miscompras_item_modal_page__WEBPACK_IMPORTED_MODULE_7__["MiscomprasItemModalPage"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _miscompras_item_modal_miscompras_item_modal_module__WEBPACK_IMPORTED_MODULE_8__["MiscomprasItemModalPageModule"],
                src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_9__["PipesModule"]
            ],
            declarations: [_miscompras_page__WEBPACK_IMPORTED_MODULE_6__["MiscomprasPage"]]
        })
    ], MiscomprasPageModule);
    return MiscomprasPageModule;
}());



/***/ }),

/***/ "./src/app/pages/miscompras/miscompras.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/miscompras/miscompras.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21pc2NvbXByYXMvbWlzY29tcHJhcy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/miscompras/miscompras.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/miscompras/miscompras.page.ts ***!
  \*****************************************************/
/*! exports provided: MiscomprasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiscomprasPage", function() { return MiscomprasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_compras_compras_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/compras/compras.service */ "./src/app/services/compras/compras.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _miscompras_item_modal_miscompras_item_modal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../miscompras-item-modal/miscompras-item-modal.page */ "./src/app/pages/miscompras-item-modal/miscompras-item-modal.page.ts");






var MiscomprasPage = /** @class */ (function () {
    function MiscomprasPage(comprasService, modalController, alertController, router, platform) {
        this.comprasService = comprasService;
        this.modalController = modalController;
        this.alertController = alertController;
        this.router = router;
        this.platform = platform;
        this.items = [];
        this.textoBuscar = '001';
    }
    MiscomprasPage.prototype.ngOnInit = function () {
        //this.segmentoCompras.value = 'pedidos';
        //this.segmentoCompras.value="pedidos";
        var _this = this;
        this.filtro('');
        this.platform.ready().then(function () {
            _this.segmentoCompras.value = "pedidos";
        });
    };
    //esta funcion sirve para traer los productos almacenados en la farmacia y almacenarlos en una lista
    MiscomprasPage.prototype.filtro = function (_value) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.nome_token_user = localStorage.getItem('miCuenta.nome_token');
                this.comprasService.filtro(this.nome_token_user, _value)
                    .subscribe(function (item) {
                    _this.items = item.items;
                }, function (error) {
                    console.log(error);
                });
                return [2 /*return*/];
            });
        });
    };
    MiscomprasPage.prototype.segmentChanged = function (event) {
        if (event.target.value === "pedidos") {
            this.textoBuscar = '001';
        }
        else if (event.target.value === "en_proceso") {
            this.textoBuscar = '002';
        }
        else if (event.target.value === "finalizados") {
            this.textoBuscar = '003';
        }
        console.log(event.target.value);
    };
    MiscomprasPage.prototype.verItem = function (_item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(_item);
                        return [4 /*yield*/, this.modalController.create({
                                component: _miscompras_item_modal_miscompras_item_modal_page__WEBPACK_IMPORTED_MODULE_5__["MiscomprasItemModalPage"],
                                componentProps: {
                                    item: _item
                                }
                            })];
                    case 1:
                        modal = _a.sent();
                        this.ListaCompras.closeSlidingItems();
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, modal.onDidDismiss()];
                    case 3:
                        data = (_a.sent()).data;
                        console.log(data);
                        if (data == 0) {
                        }
                        else if (data == 1) {
                            this.filtro('');
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    MiscomprasPage.prototype.eliminar = function (_item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Esta seguro?',
                            message: 'que desea eliminar',
                            buttons: [
                                {
                                    text: 'Cancelar',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                        console.log('confirmar salida');
                                    }
                                },
                                {
                                    text: 'Ok',
                                    handler: function () {
                                        // =================Eliminar========================
                                        _this.nome_token_user = localStorage.getItem('miCuenta.nome_token');
                                        _this.comprasService.delete(_this.nome_token_user, _item).subscribe(function (item) {
                                            _this.filtro("");
                                        }, function (error) {
                                            _this.ListaCompras.closeSlidingItems();
                                        });
                                        console.log('eliminacion confirmada');
                                        //==========================================
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MiscomprasPage.ctorParameters = function () { return [
        { type: src_app_services_compras_compras_service__WEBPACK_IMPORTED_MODULE_2__["ComprasService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ListaCompras', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonList"])
    ], MiscomprasPage.prototype, "ListaCompras", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('segmentoCompras', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSegment"])
    ], MiscomprasPage.prototype, "segmentoCompras", void 0);
    MiscomprasPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-miscompras',
            template: __webpack_require__(/*! raw-loader!./miscompras.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/miscompras/miscompras.page.html"),
            styles: [__webpack_require__(/*! ./miscompras.page.scss */ "./src/app/pages/miscompras/miscompras.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_compras_compras_service__WEBPACK_IMPORTED_MODULE_2__["ComprasService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]])
    ], MiscomprasPage);
    return MiscomprasPage;
}());



/***/ }),

/***/ "./src/app/services/compras/compras.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/compras/compras.service.ts ***!
  \*****************************************************/
/*! exports provided: ComprasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComprasService", function() { return ComprasService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ComprasService = /** @class */ (function () {
    function ComprasService(http) {
        this.http = http;
        this.apiUrl = "http://127.0.0.1:8000/api/v0/";
        this._headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        this._params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
    }
    ComprasService.prototype.filtro = function (_nome_token_user, _value) {
        var _params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({
            fromObject: {
                'value': _value,
            }
        });
        return this.http.get(this.apiUrl + "ventas_mi_historial_pediodos/" + _nome_token_user + "/", { headers: this._headers, params: _params });
    };
    ComprasService.prototype.delete = function (_nome_token_user, _request) {
        // return this.http.delete<ProductoResult>()
        var _params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({
            fromObject: {
                'nome_token': _request.nome_token,
            }
        });
        return this.http.delete(this.apiUrl + "ventas_delete/" + _nome_token_user + "/", { headers: this._headers, params: _params });
        // let httpOptions={headers:this._headers,params:this._params};
    };
    ComprasService.prototype.finalizar_venta = function (_nome_token_user, _request) {
        var _params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({
            fromObject: {
                'nome_token': _request.nome_token,
            }
        });
        return this.http.put(this.apiUrl + "vemtas_finalizar_venta/" + _nome_token_user + "/", _request, { headers: this._headers });
    };
    ComprasService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ComprasService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ComprasService);
    return ComprasService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-miscompras-miscompras-module-es5.js.map