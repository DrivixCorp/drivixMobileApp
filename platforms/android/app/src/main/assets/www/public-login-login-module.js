(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["public-login-login-module"],{

/***/ "./src/app/public/login/login.module.ts":
/*!**********************************************!*\
  !*** ./src/app/public/login/login.module.ts ***!
  \**********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/public/login/login.page.ts");









var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"].withConfig({ warnOnNgModelWithFormControl: 'never' })
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/public/login/login.page.html":
/*!**********************************************!*\
  !*** ./src/app/public/login/login.page.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <ion-header no-shadow no-border>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content padding>\n  <div class=\"intro\">\n    <img class=\"logo\" src=\"../../../assets/images/Logo-yello.png\" alt=\"drivix logo\"/>\n    <h1 class=\"login-subtitle\">WELCOME BACK !</h1>\n  </div>\n  \n<!-- start -->\n<div [formGroup]=\"login_form\" class=\"login-form\">\n    <ion-item>\n\t\t\t<ion-label>Email Address </ion-label>\n\t\t\t<ion-input [(ngModel)]=\"data.email\" type=\"text\" formControlName=\"email\"></ion-input>\n    </ion-item>\n    <span class=\"error-message\" *ngIf=\"login_form.controls['email'].hasError('required')  && (login_form.controls['email'].dirty || login_form.controls['email'].touched)\">This field is required</span>\n\t\t<span class=\"error-message\" *ngIf=\"login_form.controls['email'].hasError('pattern') && (login_form.controls['email'].dirty || login_form.controls['email'].touched)\">Please enter valid email address</span>\n\t\t<ion-item>\n\t\t\t<ion-label>Password </ion-label>\n\t\t\t<ion-input [(ngModel)]=\"data.password\" type=\"password\" formControlName=\"password\"></ion-input>\n    </ion-item>\n    <span class=\"error-message\" *ngIf=\"login_form.controls['password'].hasError('required') && (login_form.controls['password'].dirty || login_form.controls['password'].touched)\">This field is required</span>\n</div>\n\n<div class=\"errors\">\n    <p class=\"error-message general-error\" color=\"primary\" *ngIf=\"errors\">{{error_msg}}</p>\n</div>\n\n<div class=\"forget-link\">\n    <a class=\"forget-link\" (click)=\"presentAlert()\">LOST YOUR PASSWORD ?</a>\n</div>\n\n<ion-button class=\"login-btn\" expand=\"block\" color=\"secondary\"\n (click)=\"submitForm()\">Login<ion-icon name=\"return-right\"></ion-icon>\n</ion-button>\n\n <div class=\"register-link\">\n    <a class=\"regiter-link\" routerLink=\"/register\" routerDirection=\"forward\">Create New Account</a>\n</div>\n\n<!-- end -->\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/public/login/login.page.scss":
/*!**********************************************!*\
  !*** ./src/app/public/login/login.page.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  box-shadow: none; }\n\n.intro {\n  margin: auto;\n  text-align: center; }\n\n.logo {\n  width: 100px; }\n\n.login-subtitle {\n  font-family: 'Raleway', sans-serif; }\n\n.forget-link, .regiter-link {\n  margin: 15px;\n  margin-left: 0px;\n  font-size: 13px;\n  font-family: 'Titillium Web', sans-serif; }\n\n.login-form ion-label, ion-input {\n  font-family: 'Titillium Web', sans-serif;\n  color: #3a3c4d;\n  font-size: 14px; }\n\n.login-form ion-input {\n  color: black; }\n\n.login-btn {\n  font-family: 'Titillium Web', sans-serif;\n  --border-radius: 0px;\n  --box-shadow:none;\n  color: red; }\n\n.login-btn ion-icon {\n  margin-left: 5px; }\n\n.register-link {\n  margin: auto;\n  text-align: center;\n  padding-top: 10px;\n  font-size: 14px;\n  font-family: 'Titillium Web', sans-serif; }\n\n.error-message {\n  font-size: 13px;\n  color: var(--ion-color-danger-shade);\n  font-family: 'Titillium Web', sans-serif;\n  text-align: right;\n  margin: 0px;\n  float: right; }\n\n.errors {\n  height: 30px;\n  margin: 0px; }\n\n.general-error {\n  display: block;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  float: left; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvV2luZG93cy9Vc2Vycy9IUC9Eb2N1bWVudHMvUHJvamVjdHMvSW9uaWMvRHJpdml4L3NyYy9hcHAvcHVibGljL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLFlBQVk7RUFDWixrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxZQUFZLEVBQUE7O0FBRWhCO0VBQ0ksa0NBQWtDLEVBQUE7O0FBRXRDO0VBQ0ksWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysd0NBQXdDLEVBQUE7O0FBRTVDO0VBQ0ksd0NBQXdDO0VBQ3hDLGNBQWM7RUFDZCxlQUFlLEVBQUE7O0FBRW5CO0VBQ0ksWUFBWSxFQUFBOztBQUVoQjtFQUNJLHdDQUF3QztFQUN4QyxvQkFBZ0I7RUFDaEIsaUJBQWE7RUFDYixVQUFTLEVBQUE7O0FBRWI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysd0NBQXdDLEVBQUE7O0FBRTVDO0VBQ0ksZUFBZTtFQUNmLG9DQUFvQztFQUNwQyx3Q0FBd0M7RUFDeEMsaUJBQWlCO0VBQ2pCLFdBQVU7RUFDVixZQUFZLEVBQUE7O0FBRWhCO0VBQ0ksWUFBWTtFQUNaLFdBQVUsRUFBQTs7QUFFZDtFQUNJLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3B1YmxpYy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVye1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG59XG4uaW50cm97XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5sb2dve1xuICAgIHdpZHRoOiAxMDBweDtcbn1cbi5sb2dpbi1zdWJ0aXRsZXtcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xufVxuLmZvcmdldC1saW5rLCAucmVnaXRlci1saW5re1xuICAgIG1hcmdpbjogMTVweDtcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LWZhbWlseTogJ1RpdGlsbGl1bSBXZWInLCBzYW5zLXNlcmlmO1xufVxuLmxvZ2luLWZvcm0gaW9uLWxhYmVsLCBpb24taW5wdXR7XG4gICAgZm9udC1mYW1pbHk6ICdUaXRpbGxpdW0gV2ViJywgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogIzNhM2M0ZDtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG4ubG9naW4tZm9ybSBpb24taW5wdXR7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuLmxvZ2luLWJ0bntcbiAgICBmb250LWZhbWlseTogJ1RpdGlsbGl1bSBXZWInLCBzYW5zLXNlcmlmO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMHB4O1xuICAgIC0tYm94LXNoYWRvdzpub25lO1xuICAgIGNvbG9yOnJlZDtcbn1cbi5sb2dpbi1idG4gaW9uLWljb257XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cbi5yZWdpc3Rlci1saW5re1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtZmFtaWx5OiAnVGl0aWxsaXVtIFdlYicsIHNhbnMtc2VyaWY7XG59XG4uZXJyb3ItbWVzc2FnZXtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXItc2hhZGUpO1xuICAgIGZvbnQtZmFtaWx5OiAnVGl0aWxsaXVtIFdlYicsIHNhbnMtc2VyaWY7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgbWFyZ2luOjBweDtcbiAgICBmbG9hdDogcmlnaHQ7XG59XG4uZXJyb3Jze1xuICAgIGhlaWdodDogMzBweDtcbiAgICBtYXJnaW46MHB4O1xufVxuLmdlbmVyYWwtZXJyb3J7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIGZsb2F0OiBsZWZ0O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/public/login/login.page.ts":
/*!********************************************!*\
  !*** ./src/app/public/login/login.page.ts ***!
  \********************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _api_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/authentication.service */ "./src/app/api/authentication.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var LoginPage = /** @class */ (function () {
    // functions
    function LoginPage(alertController, Auth, navCtrl, storage, fb) {
        this.alertController = alertController;
        this.Auth = Auth;
        this.navCtrl = navCtrl;
        this.storage = storage;
        // fields
        this.data = {
            email: '',
            password: '',
        };
        // error
        this.errors = false;
        this.error_msg = "";
        this.login_form = fb.group({
            'email': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(/^(\d{10}|\w+@\w+\.\w{2,3})$/)])],
            'password': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
        }, {
        // updateOn: 'blur'
        });
    }
    // ____________________________________________________
    LoginPage.prototype.submitForm = function () {
        for (var v in this.login_form.controls) {
            this.login_form.controls[v].markAsTouched();
        }
        if (this.login_form.valid) {
            this.login();
        }
    };
    ;
    // ____________________________________________________
    LoginPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        // check if token set or not
        this.storage.get('token').then(function (val) {
            if (val != null) {
                _api_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"].User = true;
                _this.navCtrl.navigateForward('/members/menu/services');
            }
        });
    };
    // login function
    LoginPage.prototype.login = function () {
        var _this = this;
        // some validation here
        if (this.data.email == null || this.data.email === '') {
        }
        else {
            // console.log('email is set successfully' + this.data.email);
        }
        // send request to the web service here
        this.Auth.Login(this.data)
            .then(function (success) {
            _api_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"].User = success;
            // @ts-ignore
            if (success) {
                // @ts-ignore
                _this.storage.set('token', success.token);
                _this.navCtrl.navigateForward('/members/menu/services');
            }
        })
            .catch(function (err) {
            _this.error_msg = "INCORRECT E-MAIL OR PASSWORD, TRY AGAIN";
            _this.errors = true;
        });
    };
    // forget password function
    LoginPage.prototype.presentAlert = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Forget your password?',
                            message: 'Enter your e-mail to reset your password:',
                            inputs: [
                                {
                                    name: 'email',
                                    type: 'text',
                                    placeholder: 'Enter your e-mail'
                                }
                            ],
                            buttons: ['Send']
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
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/public/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/public/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _api_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=public-login-login-module.js.map