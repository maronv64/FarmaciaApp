(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-usuario-usuario-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/usuario/usuario.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/usuario/usuario.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>usuario</ion-title>\r\n  </ion-toolbar>\r\n</ion-header> -->\r\n\r\n<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button color=\"cruz-primary\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      Mi Perfil\r\n    </ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-back-button defaultHref=\"/configuracion\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n \r\n  <ion-item lines=\"none\">\r\n    <ion-avatar slot=\"start\">\r\n      <img src=\"/assets/img/user_0.png\" />\r\n    </ion-avatar>\r\n    <ion-label>{{usuario.name}} : {{usuario.email}} </ion-label>\r\n    <!-- <ion-label>:{{usuario.email}}</ion-label> -->\r\n  </ion-item>\r\n\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n\r\n\r\n  <ion-grid>\r\n\r\n    <!-- <ion-row>\r\n      <ion-col size=\"12\">\r\n        <ion-list>\r\n          <ion-item lines=\"none\"  routerLink=\"/login\" detail>\r\n            <ion-icon slot=\"start\" name=\"exit\"></ion-icon>\r\n            <ion-label>Cerrar Sesion </ion-label>\r\n          </ion-item> \r\n        </ion-list>\r\n      </ion-col>\r\n    </ion-row> -->\r\n    \r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-item>\r\n          <ion-label position=\"stacked\" color=\"cruz-primary\">nombre:</ion-label>\r\n          <ion-input [(ngModel)]=\"usuario.name\" placeholder=\"nombre\" type=\"text\"></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label position=\"stacked\" color=\"cruz-primary\">email:</ion-label>\r\n          <ion-input [(ngModel)]=\"usuario.email\" placeholder=\"email\" type=\"email\" disabled></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label position=\"stacked\" color=\"cruz-primary\">cédula:</ion-label>\r\n          <ion-input [(ngModel)]=\"usuario.cedula\" placeholder=\"cédula\" type=\"tel\" disabled></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label position=\"stacked\" color=\"cruz-primary\">celular:</ion-label>\r\n          <ion-input [(ngModel)]=\"usuario.celular\" placeholder=\"celular\" type=\"tel\"></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label position=\"stacked\" color=\"cruz-primary\">password:</ion-label>\r\n          <ion-input [(ngModel)]=\"usuario.password2\" placeholder=\"clave\" [type]=\"inputType\"></ion-input>\r\n          <!-- <ion-label ></ion-label> -->\r\n          <ion-buttons slot=\"end\">\r\n            <ion-button (click)=\"verPassword()\">\r\n              <ion-icon slot=\"icon-only\" name=\"eye\" [color]=\"newcolor\"></ion-icon>\r\n            </ion-button>\r\n          </ion-buttons>\r\n          \r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n  </ion-grid>\r\n\r\n</ion-content>\r\n\r\n<ion-footer no-border>\r\n  <ion-toolbar>\r\n    <ion-button expand=\"full\" (click)=\"editar()\">Editar</ion-button>\r\n  </ion-toolbar>\r\n</ion-footer>"

/***/ }),

/***/ "./src/app/pages/usuario/usuario.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/usuario/usuario.module.ts ***!
  \*************************************************/
/*! exports provided: UsuarioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioPageModule", function() { return UsuarioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _usuario_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./usuario.page */ "./src/app/pages/usuario/usuario.page.ts");







var routes = [
    {
        path: '',
        component: _usuario_page__WEBPACK_IMPORTED_MODULE_6__["UsuarioPage"]
    }
];
var UsuarioPageModule = /** @class */ (function () {
    function UsuarioPageModule() {
    }
    UsuarioPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_usuario_page__WEBPACK_IMPORTED_MODULE_6__["UsuarioPage"]]
        })
    ], UsuarioPageModule);
    return UsuarioPageModule;
}());



/***/ }),

/***/ "./src/app/pages/usuario/usuario.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/usuario/usuario.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzdWFyaW8vdXN1YXJpby5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/usuario/usuario.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/usuario/usuario.page.ts ***!
  \***********************************************/
/*! exports provided: UsuarioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioPage", function() { return UsuarioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/usuario/usuario.service */ "./src/app/services/usuario/usuario.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var UsuarioPage = /** @class */ (function () {
    function UsuarioPage(usuarioService, alertController) {
        this.usuarioService = usuarioService;
        this.alertController = alertController;
        this.usuario = {};
        this.inputType = 'password';
        this.newcolor = null;
        this.contador = '0';
    }
    UsuarioPage.prototype.ngOnInit = function () {
        this.traerUsuario();
    };
    UsuarioPage.prototype.traerUsuario = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                // this.usuario = new Usuario();
                this.nome_token_user = localStorage.getItem('miCuenta.nome_token');
                //console.log(this.nome_token);
                // var contador:number = 0;
                this.usuarioService.show(this.nome_token_user, this.nome_token_user).subscribe(function (item) {
                    console.log("item: ", _this.usuario.name);
                    //console.log(item);
                    _this.usuario.name = item.items.name;
                    _this.usuario.email = item.items.email;
                    _this.usuario.cedula = item.items.cedula;
                    _this.usuario.celular = item.items.celular;
                    _this.usuario.password2 = item.items.password2;
                }, function (error) {
                    console.log(error);
                });
                return [2 /*return*/];
            });
        });
    };
    UsuarioPage.prototype.editar = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Alerta!',
                            message: 'Desea editar su perfil?',
                            buttons: [
                                {
                                    text: 'Cancelar',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                        console.log('Confirm Cancel: blah');
                                    }
                                }, {
                                    text: 'Ok',
                                    handler: function () {
                                        console.log('Confirm Okay');
                                        _this.nome_token_user = localStorage.getItem('miCuenta.nome_token');
                                        console.log(_this.usuario);
                                        _this.usuario.password = _this.usuario.password2;
                                        _this.usuarioService.update(_this.nome_token_user, _this.usuario).subscribe(function (item) {
                                            // console.log(item);
                                            _this.traerUsuario();
                                        }, function (error) {
                                            console.log(error);
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
    UsuarioPage.prototype.verPassword = function () {
        if (this.contador == '0') {
            this.inputType = "text";
            this.contador = '1';
            this.newcolor = 'primary';
        }
        else if (this.contador == '1') {
            this.inputType = "password";
            this.contador = '0';
            this.newcolor = null;
        }
    };
    UsuarioPage.ctorParameters = function () { return [
        { type: _services_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
    ]; };
    UsuarioPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-usuario',
            template: __webpack_require__(/*! raw-loader!./usuario.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/usuario/usuario.page.html"),
            styles: [__webpack_require__(/*! ./usuario.page.scss */ "./src/app/pages/usuario/usuario.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
    ], UsuarioPage);
    return UsuarioPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-usuario-usuario-module-es5.js.map