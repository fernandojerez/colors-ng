(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/XVE":
/*!********************************************************!*\
  !*** ./src/app/color-panels/color-panels.component.ts ***!
  \********************************************************/
/*! exports provided: ColorPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorPanelComponent", function() { return ColorPanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! color */ "aSns");
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(color__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tile_tile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tile/tile.component */ "H9aC");
/* harmony import */ var _tile_set_tile_set_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tile-set/tile-set.component */ "8H6i");





class ColorPanelComponent {
    constructor() {
        this.compact = _tile_tile_component__WEBPACK_IMPORTED_MODULE_2__["TileMode"].Compact;
        this.func = (color) => [color.hex()];
    }
    get colors() {
        return this.func(color__WEBPACK_IMPORTED_MODULE_1___default()(this.color));
    }
}
ColorPanelComponent.ɵfac = function ColorPanelComponent_Factory(t) { return new (t || ColorPanelComponent)(); };
ColorPanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ColorPanelComponent, selectors: [["app-color-panel"]], inputs: { color: "color", func: "func" }, outputs: { compact: "compact", colors: "colors" }, decls: 1, vars: 2, consts: [[3, "mode", "colors"]], template: function ColorPanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-tile-set", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", ctx.compact)("colors", ctx.colors);
    } }, directives: [_tile_set_tile_set_component__WEBPACK_IMPORTED_MODULE_3__["TileSetComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbG9yLXBhbmVscy9jb2xvci1wYW5lbHMuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ColorPanelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-color-panel',
                templateUrl: './color-panel.component.html',
                styleUrls: ['./color-panels.component.scss'],
            }]
    }], function () { return []; }, { compact: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], func: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], colors: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\to_github\colors-ng\src\main.ts */"zUnb");


/***/ }),

/***/ "8H6i":
/*!************************************************!*\
  !*** ./src/app/tile-set/tile-set.component.ts ***!
  \************************************************/
/*! exports provided: TileSetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TileSetComponent", function() { return TileSetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _tile_tile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tile/tile.component */ "H9aC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");






const _c0 = function () { return ["/info"]; };
const _c1 = function (a0) { return { color: a0 }; };
function TileSetComponent_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-tile", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const color_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, color_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", color_r1)("mode", ctx_r0.mode);
} }
const default_colors = ['#e0ece4', '#ff4b5c', '#056674', '#66bfbf',
    '#f1f3de', '#eb8f8f', '#ec0101', '#cd0a0a', '#ffc93c', '#07689f',
    '#40a8c4', '#a2d5f2', '#ff7171', '#ffaa71', '#6e6d6d'];
class TileSetComponent {
    constructor() {
        this.TileMode = _tile_tile_component__WEBPACK_IMPORTED_MODULE_1__["TileMode"];
        this.mode = _tile_tile_component__WEBPACK_IMPORTED_MODULE_1__["TileMode"].Large;
        this.colors = default_colors;
    }
    ngOnInit() {
    }
}
TileSetComponent.ɵfac = function TileSetComponent_Factory(t) { return new (t || TileSetComponent)(); };
TileSetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TileSetComponent, selectors: [["app-tile-set"]], inputs: { mode: "mode", colors: "colors" }, decls: 2, vars: 4, consts: [[3, "routerLink", "queryParams", 4, "ngFor", "ngForOf"], [3, "routerLink", "queryParams"], [3, "color", "mode"]], template: function TileSetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TileSetComponent_a_1_Template, 2, 7, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("colors-tileset colors-tileset--", ctx.mode, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.colors);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _tile_tile_component__WEBPACK_IMPORTED_MODULE_1__["TileComponent"]], styles: [".colors-tileset[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n.colors-tileset--large[_ngcontent-%COMP%] {\n  justify-content: space-around;\n}\n.colors-tileset--compact[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGlsZS1zZXQvdGlsZS1zZXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtBQUNKO0FBQUk7RUFDSSw2QkFBQTtBQUVSO0FBQUk7RUFDSSwyQkFBQTtBQUVSIiwiZmlsZSI6InNyYy9hcHAvdGlsZS1zZXQvdGlsZS1zZXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sb3JzLXRpbGVzZXQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgICYtLWxhcmdlIHtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgfVxuICAgICYtLWNvbXBhY3Qge1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TileSetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tile-set',
                templateUrl: './tile-set.component.html',
                styleUrls: ['./tile-set.component.scss']
            }]
    }], function () { return []; }, { mode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], colors: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/view.component */ "FJD2");
/* harmony import */ var _tile_set_tile_set_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tile-set/tile-set.component */ "8H6i");




class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 2, vars: 0, template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-view");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-tile-set");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_view_view_component__WEBPACK_IMPORTED_MODULE_1__["ViewComponent"], _tile_set_tile_set_component__WEBPACK_IMPORTED_MODULE_2__["TileSetComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "EEOh":
/*!*****************************************!*\
  !*** ./src/app/models/theme.actions.ts ***!
  \*****************************************/
/*! exports provided: toggle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggle", function() { return toggle; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

const toggle = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("Toggle Theme action");


/***/ }),

/***/ "FJD2":
/*!****************************************!*\
  !*** ./src/app/view/view.component.ts ***!
  \****************************************/
/*! exports provided: ViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewComponent", function() { return ViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../header/header.component */ "fECr");
/* harmony import */ var _color_input_color_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../color-input/color-input.component */ "TC6a");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");








