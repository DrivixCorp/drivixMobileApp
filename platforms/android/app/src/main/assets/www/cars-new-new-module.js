(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cars-new-new-module"],{

/***/ "./src/app/members/cars/new/new.module.ts":
/*!************************************************!*\
  !*** ./src/app/members/cars/new/new.module.ts ***!
  \************************************************/
/*! exports provided: NewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPageModule", function() { return NewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _new_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new.page */ "./src/app/members/cars/new/new.page.ts");









var routes = [
    {
        path: '',
        component: _new_page__WEBPACK_IMPORTED_MODULE_6__["NewPage"]
    }
];
var NewPageModule = /** @class */ (function () {
    function NewPageModule() {
    }
    NewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"].withConfig({ warnOnNgModelWithFormControl: 'never' })
            ],
            declarations: [_new_page__WEBPACK_IMPORTED_MODULE_6__["NewPage"]],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]
            ],
        })
    ], NewPageModule);
    return NewPageModule;
}());



/***/ }),

/***/ "./src/app/members/cars/new/new.page.html":
/*!************************************************!*\
  !*** ./src/app/members/cars/new/new.page.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-shadow no-border>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-grid color=\"primary\">\n    <ion-row>\n      <ion-col size=\"5\">\n        <label class=\"form-title\">Add New Car</label>\n      </ion-col>\n      <ion-col size=\"7\">\n        <div class=\"title-line\"></div>\n      </ion-col>\n\n      <ion-col size=\"12\">\n        <img src=\"../../../assets/images/car.png\">\n      </ion-col>\n\n      <ion-col size=\"12\" class=\"title-separator\">enter your car information</ion-col>\n\n      <ion-col size=\"12\">\n        <ion-row class=\"car-form\">\n          <div [formGroup]=\"carFormGroup\">\n            <ion-col size=\"6\">\n              <ion-item>\n                <ion-label position=\"stacked\">Brand</ion-label>\n                <ion-input type=\"text\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"data.brand\" formControlName=\"brand\"></ion-input>\n              </ion-item>\n\n              <span class=\"error-message\" *ngIf=\"carFormGroup.controls['brand'].hasError('required') && (carFormGroup.controls['brand'].dirty || carFormGroup.controls['brand'].touched)\">Please enter car brand</span>\n              <span class=\"error-message\" *ngIf=\"carFormGroup.controls['brand'].hasError('maxLength') && (carFormGroup.controls['brand'].dirty || carFormGroup.controls['brand'].touched)\">At most 20 character are allowed</span>\n\n            </ion-col>\n\n            <ion-col size=\"6\">\n              <ion-item>\n                <ion-label position=\"stacked\">Model</ion-label>\n                <ion-input type=\"text\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"data.model\" formControlName=\"model\"></ion-input>\n              </ion-item>\n\n              <span class=\"error-message\" *ngIf=\"carFormGroup.controls['model'].hasError('required') && (carFormGroup.controls['model'].dirty || carFormGroup.controls['model'].touched)\">Please enter car model</span>\n              <span class=\"error-message\" *ngIf=\"carFormGroup.controls['model'].hasError('maxLength') && (carFormGroup.controls['model'].dirty || carFormGroup.controls['model'].touched)\">At most 20 character are allowed</span>\n\n            </ion-col>\n\n            <ion-col size=\"6\">\n              <ion-item>\n                <ion-label position=\"stacked\">Year</ion-label>\n                <ion-input type=\"text\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"data.year\" formControlName=\"year\"></ion-input>\n              </ion-item>\n\n              <span class=\"error-message\" *ngIf=\"carFormGroup.controls['year'].hasError('required') && (carFormGroup.controls['year'].dirty || carFormGroup.controls['year'].touched)\">Please enter the year</span>\n              <span class=\"error-message\" *ngIf=\"carFormGroup.controls['year'].hasError('maxLength') && (carFormGroup.controls['year'].dirty || carFormGroup.controls['year'].touched)\">At most 5 digits are allowed</span>\n              <span class=\"error-message\" *ngIf=\"carFormGroup.controls['year'].hasError('minLength') && (carFormGroup.controls['year'].dirty || carFormGroup.controls['year'].touched)\">At least 4 digits are allowed</span>\n\n            </ion-col>\n\n            <ion-col size=\"6\">\n              <ion-item>\n                <ion-label position=\"stacked\">Color</ion-label>\n                <ion-input type=\"color\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"data.color\" formControlName=\"color\"></ion-input>\n              </ion-item>\n\n              <span class=\"error-message\" *ngIf=\"carFormGroup.controls['color'].hasError('required') && (carFormGroup.controls['color'].dirty || carFormGroup.controls['color'].touched)\">Please select car color</span>\n\n            </ion-col>\n          </div>\n        </ion-row>\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"12\" class=\"form-buttons\">\n        <ion-button color=\"primary\" expand=\"block\" (click)=\"storeCar()\"><label> SAVE </label> <ion-icon class=\"save-icon\" name=\"checkmark-circle-outline\"></ion-icon></ion-button>\n        <ion-button routerLink=\"/members/cars\" routerDirection=\"back\" color=\"secondary\" expand=\"block\">CANCEL<ion-icon name=\"close\"></ion-icon></ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/members/cars/new/new.page.scss":
/*!************************************************!*\
  !*** ./src/app/members/cars/new/new.page.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-title {\n  font-size: 23px;\n  color: #ff9900;\n  font-family: 'Raleway', sans-serif; }\n\n.title-line {\n  height: 2px;\n  widows: 100%;\n  margin-top: 15px;\n  background-color: #ff9900; }\n\n.car-form {\n  margin-top: 15px; }\n\n.title-separator {\n  height: 40px;\n  margin: auto;\n  font-size: 15px;\n  color: #b3b3b3;\n  margin-top: 12px;\n  padding-top: 6px;\n  text-align: center;\n  border-radius: 20px;\n  margin-bottom: 5px;\n  background-color: #f2f2f2;\n  font-family: 'Titillium Web', sans-serif; }\n\n.car-form ion-label {\n  font-size: 14px;\n  color: #262626;\n  font-family: 'Titillium Web', sans-serif; }\n\n.car-form ion-input {\n  padding: 0px;\n  font-size: 14px;\n  color: #4d4d4d;\n  font-family: 'Titillium Web', sans-serif; }\n\n.form-buttons {\n  margin: auto;\n  margin-top: 25px;\n  text-align: center; }\n\n.form-buttons ion-button {\n  width: 100%;\n  display: block;\n  --box-shadow:none;\n  padding-right: 5px;\n  margin-bottom: 10px;\n  --border-radius: 0px;\n  font-family: 'Titillium Web', sans-serif; }\n\n.form-buttons ion-icon {\n  margin-left: 10px; }\n\n.form-buttons label,\n.save-icon {\n  color: black;\n  font-weight: bold; }\n\n.error-message {\n  font-size: 13px;\n  color: var(--ion-color-danger-shade);\n  font-family: 'Titillium Web', sans-serif;\n  text-align: right;\n  margin: 0px;\n  float: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvV2luZG93cy9Vc2Vycy9IUC9Eb2N1bWVudHMvUHJvamVjdHMvSW9uaWMvRHJpdml4L3NyYy9hcHAvbWVtYmVycy9jYXJzL25ldy9uZXcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBZTtFQUNmLGNBQWM7RUFDZCxrQ0FBa0MsRUFBQTs7QUFFdEM7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQix5QkFBeUIsRUFBQTs7QUFFN0I7RUFDSSxnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxZQUFZO0VBQ1osWUFBWTtFQUNaLGVBQWU7RUFDZixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQix5QkFBMEI7RUFDMUIsd0NBQXdDLEVBQUE7O0FBRTVDO0VBQ0ksZUFBZTtFQUNmLGNBQWM7RUFDZCx3Q0FBd0MsRUFBQTs7QUFFNUM7RUFDSSxZQUFZO0VBQ1osZUFBZTtFQUNmLGNBQWM7RUFDZCx3Q0FBd0MsRUFBQTs7QUFFNUM7RUFDSSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLFdBQVc7RUFDWCxjQUFjO0VBQ2QsaUJBQWE7RUFDYixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLG9CQUFnQjtFQUNoQix3Q0FBd0MsRUFBQTs7QUFFNUM7RUFDSSxpQkFBaUIsRUFBQTs7QUFFckI7O0VBRUksWUFBWTtFQUNaLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJLGVBQWU7RUFDZixvQ0FBb0M7RUFDcEMsd0NBQXdDO0VBQ3hDLGlCQUFpQjtFQUNqQixXQUFVO0VBQ1YsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWVtYmVycy9jYXJzL25ldy9uZXcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tdGl0bGV7XG4gICAgZm9udC1zaXplOiAyM3B4O1xuICAgIGNvbG9yOiAjZmY5OTAwO1xuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XG59XG4udGl0bGUtbGluZXtcbiAgICBoZWlnaHQ6IDJweDtcbiAgICB3aWRvd3M6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY5OTAwO1xufVxuLmNhci1mb3Jte1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG59XG4udGl0bGUtc2VwYXJhdG9ye1xuICAgIGhlaWdodDogNDBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGNvbG9yOiAjYjNiM2IzO1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgcGFkZGluZy10b3A6IDZweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogICNmMmYyZjI7XG4gICAgZm9udC1mYW1pbHk6ICdUaXRpbGxpdW0gV2ViJywgc2Fucy1zZXJpZjtcbn1cbi5jYXItZm9ybSBpb24tbGFiZWx7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjMjYyNjI2O1xuICAgIGZvbnQtZmFtaWx5OiAnVGl0aWxsaXVtIFdlYicsIHNhbnMtc2VyaWY7XG59XG4uY2FyLWZvcm0gaW9uLWlucHV0e1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICM0ZDRkNGQ7XG4gICAgZm9udC1mYW1pbHk6ICdUaXRpbGxpdW0gV2ViJywgc2Fucy1zZXJpZjtcbn1cbi5mb3JtLWJ1dHRvbnN7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmZvcm0tYnV0dG9ucyBpb24tYnV0dG9ue1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIC0tYm94LXNoYWRvdzpub25lO1xuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIC0tYm9yZGVyLXJhZGl1czogMHB4O1xuICAgIGZvbnQtZmFtaWx5OiAnVGl0aWxsaXVtIFdlYicsIHNhbnMtc2VyaWY7XG59XG4uZm9ybS1idXR0b25zIGlvbi1pY29ue1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLmZvcm0tYnV0dG9ucyBsYWJlbCxcbi5zYXZlLWljb257XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmVycm9yLW1lc3NhZ2V7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyLXNoYWRlKTtcbiAgICBmb250LWZhbWlseTogJ1RpdGlsbGl1bSBXZWInLCBzYW5zLXNlcmlmO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIG1hcmdpbjowcHg7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/members/cars/new/new.page.ts":
/*!**********************************************!*\
  !*** ./src/app/members/cars/new/new.page.ts ***!
  \**********************************************/
