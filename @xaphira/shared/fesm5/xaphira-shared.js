import { __extends, __spread } from 'tslib';
import { InjectionToken, Injectable, ɵɵdefineInjectable, ɵɵinject, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpHeaders, HttpClient } from '@angular/common/http';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var HTTP_SERVICE = new InjectionToken('Http Service');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var  /**
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
var  /**
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
            headers = new HttpHeaders().append(signatureHeader.mark, 'true');
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
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    HttpCommonService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    /** @nocollapse */ HttpCommonService.ngInjectableDef = ɵɵdefineInjectable({ factory: function HttpCommonService_Factory() { return new HttpCommonService(ɵɵinject(HttpClient)); }, token: HttpCommonService, providedIn: "root" });
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
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
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
var OAUTH_INFO = new InjectionToken('OAUTH INFO Resource');
/** @type {?} */
var USER_INFO = new InjectionToken('USER INFO Resource');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var API = new InjectionToken('API');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var ENVIRONMENT = new InjectionToken('Environment Config');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var AUTH_INDEXED_DB = new InjectionToken('Auth IndexedDB Resource');
/** @type {?} */
var PROFILE_INDEXED_DB = new InjectionToken('Profile IndexedDB Resource');
/** @type {?} */
var SETTINGS_INDEXED_DB = new InjectionToken('Settings IndexedDB Resource');
/** @type {?} */
var PANIC_INDEXED_DB = new InjectionToken('Panic IndexedDB Resource');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var PANIC = new InjectionToken('Panic Resource');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { API, AUTH_INDEXED_DB, ENVIRONMENT, Environment, HTTP_SERVICE, HostModel, HttpCommonService, HttpMethod, OAUTH_INFO, PANIC, PANIC_INDEXED_DB, PROFILE_INDEXED_DB, ResponseCode, SETTINGS_INDEXED_DB, SHARED_PROVIDERS, SharedModule, TypeDataOauth, USER_INFO, UserInfo, oauthInfo, oauthInfoModels, signatureHeader, HttpAbstractService as ɵa };
//# sourceMappingURL=xaphira-shared.js.map
