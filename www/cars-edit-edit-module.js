(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cars-edit-edit-module"],{

/***/ "./src/app/members/cars/edit/edit.module.ts":
/*!**************************************************!*\
  !*** ./src/app/members/cars/edit/edit.module.ts ***!
  \**************************************************/
/*! exports provided: EditPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPageModule", function() { return EditPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _edit_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit.page */ "./src/app/members/cars/edit/edit.page.ts");









var routes = [
    {
        path: '',
        component: _edit_page__WEBPACK_IMPORTED_MODULE_6__["EditPage"]
    }
];
var EditPageModule = /** @class */ (function () {
    function EditPageModule() {
    }
    EditPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"].withConfig({ warnOnNgModelWithFormControl: 'never' })
            ],
            declarations: [_edit_page__WEBPACK_IMPORTED_MODULE_6__["EditPage"]],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]
            ],
        })
    ], EditPageModule);
    return EditPageModule;
}());



/***/ }),

/***/ "./src/app/members/cars/edit/edit.page.html":
/*!**************************************************!*\
  !*** ./src/app/members/cars/edit/edit.page.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-shadow no-border>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-grid color=\"primary\">\n    <ion-row>\n\n      <ion-col size=\"5\">\n        <label class=\"form-title\">Edit Car Info.</label>\n      </ion-col>\n      <ion-col size=\"7\">\n        <div class=\"title-line\"></div>\n      </ion-col>\n\n      <ion-col size=\"12\">\n        <img src=\"../../../assets/images/edit.png\">\n      </ion-col>\n\n      <ion-col size=\"12\" class=\"title-separator\">edit your car information</ion-col>\n\n      <ion-col size=\"12\">\n        <ion-row class=\"car-form\">\n          <div [formGroup]=\"carFormGroup\">\n            <ion-col size=\"6\">\n              <ion-item>\n                <ion-label position=\"stacked\">Brand</ion-label>\n                <ion-input type=\"text\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"car.brand\" formControlName=\"brand\"></ion-input>\n              </ion-item>\n\n              <span class=\"error-message\" *ngIf=\"carFormGroup.controls['brand'].hasError('required') && (carFormGroup.controls['brand'].dirty || carFormGroup.controls['brand'].touched)\">Please enter car brand</span>\n              <span class=\"error-message\" *ngIf=\"carFormGroup.controls['brand'].hasError('maxLength') && (carFormGroup.controls['brand'].dirty || carFormGroup.controls['brand'].touched)\">At most 20 character are allowed</span>\n\n            </ion-col>\n\n            <ion-col size=\"6\">\n              <ion-item>\n                <ion-label position=\"stacked\">Model</ion-label>\n                <ion-input type=\"text\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"car.model\" formControlName=\"model\"></ion-input>\n              </ion-item>\n\n              <span class=\"error-message\" *ngIf=\"carFormGroup.controls['model'].hasError('required') && (carFormGroup.controls['model'].dirty || carFormGroup.controls['model'].touched)\">Please enter car model</span>\n              <span class=\"error-message\" *ngIf=\"carFormGroup.controls['model'].hasError('maxLength') && (carFormGroup.controls['model'].dirty || carFormGroup.controls['model'].touched)\">At most 20 character are allowed</span>\n\n            </ion-col>\n\n            <ion-col size=\"6\">\n              <ion-item>\n                <ion-label position=\"stacked\">Year</ion-label>\n                <ion-input type=\"text\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"car.year\" formControlName=\"year\"></ion-input>\n              </ion-item>\n\n              <span class=\"error-message\" *ngIf=\"carFormGroup.controls['year'].hasError('required') && (carFormGroup.controls['year'].dirty || carFormGroup.controls['year'].touched)\">Please enter the year</span>\n              <span class=\"error-message\" *ngIf=\"carFormGroup.controls['year'].hasError('maxLength') && (carFormGroup.controls['year'].dirty || carFormGroup.controls['year'].touched)\">At most 5 digits are allowed</span>\n              <span class=\"error-message\" *ngIf=\"carFormGroup.controls['year'].hasError('minLength') && (carFormGroup.controls['year'].dirty || carFormGroup.controls['year'].touched)\">At least 4 digits are allowed</span>\n\n            </ion-col>\n\n            <ion-col size=\"6\">\n              <ion-item>\n                <ion-label position=\"stacked\">Color</ion-label>\n                <ion-input type=\"color\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"car.color\" formControlName=\"color\"></ion-input>\n              </ion-item>\n\n              <span class=\"error-message\" *ngIf=\"carFormGroup.controls['color'].hasError('required') && (carFormGroup.controls['color'].dirty || carFormGroup.controls['color'].touched)\">Please select car color</span>\n\n            </ion-col>\n          </div>\n        </ion-row>\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"12\" class=\"form-buttons\">\n        <ion-button color=\"primary\" expand=\"block\" (click)=\"updateCar()\"><label> UPDATE </label> <ion-icon class=\"save-icon\" name=\"checkmark-circle-outline\"></ion-icon></ion-button>\n        <ion-button routerLink=\"/members/cars\" routerDirection=\"back\" color=\"secondary\" expand=\"block\">CANCEL<ion-icon name=\"close\"></ion-icon></ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/members/cars/edit/edit.page.scss":
/*!**************************************************!*\
  !*** ./src/app/members/cars/edit/edit.page.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-title {\n  font-size: 23px;\n  color: #ff9900;\n  font-family: 'Raleway', sans-serif; }\n\n.title-line {\n  height: 2px;\n  widows: 100%;\n  margin-top: 15px;\n  background-color: #ff9900; }\n\n.car-form {\n  margin-top: 15px; }\n\n.title-separator {\n  height: 40px;\n  margin: auto;\n  font-size: 15px;\n  color: #b3b3b3;\n  margin-top: 12px;\n  padding-top: 6px;\n  text-align: center;\n  border-radius: 20px;\n  margin-bottom: 5px;\n  background-color: #f2f2f2;\n  font-family: 'Titillium Web', sans-serif; }\n\n.car-form ion-label {\n  font-size: 14px;\n  color: #262626;\n  font-family: 'Titillium Web', sans-serif; }\n\n.car-form ion-input {\n  padding: 0px;\n  font-size: 14px;\n  color: #4d4d4d;\n  font-family: 'Titillium Web', sans-serif; }\n\n.form-buttons {\n  margin: auto;\n  margin-top: 25px;\n  text-align: center; }\n\n.form-buttons ion-button {\n  width: 100%;\n  display: block;\n  --box-shadow:none;\n  padding-right: 5px;\n  margin-bottom: 10px;\n  --border-radius: 0px;\n  font-family: 'Titillium Web', sans-serif; }\n\n.form-buttons ion-icon {\n  margin-left: 10px; }\n\n.form-buttons label,\n.save-icon {\n  color: black;\n  font-weight: bold; }\n\n.error-message {\n  font-size: 13px;\n  color: var(--ion-color-danger-shade);\n  font-family: 'Titillium Web', sans-serif;\n  text-align: right;\n  margin: 0px;\n  float: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvV2luZG93cy9Vc2Vycy9IUC9Eb2N1bWVudHMvUHJvamVjdHMvSW9uaWMvRHJpdml4L3NyYy9hcHAvbWVtYmVycy9jYXJzL2VkaXQvZWRpdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFlO0VBQ2YsY0FBYztFQUNkLGtDQUFrQyxFQUFBOztBQUV0QztFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLHlCQUF5QixFQUFBOztBQUU3QjtFQUNJLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLFlBQVk7RUFDWixZQUFZO0VBQ1osZUFBZTtFQUNmLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHlCQUEwQjtFQUMxQix3Q0FBd0MsRUFBQTs7QUFFNUM7RUFDSSxlQUFlO0VBQ2YsY0FBYztFQUNkLHdDQUF3QyxFQUFBOztBQUU1QztFQUNJLFlBQVk7RUFDWixlQUFlO0VBQ2YsY0FBYztFQUNkLHdDQUF3QyxFQUFBOztBQUU1QztFQUNJLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksV0FBVztFQUNYLGNBQWM7RUFDZCxpQkFBYTtFQUNiLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsb0JBQWdCO0VBQ2hCLHdDQUF3QyxFQUFBOztBQUU1QztFQUNJLGlCQUFpQixFQUFBOztBQUVyQjs7RUFFSSxZQUFZO0VBQ1osaUJBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksZUFBZTtFQUNmLG9DQUFvQztFQUNwQyx3Q0FBd0M7RUFDeEMsaUJBQWlCO0VBQ2pCLFdBQVU7RUFDVixZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tZW1iZXJzL2NhcnMvZWRpdC9lZGl0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLXRpdGxle1xuICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgICBjb2xvcjogI2ZmOTkwMDtcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xufVxuLnRpdGxlLWxpbmV7XG4gICAgaGVpZ2h0OiAycHg7XG4gICAgd2lkb3dzOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOTkwMDtcbn1cbi5jYXItZm9ybXtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuLnRpdGxlLXNlcGFyYXRvcntcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBjb2xvcjogI2IzYjNiMztcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICAgIHBhZGRpbmctdG9wOiA2cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICAjZjJmMmYyO1xuICAgIGZvbnQtZmFtaWx5OiAnVGl0aWxsaXVtIFdlYicsIHNhbnMtc2VyaWY7XG59XG4uY2FyLWZvcm0gaW9uLWxhYmVse1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogIzI2MjYyNjtcbiAgICBmb250LWZhbWlseTogJ1RpdGlsbGl1bSBXZWInLCBzYW5zLXNlcmlmO1xufVxuLmNhci1mb3JtIGlvbi1pbnB1dHtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjNGQ0ZDRkO1xuICAgIGZvbnQtZmFtaWx5OiAnVGl0aWxsaXVtIFdlYicsIHNhbnMtc2VyaWY7XG59XG4uZm9ybS1idXR0b25ze1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5mb3JtLWJ1dHRvbnMgaW9uLWJ1dHRvbntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICAtLWJveC1zaGFkb3c6bm9uZTtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDBweDtcbiAgICBmb250LWZhbWlseTogJ1RpdGlsbGl1bSBXZWInLCBzYW5zLXNlcmlmO1xufVxuLmZvcm0tYnV0dG9ucyBpb24taWNvbntcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi5mb3JtLWJ1dHRvbnMgbGFiZWwsXG4uc2F2ZS1pY29ue1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5lcnJvci1tZXNzYWdle1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZSk7XG4gICAgZm9udC1mYW1pbHk6ICdUaXRpbGxpdW0gV2ViJywgc2Fucy1zZXJpZjtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBtYXJnaW46MHB4O1xuICAgIGZsb2F0OiByaWdodDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/members/cars/edit/edit.page.ts":
/*!************************************************!*\
  !*** ./src/app/members/cars/edit/edit.page.ts ***!
  \************************************************/
