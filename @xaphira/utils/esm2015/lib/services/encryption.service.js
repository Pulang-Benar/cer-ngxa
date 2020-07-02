/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
export class EncryptionService {
    constructor() {
        this.ivSize = 128;
    }
    /**
     * @param {?} secret
     * @param {?} message
     * @param {?=} hex
     * @return {?}
     */
    getHmacSha256(secret, message, hex) {
        /** @type {?} */
        const hash = CryptoJS.HmacSHA256(message, secret);
        if (hex)
            return CryptoJS.enc.Hex.stringify(hash).toUpperCase();
        return CryptoJS.enc.Base64.stringify(hash);
    }
    /**
     * @param {?} secretKey
     * @param {?} message
     * @return {?}
     */
    encryptAES(secretKey, message) {
        /** @type {?} */
        const iv = CryptoJS.lib.WordArray.random(this.ivSize / 8);
        /** @type {?} */
        const key = CryptoJS.enc.Utf8.parse(secretKey);
        /** @type {?} */
        const encrypted = CryptoJS.AES.encrypt(message, key, {
            iv: iv,
            padding: CryptoJS.pad.Pkcs7,
            mode: CryptoJS.mode.CBC,
        });
        /** @type {?} */
        const encryptMessage = iv.toString() + encrypted.toString();
        return encryptMessage;
    }
    /**
     * @param {?} secretKey
     * @param {?} encryptMessage
     * @return {?}
     */
    decryptAES(secretKey, encryptMessage) {
        if (encryptMessage) {
            /** @type {?} */
            const iv = CryptoJS.enc.Hex.parse(encryptMessage.substr(0, 32));
            /** @type {?} */
            const key = CryptoJS.enc.Utf8.parse(secretKey);
            /** @type {?} */
            const encrypted = encryptMessage.substring(32);
            /** @type {?} */
            const decrypted = CryptoJS.AES.decrypt(encrypted, key, {
                iv: iv,
                padding: CryptoJS.pad.Pkcs7,
                mode: CryptoJS.mode.CBC,
            });
            try {
                return decrypted.toString(CryptoJS.enc.Utf8);
            }
            catch (error) {
                return null;
            }
        }
        return null;
    }
}
EncryptionService.decorators = [
    { type: Injectable }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    EncryptionService.prototype.ivSize;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5jcnlwdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHhhcGhpcmEvdXRpbHMvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZW5jcnlwdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sS0FBSyxRQUFRLE1BQU0sV0FBVyxDQUFDO0FBR3RDLE1BQU0sT0FBTyxpQkFBaUI7SUFEOUI7UUFHWSxXQUFNLEdBQVcsR0FBRyxDQUFDO0lBd0NqQyxDQUFDOzs7Ozs7O0lBdENVLGFBQWEsQ0FBQyxNQUFjLEVBQUUsT0FBZSxFQUFFLEdBQWE7O2NBQ3pELElBQUksR0FBRyxRQUFRLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUM7UUFDakQsSUFBSSxHQUFHO1lBQ0gsT0FBTyxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDMUQsT0FBTyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7Ozs7O0lBRU0sVUFBVSxDQUFDLFNBQWlCLEVBQUUsT0FBZTs7Y0FDMUMsRUFBRSxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQzs7Y0FDbkQsR0FBRyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUM7O2NBQ3hDLFNBQVMsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFO1lBQ2pELEVBQUUsRUFBRSxFQUFFO1lBQ04sT0FBTyxFQUFFLFFBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSztZQUMzQixJQUFJLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHO1NBQzFCLENBQUM7O2NBQ0ksY0FBYyxHQUFHLEVBQUUsQ0FBQyxRQUFRLEVBQUUsR0FBRyxTQUFTLENBQUMsUUFBUSxFQUFFO1FBQzNELE9BQU8sY0FBYyxDQUFDO0lBQzFCLENBQUM7Ozs7OztJQUVNLFVBQVUsQ0FBQyxTQUFpQixFQUFFLGNBQXNCO1FBQ3ZELElBQUksY0FBYyxFQUFFOztrQkFDVixFQUFFLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDOztrQkFDekQsR0FBRyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUM7O2tCQUN4QyxTQUFTLEdBQUcsY0FBYyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUM7O2tCQUN4QyxTQUFTLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLEdBQUcsRUFBRTtnQkFDckQsRUFBRSxFQUFFLEVBQUU7Z0JBQ04sT0FBTyxFQUFFLFFBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSztnQkFDM0IsSUFBSSxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRzthQUN4QixDQUFDO1lBQ0YsSUFBSTtnQkFDQSxPQUFPLFNBQVMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNoRDtZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNaLE9BQU8sSUFBSSxDQUFDO2FBQ2Y7U0FDSjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7OztZQXpDSixVQUFVOzs7Ozs7O0lBR1AsbUNBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgQ3J5cHRvSlMgZnJvbSAnY3J5cHRvLWpzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEVuY3J5cHRpb25TZXJ2aWNlIHtcblxuICAgIHByaXZhdGUgaXZTaXplOiBudW1iZXIgPSAxMjg7XG5cbiAgICBwdWJsaWMgZ2V0SG1hY1NoYTI1NihzZWNyZXQ6IHN0cmluZywgbWVzc2FnZTogc3RyaW5nLCBoZXg/OiBib29sZWFuKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgaGFzaCA9IENyeXB0b0pTLkhtYWNTSEEyNTYobWVzc2FnZSwgc2VjcmV0KTtcbiAgICAgICAgaWYgKGhleClcbiAgICAgICAgICAgIHJldHVybiBDcnlwdG9KUy5lbmMuSGV4LnN0cmluZ2lmeShoYXNoKS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICByZXR1cm4gQ3J5cHRvSlMuZW5jLkJhc2U2NC5zdHJpbmdpZnkoaGFzaCk7XG4gICAgfVxuXG4gICAgcHVibGljIGVuY3J5cHRBRVMoc2VjcmV0S2V5OiBzdHJpbmcsIG1lc3NhZ2U6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IGl2ID0gQ3J5cHRvSlMubGliLldvcmRBcnJheS5yYW5kb20odGhpcy5pdlNpemUgLyA4KTtcbiAgICAgICAgY29uc3Qga2V5ID0gQ3J5cHRvSlMuZW5jLlV0ZjgucGFyc2Uoc2VjcmV0S2V5KTtcbiAgICAgICAgY29uc3QgZW5jcnlwdGVkID0gQ3J5cHRvSlMuQUVTLmVuY3J5cHQobWVzc2FnZSwga2V5LCB7XG4gICAgICAgICAgICBpdjogaXYsXG4gICAgICAgICAgICBwYWRkaW5nOiBDcnlwdG9KUy5wYWQuUGtjczcsXG4gICAgICAgICAgICBtb2RlOiBDcnlwdG9KUy5tb2RlLkNCQyxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGVuY3J5cHRNZXNzYWdlID0gaXYudG9TdHJpbmcoKSArIGVuY3J5cHRlZC50b1N0cmluZygpO1xuICAgICAgICByZXR1cm4gZW5jcnlwdE1lc3NhZ2U7XG4gICAgfVxuXG4gICAgcHVibGljIGRlY3J5cHRBRVMoc2VjcmV0S2V5OiBzdHJpbmcsIGVuY3J5cHRNZXNzYWdlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICBpZiAoZW5jcnlwdE1lc3NhZ2UpIHtcbiAgICAgICAgICAgIGNvbnN0IGl2ID0gQ3J5cHRvSlMuZW5jLkhleC5wYXJzZShlbmNyeXB0TWVzc2FnZS5zdWJzdHIoMCwgMzIpKTtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IENyeXB0b0pTLmVuYy5VdGY4LnBhcnNlKHNlY3JldEtleSk7XG4gICAgICAgICAgICBjb25zdCBlbmNyeXB0ZWQgPSBlbmNyeXB0TWVzc2FnZS5zdWJzdHJpbmcoMzIpO1xuICAgICAgICAgICAgY29uc3QgZGVjcnlwdGVkID0gQ3J5cHRvSlMuQUVTLmRlY3J5cHQoZW5jcnlwdGVkLCBrZXksIHtcbiAgICAgICAgICAgICAgaXY6IGl2LFxuICAgICAgICAgICAgICBwYWRkaW5nOiBDcnlwdG9KUy5wYWQuUGtjczcsXG4gICAgICAgICAgICAgIG1vZGU6IENyeXB0b0pTLm1vZGUuQ0JDLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJldHVybiBkZWNyeXB0ZWQudG9TdHJpbmcoQ3J5cHRvSlMuZW5jLlV0ZjgpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbn1cbiJdfQ==