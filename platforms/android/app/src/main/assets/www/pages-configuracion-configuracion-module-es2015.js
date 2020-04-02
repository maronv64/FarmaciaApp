(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-configuracion-configuracion-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/configuracion/configuracion.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/configuracion/configuracion.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header >\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button color=\"cruz-primary\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      Configuración\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list>\r\n    <ion-item lines=\"none\"  routerLink=\"/usuario\" >\r\n      <ion-icon color=\"cruz-primary\" slot=\"start\" name=\"create\"></ion-icon>\r\n      <ion-label>Cuenta </ion-label>\r\n    </ion-item>\r\n    <ion-item lines=\"none\"  routerLink=\"/ubicacion\" >\r\n      <ion-icon color=\"cruz-primary\" slot=\"start\" name=\"pin\"></ion-icon>\r\n      <ion-label>Ubicacion </ion-label>\r\n    </ion-item>\r\n    <ion-item lines=\"none\" (click)=\"cerrarSesion()\">\r\n      <ion-icon color=\"cruz-primary\" slot=\"start\" name=\"exit\"></ion-icon>\r\n      <ion-label>Cerrar Sesion </ion-label>\r\n    </ion-item> \r\n  </ion-list>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/configuracion/configuracion.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/configuracion/configuracion.module.ts ***!
  \*************************************************************/
/*! exports provided: ConfiguracionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfiguracionPageModule", function() { return ConfiguracionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _configuracion_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./configuracion.page */ "./src/app/pages/configuracion/configuracion.page.ts");







const routes = [
    {
        path: '',
        component: _configuracion_page__WEBPACK_IMPORTED_MODULE_6__["ConfiguracionPage"]
    }
];
let ConfiguracionPageModule = class ConfiguracionPageModule {
};
ConfiguracionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_configuracion_page__WEBPACK_IMPORTED_MODULE_6__["ConfiguracionPage"]]
    })
], ConfiguracionPageModule);



/***/ }),

/***/ "./src/app/pages/configuracion/configuracion.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/configuracion/configuracion.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbmZpZ3VyYWNpb24vY29uZmlndXJhY2lvbi5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/configuracion/configuracion.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/configuracion/configuracion.page.ts ***!
  \***********************************************************/
/*! exports provided: ConfiguracionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfiguracionPage", function() { return ConfiguracionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




// import { UsuarioService } from 'src/app/services/usuario/usuario.service';
// import { Usuario } from 'src/app/interfaces/usuario/usuario';
let ConfiguracionPage = class ConfiguracionPage {
    constructor(alertController, router) {
        this.alertController = alertController;
        this.router = router;
    }
    ngOnInit() {
    }
    // nome_token_user: string="";
    // usuario:Usuario={};
    cerrarSesion() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // this.nome_token_user = localStorage.getItem('miCuenta.nome_token');
            // console.log(this.nome_token_user);
            // this.usuarioService.show(this.nome_token_user,this.nome_token_user).subscribe(
            //   item=>{
            //     console.log(item.items.name);
            //     this.usuario.name = item.items.name;
            //   },error=>{
            //     console.log(error);
            // });
            const alert = yield this.alertController.create({
                header: `Sesion`,
                message: 'Desea cerrar la sesion?',
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
                            // console.log('Confirm Okay');
                            localStorage.removeItem("miCuenta.nome_token");
                            this.router.navigateByUrl("/login");
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
ConfiguracionPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ConfiguracionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-configuracion',
        template: __webpack_require__(/*! raw-loader!./configuracion.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/configuracion/configuracion.page.html"),
        styles: [__webpack_require__(/*! ./configuracion.page.scss */ "./src/app/pages/configuracion/configuracion.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], ConfiguracionPage);



/***/ })

}]);
//# sourceMappingURL=pages-configuracion-configuracion-module-es2015.js.map