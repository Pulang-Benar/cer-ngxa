/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, forwardRef, Attribute } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
var NotEqualValidator = /** @class */ (function () {
    function NotEqualValidator(validateNotEqual) {
        this.validateNotEqual = validateNotEqual;
    }
    /**
     * @param {?} c
     * @return {?}
     */
    NotEqualValidator.prototype.validate = /**
     * @param {?} c
     * @return {?}
     */
    function (c) {
        /** @type {?} */
        var v = c.value;
        /** @type {?} */
        var e = c.root.get(this.validateNotEqual);
        if (e && v === e.value && v) {
            return { equal: true };
        }
        return null;
    };
    NotEqualValidator.decorators = [
        { type: Directive, args: [{
                    selector: '[xaValidateNotEqual][formControlName],[xaValidateNotEqual][formControl],[xaValidateNotEqual][ngModel]',
                    providers: [
                        { provide: NG_VALIDATORS, useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return NotEqualValidator; })), multi: true },
                    ],
                },] }
    ];
    /** @nocollapse */
    NotEqualValidator.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Attribute, args: ['xaValidateNotEqual',] }] }
    ]; };
    return NotEqualValidator;
}());
export { NotEqualValidator };
if (false) {
    /** @type {?} */
    NotEqualValidator.prototype.validateNotEqual;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90LWVxdWFsLXZhbGlkYXRvci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AeGFwaGlyYS9uZ3hhLWNvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi9iYXNlL2RpcmVjdGl2ZS9ub3QtZXF1YWwtdmFsaWRhdG9yLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pFLE9BQU8sRUFBOEIsYUFBYSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0U7SUFRSSwyQkFBb0QsZ0JBQXdCO1FBQXhCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBUTtJQUFHLENBQUM7Ozs7O0lBRWhGLG9DQUFROzs7O0lBQVIsVUFBUyxDQUFrQjs7WUFDakIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLOztZQUNYLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7UUFFM0MsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxFQUFFO1lBQ3pCLE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUM7U0FDMUI7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDOztnQkFsQkosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSx1R0FBdUc7b0JBQ2pILFNBQVMsRUFBRTt3QkFDUCxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsV0FBVyxFQUFFLFVBQVU7Ozs0QkFBQyxjQUFNLE9BQUEsaUJBQWlCLEVBQWpCLENBQWlCLEVBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO3FCQUM1RjtpQkFDSjs7Ozs2Q0FHZ0IsU0FBUyxTQUFDLG9CQUFvQjs7SUFXL0Msd0JBQUM7Q0FBQSxBQW5CRCxJQW1CQztTQWJZLGlCQUFpQjs7O0lBRWQsNkNBQWdFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBmb3J3YXJkUmVmLCBBdHRyaWJ1dGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFZhbGlkYXRvciwgQWJzdHJhY3RDb250cm9sLCBOR19WQUxJREFUT1JTIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1t4YVZhbGlkYXRlTm90RXF1YWxdW2Zvcm1Db250cm9sTmFtZV0sW3hhVmFsaWRhdGVOb3RFcXVhbF1bZm9ybUNvbnRyb2xdLFt4YVZhbGlkYXRlTm90RXF1YWxdW25nTW9kZWxdJyxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgeyBwcm92aWRlOiBOR19WQUxJREFUT1JTLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOb3RFcXVhbFZhbGlkYXRvciksIG11bHRpOiB0cnVlIH0sXG4gICAgXSxcbn0pXG5leHBvcnQgY2xhc3MgTm90RXF1YWxWYWxpZGF0b3IgaW1wbGVtZW50cyBWYWxpZGF0b3Ige1xuXG4gICAgY29uc3RydWN0b3IoQEF0dHJpYnV0ZSgneGFWYWxpZGF0ZU5vdEVxdWFsJykgcHVibGljIHZhbGlkYXRlTm90RXF1YWw6IHN0cmluZykge31cblxuICAgIHZhbGlkYXRlKGM6IEFic3RyYWN0Q29udHJvbCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0ge1xuICAgICAgICBjb25zdCB2ID0gYy52YWx1ZTtcbiAgICAgICAgY29uc3QgZSA9IGMucm9vdC5nZXQodGhpcy52YWxpZGF0ZU5vdEVxdWFsKTtcblxuICAgICAgICBpZiAoZSAmJiB2ID09PSBlLnZhbHVlICYmIHYpIHtcbiAgICAgICAgICAgIHJldHVybiB7IGVxdWFsOiB0cnVlIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufSJdfQ==