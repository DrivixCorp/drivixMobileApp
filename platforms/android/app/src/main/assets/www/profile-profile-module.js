(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "./src/app/api/profile.service.ts":
/*!****************************************!*\
  !*** ./src/app/api/profile.service.ts ***!
  \****************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ProfileService = /** @class */ (function () {
    function ProfileService(http) {
        this.http = http;
        this.URl = 'http://www.drivixcorp.com/api/';
    }
    // Get My Profile
    ProfileService.prototype.Profile = function (Token) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.URl + 'profile/' + Token, JSON.stringify({}), {})
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    // Add Profile
    ProfileService.prototype.UpdateProfileData = function (data, URL) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.URl + URL, JSON.stringify({}), {
                params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                    .set('token', data.token)
                    .append('phone', data.phone)
                    .append('gender', data.gender)
                    .append('DOB', data.DOB)
                    .append('job', data.job)
                    .append('location', data.location),
            })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ProfileService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProfileService);
    return ProfileService;
}());



/***/ }),

/***/ "./src/app/members/profile/profile.module.ts":
/*!***************************************************!*\
  !*** ./src/app/members/profile/profile.module.ts ***!
  \***************************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/members/profile/profile.page.ts");









var routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]
    }
];
var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"].withConfig({ warnOnNgModelWithFormControl: 'never' })
            ],
            declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]
            ],
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());



/***/ }),

/***/ "./src/app/members/profile/profile.page.html":
/*!***************************************************!*\
  !*** ./src/app/members/profile/profile.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-shadow no-border>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"light\">PROFILE</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-item class=\"intro\">\n        <ion-item class=\"fas fa-user-circle user\"></ion-item>\n        <ion-item class=\"username\">ALIA AMR</ion-item>\n      </ion-item>\n      \n      <div [formGroup]=\"profile_form\" class=\"\">\n        <ion-item>\n          <ion-label>Job</ion-label>\n          <ion-input [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"data.job\" formControlName=\"job\"></ion-input>\n        </ion-item>\n\n        <span class=\"error-message\" *ngIf=\"profile_form.controls['job'].hasError('required') && (profile_form.controls['job'].dirty || profile_form.controls['job'].touched)\">Please enter your job</span>\n        <span class=\"error-message\" *ngIf=\"profile_form.controls['job'].hasError('minLength') && (profile_form.controls['job'].dirty || profile_form.controls['job'].touched)\">Enter at least 5 characters</span>\n        <span class=\"error-message\" *ngIf=\"profile_form.controls['job'].hasError('maxLength') && (profile_form.controls['job'].dirty || profile_form.controls['job'].touched)\">At most 50 are allowed</span>\n        \n        <ion-item>\n          <ion-label>Phone number</ion-label>\n          <ion-input [(ngModel)]=\"data.phone\" [ngModelOptions]=\"{standalone: true}\" formControlName=\"phone\"></ion-input>\n        </ion-item>\n\n        <span class=\"error-message\" *ngIf=\"profile_form.controls['phone'].hasError('required') && (profile_form.controls['phone'].dirty || profile_form.controls['phone'].touched)\">Please enter your phone number</span>\n        <span class=\"error-message\" *ngIf=\"profile_form.controls['phone'].hasError('minLength') && (profile_form.controls['phone'].dirty || profile_form.controls['phone'].touched)\">Please enter valid phone number</span>\n        <span class=\"error-message\" *ngIf=\"profile_form.controls['phone'].hasError('maxLength') && (profile_form.controls['phone'].dirty || profile_form.controls['phone'].touched)\">Please enter valid phone number</span>\n        <span class=\"error-message\" *ngIf=\"profile_form.controls['phone'].hasError('pattern') && (profile_form.controls['phone'].dirty || profile_form.controls['phone'].touched)\">Please enter valid phone number</span>\n\n        <ion-item>\n          <ion-label>Address</ion-label>\n          <ion-input [(ngModel)]=\"data.location\" [ngModelOptions]=\"{standalone: true}\" formControlName=\"location\"></ion-input>\n        </ion-item>\n\n        <span class=\"error-message\" *ngIf=\"profile_form.controls['location'].hasError('required') && (profile_form.controls['location'].dirty || profile_form.controls['location'].touched)\">Please enter your address</span>\n        <span class=\"error-message\" *ngIf=\"profile_form.controls['location'].hasError('minLength') && (profile_form.controls['location'].dirty || profile_form.controls['location'].touched)\">Enter at least 5 characters</span>\n        <span class=\"error-message\" *ngIf=\"profile_form.controls['location'].hasError('maxLength') && (profile_form.controls['location'].dirty || profile_form.controls['location'].touched)\">At most 25 are allowed</span>\n\n        <ion-list>\n            <ion-radio-group [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"data.gender\" formControlName=\"gender\">\n              <ion-list-header>\n                <ion-label>Gender</ion-label>\n              </ion-list-header>\n              <ion-item>\n                <ion-label>Male</ion-label>\n                <ion-radio slot=\"start\" value=\"male\"></ion-radio>\n              </ion-item>\n              <ion-item>\n                <ion-label>Female</ion-label>\n                <ion-radio slot=\"start\" value=\"female\" checked></ion-radio>\n              </ion-item>\n            </ion-radio-group>\n          </ion-list>\n\n          <span class=\"error-message\" *ngIf=\"profile_form.controls['gender'].hasError('required') && (profile_form.controls['gender'].dirty || profile_form.controls['gender'].touched)\">Please select your gender</span>\n\n        <ion-item>\n          <ion-label>Birth date</ion-label>\n          <ion-input [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"data.DOB\" type=\"date\" formControlName=\"DOB\" value =\"{{ DOB | date: 'yyyy-MM-dd'}}\"></ion-input>\n        </ion-item>\n\n        <span class=\"error-message\" *ngIf=\"profile_form.controls['DOB'].hasError('required') && (profile_form.controls['DOB'].dirty || profile_form.controls['DOB'].touched)\">Please select your birth date</span>\n\n        <ion-button [ngClass]=\"{'hide':HasProfile == true , 'active':HasProfile == false}\"  id=\"AddProfile\" class=\"save-btn\" expand=\"block\" color=\"secondary\" (click)=\"UpdateMyData('profile')\">\n          Save<ion-icon name=\"checkmark\"></ion-icon>\n        </ion-button>\n\n      <ion-button  [ngClass]=\"{'hide':HasProfile == false , 'active':HasProfile == true}\" id=\"UpdateProfile\" class=\"save-btn\" expand=\"block\" color=\"secondary\" (click)=\"UpdateMyData('updateprofile')\">\n          Update Profile<ion-icon name=\"checkmark\"></ion-icon>\n      </ion-button>\n    </div>\n\n      <ion-button class=\"cancel-btn\" expand=\"block\" color=\"primary\" routerLink=\"/members/menu/dashboard\" routerDirection=\"forward\">\n        Cancel\n      </ion-button>\n    <!--End Profile Form-->\n</ion-content>\n"

/***/ }),

