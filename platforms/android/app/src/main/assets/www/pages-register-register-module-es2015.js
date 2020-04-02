(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-register-register-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/register/register.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/register/register.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border >\r\n  <ion-toolbar >\r\n    <ion-title>Registro</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n        <ion-back-button defaultHref=\"/inicio\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <form #frmRegister=\"ngForm\" (ngSubmit)=\"login()\">\r\n\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n\r\n            <ion-list>\r\n              <!-- <img src=\"\"  alt=\"\"> -->\r\n              <ion-list-header>\r\n                <ion-col size=\"4\"></ion-col>\r\n                <ion-col size=\"4\">\r\n                  <ion-img src=\"/assets/img/logocruzazul_logo.png\"></ion-img>\r\n                </ion-col>\r\n                <ion-col size=\"4\"></ion-col>\r\n                \r\n                <!-- <div id=\"centrador\">\r\n                  <img id=\"imagen\" src=\"/assets/img/conejo.png\" alt=\"\">\r\n                </div> -->\r\n              </ion-list-header>\r\n\r\n              <ion-item>\r\n                <ion-label position=\"floating\" color=\"cruz-primary\">nombre:</ion-label>\r\n                <ion-input  required name=\"name\" type=\"text\" [(ngModel)]=\"usuario.name\"></ion-input>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"floating\" color=\"cruz-primary\">email:</ion-label>\r\n                <ion-input  required name=\"email\" type=\"email\" [(ngModel)]=\"usuario.email\" \r\n                            pattern=\"^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$\"></ion-input>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"floating\" color=\"cruz-primary\">cédula:</ion-label>\r\n                <ion-input  required name=\"cedula\" type=\"text\" [(ngModel)]=\"usuario.cedula\"></ion-input>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"floating\" color=\"cruz-primary\">celular:</ion-label>\r\n                <ion-input  required name=\"celular\" type=\"text\" [(ngModel)]=\"usuario.celular\"></ion-input>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"floating\" color=\"cruz-primary\">password:</ion-label>\r\n                <ion-input required name=\"password\" type=\"password\" [(ngModel)]=\"usuario.password\"></ion-input>\r\n              </ion-item>\r\n\r\n            </ion-list>\r\n\r\n            \r\n            <!-- <ion-button type=\"submit\" expand=\"full\" [disabled]=\"frmLogin.invalid\">Enviar</ion-button> -->\r\n                      \r\n\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n    </ion-grid>\r\n\r\n  </form>\r\n\r\n  <!-- <ion-slides mode=\"ios\" pager=\"ios\" scrollbar=\"ios\">\r\n    <ion-slide>\r\n      <h1>Awesome Slide Content</h1>\r\n    </ion-slide>\r\n    <ion-slide>\r\n      <h1>Awesome Slide Content</h1>\r\n    </ion-slide>\r\n  </ion-slides> -->\r\n\r\n\r\n</ion-content>\r\n\r\n<ion-footer no-border>\r\n  <ion-toolbar>\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        \r\n        <ion-button expand=\"full\" (click)=\"register()\" [disabled]=\"frmRegister.invalid\">Registrar</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-footer>"

/***/ }),

/***/ "./src/app/pages/register/register.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.module.ts ***!
  \***************************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/pages/register/register.page.ts");







const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]
    }
];
let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
    })
], RegisterPageModule);



/***/ }),

/***/ "./src/app/pages/register/register.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#centrador {\n  position: relative;\n  width: 400px;\n  height: 400px;\n  background-color: red;\n}\n\n#imagen {\n  position: absolute;\n  width: 100px;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ptYXJvbnY2NC9Fc2NyaXRvcmlvL0RFU0FSUk9MTE8vRmFybWFjaWFBcHAvc3JjL2FwcC9wYWdlcy9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjZW50cmFkb3J7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG59XHJcblxyXG4jaW1hZ2Vue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbiIsIiNjZW50cmFkb3Ige1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA0MDBweDtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuXG4jaW1hZ2VuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwcHg7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbWFyZ2luOiBhdXRvO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/register/register.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/register/register.page.ts ***!
  \*************************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/usuario/usuario.service */ "./src/app/services/usuario/usuario.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





let RegisterPage = class RegisterPage {
    constructor(usuarioService, router, alertController) {
        this.usuarioService = usuarioService;
        this.router = router;
        this.alertController = alertController;
        this.usuario = {};
        this.nome_token_user = '';
    }
    ngOnInit() {
    }
    register() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // this.nome_token_user = localStorage.getItem("miCuenta.nome_token");
            this.usuarioService.register(this.usuario)
                .subscribe(item => {
                localStorage.setItem("miCuenta.nome_token", item.items.nome_token);
                console.log(localStorage.getItem("miCuenta.nome_token"));
                this.router.navigateByUrl("/productos");
            }, error => {
                this.presentAlert();
            });
        });
    }
    presentAlert() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Error',
                subHeader: 'verifica los campos a ingresar...',
                message: 'Intenta nuevamente',
                buttons: [{
                        text: 'ok',
                        handler: (input) => {
                            this.router.navigateByUrl("/register");
                        }
                    }]
            });
            yield alert.present();
        });
    }
};
RegisterPage.ctorParameters = () => [
    { type: src_app_services_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('frmRegister', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], RegisterPage.prototype, "frmRegister", void 0);
RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(/*! raw-loader!./register.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/register/register.page.html"),
        styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/pages/register/register.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])
], RegisterPage);



/***/ })

}]);
//# sourceMappingURL=pages-register-register-module-es2015.js.map