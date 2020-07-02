/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import 'rxjs/add/observable/of';
import { Injectable } from '@angular/core';
import { EMPTY } from 'rxjs';
var CustomPreloadingStrategy = /** @class */ (function () {
    function CustomPreloadingStrategy() {
        this.preloadedModules = [];
    }
    /**
     * @param {?} route
     * @param {?} load
     * @return {?}
     */
    CustomPreloadingStrategy.prototype.preload = /**
     * @param {?} route
     * @param {?} load
     * @return {?}
     */
    function (route, load) {
        if (route.data && route.data['preload']) {
            this.preloadedModules.push(route.path);
            return load();
        }
        else {
            return EMPTY;
        }
    };
    CustomPreloadingStrategy.decorators = [
        { type: Injectable }
    ];
    return CustomPreloadingStrategy;
}());
export { CustomPreloadingStrategy };
if (false) {
    /** @type {?} */
    CustomPreloadingStrategy.prototype.preloadedModules;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlbG9hZGluZy1zdHJhdGVneS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHhhcGhpcmEvbmd4YS10aGVtZS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9wcmVsb2FkaW5nLXN0cmF0ZWd5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sd0JBQXdCLENBQUM7QUFDaEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRTdCO0lBQUE7UUFFRSxxQkFBZ0IsR0FBYSxFQUFFLENBQUM7SUFVbEMsQ0FBQzs7Ozs7O0lBUkMsMENBQU87Ozs7O0lBQVAsVUFBUSxLQUFZLEVBQUUsSUFBMkI7UUFDL0MsSUFBSSxLQUFLLENBQUMsSUFBSSxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDdkMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdkMsT0FBTyxJQUFJLEVBQUUsQ0FBQztTQUNmO2FBQU07WUFDTCxPQUFPLEtBQUssQ0FBQztTQUNkO0lBQ0gsQ0FBQzs7Z0JBWEYsVUFBVTs7SUFZWCwrQkFBQztDQUFBLEFBWkQsSUFZQztTQVhZLHdCQUF3Qjs7O0lBQ25DLG9EQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAncnhqcy9hZGQvb2JzZXJ2YWJsZS9vZic7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcmVsb2FkaW5nU3RyYXRlZ3ksIFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0IHsgRU1QVFkgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEN1c3RvbVByZWxvYWRpbmdTdHJhdGVneSBpbXBsZW1lbnRzIFByZWxvYWRpbmdTdHJhdGVneSB7XG4gIHByZWxvYWRlZE1vZHVsZXM6IHN0cmluZ1tdID0gW107XG5cbiAgcHJlbG9hZChyb3V0ZTogUm91dGUsIGxvYWQ6ICgpID0+IE9ic2VydmFibGU8YW55Pik6IE9ic2VydmFibGU8YW55PiB7XG4gICAgaWYgKHJvdXRlLmRhdGEgJiYgcm91dGUuZGF0YVsncHJlbG9hZCddKSB7XG4gICAgICB0aGlzLnByZWxvYWRlZE1vZHVsZXMucHVzaChyb3V0ZS5wYXRoKTtcbiAgICAgIHJldHVybiBsb2FkKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBFTVBUWTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==