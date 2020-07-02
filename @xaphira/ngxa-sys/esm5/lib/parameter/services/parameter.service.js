/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
var ParameterService = /** @class */ (function () {
    function ParameterService() {
    }
    /**
     * @return {?}
     */
    ParameterService.prototype.getParameter = /**
     * @return {?}
     */
    function () {
        return this.parameter;
    };
    /**
     * @param {?} parameter
     * @return {?}
     */
    ParameterService.prototype.setParameter = /**
     * @param {?} parameter
     * @return {?}
     */
    function (parameter) {
        this.parameter = parameter;
    };
    /**
     * @return {?}
     */
    ParameterService.prototype.getParameterGroup = /**
     * @return {?}
     */
    function () {
        return this.parameterGroup;
    };
    /**
     * @param {?} parameterGroup
     * @return {?}
     */
    ParameterService.prototype.setParameterGroup = /**
     * @param {?} parameterGroup
     * @return {?}
     */
    function (parameterGroup) {
        this.parameterGroup = parameterGroup;
    };
    /**
     * @return {?}
     */
    ParameterService.prototype.getLocales = /**
     * @return {?}
     */
    function () {
        return this.locales;
    };
    /**
     * @param {?} locales
     * @return {?}
     */
    ParameterService.prototype.setLocales = /**
     * @param {?} locales
     * @return {?}
     */
    function (locales) {
        this.locales = locales;
    };
    ParameterService.decorators = [
        { type: Injectable }
    ];
    return ParameterService;
}());
export { ParameterService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ParameterService.prototype.parameter;
    /**
     * @type {?}
     * @private
     */
    ParameterService.prototype.parameterGroup;
    /**
     * @type {?}
     * @private
     */
    ParameterService.prototype.locales;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyYW1ldGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AeGFwaGlyYS9uZ3hhLXN5cy8iLCJzb3VyY2VzIjpbImxpYi9wYXJhbWV0ZXIvc2VydmljZXMvcGFyYW1ldGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJM0M7SUFBQTtJQStCQSxDQUFDOzs7O0lBeEJVLHVDQUFZOzs7SUFBbkI7UUFDSSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFFTSx1Q0FBWTs7OztJQUFuQixVQUFvQixTQUF5QjtRQUN6QyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztJQUMvQixDQUFDOzs7O0lBRU0sNENBQWlCOzs7SUFBeEI7UUFDSSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDL0IsQ0FBQzs7Ozs7SUFFTSw0Q0FBaUI7Ozs7SUFBeEIsVUFBeUIsY0FBbUM7UUFDeEQsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7SUFDekMsQ0FBQzs7OztJQUVNLHFDQUFVOzs7SUFBakI7UUFDSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFFTSxxQ0FBVTs7OztJQUFqQixVQUFrQixPQUFzQjtRQUNwQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUMzQixDQUFDOztnQkE3QkosVUFBVTs7SUErQlgsdUJBQUM7Q0FBQSxBQS9CRCxJQStCQztTQTlCWSxnQkFBZ0I7Ozs7OztJQUV6QixxQ0FBa0M7Ozs7O0lBQ2xDLDBDQUE0Qzs7Ozs7SUFDNUMsbUNBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGFyYW1ldGVyR3JvdXBNb2RlbCwgUGFyYW1ldGVyTW9kZWwgfSBmcm9tICcuLi9tb2RlbHMvcGFyYW1ldGVyLm1vZGVsJztcbmltcG9ydCB7IExvY2FsZU1vZGVsIH0gZnJvbSAnLi4vLi4vbGFuZ3VhZ2UvbW9kZWxzL2xvY2FsZS5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQYXJhbWV0ZXJTZXJ2aWNlIHtcblxuICAgIHByaXZhdGUgcGFyYW1ldGVyOiBQYXJhbWV0ZXJNb2RlbDtcbiAgICBwcml2YXRlIHBhcmFtZXRlckdyb3VwOiBQYXJhbWV0ZXJHcm91cE1vZGVsO1xuICAgIHByaXZhdGUgbG9jYWxlczogTG9jYWxlTW9kZWxbXTtcblxuICAgIHB1YmxpYyBnZXRQYXJhbWV0ZXIoKTogUGFyYW1ldGVyTW9kZWwge1xuICAgICAgICByZXR1cm4gdGhpcy5wYXJhbWV0ZXI7XG4gICAgfVxuXG4gICAgcHVibGljIHNldFBhcmFtZXRlcihwYXJhbWV0ZXI6IFBhcmFtZXRlck1vZGVsKSB7XG4gICAgICAgIHRoaXMucGFyYW1ldGVyID0gcGFyYW1ldGVyO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRQYXJhbWV0ZXJHcm91cCgpOiBQYXJhbWV0ZXJHcm91cE1vZGVsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyYW1ldGVyR3JvdXA7XG4gICAgfVxuXG4gICAgcHVibGljIHNldFBhcmFtZXRlckdyb3VwKHBhcmFtZXRlckdyb3VwOiBQYXJhbWV0ZXJHcm91cE1vZGVsKSB7XG4gICAgICAgIHRoaXMucGFyYW1ldGVyR3JvdXAgPSBwYXJhbWV0ZXJHcm91cDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0TG9jYWxlcygpOiBMb2NhbGVNb2RlbFtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxlcztcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0TG9jYWxlcyhsb2NhbGVzOiBMb2NhbGVNb2RlbFtdKSB7XG4gICAgICAgIHRoaXMubG9jYWxlcyA9IGxvY2FsZXM7XG4gICAgfVxuXG59XG4iXX0=