(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gas-stations-details-details-module"],{

/***/ "./src/app/api/rates.service.ts":
/*!**************************************!*\
  !*** ./src/app/api/rates.service.ts ***!
  \**************************************/
/*! exports provided: RatesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatesService", function() { return RatesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var RatesService = /** @class */ (function () {
    function RatesService(http) {
        this.http = http;
        this.getUserReviewURl = 'http://www.drivixcorp.com/api/';
    }
    RatesService.prototype.getUserReview = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.getUserReviewURl + 'getUserReview', {
                params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('token', data.token).append('gas_id', data.gas_id),
            })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    RatesService.prototype.gasStationReview = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.getUserReviewURl + 'gasStationReview', JSON.stringify({}), {
                params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                    .set('token', data.token)
                    .append('gas_id', data.gas_id)
                    .append('rate', data.rate)
            })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    RatesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RatesService);
    return RatesService;
}());



/***/ }),

/***/ "./src/app/members/gas-stations/details/details.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/members/gas-stations/details/details.module.ts ***!
  \****************************************************************/
/*! exports provided: DetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPageModule", function() { return DetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./details.page */ "./src/app/members/gas-stations/details/details.page.ts");







var routes = [
    {
        path: '',
        component: _details_page__WEBPACK_IMPORTED_MODULE_6__["DetailsPage"]
    }
];
var DetailsPageModule = /** @class */ (function () {
    function DetailsPageModule() {
    }
    DetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_details_page__WEBPACK_IMPORTED_MODULE_6__["DetailsPage"]]
        })
    ], DetailsPageModule);
    return DetailsPageModule;
}());



/***/ }),