const _c0 = ["*"];
class ViewComponent {
    constructor(store) {
        this.store = store;
        this._className = "";
        this.showBack = false;
        this.theme$ = store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])("theme"));
    }
    get className() {
        return this.theme$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(theme => `colors-view colors-${theme}-theme`));
    }
    ngOnInit() {
    }
}
ViewComponent.ɵfac = function ViewComponent_Factory(t) { return new (t || ViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"])); };
ViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ViewComponent, selectors: [["app-view"]], inputs: { showBack: ["show_back", "showBack"] }, outputs: { showBack: "showBack" }, ngContentSelectors: _c0, decls: 7, vars: 6, consts: [[3, "show_back"], ["label", "Analizar", 1, "colors-view-colorinput"], [1, "colors-view__scrollview"], [1, "colors-view__content"]], template: function ViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-color-input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 4, ctx.className));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("show_back", ctx.showBack);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _color_input_color_input_component__WEBPACK_IMPORTED_MODULE_4__["ColorInputComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: [".colors-view[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: var(--theme-surface);\n  color: var(--theme-on-surface);\n  width: 100vw;\n  height: 100vh;\n}\n\n.colors-view__scrollview[_ngcontent-%COMP%] {\n  display: flex;\n  flex-grow: 1;\n  flex-direction: column;\n  align-items: center;\n  padding: 10px;\n  width: 100vw;\n  overflow: auto;\n}\n\n.colors-view__content[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n@media (min-width: 1024px) {\n  .colors-view__content[_ngcontent-%COMP%] {\n    width: 1024px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy92aWV3LmNvbXBvbmVudC5zY3NzIiwic3JjL3Nhc3MvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQ0M4R1k7RUQ3R1osOEJDK0dlO0VEOUdmLFlBQUE7RUFDQSxhQUFBO0FBREo7O0FBSUE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQzZHTTtFRDVHTixZQUFBO0VBQ0EsY0FBQTtBQURKOztBQUlBO0VBQ0ksV0FBQTtBQURKOztBQ3NEQztFRHRERDtJQUdRLGFDMEdHO0VEekdUO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC92aWV3L3ZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi9zYXNzL3ZhcmlhYmxlcyc7XG5cbi5jb2xvcnMtdmlldyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHRoZW1lX3N1cmZhY2U7XG4gICAgY29sb3I6ICR0aGVtZV9vbl9zdXJmYWNlO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDEwMHZoOyAgICBcbn1cblxuLmNvbG9ycy12aWV3X19zY3JvbGx2aWV3IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICAgIFxuICAgIHBhZGRpbmc6ICRwYWRkaW5nO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBvdmVyZmxvdzogYXV0bztcbn1cblxuLmNvbG9ycy12aWV3X19jb250ZW50IHsgICAgXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgQGluY2x1ZGUgZGVza3RvcC1vbmx5IHtcbiAgICAgICAgd2lkdGg6ICR3b3JrYXJlYTsgICAgICAgICAgICBcbiAgICB9XG59IiwiJGRhcmtQcmltYXJ5OiAjZmNhMzExO1xuJGRhcmtTZWNvbmRhcnk6ICNlNWU1ZTU7XG5cbiRkYXJrVGhlbWU6IChcbiAgICBcInByaW1hcnlcIjogJGRhcmtQcmltYXJ5LFxuICAgIFwicHJpbWFyeS1ob3ZlclwiOiBsaWdodGVuKCRkYXJrUHJpbWFyeSwgMTAlKSxcbiAgICBcInByaW1hcnktcHJlc3NlZFwiOiBkYXJrZW4oJGRhcmtQcmltYXJ5LCAxMCUpLFxuXG4gICAgXCJzZWNvbmRhcnlcIjokZGFya1NlY29uZGFyeSxcbiAgICBcInNlY29uZGFyeS1ob3ZlclwiOiBsaWdodGVuKCRkYXJrU2Vjb25kYXJ5LCAxMCUpLFxuICAgIFwic2Vjb25kYXJ5LXByZXNzZWRcIjogZGFya2VuKCRkYXJrU2Vjb25kYXJ5LCAxMCUpLFxuICAgIFxuICAgIFwib24tcHJpbWFyeVwiOiAgIzAwMCxcbiAgICBcIm9uLXNlY29uZGFyeVwiOiAjMDAwLFxuXG4gICAgXCJiYWNrZ3JvdW5kXCI6ICMyOTI5MjksXG4gICAgXCJzdXJmYWNlXCI6ICMxMjEyMTIsXG4gICAgXCJvbi1iYWNrZ3JvdW5kXCI6ICNCQkIsXG4gICAgXCJvbi1zdXJmYWNlXCI6ICNCQkIsXG5cbiAgICBcImVycm9yXCI6ICNiNjE4MjcsXG4gICAgXCJva1wiOiAjMDg3ZjIzLFxuICAgIFwid2FybmluZ1wiOiAjZmZmNTlkLFxuICAgIFwiaW5mb1wiOiAjYmJkZWZiLFxuXG4gICAgXCJvbi1lcnJvclwiOiAjRkZGLFxuICAgIFwib24tb2tcIjogI0ZGRixcbiAgICBcIm9uLXdhcm5pbmdcIjogIzAwMCxcbiAgICBcIm9uLWluZm9cIjogIzAwMCwgICAgXG4pO1xuXG4kZWxldmF0aW9uczogKFxuICAgIFwiaGVhZGVyLWVsZXZhdGlvblwiOiBcIjBweCAycHggNHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCA0cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCAxcHggMTBweCAwcHggcmdiYSgwLDAsMCwuMTIpXCIsXG4gICAgXCJjYXJkLWVsZXZhdGlvblwiOiBcIjBweCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCAycHggMnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCAxcHggNXB4IDBweCByZ2JhKDAsMCwwLC4xMilcIlxuKTtcblxuJGRhcmtUaGVtZTogbWFwLW1lcmdlKCRkYXJrVGhlbWUsICRlbGV2YXRpb25zKTtcblxuJGxpZ2h0UHJpbWFyeTojRTYzOTQ2O1xuJGxpZ2h0U2Vjb25kYXJ5OiNGMUZBRUU7XG5cbiRsaWdodFRoZW1lOiAoXG4gICAgXCJwcmltYXJ5XCI6ICRsaWdodFByaW1hcnksXG4gICAgXCJwcmltYXJ5LWhvdmVyXCI6IGxpZ2h0ZW4oJGxpZ2h0UHJpbWFyeSwgMTAlKSxcbiAgICBcInByaW1hcnktcHJlc3NlZFwiOiBkYXJrZW4oJGxpZ2h0UHJpbWFyeSwgMTAlKSxcblxuICAgIFwic2Vjb25kYXJ5XCI6JGxpZ2h0U2Vjb25kYXJ5LFxuICAgIFwic2Vjb25kYXJ5LWhvdmVyXCI6IGxpZ2h0ZW4oJGxpZ2h0U2Vjb25kYXJ5LCAxMCUpLFxuICAgIFwic2Vjb25kYXJ5LXByZXNzZWRcIjogZGFya2VuKCRsaWdodFNlY29uZGFyeSwgMTAlKSxcblxuICAgIFwiYmFja2dyb3VuZFwiOiAjRkZGLFxuICAgIFwic3VyZmFjZVwiOiAjRjVGNUY1LFxuICAgIFwib24tYmFja2dyb3VuZFwiOiAjMDAwLFxuICAgIFwib24tc3VyZmFjZVwiOiAjMDAwLFxuXG4gICAgXCJlcnJvclwiOiAjYjYxODI3LFxuICAgIFwib2tcIjogIzA4N2YyMyxcbiAgICBcIndhcm5pbmdcIjogI2ZmZjU5ZCxcbiAgICBcImluZm9cIjogI2JiZGVmYixcblxuICAgIFwib24tZXJyb3JcIjogI0ZGRixcbiAgICBcIm9uLW9rXCI6ICNGRkYsXG4gICAgXCJvbi13YXJuaW5nXCI6ICMwMDAsXG4gICAgXCJvbi1pbmZvXCI6ICMwMDAsXG4pO1xuXG4kbGlnaHRUaGVtZTogbWFwLW1lcmdlKCRsaWdodFRoZW1lLCAkZWxldmF0aW9ucyk7XG5cbkBmdW5jdGlvbiB0aGVtZV9kYXRhKCRuYW1lLCAkdmFsdWUpe1xuICAgIEBpZiAkbmFtZSA9PSBcImRhcmtcIiB7XG4gICAgICAgIEByZXR1cm4gbWFwLWdldCgkZGFya1RoZW1lLCAkdmFsdWUpO1xuICAgIH1cbiAgICBAcmV0dXJuIG1hcC1nZXQoJGxpZ2h0VGhlbWUsICR2YWx1ZSk7XG59XG5cbkBtaXhpbiBkZXNrdG9wLW9ubHkge1xuXHRAbWVkaWEgKG1pbi13aWR0aCA6IDEwMjRweCkge1xuXHRcdEBjb250ZW50O1xuXHR9XG59XG5cbkBtaXhpbiB0aGVtZV92YXJzKCR0aGVtZTonZGFyaycpe1xuICAgIC0tdGhlbWUtcHJpbWFyeTogI3t0aGVtZV9kYXRhKCR0aGVtZSwgJ3ByaW1hcnknKX07IFxuICAgIC0tdGhlbWUtcHJpbWFyeS1ob3ZlcjogI3t0aGVtZV9kYXRhKCR0aGVtZSwgJ3ByaW1hcnktaG92ZXInKX07IFxuICAgIC0tdGhlbWUtcHJpbWFyeS1wcmVzc2VkOiAje3RoZW1lX2RhdGEoJHRoZW1lLCAncHJpbWFyeS1wcmVzc2VkJyl9O1xuICAgIC0tdGhlbWUtc2Vjb25kYXJ5OiAje3RoZW1lX2RhdGEoJHRoZW1lLCAnc2Vjb25kYXJ5Jyl9OyBcbiAgICAtLXRoZW1lLXNlY29uZGFyeS1ob3ZlcjogI3t0aGVtZV9kYXRhKCR0aGVtZSwgJ3NlY29uZGFyeS1ob3ZlcicpfTsgXG4gICAgLS10aGVtZS1zZWNvbmRhcnktcHJlc3NlZDogI3t0aGVtZV9kYXRhKCR0aGVtZSwgJ3NlY29uZGFyeS1wcmVzc2VkJyl9OyBcbiAgICAtLXRoZW1lLW9uLXByaW1hcnk6ICN7dGhlbWVfZGF0YSgkdGhlbWUsICdvbi1wcmltYXJ5Jyl9OyBcbiAgICAtLXRoZW1lLW9uLXNlY29uZGFyeTogI3t0aGVtZV9kYXRhKCR0aGVtZSwgJ29uLXNlY29uZGFyeScpfTsgXG5cbiAgICAtLXRoZW1lLWJhY2tncm91bmQ6ICN7dGhlbWVfZGF0YSgkdGhlbWUsICdiYWNrZ3JvdW5kJyl9OyBcbiAgICAtLXRoZW1lLXN1cmZhY2U6ICN7dGhlbWVfZGF0YSgkdGhlbWUsICdzdXJmYWNlJyl9OyBcbiAgICAtLXRoZW1lLW9uLWJhY2tncm91bmQ6ICN7dGhlbWVfZGF0YSgkdGhlbWUsICdvbi1iYWNrZ3JvdW5kJyl9OyBcbiAgICAtLXRoZW1lLW9uLXN1cmZhY2U6ICN7dGhlbWVfZGF0YSgkdGhlbWUsICdvbi1zdXJmYWNlJyl9OyBcblxuICAgIC0tdGhlbWUtZXJyb3I6ICN7dGhlbWVfZGF0YSgkdGhlbWUsICdlcnJvcicpfTsgXG4gICAgLS10aGVtZS1vazogI3t0aGVtZV9kYXRhKCR0aGVtZSwgJ29rJyl9OyBcbiAgICAtLXRoZW1lLXdhcm5pbmc6ICN7dGhlbWVfZGF0YSgkdGhlbWUsICd3YXJuaW5nJyl9OyBcbiAgICAtLXRoZW1lLWluZm86ICN7dGhlbWVfZGF0YSgkdGhlbWUsICdpbmZvJyl9OyBcblxuICAgIC0tdGhlbWUtb24tZXJyb3I6ICN7dGhlbWVfZGF0YSgkdGhlbWUsICdvbi1lcnJvcicpfTsgXG4gICAgLS10aGVtZS1vbi1vazogI3t0aGVtZV9kYXRhKCR0aGVtZSwgJ29uLW9rJyl9OyBcbiAgICAtLXRoZW1lLW9uLXdhcm5pbmc6ICN7dGhlbWVfZGF0YSgkdGhlbWUsICdvbi13YXJuaW5nJyl9OyBcbiAgICAtLXRoZW1lLW9uLWluZm86ICN7dGhlbWVfZGF0YSgkdGhlbWUsICdvbi1pbmZvJyl9OyBcblxuICAgIC0tdGhlbWUtaGVhZGVyLWVsZXZhdGlvbjogI3t0aGVtZV9kYXRhKCR0aGVtZSwgJ2hlYWRlci1lbGV2YXRpb24nKX07IFxuICAgIC0tdGhlbWUtY2FyZC1lbGV2YXRpb246ICN7dGhlbWVfZGF0YSgkdGhlbWUsICdjYXJkLWVsZXZhdGlvbicpfTtcbn1cblxuJHRoZW1lX3ByaW1hcnk6IHZhcigtLXRoZW1lLXByaW1hcnkpO1xuJHRoZW1lX3ByaW1hcnlfaG92ZXI6IHZhcigtLXRoZW1lLXByaW1hcnktaG92ZXIpO1xuJHRoZW1lX3ByaW1hcnlfcHJlc3NlZDogdmFyKC0tdGhlbWUtcHJpbWFyeS1wcmVzc2VkKTtcbiR0aGVtZV9vbl9wcmltYXJ5OiB2YXIoLS10aGVtZS1vbi1wcmltYXJ5KTtcblxuJHRoZW1lX2JhY2tncm91bmQ6IHZhcigtLXRoZW1lLWJhY2tncm91bmQpO1xuJHRoZW1lX3N1cmZhY2U6IHZhcigtLXRoZW1lLXN1cmZhY2UpO1xuJHRoZW1lX29uX2JhY2tncm91bmQ6IHZhcigtLXRoZW1lLW9uLWJhY2tncm91bmQpO1xuJHRoZW1lX29uX3N1cmZhY2U6IHZhcigtLXRoZW1lLW9uLXN1cmZhY2UpO1xuXG4kdGhlbWVfZXJyb3I6IHZhcigtLXRoZW1lLWVycm9yKTtcbiR0aGVtZV9vbl9lcnJvcjogdmFyKC0tdGhlbWUtb24tZXJyb3IpO1xuXG4kdGhlbWVfaGVhZGVyX2VsZXZhdGlvbjogdmFyKC0tdGhlbWUtaGVhZGVyLWVsZXZhdGlvbik7XG4kdGhlbWVfY2FyZF9lbGV2YXRpb246IHZhcigtLXRoZW1lLWNhcmQtZWxldmF0aW9uKTtcblxuJHBhZGRpbmc6IDEwcHg7XG4kYnV0dG9uX3BhZGRpbmc6ICRwYWRkaW5nIC8gMjtcbiRtYXJnaW46IDEwcHg7XG4kcm91bmRlZDogNXB4O1xuXG4kd29ya2FyZWE6IDEwMjRweDsiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-view',
                templateUrl: './view.component.html',
                styleUrls: ['./view.component.scss']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }]; }, { showBack: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["show_back"]
        }] }); })();


/***/ }),

/***/ "Flju":
/*!*****************************************!*\
  !*** ./src/app/models/theme.reducer.ts ***!
  \*****************************************/
/*! exports provided: initialState, themeReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "themeReducer", function() { return themeReducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _theme_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme.actions */ "EEOh");


const initialState = "dark";
const reducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_theme_actions__WEBPACK_IMPORTED_MODULE_1__["toggle"], (state) => state === 'dark' ? 'light' : 'dark'));
function themeReducer(state, action) {
    return reducer(state, action);
}


/***/ }),

/***/ "H9aC":
/*!****************************************!*\
  !*** ./src/app/tile/tile.component.ts ***!
  \****************************************/
