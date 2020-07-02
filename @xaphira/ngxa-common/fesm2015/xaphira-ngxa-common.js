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
const components = [];
class NgxaCalendarModule {
}
NgxaCalendarModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    FormsModule,
                ],
                declarations: [
                    ...components,
                ],
                exports: [
                    ...components,
                ],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxaChartComponent {
    constructor() {
        this.options = {};
    }
    /**
     * @param {?} options
     * @return {?}
     */
    set optionsFn(options) {
        this.options = options;
    }
}
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
const components$1 = [
    NgxaChartComponent,
];
class NgxaChartsModule {
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
                declarations: [
                    ...components$1,
                ],
                exports: [
                    ...components$1,
                ],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxaErrorMessageComponent {
    constructor() {
        this.hasErrors = false;
        this.errorMessages = [];
    }
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
class NgxaPageOutletComponent {
    /**
     * @param {?} router
     */
    constructor(router) {
        this.router = router;
        this.width = 12;
        this.selectChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    back() {
        this.router.navigate([this.url]);
        return false;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onChangeSelect(event) {
        this.selected = event;
        this.selectChange.emit(event);
    }
}
NgxaPageOutletComponent.decorators = [
    { type: Component, args: [{
                selector: 'xa-page-outlet',
                template: "<div class=\"row\">\n  <div class=\"col-lg-{{width}}\">\n    <nb-card>\n      <nb-card-header>\n        <nav class=\"navigation\">\n            <a href=\"#\" (click)=\"back()\" class=\"link back-link\" aria-label=\"Back\" *ngIf=\"url\">\n                <nb-icon icon=\"arrow-back\"></nb-icon>\n            </a>\n            {{header | translate}}\n        </nav>\n        <nb-select *ngIf=\"dataSelect\" [selected]=\"selected\" (selectedChange)=\"onChangeSelect($event)\">\n          <nb-option *ngFor=\"let data of dataSelect\" [value]=\"data\">{{ data }}</nb-option>\n        </nb-select>\n      </nb-card-header>\n      <nb-card-body>\n        <ng-content #pagecontent></ng-content>        \n      </nb-card-body>\n    </nb-card>\n  </div>\n</div>\n    ",
                encapsulation: ViewEncapsulation.None,
                styles: ["/*!\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */nb-card-header{display:flex;align-items:center;justify-content:space-between;padding-top:.5rem;padding-bottom:.5rem}.skeleton{-webkit-animation:1.7s linear infinite loading;animation:1.7s linear infinite loading;border-radius:.25rem;background:#dedfe1;background-image:linear-gradient(to right,#dedfe1 0,#f2f3f5 20%,#dedfe1 40%,#dedfe1 100%)}@-webkit-keyframes loading{0%{background-position:-100px}100%{background-position:380px}}@keyframes loading{0%{background-position:-100px}100%{background-position:380px}}.navigation .link{display:inline-block}.navigation .link nb-icon{color:#36f;font-size:1.25rem;vertical-align:middle;margin-right:.25rem}.input-skeleton,.label-skeleton{width:100%;height:2.5rem;line-height:1.5rem;padding:.4375rem 1.125rem}.button-skeleton{width:50%;height:2.5rem;line-height:1rem;padding:.625rem 1.125rem}"]
            }] }
];
/** @nocollapse */
NgxaPageOutletComponent.ctorParameters = () => [
    { type: Router }
];
NgxaPageOutletComponent.propDecorators = {
    header: [{ type: Input }],
    url: [{ type: Input }],
    width: [{ type: Input }],
    dataSelect: [{ type: Input }],
    selected: [{ type: Input }],
    selectChange: [{ type: Output }]
};
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
class NgxaContainerOutletComponent {
    constructor() {
        this.label = '';
        this.colLabel = 3;
        this.colContent = 9;
        this.nolabel = false;
        this.required = false;
        this.hasErrors = false;
        this.errorMessages = [];
        this.skeleton = false;
    }
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
class CurrencyMaskDirective {
    /**
     * @param {?} ngControl
     * @param {?} el
     */
    constructor(ngControl, el) {
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
    onFocus(value, event) {
        value = value ? value : this.prefix.concat(' ');
        value = this.onLeave(value.replace(this.suffix, ''));
        event.target.toNumber = this.toNumber(value);
        this.ngControl.valueAccessor.writeValue(value);
    }
    /**
     * @param {?} value
     * @param {?} event
     * @return {?}
     */
    onBlur(value, event) {
        value = value.replace(/\D/g, '') ? this.onLeave(value).concat(this.suffix) : '';
        event.target.toNumber = this.toNumber(value);
        this.ngControl.valueAccessor.writeValue(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onModelChange(value) {
        value = this.toNumber(value);
        value = value.replace(new RegExp('[^0-9|^' + this.decimalSeparator + '|^-]', 'g'), '');
        if (value.toString().match(new RegExp('^\-?[0-9]*(' + this.decimalSeparator + '[0-9]*)?$', 'g'))) {
            let { val, frac } = this.onInputChange(value);
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
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onKeyDown(e) {
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
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onLeave(value) {
        const { val, frac } = this.onInputChange(value);
        /** @type {?} */
        let fraction = '';
        if (frac) {
            if (parseInt(frac, 10) > 0) {
                fraction = this.decimalSeparator + this.pad(frac, this.padding).substring(0, this.padding);
            }
        }
        return this.onTransform(val, fraction);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onInputChange(value) {
        const [val = '', fraction = ''] = (value || '').split(this.decimalSeparator);
        return { val: val, frac: fraction };
    }
    /**
     * @param {?} val
     * @param {?} fraction
     * @return {?}
     */
    onTransform(val, fraction) {
        val = val.replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandsSeparator);
        return val + fraction;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    toNumber(val) {
        return val
            .replace(this.prefix, '')
            .replace(' ', '')
            .replace(this.suffix, '')
            .replace(new RegExp(this.thousandsSeparator, 'g'), '');
    }
    /**
     * @private
     * @param {?} val
     * @param {?} size
     * @return {?}
     */
    pad(val, size) {
        while (val.length < size)
            val = val + '0';
        return val;
    }
}
CurrencyMaskDirective.decorators = [
    { type: Directive, args: [{
                selector: 'input[xaCurrency]',
            },] }
];
/** @nocollapse */
CurrencyMaskDirective.ctorParameters = () => [
    { type: NgControl },
    { type: ElementRef }
];
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
class EqualValidator {
    /**
     * @param {?} validateEqual
     */
    constructor(validateEqual) {
        this.validateEqual = validateEqual;
    }
    /**
     * @param {?} c
     * @return {?}
     */
    validate(c) {
        /** @type {?} */
        const v = c.value;
        /** @type {?} */
        const e = c.root.get(this.validateEqual);
        if (e && v !== e.value && v) {
            return { equal: false };
        }
        return null;
    }
}
EqualValidator.decorators = [
    { type: Directive, args: [{
                selector: '[xaValidateEqual][formControlName],[xaValidateEqual][formControl],[xaValidateEqual][ngModel]',
                providers: [
                    { provide: NG_VALIDATORS, useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => EqualValidator)), multi: true },
                ],
            },] }
];
/** @nocollapse */
EqualValidator.ctorParameters = () => [
    { type: String, decorators: [{ type: Attribute, args: ['xaValidateEqual',] }] }
];
if (false) {
    /** @type {?} */
    EqualValidator.prototype.validateEqual;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NotEqualValidator {
    /**
     * @param {?} validateNotEqual
     */
    constructor(validateNotEqual) {
        this.validateNotEqual = validateNotEqual;
    }
    /**
     * @param {?} c
     * @return {?}
     */
    validate(c) {
        /** @type {?} */
        const v = c.value;
        /** @type {?} */
        const e = c.root.get(this.validateNotEqual);
        if (e && v === e.value && v) {
            return { equal: true };
        }
        return null;
    }
}
NotEqualValidator.decorators = [
    { type: Directive, args: [{
                selector: '[xaValidateNotEqual][formControlName],[xaValidateNotEqual][formControl],[xaValidateNotEqual][ngModel]',
                providers: [
                    { provide: NG_VALIDATORS, useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => NotEqualValidator)), multi: true },
                ],
            },] }
];
/** @nocollapse */
NotEqualValidator.ctorParameters = () => [
    { type: String, decorators: [{ type: Attribute, args: ['xaValidateNotEqual',] }] }
];
if (false) {
    /** @type {?} */
    NotEqualValidator.prototype.validateNotEqual;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxaToastrService {
    /**
     * @param {?} toastrService
     * @param {?} translate
     */
    constructor(toastrService, translate) {
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
    show(content, title, status, position, duration, hasIcon, destroyByClick) {
        if (!title)
            title = this.title(status);
        this.build(content, title, status, position, duration, hasIcon, destroyByClick);
    }
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
    showI18n(content, contentHasI18n, title, status, position, duration, hasIcon, destroyByClick) {
        if (!title)
            title = this.title(status);
        this.translate.get(title).subscribe((/**
         * @param {?} resultTitle
         * @return {?}
         */
        (resultTitle) => {
            title = resultTitle;
            if (contentHasI18n) {
                this.build(content, title, status, position, duration, hasIcon, destroyByClick);
            }
            else {
                this.translate.get(content).subscribe((/**
                 * @param {?} resultContent
                 * @return {?}
                 */
                (resultContent) => {
                    this.build(resultContent, title, status, position, duration, hasIcon, destroyByClick);
                }));
            }
        }));
    }
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
    build(content, title, status, position, duration, hasIcon, destroyByClick) {
        this.toastrService.show(content, title, {
            status: status ? status : this.status,
            position: position ? position : this.position,
            duration: duration ? duration : this.duration,
            hasIcon: hasIcon ? hasIcon : this.hasIcon,
            destroyByClick: destroyByClick ? destroyByClick : this.destroyByClick,
            preventDuplicates: this.preventDuplicates,
        });
    }
    /**
     * @private
     * @param {?} status
     * @return {?}
     */
    title(status) {
        /** @type {?} */
        let title = 'Success';
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
    }
}
NgxaToastrService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
NgxaToastrService.ctorParameters = () => [
    { type: NbToastrService },
    { type: TranslateService }
];
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
const components$2 = [];
/** @type {?} */
const TOASTR_PROVIDERS = [
    NgxaToastrService,
];
class NgxaToastrModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return (/** @type {?} */ ({
            ngModule: NgxaToastrModule,
            providers: [
                ...TOASTR_PROVIDERS,
            ],
        }));
    }
}
NgxaToastrModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    FormsModule,
                ],
                declarations: [
                    ...components$2,
                ],
                exports: [
                    ...components$2,
                ],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DragDropDirective {
    constructor() {
        this.onFileDropped = new EventEmitter();
        this.opacity = '0.7';
        this.background = '#f7f9fc';
        this.styleOpacity = '0.7';
    }
    /**
     * @param {?} evt
     * @return {?}
     */
    onDragOver(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = '#edf1f7';
        this.styleOpacity = '0.5';
        this.opacity = this.styleOpacity;
    }
    /**
     * @param {?} evt
     * @return {?}
     */
    onDragLeave(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = '#f7f9fc';
        this.styleOpacity = '0.7';
        this.opacity = this.styleOpacity;
    }
    /**
     * @param {?} evt
     * @return {?}
     */
    ondrop(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = '#f7f9fc';
        this.styleOpacity = '0.7';
        this.opacity = this.styleOpacity;
        /** @type {?} */
        const files = evt.dataTransfer.files;
        if (files.length > 0) {
            this.onFileDropped.emit(files);
        }
    }
    /**
     * @param {?} evt
     * @return {?}
     */
    onMouseOver(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = '#f7f9fc';
        this.styleOpacity = '0.5';
        this.opacity = this.styleOpacity;
    }
    /**
     * @param {?} evt
     * @return {?}
     */
    onMouseLeave(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = '#f7f9fc';
        this.styleOpacity = '0.7';
        this.opacity = this.styleOpacity;
    }
}
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
const components$3 = [
    NgxaPageOutletComponent,
    NgxaContainerOutletComponent,
    NgxaErrorMessageComponent,
];
/** @type {?} */
const directives = [
    CurrencyMaskDirective,
    EqualValidator,
    NotEqualValidator,
    DragDropDirective,
];
class NgxaBaseModule {
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
                declarations: [
                    ...components$3,
                    ...directives,
                ],
                exports: [
                    ...components$3,
                    ...directives,
                    TranslateModule,
                ],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class NgxaValidatorAccessor {
    /**
     * @param {?} ngControl
     */
    constructor(ngControl) {
        this.ngControl = ngControl;
        this.label = '';
        this.nolabel = false;
        this.disabled = false;
        this.required = false;
        this.onChange = (/**
         * @param {?} _
         * @return {?}
         */
        (_) => { });
        this.onTouched = (/**
         * @param {?=} _
         * @return {?}
         */
        (_) => { });
        ngControl && (ngControl.valueAccessor = this);
    }
    /**
     * @protected
     * @return {?}
     */
    onInit() { }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.onInit();
        /** @type {?} */
        const control = this.ngControl.control;
        /** @type {?} */
        const validators = control.validator ? [control.validator] : [];
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
    }
    /**
     * @param {?} c
     * @return {?}
     */
    validate(c) {
        /** @type {?} */
        const validators = [];
        if (this.required) {
            validators.push(Validators.required);
        }
        if (this.pattern) {
            validators.push(Validators.pattern(this.pattern));
        }
        return validators;
    }
    /**
     * @return {?}
     */
    get hasErrors() {
        return (!this.disabled &&
            this.ngControl.control &&
            this.ngControl.control.invalid &&
            this.ngControl.touched);
    }
    /**
     * @return {?}
     */
    get hasSuccess() {
        return (!this.disabled &&
            this.ngControl.control &&
            this.ngControl.control.valid &&
            this.ngControl.touched);
    }
    /**
     * @return {?}
     */
    get errorMessages() {
        /** @type {?} */
        const errors = [];
        if (this.ngControl.errors)
            Object.keys(this.ngControl.errors).forEach((/**
             * @param {?} property
             * @return {?}
             */
            property => {
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
                        errors.push('error.'.concat(property).concat('.').concat(this.name));
                        break;
                }
            }));
        return errors;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnValidatorChange(fn) {
        this.onChange = fn;
    }
}
NgxaValidatorAccessor.propDecorators = {
    name: [{ type: Input }],
    pattern: [{ type: Input }],
    label: [{ type: Input }],
    nolabel: [{ type: Input }],
    disabled: [{ type: Input }],
    required: [{ type: Input }],
    paramError: [{ type: Input }]
};
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
class NgxaValueAccessor extends NgxaValidatorAccessor {
    /**
     * @param {?} ngControl
     * @param {?} locale
     */
    constructor(ngControl, locale) {
        super(ngControl);
        this.ngControl = ngControl;
        this.locale = locale;
        this.format = DateFormat.DATE;
        this.skeleton = false;
    }
    /**
     * @return {?}
     */
    get value() { return this._value; }
    /**
     * @param {?} value
     * @return {?}
     */
    set value(value) {
        if (this._value !== value) {
            this._value = value;
            if (value instanceof Date)
                this.onChange(formatDate(value, this.format, this.locale));
            else
                this.onChange(value);
            /** @type {?} */
            const control = this.ngControl.control;
            if (control) {
                control.updateValueAndValidity();
                control.markAsTouched();
                control.markAsDirty();
            }
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this._value = value;
        this.onChange(this.value);
        /** @type {?} */
        const control = this.ngControl.control;
        if (control) {
            control.updateValueAndValidity();
            control.markAsUntouched();
            control.markAsPristine();
        }
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) { this.onChange = fn; }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) { this.onTouched = fn; }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) { this.disabled = isDisabled; }
}
NgxaValueAccessor.propDecorators = {
    format: [{ type: Input }],
    skeleton: [{ type: Input }]
};
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
class NgxaCheckboxComponent extends NgxaValueAccessor {
    /**
     * @param {?} ngControl
     * @param {?} locale
     */
    constructor(ngControl, locale) {
        super(ngControl, locale);
        this.locale = locale;
        this.colLabel = 3;
        this.colInput = 9;
        this.onChecked = new EventEmitter();
    }
    /**
     * @return {?}
     */
    onCheckedChange() {
        if (!this.value) {
            this.value = this.data;
        }
        if (Array.isArray(this.value).valueOf()) {
            /** @type {?} */
            let isChecked = false;
            Array.from(this.value).forEach((/**
             * @param {?} value
             * @return {?}
             */
            (value) => {
                if (value.selected) {
                    isChecked = value.selected;
                }
            }));
            if (this.required) {
                if (!isChecked) {
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
    }
}
NgxaCheckboxComponent.decorators = [
    { type: Component, args: [{
                selector: 'xa-checkbox',
                template: "<xa-container-outlet\n  [name]=\"name\" [label]=\"label\"\n  [colLabel]=\"colLabel\" [colContent]=\"colInput\"\n  [required]=\"required\" [hasErrors]=\"hasErrors\"\n  [errorMessages]=\"errorMessages\" [paramError]=\"paramError\"\n  [skeleton]=\"skeleton\">\n  <div class=\"col-sm-{{colInput}}\" *ngIf=\"!skeleton; else contentskeleton\">\n    <nb-checkbox\n      [ngClass]=\"{\n        'status-danger': hasErrors\n      }\"\n      *ngFor=\"let item of (value || data)\"\n      [disabled]=\"item.disabled || disabled\"\n      [checked]=\"item.selected\"\n      [(ngModel)]=\"item.selected\"\n      (change)=\"onCheckedChange()\">\n      {{item.name | translate}}\n    </nb-checkbox>\n  </div>\n  <ng-template #contentskeleton>\n    <div class=\"col-sm-{{colInput}}\">\n      <div\n        [ngClass]=\"{\n          'input-skeleton': true,\n          'skeleton': skeleton\n        }\">\n      </div>\n    </div>\n  </ng-template>\n</xa-container-outlet>",
                styles: [""]
            }] }
];
/** @nocollapse */
NgxaCheckboxComponent.ctorParameters = () => [
    { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
];
NgxaCheckboxComponent.propDecorators = {
    colLabel: [{ type: Input }],
    colInput: [{ type: Input }],
    data: [{ type: Input }],
    onChecked: [{ type: Output }]
};
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
const components$4 = [
    NgxaCheckboxComponent,
];
class NgxaCheckBoxModule {
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
                declarations: [
                    ...components$4,
                ],
                exports: [
                    ...components$4,
                    NbCheckboxModule,
                ],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TinyMCEComponent extends NgxaValueAccessor {
    /**
     * @param {?} ngControl
     * @param {?} locale
     * @param {?} element
     */
    constructor(ngControl, locale, element) {
        super(ngControl, locale);
        this.locale = locale;
        this.element = element;
        this.colLabel = 3;
        this.colInput = 9;
        this.plugins = ['link', 'paste', 'table'];
        this.height = 320;
    }
    /**
     * @param {?} element
     * @return {?}
     */
    editorChange(element) {
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
    }
}
TinyMCEComponent.decorators = [
    { type: Component, args: [{
                selector: 'xa-tiny-mce',
                template: "<xa-container-outlet\n  [name]=\"name\" [label]=\"label\"\n  [colLabel]=\"colLabel\" [colContent]=\"colInput\"\n  [required]=\"required\" [hasErrors]=\"hasErrors\"\n  [errorMessages]=\"errorMessages\" [paramError]=\"paramError\"\n  [skeleton]=\"skeleton\">\n  <div class=\"col-sm-{{colInput}}\" *ngIf=\"!skeleton; else contentskeleton\">\n    <xa-mce-core\n      [name]=\"name\"\n      [required]=\"required\"\n      [readonly]=\"disabled\"\n      [plugins]=\"plugins\"\n      [height]=\"height\"\n      [value]=\"value\"\n      [(ngModel)]=\"value\"\n      (change)=\"onChange($event)\"\n      (focus)=\"onTouched($event)\"\n      (editorchange)=\"editorChange($event.target.contentAreaContainer)\"\n      (focus)=\"editorChange($event.target.contentAreaContainer)\"\n      (blur)=\"editorChange($event.target.contentAreaContainer)\">\n    </xa-mce-core>\n  </div>\n  <ng-template #contentskeleton>\n    <div class=\"col-sm-{{colInput}}\">\n      <div\n        [ngClass]=\"{\n          'skeleton': skeleton\n        }\"\n        [ngStyle]=\"{ \n          'width':  '100%',\n          'height':  height + 'px'\n        }\">\n      </div>\n    </div>\n  </ng-template>\n</xa-container-outlet>",
                encapsulation: ViewEncapsulation.None,
                styles: [".mce-edit-area.status-danger{border:1px solid #ff3d71!important;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 0 3px #fde6e8}"]
            }] }
];
/** @nocollapse */
TinyMCEComponent.ctorParameters = () => [
    { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] },
    { type: ElementRef }
];
TinyMCEComponent.propDecorators = {
    placeholder: [{ type: Input }],
    colLabel: [{ type: Input }],
    colInput: [{ type: Input }],
    plugins: [{ type: Input }],
    height: [{ type: Input }]
};
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
class CaldeiraKnabbenEditorComponent extends NgxaValueAccessor {
    /**
     * @param {?} ngControl
     * @param {?} locale
     */
    constructor(ngControl, locale) {
        super(ngControl, locale);
        this.locale = locale;
        this.colLabel = 3;
        this.colInput = 9;
        this.minLength = 0;
        this.maxLength = 100;
        this.height = 320;
        this.config = {
            skin: 'bootstrapck',
            height: this.height,
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
            removeButtons: `Source,Save,NewPage,Preview,Print,Templates,Cut,Copy,Paste,
                    PasteText,PasteFromWord,Undo,Redo,Find,Replace,SelectAll,Scayt,
                    Form,Checkbox,Radio,TextField,Textarea,Select,Button,ImageButton,
                    HiddenField,Strike,Subscript,Superscript,CopyFormatting,RemoveFormat,
                    Outdent,Indent,CreateDiv,Blockquote,BidiLtr,BidiRtl,Language,Unlink,
                    Anchor,Image,Flash,Table,HorizontalRule,Smiley,SpecialChar,PageBreak,
                    Iframe,Maximize,ShowBlocks,About`,
        };
    }
    /**
     * @param {?} element
     * @return {?}
     */
    editorChange(element) {
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
    }
    /**
     * @return {?}
     */
    ngOnDestroy() { }
}
CaldeiraKnabbenEditorComponent.decorators = [
    { type: Component, args: [{
                selector: 'xa-ckeditor',
                template: "<xa-container-outlet\n  [name]=\"name\" [label]=\"label\"\n  [colLabel]=\"colLabel\" [colContent]=\"colInput\"\n  [required]=\"required\" [hasErrors]=\"hasErrors\"\n  [errorMessages]=\"errorMessages\" [paramError]=\"paramError\"\n  [skeleton]=\"skeleton\">\n  <div class=\"col-sm-{{colInput}}\" *ngIf=\"!skeleton; else contentskeleton\">\n    <ckeditor\n        [config]=\"config\"\n        [readonly]=\"disabled\"\n        [required]=\"required\"\n        [(ngModel)]=\"value\"\n        (change)=\"onChange($event)\"\n        (blur)=\"onTouched($event)\"\n        (blur)=\"editorChange($event.editor.ui.contentsElement)\"\n        (focus)=\"editorChange($event.editor.ui.contentsElement)\"\n        (editorChange)=\"editorChange($event.editor.ui.contentsElement)\">\n    </ckeditor>\n  </div>\n  <ng-template #contentskeleton>\n    <div class=\"col-sm-{{colInput}}\">\n      <div\n        [ngClass]=\"{\n          'skeleton': skeleton\n        }\"\n        [ngStyle]=\"{ \n          'width':  '100%',\n          'height':  height + 'px'\n        }\">\n      </div>\n    </div>\n  </ng-template>\n</xa-container-outlet>",
                encapsulation: ViewEncapsulation.None,
                styles: [".cke_contents.status-danger{border:1px solid #ff3d71!important;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 0 3px #fde6e8}"]
            }] }
];
/** @nocollapse */
CaldeiraKnabbenEditorComponent.ctorParameters = () => [
    { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
];
CaldeiraKnabbenEditorComponent.propDecorators = {
    placeholder: [{ type: Input }],
    colLabel: [{ type: Input }],
    colInput: [{ type: Input }],
    minLength: [{ type: Input }],
    maxLength: [{ type: Input }],
    height: [{ type: Input }],
    config: [{ type: Input }]
};
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
class MCECoreComponent {
    /**
     * @param {?} host
     * @param {?} envi
     */
    constructor(host, envi) {
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
        (_) => { });
        this.onTouched = (/**
         * @param {?=} _
         * @return {?}
         */
        (_) => { });
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        tinymce.init({
            target: this.host.nativeElement,
            plugins: this.plugins,
            skin_url: `${document.getElementsByTagName('base')[0].href}assets/skins/lightgray`,
            setup: (/**
             * @param {?} editor
             * @return {?}
             */
            editor => {
                this.editor = editor;
                editor.on('keyup', (/**
                 * @param {?} event
                 * @return {?}
                 */
                (event) => {
                    this.value = editor.getContent();
                    this.change.emit(this.value);
                    this.editorchange.emit(event);
                }));
                editor.on('focus', (/**
                 * @param {?} event
                 * @return {?}
                 */
                (event) => {
                    this.focus.emit(event);
                }));
                editor.on('blur', (/**
                 * @param {?} event
                 * @return {?}
                 */
                (event) => {
                    this.blur.emit(event);
                }));
            }),
            init_instance_callback: (/**
             * @param {?} editor
             * @return {?}
             */
            (editor) => {
                editor && this.value && this.editor.setContent(this.value);
            }),
            height: this.height,
            readonly: this.readonly,
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        tinymce.remove(this.editor);
    }
    /**
     * @return {?}
     */
    get value() { return this._value; }
    /**
     * @param {?} value
     * @return {?}
     */
    set value(value) {
        if (this._value !== value) {
            this._value = value;
            this.onChange(value);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        if (value) {
            this._value = value;
            this.onChange(this.value);
        }
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) { this.onChange = fn; }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) { this.onTouched = fn; }
}
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
                        () => MCECoreComponent)),
                        multi: true,
                    }]
            }] }
];
/** @nocollapse */
MCECoreComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Environment, decorators: [{ type: Inject, args: [ENVIRONMENT,] }] }
];
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
class NgxaTextareaComponent extends NgxaValueAccessor {
    /**
     * @param {?} ngControl
     * @param {?} locale
     */
    constructor(ngControl, locale) {
        super(ngControl, locale);
        this.locale = locale;
        this.colLabel = 3;
        this.colInput = 9;
        this.minLength = 0;
        this.maxLength = 250;
        this.height = 120;
    }
    /**
     * @return {?}
     */
    onInit() {
        this.paramError = {
            value: this.minLength,
        };
    }
    /**
     * @return {?}
     */
    ngOnDestroy() { }
}
NgxaTextareaComponent.decorators = [
    { type: Component, args: [{
                selector: 'xa-textarea',
                template: "<xa-container-outlet\n  [name]=\"name\" [label]=\"label\"\n  [colLabel]=\"colLabel\" [colContent]=\"colInput\"\n  [required]=\"required\" [hasErrors]=\"hasErrors\"\n  [errorMessages]=\"errorMessages\" [paramError]=\"paramError\"\n  [skeleton]=\"skeleton\">\n  <div class=\"col-sm-{{colInput}}\" *ngIf=\"!skeleton; else contentskeleton\">\n    <textarea \n      id=\"{{name}}\"\n      [minLength]=\"minLength\"\n      [maxLength]=\"maxLength\"\n      [required]=\"required\"\n      [placeholder]=\"placeholder ? (placeholder | translate) : ''\"\n      [disabled]=\"disabled\"\n      [ngClass]=\"{\n        'status-danger': hasErrors,\n        'status-success': hasSuccess\n      }\"\n      [ngStyle]=\"{ \n        'width':  '100%',\n        'height':  height + 'px'\n      }\"\n      (input)=\"onChange($event.target.value)\"\n      (change)=\"onChange($event.target.value)\"\n      (blur)=\"onTouched($event.target.value)\"\n      (focus)=\"onTouched($event.target.value)\"\n      [(ngModel)]=\"value\"\n      nbInput fullWidth>\n    </textarea>\n  </div>\n  <ng-template #contentskeleton>\n    <div class=\"col-sm-{{colInput}}\">\n      <div\n        [ngClass]=\"{\n          'skeleton': skeleton\n        }\"\n        [ngStyle]=\"{ \n          'width':  '100%',\n          'height':  height + 'px'\n        }\">\n      </div>\n    </div>\n  </ng-template>\n</xa-container-outlet>",
                encapsulation: ViewEncapsulation.None,
                styles: [""]
            }] }
];
/** @nocollapse */
NgxaTextareaComponent.ctorParameters = () => [
    { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
];
NgxaTextareaComponent.propDecorators = {
    placeholder: [{ type: Input }],
    colLabel: [{ type: Input }],
    colInput: [{ type: Input }],
    minLength: [{ type: Input }],
    maxLength: [{ type: Input }],
    height: [{ type: Input }]
};
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
const components$5 = [
    MCECoreComponent,
    TinyMCEComponent,
    CaldeiraKnabbenEditorComponent,
    NgxaTextareaComponent,
];
class NgxaEditorModule {
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
                declarations: [
                    ...components$5,
                ],
                exports: [
                    ...components$5,
                ],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxaInputTextComponent extends NgxaValueAccessor {
    /**
     * @param {?} ngControl
     * @param {?} locale
     */
    constructor(ngControl, locale) {
        super(ngControl, locale);
        this.locale = locale;
        this.colLabel = 3;
        this.colInput = 9;
        this.minLength = 0;
        this.maxLength = 100;
        this.type = 'text';
    }
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
NgxaInputTextComponent.ctorParameters = () => [
    { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
];
NgxaInputTextComponent.propDecorators = {
    placeholder: [{ type: Input }],
    colLabel: [{ type: Input }],
    colInput: [{ type: Input }],
    minLength: [{ type: Input }],
    maxLength: [{ type: Input }],
    type: [{ type: Input }]
};
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
class NgxaInputCurrencyComponent extends NgxaValueAccessor {
    /**
     * @param {?} ngControl
     * @param {?} locale
     */
    constructor(ngControl, locale) {
        super(ngControl, locale);
        this.locale = locale;
        this.colLabel = 3;
        this.colInput = 9;
        this.minLength = 0;
        this.maxLength = 100;
        this.prefix = 'Rp';
        this.decimalSeparator = '.';
        this.thousandsSeparator = ',';
        this.suffix = ',-';
        this.padding = 5;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this._value = value ? this.transform(value) : value;
        this.onChange(this.value);
        /** @type {?} */
        const control = this.ngControl.control;
        if (control) {
            control.updateValueAndValidity();
            control.markAsTouched();
            control.markAsDirty();
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    transform(value) {
        const { val, frac } = this.toNumber(value);
        /** @type {?} */
        const v = val.replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandsSeparator);
        return this.prefix.concat(' ').concat(v).concat(frac).concat(this.suffix);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    toNumber(value) {
        const [val = '', frac = ''] = (value || '').split(this.decimalSeparator);
        /** @type {?} */
        let fraction = '';
        if (frac) {
            if (parseInt(frac, 10) > 0) {
                fraction = this.decimalSeparator + this.pad(frac, this.padding).substring(0, this.padding);
            }
        }
        return { val: val, frac: fraction };
    }
    /**
     * @private
     * @param {?} val
     * @param {?} size
     * @return {?}
     */
    pad(val, size) {
        while (val.length < size)
            val = val + '0';
        return val;
    }
}
NgxaInputCurrencyComponent.decorators = [
    { type: Component, args: [{
                selector: 'xa-input-currency',
                template: "<xa-container-outlet\n  [name]=\"name\" [label]=\"label\"\n  [colLabel]=\"colLabel\" [colContent]=\"colInput\"\n  [required]=\"required\" [hasErrors]=\"hasErrors\"\n  [errorMessages]=\"errorMessages\" [paramError]=\"paramError\"\n  [skeleton]=\"skeleton\">\n  <div class=\"col-sm-{{colInput}}\" *ngIf=\"!skeleton; else contentskeleton\">\n    <input\n      type=\"text\"\n      id=\"{{name}}\"\n      [minLength]=\"minLength\"\n      [maxLength]=\"maxLength\"\n      [placeholder]=\"placeholder ? (placeholder | translate) : ''\"\n      [required]=\"required\"\n      [disabled]=\"disabled || skeleton\"\n      [ngClass]=\"{\n        'skeleton': skeleton,\n        'status-danger': hasErrors,\n        'status-success': (hasSuccess && required)\n      }\"\n      (input)=\"onChange($event.target.toNumber)\"\n      (change)=\"onChange($event.target.toNumber)\"\n      (blur)=\"onTouched($event.target.toNumber)\"\n      [(ngModel)]=\"value\"\n      xaCurrency\n      [prefix]=\"prefix\"\n      [decimal]=\"decimalSeparator\"\n      [thousand]=\"thousandsSeparator\"\n      [suffix]=\"suffix\"\n      [padding]=\"padding\"\n      #input nbInput fullWidth>\n  </div>\n  <ng-template #contentskeleton>\n    <div class=\"col-sm-{{colInput}}\">\n      <div\n        [ngClass]=\"{\n          'input-skeleton': true,\n          'skeleton': skeleton\n        }\">\n      </div>\n    </div>\n  </ng-template>\n</xa-container-outlet>",
                encapsulation: ViewEncapsulation.None,
                styles: [""]
            }] }
];
/** @nocollapse */
NgxaInputCurrencyComponent.ctorParameters = () => [
    { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
];
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
class NgxaInputIconComponent extends NgxaValueAccessor {
    /**
     * @param {?} ngControl
     * @param {?} locale
     */
    constructor(ngControl, locale) {
        super(ngControl, locale);
        this.locale = locale;
        this.colLabel = 3;
        this.colInput = 9;
        this.minLength = 0;
        this.maxLength = 100;
        this.type = 'text';
        this.iconcursor = false;
        this.eva = false;
        this.icon = 'search-outline';
        this.clickIcon = new EventEmitter();
        this.focus = new EventEmitter();
    }
    /**
     * @return {?}
     */
    onClickIcon() {
        if (this.iconcursor)
            this.clickIcon.emit(this.value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onFocus(value) {
        this.focus.emit(value);
        this.onTouched(value);
    }
}
NgxaInputIconComponent.decorators = [
    { type: Component, args: [{
                selector: 'xa-input-icon',
                template: "<xa-container-outlet\n  [name]=\"name\" [label]=\"label\" [nolabel]=\"nolabel\"\n  [colLabel]=\"colLabel\" [colContent]=\"colInput\"\n  [required]=\"required\" [hasErrors]=\"hasErrors\"\n  [errorMessages]=\"errorMessages\" [paramError]=\"paramError\"\n  [skeleton]=\"skeleton\">\n  <div class=\"col-sm-{{colInput}} input-group\" *ngIf=\"!skeleton; else contentskeleton\">\n    <input\n      type=\"{{type}}\"\n      id=\"{{name}}\"\n      [pattern]=\"pattern\"\n      [minLength]=\"minLength\"\n      [maxLength]=\"maxLength\"\n      [placeholder]=\"placeholder ? (placeholder | translate) : ''\"\n      [required]=\"required\"\n      [disabled]=\"disabled\"\n      [ngClass]=\"{\n        'status-danger': hasErrors,\n        'status-success': (hasSuccess && required)\n      }\"\n      (input)=\"onChange($event.target.value)\"\n      (change)=\"onChange($event.target.value)\"\n      (blur)=\"onTouched($event.target.value)\"\n      (focus)=\"onFocus($event.target.value)\"\n      [(ngModel)]=\"value\"\n      #input nbInput fullWidth>\n      <div\n        class=\"xinput-icon\"\n        [ngStyle]=\"{\n          'cursor': iconcursor ? 'pointer' : 'unset'\n        }\">\n        <span class=\"{{icon}}\" *ngIf=\"!eva\"></span>\n        <nb-icon class=\"xinput-icon-hover\" icon=\"{{icon}}\" (click)=\"onClickIcon()\" *ngIf=\"eva\"></nb-icon>\n      </div>\n  </div>\n  <ng-template #contentskeleton>\n    <div class=\"col-sm-{{colInput}}\">\n      <div\n        [ngClass]=\"{\n          'input-skeleton': true,\n          'skeleton': skeleton\n        }\">\n      </div>\n    </div>\n  </ng-template>\n</xa-container-outlet>",
                encapsulation: ViewEncapsulation.None,
                styles: ["nb-icon{color:#8f9bb3}.xinput-icon{position:absolute;right:0;margin:.6rem 1.5rem 0 0}.xinput-icon-hover:hover{color:#598bff}"]
            }] }
];
/** @nocollapse */
NgxaInputIconComponent.ctorParameters = () => [
    { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
];
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
class NgxaInputBaseIconComponent extends NgxaValueAccessor {
    /**
     * @param {?} ngControl
     * @param {?} locale
     */
    constructor(ngControl, locale) {
        super(ngControl, locale);
        this.locale = locale;
        this.minLength = 0;
        this.maxLength = 100;
        this.iconcursor = false;
        this.icon = 'search-outline';
        this.type = 'text';
        this.clickIcon = new EventEmitter();
        this.focus = new EventEmitter();
    }
    /**
     * @return {?}
     */
    onClickIcon() {
        if (this.iconcursor)
            this.clickIcon.emit(this.value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onFocus(value) {
        this.focus.emit(value);
        this.onTouched(value);
    }
}
NgxaInputBaseIconComponent.decorators = [
    { type: Component, args: [{
                selector: 'xa-input-base-icon',
                template: "<div class=\"input-group\">\n  <input\n    type=\"{{type}}\"\n    id=\"{{name}}\"\n    [pattern]=\"pattern\"\n    [minLength]=\"minLength\"\n    [maxLength]=\"maxLength\"\n    [placeholder]=\"placeholder ? (placeholder | translate) : ''\"\n    [required]=\"required\"\n    [disabled]=\"disabled\"\n    [ngClass]=\"{\n      'status-danger': hasErrors,\n      'status-success': hasSuccess\n    }\"\n    (input)=\"onChange($event.target.value)\"\n    (change)=\"onChange($event.target.value)\"\n    (blur)=\"onTouched($event.target.value)\"\n    (focus)=\"onFocus($event.target.value)\"\n    [(ngModel)]=\"value\"\n    #input nbInput fullWidth>\n  <div\n    class=\"input-icon\"\n    [ngStyle]=\"{\n      'cursor': iconcursor ? 'pointer' : 'unset'\n    }\">\n    <nb-icon class=\"input-icon-hover\" icon=\"{{icon}}\" (click)=\"onClickIcon()\"></nb-icon>\n  </div>\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                styles: ["nb-icon{color:#8f9bb3}.input-icon{position:absolute;right:0;padding:10px}.input-icon-hover:hover{color:#598bff}"]
            }] }
];
/** @nocollapse */
NgxaInputBaseIconComponent.ctorParameters = () => [
    { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
];
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
const components$6 = [
    NgxaInputTextComponent,
    NgxaInputBaseIconComponent,
    NgxaInputIconComponent,
    NgxaInputCurrencyComponent,
];
class NgxaInputModule {
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
                declarations: [
                    ...components$6,
                ],
                exports: [
                    ...components$6,
                    NbInputModule,
                ],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxaMapsLeafletComponent {
    constructor() {
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
    /**
     * @param {?} markers
     * @return {?}
     */
    set markersFn(markers) {
        if (markers) {
            this.layers = [];
            markers.forEach((/**
             * @param {?} marker
             * @return {?}
             */
            marker$1 => {
                this.layers.push(marker(marker$1.mark, {
                    icon: icon({
                        iconUrl: `${document.getElementsByTagName('base')[0].href}assets/map/marker-icon.png`,
                        shadowUrl: `${document.getElementsByTagName('base')[0].href}assets/map/marker-shadow.png`,
                        iconSize: [27.5, 40],
                        iconAnchor: [20, 40],
                        popupAnchor: [0, -40],
                        className: marker$1.className,
                    }),
                    title: marker$1.title,
                    alt: marker$1.alt,
                }).on('click', this.markerClick.bind(this)));
            }));
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} event
     * @return {?}
     */
    markerClick(event) {
        /** @type {?} */
        const latlng = (/** @type {?} */ (event.latlng));
        /** @type {?} */
        const title = event.target.options.title;
        /** @type {?} */
        const alt = event.target.options.alt;
        this.onMarkerClick.emit({
            mark: latlng,
            title: title,
            alt: alt,
        });
        delay(200);
        this.map.setView([latlng.lat, latlng.lng], 15);
    }
    /**
     * @param {?} map
     * @return {?}
     */
    onMapReady(map) {
        this.map = map;
    }
}
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
class NgxaMapsAgmComponent {
    constructor() {
        this.lat = -2.3641701;
        this.lng = 117.7690927;
    }
}
NgxaMapsAgmComponent.decorators = [
    { type: Component, args: [{
                selector: 'xa-maps-agm',
                template: "<agm-map [latitude]=\"lat\" [longitude]=\"lng\">\n  <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n</agm-map>",
                styles: [".nb-theme-default :host ::ng-deep agm-map{width:100%;height:36.5625rem}.nb-theme-dark :host ::ng-deep agm-map{width:100%;height:36.5625rem}.nb-theme-cosmic :host ::ng-deep agm-map{width:100%;height:36.5625rem}.nb-theme-corporate :host ::ng-deep agm-map{width:100%;height:36.5625rem}"]
            }] }
];
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
const components$7 = [
    NgxaMapsLeafletComponent,
    NgxaMapsAgmComponent,
];
class NgxaMapsModule {
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
                declarations: [
                    ...components$7,
                ],
                exports: [
                    ...components$7,
                ],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const components$8 = [];
class NgxaProgressModule {
}
NgxaProgressModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    FormsModule,
                ],
                declarations: [
                    ...components$8,
                ],
                exports: [
                    ...components$8,
                ],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxaRadioComponent extends NgxaValueAccessor {
    /**
     * @param {?} ngControl
     * @param {?} locale
     */
    constructor(ngControl, locale) {
        super(ngControl, locale);
        this.locale = locale;
        this.colLabel = 3;
        this.colInput = 9;
    }
    /**
     * @return {?}
     */
    onInit() {
        if (!this.value && this.data)
            this.value = this.data[0].value;
    }
}
NgxaRadioComponent.decorators = [
    { type: Component, args: [{
                selector: 'xa-radio',
                template: "<xa-container-outlet\n  [name]=\"name\" [label]=\"label\"\n  [colLabel]=\"colLabel\" [colContent]=\"colInput\"\n  [required]=\"required\" [hasErrors]=\"hasErrors\"\n  [errorMessages]=\"errorMessages\" [paramError]=\"paramError\"\n  [skeleton]=\"skeleton\">\n  <div class=\"col-sm-{{colInput}}\" *ngIf=\"!skeleton; else contentskeleton\">\n    <nb-radio-group\n      [(value)]=\"value\"\n      [name]=\"name\"\n      [disabled]=\"disabled\"\n      #radiogroup>\n      <nb-radio *ngFor=\"let item of data\"\n        [value]=\"item.value\">\n        {{item.name | translate}}\n      </nb-radio>\n    </nb-radio-group>\n  </div>\n  <ng-template #contentskeleton>\n    <div class=\"col-sm-{{colInput}}\">\n      <div\n        [ngClass]=\"{\n          'input-skeleton': true,\n          'skeleton': skeleton\n        }\">\n      </div>\n    </div>\n  </ng-template>\n</xa-container-outlet>",
                encapsulation: ViewEncapsulation.None,
                styles: [""]
            }] }
];
/** @nocollapse */
NgxaRadioComponent.ctorParameters = () => [
    { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
];
NgxaRadioComponent.propDecorators = {
    placeholder: [{ type: Input }],
    colLabel: [{ type: Input }],
    colInput: [{ type: Input }],
    data: [{ type: Input }]
};
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
const components$9 = [
    NgxaRadioComponent,
];
class NgxaRadioModule {
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
                declarations: [
                    ...components$9,
                ],
                exports: [
                    ...components$9,
                ],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ContentSelectDirective {
}
ContentSelectDirective.decorators = [
    { type: Directive, args: [{
                selector: '[xaContentSelect]',
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxaSelectComponent extends NgxaValueAccessor {
    /**
     * @param {?} ngControl
     * @param {?} locale
     * @param {?} injector
     */
    constructor(ngControl, locale, injector) {
        super(ngControl, locale);
        this.locale = locale;
        this.injector = injector;
        this.colLabel = 3;
        this.colInput = 9;
        this.items = [];
        this.multiple = false;
        this.loading = false;
        this.addTag = false;
        this.closeOnSelect = true;
        this.clearable = true;
        this.searchable = true;
        this.hideSelected = true;
        this.minTermLength = 2;
        this.maxTermLength = 50;
        this.limit = 50;
        this.offsetNextLoad = this.limit - 35;
        this.onSelect = new EventEmitter();
        this.onClear = new EventEmitter();
        this.notFoundText = 'select.notfound';
        this.typeToSearchText = 'select.typesearch';
        this.virtualScroll = true;
        this.paramSearch = { value: this.minTermLength };
        this.typeahead$ = new Subject();
        this.destroy$ = new Subject();
        this.total = 0;
        this.totalRecord = 0;
        this.http = injector.get(HTTP_SERVICE);
        this.cdref = injector.get(ChangeDetectorRef);
    }
    /**
     * @return {?}
     */
    get value() { return this._value; }
    /**
     * @param {?} value
     * @return {?}
     */
    set value(value) {
        if (this._value !== value) {
            this._value = value;
            this.onChange(value);
            this.onSelect.emit(value);
            /** @type {?} */
            const control = this.ngControl.control;
            if (control) {
                control.updateValueAndValidity();
                control.markAsTouched();
                control.markAsDirty();
            }
        }
    }
    /**
     * @return {?}
     */
    onInit() {
        this.paramSearch = { value: this.minTermLength };
        if (this.api) {
            this.fetchSearch().subscribe((/**
             * @param {?} items
             * @return {?}
             */
            (items) => {
                this.fetchMore(items);
            }));
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
        this.destroy$.unsubscribe();
        this.typeahead$.next(null);
        this.typeahead$.complete();
        this.typeahead$.unsubscribe();
    }
    /**
     * @return {?}
     */
    onOpen() {
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
                (items) => {
                    this.fetchMore(items);
                }));
            }
        }
    }
    /**
     * @return {?}
     */
    onClose() {
        if (this.api) {
            this.reset();
        }
    }
    /**
     * @param {?} __0
     * @param {?} search
     * @return {?}
     */
    onScroll({ end }, search) {
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
                    (items) => {
                        this.fetchMore(items);
                    }));
                }
            }
        }
    }
    /**
     * @param {?} search
     * @return {?}
     */
    onScrollToEnd(search) {
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
                    (items) => {
                        this.fetchMore(items);
                    }));
                }
            }
        }
    }
    /**
     * @return {?}
     */
    doClear() {
        this.onClear.emit(true);
    }
    /**
     * @private
     * @return {?}
     */
    reset() {
        this.total = 0;
        this.items = [];
        this.loading = false;
    }
    /**
     * @private
     * @param {?} items
     * @return {?}
     */
    fetchMore(items) {
        this.items = [...this.items, ...items];
        this.cdref.detectChanges();
        this.loading = false;
    }
    /**
     * @private
     * @return {?}
     */
    fetchSearch() {
        return this.typeahead$.pipe(switchMap((/**
         * @param {?} term
         * @return {?}
         */
        (term) => {
            if (term) {
                if (term.length > this.maxTermLength) {
                    return of([]);
                }
                return this.getRequest(this.total, term);
            }
            else
                return of([]);
        }))).takeUntil(this.destroy$);
    }
    /**
     * @private
     * @return {?}
     */
    fetchNone() {
        return this.getRequest(this.total).takeUntil(this.destroy$);
    }
    /**
     * @private
     * @param {?=} offset
     * @param {?=} search
     * @return {?}
     */
    getRequest(offset, search) {
        /** @type {?} */
        let body;
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
                (result) => {
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
        (response) => {
            this.totalRecord = Number(response.totalRecord);
            this.total = this.total + Number(response.totalFiltered);
            return ((/** @type {?} */ (response['data'])));
        })), catchError((/**
         * @return {?}
         */
        () => of([]))));
    }
    /**
     * @param {?} event
     * @param {?} term
     * @return {?}
     */
    onKeyDown(event, term) {
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
    }
}
NgxaSelectComponent.decorators = [
    { type: Component, args: [{
                selector: 'xa-select',
                template: "<xa-container-outlet\n  [name]=\"name\" [label]=\"label\"\n  [colLabel]=\"colLabel\" [colContent]=\"colInput\"\n  [required]=\"required\" [hasErrors]=\"hasErrors\"\n  [errorMessages]=\"errorMessages\" [paramError]=\"paramError\"\n  [skeleton]=\"skeleton\">\n  <div class=\"col-sm-{{colInput}}\" *ngIf=\"!skeleton; else contentskeleton\">\n    <ng-select\n      [placeholder]=\"placeholder ? (placeholder | translate) : ''\"\n      [items]=\"items\"\n      [typeahead]=\"typeahead$\"\n      [multiple]=\"multiple\"\n      [loading]=\"loading\"\n      [notFoundText]=\"notFoundText | translate\"\n      [addTag]=\"addTag\"\n      [closeOnSelect]=\"closeOnSelect\"\n      [clearable]=\"required? false: clearable\"\n      [searchable]=\"searchable\"\n      [hideSelected]=\"hideSelected\"\n      [minTermLength]=\"minTermLength\"\n      [virtualScroll]=\"virtualScroll\"\n      [required]=\"required\"\n      [disabled]=\"disabled\"\n      (keydown)=\"onKeyDown($event, select.searchTerm)\"\n      (scroll)=\"onScroll($event, select.searchTerm)\"\n      (scrollToEnd)=\"onScrollToEnd(select.searchTerm)\"\n      (open)=\"onOpen()\"\n      (close)=\"onClose()\"\n      (clear)=\"doClear()\"\n      (change)=\"onChange($event)\"\n      (focus)=\"onTouched($event)\"\n      (blur)=\"onTouched($event)\"\n      [(ngModel)]=\"value\"\n      [ngClass]=\"{'required': required}\"\n      appendTo=\"body\"\n      typeToSearchText=\"{{typeToSearchText | translate:paramSearch}}\"\n      #select>\n        <ng-template *ngIf=\"contentTemplate\" ng-label-tmp let-item=\"item\">\n          <ng-container *ngTemplateOutlet=\"contentTemplate; context: {$implicit: item}\"></ng-container>\n        </ng-template>\n        <ng-template *ngIf=\"contentTemplate\" ng-option-tmp let-item=\"item\">\n          <ng-container *ngTemplateOutlet=\"contentTemplate; context: {$implicit: item}\"></ng-container>\n        </ng-template>\n    </ng-select>\n  </div>\n  <ng-template #contentskeleton>\n    <div class=\"col-sm-{{colInput}}\">\n      <div\n        [ngClass]=\"{\n          'input-skeleton': true,\n          'skeleton': skeleton\n        }\">\n      </div>\n    </div>\n  </ng-template>\n</xa-container-outlet>",
                encapsulation: ViewEncapsulation.None,
                styles: ["ng-select.ng-invalid.ng-touched .ng-select-container{border-color:#ff3d71}ng-select.ng-invalid.ng-touched:focus{border-color:#ff3d71;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 0 3px #fde6e8}ng-select.ng-valid.ng-touched.required .ng-select-container{border-color:#00d68f}ng-select.ng-valid.ng-touched.required:focus{border-color:#00d68f;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 0 3px #e4e9f2}body{font-size:1rem;font-weight:400;line-height:1.5;position:relative;font-family:Open Sans,sans-serif}.ng-select .ng-select-container{border-radius:.25rem;line-height:1.5rem;align-items:center;background-color:#f7f9fc;color:#1a2138;font-family:Open Sans,sans-serif;border:1px solid #edf1f7}"]
            }] }
];
/** @nocollapse */
NgxaSelectComponent.ctorParameters = () => [
    { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] },
    { type: Injector }
];
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
const components$a = [
    NgxaSelectComponent,
];
/** @type {?} */
const directives$1 = [
    ContentSelectDirective,
];
class NgxaSelectModule {
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
                declarations: [
                    ...components$a,
                    ...directives$1,
                ],
                exports: [
                    ...components$a,
                    ...directives$1,
                ],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const components$b = [];
class NgxaSpinnerModule {
}
NgxaSpinnerModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    FormsModule,
                ],
                declarations: [
                    ...components$b,
                ],
                exports: [
                    ...components$b,
                ],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxaDatatableComponent {
    /**
     * @param {?} locale
     * @param {?} layout
     * @param {?} injector
     */
    constructor(locale, layout, injector) {
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
    /**
     * @param {?} keyword
     * @return {?}
     */
    set filterFn(keyword) {
        this.keywordParam = keyword;
        this._keyword = keyword;
        this.count = 0;
        this.offset = 0;
    }
    /**
     * @param {?} keyword
     * @return {?}
     */
    set filterDoFetchFn(keyword) {
        if (keyword) {
            this.keywordParam = keyword;
            this._keyword = keyword;
        }
        this.count = 0;
        this.offset = 0;
        this.fetch();
    }
    /**
     * @param {?} reload
     * @return {?}
     */
    set reloadFn(reload) {
        if (reload) {
            this.count = 0;
            this.offset = 0;
            this.fetch();
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.startWithOpenData) {
            this.fetch();
        }
        this.layout.onChangeLayoutSize().takeUntil(this.destroy$).subscribe((/**
         * @return {?}
         */
        () => {
            this.datatable.recalculate();
            this.cdref.detectChanges();
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
        this.destroy$.unsubscribe();
    }
    /**
     * @param {?} search
     * @return {?}
     */
    doSearch(search) {
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
    }
    /**
     * @param {?} search
     * @return {?}
     */
    doFilter(search) {
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
            filter => {
                switch (filter.type) {
                    case 'input':
                    case 'datepicker':
                    case 'radio':
                        this._keyword[filter.controlName] = search[filter.controlName];
                        break;
                    case 'select':
                        this._keyword[filter.controlName] = search[filter.controlName].label;
                        break;
                    case 'checkbox':
                        this._keyword[filter.controlName] = search[filter.controlName].name;
                        break;
                    default:
                        break;
                }
            }));
            this.count = 0;
            this.offset = 0;
            this.fetch();
        }
    }
    /**
     * @param {?} add
     * @return {?}
     */
    doAdd(add) {
        this.onAdd.emit(add);
    }
    /**
     * @param {?} row
     * @return {?}
     */
    doEdit(row) {
        this.onEdit.emit(row);
    }
    /**
     * @return {?}
     */
    doDelete() {
        this.onDelete.emit(this.selected);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onKeyDown(event) {
        if (event.keyCode === 13) {
            this.doSearch(this._search);
        }
    }
    /**
     * @return {?}
     */
    fetch() {
        if (this.api) {
            this.externalPaging = true;
            this.externalSorting = true;
            this.getRequest().subscribe((/**
             * @param {?} rows
             * @return {?}
             */
            rows => {
                this.rows = rows;
                this.cdref.detectChanges();
            }));
        }
    }
    /**
     * @param {?} page
     * @return {?}
     */
    setPage(page) {
        this.pageOffset = page.offset * this.limit;
        this.fetch();
    }
    /**
     * @param {?} order
     * @return {?}
     */
    onSort(order) {
        if (order) {
            if (Array.isArray(order.sorts)) {
                order.sorts.forEach((/**
                 * @param {?} sort
                 * @return {?}
                 */
                sort => {
                    if (sort['dir'] === 'asc') {
                        this.sort = { asc: [sort['prop']] };
                    }
                    else {
                        this.sort = { desc: [sort['prop']] };
                    }
                }));
            }
        }
        this.fetch();
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    onSelect({ selected }) {
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
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onClickButton(event) {
        this.onButtonCell.emit(event);
    }
    /**
     * @private
     * @return {?}
     */
    getRequest() {
        /** @type {?} */
        const body = {
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
        (response) => {
            this.count = Number(response.totalRecord);
            this.loadingIndicator = false;
            return ((/** @type {?} */ (response['data'])));
        })), catchError((/**
         * @return {?}
         */
        () => {
            this.loadingIndicator = false;
            this.count = 0;
            return of([]);
        })));
    }
}
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
NgxaDatatableComponent.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] },
    { type: LayoutService },
    { type: Injector }
];
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
class NgxaDatatableCollapseComponent {
    constructor() {
        this.toggle = (/**
         * @return {?}
         */
        () => {
            this.opened$.pipe(take(1)).subscribe((/**
             * @param {?} x
             * @return {?}
             */
            x => this.openedSubject.next(!x)));
        });
        this.openedSubject = new ReplaySubject(1);
        this.openedSubject.next(false);
        this.opened$ = this.openedSubject.asObservable();
        this.openedState$ = this.opened$.pipe(map((/**
         * @param {?} x
         * @return {?}
         */
        x => x ? 'expanded' : 'collapsed')));
    }
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
NgxaDatatableCollapseComponent.ctorParameters = () => [];
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
class NgxaDatatableHeaderComponent {
    constructor() {
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
    ngOnDestroy() { }
    /**
     * @param {?} search
     * @return {?}
     */
    doSearch(search) {
        if (this.showFilter)
            this.doFilterFunnel();
        this.onSearch.emit(search);
    }
    /**
     * @return {?}
     */
    doFilterFunnel() {
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
            val => {
                this.disabledButtonFilter = false;
            }));
        }
    }
    /**
     * @return {?}
     */
    doFilter() {
        this.onFilter.emit(this.formGroupFilter.value);
    }
    /**
     * @return {?}
     */
    doAdd() {
        this.onAdd.emit(true);
    }
    /**
     * @return {?}
     */
    doDelete() {
        this.onDelete.emit(true);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onKeyDown(event) {
        if (event.keyCode === 13) {
            this.doSearch(this._search);
        }
    }
    /**
     * @return {?}
     */
    onFocusSearch() {
        if (this.showFilter)
            this.doFilterFunnel();
    }
}
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
class NgxaDatatableBaseComponent {
    /**
     * @param {?} locale
     * @param {?} injector
     */
    constructor(locale, injector) {
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
    setPage(page) {
        this.page.emit(page);
    }
    /**
     * @param {?} order
     * @return {?}
     */
    onSort(order) {
        this.sort.emit(order);
    }
    /**
     * @param {?} selected
     * @return {?}
     */
    onSelect(selected) {
        this.select.emit(selected);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onActivate(event) {
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
    }
    /**
     * @param {?} value
     * @return {?}
     */
    sanitizedValue(value) {
        return value !== null && value !== undefined ? this.stripHtml(value) : value;
    }
    /**
     * @param {?} html
     * @return {?}
     */
    stripHtml(html) {
        if (!html.replace) {
            return html;
        }
        return html.replace(/<\/?[^>]+(>|$)/g, '');
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onClickButton(event) {
        this.onButtonCell.emit(event);
    }
}
NgxaDatatableBaseComponent.decorators = [
    { type: Component, args: [{
                selector: 'xa-datatable-base',
                template: "<ngx-datatable\n    class=\"ngxa\"\n    [rows]=\"rows\"\n    [columns]=\"columns\"\n    [selected]=\"selected\"\n    [limit]=\"limit\"\n    [count]=\"count\"\n    [offset]=\"offset\"\n    [externalPaging]=\"externalPaging\"\n    [externalSorting]=\"externalSorting\"\n    [loadingIndicator]=\"loadingIndicator\"\n    [scrollbarH]=\"scrollbarH\"\n    [scrollbarV]=\"scrollbarV\"\n    [reorderable]=\"reorderable\"\n    [sortType]=\"sortType\"\n    [selectionType]=\"selectionType\"\n    [columnMode]=\"columnMode\"\n    [headerHeight]=\"headerHeight\"\n    [footerHeight]=\"footerHeight\"\n    [rowHeight]=\"rowHeight\"\n    (page)=\"setPage($event)\"\n    (sort)=\"onSort($event)\"\n    (select)=\"onSelect($event)\"\n    (activate)=\"onActivate($event)\"\n    #datatable>\n    <div *ngIf=\"column\">\n        <ngx-datatable-column *ngIf=\"selectionType === 'checkbox'\"\n            [width]=\"30\"\n            [sortable]=\"false\"\n            [canAutoResize]=\"false\"\n            [draggable]=\"false\"\n            [resizeable]=\"false\"\n            [headerCheckboxable]=\"true\"\n            [checkboxable]=\"true\"\n            [frozenLeft]=\"true\">\n        </ngx-datatable-column>\n        <ngx-datatable-column *ngFor=\"let col of columns\"\n            [prop]=\"col.prop\"\n            [name]=\"col.name | translate\"\n            [sortable]=\"col.sortable\"\n            [canAutoResize]=\"col.canAutoResize\"\n            [draggable]=\"col.draggable\"\n            [resizeable]=\"col.resizeable\"\n            [width]=\"col.width\"\n            [frozenLeft]=\"col.frozenLeft\"\n            [frozenRight]=\"col.frozenRight\">\n            <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n                <span *ngIf=\"!col.cellTemplate && !col.type\" [title]=\"sanitizedValue(value)\" [innerHTML]=\"value\"></span>\n                <span *ngIf=\"!col.cellTemplate && col.type === 'prefix'\" [title]=\"sanitizedValue(value)\" [innerHTML]=\"value + ' ' + col.prefix\"></span>\n                <span *ngIf=\"!col.cellTemplate && col.type === 'html'\" [title]=\"sanitizedValue(value)\" [innerHTML]=\"value\"></span>\n                <span *ngIf=\"!col.cellTemplate && col.type === 'icon'\" [title]=\"sanitizedValue(value)\"><span class=\"{{value}}\"></span></span>\n                <button\n                    *ngIf=\"!col.cellTemplate && col.type === 'button'\"\n                    [status]=\"col.buttonStatus ? col.buttonStatus : 'primary'\"\n                    (click)=\"onClickButton(value)\"\n                    [size]=\"'tiny'\"\n                    nbButton>\n                    {{ col.button | translate }}\n                </button>\n            </ng-template>\n        </ngx-datatable-column>\n    </div>\n    <ngx-datatable-footer *ngIf=\"footer\">\n        <ng-template\n            ngx-datatable-footer-template\n            let-rowCount=\"rowCount\"\n            let-pageSize=\"pageSize\"\n            let-selectedCount=\"selectedCount\"\n            let-curPage=\"curPage\"\n            let-offset=\"offset\"\n            let-isVisible=\"isVisible\">\n            <div class=\"page-count\">\n                <div> {{ selectedCount }} {{ 'Selected' | translate }} | {{ count }} {{ 'Total' | translate }} </div>\n            </div>\n            <datatable-pager\n                [pagerLeftArrowIcon]=\"'datatable-icon-left'\"\n                [pagerRightArrowIcon]=\"'datatable-icon-right'\"\n                [pagerPreviousIcon]=\"'datatable-icon-prev'\"\n                [pagerNextIcon]=\"'datatable-icon-skip'\"\n                [page]=\"curPage\"\n                [size]=\"pageSize\"\n                [count]=\"rowCount\"\n                [hidden]=\"!((rowCount / pageSize) > 1)\"\n                (change)=\"datatable.onFooterPage($event)\">\n            </datatable-pager>\n        </ng-template>\n    </ngx-datatable-footer>\n</ngx-datatable>\n",
                encapsulation: ViewEncapsulation.None,
                styles: [".ngx-datatable.material{background:#fff;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.ngx-datatable.material.striped .datatable-row-odd{background:#eee}.ngx-datatable.material.multi-click-selection .datatable-body-row.active,.ngx-datatable.material.multi-click-selection .datatable-body-row.active .datatable-row-group,.ngx-datatable.material.multi-selection .datatable-body-row.active,.ngx-datatable.material.multi-selection .datatable-body-row.active .datatable-row-group,.ngx-datatable.material.single-selection .datatable-body-row.active,.ngx-datatable.material.single-selection .datatable-body-row.active .datatable-row-group{background-color:#304ffe;color:#fff}.ngx-datatable.material.multi-click-selection .datatable-body-row.active:hover,.ngx-datatable.material.multi-click-selection .datatable-body-row.active:hover .datatable-row-group,.ngx-datatable.material.multi-selection .datatable-body-row.active:hover,.ngx-datatable.material.multi-selection .datatable-body-row.active:hover .datatable-row-group,.ngx-datatable.material.single-selection .datatable-body-row.active:hover,.ngx-datatable.material.single-selection .datatable-body-row.active:hover .datatable-row-group{background-color:#193ae4;color:#fff}.ngx-datatable.material.multi-click-selection .datatable-body-row.active:focus,.ngx-datatable.material.multi-click-selection .datatable-body-row.active:focus .datatable-row-group,.ngx-datatable.material.multi-selection .datatable-body-row.active:focus,.ngx-datatable.material.multi-selection .datatable-body-row.active:focus .datatable-row-group,.ngx-datatable.material.single-selection .datatable-body-row.active:focus,.ngx-datatable.material.single-selection .datatable-body-row.active:focus .datatable-row-group{background-color:#2041ef;color:#fff}.ngx-datatable.material:not(.cell-selection) .datatable-body-row:hover,.ngx-datatable.material:not(.cell-selection) .datatable-body-row:hover .datatable-row-group{background-color:#eee;transition-property:background;transition-duration:.3s;transition-timing-function:linear}.ngx-datatable.material:not(.cell-selection) .datatable-body-row:focus,.ngx-datatable.material:not(.cell-selection) .datatable-body-row:focus .datatable-row-group{background-color:#ddd}.ngx-datatable.material.cell-selection .datatable-body-cell:hover,.ngx-datatable.material.cell-selection .datatable-body-cell:hover .datatable-row-group{background-color:#eee;transition-property:background;transition-duration:.3s;transition-timing-function:linear}.ngx-datatable.material.cell-selection .datatable-body-cell:focus,.ngx-datatable.material.cell-selection .datatable-body-cell:focus .datatable-row-group{background-color:#ddd}.ngx-datatable.material.cell-selection .datatable-body-cell.active,.ngx-datatable.material.cell-selection .datatable-body-cell.active .datatable-row-group{background-color:#304ffe;color:#fff}.ngx-datatable.material.cell-selection .datatable-body-cell.active:hover,.ngx-datatable.material.cell-selection .datatable-body-cell.active:hover .datatable-row-group{background-color:#193ae4;color:#fff}.ngx-datatable.material.cell-selection .datatable-body-cell.active:focus,.ngx-datatable.material.cell-selection .datatable-body-cell.active:focus .datatable-row-group{background-color:#2041ef;color:#fff}.ngx-datatable.material .empty-row{height:50px;text-align:left;padding:.5rem 1.2rem;vertical-align:top;border-top:0}.ngx-datatable.material .loading-row{text-align:left;padding:.5rem 1.2rem;vertical-align:top;border-top:0}.ngx-datatable.material .datatable-body .datatable-row-left,.ngx-datatable.material .datatable-header .datatable-row-left{background-color:#fff;background-position:100% 0;background-repeat:repeat-y;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAFklEQVQIHWPSkNeSBmJhTQVtbiDNCgASagIIuJX8OgAAAABJRU5ErkJggg==)}.ngx-datatable.material .datatable-body .datatable-row-right,.ngx-datatable.material .datatable-header .datatable-row-right{background-position:0 0;background-color:#fff;background-repeat:repeat-y;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAFklEQVQI12PQkNdi1VTQ5gbSwkAsDQARLAIGtOSFUAAAAABJRU5ErkJggg==)}.ngx-datatable.material .datatable-header{border-bottom:1px solid rgba(0,0,0,.12)}.ngx-datatable.material .datatable-header .datatable-header-cell{text-align:left;padding:.9rem 1.2rem;background-color:#fff;color:rgba(0,0,0,.54);vertical-align:bottom;font-size:12px;font-weight:500}.ngx-datatable.material .datatable-header .datatable-header-cell .datatable-header-cell-wrapper{position:relative}.ngx-datatable.material .datatable-header .datatable-header-cell.longpress .draggable::after{transition:transform .4s,opacity .4s;opacity:.5;transform:scale(1)}.ngx-datatable.material .datatable-header .datatable-header-cell .draggable::after{content:' ';position:absolute;top:50%;left:50%;margin:-30px 0 0 -30px;height:60px;width:60px;background:#eee;border-radius:100%;opacity:1;-webkit-filter:none;filter:none;transform:scale(0);z-index:9999;pointer-events:none}.ngx-datatable.material .datatable-header .datatable-header-cell.dragging .resize-handle{border-right:none}.ngx-datatable.material .datatable-header .resize-handle{border-right:1px solid #eee}.ngx-datatable.material .datatable-body .datatable-row-detail{background:#f5f5f5;padding:10px}.ngx-datatable.material .datatable-body .datatable-group-header{background:#f5f5f5;border-bottom:1px solid #d9d8d9;border-top:1px solid #d9d8d9}.ngx-datatable.material .datatable-body .datatable-body-row .datatable-body-cell,.ngx-datatable.material .datatable-body .datatable-body-row .datatable-body-group-cell{text-align:left;padding:.9rem 1.2rem;vertical-align:top;border-top:0;color:rgba(0,0,0,.87);transition:width .3s;font-size:14px;font-weight:400}.ngx-datatable.material .datatable-body .progress-linear{display:block;width:100%;height:5px;padding:0;margin:0;position:absolute}.ngx-datatable.material .datatable-body .progress-linear .container{display:block;position:relative;overflow:hidden;width:100%;height:5px;transform:translate(0,0) scale(1,1);background-color:#aad1f9}.ngx-datatable.material .datatable-body .progress-linear .container .bar{transition:transform .2s linear;-webkit-animation:.8s cubic-bezier(.39,.575,.565,1) infinite query;animation:.8s cubic-bezier(.39,.575,.565,1) infinite query;background-color:#106cc8;position:absolute;left:0;top:0;bottom:0;width:100%;height:5px}.ngx-datatable.material .datatable-footer{border-top:1px solid rgba(0,0,0,.12);font-size:12px;font-weight:400;color:rgba(0,0,0,.54)}.ngx-datatable.material .datatable-footer .page-count{line-height:50px;height:50px;padding:0 1.2rem}.ngx-datatable.material .datatable-footer .datatable-pager{margin:0 10px}.ngx-datatable.material .datatable-footer .datatable-pager li{vertical-align:middle}.ngx-datatable.material .datatable-footer .datatable-pager li.disabled a{color:rgba(0,0,0,.26)!important;background-color:transparent!important}.ngx-datatable.material .datatable-footer .datatable-pager li.active a{background-color:rgba(158,158,158,.2);font-weight:700}.ngx-datatable.material .datatable-footer .datatable-pager a{height:22px;min-width:24px;line-height:22px;padding:0 6px;border-radius:3px;margin:6px 3px;text-align:center;color:rgba(0,0,0,.54);text-decoration:none;vertical-align:bottom}.ngx-datatable.material .datatable-footer .datatable-pager a:hover{color:rgba(0,0,0,.75);background-color:rgba(158,158,158,.2)}.ngx-datatable.material .datatable-footer .datatable-pager .datatable-icon-left,.ngx-datatable.material .datatable-footer .datatable-pager .datatable-icon-prev,.ngx-datatable.material .datatable-footer .datatable-pager .datatable-icon-right,.ngx-datatable.material .datatable-footer .datatable-pager .datatable-icon-skip{font-size:20px;line-height:20px;padding:0 3px}.ngx-datatable.material .datatable-summary-row .datatable-body-row,.ngx-datatable.material .datatable-summary-row .datatable-body-row:hover{background-color:#ddd}.ngx-datatable.material .datatable-summary-row .datatable-body-row .datatable-body-cell{font-weight:700}.datatable-checkbox{position:relative;margin:0;cursor:pointer;vertical-align:middle;display:inline-block;box-sizing:border-box;padding:0}.datatable-checkbox input[type=checkbox]{position:relative;margin:0 1rem 0 0;cursor:pointer;outline:0}.datatable-checkbox input[type=checkbox]:before{transition:.3s ease-in-out;content:'';position:absolute;left:0;z-index:1;width:1rem;height:1rem;border:2px solid #f2f2f2}.datatable-checkbox input[type=checkbox]:checked:before{transform:rotate(-45deg);height:.5rem;border-color:#009688;border-top-style:none;border-right-style:none}.datatable-checkbox input[type=checkbox]:after{content:'';position:absolute;top:0;left:0;width:1rem;height:1rem;background:#fff;cursor:pointer}@-webkit-keyframes query{0%{opacity:1;transform:translateX(35%) scale(.3,1)}100%{opacity:0;transform:translateX(-50%) scale(0,1)}}@keyframes query{0%{opacity:1;transform:translateX(35%) scale(.3,1)}100%{opacity:0;transform:translateX(-50%) scale(0,1)}}.ngx-datatable.bootstrap{box-shadow:none;font-size:13px}.ngx-datatable.bootstrap .datatable-header{height:unset!important}.ngx-datatable.bootstrap .datatable-header .datatable-header-cell{vertical-align:bottom;padding:.75rem;border-bottom:1px solid #d1d4d7}.ngx-datatable.bootstrap .datatable-header .datatable-header-cell .datatable-header-cell-label{line-height:24px}.ngx-datatable.bootstrap .datatable-body .datatable-body-row{vertical-align:top;border-top:1px solid #d1d4d7}.ngx-datatable.bootstrap .datatable-body .datatable-body-row.datatable-row-even{background-color:rgba(0,0,0,.05)}.ngx-datatable.bootstrap .datatable-body .datatable-body-row.active{background-color:#1483ff;color:#fff}.ngx-datatable.bootstrap .datatable-body .datatable-body-row .datatable-body-cell{padding:.75rem;text-align:left;vertical-align:top}.ngx-datatable.bootstrap .datatable-body .empty-row{position:relative;padding:.75rem 1.25rem;margin-bottom:0}.ngx-datatable.bootstrap .datatable-footer{background:#424242;color:#ededed;margin-top:-1px}.ngx-datatable.bootstrap .datatable-footer .page-count{line-height:50px;height:50px;padding:0 1.2rem}.ngx-datatable.bootstrap .datatable-footer .datatable-pager{margin:0 10px;vertical-align:top}.ngx-datatable.bootstrap .datatable-footer .datatable-pager ul li{margin:10px 0}.ngx-datatable.bootstrap .datatable-footer .datatable-pager ul li:not(.disabled).active a,.ngx-datatable.bootstrap .datatable-footer .datatable-pager ul li:not(.disabled):hover a{background-color:#545454;font-weight:700}.ngx-datatable.bootstrap .datatable-footer .datatable-pager a{height:22px;min-width:24px;line-height:22px;padding:0;border-radius:3px;margin:0 3px;text-align:center;text-decoration:none;vertical-align:bottom;color:#ededed}.ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-left,.ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-prev,.ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-right,.ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-skip{font-size:18px;line-height:27px;padding:0 3px}.ngx-datatable.bootstrap .datatable-summary-row .datatable-body-row .datatable-body-cell{font-weight:700}.ngx-datatable.dark{box-shadow:none;background:#1b1e27;border:1px solid #2f3646;color:#fff;font-size:13px}.ngx-datatable.dark .datatable-header{background:#181b24;color:#72809b}.ngx-datatable.dark .datatable-header .datatable-header-cell{text-align:left;padding:.5rem 1.2rem;font-weight:700}.ngx-datatable.dark .datatable-header .datatable-header-cell .datatable-header-cell-label{line-height:24px}.ngx-datatable.dark .datatable-body{background:#1a1e28}.ngx-datatable.dark .datatable-body .datatable-body-row{border-top:1px solid #2f3646}.ngx-datatable.dark .datatable-body .datatable-body-row .datatable-body-cell{text-align:left;padding:.5rem 1.2rem;vertical-align:top}.ngx-datatable.dark .datatable-body .datatable-body-row:hover{background:#171b24;transition-property:background;transition-duration:.3s;transition-timing-function:linear}.ngx-datatable.dark .datatable-body .datatable-body-row:focus{background-color:#232837}.ngx-datatable.dark .datatable-body .datatable-body-row.active{background-color:#1483ff;color:#fff}.ngx-datatable.dark .datatable-footer{background:#232837;color:#72809b;margin-top:-1px}.ngx-datatable.dark .datatable-footer .page-count{line-height:50px;height:50px;padding:0 1.2rem}.ngx-datatable.dark .datatable-footer .datatable-pager{margin:0 10px;vertical-align:top}.ngx-datatable.dark .datatable-footer .datatable-pager ul li{margin:10px 0}.ngx-datatable.dark .datatable-footer .datatable-pager ul li:not(.disabled).active a,.ngx-datatable.dark .datatable-footer .datatable-pager ul li:not(.disabled):hover a{background-color:#455066;font-weight:700}.ngx-datatable.dark .datatable-footer .datatable-pager a{height:22px;min-width:24px;line-height:22px;padding:0;border-radius:3px;margin:0 3px;text-align:center;text-decoration:none;vertical-align:bottom;color:#72809b}.ngx-datatable.dark .datatable-footer .datatable-pager .datatable-icon-left,.ngx-datatable.dark .datatable-footer .datatable-pager .datatable-icon-prev,.ngx-datatable.dark .datatable-footer .datatable-pager .datatable-icon-right,.ngx-datatable.dark .datatable-footer .datatable-pager .datatable-icon-skip{font-size:18px;line-height:27px;padding:0 3px}.ngx-datatable.dark .datatable-summary-row .datatable-body-row,.ngx-datatable.dark .datatable-summary-row .datatable-body-row:hover{background-color:#14171f}.ngx-datatable.dark .datatable-summary-row .datatable-body-row .datatable-body-cell{font-weight:700}.ngx-datatable.ngxa{box-shadow:none;font-size:13px}.ngx-datatable.ngxa .datatable-header{height:unset!important}.ngx-datatable.ngxa .datatable-header .datatable-header-cell{vertical-align:bottom;padding:.75rem;border-bottom:1px solid #d1d4d7}.ngx-datatable.ngxa .datatable-header .datatable-header-cell .datatable-header-cell-label{line-height:24px}.ngx-datatable.ngxa .datatable-header .datatable-header-cell .datatable-checkbox input[type=checkbox]:checked:before{transform:rotate(-45deg);height:.5rem;border-color:#36f;border-top-style:none;border-right-style:none}.ngx-datatable.ngxa .datatable-header .datatable-row-left{background-color:#fff;background-position:100% 0;background-repeat:repeat-y;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAFklEQVQIHWPSkNeSBmJhTQVtbiDNCgASagIIuJX8OgAAAABJRU5ErkJggg==)}.ngx-datatable.ngxa .datatable-header .datatable-row-right{background-color:#fff;background-position:0 0;background-repeat:repeat-y;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAFklEQVQI12PQkNdi1VTQ5gbSwkAsDQARLAIGtOSFUAAAAABJRU5ErkJggg==)}.ngx-datatable.ngxa .datatable-body .datatable-body-row{vertical-align:top}.ngx-datatable.ngxa .datatable-body .datatable-body-row.datatable-row-even,.ngx-datatable.ngxa .datatable-body .datatable-body-row.datatable-row-even .datatable-row-left,.ngx-datatable.ngxa .datatable-body .datatable-body-row.datatable-row-even .datatable-row-right{background-color:#f2f2f2}.ngx-datatable.ngxa .datatable-body .datatable-body-row.datatable-row-odd .datatable-row-left,.ngx-datatable.ngxa .datatable-body .datatable-body-row.datatable-row-odd .datatable-row-right{background-color:#fff}.ngx-datatable.ngxa .datatable-body .datatable-body-row .datatable-row-left{background-position:100% 0;background-repeat:repeat-y;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAFklEQVQIHWPSkNeSBmJhTQVtbiDNCgASagIIuJX8OgAAAABJRU5ErkJggg==)}.ngx-datatable.ngxa .datatable-body .datatable-body-row .datatable-row-right{background-position:0 0;background-repeat:repeat-y;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAFklEQVQI12PQkNdi1VTQ5gbSwkAsDQARLAIGtOSFUAAAAABJRU5ErkJggg==)}.ngx-datatable.ngxa .datatable-body .datatable-body-row.active{background-color:#36f;color:#fff}.ngx-datatable.ngxa .datatable-body .datatable-body-row.active .datatable-row-left,.ngx-datatable.ngxa .datatable-body .datatable-body-row.active .datatable-row-right{background-color:#36f}.ngx-datatable.ngxa .datatable-body .datatable-body-row:hover,.ngx-datatable.ngxa .datatable-body .datatable-body-row:hover .datatable-row-group{cursor:pointer;border-bottom:.025rem solid #7899ff;transition-property:background;transition-duration:.3s;transition-timing-function:linear}.ngx-datatable.ngxa .datatable-body .datatable-body-row .datatable-body-cell{padding:.75rem;text-align:left;vertical-align:top}.ngx-datatable.ngxa .datatable-body .datatable-body-row .datatable-body-cell .datatable-checkbox input[type=checkbox]:checked:before{transform:rotate(-45deg);height:.5rem;border-color:#36f;border-top-style:none;border-right-style:none}.ngx-datatable.ngxa .datatable-body .empty-row{position:relative;padding:.75rem 1.25rem;margin-bottom:0}.ngx-datatable.ngxa .datatable-body .progress-linear{display:block;width:100%;height:5px;padding:0;margin:0;position:absolute}.ngx-datatable.ngxa .datatable-body .progress-linear .container{display:block;position:relative;overflow:hidden;width:100%;height:5px;transform:translate(0,0) scale(1,1);background-color:#aad1f9}.ngx-datatable.ngxa .datatable-body .progress-linear .container .bar{transition:transform .2s linear;-webkit-animation:.8s cubic-bezier(.39,.575,.565,1) infinite query;animation:.8s cubic-bezier(.39,.575,.565,1) infinite query;background-color:#106cc8;position:absolute;left:0;top:0;bottom:0;width:100%;height:5px}.ngx-datatable.ngxa .datatable-footer{background:#f2f2f2;color:#5a5a5a;margin-top:-1px}.ngx-datatable.ngxa .datatable-footer .page-count{padding:.7rem}.ngx-datatable.ngxa .datatable-footer .datatable-pager{margin:0 10px;vertical-align:top}.ngx-datatable.ngxa .datatable-footer .datatable-pager ul li{margin:10px 0}.ngx-datatable.ngxa .datatable-footer .datatable-pager ul li:not(.disabled).active a,.ngx-datatable.ngxa .datatable-footer .datatable-pager ul li:not(.disabled):hover a{background-color:#c1c1c1;font-weight:700}.ngx-datatable.ngxa .datatable-footer .datatable-pager a{height:22px;min-width:24px;line-height:22px;padding:0;border-radius:3px;margin:0 3px;text-align:center;text-decoration:none;vertical-align:bottom;color:#5a5a5a}.ngx-datatable.ngxa .datatable-footer .datatable-pager .datatable-icon-left,.ngx-datatable.ngxa .datatable-footer .datatable-pager .datatable-icon-prev,.ngx-datatable.ngxa .datatable-footer .datatable-pager .datatable-icon-right,.ngx-datatable.ngxa .datatable-footer .datatable-pager .datatable-icon-skip{line-height:27px;padding:0 .2rem}.ngx-datatable.ngxa .datatable-summary-row .datatable-body-row .datatable-body-cell{font-weight:700}"]
            }] }
];
/** @nocollapse */
NgxaDatatableBaseComponent.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] },
    { type: Injector }
];
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
class NgxaButtonSubmitComponent {
    constructor() {
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
    click(event) {
        this.onSubmit.emit(event);
    }
}
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
const components$c = [
    NgxaButtonSubmitComponent,
];
class NgxaButtonModule {
}
NgxaButtonModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    NbButtonModule,
                    TranslateModule,
                    NgxaBaseModule,
                ],
                declarations: [
                    ...components$c,
                ],
                exports: [
                    ...components$c,
                    NbButtonModule,
                ],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const components$d = [
    NgxaDatatableComponent,
    NgxaDatatableBaseComponent,
    NgxaDatatableHeaderComponent,
    NgxaDatatableCollapseComponent,
];
class NgxaTableModule {
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
                declarations: [
                    ...components$d,
                ],
                exports: [
                    ...components$d,
                ],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxaDatePickerComponent extends NgxaValueAccessor {
    /**
     * @param {?} ngControl
     * @param {?} dateService
     * @param {?} locale
     */
    constructor(ngControl, dateService, locale) {
        super(ngControl, locale);
        this.dateService = dateService;
        this.locale = locale;
        this.colLabel = 3;
        this.colInput = 9;
        this.size = NbCalendarSize.MEDIUM;
        this.pattern = DatePattern.SLASH;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this._value = new Date(value);
        this.onChange(this.value);
        /** @type {?} */
        const control = this.ngControl.control;
        if (control) {
            control.updateValueAndValidity();
            control.markAsTouched();
            control.markAsDirty();
        }
    }
}
NgxaDatePickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'xa-datepicker',
                template: "<xa-container-outlet\n  [name]=\"name\" [label]=\"label\"\n  [colLabel]=\"colLabel\" [colContent]=\"colInput\"\n  [required]=\"required\" [hasErrors]=\"hasErrors\"\n  [errorMessages]=\"errorMessages\" [paramError]=\"paramError\"\n  [skeleton]=\"skeleton\">\n  <div class=\"col-sm-{{colInput}}\" *ngIf=\"!skeleton; else contentskeleton\">\n    <input\n      id=\"{{name}}\"\n      [pattern]=\"pattern\"\n      [placeholder]=\"placeholder ? (placeholder | translate) : ''\"\n      [required]=\"required\"\n      [disabled]=\"disabled || skeleton\"\n      [ngClass]=\"{\n        'skeleton': skeleton,\n        'status-danger': hasErrors,\n        'status-success': hasSuccess\n      }\"\n      (input)=\"onChange($event.target.value)\"\n      (change)=\"onChange($event.target.value)\"\n      (blur)=\"onTouched($event.target.value)\"\n      [(ngModel)]=\"value\"\n      [nbDatepicker]=\"xadatepicker\"\n      #input nbInput fullWidth>\n      <nb-datepicker\n        [format]=\"format\"\n        [size]=\"size\"\n        [min]=\"min\"\n        [max]=\"max\"\n        #xadatepicker>\n      </nb-datepicker>\n  </div>\n  <ng-template #contentskeleton>\n    <div class=\"col-sm-{{colInput}}\">\n      <div\n        [ngClass]=\"{\n          'input-skeleton': true,\n          'skeleton': skeleton\n        }\">\n      </div>\n    </div>\n  </ng-template>\n</xa-container-outlet>",
                styles: [""]
            }] }
];
/** @nocollapse */
NgxaDatePickerComponent.ctorParameters = () => [
    { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
    { type: NbDateService },
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
];
NgxaDatePickerComponent.propDecorators = {
    placeholder: [{ type: Input }],
    colLabel: [{ type: Input }],
    colInput: [{ type: Input }],
    min: [{ type: Input }],
    max: [{ type: Input }],
    size: [{ type: Input }]
};
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
const components$e = [
    NgxaDatePickerComponent,
];
class NgxaDatePickerModule {
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
                declarations: [
                    ...components$e,
                ],
                exports: [
                    ...components$e,
                ],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ImageUploadComponent extends NgxaValueAccessor {
    /**
     * @param {?} ngControl
     * @param {?} locale
     * @param {?} dom
     */
    constructor(ngControl, locale, dom) {
        super(ngControl, locale);
        this.locale = locale;
        this.dom = dom;
        this.onUpload = new EventEmitter();
        this.onPreview = new EventEmitter();
        this.height = 225;
        this.width = 225;
        this.radius = 0;
        this.buttonUpload = true;
        this.skeleton = false;
        this.opacity = '0.5';
        this.imageDefault = `${document.getElementsByTagName('base')[0].href}/assets/images/avatars/default.png`;
    }
    /**
     * @param {?} finish
     * @return {?}
     */
    set uploadFn(finish) {
        if (finish) {
            this.ngControl.control.markAsPristine();
            this.ngControl.control.markAsUntouched();
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        if (value instanceof File) {
            this.opacity = '0.8';
            this.image = URL.createObjectURL(value);
            this._value = value;
        }
        this.onChange(this.value);
        /** @type {?} */
        const control = this.ngControl.control;
        if (control) {
            control.updateValueAndValidity();
            control.markAsTouched();
            control.markAsDirty();
        }
    }
    /**
     * @param {?} files
     * @return {?}
     */
    upload(files) {
        this.opacity = '0.8';
        for (let index = 0; index < files.length; index++) {
            this.value = files[index];
        }
        this.image = URL.createObjectURL(this.value);
        this.onPreview.emit(this.value);
    }
    /**
     * @return {?}
     */
    doUpload() {
        this.onUpload.emit(this.value);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() { }
    /**
     * @return {?}
     */
    onInit() {
        if (!this.image) {
            this.image = this.imageDefault;
        }
    }
}
ImageUploadComponent.decorators = [
    { type: Component, args: [{
                selector: 'xa-image-upload',
                template: "<div class=\"body-upload\">\n  <div *ngIf=\"!skeleton; else contentskeleton\"\n    class=\"upload-container\"\n    (click)=\"img.click()\"\n    xaDragDrop\n    [opacity]=\"opacity\"\n    (onFileDropped)=\"upload($event)\"\n    [ngStyle]=\"{ \n      'background-image': 'url(' + (image? image: imageDefault) + ')',\n      'height':  height + 'px',\n      'width':  width + 'px',\n      'border-radius':  radius + '%'\n    }\">\n    <input\n      hidden\n      type=\"file\"\n      accept=\"image/png, image/jpeg, image/jpg\"\n      (change)=\"upload($event.target.files)\"\n      #img>\n  </div>\n  <ng-template #contentskeleton>\n    <div\n      class=\"upload-container\"\n      [ngStyle]=\"{ \n        'background-image': 'url(' + image + ')',\n        'height':  height + 'px',\n        'width':  width + 'px',\n        'border-radius':  radius + '%'\n      }\">\n    </div>\n  </ng-template>\n  <button *ngIf=\"buttonUpload\"\n    class=\"upload-bg\"\n    [size]=\"'small'\"\n    [shape]=\"'round'\"\n    [status]=\"'primary'\"\n    [disabled]=\"ngControl.pristine || disabled\"\n    (click)=\"doUpload()\"\n    nbButton\n    [ngStyle]=\"{ \n      'top': 'calc('+height+'px + 0.075rem)'\n    }\">\n    <nb-icon class=\"upload-icon\" icon=\"cloud-upload-outline\" pack=\"eva\"></nb-icon>\n    {{ 'Upload' | translate}}\n  </button>\n</div>",
                encapsulation: ViewEncapsulation.None,
                styles: [".upload-container{background-repeat:no-repeat;background-color:#f7f9fc;background-size:cover;margin:20px auto;border:2px dashed #d9dde5}.upload-container:hover{cursor:pointer}.body-upload{padding:15px}.upload-bg{position:absolute;left:50%;transform:translate(-50%);z-index:2}.nb-theme-default [nbButton].appearance-filled.status-primary[disabled]{background-color:#edf1f7;border-color:transparent;color:rgba(143,155,179,.48)}.upload-icon{font-size:5rem}"]
            }] }
];
/** @nocollapse */
ImageUploadComponent.ctorParameters = () => [
    { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] },
    { type: DomSanitizer }
];
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
const components$f = [
    ImageUploadComponent,
];
class NgxaImageModule {
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
                declarations: [
                    ...components$f,
                ],
                exports: [
                    ...components$f,
                ],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxaTreeNodeComponent {
    constructor() {
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
    ngOnChanges() {
        this.data = {
            $implicit: this.node,
            label: this.label,
            children: this.children,
            model: this.model,
        };
    }
    /**
     * @return {?}
     */
    onExpandClick() {
        if (this.disabled || !this.expandable)
            return;
        this.expanded = !this.expanded;
        if (this.expanded) {
            this.expand.emit(this.data);
        }
        else {
            this.collapse.emit(this.data);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onClick(event) {
        event.stopPropagation();
        if (!this.selectable || this.disabled)
            return;
        this.selectNode.emit(this.data);
    }
}
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
class NgxaTreeComponent {
    /**
     * @param {?} _cdr
     */
    constructor(_cdr) {
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
    /**
     * @return {?}
     */
    get hasOneLeaf() {
        return (this.nodes && this.nodes.length === 1) || this.nodeElms.length === 1;
    }
    /**
     * @return {?}
     */
    get template() {
        return this._templateInput || this._templateQuery;
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.nodeElms.changes.pipe(takeUntil(this._destroy$)).subscribe((/**
         * @return {?}
         */
        () => this._cdr.markForCheck()));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._destroy$.next();
        this._destroy$.complete();
    }
}
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
NgxaTreeComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
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
const components$g = [
    NgxaTreeComponent,
    NgxaTreeNodeComponent,
];
class NgxaTreeModule {
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
                declarations: [
                    ...components$g,
                ],
                exports: [
                    ...components$g,
                ],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxaLabelTextComponent {
    constructor() {
        this.colLabel = 3;
        this.colContent = 9;
        this.skeleton = false;
        this.content = '';
        this.label = '';
        this.nolabel = false;
        this.required = false;
    }
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
NgxaLabelTextComponent.ctorParameters = () => [];
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
const components$h = [
    NgxaLabelTextComponent,
];
class NgxaLabelModule {
}
NgxaLabelModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    NbIconModule,
                    TranslateModule,
                    NgxaBaseModule,
                ],
                declarations: [
                    ...components$h,
                ],
                exports: [
                    ...components$h,
                ],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const modules = [
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
class NgxaCommonModule {
}
NgxaCommonModule.decorators = [
    { type: NgModule, args: [{
                declarations: [],
                imports: [
                    ...modules,
                ],
                exports: [
                    ...modules,
                ],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template T
 */
class BaseComponent {
    /**
     * @param {?} injector
     */
    constructor(injector) {
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
    exec(serviceName, apiName, body, headers, params, pathVariable, responseType) {
        return this.http.HTTP_AUTH(this.api[serviceName][apiName], body, headers, params, pathVariable, responseType).pipe(tap());
    }
}
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
class BaseFormComponent extends BaseComponent {
    /**
     * @param {?} injector
     * @param {?=} controlsConfig
     */
    constructor(injector, controlsConfig) {
        super(injector);
        this.injector = injector;
        this.submitSubject$ = new Subject();
        this.destroy$ = new Subject();
        this.disabled = false;
        this.loadingForm = false;
        this.formBuilder = injector.get(FormBuilder);
        if (controlsConfig)
            this.formGroup = this.formBuilder.group(controlsConfig);
        this.toastr = injector.get(NgxaToastrService);
    }
    /**
     * @param {?=} body
     * @param {?=} serviceName
     * @param {?=} apiName
     * @param {?=} disableToastr
     * @return {?}
     */
    onSubmit(body, serviceName, apiName, disableToastr) {
        this.disabled = true;
        this.exec(serviceName, apiName, body ? body : this.formGroup.value)
            .subscribe((/**
         * @param {?} success
         * @return {?}
         */
        (success) => {
            this.submitSubject$.next(success);
            this.disabled = true;
            if (!disableToastr)
                this.toastr.showI18n(success.respStatusMessage[success.respStatusCode], true);
        }), (/**
         * @param {?} error
         * @return {?}
         */
        (error) => {
            this.submitSubject$.next(error);
            this.disabled = false;
            if (!disableToastr)
                this.toastr.showI18n(error.respStatusMessage[error.respStatusCode], true, null, 'danger');
        }));
        return this.submitSubject$.asObservable();
    }
    /**
     * @return {?}
     */
    onReset() { }
}
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
class BaseFilterComponent extends BaseFormComponent {
    /**
     * @param {?} injector
     * @param {?=} filtersConfig
     * @param {?=} controlsConfig
     */
    constructor(injector, filtersConfig, controlsConfig) {
        super(injector, controlsConfig);
        this.injector = injector;
        this.rows = [];
        if (filtersConfig)
            this.formGroupFilter = this.formBuilder.group(filtersConfig);
    }
    /**
     * @param {?} keyword
     * @return {?}
     */
    doFilterAdvanced(keyword) {
        this.keyword = keyword;
    }
}
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
class SelectResponseModel {
    constructor() {
        this.disabled = false;
    }
}
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
class SelectParamModel {
}
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
class Page {
}
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
class DatatableParamModel {
}
if (false) {
    /** @type {?} */
    DatatableParamModel.prototype.key;
    /** @type {?} */
    DatatableParamModel.prototype.value;
}
class DatatableFilter {
    constructor() {
        this.type = 'input';
    }
}
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
class LeafletModel {
    constructor() {
        this.title = '';
        this.alt = '';
    }
}
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
