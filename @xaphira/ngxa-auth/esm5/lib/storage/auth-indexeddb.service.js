/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Injector } from '@angular/core';
import { Subject } from 'rxjs';
import { IndexedDBService } from '@xaphira/ngxa-storage';
import { oauthInfo, oauthInfoModels, TypeDataOauth } from '@xaphira/shared';
import * as i0 from "@angular/core";
var AuthIndexedDBService = /** @class */ (function (_super) {
    tslib_1.__extends(AuthIndexedDBService, _super);
    function AuthIndexedDBService(injector) {
        return _super.call(this, injector, 'xa-core', 1, '#xa-auth') || this;
    }
    /**
     * @param {?} key
     * @param {?=} storeName
     * @return {?}
     */
    AuthIndexedDBService.prototype.getEnc = /**
     * @param {?} key
     * @param {?=} storeName
     * @return {?}
     */
    function (key, storeName) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var keyEncrypted;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        keyEncrypted = this.enc.getHmacSha256(this.oauthResource['private_key'], key, true);
                        return [4 /*yield*/, this.$dbPromise];
                    case 1: return [2 /*return*/, ((_a.sent()).get(storeName ? storeName : '#xa-auth', keyEncrypted)).then((/**
                         * @param {?} value
                         * @return {?}
                         */
                        function (value) {
                            return _this.enc.decryptAES(_this.oauthResource['aes_key'], value);
                        }))];
                }
            });
        });
    };
    /**
     * @param {?} key
     * @param {?} val
     * @param {?=} storeName
     * @return {?}
     */
    AuthIndexedDBService.prototype.putEnc = /**
     * @param {?} key
     * @param {?} val
     * @param {?=} storeName
     * @return {?}
     */
    function (key, val, storeName) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var keyEncrypted, valueEncrypted;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        keyEncrypted = this.enc.getHmacSha256(this.oauthResource['private_key'], key, true);
                        valueEncrypted = this.enc.encryptAES(this.oauthResource['aes_key'], val);
                        return [4 /*yield*/, this.$dbPromise];
                    case 1: return [2 /*return*/, (_a.sent()).put(storeName ? storeName : '#xa-auth', valueEncrypted, keyEncrypted)];
                }
            });
        });
    };
    /**
     * @param {?} key
     * @param {?=} storeName
     * @return {?}
     */
    AuthIndexedDBService.prototype.removeEnc = /**
     * @param {?} key
     * @param {?=} storeName
     * @return {?}
     */
    function (key, storeName) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var keyEncrypted;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        keyEncrypted = this.enc.getHmacSha256(this.oauthResource['private_key'], key, true);
                        return [4 /*yield*/, this.$dbPromise];
                    case 1: return [2 /*return*/, (_a.sent()).delete(storeName ? storeName : '#xa-auth', keyEncrypted)];
                }
            });
        });
    };
    /**
     * @param {?} key
     * @param {?=} storeName
     * @return {?}
     */
    AuthIndexedDBService.prototype.getOfEnc = /**
     * @param {?} key
     * @param {?=} storeName
     * @return {?}
     */
    function (key, storeName) {
        /** @type {?} */
        var result$ = new Subject();
        this.getEnc(key, storeName).then((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            result$.next(value);
        }));
        return result$.asObservable();
    };
    /**
     * @param {?} key
     * @param {?} val
     * @param {?=} storeName
     * @return {?}
     */
    AuthIndexedDBService.prototype.putOfEnc = /**
     * @param {?} key
     * @param {?} val
     * @param {?=} storeName
     * @return {?}
     */
    function (key, val, storeName) {
        /** @type {?} */
        var result$ = new Subject();
        this.putEnc(key, val, storeName).then((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            result$.next(value);
        }));
        return result$.asObservable();
    };
    /**
     * @param {?} key
     * @param {?=} storeName
     * @return {?}
     */
    AuthIndexedDBService.prototype.removeOfEnc = /**
     * @param {?} key
     * @param {?=} storeName
     * @return {?}
     */
    function (key, storeName) {
        /** @type {?} */
        var result$ = new Subject();
        this.removeEnc(key, storeName).then((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            result$.next(value);
        }));
        return result$.asObservable();
    };
    /**
     * @param {?} response
     * @return {?}
     */
    AuthIndexedDBService.prototype.loginStorage = /**
     * @param {?} response
     * @return {?}
     */
    function (response) {
        var _this = this;
        oauthInfoModels.forEach((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            if (response[data.key]) {
                if (data.type === TypeDataOauth.OAUTH) {
                    if (data.enc) {
                        _this.putEnc(data.key, data.string ? response[data.key] : JSON.stringify(response[data.key])).then();
                    }
                    else {
                        _this.put(data.key, data.string ? response[data.key] : JSON.stringify(response[data.key])).then();
                    }
                }
            }
        }));
    };
    /**
     * @return {?}
     */
    AuthIndexedDBService.prototype.logout = /**
     * @return {?}
     */
    function () {
        var _this = this;
        oauthInfoModels.forEach((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            if (data.enc) {
                if (data.type === TypeDataOauth.OAUTH) {
                    _this.removeEnc(data.key).then();
                }
            }
        }));
    };
    /**
     * @return {?}
     */
    AuthIndexedDBService.prototype.isLogin = /**
     * @return {?}
     */
    function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getEnc(oauthInfo.access_token)];
                    case 1:
                        if (_a.sent())
                            return [2 /*return*/, true];
                        oauthInfoModels.forEach((/**
                         * @param {?} data
                         * @return {?}
                         */
                        function (data) {
                            _this.removeEnc(data.key).then();
                        }));
                        return [2 /*return*/, false];
                }
            });
        });
    };
    AuthIndexedDBService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    AuthIndexedDBService.ctorParameters = function () { return [
        { type: Injector }
    ]; };
    /** @nocollapse */ AuthIndexedDBService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function AuthIndexedDBService_Factory() { return new AuthIndexedDBService(i0.ɵɵinject(i0.INJECTOR)); }, token: AuthIndexedDBService, providedIn: "root" });
    return AuthIndexedDBService;
}(IndexedDBService));
export { AuthIndexedDBService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1pbmRleGVkZGIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B4YXBoaXJhL25neGEtYXV0aC8iLCJzb3VyY2VzIjpbImxpYi9zdG9yYWdlL2F1dGgtaW5kZXhlZGRiLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRCxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUE4QixhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7QUFHeEc7SUFDMEMsZ0RBQXlCO0lBRWpFLDhCQUFZLFFBQWtCO2VBQzFCLGtCQUFNLFFBQVEsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLFVBQVUsQ0FBQztJQUM3QyxDQUFDOzs7Ozs7SUFFWSxxQ0FBTTs7Ozs7SUFBbkIsVUFBb0IsR0FBRyxFQUFFLFNBQWU7Ozs7Ozs7d0JBQ2hDLFlBQVksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUM7d0JBQ2hGLHFCQUFNLElBQUksQ0FBQyxVQUFVLEVBQUE7NEJBQTlCLHNCQUFPLENBQUMsQ0FBQyxTQUFxQixDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJOzs7O3dCQUFDLFVBQUMsS0FBVTs0QkFDckcsT0FBTyxLQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxLQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO3dCQUNuRSxD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QUFDLENBQUMsSUFBSSxFQUFFLENBQUM7d0JBQ2xDLENBQUMsRUFBQyxDQUFDO3dCQUNILHNCQUFPLEtBQUssRUFBQzs7OztLQUNoQjs7Z0JBNUVGLFVBQVUsU0FBQyxFQUFDLFVBQVUsRUFBRyxNQUFNLEVBQUM7Ozs7Z0JBUFosUUFBUTs7OytCQUE3QjtDQXFGQyxBQTlFRCxDQUMwQyxnQkFBZ0IsR0E2RXpEO1NBN0VZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTdG9yZUtleSB9IGZyb20gJ2lkYic7XG5pbXBvcnQgeyBJbmRleGVkREJTZXJ2aWNlIH0gZnJvbSAnQHhhcGhpcmEvbmd4YS1zdG9yYWdlJztcbmltcG9ydCB7IG9hdXRoSW5mbywgb2F1dGhJbmZvTW9kZWxzLCBJbmRleGVkREJFbmNGYWN0b3J5U2VydmljZSwgVHlwZURhdGFPYXV0aCB9IGZyb20gJ0B4YXBoaXJhL3NoYXJlZCc7XG5pbXBvcnQgeyBBdXRoSURCIH0gZnJvbSAnLi4vbW9kZWxzL2F1dGguc2NoZW1hJztcblxuQEluamVjdGFibGUoe3Byb3ZpZGVkSW4gOiAncm9vdCd9KVxuZXhwb3J0IGNsYXNzIEF1dGhJbmRleGVkREJTZXJ2aWNlIGV4dGVuZHMgSW5kZXhlZERCU2VydmljZTxBdXRoSURCPiBpbXBsZW1lbnRzIEluZGV4ZWREQkVuY0ZhY3RvcnlTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcihpbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgICAgIHN1cGVyKGluamVjdG9yLCAneGEtY29yZScsIDEsICcjeGEtYXV0aCcpO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIGdldEVuYyhrZXksIHN0b3JlTmFtZT86IGFueSk6IFByb21pc2U8QXV0aElEQlsnI3hhLWF1dGgnXVsndmFsdWUnXT4ge1xuICAgIGNvbnN0IGtleUVuY3J5cHRlZCA9IHRoaXMuZW5jLmdldEhtYWNTaGEyNTYodGhpcy5vYXV0aFJlc291cmNlWydwcml2YXRlX2tleSddLCBrZXksIHRydWUpO1xuICAgIHJldHVybiAoKGF3YWl0IHRoaXMuJGRiUHJvbWlzZSkuZ2V0KHN0b3JlTmFtZSA/IHN0b3JlTmFtZSA6ICcjeGEtYXV0aCcsIGtleUVuY3J5cHRlZCkpLnRoZW4oKHZhbHVlOiBhbnkpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmVuYy5kZWNyeXB0QUVTKHRoaXMub2F1dGhSZXNvdXJjZVsnYWVzX2tleSddLCB2YWx1ZSk7XG4gICAgfSk7XG4gIH1cbiAgcHVibGljIGFzeW5jIHB1dEVuYyhrZXksIHZhbCwgc3RvcmVOYW1lPzogYW55KTogUHJvbWlzZTxTdG9yZUtleTxBdXRoSURCLCBhbnk+PiB7XG4gICAgY29uc3Qga2V5RW5jcnlwdGVkID0gdGhpcy5lbmMuZ2V0SG1hY1NoYTI1Nih0aGlzLm9hdXRoUmVzb3VyY2VbJ3ByaXZhdGVfa2V5J10sIGtleSwgdHJ1ZSk7XG4gICAgY29uc3QgdmFsdWVFbmNyeXB0ZWQgPSB0aGlzLmVuYy5lbmNyeXB0QUVTKHRoaXMub2F1dGhSZXNvdXJjZVsnYWVzX2tleSddLCB2YWwpO1xuICAgIHJldHVybiAoYXdhaXQgdGhpcy4kZGJQcm9taXNlKS5wdXQoc3RvcmVOYW1lID8gc3RvcmVOYW1lIDogJyN4YS1hdXRoJywgdmFsdWVFbmNyeXB0ZWQsIGtleUVuY3J5cHRlZCk7XG4gIH1cbiAgcHVibGljIGFzeW5jIHJlbW92ZUVuYyhrZXksIHN0b3JlTmFtZT86IGFueSk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IGtleUVuY3J5cHRlZCA9IHRoaXMuZW5jLmdldEhtYWNTaGEyNTYodGhpcy5vYXV0aFJlc291cmNlWydwcml2YXRlX2tleSddLCBrZXksIHRydWUpO1xuICAgIHJldHVybiAoYXdhaXQgdGhpcy4kZGJQcm9taXNlKS5kZWxldGUoc3RvcmVOYW1lID8gc3RvcmVOYW1lIDogJyN4YS1hdXRoJywga2V5RW5jcnlwdGVkKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRPZkVuYyhrZXksIHN0b3JlTmFtZT86IGFueSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc3QgcmVzdWx0JDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3Q8YW55PigpO1xuICAgIHRoaXMuZ2V0RW5jKGtleSwgc3RvcmVOYW1lKS50aGVuKCh2YWx1ZTogYW55KSA9PiB7XG4gICAgICByZXN1bHQkLm5leHQodmFsdWUpO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQkLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG4gIHB1YmxpYyBwdXRPZkVuYyhrZXksIHZhbCwgc3RvcmVOYW1lPzogYW55KTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCByZXN1bHQkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdDxhbnk+KCk7XG4gICAgdGhpcy5wdXRFbmMoa2V5LCB2YWwsIHN0b3JlTmFtZSkudGhlbigodmFsdWU6IGFueSkgPT4ge1xuICAgICAgcmVzdWx0JC5uZXh0KHZhbHVlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0JC5hc09ic2VydmFibGUoKTtcbiAgfVxuICBwdWJsaWMgcmVtb3ZlT2ZFbmMoa2V5LCBzdG9yZU5hbWU/OiBhbnkpOiBPYnNlcnZhYmxlPHZvaWQ+IHtcbiAgICBjb25zdCByZXN1bHQkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdDxhbnk+KCk7XG4gICAgdGhpcy5yZW1vdmVFbmMoa2V5LCBzdG9yZU5hbWUpLnRoZW4oKHZhbHVlOiBhbnkpID0+IHtcbiAgICAgIHJlc3VsdCQubmV4dCh2YWx1ZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdCQuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICBwdWJsaWMgbG9naW5TdG9yYWdlKHJlc3BvbnNlOiBhbnkpOiB2b2lkIHtcbiAgICBvYXV0aEluZm9Nb2RlbHMuZm9yRWFjaChkYXRhID0+IHtcbiAgICAgIGlmIChyZXNwb25zZVtkYXRhLmtleV0pIHtcbiAgICAgICAgaWYgKGRhdGEudHlwZSA9PT0gVHlwZURhdGFPYXV0aC5PQVVUSCkge1xuICAgICAgICAgIGlmIChkYXRhLmVuYykge1xuICAgICAgICAgICAgdGhpcy5wdXRFbmMoZGF0YS5rZXksIGRhdGEuc3RyaW5nID8gcmVzcG9uc2VbZGF0YS5rZXldIDogSlNPTi5zdHJpbmdpZnkocmVzcG9uc2VbZGF0YS5rZXldKSkudGhlbigpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnB1dChkYXRhLmtleSwgZGF0YS5zdHJpbmcgPyByZXNwb25zZVtkYXRhLmtleV0gOiBKU09OLnN0cmluZ2lmeShyZXNwb25zZVtkYXRhLmtleV0pKS50aGVuKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgbG9nb3V0KCk6IHZvaWQge1xuICAgIG9hdXRoSW5mb01vZGVscy5mb3JFYWNoKGRhdGEgPT4ge1xuICAgICAgaWYgKGRhdGEuZW5jKSB7XG4gICAgICAgIGlmIChkYXRhLnR5cGUgPT09IFR5cGVEYXRhT2F1dGguT0FVVEgpIHtcbiAgICAgICAgICB0aGlzLnJlbW92ZUVuYyhkYXRhLmtleSkudGhlbigpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgaXNMb2dpbigpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgIGlmIChhd2FpdCB0aGlzLmdldEVuYyhvYXV0aEluZm8uYWNjZXNzX3Rva2VuKSlcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIG9hdXRoSW5mb01vZGVscy5mb3JFYWNoKGRhdGEgPT4ge1xuICAgICAgICB0aGlzLnJlbW92ZUVuYyhkYXRhLmtleSkudGhlbigpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxufVxuIl19