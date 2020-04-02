(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-inicio-inicio-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/inicio/inicio.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/inicio/inicio.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\r\n  <ion-toolbar>\r\n    <!-- <ion-buttons slot=\"end\">\r\n      <ion-button color=\"cruz-primary\" (click)=\"startApp()\">Ingresar</ion-button>\r\n    </ion-buttons> -->\r\n    <!-- <ion-title>inicio</ion-title> -->\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"12\"><br><br><br><br></ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col size=\"2\" size-lg=\"3\" size-md=\"4\" size-sm=\"4\" size-xs=\"1\"></ion-col>\r\n      <ion-col size=\"8\" size-lg=\"6\" size-md=\"4\" size-sm=\"4\" size-xs=\"10\">\r\n        <ion-img src=\"/assets/img/logocruzazul.jpg\"></ion-img>\r\n      </ion-col>\r\n      <ion-col size=\"2\" size-lg=\"3\" size-md=\"4\" size-sm=\"4\" size-xs=\"1\"></ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col size=\"12\"><br><br><br><br></ion-col>\r\n    </ion-row>\r\n    \r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        <ion-button expand=\"full\" color=\"cruz-primary\" (click)=\"startApp()\">Ingresar</ion-button>\r\n        <ion-text color=\"cruz-primary\"> \r\n          <a routerLink=\"/register\" > <p>Crea una Cuenta</p> </a>\r\n        </ion-text>\r\n        \r\n        <!-- <ion-button routerLink=\"/register\" expand=\"full\" color=\"cruz-primary\" >Crea una Cuenta</ion-button> -->\r\n        <!-- <ion-text color=\"cruz-primary\">\r\n            <p>p: The quick brown fox jumps over the lazy dog</p>\r\n        </ion-text> -->\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n</ion-content>\r\n<ion-footer no-border>\r\n  <ion-toolbar>\r\n    <!-- <ion-button routerLink=\"/register\" expand=\"full\" color=\"cruz-primary\" >Registrarse</ion-button> -->\r\n  </ion-toolbar>\r\n</ion-footer>"

/***/ }),

/***/ "./src/app/pages/inicio/inicio.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/inicio/inicio.module.ts ***!
  \***********************************************/
/*! exports provided: InicioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioPageModule", function() { return InicioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _inicio_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inicio.page */ "./src/app/pages/inicio/inicio.page.ts");







const routes = [
    {
        path: '',
        component: _inicio_page__WEBPACK_IMPORTED_MODULE_6__["InicioPage"]
    }
];
let InicioPageModule = class InicioPageModule {
};
InicioPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_inicio_page__WEBPACK_IMPORTED_MODULE_6__["InicioPage"]]
    })
], InicioPageModule);



/***/ }),

/***/ "./src/app/pages/inicio/inicio.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/inicio/inicio.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  text-align: center;\n}\n\nion-content {\n  background-image: url(\"/src/assets/img/conejo.png\");\n  -webkit-background-image: url(\"/src/assets/img/conejo.png\");\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ptYXJvbnY2NC9Fc2NyaXRvcmlvL0RFU0FSUk9MTE8vRmFybWFjaWFBcHAvc3JjL2FwcC9wYWdlcy9pbmljaW8vaW5pY2lvLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvaW5pY2lvL2luaWNpby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksbURBQUE7RUFDQSwyREFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaW5pY2lvL2luaWNpby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvc3JjL2Fzc2V0cy9pbWcvY29uZWpvLnBuZ1wiKTtcclxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL3NyYy9hc3NldHMvaW1nL2NvbmVqby5wbmdcIik7XHJcbn0iLCJwIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24tY29udGVudCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9zcmMvYXNzZXRzL2ltZy9jb25lam8ucG5nXCIpO1xuICAtd2Via2l0LWJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9zcmMvYXNzZXRzL2ltZy9jb25lam8ucG5nXCIpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/inicio/inicio.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/inicio/inicio.page.ts ***!
  \*********************************************/
/*! exports provided: InicioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioPage", function() { return InicioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let InicioPage = class InicioPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    startApp() {
        if (localStorage.getItem("miCuente.nome_token") == null) {
            console.log(localStorage.getItem("miCuente.nome_token"));
            this.router.navigateByUrl("/login");
        }
        else {
            this.router.navigateByUrl("/home");
        }
        // this.router.navigateByUrl('/home');
    }
};
InicioPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
InicioPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-inicio',
        template: __webpack_require__(/*! raw-loader!./inicio.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/inicio/inicio.page.html"),
        styles: [__webpack_require__(/*! ./inicio.page.scss */ "./src/app/pages/inicio/inicio.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], InicioPage);



/***/ })

}]);
//# sourceMappingURL=pages-inicio-inicio-module-es2015.js.map