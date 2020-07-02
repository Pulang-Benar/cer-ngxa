/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import 'rxjs/add/observable/of';
import { Injectable } from '@angular/core';
import { EMPTY } from 'rxjs';
export class CustomPreloadingStrategy {
    constructor() {
        this.preloadedModules = [];
    }
    /**
     * @param {?} route
     * @param {?} load
     * @return {?}
     */
    preload(route, load) {
        if (route.data && route.data['preload']) {
            this.preloadedModules.push(route.path);
            return load();
        }
        else {
            return EMPTY;
        }
    }
}
CustomPreloadingStrategy.decorators = [
    { type: Injectable }
];
if (false) {
    /** @type {?} */
    CustomPreloadingStrategy.prototype.preloadedModules;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlbG9hZGluZy1zdHJhdGVneS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHhhcGhpcmEvbmd4YS10aGVtZS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9wcmVsb2FkaW5nLXN0cmF0ZWd5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sd0JBQXdCLENBQUM7QUFDaEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRzdCLE1BQU0sT0FBTyx3QkFBd0I7SUFEckM7UUFFRSxxQkFBZ0IsR0FBYSxFQUFFLENBQUM7SUFVbEMsQ0FBQzs7Ozs7O0lBUkMsT0FBTyxDQUFDLEtBQVksRUFBRSxJQUEyQjtRQUMvQyxJQUFJLEtBQUssQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUN2QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN2QyxPQUFPLElBQUksRUFBRSxDQUFDO1NBQ2Y7YUFBTTtZQUNMLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7SUFDSCxDQUFDOzs7WUFYRixVQUFVOzs7O0lBRVQsb0RBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL29mJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFByZWxvYWRpbmdTdHJhdGVneSwgUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBFTVBUWSB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ3VzdG9tUHJlbG9hZGluZ1N0cmF0ZWd5IGltcGxlbWVudHMgUHJlbG9hZGluZ1N0cmF0ZWd5IHtcbiAgcHJlbG9hZGVkTW9kdWxlczogc3RyaW5nW10gPSBbXTtcblxuICBwcmVsb2FkKHJvdXRlOiBSb3V0ZSwgbG9hZDogKCkgPT4gT2JzZXJ2YWJsZTxhbnk+KTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBpZiAocm91dGUuZGF0YSAmJiByb3V0ZS5kYXRhWydwcmVsb2FkJ10pIHtcbiAgICAgIHRoaXMucHJlbG9hZGVkTW9kdWxlcy5wdXNoKHJvdXRlLnBhdGgpO1xuICAgICAgcmV0dXJuIGxvYWQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIEVNUFRZO1xuICAgIH1cbiAgfVxufVxuIl19