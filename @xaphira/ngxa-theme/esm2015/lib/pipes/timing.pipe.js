/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
export class TimingPipe {
    /**
     * @param {?} time
     * @return {?}
     */
    transform(time) {
        if (time) {
            /** @type {?} */
            const minutes = Math.floor(time / 60);
            /** @type {?} */
            const seconds = Math.floor(time % 60);
            return `${this.initZero(minutes)}${minutes}:${this.initZero(seconds)}${seconds}`;
        }
        return '00:00';
    }
    /**
     * @private
     * @param {?} time
     * @return {?}
     */
    initZero(time) {
        return time < 10 ? '0' : '';
    }
}
TimingPipe.decorators = [
    { type: Pipe, args: [{ name: 'timing' },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltaW5nLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AeGFwaGlyYS9uZ3hhLXRoZW1lLyIsInNvdXJjZXMiOlsibGliL3BpcGVzL3RpbWluZy5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUdwRCxNQUFNLE9BQU8sVUFBVTs7Ozs7SUFDckIsU0FBUyxDQUFDLElBQVk7UUFDcEIsSUFBSSxJQUFJLEVBQUU7O2tCQUNGLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7O2tCQUMvQixPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1lBQ3JDLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLE9BQU8sSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLE9BQU8sRUFBRSxDQUFDO1NBQ2xGO1FBRUQsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQzs7Ozs7O0lBRU8sUUFBUSxDQUFDLElBQVk7UUFDM0IsT0FBTyxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUM5QixDQUFDOzs7WUFkRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7IG5hbWU6ICd0aW1pbmcnIH0pXG5leHBvcnQgY2xhc3MgVGltaW5nUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0odGltZTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICBpZiAodGltZSkge1xuICAgICAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IodGltZSAvIDYwKTtcbiAgICAgIGNvbnN0IHNlY29uZHMgPSBNYXRoLmZsb29yKHRpbWUgJSA2MCk7XG4gICAgICByZXR1cm4gYCR7dGhpcy5pbml0WmVybyhtaW51dGVzKX0ke21pbnV0ZXN9OiR7dGhpcy5pbml0WmVybyhzZWNvbmRzKX0ke3NlY29uZHN9YDtcbiAgICB9XG5cbiAgICByZXR1cm4gJzAwOjAwJztcbiAgfVxuXG4gIHByaXZhdGUgaW5pdFplcm8odGltZTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGltZSA8IDEwID8gJzAnIDogJyc7XG4gIH1cbn1cbiJdfQ==