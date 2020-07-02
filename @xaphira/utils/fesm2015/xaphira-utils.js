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
class EncryptionService {
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
        const hash = HmacSHA256(message, secret);
        if (hex)
            return enc.Hex.stringify(hash).toUpperCase();
        return enc.Base64.stringify(hash);
    }
    /**
     * @param {?} secretKey
     * @param {?} message
     * @return {?}
     */
    encryptAES(secretKey, message) {
        /** @type {?} */
        const iv = lib.WordArray.random(this.ivSize / 8);
        /** @type {?} */
        const key = enc.Utf8.parse(secretKey);
        /** @type {?} */
        const encrypted = AES.encrypt(message, key, {
            iv: iv,
            padding: pad.Pkcs7,
            mode: mode.CBC,
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
            const iv = enc.Hex.parse(encryptMessage.substr(0, 32));
            /** @type {?} */
            const key = enc.Utf8.parse(secretKey);
            /** @type {?} */
            const encrypted = encryptMessage.substring(32);
            /** @type {?} */
            const decrypted = AES.decrypt(encrypted, key, {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TranslationService extends TranslateHttpLoader {
    /**
     * @param {?} http
     * @param {?=} prefix
     * @param {?=} suffix
     */
    constructor(http, prefix, suffix) {
        super(http, prefix, suffix);
    }
    /**
     * @param {?} lang
     * @return {?}
     */
    getTranslation(lang) {
        return super.getTranslation(lang);
    }
}

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
const UTILS_PROVIDERS = [
    EncryptionService,
];
class UtilsModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return (/** @type {?} */ ({
            ngModule: UtilsModule,
            providers: [
                ...UTILS_PROVIDERS,
                ...TranslateModule.forRoot({
                    loader: {
                        provide: TranslateLoader,
                        useFactory: (createTranslateLoader),
                        deps: [HttpClient],
                    },
                }).providers,
            ],
        }));
    }
}
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const DatePattern = {
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
const DateFormat = {
    DATE: 'dd/MM/yyyy',
    DATETIME: 'dd/MM/yyyy HH:mm:ss.S',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const Pattern = {
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
