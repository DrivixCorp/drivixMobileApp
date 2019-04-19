(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["public-main-main-module"],{

/***/ "./src/app/public/main/main.module.ts":
/*!********************************************!*\
  !*** ./src/app/public/main/main.module.ts ***!
  \********************************************/
/*! exports provided: MainPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageModule", function() { return MainPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _main_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main.page */ "./src/app/public/main/main.page.ts");







var routes = [
    {
        path: '',
        component: _main_page__WEBPACK_IMPORTED_MODULE_6__["MainPage"]
    }
];
var MainPageModule = /** @class */ (function () {
    function MainPageModule() {
    }
    MainPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_main_page__WEBPACK_IMPORTED_MODULE_6__["MainPage"]]
        })
    ], MainPageModule);
    return MainPageModule;
}());



/***/ }),

/***/ "./src/app/public/main/main.page.html":
/*!********************************************!*\
  !*** ./src/app/public/main/main.page.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content padding>\n  <img class=\"logo\" src=\"../../../assets/images/Logo-white.png\" alt=\"drivix logo\"/>\n  <h2 class=\"main-subtitle\">\n    Your safety is always our priority\n  </h2>\n  <ion-button class=\"regiter-btn\" color=\"primary\" expand=\"block\" fill=\"clear\" routerLink=\"/register\" routerDirection=\"forward\">Get Started</ion-button>\n  <a class=\"login-link\" routerLink=\"/login\">Already has an account? Login</a>\n\n  <div class=\"social-icons\">\n    <a href=\"\"><i class=\"fab fa-google-plus-square\"></i></a>\n    <a href=\"\"><i class=\"fab fa-facebook-square\"></i></a>\n    <a href=\"\"><i class=\"fab fa-twitter-square\"></i></a>\n  </div>\n  \n\n</ion-content>\n\n<ion-footer class=\"main-footer\">\n  <ion-toolbar color=\"--ion-color-light\">\n    <ion-title class=\"footer\">All Rights Reserved to GP Team 2019.</ion-title>\n  </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/public/main/main.page.scss":
/*!********************************************!*\
  !*** ./src/app/public/main/main.page.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: url('jake.png') no-repeat center center / cover;\n  margin: auto;\n  text-align: center; }\n\n.logo {\n  width: 250px;\n  margin: auto; }\n\n.main-subtitle {\n  color: white;\n  font-family: 'Raleway', sans-serif;\n  margin: 35px;\n  font-size: 30px;\n  text-shadow: 1px 1px 2px var(--ion-color-primary); }\n\n.regiter-btn {\n  background-color: var(--ion-color-primary-contrast);\n  font-family: 'Titillium Web', sans-serif;\n  border-radius: 0px;\n  color: white; }\n\n.login-link {\n  color: white;\n  font-family: 'Titillium Web', sans-serif;\n  margin-top: 10px; }\n\n.main-footer {\n  background-color: var(--ion-color-primary);\n  height: 45px;\n  color: white;\n  text-align: center; }\n\n.main-footer .footer {\n  font-family: 'Titillium Web', sans-serif;\n  font-size: 13px; }\n\n.social-icons {\n  margin: 5px;\n  color: var(--ion-color-primary-contrast); }\n\n.social-icons i {\n  font-size: 30px;\n  margin: 15px;\n  margin-top: 20px;\n  text-shadow: 1px 1px 1px var(--ion-color-primary-tint); }\n\n.social-icons a {\n  text-decoration: none;\n  color: var(--ion-color-primary-contrast); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvV2luZG93cy9Vc2Vycy9IUC9Eb2N1bWVudHMvUHJvamVjdHMvSW9uaWMvRHJpdml4L3NyYy9hcHAvcHVibGljL21haW4vbWFpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw2REFBYTtFQUNiLFlBQVk7RUFDWixrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxZQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUVoQjtFQUNJLFlBQVc7RUFDWCxrQ0FBa0M7RUFDbEMsWUFBWTtFQUNaLGVBQWU7RUFDZixpREFBaUQsRUFBQTs7QUFFckQ7RUFDSSxtREFBbUQ7RUFDbkQsd0NBQXdDO0VBQ3hDLGtCQUFrQjtFQUNsQixZQUFZLEVBQUE7O0FBRWhCO0VBQ0ksWUFBWTtFQUNaLHdDQUF3QztFQUN4QyxnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSwwQ0FBMEM7RUFDMUMsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFDSixFQUFBOztBQUNBO0VBQ0ksd0NBQXdDO0VBQ3hDLGVBQWUsRUFBQTs7QUFFbkI7RUFDSSxXQUFXO0VBQ1gsd0NBQXdDLEVBQUE7O0FBRTVDO0VBQ0ksZUFBZTtFQUNmLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsc0RBQXNELEVBQUE7O0FBRTFEO0VBQ0kscUJBQXFCO0VBQ3JCLHdDQUF3QyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcHVibGljL21haW4vbWFpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvamFrZS5wbmcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubG9nb3tcbiAgICB3aWR0aDoyNTBweDtcbiAgICBtYXJnaW46IGF1dG87XG59XG4ubWFpbi1zdWJ0aXRsZXtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xuICAgIG1hcmdpbjogMzVweDtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbi5yZWdpdGVyLWJ0bntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCk7XG4gICAgZm9udC1mYW1pbHk6ICdUaXRpbGxpdW0gV2ViJywgc2Fucy1zZXJpZjtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuLmxvZ2luLWxpbmt7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtZmFtaWx5OiAnVGl0aWxsaXVtIFdlYicsIHNhbnMtc2VyaWY7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5tYWluLWZvb3RlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgaGVpZ2h0OiA0NXB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXJcbn1cbi5tYWluLWZvb3RlciAuZm9vdGVye1xuICAgIGZvbnQtZmFtaWx5OiAnVGl0aWxsaXVtIFdlYicsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxM3B4O1xufVxuLnNvY2lhbC1pY29uc3tcbiAgICBtYXJnaW46IDVweDtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QpO1xufVxuLnNvY2lhbC1pY29ucyBpe1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBtYXJnaW46IDE1cHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggdmFyKC0taW9uLWNvbG9yLXByaW1hcnktdGludCk7XG59XG4uc29jaWFsLWljb25zIGF7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCk7XG59Il19 */"

/***/ }),

/***/ "./src/app/public/main/main.page.ts":
/*!******************************************!*\
  !*** ./src/app/public/main/main.page.ts ***!
  \******************************************/
/*! exports provided: MainPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPage", function() { return MainPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _api_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api/authentication.service */ "./src/app/api/authentication.service.ts");





var MainPage = /** @class */ (function () {
    function MainPage(navCtrl, storage) {
        this.navCtrl = navCtrl;
        this.storage = storage;
    }
    MainPage.prototype.ngOnInit = function () {
    };
    MainPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        // check if token set or not
        this.storage.get('token').then(function (val) {
            if (val != null) {
                console.log('token = ' + val);
                _api_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"].User = true;
                _this.navCtrl.navigateForward('/members/menu/services');
            }
        });
    };
    MainPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.page.html */ "./src/app/public/main/main.page.html"),
            styles: [__webpack_require__(/*! ./main.page.scss */ "./src/app/public/main/main.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]])
    ], MainPage);
    return MainPage;
}());



/***/ })

}]);
//# sourceMappingURL=public-main-main-module.js.map