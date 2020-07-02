/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Optional, Self, Inject, LOCALE_ID } from '@angular/core';
import { NgControl } from '@angular/forms';
import { NgxaValueAccessor } from '../base/ngxa-value-accessor.component';
import { NbCalendarSize, NbDateService } from '@nebular/theme';
import { DatePattern } from '@xaphira/utils';
export class NgxaDatePickerComponent extends NgxaValueAccessor {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4YS1kYXRlcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B4YXBoaXJhL25neGEtY29tbW9uLyIsInNvdXJjZXMiOlsibGliL2RhdGVwaWNrZXIvbmd4YS1kYXRlcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXFCLFFBQVEsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDMUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxhQUFhLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFPN0MsTUFBTSxPQUFPLHVCQUF3QixTQUFRLGlCQUF1Qjs7Ozs7O0lBUWhFLFlBQWdDLFNBQW9CLEVBQzNDLFdBQWdDLEVBQ2IsTUFBYztRQUN4QyxLQUFLLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRmxCLGdCQUFXLEdBQVgsV0FBVyxDQUFxQjtRQUNiLFdBQU0sR0FBTixNQUFNLENBQVE7UUFSakMsYUFBUSxHQUFXLENBQUMsQ0FBQztRQUNyQixhQUFRLEdBQVcsQ0FBQyxDQUFDO1FBR3JCLFNBQUksR0FBbUIsY0FBYyxDQUFDLE1BQU0sQ0FBQztRQU1wRCxJQUFJLENBQUMsT0FBTyxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUM7SUFDbkMsQ0FBQzs7Ozs7SUFFTSxVQUFVLENBQUMsS0FBVTtRQUN4QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDOztjQUNwQixPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPO1FBQ3RDLElBQUksT0FBTyxFQUFFO1lBQ1QsT0FBTyxDQUFDLHNCQUFzQixFQUFFLENBQUM7WUFDakMsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3hCLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUN6QjtJQUNMLENBQUM7OztZQTdCSixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBRXpCLHUyQ0FBK0M7O2FBQ2hEOzs7O1lBVFEsU0FBUyx1QkFrQkQsUUFBUSxZQUFJLElBQUk7WUFoQlIsYUFBYTt5Q0FrQi9CLE1BQU0sU0FBQyxTQUFTOzs7MEJBVGxCLEtBQUs7dUJBQ0wsS0FBSzt1QkFDTCxLQUFLO2tCQUNMLEtBQUs7a0JBQ0wsS0FBSzttQkFDTCxLQUFLOzs7O0lBTE4sOENBQTZCOztJQUM3QiwyQ0FBOEI7O0lBQzlCLDJDQUE4Qjs7SUFDOUIsc0NBQW1COztJQUNuQixzQ0FBbUI7O0lBQ25CLHVDQUFzRDs7SUFHcEQsOENBQXVDOztJQUN2Qyx5Q0FBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiwgT3B0aW9uYWwsIFNlbGYsIEluamVjdCwgTE9DQUxFX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ0NvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOZ3hhVmFsdWVBY2Nlc3NvciB9IGZyb20gJy4uL2Jhc2Uvbmd4YS12YWx1ZS1hY2Nlc3Nvci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmJDYWxlbmRhclNpemUsIE5iRGF0ZVNlcnZpY2UgfSBmcm9tICdAbmVidWxhci90aGVtZSc7XG5pbXBvcnQgeyBEYXRlUGF0dGVybiB9IGZyb20gJ0B4YXBoaXJhL3V0aWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAneGEtZGF0ZXBpY2tlcicsXG4gIHN0eWxlVXJsczogWycuL25neGEtZGF0ZXBpY2tlci5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vbmd4YS1kYXRlcGlja2VyLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgTmd4YURhdGVQaWNrZXJDb21wb25lbnQgZXh0ZW5kcyBOZ3hhVmFsdWVBY2Nlc3NvcjxEYXRlPiB7XG4gICAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgICBASW5wdXQoKSBjb2xMYWJlbDogbnVtYmVyID0gMztcbiAgICBASW5wdXQoKSBjb2xJbnB1dDogbnVtYmVyID0gOTtcbiAgICBASW5wdXQoKSBtaW46IERhdGU7XG4gICAgQElucHV0KCkgbWF4OiBEYXRlO1xuICAgIEBJbnB1dCgpIHNpemU6IE5iQ2FsZW5kYXJTaXplID0gTmJDYWxlbmRhclNpemUuTUVESVVNO1xuXG4gICAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQFNlbGYoKSBuZ0NvbnRyb2w6IE5nQ29udHJvbCxcbiAgICAgIHB1YmxpYyBkYXRlU2VydmljZTogTmJEYXRlU2VydmljZTxEYXRlPixcbiAgICAgIEBJbmplY3QoTE9DQUxFX0lEKSBwdWJsaWMgbG9jYWxlOiBzdHJpbmcpIHtcbiAgICAgIHN1cGVyKG5nQ29udHJvbCwgbG9jYWxlKTtcbiAgICAgIHRoaXMucGF0dGVybiA9IERhdGVQYXR0ZXJuLlNMQVNIO1xuICAgIH1cblxuICAgIHB1YmxpYyB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fdmFsdWUgPSBuZXcgRGF0ZSh2YWx1ZSk7XG4gICAgICAgIHRoaXMub25DaGFuZ2UodGhpcy52YWx1ZSk7XG4gICAgICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLm5nQ29udHJvbC5jb250cm9sO1xuICAgICAgICBpZiAoY29udHJvbCkge1xuICAgICAgICAgICAgY29udHJvbC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gICAgICAgICAgICBjb250cm9sLm1hcmtBc1RvdWNoZWQoKTtcbiAgICAgICAgICAgIGNvbnRyb2wubWFya0FzRGlydHkoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==