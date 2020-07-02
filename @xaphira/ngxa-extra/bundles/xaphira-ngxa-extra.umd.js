(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@nebular/theme'), require('@xaphira/ngxa-theme'), require('@xaphira/ngxa-common'), require('rxjs/operators'), require('@xaphira/utils'), require('@xaphira/shared'), require('@angular/router'), require('@xaphira/ngxa-auth'), require('@ngx-translate/core')) :
    typeof define === 'function' && define.amd ? define('@xaphira/ngxa-extra', ['exports', '@angular/core', '@angular/forms', '@nebular/theme', '@xaphira/ngxa-theme', '@xaphira/ngxa-common', 'rxjs/operators', '@xaphira/utils', '@xaphira/shared', '@angular/router', '@xaphira/ngxa-auth', '@ngx-translate/core'], factory) :
    (global = global || self, factory((global.xaphira = global.xaphira || {}, global.xaphira['ngxa-extra'] = {}), global.ng.core, global.ng.forms, global['@nebular/theme'], global['@xaphira/ngxa-theme'], global['@xaphira/ngxa-common'], global.rxjs.operators, global['@xaphira/utils'], global['@xaphira/shared'], global.ng.router, global['@xaphira/ngxa-auth'], global['@ngx-translate/core']));
}(this, (function (exports, core, forms, theme, ngxaTheme, ngxaCommon, operators, utils, shared, router, ngxaAuth, core$1) { 'use strict';

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
    var ChangePasswordPageComponent = /** @class */ (function (_super) {
        __extends(ChangePasswordPageComponent, _super);
        function ChangePasswordPageComponent(injector) {
            var _this = _super.call(this, injector, {
                'password': [],
                'newPassword': [],
                'confirmPassword': [],
            }) || this;
            _this.injector = injector;
            _this.passwordPattern = utils.Pattern.PASSWORD_MEDIUM;
            _this.enc = injector.get(utils.EncryptionService);
            _this.oauthResource = injector.get(shared.OAUTH_INFO);
            return _this;
        }
        /**
         * @return {?}
         */
        ChangePasswordPageComponent.prototype.onSubmit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            /** @type {?} */
            var data = {
                password: this.enc.encryptAES(this.oauthResource['aes_key'], this.formGroup.get('password').value),
                newPassword: this.enc.encryptAES(this.oauthResource['aes_key'], this.formGroup.get('newPassword').value),
                confirmPassword: this.enc.encryptAES(this.oauthResource['aes_key'], this.formGroup.get('confirmPassword').value),
            };
            ((/** @type {?} */ (_super.prototype.onSubmit.call(this, data, 'security', 'change-password'))))
                .pipe(operators.takeUntil(this.destroy$))
                .subscribe((/**
             * @param {?} response
             * @return {?}
             */
            function (response) {
                if (response) {
                    switch (response.respStatusCode) {
                        case shared.ResponseCode.ERR_SCR0002.toString():
                            _this.formGroup.controls['password'].setErrors({
                                'incorrect': true,
                            });
                            break;
                        case shared.ResponseCode.ERR_SCR0006.toString():
                            _this.formGroup.controls['newPassword'].setErrors({
                                'equal': true,
                            });
                            break;
                        default:
                            break;
                    }
                }
            }));
        };
        ChangePasswordPageComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'xa-change-password-page',
                        template: "<xa-page-outlet [header]=\"'Change Password'\">\n  <form [formGroup]=\"formGroup\">\n    <xa-input-text\n      [name]=\"'password'\"\n      [label]=\"'Password'\"\n      [type]=\"'password'\"\n      [required]=\"true\"\n      formControlName=\"password\">\n    </xa-input-text>\n    <xa-input-text\n      [name]=\"'newPassword'\"\n      [label]=\"'New Password'\"\n      [type]=\"'password'\"\n      [required]=\"true\"\n      [pattern]=\"passwordPattern\"\n      xaValidateNotEqual=\"password\"\n      formControlName=\"newPassword\">\n    </xa-input-text>\n    <xa-input-text\n      [name]=\"'confirmPassword'\"\n      [label]=\"'Confirm Password'\"\n      [type]=\"'password'\"\n      [required]=\"true\"\n      xaValidateEqual=\"newPassword\"\n      formControlName=\"confirmPassword\">\n    </xa-input-text>\n    <xa-button-submit\n      [disabledButton]=\"disabled\"\n      (onSubmit)=\"onSubmit()\"\n      [name]=\"'Update Password'\"\n      [formGroupButton]=\"formGroup\">\n    </xa-button-submit>\n  </form>\n</xa-page-outlet>\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        ChangePasswordPageComponent.ctorParameters = function () { return [
            { type: core.Injector }
        ]; };
        return ChangePasswordPageComponent;
    }(ngxaCommon.BaseFormComponent));
    if (false) {
        /** @type {?} */
        ChangePasswordPageComponent.prototype.passwordPattern;
        /**
         * @type {?}
         * @private
         */
        ChangePasswordPageComponent.prototype.enc;
        /**
         * @type {?}
         * @private
         */
        ChangePasswordPageComponent.prototype.oauthResource;
        /** @type {?} */
        ChangePasswordPageComponent.prototype.injector;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ExtraComponent = /** @class */ (function () {
        function ExtraComponent() {
        }
        ExtraComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'xa-extra',
                        template: "\n    <router-outlet></router-outlet>\n  "
                    }] }
        ];
        return ExtraComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ProfilePageComponent = /** @class */ (function (_super) {
        __extends(ProfilePageComponent, _super);
        function ProfilePageComponent(injector, userService, profileIndexedDB) {
            var _this = _super.call(this, injector, {
                'name': [],
                'email': [],
                'phoneNumber': [],
                'address': [null, [forms.Validators.minLength(5)]],
                'country': [],
                'province': [],
                'city': [],
                'district': [],
                'subDistrict': [],
            }) || this;
            _this.injector = injector;
            _this.userService = userService;
            _this.profileIndexedDB = profileIndexedDB;
            _this.patternEmail = utils.Pattern.EMAIL;
            _this.patternPhoneNumber = utils.Pattern.PHONE_NUMBER;
            _this.minLength = 5;
            _this.disabledUpload = false;
            _this.formGroupImage = _this.formBuilder.group({
                'image': [],
            });
            _this.apiSelectCountry = _this.api['master']['select-country'];
            _this.apiSelectProvince = _this.api['master']['select-province'];
            _this.apiSelectCity = _this.api['master']['select-city'];
            _this.apiSelectDistrict = _this.api['master']['select-district'];
            _this.apiSelectSubDistrict = _this.api['master']['select-subdistrict'];
            return _this;
        }
        /**
         * @return {?}
         */
        ProfilePageComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.onInit('profile', 'get-profile');
            this.profileIndexedDB.get('image-b64').then((/**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                _this.image = value;
            }));
            this.paramSelectProvince = [{
                    key: 'country',
                    value: 'undefined',
                }];
            this.paramSelectCity = [{
                    key: 'province',
                    value: 'undefined',
                }];
            this.paramSelectDistrict = [{
                    key: 'city',
                    value: 'undefined',
                }];
            this.paramSelectSubDistrict = [{
                    key: 'district',
                    value: 'undefined',
                }];
        };
        /**
         * @return {?}
         */
        ProfilePageComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () { };
        /**
         * @param {?} serviceName
         * @param {?} apiName
         * @return {?}
         */
        ProfilePageComponent.prototype.onInit = /**
         * @param {?} serviceName
         * @param {?} apiName
         * @return {?}
         */
        function (serviceName, apiName) {
            var _this = this;
            this.loadingForm = true;
            this.exec(serviceName, apiName)
                .subscribe((/**
             * @param {?} success
             * @return {?}
             */
            function (success) {
                _this.loadingForm = false;
                _this.formGroup.controls['name'].setValue(success['name']);
                _this.formGroup.controls['email'].setValue(success['email']);
                success['address'] ? _this.formGroup.controls['address'].setValue(success['address']) : null;
                success['province'] ? _this.formGroup.controls['province'].setValue(success['province']) : null;
                success['city'] ? _this.formGroup.controls['city'].setValue(success['city']) : null;
                success['district'] ? _this.formGroup.controls['district'].setValue(success['district']) : null;
                success['subDistrict'] ? _this.formGroup.controls['subDistrict'].setValue(success['subDistrict']) : null;
                success['phoneNumber'] ? _this.formGroup.controls['phoneNumber'].setValue(success['phoneNumber']) : null;
                success['mobileNumber'] ? _this.formGroup.controls['mobileNumber'].setValue(success['mobileNumber']) : null;
                _this.formGroup.markAsPristine();
            }), (/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                _this.loadingForm = true;
                /** @type {?} */
                var err = error['error'];
                if (err) {
                    _this.toastr.showI18n(err.respStatusMessage[err.respStatusCode], true, null, 'danger');
                }
                else {
                    _this.toastr.showI18n((/** @type {?} */ (err)), true, null, 'danger');
                }
            }));
        };
        /**
         * @param {?} select
         * @return {?}
         */
        ProfilePageComponent.prototype.onSelectCountry = /**
         * @param {?} select
         * @return {?}
         */
        function (select) {
            this.paramSelectProvince = [
                {
                    key: 'country',
                    value: select ? select.value : 'undefined',
                },
            ];
            this.onClearProvince();
        };
        /**
         * @param {?} select
         * @return {?}
         */
        ProfilePageComponent.prototype.onSelectProvince = /**
         * @param {?} select
         * @return {?}
         */
        function (select) {
            this.paramSelectCity = [
                {
                    key: 'province',
                    value: select ? select.value : 'undefined',
                },
            ];
            this.onClearProvince();
        };
        /**
         * @param {?} select
         * @return {?}
         */
        ProfilePageComponent.prototype.onSelectCity = /**
         * @param {?} select
         * @return {?}
         */
        function (select) {
            this.paramSelectDistrict = [
                {
                    key: 'city',
                    value: select ? select.value : 'undefined',
                },
            ];
            this.onClearCity();
        };
        /**
         * @param {?} select
         * @return {?}
         */
        ProfilePageComponent.prototype.onSelectDistrict = /**
         * @param {?} select
         * @return {?}
         */
        function (select) {
            this.paramSelectSubDistrict = [
                {
                    key: 'district',
                    value: select ? select.value : 'undefined',
                },
            ];
            this.onClearDistrict();
        };
        /**
         * @return {?}
         */
        ProfilePageComponent.prototype.onClearCountry = /**
         * @return {?}
         */
        function () {
            this.formGroup.patchValue({
                'province': [],
                'city': [],
                'district': [],
                'subDistrict': [],
            });
        };
        /**
         * @return {?}
         */
        ProfilePageComponent.prototype.onClearProvince = /**
         * @return {?}
         */
        function () {
            this.formGroup.patchValue({
                'city': [],
                'district': [],
                'subDistrict': [],
            });
        };
        /**
         * @return {?}
         */
        ProfilePageComponent.prototype.onClearCity = /**
         * @return {?}
         */
        function () {
            this.formGroup.patchValue({
                'district': [],
                'subDistrict': [],
            });
        };
        /**
         * @return {?}
         */
        ProfilePageComponent.prototype.onClearDistrict = /**
         * @return {?}
         */
        function () {
            this.formGroup.get('subDistrict').patchValue([]);
        };
        /**
         * @param {?} file
         * @return {?}
         */
        ProfilePageComponent.prototype.uploadImage = /**
         * @param {?} file
         * @return {?}
         */
        function (file) {
            var _this = this;
            /** @type {?} */
            var data = new FormData();
            data.append('photo', file);
            this.formGroupImage.get('image').disable();
            this.exec('file', 'photo-profile', data).subscribe((/**
             * @param {?} success
             * @return {?}
             */
            function (success) {
                _this.userService.updatePhotoUser(file, success.respStatusMessage['checksum']);
                _this.uploadFinished = true;
                _this.formGroupImage.markAsPristine();
                _this.toastr.showI18n(success.respStatusMessage[success.respStatusCode], true, null, 'success');
            }), (/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                _this.formGroupImage.get('image').enable();
                _this.toastr.showI18n(error.respStatusMessage[error.respStatusCode], true, null, 'danger');
            }));
        };
        /**
         * @param {?} prop
         * @return {?}
         */
        ProfilePageComponent.prototype.valueSelect = /**
         * @param {?} prop
         * @return {?}
         */
        function (prop) {
            if (this.formGroup.get(prop).value) {
                if (this.formGroup.get(prop).value.label) {
                    return this.formGroup.get(prop).value.label;
                }
                else {
                    return this.formGroup.get(prop).value;
                }
            }
            else {
                return null;
            }
        };
        /**
         * @return {?}
         */
        ProfilePageComponent.prototype.onSubmit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            /** @type {?} */
            var data = {
                name: this.formGroup.get('name').value,
                email: this.formGroup.get('email').value,
                phoneNumber: this.formGroup.get('phoneNumber').value,
                address: this.formGroup.get('address').value,
                country: this.valueSelect('country'),
                province: this.valueSelect('province'),
                city: this.valueSelect('city'),
                district: this.valueSelect('district'),
                subDistrict: this.valueSelect('subDistrict'),
            };
            ((/** @type {?} */ (_super.prototype.onSubmit.call(this, data, 'profile', 'change-profile'))))
                .pipe(operators.takeUntil(this.destroy$))
                .subscribe((/**
             * @param {?} response
             * @return {?}
             */
            function (response) {
                if (response) {
                    switch (response.respStatusCode) {
                        case shared.ResponseCode.ERR_SCR0008.toString():
                            _this.formGroup.controls['email'].setErrors({
                                'email': true,
                            });
                            break;
                        case shared.ResponseCode.ERR_SCR0007A.toString():
                            _this.formGroup.controls['phoneNumber'].setErrors({
                                'error.pattern.phoneNumber': true,
                            });
                            break;
                        default:
                            break;
                    }
                }
            }));
        };
        ProfilePageComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'xa-profile-page',
                        template: "<xa-page-outlet [header]=\"'Profile'\">\n  <div class=\"row\">\n    <div class=\"col-md-4 col-lg-4 col-xxxl-6\">\n      <form [formGroup]=\"formGroupImage\">\n        <xa-image-upload\n          [radius]=\"50\"\n          [skeleton]=\"loadingForm\"\n          [image]=\"image\"\n          [uploadFn]=\"uploadFinished\"\n          (onUpload)=\"uploadImage($event)\"\n          formControlName=\"image\">\n        </xa-image-upload>\n      </form>\n    </div>\n    <div class=\"col-md-8 col-lg-8 col-xxxl-6\">\n      <form [formGroup]=\"formGroup\">\n        <xa-input-text\n          [name]=\"'name'\"\n          [label]=\"'Name'\"\n          [required]=\"true\"\n          [skeleton]=\"loadingForm\"\n          formControlName=\"name\">\n        </xa-input-text>\n        <xa-input-text\n          [name]=\"'email'\"\n          [label]=\"'Email'\"\n          [required]=\"true\"\n          [pattern]=\"patternEmail\"\n          [skeleton]=\"loadingForm\"\n          formControlName=\"email\">\n        </xa-input-text>\n        <xa-input-text\n          [name]=\"'phoneNumber'\"\n          [label]=\"'Telephone'\"\n          [required]=\"true\"\n          [pattern]=\"patternPhoneNumber\"\n          [skeleton]=\"loadingForm\"\n          formControlName=\"phoneNumber\">\n        </xa-input-text>\n        <xa-textarea\n          [name]=\"'address'\"\n          [label]=\"'Address'\"\n          [required]=\"true\"\n          [minLength]=\"minLength\"\n          [skeleton]=\"loadingForm\"\n          formControlName=\"address\">\n        </xa-textarea>\n        <xa-select\n          [name]=\"'country'\"\n          [label]=\"'Country'\"\n          [api]=\"apiSelectCountry\"\n          [skeleton]=\"loadingForm\"\n          (onSelect)=\"onSelectCountry($event)\"\n          (onClear)=\"onClearCountry()\"\n          formControlName=\"country\">\n        </xa-select>\n        <xa-select\n          [name]=\"'province'\"\n          [label]=\"'Province'\"\n          [api]=\"apiSelectProvince\"\n          [queryParam]=\"paramSelectProvince\"\n          [skeleton]=\"loadingForm\"\n          (onSelect)=\"onSelectProvince($event)\"\n          (onClear)=\"onClearProvince()\"\n          formControlName=\"province\">\n        </xa-select>\n        <xa-select\n          [name]=\"'city'\"\n          [label]=\"'City'\"\n          [api]=\"apiSelectCity\"\n          [queryParam]=\"paramSelectCity\"\n          [skeleton]=\"loadingForm\"\n          (onSelect)=\"onSelectCity($event)\"\n          (onClear)=\"onClearCity()\"\n          formControlName=\"city\">\n        </xa-select>\n        <xa-select\n          [name]=\"'district'\"\n          [label]=\"'District'\"\n          [api]=\"apiSelectDistrict\"\n          [queryParam]=\"paramSelectDistrict\"\n          [skeleton]=\"loadingForm\"\n          (onSelect)=\"onSelectDistrict($event)\"\n          (onClear)=\"onClearDistrict()\"\n          formControlName=\"district\">\n        </xa-select>\n        <xa-select\n          [name]=\"'subDistrict'\"\n          [label]=\"'Sub District'\"\n          [api]=\"apiSelectSubDistrict\"\n          [queryParam]=\"paramSelectSubDistrict\"\n          [skeleton]=\"loadingForm\"\n          formControlName=\"subDistrict\">\n        </xa-select>\n        <xa-button-submit\n          (onSubmit)=\"onSubmit()\"\n          [name]=\"'Update Profile'\"\n          [disabledButton]=\"disabled\"\n          [formGroupButton]=\"formGroup\"\n          [skeleton]=\"loadingForm\">\n        </xa-button-submit>\n      </form>\n    </div>\n  </div>\n</xa-page-outlet>\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        ProfilePageComponent.ctorParameters = function () { return [
            { type: core.Injector },
            { type: shared.UserInfo, decorators: [{ type: core.Inject, args: [shared.USER_INFO,] }] },
            { type: undefined, decorators: [{ type: core.Inject, args: [shared.PROFILE_INDEXED_DB,] }] }
        ]; };
        return ProfilePageComponent;
    }(ngxaCommon.BaseFormComponent));
    if (false) {
        /** @type {?} */
        ProfilePageComponent.prototype.image;
        /** @type {?} */
        ProfilePageComponent.prototype.formGroupImage;
        /** @type {?} */
        ProfilePageComponent.prototype.uploadFinished;
        /** @type {?} */
        ProfilePageComponent.prototype.patternEmail;
        /** @type {?} */
        ProfilePageComponent.prototype.patternPhoneNumber;
        /** @type {?} */
        ProfilePageComponent.prototype.minLength;
        /** @type {?} */
        ProfilePageComponent.prototype.disabledUpload;
        /** @type {?} */
        ProfilePageComponent.prototype.apiSelectCountry;
        /** @type {?} */
        ProfilePageComponent.prototype.apiSelectProvince;
        /** @type {?} */
        ProfilePageComponent.prototype.paramSelectProvince;
        /** @type {?} */
        ProfilePageComponent.prototype.apiSelectCity;
        /** @type {?} */
        ProfilePageComponent.prototype.paramSelectCity;
        /** @type {?} */
        ProfilePageComponent.prototype.apiSelectDistrict;
        /** @type {?} */
        ProfilePageComponent.prototype.paramSelectDistrict;
        /** @type {?} */
        ProfilePageComponent.prototype.apiSelectSubDistrict;
        /** @type {?} */
        ProfilePageComponent.prototype.paramSelectSubDistrict;
        /** @type {?} */
        ProfilePageComponent.prototype.injector;
        /**
         * @type {?}
         * @private
         */
        ProfilePageComponent.prototype.userService;
        /**
         * @type {?}
         * @private
         */
        ProfilePageComponent.prototype.profileIndexedDB;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SettingsPageComponent = /** @class */ (function (_super) {
        __extends(SettingsPageComponent, _super);
        function SettingsPageComponent(injector, translate, themeService, settingsIndexedDB, authIndexedDB) {
            var _this = _super.call(this, injector, {
                'locale': [],
                'theme': [],
            }) || this;
            _this.injector = injector;
            _this.translate = translate;
            _this.themeService = themeService;
            _this.settingsIndexedDB = settingsIndexedDB;
            _this.authIndexedDB = authIndexedDB;
            _this.dataTheme = [
                {
                    selected: false,
                },
            ];
            _this.apiSelectLocale = _this.api['master']['select-all-locale'];
            return _this;
        }
        /**
         * @return {?}
         */
        SettingsPageComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.onInit('security', 'get-settings');
        };
        /**
         * @return {?}
         */
        SettingsPageComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () { };
        /**
         * @param {?} serviceName
         * @param {?} apiName
         * @return {?}
         */
        SettingsPageComponent.prototype.onInit = /**
         * @param {?} serviceName
         * @param {?} apiName
         * @return {?}
         */
        function (serviceName, apiName) {
            var _this = this;
            this.loadingForm = true;
            this.exec(serviceName, apiName)
                .subscribe((/**
             * @param {?} success
             * @return {?}
             */
            function (success) {
                _this.loadingForm = false;
                _this.localeCode = success['localeCode'];
                _this.localeIdentifier = success['localeIdentifier'];
                _this.localeIcon = success['localeIcon'] ? success['localeIcon'] : '';
                _this.formGroup.controls['locale'].setValue(_this.localeIdentifier);
                /** @type {?} */
                var darkMode = [{
                        selected: false,
                    }];
                if (success['theme'] === 'dark') {
                    darkMode = [{
                            selected: true,
                        }];
                }
                _this.formGroup.controls['theme'].setValue(darkMode);
                _this.formGroup.markAsPristine();
            }), (/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                _this.loadingForm = true;
                if (error.respStatusMessage)
                    _this.toastr.showI18n(error.respStatusMessage[error.respStatusCode], true, null, 'danger');
            }));
        };
        /**
         * @return {?}
         */
        SettingsPageComponent.prototype.onSubmit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            if (this.formGroup.get('locale').value['value']) {
                this.localeCode = this.formGroup.get('locale').value['value'];
                this.localeIdentifier = this.formGroup.get('locale').value['label'];
                this.localeIcon = this.formGroup.get('locale').value['icon'];
            }
            /** @type {?} */
            var theme = this.formGroup.get('theme').value;
            /** @type {?} */
            var data = {
                'localeCode': this.localeCode,
                'localeIdentifier': this.localeIdentifier,
                'localeIcon': this.localeIcon,
                'theme': theme[0].selected ? 'dark' : 'default',
            };
            this.disabled = true;
            Promise.all([
                this.settingsIndexedDB.get('locale'),
                this.settingsIndexedDB.get('theme'),
            ]).then((/**
             * @param {?} current
             * @return {?}
             */
            function (current) {
                if ((current[0] !== _this.localeCode) || (current[1] !== data['theme'])) {
                    _this.exec('security', 'change-settings', data).subscribe((/**
                     * @param {?} success
                     * @return {?}
                     */
                    function (success) {
                        if (success) {
                            if (success.respStatusCode === shared.ResponseCode.OK_SCR002.toString()) {
                                if (theme) {
                                    _this.changeTheme(theme[0].selected);
                                }
                                if (current[0] !== _this.localeCode) {
                                    _this.settingsIndexedDB.put('locale', _this.localeCode).then((/**
                                     * @return {?}
                                     */
                                    function () {
                                        _this.http.HTTP_AUTH(_this.api['security']['get-menus']).subscribe((/**
                                         * @param {?} menus
                                         * @return {?}
                                         */
                                        function (menus) {
                                            Promise.all([
                                                _this.authIndexedDB.putEnc('menus', JSON.stringify(menus['main'])),
                                                _this.authIndexedDB.putEnc('extras', JSON.stringify(menus['extra'])),
                                            ]).then((/**
                                             * @return {?}
                                             */
                                            function () {
                                                _this.translate.getTranslation(_this.localeCode).subscribe((/**
                                                 * @param {?} lang
                                                 * @return {?}
                                                 */
                                                function (lang) {
                                                    _this.translate.use(_this.localeCode);
                                                    _this.translate.setTranslation(_this.localeCode, lang, true);
                                                    _this.toastr.showI18n(success.respStatusMessage[success.respStatusCode], true);
                                                    _this.disabled = false;
                                                    _this.formGroup.markAsPristine();
                                                }));
                                            }));
                                        }), (/**
                                         * @param {?} error
                                         * @return {?}
                                         */
                                        function (error) {
                                            _this.toastr.showI18n('error.translate', false, null, 'warning');
                                        }));
                                    }));
                                }
                            }
                        }
                    }), (/**
                     * @param {?} error
                     * @return {?}
                     */
                    function (error) {
                        _this.disabled = false;
                        _this.toastr.showI18n(error.respStatusMessage[error.respStatusCode], true, null, 'danger');
                    }));
                }
            }));
        };
        /**
         * @param {?} dark
         * @return {?}
         */
        SettingsPageComponent.prototype.changeTheme = /**
         * @param {?} dark
         * @return {?}
         */
        function (dark) {
            /** @type {?} */
            var theme = dark ? 'dark' : 'default';
            this.settingsIndexedDB.put('theme', theme).then();
            this.themeService.changeTheme(theme);
        };
        SettingsPageComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'xa-settings-page',
                        template: "<xa-page-outlet [header]=\"'Settings'\">\n  <form [formGroup]=\"formGroup\">\n    <xa-select\n      [name]=\"'locale'\"\n      [label]=\"'Locale'\"\n      [required]=\"true\"\n      [searchable]=\"false\"\n      [skeleton]=\"loadingForm\"\n      [api]=\"apiSelectLocale\"\n      formControlName=\"locale\">\n      <div *xaContentSelect=\"let item\">\n        <span class=\"{{item.icon ? item.icon : localeIcon}}\"></span>\n        <span class=\"label-select\">{{item.label ? item.label : item}}</span>\n      </div>\n    </xa-select>\n    <xa-checkbox\n      [name]=\"'checkbox'\"\n      [label]=\"'Dark Mode'\"\n      [data]=\"dataTheme\"\n      [skeleton]=\"loadingForm\"\n      formControlName=\"theme\">\n    </xa-checkbox>\n    <xa-button-submit\n      (onSubmit)=\"onSubmit()\"\n      [name]=\"'Update Settings'\"\n      [formGroupButton]=\"formGroup\"\n      [disabledButton]=\"disabled\"\n      [skeleton]=\"loadingForm\">\n    </xa-button-submit>\n  </form>\n</xa-page-outlet>\n",
                        styles: [".label-select{padding-left:.5rem}"]
                    }] }
        ];
        /** @nocollapse */
        SettingsPageComponent.ctorParameters = function () { return [
            { type: core.Injector },
            { type: core$1.TranslateService },
            { type: theme.NbThemeService },
            { type: undefined, decorators: [{ type: core.Inject, args: [shared.SETTINGS_INDEXED_DB,] }] },
            { type: undefined, decorators: [{ type: core.Inject, args: [shared.AUTH_INDEXED_DB,] }] }
        ]; };
        return SettingsPageComponent;
    }(ngxaCommon.BaseFormComponent));
    if (false) {
        /** @type {?} */
        SettingsPageComponent.prototype.apiSelectLocale;
        /** @type {?} */
        SettingsPageComponent.prototype.localeIcon;
        /**
         * @type {?}
         * @private
         */
        SettingsPageComponent.prototype.localeCode;
        /**
         * @type {?}
         * @private
         */
        SettingsPageComponent.prototype.localeIdentifier;
        /** @type {?} */
        SettingsPageComponent.prototype.dataTheme;
        /** @type {?} */
        SettingsPageComponent.prototype.injector;
        /**
         * @type {?}
         * @private
         */
        SettingsPageComponent.prototype.translate;
        /**
         * @type {?}
         * @private
         */
        SettingsPageComponent.prototype.themeService;
        /**
         * @type {?}
         * @private
         */
        SettingsPageComponent.prototype.settingsIndexedDB;
        /**
         * @type {?}
         * @private
         */
        SettingsPageComponent.prototype.authIndexedDB;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DeactivatedPromptComponent = /** @class */ (function () {
        function DeactivatedPromptComponent(ref) {
            this.ref = ref;
            this.disabled = false;
        }
        /**
         * @param {?} password
         * @return {?}
         */
        DeactivatedPromptComponent.prototype.submit = /**
         * @param {?} password
         * @return {?}
         */
        function (password) {
            this.disabled = true;
            this.ref.close(password);
        };
        DeactivatedPromptComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'xa-deactivated-prompt',
                        template: "<nb-card>\n  <nb-card-header>\n    <h6 class=\"text-danger deactivated-label\">\n        {{ 'Deactivate Account' | translate }}\n    </h6>\n  </nb-card-header>\n  <nb-card-body>\n    <p>\n      {{ 'message.deactivate-form' | translate }}\n    </p>\n    <p>\n      {{ 'message.input-password' | translate }}\n    </p>\n    <input\n      [(ngModel)]=\"password\"\n      type=\"password\"\n      nbInput\n      class=\"deactivated-password\"\n      placeholder=\"Password\">\n  </nb-card-body>\n  <nb-card-footer>\n    <button\n      type=\"submit\"\n      status=\"danger\"\n      size=\"large\"\n      class=\"deactivated-button\"\n      [disabled]=\"!password || disabled\"\n      (click)=\"submit(password)\"\n      nbButton>\n      {{ 'message.button-deactivate' | translate }}\n    </button>\n  </nb-card-footer>\n</nb-card>\n",
                        styles: ["/*!\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */.nb-theme-default :host input.deactivated-password{max-width:unset;width:100%}.nb-theme-default :host .cancel{margin-right:1rem}.nb-theme-default :host button.deactivated-button{width:100%}.nb-theme-dark :host input.deactivated-password{max-width:unset;width:100%}.nb-theme-dark :host .cancel{margin-right:1rem}.nb-theme-dark :host button.deactivated-button{width:100%}.nb-theme-cosmic :host input.deactivated-password{max-width:unset;width:100%}.nb-theme-cosmic :host .cancel{margin-right:1rem}.nb-theme-cosmic :host button.deactivated-button{width:100%}.nb-theme-corporate :host input.deactivated-password{max-width:unset;width:100%}.nb-theme-corporate :host .cancel{margin-right:1rem}.nb-theme-corporate :host button.deactivated-button{width:100%}@media (max-width:767.98px){.nb-theme-default :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-default :host button.deactivated-button{font-size:.6rem}.nb-theme-dark :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-dark :host button.deactivated-button{font-size:.6rem}.nb-theme-cosmic :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-cosmic :host button.deactivated-button{font-size:.6rem}.nb-theme-corporate :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-corporate :host button.deactivated-button{font-size:.6rem}}"]
                    }] }
        ];
        /** @nocollapse */
        DeactivatedPromptComponent.ctorParameters = function () { return [
            { type: theme.NbDialogRef }
        ]; };
        return DeactivatedPromptComponent;
    }());
    if (false) {
        /** @type {?} */
        DeactivatedPromptComponent.prototype.disabled;
        /** @type {?} */
        DeactivatedPromptComponent.prototype.password;
        /**
         * @type {?}
         * @protected
         */
        DeactivatedPromptComponent.prototype.ref;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SecurityPageComponent = /** @class */ (function (_super) {
        __extends(SecurityPageComponent, _super);
        function SecurityPageComponent(injector, dialogService) {
            var _this = _super.call(this, injector, {
                'password': [],
            }) || this;
            _this.injector = injector;
            _this.dialogService = dialogService;
            _this.enc = injector.get(utils.EncryptionService);
            _this.oauthResource = injector.get(shared.OAUTH_INFO);
            _this.authToken = injector.get(ngxaAuth.AuthTokenService);
            return _this;
        }
        /**
         * @return {?}
         */
        SecurityPageComponent.prototype.onSubmit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.disabled = true;
            this.dialogService.open(DeactivatedPromptComponent)
                .onClose.subscribe((/**
             * @param {?} password
             * @return {?}
             */
            function (password) {
                if (password) {
                    _this.disabled = true;
                    /** @type {?} */
                    var data = {
                        password: _this.enc.encryptAES(_this.oauthResource['aes_key'], password),
                    };
                    ((/** @type {?} */ (_super.prototype.onSubmit.call(_this, data, 'security', 'deactivated'))))
                        .pipe(operators.takeUntil(_this.destroy$))
                        .subscribe((/**
                     * @param {?} response
                     * @return {?}
                     */
                    function (response) {
                        if (response) {
                            if (response.respStatusCode === shared.ResponseCode.OK_SCR003.toString()) {
                                _this.authToken.logout();
                            }
                        }
                    }));
                }
                else {
                    _this.disabled = false;
                }
            }));
        };
        SecurityPageComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'xa-security-page',
                        template: "<xa-change-password-page></xa-change-password-page>\n<nb-card>\n    <nb-card-body>\n        <div class=\"row\">\n            <div class=\"col-md-3 col-lg-3 col-xxxl-6\">\n                <button\n                    type=\"button\"\n                    status=\"danger\"\n                    size=\"large\"\n                    class=\"deactivated-button\"\n                    [disabled]=\"disabled\"\n                    (click)=\"onSubmit()\"\n                    nbButton>\n                    {{ 'Deactivate Account' | translate }}\n                </button>\n            </div>\n            <div class=\"col-md-8 col-lg-8 col-xxxl-6\">\n                <h6 class=\"text-danger deactivated-label\">\n                    {{ 'message.deactivated-account' | translate }}\n                </h6>\n            </div>\n        </div>\n    </nb-card-body>\n</nb-card>\n",
                        styles: ["button.deactivated-button{width:100%}h6.deactivated-label{padding-top:10px;text-align:center}"]
                    }] }
        ];
        /** @nocollapse */
        SecurityPageComponent.ctorParameters = function () { return [
            { type: core.Injector },
            { type: theme.NbDialogService }
        ]; };
        return SecurityPageComponent;
    }(ngxaCommon.BaseFormComponent));
    if (false) {
        /**
         * @type {?}
         * @private
         */
        SecurityPageComponent.prototype.enc;
        /**
         * @type {?}
         * @private
         */
        SecurityPageComponent.prototype.oauthResource;
        /**
         * @type {?}
         * @private
         */
        SecurityPageComponent.prototype.authToken;
        /** @type {?} */
        SecurityPageComponent.prototype.injector;
        /**
         * @type {?}
         * @private
         */
        SecurityPageComponent.prototype.dialogService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ɵ0 = {
        code: '#PROFILE-PAGE',
    }, ɵ1 = {
        code: '#SECURITY-PAGE',
    }, ɵ2 = {
        code: '#SETTINGS-PAGE',
    };
    /** @type {?} */
    var routes = [{
            path: '',
            component: ExtraComponent,
            canActivateChild: [ngxaAuth.AuthGuardChildService],
            children: [
                {
                    path: 'profile',
                    component: ProfilePageComponent,
                    data: ɵ0,
                },
                {
                    path: 'security',
                    component: SecurityPageComponent,
                    data: ɵ1,
                },
                {
                    path: 'settings',
                    component: SettingsPageComponent,
                    data: ɵ2,
                },
            ],
        }];
    var NgxaExtraRoutingModule = /** @class */ (function () {
        function NgxaExtraRoutingModule() {
        }
        NgxaExtraRoutingModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [router.RouterModule.forChild(routes)],
                        exports: [router.RouterModule],
                    },] }
        ];
        return NgxaExtraRoutingModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var HomePageComponent = /** @class */ (function () {
        function HomePageComponent(profileIndexedDB) {
            this.profileIndexedDB = profileIndexedDB;
        }
        /**
         * @return {?}
         */
        HomePageComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.name = this.profileIndexedDB.get('name');
        };
        /**
         * @return {?}
         */
        HomePageComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () { };
        HomePageComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'xa-home-page',
                        template: "<div class=\"row\">\n  <div class=\"col-md-12\">\n    <nb-card>\n      <div class=\"icon-container\">\n        <div class=\"icon status-primary\">\n          <i [ngClass]=\"'nb-home'\"></i>\n        </div>\n      </div>\n      <div class=\"details\">\n        <div class=\"title h5\">{{'Welcome' | translate}}</div>\n        <div class=\"paragraph-2\">{{'Hi' | translate}}, <strong>{{name | async}}</strong>!</div>\n      </div>\n    </nb-card>\n  </div>\n</div>\n",
                        styles: [".nb-theme-default :host nb-card{flex-direction:row;align-items:center;height:6rem;overflow:visible}.nb-theme-default :host nb-card .icon-container{height:100%;padding:.625rem}.nb-theme-default :host nb-card .icon{display:flex;align-items:center;justify-content:center;width:5.75rem;height:4.75rem;font-size:3.75rem;border-radius:.25rem;transition:width .4s;transform:translate3d(0,0,0);-webkit-transform-style:preserve-3d;-webkit-backface-visibility:hidden;color:#fff}.nb-theme-default :host nb-card .icon.status-primary{background-image:linear-gradient(to right,#598bff,#36f)}.nb-theme-default :host nb-card .icon.status-primary:hover{background-image:linear-gradient(to right,#a6c1ff,#598bff)}.nb-theme-default :host nb-card .icon.status-success{background-image:linear-gradient(to right,#2ce69b,#00d68f)}.nb-theme-default :host nb-card .icon.status-success:hover{background-image:linear-gradient(to right,#8cfac7,#2ce69b)}.nb-theme-default :host nb-card .icon.status-warning{background-image:linear-gradient(to right,#ffc94d,#fa0)}.nb-theme-default :host nb-card .icon.status-warning:hover{background-image:linear-gradient(to right,#ffe59e,#ffc94d)}.nb-theme-default :host nb-card .icon.status-danger{background-image:linear-gradient(to right,#ff708d,#ff3d71)}.nb-theme-default :host nb-card .icon.status-danger:hover{background-image:linear-gradient(to right,#ffa8b4,#ff708d)}.nb-theme-default :host nb-card .icon.status-info{background-image:linear-gradient(to right,#42aaff,#0095ff)}.nb-theme-default :host nb-card .icon.status-info:hover{background-image:linear-gradient(to right,#94cbff,#42aaff)}.nb-theme-default :host nb-card.off{color:#8f9bb3}.nb-theme-default :host nb-card.off .icon,.nb-theme-default :host nb-card.off .status,.nb-theme-default :host nb-card.off .title{color:#8f9bb3}.nb-theme-default :host nb-card.off .icon.status-primary{box-shadow:none;background-image:linear-gradient(to right,transparent,transparent)}.nb-theme-default :host nb-card.off .icon.status-success{box-shadow:none;background-image:linear-gradient(to right,transparent,transparent)}.nb-theme-default :host nb-card.off .icon.status-warning{box-shadow:none;background-image:linear-gradient(to right,transparent,transparent)}.nb-theme-default :host nb-card.off .icon.status-danger{box-shadow:none;background-image:linear-gradient(to right,transparent,transparent)}.nb-theme-default :host nb-card.off .icon.status-info{box-shadow:none;background-image:linear-gradient(to right,transparent,transparent)}.nb-theme-default :host nb-card .details{display:flex;flex-direction:column;justify-content:center;height:100%;border-left:1px solid transparent}[dir=ltr] .nb-theme-default :host nb-card .details{padding:0 .5rem 0 .75rem}[dir=rtl] .nb-theme-default :host nb-card .details{padding:0 .75rem 0 .5rem}.nb-theme-default :host nb-card .title{margin:0}.nb-theme-default :host nb-card .status{text-transform:uppercase}.nb-theme-dark :host nb-card{flex-direction:row;align-items:center;height:6rem;overflow:visible}.nb-theme-dark :host nb-card .icon-container{height:100%;padding:.625rem}.nb-theme-dark :host nb-card .icon{display:flex;align-items:center;justify-content:center;width:5.75rem;height:4.75rem;font-size:3.75rem;border-radius:.25rem;transition:width .4s;transform:translate3d(0,0,0);-webkit-transform-style:preserve-3d;-webkit-backface-visibility:hidden;color:#fff}.nb-theme-dark :host nb-card .icon.status-primary{background-image:linear-gradient(to right,#598bff,#36f)}.nb-theme-dark :host nb-card .icon.status-primary:hover{background-image:linear-gradient(to right,#a6c1ff,#598bff)}.nb-theme-dark :host nb-card .icon.status-success{background-image:linear-gradient(to right,#2ce69b,#00d68f)}.nb-theme-dark :host nb-card .icon.status-success:hover{background-image:linear-gradient(to right,#8cfac7,#2ce69b)}.nb-theme-dark :host nb-card .icon.status-warning{background-image:linear-gradient(to right,#ffc94d,#fa0)}.nb-theme-dark :host nb-card .icon.status-warning:hover{background-image:linear-gradient(to right,#ffe59e,#ffc94d)}.nb-theme-dark :host nb-card .icon.status-danger{background-image:linear-gradient(to right,#ff708d,#ff3d71)}.nb-theme-dark :host nb-card .icon.status-danger:hover{background-image:linear-gradient(to right,#ffa8b4,#ff708d)}.nb-theme-dark :host nb-card .icon.status-info{background-image:linear-gradient(to right,#42aaff,#0095ff)}.nb-theme-dark :host nb-card .icon.status-info:hover{background-image:linear-gradient(to right,#94cbff,#42aaff)}.nb-theme-dark :host nb-card.off{color:#8f9bb3}.nb-theme-dark :host nb-card.off .icon,.nb-theme-dark :host nb-card.off .status,.nb-theme-dark :host nb-card.off .title{color:#8f9bb3}.nb-theme-dark :host nb-card.off .icon.status-primary{box-shadow:none;background-image:linear-gradient(to right,transparent,transparent)}.nb-theme-dark :host nb-card.off .icon.status-success{box-shadow:none;background-image:linear-gradient(to right,transparent,transparent)}.nb-theme-dark :host nb-card.off .icon.status-warning{box-shadow:none;background-image:linear-gradient(to right,transparent,transparent)}.nb-theme-dark :host nb-card.off .icon.status-danger{box-shadow:none;background-image:linear-gradient(to right,transparent,transparent)}.nb-theme-dark :host nb-card.off .icon.status-info{box-shadow:none;background-image:linear-gradient(to right,transparent,transparent)}.nb-theme-dark :host nb-card .details{display:flex;flex-direction:column;justify-content:center;height:100%;border-left:1px solid transparent}[dir=ltr] .nb-theme-dark :host nb-card .details{padding:0 .5rem 0 .75rem}[dir=rtl] .nb-theme-dark :host nb-card .details{padding:0 .75rem 0 .5rem}.nb-theme-dark :host nb-card .title{margin:0}.nb-theme-dark :host nb-card .status{text-transform:uppercase}.nb-theme-cosmic :host nb-card{flex-direction:row;align-items:center;height:6rem;overflow:visible}.nb-theme-cosmic :host nb-card .icon-container{height:100%;padding:.625rem}.nb-theme-cosmic :host nb-card .icon{display:flex;align-items:center;justify-content:center;width:5.75rem;height:4.75rem;font-size:3.75rem;border-radius:.25rem;transition:width .4s;transform:translate3d(0,0,0);-webkit-transform-style:preserve-3d;-webkit-backface-visibility:hidden;color:#fff}.nb-theme-cosmic :host nb-card .icon.status-primary{background-image:linear-gradient(to right,#b18aff,#a16eff)}.nb-theme-cosmic :host nb-card .icon.status-primary:hover{background-image:linear-gradient(to right,#d5bfff,#b18aff)}.nb-theme-cosmic :host nb-card .icon.status-success{background-image:linear-gradient(to right,#2ce69b,#00d68f)}.nb-theme-cosmic :host nb-card .icon.status-success:hover{background-image:linear-gradient(to right,#8cfac7,#2ce69b)}.nb-theme-cosmic :host nb-card .icon.status-warning{background-image:linear-gradient(to right,#ffc94d,#fa0)}.nb-theme-cosmic :host nb-card .icon.status-warning:hover{background-image:linear-gradient(to right,#ffe59e,#ffc94d)}.nb-theme-cosmic :host nb-card .icon.status-danger{background-image:linear-gradient(to right,#ff708d,#ff3d71)}.nb-theme-cosmic :host nb-card .icon.status-danger:hover{background-image:linear-gradient(to right,#ffa8b4,#ff708d)}.nb-theme-cosmic :host nb-card .icon.status-info{background-image:linear-gradient(to right,#42aaff,#0095ff)}.nb-theme-cosmic :host nb-card .icon.status-info:hover{background-image:linear-gradient(to right,#94cbff,#42aaff)}.nb-theme-cosmic :host nb-card.off{color:#b4b4db}.nb-theme-cosmic :host nb-card.off .icon,.nb-theme-cosmic :host nb-card.off .status,.nb-theme-cosmic :host nb-card.off .title{color:#b4b4db}.nb-theme-cosmic :host nb-card.off .icon.status-primary{box-shadow:none;background-image:linear-gradient(to right,transparent,transparent)}.nb-theme-cosmic :host nb-card.off .icon.status-success{box-shadow:none;background-image:linear-gradient(to right,transparent,transparent)}.nb-theme-cosmic :host nb-card.off .icon.status-warning{box-shadow:none;background-image:linear-gradient(to right,transparent,transparent)}.nb-theme-cosmic :host nb-card.off .icon.status-danger{box-shadow:none;background-image:linear-gradient(to right,transparent,transparent)}.nb-theme-cosmic :host nb-card.off .icon.status-info{box-shadow:none;background-image:linear-gradient(to right,transparent,transparent)}.nb-theme-cosmic :host nb-card .details{display:flex;flex-direction:column;justify-content:center;height:100%;border-left:1px solid transparent}[dir=ltr] .nb-theme-cosmic :host nb-card .details{padding:0 .5rem 0 .75rem}[dir=rtl] .nb-theme-cosmic :host nb-card .details{padding:0 .75rem 0 .5rem}.nb-theme-cosmic :host nb-card .title{margin:0}.nb-theme-cosmic :host nb-card .status{text-transform:uppercase}.nb-theme-corporate :host nb-card{flex-direction:row;align-items:center;height:6rem;overflow:visible}.nb-theme-corporate :host nb-card .icon-container{height:100%;padding:.625rem}.nb-theme-corporate :host nb-card .icon{display:flex;align-items:center;justify-content:center;width:5.75rem;height:4.75rem;font-size:3.75rem;border-radius:.17rem;transition:width .4s;transform:translate3d(0,0,0);-webkit-transform-style:preserve-3d;-webkit-backface-visibility:hidden;color:#fff}.nb-theme-corporate :host nb-card .icon.status-primary{background-image:linear-gradient(to right,#598bff,#36f)}.nb-theme-corporate :host nb-card .icon.status-primary:hover{background-image:linear-gradient(to right,#a6c1ff,#598bff)}.nb-theme-corporate :host nb-card .icon.status-success{background-image:linear-gradient(to right,#2ce69b,#00d68f)}.nb-theme-corporate :host nb-card .icon.status-success:hover{background-image:linear-gradient(to right,#8cfac7,#2ce69b)}.nb-theme-corporate :host nb-card .icon.status-warning{background-image:linear-gradient(to right,#ffc94d,#fa0)}.nb-theme-corporate :host nb-card .icon.status-warning:hover{background-image:linear-gradient(to right,#ffe59e,#ffc94d)}.nb-theme-corporate :host nb-card .icon.status-danger{background-image:linear-gradient(to right,#ff708d,#ff3d71)}.nb-theme-corporate :host nb-card .icon.status-danger:hover{background-image:linear-gradient(to right,#ffa8b4,#ff708d)}.nb-theme-corporate :host nb-card .icon.status-info{background-image:linear-gradient(to right,#42aaff,#0095ff)}.nb-theme-corporate :host nb-card .icon.status-info:hover{background-image:linear-gradient(to right,#94cbff,#42aaff)}.nb-theme-corporate :host nb-card.off{color:#8f9bb3}.nb-theme-corporate :host nb-card.off .icon,.nb-theme-corporate :host nb-card.off .status,.nb-theme-corporate :host nb-card.off .title{color:#8f9bb3}.nb-theme-corporate :host nb-card.off .icon.status-primary{box-shadow:none;background-image:linear-gradient(to right,transparent,transparent)}.nb-theme-corporate :host nb-card.off .icon.status-success{box-shadow:none;background-image:linear-gradient(to right,transparent,transparent)}.nb-theme-corporate :host nb-card.off .icon.status-warning{box-shadow:none;background-image:linear-gradient(to right,transparent,transparent)}.nb-theme-corporate :host nb-card.off .icon.status-danger{box-shadow:none;background-image:linear-gradient(to right,transparent,transparent)}.nb-theme-corporate :host nb-card.off .icon.status-info{box-shadow:none;background-image:linear-gradient(to right,transparent,transparent)}.nb-theme-corporate :host nb-card .details{display:flex;flex-direction:column;justify-content:center;height:100%;border-left:1px solid transparent}[dir=ltr] .nb-theme-corporate :host nb-card .details{padding:0 .5rem 0 .75rem}[dir=rtl] .nb-theme-corporate :host nb-card .details{padding:0 .75rem 0 .5rem}.nb-theme-corporate :host nb-card .title{margin:0}.nb-theme-corporate :host nb-card .status{text-transform:uppercase}"]
                    }] }
        ];
        /** @nocollapse */
        HomePageComponent.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: [shared.PROFILE_INDEXED_DB,] }] }
        ]; };
        return HomePageComponent;
    }());
    if (false) {
        /** @type {?} */
        HomePageComponent.prototype.name;
        /**
         * @type {?}
         * @private
         */
        HomePageComponent.prototype.profileIndexedDB;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var components = [
        ExtraComponent,
        ChangePasswordPageComponent,
        DeactivatedPromptComponent,
        SecurityPageComponent,
        ProfilePageComponent,
        SettingsPageComponent,
        HomePageComponent,
    ];
    /** @type {?} */
    var entry_components = [
        DeactivatedPromptComponent,
    ];
    /** @type {?} */
    var modules = [
        forms.FormsModule,
        forms.ReactiveFormsModule,
        theme.NbCardModule,
        theme.NbAlertModule,
        theme.NbIconModule,
        theme.NbDialogModule.forChild(),
        ngxaTheme.NgxaThemeModule,
        ngxaCommon.NgxaInputModule,
        ngxaCommon.NgxaCheckBoxModule,
        ngxaCommon.NgxaButtonModule,
        ngxaCommon.NgxaBaseModule,
        ngxaCommon.NgxaEditorModule,
        ngxaCommon.NgxaSelectModule,
        ngxaCommon.NgxaImageModule,
        NgxaExtraRoutingModule,
    ];
    var NgxaExtraModule = /** @class */ (function () {
        function NgxaExtraModule() {
        }
        NgxaExtraModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: __spread(modules),
                        declarations: __spread(components),
                        entryComponents: __spread(entry_components),
                    },] }
        ];
        return NgxaExtraModule;
    }());

    exports.HomePageComponent = HomePageComponent;
    exports.NgxaExtraModule = NgxaExtraModule;
    exports.ɵa = NgxaExtraRoutingModule;
    exports.ɵb = ExtraComponent;
    exports.ɵc = ProfilePageComponent;
    exports.ɵd = SecurityPageComponent;
    exports.ɵe = SettingsPageComponent;
    exports.ɵf = ChangePasswordPageComponent;
    exports.ɵg = DeactivatedPromptComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=xaphira-ngxa-extra.umd.js.map
