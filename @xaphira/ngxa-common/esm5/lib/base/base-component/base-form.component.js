/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { FormBuilder } from '@angular/forms';
import { Subject } from 'rxjs';
import { BaseComponent } from './base.component';
import { NgxaToastrService } from '../../toastr/services/ngxa-toastr.service';
/**
 * @abstract
 * @template T
 */
var /**
 * @abstract
 * @template T
 */
BaseFormComponent = /** @class */ (function (_super) {
    tslib_1.__extends(BaseFormComponent, _super);
    function BaseFormComponent(injector, controlsConfig) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this.submitSubject$ = new Subject();
        _this.destroy$ = new Subject();
        _this.disabled = false;
        _this.loadingForm = false;
        _this.formBuilder = injector.get(FormBuilder);
        if (controlsConfig)
            _this.formGroup = _this.formBuilder.group(controlsConfig);
        _this.toastr = injector.get(NgxaToastrService);
        return _this;
    }
    /**
     * @param {?=} body
     * @param {?=} serviceName
     * @param {?=} apiName
     * @param {?=} disableToastr
     * @return {?}
     */
    BaseFormComponent.prototype.onSubmit = /**
     * @param {?=} body
     * @param {?=} serviceName
     * @param {?=} apiName
     * @param {?=} disableToastr
     * @return {?}
     */
    function (body, serviceName, apiName, disableToastr) {
        var _this = this;
        this.disabled = true;
        this.exec(serviceName, apiName, body ? body : this.formGroup.value)
            .subscribe((/**
         * @param {?} success
         * @return {?}
         */
        function (success) {
            _this.submitSubject$.next(success);
            _this.disabled = true;
            if (!disableToastr)
                _this.toastr.showI18n(success.respStatusMessage[success.respStatusCode], true);
        }), (/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            _this.submitSubject$.next(error);
            _this.disabled = false;
            if (!disableToastr)
                _this.toastr.showI18n(error.respStatusMessage[error.respStatusCode], true, null, 'danger');
        }));
        return this.submitSubject$.asObservable();
    };
    /**
     * @return {?}
     */
    BaseFormComponent.prototype.onReset = /**
     * @return {?}
     */
    function () { };
    return BaseFormComponent;
}(BaseComponent));
/**
 * @abstract
 * @template T
 */
