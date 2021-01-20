(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/J4K":
/*!***************************************************!*\
  !*** ./src/app/feedback-form/feedback.service.ts ***!
  \***************************************************/
/*! exports provided: FeedbackService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackService", function() { return FeedbackService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class FeedbackService {
    constructor(http) {
        this.http = http;
    }
    addFeedback(newFeedback) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/feedbacks', newFeedback, { headers: headers }).subscribe(newFeedback => newFeedback);
    }
    getFeedbacks() {
        return this.http.get('http://localhost:3000/feedbacks');
    }
}
FeedbackService.ɵfac = function FeedbackService_Factory(t) { return new (t || FeedbackService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
FeedbackService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FeedbackService, factory: FeedbackService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeedbackService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\maria\WebstormProjects\feedback-form\frontend\src\main.ts */"zUnb");


/***/ }),

/***/ "0pd4":
/*!************************************************************!*\
  !*** ./src/app/summary-screen/summary-screen.component.ts ***!
  \************************************************************/
/*! exports provided: SummaryScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryScreenComponent", function() { return SummaryScreenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class SummaryScreenComponent {
    constructor() { }
    ngOnInit() {
    }
}
SummaryScreenComponent.ɵfac = function SummaryScreenComponent_Factory(t) { return new (t || SummaryScreenComponent)(); };
SummaryScreenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SummaryScreenComponent, selectors: [["app-summary-screen"]], decls: 4, vars: 0, consts: [["type", "button", "routerLink", "/", 1, "btn", "btn-primary"]], template: function SummaryScreenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Thank you for your feedback!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Go back to main screen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: ["h1[_ngcontent-%COMP%] {\r\n  margin-top: 4%;\r\n  justify-content: center;\r\n  text-align: center;\r\n  font-size: 40px;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%] {\r\n  font-size: 22px;\r\n  display: block;\r\n  margin: 4% auto;\r\n}\r\n\r\n@media screen and (max-width:1024px){\r\n  h1[_ngcontent-%COMP%] {\r\n    margin-top: 8%;\r\n  }\r\n  .btn[_ngcontent-%COMP%] {\r\n    margin: 8% auto;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1bW1hcnktc2NyZWVuLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0U7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0FBQ0YiLCJmaWxlIjoic3VtbWFyeS1zY3JlZW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcclxuICBtYXJnaW4tdG9wOiA0JTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG59XHJcblxyXG4uYnRuIHtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiA0JSBhdXRvO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEwMjRweCl7XHJcbiAgaDEge1xyXG4gICAgbWFyZ2luLXRvcDogOCU7XHJcbiAgfVxyXG4gIC5idG4ge1xyXG4gICAgbWFyZ2luOiA4JSBhdXRvO1xyXG4gIH1cclxufVxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SummaryScreenComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-summary-screen',
                templateUrl: './summary-screen.component.html',
                styleUrls: ['./summary-screen.component.css']
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

/***/ "LVKA":
/*!**********************************************************!*\
  !*** ./src/app/feedback-form/feedback-form.component.ts ***!
  \**********************************************************/
/*! exports provided: FeedbackFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackFormComponent", function() { return FeedbackFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _feedback_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./feedback.service */ "/J4K");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_lite_input_star_rating__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-lite/input-star-rating */ "EtwO");








