/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, forwardRef, Attribute } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
export class EqualValidator {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXF1YWwtdmFsaWRhdG9yLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B4YXBoaXJhL25neGEtY29tbW9uLyIsInNvdXJjZXMiOlsibGliL2Jhc2UvZGlyZWN0aXZlL2VxdWFsLXZhbGlkYXRvci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRSxPQUFPLEVBQThCLGFBQWEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBUTNFLE1BQU0sT0FBTyxjQUFjOzs7O0lBRXZCLFlBQWlELGFBQXFCO1FBQXJCLGtCQUFhLEdBQWIsYUFBYSxDQUFRO0lBQUcsQ0FBQzs7Ozs7SUFFMUUsUUFBUSxDQUFDLENBQWtCOztjQUNqQixDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUs7O2NBQ1gsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7UUFFeEMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxFQUFFO1lBQ3pCLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUM7U0FDM0I7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDOzs7WUFsQkosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSw4RkFBOEY7Z0JBQ3hHLFNBQVMsRUFBRTtvQkFDUCxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsV0FBVyxFQUFFLFVBQVU7Ozt3QkFBQyxHQUFHLEVBQUUsQ0FBQyxjQUFjLEVBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO2lCQUN6RjthQUNKOzs7O3lDQUdnQixTQUFTLFNBQUMsaUJBQWlCOzs7O0lBQTVCLHVDQUEwRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgZm9yd2FyZFJlZiwgQXR0cmlidXRlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBWYWxpZGF0b3IsIEFic3RyYWN0Q29udHJvbCwgTkdfVkFMSURBVE9SUyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbeGFWYWxpZGF0ZUVxdWFsXVtmb3JtQ29udHJvbE5hbWVdLFt4YVZhbGlkYXRlRXF1YWxdW2Zvcm1Db250cm9sXSxbeGFWYWxpZGF0ZUVxdWFsXVtuZ01vZGVsXScsXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHsgcHJvdmlkZTogTkdfVkFMSURBVE9SUywgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRXF1YWxWYWxpZGF0b3IpLCBtdWx0aTogdHJ1ZSB9LFxuICAgIF0sXG59KVxuZXhwb3J0IGNsYXNzIEVxdWFsVmFsaWRhdG9yIGltcGxlbWVudHMgVmFsaWRhdG9yIHtcblxuICAgIGNvbnN0cnVjdG9yKEBBdHRyaWJ1dGUoJ3hhVmFsaWRhdGVFcXVhbCcpIHB1YmxpYyB2YWxpZGF0ZUVxdWFsOiBzdHJpbmcpIHt9XG5cbiAgICB2YWxpZGF0ZShjOiBBYnN0cmFjdENvbnRyb2wpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9IHtcbiAgICAgICAgY29uc3QgdiA9IGMudmFsdWU7XG4gICAgICAgIGNvbnN0IGUgPSBjLnJvb3QuZ2V0KHRoaXMudmFsaWRhdGVFcXVhbCk7XG5cbiAgICAgICAgaWYgKGUgJiYgdiAhPT0gZS52YWx1ZSAmJiB2KSB7XG4gICAgICAgICAgICByZXR1cm4geyBlcXVhbDogZmFsc2UgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59Il19