/*! exports provided: TileMode, TileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TileMode", function() { return TileMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TileComponent", function() { return TileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


var TileMode;
(function (TileMode) {
    TileMode["Large"] = "large";
    TileMode["Compact"] = "compact";
})(TileMode || (TileMode = {}));
class TileComponent {
    constructor() {
        this.mode = TileMode.Large;
    }
    ngOnInit() {
    }
}
TileComponent.ɵfac = function TileComponent_Factory(t) { return new (t || TileComponent)(); };
TileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TileComponent, selectors: [["app-tile"]], inputs: { color: "color", mode: "mode" }, decls: 4, vars: 7, consts: [[1, "colors-tile__color"], [1, "colors-tile__caption"]], template: function TileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("colors-tile colors-tile--", ctx.mode, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("background-color: ", ctx.color, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.color, " ");
    } }, styles: [".colors-tile[_ngcontent-%COMP%] {\n  cursor: pointer;\n  cursor: pointer;\n}\n.colors-tile--large[_ngcontent-%COMP%] {\n  background-color: var(--theme-background);\n  border-radius: 5px;\n  margin: 10px;\n  padding: 10px;\n  box-shadow: var(--theme-card-elevation);\n}\n.colors-tile--compact[_ngcontent-%COMP%] {\n  margin-right: 2px;\n}\n.colors-tile--compact[_ngcontent-%COMP%]   .colors-tile__color[_ngcontent-%COMP%] {\n  width: 90px;\n  height: 90px;\n}\n.colors-tile--large[_ngcontent-%COMP%]   .colors-tile__color[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n}\n@media (min-width: 1024px) {\n  .colors-tile--large[_ngcontent-%COMP%]   .colors-tile__color[_ngcontent-%COMP%] {\n    width: 150px;\n    height: 150px;\n  }\n}\n.colors-tile--large[_ngcontent-%COMP%]   .colors-tile__caption[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  text-align: center;\n}\n.colors-tile--compact[_ngcontent-%COMP%]   .colors-tile__caption[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  font-size: 12.8px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGlsZS90aWxlLmNvbXBvbmVudC5zY3NzIiwic3JjL3Nhc3MvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0ksZUFBQTtFQUNBLGVBQUE7QUFKSjtBQUtJO0VBQ0kseUNDMEdXO0VEekdYLGtCQ3VIRTtFRHRIRixZQ3FIQztFRHBIRCxhQ2tIRTtFRGpIRix1Q0MrR2U7QURsSHZCO0FBS0k7RUFDSSxpQkFBQTtBQUhSO0FBT0E7RUFDSSxXQWxCZ0I7RUFtQmhCLFlBbkJnQjtBQWVwQjtBQU9BO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFKSjtBQ3FEQztFRG5ERDtJQUlRLFlBM0JJO0lBNEJKLGFBNUJJO0VBMEJWO0FBQ0Y7QUFLQTtFQUNJLGdCQzZGSztFRDVGTCxrQkFBQTtBQUZKO0FBS0E7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUZKIiwiZmlsZSI6InNyYy9hcHAvdGlsZS90aWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vc2Fzcy92YXJpYWJsZXMnO1xuXG4kdGlsZV9zaXplOiAxNTBweDtcbiR0aWxlX2NvbXBhY3Rfc2l6ZTogOTBweDtcblxuLmNvbG9ycy10aWxlIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7ICAgIFxuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAmLS1sYXJnZSB7ICAgICAgICBcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRoZW1lX2JhY2tncm91bmQ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6ICRyb3VuZGVkOyAgICAgICAgXG4gICAgICAgIG1hcmdpbjogJG1hcmdpbjtcbiAgICAgICAgcGFkZGluZzogJHBhZGRpbmc7XG4gICAgICAgIGJveC1zaGFkb3c6ICR0aGVtZV9jYXJkX2VsZXZhdGlvbjsgICAgICAgICBcbiAgICB9XG4gICAgJi0tY29tcGFjdCB7ICAgICAgICBcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gICAgfVxufVxuXG4uY29sb3JzLXRpbGUtLWNvbXBhY3QgLmNvbG9ycy10aWxlX19jb2xvciB7XG4gICAgd2lkdGg6ICR0aWxlX2NvbXBhY3Rfc2l6ZTtcbiAgICBoZWlnaHQ6ICR0aWxlX2NvbXBhY3Rfc2l6ZTtcbn1cblxuLmNvbG9ycy10aWxlLS1sYXJnZSAuY29sb3JzLXRpbGVfX2NvbG9yIHtcbiAgICB3aWR0aDogJHRpbGVfY29tcGFjdF9zaXplICogMC44O1xuICAgIGhlaWdodDogJHRpbGVfY29tcGFjdF9zaXplICogMC44O1xuICAgIEBpbmNsdWRlIGRlc2t0b3Atb25seSB7XG4gICAgICAgIHdpZHRoOiAkdGlsZV9zaXplO1xuICAgICAgICBoZWlnaHQ6ICR0aWxlX3NpemU7XG4gICAgfVxufVxuXG4uY29sb3JzLXRpbGUtLWxhcmdlIC5jb2xvcnMtdGlsZV9fY2FwdGlvbiB7XG4gICAgbWFyZ2luLXRvcDogJG1hcmdpbjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jb2xvcnMtdGlsZS0tY29tcGFjdCAuY29sb3JzLXRpbGVfX2NhcHRpb24ge1xuICAgIG1hcmdpbi10b3A6ICRtYXJnaW4vMjtcbiAgICBmb250LXNpemU6IDE2cHggKiAwLjg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufSIsIiRkYXJrUHJpbWFyeTogI2ZjYTMxMTtcbiRkYXJrU2Vjb25kYXJ5OiAjZTVlNWU1O1xuXG4kZGFya1RoZW1lOiAoXG4gICAgXCJwcmltYXJ5XCI6ICRkYXJrUHJpbWFyeSxcbiAgICBcInByaW1hcnktaG92ZXJcIjogbGlnaHRlbigkZGFya1ByaW1hcnksIDEwJSksXG4gICAgXCJwcmltYXJ5LXByZXNzZWRcIjogZGFya2VuKCRkYXJrUHJpbWFyeSwgMTAlKSxcblxuICAgIFwic2Vjb25kYXJ5XCI6JGRhcmtTZWNvbmRhcnksXG4gICAgXCJzZWNvbmRhcnktaG92ZXJcIjogbGlnaHRlbigkZGFya1NlY29uZGFyeSwgMTAlKSxcbiAgICBcInNlY29uZGFyeS1wcmVzc2VkXCI6IGRhcmtlbigkZGFya1NlY29uZGFyeSwgMTAlKSxcbiAgICBcbiAgICBcIm9uLXByaW1hcnlcIjogICMwMDAsXG4gICAgXCJvbi1zZWNvbmRhcnlcIjogIzAwMCxcblxuICAgIFwiYmFja2dyb3VuZFwiOiAjMjkyOTI5LFxuICAgIFwic3VyZmFjZVwiOiAjMTIxMjEyLFxuICAgIFwib24tYmFja2dyb3VuZFwiOiAjQkJCLFxuICAgIFwib24tc3VyZmFjZVwiOiAjQkJCLFxuXG4gICAgXCJlcnJvclwiOiAjYjYxODI3LFxuICAgIFwib2tcIjogIzA4N2YyMyxcbiAgICBcIndhcm5pbmdcIjogI2ZmZjU5ZCxcbiAgICBcImluZm9cIjogI2JiZGVmYixcblxuICAgIFwib24tZXJyb3JcIjogI0ZGRixcbiAgICBcIm9uLW9rXCI6ICNGRkYsXG4gICAgXCJvbi13YXJuaW5nXCI6ICMwMDAsXG4gICAgXCJvbi1pbmZvXCI6ICMwMDAsICAgIFxuKTtcblxuJGVsZXZhdGlvbnM6IChcbiAgICBcImhlYWRlci1lbGV2YXRpb25cIjogXCIwcHggMnB4IDRweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggNHB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggMXB4IDEwcHggMHB4IHJnYmEoMCwwLDAsLjEyKVwiLFxuICAgIFwiY2FyZC1lbGV2YXRpb25cIjogXCIwcHggM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMnB4IDJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggMXB4IDVweCAwcHggcmdiYSgwLDAsMCwuMTIpXCJcbik7XG5cbiRkYXJrVGhlbWU6IG1hcC1tZXJnZSgkZGFya1RoZW1lLCAkZWxldmF0aW9ucyk7XG5cbiRsaWdodFByaW1hcnk6I0U2Mzk0NjtcbiRsaWdodFNlY29uZGFyeTojRjFGQUVFO1xuXG4kbGlnaHRUaGVtZTogKFxuICAgIFwicHJpbWFyeVwiOiAkbGlnaHRQcmltYXJ5LFxuICAgIFwicHJpbWFyeS1ob3ZlclwiOiBsaWdodGVuKCRsaWdodFByaW1hcnksIDEwJSksXG4gICAgXCJwcmltYXJ5LXByZXNzZWRcIjogZGFya2VuKCRsaWdodFByaW1hcnksIDEwJSksXG5cbiAgICBcInNlY29uZGFyeVwiOiRsaWdodFNlY29uZGFyeSxcbiAgICBcInNlY29uZGFyeS1ob3ZlclwiOiBsaWdodGVuKCRsaWdodFNlY29uZGFyeSwgMTAlKSxcbiAgICBcInNlY29uZGFyeS1wcmVzc2VkXCI6IGRhcmtlbigkbGlnaHRTZWNvbmRhcnksIDEwJSksXG5cbiAgICBcImJhY2tncm91bmRcIjogI0ZGRixcbiAgICBcInN1cmZhY2VcIjogI0Y1RjVGNSxcbiAgICBcIm9uLWJhY2tncm91bmRcIjogIzAwMCxcbiAgICBcIm9uLXN1cmZhY2VcIjogIzAwMCxcblxuICAgIFwiZXJyb3JcIjogI2I2MTgyNyxcbiAgICBcIm9rXCI6ICMwODdmMjMsXG4gICAgXCJ3YXJuaW5nXCI6ICNmZmY1OWQsXG4gICAgXCJpbmZvXCI6ICNiYmRlZmIsXG5cbiAgICBcIm9uLWVycm9yXCI6ICNGRkYsXG4gICAgXCJvbi1va1wiOiAjRkZGLFxuICAgIFwib24td2FybmluZ1wiOiAjMDAwLFxuICAgIFwib24taW5mb1wiOiAjMDAwLFxuKTtcblxuJGxpZ2h0VGhlbWU6IG1hcC1tZXJnZSgkbGlnaHRUaGVtZSwgJGVsZXZhdGlvbnMpO1xuXG5AZnVuY3Rpb24gdGhlbWVfZGF0YSgkbmFtZSwgJHZhbHVlKXtcbiAgICBAaWYgJG5hbWUgPT0gXCJkYXJrXCIge1xuICAgICAgICBAcmV0dXJuIG1hcC1nZXQoJGRhcmtUaGVtZSwgJHZhbHVlKTtcbiAgICB9XG4gICAgQHJldHVybiBtYXAtZ2V0KCRsaWdodFRoZW1lLCAkdmFsdWUpO1xufVxuXG5AbWl4aW4gZGVza3RvcC1vbmx5IHtcblx0QG1lZGlhIChtaW4td2lkdGggOiAxMDI0cHgpIHtcblx0XHRAY29udGVudDtcblx0fVxufVxuXG5AbWl4aW4gdGhlbWVfdmFycygkdGhlbWU6J2RhcmsnKXtcbiAgICAtLXRoZW1lLXByaW1hcnk6ICN7dGhlbWVfZGF0YSgkdGhlbWUsICdwcmltYXJ5Jyl9OyBcbiAgICAtLXRoZW1lLXByaW1hcnktaG92ZXI6ICN7dGhlbWVfZGF0YSgkdGhlbWUsICdwcmltYXJ5LWhvdmVyJyl9OyBcbiAgICAtLXRoZW1lLXByaW1hcnktcHJlc3NlZDogI3t0aGVtZV9kYXRhKCR0aGVtZSwgJ3ByaW1hcnktcHJlc3NlZCcpfTtcbiAgICAtLXRoZW1lLXNlY29uZGFyeTogI3t0aGVtZV9kYXRhKCR0aGVtZSwgJ3NlY29uZGFyeScpfTsgXG4gICAgLS10aGVtZS1zZWNvbmRhcnktaG92ZXI6ICN7dGhlbWVfZGF0YSgkdGhlbWUsICdzZWNvbmRhcnktaG92ZXInKX07IFxuICAgIC0tdGhlbWUtc2Vjb25kYXJ5LXByZXNzZWQ6ICN7dGhlbWVfZGF0YSgkdGhlbWUsICdzZWNvbmRhcnktcHJlc3NlZCcpfTsgXG4gICAgLS10aGVtZS1vbi1wcmltYXJ5OiAje3RoZW1lX2RhdGEoJHRoZW1lLCAnb24tcHJpbWFyeScpfTsgXG4gICAgLS10aGVtZS1vbi1zZWNvbmRhcnk6ICN7dGhlbWVfZGF0YSgkdGhlbWUsICdvbi1zZWNvbmRhcnknKX07IFxuXG4gICAgLS10aGVtZS1iYWNrZ3JvdW5kOiAje3RoZW1lX2RhdGEoJHRoZW1lLCAnYmFja2dyb3VuZCcpfTsgXG4gICAgLS10aGVtZS1zdXJmYWNlOiAje3RoZW1lX2RhdGEoJHRoZW1lLCAnc3VyZmFjZScpfTsgXG4gICAgLS10aGVtZS1vbi1iYWNrZ3JvdW5kOiAje3RoZW1lX2RhdGEoJHRoZW1lLCAnb24tYmFja2dyb3VuZCcpfTsgXG4gICAgLS10aGVtZS1vbi1zdXJmYWNlOiAje3RoZW1lX2RhdGEoJHRoZW1lLCAnb24tc3VyZmFjZScpfTsgXG5cbiAgICAtLXRoZW1lLWVycm9yOiAje3RoZW1lX2RhdGEoJHRoZW1lLCAnZXJyb3InKX07IFxuICAgIC0tdGhlbWUtb2s6ICN7dGhlbWVfZGF0YSgkdGhlbWUsICdvaycpfTsgXG4gICAgLS10aGVtZS13YXJuaW5nOiAje3RoZW1lX2RhdGEoJHRoZW1lLCAnd2FybmluZycpfTsgXG4gICAgLS10aGVtZS1pbmZvOiAje3RoZW1lX2RhdGEoJHRoZW1lLCAnaW5mbycpfTsgXG5cbiAgICAtLXRoZW1lLW9uLWVycm9yOiAje3RoZW1lX2RhdGEoJHRoZW1lLCAnb24tZXJyb3InKX07IFxuICAgIC0tdGhlbWUtb24tb2s6ICN7dGhlbWVfZGF0YSgkdGhlbWUsICdvbi1vaycpfTsgXG4gICAgLS10aGVtZS1vbi13YXJuaW5nOiAje3RoZW1lX2RhdGEoJHRoZW1lLCAnb24td2FybmluZycpfTsgXG4gICAgLS10aGVtZS1vbi1pbmZvOiAje3RoZW1lX2RhdGEoJHRoZW1lLCAnb24taW5mbycpfTsgXG5cbiAgICAtLXRoZW1lLWhlYWRlci1lbGV2YXRpb246ICN7dGhlbWVfZGF0YSgkdGhlbWUsICdoZWFkZXItZWxldmF0aW9uJyl9OyBcbiAgICAtLXRoZW1lLWNhcmQtZWxldmF0aW9uOiAje3RoZW1lX2RhdGEoJHRoZW1lLCAnY2FyZC1lbGV2YXRpb24nKX07XG59XG5cbiR0aGVtZV9wcmltYXJ5OiB2YXIoLS10aGVtZS1wcmltYXJ5KTtcbiR0aGVtZV9wcmltYXJ5X2hvdmVyOiB2YXIoLS10aGVtZS1wcmltYXJ5LWhvdmVyKTtcbiR0aGVtZV9wcmltYXJ5X3ByZXNzZWQ6IHZhcigtLXRoZW1lLXByaW1hcnktcHJlc3NlZCk7XG4kdGhlbWVfb25fcHJpbWFyeTogdmFyKC0tdGhlbWUtb24tcHJpbWFyeSk7XG5cbiR0aGVtZV9iYWNrZ3JvdW5kOiB2YXIoLS10aGVtZS1iYWNrZ3JvdW5kKTtcbiR0aGVtZV9zdXJmYWNlOiB2YXIoLS10aGVtZS1zdXJmYWNlKTtcbiR0aGVtZV9vbl9iYWNrZ3JvdW5kOiB2YXIoLS10aGVtZS1vbi1iYWNrZ3JvdW5kKTtcbiR0aGVtZV9vbl9zdXJmYWNlOiB2YXIoLS10aGVtZS1vbi1zdXJmYWNlKTtcblxuJHRoZW1lX2Vycm9yOiB2YXIoLS10aGVtZS1lcnJvcik7XG4kdGhlbWVfb25fZXJyb3I6IHZhcigtLXRoZW1lLW9uLWVycm9yKTtcblxuJHRoZW1lX2hlYWRlcl9lbGV2YXRpb246IHZhcigtLXRoZW1lLWhlYWRlci1lbGV2YXRpb24pO1xuJHRoZW1lX2NhcmRfZWxldmF0aW9uOiB2YXIoLS10aGVtZS1jYXJkLWVsZXZhdGlvbik7XG5cbiRwYWRkaW5nOiAxMHB4O1xuJGJ1dHRvbl9wYWRkaW5nOiAkcGFkZGluZyAvIDI7XG4kbWFyZ2luOiAxMHB4O1xuJHJvdW5kZWQ6IDVweDtcblxuJHdvcmthcmVhOiAxMDI0cHg7Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tile',
                templateUrl: './tile.component.html',
                styleUrls: ['./tile.component.scss']
            }]
    }], function () { return []; }, { color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], mode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'colors';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "TC6a":
/*!******************************************************!*\
  !*** ./src/app/color-input/color-input.component.ts ***!
  \******************************************************/
/*! exports provided: ColorInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorInputComponent", function() { return ColorInputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class ColorInputComponent {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
    }
    updateColor(event) {
        this.color = event.target.value;
    }
    showColorInfo() {
        this.route.navigate(['/info'], { queryParams: { color: this.color } });
    }
}
ColorInputComponent.ɵfac = function ColorInputComponent_Factory(t) { return new (t || ColorInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
ColorInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ColorInputComponent, selectors: [["app-color-input"]], inputs: { label: "label", className: ["class", "className"] }, outputs: { color: "color" }, decls: 5, vars: 8, consts: [[1, "colors-colorinput__input", 3, "value", "input"], [1, "colors-colorinput__preview"], [1, "colors-colorinput__button", 3, "click"]], template: function ColorInputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function ColorInputComponent_Template_input_input_1_listener($event) { return ctx.updateColor($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorInputComponent_Template_button_click_3_listener() { return ctx.showColorInfo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("colors-colorinput ", ctx.className, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("background-color: ", ctx.color, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.label);
    } }, styles: [".colors-colorinput[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 5px;\n  padding-left: 10px;\n}\n\n.colors-colorinput__input[_ngcontent-%COMP%] {\n  margin-right: 5px;\n  padding: 5px;\n  border-radius: 5px;\n  border: 1px solid lightgray;\n  background-color: var(--theme-surface);\n  width: 7em;\n}\n\n@media (min-width: 1024px) {\n  .colors-colorinput__input[_ngcontent-%COMP%] {\n    width: 10.5em;\n  }\n}\n\n.colors-colorinput__preview[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  margin-right: 5px;\n  padding: 5px;\n  border-radius: 5px;\n  border: 1px solid lightgray;\n}\n\n.colors-colorinput__input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border: 1px solid var(--theme-primary);\n}\n\n.colors-colorinput__button[_ngcontent-%COMP%] {\n  padding: 5px;\n  background-color: var(--theme-primary);\n  color: var(--theme-on-primary);\n  border: none;\n  border-radius: 5px;\n}\n\n.colors-colorinput__button[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.colors-colorinput__button[_ngcontent-%COMP%]:hover {\n  background-color: var(--theme-primary-hover);\n}\n\n.colors-colorinput__button[_ngcontent-%COMP%]:active {\n  background-color: var(--theme-primary-pressed);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29sb3ItaW5wdXQvY29sb3ItaW5wdXQuY29tcG9uZW50LnNjc3MiLCJzcmMvc2Fzcy9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JDcUhNO0FEekhWOztBQU9BO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JDa0hNO0VEakhOLDJCQUFBO0VBQ0Esc0NDbUdZO0VEbEdaLFVBZlE7QUFXWjs7QUM4REM7RURoRUQ7SUFRUSxhQUFBO0VBRk47QUFDRjs7QUFLQTtFQUNJLFdBdkJVO0VBd0JWLFlBeEJVO0VBeUJWLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQ29HTTtFRG5HTiwyQkFBQTtBQUZKOztBQUtBO0VBQ0ksYUFBQTtFQUNBLHNDQUFBO0FBRko7O0FBS0E7RUFDSSxZQUFBO0VBQ0Esc0NDc0VZO0VEckVaLDhCQ3dFZTtFRHZFZixZQUFBO0VBQ0Esa0JDc0ZNO0FEeEZWOztBQUtBO0VBQ0ksYUFBQTtBQUZKOztBQUtBO0VBQ0ksNENDNERrQjtBRDlEdEI7O0FBS0E7RUFDSSw4Q0N5RG9CO0FEM0R4QiIsImZpbGUiOiJzcmMvYXBwL2NvbG9yLWlucHV0L2NvbG9yLWlucHV0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vc2Fzcy92YXJpYWJsZXMnO1xuXG4kcHJldmlld1NpemU6IDI0cHg7XG4kaW5wdXRTaXplOiA3ZW07XG5cbi5jb2xvcnMtY29sb3JpbnB1dCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6ICRwYWRkaW5nLzI7XG4gICAgcGFkZGluZy1sZWZ0OiAkcGFkZGluZztcbn1cblxuLmNvbG9ycy1jb2xvcmlucHV0X19pbnB1dCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAkcGFkZGluZy8yO1xuICAgIHBhZGRpbmc6ICRwYWRkaW5nLzI7XG4gICAgYm9yZGVyLXJhZGl1czogJHJvdW5kZWQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR0aGVtZV9zdXJmYWNlO1xuICAgIHdpZHRoOiAkaW5wdXRTaXplO1xuICAgIEBpbmNsdWRlIGRlc2t0b3Atb25seSB7XG4gICAgICAgIHdpZHRoOiAkaW5wdXRTaXplKjEuNTtcbiAgICB9XG59XG5cbi5jb2xvcnMtY29sb3JpbnB1dF9fcHJldmlldyB7XG4gICAgd2lkdGg6ICRwcmV2aWV3U2l6ZTtcbiAgICBoZWlnaHQ6ICRwcmV2aWV3U2l6ZTtcbiAgICBtYXJnaW4tcmlnaHQ6ICRwYWRkaW5nLzI7XG4gICAgcGFkZGluZzogJHBhZGRpbmcvMjtcbiAgICBib3JkZXItcmFkaXVzOiAkcm91bmRlZDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG59XG5cbi5jb2xvcnMtY29sb3JpbnB1dF9faW5wdXQ6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJHRoZW1lX3ByaW1hcnk7XG59XG5cbi5jb2xvcnMtY29sb3JpbnB1dF9fYnV0dG9uIHsgICAgXG4gICAgcGFkZGluZzogJHBhZGRpbmcvMjsgICAgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHRoZW1lX3ByaW1hcnk7XG4gICAgY29sb3I6ICR0aGVtZV9vbl9wcmltYXJ5OyAgICBcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogJHJvdW5kZWQ7XG59XG5cbi5jb2xvcnMtY29sb3JpbnB1dF9fYnV0dG9uOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG4uY29sb3JzLWNvbG9yaW5wdXRfX2J1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHRoZW1lX3ByaW1hcnlfaG92ZXI7XG59XG5cbi5jb2xvcnMtY29sb3JpbnB1dF9fYnV0dG9uOmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHRoZW1lX3ByaW1hcnlfcHJlc3NlZDtcbn1cblxuIiwiJGRhcmtQcmltYXJ5OiAjZmNhMzExO1xuJGRhcmtTZWNvbmRhcnk6ICNlNWU1ZTU7XG5cbiRkYXJrVGhlbWU6IChcbiAgICBcInByaW1hcnlcIjogJGRhcmtQcmltYXJ5LFxuICAgIFwicHJpbWFyeS1ob3ZlclwiOiBsaWdodGVuKCRkYXJrUHJpbWFyeSwgMTAlKSxcbiAgICBcInByaW1hcnktcHJlc3NlZFwiOiBkYXJrZW4oJGRhcmtQcmltYXJ5LCAxMCUpLFxuXG4gICAgXCJzZWNvbmRhcnlcIjokZGFya1NlY29uZGFyeSxcbiAgICBcInNlY29uZGFyeS1ob3ZlclwiOiBsaWdodGVuKCRkYXJrU2Vjb25kYXJ5LCAxMCUpLFxuICAgIFwic2Vjb25kYXJ5LXByZXNzZWRcIjogZGFya2VuKCRkYXJrU2Vjb25kYXJ5LCAxMCUpLFxuICAgIFxuICAgIFwib24tcHJpbWFyeVwiOiAgIzAwMCxcbiAgICBcIm9uLXNlY29uZGFyeVwiOiAjMDAwLFxuXG4gICAgXCJiYWNrZ3JvdW5kXCI6ICMyOTI5MjksXG4gICAgXCJzdXJmYWNlXCI6ICMxMjEyMTIsXG4gICAgXCJvbi1iYWNrZ3JvdW5kXCI6ICNCQkIsXG4gICAgXCJvbi1zdXJmYWNlXCI6ICNCQkIsXG5cbiAgICBcImVycm9yXCI6ICNiNjE4MjcsXG4gICAgXCJva1wiOiAjMDg3ZjIzLFxuICAgIFwid2FybmluZ1wiOiAjZmZmNTlkLFxuICAgIFwiaW5mb1wiOiAjYmJkZWZiLFxuXG4gICAgXCJvbi1lcnJvclwiOiAjRkZGLFxuICAgIFwib24tb2tcIjogI0ZGRixcbiAgICBcIm9uLXdhcm5pbmdcIjogIzAwMCxcbiAgICBcIm9uLWluZm9cIjogIzAwMCwgICAgXG4pO1xuXG4kZWxldmF0aW9uczogKFxuICAgIFwiaGVhZGVyLWVsZXZhdGlvblwiOiBcIjBweCAycHggNHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCA0cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCAxcHggMTBweCAwcHggcmdiYSgwLDAsMCwuMTIpXCIsXG4gICAgXCJjYXJkLWVsZXZhdGlvblwiOiBcIjBweCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCAycHggMnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCAxcHggNXB4IDBweCByZ2JhKDAsMCwwLC4xMilcIlxuKTtcblxuJGRhcmtUaGVtZTogbWFwLW1lcmdlKCRkYXJrVGhlbWUsICRlbGV2YXRpb25zKTtcblxuJGxpZ2h0UHJpbWFyeTojRTYzOTQ2O1xuJGxpZ2h0U2Vjb25kYXJ5OiNGMUZBRUU7XG5cbiRsaWdodFRoZW1lOiAoXG4gICAgXCJwcmltYXJ5XCI6ICRsaWdodFByaW1hcnksXG4gICAgXCJwcmltYXJ5LWhvdmVyXCI6IGxpZ2h0ZW4oJGxpZ2h0UHJpbWFyeSwgMTAlKSxcbiAgICBcInByaW1hcnktcHJlc3NlZFwiOiBkYXJrZW4oJGxpZ2h0UHJpbWFyeSwgMTAlKSxcblxuICAgIFwic2Vjb25kYXJ5XCI6JGxpZ2h0U2Vjb25kYXJ5LFxuICAgIFwic2Vjb25kYXJ5LWhvdmVyXCI6IGxpZ2h0ZW4oJGxpZ2h0U2Vjb25kYXJ5LCAxMCUpLFxuICAgIFwic2Vjb25kYXJ5LXByZXNzZWRcIjogZGFya2VuKCRsaWdodFNlY29uZGFyeSwgMTAlKSxcblxuICAgIFwiYmFja2dyb3VuZFwiOiAjRkZGLFxuICAgIFwic3VyZmFjZVwiOiAjRjVGNUY1LFxuICAgIFwib24tYmFja2dyb3VuZFwiOiAjMDAwLFxuICAgIFwib24tc3VyZmFjZVwiOiAjMDAwLFxuXG4gICAgXCJlcnJvclwiOiAjYjYxODI3LFxuICAgIFwib2tcIjogIzA4N2YyMyxcbiAgICBcIndhcm5pbmdcIjogI2ZmZjU5ZCxcbiAgICBcImluZm9cIjogI2JiZGVmYixcblxuICAgIFwib24tZXJyb3JcIjogI0ZGRixcbiAgICBcIm9uLW9rXCI6ICNGRkYsXG4gICAgXCJvbi13YXJuaW5nXCI6ICMwMDAsXG4gICAgXCJvbi1pbmZvXCI6ICMwMDAsXG4pO1xuXG4kbGlnaHRUaGVtZTogbWFwLW1lcmdlKCRsaWdodFRoZW1lLCAkZWxldmF0aW9ucyk7XG5cbkBmdW5jdGlvbiB0aGVtZV9kYXRhKCRuYW1lLCAkdmFsdWUpe1xuICAgIEBpZiAkbmFtZSA9PSBcImRhcmtcIiB7XG4gICAgICAgIEByZXR1cm4gbWFwLWdldCgkZGFya1RoZW1lLCAkdmFsdWUpO1xuICAgIH1cbiAgICBAcmV0dXJuIG1hcC1nZXQoJGxpZ2h0VGhlbWUsICR2YWx1ZSk7XG59XG5cbkBtaXhpbiBkZXNrdG9wLW9ubHkge1xuXHRAbWVkaWEgKG1pbi13aWR0aCA6IDEwMjRweCkge1xuXHRcdEBjb250ZW50O1xuXHR9XG59XG5cbkBtaXhpbiB0aGVtZV92YXJzKCR0aGVtZTonZGFyaycpe1xuICAgIC0tdGhlbWUtcHJpbWFyeTogI3t0aGVtZV9kYXRhKCR0aGVtZSwgJ3ByaW1hcnknKX07IFxuICAgIC0tdGhlbWUtcHJpbWFyeS1ob3ZlcjogI3t0aGVtZV9kYXRhKCR0aGVtZSwgJ3ByaW1hcnktaG92ZXInKX07IFxuICAgIC0tdGhlbWUtcHJpbWFyeS1wcmVzc2VkOiAje3RoZW1lX2RhdGEoJHRoZW1lLCAncHJpbWFyeS1wcmVzc2VkJyl9O1xuICAgIC0tdGhlbWUtc2Vjb25kYXJ5OiAje3RoZW1lX2RhdGEoJHRoZW1lLCAnc2Vjb25kYXJ5Jyl9OyBcbiAgICAtLXRoZW1lLXNlY29uZGFyeS1ob3ZlcjogI3t0aGVtZV9kYXRhKCR0aGVtZSwgJ3NlY29uZGFyeS1ob3ZlcicpfTsgXG4gICAgLS10aGVtZS1zZWNvbmRhcnktcHJlc3NlZDogI3t0aGVtZV9kYXRhKCR0aGVtZSwgJ3NlY29uZGFyeS1wcmVzc2VkJyl9OyBcbiAgICAtLXRoZW1lLW9uLXByaW1hcnk6ICN7dGhlbWVfZGF0YSgkdGhlbWUsICdvbi1wcmltYXJ5Jyl9OyBcbiAgICAtLXRoZW1lLW9uLXNlY29uZGFyeTogI3t0aGVtZV9kYXRhKCR0aGVtZSwgJ29uLXNlY29uZGFyeScpfTsgXG5cbiAgICAtLXRoZW1lLWJhY2tncm91bmQ6ICN7dGhlbWVfZGF0YSgkdGhlbWUsICdiYWNrZ3JvdW5kJyl9OyBcbiAgICAtLXRoZW1lLXN1cmZhY2U6ICN7dGhlbWVfZGF0YSgkdGhlbWUsICdzdXJmYWNlJyl9OyBcbiAgICAtLXRoZW1lLW9uLWJhY2tncm91bmQ6ICN7dGhlbWVfZGF0YSgkdGhlbWUsICdvbi1iYWNrZ3JvdW5kJyl9OyBcbiAgICAtLXRoZW1lLW9uLXN1cmZhY2U6ICN7dGhlbWVfZGF0YSgkdGhlbWUsICdvbi1zdXJmYWNlJyl9OyBcblxuICAgIC0tdGhlbWUtZXJyb3I6ICN7dGhlbWVfZGF0YSgkdGhlbWUsICdlcnJvcicpfTsgXG4gICAgLS10aGVtZS1vazogI3t0aGVtZV9kYXRhKCR0aGVtZSwgJ29rJyl9OyBcbiAgICAtLXRoZW1lLXdhcm5pbmc6ICN7dGhlbWVfZGF0YSgkdGhlbWUsICd3YXJuaW5nJyl9OyBcbiAgICAtLXRoZW1lLWluZm86ICN7dGhlbWVfZGF0YSgkdGhlbWUsICdpbmZvJyl9OyBcblxuICAgIC0tdGhlbWUtb24tZXJyb3I6ICN7dGhlbWVfZGF0YSgkdGhlbWUsICdvbi1lcnJvcicpfTsgXG4gICAgLS10aGVtZS1vbi1vazogI3t0aGVtZV9kYXRhKCR0aGVtZSwgJ29uLW9rJyl9OyBcbiAgICAtLXRoZW1lLW9uLXdhcm5pbmc6ICN7dGhlbWVfZGF0YSgkdGhlbWUsICdvbi13YXJuaW5nJyl9OyBcbiAgICAtLXRoZW1lLW9uLWluZm86ICN7dGhlbWVfZGF0YSgkdGhlbWUsICdvbi1pbmZvJyl9OyBcblxuICAgIC0tdGhlbWUtaGVhZGVyLWVsZXZhdGlvbjogI3t0aGVtZV9kYXRhKCR0aGVtZSwgJ2hlYWRlci1lbGV2YXRpb24nKX07IFxuICAgIC0tdGhlbWUtY2FyZC1lbGV2YXRpb246ICN7dGhlbWVfZGF0YSgkdGhlbWUsICdjYXJkLWVsZXZhdGlvbicpfTtcbn1cblxuJHRoZW1lX3ByaW1hcnk6IHZhcigtLXRoZW1lLXByaW1hcnkpO1xuJHRoZW1lX3ByaW1hcnlfaG92ZXI6IHZhcigtLXRoZW1lLXByaW1hcnktaG92ZXIpO1xuJHRoZW1lX3ByaW1hcnlfcHJlc3NlZDogdmFyKC0tdGhlbWUtcHJpbWFyeS1wcmVzc2VkKTtcbiR0aGVtZV9vbl9wcmltYXJ5OiB2YXIoLS10aGVtZS1vbi1wcmltYXJ5KTtcblxuJHRoZW1lX2JhY2tncm91bmQ6IHZhcigtLXRoZW1lLWJhY2tncm91bmQpO1xuJHRoZW1lX3N1cmZhY2U6IHZhcigtLXRoZW1lLXN1cmZhY2UpO1xuJHRoZW1lX29uX2JhY2tncm91bmQ6IHZhcigtLXRoZW1lLW9uLWJhY2tncm91bmQpO1xuJHRoZW1lX29uX3N1cmZhY2U6IHZhcigtLXRoZW1lLW9uLXN1cmZhY2UpO1xuXG4kdGhlbWVfZXJyb3I6IHZhcigtLXRoZW1lLWVycm9yKTtcbiR0aGVtZV9vbl9lcnJvcjogdmFyKC0tdGhlbWUtb24tZXJyb3IpO1xuXG4kdGhlbWVfaGVhZGVyX2VsZXZhdGlvbjogdmFyKC0tdGhlbWUtaGVhZGVyLWVsZXZhdGlvbik7XG4kdGhlbWVfY2FyZF9lbGV2YXRpb246IHZhcigtLXRoZW1lLWNhcmQtZWxldmF0aW9uKTtcblxuJHBhZGRpbmc6IDEwcHg7XG4kYnV0dG9uX3BhZGRpbmc6ICRwYWRkaW5nIC8gMjtcbiRtYXJnaW46IDEwcHg7XG4kcm91bmRlZDogNXB4O1xuXG4kd29ya2FyZWE6IDEwMjRweDsiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ColorInputComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-color-input',
                templateUrl: './color-input.component.html',
                styleUrls: ['./color-input.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, { color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], className: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["class"]
        }] }); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _theme_chooser_theme_chooser_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./theme-chooser/theme-chooser.component */ "f25G");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _models_theme_reducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./models/theme.reducer */ "Flju");
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./view/view.component */ "FJD2");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _color_info_color_info_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./color-info/color-info.component */ "gGy3");
/* harmony import */ var _tile_tile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./tile/tile.component */ "H9aC");
/* harmony import */ var _tile_set_tile_set_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./tile-set/tile-set.component */ "8H6i");
/* harmony import */ var _color_panels_color_panels_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./color-panels/color-panels.component */ "/XVE");
/* harmony import */ var _color_input_color_input_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./color-input/color-input.component */ "TC6a");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "ofXK");



















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_16__["APP_BASE_HREF"], useValue: '/colors-ng' }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreModule"].forRoot({ theme: _models_theme_reducer__WEBPACK_IMPORTED_MODULE_8__["themeReducer"] }, {})
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
        _theme_chooser_theme_chooser_component__WEBPACK_IMPORTED_MODULE_6__["ThemeChooserComponent"],
        _view_view_component__WEBPACK_IMPORTED_MODULE_9__["ViewComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
        _color_info_color_info_component__WEBPACK_IMPORTED_MODULE_11__["ColorInfoComponent"],
        _tile_tile_component__WEBPACK_IMPORTED_MODULE_12__["TileComponent"],
        _tile_set_tile_set_component__WEBPACK_IMPORTED_MODULE_13__["TileSetComponent"],
        _color_panels_color_panels_component__WEBPACK_IMPORTED_MODULE_14__["ColorPanelComponent"],
        _color_input_color_input_component__WEBPACK_IMPORTED_MODULE_15__["ColorInputComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreRootModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                    _theme_chooser_theme_chooser_component__WEBPACK_IMPORTED_MODULE_6__["ThemeChooserComponent"],
                    _view_view_component__WEBPACK_IMPORTED_MODULE_9__["ViewComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                    _color_info_color_info_component__WEBPACK_IMPORTED_MODULE_11__["ColorInfoComponent"],
                    _tile_tile_component__WEBPACK_IMPORTED_MODULE_12__["TileComponent"],
                    _tile_set_tile_set_component__WEBPACK_IMPORTED_MODULE_13__["TileSetComponent"],
                    _color_panels_color_panels_component__WEBPACK_IMPORTED_MODULE_14__["ColorPanelComponent"],
                    _color_input_color_input_component__WEBPACK_IMPORTED_MODULE_15__["ColorInputComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreModule"].forRoot({ theme: _models_theme_reducer__WEBPACK_IMPORTED_MODULE_8__["themeReducer"] }, {})
                ],
                providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_16__["APP_BASE_HREF"], useValue: '/colors-ng' }],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "f25G":
/*!**********************************************************!*\
  !*** ./src/app/theme-chooser/theme-chooser.component.ts ***!
  \**********************************************************/
/*! exports provided: ThemeChooserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeChooserComponent", function() { return ThemeChooserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _models_theme_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/theme.actions */ "EEOh");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");









class ThemeChooserComponent {
    constructor(store) {
        this.store = store;
        this._className = "";
        this.faMoon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faMoon"];
        this.theme$ = store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])("theme")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(theme => theme === 'light' ? _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faSun"] : _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faMoon"]));
    }
    get className() {
        return `colors-theme-chooser ${this._className}`;
    }
    set className(value) {
        this._className = value;
    }
    toggle() {
        this.store.dispatch(Object(_models_theme_actions__WEBPACK_IMPORTED_MODULE_4__["toggle"])());
    }
    ngOnInit() {
    }
}
ThemeChooserComponent.ɵfac = function ThemeChooserComponent_Factory(t) { return new (t || ThemeChooserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"])); };
ThemeChooserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ThemeChooserComponent, selectors: [["app-theme-chooser"]], inputs: { className: ["class", "className"] }, decls: 3, vars: 6, consts: [[3, "click"], ["size", "lg", 3, "icon"]], template: function ThemeChooserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ThemeChooserComponent_Template_div_click_0_listener() { return ctx.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.className);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 4, ctx.theme$) || ctx.faMoon);
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FaIconComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: [".colors-theme-chooser[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  padding: 5px;\n  background-color: var(--theme-surface);\n  color: var(--theme-on-background);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUtY2hvb3Nlci90aGVtZS1jaG9vc2VyLmNvbXBvbmVudC5zY3NzIiwic3JjL3Nhc3MvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksbUJBQUE7RUFDQSxZQzJIYTtFRDFIYixzQ0MrR1k7RUQ5R1osaUNDK0drQjtBRGhIdEIiLCJmaWxlIjoic3JjL2FwcC90aGVtZS1jaG9vc2VyL3RoZW1lLWNob29zZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi9zYXNzL3ZhcmlhYmxlcyc7XG5cbi5jb2xvcnMtdGhlbWUtY2hvb3NlciB7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBwYWRkaW5nOiAkYnV0dG9uX3BhZGRpbmc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHRoZW1lX3N1cmZhY2U7XG4gICAgY29sb3I6ICR0aGVtZV9vbl9iYWNrZ3JvdW5kO1xufSAiLCIkZGFya1ByaW1hcnk6ICNmY2EzMTE7XG4kZGFya1NlY29uZGFyeTogI2U1ZTVlNTtcblxuJGRhcmtUaGVtZTogKFxuICAgIFwicHJpbWFyeVwiOiAkZGFya1ByaW1hcnksXG4gICAgXCJwcmltYXJ5LWhvdmVyXCI6IGxpZ2h0ZW4oJGRhcmtQcmltYXJ5LCAxMCUpLFxuICAgIFwicHJpbWFyeS1wcmVzc2VkXCI6IGRhcmtlbigkZGFya1ByaW1hcnksIDEwJSksXG5cbiAgICBcInNlY29uZGFyeVwiOiRkYXJrU2Vjb25kYXJ5LFxuICAgIFwic2Vjb25kYXJ5LWhvdmVyXCI6IGxpZ2h0ZW4oJGRhcmtTZWNvbmRhcnksIDEwJSksXG4gICAgXCJzZWNvbmRhcnktcHJlc3NlZFwiOiBkYXJrZW4oJGRhcmtTZWNvbmRhcnksIDEwJSksXG4gICAgXG4gICAgXCJvbi1wcmltYXJ5XCI6ICAjMDAwLFxuICAgIFwib24tc2Vjb25kYXJ5XCI6ICMwMDAsXG5cbiAgICBcImJhY2tncm91bmRcIjogIzI5MjkyOSxcbiAgICBcInN1cmZhY2VcIjogIzEyMTIxMixcbiAgICBcIm9uLWJhY2tncm91bmRcIjogI0JCQixcbiAgICBcIm9uLXN1cmZhY2VcIjogI0JCQixcblxuICAgIFwiZXJyb3JcIjogI2I2MTgyNyxcbiAgICBcIm9rXCI6ICMwODdmMjMsXG4gICAgXCJ3YXJuaW5nXCI6ICNmZmY1OWQsXG4gICAgXCJpbmZvXCI6ICNiYmRlZmIsXG5cbiAgICBcIm9uLWVycm9yXCI6ICNGRkYsXG4gICAgXCJvbi1va1wiOiAjRkZGLFxuICAgIFwib24td2FybmluZ1wiOiAjMDAwLFxuICAgIFwib24taW5mb1wiOiAjMDAwLCAgICBcbik7XG5cbiRlbGV2YXRpb25zOiAoXG4gICAgXCJoZWFkZXItZWxldmF0aW9uXCI6IFwiMHB4IDJweCA0cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDRweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDFweCAxMHB4IDBweCByZ2JhKDAsMCwwLC4xMilcIixcbiAgICBcImNhcmQtZWxldmF0aW9uXCI6IFwiMHB4IDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDJweCAycHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDFweCA1cHggMHB4IHJnYmEoMCwwLDAsLjEyKVwiXG4pO1xuXG4kZGFya1RoZW1lOiBtYXAtbWVyZ2UoJGRhcmtUaGVtZSwgJGVsZXZhdGlvbnMpO1xuXG4kbGlnaHRQcmltYXJ5OiNFNjM5NDY7XG4kbGlnaHRTZWNvbmRhcnk6I0YxRkFFRTtcblxuJGxpZ2h0VGhlbWU6IChcbiAgICBcInByaW1hcnlcIjogJGxpZ2h0UHJpbWFyeSxcbiAgICBcInByaW1hcnktaG92ZXJcIjogbGlnaHRlbigkbGlnaHRQcmltYXJ5LCAxMCUpLFxuICAgIFwicHJpbWFyeS1wcmVzc2VkXCI6IGRhcmtlbigkbGlnaHRQcmltYXJ5LCAxMCUpLFxuXG4gICAgXCJzZWNvbmRhcnlcIjokbGlnaHRTZWNvbmRhcnksXG4gICAgXCJzZWNvbmRhcnktaG92ZXJcIjogbGlnaHRlbigkbGlnaHRTZWNvbmRhcnksIDEwJSksXG4gICAgXCJzZWNvbmRhcnktcHJlc3NlZFwiOiBkYXJrZW4oJGxpZ2h0U2Vjb25kYXJ5LCAxMCUpLFxuXG4gICAgXCJiYWNrZ3JvdW5kXCI6ICNGRkYsXG4gICAgXCJzdXJmYWNlXCI6ICNGNUY1RjUsXG4gICAgXCJvbi1iYWNrZ3JvdW5kXCI6ICMwMDAsXG4gICAgXCJvbi1zdXJmYWNlXCI6ICMwMDAsXG5cbiAgICBcImVycm9yXCI6ICNiNjE4MjcsXG4gICAgXCJva1wiOiAjMDg3ZjIzLFxuICAgIFwid2FybmluZ1wiOiAjZmZmNTlkLFxuICAgIFwiaW5mb1wiOiAjYmJkZWZiLFxuXG4gICAgXCJvbi1lcnJvclwiOiAjRkZGLFxuICAgIFwib24tb2tcIjogI0ZGRixcbiAgICBcIm9uLXdhcm5pbmdcIjogIzAwMCxcbiAgICBcIm9uLWluZm9cIjogIzAwMCxcbik7XG5cbiRsaWdodFRoZW1lOiBtYXAtbWVyZ2UoJGxpZ2h0VGhlbWUsICRlbGV2YXRpb25zKTtcblxuQGZ1bmN0aW9uIHRoZW1lX2RhdGEoJG5hbWUsICR2YWx1ZSl7XG4gICAgQGlmICRuYW1lID09IFwiZGFya1wiIHtcbiAgICAgICAgQHJldHVybiBtYXAtZ2V0KCRkYXJrVGhlbWUsICR2YWx1ZSk7XG4gICAgfVxuICAgIEByZXR1cm4gbWFwLWdldCgkbGlnaHRUaGVtZSwgJHZhbHVlKTtcbn1cblxuQG1peGluIGRlc2t0b3Atb25seSB7XG5cdEBtZWRpYSAobWluLXdpZHRoIDogMTAyNHB4KSB7XG5cdFx0QGNvbnRlbnQ7XG5cdH1cbn1cblxuQG1peGluIHRoZW1lX3ZhcnMoJHRoZW1lOidkYXJrJyl7XG4gICAgLS10aGVtZS1wcmltYXJ5OiAje3RoZW1lX2RhdGEoJHRoZW1lLCAncHJpbWFyeScpfTsgXG4gICAgLS10aGVtZS1wcmltYXJ5LWhvdmVyOiAje3RoZW1lX2RhdGEoJHRoZW1lLCAncHJpbWFyeS1ob3ZlcicpfTsgXG4gICAgLS10aGVtZS1wcmltYXJ5LXByZXNzZWQ6ICN7dGhlbWVfZGF0YSgkdGhlbWUsICdwcmltYXJ5LXByZXNzZWQnKX07XG4gICAgLS10aGVtZS1zZWNvbmRhcnk6ICN7dGhlbWVfZGF0YSgkdGhlbWUsICdzZWNvbmRhcnknKX07IFxuICAgIC0tdGhlbWUtc2Vjb25kYXJ5LWhvdmVyOiAje3RoZW1lX2RhdGEoJHRoZW1lLCAnc2Vjb25kYXJ5LWhvdmVyJyl9OyBcbiAgICAtLXRoZW1lLXNlY29uZGFyeS1wcmVzc2VkOiAje3RoZW1lX2RhdGEoJHRoZW1lLCAnc2Vjb25kYXJ5LXByZXNzZWQnKX07IFxuICAgIC0tdGhlbWUtb24tcHJpbWFyeTogI3t0aGVtZV9kYXRhKCR0aGVtZSwgJ29uLXByaW1hcnknKX07IFxuICAgIC0tdGhlbWUtb24tc2Vjb25kYXJ5OiAje3RoZW1lX2RhdGEoJHRoZW1lLCAnb24tc2Vjb25kYXJ5Jyl9OyBcblxuICAgIC0tdGhlbWUtYmFja2dyb3VuZDogI3t0aGVtZV9kYXRhKCR0aGVtZSwgJ2JhY2tncm91bmQnKX07IFxuICAgIC0tdGhlbWUtc3VyZmFjZTogI3t0aGVtZV9kYXRhKCR0aGVtZSwgJ3N1cmZhY2UnKX07IFxuICAgIC0tdGhlbWUtb24tYmFja2dyb3VuZDogI3t0aGVtZV9kYXRhKCR0aGVtZSwgJ29uLWJhY2tncm91bmQnKX07IFxuICAgIC0tdGhlbWUtb24tc3VyZmFjZTogI3t0aGVtZV9kYXRhKCR0aGVtZSwgJ29uLXN1cmZhY2UnKX07IFxuXG4gICAgLS10aGVtZS1lcnJvcjogI3t0aGVtZV9kYXRhKCR0aGVtZSwgJ2Vycm9yJyl9OyBcbiAgICAtLXRoZW1lLW9rOiAje3RoZW1lX2RhdGEoJHRoZW1lLCAnb2snKX07IFxuICAgIC0tdGhlbWUtd2FybmluZzogI3t0aGVtZV9kYXRhKCR0aGVtZSwgJ3dhcm5pbmcnKX07IFxuICAgIC0tdGhlbWUtaW5mbzogI3t0aGVtZV9kYXRhKCR0aGVtZSwgJ2luZm8nKX07IFxuXG4gICAgLS10aGVtZS1vbi1lcnJvcjogI3t0aGVtZV9kYXRhKCR0aGVtZSwgJ29uLWVycm9yJyl9OyBcbiAgICAtLXRoZW1lLW9uLW9rOiAje3RoZW1lX2RhdGEoJHRoZW1lLCAnb24tb2snKX07IFxuICAgIC0tdGhlbWUtb24td2FybmluZzogI3t0aGVtZV9kYXRhKCR0aGVtZSwgJ29uLXdhcm5pbmcnKX07IFxuICAgIC0tdGhlbWUtb24taW5mbzogI3t0aGVtZV9kYXRhKCR0aGVtZSwgJ29uLWluZm8nKX07IFxuXG4gICAgLS10aGVtZS1oZWFkZXItZWxldmF0aW9uOiAje3RoZW1lX2RhdGEoJHRoZW1lLCAnaGVhZGVyLWVsZXZhdGlvbicpfTsgXG4gICAgLS10aGVtZS1jYXJkLWVsZXZhdGlvbjogI3t0aGVtZV9kYXRhKCR0aGVtZSwgJ2NhcmQtZWxldmF0aW9uJyl9O1xufVxuXG4kdGhlbWVfcHJpbWFyeTogdmFyKC0tdGhlbWUtcHJpbWFyeSk7XG4kdGhlbWVfcHJpbWFyeV9ob3ZlcjogdmFyKC0tdGhlbWUtcHJpbWFyeS1ob3Zlcik7XG4kdGhlbWVfcHJpbWFyeV9wcmVzc2VkOiB2YXIoLS10aGVtZS1wcmltYXJ5LXByZXNzZWQpO1xuJHRoZW1lX29uX3ByaW1hcnk6IHZhcigtLXRoZW1lLW9uLXByaW1hcnkpO1xuXG4kdGhlbWVfYmFja2dyb3VuZDogdmFyKC0tdGhlbWUtYmFja2dyb3VuZCk7XG4kdGhlbWVfc3VyZmFjZTogdmFyKC0tdGhlbWUtc3VyZmFjZSk7XG4kdGhlbWVfb25fYmFja2dyb3VuZDogdmFyKC0tdGhlbWUtb24tYmFja2dyb3VuZCk7XG4kdGhlbWVfb25fc3VyZmFjZTogdmFyKC0tdGhlbWUtb24tc3VyZmFjZSk7XG5cbiR0aGVtZV9lcnJvcjogdmFyKC0tdGhlbWUtZXJyb3IpO1xuJHRoZW1lX29uX2Vycm9yOiB2YXIoLS10aGVtZS1vbi1lcnJvcik7XG5cbiR0aGVtZV9oZWFkZXJfZWxldmF0aW9uOiB2YXIoLS10aGVtZS1oZWFkZXItZWxldmF0aW9uKTtcbiR0aGVtZV9jYXJkX2VsZXZhdGlvbjogdmFyKC0tdGhlbWUtY2FyZC1lbGV2YXRpb24pO1xuXG4kcGFkZGluZzogMTBweDtcbiRidXR0b25fcGFkZGluZzogJHBhZGRpbmcgLyAyO1xuJG1hcmdpbjogMTBweDtcbiRyb3VuZGVkOiA1cHg7XG5cbiR3b3JrYXJlYTogMTAyNHB4OyJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ThemeChooserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-theme-chooser',
                templateUrl: './theme-chooser.component.html',
                styleUrls: ['./theme-chooser.component.scss']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }]; }, { className: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["class"]
        }] }); })();


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _theme_chooser_theme_chooser_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../theme-chooser/theme-chooser.component */ "f25G");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");







function HeaderComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_2_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.goBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r0.faArrowAltCircleLeft);
} }
const _c0 = ["*"];
class HeaderComponent {
    constructor() {
        this.faArrowAltCircleLeft = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faArrowAltCircleLeft"];
        this.showBack = false;
    }
    ngOnInit() {
    }
    goBack() {
        window.history.back();
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], inputs: { showBack: ["show_back", "showBack"] }, outputs: { showBack: "showBack" }, ngContentSelectors: _c0, decls: 9, vars: 1, consts: [[1, "colors-header"], [1, "colors-header__wrapper"], ["class", "colors-header__showback", 3, "click", 4, "ngIf"], ["routerLink", "/", 1, "colors-header__link"], [1, "colors-header__title"], [1, "colors-header__extra"], [1, "colors-header__themechooser"], [1, "colors-header__showback", 3, "click"], ["size", "lg", 3, "icon"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HeaderComponent_div_2_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Colors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-theme-chooser", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showBack);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _theme_chooser_theme_chooser_component__WEBPACK_IMPORTED_MODULE_4__["ThemeChooserComponent"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FaIconComponent"]], styles: [".colors-header[_ngcontent-%COMP%] {\n  padding: 10px;\n  background-color: var(--theme-background);\n  box-shadow: var(--theme-header-elevation);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n}\n\n.colors-header__wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n}\n\n@media (min-width: 1024px) {\n  .colors-header__wrapper[_ngcontent-%COMP%] {\n    width: 1024px;\n  }\n}\n\n.colors-header__link[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n.colors-header__title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  padding-left: 10px;\n  font-style: italic;\n}\n\n.colors-header__extra[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n.colors-header__themechooser[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9zYXNzL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGFDMkhNO0VEMUhOLHlDQytHZTtFRDlHZix5Q0NzSHFCO0VEcEhyQixhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUVBLFdBQUE7QUFISjs7QUFNQTtFQUNJLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQUhKOztBQzZEQztFRDlERDtJQU1RLGFDK0dHO0VEaEhUO0FBQ0Y7O0FBSUE7RUFDSSxxQkFBQTtBQURKOztBQUlBO0VBQ0ksZUFBQTtFQUNBLGtCQ2dHTTtFRC9GTixrQkFBQTtBQURKOztBQUlBO0VBQ0ksWUFBQTtFQUNBLGtCQzBGTTtFRHpGTixtQkN5Rk07QUQxRlY7O0FBSUE7RUFDSSxxQkFBQTtBQURKIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uL3Nhc3MvdmFyaWFibGVzJztcblxuLmNvbG9ycy1oZWFkZXIge1xuICAgIHBhZGRpbmc6ICRwYWRkaW5nO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR0aGVtZV9iYWNrZ3JvdW5kOyAgICBcbiAgICBib3gtc2hhZG93OiAkdGhlbWVfaGVhZGVyX2VsZXZhdGlvbjtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIHdpZHRoOiAxMDAlO1xufSBcblxuLmNvbG9ycy1oZWFkZXJfX3dyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgQGluY2x1ZGUgZGVza3RvcC1vbmx5IHtcbiAgICAgICAgd2lkdGg6ICR3b3JrYXJlYTtcbiAgICB9XG59XG5cbi5jb2xvcnMtaGVhZGVyX19saW5rIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5jb2xvcnMtaGVhZGVyX190aXRsZSB7XG4gICAgZm9udC1zaXplOiAxNnB4ICogMS41O1xuICAgIHBhZGRpbmctbGVmdDogJHBhZGRpbmc7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4uY29sb3JzLWhlYWRlcl9fZXh0cmEge1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBwYWRkaW5nLWxlZnQ6ICRwYWRkaW5nO1xuICAgIHBhZGRpbmctcmlnaHQ6ICRwYWRkaW5nO1xufVxuXG4uY29sb3JzLWhlYWRlcl9fdGhlbWVjaG9vc2VyIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59IiwiJGRhcmtQcmltYXJ5OiAjZmNhMzExO1xuJGRhcmtTZWNvbmRhcnk6ICNlNWU1ZTU7XG5cbiRkYXJrVGhlbWU6IChcbiAgICBcInByaW1hcnlcIjogJGRhcmtQcmltYXJ5LFxuICAgIFwicHJpbWFyeS1ob3ZlclwiOiBsaWdodGVuKCRkYXJrUHJpbWFyeSwgMTAlKSxcbiAgICBcInByaW1hcnktcHJlc3NlZFwiOiBkYXJrZW4oJGRhcmtQcmltYXJ5LCAxMCUpLFxuXG4gICAgXCJzZWNvbmRhcnlcIjokZGFya1NlY29uZGFyeSxcbiAgICBcInNlY29uZGFyeS1ob3ZlclwiOiBsaWdodGVuKCRkYXJrU2Vjb25kYXJ5LCAxMCUpLFxuICAgIFwic2Vjb25kYXJ5LXByZXNzZWRcIjogZGFya2VuKCRkYXJrU2Vjb25kYXJ5LCAxMCUpLFxuICAgIFxuICAgIFwib24tcHJpbWFyeVwiOiAgIzAwMCxcbiAgICBcIm9uLXNlY29uZGFyeVwiOiAjMDAwLFxuXG4gICAgXCJiYWNrZ3JvdW5kXCI6ICMyOTI5MjksXG4gICAgXCJzdXJmYWNlXCI6ICMxMjEyMTIsXG4gICAgXCJvbi1iYWNrZ3JvdW5kXCI6ICNCQkIsXG4gICAgXCJvbi1zdXJmYWNlXCI6ICNCQkIsXG5cbiAgICBcImVycm9yXCI6ICNiNjE4MjcsXG4gICAgXCJva1wiOiAjMDg3ZjIzLFxuICAgIFwid2FybmluZ1wiOiAjZmZmNTlkLFxuICAgIFwiaW5mb1wiOiAjYmJkZWZiLFxuXG4gICAgXCJvbi1lcnJvclwiOiAjRkZGLFxuICAgIFwib24tb2tcIjogI0ZGRixcbiAgICBcIm9uLXdhcm5pbmdcIjogIzAwMCxcbiAgICBcIm9uLWluZm9cIjogIzAwMCwgICAgXG4pO1xuXG4kZWxldmF0aW9uczogKFxuICAgIFwiaGVhZGVyLWVsZXZhdGlvblwiOiBcIjBweCAycHggNHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCA0cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCAxcHggMTBweCAwcHggcmdiYSgwLDAsMCwuMTIpXCIsXG4gICAgXCJjYXJkLWVsZXZhdGlvblwiOiBcIjBweCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCAycHggMnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCAxcHggNXB4IDBweCByZ2JhKDAsMCwwLC4xMilcIlxuKTtcblxuJGRhcmtUaGVtZTogbWFwLW1lcmdlKCRkYXJrVGhlbWUsICRlbGV2YXRpb25zKTtcblxuJGxpZ2h0UHJpbWFyeTojRTYzOTQ2O1xuJGxpZ2h0U2Vjb25kYXJ5OiNGMUZBRUU7XG5cbiRsaWdodFRoZW1lOiAoXG4gICAgXCJwcmltYXJ5XCI6ICRsaWdodFByaW1hcnksXG4gICAgXCJwcmltYXJ5LWhvdmVyXCI6IGxpZ2h0ZW4oJGxpZ2h0UHJpbWFyeSwgMTAlKSxcbiAgICBcInByaW1hcnktcHJlc3NlZFwiOiBkYXJrZW4oJGxpZ2h0UHJpbWFyeSwgMTAlKSxcblxuICAgIFwic2Vjb25kYXJ5XCI6JGxpZ2h0U2Vjb25kYXJ5LFxuICAgIFwic2Vjb25kYXJ5LWhvdmVyXCI6IGxpZ2h0ZW4oJGxpZ2h0U2Vjb25kYXJ5LCAxMCUpLFxuICAgIFwic2Vjb25kYXJ5LXByZXNzZWRcIjogZGFya2VuKCRsaWdodFNlY29uZGFyeSwgMTAlKSxcblxuICAgIFwiYmFja2dyb3VuZFwiOiAjRkZGLFxuICAgIFwic3VyZmFjZVwiOiAjRjVGNUY1LFxuICAgIFwib24tYmFja2dyb3VuZFwiOiAjMDAwLFxuICAgIFwib24tc3VyZmFjZVwiOiAjMDAwLFxuXG4gICAgXCJlcnJvclwiOiAjYjYxODI3LFxuICAgIFwib2tcIjogIzA4N2YyMyxcbiAgICBcIndhcm5pbmdcIjogI2ZmZjU5ZCxcbiAgICBcImluZm9cIjogI2JiZGVmYixcblxuICAgIFwib24tZXJyb3JcIjogI0ZGRixcbiAgICBcIm9uLW9rXCI6ICNGRkYsXG4gICAgXCJvbi13YXJuaW5nXCI6ICMwMDAsXG4gICAgXCJvbi1pbmZvXCI6ICMwMDAsXG4pO1xuXG4kbGlnaHRUaGVtZTogbWFwLW1lcmdlKCRsaWdodFRoZW1lLCAkZWxldmF0aW9ucyk7XG5cbkBmdW5jdGlvbiB0aGVtZV9kYXRhKCRuYW1lLCAkdmFsdWUpe1xuICAgIEBpZiAkbmFtZSA9PSBcImRhcmtcIiB7XG4gICAgICAgIEByZXR1cm4gbWFwLWdldCgkZGFya1RoZW1lLCAkdmFsdWUpO1xuICAgIH1cbiAgICBAcmV0dXJuIG1hcC1nZXQoJGxpZ2h0VGhlbWUsICR2YWx1ZSk7XG59XG5cbkBtaXhpbiBkZXNrdG9wLW9ubHkge1xuXHRAbWVkaWEgKG1pbi13aWR0aCA6IDEwMjRweCkge1xuXHRcdEBjb250ZW50O1xuXHR9XG59XG5cbkBtaXhpbiB0aGVtZV92YXJzKCR0aGVtZTonZGFyaycpe1xuICAgIC0tdGhlbWUtcHJpbWFyeTogI3t0aGVtZV9kYXRhKCR0aGVtZSwgJ3ByaW1hcnknKX07IFxuICAgIC0tdGhlbWUtcHJpbWFyeS1ob3ZlcjogI3t0aGVtZV9kYXRhKCR0aGVtZSwgJ3ByaW1hcnktaG92ZXInKX07IFxuICAgIC0tdGhlbWUtcHJpbWFyeS1wcmVzc2VkOiAje3RoZW1lX2RhdGEoJHRoZW1lLCAncHJpbWFyeS1wcmVzc2VkJyl9O1xuICAgIC0tdGhlbWUtc2Vjb25kYXJ5OiAje3RoZW1lX2RhdGEoJHRoZW1lLCAnc2Vjb25kYXJ5Jyl9OyBcbiAgICAtLXRoZW1lLXNlY29uZGFyeS1ob3ZlcjogI3t0aGVtZV9kYXRhKCR0aGVtZSwgJ3NlY29uZGFyeS1ob3ZlcicpfTsgXG4gICAgLS10aGVtZS1zZWNvbmRhcnktcHJlc3NlZDogI3t0aGVtZV9kYXRhKCR0aGVtZSwgJ3NlY29uZGFyeS1wcmVzc2VkJyl9OyBcbiAgICAtLXRoZW1lLW9uLXByaW1hcnk6ICN7dGhlbWVfZGF0YSgkdGhlbWUsICdvbi1wcmltYXJ5Jyl9OyBcbiAgICAtLXRoZW1lLW9uLXNlY29uZGFyeTogI3t0aGVtZV9kYXRhKCR0aGVtZSwgJ29uLXNlY29uZGFyeScpfTsgXG5cbiAgICAtLXRoZW1lLWJhY2tncm91bmQ6ICN7dGhlbWVfZGF0YSgkdGhlbWUsICdiYWNrZ3JvdW5kJyl9OyBcbiAgICAtLXRoZW1lLXN1cmZhY2U6ICN7dGhlbWVfZGF0YSgkdGhlbWUsICdzdXJmYWNlJyl9OyBcbiAgICAtLXRoZW1lLW9uLWJhY2tncm91bmQ6ICN7dGhlbWVfZGF0YSgkdGhlbWUsICdvbi1iYWNrZ3JvdW5kJyl9OyBcbiAgICAtLXRoZW1lLW9uLXN1cmZhY2U6ICN7dGhlbWVfZGF0YSgkdGhlbWUsICdvbi1zdXJmYWNlJyl9OyBcblxuICAgIC0tdGhlbWUtZXJyb3I6ICN7dGhlbWVfZGF0YSgkdGhlbWUsICdlcnJvcicpfTsgXG4gICAgLS10aGVtZS1vazogI3t0aGVtZV9kYXRhKCR0aGVtZSwgJ29rJyl9OyBcbiAgICAtLXRoZW1lLXdhcm5pbmc6ICN7dGhlbWVfZGF0YSgkdGhlbWUsICd3YXJuaW5nJyl9OyBcbiAgICAtLXRoZW1lLWluZm86ICN7dGhlbWVfZGF0YSgkdGhlbWUsICdpbmZvJyl9OyBcblxuICAgIC0tdGhlbWUtb24tZXJyb3I6ICN7dGhlbWVfZGF0YSgkdGhlbWUsICdvbi1lcnJvcicpfTsgXG4gICAgLS10aGVtZS1vbi1vazogI3t0aGVtZV9kYXRhKCR0aGVtZSwgJ29uLW9rJyl9OyBcbiAgICAtLXRoZW1lLW9uLXdhcm5pbmc6ICN7dGhlbWVfZGF0YSgkdGhlbWUsICdvbi13YXJuaW5nJyl9OyBcbiAgICAtLXRoZW1lLW9uLWluZm86ICN7dGhlbWVfZGF0YSgkdGhlbWUsICdvbi1pbmZvJyl9OyBcblxuICAgIC0tdGhlbWUtaGVhZGVyLWVsZXZhdGlvbjogI3t0aGVtZV9kYXRhKCR0aGVtZSwgJ2hlYWRlci1lbGV2YXRpb24nKX07IFxuICAgIC0tdGhlbWUtY2FyZC1lbGV2YXRpb246ICN7dGhlbWVfZGF0YSgkdGhlbWUsICdjYXJkLWVsZXZhdGlvbicpfTtcbn1cblxuJHRoZW1lX3ByaW1hcnk6IHZhcigtLXRoZW1lLXByaW1hcnkpO1xuJHRoZW1lX3ByaW1hcnlfaG92ZXI6IHZhcigtLXRoZW1lLXByaW1hcnktaG92ZXIpO1xuJHRoZW1lX3ByaW1hcnlfcHJlc3NlZDogdmFyKC0tdGhlbWUtcHJpbWFyeS1wcmVzc2VkKTtcbiR0aGVtZV9vbl9wcmltYXJ5OiB2YXIoLS10aGVtZS1vbi1wcmltYXJ5KTtcblxuJHRoZW1lX2JhY2tncm91bmQ6IHZhcigtLXRoZW1lLWJhY2tncm91bmQpO1xuJHRoZW1lX3N1cmZhY2U6IHZhcigtLXRoZW1lLXN1cmZhY2UpO1xuJHRoZW1lX29uX2JhY2tncm91bmQ6IHZhcigtLXRoZW1lLW9uLWJhY2tncm91bmQpO1xuJHRoZW1lX29uX3N1cmZhY2U6IHZhcigtLXRoZW1lLW9uLXN1cmZhY2UpO1xuXG4kdGhlbWVfZXJyb3I6IHZhcigtLXRoZW1lLWVycm9yKTtcbiR0aGVtZV9vbl9lcnJvcjogdmFyKC0tdGhlbWUtb24tZXJyb3IpO1xuXG4kdGhlbWVfaGVhZGVyX2VsZXZhdGlvbjogdmFyKC0tdGhlbWUtaGVhZGVyLWVsZXZhdGlvbik7XG4kdGhlbWVfY2FyZF9lbGV2YXRpb246IHZhcigtLXRoZW1lLWNhcmQtZWxldmF0aW9uKTtcblxuJHBhZGRpbmc6IDEwcHg7XG4kYnV0dG9uX3BhZGRpbmc6ICRwYWRkaW5nIC8gMjtcbiRtYXJnaW46IDEwcHg7XG4kcm91bmRlZDogNXB4O1xuXG4kd29ya2FyZWE6IDEwMjRweDsiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss'],
            }]
    }], function () { return []; }, { showBack: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["show_back"]
        }] }); })();


/***/ }),

/***/ "gGy3":
/*!****************************************************!*\
  !*** ./src/app/color-info/color-info.component.ts ***!
  \****************************************************/
/*! exports provided: ColorInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorInfoComponent", function() { return ColorInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! color */ "aSns");
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(color__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view/view.component */ "FJD2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _color_panels_color_panels_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../color-panels/color-panels.component */ "/XVE");







function ColorInfoComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("The color ", ctx_r0.color, " is not a real color");
} }
function produce_colors(color, fn) {
    let c = color__WEBPACK_IMPORTED_MODULE_1___default()(color);
    const result = [c.hex()];
    for (let i = 1; i < 11; i++) {
        result.push(fn(c, i / 10).hex());
    }
    return result;
}
function shades(color) {
    return produce_colors(color, (c, n) => {
        return c.darken(n);
    });
}
function tint(color) {
    return produce_colors(color, (c, n) => {
        return c.whiten(n);
    });
}
class ColorInfoComponent {
    constructor(route) {
        this.route = route;
        this.shade = (color) => shades(color);
        this.tint = (color) => tint(color);
        this.complementary = (color) => [color__WEBPACK_IMPORTED_MODULE_1___default()(color).hex(), color__WEBPACK_IMPORTED_MODULE_1___default()(color).rotate(180).hex()];
        this.triadic = (color) => [color__WEBPACK_IMPORTED_MODULE_1___default()(this.color).hex(), color__WEBPACK_IMPORTED_MODULE_1___default()(this.color).rotate(120).hex(), color__WEBPACK_IMPORTED_MODULE_1___default()(this.color).rotate(240).hex()];
        this.analogous = (color) => [color__WEBPACK_IMPORTED_MODULE_1___default()(this.color).hex(), color__WEBPACK_IMPORTED_MODULE_1___default()(this.color).rotate(30).hex(), color__WEBPACK_IMPORTED_MODULE_1___default()(this.color).rotate(330).hex()];
        this.showAlert = false;
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.color = params['color'];
            const tmpColor = (() => {
                try {
                    return color__WEBPACK_IMPORTED_MODULE_1___default()(decodeURIComponent(this.color || '')).hex();
                }
                catch (_a) {
                    return null;
                }
            })();
            this.showAlert = !tmpColor;
            this.use_color = tmpColor || color__WEBPACK_IMPORTED_MODULE_1___default()("black").hex();
            if (this.showAlert) {
                setTimeout(() => this.showAlert = false, 4000);
            }
        });
    }
}
ColorInfoComponent.ɵfac = function ColorInfoComponent_Factory(t) { return new (t || ColorInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
ColorInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ColorInfoComponent, selectors: [["app-color-info"]], inputs: { color: "color" }, outputs: { showAlert: "showAlert", use_color: "use_color" }, decls: 17, vars: 14, consts: [[3, "show_back"], ["class", "error-msg", 4, "ngIf"], [3, "color", "func"], [1, "error-msg"]], template: function ColorInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-view", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ColorInfoComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Analogous Colors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-color-panel", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Triadic Colors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-color-panel", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Complementary Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-color-panel", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-color-panel", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-color-panel", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("show_back", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showAlert);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.use_color)("func", ctx.analogous);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.use_color)("func", ctx.triadic);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.use_color)("func", ctx.complementary);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Shades of ", ctx.use_color, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.use_color)("func", ctx.shade);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Tints of ", ctx.use_color, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.use_color)("func", ctx.tint);
    } }, directives: [_view_view_component__WEBPACK_IMPORTED_MODULE_3__["ViewComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _color_panels_color_panels_component__WEBPACK_IMPORTED_MODULE_5__["ColorPanelComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbG9yLWluZm8vY29sb3ItaW5mby5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ColorInfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-color-info',
                templateUrl: './color-info.component.html',
                styleUrls: ['./color-info.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, { showAlert: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], use_color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _color_info_color_info_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./color-info/color-info.component */ "gGy3");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "9vUh");






const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'info', component: _color_info_color_info_component__WEBPACK_IMPORTED_MODULE_2__["ColorInfoComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map