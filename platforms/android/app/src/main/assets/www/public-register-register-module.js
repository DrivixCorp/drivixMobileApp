(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["public-register-register-module"],{

/***/ "./src/app/public/register/PasswordValidation.ts":
/*!*******************************************************!*\
  !*** ./src/app/public/register/PasswordValidation.ts ***!
  \*******************************************************/
/*! exports provided: PasswordValidation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordValidation", function() { return PasswordValidation; });
var PasswordValidation = /** @class */ (function () {
    function PasswordValidation() {
    }
    PasswordValidation.MatchPassword = function (AC) {
        var password = AC.get('password').value; // to get value in input tag
        var confirm_pass = AC.get('confirm_pass').value; // to get value in input tag
        if (password != confirm_pass) {
            // console.log('false');
            AC.get('confirm_pass').setErrors({ MatchPassword: true });
        }
        else {
            // console.log('true');
        }
    };
    return PasswordValidation;
}());



/***/ }),

/***/ "./src/app/public/register/register.module.ts":
/*!****************************************************!*\
  !*** ./src/app/public/register/register.module.ts ***!
  \****************************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/public/register/register.page.ts");









var routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]
    }
];
var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"].withConfig({ warnOnNgModelWithFormControl: 'never' })
            ],
            declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]
            ],
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());



/***/ }),

