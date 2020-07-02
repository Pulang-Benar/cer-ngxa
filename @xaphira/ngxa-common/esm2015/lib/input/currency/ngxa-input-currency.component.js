/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewEncapsulation, Optional, Self, Inject, LOCALE_ID } from '@angular/core';
import { NgControl } from '@angular/forms';
import { NgxaValueAccessor } from '../../base/ngxa-value-accessor.component';
export class NgxaInputCurrencyComponent extends NgxaValueAccessor {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4YS1pbnB1dC1jdXJyZW5jeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AeGFwaGlyYS9uZ3hhLWNvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi9pbnB1dC9jdXJyZW5jeS9uZ3hhLWlucHV0LWN1cnJlbmN5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZHLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQVE3RSxNQUFNLE9BQU8sMEJBQTJCLFNBQVEsaUJBQXlCOzs7OztJQVl2RSxZQUFnQyxTQUFvQixFQUN4QixNQUFjO1FBQ3hDLEtBQUssQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFEQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBWGpDLGFBQVEsR0FBVyxDQUFDLENBQUM7UUFDckIsYUFBUSxHQUFXLENBQUMsQ0FBQztRQUNyQixjQUFTLEdBQVcsQ0FBQyxDQUFDO1FBQ3RCLGNBQVMsR0FBVyxHQUFHLENBQUM7UUFDaEIsV0FBTSxHQUFXLElBQUksQ0FBQztRQUNyQixxQkFBZ0IsR0FBVyxHQUFHLENBQUM7UUFDOUIsdUJBQWtCLEdBQVcsR0FBRyxDQUFDO1FBQ25DLFdBQU0sR0FBVyxJQUFJLENBQUM7UUFDckIsWUFBTyxHQUFXLENBQUMsQ0FBQztJQUt0QyxDQUFDOzs7OztJQUVNLFVBQVUsQ0FBQyxLQUFVO1FBQzFCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDcEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7O2NBQ3BCLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU87UUFDdEMsSUFBSSxPQUFPLEVBQUU7WUFDVCxPQUFPLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztZQUNqQyxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDeEIsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3pCO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsS0FBSztjQUNQLEVBQUMsR0FBRyxFQUFFLElBQUksRUFBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDOztjQUNsQyxDQUFDLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxJQUFJLENBQUMsa0JBQWtCLENBQUM7UUFDdkUsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDNUUsQ0FBQzs7Ozs7SUFFRCxRQUFRLENBQUMsS0FBYTtjQUNkLENBQUUsR0FBRyxHQUFHLEVBQUUsRUFBRSxJQUFJLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQzs7WUFDckUsUUFBUSxHQUFHLEVBQUU7UUFDakIsSUFBSSxJQUFJLEVBQUU7WUFDUixJQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUMxQixRQUFRLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUM1RjtTQUNGO1FBQ0QsT0FBTyxFQUFDLEdBQUcsRUFBRyxHQUFHLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBQyxDQUFDO0lBQ3JDLENBQUM7Ozs7Ozs7SUFFTyxHQUFHLENBQUMsR0FBRyxFQUFFLElBQUk7UUFDbkIsT0FBTyxHQUFHLENBQUMsTUFBTSxHQUFHLElBQUk7WUFBRSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUMxQyxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7OztZQXRERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFFN0IsMjVDQUFtRDtnQkFDbkQsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2FBQ3RDOzs7O1lBUlEsU0FBUyx1QkFxQkgsUUFBUSxZQUFJLElBQUk7eUNBQzFCLE1BQU0sU0FBQyxTQUFTOzs7MEJBWmxCLEtBQUs7dUJBQ0wsS0FBSzt1QkFDTCxLQUFLO3dCQUNMLEtBQUs7d0JBQ0wsS0FBSztxQkFDTCxLQUFLLFNBQUMsUUFBUTsrQkFDZCxLQUFLLFNBQUMsU0FBUztpQ0FDZixLQUFLLFNBQUMsVUFBVTtxQkFDaEIsS0FBSyxTQUFDLFFBQVE7c0JBQ2QsS0FBSyxTQUFDLFNBQVM7Ozs7SUFUaEIsaURBQTZCOztJQUM3Qiw4Q0FBOEI7O0lBQzlCLDhDQUE4Qjs7SUFDOUIsK0NBQStCOztJQUMvQiwrQ0FBaUM7O0lBQ2pDLDRDQUF1Qzs7SUFDdkMsc0RBQWlEOztJQUNqRCx3REFBb0Q7O0lBQ3BELDRDQUF1Qzs7SUFDdkMsNkNBQXNDOztJQUdwQyw0Q0FBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiwgT3B0aW9uYWwsIFNlbGYsIEluamVjdCwgTE9DQUxFX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ0NvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOZ3hhVmFsdWVBY2Nlc3NvciB9IGZyb20gJy4uLy4uL2Jhc2Uvbmd4YS12YWx1ZS1hY2Nlc3Nvci5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd4YS1pbnB1dC1jdXJyZW5jeScsXG4gIHN0eWxlVXJsczogWycuL25neGEtaW5wdXQtY3VycmVuY3kuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL25neGEtaW5wdXQtY3VycmVuY3kuY29tcG9uZW50Lmh0bWwnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBOZ3hhSW5wdXRDdXJyZW5jeUNvbXBvbmVudCBleHRlbmRzIE5neGFWYWx1ZUFjY2Vzc29yPHN0cmluZz4ge1xuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICBASW5wdXQoKSBjb2xMYWJlbDogbnVtYmVyID0gMztcbiAgQElucHV0KCkgY29sSW5wdXQ6IG51bWJlciA9IDk7XG4gIEBJbnB1dCgpIG1pbkxlbmd0aDogbnVtYmVyID0gMDtcbiAgQElucHV0KCkgbWF4TGVuZ3RoOiBudW1iZXIgPSAxMDA7XG4gIEBJbnB1dCgncHJlZml4JykgcHJlZml4OiBzdHJpbmcgPSAnUnAnO1xuICBASW5wdXQoJ2RlY2ltYWwnKSBkZWNpbWFsU2VwYXJhdG9yOiBzdHJpbmcgPSAnLic7XG4gIEBJbnB1dCgndGhvdXNhbmQnKSB0aG91c2FuZHNTZXBhcmF0b3I6IHN0cmluZyA9ICcsJztcbiAgQElucHV0KCdzdWZmaXgnKSBzdWZmaXg6IHN0cmluZyA9ICcsLSc7XG4gIEBJbnB1dCgncGFkZGluZycpIHBhZGRpbmc6IG51bWJlciA9IDU7XG5cbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQFNlbGYoKSBuZ0NvbnRyb2w6IE5nQ29udHJvbCxcbiAgICBASW5qZWN0KExPQ0FMRV9JRCkgcHVibGljIGxvY2FsZTogc3RyaW5nKSB7XG4gICAgc3VwZXIobmdDb250cm9sLCBsb2NhbGUpO1xuICB9XG5cbiAgcHVibGljIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWUgPyB0aGlzLnRyYW5zZm9ybSh2YWx1ZSkgOiB2YWx1ZTtcbiAgICB0aGlzLm9uQ2hhbmdlKHRoaXMudmFsdWUpO1xuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLm5nQ29udHJvbC5jb250cm9sO1xuICAgIGlmIChjb250cm9sKSB7XG4gICAgICAgIGNvbnRyb2wudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAgICAgICBjb250cm9sLm1hcmtBc1RvdWNoZWQoKTtcbiAgICAgICAgY29udHJvbC5tYXJrQXNEaXJ0eSgpO1xuICAgIH1cbiAgfVxuXG4gIHRyYW5zZm9ybSh2YWx1ZSk6IHN0cmluZyB7XG4gICAgY29uc3Qge3ZhbCwgZnJhY30gPSB0aGlzLnRvTnVtYmVyKHZhbHVlKTtcbiAgICBjb25zdCB2ID0gdmFsLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csIHRoaXMudGhvdXNhbmRzU2VwYXJhdG9yKTtcbiAgICByZXR1cm4gdGhpcy5wcmVmaXguY29uY2F0KCcgJykuY29uY2F0KHYpLmNvbmNhdChmcmFjKS5jb25jYXQodGhpcy5zdWZmaXgpO1xuICB9XG5cbiAgdG9OdW1iZXIodmFsdWU6IHN0cmluZyk6IHt2YWw6IHN0cmluZywgZnJhYzogc3RyaW5nfSB7XG4gICAgY29uc3QgWyB2YWwgPSAnJywgZnJhYyA9ICcnXSA9ICh2YWx1ZSB8fCAnJykuc3BsaXQodGhpcy5kZWNpbWFsU2VwYXJhdG9yKTtcbiAgICBsZXQgZnJhY3Rpb24gPSAnJztcbiAgICBpZiAoZnJhYykge1xuICAgICAgaWYgKHBhcnNlSW50KGZyYWMsIDEwKSA+IDApIHtcbiAgICAgICAgZnJhY3Rpb24gPSB0aGlzLmRlY2ltYWxTZXBhcmF0b3IgKyB0aGlzLnBhZChmcmFjLCB0aGlzLnBhZGRpbmcpLnN1YnN0cmluZygwLCB0aGlzLnBhZGRpbmcpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge3ZhbCA6IHZhbCwgZnJhYzogZnJhY3Rpb259O1xuICB9XG5cbiAgcHJpdmF0ZSBwYWQodmFsLCBzaXplKTogc3RyaW5nIHtcbiAgICB3aGlsZSAodmFsLmxlbmd0aCA8IHNpemUpIHZhbCA9IHZhbCArICcwJztcbiAgICByZXR1cm4gdmFsO1xuICB9XG59XG4iXX0=