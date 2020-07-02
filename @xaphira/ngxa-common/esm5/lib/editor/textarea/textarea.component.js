/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Inject, Input, ViewEncapsulation, Optional, Self, LOCALE_ID, } from '@angular/core';
import { NgControl } from '@angular/forms';
import { NgxaValueAccessor } from '../../base/ngxa-value-accessor.component';
var NgxaTextareaComponent = /** @class */ (function (_super) {
    tslib_1.__extends(NgxaTextareaComponent, _super);
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
export { NgxaTextareaComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dGFyZWEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHhhcGhpcmEvbmd4YS1jb21tb24vIiwic291cmNlcyI6WyJsaWIvZWRpdG9yL3RleHRhcmVhL3RleHRhcmVhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsTUFBTSxFQUVOLEtBQUssRUFDTCxpQkFBaUIsRUFDakIsUUFBUSxFQUNSLElBQUksRUFDSixTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBRTdFO0lBTTJDLGlEQUF5QjtJQVFsRSwrQkFBZ0MsU0FBb0IsRUFDeEIsTUFBYztRQUQxQyxZQUVFLGtCQUFNLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FDekI7UUFGMkIsWUFBTSxHQUFOLE1BQU0sQ0FBUTtRQVBqQyxjQUFRLEdBQVcsQ0FBQyxDQUFDO1FBQ3JCLGNBQVEsR0FBVyxDQUFDLENBQUM7UUFDckIsZUFBUyxHQUFXLENBQUMsQ0FBQztRQUN0QixlQUFTLEdBQVcsR0FBRyxDQUFDO1FBQ3hCLFlBQU0sR0FBVyxHQUFHLENBQUM7O0lBSzlCLENBQUM7Ozs7SUFFRCxzQ0FBTTs7O0lBQU47UUFDRSxJQUFJLENBQUMsVUFBVSxHQUFHO1lBQ2hCLEtBQUssRUFBRSxJQUFJLENBQUMsU0FBUztTQUN0QixDQUFDO0lBQ0osQ0FBQzs7OztJQUVELDJDQUFXOzs7SUFBWCxjQUFxQixDQUFDOztnQkF6QnZCLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsYUFBYTtvQkFFdkIsaTNDQUF3QztvQkFDeEMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2lCQUN0Qzs7OztnQkFSUSxTQUFTLHVCQWlCSCxRQUFRLFlBQUksSUFBSTs2Q0FDMUIsTUFBTSxTQUFDLFNBQVM7Ozs4QkFSbEIsS0FBSzsyQkFDTCxLQUFLOzJCQUNMLEtBQUs7NEJBQ0wsS0FBSzs0QkFDTCxLQUFLO3lCQUNMLEtBQUs7O0lBZVIsNEJBQUM7Q0FBQSxBQTNCRCxDQU0yQyxpQkFBaUIsR0FxQjNEO1NBckJZLHFCQUFxQjs7O0lBQ2hDLDRDQUE2Qjs7SUFDN0IseUNBQThCOztJQUM5Qix5Q0FBOEI7O0lBQzlCLDBDQUErQjs7SUFDL0IsMENBQWlDOztJQUNqQyx1Q0FBOEI7O0lBRzVCLHVDQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5qZWN0LFxuICBPbkRlc3Ryb3ksXG4gIElucHV0LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgT3B0aW9uYWwsXG4gIFNlbGYsXG4gIExPQ0FMRV9JRCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ0NvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOZ3hhVmFsdWVBY2Nlc3NvciB9IGZyb20gJy4uLy4uL2Jhc2Uvbmd4YS12YWx1ZS1hY2Nlc3Nvci5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd4YS10ZXh0YXJlYScsXG4gIHN0eWxlVXJsczogWycuL3RleHRhcmVhLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi90ZXh0YXJlYS5jb21wb25lbnQuaHRtbCcsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIE5neGFUZXh0YXJlYUNvbXBvbmVudCBleHRlbmRzIE5neGFWYWx1ZUFjY2Vzc29yPHN0cmluZz4gaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICBASW5wdXQoKSBjb2xMYWJlbDogbnVtYmVyID0gMztcbiAgQElucHV0KCkgY29sSW5wdXQ6IG51bWJlciA9IDk7XG4gIEBJbnB1dCgpIG1pbkxlbmd0aDogbnVtYmVyID0gMDtcbiAgQElucHV0KCkgbWF4TGVuZ3RoOiBudW1iZXIgPSAyNTA7XG4gIEBJbnB1dCgpIGhlaWdodDogbnVtYmVyID0gMTIwO1xuXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBTZWxmKCkgbmdDb250cm9sOiBOZ0NvbnRyb2wsXG4gICAgQEluamVjdChMT0NBTEVfSUQpIHB1YmxpYyBsb2NhbGU6IHN0cmluZykge1xuICAgIHN1cGVyKG5nQ29udHJvbCwgbG9jYWxlKTtcbiAgfVxuXG4gIG9uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnBhcmFtRXJyb3IgPSB7XG4gICAgICB2YWx1ZTogdGhpcy5taW5MZW5ndGgsXG4gICAgfTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge31cblxufVxuIl19