/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { tap } from 'rxjs/operators';
import { API, HTTP_SERVICE } from '@xaphira/shared';
/**
 * @abstract
 * @template T
 */
export class BaseComponent {
    /**
     * @param {?} injector
     */
    constructor(injector) {
        this.injector = injector;
        this.api = injector.get(API);
        this.http = injector.get(HTTP_SERVICE);
    }
    /**
     * @protected
     * @param {?} serviceName
     * @param {?} apiName
     * @param {?=} body
     * @param {?=} headers
     * @param {?=} params
     * @param {?=} pathVariable
     * @param {?=} responseType
     * @return {?}
     */
    exec(serviceName, apiName, body, headers, params, pathVariable, responseType) {
        return this.http.HTTP_AUTH(this.api[serviceName][apiName], body, headers, params, pathVariable, responseType).pipe(tap());
    }
}
if (false) {
    /**
     * @type {?}
     * @protected
     */
    BaseComponent.prototype.response;
    /**
     * @type {?}
     * @protected
     */
    BaseComponent.prototype.api;
    /**
     * @type {?}
     * @protected
     */
    BaseComponent.prototype.http;
    /**
     * @type {?}
     * @protected
     */
    BaseComponent.prototype.injector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AeGFwaGlyYS9uZ3hhLWNvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi9iYXNlL2Jhc2UtY29tcG9uZW50L2Jhc2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckMsT0FBTyxFQUFZLEdBQUcsRUFBc0IsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7O0FBR2xGLE1BQU0sT0FBZ0IsYUFBYTs7OztJQU0vQixZQUFzQixRQUFrQjtRQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ3BDLElBQUksQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7Ozs7Ozs7Ozs7O0lBRVMsSUFBSSxDQUFDLFdBQW1CLEVBQUUsT0FBZSxFQUFFLElBQVUsRUFBRSxPQUFxQixFQUNsRixNQUFtQixFQUFFLFlBQXVCLEVBQUUsWUFBa0I7UUFDaEUsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FDdEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFDOUIsSUFBSSxFQUNKLE9BQU8sRUFDUCxNQUFNLEVBQ04sWUFBWSxFQUNaLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7Q0FFSjs7Ozs7O0lBcEJHLGlDQUFzQjs7Ozs7SUFDdEIsNEJBQXdCOzs7OztJQUN4Qiw2QkFBbUM7Ozs7O0lBRXZCLGlDQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBBUElNb2RlbCwgQVBJLCBIdHRwRmFjdG9yeVNlcnZpY2UsIEhUVFBfU0VSVklDRSB9IGZyb20gJ0B4YXBoaXJhL3NoYXJlZCc7XG5pbXBvcnQgeyBIdHRwSGVhZGVycywgSHR0cFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VDb21wb25lbnQ8VD4ge1xuXG4gICAgcHJvdGVjdGVkIHJlc3BvbnNlOiBUO1xuICAgIHByb3RlY3RlZCBhcGk6IEFQSU1vZGVsO1xuICAgIHByb3RlY3RlZCBodHRwOiBIdHRwRmFjdG9yeVNlcnZpY2U7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgaW5qZWN0b3I6IEluamVjdG9yKSB7XG4gICAgICAgIHRoaXMuYXBpID0gaW5qZWN0b3IuZ2V0KEFQSSk7XG4gICAgICAgIHRoaXMuaHR0cCA9IGluamVjdG9yLmdldChIVFRQX1NFUlZJQ0UpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBleGVjKHNlcnZpY2VOYW1lOiBzdHJpbmcsIGFwaU5hbWU6IHN0cmluZywgYm9keT86IGFueSwgaGVhZGVycz86IEh0dHBIZWFkZXJzLFxuICAgICAgICBwYXJhbXM/OiBIdHRwUGFyYW1zLCBwYXRoVmFyaWFibGU/OiBzdHJpbmdbXSwgcmVzcG9uc2VUeXBlPzogYW55KTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5IVFRQX0FVVEgoXG4gICAgICAgICAgICB0aGlzLmFwaVtzZXJ2aWNlTmFtZV1bYXBpTmFtZV0sXG4gICAgICAgICAgICBib2R5LFxuICAgICAgICAgICAgaGVhZGVycyxcbiAgICAgICAgICAgIHBhcmFtcyxcbiAgICAgICAgICAgIHBhdGhWYXJpYWJsZSxcbiAgICAgICAgICAgIHJlc3BvbnNlVHlwZSkucGlwZSh0YXAoKSk7XG4gICAgfVxuXG59XG4iXX0=