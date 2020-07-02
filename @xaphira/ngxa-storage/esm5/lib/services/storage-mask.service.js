/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable } from '@angular/core';
import { EncryptionService } from '@xaphira/utils';
import { OAUTH_INFO } from '@xaphira/shared';
import * as i0 from "@angular/core";
import * as i1 from "@xaphira/utils";
import * as i2 from "@xaphira/shared";
var StorageMaskService = /** @class */ (function () {
    function StorageMaskService(enc, oauthResource) {
        this.enc = enc;
        this.oauthResource = oauthResource;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    StorageMaskService.prototype.getSessionStorageEnc = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        /** @type {?} */
        var keyEncrypted = this.enc.getHmacSha256(this.oauthResource['private_key'], key, true);
        if (sessionStorage.getItem(keyEncrypted))
            return this.enc.decryptAES(this.oauthResource['aes_key'], sessionStorage.getItem(keyEncrypted));
        else
            return null;
    };
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    StorageMaskService.prototype.setSessionStorageEnc = /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    function (key, value) {
        /** @type {?} */
        var keyEncrypted = this.enc.getHmacSha256(this.oauthResource['private_key'], key, true);
        /** @type {?} */
        var valueEncrypted = this.enc.encryptAES(this.oauthResource['aes_key'], value);
        sessionStorage.setItem(keyEncrypted, valueEncrypted);
    };
    /**
     * @param {?} key
     * @return {?}
     */
    StorageMaskService.prototype.removeSessionStorageEnc = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        /** @type {?} */
        var keyEncrypted = this.enc.getHmacSha256(this.oauthResource['private_key'], key, true);
        sessionStorage.removeItem(keyEncrypted);
    };
    /**
     * @param {?} key
     * @return {?}
     */
    StorageMaskService.prototype.getLocalStorageEnc = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        /** @type {?} */
        var keyEncrypted = this.enc.getHmacSha256(this.oauthResource['private_key'], key, true);
        if (localStorage.getItem(keyEncrypted))
            return this.enc.decryptAES(this.oauthResource['aes_key'], localStorage.getItem(keyEncrypted));
        else
            return null;
    };
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    StorageMaskService.prototype.setLocalStorageEnc = /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    function (key, value) {
        /** @type {?} */
        var keyEncrypted = this.enc.getHmacSha256(this.oauthResource['private_key'], key, true);
        /** @type {?} */
        var valueEncrypted = this.enc.encryptAES(this.oauthResource['aes_key'], value);
        localStorage.setItem(keyEncrypted, valueEncrypted);
    };
    /**
     * @param {?} key
     * @return {?}
     */
    StorageMaskService.prototype.removeLocalStorageEnc = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        /** @type {?} */
        var keyEncrypted = this.enc.getHmacSha256(this.oauthResource['private_key'], key, true);
        localStorage.removeItem(keyEncrypted);
    };
    /**
     * @param {?} key
     * @return {?}
     */
    StorageMaskService.prototype.getSessionStorage = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return (key) ? sessionStorage.getItem(key) : null;
    };
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    StorageMaskService.prototype.setSessionStorage = /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    function (key, value) {
        sessionStorage.setItem(key, value);
    };
    /**
     * @param {?} key
     * @return {?}
     */
    StorageMaskService.prototype.removeSessionStorage = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        sessionStorage.removeItem(key);
    };
    /**
     * @param {?} key
     * @return {?}
     */
    StorageMaskService.prototype.getLocalStorage = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return (key) ? localStorage.getItem(key) : null;
    };
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    StorageMaskService.prototype.setLocalStorage = /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    function (key, value) {
        localStorage.setItem(key, value);
    };
    /**
     * @param {?} key
     * @return {?}
     */
    StorageMaskService.prototype.removeLocalStorage = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        localStorage.removeItem(key);
    };
    /**
     * @return {?}
     */
    StorageMaskService.prototype.clearSessionStorage = /**
     * @return {?}
     */
    function () {
        sessionStorage.clear();
    };
    /**
     * @return {?}
     */
    StorageMaskService.prototype.clearLocalStorage = /**
     * @return {?}
     */
    function () {
        localStorage.clear();
    };
    /**
     * @return {?}
     */
    StorageMaskService.prototype.clearAll = /**
     * @return {?}
     */
    function () {
        sessionStorage.clear();
        localStorage.clear();
    };
    StorageMaskService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    StorageMaskService.ctorParameters = function () { return [
        { type: EncryptionService },
        { type: undefined, decorators: [{ type: Inject, args: [OAUTH_INFO,] }] }
    ]; };
    /** @nocollapse */ StorageMaskService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function StorageMaskService_Factory() { return new StorageMaskService(i0.ɵɵinject(i1.EncryptionService), i0.ɵɵinject(i2.OAUTH_INFO)); }, token: StorageMaskService, providedIn: "root" });
    return StorageMaskService;
}());
export { StorageMaskService };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    StorageMaskService.prototype.enc;
    /**
     * @type {?}
     * @private
     */
    StorageMaskService.prototype.oauthResource;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmFnZS1tYXNrLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AeGFwaGlyYS9uZ3hhLXN0b3JhZ2UvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvc3RvcmFnZS1tYXNrLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBeUIsVUFBVSxFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7QUFHcEU7SUFLSSw0QkFBc0IsR0FBc0IsRUFDWixhQUFvQztRQUQ5QyxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUNaLGtCQUFhLEdBQWIsYUFBYSxDQUF1QjtJQUFHLENBQUM7Ozs7O0lBRWpFLGlEQUFvQjs7OztJQUEzQixVQUE0QixHQUFXOztZQUM3QixZQUFZLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDO1FBQ3pGLElBQUksY0FBYyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUM7WUFDcEMsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxFQUFFLGNBQWMsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQzs7WUFFaEcsT0FBTyxJQUFJLENBQUM7SUFDcEIsQ0FBQzs7Ozs7O0lBRU0saURBQW9COzs7OztJQUEzQixVQUE0QixHQUFXLEVBQUUsS0FBYTs7WUFDNUMsWUFBWSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQzs7WUFDbkYsY0FBYyxH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VSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7Ozs7SUFFTSxnREFBbUI7OztJQUExQjtRQUNJLGNBQWMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7O0lBRU0sOENBQWlCOzs7SUFBeEI7UUFDSSxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDekIsQ0FBQzs7OztJQUVNLHFDQUFROzs7SUFBZjtRQUNJLGNBQWMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN2QixZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDekIsQ0FBQzs7Z0JBakZKLFVBQVUsU0FBQztvQkFDUixVQUFVLEVBQUUsTUFBTTtpQkFDckI7Ozs7Z0JBTlEsaUJBQWlCO2dEQVVqQixNQUFNLFNBQUMsVUFBVTs7OzZCQVgxQjtDQXdGQyxBQW5GRCxJQW1GQztTQWhGWSxrQkFBa0I7Ozs7OztJQUVmLGlDQUFnQzs7Ozs7SUFDeEMsMkNBQWdFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFbmNyeXB0aW9uU2VydmljZSB9IGZyb20gJ0B4YXBoaXJhL3V0aWxzJztcbmltcG9ydCB7IFNlY3VyaXR5UmVzb3VyY2VNb2RlbCwgT0FVVEhfSU5GTyB9IGZyb20gJ0B4YXBoaXJhL3NoYXJlZCc7XG5pbXBvcnQgeyBTdG9yYWdlRmFjdG9yeVNlcnZpY2UgfSBmcm9tICcuL3N0b3JhZ2UtZmFjdG9yeS5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgU3RvcmFnZU1hc2tTZXJ2aWNlIGltcGxlbWVudHMgU3RvcmFnZUZhY3RvcnlTZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBlbmM6IEVuY3J5cHRpb25TZXJ2aWNlLFxuICAgICAgICBASW5qZWN0KE9BVVRIX0lORk8pIHByaXZhdGUgb2F1dGhSZXNvdXJjZTogU2VjdXJpdHlSZXNvdXJjZU1vZGVsKSB7fVxuXG4gICAgcHVibGljIGdldFNlc3Npb25TdG9yYWdlRW5jKGtleTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3Qga2V5RW5jcnlwdGVkID0gdGhpcy5lbmMuZ2V0SG1hY1NoYTI1Nih0aGlzLm9hdXRoUmVzb3VyY2VbJ3ByaXZhdGVfa2V5J10sIGtleSwgdHJ1ZSk7XG4gICAgICAgIGlmIChzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKGtleUVuY3J5cHRlZCkpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lbmMuZGVjcnlwdEFFUyh0aGlzLm9hdXRoUmVzb3VyY2VbJ2Flc19rZXknXSwgc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShrZXlFbmNyeXB0ZWQpKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcHVibGljIHNldFNlc3Npb25TdG9yYWdlRW5jKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGtleUVuY3J5cHRlZCA9IHRoaXMuZW5jLmdldEhtYWNTaGEyNTYodGhpcy5vYXV0aFJlc291cmNlWydwcml2YXRlX2tleSddLCBrZXksIHRydWUpO1xuICAgICAgICBjb25zdCB2YWx1ZUVuY3J5cHRlZCA9IHRoaXMuZW5jLmVuY3J5cHRBRVModGhpcy5vYXV0aFJlc291cmNlWydhZXNfa2V5J10sIHZhbHVlKTtcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShrZXlFbmNyeXB0ZWQsIHZhbHVlRW5jcnlwdGVkKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVtb3ZlU2Vzc2lvblN0b3JhZ2VFbmMoa2V5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qga2V5RW5jcnlwdGVkID0gdGhpcy5lbmMuZ2V0SG1hY1NoYTI1Nih0aGlzLm9hdXRoUmVzb3VyY2VbJ3ByaXZhdGVfa2V5J10sIGtleSwgdHJ1ZSk7XG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oa2V5RW5jcnlwdGVkKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0TG9jYWxTdG9yYWdlRW5jKGtleTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3Qga2V5RW5jcnlwdGVkID0gdGhpcy5lbmMuZ2V0SG1hY1NoYTI1Nih0aGlzLm9hdXRoUmVzb3VyY2VbJ3ByaXZhdGVfa2V5J10sIGtleSwgdHJ1ZSk7XG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXlFbmNyeXB0ZWQpKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZW5jLmRlY3J5cHRBRVModGhpcy5vYXV0aFJlc291cmNlWydhZXNfa2V5J10sIGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleUVuY3J5cHRlZCkpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0TG9jYWxTdG9yYWdlRW5jKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGtleUVuY3J5cHRlZCA9IHRoaXMuZW5jLmdldEhtYWNTaGEyNTYodGhpcy5vYXV0aFJlc291cmNlWydwcml2YXRlX2tleSddLCBrZXksIHRydWUpO1xuICAgICAgICBjb25zdCB2YWx1ZUVuY3J5cHRlZCA9IHRoaXMuZW5jLmVuY3J5cHRBRVModGhpcy5vYXV0aFJlc291cmNlWydhZXNfa2V5J10sIHZhbHVlKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5RW5jcnlwdGVkLCB2YWx1ZUVuY3J5cHRlZCk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbW92ZUxvY2FsU3RvcmFnZUVuYyhrZXk6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBjb25zdCBrZXlFbmNyeXB0ZWQgPSB0aGlzLmVuYy5nZXRIbWFjU2hhMjU2KHRoaXMub2F1dGhSZXNvdXJjZVsncHJpdmF0ZV9rZXknXSwga2V5LCB0cnVlKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5RW5jcnlwdGVkKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0U2Vzc2lvblN0b3JhZ2Uoa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gKGtleSkgPyBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKGtleSkgOiBudWxsO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRTZXNzaW9uU3RvcmFnZShrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKGtleSwgdmFsdWUpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW1vdmVTZXNzaW9uU3RvcmFnZShrZXk6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldExvY2FsU3RvcmFnZShrZXk6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAoa2V5KSA/IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkgOiBudWxsO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRMb2NhbFN0b3JhZ2Uoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbW92ZUxvY2FsU3RvcmFnZShrZXk6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjbGVhclNlc3Npb25TdG9yYWdlKCk6IHZvaWQge1xuICAgICAgICBzZXNzaW9uU3RvcmFnZS5jbGVhcigpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjbGVhckxvY2FsU3RvcmFnZSgpOiB2b2lkIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGNsZWFyQWxsKCk6IHZvaWQge1xuICAgICAgICBzZXNzaW9uU3RvcmFnZS5jbGVhcigpO1xuICAgICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgICB9XG5cbn1cbiJdfQ==