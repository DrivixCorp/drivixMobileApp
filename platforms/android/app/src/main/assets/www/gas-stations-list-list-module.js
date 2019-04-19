(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gas-stations-list-list-module"],{

/***/ "./src/app/api/search.service.ts":
/*!***************************************!*\
  !*** ./src/app/api/search.service.ts ***!
  \***************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var SearchService = /** @class */ (function () {
    function SearchService(http) {
        this.http = http;
        this.gasStationSearchURl = 'http://www.drivixcorp.com/api/';
    }
    SearchService.prototype.gasStationSearch = function (key) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.gasStationSearchURl + 'FilterGasStation', {
                params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('text', key),
            })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    SearchService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SearchService);
    return SearchService;
}());



/***/ }),

/***/ "./src/app/members/gas-stations/list/list.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/members/gas-stations/list/list.module.ts ***!
  \**********************************************************/
/*! exports provided: ListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPageModule", function() { return ListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list.page */ "./src/app/members/gas-stations/list/list.page.ts");







var routes = [
    {
        path: '',
        component: _list_page__WEBPACK_IMPORTED_MODULE_6__["ListPage"]
    }
];
var ListPageModule = /** @class */ (function () {
    function ListPageModule() {
    }
    ListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_list_page__WEBPACK_IMPORTED_MODULE_6__["ListPage"]]
        })
    ], ListPageModule);
    return ListPageModule;
}());



/***/ }),

