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
export class StorageMaskService {
    /**
     * @param {?} enc
     * @param {?} oauthResource
     */
    constructor(enc, oauthResource) {
        this.enc = enc;
        this.oauthResource = oauthResource;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    getSessionStorageEnc(key) {
        /** @type {?} */
        const keyEncrypted = this.enc.getHmacSha256(this.oauthResource['private_key'], key, true);
        if (sessionStorage.getItem(keyEncrypted))
            return this.enc.decryptAES(this.oauthResource['aes_key'], sessionStorage.getItem(keyEncrypted));
        else
            return null;
    }
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    setSessionStorageEnc(key, value) {
        /** @type {?} */
        const keyEncrypted = this.enc.getHmacSha256(this.oauthResource['private_key'], key, true);
        /** @type {?} */
        const valueEncrypted = this.enc.encryptAES(this.oauthResource['aes_key'], value);
        sessionStorage.setItem(keyEncrypted, valueEncrypted);
    }
    /**
     * @param {?} key
     * @return {?}
     */
    removeSessionStorageEnc(key) {
        /** @type {?} */
        const keyEncrypted = this.enc.getHmacSha256(this.oauthResource['private_key'], key, true);
        sessionStorage.removeItem(keyEncrypted);
    }
    /**
     * @param {?} key
     * @return {?}
     */
    getLocalStorageEnc(key) {
        /** @type {?} */
        const keyEncrypted = this.enc.getHmacSha256(this.oauthResource['private_key'], key, true);
        if (localStorage.getItem(keyEncrypted))
            return this.enc.decryptAES(this.oauthResource['aes_key'], localStorage.getItem(keyEncrypted));
        else
            return null;
    }
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    setLocalStorageEnc(key, value) {
        /** @type {?} */
        const keyEncrypted = this.enc.getHmacSha256(this.oauthResource['private_key'], key, true);
        /** @type {?} */
        const valueEncrypted = this.enc.encryptAES(this.oauthResource['aes_key'], value);
        localStorage.setItem(keyEncrypted, valueEncrypted);
    }
    /**
     * @param {?} key
     * @return {?}
     */
    removeLocalStorageEnc(key) {
        /** @type {?} */
        const keyEncrypted = this.enc.getHmacSha256(this.oauthResource['private_key'], key, true);
        localStorage.removeItem(keyEncrypted);
    }
    /**
     * @param {?} key
     * @return {?}
     */
    getSessionStorage(key) {
        return (key) ? sessionStorage.getItem(key) : null;
    }
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    setSessionStorage(key, value) {
        sessionStorage.setItem(key, value);
    }
    /**
     * @param {?} key
     * @return {?}
     */
    removeSessionStorage(key) {
        sessionStorage.removeItem(key);
    }
    /**
     * @param {?} key
     * @return {?}
     */
    getLocalStorage(key) {
        return (key) ? localStorage.getItem(key) : null;
    }
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    setLocalStorage(key, value) {
        localStorage.setItem(key, value);
    }
    /**
     * @param {?} key
     * @return {?}
     */
    removeLocalStorage(key) {
        localStorage.removeItem(key);
    }
    /**
     * @return {?}
     */
    clearSessionStorage() {
        sessionStorage.clear();
    }
    /**
     * @return {?}
     */
    clearLocalStorage() {
        localStorage.clear();
    }
    /**
     * @return {?}
     */
    clearAll() {
        sessionStorage.clear();
        localStorage.clear();
    }
}
StorageMaskService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
StorageMaskService.ctorParameters = () => [
    { type: EncryptionService },
    { type: undefined, decorators: [{ type: Inject, args: [OAUTH_INFO,] }] }
];
/** @nocollapse */ StorageMaskService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function StorageMaskService_Factory() { return new StorageMaskService(i0.ɵɵinject(i1.EncryptionService), i0.ɵɵinject(i2.OAUTH_INFO)); }, token: StorageMaskService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmFnZS1tYXNrLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AeGFwaGlyYS9uZ3hhLXN0b3JhZ2UvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvc3RvcmFnZS1tYXNrLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBeUIsVUFBVSxFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7QUFNcEUsTUFBTSxPQUFPLGtCQUFrQjs7Ozs7SUFFM0IsWUFBc0IsR0FBc0IsRUFDWixhQUFvQztRQUQ5QyxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUNaLGtCQUFhLEdBQWIsYUFBYSxDQUF1QjtJQUFHLENBQUM7Ozs7O0lBRWpFLG9CQUFvQixDQUFDLEdBQVc7O2NBQzdCLFlBQVksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUM7UUFDekYsSUFBSSxjQUFjLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQztZQUNwQyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEVBQUUsY0FBYyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDOztZQUVoRyxPQUFPLElBQUksQ0FBQztJQUNwQixDQUFDOzs7Ozs7SUFFTSxvQkFBb0IsQ0FBQyxHQUFXLEVBQUUsS0FBYTs7Y0FDNUMsWUFBWSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQzs7Y0FDbkYsY0FBYyxH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UUFDcEIsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFFTSxRQUFRO1FBQ1gsY0FBYyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3ZCLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN6QixDQUFDOzs7WUFqRkosVUFBVSxTQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCOzs7O1lBTlEsaUJBQWlCOzRDQVVqQixNQUFNLFNBQUMsVUFBVTs7Ozs7Ozs7SUFEVixpQ0FBZ0M7Ozs7O0lBQ3hDLDJDQUFnRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRW5jcnlwdGlvblNlcnZpY2UgfSBmcm9tICdAeGFwaGlyYS91dGlscyc7XG5pbXBvcnQgeyBTZWN1cml0eVJlc291cmNlTW9kZWwsIE9BVVRIX0lORk8gfSBmcm9tICdAeGFwaGlyYS9zaGFyZWQnO1xuaW1wb3J0IHsgU3RvcmFnZUZhY3RvcnlTZXJ2aWNlIH0gZnJvbSAnLi9zdG9yYWdlLWZhY3Rvcnkuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFN0b3JhZ2VNYXNrU2VydmljZSBpbXBsZW1lbnRzIFN0b3JhZ2VGYWN0b3J5U2VydmljZSB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgZW5jOiBFbmNyeXB0aW9uU2VydmljZSxcbiAgICAgICAgQEluamVjdChPQVVUSF9JTkZPKSBwcml2YXRlIG9hdXRoUmVzb3VyY2U6IFNlY3VyaXR5UmVzb3VyY2VNb2RlbCkge31cblxuICAgIHB1YmxpYyBnZXRTZXNzaW9uU3RvcmFnZUVuYyhrZXk6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IGtleUVuY3J5cHRlZCA9IHRoaXMuZW5jLmdldEhtYWNTaGEyNTYodGhpcy5vYXV0aFJlc291cmNlWydwcml2YXRlX2tleSddLCBrZXksIHRydWUpO1xuICAgICAgICBpZiAoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShrZXlFbmNyeXB0ZWQpKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZW5jLmRlY3J5cHRBRVModGhpcy5vYXV0aFJlc291cmNlWydhZXNfa2V5J10sIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oa2V5RW5jcnlwdGVkKSk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRTZXNzaW9uU3RvcmFnZUVuYyhrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBjb25zdCBrZXlFbmNyeXB0ZWQgPSB0aGlzLmVuYy5nZXRIbWFjU2hhMjU2KHRoaXMub2F1dGhSZXNvdXJjZVsncHJpdmF0ZV9rZXknXSwga2V5LCB0cnVlKTtcbiAgICAgICAgY29uc3QgdmFsdWVFbmNyeXB0ZWQgPSB0aGlzLmVuYy5lbmNyeXB0QUVTKHRoaXMub2F1dGhSZXNvdXJjZVsnYWVzX2tleSddLCB2YWx1ZSk7XG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oa2V5RW5jcnlwdGVkLCB2YWx1ZUVuY3J5cHRlZCk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbW92ZVNlc3Npb25TdG9yYWdlRW5jKGtleTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGtleUVuY3J5cHRlZCA9IHRoaXMuZW5jLmdldEhtYWNTaGEyNTYodGhpcy5vYXV0aFJlc291cmNlWydwcml2YXRlX2tleSddLCBrZXksIHRydWUpO1xuICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKGtleUVuY3J5cHRlZCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldExvY2FsU3RvcmFnZUVuYyhrZXk6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IGtleUVuY3J5cHRlZCA9IHRoaXMuZW5jLmdldEhtYWNTaGEyNTYodGhpcy5vYXV0aFJlc291cmNlWydwcml2YXRlX2tleSddLCBrZXksIHRydWUpO1xuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5RW5jcnlwdGVkKSlcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVuYy5kZWNyeXB0QUVTKHRoaXMub2F1dGhSZXNvdXJjZVsnYWVzX2tleSddLCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXlFbmNyeXB0ZWQpKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcHVibGljIHNldExvY2FsU3RvcmFnZUVuYyhrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBjb25zdCBrZXlFbmNyeXB0ZWQgPSB0aGlzLmVuYy5nZXRIbWFjU2hhMjU2KHRoaXMub2F1dGhSZXNvdXJjZVsncHJpdmF0ZV9rZXknXSwga2V5LCB0cnVlKTtcbiAgICAgICAgY29uc3QgdmFsdWVFbmNyeXB0ZWQgPSB0aGlzLmVuYy5lbmNyeXB0QUVTKHRoaXMub2F1dGhSZXNvdXJjZVsnYWVzX2tleSddLCB2YWx1ZSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleUVuY3J5cHRlZCwgdmFsdWVFbmNyeXB0ZWQpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW1vdmVMb2NhbFN0b3JhZ2VFbmMoa2V5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qga2V5RW5jcnlwdGVkID0gdGhpcy5lbmMuZ2V0SG1hY1NoYTI1Nih0aGlzLm9hdXRoUmVzb3VyY2VbJ3ByaXZhdGVfa2V5J10sIGtleSwgdHJ1ZSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleUVuY3J5cHRlZCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFNlc3Npb25TdG9yYWdlKGtleTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIChrZXkpID8gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShrZXkpIDogbnVsbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0U2Vzc2lvblN0b3JhZ2Uoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShrZXksIHZhbHVlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVtb3ZlU2Vzc2lvblN0b3JhZ2Uoa2V5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRMb2NhbFN0b3JhZ2Uoa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gKGtleSkgPyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpIDogbnVsbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0TG9jYWxTdG9yYWdlKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgdmFsdWUpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW1vdmVMb2NhbFN0b3JhZ2Uoa2V5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2xlYXJTZXNzaW9uU3RvcmFnZSgpOiB2b2lkIHtcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2UuY2xlYXIoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2xlYXJMb2NhbFN0b3JhZ2UoKTogdm9pZCB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjbGVhckFsbCgpOiB2b2lkIHtcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2UuY2xlYXIoKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gICAgfVxuXG59XG4iXX0=