export { BaseFormComponent };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    BaseFormComponent.prototype.toastr;
    /**
     * @type {?}
     * @protected
     */
    BaseFormComponent.prototype.submitSubject$;
    /**
     * @type {?}
     * @protected
     */
    BaseFormComponent.prototype.destroy$;
    /** @type {?} */
    BaseFormComponent.prototype.formGroup;
    /** @type {?} */
    BaseFormComponent.prototype.formBuilder;
    /** @type {?} */
    BaseFormComponent.prototype.disabled;
    /** @type {?} */
    BaseFormComponent.prototype.loadingForm;
    /** @type {?} */
    BaseFormComponent.prototype.injector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B4YXBoaXJhL25neGEtY29tbW9uLyIsInNvdXJjZXMiOlsibGliL2Jhc2UvYmFzZS1jb21wb25lbnQvYmFzZS1mb3JtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBYSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRS9CLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQzs7Ozs7QUFFOUU7Ozs7O0lBQW1ELDZDQUFnQjtJQVUvRCwyQkFDVyxRQUFrQixFQUN6QixjQUVDO1FBSkwsWUFLSSxrQkFBTSxRQUFRLENBQUMsU0FLbEI7UUFUVSxjQUFRLEdBQVIsUUFBUSxDQUFVO1FBUm5CLG9CQUFjLEdBQUcsSUFBSSxPQUFPLEVBQW1CLENBQUM7UUFDaEQsY0FBUSxHQUFrQixJQUFJLE9BQU8sRUFBUSxDQUFDO1FBR2pELGNBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsaUJBQVcsR0FBWSxLQUFLLENBQUM7UUFRaEMsS0FBSSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzdDLElBQUksY0FBYztZQUNkLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDNUQsS0FBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7O0lBQ2xELENBQUM7Ozs7Ozs7O0lBRUQsb0NBQVE7Ozs7Ozs7SUFBUixVQUFTLElBQVUsRUFBRSxXQUFvQixFQUFFLE9BQWdCLEVBQUUsYUFBdUI7UUFBcEYsaUJBa0JDO1FBakJHLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7YUFDOUQsU0FBUzs7OztRQUNOLFVBQUMsT0FBd0I7WUFDckIsS0FBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDbEMsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDckIsSUFBSSxDQUFDLGFBQWE7Z0JBQ2QsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN0RixDQUFDOzs7O1FBQ0QsVUFBQyxLQUFzQjtZQUNuQixLQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNoQyxLQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUN0QixJQUFJLENBQUMsYUFBYTtnQkFDZCxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDbEcsQ0FBQyxFQUNKLENBQUM7UUFDTixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDOUMsQ0FBQzs7OztJQUVELG1DQUFPOzs7SUFBUCxjQUFpQixDQUFDO0lBRXRCLHdCQUFDO0FBQUQsQ0FBQyxBQTVDRCxDQUFtRCxhQUFhLEdBNEMvRDs7Ozs7Ozs7Ozs7SUExQ0csbUNBQW9DOzs7OztJQUNwQywyQ0FBMEQ7Ozs7O0lBQzFELHFDQUF3RDs7SUFDeEQsc0NBQTRCOztJQUM1Qix3Q0FBZ0M7O0lBQ2hDLHFDQUFpQzs7SUFDakMsd0NBQW9DOztJQUdoQyxxQ0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQnVpbGRlciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEFwaUJhc2VSZXNwb25zZSB9IGZyb20gJ0B4YXBoaXJhL3NoYXJlZCc7XG5pbXBvcnQgeyBCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi9iYXNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ3hhVG9hc3RyU2VydmljZSB9IGZyb20gJy4uLy4uL3RvYXN0ci9zZXJ2aWNlcy9uZ3hhLXRvYXN0ci5zZXJ2aWNlJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VGb3JtQ29tcG9uZW50PFQ+IGV4dGVuZHMgQmFzZUNvbXBvbmVudDxUPiB7XG5cbiAgICBwcm90ZWN0ZWQgdG9hc3RyOiBOZ3hhVG9hc3RyU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgc3VibWl0U3ViamVjdCQgPSBuZXcgU3ViamVjdDxBcGlCYXNlUmVzcG9uc2U+KCk7XG4gICAgcHJvdGVjdGVkIGRlc3Ryb3kkOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgICBwdWJsaWMgZm9ybUdyb3VwOiBGb3JtR3JvdXA7XG4gICAgcHVibGljIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcjtcbiAgICBwdWJsaWMgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwdWJsaWMgbG9hZGluZ0Zvcm06IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgaW5qZWN0b3I6IEluamVjdG9yLFxuICAgICAgICBjb250cm9sc0NvbmZpZz86IHtcbiAgICAgICAgICAgIFtrZXk6IHN0cmluZ106IGFueTtcbiAgICAgICAgfSkge1xuICAgICAgICBzdXBlcihpbmplY3Rvcik7XG4gICAgICAgIHRoaXMuZm9ybUJ1aWxkZXIgPSBpbmplY3Rvci5nZXQoRm9ybUJ1aWxkZXIpO1xuICAgICAgICBpZiAoY29udHJvbHNDb25maWcpXG4gICAgICAgICAgICB0aGlzLmZvcm1Hcm91cCA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoY29udHJvbHNDb25maWcpO1xuICAgICAgICB0aGlzLnRvYXN0ciA9IGluamVjdG9yLmdldChOZ3hhVG9hc3RyU2VydmljZSk7XG4gICAgfVxuXG4gICAgb25TdWJtaXQoYm9keT86IGFueSwgc2VydmljZU5hbWU/OiBzdHJpbmcsIGFwaU5hbWU/OiBzdHJpbmcsIGRpc2FibGVUb2FzdHI/OiBib29sZWFuKTogYW55IHtcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuZXhlYyhzZXJ2aWNlTmFtZSwgYXBpTmFtZSwgYm9keSA/IGJvZHkgOiB0aGlzLmZvcm1Hcm91cC52YWx1ZSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgKHN1Y2Nlc3M6IEFwaUJhc2VSZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdFN1YmplY3QkLm5leHQoc3VjY2Vzcyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWRpc2FibGVUb2FzdHIpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvYXN0ci5zaG93STE4bihzdWNjZXNzLnJlc3BTdGF0dXNNZXNzYWdlW3N1Y2Nlc3MucmVzcFN0YXR1c0NvZGVdLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIChlcnJvcjogQXBpQmFzZVJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0U3ViamVjdCQubmV4dChlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFkaXNhYmxlVG9hc3RyKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b2FzdHIuc2hvd0kxOG4oZXJyb3IucmVzcFN0YXR1c01lc3NhZ2VbZXJyb3IucmVzcFN0YXR1c0NvZGVdLCB0cnVlLCBudWxsLCAnZGFuZ2VyJyk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICk7XG4gICAgICAgIHJldHVybiB0aGlzLnN1Ym1pdFN1YmplY3QkLmFzT2JzZXJ2YWJsZSgpO1xuICAgIH1cblxuICAgIG9uUmVzZXQoKTogdm9pZCB7fVxuXG59XG4iXX0=