/***/ "./src/app/members/gas-stations/list/list.page.html":
/*!**********************************************************!*\
  !*** ./src/app/members/gas-stations/list/list.page.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-shadow no-border>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"light\"></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-grid>\n    <ion-row>\n\n      <ion-col size=\"12\">\n          <h1 class=\"searchTitle\">Search</h1>\n\n          <span class=\"searchDescription\">search for gas stations with full details</span>\n      </ion-col>\n\n      <ion-col size=\"12\">\n        <ion-item>\n          <ion-searchbar [(ngModel)]=\"searchText\" (ionChange)=\"searchForGasStation()\" type=\"text\" placeholder=\"Search by station name\" cancelButtonText=\"Custom Cancel\"></ion-searchbar>\n        </ion-item>\n      </ion-col>\n\n      <ion-col class=\"listTitle\" size=\"12\" *ngIf=\"results\">\n        <i class=\"far fa-compass\"></i>\n        <span>\n          nearest gas stations to your location\n        </span>\n      </ion-col>\n\n      <ion-col size=\"12\">\n\n        <ion-item-sliding *ngFor =\"let gasStation of gasStationsList; let i = index\">\n\n          <ion-item class=\"listItem\">\n            <ion-avatar slot=\"start\">\n              <img src=\"{{gasStation.icon}}\">\n            </ion-avatar>\n\n            <ion-label>\n              <h2 class=\"itemName\"> {{ gasStation.name }} </h2>\n              <p class=\"itemAddress\"> {{ gasStation.address }} </p>\n              <p class=\"itemDistance\" *ngIf=\"results\"> {{ calculateDistance(gasStation.distance) }} </p>\n              <p class=\"itemDistance\" *ngIf=\"!results\"> {{ gasStation.city }} </p>\n            </ion-label>\n\n            <ion-note slot=\"end\" color=\"primary\">\n              RATE :\n              <i class=\"fas fa-star\" *ngIf=\"gasStation.google_rate>=1\" ></i>\n              <i class=\"fas fa-star\" *ngIf=\"gasStation.google_rate>=2\" ></i>\n              <i class=\"fas fa-star\" *ngIf=\"gasStation.google_rate>=3\" ></i>\n              <i class=\"fas fa-star\" *ngIf=\"gasStation.google_rate>=4\" ></i>\n              <i class=\"fas fa-star\" *ngIf=\"gasStation.google_rate>=5\" ></i>\n              <i *ngIf=\"gasStation.google_rate%1!=0\" class=\"fas fa-star-half-alt\" ></i>\n              <i *ngIf=\"gasStation.google_rate==0\" class=\"far fa-star\"></i>\n              <i *ngIf=\"gasStation.google_rate<=1\" class=\"far fa-star\"></i>\n              <i *ngIf=\"gasStation.google_rate<=2\" class=\"far fa-star\"></i>\n              <i *ngIf=\"gasStation.google_rate<=3\" class=\"far fa-star\"></i>\n              <i *ngIf=\"gasStation.google_rate<=4\" class=\"far fa-star\"></i>\n            </ion-note>\n          </ion-item>\n\n          <ion-item-options side=\"end\">\n\n            <ion-item-option color=\"danger\">\n              <ion-icon slot=\"icon-only\" name=\"open\"></ion-icon>\n            </ion-item-option>\n\n            <ion-item-option>\n              <ion-icon slot=\"icon-only\" name=\"locate\"></ion-icon>\n            </ion-item-option>\n          </ion-item-options>\n\n\n        </ion-item-sliding>\n\n        <div *ngIf=\"notFound\" class=\"notFound\"> <i class=\"fas fa-info-circle\"></i> No gas stations has found </div>\n\n      </ion-col>\n\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/members/gas-stations/list/list.page.scss":
/*!**********************************************************!*\
  !*** ./src/app/members/gas-stations/list/list.page.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-searchbar {\n  --color: #ffffff;\n  --background: #3171e0;\n  --placeholder-color: #ffffff;\n  --placeholder-font-style: 'Titillium Web', sans-serif; }\n\n.listTitle {\n  color: #000000;\n  margin-top: 10px;\n  margin-bottom: 10px; }\n\n.listTitle span {\n  font-size: 13px;\n  font-weight: bold;\n  padding-left: 3px;\n  font-family: 'Raleway', sans-serif; }\n\nion-item-sliding {\n  margin-bottom: 13px; }\n\n.listItem {\n  white-space: normal;\n  --background: #f2f2f2;\n  border-left: 3px solid #b3b3b3; }\n\n.listItem ion-avatar {\n  background-color: white;\n  box-shadow: -14px 13px 41px -21px rgba(0, 0, 0, 0.98); }\n\n.itemName {\n  color: Black;\n  font-family: 'Raleway', sans-serif; }\n\n.itemAddress {\n  color: #333333;\n  font-family: 'Titillium Web', sans-serif; }\n\n.itemDistance {\n  color: #737373;\n  font-family: 'Titillium Web', sans-serif; }\n\n.notFound {\n  padding: 8px;\n  color: #737373;\n  text-align: center;\n  background-color: #e6e6e6;\n  font-family: 'Titillium Web', sans-serif; }\n\n.searchTitle {\n  color: #df9d04;\n  font-weight: bold;\n  font-family: 'Raleway', sans-serif; }\n\n.searchDescription {\n  color: #b3b3b3;\n  font-size: 14px;\n  font-family: 'Raleway', sans-serif; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvV2luZG93cy9Vc2Vycy9IUC9Eb2N1bWVudHMvUHJvamVjdHMvSW9uaWMvRHJpdml4L3NyYy9hcHAvbWVtYmVycy9nYXMtc3RhdGlvbnMvbGlzdC9saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFRO0VBQ1IscUJBQWE7RUFDYiw0QkFBb0I7RUFDcEIscURBQXlCLEVBQUE7O0FBRTNCO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixtQkFBbUIsRUFBQTs7QUFFckI7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixrQ0FBa0MsRUFBQTs7QUFFcEM7RUFDRSxtQkFBbUIsRUFBQTs7QUFFckI7RUFDRSxtQkFBbUI7RUFDbkIscUJBQWE7RUFDYiw4QkFBOEIsRUFBQTs7QUFFaEM7RUFDRSx1QkFBdUI7RUFDdkIscURBQWtELEVBQUE7O0FBRXBEO0VBQ0UsWUFBWTtFQUNaLGtDQUFrQyxFQUFBOztBQUVwQztFQUNFLGNBQWM7RUFDZCx3Q0FBd0MsRUFBQTs7QUFFMUM7RUFDRSxjQUFjO0VBQ2Qsd0NBQXdDLEVBQUE7O0FBRTFDO0VBQ0UsWUFBWTtFQUNaLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLHdDQUF3QyxFQUFBOztBQUUxQztFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0NBQWtDLEVBQUE7O0FBRXBDO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixrQ0FBa0MsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21lbWJlcnMvZ2FzLXN0YXRpb25zL2xpc3QvbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2VhcmNoYmFye1xuICAtLWNvbG9yOiAjZmZmZmZmO1xuICAtLWJhY2tncm91bmQ6ICMzMTcxZTA7XG4gIC0tcGxhY2Vob2xkZXItY29sb3I6ICNmZmZmZmY7XG4gIC0tcGxhY2Vob2xkZXItZm9udC1zdHlsZTogJ1RpdGlsbGl1bSBXZWInLCBzYW5zLXNlcmlmO1xufVxuLmxpc3RUaXRsZXtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4ubGlzdFRpdGxlIHNwYW57XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmctbGVmdDogM3B4O1xuICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xufVxuaW9uLWl0ZW0tc2xpZGluZ3tcbiAgbWFyZ2luLWJvdHRvbTogMTNweDtcbn1cbi5saXN0SXRlbXtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgLS1iYWNrZ3JvdW5kOiAjZjJmMmYyO1xuICBib3JkZXItbGVmdDogM3B4IHNvbGlkICNiM2IzYjM7XG59XG4ubGlzdEl0ZW0gaW9uLWF2YXRhcntcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJveC1zaGFkb3c6IC0xNHB4IDEzcHggNDFweCAtMjFweCByZ2JhKDAsMCwwLDAuOTgpO1xufVxuLml0ZW1OYW1le1xuICBjb2xvcjogQmxhY2s7XG4gIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XG59XG4uaXRlbUFkZHJlc3N7XG4gIGNvbG9yOiAjMzMzMzMzO1xuICBmb250LWZhbWlseTogJ1RpdGlsbGl1bSBXZWInLCBzYW5zLXNlcmlmO1xufVxuLml0ZW1EaXN0YW5jZXtcbiAgY29sb3I6ICM3MzczNzM7XG4gIGZvbnQtZmFtaWx5OiAnVGl0aWxsaXVtIFdlYicsIHNhbnMtc2VyaWY7XG59XG4ubm90Rm91bmR7XG4gIHBhZGRpbmc6IDhweDtcbiAgY29sb3I6ICM3MzczNzM7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcbiAgZm9udC1mYW1pbHk6ICdUaXRpbGxpdW0gV2ViJywgc2Fucy1zZXJpZjtcbn1cbi5zZWFyY2hUaXRsZXtcbiAgY29sb3I6ICNkZjlkMDQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xufVxuLnNlYXJjaERlc2NyaXB0aW9ue1xuICBjb2xvcjogI2IzYjNiMztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/members/gas-stations/list/list.page.ts":
/*!********************************************************!*\
  !*** ./src/app/members/gas-stations/list/list.page.ts ***!
  \********************************************************/
