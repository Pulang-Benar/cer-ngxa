import { Injectable, Inject, ɵɵdefineInjectable, ɵɵinject, InjectionToken, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EncryptionService } from '@xaphira/utils';
import { OAUTH_INFO } from '@xaphira/shared';
import { __awaiter } from 'tslib';
import { openDB } from 'idb';
import { Subject } from 'rxjs';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StorageMaskService {
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
/** @nocollapse */ StorageMaskService.ngInjectableDef = ɵɵdefineInjectable({ factory: function StorageMaskService_Factory() { return new StorageMaskService(ɵɵinject(EncryptionService), ɵɵinject(OAUTH_INFO)); }, token: StorageMaskService, providedIn: "root" });
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
const STORAGE_SERVICE = new InjectionToken('Storage Factory Service');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const STORAGE_PROVIDERS = [
    { provide: STORAGE_SERVICE, useClass: StorageMaskService },
];
class NgxaStorageModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return (/** @type {?} */ ({
            ngModule: NgxaStorageModule,
            providers: [
                ...STORAGE_PROVIDERS,
            ],
        }));
    }
}
NgxaStorageModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                ],
                exports: [],
                declarations: [],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
class IndexedDBService {
    /**
     * @param {?} injector
     * @param {?} dbname
     * @param {?} version
     * @param {?} storeName
     */
    constructor(injector, dbname, version, storeName) {
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
    openSessionIDB(dbname, version) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.$dbPromise = openDB(dbname, version);
        });
    }
    /**
     * @return {?}
     */
    getAllOf() {
        /** @type {?} */
        const result$ = new Subject();
        this.getAllVal(this.storeName).then((/**
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
     * @return {?}
     */
    getOf(key) {
        /** @type {?} */
        const result$ = new Subject();
        this.getKeyVal(key, this.storeName).then((/**
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
     * @return {?}
     */
    putOf(key, val) {
        /** @type {?} */
        const result$ = new Subject();
        this.putKeyVal(key, val, this.storeName).then((/**
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
     * @return {?}
     */
    removeOf(key) {
        /** @type {?} */
        const result$ = new Subject();
        this.removeKeyVal(key, this.storeName).then((/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            result$.next(value);
        }));
        return result$.asObservable();
    }
    /**
     * @return {?}
     */
    getAll() {
        return this.getAllVal(this.storeName);
    }
    /**
     * @param {?} key
     * @return {?}
     */
    get(key) {
        return this.getKeyVal(this.storeName, key);
    }
    /**
     * @param {?} key
     * @param {?} val
     * @return {?}
     */
    put(key, val) {
        return this.putKeyVal(this.storeName, key, val);
    }
    /**
     * @param {?} key
     * @return {?}
     */
    remove(key) {
        return this.removeKeyVal(this.storeName, key);
    }
    /**
     * @return {?}
     */
    clearAll() {
        return this.clearAllKeyVal(this.storeName);
    }
    /**
     * @return {?}
     */
    keys() {
        return this.keysKeyVal(this.storeName);
    }
    /**
     * @param {?} storeName
     * @return {?}
     */
    getAllVal(storeName) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.$dbPromise).getAll(storeName);
        });
    }
    /**
     * @param {?} storeName
     * @param {?} key
     * @return {?}
     */
    getKeyVal(storeName, key) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.$dbPromise).get(storeName, key);
        });
    }
    /**
     * @param {?} storeName
     * @param {?} key
     * @param {?} val
     * @return {?}
     */
    putKeyVal(storeName, key, val) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.$dbPromise).put(storeName, val, key);
        });
    }
    /**
     * @param {?} storeName
     * @param {?} key
     * @return {?}
     */
    removeKeyVal(storeName, key) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.$dbPromise).delete(storeName, key);
        });
    }
    /**
     * @param {?} storeName
     * @return {?}
     */
    clearAllKeyVal(storeName) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.$dbPromise).clear(storeName);
        });
    }
    /**
     * @param {?} storeName
     * @return {?}
     */
    keysKeyVal(storeName) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.$dbPromise).getAllKeys(storeName);
        });
    }
    /**
     * @param {?} storeName
     * @param {?} value
     * @return {?}
     */
    addArticle(storeName, value) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.$dbPromise).add(storeName, value);
        });
    }
    /**
     * @param {?} storeName
     * @param {?} values
     * @return {?}
     */
    addAllArticle(storeName, values) {
        return __awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            const tx = (yield this.$dbPromise).transaction(storeName, 'readwrite');
            values.forEach((/**
             * @param {?} value
             * @return {?}
             */
            (value) => {
                tx.store.add(value);
            }));
            return yield tx.done;
        });
    }
}
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
