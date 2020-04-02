(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-ubicacion-ubicacion-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/ubicacion/ubicacion.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/ubicacion/ubicacion.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\r\n  <ion-toolbar>\r\n    <ion-title>Ubicacion</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-back-button icon=\"arrow-back\" [defaultHref]=\"null\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n  <!-- <ion-searchbar placeholder=\"Lugar\" inputmode=\"email\" type=\"decimal\" (ionChange)=\"onSearchChange($event)\" [debounce]=\"250\"></ion-searchbar> -->\r\n\r\n</ion-header>\r\n\r\n<ion-content >\r\n    <input type=\"hidden\" id=\"search\">\r\n  <div id=\"map\"></div> \r\n\r\n</ion-content>\r\n<!-- \r\n<ion-footer no-border>\r\n  <ion-toolbar>\r\n    <ion-title>Footer</ion-title>\r\n    <ion-button expand=\"full\" color=\"cruz-primary\" (click)=\"guardarUBi()\">Guardar Ubicación</ion-button>\r\n  </ion-toolbar>\r\n</ion-footer> -->"

/***/ }),

/***/ "./src/app/pages/ubicacion/ubicacion.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/ubicacion/ubicacion.module.ts ***!
  \*****************************************************/
/*! exports provided: UbicacionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UbicacionPageModule", function() { return UbicacionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ubicacion_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ubicacion.page */ "./src/app/pages/ubicacion/ubicacion.page.ts");







var routes = [
    {
        path: '',
        component: _ubicacion_page__WEBPACK_IMPORTED_MODULE_6__["UbicacionPage"]
    }
];
var UbicacionPageModule = /** @class */ (function () {
    function UbicacionPageModule() {
    }
    UbicacionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_ubicacion_page__WEBPACK_IMPORTED_MODULE_6__["UbicacionPage"]]
        })
    ], UbicacionPageModule);
    return UbicacionPageModule;
}());



/***/ }),

/***/ "./src/app/pages/ubicacion/ubicacion.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/ubicacion/ubicacion.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#map {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ptYXJvbnY2NC9Fc2NyaXRvcmlvL0RFU0FSUk9MTE8vRmFybWFjaWFBcHAvc3JjL2FwcC9wYWdlcy91YmljYWNpb24vdWJpY2FjaW9uLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvdWJpY2FjaW9uL3ViaWNhY2lvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdWJpY2FjaW9uL3ViaWNhY2lvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFwe1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAvLyBkaXNwbGF5OiBibG9jaztcclxufSIsIiNtYXAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/ubicacion/ubicacion.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/ubicacion/ubicacion.page.ts ***!
  \***************************************************/
/*! exports provided: UbicacionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UbicacionPage", function() { return UbicacionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/usuario/usuario.service */ "./src/app/services/usuario/usuario.service.ts");





