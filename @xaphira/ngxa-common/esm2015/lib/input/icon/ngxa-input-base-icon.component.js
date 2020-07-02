/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewEncapsulation, Optional, Self, Inject, LOCALE_ID, Output, EventEmitter } from '@angular/core';
import { NgControl } from '@angular/forms';
import { NgxaValueAccessor } from '../../base/ngxa-value-accessor.component';
export class NgxaInputBaseIconComponent extends NgxaValueAccessor {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4YS1pbnB1dC1iYXNlLWljb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHhhcGhpcmEvbmd4YS1jb21tb24vIiwic291cmNlcyI6WyJsaWIvaW5wdXQvaWNvbi9uZ3hhLWlucHV0LWJhc2UtaWNvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdILE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQVE3RSxNQUFNLE9BQU8sMEJBQTJCLFNBQVEsaUJBQXlCOzs7OztJQVVyRSxZQUFnQyxTQUFvQixFQUN4QixNQUFjO1FBQ3hDLEtBQUssQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFEQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBVGpDLGNBQVMsR0FBVyxDQUFDLENBQUM7UUFDdEIsY0FBUyxHQUFXLEdBQUcsQ0FBQztRQUN4QixlQUFVLEdBQVksS0FBSyxDQUFDO1FBQzVCLFNBQUksR0FBVyxnQkFBZ0IsQ0FBQztRQUNoQyxTQUFJLEdBQW1DLE1BQU0sQ0FBQztRQUM3QyxjQUFTLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUM7UUFDN0QsVUFBSyxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO0lBSzdELENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsVUFBVTtZQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2RCxDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxLQUFVO1FBQ2hCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEIsQ0FBQzs7O1lBNUJKLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2dCQUU5QixrM0JBQW9EO2dCQUNwRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7YUFDdEM7Ozs7WUFSUSxTQUFTLHVCQW1CRCxRQUFRLFlBQUksSUFBSTt5Q0FDMUIsTUFBTSxTQUFDLFNBQVM7OzswQkFWbEIsS0FBSzt3QkFDTCxLQUFLO3dCQUNMLEtBQUs7eUJBQ0wsS0FBSzttQkFDTCxLQUFLO21CQUNMLEtBQUs7d0JBQ0wsTUFBTTtvQkFDTixNQUFNOzs7O0lBUFAsaURBQTZCOztJQUM3QiwrQ0FBK0I7O0lBQy9CLCtDQUFpQzs7SUFDakMsZ0RBQXFDOztJQUNyQywwQ0FBeUM7O0lBQ3pDLDBDQUF1RDs7SUFDdkQsK0NBQXVFOztJQUN2RSwyQ0FBNkQ7O0lBRzNELDRDQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBPcHRpb25hbCwgU2VsZiwgSW5qZWN0LCBMT0NBTEVfSUQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ0NvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOZ3hhVmFsdWVBY2Nlc3NvciB9IGZyb20gJy4uLy4uL2Jhc2Uvbmd4YS12YWx1ZS1hY2Nlc3Nvci5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd4YS1pbnB1dC1iYXNlLWljb24nLFxuICBzdHlsZVVybHM6IFsnLi9uZ3hhLWlucHV0LWJhc2UtaWNvbi5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vbmd4YS1pbnB1dC1iYXNlLWljb24uY29tcG9uZW50Lmh0bWwnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBOZ3hhSW5wdXRCYXNlSWNvbkNvbXBvbmVudCBleHRlbmRzIE5neGFWYWx1ZUFjY2Vzc29yPHN0cmluZz4ge1xuICAgIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gICAgQElucHV0KCkgbWluTGVuZ3RoOiBudW1iZXIgPSAwO1xuICAgIEBJbnB1dCgpIG1heExlbmd0aDogbnVtYmVyID0gMTAwO1xuICAgIEBJbnB1dCgpIGljb25jdXJzb3I6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBASW5wdXQoKSBpY29uOiBzdHJpbmcgPSAnc2VhcmNoLW91dGxpbmUnO1xuICAgIEBJbnB1dCgpIHR5cGU6ICd0ZXh0JyB8ICdwYXNzd29yZCcgfCAnbnVtYmVyJyA9ICd0ZXh0JztcbiAgICBAT3V0cHV0KCkgY2xpY2tJY29uOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICAgIEBPdXRwdXQoKSBmb2N1czogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICAgIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBTZWxmKCkgbmdDb250cm9sOiBOZ0NvbnRyb2wsXG4gICAgICBASW5qZWN0KExPQ0FMRV9JRCkgcHVibGljIGxvY2FsZTogc3RyaW5nKSB7XG4gICAgICBzdXBlcihuZ0NvbnRyb2wsIGxvY2FsZSk7XG4gICAgfVxuXG4gICAgb25DbGlja0ljb24oKTogdm9pZCB7XG4gICAgICBpZiAodGhpcy5pY29uY3Vyc29yKSB0aGlzLmNsaWNrSWNvbi5lbWl0KHRoaXMudmFsdWUpO1xuICAgIH1cblxuICAgIG9uRm9jdXModmFsdWU6IGFueSk6IHZvaWQge1xuICAgICAgdGhpcy5mb2N1cy5lbWl0KHZhbHVlKTtcbiAgICAgIHRoaXMub25Ub3VjaGVkKHZhbHVlKTtcbiAgICB9XG59XG4iXX0=