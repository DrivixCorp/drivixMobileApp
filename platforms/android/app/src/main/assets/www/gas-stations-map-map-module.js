(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gas-stations-map-map-module"],{

/***/ "./src/app/members/gas-stations/map/map.module.ts":
/*!********************************************************!*\
  !*** ./src/app/members/gas-stations/map/map.module.ts ***!
  \********************************************************/
/*! exports provided: MapPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapPageModule", function() { return MapPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _map_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./map.page */ "./src/app/members/gas-stations/map/map.page.ts");







var routes = [
    {
        path: '',
        component: _map_page__WEBPACK_IMPORTED_MODULE_6__["MapPage"]
    }
];
var MapPageModule = /** @class */ (function () {
    function MapPageModule() {
    }
    MapPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_map_page__WEBPACK_IMPORTED_MODULE_6__["MapPage"]]
        })
    ], MapPageModule);
    return MapPageModule;
}());



/***/ }),

/***/ "./src/app/members/gas-stations/map/map.page.html":
/*!********************************************************!*\
  !*** ./src/app/members/gas-stations/map/map.page.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-shadow no-border>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"light\"></ion-back-button>\n    </ion-buttons>\n    <ion-title color=\"light\">Nearest Gas Stations</ion-title>\n  </ion-toolbar>\n  <ion-grid class=\"map-header\">\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-searchbar class=\"map-search\" debounce=\"500\" showCancelButton placeholder=\"Search for gas station\"></ion-searchbar>\n        <!--<ion-button (click)=\"calculateAndDisplayRoute()\">Get Direction</ion-button>-->\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-header>\n\n<ion-content>\n\n  <div #map id=\"map\"></div>\n\n</ion-content>\n\n<ion-footer>\n  <ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\">\n    <ion-fab-button>\n      <ion-icon name=\"arrow-dropright\"></ion-icon>\n    </ion-fab-button>\n\n    <ion-fab-list side=\"end\">\n      <ion-fab-button>\n        <ion-icon name=\"menu\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-button>\n        <ion-icon name=\"refresh-circle\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-button>\n        <ion-icon name=\"alert\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab-list>\n  </ion-fab>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/members/gas-stations/map/map.page.scss":
/*!********************************************************!*\
  !*** ./src/app/members/gas-stations/map/map.page.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#map {\n  height: 100%; }\n\nion-title {\n  letter-spacing: 1.8px;\n  font-family: 'Raleway', sans-serif; }\n\n.map-header {\n  padding: 0px;\n  background-color: #eeab10;\n  box-shadow: 0px 3px 16px -5px rgba(0, 0, 0, 0.75); }\n\nion-searchbar {\n  box-shadow: none;\n  --border-radius: 5px;\n  --background: rgba(255, 255, 255, 0.3);\n  font-family: 'Titillium Web', sans-serif; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvV2luZG93cy9Vc2Vycy9IUC9Eb2N1bWVudHMvUHJvamVjdHMvSW9uaWMvRHJpdml4L3NyYy9hcHAvbWVtYmVycy9nYXMtc3RhdGlvbnMvbWFwL21hcC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZLEVBQUE7O0FBRWhCO0VBQ0kscUJBQXFCO0VBQ3JCLGtDQUFrQyxFQUFBOztBQUV0QztFQUNJLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsaURBQThDLEVBQUE7O0FBRWxEO0VBQ0ksZ0JBQWdCO0VBQ2hCLG9CQUFnQjtFQUNoQixzQ0FBYTtFQUNiLHdDQUF3QyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWVtYmVycy9nYXMtc3RhdGlvbnMvbWFwL21hcC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFwe1xuICAgIGhlaWdodDogMTAwJTtcbn1cbmlvbi10aXRsZXtcbiAgICBsZXR0ZXItc3BhY2luZzogMS44cHg7XG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcbn1cbi5tYXAtaGVhZGVye1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVhYjEwO1xuICAgIGJveC1zaGFkb3c6IDBweCAzcHggMTZweCAtNXB4IHJnYmEoMCwwLDAsMC43NSk7XG59XG5pb24tc2VhcmNoYmFye1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gICAgZm9udC1mYW1pbHk6ICdUaXRpbGxpdW0gV2ViJywgc2Fucy1zZXJpZjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/members/gas-stations/map/map.page.ts":
/*!******************************************************!*\
  !*** ./src/app/members/gas-stations/map/map.page.ts ***!
  \******************************************************/
/*! exports provided: MapPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapPage", function() { return MapPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _api_maps_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../api/maps.service */ "./src/app/api/maps.service.ts");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _api_authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../api/authentication.service */ "./src/app/api/authentication.service.ts");








