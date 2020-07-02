(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/common/http')) :
    typeof define === 'function' && define.amd ? define('@xaphira/shared', ['exports', '@angular/core', '@angular/common', '@angular/common/http'], factory) :
    (global = global || self, factory((global.xaphira = global.xaphira || {}, global.xaphira.shared = {}), global.ng.core, global.ng.common, global.ng.common.http));
}(this, (function (exports, core, common, http) { 'use strict';

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
    /** @type {?} */
    var HTTP_SERVICE = new core.InjectionToken('Http Service');

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @abstract
     */
    var   /**
     * @abstract
     */
    HttpAbstractService = /** @class */ (function () {
        function HttpAbstractService() {
        }
        /**
         * @param {?} api
         * @param {?=} pathVariable
         * @return {?}
         */
        HttpAbstractService.prototype.API = /**
         * @param {?} api
         * @param {?=} pathVariable
         * @return {?}
         */
        function (api, pathVariable) {
            /** @type {?} */
            var url = api.server.protocol +
                '://' +
                api.server.host +
                ((api.server.port) ? ':' + api.server.port : '') +
                api.path;
            if (pathVariable)
                pathVariable.forEach((/**
                 * @param {?} path
                 * @return {?}
                 */
                function (path) {
                    url = url + '/' + path;
                }));
            return url;
        };
        return HttpAbstractService;
    }());
    if (false) {
        /**
         * @abstract
         * @param {?} api
         * @param {?=} body
         * @param {?=} headers
         * @param {?=} params
         * @param {?=} pathVariable
         * @param {?=} responseType
         * @return {?}
         */
        HttpAbstractService.prototype.HTTP_AUTH = function (api, body, headers, params, pathVariable, responseType) { };
        /**
         * @abstract
         * @param {?} api
         * @param {?=} body
         * @param {?=} headers
         * @param {?=} params
         * @param {?=} pathVariable
         * @param {?=} responseType
         * @return {?}
         */
        HttpAbstractService.prototype.HTTP_BASE = function (api, body, headers, params, pathVariable, responseType) { };
        /**
         * @abstract
         * @param {?} url
         * @param {?=} headers
         * @param {?=} params
         * @param {?=} responseType
         * @return {?}
         */
        HttpAbstractService.prototype.GET = function (url, headers, params, responseType) { };
        /**
         * @abstract
         * @param {?} url
         * @param {?} body
         * @param {?=} headers
         * @param {?=} params
         * @param {?=} responseType
         * @return {?}
         */
        HttpAbstractService.prototype.POST = function (url, body, headers, params, responseType) { };
        /**
         * @abstract
         * @param {?} url
         * @param {?} body
         * @param {?=} headers
         * @param {?=} params
         * @return {?}
         */
        HttpAbstractService.prototype.PUT = function (url, body, headers, params) { };
        /**
         * @abstract
         * @param {?} url
         * @param {?=} headers
         * @param {?=} params
         * @return {?}
         */
        HttpAbstractService.prototype.DELETE = function (url, headers, params) { };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function APIModel() { }
    /**
     * @record
     */
    function HttpBaseModel() { }
    if (false) {
        /** @type {?} */
        HttpBaseModel.prototype.server;
        /** @type {?|undefined} */
        HttpBaseModel.prototype.path;
        /** @type {?|undefined} */
        HttpBaseModel.prototype.method;
        /** @type {?|undefined} */
        HttpBaseModel.prototype.file;
    }
    /**
     * @record
     */
    function FileModel() { }
    if (false) {
        /** @type {?} */
        FileModel.prototype.filename;
        /** @type {?} */
        FileModel.prototype.extension;
    }
    /** @enum {string} */
    var HttpMethod = {
        POST: 'POST',
        GET: 'GET',
        PUT: 'PUT',
        DELETE: 'DELETE',
    };
    var HostModel = /** @class */ (function () {
        function HostModel() {
            this.protocol = 'https';
        }
        return HostModel;
    }());
    if (false) {
        /** @type {?} */
        HostModel.prototype.protocol;
        /** @type {?} */
        HostModel.prototype.host;
        /** @type {?} */
        HostModel.prototype.port;
    }
    /**
     * @record
     */
    function ApiBaseResponse() { }
    if (false) {
        /** @type {?} */
        ApiBaseResponse.prototype.respStatusCode;
        /** @type {?} */
        ApiBaseResponse.prototype.respStatusMessage;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var ResponseCode = {
        ERR_XXAKEY: 'ERR_XXAKEY',
        ERR_XXATIMESTAMP: 'ERR_XXATIMESTAMP',
        ERR_XXASIGNATURE: 'ERR_XXASIGNATURE',
        ERR_UNAUTHORIZED: 'ERR_UNAUTHORIZED',
        ERR_SYS0001: 'ERR_SYS0001',
        ERR_SYS0500: 'ERR_SYS0500',
        ERR_SYS0404: 'ERR_SYS0404',
        ERR_SYS0501: 'ERR_SYS0501',
        ERR_SYS0502: 'ERR_SYS0502',
        ERR_SCR0001: 'ERR_SCR0001',
        ERR_SCR0002: 'ERR_SCR0002',
        ERR_SCR0003: 'ERR_SCR0003',
        ERR_SCR0004: 'ERR_SCR0004',
        ERR_SCR0005: 'ERR_SCR0005',
        ERR_SCR0006: 'ERR_SCR0006',
        ERR_SCR0007A: 'ERR_SCR0007A',
        ERR_SCR0007B: 'ERR_SCR0007B',
        ERR_SCR0008: 'ERR_SCR0008',
        OK_DEFAULT: 'OK_DEFAULT',
        OK_UPDATED: 'OK_UPDATED',
        OK_SCR001: 'OK_SCR001',
        OK_SCR002: 'OK_SCR002',
        OK_SCR003: 'OK_SCR003',
        OK_SCR004: 'OK_SCR004',
        OK_SCR005: 'OK_SCR005',
        OK_SCR006: 'OK_SCR006',
        OK_SCR007: 'OK_SCR007',
        OK_SCR008: 'OK_SCR008',
        OK_SCR009: 'OK_SCR009',
        OK_SCR010: 'OK_SCR010',
        OK_SCR011: 'OK_SCR011',
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function SecurityResourceModel() { }
    if (false) {
        /** @type {?} */
        SecurityResourceModel.prototype.client_id;
        /** @type {?} */
        SecurityResourceModel.prototype.client_secret;
        /** @type {?} */
        SecurityResourceModel.prototype.grant_type;
        /** @type {?|undefined} */
        SecurityResourceModel.prototype.private_key;
        /** @type {?|undefined} */
        SecurityResourceModel.prototype.aes_key;
        /** @type {?|undefined} */
        SecurityResourceModel.prototype.session_idle;
        /** @type {?|undefined} */
        SecurityResourceModel.prototype.session_timeout;
        /** @type {?|undefined} */
        SecurityResourceModel.prototype.signature;
        /** @type {?|undefined} */
        SecurityResourceModel.prototype.vapid;
    }
    /** @type {?} */
    var oauthInfo = {
        access_token: 'access_token',
        refresh_token: 'refresh_token',
        token_type: 'token_type',
        public_key: 'xrkey',
        expires_in: 'expires_in',
        authority: 'authority',
        image: 'image',
        email: 'email',
        menus: 'menus',
        extras: 'extras',
        server_date: 'server_date',
        locale: 'locale',
        theme: 'theme',
        name: 'name',
    };
    /** @enum {string} */
    var TypeDataOauth = {
        OAUTH: 'oauth',
        PROFILE: 'profile',
        SETTINGS: 'settings',
        LOCALSTORAGE: 'localstorage',
    };
    /** @type {?} */
    var oauthInfoModels = [
        { key: oauthInfo.access_token, enc: true, type: TypeDataOauth.OAUTH, string: true },
        { key: oauthInfo.refresh_token, enc: true, type: TypeDataOauth.OAUTH, string: true },
        { key: oauthInfo.token_type, enc: true, type: TypeDataOauth.OAUTH, string: true },
        { key: oauthInfo.public_key, enc: true, type: TypeDataOauth.OAUTH, string: true },
        { key: oauthInfo.expires_in, enc: true, type: TypeDataOauth.OAUTH, string: false },
        { key: oauthInfo.authority, enc: true, type: TypeDataOauth.OAUTH, string: false },
        { key: oauthInfo.menus, enc: true, type: TypeDataOauth.OAUTH, string: false },
        { key: oauthInfo.extras, enc: true, type: TypeDataOauth.OAUTH, string: false },
        { key: oauthInfo.name, enc: false, type: TypeDataOauth.PROFILE, string: true },
        { key: oauthInfo.email, enc: false, type: TypeDataOauth.PROFILE, string: true },
        { key: oauthInfo.image, enc: false, type: TypeDataOauth.PROFILE, string: true },
        { key: oauthInfo.locale, enc: false, type: TypeDataOauth.SETTINGS, string: true },
        { key: oauthInfo.theme, enc: false, type: TypeDataOauth.SETTINGS, string: true },
        { key: oauthInfo.server_date, enc: false, type: TypeDataOauth.SETTINGS, string: true },
    ];
    /**
     * @record
     */
    function OauthInfoModel() { }
    if (false) {
        /** @type {?} */
        OauthInfoModel.prototype.key;
        /** @type {?} */
        OauthInfoModel.prototype.enc;
        /** @type {?} */
        OauthInfoModel.prototype.type;
        /** @type {?} */
        OauthInfoModel.prototype.string;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var Environment = /** @class */ (function () {
        function Environment() {
            this.production = true;
            this.locale = 'en-US';
            this.basePath = '/';
        }
        return Environment;
    }());
    if (false) {
        /** @type {?} */
        Environment.prototype.production;
        /** @type {?} */
        Environment.prototype.locale;
        /** @type {?} */
        Environment.prototype.basePath;
        /** @type {?} */
        Environment.prototype.host;
    }
    var Server = /** @class */ (function () {
        function Server() {
            this.protocol = 'http';
        }
        return Server;
    }());
    if (false) {
        /** @type {?} */
        Server.prototype.protocol;
        /** @type {?} */
        Server.prototype.host;
        /** @type {?} */
        Server.prototype.port;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var signatureHeader = {
        authorization: 'Authorization',
        signature: 'X-XA-Signature',
        timestamp: 'X-XA-Timestamp',
        key: 'X-XA-Key',
        mark: 'X-XA-Mark',
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function User() { }
    if (false) {
        /** @type {?} */
        User.prototype.name;
        /** @type {?} */
        User.prototype.picture;
    }
    /**
     * @abstract
     */
    var   /**
     * @abstract
     */
    UserInfo = /** @class */ (function () {
        function UserInfo() {
        }
        return UserInfo;
    }());
    if (false) {
        /**
         * @abstract
         * @return {?}
         */
        UserInfo.prototype.loadPhotoUser = function () { };
        /**
         * @abstract
         * @param {?} file
         * @param {?} checksum
         * @return {?}
         */
        UserInfo.prototype.updatePhotoUser = function (file, checksum) { };
        /**
         * @abstract
         * @return {?}
         */
        UserInfo.prototype.getUser = function () { };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var HttpCommonService = /** @class */ (function (_super) {
        __extends(HttpCommonService, _super);
        function HttpCommonService(http) {
            var _this = _super.call(this) || this;
            _this.http = http;
            return _this;
        }
        /**
         * @param {?} api
         * @param {?=} body
         * @param {?=} headers
         * @param {?=} params
         * @param {?=} pathVariable
         * @param {?=} responseType
         * @return {?}
         */
        HttpCommonService.prototype.HTTP_AUTH = /**
         * @param {?} api
         * @param {?=} body
         * @param {?=} headers
         * @param {?=} params
         * @param {?=} pathVariable
         * @param {?=} responseType
         * @return {?}
         */
        function (api, body, headers, params, pathVariable, responseType) {
            if (headers) {
                headers = headers.append(signatureHeader.mark, 'true');
            }
            else
                headers = new http.HttpHeaders().append(signatureHeader.mark, 'true');
            responseType = responseType ? responseType : 'json';
            return this.HTTP_BASE(api, body, headers, params, pathVariable, responseType);
        };
        /**
         * @param {?} api
         * @param {?=} body
         * @param {?=} headers
         * @param {?=} params
         * @param {?=} pathVariable
         * @param {?=} responseType
         * @return {?}
         */
        HttpCommonService.prototype.HTTP_BASE = /**
         * @param {?} api
         * @param {?=} body
         * @param {?=} headers
         * @param {?=} params
         * @param {?=} pathVariable
         * @param {?=} responseType
         * @return {?}
         */
        function (api, body, headers, params, pathVariable, responseType) {
            /** @type {?} */
            var response = null;
            responseType = responseType ? responseType : 'json';
            switch (api.method) {
                case HttpMethod.POST:
                    response = this.POST(this.API(api, pathVariable), body, headers, params, responseType);
                    break;
                case HttpMethod.PUT:
                    response = this.PUT(this.API(api, pathVariable), body, headers, params);
                    break;
                case HttpMethod.DELETE:
                    response = this.DELETE(this.API(api, pathVariable), headers, params);
                    break;
                default:
                    response = this.GET(this.API(api, pathVariable), headers, params, responseType);
                    break;
            }
            return response;
        };
        /**
         * @param {?} url
         * @param {?=} headers
         * @param {?=} params
         * @param {?=} responseType
         * @return {?}
         */
        HttpCommonService.prototype.GET = /**
         * @param {?} url
         * @param {?=} headers
         * @param {?=} params
         * @param {?=} responseType
         * @return {?}
         */
        function (url, headers, params, responseType) {
            return this.http.get(url, { headers: headers, params: params, responseType: responseType });
        };
        /**
         * @param {?} url
         * @param {?} body
         * @param {?=} headers
         * @param {?=} params
         * @param {?=} responseType
         * @return {?}
         */
        HttpCommonService.prototype.POST = /**
         * @param {?} url
         * @param {?} body
         * @param {?=} headers
         * @param {?=} params
         * @param {?=} responseType
         * @return {?}
         */
        function (url, body, headers, params, responseType) {
            return this.http.post(url, body, { headers: headers, params: params, responseType: responseType });
        };
        /**
         * @param {?} url
         * @param {?} body
         * @param {?=} headers
         * @param {?=} params
         * @return {?}
         */
        HttpCommonService.prototype.PUT = /**
         * @param {?} url
         * @param {?} body
         * @param {?=} headers
         * @param {?=} params
         * @return {?}
         */
        function (url, body, headers, params) {
            return this.http.put(url, body, { headers: headers, params: params });
        };
        /**
         * @param {?} url
         * @param {?=} headers
         * @param {?=} params
         * @return {?}
         */
        HttpCommonService.prototype.DELETE = /**
         * @param {?} url
         * @param {?=} headers
         * @param {?=} params
         * @return {?}
         */
        function (url, headers, params) {
            return this.http.delete(url, { headers: headers, params: params });
        };
        HttpCommonService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */
        HttpCommonService.ctorParameters = function () { return [
            { type: http.HttpClient }
        ]; };
        /** @nocollapse */ HttpCommonService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function HttpCommonService_Factory() { return new HttpCommonService(core.ɵɵinject(http.HttpClient)); }, token: HttpCommonService, providedIn: "root" });
        return HttpCommonService;
    }(HttpAbstractService));
    if (false) {
        /**
         * @type {?}
         * @protected
         */
        HttpCommonService.prototype.http;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var SHARED_PROVIDERS = [
        { provide: HTTP_SERVICE, useClass: HttpCommonService },
    ];
    var SharedModule = /** @class */ (function () {
        function SharedModule() {
        }
        /**
         * @return {?}
         */
        SharedModule.forRoot = /**
         * @return {?}
         */
        function () {
            return (/** @type {?} */ ({
                ngModule: SharedModule,
                providers: __spread(SHARED_PROVIDERS),
            }));
        };
        SharedModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                        ],
                        exports: [],
                        declarations: [],
                    },] }
        ];
        return SharedModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var OAUTH_INFO = new core.InjectionToken('OAUTH INFO Resource');
    /** @type {?} */
    var USER_INFO = new core.InjectionToken('USER INFO Resource');

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var API = new core.InjectionToken('API');

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var ENVIRONMENT = new core.InjectionToken('Environment Config');

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var AUTH_INDEXED_DB = new core.InjectionToken('Auth IndexedDB Resource');
    /** @type {?} */
    var PROFILE_INDEXED_DB = new core.InjectionToken('Profile IndexedDB Resource');
    /** @type {?} */
    var SETTINGS_INDEXED_DB = new core.InjectionToken('Settings IndexedDB Resource');
    /** @type {?} */
    var PANIC_INDEXED_DB = new core.InjectionToken('Panic IndexedDB Resource');

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var PANIC = new core.InjectionToken('Panic Resource');

    exports.API = API;
    exports.AUTH_INDEXED_DB = AUTH_INDEXED_DB;
    exports.ENVIRONMENT = ENVIRONMENT;
    exports.Environment = Environment;
    exports.HTTP_SERVICE = HTTP_SERVICE;
    exports.HostModel = HostModel;
    exports.HttpCommonService = HttpCommonService;
    exports.HttpMethod = HttpMethod;
    exports.OAUTH_INFO = OAUTH_INFO;
    exports.PANIC = PANIC;
    exports.PANIC_INDEXED_DB = PANIC_INDEXED_DB;
    exports.PROFILE_INDEXED_DB = PROFILE_INDEXED_DB;
    exports.ResponseCode = ResponseCode;
    exports.SETTINGS_INDEXED_DB = SETTINGS_INDEXED_DB;
    exports.SHARED_PROVIDERS = SHARED_PROVIDERS;
    exports.SharedModule = SharedModule;
    exports.TypeDataOauth = TypeDataOauth;
    exports.USER_INFO = USER_INFO;
    exports.UserInfo = UserInfo;
    exports.oauthInfo = oauthInfo;
    exports.oauthInfoModels = oauthInfoModels;
    exports.signatureHeader = signatureHeader;
    exports.ɵa = HttpAbstractService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=xaphira-shared.umd.js.map
