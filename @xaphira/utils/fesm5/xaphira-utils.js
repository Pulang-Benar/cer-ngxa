import { __extends, __spread } from 'tslib';
import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { HmacSHA256, enc, lib, AES, pad, mode } from 'crypto-js';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
        var hash = HmacSHA256(message, secret);
        if (hex)
            return enc.Hex.stringify(hash).toUpperCase();
        return enc.Base64.stringify(hash);
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
        var iv = lib.WordArray.random(this.ivSize / 8);
        /** @type {?} */
        var key = enc.Utf8.parse(secretKey);
        /** @type {?} */
        var encrypted = AES.encrypt(message, key, {
            iv: iv,
            padding: pad.Pkcs7,
            mode: mode.CBC,
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
            var iv = enc.Hex.parse(encryptMessage.substr(0, 32));
            /** @type {?} */
            var key = enc.Utf8.parse(secretKey);
            /** @type {?} */
            var encrypted = encryptMessage.substring(32);
            /** @type {?} */
            var decrypted = AES.decrypt(encrypted, key, {
                iv: iv,
                padding: pad.Pkcs7,
                mode: mode.CBC,
            });
            try {
                return decrypted.toString(enc.Utf8);
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
if (false) {
    /**
     * @type {?}
     * @private
     */
    EncryptionService.prototype.ivSize;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TranslationService = /** @class */ (function (_super) {
    __extends(TranslationService, _super);
    function TranslationService(http, prefix, suffix) {
        return _super.call(this, http, prefix, suffix) || this;
    }
    /**
     * @param {?} lang
     * @return {?}
     */
    TranslationService.prototype.getTranslation = /**
     * @param {?} lang
     * @return {?}
     */
    function (lang) {
        return _super.prototype.getTranslation.call(this, lang);
    };
    return TranslationService;
}(TranslateHttpLoader));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} http
 * @return {?}
 */
function createTranslateLoader(http) {
    return new TranslationService(http, './assets/i18n/', '.json');
}
/** @type {?} */
var UTILS_PROVIDERS = [
    EncryptionService,
];
var UtilsModule = /** @class */ (function () {
    function UtilsModule() {
    }
    /**
     * @return {?}
     */
    UtilsModule.forRoot = /**
     * @return {?}
     */
    function () {
        return (/** @type {?} */ ({
            ngModule: UtilsModule,
            providers: __spread(UTILS_PROVIDERS, TranslateModule.forRoot({
                loader: {
                    provide: TranslateLoader,
                    useFactory: (createTranslateLoader),
                    deps: [HttpClient],
                },
            }).providers),
        }));
    };
    UtilsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        TranslateModule,
                    ],
                    exports: [TranslateModule],
                    declarations: [],
                },] }
    ];
    return UtilsModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var DatePattern = {
    SLASH: '^(?:(?:31(\\/)(?:0?[13578]|1[02]))' +
        '\\1|(?:(?:29|30)(\\/)(?:0?[13-9]|1[0-2])' +
        '\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(\\/)0?2' +
        '\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|' +
        '(?:(?:16|[2468][048]|[3579][26])00))))$|' +
        '^(?:0?[1-9]|1\\d|2[0-8])(\\/)(?:(?:0?[1-9])|(?:1[0-2]))' +
        '\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$',
    DASH: '^(?:(?:31(-)(?:0?[13578]|1[02]))' +
        '\\1|(?:(?:29|30)(-)(?:0?[13-9]|1[0-2])' +
        '\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(-)0?2' +
        '\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|' +
        '(?:(?:16|[2468][048]|[3579][26])00))))$|' +
        '^(?:0?[1-9]|1\\d|2[0-8])(-)(?:(?:0?[1-9])|(?:1[0-2]))' +
        '\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$',
    DOT: '^(?:(?:31(\\.)(?:0?[13578]|1[02]))' +
        '\\1|(?:(?:29|30)(\\.)(?:0?[13-9]|1[0-2])' +
        '\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(\\.)0?2' +
        '\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|' +
        '(?:(?:16|[2468][048]|[3579][26])00))))$|' +
        '^(?:0?[1-9]|1\\d|2[0-8])(\\.)(?:(?:0?[1-9])|(?:1[0-2]))' +
        '\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$',
};
/** @enum {string} */
var DateFormat = {
    DATE: 'dd/MM/yyyy',
    DATETIME: 'dd/MM/yyyy HH:mm:ss.S',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var Pattern = {
    EMAIL: '.+@.+\..+',
    PHONE_NUMBER: '^(([+]([0-9]{1,2}))|([0-9]{1}))([0-9]{2}-?)([0-9]{4}-?)([0-9]{1,6}-?)$',
    PASSWORD_MEDIUM: '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{8,}$',
    PASSWORD_STRONG: '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&])[A-Za-z0-9@$!%*?&]{8,}$',
    LOCALE: '^en-US$|^id-ID$',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { DateFormat, DatePattern, EncryptionService, Pattern, UTILS_PROVIDERS, UtilsModule, createTranslateLoader, TranslationService as ɵa };
//# sourceMappingURL=xaphira-utils.js.map
