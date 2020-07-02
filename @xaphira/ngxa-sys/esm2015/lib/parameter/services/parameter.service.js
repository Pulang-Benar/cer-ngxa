/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
export class ParameterService {
    /**
     * @return {?}
     */
    getParameter() {
        return this.parameter;
    }
    /**
     * @param {?} parameter
     * @return {?}
     */
    setParameter(parameter) {
        this.parameter = parameter;
    }
    /**
     * @return {?}
     */
    getParameterGroup() {
        return this.parameterGroup;
    }
    /**
     * @param {?} parameterGroup
     * @return {?}
     */
    setParameterGroup(parameterGroup) {
        this.parameterGroup = parameterGroup;
    }
    /**
     * @return {?}
     */
    getLocales() {
        return this.locales;
    }
    /**
     * @param {?} locales
     * @return {?}
     */
    setLocales(locales) {
        this.locales = locales;
    }
}
ParameterService.decorators = [
    { type: Injectable }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyYW1ldGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AeGFwaGlyYS9uZ3hhLXN5cy8iLCJzb3VyY2VzIjpbImxpYi9wYXJhbWV0ZXIvc2VydmljZXMvcGFyYW1ldGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFLM0MsTUFBTSxPQUFPLGdCQUFnQjs7OztJQU1sQixZQUFZO1FBQ2YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBRU0sWUFBWSxDQUFDLFNBQXlCO1FBQ3pDLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0lBQy9CLENBQUM7Ozs7SUFFTSxpQkFBaUI7UUFDcEIsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQy9CLENBQUM7Ozs7O0lBRU0saUJBQWlCLENBQUMsY0FBbUM7UUFDeEQsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7SUFDekMsQ0FBQzs7OztJQUVNLFVBQVU7UUFDYixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFFTSxVQUFVLENBQUMsT0FBc0I7UUFDcEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDM0IsQ0FBQzs7O1lBN0JKLFVBQVU7Ozs7Ozs7SUFHUCxxQ0FBa0M7Ozs7O0lBQ2xDLDBDQUE0Qzs7Ozs7SUFDNUMsbUNBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGFyYW1ldGVyR3JvdXBNb2RlbCwgUGFyYW1ldGVyTW9kZWwgfSBmcm9tICcuLi9tb2RlbHMvcGFyYW1ldGVyLm1vZGVsJztcbmltcG9ydCB7IExvY2FsZU1vZGVsIH0gZnJvbSAnLi4vLi4vbGFuZ3VhZ2UvbW9kZWxzL2xvY2FsZS5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQYXJhbWV0ZXJTZXJ2aWNlIHtcblxuICAgIHByaXZhdGUgcGFyYW1ldGVyOiBQYXJhbWV0ZXJNb2RlbDtcbiAgICBwcml2YXRlIHBhcmFtZXRlckdyb3VwOiBQYXJhbWV0ZXJHcm91cE1vZGVsO1xuICAgIHByaXZhdGUgbG9jYWxlczogTG9jYWxlTW9kZWxbXTtcblxuICAgIHB1YmxpYyBnZXRQYXJhbWV0ZXIoKTogUGFyYW1ldGVyTW9kZWwge1xuICAgICAgICByZXR1cm4gdGhpcy5wYXJhbWV0ZXI7XG4gICAgfVxuXG4gICAgcHVibGljIHNldFBhcmFtZXRlcihwYXJhbWV0ZXI6IFBhcmFtZXRlck1vZGVsKSB7XG4gICAgICAgIHRoaXMucGFyYW1ldGVyID0gcGFyYW1ldGVyO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRQYXJhbWV0ZXJHcm91cCgpOiBQYXJhbWV0ZXJHcm91cE1vZGVsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyYW1ldGVyR3JvdXA7XG4gICAgfVxuXG4gICAgcHVibGljIHNldFBhcmFtZXRlckdyb3VwKHBhcmFtZXRlckdyb3VwOiBQYXJhbWV0ZXJHcm91cE1vZGVsKSB7XG4gICAgICAgIHRoaXMucGFyYW1ldGVyR3JvdXAgPSBwYXJhbWV0ZXJHcm91cDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0TG9jYWxlcygpOiBMb2NhbGVNb2RlbFtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxlcztcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0TG9jYWxlcyhsb2NhbGVzOiBMb2NhbGVNb2RlbFtdKSB7XG4gICAgICAgIHRoaXMubG9jYWxlcyA9IGxvY2FsZXM7XG4gICAgfVxuXG59XG4iXX0=