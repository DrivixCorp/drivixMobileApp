(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cars-index-index-module"],{

/***/ "./src/app/members/cars/index/index.module.ts":
/*!****************************************************!*\
  !*** ./src/app/members/cars/index/index.module.ts ***!
  \****************************************************/
/*! exports provided: IndexPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexPageModule", function() { return IndexPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _index_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.page */ "./src/app/members/cars/index/index.page.ts");







var routes = [
    {
        path: '',
        component: _index_page__WEBPACK_IMPORTED_MODULE_6__["IndexPage"]
    }
];
var IndexPageModule = /** @class */ (function () {
    function IndexPageModule() {
    }
    IndexPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_index_page__WEBPACK_IMPORTED_MODULE_6__["IndexPage"]]
        })
    ], IndexPageModule);
    return IndexPageModule;
}());



/***/ }),

/***/ "./src/app/members/cars/index/index.page.html":
/*!****************************************************!*\
  !*** ./src/app/members/cars/index/index.page.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-shadow no-border>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"light\"></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <!-- fab placed to the top end -->\n  <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button color=\"dark\" routerLink=\"/members/cars/new\" routerDirection=\"forward\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <ion-grid color=\"primary\">\n    <ion-row>\n\n      <ion-col size=\"12\" class=\"carList-titles\">\n        <h2>Your Cars List</h2>\n        <span>\n          <ion-icon name=\"remove\"></ion-icon> your cars details help you find the most suitable spare parts shops we can suggest to you.\n        </span>\n      </ion-col>\n\n      <ion-col size=\"10\" offset=\"1\" class=\"carList-container\" *ngFor =\"let car of carsList; let i = index\">\n        <ion-row>\n          <ion-col size=\"4\" offset=\"7\" class=\"carList-total\">Car #{{i+1}}</ion-col>\n        </ion-row>\n        \n        <ion-col size=\"10\" offset=\"1\" class=\"carList-card\">\n          <ion-item>\n            <ion-label class=\"carList-brand\">\n              {{ car.brand }} <span class=\"carList-model\">{{ car.model }}</span>\n            </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label>\n              <ion-row class=\"carList-details\">\n                <ion-col size=\"6\"> YEAR <span class=\"carList-value\">{{ car.year }}</span></ion-col>\n                <ion-col size=\"6\" class=\"carList-color\"> COLOR <span class=\"carList-value\"><i class=\"fas fa-circle\" [ngStyle]=\"{'color': car.color}\" style=\"font-size: 3em;\"></i></span></ion-col>\n              </ion-row>\n            </ion-label>\n          </ion-item>\n        \n          <ion-row class=\"carList-operations\">\n            <ion-col size=\"6\">\n              <ion-button color=\"medium\" expand=\"full\" (click)=\"updateCar(car.id)\" routerDirection=\"forward\"><ion-icon class=\"\" name=\"create\" slot=\"end\"></ion-icon></ion-button>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-button (click)=\"presentAlert(car)\" color=\"dark\" expand=\"full\"><ion-icon class=\"\" name=\"trash\" slot=\"end\"></ion-icon></ion-button>\n            </ion-col>\n          </ion-row>\n          \n        </ion-col>  \n      </ion-col>\n\n      <ion-col size=\"8\" offset=\"2\" *ngIf=\"emptyList\" class=\"emptyList\">\n        <h6><i class=\"fas fa-exclamation\"></i> You don't have any cars yet !</h6>\n      </ion-col>\n\n    </ion-row>\n  </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/members/cars/index/index.page.scss":
/*!****************************************************!*\
  !*** ./src/app/members/cars/index/index.page.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: #f2f2f2; }\n\n.carList-titles h2 {\n  font-family: 'Raleway', sans-serif; }\n\n.carList-titles span {\n  color: grey;\n  font-size: 15px;\n  font-family: 'Titillium Web', sans-serif; }\n\n.carList-container {\n  height: 100%;\n  margin-top: 15px;\n  padding-top: 0px;\n  border-radius: 10px;\n  background-color: white;\n  border-top: 3px solid #eeab10;\n  box-shadow: 6px 7px 35px -12px #575757; }\n\n.carList-container .carList-total {\n  background-color: #eeab10;\n  border-radius: 0px 0px 5px 5px; }\n\n.carList-total {\n  color: white;\n  font-size: 15px;\n  text-align: center;\n  text-transform: uppercase;\n  font-family: 'Titillium Web', sans-serif; }\n\n.carList-edit {\n  color: #009933; }\n\n.carList-delete {\n  color: #c0392b; }\n\n.carList-card .carList-brand {\n  font-size: 15px;\n  color: #ff9900;\n  font-weight: bold;\n  font-family: 'Raleway', sans-serif; }\n\n.carList-card .carList-model {\n  font-size: 15px;\n  margin-left: 7px;\n  color: #595959; }\n\n.carList-card .carList-details {\n  font-size: 14px;\n  color: #ff9900;\n  font-family: 'Titillium Web', sans-serif; }\n\n.carList-details .carList-color {\n  text-align: right;\n  border-left: 1px solid #cccccc; }\n\n.carList-value {\n  display: block;\n  color: #595959; }\n\n.carList-value i {\n  font-size: 3em; }\n\n.carList-operations ion-button {\n  --box-shadow:none;\n  --border-radius: 0px; }\n\n.emptyList {\n  padding: 6px;\n  color: #666666;\n  margin-top: 20px;\n  text-align: center;\n  border-radius: 10px;\n  background-color: white;\n  font-family: 'Raleway', sans-serif;\n  box-shadow: 10px 10px 33px -20px rgba(0, 0, 0, 0.75); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvV2luZG93cy9Vc2Vycy9IUC9Eb2N1bWVudHMvUHJvamVjdHMvSW9uaWMvRHJpdml4L3NyYy9hcHAvbWVtYmVycy9jYXJzL2luZGV4L2luZGV4LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFhLEVBQUE7O0FBRWpCO0VBQ0ksa0NBQWtDLEVBQUE7O0FBRXRDO0VBQ0ksV0FBVztFQUNYLGVBQWU7RUFDZix3Q0FBd0MsRUFBQTs7QUFFNUM7RUFDSSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLDZCQUE2QjtFQUM3QixzQ0FBK0MsRUFBQTs7QUFFbkQ7RUFDSSx5QkFBeUI7RUFDekIsOEJBQThCLEVBQUE7O0FBRWxDO0VBQ0ksWUFBWTtFQUNaLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLHdDQUF3QyxFQUFBOztBQUU1QztFQUNJLGNBQWMsRUFBQTs7QUFFbEI7RUFDSSxjQUFjLEVBQUE7O0FBRWxCO0VBQ0ksZUFBZTtFQUNmLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0NBQWtDLEVBQUE7O0FBRXRDO0VBQ0ksZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjLEVBQUE7O0FBRWxCO0VBQ0ksZUFBZTtFQUNmLGNBQWM7RUFDZCx3Q0FBd0MsRUFBQTs7QUFFNUM7RUFDSSxpQkFBaUI7RUFDakIsOEJBQThCLEVBQUE7O0FBRWxDO0VBQ0ksY0FBYztFQUNkLGNBQWMsRUFBQTs7QUFFbEI7RUFDSSxjQUFjLEVBQUE7O0FBRWxCO0VBQ0ksaUJBQWE7RUFDYixvQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxZQUFZO0VBQ1osY0FBYztFQUNkLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixrQ0FBa0M7RUFDbEMsb0RBQWlELEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tZW1iZXJzL2NhcnMvaW5kZXgvaW5kZXgucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogI2YyZjJmMjtcbn1cbi5jYXJMaXN0LXRpdGxlcyBoMntcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xufVxuLmNhckxpc3QtdGl0bGVzIHNwYW57XG4gICAgY29sb3I6IGdyZXk7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtZmFtaWx5OiAnVGl0aWxsaXVtIFdlYicsIHNhbnMtc2VyaWY7XG59XG4uY2FyTGlzdC1jb250YWluZXJ7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgcGFkZGluZy10b3A6IDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci10b3A6IDNweCBzb2xpZCAjZWVhYjEwO1xuICAgIGJveC1zaGFkb3c6IDZweCA3cHggMzVweCAtMTJweCByZ2JhKDg3LDg3LDg3LDEpO1xufVxuLmNhckxpc3QtY29udGFpbmVyIC5jYXJMaXN0LXRvdGFse1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWFiMTA7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA1cHggNXB4O1xufVxuLmNhckxpc3QtdG90YWx7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LWZhbWlseTogJ1RpdGlsbGl1bSBXZWInLCBzYW5zLXNlcmlmO1xufVxuLmNhckxpc3QtZWRpdHtcbiAgICBjb2xvcjogIzAwOTkzMztcbn1cbi5jYXJMaXN0LWRlbGV0ZXtcbiAgICBjb2xvcjogI2MwMzkyYjtcbn1cbi5jYXJMaXN0LWNhcmQgLmNhckxpc3QtYnJhbmR7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGNvbG9yOiAjZmY5OTAwO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XG59XG4uY2FyTGlzdC1jYXJkIC5jYXJMaXN0LW1vZGVse1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBtYXJnaW4tbGVmdDogN3B4O1xuICAgIGNvbG9yOiAjNTk1OTU5O1xufVxuLmNhckxpc3QtY2FyZCAuY2FyTGlzdC1kZXRhaWxze1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogI2ZmOTkwMDtcbiAgICBmb250LWZhbWlseTogJ1RpdGlsbGl1bSBXZWInLCBzYW5zLXNlcmlmO1xufVxuLmNhckxpc3QtZGV0YWlscyAuY2FyTGlzdC1jb2xvcntcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNjY2NjY2M7XG59XG4uY2FyTGlzdC12YWx1ZXtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjb2xvcjogIzU5NTk1OTtcbn1cbi5jYXJMaXN0LXZhbHVlIGl7XG4gICAgZm9udC1zaXplOiAzZW07XG59XG4uY2FyTGlzdC1vcGVyYXRpb25zIGlvbi1idXR0b257XG4gICAgLS1ib3gtc2hhZG93Om5vbmU7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAwcHg7XG59XG4uZW1wdHlMaXN0e1xuICAgIHBhZGRpbmc6IDZweDtcbiAgICBjb2xvcjogIzY2NjY2NjtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XG4gICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDMzcHggLTIwcHggcmdiYSgwLDAsMCwwLjc1KTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/members/cars/index/index.page.ts":
/*!**************************************************!*\
  !*** ./src/app/members/cars/index/index.page.ts ***!
  \**************************************************/
/*! exports provided: IndexPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexPage", function() { return IndexPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_cars_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../api/cars.service */ "./src/app/api/cars.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var IndexPage = /** @class */ (function () {
    function IndexPage(alertController, carsService, storage, route, router, toastController, navCtrl) {
        this.alertController = alertController;
        this.carsService = carsService;
        this.storage = storage;
        this.route = route;
        this.router = router;
        this.toastController = toastController;
        this.navCtrl = navCtrl;
        this.carsList = [];
        this.emptyList = false;
    }
    IndexPage.prototype.ngOnInit = function () {
        this.getUserCars();
    };
    IndexPage.prototype.getUserCars = function () {
        var _this = this;
        this.storage.get('token').then(function (val) {
            if (val != null) {
                _this.carsService.getUserCars(val).then(function (data) {
                    if (Object.keys(data).length > 0) {
                        _this.carsList = data;
                    }
                    else {
                        _this.emptyList = true;
                    }
                });
            }
        });
    };
    IndexPage.prototype.updateCar = function (carId) {
        this.router.navigate(['members/cars/edit', carId]);
    };
    IndexPage.prototype.deleteUserCars = function (carId) {
        var _this = this;
        this.storage.get('token').then(function (val) {
            if (val != null) {
                _this.carsService.deleteCar(val, carId).then(function (data) {
                    if (Object.keys(data).length > 0) {
                        _this.presentToastWithOptions();
                    }
                });
            }
        });
    };
    IndexPage.prototype.presentAlert = function (car) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Remove car',
                            message: 'Are you sure you want to remove this car from your list?',
                            buttons: [
                                {
                                    text: 'Cancel',
                                    handler: function () {
                                        console.log('Cancel clicked');
                                    }
                                },
                                {
                                    text: 'Remove',
                                    handler: function () {
                                        _this.deleteUserCars(car.id);
                                        var index = _this.carsList.indexOf(car);
                                        _this.carsList.splice(index, 1);
                                        if (Object.keys(_this.carsList).length == 0) {
                                            _this.emptyList = true;
                                        }
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
    IndexPage.prototype.presentToastWithOptions = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            duration: 2000,
                            position: 'bottom',
                            message: 'Car deleted successfully !',
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    IndexPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! ./index.page.html */ "./src/app/members/cars/index/index.page.html"),
            styles: [__webpack_require__(/*! ./index.page.scss */ "./src/app/members/cars/index/index.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _api_cars_service__WEBPACK_IMPORTED_MODULE_4__["CarsService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_1__["Storage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], IndexPage);
    return IndexPage;
}());



/***/ })

}]);
//# sourceMappingURL=cars-index-index-module.js.map