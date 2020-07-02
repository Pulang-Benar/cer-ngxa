/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, forwardRef, Attribute } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
var EqualValidator = /** @class */ (function () {
    function EqualValidator(validateEqual) {
        this.validateEqual = validateEqual;
    }
    /**
     * @param {?} c
     * @return {?}
     */
    EqualValidator.prototype.validate = /**
     * @param {?} c
     * @return {?}
     */
    function (c) {
        /** @type {?} */
        var v = c.value;
        /** @type {?} */
        var e = c.root.get(this.validateEqual);
        if (e && v !== e.value && v) {
            return { equal: false };
        }
        return null;
    };
    EqualValidator.decorators = [
        { type: Directive, args: [{
                    selector: '[xaValidateEqual][formControlName],[xaValidateEqual][formControl],[xaValidateEqual][ngModel]',
                    providers: [
                        { provide: NG_VALIDATORS, useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return EqualValidator; })), multi: true },
                    ],
                },] }
    ];
    /** @nocollapse */
    EqualValidator.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Attribute, args: ['xaValidateEqual',] }] }
    ]; };
    return EqualValidator;
}());
export { EqualValidator };
if (false) {
    /** @type {?} */
    EqualValidator.prototype.validateEqual;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXF1YWwtdmFsaWRhdG9yLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B4YXBoaXJhL25neGEtY29tbW9uLyIsInNvdXJjZXMiOlsibGliL2Jhc2UvZGlyZWN0aXZlL2VxdWFsLXZhbGlkYXRvci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRSxPQUFPLEVBQThCLGFBQWEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNFO0lBUUksd0JBQWlELGFBQXFCO1FBQXJCLGtCQUFhLEdBQWIsYUFBYSxDQUFRO0lBQUcsQ0FBQzs7Ozs7SUFFMUUsaUNBQVE7Ozs7SUFBUixVQUFTLENBQWtCOztZQUNqQixDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUs7O1lBQ1gsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7UUFFeEMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxFQUFFO1lBQ3pCLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUM7U0FDM0I7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDOztnQkFsQkosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSw4RkFBOEY7b0JBQ3hHLFNBQVMsRUFBRTt3QkFDUCxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsV0FBVyxFQUFFLFVBQVU7Ozs0QkFBQyxjQUFNLE9BQUEsY0FBYyxFQUFkLENBQWMsRUFBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7cUJBQ3pGO2lCQUNKOzs7OzZDQUdnQixTQUFTLFNBQUMsaUJBQWlCOztJQVc1QyxxQkFBQztDQUFBLEFBbkJELElBbUJDO1NBYlksY0FBYzs7O0lBRVgsdUNBQTBEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBmb3J3YXJkUmVmLCBBdHRyaWJ1dGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFZhbGlkYXRvciwgQWJzdHJhY3RDb250cm9sLCBOR19WQUxJREFUT1JTIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1t4YVZhbGlkYXRlRXF1YWxdW2Zvcm1Db250cm9sTmFtZV0sW3hhVmFsaWRhdGVFcXVhbF1bZm9ybUNvbnRyb2xdLFt4YVZhbGlkYXRlRXF1YWxdW25nTW9kZWxdJyxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgeyBwcm92aWRlOiBOR19WQUxJREFUT1JTLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFcXVhbFZhbGlkYXRvciksIG11bHRpOiB0cnVlIH0sXG4gICAgXSxcbn0pXG5leHBvcnQgY2xhc3MgRXF1YWxWYWxpZGF0b3IgaW1wbGVtZW50cyBWYWxpZGF0b3Ige1xuXG4gICAgY29uc3RydWN0b3IoQEF0dHJpYnV0ZSgneGFWYWxpZGF0ZUVxdWFsJykgcHVibGljIHZhbGlkYXRlRXF1YWw6IHN0cmluZykge31cblxuICAgIHZhbGlkYXRlKGM6IEFic3RyYWN0Q29udHJvbCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0ge1xuICAgICAgICBjb25zdCB2ID0gYy52YWx1ZTtcbiAgICAgICAgY29uc3QgZSA9IGMucm9vdC5nZXQodGhpcy52YWxpZGF0ZUVxdWFsKTtcblxuICAgICAgICBpZiAoZSAmJiB2ICE9PSBlLnZhbHVlICYmIHYpIHtcbiAgICAgICAgICAgIHJldHVybiB7IGVxdWFsOiBmYWxzZSB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn0iXX0=