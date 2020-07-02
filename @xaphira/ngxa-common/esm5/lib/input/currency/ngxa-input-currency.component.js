/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, ViewEncapsulation, Optional, Self, Inject, LOCALE_ID } from '@angular/core';
import { NgControl } from '@angular/forms';
import { NgxaValueAccessor } from '../../base/ngxa-value-accessor.component';
var NgxaInputCurrencyComponent = /** @class */ (function (_super) {
    tslib_1.__extends(NgxaInputCurrencyComponent, _super);
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
        var _a = tslib_1.__read((value || '').split(this.decimalSeparator), 2), _b = _a[0], val = _b === void 0 ? '' : _b, _c = _a[1], frac = _c === void 0 ? '' : _c;
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
export { NgxaInputCurrencyComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4YS1pbnB1dC1jdXJyZW5jeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AeGFwaGlyYS9uZ3hhLWNvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi9pbnB1dC9jdXJyZW5jeS9uZ3hhLWlucHV0LWN1cnJlbmN5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFFN0U7SUFNZ0Qsc0RBQXlCO0lBWXZFLG9DQUFnQyxTQUFvQixFQUN4QixNQUFjO1FBRDFDLFlBRUUsa0JBQU0sU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUN6QjtRQUYyQixZQUFNLEdBQU4sTUFBTSxDQUFRO1FBWGpDLGNBQVEsR0FBVyxDQUFDLENBQUM7UUFDckIsY0FBUSxHQUFXLENBQUMsQ0FBQztRQUNyQixlQUFTLEdBQVcsQ0FBQyxDQUFDO1FBQ3RCLGVBQVMsR0FBVyxHQUFHLENBQUM7UUFDaEIsWUFBTSxHQUFXLElBQUksQ0FBQztRQUNyQixzQkFBZ0IsR0FBVyxHQUFHLENBQUM7UUFDOUIsd0JBQWtCLEdBQVcsR0FBRyxDQUFDO1FBQ25DLFlBQU0sR0FBVyxJQUFJLENBQUM7UUFDckIsYUFBTyxHQUFXLENBQUMsQ0FBQzs7SUFLdEMsQ0FBQzs7Ozs7SUFFTSwrQ0FBVTs7OztJQUFqQixVQUFrQixLQUFVO1FBQzFCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDcEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7O1lBQ3BCLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU87UUFDdEMsSUFBSSxPQUFPLEVBQUU7WUFDVCxPQUFPLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztZQUNqQyxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDeEIsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3pCO0lBQ0gsQ0FBQzs7Ozs7SUFFRCw4Q0FBUzs7OztJQUFULFVBQVUsS0FBSztRQUNQLElBQUEseUJBQWtDLEVBQWpDLFlBQUcsRUFBRSxjQUE0Qjs7WUFDbEMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsdUJBQXVCLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDO1FBQ3ZFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzVFLENBQUM7Ozs7O0lBRUQsNkNBQVE7Ozs7SUFBUixVQUFTLEtBQWE7UUFDZCxJQUFBLGtFQUFtRSxFQUFqRSxVQUFRLEVBQVIsNkJBQVEsRUFBRSxVQUFTLEVBQVQsOEJBQXVEOztZQUNyRSxRQUFRLEdBQUcsRUFBRTtRQUNqQixJQUFJLElBQUksRUFBRTtZQUNSLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQzFCLFFBQVEsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQzVGO1NBQ0Y7UUFDRCxPQUFPLEVBQUMsR0FBRyxFQUFHLEdBQUcsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFDLENBQUM7SUFDckMsQ0FBQzs7Ozs7OztJQUVPLHdDQUFHOzs7Ozs7SUFBWCxVQUFZLEdBQUcsRUFBRSxJQUFJO1FBQ25CLE9BQU8sR0FBRyxDQUFDLE1BQU0sR0FBRyxJQUFJO1lBQUUsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDMUMsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDOztnQkF0REYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxtQkFBbUI7b0JBRTdCLDI1Q0FBbUQ7b0JBQ25ELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOztpQkFDdEM7Ozs7Z0JBUlEsU0FBUyx1QkFxQkgsUUFBUSxZQUFJLElBQUk7NkNBQzFCLE1BQU0sU0FBQyxTQUFTOzs7OEJBWmxCLEtBQUs7MkJBQ0wsS0FBSzsyQkFDTCxLQUFLOzRCQUNMLEtBQUs7NEJBQ0wsS0FBSzt5QkFDTCxLQUFLLFNBQUMsUUFBUTttQ0FDZCxLQUFLLFNBQUMsU0FBUztxQ0FDZixLQUFLLFNBQUMsVUFBVTt5QkFDaEIsS0FBSyxTQUFDLFFBQVE7MEJBQ2QsS0FBSyxTQUFDLFNBQVM7O0lBdUNsQixpQ0FBQztDQUFBLEFBdkRELENBTWdELGlCQUFpQixHQWlEaEU7U0FqRFksMEJBQTBCOzs7SUFDckMsaURBQTZCOztJQUM3Qiw4Q0FBOEI7O0lBQzlCLDhDQUE4Qjs7SUFDOUIsK0NBQStCOztJQUMvQiwrQ0FBaUM7O0lBQ2pDLDRDQUF1Qzs7SUFDdkMsc0RBQWlEOztJQUNqRCx3REFBb0Q7O0lBQ3BELDRDQUF1Qzs7SUFDdkMsNkNBQXNDOztJQUdwQyw0Q0FBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiwgT3B0aW9uYWwsIFNlbGYsIEluamVjdCwgTE9DQUxFX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ0NvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOZ3hhVmFsdWVBY2Nlc3NvciB9IGZyb20gJy4uLy4uL2Jhc2Uvbmd4YS12YWx1ZS1hY2Nlc3Nvci5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd4YS1pbnB1dC1jdXJyZW5jeScsXG4gIHN0eWxlVXJsczogWycuL25neGEtaW5wdXQtY3VycmVuY3kuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL25neGEtaW5wdXQtY3VycmVuY3kuY29tcG9uZW50Lmh0bWwnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBOZ3hhSW5wdXRDdXJyZW5jeUNvbXBvbmVudCBleHRlbmRzIE5neGFWYWx1ZUFjY2Vzc29yPHN0cmluZz4ge1xuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICBASW5wdXQoKSBjb2xMYWJlbDogbnVtYmVyID0gMztcbiAgQElucHV0KCkgY29sSW5wdXQ6IG51bWJlciA9IDk7XG4gIEBJbnB1dCgpIG1pbkxlbmd0aDogbnVtYmVyID0gMDtcbiAgQElucHV0KCkgbWF4TGVuZ3RoOiBudW1iZXIgPSAxMDA7XG4gIEBJbnB1dCgncHJlZml4JykgcHJlZml4OiBzdHJpbmcgPSAnUnAnO1xuICBASW5wdXQoJ2RlY2ltYWwnKSBkZWNpbWFsU2VwYXJhdG9yOiBzdHJpbmcgPSAnLic7XG4gIEBJbnB1dCgndGhvdXNhbmQnKSB0aG91c2FuZHNTZXBhcmF0b3I6IHN0cmluZyA9ICcsJztcbiAgQElucHV0KCdzdWZmaXgnKSBzdWZmaXg6IHN0cmluZyA9ICcsLSc7XG4gIEBJbnB1dCgncGFkZGluZycpIHBhZGRpbmc6IG51bWJlciA9IDU7XG5cbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQFNlbGYoKSBuZ0NvbnRyb2w6IE5nQ29udHJvbCxcbiAgICBASW5qZWN0KExPQ0FMRV9JRCkgcHVibGljIGxvY2FsZTogc3RyaW5nKSB7XG4gICAgc3VwZXIobmdDb250cm9sLCBsb2NhbGUpO1xuICB9XG5cbiAgcHVibGljIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWUgPyB0aGlzLnRyYW5zZm9ybSh2YWx1ZSkgOiB2YWx1ZTtcbiAgICB0aGlzLm9uQ2hhbmdlKHRoaXMudmFsdWUpO1xuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLm5nQ29udHJvbC5jb250cm9sO1xuICAgIGlmIChjb250cm9sKSB7XG4gICAgICAgIGNvbnRyb2wudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAgICAgICBjb250cm9sLm1hcmtBc1RvdWNoZWQoKTtcbiAgICAgICAgY29udHJvbC5tYXJrQXNEaXJ0eSgpO1xuICAgIH1cbiAgfVxuXG4gIHRyYW5zZm9ybSh2YWx1ZSk6IHN0cmluZyB7XG4gICAgY29uc3Qge3ZhbCwgZnJhY30gPSB0aGlzLnRvTnVtYmVyKHZhbHVlKTtcbiAgICBjb25zdCB2ID0gdmFsLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csIHRoaXMudGhvdXNhbmRzU2VwYXJhdG9yKTtcbiAgICByZXR1cm4gdGhpcy5wcmVmaXguY29uY2F0KCcgJykuY29uY2F0KHYpLmNvbmNhdChmcmFjKS5jb25jYXQodGhpcy5zdWZmaXgpO1xuICB9XG5cbiAgdG9OdW1iZXIodmFsdWU6IHN0cmluZyk6IHt2YWw6IHN0cmluZywgZnJhYzogc3RyaW5nfSB7XG4gICAgY29uc3QgWyB2YWwgPSAnJywgZnJhYyA9ICcnXSA9ICh2YWx1ZSB8fCAnJykuc3BsaXQodGhpcy5kZWNpbWFsU2VwYXJhdG9yKTtcbiAgICBsZXQgZnJhY3Rpb24gPSAnJztcbiAgICBpZiAoZnJhYykge1xuICAgICAgaWYgKHBhcnNlSW50KGZyYWMsIDEwKSA+IDApIHtcbiAgICAgICAgZnJhY3Rpb24gPSB0aGlzLmRlY2ltYWxTZXBhcmF0b3IgKyB0aGlzLnBhZChmcmFjLCB0aGlzLnBhZGRpbmcpLnN1YnN0cmluZygwLCB0aGlzLnBhZGRpbmcpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge3ZhbCA6IHZhbCwgZnJhYzogZnJhY3Rpb259O1xuICB9XG5cbiAgcHJpdmF0ZSBwYWQodmFsLCBzaXplKTogc3RyaW5nIHtcbiAgICB3aGlsZSAodmFsLmxlbmd0aCA8IHNpemUpIHZhbCA9IHZhbCArICcwJztcbiAgICByZXR1cm4gdmFsO1xuICB9XG59XG4iXX0=