/***/ "./src/app/members/profile/profile.page.scss":
/*!***************************************************!*\
  !*** ./src/app/members/profile/profile.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-title {\n  font-family: 'Raleway', sans-serif;\n  letter-spacing: 1.5px; }\n\n.intro {\n  margin: auto;\n  text-align: center; }\n\n.user {\n  font-size: 80px;\n  color: var(--ion-color-primary-tint); }\n\n.username {\n  font-size: 13px;\n  letter-spacing: 1.8px;\n  font-family: 'Raleway', sans-serif; }\n\n.profile-form ion-label, ion-input {\n  font-family: 'Titillium Web', sans-serif;\n  color: #3a3c4d;\n  font-size: 14px; }\n\n.profile-form ion-input {\n  color: black; }\n\n.profile-form .save-btn, .cancel-btn {\n  font-family: 'Titillium Web', sans-serif;\n  --border-radius: 0px;\n  --box-shadow:none;\n  margin-top: 20px; }\n\n.save-btn ion-icon, .cancel-btn ion-icon {\n  margin-left: 5px; }\n\n.cancel-btn {\n  margin-bottom: 25px; }\n\n.hide {\n  display: none; }\n\n.active {\n  display: block; }\n\n.error-message {\n  font-size: 13px;\n  color: var(--ion-color-danger-shade);\n  font-family: 'Titillium Web', sans-serif;\n  text-align: right;\n  margin: 0px;\n  float: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvV2luZG93cy9Vc2Vycy9IUC9Eb2N1bWVudHMvUHJvamVjdHMvSW9uaWMvRHJpdml4L3NyYy9hcHAvbWVtYmVycy9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0NBQWtDO0VBQ2xDLHFCQUFxQixFQUFBOztBQUV6QjtFQUNJLFlBQVk7RUFDWixrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxlQUFlO0VBQ2Ysb0NBQW9DLEVBQUE7O0FBRXhDO0VBQ0ksZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixrQ0FBa0MsRUFBQTs7QUFFdEM7RUFDSSx3Q0FBd0M7RUFDeEMsY0FBYztFQUNkLGVBQWUsRUFBQTs7QUFFbkI7RUFDSSxZQUFZLEVBQUE7O0FBRWhCO0VBQ0ksd0NBQXdDO0VBQ3hDLG9CQUFnQjtFQUNoQixpQkFBYTtFQUNiLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLG1CQUFtQixFQUFBOztBQUV2QjtFQUVJLGFBQWEsRUFBQTs7QUFFakI7RUFFSSxjQUFjLEVBQUE7O0FBRWxCO0VBQ0ksZUFBZTtFQUNmLG9DQUFvQztFQUNwQyx3Q0FBd0M7RUFDeEMsaUJBQWlCO0VBQ2pCLFdBQVU7RUFDVixZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tZW1iZXJzL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGl0bGV7XG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcbiAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XG59XG4uaW50cm97XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi51c2Vye1xuICAgIGZvbnQtc2l6ZTogODBweDtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktdGludCk7XG59XG4udXNlcm5hbWV7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGxldHRlci1zcGFjaW5nOiAxLjhweDtcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xufVxuLnByb2ZpbGUtZm9ybSBpb24tbGFiZWwsIGlvbi1pbnB1dHtcbiAgICBmb250LWZhbWlseTogJ1RpdGlsbGl1bSBXZWInLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiAjM2EzYzRkO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5wcm9maWxlLWZvcm0gaW9uLWlucHV0e1xuICAgIGNvbG9yOiBibGFjaztcbn1cbi5wcm9maWxlLWZvcm0gLnNhdmUtYnRuLCAuY2FuY2VsLWJ0bntcbiAgICBmb250LWZhbWlseTogJ1RpdGlsbGl1bSBXZWInLCBzYW5zLXNlcmlmO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMHB4O1xuICAgIC0tYm94LXNoYWRvdzpub25lO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG4uc2F2ZS1idG4gaW9uLWljb24sIC5jYW5jZWwtYnRuIGlvbi1pY29ue1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG4uY2FuY2VsLWJ0bntcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuLmhpZGVcbntcbiAgICBkaXNwbGF5OiBub25lO1xufVxuLmFjdGl2ZVxue1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuLmVycm9yLW1lc3NhZ2V7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyLXNoYWRlKTtcbiAgICBmb250LWZhbWlseTogJ1RpdGlsbGl1bSBXZWInLCBzYW5zLXNlcmlmO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIG1hcmdpbjowcHg7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/members/profile/profile.page.ts":
/*!*************************************************!*\
  !*** ./src/app/members/profile/profile.page.ts ***!
  \*************************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/authentication.service */ "./src/app/api/authentication.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _api_profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api/profile.service */ "./src/app/api/profile.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, Profile, storage, toast, form_builder) {
        this.navCtrl = navCtrl;
        this.Profile = Profile;
        this.storage = storage;
        this.toast = toast;
        this.Token = null;
        this.HasProfile = false;
        // obj data
        this.data = {
            phone: ' ',
            gender: ' ',
            DOB: ' ',
            location: ' ',
            job: ' ',
            token: this.Token,
        };
        this.profile_form = form_builder.group({
            'job': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(50)])],
            'location': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(25)])],
            'gender': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            'phone': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(25), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern('/(0)\d{10}/')])],
            'DOB': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
        }, {
        // updateOn: 'blur'
        });
    }
    // guard
    ProfilePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        if (_api_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"].check_Auth() === false) {
            this.navCtrl.navigateForward('');
        }
        // get Token
        this.storage.get('token').then(function (val) {
            if (val != null) {
                _this.Token = val;
                _this.getMyProfile();
            }
        });
    };
    ProfilePage.prototype.getMyProfile = function () {
        var _this = this;
        // Profile Service
        this.Profile.Profile(this.Token)
            .then(function (success) {
            // @ts-ignore
            if (!success.id) {
                // @ts-ignore
                _this.HasProfile = false;
            }
            else {
                // @ts-ignore
                _this.data.phone = success.phone;
                // @ts-ignore
                _this.data.gender = success.gender;
                // @ts-ignore
                _this.data.DOB = success.DOB;
                // @ts-ignore
                _this.data.location = success.location;
                // @ts-ignore
                _this.data.job = success.job;
                _this.HasProfile = true;
            }
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    ProfilePage.prototype.UpdateMyData = function (action) {
        var _this = this;
        if (action === void 0) { action = 'profile'; }
        var ProfileUrl = '';
        // set token
        this.data.token = this.Token;
        if (action === 'profile') {
            ProfileUrl = 'addprofile';
        }
        else {
            ProfileUrl = 'updateprofile/' + this.data.token;
        }
        // call add profile service
        this.Profile.UpdateProfileData(this.data, ProfileUrl)
            .then(function (success) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var SuccessToast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toast.create({
                            message: 'Your profile updated successfully',
                            duration: 2000
                        })];
                    case 1:
                        SuccessToast = _a.sent();
                        SuccessToast.present();
                        if (ProfileUrl === 'addprofile') {
                            document.getElementById('AddProfile').style.display = 'none';
                            document.getElementById('UpdateProfile').style.display = 'block';
                        }
                        return [2 /*return*/];
                }
            });
        }); })
            .catch(function (err) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var Errtoast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(err.status === 503)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.toast.create({
                                message: 'Your profile not saved',
                                duration: 2000
                            })];
                    case 1:
                        Errtoast = _a.sent();
                        Errtoast.present();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        }); });
    };
    ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.page.html */ "./src/app/members/profile/profile.page.html"),
            styles: [__webpack_require__(/*! ./profile.page.scss */ "./src/app/members/profile/profile.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _api_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])
    ], ProfilePage);
    return ProfilePage;
}());



/***/ })

}]);
//# sourceMappingURL=profile-profile-module.js.map