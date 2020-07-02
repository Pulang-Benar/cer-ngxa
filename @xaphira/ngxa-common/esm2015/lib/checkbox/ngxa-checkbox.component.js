/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Optional, Self, Inject, LOCALE_ID, EventEmitter, Output } from '@angular/core';
import { NgControl } from '@angular/forms';
import { NgxaValueAccessor } from '../base/ngxa-value-accessor.component';
export class NgxaCheckboxComponent extends NgxaValueAccessor {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4YS1jaGVja2JveC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AeGFwaGlyYS9uZ3hhLWNvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi9jaGVja2JveC9uZ3hhLWNoZWNrYm94LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUcsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBUTFFLE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxpQkFBa0M7Ozs7O0lBTXpFLFlBQWdDLFNBQW9CLEVBQ3hCLE1BQWM7UUFDeEMsS0FBSyxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztRQURDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFOakMsYUFBUSxHQUFXLENBQUMsQ0FBQztRQUNyQixhQUFRLEdBQVcsQ0FBQyxDQUFDO1FBRXBCLGNBQVMsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQUtqRSxDQUFDOzs7O0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2YsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQ3hCO1FBQ0QsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTs7Z0JBQ25DLFNBQVMsR0FBWSxLQUFLO1lBQzlCLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU87Ozs7WUFBQyxDQUFDLEtBQW9CLEVBQUUsRUFBRTtnQkFDdEQsSUFBSSxLQUFLLENBQUMsUUFBUSxFQUFFO29CQUNsQixTQUFTLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQztpQkFDNUI7WUFDSCxDQUFDLEVBQUMsQ0FBQztZQUNILElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDakIsSUFBSSxDQUFDLFNBQVMsRUFBRTtvQkFDZCxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7d0JBQy9CLFVBQVUsRUFBRSxJQUFJO3FCQUNqQixDQUFDLENBQUM7aUJBQ0o7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUN4QzthQUNGO1lBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDdkMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDdEM7UUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7O1lBeENKLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTtnQkFFdkIsazhCQUE2Qzs7YUFDOUM7Ozs7WUFSUSxTQUFTLHVCQWVELFFBQVEsWUFBSSxJQUFJO3lDQUMxQixNQUFNLFNBQUMsU0FBUzs7O3VCQU5sQixLQUFLO3VCQUNMLEtBQUs7bUJBQ0wsS0FBSzt3QkFDTCxNQUFNOzs7O0lBSFAseUNBQThCOztJQUM5Qix5Q0FBOEI7O0lBQzlCLHFDQUErQjs7SUFDL0IsMENBQWlFOztJQUcvRCx1Q0FBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPcHRpb25hbCwgU2VsZiwgSW5qZWN0LCBMT0NBTEVfSUQsIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ0NvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOZ3hhVmFsdWVBY2Nlc3NvciB9IGZyb20gJy4uL2Jhc2Uvbmd4YS12YWx1ZS1hY2Nlc3Nvci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2hlY2tib3hNb2RlbCB9IGZyb20gJy4vY2hlY2tib3gubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd4YS1jaGVja2JveCcsXG4gIHN0eWxlVXJsczogWycuL25neGEtY2hlY2tib3guY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL25neGEtY2hlY2tib3guY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBOZ3hhQ2hlY2tib3hDb21wb25lbnQgZXh0ZW5kcyBOZ3hhVmFsdWVBY2Nlc3NvcjxDaGVja2JveE1vZGVsW10+IHtcbiAgICBASW5wdXQoKSBjb2xMYWJlbDogbnVtYmVyID0gMztcbiAgICBASW5wdXQoKSBjb2xJbnB1dDogbnVtYmVyID0gOTtcbiAgICBASW5wdXQoKSBkYXRhOiBDaGVja2JveE1vZGVsW107XG4gICAgQE91dHB1dCgpIG9uQ2hlY2tlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICAgIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBTZWxmKCkgbmdDb250cm9sOiBOZ0NvbnRyb2wsXG4gICAgICBASW5qZWN0KExPQ0FMRV9JRCkgcHVibGljIGxvY2FsZTogc3RyaW5nKSB7XG4gICAgICBzdXBlcihuZ0NvbnRyb2wsIGxvY2FsZSk7XG4gICAgfVxuXG4gICAgb25DaGVja2VkQ2hhbmdlKCkge1xuICAgICAgaWYgKCF0aGlzLnZhbHVlKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLmRhdGE7XG4gICAgICB9XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh0aGlzLnZhbHVlKS52YWx1ZU9mKCkpIHtcbiAgICAgICAgbGV0IGlzQ2hlY2tlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgICAgICBBcnJheS5mcm9tKHRoaXMudmFsdWUpLmZvckVhY2goKHZhbHVlOiBDaGVja2JveE1vZGVsKSA9PiB7XG4gICAgICAgICAgaWYgKHZhbHVlLnNlbGVjdGVkKSB7XG4gICAgICAgICAgICBpc0NoZWNrZWQgPSB2YWx1ZS5zZWxlY3RlZDtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAodGhpcy5yZXF1aXJlZCkge1xuICAgICAgICAgIGlmICghaXNDaGVja2VkKSB7XG4gICAgICAgICAgICB0aGlzLm5nQ29udHJvbC5jb250cm9sLnNldEVycm9ycyh7XG4gICAgICAgICAgICAgICdyZXF1aXJlZCc6IHRydWUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5uZ0NvbnRyb2wuY29udHJvbC5zZXRFcnJvcnMobnVsbCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMubmdDb250cm9sLmNvbnRyb2wubWFya0FzVG91Y2hlZCgpO1xuICAgICAgICB0aGlzLm5nQ29udHJvbC5jb250cm9sLm1hcmtBc0RpcnR5KCk7XG4gICAgICB9XG4gICAgICB0aGlzLm9uQ2hlY2tlZC5lbWl0KHRoaXMudmFsdWUpO1xuICAgIH1cbn1cbiJdfQ==