/*! exports provided: EditPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPage", function() { return EditPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_cars_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../api/cars.service */ "./src/app/api/cars.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");







var EditPage = /** @class */ (function () {
    function EditPage(route, carsService, storage, router, form_builder, toastController, navCtrl, ngZone) {
        this.route = route;
        this.carsService = carsService;
        this.storage = storage;
        this.router = router;
        this.form_builder = form_builder;
        this.toastController = toastController;
        this.navCtrl = navCtrl;
        this.ngZone = ngZone;
        this.car = {};
        this.carFormGroup = form_builder.group({
            'model': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(20)])],
            'brand': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(20)])],
            'year': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(4),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(5)])),
            'color': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])),
        });
    }
    EditPage.prototype.ngOnInit = function () {
        var _this = this;
        this.carId = this.route.snapshot.paramMap.get('carId');
        this.storage.get('token').then(function (val) {
            if (val != null) {
                _this.token = val;
                _this.carsService.getUserCar(val, _this.carId).then(function (data) {
                    _this.car = data;
                });
            }
        });
    };
    EditPage.prototype.updateCar = function () {
        var _this = this;
        this.storage.get('token').then(function (val) {
            if (val != null) {
                _this.carsService.updateCar(val, _this.car).then(function (data) {
                    if (Object.keys(data).length > 0) {
                        _this.ngZone.runOutsideAngular(function () {
                            _this.router.navigateByUrl('/members/menu/cars');
                        });
                        // this.router.navigateByUrl('/members/menu/cars');
                    }
                    else {
                        _this.presentToastWithOptions();
                    }
                });
            }
        });
    };
    EditPage.prototype.presentToastWithOptions = function () {
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
    EditPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./edit.page.html */ "./src/app/members/cars/edit/edit.page.html"),
            styles: [__webpack_require__(/*! ./edit.page.scss */ "./src/app/members/cars/edit/edit.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _api_cars_service__WEBPACK_IMPORTED_MODULE_4__["CarsService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_1__["Storage"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"],
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]])
    ], EditPage);
    return EditPage;
}());



/***/ })

}]);
//# sourceMappingURL=cars-edit-edit-module.js.map