var UbicacionPage = /** @class */ (function () {
    function UbicacionPage(geolocation, loadingController, alertController, usuarioService) {
        // this.platform.ready().then(()=>{
        //   var mapOption={
        //     center:{lat:23.2366,lng:79.3822},
        //     zoom: 7
        //   }
        this.geolocation = geolocation;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.usuarioService = usuarioService;
        this.map = null;
        this.filtro = "Ecuador";
        this.latitudee = ""; // variable global para almacenar la nogitud
        this.longitudee = ""; // lo mismo de arriba
        this.timestamp = "";
        this._ubicacion = {};
        /////////////////////////////////////Construir el marker//////////////////////////////////////////////////////////////
        // se envia las cordenadas para construir el marker y 
        //tambien la variable google para hacer modificaciones al mapa..
        this.markers = [];
        this.latitude = null;
        this.longitude = null;
        //   this.map = new google.maps.Map(document.getElementById("map"),mapOption);
        //   this.getGeoLocation();
        // });
    }
    UbicacionPage.prototype.ngOnInit = function () {
        this.loadMap();
        //this.hola();
    };
    UbicacionPage.prototype.guardarUBi = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.nome_token_user = localStorage.getItem("miCuenta.nome_token");
                        this.usuarioService.ubicacion(this.nome_token_user, this._ubicacion).subscribe(function (item) {
                        }, function (error) { });
                        return [4 /*yield*/, this.alertController.create({
                                header: 'Alerta!',
                                message: 'Desea Guardar la ubicacion Actual?',
                                buttons: [
                                    {
                                        text: 'Cancel',
                                        role: 'cancel',
                                        cssClass: 'secondary',
                                        handler: function () {
                                            console.log('Confirm Cancel: blah');
                                        }
                                    }, {
                                        text: 'Ok',
                                        handler: function () {
                                            console.log('Ubicacion Guardada...');
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
    UbicacionPage.prototype.loadMap = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, myLatLog, mapEle;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'espere por favor...',
                            spinner: 'bubbles',
                            duration: 3000
                        })];
                    case 1:
                        loading = _a.sent();
                        loading.present();
                        return [4 /*yield*/, this.getLocation()];
                    case 2:
                        myLatLog = _a.sent();
                        console.log("coordenadas de inicio", myLatLog);
                        mapEle = document.getElementById('map');
                        this.map = new google.maps.Map(mapEle, {
                            center: myLatLog,
                            zoom: 15,
                        });
                        // const map = new google.maps.Map(mapEle,{
                        //   center: myLatLog,
                        //   zoom:12
                        // });
                        // este controlador de evento se dipara cuando se  el mapa  esta activo, llamo a la funcion addMarker
                        google.maps.event.addListenerOnce(this.map, 'idle', function (data) {
                            loading.dismiss();
                            //this.hola(myLatLog.lat,myLatLog.lng,google);
                            _this.addMarker(myLatLog.lat, myLatLog.lng, google);
                            // this.addMarker(-0.85,-80.1795618,google);
                            //this.getLocationSearch();
                            // const marker = new google.maps.Marker({
                            //   position: {
                            //     lat: myLatLog.lat,
                            //     lng: myLatLog.lng
                            //   },
                            //   zoom:8,
                            //   map:this.map,
                            //   title:'Mi Ubicacion'
                            // });
                        });
                        // este evento se dispara  cuando se le da click al mapa
                        google.maps.event.addListener(this.map, 'click', function (data) {
                            // console.log("otra coordenada",data.latLng.lat());
                            console.log("otra coordenada", data.latLng);
                            var x = data.latLng.lat();
                            var y = data.latLng.lng();
                            //this.addMarker(x,y,google);
                            _this.hola(x, y, google);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    // esta funcion manda una alerta en caso de querer crear un marker
    UbicacionPage.prototype.hola = function (lat, lng, google) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Esta seguro?',
                            message: 'que desea agregar esta ubicacion',
                            buttons: [
                                {
                                    text: 'Cancelar',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                        //===============================================
                                        console.log('confirmar salida');
                                        //===============================================
                                    }
                                },
                                {
                                    text: 'Ok',
                                    handler: function () {
                                        // =================ok===========================
                                        _this.addMarker(lat, lng, google);
                                        //===============================================
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
    UbicacionPage.prototype.addMarker = function (lat, lng, google) {
        var hooo = ['1', '2', '3'];
        console.log(lat, lng);
        var marker = new google.maps.Marker({
            position: {
                lat: lat,
                lng: lng
            },
            zoom: 8,
            map: this.map,
            title: 'Mi Ubicacion',
            animation: google.maps.Animation.BOUNCE // animacion
        });
        this._ubicacion.latitud = lat;
        this._ubicacion.longitud = lng;
        console.log(this._ubicacion);
        //console.log(marker);
        this.markers.forEach(function (item, a) {
            item.setMap(null);
        });
        this.markers.push(marker);
        //Zoom a la zona del marker seleccionado
        google.maps.event.addListener(marker, 'click', function () {
            //marker.setMap(null);
            this.map.setZoom(17);
            this.map.setCenter(marker.getPosition());
        });
        google.maps.event.addListener(marker, 'dblclick', function () {
            marker.setMap(null);
        });
        // marker.on(google.maps.event.MARKER_CLICK).subscribe(() => {
        //   alert('clicked');
        // });
    };
    //////////////////////////////buscar la ubicacion actual///////////////////////////////////////////////////////////////
    UbicacionPage.prototype.getLocation = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var rta;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.geolocation.getCurrentPosition()];
                    case 1:
                        rta = _a.sent();
                        return [2 /*return*/, {
                                lat: rta.coords.latitude,
                                lng: rta.coords.longitude
                            }];
                }
            });
        });
    };
    UbicacionPage.prototype.getLocationSearch = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var watch;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.geolocation.watchPosition()];
                    case 1:
                        watch = _a.sent();
                        watch.subscribe(function (data) {
                            console.log(data);
                            _this.latitude = data.coords.latitude,
                                _this.longitude = data.coords.longitude;
                            //this.addMarker(data.coords.latitude,data.coords.longitude);
                        });
                        return [2 /*return*/, {
                                lat: this.latitude,
                                lng: this.longitude
                            }];
                }
            });
        });
    };
    UbicacionPage.prototype.onSearchChange = function (event) {
    };
    UbicacionPage.ctorParameters = function () { return [
        { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: src_app_services_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"] }
    ]; };
    UbicacionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ubicacion',
            template: __webpack_require__(/*! raw-loader!./ubicacion.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/ubicacion/ubicacion.page.html"),
            styles: [__webpack_require__(/*! ./ubicacion.page.scss */ "./src/app/pages/ubicacion/ubicacion.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            src_app_services_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"]])
    ], UbicacionPage);
    return UbicacionPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-ubicacion-ubicacion-module-es5.js.map