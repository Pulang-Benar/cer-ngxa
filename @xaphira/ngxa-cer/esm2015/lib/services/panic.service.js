/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import { Subject } from 'rxjs';
import { PANIC_INDEXED_DB } from '@xaphira/shared';
export class PanicService {
    /**
     * @param {?} panicIndexedDB
     */
    constructor(panicIndexedDB) {
        this.panicIndexedDB = panicIndexedDB;
        this.loaderPanicSubject$ = new Subject();
    }
    /**
     * @param {?} data
     * @return {?}
     */
    notifyPanic(data) {
        this.panicIndexedDB.put(data['panicCode'], data).then((/**
         * @return {?}
         */
        () => {
            this.loaderPanicSubject$.next(data['panicCode']);
        }));
    }
    /**
     * @param {?} datas
     * @return {?}
     */
    putAllPanic(datas) {
        datas.forEach((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            this.panicIndexedDB.put(data['panicCode'], data).then();
        }));
    }
    /**
     * @return {?}
     */
    clearAllPanic() {
        return this.panicIndexedDB.clearAll();
    }
    /**
     * @param {?} panicCode
     * @return {?}
     */
    getPanic(panicCode) {
        return this.panicIndexedDB.get(panicCode);
    }
    /**
     * @return {?}
     */
    getAllPanic() {
        return this.panicIndexedDB.getAllOf();
    }
    /**
     * @return {?}
     */
    onCheckPanic() {
        return this.loaderPanicSubject$.asObservable();
    }
}
PanicService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
PanicService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [PANIC_INDEXED_DB,] }] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuaWMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B4YXBoaXJhL25neGEtY2VyLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3BhbmljLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxPQUFPLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDM0MsT0FBTyxFQUF1QixnQkFBZ0IsRUFBMkIsTUFBTSxpQkFBaUIsQ0FBQztBQUdqRyxNQUFNLE9BQU8sWUFBWTs7OztJQUlyQixZQUE4QyxjQUF1QztRQUF2QyxtQkFBYyxHQUFkLGNBQWMsQ0FBeUI7UUFGN0Usd0JBQW1CLEdBQUcsSUFBSSxPQUFPLEVBQVUsQ0FBQztJQUdwRCxDQUFDOzs7OztJQUVNLFdBQVcsQ0FBQyxJQUFTO1FBQ3hCLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxJQUFJOzs7UUFBQyxHQUFHLEVBQUU7WUFDdkQsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUNyRCxDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7Ozs7O0lBRU0sV0FBVyxDQUFDLEtBQVk7UUFDM0IsS0FBSyxDQUFDLE9BQU87Ozs7UUFBQyxJQUFJLENBQUMsRUFBRTtZQUNqQixJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDNUQsQ0FBQyxFQUFDLENBQUM7SUFDUCxDQUFDOzs7O0lBRU0sYUFBYTtRQUNoQixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDMUMsQ0FBQzs7Ozs7SUFFTSxRQUFRLENBQUMsU0FBaUI7UUFDN0IsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM5QyxDQUFDOzs7O0lBRU0sV0FBVztRQUNkLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMxQyxDQUFDOzs7O0lBRU0sWUFBWTtRQUNmLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ25ELENBQUM7OztZQWxDSixVQUFVOzs7OzRDQUtNLE1BQU0sU0FBQyxnQkFBZ0I7Ozs7Ozs7SUFGcEMsMkNBQW9EOzs7OztJQUV4QyxzQ0FBeUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFBhbmljRmFjdG9yeVNlcnZpY2UsIFBBTklDX0lOREVYRURfREIsIEluZGV4ZWREQkZhY3RvcnlTZXJ2aWNlIH0gZnJvbSAnQHhhcGhpcmEvc2hhcmVkJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBhbmljU2VydmljZSBpbXBsZW1lbnRzIFBhbmljRmFjdG9yeVNlcnZpY2Uge1xuXG4gICAgcHJpdmF0ZSBsb2FkZXJQYW5pY1N1YmplY3QkID0gbmV3IFN1YmplY3Q8c3RyaW5nPigpO1xuXG4gICAgY29uc3RydWN0b3IoQEluamVjdChQQU5JQ19JTkRFWEVEX0RCKSBwcml2YXRlIHBhbmljSW5kZXhlZERCOiBJbmRleGVkREJGYWN0b3J5U2VydmljZSkge1xuICAgIH1cblxuICAgIHB1YmxpYyBub3RpZnlQYW5pYyhkYXRhOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5wYW5pY0luZGV4ZWREQi5wdXQoZGF0YVsncGFuaWNDb2RlJ10sIGRhdGEpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5sb2FkZXJQYW5pY1N1YmplY3QkLm5leHQoZGF0YVsncGFuaWNDb2RlJ10pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcHV0QWxsUGFuaWMoZGF0YXM6IGFueVtdKTogdm9pZCB7XG4gICAgICAgIGRhdGFzLmZvckVhY2goZGF0YSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBhbmljSW5kZXhlZERCLnB1dChkYXRhWydwYW5pY0NvZGUnXSwgZGF0YSkudGhlbigpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2xlYXJBbGxQYW5pYygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFuaWNJbmRleGVkREIuY2xlYXJBbGwoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0UGFuaWMocGFuaWNDb2RlOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5wYW5pY0luZGV4ZWREQi5nZXQocGFuaWNDb2RlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0QWxsUGFuaWMoKTogT2JzZXJ2YWJsZTxhbnlbXT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5wYW5pY0luZGV4ZWREQi5nZXRBbGxPZigpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkNoZWNrUGFuaWMoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9hZGVyUGFuaWNTdWJqZWN0JC5hc09ic2VydmFibGUoKTtcbiAgICB9XG5cbn1cbiJdfQ==