/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
var TimingPipe = /** @class */ (function () {
    function TimingPipe() {
    }
    /**
     * @param {?} time
     * @return {?}
     */
    TimingPipe.prototype.transform = /**
     * @param {?} time
     * @return {?}
     */
    function (time) {
        if (time) {
            /** @type {?} */
            var minutes = Math.floor(time / 60);
            /** @type {?} */
            var seconds = Math.floor(time % 60);
            return "" + this.initZero(minutes) + minutes + ":" + this.initZero(seconds) + seconds;
        }
        return '00:00';
    };
    /**
     * @private
     * @param {?} time
     * @return {?}
     */
    TimingPipe.prototype.initZero = /**
     * @private
     * @param {?} time
     * @return {?}
     */
    function (time) {
        return time < 10 ? '0' : '';
    };
    TimingPipe.decorators = [
        { type: Pipe, args: [{ name: 'timing' },] }
    ];
    return TimingPipe;
}());
export { TimingPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltaW5nLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AeGFwaGlyYS9uZ3hhLXRoZW1lLyIsInNvdXJjZXMiOlsibGliL3BpcGVzL3RpbWluZy5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUVwRDtJQUFBO0lBZUEsQ0FBQzs7Ozs7SUFiQyw4QkFBUzs7OztJQUFULFVBQVUsSUFBWTtRQUNwQixJQUFJLElBQUksRUFBRTs7Z0JBQ0YsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQzs7Z0JBQy9CLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7WUFDckMsT0FBTyxLQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsT0FBTyxTQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsT0FBUyxDQUFDO1NBQ2xGO1FBRUQsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQzs7Ozs7O0lBRU8sNkJBQVE7Ozs7O0lBQWhCLFVBQWlCLElBQVk7UUFDM0IsT0FBTyxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUM5QixDQUFDOztnQkFkRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFOztJQWV4QixpQkFBQztDQUFBLEFBZkQsSUFlQztTQWRZLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHsgbmFtZTogJ3RpbWluZycgfSlcbmV4cG9ydCBjbGFzcyBUaW1pbmdQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybSh0aW1lOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIGlmICh0aW1lKSB7XG4gICAgICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcih0aW1lIC8gNjApO1xuICAgICAgY29uc3Qgc2Vjb25kcyA9IE1hdGguZmxvb3IodGltZSAlIDYwKTtcbiAgICAgIHJldHVybiBgJHt0aGlzLmluaXRaZXJvKG1pbnV0ZXMpfSR7bWludXRlc306JHt0aGlzLmluaXRaZXJvKHNlY29uZHMpfSR7c2Vjb25kc31gO1xuICAgIH1cblxuICAgIHJldHVybiAnMDA6MDAnO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0WmVybyh0aW1lOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aW1lIDwgMTAgPyAnMCcgOiAnJztcbiAgfVxufVxuIl19