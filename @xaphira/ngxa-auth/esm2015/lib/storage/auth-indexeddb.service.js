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
export class AuthIndexedDBService extends IndexedDBService {
    /**
     * @param {?} injector
     */
    constructor(injector) {
        super(injector, 'xa-core', 1, '#xa-auth');
    }
    /**
     * @param {?} key
     * @param {?=} storeName
     * @return {?}
     */
    getEnc(key, storeName) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            const keyEncrypted = this.enc.getHmacSha256(this.oauthResource['private_key'], key, true);
            return ((yield this.$dbPromise).get(storeName ? storeName : '#xa-auth', keyEncrypted)).then((/**
             * @param {?} value
             * @return {?}
             */
            (value) => {
                return this.enc.decryptAES(this.oauthResource['aes_key'], value);
            }));
        });
    }
    /**
     * @param {?} key
     * @param {?} val
     * @param {?=} storeName
     * @return {?}
     */
    putEnc(key, val, storeName) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            const keyEncrypted = this.enc.getHmacSha256(this.oauthResource['private_key'], key, true);
            /** @type {?} */
            const valueEncrypted = this.enc.encryptAES(this.oauthResource['aes_key'], val);
            return (yield this.$dbPromise).put(storeName ? storeName : '#xa-auth', valueEncrypted, keyEncrypted);
        });
    }
    /**
     * @param {?} key
     * @param {?=} storeName
     * @return {?}
     */
    removeEnc(key, storeName) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            const keyEncrypted = this.enc.getHmacSha256(this.oauthResource['private_key'], key, true);
            return (yield this.$dbPromise).delete(storeName ? storeName : '#xa-auth', keyEncrypted);
        });
    }
    /**
     * @param {?} key
     * @param {?=} storeName
     * @return {?}
     */
    getOfEnc(key, storeName) {
        /** @type {?} */
        const result$ = new Subject();
        this.getEnc(key, storeName).then((/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            result$.next(value);
        }));
        return result$.asObservable();
    }
    /**
     * @param {?} key
     * @param {?} val
     * @param {?=} storeName
     * @return {?}
     */
    putOfEnc(key, val, storeName) {
        /** @type {?} */
        const result$ = new Subject();
        this.putEnc(key, val, storeName).then((/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            result$.next(value);
        }));
        return result$.asObservable();
    }
    /**
     * @param {?} key
     * @param {?=} storeName
     * @return {?}
     */
    removeOfEnc(key, storeName) {
        /** @type {?} */
        const result$ = new Subject();
        this.removeEnc(key, storeName).then((/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            result$.next(value);
        }));
        return result$.asObservable();
    }
    /**
     * @param {?} response
     * @return {?}
     */
    loginStorage(response) {
        oauthInfoModels.forEach((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            if (response[data.key]) {
                if (data.type === TypeDataOauth.OAUTH) {
                    if (data.enc) {
                        this.putEnc(data.key, data.string ? response[data.key] : JSON.stringify(response[data.key])).then();
                    }
                    else {
                        this.put(data.key, data.string ? response[data.key] : JSON.stringify(response[data.key])).then();
                    }
                }
            }
        }));
    }
    /**
     * @return {?}
     */
    logout() {
        oauthInfoModels.forEach((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            if (data.enc) {
                if (data.type === TypeDataOauth.OAUTH) {
                    this.removeEnc(data.key).then();
                }
            }
        }));
    }
    /**
     * @return {?}
     */
    isLogin() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (yield this.getEnc(oauthInfo.access_token))
                return true;
            oauthInfoModels.forEach((/**
             * @param {?} data
             * @return {?}
             */
            data => {
                this.removeEnc(data.key).then();
            }));
            return false;
        });
    }
}
AuthIndexedDBService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
AuthIndexedDBService.ctorParameters = () => [
    { type: Injector }
];
/** @nocollapse */ AuthIndexedDBService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function AuthIndexedDBService_Factory() { return new AuthIndexedDBService(i0.ɵɵinject(i0.INJECTOR)); }, token: AuthIndexedDBService, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1pbmRleGVkZGIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B4YXBoaXJhL25neGEtYXV0aC8iLCJzb3VyY2VzIjpbImxpYi9zdG9yYWdlL2F1dGgtaW5kZXhlZGRiLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRCxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUE4QixhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7QUFJeEcsTUFBTSxPQUFPLG9CQUFxQixTQUFRLGdCQUF5Qjs7OztJQUVqRSxZQUFZLFFBQWtCO1FBQzFCLEtBQUssQ0FBQyxRQUFRLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUM5QyxDQUFDOzs7Ozs7SUFFWSxNQUFNLENBQUMsR0FBRyxFQUFFLFNBQWU7OztrQkFDaEMsWUFBWSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQztZQUN6RixPQUFPLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUk7Ozs7WUFBQyxDQUFDLEtBQVUsRUFBRSxFQUFFO2dCQUN6RyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDbkUsQ0FB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RUFBQzs7OztZQVBaLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgU3RvcmVLZXkgfSBmcm9tICdpZGInO1xuaW1wb3J0IHsgSW5kZXhlZERCU2VydmljZSB9IGZyb20gJ0B4YXBoaXJhL25neGEtc3RvcmFnZSc7XG5pbXBvcnQgeyBvYXV0aEluZm8sIG9hdXRoSW5mb01vZGVscywgSW5kZXhlZERCRW5jRmFjdG9yeVNlcnZpY2UsIFR5cGVEYXRhT2F1dGggfSBmcm9tICdAeGFwaGlyYS9zaGFyZWQnO1xuaW1wb3J0IHsgQXV0aElEQiB9IGZyb20gJy4uL21vZGVscy9hdXRoLnNjaGVtYSc7XG5cbkBJbmplY3RhYmxlKHtwcm92aWRlZEluIDogJ3Jvb3QnfSlcbmV4cG9ydCBjbGFzcyBBdXRoSW5kZXhlZERCU2VydmljZSBleHRlbmRzIEluZGV4ZWREQlNlcnZpY2U8QXV0aElEQj4gaW1wbGVtZW50cyBJbmRleGVkREJFbmNGYWN0b3J5U2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoaW5qZWN0b3I6IEluamVjdG9yKSB7XG4gICAgICBzdXBlcihpbmplY3RvciwgJ3hhLWNvcmUnLCAxLCAnI3hhLWF1dGgnKTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBnZXRFbmMoa2V5LCBzdG9yZU5hbWU/OiBhbnkpOiBQcm9taXNlPEF1dGhJREJbJyN4YS1hdXRoJ11bJ3ZhbHVlJ10+IHtcbiAgICBjb25zdCBrZXlFbmNyeXB0ZWQgPSB0aGlzLmVuYy5nZXRIbWFjU2hhMjU2KHRoaXMub2F1dGhSZXNvdXJjZVsncHJpdmF0ZV9rZXknXSwga2V5LCB0cnVlKTtcbiAgICByZXR1cm4gKChhd2FpdCB0aGlzLiRkYlByb21pc2UpLmdldChzdG9yZU5hbWUgPyBzdG9yZU5hbWUgOiAnI3hhLWF1dGgnLCBrZXlFbmNyeXB0ZWQpKS50aGVuKCh2YWx1ZTogYW55KSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5lbmMuZGVjcnlwdEFFUyh0aGlzLm9hdXRoUmVzb3VyY2VbJ2Flc19rZXknXSwgdmFsdWUpO1xuICAgIH0pO1xuICB9XG4gIHB1YmxpYyBhc3luYyBwdXRFbmMoa2V5LCB2YWwsIHN0b3JlTmFtZT86IGFueSk6IFByb21pc2U8U3RvcmVLZXk8QXV0aElEQiwgYW55Pj4ge1xuICAgIGNvbnN0IGtleUVuY3J5cHRlZCA9IHRoaXMuZW5jLmdldEhtYWNTaGEyNTYodGhpcy5vYXV0aFJlc291cmNlWydwcml2YXRlX2tleSddLCBrZXksIHRydWUpO1xuICAgIGNvbnN0IHZhbHVlRW5jcnlwdGVkID0gdGhpcy5lbmMuZW5jcnlwdEFFUyh0aGlzLm9hdXRoUmVzb3VyY2VbJ2Flc19rZXknXSwgdmFsKTtcbiAgICByZXR1cm4gKGF3YWl0IHRoaXMuJGRiUHJvbWlzZSkucHV0KHN0b3JlTmFtZSA/IHN0b3JlTmFtZSA6ICcjeGEtYXV0aCcsIHZhbHVlRW5jcnlwdGVkLCBrZXlFbmNyeXB0ZWQpO1xuICB9XG4gIHB1YmxpYyBhc3luYyByZW1vdmVFbmMoa2V5LCBzdG9yZU5hbWU/OiBhbnkpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBrZXlFbmNyeXB0ZWQgPSB0aGlzLmVuYy5nZXRIbWFjU2hhMjU2KHRoaXMub2F1dGhSZXNvdXJjZVsncHJpdmF0ZV9rZXknXSwga2V5LCB0cnVlKTtcbiAgICByZXR1cm4gKGF3YWl0IHRoaXMuJGRiUHJvbWlzZSkuZGVsZXRlKHN0b3JlTmFtZSA/IHN0b3JlTmFtZSA6ICcjeGEtYXV0aCcsIGtleUVuY3J5cHRlZCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0T2ZFbmMoa2V5LCBzdG9yZU5hbWU/OiBhbnkpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGNvbnN0IHJlc3VsdCQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0PGFueT4oKTtcbiAgICB0aGlzLmdldEVuYyhrZXksIHN0b3JlTmFtZSkudGhlbigodmFsdWU6IGFueSkgPT4ge1xuICAgICAgcmVzdWx0JC5uZXh0KHZhbHVlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0JC5hc09ic2VydmFibGUoKTtcbiAgfVxuICBwdWJsaWMgcHV0T2ZFbmMoa2V5LCB2YWwsIHN0b3JlTmFtZT86IGFueSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc3QgcmVzdWx0JDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3Q8YW55PigpO1xuICAgIHRoaXMucHV0RW5jKGtleSwgdmFsLCBzdG9yZU5hbWUpLnRoZW4oKHZhbHVlOiBhbnkpID0+IHtcbiAgICAgIHJlc3VsdCQubmV4dCh2YWx1ZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdCQuYXNPYnNlcnZhYmxlKCk7XG4gIH1cbiAgcHVibGljIHJlbW92ZU9mRW5jKGtleSwgc3RvcmVOYW1lPzogYW55KTogT2JzZXJ2YWJsZTx2b2lkPiB7XG4gICAgY29uc3QgcmVzdWx0JDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3Q8YW55PigpO1xuICAgIHRoaXMucmVtb3ZlRW5jKGtleSwgc3RvcmVOYW1lKS50aGVuKCh2YWx1ZTogYW55KSA9PiB7XG4gICAgICByZXN1bHQkLm5leHQodmFsdWUpO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQkLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgcHVibGljIGxvZ2luU3RvcmFnZShyZXNwb25zZTogYW55KTogdm9pZCB7XG4gICAgb2F1dGhJbmZvTW9kZWxzLmZvckVhY2goZGF0YSA9PiB7XG4gICAgICBpZiAocmVzcG9uc2VbZGF0YS5rZXldKSB7XG4gICAgICAgIGlmIChkYXRhLnR5cGUgPT09IFR5cGVEYXRhT2F1dGguT0FVVEgpIHtcbiAgICAgICAgICBpZiAoZGF0YS5lbmMpIHtcbiAgICAgICAgICAgIHRoaXMucHV0RW5jKGRhdGEua2V5LCBkYXRhLnN0cmluZyA/IHJlc3BvbnNlW2RhdGEua2V5XSA6IEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlW2RhdGEua2V5XSkpLnRoZW4oKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wdXQoZGF0YS5rZXksIGRhdGEuc3RyaW5nID8gcmVzcG9uc2VbZGF0YS5rZXldIDogSlNPTi5zdHJpbmdpZnkocmVzcG9uc2VbZGF0YS5rZXldKSkudGhlbigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGxvZ291dCgpOiB2b2lkIHtcbiAgICBvYXV0aEluZm9Nb2RlbHMuZm9yRWFjaChkYXRhID0+IHtcbiAgICAgIGlmIChkYXRhLmVuYykge1xuICAgICAgICBpZiAoZGF0YS50eXBlID09PSBUeXBlRGF0YU9hdXRoLk9BVVRIKSB7XG4gICAgICAgICAgdGhpcy5yZW1vdmVFbmMoZGF0YS5rZXkpLnRoZW4oKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIGlzTG9naW4oKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICBpZiAoYXdhaXQgdGhpcy5nZXRFbmMob2F1dGhJbmZvLmFjY2Vzc190b2tlbikpXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICBvYXV0aEluZm9Nb2RlbHMuZm9yRWFjaChkYXRhID0+IHtcbiAgICAgICAgdGhpcy5yZW1vdmVFbmMoZGF0YS5rZXkpLnRoZW4oKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbn1cbiJdfQ==