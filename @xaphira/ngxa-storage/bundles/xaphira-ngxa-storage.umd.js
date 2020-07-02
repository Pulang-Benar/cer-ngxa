(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@xaphira/utils'), require('@xaphira/shared'), require('idb'), require('rxjs')) :
    typeof define === 'function' && define.amd ? define('@xaphira/ngxa-storage', ['exports', '@angular/core', '@angular/common', '@xaphira/utils', '@xaphira/shared', 'idb', 'rxjs'], factory) :
    (global = global || self, factory((global.xaphira = global.xaphira || {}, global.xaphira['ngxa-storage'] = {}), global.ng.core, global.ng.common, global['@xaphira/utils'], global['@xaphira/shared'], global.idb, global.rxjs));
}(this, (function (exports, core, common, utils, shared, idb, rxjs) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __createBinding(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
    }

    function __exportStar(m, exports) {
        for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

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
            { type: core.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */
        StorageMaskService.ctorParameters = function () { return [
            { type: utils.EncryptionService },
            { type: undefined, decorators: [{ type: core.Inject, args: [shared.OAUTH_INFO,] }] }
        ]; };
        /** @nocollapse */ StorageMaskService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function StorageMaskService_Factory() { return new StorageMaskService(core.ɵɵinject(utils.EncryptionService), core.ɵɵinject(shared.OAUTH_INFO)); }, token: StorageMaskService, providedIn: "root" });
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
    var STORAGE_SERVICE = new core.InjectionToken('Storage Factory Service');

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
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
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
    var   /**
     * @template T
     */
    IndexedDBService = /** @class */ (function () {
        function IndexedDBService(injector, dbname, version, storeName) {
            this.storeName = storeName;
            this.openSessionIDB(dbname, version);
            this.enc = injector.get(utils.EncryptionService);
            this.oauthResource = injector.get(shared.OAUTH_INFO);
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
                    return [2 /*return*/, this.$dbPromise = idb.openDB(dbname, version)];
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
            var result$ = new rxjs.Subject();
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
            var result$ = new rxjs.Subject();
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
            var result$ = new rxjs.Subject();
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
            var result$ = new rxjs.Subject();
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

    exports.IndexedDBService = IndexedDBService;
    exports.NgxaStorageModule = NgxaStorageModule;
    exports.STORAGE_PROVIDERS = STORAGE_PROVIDERS;
    exports.STORAGE_SERVICE = STORAGE_SERVICE;
    exports.ɵa = StorageMaskService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=xaphira-ngxa-storage.umd.js.map
