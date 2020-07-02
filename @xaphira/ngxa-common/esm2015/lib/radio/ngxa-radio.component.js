/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewEncapsulation, Optional, Self, Inject, LOCALE_ID } from '@angular/core';
import { NgControl } from '@angular/forms';
import { NgxaValueAccessor } from '../base/ngxa-value-accessor.component';
export class NgxaRadioComponent extends NgxaValueAccessor {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4YS1yYWRpby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AeGFwaGlyYS9uZ3hhLWNvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi9yYWRpby9uZ3hhLXJhZGlvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZHLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQVMxRSxNQUFNLE9BQU8sa0JBQW1CLFNBQVEsaUJBQXNCOzs7OztJQU0xRCxZQUFnQyxTQUFvQixFQUN4QixNQUFjO1FBQ3hDLEtBQUssQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFEQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBTGpDLGFBQVEsR0FBVyxDQUFDLENBQUM7UUFDckIsYUFBUSxHQUFXLENBQUMsQ0FBQztJQU05QixDQUFDOzs7O0lBRUQsTUFBTTtRQUNKLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxJQUFJO1lBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUNoRSxDQUFDOzs7WUFuQkosU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxVQUFVO2dCQUVwQiwrM0JBQTBDO2dCQUMxQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7YUFDdEM7Ozs7WUFUUSxTQUFTLHVCQWdCRCxRQUFRLFlBQUksSUFBSTt5Q0FDMUIsTUFBTSxTQUFDLFNBQVM7OzswQkFObEIsS0FBSzt1QkFDTCxLQUFLO3VCQUNMLEtBQUs7bUJBQ0wsS0FBSzs7OztJQUhOLHlDQUE2Qjs7SUFDN0Isc0NBQThCOztJQUM5QixzQ0FBOEI7O0lBQzlCLGtDQUE0Qjs7SUFHMUIsb0NBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24sIE9wdGlvbmFsLCBTZWxmLCBJbmplY3QsIExPQ0FMRV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTmd4YVZhbHVlQWNjZXNzb3IgfSBmcm9tICcuLi9iYXNlL25neGEtdmFsdWUtYWNjZXNzb3IuY29tcG9uZW50JztcbmltcG9ydCB7IFJhZGlvTW9kZWwgfSBmcm9tICcuL3JhZGlvLm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAneGEtcmFkaW8nLFxuICBzdHlsZVVybHM6IFsnLi9uZ3hhLXJhZGlvLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9uZ3hhLXJhZGlvLmNvbXBvbmVudC5odG1sJyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgTmd4YVJhZGlvQ29tcG9uZW50IGV4dGVuZHMgTmd4YVZhbHVlQWNjZXNzb3I8YW55PiB7XG4gICAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgICBASW5wdXQoKSBjb2xMYWJlbDogbnVtYmVyID0gMztcbiAgICBASW5wdXQoKSBjb2xJbnB1dDogbnVtYmVyID0gOTtcbiAgICBASW5wdXQoKSBkYXRhOiBSYWRpb01vZGVsW107XG5cbiAgICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBAU2VsZigpIG5nQ29udHJvbDogTmdDb250cm9sLFxuICAgICAgQEluamVjdChMT0NBTEVfSUQpIHB1YmxpYyBsb2NhbGU6IHN0cmluZykge1xuICAgICAgc3VwZXIobmdDb250cm9sLCBsb2NhbGUpO1xuICAgIH1cblxuICAgIG9uSW5pdCgpOiB2b2lkIHtcbiAgICAgIGlmICghdGhpcy52YWx1ZSAmJiB0aGlzLmRhdGEpIHRoaXMudmFsdWUgPSB0aGlzLmRhdGFbMF0udmFsdWU7XG4gICAgfVxufVxuIl19