function FeedbackFormComponent_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Login is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FeedbackFormComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FeedbackFormComponent_div_10_div_1_Template, 2, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.errors.required);
} }
function FeedbackFormComponent_div_15_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FeedbackFormComponent_div_15_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Type a correct email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FeedbackFormComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FeedbackFormComponent_div_15_div_1_Template, 2, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FeedbackFormComponent_div_15_div_2_Template, 2, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.errors == null ? null : _r3.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.errors == null ? null : _r3.errors.pattern);
} }
function FeedbackFormComponent_div_20_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Title is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FeedbackFormComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FeedbackFormComponent_div_20_div_1_Template, 2, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.errors == null ? null : _r1.errors.required);
} }
function FeedbackFormComponent_div_25_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Description is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FeedbackFormComponent_div_25_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Description must be at least 20 characters long. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FeedbackFormComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FeedbackFormComponent_div_25_div_1_Template, 2, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FeedbackFormComponent_div_25_div_2_Template, 2, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r7.errors == null ? null : _r7.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r7.errors == null ? null : _r7.errors.minlength);
} }
function FeedbackFormComponent_div_31_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please rate our product. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FeedbackFormComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FeedbackFormComponent_div_31_div_1_Template, 2, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r9.errors == null ? null : _r9.errors.required);
} }
class FeedbackFormComponent {
    constructor(feedbackService, router) {
        this.feedbackService = feedbackService;
        this.router = router;
        this.submitted = false;
    }
    ngOnInit() {
    }
    addFeedback(form) {
        this.submitted = true;
        if (form.invalid) {
            return;
        }
        const newFeedback = {
            login: this.login,
            email: this.email,
            rating: this.rating,
            title: this.title,
            description: this.description
        };
        this.feedbackService.addFeedback(newFeedback);
        this.router.navigate(['/summary']);
    }
}
FeedbackFormComponent.ɵfac = function FeedbackFormComponent_Factory(t) { return new (t || FeedbackFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_feedback_service__WEBPACK_IMPORTED_MODULE_1__["FeedbackService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
FeedbackFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FeedbackFormComponent, selectors: [["app-feedback-form"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_feedback_service__WEBPACK_IMPORTED_MODULE_1__["FeedbackService"]])], decls: 35, vars: 10, consts: [[1, "container"], [3, "submit"], ["postForm", "ngForm"], [1, "form-group"], ["type", "text", "name", "login", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["login_", "ngModel"], ["class", "alert alert-info", 4, "ngIf"], ["type", "email", "name", "email", "pattern", "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["email_", "ngModel"], ["type", "text", "name", "title", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["title_", "ngModel"], ["name", "description", "rows", "5", "minlength", "20", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["description_", "ngModel"], ["name", "rating", "required", "", 3, "ngModel", "ngModelChange"], ["rating_", "ngModel"], [1, "buttons"], ["type", "submit", "routerLink", "/", "value", "Return", 1, "btn", "btn", "btn-primary"], ["type", "submit", "value", "Add", 1, "btn", "btn", "btn-primary"], [1, "alert", "alert-info"], [4, "ngIf"]], template: function FeedbackFormComponent_Template(rf, ctx) { if (rf & 1) {
        const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Share your feedback");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function FeedbackFormComponent_Template_form_submit_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); return ctx.addFeedback(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Login:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FeedbackFormComponent_Template_input_ngModelChange_8_listener($event) { return ctx.login = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, FeedbackFormComponent_div_10_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FeedbackFormComponent_Template_input_ngModelChange_13_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, FeedbackFormComponent_div_15_Template, 3, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Title:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FeedbackFormComponent_Template_input_ngModelChange_18_listener($event) { return ctx.title = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, FeedbackFormComponent_div_20_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Description:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "textarea", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FeedbackFormComponent_Template_textarea_ngModelChange_23_listener($event) { return ctx.description = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, FeedbackFormComponent_div_25_Template, 3, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Rating:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ngx-input-star-rating", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FeedbackFormComponent_Template_ngx_input_star_rating_ngModelChange_29_listener($event) { return ctx.rating = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, FeedbackFormComponent_div_31_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.login);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.invalid && ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.invalid && ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.invalid && ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r7.invalid && ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.rating);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r9.invalid && ctx.submitted);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MinLengthValidator"], _ngx_lite_input_star_rating__WEBPACK_IMPORTED_MODULE_5__["NgxInputStarRatingComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: ["h1[_ngcontent-%COMP%] {\r\n  margin-top: 4%;\r\n  justify-content: center;\r\n  text-align: center;\r\n  font-size: 35px;\r\n}\r\n\r\ninput[_ngcontent-%COMP%], label[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\r\n  font-size: 20px;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  margin-top: 4%;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%] {\r\n  font-size: 22px;\r\n  width: 40%;\r\n  margin-right: 10%;\r\n}\r\n\r\n.buttons[_ngcontent-%COMP%] {\r\n  margin: auto;\r\n  width: 50%;\r\n  justify-content: space-between;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZlZWRiYWNrLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixVQUFVO0VBQ1YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7RUFDViw4QkFBOEI7QUFDaEMiLCJmaWxlIjoiZmVlZGJhY2stZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xyXG4gIG1hcmdpbi10b3A6IDQlO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDM1cHg7XHJcbn1cclxuXHJcbmlucHV0LCBsYWJlbCwgdGV4dGFyZWEge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDogNCU7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICB3aWR0aDogNDAlO1xyXG4gIG1hcmdpbi1yaWdodDogMTAlO1xyXG59XHJcblxyXG4uYnV0dG9ucyB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeedbackFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-feedback-form',
                templateUrl: './feedback-form.component.html',
                styleUrls: ['./feedback-form.component.css'],
                providers: [_feedback_service__WEBPACK_IMPORTED_MODULE_1__["FeedbackService"]]
            }]
    }], function () { return [{ type: _feedback_service__WEBPACK_IMPORTED_MODULE_1__["FeedbackService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "RPPq":
/*!**************************************************************!*\
  !*** ./src/app/starting-screen/starting-screen.component.ts ***!
  \**************************************************************/
/*! exports provided: StartingScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartingScreenComponent", function() { return StartingScreenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class StartingScreenComponent {
    constructor() { }
    ngOnInit() {
    }
}
StartingScreenComponent.ɵfac = function StartingScreenComponent_Factory(t) { return new (t || StartingScreenComponent)(); };
StartingScreenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StartingScreenComponent, selectors: [["app-starting-screen"]], decls: 6, vars: 0, consts: [["type", "button", "routerLink", "/form", 1, "btn", "btn-primary"], ["type", "button", "routerLink", "/feedbacks", 1, "btn", "btn-primary"]], template: function StartingScreenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Welcome to our app!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Send us your feedback");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Check feedbacks of other users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: ["h1[_ngcontent-%COMP%] {\r\n  margin-top: 4%;\r\n  justify-content: center;\r\n  text-align: center;\r\n  font-size: 40px;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%] {\r\n  font-size: 22px;\r\n  display: block;\r\n  margin: 4% auto;\r\n}\r\n\r\n@media screen and (max-width:1024px){\r\n  h1[_ngcontent-%COMP%] {\r\n    margin-top: 8%;\r\n  }\r\n  .btn[_ngcontent-%COMP%] {\r\n    margin: 8% auto;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXJ0aW5nLXNjcmVlbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFO0lBQ0UsY0FBYztFQUNoQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtBQUNGIiwiZmlsZSI6InN0YXJ0aW5nLXNjcmVlbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xyXG4gIG1hcmdpbi10b3A6IDQlO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW46IDQlIGF1dG87XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTAyNHB4KXtcclxuICBoMSB7XHJcbiAgICBtYXJnaW4tdG9wOiA4JTtcclxuICB9XHJcbiAgLmJ0biB7XHJcbiAgICBtYXJnaW46IDglIGF1dG87XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StartingScreenComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-starting-screen',
                templateUrl: './starting-screen.component.html',
                styleUrls: ['./starting-screen.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "S6vw":
/*!************************************************************!*\
  !*** ./src/app/feedbacks-list/feedbacks-list.component.ts ***!
  \************************************************************/
/*! exports provided: FeedbacksListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbacksListComponent", function() { return FeedbacksListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _feedback_form_feedback_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../feedback-form/feedback.service */ "/J4K");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngx_lite_input_star_rating__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-lite/input-star-rating */ "EtwO");







function FeedbacksListComponent_mat_expansion_panel_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Rating: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "ngx-input-star-rating", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const feedback_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](feedback_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](feedback_r1.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", feedback_r1.login, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](feedback_r1.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", feedback_r1.rating);
} }
class FeedbacksListComponent {
    constructor(feedbackService) {
        this.feedbackService = feedbackService;
    }
    ngOnInit() {
        this.getFeedbacks();
    }
    parseDates(feedbacks) {
        feedbacks.forEach((feedback) => {
            let index = feedback.date.indexOf('T');
            feedback.date = feedback.date.substring(0, index);
        });
    }
    getFeedbacks() {
        this.feedbackService.getFeedbacks().subscribe((feedbacks) => {
            this.parseDates(feedbacks);
            this.feedbacks = feedbacks;
        });
    }
}
FeedbacksListComponent.ɵfac = function FeedbacksListComponent_Factory(t) { return new (t || FeedbacksListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_feedback_form_feedback_service__WEBPACK_IMPORTED_MODULE_1__["FeedbackService"])); };
FeedbacksListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FeedbacksListComponent, selectors: [["app-feedbacks-list"]], decls: 7, vars: 1, consts: [[1, "feedbacks"], ["multi", "true"], [4, "ngFor", "ngForOf"], ["type", "button", "routerLink", "/", 1, "btn", "btn-primary"], ["id", "date"], ["name", "rating", 3, "value"]], template: function FeedbacksListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "User feedbacks:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-accordion", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FeedbacksListComponent_mat_expansion_panel_4_Template, 13, 5, "mat-expansion-panel", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Return to main screen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.feedbacks);
    } }, directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatAccordion"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelHeader"], _ngx_lite_input_star_rating__WEBPACK_IMPORTED_MODULE_5__["NgxInputStarRatingComponent"]], styles: ["h1[_ngcontent-%COMP%] {\r\n  margin-top: 4%;\r\n  justify-content: center;\r\n  text-align: center;\r\n  font-size: 35px;\r\n}\r\n.feedbacks[_ngcontent-%COMP%] {\r\n  margin: 4% auto;\r\n  width: 50%\r\n}\r\nmat-expansion-panel[_ngcontent-%COMP%] {\r\n  font-size: 25px;\r\n  color: #2c3233;\r\n  background-color: silver;\r\n}\r\n#date[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  left: 75%;\r\n}\r\n.btn[_ngcontent-%COMP%] {\r\n  font-size: 22px;\r\n  display: block;\r\n  margin: auto;\r\n}\r\n@media screen and (max-width:1024px){\r\n  #date[_ngcontent-%COMP%] {\r\n    left: 70%;\r\n  }\r\n}\r\n@media screen and (max-width:768px){\r\n  #date[_ngcontent-%COMP%] {\r\n    left: 60%;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZlZWRiYWNrcy1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxlQUFlO0VBQ2Y7QUFDRjtBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCx3QkFBd0I7QUFDMUI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0FBQ1g7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsWUFBWTtBQUNkO0FBRUE7RUFDRTtJQUNFLFNBQVM7RUFDWDtBQUNGO0FBRUE7RUFDRTtJQUNFLFNBQVM7RUFDWDtBQUNGIiwiZmlsZSI6ImZlZWRiYWNrcy1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XHJcbiAgbWFyZ2luLXRvcDogNCU7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMzVweDtcclxufVxyXG4uZmVlZGJhY2tzIHtcclxuICBtYXJnaW46IDQlIGF1dG87XHJcbiAgd2lkdGg6IDUwJVxyXG59XHJcblxyXG5tYXQtZXhwYW5zaW9uLXBhbmVsIHtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgY29sb3I6ICMyYzMyMzM7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogc2lsdmVyO1xyXG59XHJcblxyXG4jZGF0ZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDc1JTtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMDI0cHgpe1xyXG4gICNkYXRlIHtcclxuICAgIGxlZnQ6IDcwJTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY4cHgpe1xyXG4gICNkYXRlIHtcclxuICAgIGxlZnQ6IDYwJTtcclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeedbacksListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-feedbacks-list',
                templateUrl: './feedbacks-list.component.html',
                styleUrls: ['./feedbacks-list.component.css']
            }]
    }], function () { return [{ type: _feedback_form_feedback_service__WEBPACK_IMPORTED_MODULE_1__["FeedbackService"] }]; }, null); })();


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
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _feedback_form_feedback_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./feedback-form/feedback-form.component */ "LVKA");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngx_lite_input_star_rating__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-lite/input-star-rating */ "EtwO");
/* harmony import */ var _feedbacks_list_feedbacks_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./feedbacks-list/feedbacks-list.component */ "S6vw");
/* harmony import */ var _starting_screen_starting_screen_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./starting-screen/starting-screen.component */ "RPPq");
/* harmony import */ var _summary_screen_summary_screen_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./summary-screen/summary-screen.component */ "0pd4");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");














