/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Location } from '@angular/common';
import { filter } from 'rxjs/operators';
var AnalyticsService = /** @class */ (function () {
    function AnalyticsService(location, router) {
        this.location = location;
        this.router = router;
        this.enabled = false;
    }
    /**
     * @return {?}
     */
    AnalyticsService.prototype.trackPageViews = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.enabled) {
            this.router.events.pipe(filter((/**
             * @param {?} event
             * @return {?}
             */
            function (event) { return event instanceof NavigationEnd; })))
                .subscribe((/**
             * @return {?}
             */
            function () {
                ga('send', { hitType: 'pageview', page: _this.location.path() });
            }));
        }
    };
    /**
     * @param {?} eventName
     * @return {?}
     */
    AnalyticsService.prototype.trackEvent = /**
     * @param {?} eventName
     * @return {?}
     */
    function (eventName) {
        if (this.enabled) {
            ga('send', 'event', eventName);
        }
    };
    AnalyticsService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    AnalyticsService.ctorParameters = function () { return [
        { type: Location },
        { type: Router }
    ]; };
    return AnalyticsService;
}());
export { AnalyticsService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5hbHl0aWNzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AeGFwaGlyYS9uZ3hhLXRoZW1lLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2FuYWx5dGljcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUl4QztJQUlFLDBCQUFvQixRQUFrQixFQUFVLE1BQWM7UUFBMUMsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDNUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQzs7OztJQUVELHlDQUFjOzs7SUFBZDtRQUFBLGlCQVNDO1FBUkMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FDckIsTUFBTTs7OztZQUFDLFVBQUMsS0FBSyxJQUFLLE9BQUEsS0FBSyxZQUFZLGFBQWEsRUFBOUIsQ0FBOEIsRUFBQyxDQUNsRDtpQkFDRSxTQUFTOzs7WUFBQztnQkFDVCxFQUFFLENBQUMsTUFBTSxFQUFFLEVBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBQyxDQUFDLENBQUM7WUFDaEUsQ0FBQyxFQUFDLENBQUM7U0FDTjtJQUNILENBQUM7Ozs7O0lBRUQscUNBQVU7Ozs7SUFBVixVQUFXLFNBQWlCO1FBQzFCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixFQUFFLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQztTQUNoQztJQUNILENBQUM7O2dCQXZCRixVQUFVOzs7O2dCQUxGLFFBQVE7Z0JBRE8sTUFBTTs7SUE4QjlCLHVCQUFDO0NBQUEsQUF4QkQsSUF3QkM7U0F2QlksZ0JBQWdCOzs7Ozs7SUFDM0IsbUNBQXlCOzs7OztJQUViLG9DQUEwQjs7Ozs7SUFBRSxrQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uRW5kLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5kZWNsYXJlIGNvbnN0IGdhOiBhbnk7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBbmFseXRpY3NTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBlbmFibGVkOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbG9jYXRpb246IExvY2F0aW9uLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XG4gICAgdGhpcy5lbmFibGVkID0gZmFsc2U7XG4gIH1cblxuICB0cmFja1BhZ2VWaWV3cygpIHtcbiAgICBpZiAodGhpcy5lbmFibGVkKSB7XG4gICAgICB0aGlzLnJvdXRlci5ldmVudHMucGlwZShcbiAgICAgICAgZmlsdGVyKChldmVudCkgPT4gZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSxcbiAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgZ2EoJ3NlbmQnLCB7aGl0VHlwZTogJ3BhZ2V2aWV3JywgcGFnZTogdGhpcy5sb2NhdGlvbi5wYXRoKCl9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgdHJhY2tFdmVudChldmVudE5hbWU6IHN0cmluZykge1xuICAgIGlmICh0aGlzLmVuYWJsZWQpIHtcbiAgICAgIGdhKCdzZW5kJywgJ2V2ZW50JywgZXZlbnROYW1lKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==