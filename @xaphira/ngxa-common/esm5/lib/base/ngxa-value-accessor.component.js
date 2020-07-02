/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { formatDate } from '@angular/common';
import { Input } from '@angular/core';
import { NgxaValidatorAccessor } from './ngxa-validator-accessor.component';
import { DateFormat } from '@xaphira/utils';
/**
 * @abstract
 * @template T
 */
var NgxaValueAccessor = /** @class */ (function (_super) {
    tslib_1.__extends(NgxaValueAccessor, _super);
    function NgxaValueAccessor(ngControl, locale) {
        var _this = _super.call(this, ngControl) || this;
        _this.ngControl = ngControl;
        _this.locale = locale;
        _this.format = DateFormat.DATE;
        _this.skeleton = false;
        return _this;
    }
    Object.defineProperty(NgxaValueAccessor.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () { return this._value; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this._value !== value) {
                this._value = value;
                if (value instanceof Date)
                    this.onChange(formatDate(value, this.format, this.locale));
                else
                    this.onChange(value);
                /** @type {?} */
                var control = this.ngControl.control;
                if (control) {
                    control.updateValueAndValidity();
                    control.markAsTouched();
                    control.markAsDirty();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    NgxaValueAccessor.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._value = value;
        this.onChange(this.value);
        /** @type {?} */
        var control = this.ngControl.control;
        if (control) {
            control.updateValueAndValidity();
            control.markAsUntouched();
            control.markAsPristine();
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NgxaValueAccessor.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) { this.onChange = fn; };
    /**
     * @param {?} fn
     * @return {?}
     */
    NgxaValueAccessor.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) { this.onTouched = fn; };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    NgxaValueAccessor.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) { this.disabled = isDisabled; };
    NgxaValueAccessor.propDecorators = {
        format: [{ type: Input }],
        skeleton: [{ type: Input }]
    };
    return NgxaValueAccessor;
}(NgxaValidatorAccessor));
export { NgxaValueAccessor };
if (false) {
    /** @type {?} */
    NgxaValueAccessor.prototype.format;
    /** @type {?} */
    NgxaValueAccessor.prototype.skeleton;
    /**
     * @type {?}
     * @protected
     */
    NgxaValueAccessor.prototype._value;
    /** @type {?} */
    NgxaValueAccessor.prototype.defaultValue;
    /** @type {?} */
    NgxaValueAccessor.prototype.ngControl;
    /** @type {?} */
    NgxaValueAccessor.prototype.locale;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4YS12YWx1ZS1hY2Nlc3Nvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AeGFwaGlyYS9uZ3hhLWNvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi9iYXNlL25neGEtdmFsdWUtYWNjZXNzb3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDNUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7OztBQUU1QztJQUFtRCw2Q0FBcUI7SUFPcEUsMkJBQW1CLFNBQW9CLEVBQVMsTUFBYztRQUE5RCxZQUNJLGtCQUFNLFNBQVMsQ0FBQyxTQUNuQjtRQUZrQixlQUFTLEdBQVQsU0FBUyxDQUFXO1FBQVMsWUFBTSxHQUFOLE1BQU0sQ0FBUTtRQUxyRCxZQUFNLEdBQVcsVUFBVSxDQUFDLElBQUksQ0FBQztRQUNqQyxjQUFRLEdBQVksS0FBSyxDQUFDOztJQU1uQyxDQUFDO0lBRUQsc0JBQUksb0NBQUs7Ozs7UUFBVCxjQUFpQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDOzs7OztRQUV0QyxVQUFVLEtBQVE7WUFDZCxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssS0FBSyxFQUFFO2dCQUN2QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztnQkFDcEIsSUFBSSxLQUFLLFlBQVksSUFBSTtvQkFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7O29CQUUzRCxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDOztvQkFDbkIsT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTztnQkFDdEMsSUFBSSxPQUFPLEVBQUU7b0JBQ1QsT0FBTyxDQUFDLHNCQUFzQixFQUFFLENBQUM7b0JBQ2pDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQztvQkFDeEIsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO2lCQUN6QjthQUNKO1FBQ0wsQ0FBQzs7O09BaEJxQzs7Ozs7SUFrQi9CLHNDQUFVOzs7O0lBQWpCLFVBQWtCLEtBQVE7UUFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7O1lBQ3BCLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU87UUFDdEMsSUFBSSxPQUFPLEVBQUU7WUFDVCxPQUFPLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztZQUNqQyxPQUFPLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDMUIsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQzVCO0lBQ0wsQ0FBQzs7Ozs7SUFFRCw0Q0FBZ0I7Ozs7SUFBaEIsVUFBaUIsRUFBTyxJQUFVLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQzs7Ozs7SUFDdkQsNkNBQWlCOzs7O0lBQWpCLFVBQWtCLEVBQU8sSUFBVSxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7Ozs7O0lBQ3pELDRDQUFnQjs7OztJQUFoQixVQUFrQixVQUFtQixJQUFVLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQzs7eUJBeEMzRSxLQUFLOzJCQUNMLEtBQUs7O0lBeUNWLHdCQUFDO0NBQUEsQUE1Q0QsQ0FBbUQscUJBQXFCLEdBNEN2RTtTQTVDcUIsaUJBQWlCOzs7SUFFbkMsbUNBQTBDOztJQUMxQyxxQ0FBbUM7Ozs7O0lBQ25DLG1DQUFzQjs7SUFDdEIseUNBQXlCOztJQUViLHNDQUEyQjs7SUFBRSxtQ0FBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ0NvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBmb3JtYXREYXRlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ3hhVmFsaWRhdG9yQWNjZXNzb3IgfSBmcm9tICcuL25neGEtdmFsaWRhdG9yLWFjY2Vzc29yLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYXRlRm9ybWF0IH0gZnJvbSAnQHhhcGhpcmEvdXRpbHMnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTmd4YVZhbHVlQWNjZXNzb3I8VD4gZXh0ZW5kcyBOZ3hhVmFsaWRhdG9yQWNjZXNzb3Ige1xuXG4gICAgQElucHV0KCkgZm9ybWF0OiBzdHJpbmcgPSBEYXRlRm9ybWF0LkRBVEU7XG4gICAgQElucHV0KCkgc2tlbGV0b246IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcm90ZWN0ZWQgX3ZhbHVlOiBhbnk7XG4gICAgcHVibGljIGRlZmF1bHRWYWx1ZTogYW55O1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIG5nQ29udHJvbDogTmdDb250cm9sLCBwdWJsaWMgbG9jYWxlOiBzdHJpbmcpIHtcbiAgICAgICAgc3VwZXIobmdDb250cm9sKTtcbiAgICB9XG5cbiAgICBnZXQgdmFsdWUoKTogVCB7IHJldHVybiB0aGlzLl92YWx1ZTsgfVxuXG4gICAgc2V0IHZhbHVlKHZhbHVlOiBUKSB7XG4gICAgICAgIGlmICh0aGlzLl92YWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBEYXRlKVxuICAgICAgICAgICAgICAgIHRoaXMub25DaGFuZ2UoZm9ybWF0RGF0ZSh2YWx1ZSwgdGhpcy5mb3JtYXQsIHRoaXMubG9jYWxlKSk7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgdGhpcy5vbkNoYW5nZSh2YWx1ZSk7XG4gICAgICAgICAgICBjb25zdCBjb250cm9sID0gdGhpcy5uZ0NvbnRyb2wuY29udHJvbDtcbiAgICAgICAgICAgIGlmIChjb250cm9sKSB7XG4gICAgICAgICAgICAgICAgY29udHJvbC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gICAgICAgICAgICAgICAgY29udHJvbC5tYXJrQXNUb3VjaGVkKCk7XG4gICAgICAgICAgICAgICAgY29udHJvbC5tYXJrQXNEaXJ0eSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHdyaXRlVmFsdWUodmFsdWU6IFQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSh0aGlzLnZhbHVlKTtcbiAgICAgICAgY29uc3QgY29udHJvbCA9IHRoaXMubmdDb250cm9sLmNvbnRyb2w7XG4gICAgICAgIGlmIChjb250cm9sKSB7XG4gICAgICAgICAgICBjb250cm9sLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICAgICAgICAgIGNvbnRyb2wubWFya0FzVW50b3VjaGVkKCk7XG4gICAgICAgICAgICBjb250cm9sLm1hcmtBc1ByaXN0aW5lKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHsgdGhpcy5vbkNoYW5nZSA9IGZuOyB9XG4gICAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQgeyB0aGlzLm9uVG91Y2hlZCA9IGZuOyB9XG4gICAgc2V0RGlzYWJsZWRTdGF0ZT8oaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQgeyB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDsgfVxuXG59XG4iXX0=