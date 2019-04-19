(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["menu-menu-module"],{

/***/ "./src/app/members/menu/menu.module.ts":
/*!*********************************************!*\
  !*** ./src/app/members/menu/menu.module.ts ***!
  \*********************************************/
/*! exports provided: MenuPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageModule", function() { return MenuPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu.page */ "./src/app/members/menu/menu.page.ts");







var routes = [
    {
        path: '',
        component: _menu_page__WEBPACK_IMPORTED_MODULE_6__["MenuPage"],
        children: [
            { path: 'profile', loadChildren: '../profile/profile.module#ProfilePageModule' },
            { path: 'services', loadChildren: '../services/services.module#ServicesPageModule' },
            { path: 'gas-station', loadChildren: '../gas-stations/details/details.module#DetailsPageModule' },
            { path: 'gas-station-list', loadChildren: '../gas-stations/list/list.module#ListPageModule' },
            { path: 'cars', loadChildren: '../cars/index/index.module#IndexPageModule' },
        ]
    },
    {
        path: 'menu',
        redirectTo: 'members/menu/services'
    }
];
var MenuPageModule = /** @class */ (function () {
    function MenuPageModule() {
    }
    MenuPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_menu_page__WEBPACK_IMPORTED_MODULE_6__["MenuPage"]]
        })
    ], MenuPageModule);
    return MenuPageModule;
}());



/***/ }),

/***/ "./src/app/members/menu/menu.page.html":
/*!*********************************************!*\
  !*** ./src/app/members/menu/menu.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-split-pane>\n\n  <ion-menu contentId=\"content\">\n    <ion-header no-shadow no-border>\n      <ion-toolbar color=\"secondary\">\n          <img class=\"logo\" src=\"../../../assets/images/1.1.png\" alt=\"drivix logo\"/>\n        <ion-title>CAR SERVICES APPLICATION</ion-title>\n        <h5><i class=\"far fa-user\"></i> username: aliaamr2110</h5>\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-content>\n      <ion-list>\n\n        <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of pages\"> \n          <ion-item [routerLink]=\"p.url\" [class.active-item]=\"selectedPath === p.url\" routerDirection=\"root\">\n            <ion-label class=\"page-label\">\n              {{ p.title }}\n            </ion-label>\n          </ion-item>\n        </ion-menu-toggle>\n\n        <ion-item (click)=\"menuItemHandler()\"><ion-label class=\"page-label\">Services</ion-label><ion-icon name=\"arrow-dropright\" class=\"drop-icon\"></ion-icon></ion-item>\n          <ion-item-group submenu [class.visible]=\"showSubmenu\" class=\"menu-grp\">\n            <ion-item submenu-item>\n              <i class=\"fas fa-circle\"></i>\n              <ion-label class=\"page-label\">Winch Service</ion-label>\n            </ion-item>\n            <ion-item submenu-item routerLink='/members/menu/gas-station-list' [class.active-item]=\"selectedPath === '/members/menu/gas-station-list'\" routerDirection=\"root\">\n              <i class=\"fas fa-circle\"></i>\n              <ion-label class=\"page-label\">Gas Stations</ion-label>\n            </ion-item>\n            <ion-item submenu-item>\n              <i class=\"fas fa-circle\"></i>\n              <ion-label class=\"page-label\">Mechanics</ion-label></ion-item>\n            <ion-item submenu-item>\n              <i class=\"fas fa-circle\"></i>\n              <ion-label class=\"page-label\">Spare Parts Shops</ion-label>\n            </ion-item>\n          </ion-item-group>\n\n        <!--Log out-->\n        <ion-item (click)=\"sign_out()\">\n          <ion-label class=\"page-label\" color=\"primary\">\n            Sign Out <i class=\"fas fa-sign-out-alt\"></i>\n          </ion-label>\n        </ion-item>\n\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n\n  <ion-router-outlet id=\"content\" main></ion-router-outlet>\n</ion-split-pane>\n"

/***/ }),