/***/ "./src/app/public/register/register.page.html":
/*!****************************************************!*\
  !*** ./src/app/public/register/register.page.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-shadow no-border>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content padding>\n\n    <div class=\"intro\">\n      <img class=\"logo\" src=\"../../../assets/images/Logo-yello.png\" alt=\"drivix logo\"/>\n      <h1 class=\"register-subtitle\">JOIN US !</h1>\n    </div>\n\n    <div [formGroup]=\"registration_form\" class=\"register-form\">\n        <ion-item>\n          <ion-label>Username </ion-label>\n          <ion-input [(ngModel)]=\"data.name\" type=\"text\" formControlName=\"name\"></ion-input>\n        </ion-item>\n        <span class=\"error-message\" *ngIf=\"registration_form.controls['name'].hasError('required') && (registration_form.controls['name'].dirty || registration_form.controls['name'].touched)\">This field is required</span>\n        <span class=\"error-message\" *ngIf=\"registration_form.controls['name'].hasError('minlength') && (registration_form.controls['name'].dirty || registration_form.controls['name'].touched)\">Enter at least 3 characters</span>\n        <span class=\"error-message\" *ngIf=\"registration_form.controls['name'].hasError('maxlength') && (registration_form.controls['name'].dirty || registration_form.controls['name'].touched)\">Enter at most 15 characters</span>\n        <ion-item>\n          <ion-label>Email Address </ion-label>\n          <ion-input [(ngModel)]=\"data.email\" type=\"text\" formControlName=\"email\"></ion-input>\n        </ion-item>\n        <span class=\"error-message\" *ngIf=\"registration_form.controls['email'].hasError('required') && (registration_form.controls['email'].dirty || registration_form.controls['email'].touched)\">This field is required</span>\n        <span class=\"error-message\" *ngIf=\"registration_form.controls['email'].hasError('pattern') && (registration_form.controls['email'].dirty || registration_form.controls['email'].touched)\">Please enter valid mail</span>\n        <ion-item>\n          <ion-label>Password </ion-label>\n          <ion-input [(ngModel)]=\"data.password\" type=\"password\" formControlName=\"password\"></ion-input>\n        </ion-item>\n        <span class=\"error-message\" *ngIf=\"registration_form.controls['password'].hasError('required') && (registration_form.controls['password'].dirty || registration_form.controls['password'].touched)\">This field is required</span>\n        <span class=\"error-message\" *ngIf=\"registration_form.controls['password'].hasError('minlength') && (registration_form.controls['password'].dirty || registration_form.controls['password'].touched)\">Enter at least 8 characters</span>\n        <span class=\"error-message\" *ngIf=\"registration_form.controls['password'].hasError('maxlength') && (registration_form.controls['password'].dirty || registration_form.controls['password'].touched)\">Enter at most 15 characters</span>\n        <ion-item>\n          <ion-label>Confirm Password </ion-label>\n          <ion-input [(ngModel)]=\"data.confirm_pass\" type=\"password\" formControlName=\"confirm_pass\"></ion-input>\n        </ion-item>\n        <span class=\"error-message\" *ngIf=\"registration_form.controls['confirm_pass'].hasError('required') && (registration_form.controls['confirm_pass'].dirty)\">This field is required</span>\n        <div class=\"error-message\" *ngIf=\"registration_form.controls.confirm_pass.errors?.MatchPassword\">Password not match</div>\n        \n        <div class=\"errors\">\n            <p class=\"error-message\" color=\"primary\" *ngIf=\"errors\">{{error_msg}}</p>\n        </div>\n\n        <ion-button (click)=\"submitForm()\" class=\"register-btn\" expand=\"block\" color=\"secondary\">\n            Register<ion-icon name=\"return-right\"></ion-icon>\n        </ion-button>\n\n    </div>\n\n    <div class=\"login-link\">\n      Already have an account? <a href=\"/login\"><a class=\"login-link\" routerLink=\"/login\" routerDirection=\"forward\">Login</a></a>\n    </div>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/public/register/register.page.scss":
/*!****************************************************!*\
  !*** ./src/app/public/register/register.page.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  box-shadow: none; }\n\n.intro {\n  margin: auto;\n  text-align: center; }\n\n.logo {\n  width: 100px; }\n\n.register-subtitle {\n  font-family: 'Raleway', sans-serif; }\n\n.register-form ion-label, ion-input {\n  font-family: 'Titillium Web', sans-serif;\n  color: #3a3c4d;\n  font-size: 14px; }\n\n.register-form ion-input {\n  color: black; }\n\n.register-form .register-btn {\n  font-family: 'Titillium Web', sans-serif;\n  --border-radius: 0px;\n  --box-shadow:none;\n  margin-top: 20px; }\n\n.register-btn ion-icon {\n  margin-left: 5px; }\n\n.login-link {\n  margin: auto;\n  text-align: center;\n  padding-top: 10px;\n  font-family: 'Titillium Web', sans-serif;\n  font-size: 14px; }\n\n.register-form ion-item .item-inner {\n  border: none !important;\n  box-shadow: none !important; }\n\n.register-form ion-item {\n  margin-bottom: 15px; }\n\n.error-message {\n  font-size: 13px;\n  color: var(--ion-color-danger-shade);\n  font-family: 'Titillium Web', sans-serif;\n  text-align: right;\n  margin: 0px;\n  float: right; }\n\n.errors {\n  height: 30px;\n  margin: 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvV2luZG93cy9Vc2Vycy9IUC9Eb2N1bWVudHMvUHJvamVjdHMvSW9uaWMvRHJpdml4L3NyYy9hcHAvcHVibGljL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLFlBQVk7RUFDWixrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxZQUFZLEVBQUE7O0FBRWhCO0VBQ0ksa0NBQWtDLEVBQUE7O0FBRXRDO0VBQ0ksd0NBQXdDO0VBQ3hDLGNBQWM7RUFDZCxlQUFlLEVBQUE7O0FBRW5CO0VBQ0ksWUFBWSxFQUFBOztBQUVoQjtFQUNJLHdDQUF3QztFQUN4QyxvQkFBZ0I7RUFDaEIsaUJBQWE7RUFDYixnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQix3Q0FBd0M7RUFDeEMsZUFBZSxFQUFBOztBQUVuQjtFQUNJLHVCQUF1QjtFQUN2QiwyQkFBMkIsRUFBQTs7QUFFL0I7RUFDSSxtQkFBbUIsRUFBQTs7QUFFdkI7RUFDSSxlQUFlO0VBQ2Ysb0NBQW9DO0VBQ3BDLHdDQUF3QztFQUN4QyxpQkFBaUI7RUFDakIsV0FBVTtFQUNWLFlBQVksRUFBQTs7QUFFaEI7RUFDSSxZQUFZO0VBQ1osV0FBVSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcHVibGljL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXJ7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbn1cbi5pbnRyb3tcbiAgICBtYXJnaW46IGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmxvZ297XG4gICAgd2lkdGg6IDEwMHB4O1xufVxuLnJlZ2lzdGVyLXN1YnRpdGxle1xuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XG59XG4ucmVnaXN0ZXItZm9ybSBpb24tbGFiZWwsIGlvbi1pbnB1dHtcbiAgICBmb250LWZhbWlseTogJ1RpdGlsbGl1bSBXZWInLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiAjM2EzYzRkO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5yZWdpc3Rlci1mb3JtIGlvbi1pbnB1dHtcbiAgICBjb2xvcjogYmxhY2s7XG59XG4ucmVnaXN0ZXItZm9ybSAucmVnaXN0ZXItYnRue1xuICAgIGZvbnQtZmFtaWx5OiAnVGl0aWxsaXVtIFdlYicsIHNhbnMtc2VyaWY7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgLS1ib3gtc2hhZG93Om5vbmU7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5yZWdpc3Rlci1idG4gaW9uLWljb257XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cbi5sb2dpbi1saW5re1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgZm9udC1mYW1pbHk6ICdUaXRpbGxpdW0gV2ViJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG4ucmVnaXN0ZXItZm9ybSBpb24taXRlbSAuaXRlbS1pbm5lciB7XG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICB9XG4ucmVnaXN0ZXItZm9ybSBpb24taXRlbXtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuLmVycm9yLW1lc3NhZ2V7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyLXNoYWRlKTtcbiAgICBmb250LWZhbWlseTogJ1RpdGlsbGl1bSBXZWInLCBzYW5zLXNlcmlmO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIG1hcmdpbjowcHg7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuLmVycm9yc3tcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgbWFyZ2luOjBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/public/register/register.page.ts":
/*!**************************************************!*\
  !*** ./src/app/public/register/register.page.ts ***!
  \**************************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _api_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/authentication.service */ "./src/app/api/authentication.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _PasswordValidation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PasswordValidation */ "./src/app/public/register/PasswordValidation.ts");