/***/ "./src/app/members/gas-stations/details/details.page.html":
/*!****************************************************************!*\
  !*** ./src/app/members/gas-stations/details/details.page.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-shadow no-border>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"light\"></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n\n      <ion-col size=\"3\"class=\"logo-container\">\n        <div class=\"station-logo\">\n          <img src=\"{{ gasStation.icon }}\">\n        </div>\n      </ion-col>\n\n      <ion-col size=\"9\" class=\"name-container\">\n        <ion-row class=\"station-name\"><h3>{{ gasStation.name }}</h3></ion-row>\n        <ion-row class=\"station-rate\">\n          <ion-col size=\"4\">\n            <h5>\n              <span *ngFor=\"let star of rateRange; let i = index\">\n                <i class=\"fas fa-star rated\" *ngIf=\"gasStation.google_rate >= (i+1)\"></i>\n              </span>\n              <i class=\"fas fa-star-half-alt rated\" *ngIf=\"gasStation.google_rate%1!=0\"></i>\n              <span *ngFor=\"let star of rateRange; let i = index\">\n                <i class=\"far fa-star\" *ngIf=\"gasStation.google_rate <= (i)\"></i>\n              </span>\n            </h5>\n          </ion-col>\n          <ion-col size=\"4\"><h5>(Reviews | 24)</h5></ion-col>\n        </ion-row>\n        <ion-row class=\"station-address\">\n          <h6> <ion-icon name=\"pin\"></ion-icon> {{ gasStation.address }} | {{ gasStation.city }}</h6>\n        </ion-row>\n      </ion-col>\n\n      <ion-col size=\"12\" class=\"separator\">\n      </ion-col>\n\n      <ion-col size=\"12\" class=\"station-rating\">\n        <span class=\"rate-title\">Rate this gas station</span>\n        <span>Tell others what you think</span>\n      </ion-col>\n\n      <ion-col size=\"12\" class=\"user-rate\">\n\n        <span *ngFor=\"let star of rateRange; let i = index\">\n          <ion-icon name=\"star\" size=\"large\" color=\"primary\" *ngIf=\"data.rate >= (i+1)\" (click)=\"submitRating(i+1)\"></ion-icon>\n        </span>\n        <span *ngFor=\"let star of rateRange; let i = index\">\n          <ion-icon name=\"star-outline\" size=\"large\" color=\"medium\" *ngIf=\"data.rate <= (i)\" (click)=\"submitRating(i+1)\"></ion-icon>\n        </span>\n\n      </ion-col>\n\n      <ion-col size=\"12\" class=\"separator\">\n      </ion-col>\n\n      <ion-col size=\"12\" class=\"station-work\">\n        <ion-row>\n          <ion-col size=\"6\">\n            <span><i class=\"far fa-clock\"></i> working hours: </span><span class=\"station-hours\">24h</span>\n          </ion-col>\n          <ion-col size=\"3\" offset=\"3\">\n              <span class=\"station-status\">open now</span>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n\n      <ion-col size=\"12\" class=\"separator\">\n      </ion-col>\n\n      <ion-col size=\"12\" class=\"station-map\">\n        <ion-button routerLink=\"/members/gas-stations/map\" routerDirection=\"forward\" expand=\"block\" color=\"tertiary\">open in map<i class=\"far fa-map\"></i>\n        </ion-button>\n      </ion-col>\n\n      <ion-col size=\"12\" class=\"img-slider\">\n          <ion-slides pager=\"true\">\n            <ion-slide class=\"station-img\">\n              <img src=\"https://farm1.staticflickr.com/630/21293146282_c34413516e_b.jpg\">\n            </ion-slide>\n            <ion-slide class=\"station-img\">\n              <img src=\"https://farm6.staticflickr.com/5685/21334623275_6a6dfb28e4_b.jpg\">\n            </ion-slide>\n            <ion-slide class=\"station-img\">\n              <img src=\"https://fronterasdesk.org/sites/default/files/styles/special_story_images_aspect_switcher/public/field/image/Gas%20Station%202.JPG?itok=lYhEa8eF\">\n            </ion-slide>\n          </ion-slides>\n      </ion-col>\n\n      <ion-col size=\"12\" class=\"separator\">\n      </ion-col>\n\n      <ion-col size=\"12\" color=\"light\">\n        <ion-toolbar color=\"light\">\n          <ion-segment [(ngModel)]=\"station\" (ionChange)=\"segmentChanged($event)\" color=\"tertiary\">\n            <ion-segment-button href=\"#petrol\" value=\"petrol\">\n              <ion-label>Petrol</ion-label>\n            </ion-segment-button>\n            <ion-segment-button href=\"#services\" value=\"services\">\n              <ion-label>Services</ion-label>\n            </ion-segment-button>\n          </ion-segment>\n        </ion-toolbar>\n      </ion-col>\n\n      <ion-col size=\"12\" [ngSwitch]=\"station\" class=\"station-properties\">\n        <ion-list *ngSwitchCase=\"'petrol'\">\n          \n          <ion-item *ngFor=\"let service of gasStationPetrol\">\n            <ion-col size=\"8\" offset=\"1\">\n              <label class=\"petrol-label\">{{ replaceDash(service) | titlecase }}</label>\n            </ion-col>\n            <ion-col size=\"3\" class=\"property-availability\">\n              <i class=\"fas fa-check-circle\" *ngIf=\"gasStation[service] == 1\"></i>\n              <span class=\"station-property-unavailable\" *ngIf=\"gasStation[service] == 0\">unavailable</span>\n            </ion-col>\n          </ion-item>\n\n        </ion-list>\n\n        <ion-list *ngSwitchCase=\"'services'\">\n\n          <ion-item *ngFor=\"let service of gasStationServices\">\n            <ion-col size=\"8\" offset=\"1\">\n              <label class=\"petrol-label\">{{ replaceDash(service) | titlecase }}</label>\n            </ion-col>\n            <ion-col size=\"3\" class=\"property-availability\">\n              <i class=\"fas fa-check-circle\" *ngIf=\"gasStation[service] == 1\"></i>\n              <span class=\"station-property-unavailable\" *ngIf=\"gasStation[service] == 0\">unavailable</span>\n            </ion-col>\n          </ion-item>\n\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/members/gas-stations/details/details.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/members/gas-stations/details/details.page.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo-container {\n  padding: 10px;\n  height: 150px; }\n\n.station-logo {\n  padding-top: 15px;\n  text-align: center;\n  height: -webkit-max-content;\n  height: -moz-max-content;\n  height: max-content; }\n\n.station-logo img {\n  max-height: -webkit-fill-available; }\n\n.name-container {\n  height: 150px; }\n\n.station-name h3 {\n  color: #262626;\n  text-align: right;\n  font-family: 'Raleway', sans-serif; }\n\n.station-rate h5 {\n  font-size: 14px;\n  color: #666666;\n  -webkit-margin-before: auto;\n          margin-block-start: auto;\n  font-family: 'Titillium Web', sans-serif; }\n\n.station-rate i {\n  color: #666666; }\n\n.station-rate .stared {\n  color: #ffa31a; }\n\n.station-address h6 {\n  color: #808080;\n  -webkit-margin-before: auto;\n          margin-block-start: auto;\n  font-family: 'Titillium Web', sans-serif; }\n\n.separator {\n  padding: 0px;\n  margin-top: 20px;\n  background-color: #bfbfbf; }\n\n.station-address ion-icon {\n  color: #4d4d4d; }\n\n.station-work {\n  margin-top: 10px;\n  color: #666699;\n  font-family: 'Titillium Web', sans-serif; }\n\n.station-hours {\n  color: #8c8c8c;\n  margin-left: 10px;\n  font-family: 'Titillium Web', sans-serif; }\n\n.station-status {\n  color: #00cc00; }\n\n.img-slider {\n  text-align: center; }\n\n.station-img img {\n  border-radius: 10px; }\n\n.station-map i {\n  margin-left: 10px; }\n\n.station-properties .petrol-label {\n  font-size: 15px;\n  color: #4d4d4d;\n  font-family: 'Titillium Web', sans-serif; }\n\n.station-properties i {\n  color: #009933; }\n\n.station-properties .station-property-unavailable {\n  padding: 3px;\n  color: #e6e6e6;\n  font-size: 12px;\n  background-color: #c0392b;\n  font-family: 'Titillium Web', sans-serif; }\n\n.property-availability {\n  text-align: center; }\n\n.station-rate .rated {\n  color: #4c8dff; }\n\n.station-rating {\n  color: #808080;\n  font-size: 13px;\n  font-family: 'Titillium Web', sans-serif; }\n\n.station-rating .rate-title {\n  display: block;\n  color: #df9d04;\n  font-size: 16px; }\n\n.user-rate {\n  margin: auto;\n  text-align: center; }\n\n.user-rate .star-outline {\n  margin: 3px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvV2luZG93cy9Vc2Vycy9IUC9Eb2N1bWVudHMvUHJvamVjdHMvSW9uaWMvRHJpdml4L3NyYy9hcHAvbWVtYmVycy9nYXMtc3RhdGlvbnMvZGV0YWlscy9kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQWE7RUFDYixhQUFhLEVBQUE7O0FBRWpCO0VBQ0ksaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQiwyQkFBbUI7RUFBbkIsd0JBQW1CO0VBQW5CLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLGtDQUFrQyxFQUFBOztBQUV0QztFQUNJLGFBQWEsRUFBQTs7QUFFakI7RUFDSSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGtDQUFrQyxFQUFBOztBQUV0QztFQUNJLGVBQWU7RUFDZixjQUFjO0VBQ2QsMkJBQXdCO1VBQXhCLHdCQUF3QjtFQUN4Qix3Q0FBd0MsRUFBQTs7QUFFNUM7RUFDSSxjQUFjLEVBQUE7O0FBRWxCO0VBQ0ksY0FBYyxFQUFBOztBQUVsQjtFQUNJLGNBQWM7RUFDZCwyQkFBd0I7VUFBeEIsd0JBQXdCO0VBQ3hCLHdDQUF3QyxFQUFBOztBQUU1QztFQUNJLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIseUJBQXlCLEVBQUE7O0FBRTdCO0VBQ0ksY0FDSixFQUFBOztBQUNBO0VBQ0ksZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCx3Q0FBd0MsRUFBQTs7QUFFNUM7RUFDSSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLHdDQUF3QyxFQUFBOztBQUU1QztFQUNJLGNBQWMsRUFBQTs7QUFFbEI7RUFDSSxrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxtQkFBbUIsRUFBQTs7QUFFdkI7RUFDSSxpQkFBaUIsRUFBQTs7QUFFckI7RUFDSSxlQUFlO0VBQ2YsY0FBYztFQUNkLHdDQUF3QyxFQUFBOztBQUU1QztFQUNJLGNBQWMsRUFBQTs7QUFFbEI7RUFDSSxZQUFZO0VBQ1osY0FBYztFQUNkLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsd0NBQXdDLEVBQUE7O0FBRTVDO0VBQ0ksa0JBQ0osRUFBQTs7QUFDQTtFQUNJLGNBQWMsRUFBQTs7QUFFbEI7RUFDSSxjQUFjO0VBQ2QsZUFBZTtFQUNmLHdDQUF3QyxFQUFBOztBQUU1QztFQUNJLGNBQWM7RUFDZCxjQUFjO0VBQ2QsZUFBZSxFQUFBOztBQUVuQjtFQUNJLFlBQVk7RUFDWixrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tZW1iZXJzL2dhcy1zdGF0aW9ucy9kZXRhaWxzL2RldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ28tY29udGFpbmVye1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgaGVpZ2h0OiAxNTBweDtcbn1cbi5zdGF0aW9uLWxvZ297XG4gICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGhlaWdodDogbWF4LWNvbnRlbnQ7XG59XG5cbi5zdGF0aW9uLWxvZ28gaW1ne1xuICAgIG1heC1oZWlnaHQ6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG59XG4ubmFtZS1jb250YWluZXJ7XG4gICAgaGVpZ2h0OiAxNTBweDtcbn1cbi5zdGF0aW9uLW5hbWUgaDN7XG4gICAgY29sb3I6ICMyNjI2MjY7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcbn1cbi5zdGF0aW9uLXJhdGUgaDV7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjNjY2NjY2O1xuICAgIG1hcmdpbi1ibG9jay1zdGFydDogYXV0bztcbiAgICBmb250LWZhbWlseTogJ1RpdGlsbGl1bSBXZWInLCBzYW5zLXNlcmlmO1xufVxuLnN0YXRpb24tcmF0ZSBpe1xuICAgIGNvbG9yOiAjNjY2NjY2O1xufVxuLnN0YXRpb24tcmF0ZSAuc3RhcmVke1xuICAgIGNvbG9yOiAjZmZhMzFhO1xufVxuLnN0YXRpb24tYWRkcmVzcyBoNntcbiAgICBjb2xvcjogIzgwODA4MDtcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IGF1dG87XG4gICAgZm9udC1mYW1pbHk6ICdUaXRpbGxpdW0gV2ViJywgc2Fucy1zZXJpZjtcbn1cbi5zZXBhcmF0b3J7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JmYmZiZjtcbn1cbi5zdGF0aW9uLWFkZHJlc3MgaW9uLWljb257XG4gICAgY29sb3I6ICM0ZDRkNGRcbn1cbi5zdGF0aW9uLXdvcmt7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBjb2xvcjogIzY2NjY5OTtcbiAgICBmb250LWZhbWlseTogJ1RpdGlsbGl1bSBXZWInLCBzYW5zLXNlcmlmO1xufVxuLnN0YXRpb24taG91cnN7XG4gICAgY29sb3I6ICM4YzhjOGM7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgZm9udC1mYW1pbHk6ICdUaXRpbGxpdW0gV2ViJywgc2Fucy1zZXJpZjtcbn1cbi5zdGF0aW9uLXN0YXR1c3tcbiAgICBjb2xvcjogIzAwY2MwMDtcbn1cbi5pbWctc2xpZGVye1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zdGF0aW9uLWltZyBpbWd7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5zdGF0aW9uLW1hcCBpe1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLnN0YXRpb24tcHJvcGVydGllcyAucGV0cm9sLWxhYmVse1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBjb2xvcjogIzRkNGQ0ZDtcbiAgICBmb250LWZhbWlseTogJ1RpdGlsbGl1bSBXZWInLCBzYW5zLXNlcmlmO1xufVxuLnN0YXRpb24tcHJvcGVydGllcyBpe1xuICAgIGNvbG9yOiAjMDA5OTMzO1xufVxuLnN0YXRpb24tcHJvcGVydGllcyAuc3RhdGlvbi1wcm9wZXJ0eS11bmF2YWlsYWJsZXtcbiAgICBwYWRkaW5nOiAzcHg7XG4gICAgY29sb3I6ICNlNmU2ZTY7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjMDM5MmI7XG4gICAgZm9udC1mYW1pbHk6ICdUaXRpbGxpdW0gV2ViJywgc2Fucy1zZXJpZjtcbn1cbi5wcm9wZXJ0eS1hdmFpbGFiaWxpdHl7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyXG59XG4uc3RhdGlvbi1yYXRlIC5yYXRlZHtcbiAgICBjb2xvcjogIzRjOGRmZjtcbn1cbi5zdGF0aW9uLXJhdGluZ3tcbiAgICBjb2xvcjogIzgwODA4MDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC1mYW1pbHk6ICdUaXRpbGxpdW0gV2ViJywgc2Fucy1zZXJpZjtcbn1cbi5zdGF0aW9uLXJhdGluZyAucmF0ZS10aXRsZXtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjb2xvcjogI2RmOWQwNDtcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG4udXNlci1yYXRle1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udXNlci1yYXRlIC5zdGFyLW91dGxpbmV7XG4gICAgbWFyZ2luOiAzcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/members/gas-stations/details/details.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/members/gas-stations/details/details.page.ts ***!
  \**************************************************************/
