/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
var EncryptionService = /** @class */ (function () {
    function EncryptionService() {
        this.ivSize = 128;
    }
    /**
     * @param {?} secret
     * @param {?} message
     * @param {?=} hex
     * @return {?}
     */
    EncryptionService.prototype.getHmacSha256 = /**
     * @param {?} secret
     * @param {?} message
     * @param {?=} hex
     * @return {?}
     */
    function (secret, message, hex) {
        /** @type {?} */
        var hash = CryptoJS.HmacSHA256(message, secret);
        if (hex)
            return CryptoJS.enc.Hex.stringify(hash).toUpperCase();
        return CryptoJS.enc.Base64.stringify(hash);
    };
    /**
     * @param {?} secretKey
     * @param {?} message
     * @return {?}
     */
    EncryptionService.prototype.encryptAES = /**
     * @param {?} secretKey
     * @param {?} message
     * @return {?}
     */
    function (secretKey, message) {
        /** @type {?} */
        var iv = CryptoJS.lib.WordArray.random(this.ivSize / 8);
        /** @type {?} */
        var key = CryptoJS.enc.Utf8.parse(secretKey);
        /** @type {?} */
        var encrypted = CryptoJS.AES.encrypt(message, key, {
            iv: iv,
            padding: CryptoJS.pad.Pkcs7,
            mode: CryptoJS.mode.CBC,
        });
        /** @type {?} */
        var encryptMessage = iv.toString() + encrypted.toString();
        return encryptMessage;
    };
    /**
     * @param {?} secretKey
     * @param {?} encryptMessage
     * @return {?}
     */
    EncryptionService.prototype.decryptAES = /**
     * @param {?} secretKey
     * @param {?} encryptMessage
     * @return {?}
     */
    function (secretKey, encryptMessage) {
        if (encryptMessage) {
            /** @type {?} */
            var iv = CryptoJS.enc.Hex.parse(encryptMessage.substr(0, 32));
            /** @type {?} */
            var key = CryptoJS.enc.Utf8.parse(secretKey);
            /** @type {?} */
            var encrypted = encryptMessage.substring(32);
            /** @type {?} */
            var decrypted = CryptoJS.AES.decrypt(encrypted, key, {
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
    };
    EncryptionService.decorators = [
        { type: Injectable }
    ];
    return EncryptionService;
}());
export { EncryptionService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    EncryptionService.prototype.ivSize;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5jcnlwdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHhhcGhpcmEvdXRpbHMvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZW5jcnlwdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sS0FBSyxRQUFRLE1BQU0sV0FBVyxDQUFDO0FBRXRDO0lBQUE7UUFHWSxXQUFNLEdBQVcsR0FBRyxDQUFDO0lBd0NqQyxDQUFDOzs7Ozs7O0lBdENVLHlDQUFhOzs7Ozs7SUFBcEIsVUFBcUIsTUFBYyxFQUFFLE9BQWUsRUFBRSxHQUFhOztZQUN6RCxJQUFJLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDO1FBQ2pELElBQUksR0FBRztZQUNILE9BQU8sUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzFELE9BQU8sUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9DLENBQUM7Ozs7OztJQUVNLHNDQUFVOzs7OztJQUFqQixVQUFrQixTQUFpQixFQUFFLE9BQWU7O1lBQzFDLEVBQUUsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7O1lBQ25ELEdBQUcsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDOztZQUN4QyxTQUFTLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtZQUNqRCxFQUFFLEVBQUUsRUFBRTtZQUNOLE9BQU8sRUFBRSxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUs7WUFDM0IsSUFBSSxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRztTQUMxQixDQUFDOztZQUNJLGNBQWMsR0FBRyxFQUFFLENBQUMsUUFBUSxFQUFFLEdBQUcsU0FBUyxDQUFDLFFBQVEsRUFBRTtRQUMzRCxPQUFPLGNBQWMsQ0FBQztJQUMxQixDQUFDOzs7Ozs7SUFFTSxzQ0FBVTs7Ozs7SUFBakIsVUFBa0IsU0FBaUIsRUFBRSxjQUFzQjtRQUN2RCxJQUFJLGNBQWMsRUFBRTs7Z0JBQ1YsRUFBRSxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQzs7Z0JBQ3pELEdBQUcsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDOztnQkFDeEMsU0FBUyxHQUFHLGNBQWMsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDOztnQkFDeEMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxHQUFHLEVBQUU7Z0JBQ3JELEVBQUUsRUFBRSxFQUFFO2dCQUNOLE9BQU8sRUFBRSxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUs7Z0JBQzNCLElBQUksRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUc7YUFDeEIsQ0FBQztZQUNGLElBQUk7Z0JBQ0EsT0FBTyxTQUFTLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDaEQ7WUFBQyxPQUFPLEtBQUssRUFBRTtnQkFDWixPQUFPLElBQUksQ0FBQzthQUNmO1NBQ0o7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDOztnQkF6Q0osVUFBVTs7SUEyQ1gsd0JBQUM7Q0FBQSxBQTNDRCxJQTJDQztTQTFDWSxpQkFBaUI7Ozs7OztJQUUxQixtQ0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBDcnlwdG9KUyBmcm9tICdjcnlwdG8tanMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRW5jcnlwdGlvblNlcnZpY2Uge1xuXG4gICAgcHJpdmF0ZSBpdlNpemU6IG51bWJlciA9IDEyODtcblxuICAgIHB1YmxpYyBnZXRIbWFjU2hhMjU2KHNlY3JldDogc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcsIGhleD86IGJvb2xlYW4pOiBzdHJpbmcge1xuICAgICAgICBjb25zdCBoYXNoID0gQ3J5cHRvSlMuSG1hY1NIQTI1NihtZXNzYWdlLCBzZWNyZXQpO1xuICAgICAgICBpZiAoaGV4KVxuICAgICAgICAgICAgcmV0dXJuIENyeXB0b0pTLmVuYy5IZXguc3RyaW5naWZ5KGhhc2gpLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgIHJldHVybiBDcnlwdG9KUy5lbmMuQmFzZTY0LnN0cmluZ2lmeShoYXNoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZW5jcnlwdEFFUyhzZWNyZXRLZXk6IHN0cmluZywgbWVzc2FnZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgaXYgPSBDcnlwdG9KUy5saWIuV29yZEFycmF5LnJhbmRvbSh0aGlzLml2U2l6ZSAvIDgpO1xuICAgICAgICBjb25zdCBrZXkgPSBDcnlwdG9KUy5lbmMuVXRmOC5wYXJzZShzZWNyZXRLZXkpO1xuICAgICAgICBjb25zdCBlbmNyeXB0ZWQgPSBDcnlwdG9KUy5BRVMuZW5jcnlwdChtZXNzYWdlLCBrZXksIHtcbiAgICAgICAgICAgIGl2OiBpdixcbiAgICAgICAgICAgIHBhZGRpbmc6IENyeXB0b0pTLnBhZC5Qa2NzNyxcbiAgICAgICAgICAgIG1vZGU6IENyeXB0b0pTLm1vZGUuQ0JDLFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgZW5jcnlwdE1lc3NhZ2UgPSBpdi50b1N0cmluZygpICsgZW5jcnlwdGVkLnRvU3RyaW5nKCk7XG4gICAgICAgIHJldHVybiBlbmNyeXB0TWVzc2FnZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZGVjcnlwdEFFUyhzZWNyZXRLZXk6IHN0cmluZywgZW5jcnlwdE1lc3NhZ2U6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIGlmIChlbmNyeXB0TWVzc2FnZSkge1xuICAgICAgICAgICAgY29uc3QgaXYgPSBDcnlwdG9KUy5lbmMuSGV4LnBhcnNlKGVuY3J5cHRNZXNzYWdlLnN1YnN0cigwLCAzMikpO1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gQ3J5cHRvSlMuZW5jLlV0ZjgucGFyc2Uoc2VjcmV0S2V5KTtcbiAgICAgICAgICAgIGNvbnN0IGVuY3J5cHRlZCA9IGVuY3J5cHRNZXNzYWdlLnN1YnN0cmluZygzMik7XG4gICAgICAgICAgICBjb25zdCBkZWNyeXB0ZWQgPSBDcnlwdG9KUy5BRVMuZGVjcnlwdChlbmNyeXB0ZWQsIGtleSwge1xuICAgICAgICAgICAgICBpdjogaXYsXG4gICAgICAgICAgICAgIHBhZGRpbmc6IENyeXB0b0pTLnBhZC5Qa2NzNyxcbiAgICAgICAgICAgICAgbW9kZTogQ3J5cHRvSlMubW9kZS5DQkMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlY3J5cHRlZC50b1N0cmluZyhDcnlwdG9KUy5lbmMuVXRmOCk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxufVxuIl19