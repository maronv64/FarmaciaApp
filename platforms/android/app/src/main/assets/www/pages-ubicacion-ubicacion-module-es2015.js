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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ubicacion_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ubicacion.page */ "./src/app/pages/ubicacion/ubicacion.page.ts");







const routes = [
    {
        path: '',
        component: _ubicacion_page__WEBPACK_IMPORTED_MODULE_6__["UbicacionPage"]
    }
];
let UbicacionPageModule = class UbicacionPageModule {
};
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/usuario/usuario.service */ "./src/app/services/usuario/usuario.service.ts");





let UbicacionPage = class UbicacionPage {
    constructor(geolocation, loadingController, alertController, usuarioService) {
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
    ngOnInit() {
        this.loadMap();
        //this.hola();
    }
    guardarUBi() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.nome_token_user = localStorage.getItem("miCuenta.nome_token");
            this.usuarioService.ubicacion(this.nome_token_user, this._ubicacion).subscribe(item => {
            }, error => { });
            const alert = yield this.alertController.create({
                header: 'Alerta!',
                message: 'Desea Guardar la ubicacion Actual?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Ok',
                        handler: () => {
                            console.log('Ubicacion Guardada...');
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
                duration: 3000
            });
            loading.present();
            /////////////////////////////////////////////////////////////////////////////////////////
            const myLatLog = yield this.getLocation();
            console.log("coordenadas de inicio", myLatLog);
            const mapEle = document.getElementById('map'); // en esta linea construye el mapa en el div
            this.map = new google.maps.Map(mapEle, {
                center: myLatLog,
                zoom: 15,
            });
            // const map = new google.maps.Map(mapEle,{
            //   center: myLatLog,
            //   zoom:12
            // });
            // este controlador de evento se dipara cuando se  el mapa  esta activo, llamo a la funcion addMarker
            google.maps.event.addListenerOnce(this.map, 'idle', (data) => {
                loading.dismiss();
                //this.hola(myLatLog.lat,myLatLog.lng,google);
                this.addMarker(myLatLog.lat, myLatLog.lng, google);
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
            google.maps.event.addListener(this.map, 'click', (data) => {
                // console.log("otra coordenada",data.latLng.lat());
                console.log("otra coordenada", data.latLng);
                const x = data.latLng.lat();
                const y = data.latLng.lng();
                //this.addMarker(x,y,google);
                this.hola(x, y, google);
            });
            ///////////////////////////////localizacion por descripcion/////////////////////////////////////////////////////////////////////
            // const search :HTMLElement = document.getElementById('search');
            // var defaultBounds = new google.maps.LatLngBounds(
            //   new google.maps.LatLng(-33.8902, 151.1759),
            //   new google.maps.LatLng(-33.8474, 151.2631));
            // var input = document.getElementById('search');
            // var options = {
            //   bounds: defaultBounds,
            //   types: ['establishment']
            // };
            // const autocomplete = new google.maps.places.Autocomplete(input, options);
            /////////////////////////////////////////////////////////////////////////////////////////////////////
        });
    }
    // esta funcion manda una alerta en caso de querer crear un marker
    hola(lat, lng, google) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Esta seguro?',
                message: 'que desea agregar esta ubicacion',
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            //===============================================
                            console.log('confirmar salida');
                            //===============================================
                        }
                    },
                    {
                        text: 'Ok',
                        handler: () => {
                            // =================ok===========================
                            this.addMarker(lat, lng, google);
                            //===============================================
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    addMarker(lat, lng, google) {
        const hooo = ['1', '2', '3'];
        console.log(lat, lng);
        const marker = new google.maps.Marker({
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
        this.markers.forEach((item, a) => {
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
    getLocationSearch() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const watch = yield this.geolocation.watchPosition();
            watch.subscribe((data) => {
                console.log(data);
                this.latitude = data.coords.latitude,
                    this.longitude = data.coords.longitude;
                //this.addMarker(data.coords.latitude,data.coords.longitude);
            });
            return {
                lat: this.latitude,
                lng: this.longitude
            };
        });
    }
    onSearchChange(event) {
    }
};
UbicacionPage.ctorParameters = () => [
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: src_app_services_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"] }
];
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



/***/ })

}]);
//# sourceMappingURL=pages-ubicacion-ubicacion-module-es2015.js.map