/*! exports provided: DetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPage", function() { return DetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_rates_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../api/rates.service */ "./src/app/api/rates.service.ts");






var DetailsPage = /** @class */ (function () {
    function DetailsPage(navCtrl, ratesService, storage, toastController) {
        this.navCtrl = navCtrl;
        this.ratesService = ratesService;
        this.storage = storage;
        this.toastController = toastController;
        this.station = 'petrol';
        this.gasStation = {
            id: 181,
            name: 'Total Egypt',
            city: 'cairo',
            address: 'Ismailia Governorate, Egypt',
            gas: 1,
            sollar: 0,
            petrol_80: 1,
            petrol_92: 1,
            petrol_95: 1,
            oil_change: 0,
            car_washing: 1,
            tier_repare: 0,
            align_wheel: 0,
            blowing_air: 0,
            blowing_nitro: 0,
            fix_suspension: 0,
            google_rate: 4,
            icon: 'http://www.drivixcorp.com/api/storage/1553962412Total Egypt.jpg/gasStation',
        };
        this.gasStationPetrol = [
            'gas',
            'sollar',
            'petrol_80',
            'petrol_92',
            'petrol_95'
        ];
        this.gasStationServices = [
            'oil_change',
            'car_washing',
            'tier_repare',
            'align_wheel',
            'blowing_air',
            'blowing_nitro',
            'fix_suspension',
        ];
        this.data = {
            token: '',
            gas_id: null,
            rate: null
        };
        this.rateRange = Array(5);
    }
    DetailsPage.prototype.ngOnInit = function () {
        this.getUserReview();
    };
    DetailsPage.prototype.getUserReview = function () {
        var _this = this;
        this.storage.get('token').then(function (val) {
            if (val != null) {
                _this.data.token = val;
                _this.data.gas_id = _this.gasStation.id;
                _this.ratesService.getUserReview(_this.data).then(function (data) {
                    if (typeof (data) === 'number') {
                        _this.data.rate = data;
                    }
                    else {
                        _this.data.rate = 0;
                    }
                });
            }
        });
    };
    DetailsPage.prototype.submitRating = function (rateValue) {
        var _this = this;
        this.data.rate = rateValue;
        this.ratesService.gasStationReview(this.data).then(function (data) {
            _this.presentToastWithOptions();
        });
    };
    DetailsPage.prototype.presentToastWithOptions = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            duration: 2000,
                            position: 'bottom',
                            message: 'Rating Saved Successfully !',
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    DetailsPage.prototype.replaceDash = function (word) {
        return word.replace('_', ' ');
    };
    DetailsPage.prototype.segmentChanged = function (ev) {
        // console.log('Segment changed', ev);
    };
    DetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-details',
            template: __webpack_require__(/*! ./details.page.html */ "./src/app/members/gas-stations/details/details.page.html"),
            styles: [__webpack_require__(/*! ./details.page.scss */ "./src/app/members/gas-stations/details/details.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _api_rates_service__WEBPACK_IMPORTED_MODULE_4__["RatesService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_1__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
    ], DetailsPage);
    return DetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=gas-stations-details-details-module.js.map