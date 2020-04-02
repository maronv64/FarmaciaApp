(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/login/login.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\r\n  <ion-toolbar >\r\n    <ion-title></ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n\r\n  <form #frmLogin=\"ngForm\" >\r\n    \r\n    <ion-grid>\r\n      <ion-row>\r\n          <ion-col size=\"12\"><br><br><br><br></ion-col>\r\n      </ion-row>\r\n      <!-- <ion-row>\r\n        <ion-col size=\"12\" size-lg=\"4\" size-md=\"4\" size-sm=\"4\" size-xs=\"4\"></ion-col>\r\n        <ion-col size=\"12\" size-lg=\"4\" size-md=\"4\" size-sm=\"4\" size-xs=\"4\">\r\n          <ion-img src=\"/assets/img/logocruzazul_logo.png\"></ion-img>\r\n        </ion-col>\r\n        <ion-col size=\"12\" size-lg=\"4\" size-md=\"4\" size-sm=\"4\" size-xs=\"4\"></ion-col>\r\n      </ion-row> -->\r\n\r\n      <ion-row>\r\n        <ion-col>\r\n\r\n            <ion-list>\r\n              \r\n              <ion-list-header>\r\n                  <ion-col size=\"4\" size-lg=\"5\" size-md=\"5\" size-sm=\"5\" size-xs=\"4\"></ion-col>\r\n                  <ion-col size=\"4\" size-lg=\"2\" size-md=\"2\" size-sm=\"2\" size-xs=\"4\">\r\n                    <ion-img src=\"/assets/img/logocruzazul_logo.png\"></ion-img>\r\n                  </ion-col>\r\n                  <ion-col size=\"4\" size-lg=\"5\" size-md=\"5\" size-sm=\"5\" size-xs=\"4\"></ion-col>\r\n              </ion-list-header>\r\n              <ion-item lines=\"none\"></ion-item>\r\n\r\n              <ion-item>\r\n                <ion-label position=\"floating\">email:</ion-label>\r\n                <ion-input  required name=\"email\" type=\"email\" [(ngModel)]=\"usuario.email\" \r\n                            pattern=\"^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$\"></ion-input>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"floating\">password:</ion-label>\r\n                <ion-input required name=\"password\" type=\"password\" [(ngModel)]=\"usuario.password\"></ion-input>\r\n              </ion-item>\r\n          \r\n            </ion-list>           \r\n\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col size=\"12\">\r\n          <ion-text color=\"cruz-primary\"> \r\n            <a routerLink=\"/register\" > <p>Crea una Cuenta</p> </a>\r\n          </ion-text>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n    </ion-grid>\r\n\r\n  </form>\r\n</ion-content>\r\n\r\n<ion-footer no-border>\r\n  <ion-toolbar>\r\n    <!-- <ion-button (click)=\"schedule()\">\r\n      Click me\r\n    </ion-button> -->\r\n    <ion-button color=\"cruz-primary\" (click)=\"login()\" type=\"submit\" expand=\"full\" [disabled]=\"frmLogin.invalid\">Ingresar</ion-button>\r\n  </ion-toolbar>\r\n</ion-footer>"

/***/ }),

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");







var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ptYXJvbnY2NC9Fc2NyaXRvcmlvL0RFU0FSUk9MTE8vRmFybWFjaWFBcHAvc3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNJLGtCQUFBO0FDSEoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpb24tY29udGVudHtcclxuLy8gICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6cmdiKDU2LCA1MiwgMTA3KTtcclxuLy8gfVxyXG5cclxucHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSIsInAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/usuario/usuario.service */ "./src/app/services/usuario/usuario.service.ts");
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ "./node_modules/@ionic-native/local-notifications/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../app.component */ "./src/app/app.component.ts");


// import { LoginService } from '../../services/login/login.service';





var LoginPage = /** @class */ (function () {
    function LoginPage(usuarioService, router, localNotifications, loadingController, appComponent) {
        this.usuarioService = usuarioService;
        this.router = router;
        this.localNotifications = localNotifications;
        this.loadingController = loadingController;
        this.appComponent = appComponent;
        this.usuario = {};
    }
    LoginPage.prototype.ngOnInit = function () {
        console.log(localStorage.getItem('miCuenta.nome_token'));
        if (localStorage.getItem('miCuenta.nome_token') != null) {
            this.router.navigateByUrl('/home');
        }
        this.schedule();
    };
    LoginPage.prototype.schedule = function () {
        // Schedule a single notification
        this.localNotifications.schedule({
            id: 1,
            text: 'Noemy y Dolo',
            // sound: isAndroid? 'file://sound.mp3': 'file://beep.caf',
            data: { secret: "key" }
        });
        console.log("message");
    };
    LoginPage.prototype.login = function () {
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
                        this.usuarioService.login(this.usuario.email, this.usuario.password).subscribe(function (item) {
                            try {
                                if (item.items.nome_token != null) {
                                    localStorage.setItem('miCuenta.nome_token', item.items.nome_token);
                                    localStorage.setItem('miCuenta.tipo.cod', item.items.tipo.cod);
                                    loading.dismiss();
                                    _this.router.navigateByUrl('/home');
                                    console.log('ingresado: ' + localStorage.getItem('miCuenta.nome_token'));
                                    _this.appComponent.menu();
                                }
                            }
                            catch (error) {
                                loading.dismiss();
                                _this.router.navigateByUrl('/login');
                            }
                        }, function (error) {
                            console.log(error);
                            loading.dismiss();
                            _this.router.navigateByUrl('/login');
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.ctorParameters = function () { return [
        { type: src_app_services_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_4__["LocalNotifications"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
        { type: _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('frmLogin', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LoginPage.prototype, "frmLogin", void 0);
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_4__["LocalNotifications"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"],
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module-es5.js.map