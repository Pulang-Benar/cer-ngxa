import { __spread, __awaiter, __generator } from 'tslib';
import { Injectable, Inject, ɵɵdefineInjectable, ɵɵinject, InjectionToken, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EncryptionService } from '@xaphira/utils';
import { OAUTH_INFO } from '@xaphira/shared';
import { openDB } from 'idb';
import { Subject } from 'rxjs';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
    /** @nocollapse */ StorageMaskService.ngInjectableDef = ɵɵdefineInjectable({ factory: function StorageMaskService_Factory() { return new StorageMaskService(ɵɵinject(EncryptionService), ɵɵinject(OAUTH_INFO)); }, token: StorageMaskService, providedIn: "root" });
    return StorageMaskService;
}());
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var STORAGE_SERVICE = new InjectionToken('Storage Factory Service');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var STORAGE_PROVIDERS = [
    { provide: STORAGE_SERVICE, useClass: StorageMaskService },
];
var NgxaStorageModule = /** @class */ (function () {
    function NgxaStorageModule() {
    }
    /**
     * @return {?}
     */
    NgxaStorageModule.forRoot = /**
     * @return {?}
     */
    function () {
        return (/** @type {?} */ ({
            ngModule: NgxaStorageModule,
            providers: __spread(STORAGE_PROVIDERS),
        }));
    };
    NgxaStorageModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                    ],
                    exports: [],
                    declarations: [],
                },] }
    ];
    return NgxaStorageModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
var  /**
 * @template T
 */
IndexedDBService = /** @class */ (function () {
    function IndexedDBService(injector, dbname, version, storeName) {
        this.storeName = storeName;
        this.openSessionIDB(dbname, version);
        this.enc = injector.get(EncryptionService);
        this.oauthResource = injector.get(OAUTH_INFO);
    }
    /**
     * @param {?} dbname
     * @param {?} version
     * @return {?}
     */
    IndexedDBService.prototype.openSessionIDB = /**
     * @param {?} dbname
     * @param {?} version
     * @return {?}
     */
    function (dbname, version) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.$dbPromise = openDB(dbname, version)];
            });
        });
    };
    /**
     * @return {?}
     */
    IndexedDBService.prototype.getAllOf = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result$ = new Subject();
        this.getAllVal(this.storeName).then((/**
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
     * @return {?}
     */
    IndexedDBService.prototype.getOf = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        /** @type {?} */
        var result$ = new Subject();
        this.getKeyVal(key, this.storeName).then((/**
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
     * @return {?}
     */
    IndexedDBService.prototype.putOf = /**
     * @param {?} key
     * @param {?} val
     * @return {?}
     */
    function (key, val) {
        /** @type {?} */
        var result$ = new Subject();
        this.putKeyVal(key, val, this.storeName).then((/**
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
     * @return {?}
     */
    IndexedDBService.prototype.removeOf = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        /** @type {?} */
        var result$ = new Subject();
        this.removeKeyVal(key, this.storeName).then((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            result$.next(value);
        }));
        return result$.asObservable();
    };
    /**
     * @return {?}
     */
    IndexedDBService.prototype.getAll = /**
     * @return {?}
     */
    function () {
        return this.getAllVal(this.storeName);
    };
    /**
     * @param {?} key
     * @return {?}
     */
    IndexedDBService.prototype.get = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return this.getKeyVal(this.storeName, key);
    };
    /**
     * @param {?} key
     * @param {?} val
     * @return {?}
     */
    IndexedDBService.prototype.put = /**
     * @param {?} key
     * @param {?} val
     * @return {?}
     */
    function (key, val) {
        return this.putKeyVal(this.storeName, key, val);
    };
    /**
     * @param {?} key
     * @return {?}
     */
    IndexedDBService.prototype.remove = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return this.removeKeyVal(this.storeName, key);
    };
    /**
     * @return {?}
     */
    IndexedDBService.prototype.clearAll = /**
     * @return {?}
     */
    function () {
        return this.clearAllKeyVal(this.storeName);
    };
    /**
     * @return {?}
     */
    IndexedDBService.prototype.keys = /**
     * @return {?}
     */
    function () {
        return this.keysKeyVal(this.storeName);
    };
    /**
     * @param {?} storeName
     * @return {?}
     */
    IndexedDBService.prototype.getAllVal = /**
     * @param {?} storeName
     * @return {?}
     */
    function (storeName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.$dbPromise];
                    case 1: return [2 /*return*/, (_a.sent()).getAll(storeName)];
                }
            });
        });
    };
    /**
     * @param {?} storeName
     * @param {?} key
     * @return {?}
     */
    IndexedDBService.prototype.getKeyVal = /**
     * @param {?} storeName
     * @param {?} key
     * @return {?}
     */
    function (storeName, key) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.$dbPromise];
                    case 1: return [2 /*return*/, (_a.sent()).get(storeName, key)];
                }
            });
        });
    };
    /**
     * @param {?} storeName
     * @param {?} key
     * @param {?} val
     * @return {?}
     */
    IndexedDBService.prototype.putKeyVal = /**
     * @param {?} storeName
     * @param {?} key
     * @param {?} val
     * @return {?}
     */
    function (storeName, key, val) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.$dbPromise];
                    case 1: return [2 /*return*/, (_a.sent()).put(storeName, val, key)];
                }
            });
        });
    };
    /**
     * @param {?} storeName
     * @param {?} key
     * @return {?}
     */
    IndexedDBService.prototype.removeKeyVal = /**
     * @param {?} storeName
     * @param {?} key
     * @return {?}
     */
    function (storeName, key) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.$dbPromise];
                    case 1: return [2 /*return*/, (_a.sent()).delete(storeName, key)];
                }
            });
        });
    };
    /**
     * @param {?} storeName
     * @return {?}
     */
    IndexedDBService.prototype.clearAllKeyVal = /**
     * @param {?} storeName
     * @return {?}
     */
    function (storeName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.$dbPromise];
                    case 1: return [2 /*return*/, (_a.sent()).clear(storeName)];
                }
            });
        });
    };
    /**
     * @param {?} storeName
     * @return {?}
     */
    IndexedDBService.prototype.keysKeyVal = /**
     * @param {?} storeName
     * @return {?}
     */
    function (storeName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.$dbPromise];
                    case 1: return [2 /*return*/, (_a.sent()).getAllKeys(storeName)];
                }
            });
        });
    };
    /**
     * @param {?} storeName
     * @param {?} value
     * @return {?}
     */
    IndexedDBService.prototype.addArticle = /**
     * @param {?} storeName
     * @param {?} value
     * @return {?}
     */
    function (storeName, value) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.$dbPromise];
                    case 1: return [2 /*return*/, (_a.sent()).add(storeName, value)];
                }
            });
        });
    };
    /**
     * @param {?} storeName
     * @param {?} values
     * @return {?}
     */
    IndexedDBService.prototype.addAllArticle = /**
     * @param {?} storeName
     * @param {?} values
     * @return {?}
     */
    function (storeName, values) {
        return __awaiter(this, void 0, void 0, function () {
            var tx;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.$dbPromise];
                    case 1:
                        tx = (_a.sent()).transaction(storeName, 'readwrite');
                        values.forEach((/**
                         * @param {?} value
                         * @return {?}
                         */
                        function (value) {
                            tx.store.add(value);
                        }));
                        return [4 /*yield*/, tx.done];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return IndexedDBService;
}());
if (false) {
    /**
     * @type {?}
     * @protected
     */
    IndexedDBService.prototype.$dbPromise;
    /**
     * @type {?}
     * @protected
     */
    IndexedDBService.prototype.enc;
    /**
     * @type {?}
     * @protected
     */
    IndexedDBService.prototype.oauthResource;
    /**
     * @type {?}
     * @private
     */
    IndexedDBService.prototype.storeName;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { IndexedDBService, NgxaStorageModule, STORAGE_PROVIDERS, STORAGE_SERVICE, StorageMaskService as ɵa };
//# sourceMappingURL=xaphira-ngxa-storage.js.map
