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
var /**
 * @abstract
 * @template T
 */
BaseComponent = /** @class */ (function () {
    function BaseComponent(injector) {
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
    BaseComponent.prototype.exec = /**
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
    function (serviceName, apiName, body, headers, params, pathVariable, responseType) {
        return this.http.HTTP_AUTH(this.api[serviceName][apiName], body, headers, params, pathVariable, responseType).pipe(tap());
    };
    return BaseComponent;
}());
/**
 * @abstract
 * @template T
 */
export { BaseComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AeGFwaGlyYS9uZ3hhLWNvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi9iYXNlL2Jhc2UtY29tcG9uZW50L2Jhc2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckMsT0FBTyxFQUFZLEdBQUcsRUFBc0IsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7O0FBR2xGOzs7OztJQU1JLHVCQUFzQixRQUFrQjtRQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ3BDLElBQUksQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7Ozs7Ozs7Ozs7O0lBRVMsNEJBQUk7Ozs7Ozs7Ozs7O0lBQWQsVUFBZSxXQUFtQixFQUFFLE9BQWUsRUFBRSxJQUFVLEVBQUUsT0FBcUIsRUFDbEYsTUFBbUIsRUFBRSxZQUF1QixFQUFFLFlBQWtCO1FBQ2hFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQ3RCLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQzlCLElBQUksRUFDSixPQUFPLEVBQ1AsTUFBTSxFQUNOLFlBQVksRUFDWixZQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUwsb0JBQUM7QUFBRCxDQUFDLEFBdEJELElBc0JDOzs7Ozs7Ozs7OztJQXBCRyxpQ0FBc0I7Ozs7O0lBQ3RCLDRCQUF3Qjs7Ozs7SUFDeEIsNkJBQW1DOzs7OztJQUV2QixpQ0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQVBJTW9kZWwsIEFQSSwgSHR0cEZhY3RvcnlTZXJ2aWNlLCBIVFRQX1NFUlZJQ0UgfSBmcm9tICdAeGFwaGlyYS9zaGFyZWQnO1xuaW1wb3J0IHsgSHR0cEhlYWRlcnMsIEh0dHBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlQ29tcG9uZW50PFQ+IHtcblxuICAgIHByb3RlY3RlZCByZXNwb25zZTogVDtcbiAgICBwcm90ZWN0ZWQgYXBpOiBBUElNb2RlbDtcbiAgICBwcm90ZWN0ZWQgaHR0cDogSHR0cEZhY3RvcnlTZXJ2aWNlO1xuXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIGluamVjdG9yOiBJbmplY3Rvcikge1xuICAgICAgICB0aGlzLmFwaSA9IGluamVjdG9yLmdldChBUEkpO1xuICAgICAgICB0aGlzLmh0dHAgPSBpbmplY3Rvci5nZXQoSFRUUF9TRVJWSUNFKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZXhlYyhzZXJ2aWNlTmFtZTogc3RyaW5nLCBhcGlOYW1lOiBzdHJpbmcsIGJvZHk/OiBhbnksIGhlYWRlcnM/OiBIdHRwSGVhZGVycyxcbiAgICAgICAgcGFyYW1zPzogSHR0cFBhcmFtcywgcGF0aFZhcmlhYmxlPzogc3RyaW5nW10sIHJlc3BvbnNlVHlwZT86IGFueSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuSFRUUF9BVVRIKFxuICAgICAgICAgICAgdGhpcy5hcGlbc2VydmljZU5hbWVdW2FwaU5hbWVdLFxuICAgICAgICAgICAgYm9keSxcbiAgICAgICAgICAgIGhlYWRlcnMsXG4gICAgICAgICAgICBwYXJhbXMsXG4gICAgICAgICAgICBwYXRoVmFyaWFibGUsXG4gICAgICAgICAgICByZXNwb25zZVR5cGUpLnBpcGUodGFwKCkpO1xuICAgIH1cblxufVxuIl19