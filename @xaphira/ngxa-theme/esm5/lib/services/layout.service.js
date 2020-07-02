/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { delay, share } from 'rxjs/operators';
var LayoutService = /** @class */ (function () {
    function LayoutService() {
        this.layoutSize$ = new Subject();
    }
    /**
     * @return {?}
     */
    LayoutService.prototype.changeLayoutSize = /**
     * @return {?}
     */
    function () {
        this.layoutSize$.next();
    };
    /**
     * @return {?}
     */
    LayoutService.prototype.onChangeLayoutSize = /**
     * @return {?}
     */
    function () {
        return this.layoutSize$.pipe(share(), delay(1));
    };
    LayoutService.decorators = [
        { type: Injectable }
    ];
    return LayoutService;
}());
export { LayoutService };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    LayoutService.prototype.layoutSize$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AeGFwaGlyYS9uZ3hhLXRoZW1lLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2xheW91dC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0MsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU5QztJQUFBO1FBR1ksZ0JBQVcsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO0lBWXhDLENBQUM7Ozs7SUFWQyx3Q0FBZ0I7OztJQUFoQjtRQUNFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7OztJQUVELDBDQUFrQjs7O0lBQWxCO1FBQ0UsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FDMUIsS0FBSyxFQUFFLEVBQ1AsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUNULENBQUM7SUFDSixDQUFDOztnQkFkRixVQUFVOztJQWVYLG9CQUFDO0NBQUEsQUFmRCxJQWVDO1NBZFksYUFBYTs7Ozs7O0lBRXhCLG9DQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlbGF5LCBzaGFyZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExheW91dFNlcnZpY2Uge1xuXG4gIHByb3RlY3RlZCBsYXlvdXRTaXplJCA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgY2hhbmdlTGF5b3V0U2l6ZSgpIHtcbiAgICB0aGlzLmxheW91dFNpemUkLm5leHQoKTtcbiAgfVxuXG4gIG9uQ2hhbmdlTGF5b3V0U2l6ZSgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmxheW91dFNpemUkLnBpcGUoXG4gICAgICBzaGFyZSgpLFxuICAgICAgZGVsYXkoMSksXG4gICAgKTtcbiAgfVxufVxuIl19