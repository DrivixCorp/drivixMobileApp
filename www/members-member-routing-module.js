(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["members-member-routing-module"],{

/***/ "./src/app/members/member-routing.module.ts":
/*!**************************************************!*\
  !*** ./src/app/members/member-routing.module.ts ***!
  \**************************************************/
/*! exports provided: MemberRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberRoutingModule", function() { return MemberRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [
    { path: 'menu', loadChildren: './menu/menu.module#MenuPageModule' },
    { path: 'services', loadChildren: './services/services.module#ServicesPageModule' },
    { path: 'gas-station', loadChildren: './gas-stations/details/details.module#DetailsPageModule' },
    { path: 'cars', loadChildren: './cars/index/index.module#IndexPageModule' },
    { path: 'cars/new', loadChildren: './cars/new/new.module#NewPageModule' },
    { path: 'cars/edit/:carId', loadChildren: './cars/edit/edit.module#EditPageModule' },
    { path: 'gas-stations/map', loadChildren: './gas-stations/map/map.module#MapPageModule' },
    { path: 'gas-stations/list', loadChildren: './gas-stations/list/list.module#ListPageModule' },
];
var MemberRoutingModule = /** @class */ (function () {
    function MemberRoutingModule() {
    }
    MemberRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], MemberRoutingModule);
    return MemberRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=members-member-routing-module.js.map