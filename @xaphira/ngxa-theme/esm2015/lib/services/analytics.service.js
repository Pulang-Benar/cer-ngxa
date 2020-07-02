/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Location } from '@angular/common';
import { filter } from 'rxjs/operators';
export class AnalyticsService {
    /**
     * @param {?} location
     * @param {?} router
     */
    constructor(location, router) {
        this.location = location;
        this.router = router;
        this.enabled = false;
    }
    /**
     * @return {?}
     */
    trackPageViews() {
        if (this.enabled) {
            this.router.events.pipe(filter((/**
             * @param {?} event
             * @return {?}
             */
            (event) => event instanceof NavigationEnd)))
                .subscribe((/**
             * @return {?}
             */
            () => {
                ga('send', { hitType: 'pageview', page: this.location.path() });
            }));
        }
    }
    /**
     * @param {?} eventName
     * @return {?}
     */
    trackEvent(eventName) {
        if (this.enabled) {
            ga('send', 'event', eventName);
        }
    }
}
AnalyticsService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
AnalyticsService.ctorParameters = () => [
    { type: Location },
    { type: Router }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    AnalyticsService.prototype.enabled;
    /**
     * @type {?}
     * @private
     */
    AnalyticsService.prototype.location;
    /**
     * @type {?}
     * @private
     */
    AnalyticsService.prototype.router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5hbHl0aWNzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AeGFwaGlyYS9uZ3hhLXRoZW1lLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2FuYWx5dGljcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUt4QyxNQUFNLE9BQU8sZ0JBQWdCOzs7OztJQUczQixZQUFvQixRQUFrQixFQUFVLE1BQWM7UUFBMUMsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDNUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQzs7OztJQUVELGNBQWM7UUFDWixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUNyQixNQUFNOzs7O1lBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssWUFBWSxhQUFhLEVBQUMsQ0FDbEQ7aUJBQ0UsU0FBUzs7O1lBQUMsR0FBRyxFQUFFO2dCQUNkLEVBQUUsQ0FBQyxNQUFNLEVBQUUsRUFBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFDLENBQUMsQ0FBQztZQUNoRSxDQUFDLEVBQUMsQ0FBQztTQUNOO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxVQUFVLENBQUMsU0FBaUI7UUFDMUIsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLEVBQUUsQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1NBQ2hDO0lBQ0gsQ0FBQzs7O1lBdkJGLFVBQVU7Ozs7WUFMRixRQUFRO1lBRE8sTUFBTTs7Ozs7OztJQVE1QixtQ0FBeUI7Ozs7O0lBRWIsb0NBQTBCOzs7OztJQUFFLGtDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdmlnYXRpb25FbmQsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmRlY2xhcmUgY29uc3QgZ2E6IGFueTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFuYWx5dGljc1NlcnZpY2Uge1xuICBwcml2YXRlIGVuYWJsZWQ6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBsb2NhdGlvbjogTG9jYXRpb24sIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcbiAgICB0aGlzLmVuYWJsZWQgPSBmYWxzZTtcbiAgfVxuXG4gIHRyYWNrUGFnZVZpZXdzKCkge1xuICAgIGlmICh0aGlzLmVuYWJsZWQpIHtcbiAgICAgIHRoaXMucm91dGVyLmV2ZW50cy5waXBlKFxuICAgICAgICBmaWx0ZXIoKGV2ZW50KSA9PiBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpLFxuICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICBnYSgnc2VuZCcsIHtoaXRUeXBlOiAncGFnZXZpZXcnLCBwYWdlOiB0aGlzLmxvY2F0aW9uLnBhdGgoKX0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH1cblxuICB0cmFja0V2ZW50KGV2ZW50TmFtZTogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMuZW5hYmxlZCkge1xuICAgICAgZ2EoJ3NlbmQnLCAnZXZlbnQnLCBldmVudE5hbWUpO1xuICAgIH1cbiAgfVxufVxuIl19