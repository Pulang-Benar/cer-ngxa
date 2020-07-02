/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, Optional, Self, Inject, LOCALE_ID, EventEmitter, Output } from '@angular/core';
import { NgControl } from '@angular/forms';
import { NgxaValueAccessor } from '../base/ngxa-value-accessor.component';
var NgxaCheckboxComponent = /** @class */ (function (_super) {
    tslib_1.__extends(NgxaCheckboxComponent, _super);
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
export { NgxaCheckboxComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4YS1jaGVja2JveC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AeGFwaGlyYS9uZ3hhLWNvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi9jaGVja2JveC9uZ3hhLWNoZWNrYm94LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFHLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUcxRTtJQUsyQyxpREFBa0M7SUFNekUsK0JBQWdDLFNBQW9CLEVBQ3hCLE1BQWM7UUFEMUMsWUFFRSxrQkFBTSxTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQ3pCO1FBRjJCLFlBQU0sR0FBTixNQUFNLENBQVE7UUFOakMsY0FBUSxHQUFXLENBQUMsQ0FBQztRQUNyQixjQUFRLEdBQVcsQ0FBQyxDQUFDO1FBRXBCLGVBQVMsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQzs7SUFLakUsQ0FBQzs7OztJQUVELCtDQUFlOzs7SUFBZjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2YsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQ3hCO1FBQ0QsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTs7Z0JBQ25DLFdBQVMsR0FBWSxLQUFLO1lBQzlCLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU87Ozs7WUFBQyxVQUFDLEtBQW9CO2dCQUNsRCxJQUFJLEtBQUssQ0FBQyxRQUFRLEVBQUU7b0JBQ2xCLFdBQVMsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDO2lCQUM1QjtZQUNILENBQUMsRUFBQyxDQUFDO1lBQ0gsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNqQixJQUFJLENBQUMsV0FBUyxFQUFFO29CQUNkLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQzt3QkFDL0IsVUFBVSxFQUFFLElBQUk7cUJBQ2pCLENBQUMsQ0FBQztpQkFDSjtxQkFBTTtvQkFDTCxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ3hDO2FBQ0Y7WUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUN2QyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUN0QztRQUNELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNsQyxDQUFDOztnQkF4Q0osU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxhQUFhO29CQUV2QixrOEJBQTZDOztpQkFDOUM7Ozs7Z0JBUlEsU0FBUyx1QkFlRCxRQUFRLFlBQUksSUFBSTs2Q0FDMUIsTUFBTSxTQUFDLFNBQVM7OzsyQkFObEIsS0FBSzsyQkFDTCxLQUFLO3VCQUNMLEtBQUs7NEJBQ0wsTUFBTTs7SUFnQ1gsNEJBQUM7Q0FBQSxBQXpDRCxDQUsyQyxpQkFBaUIsR0FvQzNEO1NBcENZLHFCQUFxQjs7O0lBQzlCLHlDQUE4Qjs7SUFDOUIseUNBQThCOztJQUM5QixxQ0FBK0I7O0lBQy9CLDBDQUFpRTs7SUFHL0QsdUNBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3B0aW9uYWwsIFNlbGYsIEluamVjdCwgTE9DQUxFX0lELCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTmd4YVZhbHVlQWNjZXNzb3IgfSBmcm9tICcuLi9iYXNlL25neGEtdmFsdWUtYWNjZXNzb3IuY29tcG9uZW50JztcbmltcG9ydCB7IENoZWNrYm94TW9kZWwgfSBmcm9tICcuL2NoZWNrYm94Lm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAneGEtY2hlY2tib3gnLFxuICBzdHlsZVVybHM6IFsnLi9uZ3hhLWNoZWNrYm94LmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9uZ3hhLWNoZWNrYm94LmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgTmd4YUNoZWNrYm94Q29tcG9uZW50IGV4dGVuZHMgTmd4YVZhbHVlQWNjZXNzb3I8Q2hlY2tib3hNb2RlbFtdPiB7XG4gICAgQElucHV0KCkgY29sTGFiZWw6IG51bWJlciA9IDM7XG4gICAgQElucHV0KCkgY29sSW5wdXQ6IG51bWJlciA9IDk7XG4gICAgQElucHV0KCkgZGF0YTogQ2hlY2tib3hNb2RlbFtdO1xuICAgIEBPdXRwdXQoKSBvbkNoZWNrZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBAU2VsZigpIG5nQ29udHJvbDogTmdDb250cm9sLFxuICAgICAgQEluamVjdChMT0NBTEVfSUQpIHB1YmxpYyBsb2NhbGU6IHN0cmluZykge1xuICAgICAgc3VwZXIobmdDb250cm9sLCBsb2NhbGUpO1xuICAgIH1cblxuICAgIG9uQ2hlY2tlZENoYW5nZSgpIHtcbiAgICAgIGlmICghdGhpcy52YWx1ZSkge1xuICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy5kYXRhO1xuICAgICAgfVxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodGhpcy52YWx1ZSkudmFsdWVPZigpKSB7XG4gICAgICAgIGxldCBpc0NoZWNrZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICAgICAgQXJyYXkuZnJvbSh0aGlzLnZhbHVlKS5mb3JFYWNoKCh2YWx1ZTogQ2hlY2tib3hNb2RlbCkgPT4ge1xuICAgICAgICAgIGlmICh2YWx1ZS5zZWxlY3RlZCkge1xuICAgICAgICAgICAgaXNDaGVja2VkID0gdmFsdWUuc2VsZWN0ZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHRoaXMucmVxdWlyZWQpIHtcbiAgICAgICAgICBpZiAoIWlzQ2hlY2tlZCkge1xuICAgICAgICAgICAgdGhpcy5uZ0NvbnRyb2wuY29udHJvbC5zZXRFcnJvcnMoe1xuICAgICAgICAgICAgICAncmVxdWlyZWQnOiB0cnVlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubmdDb250cm9sLmNvbnRyb2wuc2V0RXJyb3JzKG51bGwpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLm5nQ29udHJvbC5jb250cm9sLm1hcmtBc1RvdWNoZWQoKTtcbiAgICAgICAgdGhpcy5uZ0NvbnRyb2wuY29udHJvbC5tYXJrQXNEaXJ0eSgpO1xuICAgICAgfVxuICAgICAgdGhpcy5vbkNoZWNrZWQuZW1pdCh0aGlzLnZhbHVlKTtcbiAgICB9XG59XG4iXX0=