/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
export class HttpAbstractService {
    /**
     * @param {?} api
     * @param {?=} pathVariable
     * @return {?}
     */
    API(api, pathVariable) {
        /** @type {?} */
        let url = api.server.protocol +
            '://' +
            api.server.host +
            ((api.server.port) ? ':' + api.server.port : '') +
            api.path;
        if (pathVariable)
            pathVariable.forEach((/**
             * @param {?} path
             * @return {?}
             */
            path => {
                url = url + '/' + path;
            }));
        return url;
    }
}
if (false) {
    /**
     * @abstract
     * @param {?} api
     * @param {?=} body
     * @param {?=} headers
     * @param {?=} params
     * @param {?=} pathVariable
     * @param {?=} responseType
     * @return {?}
     */
    HttpAbstractService.prototype.HTTP_AUTH = function (api, body, headers, params, pathVariable, responseType) { };
    /**
     * @abstract
     * @param {?} api
     * @param {?=} body
     * @param {?=} headers
     * @param {?=} params
     * @param {?=} pathVariable
     * @param {?=} responseType
     * @return {?}
     */
    HttpAbstractService.prototype.HTTP_BASE = function (api, body, headers, params, pathVariable, responseType) { };
    /**
     * @abstract
     * @param {?} url
     * @param {?=} headers
     * @param {?=} params
     * @param {?=} responseType
     * @return {?}
     */
    HttpAbstractService.prototype.GET = function (url, headers, params, responseType) { };
    /**
     * @abstract
     * @param {?} url
     * @param {?} body
     * @param {?=} headers
     * @param {?=} params
     * @param {?=} responseType
     * @return {?}
     */
    HttpAbstractService.prototype.POST = function (url, body, headers, params, responseType) { };
    /**
     * @abstract
     * @param {?} url
     * @param {?} body
     * @param {?=} headers
     * @param {?=} params
     * @return {?}
     */
    HttpAbstractService.prototype.PUT = function (url, body, headers, params) { };
    /**
     * @abstract
     * @param {?} url
     * @param {?=} headers
     * @param {?=} params
     * @return {?}
     */
    HttpAbstractService.prototype.DELETE = function (url, headers, params) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1hYnN0cmFjdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHhhcGhpcmEvc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2h0dHAtYWJzdHJhY3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBS0EsTUFBTSxPQUFnQixtQkFBbUI7Ozs7OztJQThCaEMsR0FBRyxDQUFDLEdBQWtCLEVBQUUsWUFBdUI7O1lBQ2hELEdBQUcsR0FBVyxHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVE7WUFDckIsS0FBSztZQUNMLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSTtZQUNmLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUNoRCxHQUFHLENBQUMsSUFBSTtRQUN4QixJQUFJLFlBQVk7WUFDZCxZQUFZLENBQUMsT0FBTzs7OztZQUFDLElBQUksQ0FBQyxFQUFFO2dCQUMxQixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUM7WUFDekIsQ0FBQyxFQUFDLENBQUM7UUFDTCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7Q0FFRjs7Ozs7Ozs7Ozs7O0lBekNDLGdIQU11Qzs7Ozs7Ozs7Ozs7SUFDdkMsZ0hBTXVDOzs7Ozs7Ozs7SUFDdkMsc0ZBSXVDOzs7Ozs7Ozs7O0lBQ3ZDLDZGQUt1Qzs7Ozs7Ozs7O0lBQ3ZDLDhFQUF5Rzs7Ozs7Ozs7SUFDekcsMkVBQWlHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvUngnO1xuaW1wb3J0IHsgSHR0cEJhc2VNb2RlbCB9IGZyb20gJy4uL21vZGVscy9odHRwLWJhc2UubW9kZWwnO1xuaW1wb3J0IHsgSHR0cEZhY3RvcnlTZXJ2aWNlIH0gZnJvbSAnLi9odHRwLWZhY3Rvcnkuc2VydmljZSc7XG5pbXBvcnQgeyBIdHRwSGVhZGVycywgSHR0cFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEh0dHBBYnN0cmFjdFNlcnZpY2UgaW1wbGVtZW50cyBIdHRwRmFjdG9yeVNlcnZpY2Uge1xuXG4gIHB1YmxpYyBhYnN0cmFjdCBIVFRQX0FVVEgoXG4gICAgYXBpOiBIdHRwQmFzZU1vZGVsLFxuICAgIGJvZHk/OiBhbnksXG4gICAgaGVhZGVycz86IEh0dHBIZWFkZXJzLFxuICAgIHBhcmFtcz86IEh0dHBQYXJhbXMsXG4gICAgcGF0aFZhcmlhYmxlPzogc3RyaW5nW10sXG4gICAgcmVzcG9uc2VUeXBlPzogYW55KTogT2JzZXJ2YWJsZTxhbnk+O1xuICBwdWJsaWMgYWJzdHJhY3QgSFRUUF9CQVNFKFxuICAgIGFwaTogSHR0cEJhc2VNb2RlbCxcbiAgICBib2R5PzogYW55LFxuICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyxcbiAgICBwYXJhbXM/OiBIdHRwUGFyYW1zLFxuICAgIHBhdGhWYXJpYWJsZT86IHN0cmluZ1tdLFxuICAgIHJlc3BvbnNlVHlwZT86IGFueSk6IE9ic2VydmFibGU8YW55PjtcbiAgcHVibGljIGFic3RyYWN0IEdFVChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMsXG4gICAgcGFyYW1zPzogSHR0cFBhcmFtcyxcbiAgICByZXNwb25zZVR5cGU/OiBhbnkpOiBPYnNlcnZhYmxlPGFueT47XG4gIHB1YmxpYyBhYnN0cmFjdCBQT1NUKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGJvZHk6IGFueSxcbiAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMsXG4gICAgcGFyYW1zPzogSHR0cFBhcmFtcyxcbiAgICByZXNwb25zZVR5cGU/OiBhbnkpOiBPYnNlcnZhYmxlPGFueT47XG4gIHB1YmxpYyBhYnN0cmFjdCBQVVQodXJsOiBzdHJpbmcsIGJvZHk6IGFueSwgaGVhZGVycz86IEh0dHBIZWFkZXJzLCBwYXJhbXM/OiBIdHRwUGFyYW1zKTogT2JzZXJ2YWJsZTxhbnk+O1xuICBwdWJsaWMgYWJzdHJhY3QgREVMRVRFKHVybDogc3RyaW5nLCBoZWFkZXJzPzogSHR0cEhlYWRlcnMsIHBhcmFtcz86IEh0dHBQYXJhbXMpOiBPYnNlcnZhYmxlPGFueT47XG5cbiAgcHVibGljIEFQSShhcGk6IEh0dHBCYXNlTW9kZWwsIHBhdGhWYXJpYWJsZT86IHN0cmluZ1tdKTogc3RyaW5nIHtcbiAgICBsZXQgdXJsOiBzdHJpbmcgPSBhcGkuc2VydmVyLnByb3RvY29sICtcbiAgICAgICAgICAgICAgICAgICAgJzovLycgK1xuICAgICAgICAgICAgICAgICAgICBhcGkuc2VydmVyLmhvc3QgK1xuICAgICAgICAgICAgICAgICAgICAoKGFwaS5zZXJ2ZXIucG9ydCkgPyAnOicgKyBhcGkuc2VydmVyLnBvcnQgOiAnJykgK1xuICAgICAgICAgICAgICAgICAgICBhcGkucGF0aDtcbiAgICBpZiAocGF0aFZhcmlhYmxlKVxuICAgICAgcGF0aFZhcmlhYmxlLmZvckVhY2gocGF0aCA9PiB7XG4gICAgICAgIHVybCA9IHVybCArICcvJyArIHBhdGg7XG4gICAgICB9KTtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbn1cbiJdfQ==