class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _ngx_lite_input_star_rating__WEBPACK_IMPORTED_MODULE_7__["NgxInputStarRatingModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__["MatExpansionModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _feedback_form_feedback_form_component__WEBPACK_IMPORTED_MODULE_4__["FeedbackFormComponent"],
        _feedbacks_list_feedbacks_list_component__WEBPACK_IMPORTED_MODULE_8__["FeedbacksListComponent"],
        _starting_screen_starting_screen_component__WEBPACK_IMPORTED_MODULE_9__["StartingScreenComponent"],
        _summary_screen_summary_screen_component__WEBPACK_IMPORTED_MODULE_10__["SummaryScreenComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
        _ngx_lite_input_star_rating__WEBPACK_IMPORTED_MODULE_7__["NgxInputStarRatingModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__["MatExpansionModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _feedback_form_feedback_form_component__WEBPACK_IMPORTED_MODULE_4__["FeedbackFormComponent"],
                    _feedbacks_list_feedbacks_list_component__WEBPACK_IMPORTED_MODULE_8__["FeedbacksListComponent"],
                    _starting_screen_starting_screen_component__WEBPACK_IMPORTED_MODULE_9__["StartingScreenComponent"],
                    _summary_screen_summary_screen_component__WEBPACK_IMPORTED_MODULE_10__["SummaryScreenComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                    _ngx_lite_input_star_rating__WEBPACK_IMPORTED_MODULE_7__["NgxInputStarRatingModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__["MatExpansionModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _feedbacks_list_feedbacks_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./feedbacks-list/feedbacks-list.component */ "S6vw");
/* harmony import */ var _feedback_form_feedback_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./feedback-form/feedback-form.component */ "LVKA");
/* harmony import */ var _starting_screen_starting_screen_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./starting-screen/starting-screen.component */ "RPPq");
/* harmony import */ var _summary_screen_summary_screen_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./summary-screen/summary-screen.component */ "0pd4");








const routes = [{ path: '', component: _starting_screen_starting_screen_component__WEBPACK_IMPORTED_MODULE_4__["StartingScreenComponent"] }, { path: 'form', component: _feedback_form_feedback_form_component__WEBPACK_IMPORTED_MODULE_3__["FeedbackFormComponent"] }, { path: 'summary', component: _summary_screen_summary_screen_component__WEBPACK_IMPORTED_MODULE_5__["SummaryScreenComponent"] },
    { path: 'feedbacks', component: _feedbacks_list_feedbacks_list_component__WEBPACK_IMPORTED_MODULE_2__["FeedbacksListComponent"] }];
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