/***/ "./src/app/members/menu/menu.page.scss":
/*!*********************************************!*\
  !*** ./src/app/members/menu/menu.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  margin: auto;\n  text-align: center; }\n\n.active-item {\n  border-left: 8px solid var(--ion-color-primary); }\n\n.logo {\n  width: 250px;\n  margin: auto; }\n\nion-title {\n  font-size: 15px;\n  font-family: 'Abel', sans-serif;\n  margin-bottom: 20px;\n  letter-spacing: 2px; }\n\n.page-label {\n  font-family: 'Titillium Web', sans-serif;\n  font-size: 15px; }\n\nh5 {\n  font-family: 'Titillium Web', sans-serif;\n  font-size: 14px; }\n\nh5 i {\n  color: #ffb200;\n  margin-right: 5px; }\n\n.page-label i {\n  margin-left: 8px; }\n\nion-item-group[submenu] {\n  overflow: hidden;\n  display: block;\n  height: 0;\n  transition: 1s ease;\n  transition: height 1s linear;\n  padding-left: 20%; }\n\nion-item-group[submenu].visible {\n    height: inherit;\n    transition: 1s ease; }\n\n.drop-icon {\n  float: right;\n  color: #ffb200; }\n\n.menu-grp .fa-circle {\n  font-size: 5px;\n  color: #ffb200;\n  margin-right: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvV2luZG93cy9Vc2Vycy9IUC9Eb2N1bWVudHMvUHJvamVjdHMvSW9uaWMvRHJpdml4L3NyYy9hcHAvbWVtYmVycy9tZW51L21lbnUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWTtFQUNaLGtCQUNKLEVBQUE7O0FBQ0E7RUFDSSwrQ0FBK0MsRUFBQTs7QUFFbkQ7RUFDSSxZQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUVoQjtFQUNJLGVBQWU7RUFDZiwrQkFBK0I7RUFDL0IsbUJBQW1CO0VBQ25CLG1CQUFtQixFQUFBOztBQUV2QjtFQUNJLHdDQUF3QztFQUN4QyxlQUFlLEVBQUE7O0FBRW5CO0VBQ0ksd0NBQXdDO0VBQ3hDLGVBQWUsRUFBQTs7QUFFbkI7RUFDSSxjQUFjO0VBQ2QsaUJBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0ksZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLDRCQUE0QjtFQUM1QixpQkFBaUIsRUFBQTs7QUFOckI7SUFRUSxlQUFlO0lBQ2YsbUJBQW1CLEVBQUE7O0FBSTNCO0VBQ0ksWUFBWTtFQUNaLGNBQWMsRUFBQTs7QUFFbEI7RUFDSSxjQUFjO0VBQ2QsY0FBYztFQUNkLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWVtYmVycy9tZW51L21lbnUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlcntcbiAgICBtYXJnaW46IGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyXG59XG4uYWN0aXZlLWl0ZW17XG4gICAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG4ubG9nb3tcbiAgICB3aWR0aDoyNTBweDtcbiAgICBtYXJnaW46IGF1dG87XG59XG5pb24tdGl0bGV7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtZmFtaWx5OiAnQWJlbCcsIHNhbnMtc2VyaWY7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xufVxuLnBhZ2UtbGFiZWx7XG4gICAgZm9udC1mYW1pbHk6ICdUaXRpbGxpdW0gV2ViJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE1cHg7XG59XG5oNXtcbiAgICBmb250LWZhbWlseTogJ1RpdGlsbGl1bSBXZWInLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cbmg1IGl7XG4gICAgY29sb3I6ICNmZmIyMDA7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG4ucGFnZS1sYWJlbCBpe1xuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG59XG5pb24taXRlbS1ncm91cFtzdWJtZW51XSB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IDA7XG4gICAgdHJhbnNpdGlvbjogMXMgZWFzZTtcbiAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMXMgbGluZWFyO1xuICAgIHBhZGRpbmctbGVmdDogMjAlO1xuICAgICYudmlzaWJsZSB7XG4gICAgICAgIGhlaWdodDogaW5oZXJpdDtcbiAgICAgICAgdHJhbnNpdGlvbjogMXMgZWFzZTtcbiAgICAgICAgLy8gdGhpcyBpcyBqdXN0IHNhbXBsZSB2YWx1ZSwgY2FsY3VsYXRlIGhvdyBtdWNoIHNwYWNlIHlvdSBuZWVkIGZvciB5b3VyIG1lbnUgaXRlbXNcbiAgICB9XG4gIH1cbi5kcm9wLWljb257XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGNvbG9yOiAjZmZiMjAwO1xufVxuLm1lbnUtZ3JwIC5mYS1jaXJjbGV7XG4gICAgZm9udC1zaXplOiA1cHg7XG4gICAgY29sb3I6ICNmZmIyMDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/members/menu/menu.page.ts":
/*!*******************************************!*\
  !*** ./src/app/members/menu/menu.page.ts ***!
  \*******************************************/
/*! exports provided: MenuPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPage", function() { return MenuPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/authentication.service */ "./src/app/api/authentication.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");






var MenuPage = /** @class */ (function () {
    function MenuPage(router, navCtrl, storage) {
        var _this = this;
        this.router = router;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.selectedPath = '';
        this.serviceMenu = 'Services';
        this.pages = [
            {
                title: 'Home',
                url: '/members/menu/services',
            },
            {
                title: 'Profile',
                url: '/members/menu/profile',
            },
            {
                title: 'Gas Station',
                url: '/members/menu/gas-station',
            },
            {
                title: 'Cars',
                url: '/members/menu/cars',
            },
        ];
        this.showSubmenu = false;
        this.router.events.subscribe(function (event) {
            _this.selectedPath = event.url;
        });
    }
    MenuPage.prototype.menuItemHandler = function () {
        this.showSubmenu = !this.showSubmenu;
    };
    MenuPage.prototype.sign_out = function () {
        _api_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"].User = null;
        this.storage.remove('token');
        this.navCtrl.navigateRoot('');
    };
    MenuPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.page.html */ "./src/app/members/menu/menu.page.html"),
            styles: [__webpack_require__(/*! ./menu.page.scss */ "./src/app/members/menu/menu.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]])
    ], MenuPage);
    return MenuPage;
}());



/***/ })

}]);
//# sourceMappingURL=menu-menu-module.js.map