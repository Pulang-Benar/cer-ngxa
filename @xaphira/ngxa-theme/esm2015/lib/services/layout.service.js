/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { delay, share } from 'rxjs/operators';
export class LayoutService {
    constructor() {
        this.layoutSize$ = new Subject();
    }
    /**
     * @return {?}
     */
    changeLayoutSize() {
        this.layoutSize$.next();
    }
    /**
     * @return {?}
     */
    onChangeLayoutSize() {
        return this.layoutSize$.pipe(share(), delay(1));
    }
}
LayoutService.decorators = [
    { type: Injectable }
];
if (false) {
    /**
     * @type {?}
     * @protected
     */
    LayoutService.prototype.layoutSize$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AeGFwaGlyYS9uZ3hhLXRoZW1lLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2xheW91dC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0MsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUc5QyxNQUFNLE9BQU8sYUFBYTtJQUQxQjtRQUdZLGdCQUFXLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztJQVl4QyxDQUFDOzs7O0lBVkMsZ0JBQWdCO1FBQ2QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMxQixDQUFDOzs7O0lBRUQsa0JBQWtCO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQzFCLEtBQUssRUFBRSxFQUNQLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FDVCxDQUFDO0lBQ0osQ0FBQzs7O1lBZEYsVUFBVTs7Ozs7OztJQUdULG9DQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlbGF5LCBzaGFyZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExheW91dFNlcnZpY2Uge1xuXG4gIHByb3RlY3RlZCBsYXlvdXRTaXplJCA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgY2hhbmdlTGF5b3V0U2l6ZSgpIHtcbiAgICB0aGlzLmxheW91dFNpemUkLm5leHQoKTtcbiAgfVxuXG4gIG9uQ2hhbmdlTGF5b3V0U2l6ZSgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmxheW91dFNpemUkLnBpcGUoXG4gICAgICBzaGFyZSgpLFxuICAgICAgZGVsYXkoMSksXG4gICAgKTtcbiAgfVxufVxuIl19