/*! exports provided: NewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPage", function() { return NewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_cars_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../api/cars.service */ "./src/app/api/cars.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var NewPage = /** @class */ (function () {
    function NewPage(alertController, carsService, form_builder, storage, toastController, navCtrl, router, ngZone) {
        this.alertController = alertController;
        this.carsService = carsService;
        this.form_builder = form_builder;
        this.storage = storage;
        this.toastController = toastController;
        this.navCtrl = navCtrl;
        this.router = router;
        this.ngZone = ngZone;
        this.data = {
            token: '',
            model: '',
            brand: '',
            year: '',
            color: '#ooo',
        };
        this.carFormGroup = form_builder.group({
            'model': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(20)])],
            'brand': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(20)])],
            'year': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(4),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(5)])),
            'color': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])),
        });
    }
    NewPage.prototype.ngOnInit = function () {
    };
    NewPage.prototype.storeCar = function () {
        var _this = this;
        this.storage.get('token').then(function (val) {
            if (val != null) {
                _this.data.token = val;
                _this.carsService.storeCar(_this.data).then(function (data) {
                    if (Object.keys(data).length > 0) {
                        _this.ngZone.runOutsideAngular(function () {
                            _this.router.navigateByUrl('/members/menu/cars');
                        });
                    }
                    else {
                        _this.presentToastWithOptions();
                    }
                });
            }
        });
    };
    NewPage.prototype.presentToastWithOptions = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            duration: 2000,
                            position: 'bottom',
                            message: 'Something went wrong, try again !',
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    NewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-new',
            template: __webpack_require__(/*! ./new.page.html */ "./src/app/members/cars/new/new.page.html"),
            styles: [__webpack_require__(/*! ./new.page.scss */ "./src/app/members/cars/new/new.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _api_cars_service__WEBPACK_IMPORTED_MODULE_3__["CarsService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_1__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]])
    ], NewPage);
    return NewPage;
}());



/***/ })

}]);
//# sourceMappingURL=cars-new-new-module.js.map