var RegisterPage = /** @class */ (function () {
    // constructor
    function RegisterPage(Auth, navCtrl, storage, fb) {
        this.Auth = Auth;
        this.navCtrl = navCtrl;
        this.storage = storage;
        // fields
        this.data = {
            email: '',
            password: '',
            confirm_pass: '',
            name: '',
        };
        // error
        this.errors = false;
        this.error_msg = "";
        this.registration_form = fb.group({
            'email': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(/^(\d{10}|\w+@\w+\.\w{2,3})$/)])],
            'password': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(15)])],
            'name': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(15)])],
            'confirm_pass': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])]
        }, {
            validator: _PasswordValidation__WEBPACK_IMPORTED_MODULE_6__["PasswordValidation"].MatchPassword,
        });
    }
    // ____________________________________________________
    RegisterPage.prototype.submitForm = function () {
        for (var v in this.registration_form.controls) {
            this.registration_form.controls[v].markAsTouched();
        }
        if (this.registration_form.valid) {
            this.register();
        }
        else {
        }
    };
    ;
    // ____________________________________________________
    // will enter guard
    RegisterPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        // check if token set or not
        this.storage.get('token').then(function (val) {
            if (val != null) {
                _api_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"].User = true;
                _this.navCtrl.navigateForward('/members/menu/services');
            }
        });
    };
    // register
    RegisterPage.prototype.register = function () {
        var _this = this;
        this.Auth.register(this.data)
            .then(function (success) {
            _api_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"].User = success;
            // @ts-ignore
            _this.storage.set('token', success.token);
            _this.navCtrl.navigateForward('/members/menu/services');
        })
            .catch(function (err) {
            if (err.status == 500) {
                _this.error_msg = "THIS E-MAIL ALREADY EXISTS";
                _this.errors = true;
            }
        });
    };
    RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.page.html */ "./src/app/public/register/register.page.html"),
            styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/public/register/register.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
    ], RegisterPage);
    return RegisterPage;
}());



/***/ })

}]);
//# sourceMappingURL=public-register-register-module.js.map