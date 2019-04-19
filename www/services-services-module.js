(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["services-services-module"],{

/***/ "./src/app/members/services/services.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/members/services/services.module.ts ***!
  \*****************************************************/
/*! exports provided: ServicesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesPageModule", function() { return ServicesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services.page */ "./src/app/members/services/services.page.ts");







var routes = [
    {
        path: '',
        component: _services_page__WEBPACK_IMPORTED_MODULE_6__["ServicesPage"]
    }
];
var ServicesPageModule = /** @class */ (function () {
    function ServicesPageModule() {
    }
    ServicesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_services_page__WEBPACK_IMPORTED_MODULE_6__["ServicesPage"]]
        })
    ], ServicesPageModule);
    return ServicesPageModule;
}());



/***/ }),

/***/ "./src/app/members/services/services.page.html":
/*!*****************************************************!*\
  !*** ./src/app/members/services/services.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-shadow no-border>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"light\">SERVICES</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-slides autoplay=\"5000\" loop=\"true\" speed=\"100\" #Slider (ionSlidesDidLoad)=\"slidesDidLoad(Slider)\" pager=\"true\" class=\"service-slider\">\n    <ion-slide class=\"slide1\">\n      <h1>with <strong>DRIVIX</strong> you can get <br>\n        what you want anywhere anytime</h1>\n    </ion-slide>\n    <ion-slide class=\"slide2\">\n      <h1>Get fast and reliable services <br><strong>just in one tuch</strong></h1>\n    </ion-slide>\n    <ion-slide class=\"slide3\">\n      <h1><strong>All the services you need</strong> just in one application</h1>\n    </ion-slide>\n  </ion-slides>\n\n  <h2 class=\"services-subtitle\">Choose a service :</h2>\n  \n  <div class=\"services\">\n    <div class=\"service\">\n      <img src=\"../../../assets/images/services/jumper.png\">\n      <h5 class=\"service-name\">Spare Parts</h5>\n    </div>\n    <div class=\"service\">\n      <img src=\"../../../assets/images/services/car.png\">\n      <h5 class=\"service-name\">Winch Service</h5>\n    </div>\n    <br>\n    <div class=\"service\">\n      <img src=\"../../../assets/images/services/gasoline.png\">\n      <h5 class=\"service-name\">Gas Stations</h5>\n    </div>\n    <div class=\"service\">\n        <img src=\"../../../assets/images/services/cogwheel.png\">\n        <h5 class=\"service-name\">Mechanics</h5>\n    </div>\n    <br>\n    <div class=\"service\">\n      <img src=\"../../../assets/images/services/car-service.png\">\n      <h5 class=\"service-name\">Parking Location</h5>\n    </div>\n    <div class=\"service\">\n      <img src=\"../../../assets/images/services/question.png\">\n      <h5 class=\"service-name\">Ask Question</h5>\n    </div>\n  </div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/members/services/services.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/members/services/services.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-title {\n  font-family: 'Raleway', sans-serif;\n  letter-spacing: 1.5px; }\n\n.services {\n  margin: auto;\n  text-align: center; }\n\n.service {\n  height: 130px;\n  width: 130px;\n  margin: 15px;\n  padding: 6px;\n  display: inline-block;\n  border-radius: 10px;\n  border: 1px solid #e6e6e6;\n  box-shadow: 2px 2px 2px 1px #d9d9d9; }\n\n.service img {\n  width: 70px; }\n\n.service-img-spareparts {\n  background: url('car.jpg') no-repeat center center/cover; }\n\n.service-img-winch {\n  background: url('tow_truck_kit8-net.png') no-repeat center center/cover; }\n\n.service-img-mechanics {\n  background: url('1.png') no-repeat center center/cover; }\n\n.service-img-gasstation {\n  background: url('gas_station_kit8-net.png') no-repeat center center/cover; }\n\n.service-name {\n  margin: 10px;\n  color: #331f00;\n  font-family: 'Titillium Web', sans-serif;\n  font-size: 14px;\n  margin-top: 10px; }\n\n.service-slider ion-slide {\n  height: 300px;\n  float: left; }\n\n.slide1 {\n  background: url('4.jpg') no-repeat center center/cover; }\n\nion-slide strong {\n  color: #ffb200;\n  text-shadow: 1px 1px 1px #404040; }\n\n.slide2 {\n  background: url('2.jpg') no-repeat center center/cover; }\n\n.slide3 {\n  background: url('3.jpg') no-repeat center center/cover; }\n\nion-slide h1 {\n  background-color: rgba(0, 0, 0, 0.4);\n  color: white;\n  padding: 5px;\n  font-family: 'Raleway', sans-serif;\n  font-size: 25px;\n  margin-top: 170px; }\n\n.slide-zoom {\n  position: absolute;\n  top: 0;\n  left: 0; }\n\n.services-subtitle {\n  margin: auto;\n  text-align: center;\n  padding: 5px;\n  margin-top: 20px;\n  background-color: #1b1b1b;\n  border-radius: 0px;\n  color: white;\n  font-family: 'Titillium Web', sans-serif;\n  font-size: 16px;\n  width: 80%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvV2luZG93cy9Vc2Vycy9IUC9Eb2N1bWVudHMvUHJvamVjdHMvSW9uaWMvRHJpdml4L3NyYy9hcHAvbWVtYmVycy9zZXJ2aWNlcy9zZXJ2aWNlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQ0FBa0M7RUFDbEMscUJBQXFCLEVBQUE7O0FBRXpCO0VBQ0ksWUFBWTtFQUNaLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLGFBQWE7RUFDYixZQUFZO0VBQ1osWUFBWTtFQUNaLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixtQ0FBbUMsRUFBQTs7QUFFdkM7RUFDSSxXQUFXLEVBQUE7O0FBRWY7RUFDSSx3REFBMEYsRUFBQTs7QUFFOUY7RUFDSSx1RUFBeUcsRUFBQTs7QUFFN0c7RUFDSSxzREFBd0YsRUFBQTs7QUFFNUY7RUFDSSx5RUFBMkcsRUFBQTs7QUFFL0c7RUFDSSxZQUFXO0VBQ1gsY0FBYztFQUNkLHdDQUF3QztFQUN4QyxlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksYUFBYTtFQUNiLFdBQVcsRUFBQTs7QUFFZjtFQUNJLHNEQUF3RixFQUFBOztBQUU1RjtFQUNJLGNBQWM7RUFDZCxnQ0FBZ0MsRUFBQTs7QUFFcEM7RUFDSSxzREFBd0YsRUFBQTs7QUFFNUY7RUFDSSxzREFBd0YsRUFBQTs7QUFFNUY7RUFDSSxvQ0FBb0M7RUFDcEMsWUFBWTtFQUNaLFlBQVk7RUFDWixrQ0FBa0M7RUFDbEMsZUFBZTtFQUNmLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTyxFQUFBOztBQUVYO0VBQ0ksWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLHdDQUF3QztFQUN4QyxlQUFlO0VBQ2YsVUFBVSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWVtYmVycy9zZXJ2aWNlcy9zZXJ2aWNlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGl0bGV7XG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcbiAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XG59XG4uc2VydmljZXN7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zZXJ2aWNle1xuICAgIGhlaWdodDogMTMwcHg7XG4gICAgd2lkdGg6IDEzMHB4O1xuICAgIG1hcmdpbjogMTVweDtcbiAgICBwYWRkaW5nOiA2cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U2ZTZlNjtcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDJweCAxcHggI2Q5ZDlkOTtcbn1cbi5zZXJ2aWNlIGltZ3tcbiAgICB3aWR0aDogNzBweDtcbn1cbi5zZXJ2aWNlLWltZy1zcGFyZXBhcnRze1xuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9zZXJ2aWNlcy9jYXIuanBnJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgLyBjb3Zlcjtcbn1cbi5zZXJ2aWNlLWltZy13aW5jaHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvc2VydmljZXMvdG93X3RydWNrX2tpdDgtbmV0LnBuZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIC8gY292ZXI7XG59XG4uc2VydmljZS1pbWctbWVjaGFuaWNze1xuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9zZXJ2aWNlcy8xLnBuZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIC8gY292ZXI7XG59XG4uc2VydmljZS1pbWctZ2Fzc3RhdGlvbntcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvc2VydmljZXMvZ2FzX3N0YXRpb25fa2l0OC1uZXQucG5nJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgLyBjb3Zlcjtcbn1cbi5zZXJ2aWNlLW5hbWV7XG4gICAgbWFyZ2luOjEwcHg7XG4gICAgY29sb3I6ICMzMzFmMDA7XG4gICAgZm9udC1mYW1pbHk6ICdUaXRpbGxpdW0gV2ViJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcblxufVxuLnNlcnZpY2Utc2xpZGVyIGlvbi1zbGlkZXtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuLnNsaWRlMXtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvc2VydmljZXMvNC5qcGcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xufVxuaW9uLXNsaWRlIHN0cm9uZ3tcbiAgICBjb2xvcjogI2ZmYjIwMDtcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggIzQwNDA0MDtcbn1cbi5zbGlkZTJ7XG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3NlcnZpY2VzLzIuanBnJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgLyBjb3Zlcjtcbn1cbi5zbGlkZTN7XG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3NlcnZpY2VzLzMuanBnJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgLyBjb3Zlcjtcbn1cbmlvbi1zbGlkZSBoMXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBtYXJnaW4tdG9wOiAxNzBweDtcbn1cbi5zbGlkZS16b29tIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gfVxuLnNlcnZpY2VzLXN1YnRpdGxle1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFiMWIxYjtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtZmFtaWx5OiAnVGl0aWxsaXVtIFdlYicsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxNnB4OyAgIFxuICAgIHdpZHRoOiA4MCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/members/services/services.page.ts":
/*!***************************************************!*\
  !*** ./src/app/members/services/services.page.ts ***!
  \***************************************************/
/*! exports provided: ServicesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesPage", function() { return ServicesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ServicesPage = /** @class */ (function () {
    function ServicesPage() {
    }
    ServicesPage.prototype.ngOnInit = function () {
    };
    ServicesPage.prototype.slidesDidLoad = function (slides) {
        slides.startAutoplay();
    };
    ServicesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-services',
            template: __webpack_require__(/*! ./services.page.html */ "./src/app/members/services/services.page.html"),
            styles: [__webpack_require__(/*! ./services.page.scss */ "./src/app/members/services/services.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ServicesPage);
    return ServicesPage;
}());



/***/ })

}]);
//# sourceMappingURL=services-services-module.js.map