var MapPage = /** @class */ (function () {
    function MapPage(navCtrl, stationsMap, Auth, storage, http, geolocation) {
        this.navCtrl = navCtrl;
        this.stationsMap = stationsMap;
        this.Auth = Auth;
        this.storage = storage;
        this.http = http;
        this.geolocation = geolocation;
        this.markers = new Array();
        this.destination = 'Egypt';
        this.displayGoogleMap();
        this.getMarkers();
    }
    MapPage.prototype.displayGoogleMap = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (resp) {
            // get lat and long for current position
            _this.currentLat = resp.coords.latitude;
            _this.currentLong = resp.coords.longitude;
            // current location
            var latLng = new google.maps.LatLng(_this.currentLat, _this.currentLong);
            // google map options
            var mapOptions = {
                center: latLng,
                zoom: 10,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                styles: [
                    { elementType: 'geometry', stylers: [{ color: '#ebe3cd' }] },
                    { elementType: 'labels.text.fill', stylers: [{ color: '#523735' }] },
                    { elementType: 'labels.text.stroke', stylers: [{ color: '#f5f1e6' }] },
                    {
                        featureType: 'administrative',
                        elementType: 'geometry.stroke',
                        stylers: [{ color: '#c9b2a6' }]
                    },
                    {
                        featureType: 'administrative.land_parcel',
                        elementType: 'geometry.stroke',
                        stylers: [{ color: '#dcd2be' }]
                    },
                    {
                        featureType: 'administrative.land_parcel',
                        elementType: 'labels.text.fill',
                        stylers: [{ color: '#ae9e90' }]
                    },
                    {
                        featureType: 'landscape.natural',
                        elementType: 'geometry',
                        stylers: [{ color: '#dfd2ae' }]
                    },
                    {
                        featureType: 'poi',
                        elementType: 'geometry',
                        stylers: [{ color: '#dfd2ae' }]
                    },
                    {
                        featureType: 'poi',
                        elementType: 'labels.text.fill',
                        stylers: [{ color: '#93817c' }]
                    },
                    {
                        featureType: 'poi.park',
                        elementType: 'geometry.fill',
                        stylers: [{ color: '#a5b076' }]
                    },
                    {
                        featureType: 'poi.park',
                        elementType: 'labels.text.fill',
                        stylers: [{ color: '#447530' }]
                    },
                    {
                        featureType: 'road',
                        elementType: 'geometry',
                        stylers: [{ color: '#f5f1e6' }]
                    },
                    {
                        featureType: 'road.arterial',
                        elementType: 'geometry',
                        stylers: [{ color: '#fdfcf8' }]
                    },
                    {
                        featureType: 'road.highway',
                        elementType: 'geometry',
                        stylers: [{ color: '#f8c967' }]
                    },
                    {
                        featureType: 'road.highway',
                        elementType: 'geometry.stroke',
                        stylers: [{ color: '#e9bc62' }]
                    },
                    {
                        featureType: 'road.highway.controlled_access',
                        elementType: 'geometry',
                        stylers: [{ color: '#e98d58' }]
                    },
                    {
                        featureType: 'road.highway.controlled_access',
                        elementType: 'geometry.stroke',
                        stylers: [{ color: '#db8555' }]
                    },
                    {
                        featureType: 'road.local',
                        elementType: 'labels.text.fill',
                        stylers: [{ color: '#806b63' }]
                    },
                    {
                        featureType: 'transit.line',
                        elementType: 'geometry',
                        stylers: [{ color: '#dfd2ae' }]
                    },
                    {
                        featureType: 'transit.line',
                        elementType: 'labels.text.fill',
                        stylers: [{ color: '#8f7d77' }]
                    },
                    {
                        featureType: 'transit.line',
                        elementType: 'labels.text.stroke',
                        stylers: [{ color: '#ebe3cd' }]
                    },
                    {
                        featureType: 'transit.station',
                        elementType: 'geometry',
                        stylers: [{ color: '#dfd2ae' }]
                    },
                    {
                        featureType: 'water',
                        elementType: 'geometry.fill',
                        stylers: [{ color: '#b9d3c2' }]
                    },
                    {
                        featureType: 'water',
                        elementType: 'labels.text.fill',
                        stylers: [{ color: '#92998d' }]
                    }
                ]
            };
            _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapOptions);
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
    };
    // get nearest gas stations and set markers
    MapPage.prototype.getMarkers = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.currentLocation = { lat: resp.coords.latitude, long: resp.coords.longitude };
            _this.stationsMap.getNearestGasStations(_this.currentLocation)
                .then(function (success) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    success[10] = this.currentLocation;
                    this.addMarkersMap(success);
                    return [2 /*return*/];
                });
            }); })
                .catch(function (err) {
                console.log(err);
            });
        });
    };
    // add Markers
    MapPage.prototype.addMarkersMap = function (markers) {
        for (var _i = 0, markers_1 = markers; _i < markers_1.length; _i++) {
            var marker = markers_1[_i];
            if (!marker.distance) {
                var icon = '../../../assets/images/icons/current-marker.png';
            }
            else {
                var icon = '../../../assets/images/icons/marker.png';
            }
            var location = new google.maps.LatLng(marker.lat, marker.long);
            marker = new google.maps.Marker({
                map: this.map,
                position: location,
                title: 'distance : ' + marker.distance,
                animation: google.maps.Animation.DROP,
                icon: icon,
            });
            this.markers.push(marker);
        }
    };
    // Direction
    MapPage.prototype.calculateAndDisplayRoute = function () {
        var directionsService = new google.maps.DirectionsService;
        var directionsDisplay = new google.maps.DirectionsRenderer;
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 7,
            center: { lat: 31.171087, lng: 31.2227556 }
        });
        directionsDisplay.setMap(map);
        directionsService.route({
            origin: '',
            destination: this.destination,
            travelMode: 'DRIVING'
        }, function (response, status) {
            if (status === 'OK') {
                directionsDisplay.setDirections(response);
            }
            else {
                window.alert('Directions request failed due to ' + status);
            }
        });
    };
    MapPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], MapPage.prototype, "mapElement", void 0);
    MapPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-map',
            template: __webpack_require__(/*! ./map.page.html */ "./src/app/members/gas-stations/map/map.page.html"),
            styles: [__webpack_require__(/*! ./map.page.scss */ "./src/app/members/gas-stations/map/map.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _api_maps_service__WEBPACK_IMPORTED_MODULE_5__["MapsService"],
            _api_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"], _angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__["Geolocation"]])
    ], MapPage);
    return MapPage;
}());



/***/ })

}]);
//# sourceMappingURL=gas-stations-map-map-module.js.map