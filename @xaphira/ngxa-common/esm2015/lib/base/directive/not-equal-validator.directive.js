/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, forwardRef, Attribute } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
export class NotEqualValidator {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90LWVxdWFsLXZhbGlkYXRvci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AeGFwaGlyYS9uZ3hhLWNvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi9iYXNlL2RpcmVjdGl2ZS9ub3QtZXF1YWwtdmFsaWRhdG9yLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pFLE9BQU8sRUFBOEIsYUFBYSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFRM0UsTUFBTSxPQUFPLGlCQUFpQjs7OztJQUUxQixZQUFvRCxnQkFBd0I7UUFBeEIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFRO0lBQUcsQ0FBQzs7Ozs7SUFFaEYsUUFBUSxDQUFDLENBQWtCOztjQUNqQixDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUs7O2NBQ1gsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztRQUUzQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLEVBQUU7WUFDekIsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQztTQUMxQjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7OztZQWxCSixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLHVHQUF1RztnQkFDakgsU0FBUyxFQUFFO29CQUNQLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxXQUFXLEVBQUUsVUFBVTs7O3dCQUFDLEdBQUcsRUFBRSxDQUFDLGlCQUFpQixFQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTtpQkFDNUY7YUFDSjs7Ozt5Q0FHZ0IsU0FBUyxTQUFDLG9CQUFvQjs7OztJQUEvQiw2Q0FBZ0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIGZvcndhcmRSZWYsIEF0dHJpYnV0ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVmFsaWRhdG9yLCBBYnN0cmFjdENvbnRyb2wsIE5HX1ZBTElEQVRPUlMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW3hhVmFsaWRhdGVOb3RFcXVhbF1bZm9ybUNvbnRyb2xOYW1lXSxbeGFWYWxpZGF0ZU5vdEVxdWFsXVtmb3JtQ29udHJvbF0sW3hhVmFsaWRhdGVOb3RFcXVhbF1bbmdNb2RlbF0nLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7IHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE5vdEVxdWFsVmFsaWRhdG9yKSwgbXVsdGk6IHRydWUgfSxcbiAgICBdLFxufSlcbmV4cG9ydCBjbGFzcyBOb3RFcXVhbFZhbGlkYXRvciBpbXBsZW1lbnRzIFZhbGlkYXRvciB7XG5cbiAgICBjb25zdHJ1Y3RvcihAQXR0cmlidXRlKCd4YVZhbGlkYXRlTm90RXF1YWwnKSBwdWJsaWMgdmFsaWRhdGVOb3RFcXVhbDogc3RyaW5nKSB7fVxuXG4gICAgdmFsaWRhdGUoYzogQWJzdHJhY3RDb250cm9sKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSB7XG4gICAgICAgIGNvbnN0IHYgPSBjLnZhbHVlO1xuICAgICAgICBjb25zdCBlID0gYy5yb290LmdldCh0aGlzLnZhbGlkYXRlTm90RXF1YWwpO1xuXG4gICAgICAgIGlmIChlICYmIHYgPT09IGUudmFsdWUgJiYgdikge1xuICAgICAgICAgICAgcmV0dXJuIHsgZXF1YWw6IHRydWUgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59Il19