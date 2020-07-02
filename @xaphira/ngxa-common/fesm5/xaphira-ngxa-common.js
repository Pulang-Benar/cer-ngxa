import { __spread, __read, __extends } from 'tslib';
import { NgModule, Component, Input, ViewEncapsulation, EventEmitter, Output, Directive, ElementRef, HostListener, forwardRef, Attribute, Injectable, HostBinding, Optional, Self, Inject, LOCALE_ID, ChangeDetectorRef, Injector, ViewChild, ContentChild, TemplateRef, ChangeDetectionStrategy, ContentChildren } from '@angular/core';
import { FormsModule, NgControl, NG_VALIDATORS, Validators, ReactiveFormsModule, NG_VALUE_ACCESSOR, FormGroup, FormBuilder } from '@angular/forms';
import { CommonModule, formatDate } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxEchartsModule } from 'ngx-echarts';
import { ChartModule } from 'angular2-chartjs';
import { NbGlobalPhysicalPosition, NbToastrService, NbCardModule, NbIconModule, NbSelectModule, NbCheckboxModule, NbInputModule, NbRadioModule, NbButtonModule, NbCalendarSize, NbDateService, NbDatepickerModule } from '@nebular/theme';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { Router } from '@angular/router';
import 'style-loader!angular2-toaster/toaster.css';
import { DateFormat, DatePattern } from '@xaphira/utils';
import { CKEditorModule } from 'ng2-ckeditor';
import { Environment, ENVIRONMENT, HTTP_SERVICE, HttpMethod, API } from '@xaphira/shared';
import { AgmCoreModule } from '@agm/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { latLng, tileLayer, marker, icon } from 'leaflet';
import 'style-loader!leaflet/dist/leaflet.css';
import { delay, switchMap, map, catchError, take, takeUntil, tap } from 'rxjs/operators';
import { NgSelectModule } from '@ng-select/ng-select';
import { Subject, of, ReplaySubject } from 'rxjs';
import { SortType, SelectionType, ColumnMode, NgxDatatableModule } from '@swimlane/ngx-datatable';
import { LayoutService } from '@xaphira/ngxa-theme';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { NbDateFnsDateModule } from '@nebular/date-fns';
import { NbMomentDateModule } from '@nebular/moment';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var components = [];
var NgxaCalendarModule = /** @class */ (function () {
    function NgxaCalendarModule() {
    }
    NgxaCalendarModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        FormsModule,
                    ],
                    declarations: __spread(components),
                    exports: __spread(components),
                },] }
    ];
    return NgxaCalendarModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxaChartComponent = /** @class */ (function () {
    function NgxaChartComponent() {
        this.options = {};
    }
    Object.defineProperty(NgxaChartComponent.prototype, "optionsFn", {
        set: /**
         * @param {?} options
         * @return {?}
         */
        function (options) {
            this.options = options;
        },
        enumerable: true,
        configurable: true
    });
    NgxaChartComponent.decorators = [
        { type: Component, args: [{
                    selector: 'xa-chart',
                    template: "<div echarts [options]=\"options\" class=\"echart\"></div>",
                    styles: [".nb-theme-default :host xa-chart{display:block;height:28.875rem;width:100%}.nb-theme-default :host ::ng-deep .echart{height:100%;width:100%}.nb-theme-dark :host xa-chart{display:block;height:28.875rem;width:100%}.nb-theme-dark :host ::ng-deep .echart{height:100%;width:100%}.nb-theme-cosmic :host xa-chart{display:block;height:28.875rem;width:100%}.nb-theme-cosmic :host ::ng-deep .echart{height:100%;width:100%}.nb-theme-corporate :host xa-chart{display:block;height:28.875rem;width:100%}.nb-theme-corporate :host ::ng-deep .echart{height:100%;width:100%}"]
                }] }
    ];
    NgxaChartComponent.propDecorators = {
        optionsFn: [{ type: Input }],
        options: [{ type: Input }]
    };
    return NgxaChartComponent;
}());
if (false) {
    /** @type {?} */
    NgxaChartComponent.prototype.options;
    /** @type {?} */
    NgxaChartComponent.prototype.data;
    /** @type {?} */
    NgxaChartComponent.prototype.type;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var components$1 = [
    NgxaChartComponent,
];
var NgxaChartsModule = /** @class */ (function () {
    function NgxaChartsModule() {
    }
    NgxaChartsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        NgxChartsModule,
                        ChartModule,
                        NgxEchartsModule,
                    ],
                    declarations: __spread(components$1),
                    exports: __spread(components$1),
                },] }
    ];
    return NgxaChartsModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxaErrorMessageComponent = /** @class */ (function () {
    function NgxaErrorMessageComponent() {
        this.hasErrors = false;
        this.errorMessages = [];
    }
    NgxaErrorMessageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'xa-error-message',
                    template: "<div *ngIf=\"hasErrors\">\n  <div *ngFor=\"let message of errorMessages\">\n    <span class=\"caption status-danger\">{{message | translate:param}}</span>\n  </div>\n</div>",
                    encapsulation: ViewEncapsulation.None,
                    styles: [""]
                }] }
    ];
    NgxaErrorMessageComponent.propDecorators = {
        hasErrors: [{ type: Input }],
        errorMessages: [{ type: Input }],
        param: [{ type: Input }]
    };
    return NgxaErrorMessageComponent;
}());
if (false) {
    /** @type {?} */
    NgxaErrorMessageComponent.prototype.hasErrors;
    /** @type {?} */
    NgxaErrorMessageComponent.prototype.errorMessages;
    /** @type {?} */
    NgxaErrorMessageComponent.prototype.param;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxaPageOutletComponent = /** @class */ (function () {
    function NgxaPageOutletComponent(router) {
        this.router = router;
        this.width = 12;
        this.selectChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    NgxaPageOutletComponent.prototype.back = /**
     * @return {?}
     */
    function () {
        this.router.navigate([this.url]);
        return false;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NgxaPageOutletComponent.prototype.onChangeSelect = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.selected = event;
        this.selectChange.emit(event);
    };
    NgxaPageOutletComponent.decorators = [
        { type: Component, args: [{
                    selector: 'xa-page-outlet',
                    template: "<div class=\"row\">\n  <div class=\"col-lg-{{width}}\">\n    <nb-card>\n      <nb-card-header>\n        <nav class=\"navigation\">\n            <a href=\"#\" (click)=\"back()\" class=\"link back-link\" aria-label=\"Back\" *ngIf=\"url\">\n                <nb-icon icon=\"arrow-back\"></nb-icon>\n            </a>\n            {{header | translate}}\n        </nav>\n        <nb-select *ngIf=\"dataSelect\" [selected]=\"selected\" (selectedChange)=\"onChangeSelect($event)\">\n          <nb-option *ngFor=\"let data of dataSelect\" [value]=\"data\">{{ data }}</nb-option>\n        </nb-select>\n      </nb-card-header>\n      <nb-card-body>\n        <ng-content #pagecontent></ng-content>        \n      </nb-card-body>\n    </nb-card>\n  </div>\n</div>\n    ",
                    encapsulation: ViewEncapsulation.None,
                    styles: ["/*!\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */nb-card-header{display:flex;align-items:center;justify-content:space-between;padding-top:.5rem;padding-bottom:.5rem}.skeleton{-webkit-animation:1.7s linear infinite loading;animation:1.7s linear infinite loading;border-radius:.25rem;background:#dedfe1;background-image:linear-gradient(to right,#dedfe1 0,#f2f3f5 20%,#dedfe1 40%,#dedfe1 100%)}@-webkit-keyframes loading{0%{background-position:-100px}100%{background-position:380px}}@keyframes loading{0%{background-position:-100px}100%{background-position:380px}}.navigation .link{display:inline-block}.navigation .link nb-icon{color:#36f;font-size:1.25rem;vertical-align:middle;margin-right:.25rem}.input-skeleton,.label-skeleton{width:100%;height:2.5rem;line-height:1.5rem;padding:.4375rem 1.125rem}.button-skeleton{width:50%;height:2.5rem;line-height:1rem;padding:.625rem 1.125rem}"]
                }] }
    ];
    /** @nocollapse */
    NgxaPageOutletComponent.ctorParameters = function () { return [
        { type: Router }
    ]; };
    NgxaPageOutletComponent.propDecorators = {
        header: [{ type: Input }],
        url: [{ type: Input }],
        width: [{ type: Input }],
        dataSelect: [{ type: Input }],
        selected: [{ type: Input }],
        selectChange: [{ type: Output }]
    };
    return NgxaPageOutletComponent;
}());
if (false) {
    /** @type {?} */
    NgxaPageOutletComponent.prototype.header;
    /** @type {?} */
    NgxaPageOutletComponent.prototype.url;
    /** @type {?} */
    NgxaPageOutletComponent.prototype.width;
    /** @type {?} */
    NgxaPageOutletComponent.prototype.dataSelect;
    /** @type {?} */
    NgxaPageOutletComponent.prototype.selected;
    /** @type {?} */
    NgxaPageOutletComponent.prototype.selectChange;
    /**
     * @type {?}
     * @private
     */
    NgxaPageOutletComponent.prototype.router;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxaContainerOutletComponent = /** @class */ (function () {
    function NgxaContainerOutletComponent() {
        this.label = '';
        this.colLabel = 3;
        this.colContent = 9;
        this.nolabel = false;
        this.required = false;
        this.hasErrors = false;
        this.errorMessages = [];
        this.skeleton = false;
    }
    NgxaContainerOutletComponent.decorators = [
        { type: Component, args: [{
                    selector: 'xa-container-outlet',
                    template: "<div class=\"form-group row\">\n  <label\n    *ngIf=\"(!skeleton || nolabel);else labelskeleton\"\n    for=\"{{name}}\"\n    class=\"label col-sm-{{colLabel}} col-form-label\">\n    {{label | translate}}{{ (!nolabel) ? ((required) ? ' *' : '') : '' }}\n  </label>\n  <ng-template #labelskeleton>\n    <div class=\"col-sm-{{colLabel}}\">\n      <label\n        class=\"label col-form-label\"\n        [ngClass]=\"{\n          'label-skeleton': true,\n          'skeleton': skeleton\n        }\">\n      </label>\n    </div>\n  </ng-template>\n  <ng-content></ng-content>\n  <div class=\"offset-sm-{{colLabel}} col-sm-{{colContent}}\">\n    <xa-error-message [hasErrors]=\"hasErrors\" [errorMessages]=\"errorMessages\" [param]=\"paramError\">\n    </xa-error-message>\n  </div>\n</div>",
                    encapsulation: ViewEncapsulation.None,
                    styles: [""]
                }] }
    ];
    NgxaContainerOutletComponent.propDecorators = {
        name: [{ type: Input }],
        label: [{ type: Input }],
        colLabel: [{ type: Input }],
        colContent: [{ type: Input }],
        nolabel: [{ type: Input }],
        required: [{ type: Input }],
        hasErrors: [{ type: Input }],
        errorMessages: [{ type: Input }],
        paramError: [{ type: Input }],
        skeleton: [{ type: Input }]
    };
    return NgxaContainerOutletComponent;
}());
if (false) {
    /** @type {?} */
    NgxaContainerOutletComponent.prototype.name;
    /** @type {?} */
    NgxaContainerOutletComponent.prototype.label;
    /** @type {?} */
    NgxaContainerOutletComponent.prototype.colLabel;
    /** @type {?} */
    NgxaContainerOutletComponent.prototype.colContent;
    /** @type {?} */
    NgxaContainerOutletComponent.prototype.nolabel;
    /** @type {?} */
    NgxaContainerOutletComponent.prototype.required;
    /** @type {?} */
    NgxaContainerOutletComponent.prototype.hasErrors;
    /** @type {?} */
    NgxaContainerOutletComponent.prototype.errorMessages;
    /** @type {?} */
    NgxaContainerOutletComponent.prototype.paramError;
    /** @type {?} */
    NgxaContainerOutletComponent.prototype.skeleton;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CurrencyMaskDirective = /** @class */ (function () {
    function CurrencyMaskDirective(ngControl, el) {
        this.ngControl = ngControl;
        this.el = el;
        this.prefix = 'Rp';
        this.decimalSeparator = '.';
        this.thousandsSeparator = ',';
        this.suffix = ',-';
        this.padding = 5;
    }
    /**
     * @param {?} value
     * @param {?} event
     * @return {?}
     */
    CurrencyMaskDirective.prototype.onFocus = /**
     * @param {?} value
     * @param {?} event
     * @return {?}
     */
    function (value, event) {
        value = value ? value : this.prefix.concat(' ');
        value = this.onLeave(value.replace(this.suffix, ''));
        event.target.toNumber = this.toNumber(value);
        this.ngControl.valueAccessor.writeValue(value);
    };
    /**
     * @param {?} value
     * @param {?} event
     * @return {?}
     */
    CurrencyMaskDirective.prototype.onBlur = /**
     * @param {?} value
     * @param {?} event
     * @return {?}
     */
    function (value, event) {
        value = value.replace(/\D/g, '') ? this.onLeave(value).concat(this.suffix) : '';
        event.target.toNumber = this.toNumber(value);
        this.ngControl.valueAccessor.writeValue(value);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CurrencyMaskDirective.prototype.onModelChange = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        value = this.toNumber(value);
        value = value.replace(new RegExp('[^0-9|^' + this.decimalSeparator + '|^-]', 'g'), '');
        if (value.toString().match(new RegExp('^\-?[0-9]*(' + this.decimalSeparator + '[0-9]*)?$', 'g'))) {
            var _a = this.onInputChange(value), val = _a.val, frac = _a.frac;
            if (value.toString().match(new RegExp('^\-?[0-9]*$', 'g'))) {
                val = (!isNaN(parseInt(val, 10)) && val !== '-0') ? parseInt(val, 10).toString() : val;
                value = this.onTransform(val, frac);
                this.value = this.prefix.concat(' ').concat(value);
            }
            if (value.toString().match(new RegExp('^(\-?[0-9])*[' + this.decimalSeparator + '][0-9]*$', 'g')) &&
                !value.toString().startsWith(this.decimalSeparator, 0)) {
                frac = frac.substring(0, this.padding);
                frac = this.decimalSeparator.concat(frac);
                value = this.onTransform(val, frac);
                this.value = this.prefix.concat(' ').concat(value);
            }
            this.el.nativeElement.toNumber = this.toNumber(this.prefix.concat(' ').concat(this.onTransform(val, (parseInt(frac.replace(this.decimalSeparator, ''), 10) > 0) ?
                this.pad(frac, this.padding + 1).substring(0, this.padding + 1) :
                '')));
        }
        this.ngControl.valueAccessor.writeValue(this.value);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    CurrencyMaskDirective.prototype.onKeyDown = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if ([46, 8, 9, 27, 13, 110, 190, 189].indexOf(e.keyCode) !== -1 ||
            (e.keyCode === 65 && e.ctrlKey === true) || // Allow: Ctrl+A
            (e.keyCode === 67 && e.ctrlKey === true) || // Allow: Ctrl+C
            (e.keyCode === 86 && e.ctrlKey === true) || // Allow: Ctrl+V
            (e.keyCode === 88 && e.ctrlKey === true) || // Allow: Ctrl+X
            (e.keyCode === 65 && e.metaKey === true) || // Cmd+A (Mac)
            (e.keyCode === 67 && e.metaKey === true) || // Cmd+C (Mac)
            (e.keyCode === 86 && e.metaKey === true) || // Cmd+V (Mac)
            (e.keyCode === 88 && e.metaKey === true) || // Cmd+X (Mac)
            (e.keyCode >= 35 && e.keyCode <= 39) // Home, End, Left, Right
        ) {
            return; // let it happen, don't do anything
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CurrencyMaskDirective.prototype.onLeave = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _a = this.onInputChange(value), val = _a.val, frac = _a.frac;
        /** @type {?} */
        var fraction = '';
        if (frac) {
            if (parseInt(frac, 10) > 0) {
                fraction = this.decimalSeparator + this.pad(frac, this.padding).substring(0, this.padding);
            }
        }
        return this.onTransform(val, fraction);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CurrencyMaskDirective.prototype.onInputChange = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _a = __read((value || '').split(this.decimalSeparator), 2), _b = _a[0], val = _b === void 0 ? '' : _b, _c = _a[1], fraction = _c === void 0 ? '' : _c;
        return { val: val, frac: fraction };
    };
    /**
     * @param {?} val
     * @param {?} fraction
     * @return {?}
     */
    CurrencyMaskDirective.prototype.onTransform = /**
     * @param {?} val
     * @param {?} fraction
     * @return {?}
     */
    function (val, fraction) {
        val = val.replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandsSeparator);
        return val + fraction;
    };
    /**
     * @param {?} val
     * @return {?}
     */
    CurrencyMaskDirective.prototype.toNumber = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        return val
            .replace(this.prefix, '')
            .replace(' ', '')
            .replace(this.suffix, '')
            .replace(new RegExp(this.thousandsSeparator, 'g'), '');
    };
    /**
     * @private
     * @param {?} val
     * @param {?} size
     * @return {?}
     */
    CurrencyMaskDirective.prototype.pad = /**
     * @private
     * @param {?} val
     * @param {?} size
     * @return {?}
     */
    function (val, size) {
        while (val.length < size)
            val = val + '0';
        return val;
    };
    CurrencyMaskDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'input[xaCurrency]',
                },] }
    ];
    /** @nocollapse */
    CurrencyMaskDirective.ctorParameters = function () { return [
        { type: NgControl },
        { type: ElementRef }
    ]; };
    CurrencyMaskDirective.propDecorators = {
        prefix: [{ type: Input, args: ['prefix',] }],
        decimalSeparator: [{ type: Input, args: ['decimal',] }],
        thousandsSeparator: [{ type: Input, args: ['thousand',] }],
        suffix: [{ type: Input, args: ['suffix',] }],
        padding: [{ type: Input, args: ['padding',] }],
        onFocus: [{ type: HostListener, args: ['focus', ['$event.target.value', '$event'],] }],
        onBlur: [{ type: HostListener, args: ['blur', ['$event.target.value', '$event'],] }],
        onModelChange: [{ type: HostListener, args: ['ngModelChange', ['$event'],] }],
        onKeyDown: [{ type: HostListener, args: ['keydown', ['$event'],] }]
    };
    return CurrencyMaskDirective;
}());
if (false) {
    /** @type {?} */
    CurrencyMaskDirective.prototype.prefix;
    /** @type {?} */
    CurrencyMaskDirective.prototype.decimalSeparator;
    /** @type {?} */
    CurrencyMaskDirective.prototype.thousandsSeparator;
    /** @type {?} */
    CurrencyMaskDirective.prototype.suffix;
    /** @type {?} */
    CurrencyMaskDirective.prototype.padding;
    /**
     * @type {?}
     * @private
     */
    CurrencyMaskDirective.prototype.value;
    /**
     * @type {?}
     * @private
     */
    CurrencyMaskDirective.prototype.ngControl;
    /**
     * @type {?}
     * @private
     */
    CurrencyMaskDirective.prototype.el;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var EqualValidator = /** @class */ (function () {
    function EqualValidator(validateEqual) {
        this.validateEqual = validateEqual;
    }
    /**
     * @param {?} c
     * @return {?}
     */
    EqualValidator.prototype.validate = /**
     * @param {?} c
     * @return {?}
     */
    function (c) {
        /** @type {?} */
        var v = c.value;
        /** @type {?} */
        var e = c.root.get(this.validateEqual);
        if (e && v !== e.value && v) {
            return { equal: false };
        }
        return null;
    };
    EqualValidator.decorators = [
        { type: Directive, args: [{
                    selector: '[xaValidateEqual][formControlName],[xaValidateEqual][formControl],[xaValidateEqual][ngModel]',
                    providers: [
                        { provide: NG_VALIDATORS, useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return EqualValidator; })), multi: true },
                    ],
                },] }
    ];
    /** @nocollapse */
    EqualValidator.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Attribute, args: ['xaValidateEqual',] }] }
    ]; };
    return EqualValidator;
}());
if (false) {
    /** @type {?} */
    EqualValidator.prototype.validateEqual;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NotEqualValidator = /** @class */ (function () {
    function NotEqualValidator(validateNotEqual) {
        this.validateNotEqual = validateNotEqual;
    }
    /**
     * @param {?} c
     * @return {?}
     */
    NotEqualValidator.prototype.validate = /**
     * @param {?} c
     * @return {?}
     */
    function (c) {
        /** @type {?} */
        var v = c.value;
        /** @type {?} */
        var e = c.root.get(this.validateNotEqual);
        if (e && v === e.value && v) {
            return { equal: true };
        }
        return null;
    };
    NotEqualValidator.decorators = [
        { type: Directive, args: [{
                    selector: '[xaValidateNotEqual][formControlName],[xaValidateNotEqual][formControl],[xaValidateNotEqual][ngModel]',
                    providers: [
                        { provide: NG_VALIDATORS, useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return NotEqualValidator; })), multi: true },
                    ],
                },] }
    ];
    /** @nocollapse */
    NotEqualValidator.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Attribute, args: ['xaValidateNotEqual',] }] }
    ]; };
    return NotEqualValidator;
}());
if (false) {
    /** @type {?} */
    NotEqualValidator.prototype.validateNotEqual;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxaToastrService = /** @class */ (function () {
    function NgxaToastrService(toastrService, translate) {
        this.toastrService = toastrService;
        this.translate = translate;
        this.status = 'success';
        this.position = NbGlobalPhysicalPosition.TOP_RIGHT;
        this.duration = 5000;
        this.hasIcon = true;
        this.destroyByClick = true;
        this.preventDuplicates = false;
    }
    /**
     * @param {?} content
     * @param {?=} title
     * @param {?=} status
     * @param {?=} position
     * @param {?=} duration
     * @param {?=} hasIcon
     * @param {?=} destroyByClick
     * @return {?}
     */
    NgxaToastrService.prototype.show = /**
     * @param {?} content
     * @param {?=} title
     * @param {?=} status
     * @param {?=} position
     * @param {?=} duration
     * @param {?=} hasIcon
     * @param {?=} destroyByClick
     * @return {?}
     */
    function (content, title, status, position, duration, hasIcon, destroyByClick) {
        if (!title)
            title = this.title(status);
        this.build(content, title, status, position, duration, hasIcon, destroyByClick);
    };
    /**
     * @param {?} content
     * @param {?=} contentHasI18n
     * @param {?=} title
     * @param {?=} status
     * @param {?=} position
     * @param {?=} duration
     * @param {?=} hasIcon
     * @param {?=} destroyByClick
     * @return {?}
     */
    NgxaToastrService.prototype.showI18n = /**
     * @param {?} content
     * @param {?=} contentHasI18n
     * @param {?=} title
     * @param {?=} status
     * @param {?=} position
     * @param {?=} duration
     * @param {?=} hasIcon
     * @param {?=} destroyByClick
     * @return {?}
     */
    function (content, contentHasI18n, title, status, position, duration, hasIcon, destroyByClick) {
        var _this = this;
        if (!title)
            title = this.title(status);
        this.translate.get(title).subscribe((/**
         * @param {?} resultTitle
         * @return {?}
         */
        function (resultTitle) {
            title = resultTitle;
            if (contentHasI18n) {
                _this.build(content, title, status, position, duration, hasIcon, destroyByClick);
            }
            else {
                _this.translate.get(content).subscribe((/**
                 * @param {?} resultContent
                 * @return {?}
                 */
                function (resultContent) {
                    _this.build(resultContent, title, status, position, duration, hasIcon, destroyByClick);
                }));
            }
        }));
    };
    /**
     * @private
     * @param {?} content
     * @param {?} title
     * @param {?} status
     * @param {?} position
     * @param {?} duration
     * @param {?} hasIcon
     * @param {?} destroyByClick
     * @return {?}
     */
    NgxaToastrService.prototype.build = /**
     * @private
     * @param {?} content
     * @param {?} title
     * @param {?} status
     * @param {?} position
     * @param {?} duration
     * @param {?} hasIcon
     * @param {?} destroyByClick
     * @return {?}
     */
    function (content, title, status, position, duration, hasIcon, destroyByClick) {
        this.toastrService.show(content, title, {
            status: status ? status : this.status,
            position: position ? position : this.position,
            duration: duration ? duration : this.duration,
            hasIcon: hasIcon ? hasIcon : this.hasIcon,
            destroyByClick: destroyByClick ? destroyByClick : this.destroyByClick,
            preventDuplicates: this.preventDuplicates,
        });
    };
    /**
     * @private
     * @param {?} status
     * @return {?}
     */
    NgxaToastrService.prototype.title = /**
     * @private
     * @param {?} status
     * @return {?}
     */
    function (status) {
        /** @type {?} */
        var title = 'Success';
        switch (status) {
            case 'primary':
                title = 'Notification';
                break;
            case 'warning':
                title = 'Warning';
                break;
            case 'danger':
                title = 'Failure';
                break;
            case 'info':
                title = 'Information';
                break;
            default:
                break;
        }
        return title;
    };
    NgxaToastrService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    NgxaToastrService.ctorParameters = function () { return [
        { type: NbToastrService },
        { type: TranslateService }
    ]; };
    return NgxaToastrService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    NgxaToastrService.prototype.status;
    /**
     * @type {?}
     * @private
     */
    NgxaToastrService.prototype.position;
    /**
     * @type {?}
     * @private
     */
    NgxaToastrService.prototype.duration;
    /**
     * @type {?}
     * @private
     */
    NgxaToastrService.prototype.hasIcon;
    /**
     * @type {?}
     * @private
     */
    NgxaToastrService.prototype.destroyByClick;
    /**
     * @type {?}
     * @private
     */
    NgxaToastrService.prototype.preventDuplicates;
    /**
     * @type {?}
     * @private
     */
    NgxaToastrService.prototype.toastrService;
    /**
     * @type {?}
     * @private
     */
    NgxaToastrService.prototype.translate;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var components$2 = [];
/** @type {?} */
var TOASTR_PROVIDERS = [
    NgxaToastrService,
];
var NgxaToastrModule = /** @class */ (function () {
    function NgxaToastrModule() {
    }
    /**
     * @return {?}
     */
    NgxaToastrModule.forRoot = /**
     * @return {?}
     */
    function () {
        return (/** @type {?} */ ({
            ngModule: NgxaToastrModule,
            providers: __spread(TOASTR_PROVIDERS),
        }));
    };
    NgxaToastrModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        FormsModule,
                    ],
                    declarations: __spread(components$2),
                    exports: __spread(components$2),
                },] }
    ];
    return NgxaToastrModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DragDropDirective = /** @class */ (function () {
    function DragDropDirective() {
        this.onFileDropped = new EventEmitter();
        this.opacity = '0.7';
        this.background = '#f7f9fc';
        this.styleOpacity = '0.7';
    }
    /**
     * @param {?} evt
     * @return {?}
     */
    DragDropDirective.prototype.onDragOver = /**
     * @param {?} evt
     * @return {?}
     */
    function (evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = '#edf1f7';
        this.styleOpacity = '0.5';
        this.opacity = this.styleOpacity;
    };
    /**
     * @param {?} evt
     * @return {?}
     */
    DragDropDirective.prototype.onDragLeave = /**
     * @param {?} evt
     * @return {?}
     */
    function (evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = '#f7f9fc';
        this.styleOpacity = '0.7';
        this.opacity = this.styleOpacity;
    };
    /**
     * @param {?} evt
     * @return {?}
     */
    DragDropDirective.prototype.ondrop = /**
     * @param {?} evt
     * @return {?}
     */
    function (evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = '#f7f9fc';
        this.styleOpacity = '0.7';
        this.opacity = this.styleOpacity;
        /** @type {?} */
        var files = evt.dataTransfer.files;
        if (files.length > 0) {
            this.onFileDropped.emit(files);
        }
    };
    /**
     * @param {?} evt
     * @return {?}
     */
    DragDropDirective.prototype.onMouseOver = /**
     * @param {?} evt
     * @return {?}
     */
    function (evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = '#f7f9fc';
        this.styleOpacity = '0.5';
        this.opacity = this.styleOpacity;
    };
    /**
     * @param {?} evt
     * @return {?}
     */
    DragDropDirective.prototype.onMouseLeave = /**
     * @param {?} evt
     * @return {?}
     */
    function (evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = '#f7f9fc';
        this.styleOpacity = '0.7';
        this.opacity = this.styleOpacity;
    };
    DragDropDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[xaDragDrop]',
                },] }
    ];
    DragDropDirective.propDecorators = {
        onFileDropped: [{ type: Output }],
        opacity: [{ type: Input }],
        background: [{ type: HostBinding, args: ['style.background-color',] }],
        styleOpacity: [{ type: HostBinding, args: ['style.opacity',] }],
        onDragOver: [{ type: HostListener, args: ['dragover', ['$event'],] }],
        onDragLeave: [{ type: HostListener, args: ['dragleave', ['$event'],] }],
        ondrop: [{ type: HostListener, args: ['drop', ['$event'],] }],
        onMouseOver: [{ type: HostListener, args: ['mouseover', ['$event'],] }],
        onMouseLeave: [{ type: HostListener, args: ['mouseleave', ['$event'],] }]
    };
    return DragDropDirective;
}());
if (false) {
    /** @type {?} */
    DragDropDirective.prototype.onFileDropped;
    /** @type {?} */
    DragDropDirective.prototype.opacity;
    /** @type {?} */
    DragDropDirective.prototype.background;
    /** @type {?} */
    DragDropDirective.prototype.styleOpacity;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var components$3 = [
    NgxaPageOutletComponent,
    NgxaContainerOutletComponent,
    NgxaErrorMessageComponent,
];
/** @type {?} */
var directives = [
    CurrencyMaskDirective,
    EqualValidator,
    NotEqualValidator,
    DragDropDirective,
];
var NgxaBaseModule = /** @class */ (function () {
    function NgxaBaseModule() {
    }
    NgxaBaseModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        TranslateModule,
                        NbCardModule,
                        NbIconModule,
                        NbSelectModule,
                        NgxaToastrModule.forRoot(),
                    ],
                    declarations: __spread(components$3, directives),
                    exports: __spread(components$3, directives, [
                        TranslateModule,
                    ]),
                },] }
    ];
    return NgxaBaseModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var NgxaValidatorAccessor = /** @class */ (function () {
    function NgxaValidatorAccessor(ngControl) {
        this.ngControl = ngControl;
        this.label = '';
        this.nolabel = false;
        this.disabled = false;
        this.required = false;
        this.onChange = (/**
         * @param {?} _
         * @return {?}
         */
        function (_) { });
        this.onTouched = (/**
         * @param {?=} _
         * @return {?}
         */
        function (_) { });
        ngControl && (ngControl.valueAccessor = this);
    }
    /**
     * @protected
     * @return {?}
     */
    NgxaValidatorAccessor.prototype.onInit = /**
     * @protected
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    NgxaValidatorAccessor.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.onInit();
        /** @type {?} */
        var control = this.ngControl.control;
        /** @type {?} */
        var validators = control.validator ? [control.validator] : [];
        if (this.ngControl.control.errors) {
            this.required = this.ngControl.control.errors['required'];
        }
        if (this.required) {
            validators.push(Validators.required);
        }
        if (this.pattern) {
            validators.push(Validators.pattern(this.pattern));
        }
        control.setValidators(validators);
        control.updateValueAndValidity();
    };
    /**
     * @param {?} c
     * @return {?}
     */
    NgxaValidatorAccessor.prototype.validate = /**
     * @param {?} c
     * @return {?}
     */
    function (c) {
        /** @type {?} */
        var validators = [];
        if (this.required) {
            validators.push(Validators.required);
        }
        if (this.pattern) {
            validators.push(Validators.pattern(this.pattern));
        }
        return validators;
    };
    Object.defineProperty(NgxaValidatorAccessor.prototype, "hasErrors", {
        get: /**
         * @return {?}
         */
        function () {
            return (!this.disabled &&
                this.ngControl.control &&
                this.ngControl.control.invalid &&
                this.ngControl.touched);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxaValidatorAccessor.prototype, "hasSuccess", {
        get: /**
         * @return {?}
         */
        function () {
            return (!this.disabled &&
                this.ngControl.control &&
                this.ngControl.control.valid &&
                this.ngControl.touched);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxaValidatorAccessor.prototype, "errorMessages", {
        get: /**
         * @return {?}
         */
        function () {
            var _this = this;
            /** @type {?} */
            var errors = [];
            if (this.ngControl.errors)
                Object.keys(this.ngControl.errors).forEach((/**
                 * @param {?} property
                 * @return {?}
                 */
                function (property) {
                    switch (property) {
                        case 'required':
                            errors.push('error.required');
                            break;
                        case 'email':
                            errors.push('error.pattern.email');
                            break;
                        case 'minlength':
                            errors.push('error.minlength');
                            break;
                        default:
                            errors.push('error.'.concat(property).concat('.').concat(_this.name));
                            break;
                    }
                }));
            return errors;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} fn
     * @return {?}
     */
    NgxaValidatorAccessor.prototype.registerOnValidatorChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    NgxaValidatorAccessor.propDecorators = {
        name: [{ type: Input }],
        pattern: [{ type: Input }],
        label: [{ type: Input }],
        nolabel: [{ type: Input }],
        disabled: [{ type: Input }],
        required: [{ type: Input }],
        paramError: [{ type: Input }]
    };
    return NgxaValidatorAccessor;
}());
if (false) {
    /** @type {?} */
    NgxaValidatorAccessor.prototype.name;
    /** @type {?} */
    NgxaValidatorAccessor.prototype.pattern;
    /** @type {?} */
    NgxaValidatorAccessor.prototype.label;
    /** @type {?} */
    NgxaValidatorAccessor.prototype.nolabel;
    /** @type {?} */
    NgxaValidatorAccessor.prototype.disabled;
    /** @type {?} */
    NgxaValidatorAccessor.prototype.required;
    /** @type {?} */
    NgxaValidatorAccessor.prototype.paramError;
    /** @type {?} */
    NgxaValidatorAccessor.prototype.onChange;
    /** @type {?} */
    NgxaValidatorAccessor.prototype.onTouched;
    /**
     * @type {?}
     * @protected
     */
    NgxaValidatorAccessor.prototype.ngControl;
    /**
     * @abstract
     * @param {?} obj
     * @return {?}
     */
    NgxaValidatorAccessor.prototype.writeValue = function (obj) { };
    /**
     * @abstract
     * @param {?} fn
     * @return {?}
     */
    NgxaValidatorAccessor.prototype.registerOnChange = function (fn) { };
    /**
     * @abstract
     * @param {?} fn
     * @return {?}
     */
    NgxaValidatorAccessor.prototype.registerOnTouched = function (fn) { };
    /**
     * @abstract
     * @param {?} isDisabled
     * @return {?}
     */
    NgxaValidatorAccessor.prototype.setDisabledState = function (isDisabled) { };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template T
 */
var NgxaValueAccessor = /** @class */ (function (_super) {
    __extends(NgxaValueAccessor, _super);
    function NgxaValueAccessor(ngControl, locale) {
        var _this = _super.call(this, ngControl) || this;
        _this.ngControl = ngControl;
        _this.locale = locale;
        _this.format = DateFormat.DATE;
        _this.skeleton = false;
        return _this;
    }
    Object.defineProperty(NgxaValueAccessor.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () { return this._value; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this._value !== value) {
                this._value = value;
                if (value instanceof Date)
                    this.onChange(formatDate(value, this.format, this.locale));
                else
                    this.onChange(value);
                /** @type {?} */
                var control = this.ngControl.control;
                if (control) {
                    control.updateValueAndValidity();
                    control.markAsTouched();
                    control.markAsDirty();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    NgxaValueAccessor.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._value = value;
        this.onChange(this.value);
        /** @type {?} */
        var control = this.ngControl.control;
        if (control) {
            control.updateValueAndValidity();
            control.markAsUntouched();
            control.markAsPristine();
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NgxaValueAccessor.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) { this.onChange = fn; };
    /**
     * @param {?} fn
     * @return {?}
     */
    NgxaValueAccessor.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) { this.onTouched = fn; };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    NgxaValueAccessor.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) { this.disabled = isDisabled; };
    NgxaValueAccessor.propDecorators = {
        format: [{ type: Input }],
        skeleton: [{ type: Input }]
    };
    return NgxaValueAccessor;
}(NgxaValidatorAccessor));
if (false) {
    /** @type {?} */
    NgxaValueAccessor.prototype.format;
    /** @type {?} */
    NgxaValueAccessor.prototype.skeleton;
    /**
     * @type {?}
     * @protected
     */
    NgxaValueAccessor.prototype._value;
    /** @type {?} */
    NgxaValueAccessor.prototype.defaultValue;
    /** @type {?} */
    NgxaValueAccessor.prototype.ngControl;
    /** @type {?} */
    NgxaValueAccessor.prototype.locale;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxaCheckboxComponent = /** @class */ (function (_super) {
    __extends(NgxaCheckboxComponent, _super);
    function NgxaCheckboxComponent(ngControl, locale) {
        var _this = _super.call(this, ngControl, locale) || this;
        _this.locale = locale;
        _this.colLabel = 3;
        _this.colInput = 9;
        _this.onChecked = new EventEmitter();
        return _this;
    }
    /**
     * @return {?}
     */
    NgxaCheckboxComponent.prototype.onCheckedChange = /**
     * @return {?}
     */
    function () {
        if (!this.value) {
            this.value = this.data;
        }
        if (Array.isArray(this.value).valueOf()) {
            /** @type {?} */
            var isChecked_1 = false;
            Array.from(this.value).forEach((/**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                if (value.selected) {
                    isChecked_1 = value.selected;
                }
            }));
            if (this.required) {
                if (!isChecked_1) {
                    this.ngControl.control.setErrors({
                        'required': true,
                    });
                }
                else {
                    this.ngControl.control.setErrors(null);
                }
            }
            this.ngControl.control.markAsTouched();
            this.ngControl.control.markAsDirty();
        }
        this.onChecked.emit(this.value);
    };
    NgxaCheckboxComponent.decorators = [
        { type: Component, args: [{
                    selector: 'xa-checkbox',
                    template: "<xa-container-outlet\n  [name]=\"name\" [label]=\"label\"\n  [colLabel]=\"colLabel\" [colContent]=\"colInput\"\n  [required]=\"required\" [hasErrors]=\"hasErrors\"\n  [errorMessages]=\"errorMessages\" [paramError]=\"paramError\"\n  [skeleton]=\"skeleton\">\n  <div class=\"col-sm-{{colInput}}\" *ngIf=\"!skeleton; else contentskeleton\">\n    <nb-checkbox\n      [ngClass]=\"{\n        'status-danger': hasErrors\n      }\"\n      *ngFor=\"let item of (value || data)\"\n      [disabled]=\"item.disabled || disabled\"\n      [checked]=\"item.selected\"\n      [(ngModel)]=\"item.selected\"\n      (change)=\"onCheckedChange()\">\n      {{item.name | translate}}\n    </nb-checkbox>\n  </div>\n  <ng-template #contentskeleton>\n    <div class=\"col-sm-{{colInput}}\">\n      <div\n        [ngClass]=\"{\n          'input-skeleton': true,\n          'skeleton': skeleton\n        }\">\n      </div>\n    </div>\n  </ng-template>\n</xa-container-outlet>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    NgxaCheckboxComponent.ctorParameters = function () { return [
        { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
        { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
    ]; };
    NgxaCheckboxComponent.propDecorators = {
        colLabel: [{ type: Input }],
        colInput: [{ type: Input }],
        data: [{ type: Input }],
        onChecked: [{ type: Output }]
    };
    return NgxaCheckboxComponent;
}(NgxaValueAccessor));
if (false) {
    /** @type {?} */
    NgxaCheckboxComponent.prototype.colLabel;
    /** @type {?} */
    NgxaCheckboxComponent.prototype.colInput;
    /** @type {?} */
    NgxaCheckboxComponent.prototype.data;
    /** @type {?} */
    NgxaCheckboxComponent.prototype.onChecked;
    /** @type {?} */
    NgxaCheckboxComponent.prototype.locale;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var components$4 = [
    NgxaCheckboxComponent,
];
var NgxaCheckBoxModule = /** @class */ (function () {
    function NgxaCheckBoxModule() {
    }
    NgxaCheckBoxModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        NbCheckboxModule,
                        TranslateModule,
                        NgxaBaseModule,
                    ],
                    declarations: __spread(components$4),
                    exports: __spread(components$4, [
                        NbCheckboxModule,
                    ]),
                },] }
    ];
    return NgxaCheckBoxModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TinyMCEComponent = /** @class */ (function (_super) {
    __extends(TinyMCEComponent, _super);
    function TinyMCEComponent(ngControl, locale, element) {
        var _this = _super.call(this, ngControl, locale) || this;
        _this.locale = locale;
        _this.element = element;
        _this.colLabel = 3;
        _this.colInput = 9;
        _this.plugins = ['link', 'paste', 'table'];
        _this.height = 320;
        return _this;
    }
    /**
     * @param {?} element
     * @return {?}
     */
    TinyMCEComponent.prototype.editorChange = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        if (!element) {
            element = this.element.nativeElement;
            element = element.getElementsByClassName('mce-edit-area').item(0);
        }
        if (this.ngControl.invalid) {
            if (!element.getAttribute('class').endsWith('status-danger'))
                element.setAttribute('class', element.getAttribute('class').concat(' status-danger'));
            this.ngControl.control.markAsTouched();
        }
        else {
            if (element.getAttribute('class').endsWith('status-danger')) {
                element.setAttribute('class', element.getAttribute('class').replace('status-danger', ''));
            }
        }
    };
    TinyMCEComponent.decorators = [
        { type: Component, args: [{
                    selector: 'xa-tiny-mce',
                    template: "<xa-container-outlet\n  [name]=\"name\" [label]=\"label\"\n  [colLabel]=\"colLabel\" [colContent]=\"colInput\"\n  [required]=\"required\" [hasErrors]=\"hasErrors\"\n  [errorMessages]=\"errorMessages\" [paramError]=\"paramError\"\n  [skeleton]=\"skeleton\">\n  <div class=\"col-sm-{{colInput}}\" *ngIf=\"!skeleton; else contentskeleton\">\n    <xa-mce-core\n      [name]=\"name\"\n      [required]=\"required\"\n      [readonly]=\"disabled\"\n      [plugins]=\"plugins\"\n      [height]=\"height\"\n      [value]=\"value\"\n      [(ngModel)]=\"value\"\n      (change)=\"onChange($event)\"\n      (focus)=\"onTouched($event)\"\n      (editorchange)=\"editorChange($event.target.contentAreaContainer)\"\n      (focus)=\"editorChange($event.target.contentAreaContainer)\"\n      (blur)=\"editorChange($event.target.contentAreaContainer)\">\n    </xa-mce-core>\n  </div>\n  <ng-template #contentskeleton>\n    <div class=\"col-sm-{{colInput}}\">\n      <div\n        [ngClass]=\"{\n          'skeleton': skeleton\n        }\"\n        [ngStyle]=\"{ \n          'width':  '100%',\n          'height':  height + 'px'\n        }\">\n      </div>\n    </div>\n  </ng-template>\n</xa-container-outlet>",
                    encapsulation: ViewEncapsulation.None,
                    styles: [".mce-edit-area.status-danger{border:1px solid #ff3d71!important;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 0 3px #fde6e8}"]
                }] }
    ];
    /** @nocollapse */
    TinyMCEComponent.ctorParameters = function () { return [
        { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
        { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] },
        { type: ElementRef }
    ]; };
    TinyMCEComponent.propDecorators = {
        placeholder: [{ type: Input }],
        colLabel: [{ type: Input }],
        colInput: [{ type: Input }],
        plugins: [{ type: Input }],
        height: [{ type: Input }]
    };
    return TinyMCEComponent;
}(NgxaValueAccessor));
if (false) {
    /** @type {?} */
    TinyMCEComponent.prototype.placeholder;
    /** @type {?} */
    TinyMCEComponent.prototype.colLabel;
    /** @type {?} */
    TinyMCEComponent.prototype.colInput;
    /** @type {?} */
    TinyMCEComponent.prototype.plugins;
    /** @type {?} */
    TinyMCEComponent.prototype.height;
    /** @type {?} */
    TinyMCEComponent.prototype.locale;
    /**
     * @type {?}
     * @private
     */
    TinyMCEComponent.prototype.element;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CaldeiraKnabbenEditorComponent = /** @class */ (function (_super) {
    __extends(CaldeiraKnabbenEditorComponent, _super);
    function CaldeiraKnabbenEditorComponent(ngControl, locale) {
        var _this = _super.call(this, ngControl, locale) || this;
        _this.locale = locale;
        _this.colLabel = 3;
        _this.colInput = 9;
        _this.minLength = 0;
        _this.maxLength = 100;
        _this.height = 320;
        _this.config = {
            skin: 'bootstrapck',
            height: _this.height,
            allowedContent: false,
            forcePasteAsPlainText: true,
            font_names: 'Open Sans;sans-serif;Arial;Times New Roman;Verdana',
            toolbarGroups: [
                { name: 'document', groups: ['mode', 'document', 'doctools'] },
                { name: 'clipboard', groups: ['clipboard', 'undo'] },
                { name: 'editing', groups: ['find', 'selection', 'spellchecker', 'editing'] },
                { name: 'forms', groups: ['forms'] },
                '/',
                { name: 'basicstyles', groups: ['basicstyles', 'cleanup'] },
                { name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi', 'paragraph'] },
                { name: 'links', groups: ['links'] },
                { name: 'insert', groups: ['insert'] },
                '/',
                { name: 'styles', groups: ['styles'] },
                { name: 'colors', groups: ['colors'] },
                { name: 'tools', groups: ['tools'] },
                { name: 'others', groups: ['others'] },
                { name: 'about', groups: ['about'] },
            ],
            removeButtons: "Source,Save,NewPage,Preview,Print,Templates,Cut,Copy,Paste,\n                    PasteText,PasteFromWord,Undo,Redo,Find,Replace,SelectAll,Scayt,\n                    Form,Checkbox,Radio,TextField,Textarea,Select,Button,ImageButton,\n                    HiddenField,Strike,Subscript,Superscript,CopyFormatting,RemoveFormat,\n                    Outdent,Indent,CreateDiv,Blockquote,BidiLtr,BidiRtl,Language,Unlink,\n                    Anchor,Image,Flash,Table,HorizontalRule,Smiley,SpecialChar,PageBreak,\n                    Iframe,Maximize,ShowBlocks,About",
        };
        return _this;
    }
    /**
     * @param {?} element
     * @return {?}
     */
    CaldeiraKnabbenEditorComponent.prototype.editorChange = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        if (element) {
            if (this.ngControl.invalid) {
                if (!element.getAttribute('class').endsWith('status-danger'))
                    element.setAttribute('class', element.getAttribute('class').concat(' status-danger'));
                this.ngControl.control.markAsTouched();
            }
            else {
                if (element.getAttribute('class').endsWith('status-danger')) {
                    element.setAttribute('class', element.getAttribute('class').replace('status-danger', ''));
                }
            }
        }
    };
    /**
     * @return {?}
     */
    CaldeiraKnabbenEditorComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () { };
    CaldeiraKnabbenEditorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'xa-ckeditor',
                    template: "<xa-container-outlet\n  [name]=\"name\" [label]=\"label\"\n  [colLabel]=\"colLabel\" [colContent]=\"colInput\"\n  [required]=\"required\" [hasErrors]=\"hasErrors\"\n  [errorMessages]=\"errorMessages\" [paramError]=\"paramError\"\n  [skeleton]=\"skeleton\">\n  <div class=\"col-sm-{{colInput}}\" *ngIf=\"!skeleton; else contentskeleton\">\n    <ckeditor\n        [config]=\"config\"\n        [readonly]=\"disabled\"\n        [required]=\"required\"\n        [(ngModel)]=\"value\"\n        (change)=\"onChange($event)\"\n        (blur)=\"onTouched($event)\"\n        (blur)=\"editorChange($event.editor.ui.contentsElement)\"\n        (focus)=\"editorChange($event.editor.ui.contentsElement)\"\n        (editorChange)=\"editorChange($event.editor.ui.contentsElement)\">\n    </ckeditor>\n  </div>\n  <ng-template #contentskeleton>\n    <div class=\"col-sm-{{colInput}}\">\n      <div\n        [ngClass]=\"{\n          'skeleton': skeleton\n        }\"\n        [ngStyle]=\"{ \n          'width':  '100%',\n          'height':  height + 'px'\n        }\">\n      </div>\n    </div>\n  </ng-template>\n</xa-container-outlet>",
                    encapsulation: ViewEncapsulation.None,
                    styles: [".cke_contents.status-danger{border:1px solid #ff3d71!important;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 0 3px #fde6e8}"]
                }] }
    ];
    /** @nocollapse */
    CaldeiraKnabbenEditorComponent.ctorParameters = function () { return [
        { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
        { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
    ]; };
    CaldeiraKnabbenEditorComponent.propDecorators = {
        placeholder: [{ type: Input }],
        colLabel: [{ type: Input }],
        colInput: [{ type: Input }],
        minLength: [{ type: Input }],
        maxLength: [{ type: Input }],
        height: [{ type: Input }],
        config: [{ type: Input }]
    };
    return CaldeiraKnabbenEditorComponent;
}(NgxaValueAccessor));
if (false) {
    /** @type {?} */
    CaldeiraKnabbenEditorComponent.prototype.placeholder;
    /** @type {?} */
    CaldeiraKnabbenEditorComponent.prototype.colLabel;
    /** @type {?} */
    CaldeiraKnabbenEditorComponent.prototype.colInput;
    /** @type {?} */
    CaldeiraKnabbenEditorComponent.prototype.minLength;
    /** @type {?} */
    CaldeiraKnabbenEditorComponent.prototype.maxLength;
    /** @type {?} */
    CaldeiraKnabbenEditorComponent.prototype.height;
    /** @type {?} */
    CaldeiraKnabbenEditorComponent.prototype.config;
    /** @type {?} */
    CaldeiraKnabbenEditorComponent.prototype.locale;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MCECoreComponent = /** @class */ (function () {
    function MCECoreComponent(host, envi) {
        this.host = host;
        this.envi = envi;
        this.plugins = ['link', 'paste', 'table'];
        this.height = 320;
        this.readonly = false;
        this.change = new EventEmitter();
        this.editorchange = new EventEmitter();
        this.focus = new EventEmitter();
        this.blur = new EventEmitter();
        this.onChange = (/**
         * @param {?} _
         * @return {?}
         */
        function (_) { });
        this.onTouched = (/**
         * @param {?=} _
         * @return {?}
         */
        function (_) { });
    }
    /**
     * @return {?}
     */
    MCECoreComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        tinymce.init({
            target: this.host.nativeElement,
            plugins: this.plugins,
            skin_url: document.getElementsByTagName('base')[0].href + "assets/skins/lightgray",
            setup: (/**
             * @param {?} editor
             * @return {?}
             */
            function (editor) {
                _this.editor = editor;
                editor.on('keyup', (/**
                 * @param {?} event
                 * @return {?}
                 */
                function (event) {
                    _this.value = editor.getContent();
                    _this.change.emit(_this.value);
                    _this.editorchange.emit(event);
                }));
                editor.on('focus', (/**
                 * @param {?} event
                 * @return {?}
                 */
                function (event) {
                    _this.focus.emit(event);
                }));
                editor.on('blur', (/**
                 * @param {?} event
                 * @return {?}
                 */
                function (event) {
                    _this.blur.emit(event);
                }));
            }),
            init_instance_callback: (/**
             * @param {?} editor
             * @return {?}
             */
            function (editor) {
                editor && _this.value && _this.editor.setContent(_this.value);
            }),
            height: this.height,
            readonly: this.readonly,
        });
    };
    /**
     * @return {?}
     */
    MCECoreComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        tinymce.remove(this.editor);
    };
    Object.defineProperty(MCECoreComponent.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () { return this._value; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this._value !== value) {
                this._value = value;
                this.onChange(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    MCECoreComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value) {
            this._value = value;
            this.onChange(this.value);
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    MCECoreComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) { this.onChange = fn; };
    /**
     * @param {?} fn
     * @return {?}
     */
    MCECoreComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) { this.onTouched = fn; };
    MCECoreComponent.decorators = [
        { type: Component, args: [{
                    selector: 'xa-mce-core',
                    template: '',
                    encapsulation: ViewEncapsulation.None,
                    providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return MCECoreComponent; })),
                            multi: true,
                        }]
                }] }
    ];
    /** @nocollapse */
    MCECoreComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Environment, decorators: [{ type: Inject, args: [ENVIRONMENT,] }] }
    ]; };
    MCECoreComponent.propDecorators = {
        plugins: [{ type: Input }],
        height: [{ type: Input }],
        readonly: [{ type: Input }],
        _value: [{ type: Input, args: ['value',] }],
        change: [{ type: Output }],
        editorchange: [{ type: Output }],
        focus: [{ type: Output }],
        blur: [{ type: Output }]
    };
    return MCECoreComponent;
}());
if (false) {
    /** @type {?} */
    MCECoreComponent.prototype.plugins;
    /** @type {?} */
    MCECoreComponent.prototype.height;
    /** @type {?} */
    MCECoreComponent.prototype.readonly;
    /** @type {?} */
    MCECoreComponent.prototype._value;
    /** @type {?} */
    MCECoreComponent.prototype.change;
    /** @type {?} */
    MCECoreComponent.prototype.editorchange;
    /** @type {?} */
    MCECoreComponent.prototype.focus;
    /** @type {?} */
    MCECoreComponent.prototype.blur;
    /** @type {?} */
    MCECoreComponent.prototype.onChange;
    /** @type {?} */
    MCECoreComponent.prototype.onTouched;
    /** @type {?} */
    MCECoreComponent.prototype.editor;
    /**
     * @type {?}
     * @private
     */
    MCECoreComponent.prototype.host;
    /** @type {?} */
    MCECoreComponent.prototype.envi;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxaTextareaComponent = /** @class */ (function (_super) {
    __extends(NgxaTextareaComponent, _super);
    function NgxaTextareaComponent(ngControl, locale) {
        var _this = _super.call(this, ngControl, locale) || this;
        _this.locale = locale;
        _this.colLabel = 3;
        _this.colInput = 9;
        _this.minLength = 0;
        _this.maxLength = 250;
        _this.height = 120;
        return _this;
    }
    /**
     * @return {?}
     */
    NgxaTextareaComponent.prototype.onInit = /**
     * @return {?}
     */
    function () {
        this.paramError = {
            value: this.minLength,
        };
    };
    /**
     * @return {?}
     */
    NgxaTextareaComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () { };
    NgxaTextareaComponent.decorators = [
        { type: Component, args: [{
                    selector: 'xa-textarea',
                    template: "<xa-container-outlet\n  [name]=\"name\" [label]=\"label\"\n  [colLabel]=\"colLabel\" [colContent]=\"colInput\"\n  [required]=\"required\" [hasErrors]=\"hasErrors\"\n  [errorMessages]=\"errorMessages\" [paramError]=\"paramError\"\n  [skeleton]=\"skeleton\">\n  <div class=\"col-sm-{{colInput}}\" *ngIf=\"!skeleton; else contentskeleton\">\n    <textarea \n      id=\"{{name}}\"\n      [minLength]=\"minLength\"\n      [maxLength]=\"maxLength\"\n      [required]=\"required\"\n      [placeholder]=\"placeholder ? (placeholder | translate) : ''\"\n      [disabled]=\"disabled\"\n      [ngClass]=\"{\n        'status-danger': hasErrors,\n        'status-success': hasSuccess\n      }\"\n      [ngStyle]=\"{ \n        'width':  '100%',\n        'height':  height + 'px'\n      }\"\n      (input)=\"onChange($event.target.value)\"\n      (change)=\"onChange($event.target.value)\"\n      (blur)=\"onTouched($event.target.value)\"\n      (focus)=\"onTouched($event.target.value)\"\n      [(ngModel)]=\"value\"\n      nbInput fullWidth>\n    </textarea>\n  </div>\n  <ng-template #contentskeleton>\n    <div class=\"col-sm-{{colInput}}\">\n      <div\n        [ngClass]=\"{\n          'skeleton': skeleton\n        }\"\n        [ngStyle]=\"{ \n          'width':  '100%',\n          'height':  height + 'px'\n        }\">\n      </div>\n    </div>\n  </ng-template>\n</xa-container-outlet>",
                    encapsulation: ViewEncapsulation.None,
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    NgxaTextareaComponent.ctorParameters = function () { return [
        { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
        { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
    ]; };
    NgxaTextareaComponent.propDecorators = {
        placeholder: [{ type: Input }],
        colLabel: [{ type: Input }],
        colInput: [{ type: Input }],
        minLength: [{ type: Input }],
        maxLength: [{ type: Input }],
        height: [{ type: Input }]
    };
    return NgxaTextareaComponent;
}(NgxaValueAccessor));
if (false) {
    /** @type {?} */
    NgxaTextareaComponent.prototype.placeholder;
    /** @type {?} */
    NgxaTextareaComponent.prototype.colLabel;
    /** @type {?} */
    NgxaTextareaComponent.prototype.colInput;
    /** @type {?} */
    NgxaTextareaComponent.prototype.minLength;
    /** @type {?} */
    NgxaTextareaComponent.prototype.maxLength;
    /** @type {?} */
    NgxaTextareaComponent.prototype.height;
    /** @type {?} */
    NgxaTextareaComponent.prototype.locale;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var components$5 = [
    MCECoreComponent,
    TinyMCEComponent,
    CaldeiraKnabbenEditorComponent,
    NgxaTextareaComponent,
];
var NgxaEditorModule = /** @class */ (function () {
    function NgxaEditorModule() {
    }
    NgxaEditorModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        CKEditorModule,
                        TranslateModule,
                        NbInputModule,
                        NgxaBaseModule,
                    ],
                    declarations: __spread(components$5),
                    exports: __spread(components$5),
                },] }
    ];
    return NgxaEditorModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxaInputTextComponent = /** @class */ (function (_super) {
    __extends(NgxaInputTextComponent, _super);
    function NgxaInputTextComponent(ngControl, locale) {
        var _this = _super.call(this, ngControl, locale) || this;
        _this.locale = locale;
        _this.colLabel = 3;
        _this.colInput = 9;
        _this.minLength = 0;
        _this.maxLength = 100;
        _this.type = 'text';
        return _this;
    }
    NgxaInputTextComponent.decorators = [
        { type: Component, args: [{
                    selector: 'xa-input-text',
                    template: "<xa-container-outlet\n  [name]=\"name\" [label]=\"label\" [nolabel]=\"nolabel\" \n  [colLabel]=\"colLabel\" [colContent]=\"colInput\"\n  [required]=\"required\" [hasErrors]=\"hasErrors\"\n  [errorMessages]=\"errorMessages\" [paramError]=\"paramError\"\n  [skeleton]=\"skeleton\">\n  <div class=\"col-sm-{{colInput}}\" *ngIf=\"!skeleton; else contentskeleton\">\n    <input\n      type=\"{{type}}\"\n      id=\"{{name}}\"\n      [pattern]=\"pattern\"\n      [minLength]=\"minLength\"\n      [maxLength]=\"maxLength\"\n      [placeholder]=\"placeholder ? (placeholder | translate) : ''\"\n      [required]=\"required\"\n      [disabled]=\"disabled\"\n      [ngClass]=\"{\n        'status-danger': hasErrors,\n        'status-success': (hasSuccess && required)\n      }\"\n      (input)=\"onChange($event.target.value)\"\n      (change)=\"onChange($event.target.value)\"\n      (blur)=\"onTouched($event.target.value)\"\n      (focus)=\"onTouched($event.target.value)\"\n      [(ngModel)]=\"value\"\n      #input nbInput fullWidth>\n  </div>\n  <ng-template #contentskeleton>\n    <div class=\"col-sm-{{colInput}}\">\n      <div\n        [ngClass]=\"{\n          'input-skeleton': true,\n          'skeleton': skeleton\n        }\">\n      </div>\n    </div>\n  </ng-template>\n</xa-container-outlet>",
                    encapsulation: ViewEncapsulation.None,
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    NgxaInputTextComponent.ctorParameters = function () { return [
        { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
        { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
    ]; };
    NgxaInputTextComponent.propDecorators = {
        placeholder: [{ type: Input }],
        colLabel: [{ type: Input }],
        colInput: [{ type: Input }],
        minLength: [{ type: Input }],
        maxLength: [{ type: Input }],
        type: [{ type: Input }]
    };
    return NgxaInputTextComponent;
}(NgxaValueAccessor));
if (false) {
    /** @type {?} */
    NgxaInputTextComponent.prototype.placeholder;
    /** @type {?} */
    NgxaInputTextComponent.prototype.colLabel;
    /** @type {?} */
    NgxaInputTextComponent.prototype.colInput;
    /** @type {?} */
    NgxaInputTextComponent.prototype.minLength;
    /** @type {?} */
    NgxaInputTextComponent.prototype.maxLength;
    /** @type {?} */
    NgxaInputTextComponent.prototype.type;
    /** @type {?} */
    NgxaInputTextComponent.prototype.locale;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxaInputCurrencyComponent = /** @class */ (function (_super) {
    __extends(NgxaInputCurrencyComponent, _super);
    function NgxaInputCurrencyComponent(ngControl, locale) {
        var _this = _super.call(this, ngControl, locale) || this;
        _this.locale = locale;
        _this.colLabel = 3;
        _this.colInput = 9;
        _this.minLength = 0;
        _this.maxLength = 100;
        _this.prefix = 'Rp';
        _this.decimalSeparator = '.';
        _this.thousandsSeparator = ',';
        _this.suffix = ',-';
        _this.padding = 5;
        return _this;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    NgxaInputCurrencyComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._value = value ? this.transform(value) : value;
        this.onChange(this.value);
        /** @type {?} */
        var control = this.ngControl.control;
        if (control) {
            control.updateValueAndValidity();
            control.markAsTouched();
            control.markAsDirty();
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NgxaInputCurrencyComponent.prototype.transform = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _a = this.toNumber(value), val = _a.val, frac = _a.frac;
        /** @type {?} */
        var v = val.replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandsSeparator);
        return this.prefix.concat(' ').concat(v).concat(frac).concat(this.suffix);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NgxaInputCurrencyComponent.prototype.toNumber = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _a = __read((value || '').split(this.decimalSeparator), 2), _b = _a[0], val = _b === void 0 ? '' : _b, _c = _a[1], frac = _c === void 0 ? '' : _c;
        /** @type {?} */
        var fraction = '';
        if (frac) {
            if (parseInt(frac, 10) > 0) {
                fraction = this.decimalSeparator + this.pad(frac, this.padding).substring(0, this.padding);
            }
        }
        return { val: val, frac: fraction };
    };
    /**
     * @private
     * @param {?} val
     * @param {?} size
     * @return {?}
     */
    NgxaInputCurrencyComponent.prototype.pad = /**
     * @private
     * @param {?} val
     * @param {?} size
     * @return {?}
     */
    function (val, size) {
        while (val.length < size)
            val = val + '0';
        return val;
    };
    NgxaInputCurrencyComponent.decorators = [
        { type: Component, args: [{
                    selector: 'xa-input-currency',
                    template: "<xa-container-outlet\n  [name]=\"name\" [label]=\"label\"\n  [colLabel]=\"colLabel\" [colContent]=\"colInput\"\n  [required]=\"required\" [hasErrors]=\"hasErrors\"\n  [errorMessages]=\"errorMessages\" [paramError]=\"paramError\"\n  [skeleton]=\"skeleton\">\n  <div class=\"col-sm-{{colInput}}\" *ngIf=\"!skeleton; else contentskeleton\">\n    <input\n      type=\"text\"\n      id=\"{{name}}\"\n      [minLength]=\"minLength\"\n      [maxLength]=\"maxLength\"\n      [placeholder]=\"placeholder ? (placeholder | translate) : ''\"\n      [required]=\"required\"\n      [disabled]=\"disabled || skeleton\"\n      [ngClass]=\"{\n        'skeleton': skeleton,\n        'status-danger': hasErrors,\n        'status-success': (hasSuccess && required)\n      }\"\n      (input)=\"onChange($event.target.toNumber)\"\n      (change)=\"onChange($event.target.toNumber)\"\n      (blur)=\"onTouched($event.target.toNumber)\"\n      [(ngModel)]=\"value\"\n      xaCurrency\n      [prefix]=\"prefix\"\n      [decimal]=\"decimalSeparator\"\n      [thousand]=\"thousandsSeparator\"\n      [suffix]=\"suffix\"\n      [padding]=\"padding\"\n      #input nbInput fullWidth>\n  </div>\n  <ng-template #contentskeleton>\n    <div class=\"col-sm-{{colInput}}\">\n      <div\n        [ngClass]=\"{\n          'input-skeleton': true,\n          'skeleton': skeleton\n        }\">\n      </div>\n    </div>\n  </ng-template>\n</xa-container-outlet>",
                    encapsulation: ViewEncapsulation.None,
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    NgxaInputCurrencyComponent.ctorParameters = function () { return [
        { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
        { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
    ]; };
    NgxaInputCurrencyComponent.propDecorators = {
        placeholder: [{ type: Input }],
        colLabel: [{ type: Input }],
        colInput: [{ type: Input }],
        minLength: [{ type: Input }],
        maxLength: [{ type: Input }],
        prefix: [{ type: Input, args: ['prefix',] }],
        decimalSeparator: [{ type: Input, args: ['decimal',] }],
        thousandsSeparator: [{ type: Input, args: ['thousand',] }],
        suffix: [{ type: Input, args: ['suffix',] }],
        padding: [{ type: Input, args: ['padding',] }]
    };
    return NgxaInputCurrencyComponent;
}(NgxaValueAccessor));
if (false) {
    /** @type {?} */
    NgxaInputCurrencyComponent.prototype.placeholder;
    /** @type {?} */
    NgxaInputCurrencyComponent.prototype.colLabel;
    /** @type {?} */
    NgxaInputCurrencyComponent.prototype.colInput;
    /** @type {?} */
    NgxaInputCurrencyComponent.prototype.minLength;
    /** @type {?} */
    NgxaInputCurrencyComponent.prototype.maxLength;
    /** @type {?} */
    NgxaInputCurrencyComponent.prototype.prefix;
    /** @type {?} */
    NgxaInputCurrencyComponent.prototype.decimalSeparator;
    /** @type {?} */
    NgxaInputCurrencyComponent.prototype.thousandsSeparator;
    /** @type {?} */
    NgxaInputCurrencyComponent.prototype.suffix;
    /** @type {?} */
    NgxaInputCurrencyComponent.prototype.padding;
    /** @type {?} */
    NgxaInputCurrencyComponent.prototype.locale;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxaInputIconComponent = /** @class */ (function (_super) {
    __extends(NgxaInputIconComponent, _super);
    function NgxaInputIconComponent(ngControl, locale) {
        var _this = _super.call(this, ngControl, locale) || this;
        _this.locale = locale;
        _this.colLabel = 3;
        _this.colInput = 9;
        _this.minLength = 0;
        _this.maxLength = 100;
        _this.type = 'text';
        _this.iconcursor = false;
        _this.eva = false;
        _this.icon = 'search-outline';
        _this.clickIcon = new EventEmitter();
        _this.focus = new EventEmitter();
        return _this;
    }
    /**
     * @return {?}
     */
    NgxaInputIconComponent.prototype.onClickIcon = /**
     * @return {?}
     */
    function () {
        if (this.iconcursor)
            this.clickIcon.emit(this.value);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NgxaInputIconComponent.prototype.onFocus = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.focus.emit(value);
        this.onTouched(value);
    };
    NgxaInputIconComponent.decorators = [
        { type: Component, args: [{
                    selector: 'xa-input-icon',
                    template: "<xa-container-outlet\n  [name]=\"name\" [label]=\"label\" [nolabel]=\"nolabel\"\n  [colLabel]=\"colLabel\" [colContent]=\"colInput\"\n  [required]=\"required\" [hasErrors]=\"hasErrors\"\n  [errorMessages]=\"errorMessages\" [paramError]=\"paramError\"\n  [skeleton]=\"skeleton\">\n  <div class=\"col-sm-{{colInput}} input-group\" *ngIf=\"!skeleton; else contentskeleton\">\n    <input\n      type=\"{{type}}\"\n      id=\"{{name}}\"\n      [pattern]=\"pattern\"\n      [minLength]=\"minLength\"\n      [maxLength]=\"maxLength\"\n      [placeholder]=\"placeholder ? (placeholder | translate) : ''\"\n      [required]=\"required\"\n      [disabled]=\"disabled\"\n      [ngClass]=\"{\n        'status-danger': hasErrors,\n        'status-success': (hasSuccess && required)\n      }\"\n      (input)=\"onChange($event.target.value)\"\n      (change)=\"onChange($event.target.value)\"\n      (blur)=\"onTouched($event.target.value)\"\n      (focus)=\"onFocus($event.target.value)\"\n      [(ngModel)]=\"value\"\n      #input nbInput fullWidth>\n      <div\n        class=\"xinput-icon\"\n        [ngStyle]=\"{\n          'cursor': iconcursor ? 'pointer' : 'unset'\n        }\">\n        <span class=\"{{icon}}\" *ngIf=\"!eva\"></span>\n        <nb-icon class=\"xinput-icon-hover\" icon=\"{{icon}}\" (click)=\"onClickIcon()\" *ngIf=\"eva\"></nb-icon>\n      </div>\n  </div>\n  <ng-template #contentskeleton>\n    <div class=\"col-sm-{{colInput}}\">\n      <div\n        [ngClass]=\"{\n          'input-skeleton': true,\n          'skeleton': skeleton\n        }\">\n      </div>\n    </div>\n  </ng-template>\n</xa-container-outlet>",
                    encapsulation: ViewEncapsulation.None,
                    styles: ["nb-icon{color:#8f9bb3}.xinput-icon{position:absolute;right:0;margin:.6rem 1.5rem 0 0}.xinput-icon-hover:hover{color:#598bff}"]
                }] }
    ];
    /** @nocollapse */
    NgxaInputIconComponent.ctorParameters = function () { return [
        { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
        { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
    ]; };
    NgxaInputIconComponent.propDecorators = {
        placeholder: [{ type: Input }],
        colLabel: [{ type: Input }],
        colInput: [{ type: Input }],
        minLength: [{ type: Input }],
        maxLength: [{ type: Input }],
        type: [{ type: Input }],
        iconcursor: [{ type: Input }],
        eva: [{ type: Input }],
        icon: [{ type: Input }],
        clickIcon: [{ type: Output }],
        focus: [{ type: Output }]
    };
    return NgxaInputIconComponent;
}(NgxaValueAccessor));
if (false) {
    /** @type {?} */
    NgxaInputIconComponent.prototype.placeholder;
    /** @type {?} */
    NgxaInputIconComponent.prototype.colLabel;
    /** @type {?} */
    NgxaInputIconComponent.prototype.colInput;
    /** @type {?} */
    NgxaInputIconComponent.prototype.minLength;
    /** @type {?} */
    NgxaInputIconComponent.prototype.maxLength;
    /** @type {?} */
    NgxaInputIconComponent.prototype.type;
    /** @type {?} */
    NgxaInputIconComponent.prototype.iconcursor;
    /** @type {?} */
    NgxaInputIconComponent.prototype.eva;
    /** @type {?} */
    NgxaInputIconComponent.prototype.icon;
    /** @type {?} */
    NgxaInputIconComponent.prototype.clickIcon;
    /** @type {?} */
    NgxaInputIconComponent.prototype.focus;
    /** @type {?} */
    NgxaInputIconComponent.prototype.locale;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxaInputBaseIconComponent = /** @class */ (function (_super) {
    __extends(NgxaInputBaseIconComponent, _super);
    function NgxaInputBaseIconComponent(ngControl, locale) {
        var _this = _super.call(this, ngControl, locale) || this;
        _this.locale = locale;
        _this.minLength = 0;
        _this.maxLength = 100;
        _this.iconcursor = false;
        _this.icon = 'search-outline';
        _this.type = 'text';
        _this.clickIcon = new EventEmitter();
        _this.focus = new EventEmitter();
        return _this;
    }
    /**
     * @return {?}
     */
    NgxaInputBaseIconComponent.prototype.onClickIcon = /**
     * @return {?}
     */
    function () {
        if (this.iconcursor)
            this.clickIcon.emit(this.value);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NgxaInputBaseIconComponent.prototype.onFocus = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.focus.emit(value);
        this.onTouched(value);
    };
    NgxaInputBaseIconComponent.decorators = [
        { type: Component, args: [{
                    selector: 'xa-input-base-icon',
                    template: "<div class=\"input-group\">\n  <input\n    type=\"{{type}}\"\n    id=\"{{name}}\"\n    [pattern]=\"pattern\"\n    [minLength]=\"minLength\"\n    [maxLength]=\"maxLength\"\n    [placeholder]=\"placeholder ? (placeholder | translate) : ''\"\n    [required]=\"required\"\n    [disabled]=\"disabled\"\n    [ngClass]=\"{\n      'status-danger': hasErrors,\n      'status-success': hasSuccess\n    }\"\n    (input)=\"onChange($event.target.value)\"\n    (change)=\"onChange($event.target.value)\"\n    (blur)=\"onTouched($event.target.value)\"\n    (focus)=\"onFocus($event.target.value)\"\n    [(ngModel)]=\"value\"\n    #input nbInput fullWidth>\n  <div\n    class=\"input-icon\"\n    [ngStyle]=\"{\n      'cursor': iconcursor ? 'pointer' : 'unset'\n    }\">\n    <nb-icon class=\"input-icon-hover\" icon=\"{{icon}}\" (click)=\"onClickIcon()\"></nb-icon>\n  </div>\n</div>\n",
                    encapsulation: ViewEncapsulation.None,
                    styles: ["nb-icon{color:#8f9bb3}.input-icon{position:absolute;right:0;padding:10px}.input-icon-hover:hover{color:#598bff}"]
                }] }
    ];
    /** @nocollapse */
    NgxaInputBaseIconComponent.ctorParameters = function () { return [
        { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
        { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
    ]; };
    NgxaInputBaseIconComponent.propDecorators = {
        placeholder: [{ type: Input }],
        minLength: [{ type: Input }],
        maxLength: [{ type: Input }],
        iconcursor: [{ type: Input }],
        icon: [{ type: Input }],
        type: [{ type: Input }],
        clickIcon: [{ type: Output }],
        focus: [{ type: Output }]
    };
    return NgxaInputBaseIconComponent;
}(NgxaValueAccessor));
if (false) {
    /** @type {?} */
    NgxaInputBaseIconComponent.prototype.placeholder;
    /** @type {?} */
    NgxaInputBaseIconComponent.prototype.minLength;
    /** @type {?} */
    NgxaInputBaseIconComponent.prototype.maxLength;
    /** @type {?} */
    NgxaInputBaseIconComponent.prototype.iconcursor;
    /** @type {?} */
    NgxaInputBaseIconComponent.prototype.icon;
    /** @type {?} */
    NgxaInputBaseIconComponent.prototype.type;
    /** @type {?} */
    NgxaInputBaseIconComponent.prototype.clickIcon;
    /** @type {?} */
    NgxaInputBaseIconComponent.prototype.focus;
    /** @type {?} */
    NgxaInputBaseIconComponent.prototype.locale;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var components$6 = [
    NgxaInputTextComponent,
    NgxaInputBaseIconComponent,
    NgxaInputIconComponent,
    NgxaInputCurrencyComponent,
];
var NgxaInputModule = /** @class */ (function () {
    function NgxaInputModule() {
    }
    NgxaInputModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        NbInputModule,
                        NbIconModule,
                        TranslateModule,
                        NgxaBaseModule,
                    ],
                    declarations: __spread(components$6),
                    exports: __spread(components$6, [
                        NbInputModule,
                    ]),
                },] }
    ];
    return NgxaInputModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxaMapsLeafletComponent = /** @class */ (function () {
    function NgxaMapsLeafletComponent() {
        this.defaultLatLng = latLng({ lat: -2.3641701, lng: 117.7690927 });
        this.zoom = 4.5;
        this.height = 25;
        this.options = {
            layers: [
                tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: 'Civilians Emergency Report' }),
            ],
            zoom: this.zoom,
            center: this.defaultLatLng,
        };
        this.layers = [];
        this.onMarkerClick = new EventEmitter();
    }
    Object.defineProperty(NgxaMapsLeafletComponent.prototype, "markersFn", {
        set: /**
         * @param {?} markers
         * @return {?}
         */
        function (markers) {
            var _this = this;
            if (markers) {
                this.layers = [];
                markers.forEach((/**
                 * @param {?} marker
                 * @return {?}
                 */
                function (marker$1) {
                    _this.layers.push(marker(marker$1.mark, {
                        icon: icon({
                            iconUrl: document.getElementsByTagName('base')[0].href + "assets/map/marker-icon.png",
                            shadowUrl: document.getElementsByTagName('base')[0].href + "assets/map/marker-shadow.png",
                            iconSize: [27.5, 40],
                            iconAnchor: [20, 40],
                            popupAnchor: [0, -40],
                            className: marker$1.className,
                        }),
                        title: marker$1.title,
                        alt: marker$1.alt,
                    }).on('click', _this.markerClick.bind(_this)));
                }));
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NgxaMapsLeafletComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NgxaMapsLeafletComponent.prototype.markerClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var latlng = (/** @type {?} */ (event.latlng));
        /** @type {?} */
        var title = event.target.options.title;
        /** @type {?} */
        var alt = event.target.options.alt;
        this.onMarkerClick.emit({
            mark: latlng,
            title: title,
            alt: alt,
        });
        delay(200);
        this.map.setView([latlng.lat, latlng.lng], 15);
    };
    /**
     * @param {?} map
     * @return {?}
     */
    NgxaMapsLeafletComponent.prototype.onMapReady = /**
     * @param {?} map
     * @return {?}
     */
    function (map) {
        this.map = map;
    };
    NgxaMapsLeafletComponent.decorators = [
        { type: Component, args: [{
                    selector: 'xa-maps-leaflet',
                    template: "<div\n  id=\"leafletmap\"\n  [ngStyle]=\"{\n    'height': height + 'rem'\n  }\"\n  leaflet\n  [leafletOptions]=\"options\"\n  [leafletLayers]=\"layers\"\n  (leafletMapReady)=\"onMapReady($event)\">\n</div>",
                    styles: [".nb-theme-default :host ::ng-deep .leaflet-bottom,.nb-theme-default :host ::ng-deep .leaflet-top{z-index:997}.nb-theme-default :host ::ng-deep .leaflet-container{width:100%;height:36.5625rem}.nb-theme-default :host ::ng-deep .pulse{-webkit-animation:1s ease-out infinite pulsate;animation:1s ease-out infinite pulsate;opacity:0}@-webkit-keyframes pulsate{0%,100%{opacity:0}50%{opacity:1}}.nb-theme-dark :host ::ng-deep .leaflet-bottom,.nb-theme-dark :host ::ng-deep .leaflet-top{z-index:997}.nb-theme-dark :host ::ng-deep .leaflet-container{width:100%;height:36.5625rem}.nb-theme-dark :host ::ng-deep .pulse{-webkit-animation:1s ease-out infinite pulsate;animation:1s ease-out infinite pulsate;opacity:0}.nb-theme-cosmic :host ::ng-deep .leaflet-bottom,.nb-theme-cosmic :host ::ng-deep .leaflet-top{z-index:997}.nb-theme-cosmic :host ::ng-deep .leaflet-container{width:100%;height:36.5625rem}.nb-theme-cosmic :host ::ng-deep .pulse{-webkit-animation:1s ease-out infinite pulsate;animation:1s ease-out infinite pulsate;opacity:0}.nb-theme-corporate :host ::ng-deep .leaflet-bottom,.nb-theme-corporate :host ::ng-deep .leaflet-top{z-index:997}.nb-theme-corporate :host ::ng-deep .leaflet-container{width:100%;height:36.5625rem}.nb-theme-corporate :host ::ng-deep .pulse{-webkit-animation:1s ease-out infinite pulsate;animation:1s ease-out infinite pulsate;opacity:0}@keyframes pulsate{0%,100%{opacity:0}50%{opacity:1}}"]
                }] }
    ];
    NgxaMapsLeafletComponent.propDecorators = {
        height: [{ type: Input }],
        options: [{ type: Input }],
        layers: [{ type: Input }],
        markersFn: [{ type: Input }],
        onMarkerClick: [{ type: Output }]
    };
    return NgxaMapsLeafletComponent;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    NgxaMapsLeafletComponent.prototype.map;
    /**
     * @type {?}
     * @private
     */
    NgxaMapsLeafletComponent.prototype.defaultLatLng;
    /**
     * @type {?}
     * @private
     */
    NgxaMapsLeafletComponent.prototype.zoom;
    /** @type {?} */
    NgxaMapsLeafletComponent.prototype.height;
    /** @type {?} */
    NgxaMapsLeafletComponent.prototype.options;
    /** @type {?} */
    NgxaMapsLeafletComponent.prototype.layers;
    /** @type {?} */
    NgxaMapsLeafletComponent.prototype.onMarkerClick;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxaMapsAgmComponent = /** @class */ (function () {
    function NgxaMapsAgmComponent() {
        this.lat = -2.3641701;
        this.lng = 117.7690927;
    }
    NgxaMapsAgmComponent.decorators = [
        { type: Component, args: [{
                    selector: 'xa-maps-agm',
                    template: "<agm-map [latitude]=\"lat\" [longitude]=\"lng\">\n  <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n</agm-map>",
                    styles: [".nb-theme-default :host ::ng-deep agm-map{width:100%;height:36.5625rem}.nb-theme-dark :host ::ng-deep agm-map{width:100%;height:36.5625rem}.nb-theme-cosmic :host ::ng-deep agm-map{width:100%;height:36.5625rem}.nb-theme-corporate :host ::ng-deep agm-map{width:100%;height:36.5625rem}"]
                }] }
    ];
    return NgxaMapsAgmComponent;
}());
if (false) {
    /** @type {?} */
    NgxaMapsAgmComponent.prototype.lat;
    /** @type {?} */
    NgxaMapsAgmComponent.prototype.lng;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var components$7 = [
    NgxaMapsLeafletComponent,
    NgxaMapsAgmComponent,
];
var NgxaMapsModule = /** @class */ (function () {
    function NgxaMapsModule() {
    }
    NgxaMapsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        AgmCoreModule.forRoot({
                            apiKey: 'AIzaSyB3ctAGo_z3FNOVWquijMGBgesM1XlRa-Y',
                            libraries: ['places'],
                        }),
                        LeafletModule.forRoot(),
                        NbCardModule,
                    ],
                    declarations: __spread(components$7),
                    exports: __spread(components$7),
                },] }
    ];
    return NgxaMapsModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var components$8 = [];
var NgxaProgressModule = /** @class */ (function () {
    function NgxaProgressModule() {
    }
    NgxaProgressModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        FormsModule,
                    ],
                    declarations: __spread(components$8),
                    exports: __spread(components$8),
                },] }
    ];
    return NgxaProgressModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxaRadioComponent = /** @class */ (function (_super) {
    __extends(NgxaRadioComponent, _super);
    function NgxaRadioComponent(ngControl, locale) {
        var _this = _super.call(this, ngControl, locale) || this;
        _this.locale = locale;
        _this.colLabel = 3;
        _this.colInput = 9;
        return _this;
    }
    /**
     * @return {?}
     */
    NgxaRadioComponent.prototype.onInit = /**
     * @return {?}
     */
    function () {
        if (!this.value && this.data)
            this.value = this.data[0].value;
    };
    NgxaRadioComponent.decorators = [
        { type: Component, args: [{
                    selector: 'xa-radio',
                    template: "<xa-container-outlet\n  [name]=\"name\" [label]=\"label\"\n  [colLabel]=\"colLabel\" [colContent]=\"colInput\"\n  [required]=\"required\" [hasErrors]=\"hasErrors\"\n  [errorMessages]=\"errorMessages\" [paramError]=\"paramError\"\n  [skeleton]=\"skeleton\">\n  <div class=\"col-sm-{{colInput}}\" *ngIf=\"!skeleton; else contentskeleton\">\n    <nb-radio-group\n      [(value)]=\"value\"\n      [name]=\"name\"\n      [disabled]=\"disabled\"\n      #radiogroup>\n      <nb-radio *ngFor=\"let item of data\"\n        [value]=\"item.value\">\n        {{item.name | translate}}\n      </nb-radio>\n    </nb-radio-group>\n  </div>\n  <ng-template #contentskeleton>\n    <div class=\"col-sm-{{colInput}}\">\n      <div\n        [ngClass]=\"{\n          'input-skeleton': true,\n          'skeleton': skeleton\n        }\">\n      </div>\n    </div>\n  </ng-template>\n</xa-container-outlet>",
                    encapsulation: ViewEncapsulation.None,
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    NgxaRadioComponent.ctorParameters = function () { return [
        { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
        { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
    ]; };
    NgxaRadioComponent.propDecorators = {
        placeholder: [{ type: Input }],
        colLabel: [{ type: Input }],
        colInput: [{ type: Input }],
        data: [{ type: Input }]
    };
    return NgxaRadioComponent;
}(NgxaValueAccessor));
if (false) {
    /** @type {?} */
    NgxaRadioComponent.prototype.placeholder;
    /** @type {?} */
    NgxaRadioComponent.prototype.colLabel;
    /** @type {?} */
    NgxaRadioComponent.prototype.colInput;
    /** @type {?} */
    NgxaRadioComponent.prototype.data;
    /** @type {?} */
    NgxaRadioComponent.prototype.locale;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var components$9 = [
    NgxaRadioComponent,
];
var NgxaRadioModule = /** @class */ (function () {
    function NgxaRadioModule() {
    }
    NgxaRadioModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        TranslateModule,
                        NbRadioModule,
                        NgxaBaseModule,
                    ],
                    declarations: __spread(components$9),
                    exports: __spread(components$9),
                },] }
    ];
    return NgxaRadioModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ContentSelectDirective = /** @class */ (function () {
    function ContentSelectDirective() {
    }
    ContentSelectDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[xaContentSelect]',
                },] }
    ];
    return ContentSelectDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxaSelectComponent = /** @class */ (function (_super) {
    __extends(NgxaSelectComponent, _super);
    function NgxaSelectComponent(ngControl, locale, injector) {
        var _this = _super.call(this, ngControl, locale) || this;
        _this.locale = locale;
        _this.injector = injector;
        _this.colLabel = 3;
        _this.colInput = 9;
        _this.items = [];
        _this.multiple = false;
        _this.loading = false;
        _this.addTag = false;
        _this.closeOnSelect = true;
        _this.clearable = true;
        _this.searchable = true;
        _this.hideSelected = true;
        _this.minTermLength = 2;
        _this.maxTermLength = 50;
        _this.limit = 50;
        _this.offsetNextLoad = _this.limit - 35;
        _this.onSelect = new EventEmitter();
        _this.onClear = new EventEmitter();
        _this.notFoundText = 'select.notfound';
        _this.typeToSearchText = 'select.typesearch';
        _this.virtualScroll = true;
        _this.paramSearch = { value: _this.minTermLength };
        _this.typeahead$ = new Subject();
        _this.destroy$ = new Subject();
        _this.total = 0;
        _this.totalRecord = 0;
        _this.http = injector.get(HTTP_SERVICE);
        _this.cdref = injector.get(ChangeDetectorRef);
        return _this;
    }
    Object.defineProperty(NgxaSelectComponent.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () { return this._value; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this._value !== value) {
                this._value = value;
                this.onChange(value);
                this.onSelect.emit(value);
                /** @type {?} */
                var control = this.ngControl.control;
                if (control) {
                    control.updateValueAndValidity();
                    control.markAsTouched();
                    control.markAsDirty();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NgxaSelectComponent.prototype.onInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.paramSearch = { value: this.minTermLength };
        if (this.api) {
            this.fetchSearch().subscribe((/**
             * @param {?} items
             * @return {?}
             */
            function (items) {
                _this.fetchMore(items);
            }));
        }
    };
    /**
     * @return {?}
     */
    NgxaSelectComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next(true);
        this.destroy$.complete();
        this.destroy$.unsubscribe();
        this.typeahead$.next(null);
        this.typeahead$.complete();
        this.typeahead$.unsubscribe();
    };
    /**
     * @return {?}
     */
    NgxaSelectComponent.prototype.onOpen = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.api) {
            if (this.loading)
                return;
            this.total = 0;
            this.items = [];
            if (!this.searchable) {
                this.fetchNone().subscribe((/**
                 * @param {?} items
                 * @return {?}
                 */
                function (items) {
                    _this.fetchMore(items);
                }));
            }
        }
    };
    /**
     * @return {?}
     */
    NgxaSelectComponent.prototype.onClose = /**
     * @return {?}
     */
    function () {
        if (this.api) {
            this.reset();
        }
    };
    /**
     * @param {?} __0
     * @param {?} search
     * @return {?}
     */
    NgxaSelectComponent.prototype.onScroll = /**
     * @param {?} __0
     * @param {?} search
     * @return {?}
     */
    function (_a, search) {
        var _this = this;
        var end = _a.end;
        if (!this.loading) {
            if ((Number(end) + this.offsetNextLoad) >= this.total && this.total > 0 && this.total < this.totalRecord) {
                if (this.searchable && search) {
                    this.typeahead$.next(search);
                }
                else {
                    this.fetchNone().subscribe((/**
                     * @param {?} items
                     * @return {?}
                     */
                    function (items) {
                        _this.fetchMore(items);
                    }));
                }
            }
        }
    };
    /**
     * @param {?} search
     * @return {?}
     */
    NgxaSelectComponent.prototype.onScrollToEnd = /**
     * @param {?} search
     * @return {?}
     */
    function (search) {
        var _this = this;
        if (!this.loading) {
            if (this.total < this.totalRecord) {
                if (this.searchable && search) {
                    this.typeahead$.next(search);
                }
                else {
                    this.fetchNone().subscribe((/**
                     * @param {?} items
                     * @return {?}
                     */
                    function (items) {
                        _this.fetchMore(items);
                    }));
                }
            }
        }
    };
    /**
     * @return {?}
     */
    NgxaSelectComponent.prototype.doClear = /**
     * @return {?}
     */
    function () {
        this.onClear.emit(true);
    };
    /**
     * @private
     * @return {?}
     */
    NgxaSelectComponent.prototype.reset = /**
     * @private
     * @return {?}
     */
    function () {
        this.total = 0;
        this.items = [];
        this.loading = false;
    };
    /**
     * @private
     * @param {?} items
     * @return {?}
     */
    NgxaSelectComponent.prototype.fetchMore = /**
     * @private
     * @param {?} items
     * @return {?}
     */
    function (items) {
        this.items = __spread(this.items, items);
        this.cdref.detectChanges();
        this.loading = false;
    };
    /**
     * @private
     * @return {?}
     */
    NgxaSelectComponent.prototype.fetchSearch = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        return this.typeahead$.pipe(switchMap((/**
         * @param {?} term
         * @return {?}
         */
        function (term) {
            if (term) {
                if (term.length > _this.maxTermLength) {
                    return of([]);
                }
                return _this.getRequest(_this.total, term);
            }
            else
                return of([]);
        }))).takeUntil(this.destroy$);
    };
    /**
     * @private
     * @return {?}
     */
    NgxaSelectComponent.prototype.fetchNone = /**
     * @private
     * @return {?}
     */
    function () {
        return this.getRequest(this.total).takeUntil(this.destroy$);
    };
    /**
     * @private
     * @param {?=} offset
     * @param {?=} search
     * @return {?}
     */
    NgxaSelectComponent.prototype.getRequest = /**
     * @private
     * @param {?=} offset
     * @param {?=} search
     * @return {?}
     */
    function (offset, search) {
        var _this = this;
        /** @type {?} */
        var body;
        if (this.api.method === HttpMethod.POST) {
            body = {
                offset: offset ? offset : 0,
                limit: this.limit,
                keyword: {
                    _label: search,
                },
            };
            if (this.queryParam) {
                this.queryParam.forEach((/**
                 * @param {?} result
                 * @return {?}
                 */
                function (result) {
                    body['keyword'][result.key] = result.value;
                }));
            }
        }
        this.loading = true;
        return this.http.HTTP_AUTH(this.api, body)
            .pipe(map((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            _this.totalRecord = Number(response.totalRecord);
            _this.total = _this.total + Number(response.totalFiltered);
            return ((/** @type {?} */ (response['data'])));
        })), catchError((/**
         * @return {?}
         */
        function () { return of([]); })));
    };
    /**
     * @param {?} event
     * @param {?} term
     * @return {?}
     */
    NgxaSelectComponent.prototype.onKeyDown = /**
     * @param {?} event
     * @param {?} term
     * @return {?}
     */
    function (event, term) {
        if ([46, 8, 27, 13, 32, 110, 190, 189, 16, 20, 18, 222, 191].indexOf(event.keyCode) !== -1 ||
            (event.keyCode === 65 && event.ctrlKey === true) || // Allow: Ctrl+A
            (event.keyCode === 67 && event.ctrlKey === true) || // Allow: Ctrl+C
            (event.keyCode === 86 && event.ctrlKey === true) || // Allow: Ctrl+V
            (event.keyCode === 88 && event.ctrlKey === true) || // Allow: Ctrl+X
            (event.keyCode === 65 && event.metaKey === true) || // Cmd+A (Mac)
            (event.keyCode === 67 && event.metaKey === true) || // Cmd+C (Mac)
            (event.keyCode === 86 && event.metaKey === true) || // Cmd+V (Mac)
            (event.keyCode === 88 && event.metaKey === true) || // Cmd+X (Mac)
            (event.keyCode >= 35 && event.keyCode <= 39) || // Home, End, Left, Right
            (event.keyCode >= 65 && event.keyCode <= 90) ||
            (!event.shiftKey && (event.keyCode >= 48 && event.keyCode <= 57)) ||
            (event.keyCode >= 96 && event.keyCode <= 105)) {
            if (((!event.ctrlKey && !event.altKey && !event.metaKey) &&
                (([46, 8, 32].indexOf(event.keyCode) !== -1) ||
                    (event.keyCode >= 65 && event.keyCode <= 90) ||
                    (event.keyCode >= 48 && event.keyCode <= 57) ||
                    (event.keyCode >= 96 && event.keyCode <= 105))) ||
                ((event.ctrlKey || event.metaKey) && event.keyCode === 90) ||
                ((event.ctrlKey || event.metaKey) && event.keyCode === 89)) {
                this.reset();
            }
            if (term) {
                if (term.length > this.maxTermLength) {
                    return false;
                }
            }
            return true;
        }
        return false;
    };
    NgxaSelectComponent.decorators = [
        { type: Component, args: [{
                    selector: 'xa-select',
                    template: "<xa-container-outlet\n  [name]=\"name\" [label]=\"label\"\n  [colLabel]=\"colLabel\" [colContent]=\"colInput\"\n  [required]=\"required\" [hasErrors]=\"hasErrors\"\n  [errorMessages]=\"errorMessages\" [paramError]=\"paramError\"\n  [skeleton]=\"skeleton\">\n  <div class=\"col-sm-{{colInput}}\" *ngIf=\"!skeleton; else contentskeleton\">\n    <ng-select\n      [placeholder]=\"placeholder ? (placeholder | translate) : ''\"\n      [items]=\"items\"\n      [typeahead]=\"typeahead$\"\n      [multiple]=\"multiple\"\n      [loading]=\"loading\"\n      [notFoundText]=\"notFoundText | translate\"\n      [addTag]=\"addTag\"\n      [closeOnSelect]=\"closeOnSelect\"\n      [clearable]=\"required? false: clearable\"\n      [searchable]=\"searchable\"\n      [hideSelected]=\"hideSelected\"\n      [minTermLength]=\"minTermLength\"\n      [virtualScroll]=\"virtualScroll\"\n      [required]=\"required\"\n      [disabled]=\"disabled\"\n      (keydown)=\"onKeyDown($event, select.searchTerm)\"\n      (scroll)=\"onScroll($event, select.searchTerm)\"\n      (scrollToEnd)=\"onScrollToEnd(select.searchTerm)\"\n      (open)=\"onOpen()\"\n      (close)=\"onClose()\"\n      (clear)=\"doClear()\"\n      (change)=\"onChange($event)\"\n      (focus)=\"onTouched($event)\"\n      (blur)=\"onTouched($event)\"\n      [(ngModel)]=\"value\"\n      [ngClass]=\"{'required': required}\"\n      appendTo=\"body\"\n      typeToSearchText=\"{{typeToSearchText | translate:paramSearch}}\"\n      #select>\n        <ng-template *ngIf=\"contentTemplate\" ng-label-tmp let-item=\"item\">\n          <ng-container *ngTemplateOutlet=\"contentTemplate; context: {$implicit: item}\"></ng-container>\n        </ng-template>\n        <ng-template *ngIf=\"contentTemplate\" ng-option-tmp let-item=\"item\">\n          <ng-container *ngTemplateOutlet=\"contentTemplate; context: {$implicit: item}\"></ng-container>\n        </ng-template>\n    </ng-select>\n  </div>\n  <ng-template #contentskeleton>\n    <div class=\"col-sm-{{colInput}}\">\n      <div\n        [ngClass]=\"{\n          'input-skeleton': true,\n          'skeleton': skeleton\n        }\">\n      </div>\n    </div>\n  </ng-template>\n</xa-container-outlet>",
                    encapsulation: ViewEncapsulation.None,
                    styles: ["ng-select.ng-invalid.ng-touched .ng-select-container{border-color:#ff3d71}ng-select.ng-invalid.ng-touched:focus{border-color:#ff3d71;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 0 3px #fde6e8}ng-select.ng-valid.ng-touched.required .ng-select-container{border-color:#00d68f}ng-select.ng-valid.ng-touched.required:focus{border-color:#00d68f;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 0 3px #e4e9f2}body{font-size:1rem;font-weight:400;line-height:1.5;position:relative;font-family:Open Sans,sans-serif}.ng-select .ng-select-container{border-radius:.25rem;line-height:1.5rem;align-items:center;background-color:#f7f9fc;color:#1a2138;font-family:Open Sans,sans-serif;border:1px solid #edf1f7}"]
                }] }
    ];
    /** @nocollapse */
    NgxaSelectComponent.ctorParameters = function () { return [
        { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
        { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] },
        { type: Injector }
    ]; };
    NgxaSelectComponent.propDecorators = {
        placeholder: [{ type: Input }],
        colLabel: [{ type: Input }],
        colInput: [{ type: Input }],
        items: [{ type: Input }],
        multiple: [{ type: Input }],
        loading: [{ type: Input }],
        addTag: [{ type: Input }],
        closeOnSelect: [{ type: Input }],
        clearable: [{ type: Input }],
        searchable: [{ type: Input }],
        hideSelected: [{ type: Input }],
        minTermLength: [{ type: Input }],
        maxTermLength: [{ type: Input }],
        api: [{ type: Input }],
        limit: [{ type: Input }],
        offsetNextLoad: [{ type: Input }],
        queryParam: [{ type: Input }],
        onSelect: [{ type: Output }],
        onClear: [{ type: Output }],
        select: [{ type: ViewChild, args: ['select', { static: false },] }],
        contentTemplate: [{ type: ContentChild, args: [ContentSelectDirective, { static: false, read: TemplateRef },] }]
    };
    return NgxaSelectComponent;
}(NgxaValueAccessor));
if (false) {
    /** @type {?} */
    NgxaSelectComponent.prototype.placeholder;
    /** @type {?} */
    NgxaSelectComponent.prototype.colLabel;
    /** @type {?} */
    NgxaSelectComponent.prototype.colInput;
    /** @type {?} */
    NgxaSelectComponent.prototype.items;
    /** @type {?} */
    NgxaSelectComponent.prototype.multiple;
    /** @type {?} */
    NgxaSelectComponent.prototype.loading;
    /** @type {?} */
    NgxaSelectComponent.prototype.addTag;
    /** @type {?} */
    NgxaSelectComponent.prototype.closeOnSelect;
    /** @type {?} */
    NgxaSelectComponent.prototype.clearable;
    /** @type {?} */
    NgxaSelectComponent.prototype.searchable;
    /** @type {?} */
    NgxaSelectComponent.prototype.hideSelected;
    /** @type {?} */
    NgxaSelectComponent.prototype.minTermLength;
    /** @type {?} */
    NgxaSelectComponent.prototype.maxTermLength;
    /** @type {?} */
    NgxaSelectComponent.prototype.api;
    /** @type {?} */
    NgxaSelectComponent.prototype.limit;
    /** @type {?} */
    NgxaSelectComponent.prototype.offsetNextLoad;
    /** @type {?} */
    NgxaSelectComponent.prototype.queryParam;
    /** @type {?} */
    NgxaSelectComponent.prototype.onSelect;
    /** @type {?} */
    NgxaSelectComponent.prototype.onClear;
    /** @type {?} */
    NgxaSelectComponent.prototype.select;
    /** @type {?} */
    NgxaSelectComponent.prototype.contentTemplate;
    /** @type {?} */
    NgxaSelectComponent.prototype.notFoundText;
    /** @type {?} */
    NgxaSelectComponent.prototype.typeToSearchText;
    /** @type {?} */
    NgxaSelectComponent.prototype.virtualScroll;
    /** @type {?} */
    NgxaSelectComponent.prototype.paramSearch;
    /** @type {?} */
    NgxaSelectComponent.prototype.typeahead$;
    /**
     * @type {?}
     * @protected
     */
    NgxaSelectComponent.prototype.http;
    /**
     * @type {?}
     * @private
     */
    NgxaSelectComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NgxaSelectComponent.prototype.total;
    /**
     * @type {?}
     * @private
     */
    NgxaSelectComponent.prototype.totalRecord;
    /**
     * @type {?}
     * @private
     */
    NgxaSelectComponent.prototype.cdref;
    /** @type {?} */
    NgxaSelectComponent.prototype._value;
    /** @type {?} */
    NgxaSelectComponent.prototype.locale;
    /** @type {?} */
    NgxaSelectComponent.prototype.injector;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var components$a = [
    NgxaSelectComponent,
];
/** @type {?} */
var directives$1 = [
    ContentSelectDirective,
];
var NgxaSelectModule = /** @class */ (function () {
    function NgxaSelectModule() {
    }
    NgxaSelectModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        NgSelectModule,
                        TranslateModule,
                        NgxaBaseModule,
                    ],
                    declarations: __spread(components$a, directives$1),
                    exports: __spread(components$a, directives$1),
                },] }
    ];
    return NgxaSelectModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var components$b = [];
var NgxaSpinnerModule = /** @class */ (function () {
    function NgxaSpinnerModule() {
    }
    NgxaSpinnerModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        FormsModule,
                    ],
                    declarations: __spread(components$b),
                    exports: __spread(components$b),
                },] }
    ];
    return NgxaSpinnerModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxaDatatableComponent = /** @class */ (function () {
    function NgxaDatatableComponent(locale, layout, injector) {
        this.locale = locale;
        this.layout = layout;
        this.injector = injector;
        this.rows = [];
        this.columns = [];
        this.filters = [];
        this.selected = [];
        this.limit = 10;
        this.count = 0;
        this.offset = 0;
        this.externalPaging = false;
        this.externalSorting = false;
        this.loadingIndicator = false;
        this.scrollbarH = true;
        this.scrollbarV = false;
        this.reorderable = true;
        this.sortType = SortType.single;
        this.selectionType = SelectionType.checkbox;
        this.columnMode = ColumnMode.force;
        this.headerHeight = 40;
        this.footerHeight = 'auto';
        this.rowHeight = 'auto';
        this.header = true;
        this.column = true;
        this.footer = true;
        this.add = true;
        this.edit = true;
        this.delete = true;
        this.filter = true;
        this.startWithOpenData = true;
        this.filterEvent = false;
        this.onAdd = new EventEmitter();
        this.onEdit = new EventEmitter();
        this.onDelete = new EventEmitter();
        this.onSearch = new EventEmitter();
        this.onFilter = new EventEmitter();
        this.onButtonCell = new EventEmitter();
        this.isDelete = false;
        this.destroy$ = new Subject();
        this.pageOffset = 0;
        this.http = injector.get(HTTP_SERVICE);
        this.cdref = injector.get(ChangeDetectorRef);
    }
    Object.defineProperty(NgxaDatatableComponent.prototype, "filterFn", {
        set: /**
         * @param {?} keyword
         * @return {?}
         */
        function (keyword) {
            this.keywordParam = keyword;
            this._keyword = keyword;
            this.count = 0;
            this.offset = 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxaDatatableComponent.prototype, "filterDoFetchFn", {
        set: /**
         * @param {?} keyword
         * @return {?}
         */
        function (keyword) {
            if (keyword) {
                this.keywordParam = keyword;
                this._keyword = keyword;
            }
            this.count = 0;
            this.offset = 0;
            this.fetch();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxaDatatableComponent.prototype, "reloadFn", {
        set: /**
         * @param {?} reload
         * @return {?}
         */
        function (reload) {
            if (reload) {
                this.count = 0;
                this.offset = 0;
                this.fetch();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NgxaDatatableComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.startWithOpenData) {
            this.fetch();
        }
        this.layout.onChangeLayoutSize().takeUntil(this.destroy$).subscribe((/**
         * @return {?}
         */
        function () {
            _this.datatable.recalculate();
            _this.cdref.detectChanges();
        }));
    };
    /**
     * @return {?}
     */
    NgxaDatatableComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next(true);
        this.destroy$.complete();
        this.destroy$.unsubscribe();
    };
    /**
     * @param {?} search
     * @return {?}
     */
    NgxaDatatableComponent.prototype.doSearch = /**
     * @param {?} search
     * @return {?}
     */
    function (search) {
        this.onSearch.emit(search);
        if (this.keywordParam) {
            this._keyword = this.keywordParam;
            this._keyword['_all'] = search;
        }
        else {
            this._keyword = {
                '_all': search,
            };
        }
        this.count = 0;
        this.offset = 0;
        this.fetch();
    };
    /**
     * @param {?} search
     * @return {?}
     */
    NgxaDatatableComponent.prototype.doFilter = /**
     * @param {?} search
     * @return {?}
     */
    function (search) {
        var _this = this;
        if (this.filterEvent) {
            this.onFilter.emit(search);
        }
        else {
            if (this.keywordParam) {
                this._keyword = this.keywordParam;
            }
            else {
                this._keyword = {};
            }
            this.filters.forEach((/**
             * @param {?} filter
             * @return {?}
             */
            function (filter) {
                switch (filter.type) {
                    case 'input':
                    case 'datepicker':
                    case 'radio':
                        _this._keyword[filter.controlName] = search[filter.controlName];
                        break;
                    case 'select':
                        _this._keyword[filter.controlName] = search[filter.controlName].label;
                        break;
                    case 'checkbox':
                        _this._keyword[filter.controlName] = search[filter.controlName].name;
                        break;
                    default:
                        break;
                }
            }));
            this.count = 0;
            this.offset = 0;
            this.fetch();
        }
    };
    /**
     * @param {?} add
     * @return {?}
     */
    NgxaDatatableComponent.prototype.doAdd = /**
     * @param {?} add
     * @return {?}
     */
    function (add) {
        this.onAdd.emit(add);
    };
    /**
     * @param {?} row
     * @return {?}
     */
    NgxaDatatableComponent.prototype.doEdit = /**
     * @param {?} row
     * @return {?}
     */
    function (row) {
        this.onEdit.emit(row);
    };
    /**
     * @return {?}
     */
    NgxaDatatableComponent.prototype.doDelete = /**
     * @return {?}
     */
    function () {
        this.onDelete.emit(this.selected);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NgxaDatatableComponent.prototype.onKeyDown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.keyCode === 13) {
            this.doSearch(this._search);
        }
    };
    /**
     * @return {?}
     */
    NgxaDatatableComponent.prototype.fetch = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.api) {
            this.externalPaging = true;
            this.externalSorting = true;
            this.getRequest().subscribe((/**
             * @param {?} rows
             * @return {?}
             */
            function (rows) {
                _this.rows = rows;
                _this.cdref.detectChanges();
            }));
        }
    };
    /**
     * @param {?} page
     * @return {?}
     */
    NgxaDatatableComponent.prototype.setPage = /**
     * @param {?} page
     * @return {?}
     */
    function (page) {
        this.pageOffset = page.offset * this.limit;
        this.fetch();
    };
    /**
     * @param {?} order
     * @return {?}
     */
    NgxaDatatableComponent.prototype.onSort = /**
     * @param {?} order
     * @return {?}
     */
    function (order) {
        var _this = this;
        if (order) {
            if (Array.isArray(order.sorts)) {
                order.sorts.forEach((/**
                 * @param {?} sort
                 * @return {?}
                 */
                function (sort) {
                    if (sort['dir'] === 'asc') {
                        _this.sort = { asc: [sort['prop']] };
                    }
                    else {
                        _this.sort = { desc: [sort['prop']] };
                    }
                }));
            }
        }
        this.fetch();
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    NgxaDatatableComponent.prototype.onSelect = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var selected = _a.selected;
        if (Array.isArray(selected)) {
            if (selected.length > 0) {
                if (this.delete)
                    this.isDelete = true;
            }
            else {
                this.isDelete = false;
            }
            this.selected = selected;
        }
        else {
            this.isDelete = false;
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NgxaDatatableComponent.prototype.onClickButton = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.onButtonCell.emit(event);
    };
    /**
     * @private
     * @return {?}
     */
    NgxaDatatableComponent.prototype.getRequest = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var body = {
            offset: this.pageOffset,
            limit: this.limit,
            keyword: this._keyword,
            order: this.sort,
        };
        this.loadingIndicator = true;
        return this.http.HTTP_AUTH(this.api, body)
            .pipe(map((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            _this.count = Number(response.totalRecord);
            _this.loadingIndicator = false;
            return ((/** @type {?} */ (response['data'])));
        })), catchError((/**
         * @return {?}
         */
        function () {
            _this.loadingIndicator = false;
            _this.count = 0;
            return of([]);
        })));
    };
    NgxaDatatableComponent.decorators = [
        { type: Component, args: [{
                    selector: 'xa-datatable',
                    template: "<xa-datatable-header\n    [header]=\"header\"\n    [add]=\"add\"\n    [delete]=\"isDelete\"\n    [filter]=\"filter\"\n    [formGroupFilter]=\"formGroupFilter\"\n    (onSearch)=\"doSearch($event)\"\n    (onFilter)=\"doFilter($event)\"\n    (onAdd)=\"doAdd($event)\"\n    (onDelete)=\"doDelete()\">\n    <ng-content></ng-content>\n</xa-datatable-header>\n<xa-datatable-base\n    [rows]=\"rows\"\n    [columns]=\"columns\"\n    [selected]=\"selected\"\n    [limit]=\"limit\"\n    [count]=\"count\"\n    [offset]=\"offset\"\n    [externalPaging]=\"externalPaging\"\n    [externalSorting]=\"externalSorting\"\n    [loadingIndicator]=\"loadingIndicator\"\n    [scrollbarH]=\"scrollbarH\"\n    [scrollbarV]=\"scrollbarV\"\n    [reorderable]=\"reorderable\"\n    [sortType]=\"sortType\"\n    [messages]=\"messages\"\n    [selectionType]=\"selectionType\"\n    [columnMode]=\"columnMode\"\n    [headerHeight]=\"headerHeight\"\n    [footerHeight]=\"footerHeight\"\n    [rowHeight]=\"rowHeight\"\n    [header]=\"header\"\n    [column]=\"column\"\n    [footer]=\"footer\"\n    [add]=\"add\"\n    [edit]=\"edit\"\n    [delete]=\"delete\"\n    [filter]=\"filter\"\n    [startWithOpenData]=\"startWithOpenData\"\n    (page)=\"setPage($event)\"\n    (sort)=\"onSort($event)\"\n    (select)=\"onSelect($event)\"\n    (activate)=\"doEdit($event)\"\n    (onButtonCell)=\"onClickButton($event)\">\n</xa-datatable-base>\n",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    NgxaDatatableComponent.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] },
        { type: LayoutService },
        { type: Injector }
    ]; };
    NgxaDatatableComponent.propDecorators = {
        rows: [{ type: Input }],
        columns: [{ type: Input }],
        filters: [{ type: Input }],
        selected: [{ type: Input }],
        limit: [{ type: Input }],
        count: [{ type: Input }],
        offset: [{ type: Input }],
        externalPaging: [{ type: Input }],
        externalSorting: [{ type: Input }],
        loadingIndicator: [{ type: Input }],
        scrollbarH: [{ type: Input }],
        scrollbarV: [{ type: Input }],
        reorderable: [{ type: Input }],
        sortType: [{ type: Input }],
        messages: [{ type: Input }],
        selectionType: [{ type: Input }],
        columnMode: [{ type: Input }],
        headerHeight: [{ type: Input }],
        footerHeight: [{ type: Input }],
        rowHeight: [{ type: Input }],
        header: [{ type: Input }],
        column: [{ type: Input }],
        footer: [{ type: Input }],
        add: [{ type: Input }],
        edit: [{ type: Input }],
        delete: [{ type: Input }],
        filter: [{ type: Input }],
        api: [{ type: Input }],
        startWithOpenData: [{ type: Input }],
        filterEvent: [{ type: Input }],
        formGroupFilter: [{ type: Input }],
        sort: [{ type: Input }],
        onAdd: [{ type: Output }],
        onEdit: [{ type: Output }],
        onDelete: [{ type: Output }],
        onSearch: [{ type: Output }],
        onFilter: [{ type: Output }],
        onButtonCell: [{ type: Output }],
        datatable: [{ type: ViewChild, args: ['datatable', { static: false },] }],
        filterFn: [{ type: Input }],
        filterDoFetchFn: [{ type: Input }],
        reloadFn: [{ type: Input }]
    };
    return NgxaDatatableComponent;
}());
if (false) {
    /** @type {?} */
    NgxaDatatableComponent.prototype.rows;
    /** @type {?} */
    NgxaDatatableComponent.prototype.columns;
    /** @type {?} */
    NgxaDatatableComponent.prototype.filters;
    /** @type {?} */
    NgxaDatatableComponent.prototype.selected;
    /** @type {?} */
    NgxaDatatableComponent.prototype.limit;
    /** @type {?} */
    NgxaDatatableComponent.prototype.count;
    /** @type {?} */
    NgxaDatatableComponent.prototype.offset;
    /** @type {?} */
    NgxaDatatableComponent.prototype.externalPaging;
    /** @type {?} */
    NgxaDatatableComponent.prototype.externalSorting;
    /** @type {?} */
    NgxaDatatableComponent.prototype.loadingIndicator;
    /** @type {?} */
    NgxaDatatableComponent.prototype.scrollbarH;
    /** @type {?} */
    NgxaDatatableComponent.prototype.scrollbarV;
    /** @type {?} */
    NgxaDatatableComponent.prototype.reorderable;
    /** @type {?} */
    NgxaDatatableComponent.prototype.sortType;
    /** @type {?} */
    NgxaDatatableComponent.prototype.messages;
    /** @type {?} */
    NgxaDatatableComponent.prototype.selectionType;
    /** @type {?} */
    NgxaDatatableComponent.prototype.columnMode;
    /** @type {?} */
    NgxaDatatableComponent.prototype.headerHeight;
    /** @type {?} */
    NgxaDatatableComponent.prototype.footerHeight;
    /** @type {?} */
    NgxaDatatableComponent.prototype.rowHeight;
    /** @type {?} */
    NgxaDatatableComponent.prototype.header;
    /** @type {?} */
    NgxaDatatableComponent.prototype.column;
    /** @type {?} */
    NgxaDatatableComponent.prototype.footer;
    /** @type {?} */
    NgxaDatatableComponent.prototype.add;
    /** @type {?} */
    NgxaDatatableComponent.prototype.edit;
    /** @type {?} */
    NgxaDatatableComponent.prototype.delete;
    /** @type {?} */
    NgxaDatatableComponent.prototype.filter;
    /** @type {?} */
    NgxaDatatableComponent.prototype.api;
    /** @type {?} */
    NgxaDatatableComponent.prototype.startWithOpenData;
    /** @type {?} */
    NgxaDatatableComponent.prototype.filterEvent;
    /** @type {?} */
    NgxaDatatableComponent.prototype.formGroupFilter;
    /** @type {?} */
    NgxaDatatableComponent.prototype.sort;
    /** @type {?} */
    NgxaDatatableComponent.prototype.onAdd;
    /** @type {?} */
    NgxaDatatableComponent.prototype.onEdit;
    /** @type {?} */
    NgxaDatatableComponent.prototype.onDelete;
    /** @type {?} */
    NgxaDatatableComponent.prototype.onSearch;
    /** @type {?} */
    NgxaDatatableComponent.prototype.onFilter;
    /** @type {?} */
    NgxaDatatableComponent.prototype.onButtonCell;
    /** @type {?} */
    NgxaDatatableComponent.prototype.datatable;
    /** @type {?} */
    NgxaDatatableComponent.prototype.keywordParam;
    /** @type {?} */
    NgxaDatatableComponent.prototype._keyword;
    /** @type {?} */
    NgxaDatatableComponent.prototype.isDelete;
    /**
     * @type {?}
     * @protected
     */
    NgxaDatatableComponent.prototype.http;
    /**
     * @type {?}
     * @private
     */
    NgxaDatatableComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NgxaDatatableComponent.prototype.cdref;
    /**
     * @type {?}
     * @private
     */
    NgxaDatatableComponent.prototype.pageOffset;
    /**
     * @type {?}
     * @protected
     */
    NgxaDatatableComponent.prototype._search;
    /** @type {?} */
    NgxaDatatableComponent.prototype.locale;
    /**
     * @type {?}
     * @private
     */
    NgxaDatatableComponent.prototype.layout;
    /** @type {?} */
    NgxaDatatableComponent.prototype.injector;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxaDatatableCollapseComponent = /** @class */ (function () {
    function NgxaDatatableCollapseComponent() {
        var _this = this;
        this.toggle = (/**
         * @return {?}
         */
        function () {
            _this.opened$.pipe(take(1)).subscribe((/**
             * @param {?} x
             * @return {?}
             */
            function (x) { return _this.openedSubject.next(!x); }));
        });
        this.openedSubject = new ReplaySubject(1);
        this.openedSubject.next(false);
        this.opened$ = this.openedSubject.asObservable();
        this.openedState$ = this.opened$.pipe(map((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x ? 'expanded' : 'collapsed'; })));
    }
    NgxaDatatableCollapseComponent.decorators = [
        { type: Component, args: [{
                    selector: 'xa-datatable-collapse, [xa-datatable-collapse]',
                    template: "<div\n    [@openedState]=\"openedState$ | async\"\n    [ngClass]=\"openedState$ | async\">\n    <ng-content></ng-content>\n</div>",
                    animations: [
                        trigger('openedState', [
                            state('collapsed', style({
                                opacity: 0,
                                overflow: 'hidden',
                                height: '0px',
                                minHeight: '0',
                                padding: '0 0 0 0.5rem',
                            })),
                            state('expanded', style({
                                opacity: 1,
                                overflow: 'hidden',
                                height: '*',
                                padding: '1.5rem 0 0.5rem 0.5rem',
                                'border-bottom': '1px solid #d1d4d7',
                            })),
                            transition('collapsed <=> expanded', animate('500ms ease-in-out')),
                        ]),
                    ],
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    NgxaDatatableCollapseComponent.ctorParameters = function () { return []; };
    return NgxaDatatableCollapseComponent;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    NgxaDatatableCollapseComponent.prototype.openedSubject;
    /** @type {?} */
    NgxaDatatableCollapseComponent.prototype.opened$;
    /** @type {?} */
    NgxaDatatableCollapseComponent.prototype.openedState$;
    /** @type {?} */
    NgxaDatatableCollapseComponent.prototype.toggle;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxaDatatableHeaderComponent = /** @class */ (function () {
    function NgxaDatatableHeaderComponent() {
        this.header = true;
        this.footer = true;
        this.add = true;
        this.edit = true;
        this.delete = false;
        this.filter = true;
        this.onSearch = new EventEmitter();
        this.onFilter = new EventEmitter();
        this.onAdd = new EventEmitter();
        this.onDelete = new EventEmitter();
        this.showFilter = false;
        this.disabledButtonFilter = true;
    }
    /**
     * @return {?}
     */
    NgxaDatatableHeaderComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} search
     * @return {?}
     */
    NgxaDatatableHeaderComponent.prototype.doSearch = /**
     * @param {?} search
     * @return {?}
     */
    function (search) {
        if (this.showFilter)
            this.doFilterFunnel();
        this.onSearch.emit(search);
    };
    /**
     * @return {?}
     */
    NgxaDatatableHeaderComponent.prototype.doFilterFunnel = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._search = undefined;
        this.collapse.toggle();
        this.showFilter = !this.showFilter;
        if (!this.showFilter) {
            this.formGroupFilter.reset();
        }
        else {
            this.formGroupFilter.valueChanges.subscribe((/**
             * @param {?} val
             * @return {?}
             */
            function (val) {
                _this.disabledButtonFilter = false;
            }));
        }
    };
    /**
     * @return {?}
     */
    NgxaDatatableHeaderComponent.prototype.doFilter = /**
     * @return {?}
     */
    function () {
        this.onFilter.emit(this.formGroupFilter.value);
    };
    /**
     * @return {?}
     */
    NgxaDatatableHeaderComponent.prototype.doAdd = /**
     * @return {?}
     */
    function () {
        this.onAdd.emit(true);
    };
    /**
     * @return {?}
     */
    NgxaDatatableHeaderComponent.prototype.doDelete = /**
     * @return {?}
     */
    function () {
        this.onDelete.emit(true);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NgxaDatatableHeaderComponent.prototype.onKeyDown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.keyCode === 13) {
            this.doSearch(this._search);
        }
    };
    /**
     * @return {?}
     */
    NgxaDatatableHeaderComponent.prototype.onFocusSearch = /**
     * @return {?}
     */
    function () {
        if (this.showFilter)
            this.doFilterFunnel();
    };
    NgxaDatatableHeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'xa-datatable-header',
                    template: "<div class=\"header-datatable\" *ngIf=\"header\">\n    <div class=\"header-action\" *ngIf=\"add\">\n        <nb-icon\n            class=\"action-add\"\n            icon=\"file-add\"\n            (click)=\"doAdd()\">\n        </nb-icon>\n    </div>\n    <div class=\"header-action\" *ngIf=\"delete\">\n        <nb-icon\n            class=\"action-trash\"\n            icon=\"trash-2\"\n            (click)=\"doDelete()\">\n        </nb-icon>\n    </div>\n    <div class=\"header-filter\" *ngIf=\"filter\">\n        <xa-input-base-icon\n            [name]=\"'_filter.datatable'\"\n            [placeholder]=\"'datatable.typesearch'\"\n            [iconcursor]=\"true\"\n            [(ngModel)]=\"_search\"\n            (clickIcon)=\"doSearch($event)\"\n            (keydown)=\"onKeyDown($event)\"\n            (focus)=\"onFocusSearch()\">\n        </xa-input-base-icon>\n    </div>\n    <div class=\"filter-funnel\" *ngIf=\"filter && formGroupFilter\">\n        <nb-icon\n            class=\"filter-icon-funnel\"\n            [icon]=\"showFilter ? 'arrow-upward-outline' : 'funnel'\"\n            (click)=\"doFilterFunnel()\">\n        </nb-icon>\n    </div>\n</div>\n<div *ngIf=\"filter && formGroupFilter\" xa-datatable-collapse #collapse>\n    <ng-content></ng-content>\n    <div class=\"form-group row\">\n        <div class=\"offset-sm-3 col-sm-9\">\n          <button\n            type=\"submit\"\n            status=\"primary\"\n            (click)=\"doFilter()\"\n            nbButton>\n            {{ 'Search' | translate}}\n          </button>\n        </div>\n    </div>\n</div>",
                    encapsulation: ViewEncapsulation.None,
                    styles: [".header-datatable{width:100%;display:flex;padding-bottom:.3rem}.header-filter{width:100%}.filter-funnel{right:0;padding:10px 5px;cursor:pointer}.filter-icon-funnel:hover{color:#ffc94d}.header-action{left:0;padding:10px 5px;cursor:pointer}.action-add:hover{color:#598bff}.action-trash:hover{color:#ff708d}"]
                }] }
    ];
    NgxaDatatableHeaderComponent.propDecorators = {
        header: [{ type: Input }],
        footer: [{ type: Input }],
        add: [{ type: Input }],
        edit: [{ type: Input }],
        delete: [{ type: Input }],
        filter: [{ type: Input }],
        formGroupFilter: [{ type: Input }],
        onSearch: [{ type: Output }],
        onFilter: [{ type: Output }],
        onAdd: [{ type: Output }],
        onDelete: [{ type: Output }],
        collapse: [{ type: ViewChild, args: ['collapse', { static: false },] }]
    };
    return NgxaDatatableHeaderComponent;
}());
if (false) {
    /** @type {?} */
    NgxaDatatableHeaderComponent.prototype.header;
    /** @type {?} */
    NgxaDatatableHeaderComponent.prototype.footer;
    /** @type {?} */
    NgxaDatatableHeaderComponent.prototype.add;
    /** @type {?} */
    NgxaDatatableHeaderComponent.prototype.edit;
    /** @type {?} */
    NgxaDatatableHeaderComponent.prototype.delete;
    /** @type {?} */
    NgxaDatatableHeaderComponent.prototype.filter;
    /** @type {?} */
    NgxaDatatableHeaderComponent.prototype.formGroupFilter;
    /** @type {?} */
    NgxaDatatableHeaderComponent.prototype.onSearch;
    /** @type {?} */
    NgxaDatatableHeaderComponent.prototype.onFilter;
    /** @type {?} */
    NgxaDatatableHeaderComponent.prototype.onAdd;
    /** @type {?} */
    NgxaDatatableHeaderComponent.prototype.onDelete;
    /** @type {?} */
    NgxaDatatableHeaderComponent.prototype.collapse;
    /** @type {?} */
    NgxaDatatableHeaderComponent.prototype._search;
    /** @type {?} */
    NgxaDatatableHeaderComponent.prototype.showFilter;
    /** @type {?} */
    NgxaDatatableHeaderComponent.prototype.disabledButtonFilter;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxaDatatableBaseComponent = /** @class */ (function () {
    function NgxaDatatableBaseComponent(locale, injector) {
        this.locale = locale;
        this.injector = injector;
        this.rows = [];
        this.columns = [];
        this.selected = [];
        this.limit = 10;
        this.count = 0;
        this.offset = 0;
        this.externalPaging = false;
        this.externalSorting = false;
        this.loadingIndicator = false;
        this.scrollbarH = false;
        this.scrollbarV = false;
        this.reorderable = true;
        this.sortType = SortType.single;
        this.selectionType = SelectionType.checkbox;
        this.columnMode = ColumnMode.force;
        this.headerHeight = 40;
        this.footerHeight = 'auto';
        this.rowHeight = 'auto';
        this.header = false;
        this.column = false;
        this.footer = false;
        this.add = true;
        this.edit = true;
        this.delete = false;
        this.filter = true;
        this.startWithOpenData = true;
        this.page = new EventEmitter();
        this.sort = new EventEmitter();
        this.select = new EventEmitter();
        this.activate = new EventEmitter();
        this.onButtonCell = new EventEmitter();
    }
    /**
     * @param {?} page
     * @return {?}
     */
    NgxaDatatableBaseComponent.prototype.setPage = /**
     * @param {?} page
     * @return {?}
     */
    function (page) {
        this.page.emit(page);
    };
    /**
     * @param {?} order
     * @return {?}
     */
    NgxaDatatableBaseComponent.prototype.onSort = /**
     * @param {?} order
     * @return {?}
     */
    function (order) {
        this.sort.emit(order);
    };
    /**
     * @param {?} selected
     * @return {?}
     */
    NgxaDatatableBaseComponent.prototype.onSelect = /**
     * @param {?} selected
     * @return {?}
     */
    function (selected) {
        this.select.emit(selected);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NgxaDatatableBaseComponent.prototype.onActivate = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.type === 'click') {
            if (this.selectionType === 'checkbox') {
                if (event.cellIndex > 0) {
                    this.activate.emit(event.row);
                }
            }
            else {
                this.activate.emit(event.row);
            }
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NgxaDatatableBaseComponent.prototype.sanitizedValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value !== null && value !== undefined ? this.stripHtml(value) : value;
    };
    /**
     * @param {?} html
     * @return {?}
     */
    NgxaDatatableBaseComponent.prototype.stripHtml = /**
     * @param {?} html
     * @return {?}
     */
    function (html) {
        if (!html.replace) {
            return html;
        }
        return html.replace(/<\/?[^>]+(>|$)/g, '');
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NgxaDatatableBaseComponent.prototype.onClickButton = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.onButtonCell.emit(event);
    };
    NgxaDatatableBaseComponent.decorators = [
        { type: Component, args: [{
                    selector: 'xa-datatable-base',
                    template: "<ngx-datatable\n    class=\"ngxa\"\n    [rows]=\"rows\"\n    [columns]=\"columns\"\n    [selected]=\"selected\"\n    [limit]=\"limit\"\n    [count]=\"count\"\n    [offset]=\"offset\"\n    [externalPaging]=\"externalPaging\"\n    [externalSorting]=\"externalSorting\"\n    [loadingIndicator]=\"loadingIndicator\"\n    [scrollbarH]=\"scrollbarH\"\n    [scrollbarV]=\"scrollbarV\"\n    [reorderable]=\"reorderable\"\n    [sortType]=\"sortType\"\n    [selectionType]=\"selectionType\"\n    [columnMode]=\"columnMode\"\n    [headerHeight]=\"headerHeight\"\n    [footerHeight]=\"footerHeight\"\n    [rowHeight]=\"rowHeight\"\n    (page)=\"setPage($event)\"\n    (sort)=\"onSort($event)\"\n    (select)=\"onSelect($event)\"\n    (activate)=\"onActivate($event)\"\n    #datatable>\n    <div *ngIf=\"column\">\n        <ngx-datatable-column *ngIf=\"selectionType === 'checkbox'\"\n            [width]=\"30\"\n            [sortable]=\"false\"\n            [canAutoResize]=\"false\"\n            [draggable]=\"false\"\n            [resizeable]=\"false\"\n            [headerCheckboxable]=\"true\"\n            [checkboxable]=\"true\"\n            [frozenLeft]=\"true\">\n        </ngx-datatable-column>\n        <ngx-datatable-column *ngFor=\"let col of columns\"\n            [prop]=\"col.prop\"\n            [name]=\"col.name | translate\"\n            [sortable]=\"col.sortable\"\n            [canAutoResize]=\"col.canAutoResize\"\n            [draggable]=\"col.draggable\"\n            [resizeable]=\"col.resizeable\"\n            [width]=\"col.width\"\n            [frozenLeft]=\"col.frozenLeft\"\n            [frozenRight]=\"col.frozenRight\">\n            <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n                <span *ngIf=\"!col.cellTemplate && !col.type\" [title]=\"sanitizedValue(value)\" [innerHTML]=\"value\"></span>\n                <span *ngIf=\"!col.cellTemplate && col.type === 'prefix'\" [title]=\"sanitizedValue(value)\" [innerHTML]=\"value + ' ' + col.prefix\"></span>\n                <span *ngIf=\"!col.cellTemplate && col.type === 'html'\" [title]=\"sanitizedValue(value)\" [innerHTML]=\"value\"></span>\n                <span *ngIf=\"!col.cellTemplate && col.type === 'icon'\" [title]=\"sanitizedValue(value)\"><span class=\"{{value}}\"></span></span>\n                <button\n                    *ngIf=\"!col.cellTemplate && col.type === 'button'\"\n                    [status]=\"col.buttonStatus ? col.buttonStatus : 'primary'\"\n                    (click)=\"onClickButton(value)\"\n                    [size]=\"'tiny'\"\n                    nbButton>\n                    {{ col.button | translate }}\n                </button>\n            </ng-template>\n        </ngx-datatable-column>\n    </div>\n    <ngx-datatable-footer *ngIf=\"footer\">\n        <ng-template\n            ngx-datatable-footer-template\n            let-rowCount=\"rowCount\"\n            let-pageSize=\"pageSize\"\n            let-selectedCount=\"selectedCount\"\n            let-curPage=\"curPage\"\n            let-offset=\"offset\"\n            let-isVisible=\"isVisible\">\n            <div class=\"page-count\">\n                <div> {{ selectedCount }} {{ 'Selected' | translate }} | {{ count }} {{ 'Total' | translate }} </div>\n            </div>\n            <datatable-pager\n                [pagerLeftArrowIcon]=\"'datatable-icon-left'\"\n                [pagerRightArrowIcon]=\"'datatable-icon-right'\"\n                [pagerPreviousIcon]=\"'datatable-icon-prev'\"\n                [pagerNextIcon]=\"'datatable-icon-skip'\"\n                [page]=\"curPage\"\n                [size]=\"pageSize\"\n                [count]=\"rowCount\"\n                [hidden]=\"!((rowCount / pageSize) > 1)\"\n                (change)=\"datatable.onFooterPage($event)\">\n            </datatable-pager>\n        </ng-template>\n    </ngx-datatable-footer>\n</ngx-datatable>\n",
                    encapsulation: ViewEncapsulation.None,
                    styles: [".ngx-datatable.material{background:#fff;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.ngx-datatable.material.striped .datatable-row-odd{background:#eee}.ngx-datatable.material.multi-click-selection .datatable-body-row.active,.ngx-datatable.material.multi-click-selection .datatable-body-row.active .datatable-row-group,.ngx-datatable.material.multi-selection .datatable-body-row.active,.ngx-datatable.material.multi-selection .datatable-body-row.active .datatable-row-group,.ngx-datatable.material.single-selection .datatable-body-row.active,.ngx-datatable.material.single-selection .datatable-body-row.active .datatable-row-group{background-color:#304ffe;color:#fff}.ngx-datatable.material.multi-click-selection .datatable-body-row.active:hover,.ngx-datatable.material.multi-click-selection .datatable-body-row.active:hover .datatable-row-group,.ngx-datatable.material.multi-selection .datatable-body-row.active:hover,.ngx-datatable.material.multi-selection .datatable-body-row.active:hover .datatable-row-group,.ngx-datatable.material.single-selection .datatable-body-row.active:hover,.ngx-datatable.material.single-selection .datatable-body-row.active:hover .datatable-row-group{background-color:#193ae4;color:#fff}.ngx-datatable.material.multi-click-selection .datatable-body-row.active:focus,.ngx-datatable.material.multi-click-selection .datatable-body-row.active:focus .datatable-row-group,.ngx-datatable.material.multi-selection .datatable-body-row.active:focus,.ngx-datatable.material.multi-selection .datatable-body-row.active:focus .datatable-row-group,.ngx-datatable.material.single-selection .datatable-body-row.active:focus,.ngx-datatable.material.single-selection .datatable-body-row.active:focus .datatable-row-group{background-color:#2041ef;color:#fff}.ngx-datatable.material:not(.cell-selection) .datatable-body-row:hover,.ngx-datatable.material:not(.cell-selection) .datatable-body-row:hover .datatable-row-group{background-color:#eee;transition-property:background;transition-duration:.3s;transition-timing-function:linear}.ngx-datatable.material:not(.cell-selection) .datatable-body-row:focus,.ngx-datatable.material:not(.cell-selection) .datatable-body-row:focus .datatable-row-group{background-color:#ddd}.ngx-datatable.material.cell-selection .datatable-body-cell:hover,.ngx-datatable.material.cell-selection .datatable-body-cell:hover .datatable-row-group{background-color:#eee;transition-property:background;transition-duration:.3s;transition-timing-function:linear}.ngx-datatable.material.cell-selection .datatable-body-cell:focus,.ngx-datatable.material.cell-selection .datatable-body-cell:focus .datatable-row-group{background-color:#ddd}.ngx-datatable.material.cell-selection .datatable-body-cell.active,.ngx-datatable.material.cell-selection .datatable-body-cell.active .datatable-row-group{background-color:#304ffe;color:#fff}.ngx-datatable.material.cell-selection .datatable-body-cell.active:hover,.ngx-datatable.material.cell-selection .datatable-body-cell.active:hover .datatable-row-group{background-color:#193ae4;color:#fff}.ngx-datatable.material.cell-selection .datatable-body-cell.active:focus,.ngx-datatable.material.cell-selection .datatable-body-cell.active:focus .datatable-row-group{background-color:#2041ef;color:#fff}.ngx-datatable.material .empty-row{height:50px;text-align:left;padding:.5rem 1.2rem;vertical-align:top;border-top:0}.ngx-datatable.material .loading-row{text-align:left;padding:.5rem 1.2rem;vertical-align:top;border-top:0}.ngx-datatable.material .datatable-body .datatable-row-left,.ngx-datatable.material .datatable-header .datatable-row-left{background-color:#fff;background-position:100% 0;background-repeat:repeat-y;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAFklEQVQIHWPSkNeSBmJhTQVtbiDNCgASagIIuJX8OgAAAABJRU5ErkJggg==)}.ngx-datatable.material .datatable-body .datatable-row-right,.ngx-datatable.material .datatable-header .datatable-row-right{background-position:0 0;background-color:#fff;background-repeat:repeat-y;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAFklEQVQI12PQkNdi1VTQ5gbSwkAsDQARLAIGtOSFUAAAAABJRU5ErkJggg==)}.ngx-datatable.material .datatable-header{border-bottom:1px solid rgba(0,0,0,.12)}.ngx-datatable.material .datatable-header .datatable-header-cell{text-align:left;padding:.9rem 1.2rem;background-color:#fff;color:rgba(0,0,0,.54);vertical-align:bottom;font-size:12px;font-weight:500}.ngx-datatable.material .datatable-header .datatable-header-cell .datatable-header-cell-wrapper{position:relative}.ngx-datatable.material .datatable-header .datatable-header-cell.longpress .draggable::after{transition:transform .4s,opacity .4s;opacity:.5;transform:scale(1)}.ngx-datatable.material .datatable-header .datatable-header-cell .draggable::after{content:' ';position:absolute;top:50%;left:50%;margin:-30px 0 0 -30px;height:60px;width:60px;background:#eee;border-radius:100%;opacity:1;-webkit-filter:none;filter:none;transform:scale(0);z-index:9999;pointer-events:none}.ngx-datatable.material .datatable-header .datatable-header-cell.dragging .resize-handle{border-right:none}.ngx-datatable.material .datatable-header .resize-handle{border-right:1px solid #eee}.ngx-datatable.material .datatable-body .datatable-row-detail{background:#f5f5f5;padding:10px}.ngx-datatable.material .datatable-body .datatable-group-header{background:#f5f5f5;border-bottom:1px solid #d9d8d9;border-top:1px solid #d9d8d9}.ngx-datatable.material .datatable-body .datatable-body-row .datatable-body-cell,.ngx-datatable.material .datatable-body .datatable-body-row .datatable-body-group-cell{text-align:left;padding:.9rem 1.2rem;vertical-align:top;border-top:0;color:rgba(0,0,0,.87);transition:width .3s;font-size:14px;font-weight:400}.ngx-datatable.material .datatable-body .progress-linear{display:block;width:100%;height:5px;padding:0;margin:0;position:absolute}.ngx-datatable.material .datatable-body .progress-linear .container{display:block;position:relative;overflow:hidden;width:100%;height:5px;transform:translate(0,0) scale(1,1);background-color:#aad1f9}.ngx-datatable.material .datatable-body .progress-linear .container .bar{transition:transform .2s linear;-webkit-animation:.8s cubic-bezier(.39,.575,.565,1) infinite query;animation:.8s cubic-bezier(.39,.575,.565,1) infinite query;background-color:#106cc8;position:absolute;left:0;top:0;bottom:0;width:100%;height:5px}.ngx-datatable.material .datatable-footer{border-top:1px solid rgba(0,0,0,.12);font-size:12px;font-weight:400;color:rgba(0,0,0,.54)}.ngx-datatable.material .datatable-footer .page-count{line-height:50px;height:50px;padding:0 1.2rem}.ngx-datatable.material .datatable-footer .datatable-pager{margin:0 10px}.ngx-datatable.material .datatable-footer .datatable-pager li{vertical-align:middle}.ngx-datatable.material .datatable-footer .datatable-pager li.disabled a{color:rgba(0,0,0,.26)!important;background-color:transparent!important}.ngx-datatable.material .datatable-footer .datatable-pager li.active a{background-color:rgba(158,158,158,.2);font-weight:700}.ngx-datatable.material .datatable-footer .datatable-pager a{height:22px;min-width:24px;line-height:22px;padding:0 6px;border-radius:3px;margin:6px 3px;text-align:center;color:rgba(0,0,0,.54);text-decoration:none;vertical-align:bottom}.ngx-datatable.material .datatable-footer .datatable-pager a:hover{color:rgba(0,0,0,.75);background-color:rgba(158,158,158,.2)}.ngx-datatable.material .datatable-footer .datatable-pager .datatable-icon-left,.ngx-datatable.material .datatable-footer .datatable-pager .datatable-icon-prev,.ngx-datatable.material .datatable-footer .datatable-pager .datatable-icon-right,.ngx-datatable.material .datatable-footer .datatable-pager .datatable-icon-skip{font-size:20px;line-height:20px;padding:0 3px}.ngx-datatable.material .datatable-summary-row .datatable-body-row,.ngx-datatable.material .datatable-summary-row .datatable-body-row:hover{background-color:#ddd}.ngx-datatable.material .datatable-summary-row .datatable-body-row .datatable-body-cell{font-weight:700}.datatable-checkbox{position:relative;margin:0;cursor:pointer;vertical-align:middle;display:inline-block;box-sizing:border-box;padding:0}.datatable-checkbox input[type=checkbox]{position:relative;margin:0 1rem 0 0;cursor:pointer;outline:0}.datatable-checkbox input[type=checkbox]:before{transition:.3s ease-in-out;content:'';position:absolute;left:0;z-index:1;width:1rem;height:1rem;border:2px solid #f2f2f2}.datatable-checkbox input[type=checkbox]:checked:before{transform:rotate(-45deg);height:.5rem;border-color:#009688;border-top-style:none;border-right-style:none}.datatable-checkbox input[type=checkbox]:after{content:'';position:absolute;top:0;left:0;width:1rem;height:1rem;background:#fff;cursor:pointer}@-webkit-keyframes query{0%{opacity:1;transform:translateX(35%) scale(.3,1)}100%{opacity:0;transform:translateX(-50%) scale(0,1)}}@keyframes query{0%{opacity:1;transform:translateX(35%) scale(.3,1)}100%{opacity:0;transform:translateX(-50%) scale(0,1)}}.ngx-datatable.bootstrap{box-shadow:none;font-size:13px}.ngx-datatable.bootstrap .datatable-header{height:unset!important}.ngx-datatable.bootstrap .datatable-header .datatable-header-cell{vertical-align:bottom;padding:.75rem;border-bottom:1px solid #d1d4d7}.ngx-datatable.bootstrap .datatable-header .datatable-header-cell .datatable-header-cell-label{line-height:24px}.ngx-datatable.bootstrap .datatable-body .datatable-body-row{vertical-align:top;border-top:1px solid #d1d4d7}.ngx-datatable.bootstrap .datatable-body .datatable-body-row.datatable-row-even{background-color:rgba(0,0,0,.05)}.ngx-datatable.bootstrap .datatable-body .datatable-body-row.active{background-color:#1483ff;color:#fff}.ngx-datatable.bootstrap .datatable-body .datatable-body-row .datatable-body-cell{padding:.75rem;text-align:left;vertical-align:top}.ngx-datatable.bootstrap .datatable-body .empty-row{position:relative;padding:.75rem 1.25rem;margin-bottom:0}.ngx-datatable.bootstrap .datatable-footer{background:#424242;color:#ededed;margin-top:-1px}.ngx-datatable.bootstrap .datatable-footer .page-count{line-height:50px;height:50px;padding:0 1.2rem}.ngx-datatable.bootstrap .datatable-footer .datatable-pager{margin:0 10px;vertical-align:top}.ngx-datatable.bootstrap .datatable-footer .datatable-pager ul li{margin:10px 0}.ngx-datatable.bootstrap .datatable-footer .datatable-pager ul li:not(.disabled).active a,.ngx-datatable.bootstrap .datatable-footer .datatable-pager ul li:not(.disabled):hover a{background-color:#545454;font-weight:700}.ngx-datatable.bootstrap .datatable-footer .datatable-pager a{height:22px;min-width:24px;line-height:22px;padding:0;border-radius:3px;margin:0 3px;text-align:center;text-decoration:none;vertical-align:bottom;color:#ededed}.ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-left,.ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-prev,.ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-right,.ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-skip{font-size:18px;line-height:27px;padding:0 3px}.ngx-datatable.bootstrap .datatable-summary-row .datatable-body-row .datatable-body-cell{font-weight:700}.ngx-datatable.dark{box-shadow:none;background:#1b1e27;border:1px solid #2f3646;color:#fff;font-size:13px}.ngx-datatable.dark .datatable-header{background:#181b24;color:#72809b}.ngx-datatable.dark .datatable-header .datatable-header-cell{text-align:left;padding:.5rem 1.2rem;font-weight:700}.ngx-datatable.dark .datatable-header .datatable-header-cell .datatable-header-cell-label{line-height:24px}.ngx-datatable.dark .datatable-body{background:#1a1e28}.ngx-datatable.dark .datatable-body .datatable-body-row{border-top:1px solid #2f3646}.ngx-datatable.dark .datatable-body .datatable-body-row .datatable-body-cell{text-align:left;padding:.5rem 1.2rem;vertical-align:top}.ngx-datatable.dark .datatable-body .datatable-body-row:hover{background:#171b24;transition-property:background;transition-duration:.3s;transition-timing-function:linear}.ngx-datatable.dark .datatable-body .datatable-body-row:focus{background-color:#232837}.ngx-datatable.dark .datatable-body .datatable-body-row.active{background-color:#1483ff;color:#fff}.ngx-datatable.dark .datatable-footer{background:#232837;color:#72809b;margin-top:-1px}.ngx-datatable.dark .datatable-footer .page-count{line-height:50px;height:50px;padding:0 1.2rem}.ngx-datatable.dark .datatable-footer .datatable-pager{margin:0 10px;vertical-align:top}.ngx-datatable.dark .datatable-footer .datatable-pager ul li{margin:10px 0}.ngx-datatable.dark .datatable-footer .datatable-pager ul li:not(.disabled).active a,.ngx-datatable.dark .datatable-footer .datatable-pager ul li:not(.disabled):hover a{background-color:#455066;font-weight:700}.ngx-datatable.dark .datatable-footer .datatable-pager a{height:22px;min-width:24px;line-height:22px;padding:0;border-radius:3px;margin:0 3px;text-align:center;text-decoration:none;vertical-align:bottom;color:#72809b}.ngx-datatable.dark .datatable-footer .datatable-pager .datatable-icon-left,.ngx-datatable.dark .datatable-footer .datatable-pager .datatable-icon-prev,.ngx-datatable.dark .datatable-footer .datatable-pager .datatable-icon-right,.ngx-datatable.dark .datatable-footer .datatable-pager .datatable-icon-skip{font-size:18px;line-height:27px;padding:0 3px}.ngx-datatable.dark .datatable-summary-row .datatable-body-row,.ngx-datatable.dark .datatable-summary-row .datatable-body-row:hover{background-color:#14171f}.ngx-datatable.dark .datatable-summary-row .datatable-body-row .datatable-body-cell{font-weight:700}.ngx-datatable.ngxa{box-shadow:none;font-size:13px}.ngx-datatable.ngxa .datatable-header{height:unset!important}.ngx-datatable.ngxa .datatable-header .datatable-header-cell{vertical-align:bottom;padding:.75rem;border-bottom:1px solid #d1d4d7}.ngx-datatable.ngxa .datatable-header .datatable-header-cell .datatable-header-cell-label{line-height:24px}.ngx-datatable.ngxa .datatable-header .datatable-header-cell .datatable-checkbox input[type=checkbox]:checked:before{transform:rotate(-45deg);height:.5rem;border-color:#36f;border-top-style:none;border-right-style:none}.ngx-datatable.ngxa .datatable-header .datatable-row-left{background-color:#fff;background-position:100% 0;background-repeat:repeat-y;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAFklEQVQIHWPSkNeSBmJhTQVtbiDNCgASagIIuJX8OgAAAABJRU5ErkJggg==)}.ngx-datatable.ngxa .datatable-header .datatable-row-right{background-color:#fff;background-position:0 0;background-repeat:repeat-y;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAFklEQVQI12PQkNdi1VTQ5gbSwkAsDQARLAIGtOSFUAAAAABJRU5ErkJggg==)}.ngx-datatable.ngxa .datatable-body .datatable-body-row{vertical-align:top}.ngx-datatable.ngxa .datatable-body .datatable-body-row.datatable-row-even,.ngx-datatable.ngxa .datatable-body .datatable-body-row.datatable-row-even .datatable-row-left,.ngx-datatable.ngxa .datatable-body .datatable-body-row.datatable-row-even .datatable-row-right{background-color:#f2f2f2}.ngx-datatable.ngxa .datatable-body .datatable-body-row.datatable-row-odd .datatable-row-left,.ngx-datatable.ngxa .datatable-body .datatable-body-row.datatable-row-odd .datatable-row-right{background-color:#fff}.ngx-datatable.ngxa .datatable-body .datatable-body-row .datatable-row-left{background-position:100% 0;background-repeat:repeat-y;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAFklEQVQIHWPSkNeSBmJhTQVtbiDNCgASagIIuJX8OgAAAABJRU5ErkJggg==)}.ngx-datatable.ngxa .datatable-body .datatable-body-row .datatable-row-right{background-position:0 0;background-repeat:repeat-y;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAFklEQVQI12PQkNdi1VTQ5gbSwkAsDQARLAIGtOSFUAAAAABJRU5ErkJggg==)}.ngx-datatable.ngxa .datatable-body .datatable-body-row.active{background-color:#36f;color:#fff}.ngx-datatable.ngxa .datatable-body .datatable-body-row.active .datatable-row-left,.ngx-datatable.ngxa .datatable-body .datatable-body-row.active .datatable-row-right{background-color:#36f}.ngx-datatable.ngxa .datatable-body .datatable-body-row:hover,.ngx-datatable.ngxa .datatable-body .datatable-body-row:hover .datatable-row-group{cursor:pointer;border-bottom:.025rem solid #7899ff;transition-property:background;transition-duration:.3s;transition-timing-function:linear}.ngx-datatable.ngxa .datatable-body .datatable-body-row .datatable-body-cell{padding:.75rem;text-align:left;vertical-align:top}.ngx-datatable.ngxa .datatable-body .datatable-body-row .datatable-body-cell .datatable-checkbox input[type=checkbox]:checked:before{transform:rotate(-45deg);height:.5rem;border-color:#36f;border-top-style:none;border-right-style:none}.ngx-datatable.ngxa .datatable-body .empty-row{position:relative;padding:.75rem 1.25rem;margin-bottom:0}.ngx-datatable.ngxa .datatable-body .progress-linear{display:block;width:100%;height:5px;padding:0;margin:0;position:absolute}.ngx-datatable.ngxa .datatable-body .progress-linear .container{display:block;position:relative;overflow:hidden;width:100%;height:5px;transform:translate(0,0) scale(1,1);background-color:#aad1f9}.ngx-datatable.ngxa .datatable-body .progress-linear .container .bar{transition:transform .2s linear;-webkit-animation:.8s cubic-bezier(.39,.575,.565,1) infinite query;animation:.8s cubic-bezier(.39,.575,.565,1) infinite query;background-color:#106cc8;position:absolute;left:0;top:0;bottom:0;width:100%;height:5px}.ngx-datatable.ngxa .datatable-footer{background:#f2f2f2;color:#5a5a5a;margin-top:-1px}.ngx-datatable.ngxa .datatable-footer .page-count{padding:.7rem}.ngx-datatable.ngxa .datatable-footer .datatable-pager{margin:0 10px;vertical-align:top}.ngx-datatable.ngxa .datatable-footer .datatable-pager ul li{margin:10px 0}.ngx-datatable.ngxa .datatable-footer .datatable-pager ul li:not(.disabled).active a,.ngx-datatable.ngxa .datatable-footer .datatable-pager ul li:not(.disabled):hover a{background-color:#c1c1c1;font-weight:700}.ngx-datatable.ngxa .datatable-footer .datatable-pager a{height:22px;min-width:24px;line-height:22px;padding:0;border-radius:3px;margin:0 3px;text-align:center;text-decoration:none;vertical-align:bottom;color:#5a5a5a}.ngx-datatable.ngxa .datatable-footer .datatable-pager .datatable-icon-left,.ngx-datatable.ngxa .datatable-footer .datatable-pager .datatable-icon-prev,.ngx-datatable.ngxa .datatable-footer .datatable-pager .datatable-icon-right,.ngx-datatable.ngxa .datatable-footer .datatable-pager .datatable-icon-skip{line-height:27px;padding:0 .2rem}.ngx-datatable.ngxa .datatable-summary-row .datatable-body-row .datatable-body-cell{font-weight:700}"]
                }] }
    ];
    /** @nocollapse */
    NgxaDatatableBaseComponent.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] },
        { type: Injector }
    ]; };
    NgxaDatatableBaseComponent.propDecorators = {
        rows: [{ type: Input }],
        columns: [{ type: Input }],
        selected: [{ type: Input }],
        limit: [{ type: Input }],
        count: [{ type: Input }],
        offset: [{ type: Input }],
        externalPaging: [{ type: Input }],
        externalSorting: [{ type: Input }],
        loadingIndicator: [{ type: Input }],
        scrollbarH: [{ type: Input }],
        scrollbarV: [{ type: Input }],
        reorderable: [{ type: Input }],
        sortType: [{ type: Input }],
        messages: [{ type: Input }],
        selectionType: [{ type: Input }],
        columnMode: [{ type: Input }],
        headerHeight: [{ type: Input }],
        footerHeight: [{ type: Input }],
        rowHeight: [{ type: Input }],
        header: [{ type: Input }],
        column: [{ type: Input }],
        footer: [{ type: Input }],
        add: [{ type: Input }],
        edit: [{ type: Input }],
        delete: [{ type: Input }],
        filter: [{ type: Input }],
        startWithOpenData: [{ type: Input }],
        page: [{ type: Output }],
        sort: [{ type: Output }],
        select: [{ type: Output }],
        activate: [{ type: Output }],
        onButtonCell: [{ type: Output }]
    };
    return NgxaDatatableBaseComponent;
}());
if (false) {
    /** @type {?} */
    NgxaDatatableBaseComponent.prototype.rows;
    /** @type {?} */
    NgxaDatatableBaseComponent.prototype.columns;
    /** @type {?} */
    NgxaDatatableBaseComponent.prototype.selected;
    /** @type {?} */
    NgxaDatatableBaseComponent.prototype.limit;
    /** @type {?} */
    NgxaDatatableBaseComponent.prototype.count;
    /** @type {?} */
    NgxaDatatableBaseComponent.prototype.offset;
    /** @type {?} */
    NgxaDatatableBaseComponent.prototype.externalPaging;
    /** @type {?} */
    NgxaDatatableBaseComponent.prototype.externalSorting;
    /** @type {?} */
    NgxaDatatableBaseComponent.prototype.loadingIndicator;
    /** @type {?} */
    NgxaDatatableBaseComponent.prototype.scrollbarH;
    /** @type {?} */
    NgxaDatatableBaseComponent.prototype.scrollbarV;
    /** @type {?} */
    NgxaDatatableBaseComponent.prototype.reorderable;
    /** @type {?} */
    NgxaDatatableBaseComponent.prototype.sortType;
    /** @type {?} */
    NgxaDatatableBaseComponent.prototype.messages;
    /** @type {?} */
    NgxaDatatableBaseComponent.prototype.selectionType;
    /** @type {?} */
    NgxaDatatableBaseComponent.prototype.columnMode;
    /** @type {?} */
    NgxaDatatableBaseComponent.prototype.headerHeight;
    /** @type {?} */
    NgxaDatatableBaseComponent.prototype.footerHeight;
    /** @type {?} */
    NgxaDatatableBaseComponent.prototype.rowHeight;
    /** @type {?} */
    NgxaDatatableBaseComponent.prototype.header;
    /** @type {?} */
    NgxaDatatableBaseComponent.prototype.column;
    /** @type {?} */
    NgxaDatatableBaseComponent.prototype.footer;
    /** @type {?} */
    NgxaDatatableBaseComponent.prototype.add;
    /** @type {?} */
    NgxaDatatableBaseComponent.prototype.edit;
    /** @type {?} */
    NgxaDatatableBaseComponent.prototype.delete;
    /** @type {?} */
    NgxaDatatableBaseComponent.prototype.filter;
    /** @type {?} */
    NgxaDatatableBaseComponent.prototype.startWithOpenData;
    /** @type {?} */
    NgxaDatatableBaseComponent.prototype.page;
    /** @type {?} */
    NgxaDatatableBaseComponent.prototype.sort;
    /** @type {?} */
    NgxaDatatableBaseComponent.prototype.select;
    /** @type {?} */
    NgxaDatatableBaseComponent.prototype.activate;
    /** @type {?} */
    NgxaDatatableBaseComponent.prototype.onButtonCell;
    /** @type {?} */
    NgxaDatatableBaseComponent.prototype.locale;
    /** @type {?} */
    NgxaDatatableBaseComponent.prototype.injector;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxaButtonSubmitComponent = /** @class */ (function () {
    function NgxaButtonSubmitComponent() {
        this.formGroupButton = new FormGroup({});
        this.disabledButton = false;
        this.colLabel = 3;
        this.colButton = 9;
        this.type = 'submit';
        this.status = 'primary';
        this.skeleton = false;
        this.onSubmit = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    NgxaButtonSubmitComponent.prototype.click = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.onSubmit.emit(event);
    };
    NgxaButtonSubmitComponent.decorators = [
        { type: Component, args: [{
                    selector: 'xa-button-submit',
                    template: "<div class=\"form-group row\">\n  <div class=\"offset-sm-{{colLabel}} col-sm-{{colButton}}\" *ngIf=\"!skeleton; else contentskeleton\">\n    <button\n      type=\"{{type}}\"\n      status=\"{{status}}\"\n      (click)=\"click($event)\"\n      [disabled]=\"formGroupButton.invalid || formGroupButton.pristine || disabledButton\"\n      nbButton>\n      {{ name | translate}}\n    </button>\n  </div>\n  <ng-template #contentskeleton>\n    <div class=\"offset-sm-{{colLabel}} col-sm-{{colButton}}\">\n      <div\n        [ngClass]=\"{\n          'button-skeleton': true,\n          'skeleton': skeleton\n        }\">\n      </div>\n    </div>\n  </ng-template>\n</div>",
                    encapsulation: ViewEncapsulation.None,
                    styles: [""]
                }] }
    ];
    NgxaButtonSubmitComponent.propDecorators = {
        formGroupButton: [{ type: Input }],
        name: [{ type: Input }],
        disabledButton: [{ type: Input }],
        colLabel: [{ type: Input }],
        colButton: [{ type: Input }],
        type: [{ type: Input }],
        status: [{ type: Input }],
        skeleton: [{ type: Input }],
        onSubmit: [{ type: Output }]
    };
    return NgxaButtonSubmitComponent;
}());
if (false) {
    /** @type {?} */
    NgxaButtonSubmitComponent.prototype.formGroupButton;
    /** @type {?} */
    NgxaButtonSubmitComponent.prototype.name;
    /** @type {?} */
    NgxaButtonSubmitComponent.prototype.disabledButton;
    /** @type {?} */
    NgxaButtonSubmitComponent.prototype.colLabel;
    /** @type {?} */
    NgxaButtonSubmitComponent.prototype.colButton;
    /** @type {?} */
    NgxaButtonSubmitComponent.prototype.type;
    /** @type {?} */
    NgxaButtonSubmitComponent.prototype.status;
    /** @type {?} */
    NgxaButtonSubmitComponent.prototype.skeleton;
    /** @type {?} */
    NgxaButtonSubmitComponent.prototype.onSubmit;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var components$c = [
    NgxaButtonSubmitComponent,
];
var NgxaButtonModule = /** @class */ (function () {
    function NgxaButtonModule() {
    }
    NgxaButtonModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        NbButtonModule,
                        TranslateModule,
                        NgxaBaseModule,
                    ],
                    declarations: __spread(components$c),
                    exports: __spread(components$c, [
                        NbButtonModule,
                    ]),
                },] }
    ];
    return NgxaButtonModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var components$d = [
    NgxaDatatableComponent,
    NgxaDatatableBaseComponent,
    NgxaDatatableHeaderComponent,
    NgxaDatatableCollapseComponent,
];
var NgxaTableModule = /** @class */ (function () {
    function NgxaTableModule() {
    }
    NgxaTableModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        TranslateModule,
                        NbButtonModule,
                        NbIconModule,
                        NgxDatatableModule,
                        NgxaBaseModule,
                        NgxaInputModule,
                        NgxaButtonModule,
                    ],
                    declarations: __spread(components$d),
                    exports: __spread(components$d),
                },] }
    ];
    return NgxaTableModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxaDatePickerComponent = /** @class */ (function (_super) {
    __extends(NgxaDatePickerComponent, _super);
    function NgxaDatePickerComponent(ngControl, dateService, locale) {
        var _this = _super.call(this, ngControl, locale) || this;
        _this.dateService = dateService;
        _this.locale = locale;
        _this.colLabel = 3;
        _this.colInput = 9;
        _this.size = NbCalendarSize.MEDIUM;
        _this.pattern = DatePattern.SLASH;
        return _this;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    NgxaDatePickerComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._value = new Date(value);
        this.onChange(this.value);
        /** @type {?} */
        var control = this.ngControl.control;
        if (control) {
            control.updateValueAndValidity();
            control.markAsTouched();
            control.markAsDirty();
        }
    };
    NgxaDatePickerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'xa-datepicker',
                    template: "<xa-container-outlet\n  [name]=\"name\" [label]=\"label\"\n  [colLabel]=\"colLabel\" [colContent]=\"colInput\"\n  [required]=\"required\" [hasErrors]=\"hasErrors\"\n  [errorMessages]=\"errorMessages\" [paramError]=\"paramError\"\n  [skeleton]=\"skeleton\">\n  <div class=\"col-sm-{{colInput}}\" *ngIf=\"!skeleton; else contentskeleton\">\n    <input\n      id=\"{{name}}\"\n      [pattern]=\"pattern\"\n      [placeholder]=\"placeholder ? (placeholder | translate) : ''\"\n      [required]=\"required\"\n      [disabled]=\"disabled || skeleton\"\n      [ngClass]=\"{\n        'skeleton': skeleton,\n        'status-danger': hasErrors,\n        'status-success': hasSuccess\n      }\"\n      (input)=\"onChange($event.target.value)\"\n      (change)=\"onChange($event.target.value)\"\n      (blur)=\"onTouched($event.target.value)\"\n      [(ngModel)]=\"value\"\n      [nbDatepicker]=\"xadatepicker\"\n      #input nbInput fullWidth>\n      <nb-datepicker\n        [format]=\"format\"\n        [size]=\"size\"\n        [min]=\"min\"\n        [max]=\"max\"\n        #xadatepicker>\n      </nb-datepicker>\n  </div>\n  <ng-template #contentskeleton>\n    <div class=\"col-sm-{{colInput}}\">\n      <div\n        [ngClass]=\"{\n          'input-skeleton': true,\n          'skeleton': skeleton\n        }\">\n      </div>\n    </div>\n  </ng-template>\n</xa-container-outlet>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    NgxaDatePickerComponent.ctorParameters = function () { return [
        { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
        { type: NbDateService },
        { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
    ]; };
    NgxaDatePickerComponent.propDecorators = {
        placeholder: [{ type: Input }],
        colLabel: [{ type: Input }],
        colInput: [{ type: Input }],
        min: [{ type: Input }],
        max: [{ type: Input }],
        size: [{ type: Input }]
    };
    return NgxaDatePickerComponent;
}(NgxaValueAccessor));
if (false) {
    /** @type {?} */
    NgxaDatePickerComponent.prototype.placeholder;
    /** @type {?} */
    NgxaDatePickerComponent.prototype.colLabel;
    /** @type {?} */
    NgxaDatePickerComponent.prototype.colInput;
    /** @type {?} */
    NgxaDatePickerComponent.prototype.min;
    /** @type {?} */
    NgxaDatePickerComponent.prototype.max;
    /** @type {?} */
    NgxaDatePickerComponent.prototype.size;
    /** @type {?} */
    NgxaDatePickerComponent.prototype.dateService;
    /** @type {?} */
    NgxaDatePickerComponent.prototype.locale;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var components$e = [
    NgxaDatePickerComponent,
];
var NgxaDatePickerModule = /** @class */ (function () {
    function NgxaDatePickerModule() {
    }
    NgxaDatePickerModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        NbInputModule,
                        NbDatepickerModule,
                        NbMomentDateModule,
                        NbDateFnsDateModule.forRoot({
                            parseOptions: { awareOfUnicodeTokens: true },
                            formatOptions: { awareOfUnicodeTokens: true },
                        }),
                        TranslateModule,
                        NgxaBaseModule,
                    ],
                    declarations: __spread(components$e),
                    exports: __spread(components$e),
                },] }
    ];
    return NgxaDatePickerModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ImageUploadComponent = /** @class */ (function (_super) {
    __extends(ImageUploadComponent, _super);
    function ImageUploadComponent(ngControl, locale, dom) {
        var _this = _super.call(this, ngControl, locale) || this;
        _this.locale = locale;
        _this.dom = dom;
        _this.onUpload = new EventEmitter();
        _this.onPreview = new EventEmitter();
        _this.height = 225;
        _this.width = 225;
        _this.radius = 0;
        _this.buttonUpload = true;
        _this.skeleton = false;
        _this.opacity = '0.5';
        _this.imageDefault = document.getElementsByTagName('base')[0].href + "/assets/images/avatars/default.png";
        return _this;
    }
    Object.defineProperty(ImageUploadComponent.prototype, "uploadFn", {
        set: /**
         * @param {?} finish
         * @return {?}
         */
        function (finish) {
            if (finish) {
                this.ngControl.control.markAsPristine();
                this.ngControl.control.markAsUntouched();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    ImageUploadComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value instanceof File) {
            this.opacity = '0.8';
            this.image = URL.createObjectURL(value);
            this._value = value;
        }
        this.onChange(this.value);
        /** @type {?} */
        var control = this.ngControl.control;
        if (control) {
            control.updateValueAndValidity();
            control.markAsTouched();
            control.markAsDirty();
        }
    };
    /**
     * @param {?} files
     * @return {?}
     */
    ImageUploadComponent.prototype.upload = /**
     * @param {?} files
     * @return {?}
     */
    function (files) {
        this.opacity = '0.8';
        for (var index = 0; index < files.length; index++) {
            this.value = files[index];
        }
        this.image = URL.createObjectURL(this.value);
        this.onPreview.emit(this.value);
    };
    /**
     * @return {?}
     */
    ImageUploadComponent.prototype.doUpload = /**
     * @return {?}
     */
    function () {
        this.onUpload.emit(this.value);
    };
    /**
     * @return {?}
     */
    ImageUploadComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    ImageUploadComponent.prototype.onInit = /**
     * @return {?}
     */
    function () {
        if (!this.image) {
            this.image = this.imageDefault;
        }
    };
    ImageUploadComponent.decorators = [
        { type: Component, args: [{
                    selector: 'xa-image-upload',
                    template: "<div class=\"body-upload\">\n  <div *ngIf=\"!skeleton; else contentskeleton\"\n    class=\"upload-container\"\n    (click)=\"img.click()\"\n    xaDragDrop\n    [opacity]=\"opacity\"\n    (onFileDropped)=\"upload($event)\"\n    [ngStyle]=\"{ \n      'background-image': 'url(' + (image? image: imageDefault) + ')',\n      'height':  height + 'px',\n      'width':  width + 'px',\n      'border-radius':  radius + '%'\n    }\">\n    <input\n      hidden\n      type=\"file\"\n      accept=\"image/png, image/jpeg, image/jpg\"\n      (change)=\"upload($event.target.files)\"\n      #img>\n  </div>\n  <ng-template #contentskeleton>\n    <div\n      class=\"upload-container\"\n      [ngStyle]=\"{ \n        'background-image': 'url(' + image + ')',\n        'height':  height + 'px',\n        'width':  width + 'px',\n        'border-radius':  radius + '%'\n      }\">\n    </div>\n  </ng-template>\n  <button *ngIf=\"buttonUpload\"\n    class=\"upload-bg\"\n    [size]=\"'small'\"\n    [shape]=\"'round'\"\n    [status]=\"'primary'\"\n    [disabled]=\"ngControl.pristine || disabled\"\n    (click)=\"doUpload()\"\n    nbButton\n    [ngStyle]=\"{ \n      'top': 'calc('+height+'px + 0.075rem)'\n    }\">\n    <nb-icon class=\"upload-icon\" icon=\"cloud-upload-outline\" pack=\"eva\"></nb-icon>\n    {{ 'Upload' | translate}}\n  </button>\n</div>",
                    encapsulation: ViewEncapsulation.None,
                    styles: [".upload-container{background-repeat:no-repeat;background-color:#f7f9fc;background-size:cover;margin:20px auto;border:2px dashed #d9dde5}.upload-container:hover{cursor:pointer}.body-upload{padding:15px}.upload-bg{position:absolute;left:50%;transform:translate(-50%);z-index:2}.nb-theme-default [nbButton].appearance-filled.status-primary[disabled]{background-color:#edf1f7;border-color:transparent;color:rgba(143,155,179,.48)}.upload-icon{font-size:5rem}"]
                }] }
    ];
    /** @nocollapse */
    ImageUploadComponent.ctorParameters = function () { return [
        { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
        { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] },
        { type: DomSanitizer }
    ]; };
    ImageUploadComponent.propDecorators = {
        onUpload: [{ type: Output }],
        onPreview: [{ type: Output }],
        image: [{ type: Input }],
        height: [{ type: Input }],
        width: [{ type: Input }],
        radius: [{ type: Input }],
        buttonUpload: [{ type: Input }],
        skeleton: [{ type: Input }],
        uploadFn: [{ type: Input }]
    };
    return ImageUploadComponent;
}(NgxaValueAccessor));
if (false) {
    /** @type {?} */
    ImageUploadComponent.prototype.onUpload;
    /** @type {?} */
    ImageUploadComponent.prototype.onPreview;
    /** @type {?} */
    ImageUploadComponent.prototype.image;
    /** @type {?} */
    ImageUploadComponent.prototype.height;
    /** @type {?} */
    ImageUploadComponent.prototype.width;
    /** @type {?} */
    ImageUploadComponent.prototype.radius;
    /** @type {?} */
    ImageUploadComponent.prototype.buttonUpload;
    /** @type {?} */
    ImageUploadComponent.prototype.skeleton;
    /** @type {?} */
    ImageUploadComponent.prototype.opacity;
    /** @type {?} */
    ImageUploadComponent.prototype.imageDefault;
    /** @type {?} */
    ImageUploadComponent.prototype.locale;
    /** @type {?} */
    ImageUploadComponent.prototype.dom;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var components$f = [
    ImageUploadComponent,
];
var NgxaImageModule = /** @class */ (function () {
    function NgxaImageModule() {
    }
    NgxaImageModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        NbButtonModule,
                        NbIconModule,
                        NgxaBaseModule,
                    ],
                    declarations: __spread(components$f),
                    exports: __spread(components$f),
                },] }
    ];
    return NgxaImageModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxaTreeNodeComponent = /** @class */ (function () {
    function NgxaTreeNodeComponent() {
        this.icons = {
            collapse: 'plus-circle',
            expand: 'minus-circle',
        };
        this.activate = new EventEmitter();
        this.deactivate = new EventEmitter();
        this.selectNode = new EventEmitter();
        // backwards compatibility. Use selectNode
        this.select = this.selectNode;
        this.expand = new EventEmitter();
        this.collapse = new EventEmitter();
    }
    /**
     * @return {?}
     */
    NgxaTreeNodeComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.data = {
            $implicit: this.node,
            label: this.label,
            children: this.children,
            model: this.model,
        };
    };
    /**
     * @return {?}
     */
    NgxaTreeNodeComponent.prototype.onExpandClick = /**
     * @return {?}
     */
    function () {
        if (this.disabled || !this.expandable)
            return;
        this.expanded = !this.expanded;
        if (this.expanded) {
            this.expand.emit(this.data);
        }
        else {
            this.collapse.emit(this.data);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NgxaTreeNodeComponent.prototype.onClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.stopPropagation();
        if (!this.selectable || this.disabled)
            return;
        this.selectNode.emit(this.data);
    };
    NgxaTreeNodeComponent.decorators = [
        { type: Component, args: [{
                    exportAs: 'xaTreeNode',
                    selector: 'xa-tree-node',
                    template: "<li\n  class=\"xa-tree-node\"\n  [class.selectable]=\"selectable\"\n  (click)=\"onClick($event)\"\n  (focus)=\"activate.emit(this.data)\"\n  (blur)=\"deactivate.emit(this.data)\"\n  tabindex=\"-1\"\n>\n  <span\n    *ngIf=\"expandable\"\n    class=\"ngx-expander\"\n    (click)=\"onExpandClick()\"\n    [class.disabled]=\"disabled\"\n    [ngClass]=\"expanded ? icons.expand : icons.collapse\"\n  >\n  <nb-icon [icon]=\"expanded ? icons.expand : icons.collapse\" pack=\"eva\"></nb-icon>\n  </span>\n  <span *ngIf=\"!template\" [innerHTML]=\"label\" [class.disabled]=\"disabled\" class=\"ngx-node-label\"> </span>\n  <ng-template *ngIf=\"template\" [ngTemplateOutlet]=\"template\" [ngTemplateOutletContext]=\"data\"> </ng-template>\n  <ng-content *ngIf=\"expanded\"></ng-content>\n  <xa-tree\n    *ngIf=\"children?.length && expandable && expanded\"\n    class=\"ngx-sub-tree\"\n    [nodes]=\"children\"\n    [template]=\"template\"\n    [icons]=\"icons\"\n  >\n  </xa-tree>\n</li>\n",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    NgxaTreeNodeComponent.propDecorators = {
        label: [{ type: Input }],
        model: [{ type: Input }],
        node: [{ type: Input }],
        children: [{ type: Input }],
        disabled: [{ type: Input }],
        expandable: [{ type: Input }],
        expanded: [{ type: Input }],
        selectable: [{ type: Input }],
        template: [{ type: Input }],
        icons: [{ type: Input }],
        activate: [{ type: Output }],
        deactivate: [{ type: Output }],
        selectNode: [{ type: Output }],
        select: [{ type: Output }],
        expand: [{ type: Output }],
        collapse: [{ type: Output }]
    };
    return NgxaTreeNodeComponent;
}());
if (false) {
    /** @type {?} */
    NgxaTreeNodeComponent.prototype.label;
    /** @type {?} */
    NgxaTreeNodeComponent.prototype.model;
    /** @type {?} */
    NgxaTreeNodeComponent.prototype.node;
    /** @type {?} */
    NgxaTreeNodeComponent.prototype.children;
    /** @type {?} */
    NgxaTreeNodeComponent.prototype.disabled;
    /** @type {?} */
    NgxaTreeNodeComponent.prototype.expandable;
    /** @type {?} */
    NgxaTreeNodeComponent.prototype.expanded;
    /** @type {?} */
    NgxaTreeNodeComponent.prototype.selectable;
    /** @type {?} */
    NgxaTreeNodeComponent.prototype.template;
    /** @type {?} */
    NgxaTreeNodeComponent.prototype.icons;
    /** @type {?} */
    NgxaTreeNodeComponent.prototype.activate;
    /** @type {?} */
    NgxaTreeNodeComponent.prototype.deactivate;
    /** @type {?} */
    NgxaTreeNodeComponent.prototype.selectNode;
    /** @type {?} */
    NgxaTreeNodeComponent.prototype.select;
    /** @type {?} */
    NgxaTreeNodeComponent.prototype.expand;
    /** @type {?} */
    NgxaTreeNodeComponent.prototype.collapse;
    /** @type {?} */
    NgxaTreeNodeComponent.prototype.data;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxaTreeComponent = /** @class */ (function () {
    function NgxaTreeComponent(_cdr) {
        this._cdr = _cdr;
        this.icons = {
            collapse: 'plus-circle',
            expand: 'minus-circle',
        };
        this.expand = new EventEmitter();
        this.collapse = new EventEmitter();
        this.activate = new EventEmitter();
        this.deactivate = new EventEmitter();
        this.selectNode = new EventEmitter();
        this._destroy$ = new Subject();
    }
    Object.defineProperty(NgxaTreeComponent.prototype, "hasOneLeaf", {
        get: /**
         * @return {?}
         */
        function () {
            return (this.nodes && this.nodes.length === 1) || this.nodeElms.length === 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxaTreeComponent.prototype, "template", {
        get: /**
         * @return {?}
         */
        function () {
            return this._templateInput || this._templateQuery;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NgxaTreeComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.nodeElms.changes.pipe(takeUntil(this._destroy$)).subscribe((/**
         * @return {?}
         */
        function () { return _this._cdr.markForCheck(); }));
    };
    /**
     * @return {?}
     */
    NgxaTreeComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._destroy$.next();
        this._destroy$.complete();
    };
    NgxaTreeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'xa-tree',
                    template: "<div class=\"xa-tree\" [class.one-leaf]=\"hasOneLeaf\">\n  <ul class=\"vertical-list\">\n    <xa-tree-node\n      *ngFor=\"let node of nodes\"\n      [node]=\"node\"\n      [expandable]=\"node.expandable\"\n      [expanded]=\"node.expanded\"\n      [icons]=\"icons\"\n      [label]=\"node.label\"\n      [model]=\"node.model\"\n      [children]=\"node.children\"\n      [template]=\"template\"\n      (expand)=\"expand.emit($event)\"\n      (collapse)=\"collapse.emit($event)\"\n      (activate)=\"activate.emit($event)\"\n      (deactivate)=\"deactivate.emit($event)\"\n      (selectNode)=\"selectNode.emit($event)\"\n    >\n    </xa-tree-node>\n    <ng-content *ngIf=\"!nodes\"></ng-content>\n  </ul>\n  <div class=\"ngx-tree-vr\" *ngIf=\"nodes?.length || nodeElms?.length\"></div>\n</div>\n",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [".nb-theme-default nb-icon{font-size:.75rem;display:-ms-inline-grid;display:inline-grid;background-color:#fff;color:#667080}.vertical-list{padding:0;margin:0;list-style:none}.xa-tree{position:relative}.xa-tree .xa-tree-node{position:relative;padding-left:20px;line-height:25px;min-height:25px}.xa-tree .xa-tree-node .ngx-expander{font-size:.75rem;color:#1a2138;position:absolute;left:-.03rem;top:3px;z-index:1;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.xa-tree .xa-tree-node .ngx-expander:not(.disabled){cursor:pointer}.xa-tree .xa-tree-node .ngx-expander.minus-circle::before,.xa-tree .xa-tree-node .ngx-expander.plus-circle::before{background:#1c2029;border-radius:50%}.xa-tree .xa-tree-node .ngx-node-label{color:#1a2138;font-size:.9rem}.xa-tree .xa-tree-node .ngx-tree{margin-left:5px}.xa-tree .xa-tree-node.selectable>.ngx-node-label:not(.disabled){cursor:pointer}.xa-tree.one-leaf>.ngx-tree-vr::before{display:none}.xa-tree .ngx-tree-vr{position:absolute;top:17px;bottom:12px;left:5px;border-left:1px dashed #667080;width:1px}.xa-tree .ngx-tree-vr::after{content:' ';width:5px;height:5px;border-radius:5px;background:#667080;position:absolute;bottom:-3px;left:-3px}.xa-tree .ngx-tree-vr::before{content:' ';width:5px;height:5px;border-radius:5px;background:0 0;border:1px solid #667080;position:absolute;top:-5px;left:-3px}"]
                }] }
    ];
    /** @nocollapse */
    NgxaTreeComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    NgxaTreeComponent.propDecorators = {
        nodes: [{ type: Input }],
        _templateInput: [{ type: Input, args: ['template',] }],
        icons: [{ type: Input }],
        _templateQuery: [{ type: ContentChild, args: [TemplateRef, { static: true },] }],
        nodeElms: [{ type: ContentChildren, args: [NgxaTreeNodeComponent,] }],
        expand: [{ type: Output }],
        collapse: [{ type: Output }],
        activate: [{ type: Output }],
        deactivate: [{ type: Output }],
        selectNode: [{ type: Output }]
    };
    return NgxaTreeComponent;
}());
if (false) {
    /** @type {?} */
    NgxaTreeComponent.prototype.nodes;
    /** @type {?} */
    NgxaTreeComponent.prototype._templateInput;
    /** @type {?} */
    NgxaTreeComponent.prototype.icons;
    /** @type {?} */
    NgxaTreeComponent.prototype._templateQuery;
    /** @type {?} */
    NgxaTreeComponent.prototype.nodeElms;
    /** @type {?} */
    NgxaTreeComponent.prototype.expand;
    /** @type {?} */
    NgxaTreeComponent.prototype.collapse;
    /** @type {?} */
    NgxaTreeComponent.prototype.activate;
    /** @type {?} */
    NgxaTreeComponent.prototype.deactivate;
    /** @type {?} */
    NgxaTreeComponent.prototype.selectNode;
    /**
     * @type {?}
     * @private
     */
    NgxaTreeComponent.prototype._destroy$;
    /**
     * @type {?}
     * @private
     */
    NgxaTreeComponent.prototype._cdr;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var components$g = [
    NgxaTreeComponent,
    NgxaTreeNodeComponent,
];
var NgxaTreeModule = /** @class */ (function () {
    function NgxaTreeModule() {
    }
    NgxaTreeModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        NbIconModule,
                        TranslateModule,
                        NgxaBaseModule,
                    ],
                    declarations: __spread(components$g),
                    exports: __spread(components$g),
                },] }
    ];
    return NgxaTreeModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxaLabelTextComponent = /** @class */ (function () {
    function NgxaLabelTextComponent() {
        this.colLabel = 3;
        this.colContent = 9;
        this.skeleton = false;
        this.content = '';
        this.label = '';
        this.nolabel = false;
        this.required = false;
    }
    NgxaLabelTextComponent.decorators = [
        { type: Component, args: [{
                    selector: 'xa-label-text',
                    template: "<xa-container-outlet\n  [name]=\"name\" [label]=\"label\" [nolabel]=\"nolabel\" \n  [colLabel]=\"colLabel\" [colContent]=\"colContent\"\n  [required]=\"required\" [paramError]=\"paramError\"\n  [skeleton]=\"skeleton\">\n  <div class=\"col-sm-{{colContent}}\" *ngIf=\"!skeleton; else contentskeleton\">\n    <span class=\"label-content\">{{content | translate}}</span>\n  </div>\n  <ng-template #contentskeleton>\n    <div class=\"col-sm-{{colContent}}\">\n      <div\n        [ngClass]=\"{\n          'input-skeleton': true,\n          'skeleton': skeleton\n        }\">\n      </div>\n    </div>\n  </ng-template>\n</xa-container-outlet>",
                    encapsulation: ViewEncapsulation.None,
                    styles: [".label-content{color:#777c86;font-family:Open Sans,sans-serif;font-size:.75rem;font-weight:600}"]
                }] }
    ];
    /** @nocollapse */
    NgxaLabelTextComponent.ctorParameters = function () { return []; };
    NgxaLabelTextComponent.propDecorators = {
        colLabel: [{ type: Input }],
        colContent: [{ type: Input }],
        skeleton: [{ type: Input }],
        name: [{ type: Input }],
        content: [{ type: Input }],
        label: [{ type: Input }],
        nolabel: [{ type: Input }],
        required: [{ type: Input }],
        paramError: [{ type: Input }]
    };
    return NgxaLabelTextComponent;
}());
if (false) {
    /** @type {?} */
    NgxaLabelTextComponent.prototype.colLabel;
    /** @type {?} */
    NgxaLabelTextComponent.prototype.colContent;
    /** @type {?} */
    NgxaLabelTextComponent.prototype.skeleton;
    /** @type {?} */
    NgxaLabelTextComponent.prototype.name;
    /** @type {?} */
    NgxaLabelTextComponent.prototype.content;
    /** @type {?} */
    NgxaLabelTextComponent.prototype.label;
    /** @type {?} */
    NgxaLabelTextComponent.prototype.nolabel;
    /** @type {?} */
    NgxaLabelTextComponent.prototype.required;
    /** @type {?} */
    NgxaLabelTextComponent.prototype.paramError;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var components$h = [
    NgxaLabelTextComponent,
];
var NgxaLabelModule = /** @class */ (function () {
    function NgxaLabelModule() {
    }
    NgxaLabelModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        NbIconModule,
                        TranslateModule,
                        NgxaBaseModule,
                    ],
                    declarations: __spread(components$h),
                    exports: __spread(components$h),
                },] }
    ];
    return NgxaLabelModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var modules = [
    NgxaInputModule,
    NgxaButtonModule,
    NgxaDatePickerModule,
    NgxaCheckBoxModule,
    NgxaRadioModule,
    NgxaEditorModule,
    NgxaCalendarModule,
    NgxaChartsModule,
    NgxaMapsModule,
    NgxaProgressModule,
    NgxaSelectModule,
    NgxaSpinnerModule,
    NgxaTableModule,
    NgxaBaseModule,
    NgxaImageModule,
    NgxaTreeModule,
    NgxaLabelModule,
];
var NgxaCommonModule = /** @class */ (function () {
    function NgxaCommonModule() {
    }
    NgxaCommonModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [],
                    imports: __spread(modules),
                    exports: __spread(modules),
                },] }
    ];
    return NgxaCommonModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template T
 */
var  /**
 * @abstract
 * @template T
 */
BaseComponent = /** @class */ (function () {
    function BaseComponent(injector) {
        this.injector = injector;
        this.api = injector.get(API);
        this.http = injector.get(HTTP_SERVICE);
    }
    /**
     * @protected
     * @param {?} serviceName
     * @param {?} apiName
     * @param {?=} body
     * @param {?=} headers
     * @param {?=} params
     * @param {?=} pathVariable
     * @param {?=} responseType
     * @return {?}
     */
    BaseComponent.prototype.exec = /**
     * @protected
     * @param {?} serviceName
     * @param {?} apiName
     * @param {?=} body
     * @param {?=} headers
     * @param {?=} params
     * @param {?=} pathVariable
     * @param {?=} responseType
     * @return {?}
     */
    function (serviceName, apiName, body, headers, params, pathVariable, responseType) {
        return this.http.HTTP_AUTH(this.api[serviceName][apiName], body, headers, params, pathVariable, responseType).pipe(tap());
    };
    return BaseComponent;
}());
if (false) {
    /**
     * @type {?}
     * @protected
     */
    BaseComponent.prototype.response;
    /**
     * @type {?}
     * @protected
     */
    BaseComponent.prototype.api;
    /**
     * @type {?}
     * @protected
     */
    BaseComponent.prototype.http;
    /**
     * @type {?}
     * @protected
     */
    BaseComponent.prototype.injector;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template T
 */
var  /**
 * @abstract
 * @template T
 */
BaseFormComponent = /** @class */ (function (_super) {
    __extends(BaseFormComponent, _super);
    function BaseFormComponent(injector, controlsConfig) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this.submitSubject$ = new Subject();
        _this.destroy$ = new Subject();
        _this.disabled = false;
        _this.loadingForm = false;
        _this.formBuilder = injector.get(FormBuilder);
        if (controlsConfig)
            _this.formGroup = _this.formBuilder.group(controlsConfig);
        _this.toastr = injector.get(NgxaToastrService);
        return _this;
    }
    /**
     * @param {?=} body
     * @param {?=} serviceName
     * @param {?=} apiName
     * @param {?=} disableToastr
     * @return {?}
     */
    BaseFormComponent.prototype.onSubmit = /**
     * @param {?=} body
     * @param {?=} serviceName
     * @param {?=} apiName
     * @param {?=} disableToastr
     * @return {?}
     */
    function (body, serviceName, apiName, disableToastr) {
        var _this = this;
        this.disabled = true;
        this.exec(serviceName, apiName, body ? body : this.formGroup.value)
            .subscribe((/**
         * @param {?} success
         * @return {?}
         */
        function (success) {
            _this.submitSubject$.next(success);
            _this.disabled = true;
            if (!disableToastr)
                _this.toastr.showI18n(success.respStatusMessage[success.respStatusCode], true);
        }), (/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            _this.submitSubject$.next(error);
            _this.disabled = false;
            if (!disableToastr)
                _this.toastr.showI18n(error.respStatusMessage[error.respStatusCode], true, null, 'danger');
        }));
        return this.submitSubject$.asObservable();
    };
    /**
     * @return {?}
     */
    BaseFormComponent.prototype.onReset = /**
     * @return {?}
     */
    function () { };
    return BaseFormComponent;
}(BaseComponent));
if (false) {
    /**
     * @type {?}
     * @protected
     */
    BaseFormComponent.prototype.toastr;
    /**
     * @type {?}
     * @protected
     */
    BaseFormComponent.prototype.submitSubject$;
    /**
     * @type {?}
     * @protected
     */
    BaseFormComponent.prototype.destroy$;
    /** @type {?} */
    BaseFormComponent.prototype.formGroup;
    /** @type {?} */
    BaseFormComponent.prototype.formBuilder;
    /** @type {?} */
    BaseFormComponent.prototype.disabled;
    /** @type {?} */
    BaseFormComponent.prototype.loadingForm;
    /** @type {?} */
    BaseFormComponent.prototype.injector;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template T
 */
var  /**
 * @abstract
 * @template T
 */
BaseFilterComponent = /** @class */ (function (_super) {
    __extends(BaseFilterComponent, _super);
    function BaseFilterComponent(injector, filtersConfig, controlsConfig) {
        var _this = _super.call(this, injector, controlsConfig) || this;
        _this.injector = injector;
        _this.rows = [];
        if (filtersConfig)
            _this.formGroupFilter = _this.formBuilder.group(filtersConfig);
        return _this;
    }
    /**
     * @param {?} keyword
     * @return {?}
     */
    BaseFilterComponent.prototype.doFilterAdvanced = /**
     * @param {?} keyword
     * @return {?}
     */
    function (keyword) {
        this.keyword = keyword;
    };
    return BaseFilterComponent;
}(BaseFormComponent));
if (false) {
    /** @type {?} */
    BaseFilterComponent.prototype.formGroupFilter;
    /** @type {?} */
    BaseFilterComponent.prototype.filters;
    /** @type {?} */
    BaseFilterComponent.prototype.keyword;
    /** @type {?} */
    BaseFilterComponent.prototype.rows;
    /** @type {?} */
    BaseFilterComponent.prototype.injector;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function fadeIn() {
    return [
        transition(':enter', [
            style({ opacity: 0 }),
            animate('400ms ease-in', style({ opacity: 1 })),
        ]),
    ];
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SelectResponseModel = /** @class */ (function () {
    function SelectResponseModel() {
        this.disabled = false;
    }
    return SelectResponseModel;
}());
if (false) {
    /** @type {?} */
    SelectResponseModel.prototype.label;
    /** @type {?} */
    SelectResponseModel.prototype.value;
    /** @type {?} */
    SelectResponseModel.prototype.disabled;
    /** @type {?} */
    SelectResponseModel.prototype.icon;
}
var SelectParamModel = /** @class */ (function () {
    function SelectParamModel() {
    }
    return SelectParamModel;
}());
if (false) {
    /** @type {?} */
    SelectParamModel.prototype.key;
    /** @type {?} */
    SelectParamModel.prototype.value;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Page = /** @class */ (function () {
    function Page() {
    }
    return Page;
}());
if (false) {
    /** @type {?} */
    Page.prototype.count;
    /** @type {?} */
    Page.prototype.pageSize;
    /** @type {?} */
    Page.prototype.limit;
    /** @type {?} */
    Page.prototype.offset;
}
/**
 * @record
 */
function Sort() { }
/**
 * @record
 */
function Keyword() { }
/**
 * @record
 */
function DatatableColumn() { }
if (false) {
    /** @type {?|undefined} */
    DatatableColumn.prototype.prefix;
    /** @type {?|undefined} */
    DatatableColumn.prototype.type;
    /** @type {?|undefined} */
    DatatableColumn.prototype.button;
    /** @type {?|undefined} */
    DatatableColumn.prototype.buttonStatus;
}
var DatatableParamModel = /** @class */ (function () {
    function DatatableParamModel() {
    }
    return DatatableParamModel;
}());
if (false) {
    /** @type {?} */
    DatatableParamModel.prototype.key;
    /** @type {?} */
    DatatableParamModel.prototype.value;
}
var DatatableFilter = /** @class */ (function () {
    function DatatableFilter() {
        this.type = 'input';
    }
    return DatatableFilter;
}());
if (false) {
    /** @type {?} */
    DatatableFilter.prototype.controlName;
    /** @type {?} */
    DatatableFilter.prototype.type;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LeafletModel = /** @class */ (function () {
    function LeafletModel() {
        this.title = '';
        this.alt = '';
    }
    return LeafletModel;
}());
if (false) {
    /** @type {?} */
    LeafletModel.prototype.mark;
    /** @type {?} */
    LeafletModel.prototype.title;
    /** @type {?} */
    LeafletModel.prototype.alt;
    /** @type {?} */
    LeafletModel.prototype.className;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { BaseComponent, BaseFilterComponent, BaseFormComponent, DatatableFilter, DatatableParamModel, LeafletModel, NgxaBaseModule, NgxaButtonModule, NgxaCalendarModule, NgxaChartsModule, NgxaCheckBoxModule, NgxaCommonModule, NgxaDatePickerModule, NgxaEditorModule, NgxaImageModule, NgxaInputModule, NgxaLabelModule, NgxaMapsModule, NgxaProgressModule, NgxaRadioModule, NgxaSelectModule, NgxaSpinnerModule, NgxaTableModule, NgxaToastrModule, NgxaToastrService, NgxaTreeModule, Page, SelectParamModel, SelectResponseModel, fadeIn, components$3 as ɵa, directives as ɵb, NotEqualValidator as ɵba, DragDropDirective as ɵbb, NgxaInputTextComponent as ɵbc, NgxaValueAccessor as ɵbd, NgxaValidatorAccessor as ɵbe, NgxaInputBaseIconComponent as ɵbf, NgxaInputIconComponent as ɵbg, NgxaInputCurrencyComponent as ɵbh, NgxaButtonSubmitComponent as ɵbi, NgxaDatePickerComponent as ɵbj, NgxaCheckboxComponent as ɵbk, NgxaRadioComponent as ɵbl, MCECoreComponent as ɵbm, TinyMCEComponent as ɵbn, CaldeiraKnabbenEditorComponent as ɵbo, NgxaTextareaComponent as ɵbp, NgxaChartComponent as ɵbq, NgxaMapsLeafletComponent as ɵbr, NgxaMapsAgmComponent as ɵbs, NgxaSelectComponent as ɵbt, ContentSelectDirective as ɵbu, NgxaDatatableComponent as ɵbv, NgxaDatatableBaseComponent as ɵbw, NgxaDatatableHeaderComponent as ɵbx, NgxaDatatableCollapseComponent as ɵby, ImageUploadComponent as ɵbz, components as ɵc, NgxaTreeComponent as ɵca, NgxaTreeNodeComponent as ɵcb, NgxaLabelTextComponent as ɵcc, components$1 as ɵd, components$4 as ɵe, components$c as ɵf, components$e as ɵg, components$5 as ɵh, components$6 as ɵi, components$7 as ɵj, components$8 as ɵk, components$9 as ɵl, components$a as ɵm, directives$1 as ɵn, components$b as ɵo, components$d as ɵp, components$2 as ɵq, TOASTR_PROVIDERS as ɵr, components$f as ɵs, components$g as ɵt, components$h as ɵu, NgxaPageOutletComponent as ɵv, NgxaContainerOutletComponent as ɵw, NgxaErrorMessageComponent as ɵx, CurrencyMaskDirective as ɵy, EqualValidator as ɵz };
//# sourceMappingURL=xaphira-ngxa-common.js.map
