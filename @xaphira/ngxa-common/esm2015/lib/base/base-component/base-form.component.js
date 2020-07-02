/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { FormBuilder } from '@angular/forms';
import { Subject } from 'rxjs';
import { BaseComponent } from './base.component';
import { NgxaToastrService } from '../../toastr/services/ngxa-toastr.service';
/**
 * @abstract
 * @template T
 */
export class BaseFormComponent extends BaseComponent {
    /**
     * @param {?} injector
     * @param {?=} controlsConfig
     */
    constructor(injector, controlsConfig) {
        super(injector);
        this.injector = injector;
        this.submitSubject$ = new Subject();
        this.destroy$ = new Subject();
        this.disabled = false;
        this.loadingForm = false;
        this.formBuilder = injector.get(FormBuilder);
        if (controlsConfig)
            this.formGroup = this.formBuilder.group(controlsConfig);
        this.toastr = injector.get(NgxaToastrService);
    }
    /**
     * @param {?=} body
     * @param {?=} serviceName
     * @param {?=} apiName
     * @param {?=} disableToastr
     * @return {?}
     */
    onSubmit(body, serviceName, apiName, disableToastr) {
        this.disabled = true;
        this.exec(serviceName, apiName, body ? body : this.formGroup.value)
            .subscribe((/**
         * @param {?} success
         * @return {?}
         */
        (success) => {
            this.submitSubject$.next(success);
            this.disabled = true;
            if (!disableToastr)
                this.toastr.showI18n(success.respStatusMessage[success.respStatusCode], true);
        }), (/**
         * @param {?} error
         * @return {?}
         */
        (error) => {
            this.submitSubject$.next(error);
            this.disabled = false;
            if (!disableToastr)
                this.toastr.showI18n(error.respStatusMessage[error.respStatusCode], true, null, 'danger');
        }));
        return this.submitSubject$.asObservable();
    }
    /**
     * @return {?}
     */
    onReset() { }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B4YXBoaXJhL25neGEtY29tbW9uLyIsInNvdXJjZXMiOlsibGliL2Jhc2UvYmFzZS1jb21wb25lbnQvYmFzZS1mb3JtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFhLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFL0IsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDOzs7OztBQUU5RSxNQUFNLE9BQWdCLGlCQUFxQixTQUFRLGFBQWdCOzs7OztJQVUvRCxZQUNXLFFBQWtCLEVBQ3pCLGNBRUM7UUFDRCxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7UUFKVCxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBUm5CLG1CQUFjLEdBQUcsSUFBSSxPQUFPLEVBQW1CLENBQUM7UUFDaEQsYUFBUSxHQUFrQixJQUFJLE9BQU8sRUFBUSxDQUFDO1FBR2pELGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsZ0JBQVcsR0FBWSxLQUFLLENBQUM7UUFRaEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzdDLElBQUksY0FBYztZQUNkLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDbEQsQ0FBQzs7Ozs7Ozs7SUFFRCxRQUFRLENBQUMsSUFBVSxFQUFFLFdBQW9CLEVBQUUsT0FBZ0IsRUFBRSxhQUF1QjtRQUNoRixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO2FBQzlELFNBQVM7Ozs7UUFDTixDQUFDLE9BQXdCLEVBQUUsRUFBRTtZQUN6QixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNsQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUNyQixJQUFJLENBQUMsYUFBYTtnQkFDZCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3RGLENBQUM7Ozs7UUFDRCxDQUFDLEtBQXNCLEVBQUUsRUFBRTtZQUN2QixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNoQyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUN0QixJQUFJLENBQUMsYUFBYTtnQkFDZCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDbEcsQ0FBQyxFQUNKLENBQUM7UUFDTixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDOUMsQ0FBQzs7OztJQUVELE9BQU8sS0FBVSxDQUFDO0NBRXJCOzs7Ozs7SUExQ0csbUNBQW9DOzs7OztJQUNwQywyQ0FBMEQ7Ozs7O0lBQzFELHFDQUF3RDs7SUFDeEQsc0NBQTRCOztJQUM1Qix3Q0FBZ0M7O0lBQ2hDLHFDQUFpQzs7SUFDakMsd0NBQW9DOztJQUdoQyxxQ0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQnVpbGRlciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEFwaUJhc2VSZXNwb25zZSB9IGZyb20gJ0B4YXBoaXJhL3NoYXJlZCc7XG5pbXBvcnQgeyBCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi9iYXNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ3hhVG9hc3RyU2VydmljZSB9IGZyb20gJy4uLy4uL3RvYXN0ci9zZXJ2aWNlcy9uZ3hhLXRvYXN0ci5zZXJ2aWNlJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VGb3JtQ29tcG9uZW50PFQ+IGV4dGVuZHMgQmFzZUNvbXBvbmVudDxUPiB7XG5cbiAgICBwcm90ZWN0ZWQgdG9hc3RyOiBOZ3hhVG9hc3RyU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgc3VibWl0U3ViamVjdCQgPSBuZXcgU3ViamVjdDxBcGlCYXNlUmVzcG9uc2U+KCk7XG4gICAgcHJvdGVjdGVkIGRlc3Ryb3kkOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgICBwdWJsaWMgZm9ybUdyb3VwOiBGb3JtR3JvdXA7XG4gICAgcHVibGljIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcjtcbiAgICBwdWJsaWMgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwdWJsaWMgbG9hZGluZ0Zvcm06IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgaW5qZWN0b3I6IEluamVjdG9yLFxuICAgICAgICBjb250cm9sc0NvbmZpZz86IHtcbiAgICAgICAgICAgIFtrZXk6IHN0cmluZ106IGFueTtcbiAgICAgICAgfSkge1xuICAgICAgICBzdXBlcihpbmplY3Rvcik7XG4gICAgICAgIHRoaXMuZm9ybUJ1aWxkZXIgPSBpbmplY3Rvci5nZXQoRm9ybUJ1aWxkZXIpO1xuICAgICAgICBpZiAoY29udHJvbHNDb25maWcpXG4gICAgICAgICAgICB0aGlzLmZvcm1Hcm91cCA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoY29udHJvbHNDb25maWcpO1xuICAgICAgICB0aGlzLnRvYXN0ciA9IGluamVjdG9yLmdldChOZ3hhVG9hc3RyU2VydmljZSk7XG4gICAgfVxuXG4gICAgb25TdWJtaXQoYm9keT86IGFueSwgc2VydmljZU5hbWU/OiBzdHJpbmcsIGFwaU5hbWU/OiBzdHJpbmcsIGRpc2FibGVUb2FzdHI/OiBib29sZWFuKTogYW55IHtcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuZXhlYyhzZXJ2aWNlTmFtZSwgYXBpTmFtZSwgYm9keSA/IGJvZHkgOiB0aGlzLmZvcm1Hcm91cC52YWx1ZSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgKHN1Y2Nlc3M6IEFwaUJhc2VSZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdFN1YmplY3QkLm5leHQoc3VjY2Vzcyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWRpc2FibGVUb2FzdHIpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvYXN0ci5zaG93STE4bihzdWNjZXNzLnJlc3BTdGF0dXNNZXNzYWdlW3N1Y2Nlc3MucmVzcFN0YXR1c0NvZGVdLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIChlcnJvcjogQXBpQmFzZVJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0U3ViamVjdCQubmV4dChlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFkaXNhYmxlVG9hc3RyKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b2FzdHIuc2hvd0kxOG4oZXJyb3IucmVzcFN0YXR1c01lc3NhZ2VbZXJyb3IucmVzcFN0YXR1c0NvZGVdLCB0cnVlLCBudWxsLCAnZGFuZ2VyJyk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICk7XG4gICAgICAgIHJldHVybiB0aGlzLnN1Ym1pdFN1YmplY3QkLmFzT2JzZXJ2YWJsZSgpO1xuICAgIH1cblxuICAgIG9uUmVzZXQoKTogdm9pZCB7fVxuXG59XG4iXX0=