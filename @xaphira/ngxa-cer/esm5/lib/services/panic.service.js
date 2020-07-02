/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import { Subject } from 'rxjs';
import { PANIC_INDEXED_DB } from '@xaphira/shared';
var PanicService = /** @class */ (function () {
    function PanicService(panicIndexedDB) {
        this.panicIndexedDB = panicIndexedDB;
        this.loaderPanicSubject$ = new Subject();
    }
    /**
     * @param {?} data
     * @return {?}
     */
    PanicService.prototype.notifyPanic = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        var _this = this;
        this.panicIndexedDB.put(data['panicCode'], data).then((/**
         * @return {?}
         */
        function () {
            _this.loaderPanicSubject$.next(data['panicCode']);
        }));
    };
    /**
     * @param {?} datas
     * @return {?}
     */
    PanicService.prototype.putAllPanic = /**
     * @param {?} datas
     * @return {?}
     */
    function (datas) {
        var _this = this;
        datas.forEach((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            _this.panicIndexedDB.put(data['panicCode'], data).then();
        }));
    };
    /**
     * @return {?}
     */
    PanicService.prototype.clearAllPanic = /**
     * @return {?}
     */
    function () {
        return this.panicIndexedDB.clearAll();
    };
    /**
     * @param {?} panicCode
     * @return {?}
     */
    PanicService.prototype.getPanic = /**
     * @param {?} panicCode
     * @return {?}
     */
    function (panicCode) {
        return this.panicIndexedDB.get(panicCode);
    };
    /**
     * @return {?}
     */
    PanicService.prototype.getAllPanic = /**
     * @return {?}
     */
    function () {
        return this.panicIndexedDB.getAllOf();
    };
    /**
     * @return {?}
     */
    PanicService.prototype.onCheckPanic = /**
     * @return {?}
     */
    function () {
        return this.loaderPanicSubject$.asObservable();
    };
    PanicService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    PanicService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [PANIC_INDEXED_DB,] }] }
    ]; };
    return PanicService;
}());
export { PanicService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    PanicService.prototype.loaderPanicSubject$;
    /**
     * @type {?}
     * @private
     */
    PanicService.prototype.panicIndexedDB;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuaWMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B4YXBoaXJhL25neGEtY2VyLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3BhbmljLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxPQUFPLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDM0MsT0FBTyxFQUF1QixnQkFBZ0IsRUFBMkIsTUFBTSxpQkFBaUIsQ0FBQztBQUVqRztJQUtJLHNCQUE4QyxjQUF1QztRQUF2QyxtQkFBYyxHQUFkLGNBQWMsQ0FBeUI7UUFGN0Usd0JBQW1CLEdBQUcsSUFBSSxPQUFPLEVBQVUsQ0FBQztJQUdwRCxDQUFDOzs7OztJQUVNLGtDQUFXOzs7O0lBQWxCLFVBQW1CLElBQVM7UUFBNUIsaUJBSUM7UUFIRyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsSUFBSTs7O1FBQUM7WUFDbEQsS0FBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUNyRCxDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7Ozs7O0lBRU0sa0NBQVc7Ozs7SUFBbEIsVUFBbUIsS0FBWTtRQUEvQixpQkFJQztRQUhHLEtBQUssQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQSxJQUFJO1lBQ2QsS0FBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzVELENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQzs7OztJQUVNLG9DQUFhOzs7SUFBcEI7UUFDSSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDMUMsQ0FBQzs7Ozs7SUFFTSwrQkFBUTs7OztJQUFmLFVBQWdCLFNBQWlCO1FBQzdCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDOUMsQ0FBQzs7OztJQUVNLGtDQUFXOzs7SUFBbEI7UUFDSSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDMUMsQ0FBQzs7OztJQUVNLG1DQUFZOzs7SUFBbkI7UUFDSSxPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNuRCxDQUFDOztnQkFsQ0osVUFBVTs7OztnREFLTSxNQUFNLFNBQUMsZ0JBQWdCOztJQStCeEMsbUJBQUM7Q0FBQSxBQXBDRCxJQW9DQztTQW5DWSxZQUFZOzs7Ozs7SUFFckIsMkNBQW9EOzs7OztJQUV4QyxzQ0FBeUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFBhbmljRmFjdG9yeVNlcnZpY2UsIFBBTklDX0lOREVYRURfREIsIEluZGV4ZWREQkZhY3RvcnlTZXJ2aWNlIH0gZnJvbSAnQHhhcGhpcmEvc2hhcmVkJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBhbmljU2VydmljZSBpbXBsZW1lbnRzIFBhbmljRmFjdG9yeVNlcnZpY2Uge1xuXG4gICAgcHJpdmF0ZSBsb2FkZXJQYW5pY1N1YmplY3QkID0gbmV3IFN1YmplY3Q8c3RyaW5nPigpO1xuXG4gICAgY29uc3RydWN0b3IoQEluamVjdChQQU5JQ19JTkRFWEVEX0RCKSBwcml2YXRlIHBhbmljSW5kZXhlZERCOiBJbmRleGVkREJGYWN0b3J5U2VydmljZSkge1xuICAgIH1cblxuICAgIHB1YmxpYyBub3RpZnlQYW5pYyhkYXRhOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5wYW5pY0luZGV4ZWREQi5wdXQoZGF0YVsncGFuaWNDb2RlJ10sIGRhdGEpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5sb2FkZXJQYW5pY1N1YmplY3QkLm5leHQoZGF0YVsncGFuaWNDb2RlJ10pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcHV0QWxsUGFuaWMoZGF0YXM6IGFueVtdKTogdm9pZCB7XG4gICAgICAgIGRhdGFzLmZvckVhY2goZGF0YSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBhbmljSW5kZXhlZERCLnB1dChkYXRhWydwYW5pY0NvZGUnXSwgZGF0YSkudGhlbigpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2xlYXJBbGxQYW5pYygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFuaWNJbmRleGVkREIuY2xlYXJBbGwoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0UGFuaWMocGFuaWNDb2RlOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5wYW5pY0luZGV4ZWREQi5nZXQocGFuaWNDb2RlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0QWxsUGFuaWMoKTogT2JzZXJ2YWJsZTxhbnlbXT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5wYW5pY0luZGV4ZWREQi5nZXRBbGxPZigpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkNoZWNrUGFuaWMoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9hZGVyUGFuaWNTdWJqZWN0JC5hc09ic2VydmFibGUoKTtcbiAgICB9XG5cbn1cbiJdfQ==