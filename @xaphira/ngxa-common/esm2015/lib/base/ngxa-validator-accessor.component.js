/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Input } from '@angular/core';
import { Validators, } from '@angular/forms';
/**
 * @abstract
 */
export class NgxaValidatorAccessor {
    /**
     * @param {?} ngControl
     */
    constructor(ngControl) {
        this.ngControl = ngControl;
        this.label = '';
        this.nolabel = false;
        this.disabled = false;
        this.required = false;
        this.onChange = (/**
         * @param {?} _
         * @return {?}
         */
        (_) => { });
        this.onTouched = (/**
         * @param {?=} _
         * @return {?}
         */
        (_) => { });
        ngControl && (ngControl.valueAccessor = this);
    }
    /**
     * @protected
     * @return {?}
     */
    onInit() { }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.onInit();
        /** @type {?} */
        const control = this.ngControl.control;
        /** @type {?} */
        const validators = control.validator ? [control.validator] : [];
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
    }
    /**
     * @param {?} c
     * @return {?}
     */
    validate(c) {
        /** @type {?} */
        const validators = [];
        if (this.required) {
            validators.push(Validators.required);
        }
        if (this.pattern) {
            validators.push(Validators.pattern(this.pattern));
        }
        return validators;
    }
    /**
     * @return {?}
     */
    get hasErrors() {
        return (!this.disabled &&
            this.ngControl.control &&
            this.ngControl.control.invalid &&
            this.ngControl.touched);
    }
    /**
     * @return {?}
     */
    get hasSuccess() {
        return (!this.disabled &&
            this.ngControl.control &&
            this.ngControl.control.valid &&
            this.ngControl.touched);
    }
    /**
     * @return {?}
     */
    get errorMessages() {
        /** @type {?} */
        const errors = [];
        if (this.ngControl.errors)
            Object.keys(this.ngControl.errors).forEach((/**
             * @param {?} property
             * @return {?}
             */
            property => {
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
                        errors.push('error.'.concat(property).concat('.').concat(this.name));
                        break;
                }
            }));
        return errors;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnValidatorChange(fn) {
        this.onChange = fn;
    }
}
NgxaValidatorAccessor.propDecorators = {
    name: [{ type: Input }],
    pattern: [{ type: Input }],
    label: [{ type: Input }],
    nolabel: [{ type: Input }],
    disabled: [{ type: Input }],
    required: [{ type: Input }],
    paramError: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4YS12YWxpZGF0b3ItYWNjZXNzb3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHhhcGhpcmEvbmd4YS1jb21tb24vIiwic291cmNlcyI6WyJsaWIvYmFzZS9uZ3hhLXZhbGlkYXRvci1hY2Nlc3Nvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDOUMsT0FBTyxFQU9ILFVBQVUsR0FDYixNQUFNLGdCQUFnQixDQUFDOzs7O0FBRXhCLE1BQU0sT0FBZ0IscUJBQXFCOzs7O0lBYXZDLFlBQXNCLFNBQW9CO1FBQXBCLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFUakMsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUNuQixZQUFPLEdBQVksS0FBSyxDQUFDO1FBQ3pCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUU1QixhQUFROzs7O1FBQUcsQ0FBQyxDQUFNLEVBQUUsRUFBRSxHQUFFLENBQUMsRUFBQztRQUMxQixjQUFTOzs7O1FBQUcsQ0FBQyxDQUFPLEVBQUUsRUFBRSxHQUFFLENBQUMsRUFBQztRQUkvQixTQUFTLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQ2xELENBQUM7Ozs7O0lBSlMsTUFBTSxLQUFVLENBQUM7Ozs7SUFNcEIsUUFBUTtRQUNYLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQzs7Y0FFUixPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPOztjQUNoQyxVQUFVLEdBQWtCLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQzlFLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFO1lBQy9CLElBQUksQ0FBQyxRQUFRLEdB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QUNuQyx5Q0FBbUM7O0lBQ25DLDJDQUF5Qjs7SUFDekIseUNBQWlDOztJQUNqQywwQ0FBbUM7Ozs7O0lBR3ZCLDBDQUE4Qjs7Ozs7O0lBNkUxQyxnRUFBb0M7Ozs7OztJQUNwQyxxRUFBeUM7Ozs7OztJQUN6QyxzRUFBMEM7Ozs7OztJQUMxQyw2RUFBc0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICAgIENvbnRyb2xWYWx1ZUFjY2Vzc29yLFxuICAgIE5nQ29udHJvbCxcbiAgICBWYWxpZGF0b3IsXG4gICAgQWJzdHJhY3RDb250cm9sLFxuICAgIFZhbGlkYXRpb25FcnJvcnMsXG4gICAgVmFsaWRhdG9yRm4sXG4gICAgVmFsaWRhdG9ycyxcbn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTmd4YVZhbGlkYXRvckFjY2Vzc29yIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIFZhbGlkYXRvciwgT25Jbml0IHtcblxuICAgIEBJbnB1dCgpIG5hbWU6IHN0cmluZztcbiAgICBASW5wdXQoKSBwYXR0ZXJuOiBzdHJpbmc7XG4gICAgQElucHV0KCkgbGFiZWw6IHN0cmluZyA9ICcnO1xuICAgIEBJbnB1dCgpIG5vbGFiZWw6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIHJlcXVpcmVkOiBib29sZWFuID0gZmFsc2U7XG4gICAgQElucHV0KCkgcGFyYW1FcnJvcjogYW55O1xuICAgIHB1YmxpYyBvbkNoYW5nZSA9IChfOiBhbnkpID0+IHt9O1xuICAgIHB1YmxpYyBvblRvdWNoZWQgPSAoXz86IGFueSkgPT4ge307XG4gICAgcHJvdGVjdGVkIG9uSW5pdCgpOiB2b2lkIHt9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgbmdDb250cm9sOiBOZ0NvbnRyb2wpIHtcbiAgICAgICAgbmdDb250cm9sICYmIChuZ0NvbnRyb2wudmFsdWVBY2Nlc3NvciA9IHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5vbkluaXQoKTtcblxuICAgICAgICBjb25zdCBjb250cm9sID0gdGhpcy5uZ0NvbnRyb2wuY29udHJvbDtcbiAgICAgICAgY29uc3QgdmFsaWRhdG9yczogVmFsaWRhdG9yRm5bXSA9IGNvbnRyb2wudmFsaWRhdG9yID8gW2NvbnRyb2wudmFsaWRhdG9yXSA6IFtdO1xuICAgICAgICBpZiAodGhpcy5uZ0NvbnRyb2wuY29udHJvbC5lcnJvcnMpIHtcbiAgICAgICAgICAgIHRoaXMucmVxdWlyZWQgPSB0aGlzLm5nQ29udHJvbC5jb250cm9sLmVycm9yc1sncmVxdWlyZWQnXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5yZXF1aXJlZCkge1xuICAgICAgICAgICAgdmFsaWRhdG9ycy5wdXNoKFZhbGlkYXRvcnMucmVxdWlyZWQpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnBhdHRlcm4pIHtcbiAgICAgICAgICAgIHZhbGlkYXRvcnMucHVzaChWYWxpZGF0b3JzLnBhdHRlcm4odGhpcy5wYXR0ZXJuKSk7XG4gICAgICAgIH1cbiAgICAgICAgY29udHJvbC5zZXRWYWxpZGF0b3JzKHZhbGlkYXRvcnMpO1xuICAgICAgICBjb250cm9sLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICB9XG5cbiAgICB2YWxpZGF0ZShjOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHtcbiAgICAgICAgY29uc3QgdmFsaWRhdG9yczogVmFsaWRhdG9yRm5bXSA9IFtdO1xuICAgICAgICBpZiAodGhpcy5yZXF1aXJlZCkge1xuICAgICAgICAgICAgdmFsaWRhdG9ycy5wdXNoKFZhbGlkYXRvcnMucmVxdWlyZWQpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnBhdHRlcm4pIHtcbiAgICAgICAgICAgIHZhbGlkYXRvcnMucHVzaChWYWxpZGF0b3JzLnBhdHRlcm4odGhpcy5wYXR0ZXJuKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbGlkYXRvcnM7XG4gICAgfVxuXG4gICAgZ2V0IGhhc0Vycm9ycygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICF0aGlzLmRpc2FibGVkICYmXG4gICAgICAgICAgICB0aGlzLm5nQ29udHJvbC5jb250cm9sICYmXG4gICAgICAgICAgICB0aGlzLm5nQ29udHJvbC5jb250cm9sLmludmFsaWQgJiZcbiAgICAgICAgICAgIHRoaXMubmdDb250cm9sLnRvdWNoZWRcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBnZXQgaGFzU3VjY2VzcygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICF0aGlzLmRpc2FibGVkICYmXG4gICAgICAgICAgICB0aGlzLm5nQ29udHJvbC5jb250cm9sICYmXG4gICAgICAgICAgICB0aGlzLm5nQ29udHJvbC5jb250cm9sLnZhbGlkICYmXG4gICAgICAgICAgICB0aGlzLm5nQ29udHJvbC50b3VjaGVkXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZ2V0IGVycm9yTWVzc2FnZXMoKTogc3RyaW5nW10ge1xuICAgICAgICBjb25zdCBlcnJvcnM6IHN0cmluZ1tdID0gW107XG4gICAgICAgIGlmICh0aGlzLm5nQ29udHJvbC5lcnJvcnMpXG4gICAgICAgICAgICBPYmplY3Qua2V5cyh0aGlzLm5nQ29udHJvbC5lcnJvcnMpLmZvckVhY2gocHJvcGVydHkgPT4ge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAocHJvcGVydHkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAncmVxdWlyZWQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzLnB1c2goJ2Vycm9yLnJlcXVpcmVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnZW1haWwnOlxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzLnB1c2goJ2Vycm9yLnBhdHRlcm4uZW1haWwnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdtaW5sZW5ndGgnOlxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzLnB1c2goJ2Vycm9yLm1pbmxlbmd0aCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMucHVzaCgnZXJyb3IuJy5jb25jYXQocHJvcGVydHkpLmNvbmNhdCgnLicpLmNvbmNhdCh0aGlzLm5hbWUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZXJyb3JzO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyT25WYWxpZGF0b3JDaGFuZ2UoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICAgIH1cblxuICAgIGFic3RyYWN0IHdyaXRlVmFsdWUob2JqOiBhbnkpOiB2b2lkO1xuICAgIGFic3RyYWN0IHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQ7XG4gICAgYWJzdHJhY3QgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQ7XG4gICAgYWJzdHJhY3Qgc2V0RGlzYWJsZWRTdGF0ZT8oaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQ7XG59XG4iXX0=