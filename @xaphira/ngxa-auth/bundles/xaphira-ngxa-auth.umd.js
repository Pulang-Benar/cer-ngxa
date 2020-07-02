(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@nebular/theme'), require('@xaphira/ngxa-theme'), require('@angular/common'), require('@angular/forms'), require('@angular/common/http'), require('@ngx-translate/core'), require('@xaphira/shared'), require('@angular/router'), require('rxjs'), require('rxjs/operators'), require('@ng-idle/core'), require('@xaphira/ngxa-storage'), require('@xaphira/utils'), require('rxjs/add/operator/catch'), require('rxjs/add/observable/throw'), require('rxjs/add/observable/empty'), require('rxjs/add/operator/takeUntil')) :
    typeof define === 'function' && define.amd ? define('@xaphira/ngxa-auth', ['exports', '@angular/core', '@nebular/theme', '@xaphira/ngxa-theme', '@angular/common', '@angular/forms', '@angular/common/http', '@ngx-translate/core', '@xaphira/shared', '@angular/router', 'rxjs', 'rxjs/operators', '@ng-idle/core', '@xaphira/ngxa-storage', '@xaphira/utils', 'rxjs/add/operator/catch', 'rxjs/add/observable/throw', 'rxjs/add/observable/empty', 'rxjs/add/operator/takeUntil'], factory) :
    (global = global || self, factory((global.xaphira = global.xaphira || {}, global.xaphira['ngxa-auth'] = {}), global.ng.core, global['@nebular/theme'], global['@xaphira/ngxa-theme'], global.ng.common, global.ng.forms, global.ng.common.http, global['@ngx-translate/core'], global['@xaphira/shared'], global.ng.router, global.rxjs, global.rxjs.operators, global['@ng-idle/core'], global['@xaphira/ngxa-storage'], global['@xaphira/utils']));
}(this, (function (exports, core, theme, ngxaTheme, common, forms, http, core$1, shared, router, rxjs, operators, core$2, ngxaStorage, utils) { 'use strict';

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
    var AuthIndexedDBService = /** @class */ (function (_super) {
        __extends(AuthIndexedDBService, _super);
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
            return __awaiter(this, void 0, void 0, function () {
                var keyEncrypted;
                var _this = this;
                return __generator(this, function (_a) {
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
            return __awaiter(this, void 0, void 0, function () {
                var keyEncrypted, valueEncrypted;
                return __generator(this, function (_a) {
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
            return __awaiter(this, void 0, void 0, function () {
                var keyEncrypted;
                return __generator(this, function (_a) {
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
            var result$ = new rxjs.Subject();
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
            var result$ = new rxjs.Subject();
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
            var result$ = new rxjs.Subject();
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
            shared.oauthInfoModels.forEach((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                if (response[data.key]) {
                    if (data.type === shared.TypeDataOauth.OAUTH) {
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
            shared.oauthInfoModels.forEach((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                if (data.enc) {
                    if (data.type === shared.TypeDataOauth.OAUTH) {
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
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getEnc(shared.oauthInfo.access_token)];
                        case 1:
                            if (_a.sent())
                                return [2 /*return*/, true];
                            shared.oauthInfoModels.forEach((/**
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
            { type: core.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */
        AuthIndexedDBService.ctorParameters = function () { return [
            { type: core.Injector }
        ]; };
        /** @nocollapse */ AuthIndexedDBService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function AuthIndexedDBService_Factory() { return new AuthIndexedDBService(core.ɵɵinject(core.INJECTOR)); }, token: AuthIndexedDBService, providedIn: "root" });
        return AuthIndexedDBService;
    }(ngxaStorage.IndexedDBService));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ProfileIndexedDBService = /** @class */ (function (_super) {
        __extends(ProfileIndexedDBService, _super);
        function ProfileIndexedDBService(injector) {
            return _super.call(this, injector, 'xa-core', 1, '#xa-profile') || this;
        }
        /**
         * @param {?} response
         * @return {?}
         */
        ProfileIndexedDBService.prototype.loginStorage = /**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            var _this = this;
            shared.oauthInfoModels.forEach((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                if (response[data.key]) {
                    if (data.type === shared.TypeDataOauth.PROFILE) {
                        _this.put(data.key, data.string ? response[data.key] : JSON.stringify(response[data.key])).then();
                    }
                }
            }));
        };
        /**
         * @return {?}
         */
        ProfileIndexedDBService.prototype.logout = /**
         * @return {?}
         */
        function () {
            var _this = this;
            shared.oauthInfoModels.forEach((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                if (data.type === shared.TypeDataOauth.PROFILE) {
                    _this.remove(data.key);
                }
            }));
        };
        ProfileIndexedDBService.decorators = [
            { type: core.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */
        ProfileIndexedDBService.ctorParameters = function () { return [
            { type: core.Injector }
        ]; };
        /** @nocollapse */ ProfileIndexedDBService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function ProfileIndexedDBService_Factory() { return new ProfileIndexedDBService(core.ɵɵinject(core.INJECTOR)); }, token: ProfileIndexedDBService, providedIn: "root" });
        return ProfileIndexedDBService;
    }(ngxaStorage.IndexedDBService));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SettingsIndexedDBService = /** @class */ (function (_super) {
        __extends(SettingsIndexedDBService, _super);
        function SettingsIndexedDBService(injector) {
            var _this = _super.call(this, injector, 'xa-core', 1, '#xa-settings') || this;
            _this.translate = injector.get(core$1.TranslateService);
            return _this;
        }
        /**
         * @param {?} response
         * @return {?}
         */
        SettingsIndexedDBService.prototype.loginStorage = /**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            var _this = this;
            shared.oauthInfoModels.forEach((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                if (response[data.key]) {
                    if (data.type === shared.TypeDataOauth.SETTINGS) {
                        _this.put(data.key, data.string ? response[data.key] : JSON.stringify(response[data.key])).then();
                        if (data.key === 'locale') {
                            _this.translate.getTranslation(response[data.key]).subscribe((/**
                             * @param {?} lang
                             * @return {?}
                             */
                            function (lang) {
                                _this.translate.use(response[data.key]);
                                _this.translate.setTranslation(response[data.key], lang, true);
                            }));
                        }
                    }
                }
            }));
        };
        SettingsIndexedDBService.decorators = [
            { type: core.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */
        SettingsIndexedDBService.ctorParameters = function () { return [
            { type: core.Injector }
        ]; };
        /** @nocollapse */ SettingsIndexedDBService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function SettingsIndexedDBService_Factory() { return new SettingsIndexedDBService(core.ɵɵinject(core.INJECTOR)); }, token: SettingsIndexedDBService, providedIn: "root" });
        return SettingsIndexedDBService;
    }(ngxaStorage.IndexedDBService));
    if (false) {
        /**
         * @type {?}
         * @private
         */
        SettingsIndexedDBService.prototype.translate;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AuthTokenService = /** @class */ (function () {
        function AuthTokenService(httpBaseService, oauthResource, apiPath, router, authIndexedDB, profileIndexedDB, settingsIndexedDB, idle) {
            var _this = this;
            this.httpBaseService = httpBaseService;
            this.oauthResource = oauthResource;
            this.apiPath = apiPath;
            this.router = router;
            this.authIndexedDB = authIndexedDB;
            this.profileIndexedDB = profileIndexedDB;
            this.settingsIndexedDB = settingsIndexedDB;
            this.idle = idle;
            idle.setIdle(oauthResource['session_idle']);
            idle.setTimeout(oauthResource['session_timeout']);
            idle.setInterrupts(core$2.DEFAULT_INTERRUPTSOURCES);
            idle.onTimeout.subscribe((/**
             * @return {?}
             */
            function () {
                /* console.log('[RIP] Session Timeout'); */
                _this.logout();
            }));
            idle.onIdleEnd.subscribe((/**
             * @return {?}
             */
            function () {
                /* console.log('[RIP] Session Idle End'); */
            }));
        }
        /**
         * @param {?} username
         * @param {?} password
         * @return {?}
         */
        AuthTokenService.prototype.login = /**
         * @param {?} username
         * @param {?} password
         * @return {?}
         */
        function (username, password) {
            var _this = this;
            this.authIndexedDB.logout();
            return this.httpBaseService.
                HTTP_BASE(this.apiPath['auth']['token'], this.getAuthBody(username, password).toString(), this.getAuthHeader())
                .toPromise()
                .then((/**
             * @param {?} response
             * @return {?}
             */
            function (response) {
                _this.idle.setIdle(response['expires_in']);
                _this.idle.watch();
                /* console.log('[RIP] Session Idle Start'); */
                /* console.log('[RIP] Session Timeout in '+response['expires_in']+' seconds'); */
                _this.authIndexedDB.loginStorage(response);
                _this.profileIndexedDB.loginStorage(response);
                _this.settingsIndexedDB.loginStorage(response);
            }));
        };
        /**
         * @return {?}
         */
        AuthTokenService.prototype.refresh = /**
         * @return {?}
         */
        function () {
            var _this = this;
            return this.getBodyRefresh().pipe(operators.switchMap((/**
             * @param {?} body
             * @return {?}
             */
            function (body) {
                return _this.httpBaseService.
                    HTTP_BASE(_this.apiPath['auth']['token'], body, _this.getAuthHeader())
                    .pipe(operators.tap((/**
                 * @param {?} response
                 * @return {?}
                 */
                function (response) {
                    _this.idle.setIdle(response['expires_in']);
                    _this.authIndexedDB.logout();
                    _this.authIndexedDB.loginStorage(response);
                })));
            })));
        };
        /**
         * @return {?}
         */
        AuthTokenService.prototype.logout = /**
         * @return {?}
         */
        function () {
            this.idle.stop();
            this.authIndexedDB.logout();
            this.profileIndexedDB.logout();
            this.router.navigate(['/auth']);
        };
        /**
         * @return {?}
         */
        AuthTokenService.prototype.isLogin = /**
         * @return {?}
         */
        function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.authIndexedDB.isLogin()];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        /**
         * @param {?} request
         * @return {?}
         */
        AuthTokenService.prototype.oauthHeaders = /**
         * @param {?} request
         * @return {?}
         */
        function (request) {
            /** @type {?} */
            var result$ = new rxjs.Subject();
            /** @type {?} */
            var httpHeaders = request.headers ? request.headers : new http.HttpHeaders();
            httpHeaders = httpHeaders.has(shared.signatureHeader.authorization) ?
                httpHeaders.delete(shared.signatureHeader.authorization) : httpHeaders;
            Promise.all([
                this.authIndexedDB.getEnc(shared.oauthInfo.token_type),
                this.authIndexedDB.getEnc(shared.oauthInfo.access_token)
            ])
                .then((/**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                httpHeaders = httpHeaders.set(shared.signatureHeader.authorization, value[0] + ' ' + value[1]);
                result$.next(request.clone({ headers: httpHeaders }));
            }));
            return result$.asObservable();
        };
        /**
         * @private
         * @return {?}
         */
        AuthTokenService.prototype.getAuthHeader = /**
         * @private
         * @return {?}
         */
        function () {
            return new http.HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' +
                    btoa(this.oauthResource['client_id'] + ':' + this.oauthResource['client_secret']),
                'Accept': 'application/json',
            });
        };
        /**
         * @private
         * @param {?} username
         * @param {?} password
         * @return {?}
         */
        AuthTokenService.prototype.getAuthBody = /**
         * @private
         * @param {?} username
         * @param {?} password
         * @return {?}
         */
        function (username, password) {
            /** @type {?} */
            var body = new URLSearchParams();
            body.append('client_id', this.oauthResource['client_id']);
            body.append('grant_type', this.oauthResource['grant_type']);
            body.append('username', username);
            body.append('password', password);
            return body;
        };
        /**
         * @private
         * @return {?}
         */
        AuthTokenService.prototype.getBodyRefresh = /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            /** @type {?} */
            var result$ = new rxjs.Subject();
            this.authIndexedDB.getEnc(shared.oauthInfo.refresh_token).then((/**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                /** @type {?} */
                var body = new URLSearchParams();
                body.append('client_id', _this.oauthResource['client_id']);
                body.append('grant_type', 'refresh_token');
                body.append('refresh_token', value);
                result$.next(body.toString());
            }));
            return result$.asObservable();
        };
        AuthTokenService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        AuthTokenService.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: [shared.HTTP_SERVICE,] }] },
            { type: undefined, decorators: [{ type: core.Inject, args: [shared.OAUTH_INFO,] }] },
            { type: undefined, decorators: [{ type: core.Inject, args: [shared.API,] }] },
            { type: router.Router },
            { type: AuthIndexedDBService },
            { type: ProfileIndexedDBService },
            { type: SettingsIndexedDBService },
            { type: core$2.Idle }
        ]; };
        return AuthTokenService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        AuthTokenService.prototype.httpBaseService;
        /**
         * @type {?}
         * @private
         */
        AuthTokenService.prototype.oauthResource;
        /**
         * @type {?}
         * @private
         */
        AuthTokenService.prototype.apiPath;
        /**
         * @type {?}
         * @private
         */
        AuthTokenService.prototype.router;
        /**
         * @type {?}
         * @private
         */
        AuthTokenService.prototype.authIndexedDB;
        /**
         * @type {?}
         * @private
         */
        AuthTokenService.prototype.profileIndexedDB;
        /**
         * @type {?}
         * @private
         */
        AuthTokenService.prototype.settingsIndexedDB;
        /**
         * @type {?}
         * @private
         */
        AuthTokenService.prototype.idle;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AuthGuardService = /** @class */ (function () {
        function AuthGuardService(router, authTokenService, authService) {
            this.router = router;
            this.authTokenService = authTokenService;
            this.authService = authService;
        }
        /**
         * @param {?} route
         * @param {?} state
         * @return {?}
         */
        AuthGuardService.prototype.canActivate = /**
         * @param {?} route
         * @param {?} state
         * @return {?}
         */
        function (route, state) {
            var _this = this;
            /** @type {?} */
            var result$ = new rxjs.Subject();
            this.authTokenService.isLogin().then((/**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                result$.next(value);
                if (!value) {
                    _this.router.navigate(['/auth']);
                }
                else {
                    _this.authService.loadPhotoUser();
                }
            }));
            return result$.asObservable();
        };
        AuthGuardService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        AuthGuardService.ctorParameters = function () { return [
            { type: router.Router },
            { type: AuthTokenService },
            { type: shared.UserInfo, decorators: [{ type: core.Inject, args: [shared.USER_INFO,] }] }
        ]; };
        return AuthGuardService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        AuthGuardService.prototype.router;
        /**
         * @type {?}
         * @private
         */
        AuthGuardService.prototype.authTokenService;
        /**
         * @type {?}
         * @private
         */
        AuthGuardService.prototype.authService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var UnauthorizeGuardService = /** @class */ (function () {
        function UnauthorizeGuardService(router, authTokenService) {
            this.router = router;
            this.authTokenService = authTokenService;
        }
        /**
         * @param {?} route
         * @param {?} state
         * @return {?}
         */
        UnauthorizeGuardService.prototype.canActivate = /**
         * @param {?} route
         * @param {?} state
         * @return {?}
         */
        function (route, state) {
            var _this = this;
            /** @type {?} */
            var result$ = new rxjs.Subject();
            this.authTokenService.isLogin().then((/**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                result$.next(!value);
                if (value) {
                    _this.router.navigate(['/app']);
                }
            }));
            return result$.asObservable();
        };
        UnauthorizeGuardService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        UnauthorizeGuardService.ctorParameters = function () { return [
            { type: router.Router },
            { type: AuthTokenService }
        ]; };
        return UnauthorizeGuardService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        UnauthorizeGuardService.prototype.router;
        /**
         * @type {?}
         * @private
         */
        UnauthorizeGuardService.prototype.authTokenService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AuthGuardChildService = /** @class */ (function () {
        function AuthGuardChildService(router, authTokenService, enc, storage) {
            this.router = router;
            this.authTokenService = authTokenService;
            this.enc = enc;
            this.storage = storage;
        }
        /**
         * @param {?} route
         * @param {?} state
         * @return {?}
         */
        AuthGuardChildService.prototype.canActivateChild = /**
         * @param {?} route
         * @param {?} state
         * @return {?}
         */
        function (route, state) {
            var _this = this;
            /** @type {?} */
            var result$ = new rxjs.Subject();
            this.authTokenService.isLogin().then((/**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                result$.next(value);
                if (route.data) {
                    Promise.all([
                        _this.storage.getEnc('menus'),
                        _this.storage.getEnc('extras'),
                    ]).then((/**
                     * @param {?} strg
                     * @return {?}
                     */
                    function (strg) {
                        if (!(strg[0].includes(route.data['code']) || strg[1].includes(route.data['code']))) {
                            _this.router.navigate(['/app/home']);
                        }
                        return result$.asObservable();
                    }));
                }
                if (!value) {
                    _this.router.navigate(['/auth']);
                }
            }));
            return result$.asObservable();
        };
        AuthGuardChildService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        AuthGuardChildService.ctorParameters = function () { return [
            { type: router.Router },
            { type: AuthTokenService },
            { type: utils.EncryptionService },
            { type: AuthIndexedDBService }
        ]; };
        return AuthGuardChildService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        AuthGuardChildService.prototype.router;
        /**
         * @type {?}
         * @private
         */
        AuthGuardChildService.prototype.authTokenService;
        /**
         * @type {?}
         * @private
         */
        AuthGuardChildService.prototype.enc;
        /**
         * @type {?}
         * @private
         */
        AuthGuardChildService.prototype.storage;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LoginPageComponent = /** @class */ (function () {
        function LoginPageComponent(router, authTokenService) {
            this.router = router;
            this.authTokenService = authTokenService;
            this.buttonLogin = false;
            this.progressBar = 25;
            this.form = new forms.FormGroup({
                username: new forms.FormControl(),
                password: new forms.FormControl(),
            });
        }
        /**
         * @return {?}
         */
        LoginPageComponent.prototype.login = /**
         * @return {?}
         */
        function () {
            var _this = this;
            if (!this.form.invalid) {
                document.querySelectorAll('.pace-done').forEach((/**
                 * @param {?} pace
                 * @return {?}
                 */
                function (pace) {
                    pace.className = pace.className.replace('pace-done pace-done', 'pace-running');
                    pace.className = pace.className.replace('pace-done', 'pace-running');
                }));
                document.querySelectorAll('.pace-inactive').forEach((/**
                 * @param {?} pace
                 * @return {?}
                 */
                function (pace) {
                    pace.className = pace.className.replace('pace-inactive pace-inactive', 'pace-active');
                    pace.className = pace.className.replace('pace-inactive', 'pace-active');
                }));
                /** @type {?} */
                var progressDOM_1 = (/** @type {?} */ (document.getElementsByClassName('pace-progress').item(0)));
                if (this.progressBar < 35) {
                    this.progressBar = 35;
                    progressDOM_1.style.transform = 'translate3d(' + this.progressBar + '%, 0px, 0px)';
                    progressDOM_1.getAttributeNode('data-progress-text').value = this.progressBar + '%';
                    progressDOM_1.getAttributeNode('data-progress').value = this.progressBar.toString();
                }
                this.buttonLogin = true;
                this.authTokenService.login(this.form.get('username').value, this.form.get('password').value)
                    .then((/**
                 * @return {?}
                 */
                function () {
                    _this.progressBar = 90;
                    progressDOM_1.style.transform = 'translate3d(' + _this.progressBar + '%, 0px, 0px)';
                    progressDOM_1.getAttributeNode('data-progress-text').value = _this.progressBar + '%';
                    progressDOM_1.getAttributeNode('data-progress').value = _this.progressBar.toString();
                    _this.progressBar = 0;
                    _this.router.navigate(['/app/home']);
                }))
                    .catch((/**
                 * @param {?} error
                 * @return {?}
                 */
                function (error) {
                    if (!(error instanceof http.HttpErrorResponse)) {
                        /** @type {?} */
                        var response = ((/** @type {?} */ (error)));
                        _this.responseError = response.respStatusMessage[response.respStatusCode];
                    }
                    _this.buttonLogin = false;
                    _this.progressBar = 85;
                    progressDOM_1.style.transform = 'translate3d(' + _this.progressBar + '%, 0px, 0px)';
                    progressDOM_1.getAttributeNode('data-progress-text').value = _this.progressBar + '%';
                    progressDOM_1.getAttributeNode('data-progress').value = _this.progressBar.toString();
                    document.querySelectorAll('.pace-running').forEach((/**
                     * @param {?} pace
                     * @return {?}
                     */
                    function (pace) {
                        pace.className = pace.className.replace('pace-running', 'pace-done');
                    }));
                    document.querySelectorAll('.pace-active').forEach((/**
                     * @param {?} pace
                     * @return {?}
                     */
                    function (pace) {
                        pace.className = pace.className.replace('pace-active', 'pace-inactive');
                    }));
                    _this.progressBar = 0;
                }));
                if (this.progressBar >= 35 && this.progressBar < 65) {
                    this.progressBar = 65;
                    progressDOM_1.style.transform = 'translate3d(' + this.progressBar + '%, 0px, 0px)';
                    progressDOM_1.getAttributeNode('data-progress-text').value = this.progressBar + '%';
                    progressDOM_1.getAttributeNode('data-progress').value = this.progressBar.toString();
                }
            }
        };
        Object.defineProperty(LoginPageComponent.prototype, "hasErrorUsername", {
            get: /**
             * @return {?}
             */
            function () {
                return (this.form.controls['username'] &&
                    this.form.controls['username'].invalid &&
                    this.form.controls['username'].touched);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LoginPageComponent.prototype, "hasSuccessUsername", {
            get: /**
             * @return {?}
             */
            function () {
                return (this.form.controls['username'] &&
                    this.form.controls['username'].valid &&
                    this.form.controls['username'].touched);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LoginPageComponent.prototype, "hasErrorPassword", {
            get: /**
             * @return {?}
             */
            function () {
                return (this.form.controls['password'] &&
                    this.form.controls['password'].invalid &&
                    this.form.controls['password'].touched);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LoginPageComponent.prototype, "hasSuccessPassword", {
            get: /**
             * @return {?}
             */
            function () {
                return (this.form.controls['password'] &&
                    this.form.controls['password'].valid &&
                    this.form.controls['password'].touched);
            },
            enumerable: true,
            configurable: true
        });
        LoginPageComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'xa-login-page',
                        template: "<h1 id=\"title\" class=\"title\">{{ 'Login' | translate }}</h1>\n<p class=\"sub-title\">{{ 'subtitle.login' | translate }}</p>\n<nb-alert *ngIf=\"responseError\" outline=\"danger\" role=\"alert\">\n  <p class=\"alert-title\"><b>{{ 'alert.title.login' | translate }}</b></p>\n  <ul class=\"alert-message-list\">\n    <li class=\"alert-message\">{{ responseError }}</li>\n  </ul>\n</nb-alert>\n\n<form [formGroup]=\"form\" (ngSubmit)=\"login()\" aria-labelledby=\"title\">\n  <div class=\"form-control-group\">\n    <label class=\"label\">{{ 'Username' | translate }} :</label>\n    <input [formControlName]=\"'username'\"\n          [required]=\"true\"\n          [ngClass]=\"{\n            'status-danger': hasErrorUsername,\n            'status-success': hasSuccessUsername\n          }\"\n          name=\"username\"\n          id=\"inputUsername\"\n          placeholder=\"{{ 'Username' | translate }}\"\n          fieldSize=\"large\"\n          autofocus\n          nbInput\n          fullWidth>\n    <ng-container *ngIf=\"hasErrorUsername\">\n      <span class=\"caption status-danger\">{{'error.username' | translate}}</span>\n    </ng-container>\n  </div>\n\n  <div class=\"form-control-group\">\n    <label class=\"label\">{{ 'Password' | translate }} :</label>\n    <input [formControlName]=\"'password'\"\n          [required]=\"true\"\n          [ngClass]=\"{\n            'status-danger': hasErrorPassword,\n            'status-success': hasSuccessPassword\n          }\"\n          name=\"password\"\n          type=\"password\"\n          id=\"inputPassword\"\n          placeholder=\"{{ 'Password' | translate }}\"\n          fieldSize=\"large\"\n          nbInput\n          fullWidth>\n    <ng-container *ngIf=\"hasErrorPassword\">\n      <span class=\"caption status-danger\">{{ 'error.password' | translate}}</span>\n    </ng-container>\n  </div>\n\n  <button [disabled]=\"form.invalid || buttonLogin\"\n          fullWidth\n          nbButton\n          status=\"primary\"\n          size=\"large\"\n          [class.btn-pulse]=\"form.invalid || buttonLogin\">\n    {{ 'Login' | translate }}\n  </button>\n</form>\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        LoginPageComponent.ctorParameters = function () { return [
            { type: router.Router },
            { type: AuthTokenService }
        ]; };
        return LoginPageComponent;
    }());
    if (false) {
        /** @type {?} */
        LoginPageComponent.prototype.responseError;
        /** @type {?} */
        LoginPageComponent.prototype.buttonLogin;
        /**
         * @type {?}
         * @private
         */
        LoginPageComponent.prototype.progressBar;
        /** @type {?} */
        LoginPageComponent.prototype.form;
        /**
         * @type {?}
         * @private
         */
        LoginPageComponent.prototype.router;
        /**
         * @type {?}
         * @private
         */
        LoginPageComponent.prototype.authTokenService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LogoutComponent = /** @class */ (function () {
        function LogoutComponent(authTokenService) {
            this.authTokenService = authTokenService;
            this.authTokenService.logout();
        }
        LogoutComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'xa-logout',
                        template: ''
                    }] }
        ];
        /** @nocollapse */
        LogoutComponent.ctorParameters = function () { return [
            { type: AuthTokenService }
        ]; };
        return LogoutComponent;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        LogoutComponent.prototype.authTokenService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AuthComponent = /** @class */ (function () {
        function AuthComponent(location) {
            this.location = location;
        }
        /**
         * @return {?}
         */
        AuthComponent.prototype.back = /**
         * @return {?}
         */
        function () {
            this.location.back();
            return false;
        };
        /**
         * @return {?}
         */
        AuthComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.alive = false;
        };
        AuthComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'xa-auth',
                        template: "<nb-layout>\n    <nb-layout-column>\n        <nb-card>\n            <nb-card-header>\n                <nav class=\"navigation\">\n                    <a href=\"#\" (click)=\"back()\" class=\"link back-link\" aria-label=\"Back\">\n                        <nb-icon icon=\"arrow-back\"></nb-icon>\n                    </a>\n                </nav>\n            </nb-card-header>\n            <nb-card-body>\n                <xa-auth-block>\n                    <router-outlet></router-outlet>\n                </xa-auth-block>\n            </nb-card-body>\n        </nb-card>\n    </nb-layout-column>\n</nb-layout>",
                        styles: ["/*!\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */:host nb-card{margin:0;height:calc(100vh - 2 * 2.5rem)}:host .navigation .link{display:inline-block;text-decoration:none}:host .navigation .link nb-icon{font-size:2rem;vertical-align:middle}:host .links nb-icon{font-size:2.5rem}:host nb-card-body{display:flex;width:100%}:host xa-auth-block{margin:auto}:host ::ng-deep nb-layout .layout .layout-container .content .columns nb-layout-column{padding:2.5rem}@media (max-width:767.98px){:host nb-card{border-radius:0;height:100vh}:host ::ng-deep nb-layout .layout .layout-container .content .columns nb-layout-column{padding:0}}"]
                    }] }
        ];
        /** @nocollapse */
        AuthComponent.ctorParameters = function () { return [
            { type: common.Location }
        ]; };
        return AuthComponent;
    }());
    if (false) {
        /** @type {?} */
        AuthComponent.prototype.alive;
        /** @type {?} */
        AuthComponent.prototype.subscription;
        /** @type {?} */
        AuthComponent.prototype.authenticated;
        /** @type {?} */
        AuthComponent.prototype.token;
        /**
         * @type {?}
         * @private
         */
        AuthComponent.prototype.location;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var routes = [{
            path: '',
            component: AuthComponent,
            children: [
                {
                    path: '',
                    component: LoginPageComponent,
                    canActivate: [UnauthorizeGuardService],
                },
                {
                    path: 'login',
                    component: LoginPageComponent,
                    canActivate: [UnauthorizeGuardService],
                },
                {
                    path: 'logout',
                    component: LogoutComponent,
                    canActivate: [AuthGuardService],
                },
            ],
        }];
    var NgxaAuthRoutingModule = /** @class */ (function () {
        function NgxaAuthRoutingModule() {
        }
        NgxaAuthRoutingModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [router.RouterModule.forChild(routes)],
                        exports: [router.RouterModule],
                    },] }
        ];
        return NgxaAuthRoutingModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AuthBlockComponent = /** @class */ (function () {
        function AuthBlockComponent() {
        }
        AuthBlockComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'xa-auth-block',
                        template: "\n    <ng-content></ng-content>\n  ",
                        styles: [":host{display:block;width:100%;max-width:35rem}:host ::ng-deep form{width:100%}:host ::ng-deep .label{display:block;margin-bottom:.5rem}:host ::ng-deep .forgot-password{text-decoration:none;margin-bottom:.5rem}:host ::ng-deep .caption{margin-top:.5rem}:host ::ng-deep .alert{text-align:center}:host ::ng-deep .title{margin-top:0;margin-bottom:.75rem;text-align:center}:host ::ng-deep .sub-title{margin-bottom:2rem;text-align:center}:host ::ng-deep .form-control-group{margin-bottom:2rem}:host ::ng-deep .form-control-group.accept-group{display:flex;justify-content:space-between;margin:2rem 0}:host ::ng-deep .label-with-link{display:flex;justify-content:space-between}:host ::ng-deep .links{text-align:center;margin-top:1.75rem}:host ::ng-deep .links .socials{margin-top:1.5rem}:host ::ng-deep .links .socials a{margin:0 1rem;text-decoration:none;vertical-align:middle}:host ::ng-deep .links .socials a.with-icon{font-size:2rem}:host ::ng-deep .another-action{margin-top:2rem;text-align:center}:host ::ng-deep .sign-in-or-up{margin-top:2rem;display:flex;justify-content:space-between}:host ::ng-deep nb-alert .alert-message,:host ::ng-deep nb-alert .alert-title{margin:0 0 .5rem}:host ::ng-deep nb-alert .alert-message-list{list-style-type:none;padding:0;margin:0}"]
                    }] }
        ];
        return AuthBlockComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var components = [
        AuthComponent,
        AuthBlockComponent,
    ];
    var NgxaLayoutAuthModule = /** @class */ (function () {
        function NgxaLayoutAuthModule() {
        }
        NgxaLayoutAuthModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: __spread(components),
                        imports: [
                            theme.NbLayoutModule,
                            theme.NbCardModule,
                            theme.NbIconModule,
                            common.CommonModule,
                            http.HttpClientModule,
                            ngxaTheme.NgxaThemeModule,
                            router.RouterModule,
                        ],
                        exports: __spread(components),
                    },] }
        ];
        return NgxaLayoutAuthModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AuthSignatureService = /** @class */ (function () {
        function AuthSignatureService(translate, enc, oauthResource, authStorage) {
            this.translate = translate;
            this.enc = enc;
            this.oauthResource = oauthResource;
            this.authStorage = authStorage;
        }
        /**
         * @param {?} req
         * @return {?}
         */
        AuthSignatureService.prototype.signHeaders = /**
         * @param {?} req
         * @return {?}
         */
        function (req) {
            var _this = this;
            return rxjs.combineLatest([
                this.key(),
                this.signature(this.getPath(req.url)),
            ]).pipe(operators.take(1), operators.switchMap((/**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                if (shared.signatureHeader.signature) {
                    /** @type {?} */
                    var httpHeaders_1 = req.headers ? req.headers : new http.HttpHeaders();
                    httpHeaders_1.keys().forEach((/**
                     * @param {?} key
                     * @return {?}
                     */
                    function (key) {
                        if (key === shared.signatureHeader.key)
                            httpHeaders_1 = httpHeaders_1.delete(shared.signatureHeader.key);
                        if (key === shared.signatureHeader.timestamp)
                            httpHeaders_1 = httpHeaders_1.delete(shared.signatureHeader.timestamp);
                        if (key === shared.signatureHeader.signature)
                            httpHeaders_1 = httpHeaders_1.delete(shared.signatureHeader.signature);
                    }));
                    httpHeaders_1 = httpHeaders_1.set(shared.signatureHeader.key, value[0]);
                    httpHeaders_1 = httpHeaders_1.set(shared.signatureHeader.timestamp, _this.timestamp());
                    httpHeaders_1 = httpHeaders_1.set(shared.signatureHeader.signature, value[1]);
                    return rxjs.of(req.clone({ headers: httpHeaders_1 }));
                }
                return rxjs.of(req);
            })));
        };
        /**
         * @return {?}
         */
        AuthSignatureService.prototype.key = /**
         * @return {?}
         */
        function () {
            return this.authStorage.getOfEnc(shared.oauthInfo.public_key);
        };
        /**
         * @return {?}
         */
        AuthSignatureService.prototype.timestamp = /**
         * @return {?}
         */
        function () {
            return Math.floor(new Date().getTime() / 1000).toString();
        };
        /**
         * @return {?}
         */
        AuthSignatureService.prototype.date = /**
         * @return {?}
         */
        function () {
            return new common.DatePipe(this.translate.currentLang).transform(new Date(), utils.DateFormat.DATE);
        };
        /**
         * @param {?} url
         * @return {?}
         */
        AuthSignatureService.prototype.signature = /**
         * @param {?} url
         * @return {?}
         */
        function (url) {
            var _this = this;
            return rxjs.combineLatest([
                this.key(),
                this.authStorage.getOfEnc(shared.oauthInfo.access_token),
            ]).pipe(operators.take(1), operators.switchMap((/**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                /** @type {?} */
                var key = value[0] + ':' +
                    _this.timestamp() + ':' +
                    _this.date() + ':' +
                    url + ':' +
                    value[1];
                return rxjs.of(_this.enc.getHmacSha256(_this.oauthResource['private_key'], key));
            })));
        };
        /**
         * @private
         * @param {?} url
         * @return {?}
         */
        AuthSignatureService.prototype.getPath = /**
         * @private
         * @param {?} url
         * @return {?}
         */
        function (url) {
            return '/' + url
                .replace(/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*(:[0-9]{1,5})?(\/).*?/g, '');
        };
        AuthSignatureService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        AuthSignatureService.ctorParameters = function () { return [
            { type: core$1.TranslateService },
            { type: utils.EncryptionService },
            { type: undefined, decorators: [{ type: core.Inject, args: [shared.OAUTH_INFO,] }] },
            { type: AuthIndexedDBService }
        ]; };
        return AuthSignatureService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        AuthSignatureService.prototype.translate;
        /**
         * @type {?}
         * @private
         */
        AuthSignatureService.prototype.enc;
        /**
         * @type {?}
         * @private
         */
        AuthSignatureService.prototype.oauthResource;
        /**
         * @type {?}
         * @private
         */
        AuthSignatureService.prototype.authStorage;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var HttpInterceptorTokenService = /** @class */ (function () {
        function HttpInterceptorTokenService(authToken) {
            this.authToken = authToken;
            this.destroy$ = new rxjs.Subject();
        }
        /**
         * @return {?}
         */
        HttpInterceptorTokenService.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.destroy$.next(true);
            this.destroy$.complete();
            this.destroy$.unsubscribe();
        };
        /**
         * @param {?} req
         * @param {?} next
         * @return {?}
         */
        HttpInterceptorTokenService.prototype.intercept = /**
         * @param {?} req
         * @param {?} next
         * @return {?}
         */
        function (req, next) {
            if (req.headers) {
                if (req.headers.has(shared.signatureHeader.mark)) {
                    return this.authToken.oauthHeaders(req).pipe(operators.switchMap((/**
                     * @param {?} reqAuth
                     * @return {?}
                     */
                    function (reqAuth) {
                        return next.handle(reqAuth);
                    })));
                }
            }
            return next.handle(req).takeUntil(this.destroy$);
        };
        HttpInterceptorTokenService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        HttpInterceptorTokenService.ctorParameters = function () { return [
            { type: AuthTokenService }
        ]; };
        return HttpInterceptorTokenService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        HttpInterceptorTokenService.prototype.destroy$;
        /**
         * @type {?}
         * @private
         */
        HttpInterceptorTokenService.prototype.authToken;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var HttpInterceptorSignatureService = /** @class */ (function () {
        function HttpInterceptorSignatureService(authSignature, oauthResource) {
            this.authSignature = authSignature;
            this.oauthResource = oauthResource;
            this.destroy$ = new rxjs.Subject();
        }
        /**
         * @return {?}
         */
        HttpInterceptorSignatureService.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.destroy$.next(true);
            this.destroy$.complete();
            this.destroy$.unsubscribe();
        };
        /**
         * @param {?} req
         * @param {?} next
         * @return {?}
         */
        HttpInterceptorSignatureService.prototype.intercept = /**
         * @param {?} req
         * @param {?} next
         * @return {?}
         */
        function (req, next) {
            if (req.headers) {
                if (req.headers.has(shared.signatureHeader.mark) && this.oauthResource.signature) {
                    return this.authSignature.signHeaders(req).pipe(operators.switchMap((/**
                     * @param {?} value
                     * @return {?}
                     */
                    function (value) {
                        return next.handle(value);
                    })));
                }
            }
            return next.handle(req).takeUntil(this.destroy$);
        };
        HttpInterceptorSignatureService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        HttpInterceptorSignatureService.ctorParameters = function () { return [
            { type: AuthSignatureService },
            { type: undefined, decorators: [{ type: core.Inject, args: [shared.OAUTH_INFO,] }] }
        ]; };
        return HttpInterceptorSignatureService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        HttpInterceptorSignatureService.prototype.destroy$;
        /**
         * @type {?}
         * @private
         */
        HttpInterceptorSignatureService.prototype.authSignature;
        /**
         * @type {?}
         * @private
         */
        HttpInterceptorSignatureService.prototype.oauthResource;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AuthLanguageService = /** @class */ (function () {
        function AuthLanguageService(locale, settingsIndexedDB) {
            this.locale = locale;
            this.settingsIndexedDB = settingsIndexedDB;
        }
        /**
         * @param {?} req
         * @return {?}
         */
        AuthLanguageService.prototype.getLocale = /**
         * @param {?} req
         * @return {?}
         */
        function (req) {
            var _this = this;
            return rxjs.from(this.settingsIndexedDB.get('locale')).pipe(operators.take(1), operators.switchMap((/**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                /** @type {?} */
                var httpHeaders = req.headers ? req.headers : new http.HttpHeaders();
                /** @type {?} */
                var localeCode = value ?
                    (value.match(new RegExp(utils.Pattern.LOCALE, 'g')) ?
                        value :
                        _this.locale) : _this.locale;
                httpHeaders = httpHeaders.append('Accept-Language', localeCode);
                return rxjs.of(req.clone({ headers: httpHeaders }));
            })));
        };
        AuthLanguageService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        AuthLanguageService.ctorParameters = function () { return [
            { type: String, decorators: [{ type: core.Inject, args: [core.LOCALE_ID,] }] },
            { type: SettingsIndexedDBService }
        ]; };
        return AuthLanguageService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        AuthLanguageService.prototype.locale;
        /**
         * @type {?}
         * @private
         */
        AuthLanguageService.prototype.settingsIndexedDB;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var HttpInterceptorLangService = /** @class */ (function () {
        function HttpInterceptorLangService(authLanguage) {
            this.authLanguage = authLanguage;
            this.destroy$ = new rxjs.Subject();
        }
        /**
         * @return {?}
         */
        HttpInterceptorLangService.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.destroy$.next(true);
            this.destroy$.complete();
            this.destroy$.unsubscribe();
        };
        /**
         * @param {?} req
         * @param {?} next
         * @return {?}
         */
        HttpInterceptorLangService.prototype.intercept = /**
         * @param {?} req
         * @param {?} next
         * @return {?}
         */
        function (req, next) {
            if (req.headers) {
                if (req.headers.has(shared.signatureHeader.mark)) {
                    return this.authLanguage.getLocale(req).pipe(operators.switchMap((/**
                     * @param {?} value
                     * @return {?}
                     */
                    function (value) {
                        return next.handle(value);
                    })));
                }
            }
            return next.handle(req).takeUntil(this.destroy$);
        };
        HttpInterceptorLangService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        HttpInterceptorLangService.ctorParameters = function () { return [
            { type: AuthLanguageService }
        ]; };
        return HttpInterceptorLangService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        HttpInterceptorLangService.prototype.destroy$;
        /**
         * @type {?}
         * @private
         */
        HttpInterceptorLangService.prototype.authLanguage;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var HttpErrorHandler = /** @class */ (function () {
        function HttpErrorHandler(translate, authToken, authStorage, authSignature) {
            this.translate = translate;
            this.authToken = authToken;
            this.authStorage = authStorage;
            this.authSignature = authSignature;
            this.isRefreshingToken = false;
            this.refreshTokenSubject = new rxjs.BehaviorSubject(null);
        }
        /**
         * @protected
         * @param {?} error
         * @param {?} req
         * @param {?} next
         * @return {?}
         */
        HttpErrorHandler.prototype.errorHandler = /**
         * @protected
         * @param {?} error
         * @param {?} req
         * @param {?} next
         * @return {?}
         */
        function (error, req, next) {
            /** @type {?} */
            var err = new http.HttpErrorResponse({
                error: error.error,
                headers: error.headers,
                status: error.status,
                statusText: error.statusText,
                url: error.url,
            });
            if (error.error instanceof ArrayBuffer) {
                /** @type {?} */
                var decodedString = String.fromCharCode.apply(null, new Uint8Array(error.error));
                err = new http.HttpErrorResponse({
                    error: JSON.parse(decodedString),
                    headers: error.headers,
                    status: error.status,
                    statusText: error.statusText,
                    url: error.url,
                });
            }
            switch (err.status) {
                case 200:
                case 201:
                case 304:
                    return rxjs.Observable.empty();
                case 400:
                    return this.error400(err);
                case 401:
                    return this.error401(err, req, next);
                case 404:
                case 403:
                case 500:
                case 504:
                case 0:
                    return rxjs.Observable.throw(this.errorDefault(err));
                default:
                    break;
            }
            return rxjs.Observable.throw(err);
        };
        /**
         * @protected
         * @param {?} error
         * @return {?}
         */
        HttpErrorHandler.prototype.errorDefault = /**
         * @protected
         * @param {?} error
         * @return {?}
         */
        function (error) {
            /** @type {?} */
            var err = {
                respStatusCode: error.status,
                respStatusMessage: {},
            };
            err.respStatusMessage[err.respStatusCode] = error.statusText;
            /** @type {?} */
            var msgKey = 'error.' + err.respStatusCode;
            if (error.error) {
                if (error.error['respStatusCode']) {
                    err = error.error;
                    msgKey = err.respStatusMessage[err.respStatusCode];
                }
            }
            this.translate.get(msgKey).subscribe((/**
             * @param {?} result
             * @return {?}
             */
            function (result) {
                err.respStatusMessage[err.respStatusCode] = result;
            }));
            return err;
        };
        /**
         * @protected
         * @param {?} error
         * @return {?}
         */
        HttpErrorHandler.prototype.error400 = /**
         * @protected
         * @param {?} error
         * @return {?}
         */
        function (error) {
            if (error.error['respStatusCode']) {
                if (error.error['respStatusCode'] === 'invalid_grant') {
                    switch (error.error['respStatusMessage']['invalid_grant']) {
                        case 'Bad credentials':
                        case 'User account is locked':
                        case 'User is disabled':
                        case 'User account has expired':
                            return rxjs.Observable.throw(this.errorDefault(error));
                        default:
                            this.authToken.logout();
                            return rxjs.Observable.throw(this.errorDefault(error));
                    }
                }
                else {
                    return rxjs.Observable.throw(this.errorDefault(error));
                }
            }
            return rxjs.Observable.throw(error);
        };
        /**
         * @protected
         * @param {?} error
         * @param {?} request
         * @param {?} next
         * @return {?}
         */
        HttpErrorHandler.prototype.error401 = /**
         * @protected
         * @param {?} error
         * @param {?} request
         * @param {?} next
         * @return {?}
         */
        function (error, request, next) {
            var _this = this;
            if (error.error) {
                if (error.error['respStatusCode'] === 'invalid_token') {
                    if (!this.isRefreshingToken) {
                        this.isRefreshingToken = true;
                        this.refreshTokenSubject.next(null);
                        return this.authToken.refresh().pipe(operators.switchMap((/**
                         * @param {?} response
                         * @return {?}
                         */
                        function (response) {
                            _this.isRefreshingToken = false;
                            _this.refreshTokenSubject.next(response);
                            return _this.authToken.oauthHeaders(request).pipe(operators.switchMap((/**
                             * @param {?} req
                             * @return {?}
                             */
                            function (req) {
                                request = req;
                                return _this.authSignature.signHeaders(request).pipe(operators.switchMap((/**
                                 * @param {?} valReq
                                 * @return {?}
                                 */
                                function (valReq) {
                                    return next.handle(valReq);
                                })));
                            })));
                        })), operators.catchError((/**
                         * @param {?} err
                         * @return {?}
                         */
                        function (err) {
                            return _this.errorHandler(err, request, next);
                        })));
                    }
                    else {
                        /** @type {?} */
                        var msg = error.error['respStatusMessage']['invalid_token'];
                        if (msg.includes('expired')) {
                            this.authToken.logout();
                        }
                        else {
                            return this.refreshTokenSubject.pipe(operators.filter((/**
                             * @param {?} response
                             * @return {?}
                             */
                            function (response) { return response != null; })), operators.take(1), operators.switchMap((/**
                             * @return {?}
                             */
                            function () {
                                return _this.authToken.oauthHeaders(request).pipe(operators.switchMap((/**
                                 * @param {?} req
                                 * @return {?}
                                 */
                                function (req) {
                                    request = req;
                                    return _this.authSignature.signHeaders(request).pipe(operators.switchMap((/**
                                     * @param {?} valReq
                                     * @return {?}
                                     */
                                    function (valReq) {
                                        return next.handle(valReq);
                                    })));
                                })));
                            })));
                        }
                    }
                }
            }
            return rxjs.Observable.throw(error);
        };
        return HttpErrorHandler;
    }());
    if (false) {
        /**
         * @type {?}
         * @protected
         */
        HttpErrorHandler.prototype.isRefreshingToken;
        /**
         * @type {?}
         * @protected
         */
        HttpErrorHandler.prototype.refreshTokenSubject;
        /**
         * @type {?}
         * @protected
         */
        HttpErrorHandler.prototype.translate;
        /**
         * @type {?}
         * @protected
         */
        HttpErrorHandler.prototype.authToken;
        /**
         * @type {?}
         * @protected
         */
        HttpErrorHandler.prototype.authStorage;
        /**
         * @type {?}
         * @protected
         */
        HttpErrorHandler.prototype.authSignature;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var HttpInterceptorErrorService = /** @class */ (function (_super) {
        __extends(HttpInterceptorErrorService, _super);
        function HttpInterceptorErrorService(translate, authToken, authStorage, authSignature) {
            var _this = _super.call(this, translate, authToken, authStorage, authSignature) || this;
            _this.translate = translate;
            _this.authToken = authToken;
            _this.authStorage = authStorage;
            _this.authSignature = authSignature;
            _this.destroy$ = new rxjs.Subject();
            return _this;
        }
        /**
         * @return {?}
         */
        HttpInterceptorErrorService.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.destroy$.next(true);
            this.destroy$.complete();
            this.destroy$.unsubscribe();
        };
        /**
         * @param {?} req
         * @param {?} next
         * @return {?}
         */
        HttpInterceptorErrorService.prototype.intercept = /**
         * @param {?} req
         * @param {?} next
         * @return {?}
         */
        function (req, next) {
            var _this = this;
            return next.handle(req).pipe(operators.catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                if (error instanceof http.HttpErrorResponse) {
                    return _this.errorHandler(error, req, next);
                }
                else {
                    return rxjs.Observable.throw(error);
                }
            }))).takeUntil(this.destroy$);
        };
        HttpInterceptorErrorService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        HttpInterceptorErrorService.ctorParameters = function () { return [
            { type: core$1.TranslateService },
            { type: AuthTokenService },
            { type: AuthIndexedDBService },
            { type: AuthSignatureService }
        ]; };
        return HttpInterceptorErrorService;
    }(HttpErrorHandler));
    if (false) {
        /**
         * @type {?}
         * @private
         */
        HttpInterceptorErrorService.prototype.destroy$;
        /** @type {?} */
        HttpInterceptorErrorService.prototype.translate;
        /** @type {?} */
        HttpInterceptorErrorService.prototype.authToken;
        /** @type {?} */
        HttpInterceptorErrorService.prototype.authStorage;
        /** @type {?} */
        HttpInterceptorErrorService.prototype.authSignature;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AuthUserService = /** @class */ (function (_super) {
        __extends(AuthUserService, _super);
        function AuthUserService(profileIndexedDB, apiPath, httpBaseService) {
            var _this = _super.call(this) || this;
            _this.profileIndexedDB = profileIndexedDB;
            _this.apiPath = apiPath;
            _this.httpBaseService = httpBaseService;
            _this.loaderUserSubject$ = new rxjs.Subject();
            return _this;
        }
        /**
         * @return {?}
         */
        AuthUserService.prototype.loadPhotoUser = /**
         * @return {?}
         */
        function () {
            var _this = this;
            Promise.all([
                this.profileIndexedDB.get('image-b64'),
                this.profileIndexedDB.get('image'),
                this.profileIndexedDB.get('name'),
            ]).then((/**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                if (!value[0]) {
                    if (value[1] && value[2]) {
                        _this.getImage(value[1], value[2]);
                    }
                    else {
                        _this.httpBaseService.HTTP_AUTH(_this.apiPath['profile']['get-profile'])
                            .subscribe((/**
                         * @param {?} response
                         * @return {?}
                         */
                        function (response) {
                            Promise.all([
                                _this.profileIndexedDB.put('name', response['name']),
                                _this.profileIndexedDB.put('email', response['email']),
                                _this.profileIndexedDB.put('image', response['image']),
                            ]).then((/**
                             * @return {?}
                             */
                            function () {
                                _this.getImage(response['image'], response['name']);
                            }));
                        }));
                    }
                }
                else {
                    Promise.all([
                        _this.profileIndexedDB.get('name'),
                        _this.profileIndexedDB.get('image-b64'),
                    ]).then((/**
                     * @param {?} profile
                     * @return {?}
                     */
                    function (profile) {
                        /** @type {?} */
                        var user = {
                            name: profile[0],
                            picture: profile[1],
                        };
                        _this.loaderUserSubject$.next(user);
                    }));
                }
            }));
        };
        /**
         * @param {?} file
         * @param {?} checksum
         * @return {?}
         */
        AuthUserService.prototype.updatePhotoUser = /**
         * @param {?} file
         * @param {?} checksum
         * @return {?}
         */
        function (file, checksum) {
            var _this = this;
            if (file && checksum) {
                /** @type {?} */
                var picture_1;
                /** @type {?} */
                var imageBlob_1 = new Blob([file], {
                    type: 'image/png',
                });
                this.profileIndexedDB.put(shared.oauthInfo.image, checksum).then();
                this.profileIndexedDB.put('image-blob', imageBlob_1).then();
                this.profileIndexedDB.get('name').then((/**
                 * @param {?} name
                 * @return {?}
                 */
                function (name) {
                    /** @type {?} */
                    var reader = new FileReader();
                    reader.readAsDataURL(imageBlob_1);
                    reader.onloadend = (/**
                     * @return {?}
                     */
                    function () {
                        picture_1 = reader.result.toString();
                        /** @type {?} */
                        var user = {
                            name: name,
                            picture: picture_1,
                        };
                        _this.profileIndexedDB.put('image-b64', picture_1).then();
                        _this.loaderUserSubject$.next(user);
                    });
                }));
            }
            else {
                this.loaderUserSubject$.next(null);
            }
            return this.loaderUserSubject$.asObservable();
        };
        /**
         * @return {?}
         */
        AuthUserService.prototype.getUser = /**
         * @return {?}
         */
        function () {
            return this.loaderUserSubject$.asObservable();
        };
        /**
         * @private
         * @param {?} checksum
         * @param {?} name
         * @return {?}
         */
        AuthUserService.prototype.getImage = /**
         * @private
         * @param {?} checksum
         * @param {?} name
         * @return {?}
         */
        function (checksum, name) {
            var _this = this;
            this.httpBaseService.HTTP_AUTH(this.apiPath['file']['vw-photo-profile'], null, null, null, [checksum], 'arraybuffer')
                .pipe(operators.tap((/**
             * @param {?} response
             * @return {?}
             */
            function (response) {
                /** @type {?} */
                var picture;
                /** @type {?} */
                var imageBlob = new Blob([response], {
                    type: 'image/png',
                });
                _this.profileIndexedDB.put('image-blob', imageBlob).then();
                /** @type {?} */
                var reader = new FileReader();
                reader.readAsDataURL(imageBlob);
                reader.onloadend = (/**
                 * @return {?}
                 */
                function () {
                    picture = reader.result.toString();
                    /** @type {?} */
                    var user = {
                        name: name,
                        picture: picture,
                    };
                    _this.profileIndexedDB.put('image-b64', picture).then();
                    _this.loaderUserSubject$.next(user);
                });
            }))).subscribe();
        };
        AuthUserService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        AuthUserService.ctorParameters = function () { return [
            { type: ProfileIndexedDBService },
            { type: undefined, decorators: [{ type: core.Inject, args: [shared.API,] }] },
            { type: undefined, decorators: [{ type: core.Inject, args: [shared.HTTP_SERVICE,] }] }
        ]; };
        return AuthUserService;
    }(shared.UserInfo));
    if (false) {
        /**
         * @type {?}
         * @private
         */
        AuthUserService.prototype.loaderUserSubject$;
        /**
         * @type {?}
         * @private
         */
        AuthUserService.prototype.profileIndexedDB;
        /**
         * @type {?}
         * @private
         */
        AuthUserService.prototype.apiPath;
        /**
         * @type {?}
         * @private
         */
        AuthUserService.prototype.httpBaseService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var AUTH_PROVIDERS = [
        { provide: http.HTTP_INTERCEPTORS, useClass: HttpInterceptorTokenService, multi: true },
        { provide: http.HTTP_INTERCEPTORS, useClass: HttpInterceptorSignatureService, multi: true },
        { provide: http.HTTP_INTERCEPTORS, useClass: HttpInterceptorLangService, multi: true },
        { provide: http.HTTP_INTERCEPTORS, useClass: HttpInterceptorErrorService, multi: true },
        { provide: shared.USER_INFO, useClass: AuthUserService },
        { provide: shared.AUTH_INDEXED_DB, useClass: AuthIndexedDBService },
        { provide: shared.PROFILE_INDEXED_DB, useClass: ProfileIndexedDBService },
        { provide: shared.SETTINGS_INDEXED_DB, useClass: SettingsIndexedDBService },
        AuthGuardService,
        UnauthorizeGuardService,
        AuthTokenService,
        AuthGuardChildService,
        AuthSignatureService,
        AuthLanguageService,
    ];
    /** @type {?} */
    var components$1 = [
        LoginPageComponent,
        LogoutComponent,
    ];
    var NgxaAuthModule = /** @class */ (function () {
        function NgxaAuthModule() {
        }
        /**
         * @return {?}
         */
        NgxaAuthModule.forRoot = /**
         * @return {?}
         */
        function () {
            return (/** @type {?} */ ({
                ngModule: NgxaAuthModule,
                providers: __spread(AUTH_PROVIDERS),
            }));
        };
        NgxaAuthModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: __spread(components$1),
                        imports: [
                            theme.NbCheckboxModule,
                            theme.NbAlertModule,
                            theme.NbInputModule,
                            theme.NbButtonModule,
                            theme.NbIconModule,
                            common.CommonModule,
                            forms.FormsModule,
                            core$1.TranslateModule,
                            forms.ReactiveFormsModule,
                            http.HttpClientModule,
                            ngxaTheme.NgxaThemeModule,
                            NgxaLayoutAuthModule,
                            NgxaAuthRoutingModule,
                        ],
                        exports: __spread(components$1),
                    },] }
        ];
        return NgxaAuthModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PageNotFoundComponent = /** @class */ (function () {
        function PageNotFoundComponent(location) {
            this.location = location;
        }
        /**
         * @return {?}
         */
        PageNotFoundComponent.prototype.goToHome = /**
         * @return {?}
         */
        function () {
            this.location.back();
            return;
        };
        PageNotFoundComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'xa-404',
                        template: "<div class=\"flex-centered\">\n  <h2 class=\"title\">404</h2>\n  <h2 class=\"title\">Page Not Found</h2>\n  <small class=\"sub-title\">The page you were looking for doesn't exist</small>\n  <button nbButton fullWidth (click)=\"goToHome()\" type=\"button\" class=\"home-button\">\n    Take me home\n  </button>\n</div>\n",
                        styles: [".flex-centered{margin:auto}nb-card-body{display:flex}.title{text-align:center}.sub-title{text-align:center;display:block;margin-bottom:3rem}.home-button{margin-bottom:2rem}"]
                    }] }
        ];
        /** @nocollapse */
        PageNotFoundComponent.ctorParameters = function () { return [
            { type: common.Location }
        ]; };
        return PageNotFoundComponent;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        PageNotFoundComponent.prototype.location;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var routes$1 = [
        {
            path: '',
            component: AuthComponent,
            children: [
                {
                    path: '404',
                    component: PageNotFoundComponent,
                },
            ],
        },
    ];
    var MiscellaneousRoutingModule = /** @class */ (function () {
        function MiscellaneousRoutingModule() {
        }
        MiscellaneousRoutingModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [router.RouterModule.forChild(routes$1)],
                        exports: [router.RouterModule],
                    },] }
        ];
        return MiscellaneousRoutingModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MiscellaneousModule = /** @class */ (function () {
        function MiscellaneousModule() {
        }
        MiscellaneousModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            theme.NbButtonModule,
                            theme.NbIconModule,
                            common.CommonModule,
                            ngxaTheme.NgxaThemeModule,
                            NgxaLayoutAuthModule,
                            MiscellaneousRoutingModule,
                        ],
                        declarations: [
                            PageNotFoundComponent,
                        ],
                    },] }
        ];
        return MiscellaneousModule;
    }());

    exports.AuthGuardChildService = AuthGuardChildService;
    exports.AuthGuardService = AuthGuardService;
    exports.AuthIndexedDBService = AuthIndexedDBService;
    exports.AuthSignatureService = AuthSignatureService;
    exports.AuthTokenService = AuthTokenService;
    exports.AuthUserService = AuthUserService;
    exports.MiscellaneousModule = MiscellaneousModule;
    exports.NgxaAuthModule = NgxaAuthModule;
    exports.PageNotFoundComponent = PageNotFoundComponent;
    exports.ProfileIndexedDBService = ProfileIndexedDBService;
    exports.SettingsIndexedDBService = SettingsIndexedDBService;
    exports.UnauthorizeGuardService = UnauthorizeGuardService;
    exports.ɵa = LoginPageComponent;
    exports.ɵb = LogoutComponent;
    exports.ɵc = NgxaLayoutAuthModule;
    exports.ɵd = AuthComponent;
    exports.ɵe = AuthBlockComponent;
    exports.ɵf = NgxaAuthRoutingModule;
    exports.ɵg = HttpInterceptorTokenService;
    exports.ɵh = HttpInterceptorSignatureService;
    exports.ɵi = HttpInterceptorLangService;
    exports.ɵj = AuthLanguageService;
    exports.ɵk = HttpInterceptorErrorService;
    exports.ɵl = HttpErrorHandler;
    exports.ɵm = MiscellaneousRoutingModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=xaphira-ngxa-auth.umd.js.map