/*! exports provided: ListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPage", function() { return ListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_maps_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../api/maps.service */ "./src/app/api/maps.service.ts");
/* harmony import */ var _api_search_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../api/search.service */ "./src/app/api/search.service.ts");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _api_authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../api/authentication.service */ "./src/app/api/authentication.service.ts");








var ListPage = /** @class */ (function () {
    function ListPage(stationsMap, Auth, storage, geolocation, decimalPipe, searchService) {
        this.stationsMap = stationsMap;
        this.Auth = Auth;
        this.storage = storage;
        this.geolocation = geolocation;
        this.decimalPipe = decimalPipe;
        this.searchService = searchService;
        this.gasStationsList = [];
        this.notFound = false;
        this.results = true;
    }
    ListPage.prototype.getGasStationsList = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (resp) {
            var currentLocation = { lat: resp.coords.latitude, long: resp.coords.longitude };
            _this.stationsMap.getNearestGasStations(currentLocation)
                .then(function (success) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    this.gasStationsList = success;
                    console.log(success);
                    return [2 /*return*/];
                });
            }); })
                .catch(function (err) {
                console.log(err);
            });
        });
    };
    ListPage.prototype.calculateDistance = function (distance) {
        if (distance < 1) {
            distance = distance * 100;
            distance = this.decimalPipe.transform(distance, '3.1-2') + ' M';
        }
        else {
            distance = this.decimalPipe.transform(distance, '3.1-2') + ' Km';
        }
        return distance;
    };
    ListPage.prototype.searchForGasStation = function () {
        var _this = this;
        if (this.searchText) {
            this.results = false;
            this.searchService.gasStationSearch(this.searchText).then(function (data) {
                _this.gasStationsList = data;
                console.log(data);
                if (Object.keys(data).length > 0) {
                    _this.notFound = false;
                }
                else {
                    _this.notFound = true;
                }
            });
        }
        else {
            this.results = true;
            this.notFound = false;
            this.getGasStationsList();
        }
    };
    ListPage.prototype.ngOnInit = function () {
        this.getGasStationsList();
    };
    ListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.page.html */ "./src/app/members/gas-stations/list/list.page.html"),
            styles: [__webpack_require__(/*! ./list.page.scss */ "./src/app/members/gas-stations/list/list.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_maps_service__WEBPACK_IMPORTED_MODULE_4__["MapsService"], _api_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_1__["Storage"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__["Geolocation"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"],
            _api_search_service__WEBPACK_IMPORTED_MODULE_5__["SearchService"]])
    ], ListPage);
    return ListPage;
}());



/***/ })

}]);
//# sourceMappingURL=gas-stations-list-list-module.js.map