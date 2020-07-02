/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Input } from '@angular/core';
import { Validators, } from '@angular/forms';
/**
 * @abstract
 */
var NgxaValidatorAccessor = /** @class */ (function () {
    function NgxaValidatorAccessor(ngControl) {
        this.ngControl = ngControl;
        this.label = '';
        this.nolabel = false;
        this.disabled = false;
        this.required = false;
        this.onChange = (/**
         * @param {?} _
         * @return {?}
         */
        function (_) { });
        this.onTouched = (/**
         * @param {?=} _
         * @return {?}
         */
        function (_) { });
        ngControl && (ngControl.valueAccessor = this);
    }
    /**
     * @protected
     * @return {?}
     */
    NgxaValidatorAccessor.prototype.onInit = /**
     * @protected
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    NgxaValidatorAccessor.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.onInit();
        /** @type {?} */
        var control = this.ngControl.control;
        /** @type {?} */
        var validators = control.validator ? [control.validator] : [];
        if (this.ngControl.control.errors) {
            this.required = this.ngControl.control.errors['required'];
        }
        if (this.required) {
            validators.push(Validators.required);
        }
        if (this.pattern) {
            validators.push(Validators.pattern(this.pattern));
        }
        control.setValidators(validators);
        control.updateValueAndValidity();
    };
    /**
     * @param {?} c
     * @return {?}
     */
    NgxaValidatorAccessor.prototype.validate = /**
     * @param {?} c
     * @return {?}
     */
    function (c) {
        /** @type {?} */
        var validators = [];
        if (this.required) {
            validators.push(Validators.required);
        }
        if (this.pattern) {
            validators.push(Validators.pattern(this.pattern));
        }
        return validators;
    };
    Object.defineProperty(NgxaValidatorAccessor.prototype, "hasErrors", {
        get: /**
         * @return {?}
         */
        function () {
            return (!this.disabled &&
                this.ngControl.control &&
                this.ngControl.control.invalid &&
                this.ngControl.touched);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxaValidatorAccessor.prototype, "hasSuccess", {
        get: /**
         * @return {?}
         */
        function () {
            return (!this.disabled &&
                this.ngControl.control &&
                this.ngControl.control.valid &&
                this.ngControl.touched);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxaValidatorAccessor.prototype, "errorMessages", {
        get: /**
         * @return {?}
         */
        function () {
            var _this = this;
            /** @type {?} */
            var errors = [];
            if (this.ngControl.errors)
                Object.keys(this.ngControl.errors).forEach((/**
                 * @param {?} property
                 * @return {?}
                 */
                function (property) {
                    switch (property) {
                        case 'required':
                            errors.push('error.required');
                            break;
                        case 'email':
                            errors.push('error.pattern.email');
                            break;
                        case 'minlength':
                            errors.push('error.minlength');
                            break;
                        default:
                            errors.push('error.'.concat(property).concat('.').concat(_this.name));
                            break;
                    }
                }));
            return errors;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} fn
     * @return {?}
     */
    NgxaValidatorAccessor.prototype.registerOnValidatorChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    NgxaValidatorAccessor.propDecorators = {
        name: [{ type: Input }],
        pattern: [{ type: Input }],
        label: [{ type: Input }],
        nolabel: [{ type: Input }],
        disabled: [{ type: Input }],
        required: [{ type: Input }],
        paramError: [{ type: Input }]
    };
    return NgxaValidatorAccessor;
}());
export { NgxaValidatorAccessor };
if (false) {
    /** @type {?} */
    NgxaValidatorAccessor.prototype.name;
    /** @type {?} */
    NgxaValidatorAccessor.prototype.pattern;
    /** @type {?} */
    NgxaValidatorAccessor.prototype.label;
    /** @type {?} */
    NgxaValidatorAccessor.prototype.nolabel;
    /** @type {?} */
    NgxaValidatorAccessor.prototype.disabled;
    /** @type {?} */
    NgxaValidatorAccessor.prototype.required;
    /** @type {?} */
    NgxaValidatorAccessor.prototype.paramError;
    /** @type {?} */
    NgxaValidatorAccessor.prototype.onChange;
    /** @type {?} */
    NgxaValidatorAccessor.prototype.onTouched;
    /**
     * @type {?}
     * @protected
     */
    NgxaValidatorAccessor.prototype.ngControl;
    /**
     * @abstract
     * @param {?} obj
     * @return {?}
     */
    NgxaValidatorAccessor.prototype.writeValue = function (obj) { };
    /**
     * @abstract
     * @param {?} fn
     * @return {?}
     */
    NgxaValidatorAccessor.prototype.registerOnChange = function (fn) { };
    /**
     * @abstract
     * @param {?} fn
     * @return {?}
     */
    NgxaValidatorAccessor.prototype.registerOnTouched = function (fn) { };
    /**
     * @abstract
     * @param {?} isDisabled
     * @return {?}
     */
    NgxaValidatorAccessor.prototype.setDisabledState = function (isDisabled) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4YS12YWxpZGF0b3ItYWNjZXNzb3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHhhcGhpcmEvbmd4YS1jb21tb24vIiwic291cmNlcyI6WyJsaWIvYmFzZS9uZ3hhLXZhbGlkYXRvci1hY2Nlc3Nvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDOUMsT0FBTyxFQU9ILFVBQVUsR0FDYixNQUFNLGdCQUFnQixDQUFDOzs7O0FBRXhCO0lBYUksK0JBQXNCLFNBQW9CO1FBQXBCLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFUakMsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUNuQixZQUFPLEdBQVksS0FBSyxDQUFDO1FBQ3pCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUU1QixhQUFROzs7O1FBQUcsVUFBQyxDQUFNLElBQU0sQ0FBQyxFQUFDO1FBQzFCLGNBQVM7Ozs7UUFBRyxVQUFDLENBQU8sSUFBTSxDQUFDLEVBQUM7UUFJL0IsU0FBUyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUNsRCxDQUFDOzs7OztJQUpTLHNDQUFNOzs7O0lBQWhCLGNBQTBCLENBQUM7Ozs7SUFNcEIsd0NBQVE7OztJQUFmO1FBQ0ksSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDOztZQUVSLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU87O1lBQ2hDLFVBQVUsR0FBa0IsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFDOUUsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUU7WUFDL0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFD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QSxBQTlGRCxJQThGQztTQTlGcUIscUJBQXFCOzs7SUFFdkMscUNBQXNCOztJQUN0Qix3Q0FBeUI7O0lBQ3pCLHNDQUE0Qjs7SUFDNUIsd0NBQWtDOztJQUNsQyx5Q0FBbUM7O0lBQ25DLHlDQUFtQzs7SUFDbkMsMkNBQXlCOztJQUN6Qix5Q0FBaUM7O0lBQ2pDLDBDQUFtQzs7Ozs7SUFHdkIsMENBQThCOzs7Ozs7SUE2RTFDLGdFQUFvQzs7Ozs7O0lBQ3BDLHFFQUF5Qzs7Ozs7O0lBQ3pDLHNFQUEwQzs7Ozs7O0lBQzFDLDZFQUFzRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gICAgQ29udHJvbFZhbHVlQWNjZXNzb3IsXG4gICAgTmdDb250cm9sLFxuICAgIFZhbGlkYXRvcixcbiAgICBBYnN0cmFjdENvbnRyb2wsXG4gICAgVmFsaWRhdGlvbkVycm9ycyxcbiAgICBWYWxpZGF0b3JGbixcbiAgICBWYWxpZGF0b3JzLFxufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBOZ3hhVmFsaWRhdG9yQWNjZXNzb3IgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgVmFsaWRhdG9yLCBPbkluaXQge1xuXG4gICAgQElucHV0KCkgbmFtZTogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHBhdHRlcm46IHN0cmluZztcbiAgICBASW5wdXQoKSBsYWJlbDogc3RyaW5nID0gJyc7XG4gICAgQElucHV0KCkgbm9sYWJlbDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG4gICAgQElucHV0KCkgcmVxdWlyZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBASW5wdXQoKSBwYXJhbUVycm9yOiBhbnk7XG4gICAgcHVibGljIG9uQ2hhbmdlID0gKF86IGFueSkgPT4ge307XG4gICAgcHVibGljIG9uVG91Y2hlZCA9IChfPzogYW55KSA9PiB7fTtcbiAgICBwcm90ZWN0ZWQgb25Jbml0KCk6IHZvaWQge31cblxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBuZ0NvbnRyb2w6IE5nQ29udHJvbCkge1xuICAgICAgICBuZ0NvbnRyb2wgJiYgKG5nQ29udHJvbC52YWx1ZUFjY2Vzc29yID0gdGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLm9uSW5pdCgpO1xuXG4gICAgICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLm5nQ29udHJvbC5jb250cm9sO1xuICAgICAgICBjb25zdCB2YWxpZGF0b3JzOiBWYWxpZGF0b3JGbltdID0gY29udHJvbC52YWxpZGF0b3IgPyBbY29udHJvbC52YWxpZGF0b3JdIDogW107XG4gICAgICAgIGlmICh0aGlzLm5nQ29udHJvbC5jb250cm9sLmVycm9ycykge1xuICAgICAgICAgICAgdGhpcy5yZXF1aXJlZCA9IHRoaXMubmdDb250cm9sLmNvbnRyb2wuZXJyb3JzWydyZXF1aXJlZCddO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnJlcXVpcmVkKSB7XG4gICAgICAgICAgICB2YWxpZGF0b3JzLnB1c2goVmFsaWRhdG9ycy5yZXF1aXJlZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucGF0dGVybikge1xuICAgICAgICAgICAgdmFsaWRhdG9ycy5wdXNoKFZhbGlkYXRvcnMucGF0dGVybih0aGlzLnBhdHRlcm4pKTtcbiAgICAgICAgfVxuICAgICAgICBjb250cm9sLnNldFZhbGlkYXRvcnModmFsaWRhdG9ycyk7XG4gICAgICAgIGNvbnRyb2wudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAgIH1cblxuICAgIHZhbGlkYXRlKGM6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMge1xuICAgICAgICBjb25zdCB2YWxpZGF0b3JzOiBWYWxpZGF0b3JGbltdID0gW107XG4gICAgICAgIGlmICh0aGlzLnJlcXVpcmVkKSB7XG4gICAgICAgICAgICB2YWxpZGF0b3JzLnB1c2goVmFsaWRhdG9ycy5yZXF1aXJlZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucGF0dGVybikge1xuICAgICAgICAgICAgdmFsaWRhdG9ycy5wdXNoKFZhbGlkYXRvcnMucGF0dGVybih0aGlzLnBhdHRlcm4pKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsaWRhdG9ycztcbiAgICB9XG5cbiAgICBnZXQgaGFzRXJyb3JzKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgIXRoaXMuZGlzYWJsZWQgJiZcbiAgICAgICAgICAgIHRoaXMubmdDb250cm9sLmNvbnRyb2wgJiZcbiAgICAgICAgICAgIHRoaXMubmdDb250cm9sLmNvbnRyb2wuaW52YWxpZCAmJlxuICAgICAgICAgICAgdGhpcy5uZ0NvbnRyb2wudG91Y2hlZFxuICAgICAgICApO1xuICAgIH1cblxuICAgIGdldCBoYXNTdWNjZXNzKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgIXRoaXMuZGlzYWJsZWQgJiZcbiAgICAgICAgICAgIHRoaXMubmdDb250cm9sLmNvbnRyb2wgJiZcbiAgICAgICAgICAgIHRoaXMubmdDb250cm9sLmNvbnRyb2wudmFsaWQgJiZcbiAgICAgICAgICAgIHRoaXMubmdDb250cm9sLnRvdWNoZWRcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBnZXQgZXJyb3JNZXNzYWdlcygpOiBzdHJpbmdbXSB7XG4gICAgICAgIGNvbnN0IGVycm9yczogc3RyaW5nW10gPSBbXTtcbiAgICAgICAgaWYgKHRoaXMubmdDb250cm9sLmVycm9ycylcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMubmdDb250cm9sLmVycm9ycykuZm9yRWFjaChwcm9wZXJ0eSA9PiB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChwcm9wZXJ0eSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdyZXF1aXJlZCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMucHVzaCgnZXJyb3IucmVxdWlyZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdlbWFpbCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMucHVzaCgnZXJyb3IucGF0dGVybi5lbWFpbCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ21pbmxlbmd0aCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMucHVzaCgnZXJyb3IubWlubGVuZ3RoJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycy5wdXNoKCdlcnJvci4nLmNvbmNhdChwcm9wZXJ0eSkuY29uY2F0KCcuJykuY29uY2F0KHRoaXMubmFtZSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBlcnJvcnM7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJPblZhbGlkYXRvckNoYW5nZShmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgICAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gICAgfVxuXG4gICAgYWJzdHJhY3Qgd3JpdGVWYWx1ZShvYmo6IGFueSk6IHZvaWQ7XG4gICAgYWJzdHJhY3QgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZDtcbiAgICBhYnN0cmFjdCByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZDtcbiAgICBhYnN0cmFjdCBzZXREaXNhYmxlZFN0YXRlPyhpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZDtcbn1cbiJdfQ==