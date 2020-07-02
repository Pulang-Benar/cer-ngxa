(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@nebular/theme'), require('@xaphira/ngxa-theme'), require('@xaphira/ngxa-common'), require('@angular/router'), require('@xaphira/ngxa-auth'), require('@xaphira/shared'), require('rxjs/operators'), require('@swimlane/ngx-datatable'), require('@angular/animations'), require('rxjs')) :
    typeof define === 'function' && define.amd ? define('@xaphira/ngxa-sys', ['exports', '@angular/core', '@angular/forms', '@nebular/theme', '@xaphira/ngxa-theme', '@xaphira/ngxa-common', '@angular/router', '@xaphira/ngxa-auth', '@xaphira/shared', 'rxjs/operators', '@swimlane/ngx-datatable', '@angular/animations', 'rxjs'], factory) :
    (global = global || self, factory((global.xaphira = global.xaphira || {}, global.xaphira['ngxa-sys'] = {}), global.ng.core, global.ng.forms, global['@nebular/theme'], global['@xaphira/ngxa-theme'], global['@xaphira/ngxa-common'], global.ng.router, global['@xaphira/ngxa-auth'], global.shared, global.rxjs.operators, global.ngxDatatable, global.ng.animations, global.rxjs));
}(this, (function (exports, core, forms, theme, ngxaTheme, ngxaCommon, router, ngxaAuth, shared, operators, ngxDatatable, animations, rxjs) { 'use strict';

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
    var ParameterComponent = /** @class */ (function () {
        function ParameterComponent() {
        }
        ParameterComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'xa-parameter',
                        template: "\n    <router-outlet></router-outlet>\n  "
                    }] }
        ];
        return ParameterComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ParameterService = /** @class */ (function () {
        function ParameterService() {
        }
        /**
         * @return {?}
         */
        ParameterService.prototype.getParameter = /**
         * @return {?}
         */
        function () {
            return this.parameter;
        };
        /**
         * @param {?} parameter
         * @return {?}
         */
        ParameterService.prototype.setParameter = /**
         * @param {?} parameter
         * @return {?}
         */
        function (parameter) {
            this.parameter = parameter;
        };
        /**
         * @return {?}
         */
        ParameterService.prototype.getParameterGroup = /**
         * @return {?}
         */
        function () {
            return this.parameterGroup;
        };
        /**
         * @param {?} parameterGroup
         * @return {?}
         */
        ParameterService.prototype.setParameterGroup = /**
         * @param {?} parameterGroup
         * @return {?}
         */
        function (parameterGroup) {
            this.parameterGroup = parameterGroup;
        };
        /**
         * @return {?}
         */
        ParameterService.prototype.getLocales = /**
         * @return {?}
         */
        function () {
            return this.locales;
        };
        /**
         * @param {?} locales
         * @return {?}
         */
        ParameterService.prototype.setLocales = /**
         * @param {?} locales
         * @return {?}
         */
        function (locales) {
            this.locales = locales;
        };
        ParameterService.decorators = [
            { type: core.Injectable }
        ];
        return ParameterService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        ParameterService.prototype.parameter;
        /**
         * @type {?}
         * @private
         */
        ParameterService.prototype.parameterGroup;
        /**
         * @type {?}
         * @private
         */
        ParameterService.prototype.locales;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ParameterListGroupPageComponent = /** @class */ (function (_super) {
        __extends(ParameterListGroupPageComponent, _super);
        function ParameterListGroupPageComponent(injector, router, parameterService, dialogService) {
            var _this = _super.call(this, injector, {
                'parameterGroupCode': [],
                'parameterGroupName': [],
            }) || this;
            _this.injector = injector;
            _this.router = router;
            _this.parameterService = parameterService;
            _this.dialogService = dialogService;
            _this.columns = [
                { name: 'Parameter Group Code', prop: 'parameterGroupCode', width: 220, frozenLeft: true },
                { name: 'Parameter Group Name', prop: 'parameterGroupName', width: 200, frozenLeft: true },
                { name: 'Created', prop: 'createdBy' },
                { name: 'Created Date', prop: 'createdDate' },
                { name: 'Modified', prop: 'modifiedBy' },
                { name: 'Modified Date', prop: 'modifiedDate' },
                { name: 'Active', prop: 'active' },
            ];
            _this.reload = false;
            _this.filters = [
                { controlName: 'parameterGroupCode', type: 'input' },
                { controlName: 'parameterGroupName', type: 'input' }
            ];
            _this.apiPath = _this.api['master']['datatable-parameter-group'];
            _this.apiPathLocale = _this.api['master']['all-locale'];
            _this.apiPathDelete = _this.api['master']['delete-parameter-group'];
            return _this;
        }
        /**
         * @return {?}
         */
        ParameterListGroupPageComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.http.HTTP_AUTH(this.apiPathLocale).subscribe((/**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                _this.parameterService.setLocales(value);
            }));
        };
        /**
         * @return {?}
         */
        ParameterListGroupPageComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () { };
        /**
         * @return {?}
         */
        ParameterListGroupPageComponent.prototype.onAddGroup = /**
         * @return {?}
         */
        function () {
            this.router.navigate(['/app/sysconf/parameter/group', 'add']);
        };
        /**
         * @param {?} data
         * @return {?}
         */
        ParameterListGroupPageComponent.prototype.onViewDetail = /**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            this.parameterService.setParameterGroup({
                parameterGroupCode: data['parameterGroupCode'],
                parameterGroupName: data['parameterGroupName'],
            });
            this.router.navigate(['/app/sysconf/parameter/detail']);
        };
        /**
         * @param {?} data
         * @param {?} dialog
         * @return {?}
         */
        ParameterListGroupPageComponent.prototype.onDeleteGroup = /**
         * @param {?} data
         * @param {?} dialog
         * @return {?}
         */
        function (data, dialog) {
            var _this = this;
            this.parameterGroupCodes = [];
            data.forEach((/**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                _this.parameterGroupCodes.push(value.parameterGroupCode);
            }));
            this.dialogService.open(dialog, { context: 'alert.delete' });
        };
        /**
         * @param {?} ref
         * @return {?}
         */
        ParameterListGroupPageComponent.prototype.onDelete = /**
         * @param {?} ref
         * @return {?}
         */
        function (ref) {
            var _this = this;
            this.disabled = true;
            this.http.HTTP_AUTH(this.apiPathDelete, this.parameterGroupCodes).subscribe((/**
             * @param {?} success
             * @return {?}
             */
            function (success) {
                ref.close();
                _this.disabled = false;
                _this.reload = true;
                _this.toastr.showI18n(success.respStatusMessage[success.respStatusCode], true);
            }), (/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                _this.disabled = false;
                _this.toastr.showI18n(error.respStatusMessage[error.respStatusCode], true, null, 'danger');
            }));
        };
        ParameterListGroupPageComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'xa-parameter-list-group-page',
                        template: "<xa-page-outlet [header]=\"'Parameter Group'\">\n  <div class=\"row\">\n    <div class=\"col-md-12 col-lg-12 col-xxxl-6\">\n      <xa-datatable\n        [api]=\"apiPath\"\n        [formGroupFilter]=\"formGroupFilter\"\n        [filters]=\"filters\"\n        [reloadFn]=\"reload\"\n        (onAdd)=\"onAddGroup()\"\n        (onEdit)=\"onViewDetail($event)\"\n        (onDelete)=\"onDeleteGroup($event, dialogdelete)\"\n        [columns]=\"columns\">\n        <form [formGroup]=\"formGroupFilter\">\n          <xa-input-text\n            [name]=\"'parameterGroupCode'\"\n            [label]=\"'Parameter Group Code'\"\n            formControlName=\"parameterGroupCode\">\n          </xa-input-text>\n          <xa-input-text\n            [name]=\"'parameterGroupName'\"\n            [label]=\"'Parameter Group Name'\"\n            formControlName=\"parameterGroupName\">\n          </xa-input-text>\n        </form>\n      </xa-datatable>\n    </div>\n  </div>\n</xa-page-outlet>\n\n<ng-template #dialogdelete let-data let-ref=\"dialogRef\">\n  <nb-card accent=\"danger\">\n    <nb-card-header>{{ 'Warning' | translate}}</nb-card-header>\n    <nb-card-body>{{ data | translate}}</nb-card-body>\n    <nb-card-footer>\n      <div class=\"row\">\n        <button\n          type=\"reset\"\n          status=\"danger\"\n          (click)=\"ref.close()\"\n          class=\"reset-left\"\n          nbButton>\n          {{ 'Cancel' | translate}}\n        </button>\n        <button\n          type=\"submit\"\n          status=\"primary\"\n          (click)=\"onDelete(ref)\"\n          [disabled]=\"disabled\"\n          class=\"submit-right\"\n          nbButton>\n          {{ 'Delete' | translate}}\n        </button>\n      </div>\n    </nb-card-footer>\n  </nb-card>\n</ng-template>",
                        styles: [".reset-left{margin-left:1rem;margin-right:.5rem}.submit-right{margin-left:.5rem}"]
                    }] }
        ];
        /** @nocollapse */
        ParameterListGroupPageComponent.ctorParameters = function () { return [
            { type: core.Injector },
            { type: router.Router },
            { type: ParameterService },
            { type: theme.NbDialogService }
        ]; };
        return ParameterListGroupPageComponent;
    }(ngxaCommon.BaseFilterComponent));
    if (false) {
        /** @type {?} */
        ParameterListGroupPageComponent.prototype.apiPath;
        /** @type {?} */
        ParameterListGroupPageComponent.prototype.apiPathLocale;
        /** @type {?} */
        ParameterListGroupPageComponent.prototype.apiPathDelete;
        /** @type {?} */
        ParameterListGroupPageComponent.prototype.columns;
        /** @type {?} */
        ParameterListGroupPageComponent.prototype.reload;
        /**
         * @type {?}
         * @private
         */
        ParameterListGroupPageComponent.prototype.parameterGroupCodes;
        /** @type {?} */
        ParameterListGroupPageComponent.prototype.injector;
        /**
         * @type {?}
         * @private
         */
        ParameterListGroupPageComponent.prototype.router;
        /**
         * @type {?}
         * @private
         */
        ParameterListGroupPageComponent.prototype.parameterService;
        /**
         * @type {?}
         * @private
         */
        ParameterListGroupPageComponent.prototype.dialogService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ParameterAddGroupPageComponent = /** @class */ (function (_super) {
        __extends(ParameterAddGroupPageComponent, _super);
        function ParameterAddGroupPageComponent(injector, router) {
            var _this = _super.call(this, injector, {
                'parameterGroupCode': [],
                'parameterGroupName': [],
            }) || this;
            _this.injector = injector;
            _this.router = router;
            return _this;
        }
        /**
         * @return {?}
         */
        ParameterAddGroupPageComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () { };
        /**
         * @return {?}
         */
        ParameterAddGroupPageComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () { };
        /**
         * @return {?}
         */
        ParameterAddGroupPageComponent.prototype.onReset = /**
         * @return {?}
         */
        function () {
            this.router.navigate(['/app/sysconf/parameter']);
        };
        /**
         * @return {?}
         */
        ParameterAddGroupPageComponent.prototype.onSubmit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            ((/** @type {?} */ (_super.prototype.onSubmit.call(this, this.formGroup.value, 'master', 'post-parameter-group'))))
                .pipe(operators.takeUntil(this.destroy$))
                .subscribe((/**
             * @param {?} response
             * @return {?}
             */
            function (response) {
                if (response.respStatusCode === shared.ResponseCode.OK_SCR009.toString()) {
                    _this.router.navigate(['/app/sysconf/parameter']);
                }
            }));
        };
        ParameterAddGroupPageComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'xa-parameter-add-group-page',
                        template: "<xa-page-outlet [header]=\"'Add Parameter Group'\">\n  <div class=\"row\">\n    <div class=\"col-md-12 col-lg-12 col-xxxl-6\">\n      <form [formGroup]=\"formGroup\">\n        <xa-input-text\n          [name]=\"'parameterGroupCode'\"\n          [label]=\"'Parameter Group Code'\"\n          [required]=\"true\"\n          formControlName=\"parameterGroupCode\">\n        </xa-input-text>\n        <xa-input-text\n          [name]=\"'parameterGroupName'\"\n          [label]=\"'Parameter Group Name'\"\n          [required]=\"true\"\n          formControlName=\"parameterGroupName\">\n        </xa-input-text>\n        <div class=\"form-group row\">\n          <div class=\"offset-sm-3 col-sm-9\">\n            <button\n              type=\"reset\"\n              status=\"danger\"\n              (click)=\"onReset()\"\n              class=\"reset-left\"\n              nbButton>\n              {{ 'Cancel' | translate}}\n            </button>\n            <button\n              type=\"submit\"\n              status=\"primary\"\n              (click)=\"onSubmit()\"\n              [disabled]=\"formGroup.invalid || formGroup.pristine || disabled\"\n              class=\"submit-right\"\n              nbButton>\n              {{ 'Add' | translate}}\n            </button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</xa-page-outlet>\n",
                        styles: [".reset-left{margin-right:.25rem}.submit-right{margin-left:.25rem}"]
                    }] }
        ];
        /** @nocollapse */
        ParameterAddGroupPageComponent.ctorParameters = function () { return [
            { type: core.Injector },
            { type: router.Router }
        ]; };
        return ParameterAddGroupPageComponent;
    }(ngxaCommon.BaseFormComponent));
    if (false) {
        /** @type {?} */
        ParameterAddGroupPageComponent.prototype.injector;
        /**
         * @type {?}
         * @private
         */
        ParameterAddGroupPageComponent.prototype.router;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ParameterGroupModel = /** @class */ (function () {
        function ParameterGroupModel() {
        }
        return ParameterGroupModel;
    }());
    if (false) {
        /** @type {?} */
        ParameterGroupModel.prototype.parameterGroupCode;
        /** @type {?} */
        ParameterGroupModel.prototype.parameterGroupName;
    }
    var ParameterModel = /** @class */ (function (_super) {
        __extends(ParameterModel, _super);
        function ParameterModel() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return ParameterModel;
    }(ParameterGroupModel));
    if (false) {
        /** @type {?} */
        ParameterModel.prototype.parameterCode;
    }
    var ParameterI18nModel = /** @class */ (function (_super) {
        __extends(ParameterI18nModel, _super);
        function ParameterI18nModel() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return ParameterI18nModel;
    }(ParameterModel));
    if (false) {
        /** @type {?} */
        ParameterI18nModel.prototype.parameterValue;
        /** @type {?} */
        ParameterI18nModel.prototype.locale;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ParameterEditGroupCollapseComponent = /** @class */ (function () {
        function ParameterEditGroupCollapseComponent() {
            var _this = this;
            this.toggle = (/**
             * @return {?}
             */
            function () {
                _this.opened$.pipe(operators.take(1)).subscribe((/**
                 * @param {?} x
                 * @return {?}
                 */
                function (x) { return _this.openedSubject.next(!x); }));
            });
            this.openedSubject = new rxjs.ReplaySubject(1);
            this.openedSubject.next(false);
            this.opened$ = this.openedSubject.asObservable();
            this.openedState$ = this.opened$.pipe(operators.map((/**
             * @param {?} x
             * @return {?}
             */
            function (x) { return x ? 'expanded' : 'collapsed'; })));
        }
        ParameterEditGroupCollapseComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'xa-parameter-edit-group-collapse, [xa-parameter-edit-group-collapse]',
                        template: "<div class=\"row\"\n    [@openedState]=\"openedState$ | async\"\n    [ngClass]=\"openedState$ | async\">\n    <ng-content></ng-content>\n</div>",
                        animations: [
                            animations.trigger('openedState', [
                                animations.state('collapsed', animations.style({
                                    opacity: 0,
                                    overflow: 'hidden',
                                    height: '0px',
                                    minHeight: '0',
                                    padding: '0 0 0 1.25rem',
                                })),
                                animations.state('expanded', animations.style({
                                    opacity: 1,
                                    overflow: 'hidden',
                                    height: '*',
                                    padding: '0 1.25rem',
                                })),
                                animations.transition('collapsed <=> expanded', animations.animate('500ms ease-in-out')),
                            ]),
                        ],
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        ParameterEditGroupCollapseComponent.ctorParameters = function () { return []; };
        return ParameterEditGroupCollapseComponent;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        ParameterEditGroupCollapseComponent.prototype.openedSubject;
        /** @type {?} */
        ParameterEditGroupCollapseComponent.prototype.opened$;
        /** @type {?} */
        ParameterEditGroupCollapseComponent.prototype.openedState$;
        /** @type {?} */
        ParameterEditGroupCollapseComponent.prototype.toggle;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ParameterListDetailPageComponent = /** @class */ (function (_super) {
        __extends(ParameterListDetailPageComponent, _super);
        function ParameterListDetailPageComponent(injector, router, parameterService) {
            var _this = _super.call(this, injector, {
                'parameterCode': [],
            }, {
                'parameterGroupCode': [],
                'parameterGroupName': [],
            }) || this;
            _this.injector = injector;
            _this.router = router;
            _this.parameterService = parameterService;
            _this.selectionType = ngxDatatable.SelectionType.single;
            _this.columns = [
                { name: 'Parameter Code', prop: 'parameterCode', width: 350, frozenLeft: true },
                { name: 'Created', prop: 'createdBy' },
                { name: 'Created Date', prop: 'createdDate' },
                { name: 'Modified', prop: 'modifiedBy' },
                { name: 'Modified Date', prop: 'modifiedDate' },
                { name: 'Active', prop: 'active' },
            ];
            _this.parameterGroup = new ParameterGroupModel();
            _this.expanded = false;
            _this.apiPath = _this.api['master']['datatable-parameter'];
            _this.filters = [{ controlName: 'parameterCode', type: 'input' }];
            if (_this.parameterService.getParameterGroup()) {
                _this.parameterGroup = _this.parameterService.getParameterGroup();
                _this.keyword = {
                    parameterGroupCode: _this.parameterGroup.parameterGroupCode,
                };
                _this.formGroup.get('parameterGroupCode').setValue(_this.parameterGroup.parameterGroupCode);
                _this.formGroup.get('parameterGroupName').setValue(_this.parameterGroup.parameterGroupName);
            }
            else {
                _this.keyword = {
                    parameterGroupCode: null,
                };
                _this.router.navigate(['/app/sysconf/parameter']);
            }
            return _this;
        }
        /**
         * @return {?}
         */
        ParameterListDetailPageComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        /**
         * @return {?}
         */
        ParameterListDetailPageComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () { };
        /**
         * @param {?} event
         * @return {?}
         */
        ParameterListDetailPageComponent.prototype.onAddGroup = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            this.parameterService.setParameter(null);
            this.router.navigate(['/app/sysconf/parameter/detail', 'add']);
        };
        /**
         * @param {?} data
         * @return {?}
         */
        ParameterListDetailPageComponent.prototype.onViewDetail = /**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            this.parameterService.setParameter({
                parameterGroupCode: data['parameterGroupCode'],
                parameterGroupName: data['parameterGroupName'],
                parameterCode: data['parameterCode'],
            });
            this.router.navigate(['/app/sysconf/parameter/detail', 'edit']);
        };
        /**
         * @return {?}
         */
        ParameterListDetailPageComponent.prototype.onReset = /**
         * @return {?}
         */
        function () {
            this.router.navigate(['/app/sysconf/parameter']);
        };
        /**
         * @return {?}
         */
        ParameterListDetailPageComponent.prototype.back = /**
         * @return {?}
         */
        function () {
            this.router.navigate(['/app/sysconf/parameter']);
            return false;
        };
        /**
         * @return {?}
         */
        ParameterListDetailPageComponent.prototype.doExpanded = /**
         * @return {?}
         */
        function () {
            this.collapse.toggle();
            this.expanded = !this.expanded;
        };
        /**
         * @return {?}
         */
        ParameterListDetailPageComponent.prototype.onSubmit = /**
         * @return {?}
         */
        function () {
            ((/** @type {?} */ (_super.prototype.onSubmit.call(this, this.formGroup.value, 'master', 'post-parameter-group'))));
        };
        ParameterListDetailPageComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'xa-parameter-list-detail-page',
                        template: "<div class=\"row\">\n  <div class=\"col-lg-12\">\n    <nb-card>\n      <nb-card-header>\n        <nav class=\"navigation\">\n            <a href=\"#\" (click)=\"back()\" class=\"link back-link\" aria-label=\"Back\">\n                <nb-icon icon=\"arrow-back\"></nb-icon>\n            </a>\n            {{'Edit Parameter Group' | translate}}\n            <div class=\"link back-link parameter-expanded\">\n              <nb-icon\n                  [icon]=\"expanded ? 'arrow-upward-outline' : 'arrow-downward-outline'\"\n                  (click)=\"doExpanded()\">\n              </nb-icon>\n            </div>\n        </nav>\n      </nb-card-header>\n      <div xa-parameter-edit-group-collapse #collapseparameter>\n        <nb-card-body>\n          <div class=\"row\">\n            <div class=\"col-md-12 col-lg-12 col-xxxl-6\">\n              <form [formGroup]=\"formGroup\">\n                <xa-input-text\n                  [name]=\"'parameterGroupName'\"\n                  [label]=\"'Parameter Group Name'\"\n                  [required]=\"true\"\n                  formControlName=\"parameterGroupName\">\n                </xa-input-text>\n                <div class=\"form-group row\">\n                  <div class=\"offset-sm-3 col-sm-9\">\n                    <button\n                      type=\"reset\"\n                      status=\"danger\"\n                      (click)=\"onReset()\"\n                      class=\"reset-left\"\n                      nbButton>\n                      {{ 'Cancel' | translate}}\n                    </button>\n                    <button\n                      type=\"submit\"\n                      status=\"primary\"\n                      (click)=\"onSubmit()\"\n                      [disabled]=\"formGroup.invalid || formGroup.pristine || disabled\"\n                      class=\"submit-right\"\n                      nbButton>\n                      {{ 'Edit' | translate}}\n                    </button>\n                  </div>\n                </div>\n              </form>\n            </div>\n          </div>\n        </nb-card-body>\n      </div>\n    </nb-card>\n  </div>\n</div>\n\n<xa-page-outlet [url]=\"'/app/sysconf/parameter'\" [header]=\"'Parameter '+parameterGroup.parameterGroupName\">\n  <div class=\"row\">\n    <div class=\"col-md-12 col-lg-12 col-xxxl-6\">\n      <xa-datatable\n        [api]=\"apiPath\"\n        [formGroupFilter]=\"formGroupFilter\"\n        [filters]=\"filters\"\n        [delete]=\"false\"\n        [selectionType]=\"selectionType\"\n        (onFilter)=\"doFilterAdvanced($event)\"\n        (onAdd)=\"onAddGroup($event)\"\n        (onEdit)=\"onViewDetail($event)\"\n        [filterFn]=\"keyword\"\n        [columns]=\"columns\">\n        <form [formGroup]=\"formGroupFilter\">\n          <xa-input-text\n            [name]=\"'parameterCode'\"\n            [label]=\"'Parameter Code'\"\n            formControlName=\"parameterCode\">\n          </xa-input-text>\n        </form>\n      </xa-datatable>\n    </div>\n  </div>\n</xa-page-outlet>\n",
                        styles: [".reset-left{margin-right:.25rem}.submit-right{margin-left:.25rem}.parameter-expanded{position:absolute;right:0;padding:0 1.75rem;cursor:pointer}"]
                    }] }
        ];
        /** @nocollapse */
        ParameterListDetailPageComponent.ctorParameters = function () { return [
            { type: core.Injector },
            { type: router.Router },
            { type: ParameterService }
        ]; };
        ParameterListDetailPageComponent.propDecorators = {
            collapse: [{ type: core.ViewChild, args: ['collapseparameter', { static: false },] }]
        };
        return ParameterListDetailPageComponent;
    }(ngxaCommon.BaseFilterComponent));
    if (false) {
        /** @type {?} */
        ParameterListDetailPageComponent.prototype.apiPath;
        /** @type {?} */
        ParameterListDetailPageComponent.prototype.selectionType;
        /** @type {?} */
        ParameterListDetailPageComponent.prototype.columns;
        /** @type {?} */
        ParameterListDetailPageComponent.prototype.parameterGroup;
        /** @type {?} */
        ParameterListDetailPageComponent.prototype.expanded;
        /** @type {?} */
        ParameterListDetailPageComponent.prototype.collapse;
        /** @type {?} */
        ParameterListDetailPageComponent.prototype.injector;
        /**
         * @type {?}
         * @private
         */
        ParameterListDetailPageComponent.prototype.router;
        /**
         * @type {?}
         * @private
         */
        ParameterListDetailPageComponent.prototype.parameterService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LocaleModel = /** @class */ (function () {
        function LocaleModel() {
        }
        return LocaleModel;
    }());
    if (false) {
        /** @type {?} */
        LocaleModel.prototype.localeCode;
        /** @type {?} */
        LocaleModel.prototype.identifier;
        /** @type {?} */
        LocaleModel.prototype.icon;
        /** @type {?} */
        LocaleModel.prototype.localeDefault;
        /** @type {?} */
        LocaleModel.prototype.localeEnabled;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ParameterDoDetailPageComponent = /** @class */ (function (_super) {
        __extends(ParameterDoDetailPageComponent, _super);
        function ParameterDoDetailPageComponent(injector, router, parameterService, route) {
            var _this = _super.call(this, injector, {
                'parameterCode': [],
                'en-US': [],
                'id-ID': [],
            }) || this;
            _this.injector = injector;
            _this.router = router;
            _this.parameterService = parameterService;
            _this.route = route;
            _this.action = 'Add';
            _this.parameter = new ParameterModel();
            _this.parameterGroup = new ParameterGroupModel();
            _this.allLocales = [];
            _this.locales = [];
            _this.localeDefault = new LocaleModel();
            _this.isEdit = false;
            if (_this.parameterService.getParameterGroup()) {
                _this.parameterGroup = _this.parameterService.getParameterGroup();
            }
            else {
                _this.router.navigate(['/app/sysconf/parameter']);
            }
            if ((_this.route.snapshot.params['action'] === 'edit')) {
                if (_this.parameterService.getParameter()) {
                    _this.action = 'Edit';
                    _this.isEdit = true;
                    _this.parameter = _this.parameterService.getParameter();
                }
                else {
                    _this.router.navigate(['/app/sysconf/parameter']);
                }
            }
            if (!_this.parameterService.getLocales()) {
                _this.apiPathLocale = _this.api['master']['all-locale'];
                _this.http.HTTP_AUTH(_this.apiPathLocale).subscribe((/**
                 * @param {?} response
                 * @return {?}
                 */
                function (response) {
                    _this.parameterService.setLocales(response);
                    _this.splitLocale(response);
                }));
            }
            else {
                _this.splitLocale(_this.parameterService.getLocales());
            }
            if (_this.isEdit) {
                _this.formGroup.get('parameterCode').setValue(_this.parameter.parameterCode);
                _this.formGroup.get('parameterCode').disable({ emitEvent: true });
                _this.apiPathParameterI18n = _this.api['master']['parameter-i18n'];
                _this.loadingForm = true;
                _this.http.HTTP_AUTH(_this.apiPathParameterI18n, {
                    'parameterCode': _this.parameter.parameterCode,
                }).subscribe((/**
                 * @param {?} response
                 * @return {?}
                 */
                function (response) {
                    response.forEach((/**
                     * @param {?} data
                     * @return {?}
                     */
                    function (data) {
                        _this.formGroup.get(data.locale).setValue(data.parameterValue);
                        _this.loadingForm = false;
                    }));
                }));
            }
            return _this;
        }
        /**
         * @param {?} values
         * @return {?}
         */
        ParameterDoDetailPageComponent.prototype.splitLocale = /**
         * @param {?} values
         * @return {?}
         */
        function (values) {
            var _this = this;
            this.allLocales = values;
            values.forEach((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                if (data.localeDefault) {
                    _this.localeDefault = data;
                }
                else {
                    _this.locales.push(data);
                }
                _this.formGroup.removeControl(data.localeCode);
                _this.formGroup.addControl(data.localeCode, new forms.FormControl());
            }));
        };
        /**
         * @return {?}
         */
        ParameterDoDetailPageComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () { };
        /**
         * @return {?}
         */
        ParameterDoDetailPageComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () { };
        /**
         * @return {?}
         */
        ParameterDoDetailPageComponent.prototype.onReset = /**
         * @return {?}
         */
        function () {
            this.router.navigate(['/app/sysconf/parameter/detail']);
        };
        /**
         * @return {?}
         */
        ParameterDoDetailPageComponent.prototype.onSubmit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            /** @type {?} */
            var data = this.formGroup.value;
            if (this.isEdit)
                data.parameterCode = this.parameter.parameterCode;
            data.parameterGroupCode = this.parameterGroup.parameterGroupCode;
            data.parameterValues = {};
            this.allLocales.forEach((/**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                data.parameterValues[value.localeCode] = _this.formGroup.get(value.localeCode).value;
            }));
            ((/** @type {?} */ (_super.prototype.onSubmit.call(this, data, 'master', 'post-parameter-i18n'))))
                .pipe(operators.takeUntil(this.destroy$))
                .subscribe((/**
             * @param {?} response
             * @return {?}
             */
            function (response) {
                if (response.respStatusCode === shared.ResponseCode.OK_SCR009.toString()) {
                    _this.router.navigate(['/app/sysconf/parameter/detail']);
                }
            }));
        };
        ParameterDoDetailPageComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'xa-parameter-do-detail-page',
                        template: "<xa-page-outlet [header]=\"action + ' Parameter'\">\n  <div class=\"row\">\n    <div class=\"col-md-12 col-lg-12 col-xxxl-6\">\n      <form [formGroup]=\"formGroup\">\n        <xa-input-text\n          [name]=\"'parameterCode'\"\n          [label]=\"'Parameter Code'\"\n          [required]=\"!isEdit\"\n          [skeleton]=\"loadingForm\"\n          formControlName=\"parameterCode\">\n        </xa-input-text>\n        <div class=\"header\">\n          <div class=\"form-group row\">\n            <label\n              for=\"Parameter Value\"\n              class=\"label col-sm-3 col-form-label\"\n              *ngIf=\"!loadingForm; else labelskeleton\">\n              {{'Parameter Value' | translate}}\n            </label>\n            <ng-template #labelskeleton>\n              <div class=\"col-sm-3\">\n                <div\n                  [ngClass]=\"{\n                    'label-skeleton': true,\n                    'skeleton': loadingForm\n                  }\">\n                </div>\n              </div>\n            </ng-template>\n            <div class=\"col-sm-9\">\n              <xa-input-icon\n                [name]=\"localeDefault.localeCode\"\n                [nolabel]=\"true\"\n                [required]=\"true\"\n                [colLabel]=\"0\"\n                [colInput]=\"12\"\n                [icon]=\"'flag-icon flag-icon-' + localeDefault.icon\"\n                [skeleton]=\"loadingForm\"\n                formControlName=\"{{localeDefault.localeCode}}\">\n              </xa-input-icon>\n            </div>\n          </div>\n        </div>\n        <xa-input-icon *ngFor=\"let i18n of locales\"\n          [name]=\"i18n.localeCode\"\n          [nolabel]=\"true\"\n          [icon]=\"'flag-icon flag-icon-'+ i18n.icon\"\n          [skeleton]=\"loadingForm\"\n          formControlName=\"{{i18n.localeCode}}\">\n        </xa-input-icon>\n        <div class=\"form-group row\">\n          <div class=\"offset-sm-3 col-sm-9\" *ngIf=\"!loadingForm; else buttonskeleton\">\n            <button\n              type=\"reset\"\n              status=\"danger\"\n              (click)=\"onReset()\"\n              class=\"reset-left\"\n              nbButton>\n              {{ 'Cancel' | translate}}\n            </button>\n            <button\n              type=\"submit\"\n              status=\"primary\"\n              (click)=\"onSubmit()\"\n              [disabled]=\"formGroup.invalid || formGroup.pristine || disabled\"\n              class=\"submit-right\"\n              nbButton>\n              {{ action | translate}}\n            </button>\n          </div>\n          <ng-template #buttonskeleton>\n            <div class=\"offset-sm-3 col-sm-9\">\n              <div\n                [ngClass]=\"{\n                  'button-skeleton': true,\n                  'skeleton': loadingForm\n                }\">\n              </div>\n            </div>\n          </ng-template>\n        </div>\n      </form>\n    </div>\n  </div>\n</xa-page-outlet>\n",
                        styles: [".reset-left{margin-right:.25rem}.submit-right{margin-left:.25rem}"]
                    }] }
        ];
        /** @nocollapse */
        ParameterDoDetailPageComponent.ctorParameters = function () { return [
            { type: core.Injector },
            { type: router.Router },
            { type: ParameterService },
            { type: router.ActivatedRoute }
        ]; };
        return ParameterDoDetailPageComponent;
    }(ngxaCommon.BaseFormComponent));
    if (false) {
        /** @type {?} */
        ParameterDoDetailPageComponent.prototype.action;
        /** @type {?} */
        ParameterDoDetailPageComponent.prototype.parameter;
        /** @type {?} */
        ParameterDoDetailPageComponent.prototype.parameterGroup;
        /** @type {?} */
        ParameterDoDetailPageComponent.prototype.allLocales;
        /** @type {?} */
        ParameterDoDetailPageComponent.prototype.locales;
        /** @type {?} */
        ParameterDoDetailPageComponent.prototype.localeDefault;
        /** @type {?} */
        ParameterDoDetailPageComponent.prototype.isEdit;
        /** @type {?} */
        ParameterDoDetailPageComponent.prototype.apiPathParameterI18n;
        /** @type {?} */
        ParameterDoDetailPageComponent.prototype.apiPathLocale;
        /** @type {?} */
        ParameterDoDetailPageComponent.prototype.injector;
        /**
         * @type {?}
         * @private
         */
        ParameterDoDetailPageComponent.prototype.router;
        /**
         * @type {?}
         * @private
         */
        ParameterDoDetailPageComponent.prototype.parameterService;
        /**
         * @type {?}
         * @private
         */
        ParameterDoDetailPageComponent.prototype.route;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ɵ0 = {
        code: '#SYSCONF-PARAMETER-PAGE',
    }, ɵ1 = {
        code: '#SYSCONF-PARAMETER-PAGE',
    }, ɵ2 = {
        code: '#SYSCONF-PARAMETER-PAGE',
    }, ɵ3 = {
        code: '#SYSCONF-PARAMETER-PAGE',
    }, ɵ4 = {
        code: '#SYSCONF-PARAMETER-PAGE',
    };
    /** @type {?} */
    var routes = [{
            path: '',
            component: ParameterComponent,
            canActivateChild: [ngxaAuth.AuthGuardChildService],
            children: [
                {
                    path: '',
                    component: ParameterListGroupPageComponent,
                    data: ɵ0,
                },
                {
                    path: 'group',
                    component: ParameterListGroupPageComponent,
                    data: ɵ1,
                },
                {
                    path: 'group/:action',
                    component: ParameterAddGroupPageComponent,
                    data: ɵ2,
                },
                {
                    path: 'detail',
                    component: ParameterListDetailPageComponent,
                    data: ɵ3,
                },
                {
                    path: 'detail/:action',
                    component: ParameterDoDetailPageComponent,
                    data: ɵ4,
                },
            ],
        }];
    var NgxaParameterRoutingModule = /** @class */ (function () {
        function NgxaParameterRoutingModule() {
        }
        NgxaParameterRoutingModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [router.RouterModule.forChild(routes)],
                        exports: [router.RouterModule],
                    },] }
        ];
        return NgxaParameterRoutingModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var components = [
        ParameterComponent,
        ParameterListGroupPageComponent,
        ParameterAddGroupPageComponent,
        ParameterEditGroupCollapseComponent,
        ParameterListDetailPageComponent,
        ParameterDoDetailPageComponent,
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
        ngxaCommon.NgxaSelectModule,
        ngxaCommon.NgxaTableModule,
        NgxaParameterRoutingModule,
    ];
    /** @type {?} */
    var providers = [
        ParameterService,
    ];
    var NgxaParameterModule = /** @class */ (function () {
        function NgxaParameterModule() {
        }
        NgxaParameterModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: __spread(modules),
                        declarations: __spread(components),
                        providers: __spread(providers),
                    },] }
        ];
        return NgxaParameterModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LanguageComponent = /** @class */ (function () {
        function LanguageComponent() {
        }
        LanguageComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'xa-language',
                        template: "\n    <router-outlet></router-outlet>\n  "
                    }] }
        ];
        return LanguageComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LanguageService = /** @class */ (function () {
        function LanguageService() {
        }
        /**
         * @return {?}
         */
        LanguageService.prototype.getLocale = /**
         * @return {?}
         */
        function () {
            return this.locale;
        };
        /**
         * @param {?} locale
         * @return {?}
         */
        LanguageService.prototype.setLocale = /**
         * @param {?} locale
         * @return {?}
         */
        function (locale) {
            this.locale = locale;
        };
        LanguageService.decorators = [
            { type: core.Injectable }
        ];
        return LanguageService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        LanguageService.prototype.locale;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LanguageListPageComponent = /** @class */ (function (_super) {
        __extends(LanguageListPageComponent, _super);
        function LanguageListPageComponent(injector, router, languageService) {
            var _this = _super.call(this, injector, {
                'localeCode': [],
                'identifier': [],
            }) || this;
            _this.injector = injector;
            _this.router = router;
            _this.languageService = languageService;
            _this.selectionType = ngxDatatable.SelectionType.single;
            _this.columns = [
                { name: 'Language Code', prop: 'localeCode', width: 125, frozenLeft: true },
                { name: 'Language', prop: 'identifier', width: 275, frozenLeft: true },
                { name: 'Icon', prop: 'icon', width: 75, frozenLeft: true, type: 'icon' },
                { name: 'System Default Language', prop: 'localeDefault', width: 175, frozenLeft: true },
                { name: 'Created', prop: 'createdBy' },
                { name: 'Created Date', prop: 'createdDate' },
                { name: 'Modified', prop: 'modifiedBy' },
                { name: 'Modified Date', prop: 'modifiedDate' },
                { name: 'Active', prop: 'active' },
            ];
            _this.expanded = false;
            _this.apiPath = _this.api['master']['datatable-locale'];
            _this.filters = [
                { controlName: 'localeCode', type: 'input' },
                { controlName: 'identifier', type: 'input' }
            ];
            return _this;
        }
        /**
         * @return {?}
         */
        LanguageListPageComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        /**
         * @return {?}
         */
        LanguageListPageComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () { };
        /**
         * @return {?}
         */
        LanguageListPageComponent.prototype.onAddGroup = /**
         * @return {?}
         */
        function () {
            this.router.navigate(['/app/sysconf/language', 'add']);
        };
        /**
         * @param {?} data
         * @return {?}
         */
        LanguageListPageComponent.prototype.onViewDetail = /**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            this.languageService.setLocale(data);
            this.router.navigate(['/app/sysconf/language', 'edit']);
        };
        /**
         * @return {?}
         */
        LanguageListPageComponent.prototype.onReset = /**
         * @return {?}
         */
        function () {
            this.router.navigate(['/app/sysconf/language']);
        };
        /**
         * @return {?}
         */
        LanguageListPageComponent.prototype.back = /**
         * @return {?}
         */
        function () {
            this.router.navigate(['/app/sysconf/parameter']);
            return false;
        };
        /**
         * @return {?}
         */
        LanguageListPageComponent.prototype.onSubmit = /**
         * @return {?}
         */
        function () {
            ((/** @type {?} */ (_super.prototype.onSubmit.call(this, this.formGroup.value, 'master', 'post-language'))));
        };
        LanguageListPageComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'xa-language-list-page',
                        template: "<xa-page-outlet [header]=\"'Language'\">\n  <div class=\"row\">\n    <div class=\"col-md-12 col-lg-12 col-xxxl-6\">\n      <xa-datatable\n        [api]=\"apiPath\"\n        [formGroupFilter]=\"formGroupFilter\"\n        [filters]=\"filters\"\n        [delete]=\"false\"\n        [selectionType]=\"selectionType\"\n        (onFilter)=\"doFilterAdvanced($event)\"\n        (onAdd)=\"onAddGroup()\"\n        (onEdit)=\"onViewDetail($event)\"\n        [filterFn]=\"keyword\"\n        [columns]=\"columns\">\n        <form [formGroup]=\"formGroupFilter\">\n          <xa-input-text\n            [name]=\"'localeCode'\"\n            [label]=\"'Locale Code'\"\n            formControlName=\"localeCode\">\n          </xa-input-text>\n          <xa-input-text\n            [name]=\"'identifier'\"\n            [label]=\"'Identifier'\"\n            formControlName=\"identifier\">\n          </xa-input-text>\n        </form>\n      </xa-datatable>\n    </div>\n  </div>\n</xa-page-outlet>\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        LanguageListPageComponent.ctorParameters = function () { return [
            { type: core.Injector },
            { type: router.Router },
            { type: LanguageService }
        ]; };
        return LanguageListPageComponent;
    }(ngxaCommon.BaseFilterComponent));
    if (false) {
        /** @type {?} */
        LanguageListPageComponent.prototype.apiPath;
        /** @type {?} */
        LanguageListPageComponent.prototype.selectionType;
        /** @type {?} */
        LanguageListPageComponent.prototype.columns;
        /** @type {?} */
        LanguageListPageComponent.prototype.expanded;
        /** @type {?} */
        LanguageListPageComponent.prototype.injector;
        /**
         * @type {?}
         * @private
         */
        LanguageListPageComponent.prototype.router;
        /**
         * @type {?}
         * @private
         */
        LanguageListPageComponent.prototype.languageService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DialogFlagComponent = /** @class */ (function () {
        function DialogFlagComponent(ref) {
            this.ref = ref;
            this.flags = ['ad', 'ae', 'af', 'ag', 'ai', 'al', 'am', 'ao', 'aq', 'ar', 'as',
                'at', 'au', 'aw', 'ax', 'az', 'ba', 'bb', 'bd', 'be', 'bf', 'bg',
                'bh', 'bi', 'bj', 'bl', 'bm', 'bn', 'bo', 'bq', 'br', 'bs', 'bt',
                'bv', 'bw', 'by', 'bz', 'ca', 'cc', 'cd', 'cf', 'cg', 'ch', 'ci',
                'ck', 'cl', 'cm', 'cn', 'co', 'cr', 'cu', 'cv', 'cw', 'cx', 'cy',
                'cz', 'de', 'dj', 'dk', 'dm', 'do', 'dz', 'ec', 'ee', 'eg', 'eh',
                'er', 'es-ca', 'es', 'et', 'eu', 'fi', 'fj', 'fk', 'fm', 'fo', 'fr',
                'ga', 'gb-eng', 'gb-nir', 'gb-sct', 'gb-wls', 'gb', 'gd', 'ge', 'gf',
                'gg', 'gh', 'gi', 'gl', 'gm', 'gn', 'gp', 'gq', 'gr', 'gs', 'gt',
                'gu', 'gw', 'gy', 'hk', 'hm', 'hn', 'hr', 'ht', 'hu', 'id', 'ie',
                'il', 'im', 'in', 'io', 'iq', 'ir', 'is', 'it', 'je', 'jm', 'jo',
                'jp', 'ke', 'kg', 'kh', 'ki', 'km', 'kn', 'kp', 'kr', 'kw', 'ky',
                'kz', 'la', 'lb', 'lc', 'li', 'lk', 'lr', 'ls', 'lt', 'lu', 'lv',
                'ly', 'ma', 'mc', 'md', 'me', 'mf', 'mg', 'mh', 'mk', 'ml', 'mm',
                'mn', 'mo', 'mp', 'mq', 'mr', 'ms', 'mt', 'mu', 'mv', 'mw', 'mx',
                'my', 'mz', 'na', 'nc', 'ne', 'nf', 'ng', 'ni', 'nl', 'no', 'np',
                'nr', 'nu', 'nz', 'om', 'pa', 'pe', 'pf', 'pg', 'ph', 'pk', 'pl',
                'pm', 'pn', 'pr', 'ps', 'pt', 'pw', 'py', 'qa', 're', 'ro', 'rs',
                'ru', 'rw', 'sa', 'sb', 'sc', 'sd', 'se', 'sg', 'sh', 'si', 'sj',
                'sk', 'sl', 'sm', 'sn', 'so', 'sr', 'ss', 'st', 'sv', 'sx', 'sy',
                'sz', 'tc', 'td', 'tf', 'tg', 'th', 'tj', 'tk', 'tl', 'tm', 'tn',
                'to', 'tr', 'tt', 'tv', 'tw', 'tz', 'ua', 'ug', 'um', 'un', 'us',
                'uy', 'uz', 'va', 'vc', 've', 'vg', 'vi', 'vn', 'vu', 'wf', 'ws',
                'xk', 'ye', 'yt', 'za', 'zm', 'zw'];
        }
        /**
         * @param {?} flag
         * @return {?}
         */
        DialogFlagComponent.prototype.choose = /**
         * @param {?} flag
         * @return {?}
         */
        function (flag) {
            this.ref.close('flag-icon flag-icon-' + flag);
        };
        DialogFlagComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'xa-dialog-flag',
                        template: "<nb-card>\n  <nb-card-header>\n    {{ 'Choose Flag' | translate }}\n  </nb-card-header>\n  <nb-card-body>\n    <span class=\"flag-icon flag-icon-{{flag}} choose-flag\" (click)=\"choose(flag)\" *ngFor=\"let flag of flags\"></span>\n  </nb-card-body>\n</nb-card>\n",
                        styles: ["/*!\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */.nb-theme-default :host input.deactivated-password{max-width:unset;width:100%}.nb-theme-default :host .cancel{margin-right:1rem}.nb-theme-default :host button.deactivated-button{width:100%}.nb-theme-default :host .flag-icon{margin:.75rem}.nb-theme-default :host .choose-flag{cursor:pointer}.nb-theme-dark :host input.deactivated-password{max-width:unset;width:100%}.nb-theme-dark :host .cancel{margin-right:1rem}.nb-theme-dark :host button.deactivated-button{width:100%}.nb-theme-dark :host .flag-icon{margin:.75rem}.nb-theme-dark :host .choose-flag{cursor:pointer}.nb-theme-cosmic :host input.deactivated-password{max-width:unset;width:100%}.nb-theme-cosmic :host .cancel{margin-right:1rem}.nb-theme-cosmic :host button.deactivated-button{width:100%}.nb-theme-cosmic :host .flag-icon{margin:.75rem}.nb-theme-cosmic :host .choose-flag{cursor:pointer}.nb-theme-corporate :host input.deactivated-password{max-width:unset;width:100%}.nb-theme-corporate :host .cancel{margin-right:1rem}.nb-theme-corporate :host button.deactivated-button{width:100%}@media (max-width:767.98px){.nb-theme-default :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-default :host button.deactivated-button{font-size:.6rem}.nb-theme-dark :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-dark :host button.deactivated-button{font-size:.6rem}.nb-theme-cosmic :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-cosmic :host button.deactivated-button{font-size:.6rem}.nb-theme-corporate :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-corporate :host button.deactivated-button{font-size:.6rem}}.nb-theme-corporate :host .flag-icon{margin:.75rem}.nb-theme-corporate :host .choose-flag{cursor:pointer}"]
                    }] }
        ];
        /** @nocollapse */
        DialogFlagComponent.ctorParameters = function () { return [
            { type: theme.NbDialogRef }
        ]; };
        return DialogFlagComponent;
    }());
    if (false) {
        /** @type {?} */
        DialogFlagComponent.prototype.flags;
        /**
         * @type {?}
         * @protected
         */
        DialogFlagComponent.prototype.ref;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LanguageAddEditPageComponent = /** @class */ (function (_super) {
        __extends(LanguageAddEditPageComponent, _super);
        function LanguageAddEditPageComponent(injector, router, route, languageService, dialogService) {
            var _this = _super.call(this, injector, {
                'language': [],
                'icon': [],
                'default': [],
            }) || this;
            _this.injector = injector;
            _this.router = router;
            _this.route = route;
            _this.languageService = languageService;
            _this.dialogService = dialogService;
            _this.action = 'Add';
            _this.dataDefault = [
                {
                    selected: false,
                },
            ];
            if ((_this.route.snapshot.params['action'] === 'edit')) {
                _this.action = 'Edit';
            }
            _this.apiSelectLanguage = _this.api['master']['select-language'];
            if (_this.languageService.getLocale()) {
                if (_this.languageService.getLocale().localeDefault) {
                    _this.formGroup.get('default').setValue([{
                            selected: true,
                        }]);
                    _this.formGroup.get('default').disable();
                }
                else {
                    _this.formGroup.get('default').setValue([{
                            selected: false,
                        }]);
                }
                _this.formGroup.get('icon').setValue(_this.languageService.getLocale().icon);
                _this.formGroup.get('language').setValue(_this.languageService.getLocale().identifier);
                _this.formGroup.get('language').disable();
            }
            return _this;
        }
        /**
         * @return {?}
         */
        LanguageAddEditPageComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () { };
        /**
         * @return {?}
         */
        LanguageAddEditPageComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () { };
        /**
         * @return {?}
         */
        LanguageAddEditPageComponent.prototype.onSearchFlag = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.dialogService.open(DialogFlagComponent)
                .onClose.subscribe((/**
             * @param {?} flagIcon
             * @return {?}
             */
            function (flagIcon) {
                _this.formGroup.get('icon').setValue(flagIcon);
                _this.formGroup.get('icon').markAsDirty();
            }));
        };
        /**
         * @return {?}
         */
        LanguageAddEditPageComponent.prototype.onReset = /**
         * @return {?}
         */
        function () {
            this.router.navigate(['/app/sysconf/language']);
        };
        /**
         * @return {?}
         */
        LanguageAddEditPageComponent.prototype.onSubmit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            /** @type {?} */
            var localeDefault = this.formGroup.get('default').value;
            /** @type {?} */
            var data = {
                icon: this.formGroup.get('icon').value,
                localeDefault: (localeDefault ? true : false),
                localeCode: this.formGroup.get('language').value['value'] ?
                    this.formGroup.get('language').value['value'] : this.languageService.getLocale().localeCode,
                identifier: this.formGroup.get('language').value['label'] ?
                    this.formGroup.get('language').value['label'] : this.languageService.getLocale().identifier,
                localeEnabled: true,
            };
            ((/** @type {?} */ (_super.prototype.onSubmit.call(this, data, 'master', 'post-locale'))))
                .pipe(operators.takeUntil(this.destroy$))
                .subscribe((/**
             * @param {?} response
             * @return {?}
             */
            function (response) {
                if (response.respStatusCode === shared.ResponseCode.OK_SCR010.toString()) {
                    _this.router.navigate(['/app/sysconf/language']);
                }
            }));
        };
        LanguageAddEditPageComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'xa-language-add-edit-page',
                        template: "<xa-page-outlet [header]=\"action+' Language'\">\n  <div class=\"row\">\n    <div class=\"col-md-12 col-lg-12 col-xxxl-6\">\n      <form [formGroup]=\"formGroup\">\n        <xa-select\n          [name]=\"'language'\"\n          [label]=\"'Language'\"\n          [required]=\"true\"\n          [api]=\"apiSelectLanguage\"\n          formControlName=\"language\">\n        </xa-select>\n        <xa-input-icon\n          [name]=\"'icon'\"\n          [label]=\"'Icon'\"\n          [required]=\"true\"\n          [icon]=\"'search-outline'\"\n          [iconcursor]=\"true\"\n          [eva]=\"true\"\n          (clickIcon)=\"onSearchFlag()\"\n          formControlName=\"icon\">\n        </xa-input-icon>\n        <xa-checkbox\n          [name]=\"'checkbox'\"\n          [label]=\"'System Default Language'\"\n          [data]=\"dataDefault\"\n          formControlName=\"default\">\n        </xa-checkbox>\n        <div class=\"form-group row\">\n          <div class=\"offset-sm-3 col-sm-9\">\n            <button\n              type=\"reset\"\n              status=\"danger\"\n              (click)=\"onReset()\"\n              class=\"reset-left\"\n              nbButton>\n              {{ 'Cancel' | translate}}\n            </button>\n            <button\n              type=\"submit\"\n              status=\"primary\"\n              (click)=\"onSubmit()\"\n              [disabled]=\"formGroup.invalid || formGroup.pristine || disabled\"\n              class=\"submit-right\"\n              nbButton>\n              {{ action | translate}}\n            </button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</xa-page-outlet>\n",
                        styles: [".reset-left{margin-right:.25rem}.submit-right{margin-left:.25rem}"]
                    }] }
        ];
        /** @nocollapse */
        LanguageAddEditPageComponent.ctorParameters = function () { return [
            { type: core.Injector },
            { type: router.Router },
            { type: router.ActivatedRoute },
            { type: LanguageService },
            { type: theme.NbDialogService }
        ]; };
        return LanguageAddEditPageComponent;
    }(ngxaCommon.BaseFormComponent));
    if (false) {
        /** @type {?} */
        LanguageAddEditPageComponent.prototype.action;
        /** @type {?} */
        LanguageAddEditPageComponent.prototype.apiSelectLanguage;
        /** @type {?} */
        LanguageAddEditPageComponent.prototype.dataDefault;
        /** @type {?} */
        LanguageAddEditPageComponent.prototype.injector;
        /**
         * @type {?}
         * @private
         */
        LanguageAddEditPageComponent.prototype.router;
        /**
         * @type {?}
         * @private
         */
        LanguageAddEditPageComponent.prototype.route;
        /**
         * @type {?}
         * @private
         */
        LanguageAddEditPageComponent.prototype.languageService;
        /**
         * @type {?}
         * @private
         */
        LanguageAddEditPageComponent.prototype.dialogService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ɵ0$1 = {
        code: '#SYSCONF-LANGUAGE-PAGE',
    }, ɵ1$1 = {
        code: '#SYSCONF-LANGUAGE-PAGE',
    };
    /** @type {?} */
    var routes$1 = [{
            path: '',
            component: LanguageComponent,
            canActivateChild: [ngxaAuth.AuthGuardChildService],
            children: [
                {
                    path: '',
                    component: LanguageListPageComponent,
                    data: ɵ0$1,
                },
                {
                    path: ':action',
                    component: LanguageAddEditPageComponent,
                    data: ɵ1$1,
                },
            ],
        }];
    var NgxaLanguageRoutingModule = /** @class */ (function () {
        function NgxaLanguageRoutingModule() {
        }
        NgxaLanguageRoutingModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [router.RouterModule.forChild(routes$1)],
                        exports: [router.RouterModule],
                    },] }
        ];
        return NgxaLanguageRoutingModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var components$1 = [
        LanguageComponent,
        LanguageListPageComponent,
        LanguageAddEditPageComponent,
        DialogFlagComponent,
    ];
    /** @type {?} */
    var modules$1 = [
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
        ngxaCommon.NgxaSelectModule,
        ngxaCommon.NgxaTableModule,
        NgxaLanguageRoutingModule,
    ];
    /** @type {?} */
    var providers$1 = [
        LanguageService,
    ];
    /** @type {?} */
    var entryComponents = [
        DialogFlagComponent,
    ];
    var NgxaLanguageModule = /** @class */ (function () {
        function NgxaLanguageModule() {
        }
        NgxaLanguageModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: __spread(modules$1),
                        declarations: __spread(components$1),
                        providers: __spread(providers$1),
                        entryComponents: __spread(entryComponents),
                    },] }
        ];
        return NgxaLanguageModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MgmtUserComponent = /** @class */ (function () {
        function MgmtUserComponent() {
        }
        MgmtUserComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'xa-mgmt-user',
                        template: "\n    <router-outlet></router-outlet>\n  "
                    }] }
        ];
        return MgmtUserComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ManagementUserService = /** @class */ (function () {
        function ManagementUserService() {
        }
        /**
         * @return {?}
         */
        ManagementUserService.prototype.getUser = /**
         * @return {?}
         */
        function () {
            return this.user;
        };
        /**
         * @param {?} user
         * @return {?}
         */
        ManagementUserService.prototype.setUser = /**
         * @param {?} user
         * @return {?}
         */
        function (user) {
            this.user = user;
        };
        ManagementUserService.decorators = [
            { type: core.Injectable }
        ];
        return ManagementUserService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        ManagementUserService.prototype.user;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MgmtCiviliansListPageComponent = /** @class */ (function (_super) {
        __extends(MgmtCiviliansListPageComponent, _super);
        function MgmtCiviliansListPageComponent(injector, router, userService) {
            var _this = _super.call(this, injector, {
                'username': [],
                'name': [],
                'phoneNumber': [],
            }) || this;
            _this.injector = injector;
            _this.router = router;
            _this.userService = userService;
            _this.selectionType = ngxDatatable.SelectionType.single;
            _this.columns = [
                { name: 'Username', prop: 'username', width: 125, frozenLeft: true },
                { name: 'Name', prop: 'name', width: 275, frozenLeft: true },
                { name: 'Email', prop: 'email', width: 225, frozenLeft: true },
                { name: 'Phone Number', prop: 'phoneNumber', width: 150, frozenLeft: true },
                { name: 'Created', prop: 'createdBy' },
                { name: 'Created Date', prop: 'createdDate' },
                { name: 'Modified', prop: 'modifiedBy' },
                { name: 'Modified Date', prop: 'modifiedDate' },
                { name: 'Active', prop: 'active' },
            ];
            _this.expanded = false;
            _this.apiPath = _this.api['security']['datatable-user'];
            _this.filters = [
                { controlName: 'username', type: 'input' },
                { controlName: 'name', type: 'input' },
                { controlName: 'phoneNumber', type: 'input' }
            ];
            _this.keyword = {
                authority: 'ROLE_END',
            };
            return _this;
        }
        /**
         * @return {?}
         */
        MgmtCiviliansListPageComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () { };
        /**
         * @return {?}
         */
        MgmtCiviliansListPageComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () { };
        /**
         * @param {?} data
         * @return {?}
         */
        MgmtCiviliansListPageComponent.prototype.onViewDetail = /**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            this.userService.setUser(data);
            this.router.navigate(['/app/mgmt/user/civilians/detail']);
        };
        MgmtCiviliansListPageComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'xa-mgmt-civilians-list-page',
                        template: "<xa-page-outlet [header]=\"'Civilians'\">\n  <div class=\"row\">\n    <div class=\"col-md-12 col-lg-12 col-xxxl-6\">\n      <xa-datatable\n        [api]=\"apiPath\"\n        [formGroupFilter]=\"formGroupFilter\"\n        [filters]=\"filters\"\n        [add]=\"false\"\n        [delete]=\"false\"\n        [selectionType]=\"selectionType\"\n        (onFilter)=\"doFilterAdvanced($event)\"\n        (onEdit)=\"onViewDetail($event)\"\n        [filterFn]=\"keyword\"\n        [columns]=\"columns\">\n        <form [formGroup]=\"formGroupFilter\">\n          <xa-input-text\n            [name]=\"'username'\"\n            [label]=\"'Username'\"\n            formControlName=\"username\">\n          </xa-input-text>\n          <xa-input-text\n            [name]=\"'name'\"\n            [label]=\"'Name'\"\n            formControlName=\"name\">\n          </xa-input-text>\n          <xa-input-text\n            [name]=\"'phoneNumber'\"\n            [label]=\"'Phone Number'\"\n            formControlName=\"phoneNumber\">\n          </xa-input-text>\n        </form>\n      </xa-datatable>\n    </div>\n  </div>\n</xa-page-outlet>\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        MgmtCiviliansListPageComponent.ctorParameters = function () { return [
            { type: core.Injector },
            { type: router.Router },
            { type: ManagementUserService }
        ]; };
        return MgmtCiviliansListPageComponent;
    }(ngxaCommon.BaseFilterComponent));
    if (false) {
        /** @type {?} */
        MgmtCiviliansListPageComponent.prototype.apiPath;
        /** @type {?} */
        MgmtCiviliansListPageComponent.prototype.selectionType;
        /** @type {?} */
        MgmtCiviliansListPageComponent.prototype.columns;
        /** @type {?} */
        MgmtCiviliansListPageComponent.prototype.expanded;
        /** @type {?} */
        MgmtCiviliansListPageComponent.prototype.injector;
        /**
         * @type {?}
         * @private
         */
        MgmtCiviliansListPageComponent.prototype.router;
        /**
         * @type {?}
         * @private
         */
        MgmtCiviliansListPageComponent.prototype.userService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MgmtCiviliansDetailPageComponent = /** @class */ (function (_super) {
        __extends(MgmtCiviliansDetailPageComponent, _super);
        function MgmtCiviliansDetailPageComponent(injector, userService) {
            var _this = _super.call(this, injector) || this;
            _this.injector = injector;
            _this.userService = userService;
            _this.profile = {};
            _this.imageDefault = document.getElementsByTagName('base')[0].href + "/assets/images/avatars/default.png";
            return _this;
        }
        /**
         * @return {?}
         */
        MgmtCiviliansDetailPageComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.onInit('security', 'get-profile-personal');
        };
        /**
         * @return {?}
         */
        MgmtCiviliansDetailPageComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () { };
        /**
         * @param {?} serviceName
         * @param {?} apiName
         * @return {?}
         */
        MgmtCiviliansDetailPageComponent.prototype.onInit = /**
         * @param {?} serviceName
         * @param {?} apiName
         * @return {?}
         */
        function (serviceName, apiName) {
            var _this = this;
            this.loadingForm = true;
            /** @type {?} */
            var data = {
                username: this.userService.getUser().username,
            };
            this.exec(serviceName, apiName, data)
                .subscribe((/**
             * @param {?} success
             * @return {?}
             */
            function (success) {
                _this.loadingForm = false;
                _this.profile = success;
                if (success['image']) {
                    _this.image = success['image'];
                }
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
        MgmtCiviliansDetailPageComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'xa-mgmt-civilians-detail-page',
                        template: "<xa-page-outlet [url]=\"'/app/mgmt/user/civilians'\" [header]=\"'Civilian Profile'\">\n  <div class=\"row\">\n    <div class=\"col-md-4 col-lg-4 col-xxxl-6\">\n      <div class=\"photo-profile\"\n        [ngStyle]=\"{ \n          'background-image': 'url(' + (image? image: imageDefault) + ')'\n        }\">\n      </div>\n    </div>\n    <div class=\"col-md-8 col-lg-8 col-xxxl-6\">\n      <div class=\"split-row\">\n        <xa-label-text\n          [label]=\"'Name'\"\n          [colLabel]=\"4\"\n          [colContent]=\"8\"\n          [content]=\"profile.name\"\n          [skeleton]=\"loadingForm\">\n        </xa-label-text>\n        <xa-label-text\n          [label]=\"'ID Number'\"\n          [colLabel]=\"4\"\n          [colContent]=\"8\"\n          [content]=\"profile.idNumber\"\n          [skeleton]=\"loadingForm\">\n        </xa-label-text>\n        <xa-label-text\n          [label]=\"'Gender'\"\n          [colLabel]=\"4\"\n          [colContent]=\"8\"\n          [content]=\"profile.gender\"\n          [skeleton]=\"loadingForm\">\n        </xa-label-text>\n        <xa-label-text\n          [label]=\"'Place / Date of Birth'\"\n          [colLabel]=\"4\"\n          [colContent]=\"8\"\n          [content]=\"profile.placeOfBirth ? (profile.placeOfBirth + ', ' + profile.dateOfBirth) : ''\"\n          [skeleton]=\"loadingForm\">\n        </xa-label-text>\n      </div>\n      <div class=\"split-row\">\n        <xa-label-text\n          [label]=\"'Username'\"\n          [colLabel]=\"4\"\n          [colContent]=\"8\"\n          [content]=\"profile.username\"\n          [skeleton]=\"loadingForm\">\n        </xa-label-text>\n        <xa-label-text\n          [label]=\"'Email'\"\n          [colLabel]=\"4\"\n          [colContent]=\"8\"\n          [content]=\"profile.email\"\n          [skeleton]=\"loadingForm\">\n        </xa-label-text>\n        <xa-label-text\n          [label]=\"'Phone Number'\"\n          [colLabel]=\"4\"\n          [colContent]=\"8\"\n          [content]=\"profile.phoneNumber\"\n          [skeleton]=\"loadingForm\">\n        </xa-label-text>\n        <xa-label-text\n          [label]=\"'Address'\"\n          [colLabel]=\"4\"\n          [colContent]=\"8\"\n          [content]=\"profile.address\"\n          [skeleton]=\"loadingForm\">\n        </xa-label-text>\n        <xa-label-text\n          [label]=\"'Country'\"\n          [colLabel]=\"4\"\n          [colContent]=\"8\"\n          [content]=\"profile.country\"\n          [skeleton]=\"loadingForm\">\n        </xa-label-text>\n      </div>\n      <div>\n        <xa-label-text\n          [label]=\"'Related Person'\"\n          [colLabel]=\"4\"\n          [colContent]=\"8\"\n          [content]=\"profile.referenceName\"\n          [skeleton]=\"loadingForm\">\n        </xa-label-text>\n        <xa-label-text\n          [label]=\"'Relationship'\"\n          [colLabel]=\"4\"\n          [colContent]=\"8\"\n          [content]=\"profile.relationship\"\n          [skeleton]=\"loadingForm\">\n        </xa-label-text>\n        <xa-label-text\n          [label]=\"'Address'\"\n          [colLabel]=\"4\"\n          [colContent]=\"8\"\n          [content]=\"profile.referenceAddress\"\n          [skeleton]=\"loadingForm\">\n        </xa-label-text>\n        <xa-label-text\n          [label]=\"'Phone Number'\"\n          [colLabel]=\"4\"\n          [colContent]=\"8\"\n          [content]=\"profile.referencePhoneNumber\"\n          [skeleton]=\"loadingForm\">\n        </xa-label-text>\n      </div>\n    </div>\n  </div>\n</xa-page-outlet>\n",
                        styles: [".nb-theme-default :host .split-row{border-bottom:1px solid #edf1f7;margin-bottom:1rem}.nb-theme-default :host .photo-profile{height:225px;width:225px;background-size:cover;margin:20px auto}.nb-theme-dark :host .split-row{border-bottom:1px solid #151a30;margin-bottom:1rem}.nb-theme-dark :host .photo-profile{height:225px;width:225px;background-size:cover;margin:20px auto}.nb-theme-cosmic :host .split-row{border-bottom:1px solid #1b1b38;margin-bottom:1rem}.nb-theme-cosmic :host .photo-profile{height:225px;width:225px;background-size:cover;margin:20px auto}.nb-theme-corporate :host .split-row{border-bottom:1px solid #edf1f7;margin-bottom:1rem}.nb-theme-corporate :host .photo-profile{height:225px;width:225px;background-size:cover;margin:20px auto}"]
                    }] }
        ];
        /** @nocollapse */
        MgmtCiviliansDetailPageComponent.ctorParameters = function () { return [
            { type: core.Injector },
            { type: ManagementUserService }
        ]; };
        return MgmtCiviliansDetailPageComponent;
    }(ngxaCommon.BaseFormComponent));
    if (false) {
        /** @type {?} */
        MgmtCiviliansDetailPageComponent.prototype.profile;
        /** @type {?} */
        MgmtCiviliansDetailPageComponent.prototype.image;
        /** @type {?} */
        MgmtCiviliansDetailPageComponent.prototype.imageDefault;
        /** @type {?} */
        MgmtCiviliansDetailPageComponent.prototype.injector;
        /**
         * @type {?}
         * @private
         */
        MgmtCiviliansDetailPageComponent.prototype.userService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MgmtAdminListPageComponent = /** @class */ (function (_super) {
        __extends(MgmtAdminListPageComponent, _super);
        function MgmtAdminListPageComponent(injector, router, userService) {
            var _this = _super.call(this, injector, {
                'username': [],
                'name': [],
                'phoneNumber': [],
            }) || this;
            _this.injector = injector;
            _this.router = router;
            _this.userService = userService;
            _this.selectionType = ngxDatatable.SelectionType.single;
            _this.columns = [
                { name: 'Username', prop: 'username', width: 125, frozenLeft: true },
                { name: 'Name', prop: 'name', width: 275, frozenLeft: true },
                { name: 'Email', prop: 'email', width: 225, frozenLeft: true },
                { name: 'Phone Number', prop: 'phoneNumber', width: 150, frozenLeft: true },
                { name: 'Created', prop: 'createdBy' },
                { name: 'Created Date', prop: 'createdDate' },
                { name: 'Modified', prop: 'modifiedBy' },
                { name: 'Modified Date', prop: 'modifiedDate' },
                { name: 'Active', prop: 'active' },
            ];
            _this.expanded = false;
            _this.apiPath = _this.api['security']['datatable-user'];
            _this.filters = [
                { controlName: 'username', type: 'input' },
                { controlName: 'name', type: 'input' },
                { controlName: 'phoneNumber', type: 'input' }
            ];
            _this.keyword = {
                authority: 'ROLE_ADMIN_REGIONAL',
            };
            return _this;
        }
        /**
         * @return {?}
         */
        MgmtAdminListPageComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () { };
        /**
         * @return {?}
         */
        MgmtAdminListPageComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () { };
        /**
         * @param {?} data
         * @return {?}
         */
        MgmtAdminListPageComponent.prototype.onViewDetail = /**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            this.userService.setUser(data);
            this.router.navigate(['/app/mgmt/user/admin-regional/detail']);
        };
        MgmtAdminListPageComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'xa-mgmt-admin-list-page',
                        template: "<xa-page-outlet [header]=\"'Admin Regional'\">\n  <div class=\"row\">\n    <div class=\"col-md-12 col-lg-12 col-xxxl-6\">\n      <xa-datatable\n        [api]=\"apiPath\"\n        [formGroupFilter]=\"formGroupFilter\"\n        [filters]=\"filters\"\n        [add]=\"false\"\n        [delete]=\"false\"\n        [selectionType]=\"selectionType\"\n        (onFilter)=\"doFilterAdvanced($event)\"\n        (onEdit)=\"onViewDetail($event)\"\n        [filterFn]=\"keyword\"\n        [columns]=\"columns\">\n        <form [formGroup]=\"formGroupFilter\">\n          <xa-input-text\n            [name]=\"'username'\"\n            [label]=\"'Username'\"\n            formControlName=\"username\">\n          </xa-input-text>\n          <xa-input-text\n            [name]=\"'name'\"\n            [label]=\"'Name'\"\n            formControlName=\"name\">\n          </xa-input-text>\n          <xa-input-text\n            [name]=\"'phoneNumber'\"\n            [label]=\"'Phone Number'\"\n            formControlName=\"phoneNumber\">\n          </xa-input-text>\n        </form>\n      </xa-datatable>\n    </div>\n  </div>\n</xa-page-outlet>\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        MgmtAdminListPageComponent.ctorParameters = function () { return [
            { type: core.Injector },
            { type: router.Router },
            { type: ManagementUserService }
        ]; };
        return MgmtAdminListPageComponent;
    }(ngxaCommon.BaseFilterComponent));
    if (false) {
        /** @type {?} */
        MgmtAdminListPageComponent.prototype.apiPath;
        /** @type {?} */
        MgmtAdminListPageComponent.prototype.selectionType;
        /** @type {?} */
        MgmtAdminListPageComponent.prototype.columns;
        /** @type {?} */
        MgmtAdminListPageComponent.prototype.expanded;
        /** @type {?} */
        MgmtAdminListPageComponent.prototype.injector;
        /**
         * @type {?}
         * @private
         */
        MgmtAdminListPageComponent.prototype.router;
        /**
         * @type {?}
         * @private
         */
        MgmtAdminListPageComponent.prototype.userService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MgmtAdminDetailPageComponent = /** @class */ (function (_super) {
        __extends(MgmtAdminDetailPageComponent, _super);
        function MgmtAdminDetailPageComponent(injector, userService) {
            var _this = _super.call(this, injector) || this;
            _this.injector = injector;
            _this.userService = userService;
            _this.profile = {};
            _this.imageDefault = document.getElementsByTagName('base')[0].href + "/assets/images/avatars/default.png";
            return _this;
        }
        /**
         * @return {?}
         */
        MgmtAdminDetailPageComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.onInit('security', 'get-profile-base');
        };
        /**
         * @return {?}
         */
        MgmtAdminDetailPageComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () { };
        /**
         * @param {?} serviceName
         * @param {?} apiName
         * @return {?}
         */
        MgmtAdminDetailPageComponent.prototype.onInit = /**
         * @param {?} serviceName
         * @param {?} apiName
         * @return {?}
         */
        function (serviceName, apiName) {
            var _this = this;
            this.loadingForm = true;
            /** @type {?} */
            var data = {
                username: this.userService.getUser().username,
            };
            this.exec(serviceName, apiName, data)
                .subscribe((/**
             * @param {?} success
             * @return {?}
             */
            function (success) {
                _this.loadingForm = false;
                _this.profile = success;
                if (success['image']) {
                    _this.image = success['image'];
                }
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
        MgmtAdminDetailPageComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'xa-mgmt-admin-detail-page',
                        template: "<xa-page-outlet [url]=\"'/app/mgmt/user/admin-regional'\" [header]=\"'Admin Regional Profile'\">\n  <div class=\"row\">\n    <div class=\"col-md-4 col-lg-4 col-xxxl-6\">\n      <div class=\"photo-profile\"\n        [ngStyle]=\"{ \n          'background-image': 'url(' + (image? image: imageDefault) + ')'\n        }\">\n      </div>\n    </div>\n    <div class=\"col-md-8 col-lg-8 col-xxxl-6\">\n      <xa-label-text\n        [label]=\"'Name'\"\n        [colLabel]=\"4\"\n        [colContent]=\"8\"\n        [content]=\"profile.name\"\n        [skeleton]=\"loadingForm\">\n      </xa-label-text>\n      <xa-label-text\n        [label]=\"'Username'\"\n        [colLabel]=\"4\"\n        [colContent]=\"8\"\n        [content]=\"profile.username\"\n        [skeleton]=\"loadingForm\">\n      </xa-label-text>\n      <xa-label-text\n        [label]=\"'Email'\"\n        [colLabel]=\"4\"\n        [colContent]=\"8\"\n        [content]=\"profile.email\"\n        [skeleton]=\"loadingForm\">\n      </xa-label-text>\n      <xa-label-text\n        [label]=\"'Phone Number'\"\n        [colLabel]=\"4\"\n        [colContent]=\"8\"\n        [content]=\"profile.phoneNumber\"\n        [skeleton]=\"loadingForm\">\n      </xa-label-text>\n      <xa-label-text\n        [label]=\"'Address'\"\n        [colLabel]=\"4\"\n        [colContent]=\"8\"\n        [content]=\"profile.address\"\n        [skeleton]=\"loadingForm\">\n      </xa-label-text>\n      <xa-label-text\n        [label]=\"'Country'\"\n        [colLabel]=\"4\"\n        [colContent]=\"8\"\n        [content]=\"profile.country\"\n        [skeleton]=\"loadingForm\">\n      </xa-label-text>\n    </div>\n  </div>\n</xa-page-outlet>\n",
                        styles: [".nb-theme-default :host .split-row{border-bottom:1px solid #edf1f7;margin-bottom:1rem}.nb-theme-default :host .photo-profile{height:225px;width:225px;background-size:cover;margin:20px auto}.nb-theme-dark :host .split-row{border-bottom:1px solid #151a30;margin-bottom:1rem}.nb-theme-dark :host .photo-profile{height:225px;width:225px;background-size:cover;margin:20px auto}.nb-theme-cosmic :host .split-row{border-bottom:1px solid #1b1b38;margin-bottom:1rem}.nb-theme-cosmic :host .photo-profile{height:225px;width:225px;background-size:cover;margin:20px auto}.nb-theme-corporate :host .split-row{border-bottom:1px solid #edf1f7;margin-bottom:1rem}.nb-theme-corporate :host .photo-profile{height:225px;width:225px;background-size:cover;margin:20px auto}"]
                    }] }
        ];
        /** @nocollapse */
        MgmtAdminDetailPageComponent.ctorParameters = function () { return [
            { type: core.Injector },
            { type: ManagementUserService }
        ]; };
        return MgmtAdminDetailPageComponent;
    }(ngxaCommon.BaseFormComponent));
    if (false) {
        /** @type {?} */
        MgmtAdminDetailPageComponent.prototype.profile;
        /** @type {?} */
        MgmtAdminDetailPageComponent.prototype.image;
        /** @type {?} */
        MgmtAdminDetailPageComponent.prototype.imageDefault;
        /** @type {?} */
        MgmtAdminDetailPageComponent.prototype.injector;
        /**
         * @type {?}
         * @private
         */
        MgmtAdminDetailPageComponent.prototype.userService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ɵ0$2 = {
        code: '#MANAGEMENT-CIVILIANS-PAGE',
    }, ɵ1$2 = {
        code: '#MANAGEMENT-CIVILIANS-PAGE',
    }, ɵ2$1 = {
        code: '#MANAGEMENT-ADMIN-REGIONAL-PAGE',
    }, ɵ3$1 = {
        code: '#MANAGEMENT-ADMIN-REGIONAL-PAGE',
    };
    /** @type {?} */
    var routes$2 = [{
            path: '',
            component: MgmtUserComponent,
            canActivateChild: [ngxaAuth.AuthGuardChildService],
            children: [
                {
                    path: 'civilians',
                    component: MgmtCiviliansListPageComponent,
                    data: ɵ0$2,
                },
                {
                    path: 'civilians/detail',
                    component: MgmtCiviliansDetailPageComponent,
                    data: ɵ1$2,
                },
                {
                    path: 'admin-regional',
                    component: MgmtAdminListPageComponent,
                    data: ɵ2$1,
                },
                {
                    path: 'admin-regional/detail',
                    component: MgmtAdminDetailPageComponent,
                    data: ɵ3$1,
                },
            ],
        }];
    var NgxaMgmtUserRoutingModule = /** @class */ (function () {
        function NgxaMgmtUserRoutingModule() {
        }
        NgxaMgmtUserRoutingModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [router.RouterModule.forChild(routes$2)],
                        exports: [router.RouterModule],
                    },] }
        ];
        return NgxaMgmtUserRoutingModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var components$2 = [
        MgmtUserComponent,
        MgmtCiviliansListPageComponent,
        MgmtCiviliansDetailPageComponent,
        MgmtAdminListPageComponent,
        MgmtAdminDetailPageComponent,
    ];
    /** @type {?} */
    var modules$2 = [
        forms.FormsModule,
        forms.ReactiveFormsModule,
        theme.NbCardModule,
        theme.NbAlertModule,
        theme.NbIconModule,
        theme.NbDialogModule.forChild(),
        ngxaTheme.NgxaThemeModule,
        ngxaCommon.NgxaInputModule,
        ngxaCommon.NgxaButtonModule,
        ngxaCommon.NgxaBaseModule,
        ngxaCommon.NgxaTableModule,
        ngxaCommon.NgxaLabelModule,
        NgxaMgmtUserRoutingModule,
    ];
    /** @type {?} */
    var providers$2 = [
        ManagementUserService,
    ];
    /** @type {?} */
    var entry_components = [];
    var NgxaMgmtUserModule = /** @class */ (function () {
        function NgxaMgmtUserModule() {
        }
        NgxaMgmtUserModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: __spread(modules$2),
                        declarations: __spread(components$2),
                        providers: __spread(providers$2),
                        entryComponents: __spread(entry_components),
                    },] }
        ];
        return NgxaMgmtUserModule;
    }());

    exports.NgxaLanguageModule = NgxaLanguageModule;
    exports.NgxaMgmtUserModule = NgxaMgmtUserModule;
    exports.NgxaParameterModule = NgxaParameterModule;
    exports.ɵa = NgxaParameterRoutingModule;
    exports.ɵb = ParameterComponent;
    exports.ɵc = ParameterListGroupPageComponent;
    exports.ɵd = ParameterService;
    exports.ɵe = ParameterAddGroupPageComponent;
    exports.ɵf = ParameterListDetailPageComponent;
    exports.ɵg = ParameterDoDetailPageComponent;
    exports.ɵh = ParameterEditGroupCollapseComponent;
    exports.ɵi = NgxaLanguageRoutingModule;
    exports.ɵj = LanguageComponent;
    exports.ɵk = LanguageListPageComponent;
    exports.ɵl = LanguageService;
    exports.ɵm = LanguageAddEditPageComponent;
    exports.ɵn = DialogFlagComponent;
    exports.ɵo = NgxaMgmtUserRoutingModule;
    exports.ɵp = MgmtUserComponent;
    exports.ɵq = MgmtCiviliansListPageComponent;
    exports.ɵr = ManagementUserService;
    exports.ɵs = MgmtCiviliansDetailPageComponent;
    exports.ɵt = MgmtAdminListPageComponent;
    exports.ɵu = MgmtAdminDetailPageComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=xaphira-ngxa-sys.umd.js.map
