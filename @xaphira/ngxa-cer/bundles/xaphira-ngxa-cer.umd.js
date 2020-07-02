(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@xaphira/shared'), require('@xaphira/ngxa-storage'), require('rxjs'), require('@angular/forms'), require('@nebular/theme'), require('@xaphira/ngxa-theme'), require('@xaphira/ngxa-common'), require('@angular/router'), require('@xaphira/ngxa-auth'), require('rxjs/operators'), require('@xaphira/utils'), require('@angular/platform-browser'), require('@swimlane/ngx-datatable')) :
    typeof define === 'function' && define.amd ? define('@xaphira/ngxa-cer', ['exports', '@angular/core', '@angular/common', '@xaphira/shared', '@xaphira/ngxa-storage', 'rxjs', '@angular/forms', '@nebular/theme', '@xaphira/ngxa-theme', '@xaphira/ngxa-common', '@angular/router', '@xaphira/ngxa-auth', 'rxjs/operators', '@xaphira/utils', '@angular/platform-browser', '@swimlane/ngx-datatable'], factory) :
    (global = global || self, factory((global.xaphira = global.xaphira || {}, global.xaphira['ngxa-cer'] = {}), global.ng.core, global.ng.common, global.shared, global.ngxaStorage, global.rxjs, global.ng.forms, global['@nebular/theme'], global['@xaphira/ngxa-theme'], global['@xaphira/ngxa-common'], global.ng.router, global['@xaphira/ngxa-auth'], global.rxjs.operators, global['@xaphira/utils'], global.ng.platformBrowser, global.ngxDatatable));
}(this, (function (exports, core, common, shared, ngxaStorage, rxjs, forms, theme, ngxaTheme, ngxaCommon, router, ngxaAuth, operators, utils, platformBrowser, ngxDatatable) { 'use strict';

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
    var PanicIndexedDBService = /** @class */ (function (_super) {
        __extends(PanicIndexedDBService, _super);
        function PanicIndexedDBService(injector) {
            return _super.call(this, injector, 'cer', 1, '#cer-panic') || this;
        }
        PanicIndexedDBService.decorators = [
            { type: core.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */
        PanicIndexedDBService.ctorParameters = function () { return [
            { type: core.Injector }
        ]; };
        /** @nocollapse */ PanicIndexedDBService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function PanicIndexedDBService_Factory() { return new PanicIndexedDBService(core.ɵɵinject(core.INJECTOR)); }, token: PanicIndexedDBService, providedIn: "root" });
        return PanicIndexedDBService;
    }(ngxaStorage.IndexedDBService));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PanicService = /** @class */ (function () {
        function PanicService(panicIndexedDB) {
            this.panicIndexedDB = panicIndexedDB;
            this.loaderPanicSubject$ = new rxjs.Subject();
        }
        /**
         * @param {?} data
         * @return {?}
         */
        PanicService.prototype.notifyPanic = /**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            var _this = this;
            this.panicIndexedDB.put(data['panicCode'], data).then((/**
             * @return {?}
             */
            function () {
                _this.loaderPanicSubject$.next(data['panicCode']);
            }));
        };
        /**
         * @param {?} datas
         * @return {?}
         */
        PanicService.prototype.putAllPanic = /**
         * @param {?} datas
         * @return {?}
         */
        function (datas) {
            var _this = this;
            datas.forEach((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                _this.panicIndexedDB.put(data['panicCode'], data).then();
            }));
        };
        /**
         * @return {?}
         */
        PanicService.prototype.clearAllPanic = /**
         * @return {?}
         */
        function () {
            return this.panicIndexedDB.clearAll();
        };
        /**
         * @param {?} panicCode
         * @return {?}
         */
        PanicService.prototype.getPanic = /**
         * @param {?} panicCode
         * @return {?}
         */
        function (panicCode) {
            return this.panicIndexedDB.get(panicCode);
        };
        /**
         * @return {?}
         */
        PanicService.prototype.getAllPanic = /**
         * @return {?}
         */
        function () {
            return this.panicIndexedDB.getAllOf();
        };
        /**
         * @return {?}
         */
        PanicService.prototype.onCheckPanic = /**
         * @return {?}
         */
        function () {
            return this.loaderPanicSubject$.asObservable();
        };
        PanicService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        PanicService.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: [shared.PANIC_INDEXED_DB,] }] }
        ]; };
        return PanicService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        PanicService.prototype.loaderPanicSubject$;
        /**
         * @type {?}
         * @private
         */
        PanicService.prototype.panicIndexedDB;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var CER_PROVIDERS = [
        { provide: shared.PANIC_INDEXED_DB, useClass: PanicIndexedDBService },
        { provide: shared.PANIC, useClass: PanicService },
        PanicIndexedDBService,
        PanicService,
    ];
    var NgxaCerModule = /** @class */ (function () {
        function NgxaCerModule() {
        }
        /**
         * @return {?}
         */
        NgxaCerModule.forRoot = /**
         * @return {?}
         */
        function () {
            return (/** @type {?} */ ({
                ngModule: NgxaCerModule,
                providers: __spread(CER_PROVIDERS),
            }));
        };
        NgxaCerModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                        ],
                        exports: [],
                        declarations: [],
                    },] }
        ];
        return NgxaCerModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxaDashboardComponent = /** @class */ (function () {
        function NgxaDashboardComponent() {
        }
        NgxaDashboardComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'xa-cer-dashboard',
                        template: "\n    <router-outlet></router-outlet>\n  "
                    }] }
        ];
        return NgxaDashboardComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxaCerMonitoringPageComponent = /** @class */ (function () {
        function NgxaCerMonitoringPageComponent(injector, panicService) {
            var _this = this;
            this.panicService = panicService;
            this.showInfo = false;
            this.destroy$ = new rxjs.Subject();
            this.http = injector.get(shared.HTTP_SERVICE);
            this.api = injector.get(shared.API);
            this.panicService.onCheckPanic()
                .pipe(operators.takeUntil(this.destroy$))
                .subscribe((/**
             * @return {?}
             */
            function () {
                _this.getAllPanicStorage();
            }));
        }
        /**
         * @return {?}
         */
        NgxaCerMonitoringPageComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.getAllPanicServer();
        };
        /**
         * @return {?}
         */
        NgxaCerMonitoringPageComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.destroy$.next();
            this.destroy$.complete();
        };
        /**
         * @private
         * @return {?}
         */
        NgxaCerMonitoringPageComponent.prototype.getAllPanicServer = /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            this.http.HTTP_AUTH(this.api['panic']['get-allpanic']).subscribe((/**
             * @param {?} values
             * @return {?}
             */
            function (values) {
                /** @type {?} */
                var temps = [];
                values.forEach((/**
                 * @param {?} data
                 * @return {?}
                 */
                function (data) {
                    temps.push({
                        mark: [
                            data['latestLatitude'], data['latestLongitude'],
                        ],
                        title: data['name'],
                        alt: data['panicCode'],
                        className: 'pulse',
                    });
                }));
                _this.markers = temps;
                try {
                    _this.panicService.clearAllPanic().then((/**
                     * @return {?}
                     */
                    function () {
                        if (values.length) {
                            _this.panicService.putAllPanic(values);
                        }
                    }));
                }
                catch (error) { }
            }));
        };
        /**
         * @private
         * @return {?}
         */
        NgxaCerMonitoringPageComponent.prototype.getAllPanicStorage = /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            this.panicService.getAllPanic().subscribe((/**
             * @param {?} values
             * @return {?}
             */
            function (values) {
                /** @type {?} */
                var temps = [];
                values.forEach((/**
                 * @param {?} data
                 * @return {?}
                 */
                function (data) {
                    temps.push({
                        mark: [
                            data['latestLatitude'], data['latestLongitude'],
                        ],
                        title: data['name'],
                        alt: data['panicCode'],
                        className: 'pulse',
                    });
                }));
                _this.markers = temps;
            }));
        };
        /**
         * @param {?} data
         * @return {?}
         */
        NgxaCerMonitoringPageComponent.prototype.onMarker = /**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            this.markerSelected = data;
            this.showInfo = true;
        };
        /**
         * @param {?} showInfo
         * @return {?}
         */
        NgxaCerMonitoringPageComponent.prototype.onToggleInfo = /**
         * @param {?} showInfo
         * @return {?}
         */
        function (showInfo) {
            this.showInfo = showInfo;
        };
        NgxaCerMonitoringPageComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'xa-cer-monitoring',
                        template: "<xa-page-outlet [header]=\"'Dashboard of Emergency Report'\">\n    <xa-maps-leaflet\n        [markersFn]=\"markers\"\n        (onMarkerClick)=\"onMarker($event)\">\n    </xa-maps-leaflet>\n</xa-page-outlet>\n<xa-cer-slide-out [showInfo]=\"showInfo\" (onToggle)=\"onToggleInfo($event)\">\n    <xa-cer-monitoring-info [markerFn]=\"markerSelected\">\n    </xa-cer-monitoring-info>\n</xa-cer-slide-out>\n",
                        styles: ["/*!\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */.nb-theme-default :host{position:relative;display:block;overflow:hidden}.nb-theme-dark :host{position:relative;display:block;overflow:hidden}.nb-theme-cosmic :host{position:relative;display:block;overflow:hidden}.nb-theme-corporate :host{position:relative;display:block;overflow:hidden}"]
                    }] }
        ];
        /** @nocollapse */
        NgxaCerMonitoringPageComponent.ctorParameters = function () { return [
            { type: core.Injector },
            { type: undefined, decorators: [{ type: core.Inject, args: [shared.PANIC,] }] }
        ]; };
        return NgxaCerMonitoringPageComponent;
    }());
    if (false) {
        /** @type {?} */
        NgxaCerMonitoringPageComponent.prototype.showInfo;
        /** @type {?} */
        NgxaCerMonitoringPageComponent.prototype.markers;
        /** @type {?} */
        NgxaCerMonitoringPageComponent.prototype.markerSelected;
        /**
         * @type {?}
         * @private
         */
        NgxaCerMonitoringPageComponent.prototype.destroy$;
        /**
         * @type {?}
         * @private
         */
        NgxaCerMonitoringPageComponent.prototype.http;
        /**
         * @type {?}
         * @private
         */
        NgxaCerMonitoringPageComponent.prototype.api;
        /**
         * @type {?}
         * @private
         */
        NgxaCerMonitoringPageComponent.prototype.panicService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxaCerMonitoringPreviewComponent = /** @class */ (function () {
        function NgxaCerMonitoringPreviewComponent(apiPath, httpBaseService, sanitizer) {
            this.apiPath = apiPath;
            this.httpBaseService = httpBaseService;
            this.sanitizer = sanitizer;
        }
        /**
         * @return {?}
         */
        NgxaCerMonitoringPreviewComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.getEvidence(this.checksum, this.user, this.fileType);
        };
        /**
         * @private
         * @param {?} checksum
         * @param {?} user
         * @param {?} fileType
         * @return {?}
         */
        NgxaCerMonitoringPreviewComponent.prototype.getEvidence = /**
         * @private
         * @param {?} checksum
         * @param {?} user
         * @param {?} fileType
         * @return {?}
         */
        function (checksum, user, fileType) {
            var _this = this;
            this.httpBaseService.HTTP_AUTH(this.apiPath['file']['evidence'], null, null, null, [checksum, user], 'arraybuffer')
                .pipe(operators.tap((/**
             * @param {?} response
             * @return {?}
             */
            function (response) {
                /** @type {?} */
                var fileBlob = new Blob([response], {
                    type: fileType,
                });
                /** @type {?} */
                var reader = new FileReader();
                reader.readAsDataURL(fileBlob);
                reader.onloadend = (/**
                 * @return {?}
                 */
                function () {
                    _this.url = _this.sanitizer.bypassSecurityTrustUrl(reader.result.toString());
                });
            }))).subscribe();
        };
        NgxaCerMonitoringPreviewComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'xa-cer-monitoring-preview',
                        template: "<nb-card *ngIf=\"url && fileType.includes('image')\">\n    <nb-card-body>\n        <img [src]=\"url\" height=\"500\">\n    </nb-card-body>\n</nb-card>\n<video *ngIf=\"url && fileType.includes('video')\" [src]=\"url\" height=\"500\" controls></video>\n<audio *ngIf=\"url && fileType.includes('audio')\" controls>\n    <source [src]=\"url\" [type]=\"fileType\">\n</audio>",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        NgxaCerMonitoringPreviewComponent.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: [shared.API,] }] },
            { type: undefined, decorators: [{ type: core.Inject, args: [shared.HTTP_SERVICE,] }] },
            { type: platformBrowser.DomSanitizer }
        ]; };
        NgxaCerMonitoringPreviewComponent.propDecorators = {
            url: [{ type: core.Input }],
            checksum: [{ type: core.Input }],
            user: [{ type: core.Input }],
            fileType: [{ type: core.Input }]
        };
        return NgxaCerMonitoringPreviewComponent;
    }());
    if (false) {
        /** @type {?} */
        NgxaCerMonitoringPreviewComponent.prototype.url;
        /** @type {?} */
        NgxaCerMonitoringPreviewComponent.prototype.checksum;
        /** @type {?} */
        NgxaCerMonitoringPreviewComponent.prototype.user;
        /** @type {?} */
        NgxaCerMonitoringPreviewComponent.prototype.fileType;
        /**
         * @type {?}
         * @private
         */
        NgxaCerMonitoringPreviewComponent.prototype.apiPath;
        /**
         * @type {?}
         * @private
         */
        NgxaCerMonitoringPreviewComponent.prototype.httpBaseService;
        /** @type {?} */
        NgxaCerMonitoringPreviewComponent.prototype.sanitizer;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxaFakeReportPromptComponent = /** @class */ (function () {
        function NgxaFakeReportPromptComponent(ref) {
            this.ref = ref;
            this.disabled = false;
        }
        /**
         * @param {?} password
         * @return {?}
         */
        NgxaFakeReportPromptComponent.prototype.submit = /**
         * @param {?} password
         * @return {?}
         */
        function (password) {
            this.disabled = true;
            this.ref.close(password);
        };
        NgxaFakeReportPromptComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'xa-fake-report-prompt',
                        template: "<nb-card>\n  <nb-card-header>\n    <h6 class=\"text-danger deactivated-label\">\n        {{ 'Fake Report' | translate }}\n    </h6>\n  </nb-card-header>\n  <nb-card-body>\n    <p>\n      {{ 'message.fake-form' | translate }}\n    </p>\n    <p>\n      {{ 'message.input-password' | translate }}\n    </p>\n    <input\n      [(ngModel)]=\"password\"\n      type=\"password\"\n      nbInput\n      class=\"fake-password\"\n      placeholder=\"Password\">\n  </nb-card-body>\n  <nb-card-footer>\n    <button\n      type=\"submit\"\n      status=\"danger\"\n      size=\"large\"\n      class=\"fake-button\"\n      [disabled]=\"!password || disabled\"\n      (click)=\"submit(password)\"\n      nbButton>\n      {{ 'Fake Report' | translate }}\n    </button>\n  </nb-card-footer>\n</nb-card>\n",
                        styles: ["/*!\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */.nb-theme-default :host input.fake-password{max-width:unset;width:100%}.nb-theme-default :host .cancel{margin-right:1rem}.nb-theme-default :host button.fake-button{width:100%}.nb-theme-dark :host input.fake-password{max-width:unset;width:100%}.nb-theme-dark :host .cancel{margin-right:1rem}.nb-theme-dark :host button.fake-button{width:100%}.nb-theme-cosmic :host input.fake-password{max-width:unset;width:100%}.nb-theme-cosmic :host .cancel{margin-right:1rem}.nb-theme-cosmic :host button.fake-button{width:100%}.nb-theme-corporate :host input.fake-password{max-width:unset;width:100%}.nb-theme-corporate :host .cancel{margin-right:1rem}.nb-theme-corporate :host button.fake-button{width:100%}@media (max-width:767.98px){.nb-theme-default :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-default :host button.fake-button{font-size:.6rem}.nb-theme-dark :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-dark :host button.fake-button{font-size:.6rem}.nb-theme-cosmic :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-cosmic :host button.fake-button{font-size:.6rem}.nb-theme-corporate :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-corporate :host button.fake-button{font-size:.6rem}}"]
                    }] }
        ];
        /** @nocollapse */
        NgxaFakeReportPromptComponent.ctorParameters = function () { return [
            { type: theme.NbDialogRef }
        ]; };
        return NgxaFakeReportPromptComponent;
    }());
    if (false) {
        /** @type {?} */
        NgxaFakeReportPromptComponent.prototype.disabled;
        /** @type {?} */
        NgxaFakeReportPromptComponent.prototype.password;
        /**
         * @type {?}
         * @protected
         */
        NgxaFakeReportPromptComponent.prototype.ref;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxaCerMonitoringDetailComponent = /** @class */ (function (_super) {
        __extends(NgxaCerMonitoringDetailComponent, _super);
        function NgxaCerMonitoringDetailComponent(injector, router, route, panicService, dialogService) {
            var _this = _super.call(this, injector, null, {
                'status': [],
                'emergencyCategory': [],
            }) || this;
            _this.injector = injector;
            _this.router = router;
            _this.route = route;
            _this.panicService = panicService;
            _this.dialogService = dialogService;
            _this.profile = {};
            _this.imageDefault = document.getElementsByTagName('base')[0].href + "/assets/images/avatars/default.png";
            _this.columns = [
                { name: 'Evidence', prop: 'fileMetadata', width: 100, frozenLeft: true, type: 'button',
                    button: 'Preview', buttonStatus: 'warning' },
                { name: 'File Size', prop: 'fileMetadata.size', width: 125, frozenLeft: true, type: 'prefix',
                    prefix: 'bytes' },
                { name: 'Latitude', prop: 'location.latitude', width: 125, frozenLeft: true },
                { name: 'Longitude', prop: 'location.longitude', width: 125, frozenLeft: true },
                { name: 'Address', prop: 'location.formattedAddress', width: 350 },
                { name: 'Province', prop: 'location.province', width: 150 },
                { name: 'City', prop: 'location.city', width: 150 },
                { name: 'District', prop: 'location.district', width: 150 },
                { name: 'Device ID', prop: 'device.deviceID', width: 150 },
                { name: 'Device Name', prop: 'device.deviceName', width: 150 },
            ];
            _this.sort = {
                'desc': ['createdDate'],
            };
            _this.enc = injector.get(utils.EncryptionService);
            _this.oauthResource = injector.get(shared.OAUTH_INFO);
            _this.apiSelectParameter = _this.api['master']['select-parameter'];
            if (_this.route.snapshot.params['code']) {
                _this.panicCode = _this.route.snapshot.params['code'];
                _this.keyword = {
                    panicCode: _this.panicCode,
                };
            }
            else {
                _this.router.navigate(['/app/dashboard']);
            }
            _this.apiPath = _this.api['panic']['datatable-panic-detail'];
            return _this;
        }
        /**
         * @return {?}
         */
        NgxaCerMonitoringDetailComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () { };
        /**
         * @return {?}
         */
        NgxaCerMonitoringDetailComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.onInit('security', 'get-profile-personal');
            this.paramSelectStatus = [{
                    key: 'parameterGroupCode',
                    value: 'STATUS_EMERGENCY',
                }];
            this.paramSelectEmergency = [{
                    key: 'parameterGroupCode',
                    value: 'CATEGORY_EMERGENCY',
                }];
        };
        /**
         * @param {?} serviceName
         * @param {?} apiName
         * @return {?}
         */
        NgxaCerMonitoringDetailComponent.prototype.onInit = /**
         * @param {?} serviceName
         * @param {?} apiName
         * @return {?}
         */
        function (serviceName, apiName) {
            var _this = this;
            this.panicService.getPanic(this.panicCode).then((/**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                _this.loadingForm = true;
                _this.username = value.username;
                /** @type {?} */
                var data = {
                    username: value.username,
                };
                _this.exec(serviceName, apiName, data)
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
            }));
        };
        /**
         * @param {?} prop
         * @return {?}
         */
        NgxaCerMonitoringDetailComponent.prototype.valueSelect = /**
         * @param {?} prop
         * @return {?}
         */
        function (prop) {
            if (this.formGroup.get(prop).value) {
                if (this.formGroup.get(prop).value.value) {
                    return this.formGroup.get(prop).value.value;
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
         * @param {?} data
         * @return {?}
         */
        NgxaCerMonitoringDetailComponent.prototype.onPreview = /**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            this.dialogService.open(NgxaCerMonitoringPreviewComponent, {
                context: {
                    checksum: data['checksum'],
                    user: this.username,
                    fileType: data['fileType'],
                },
            });
        };
        /**
         * @return {?}
         */
        NgxaCerMonitoringDetailComponent.prototype.onFake = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.dialogService.open(NgxaFakeReportPromptComponent)
                .onClose.subscribe((/**
             * @param {?} password
             * @return {?}
             */
            function (password) {
                if (password) {
                    _this.disabledFake = true;
                    /** @type {?} */
                    var data = {
                        password: _this.enc.encryptAES(_this.oauthResource['aes_key'], password),
                        panicCode: _this.panicCode,
                    };
                    ((/** @type {?} */ (_super.prototype.onSubmit.call(_this, data, 'panic', 'fake-report'))))
                        .pipe(operators.takeUntil(_this.destroy$))
                        .subscribe((/**
                     * @param {?} response
                     * @return {?}
                     */
                    function (response) {
                        if (response) {
                            if (response.respStatusCode === shared.ResponseCode.OK_SCR011.toString()) {
                                _this.router.navigate(['/app/dashboard']);
                            }
                        }
                    }));
                }
                else {
                    _this.disabledFake = false;
                }
            }));
        };
        /**
         * @return {?}
         */
        NgxaCerMonitoringDetailComponent.prototype.onProcess = /**
         * @return {?}
         */
        function () {
            var _this = this;
            /** @type {?} */
            var data = {
                panicCode: this.panicCode,
                status: this.valueSelect('status'),
                emergencyCategory: this.valueSelect('emergencyCategory'),
            };
            ((/** @type {?} */ (_super.prototype.onSubmit.call(this, data, 'panic', 'process-report'))))
                .pipe(operators.takeUntil(this.destroy$))
                .subscribe((/**
             * @param {?} response
             * @return {?}
             */
            function (response) {
                if (response) {
                    if (response.respStatusCode === shared.ResponseCode.OK_UPDATED.toString()) {
                        _this.router.navigate(['/app/dashboard']);
                    }
                }
            }));
        };
        NgxaCerMonitoringDetailComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'xa-cer-monitoring-detail',
                        template: "<xa-page-outlet [url]=\"'/app/dashboard'\" [header]=\"'Emergency Report Detail'\">\n    <div class=\"row\">\n        <div class=\"col-md-4 col-lg-4 col-xxxl-6\">\n            <div class=\"photo-profile\"\n            [ngStyle]=\"{ \n                'background-image': 'url(' + (image? image: imageDefault) + ')'\n            }\">\n            </div>\n        </div>\n        <div class=\"col-md-8 col-lg-8 col-xxxl-6\">\n            <div class=\"split-row\">\n                <xa-label-text\n                    [label]=\"'Name'\"\n                    [colLabel]=\"4\"\n                    [colContent]=\"8\"\n                    [content]=\"profile.name\"\n                    [skeleton]=\"loadingForm\">\n                </xa-label-text>\n                <xa-label-text\n                    [label]=\"'ID Number'\"\n                    [colLabel]=\"4\"\n                    [colContent]=\"8\"\n                    [content]=\"profile.idNumber\"\n                    [skeleton]=\"loadingForm\">\n                </xa-label-text>\n                <xa-label-text\n                    [label]=\"'Gender'\"\n                    [colLabel]=\"4\"\n                    [colContent]=\"8\"\n                    [content]=\"profile.gender\"\n                    [skeleton]=\"loadingForm\">\n                </xa-label-text>\n                <xa-label-text\n                    [label]=\"'Place / Date of Birth'\"\n                    [colLabel]=\"4\"\n                    [colContent]=\"8\"\n                    [content]=\"profile.placeOfBirth ? (profile.placeOfBirth + ', ' + profile.dateOfBirth) : ''\"\n                    [skeleton]=\"loadingForm\">\n                </xa-label-text>\n            </div>\n            <div class=\"split-row\">\n                <xa-label-text\n                    [label]=\"'Username'\"\n                    [colLabel]=\"4\"\n                    [colContent]=\"8\"\n                    [content]=\"profile.username\"\n                    [skeleton]=\"loadingForm\">\n                </xa-label-text>\n                <xa-label-text\n                    [label]=\"'Email'\"\n                    [colLabel]=\"4\"\n                    [colContent]=\"8\"\n                    [content]=\"profile.email\"\n                    [skeleton]=\"loadingForm\">\n                </xa-label-text>\n                <xa-label-text\n                    [label]=\"'Phone Number'\"\n                    [colLabel]=\"4\"\n                    [colContent]=\"8\"\n                    [content]=\"profile.phoneNumber\"\n                    [skeleton]=\"loadingForm\">\n                </xa-label-text>\n                <xa-label-text\n                    [label]=\"'Address'\"\n                    [colLabel]=\"4\"\n                    [colContent]=\"8\"\n                    [content]=\"profile.address\"\n                    [skeleton]=\"loadingForm\">\n                </xa-label-text>\n                <xa-label-text\n                    [label]=\"'Country'\"\n                    [colLabel]=\"4\"\n                    [colContent]=\"8\"\n                    [content]=\"profile.country\"\n                    [skeleton]=\"loadingForm\">\n                </xa-label-text>\n            </div>\n            <div class=\"split-row\">\n                <xa-label-text\n                    [label]=\"'Related Person'\"\n                    [colLabel]=\"4\"\n                    [colContent]=\"8\"\n                    [content]=\"profile.referenceName\"\n                    [skeleton]=\"loadingForm\">\n                </xa-label-text>\n                <xa-label-text\n                    [label]=\"'Relationship'\"\n                    [colLabel]=\"4\"\n                    [colContent]=\"8\"\n                    [content]=\"profile.relationship\"\n                    [skeleton]=\"loadingForm\">\n                </xa-label-text>\n                <xa-label-text\n                    [label]=\"'Address'\"\n                    [colLabel]=\"4\"\n                    [colContent]=\"8\"\n                    [content]=\"profile.referenceAddress\"\n                    [skeleton]=\"loadingForm\">\n                </xa-label-text>\n                <xa-label-text\n                    [label]=\"'Phone Number'\"\n                    [colLabel]=\"4\"\n                    [colContent]=\"8\"\n                    [content]=\"profile.referencePhoneNumber\"\n                    [skeleton]=\"loadingForm\">\n                </xa-label-text>\n            </div>\n            <form [formGroup]=\"formGroup\">\n                <xa-select\n                    [name]=\"'status'\"\n                    [label]=\"'Status'\"\n                    [colLabel]=\"4\"\n                    [colInput]=\"8\"\n                    [required]=\"true\"\n                    [api]=\"apiSelectParameter\"\n                    [queryParam]=\"paramSelectStatus\"\n                    [searchable]=\"false\"\n                    [skeleton]=\"loadingForm\"\n                    formControlName=\"status\">\n                </xa-select>\n                <xa-select\n                    [name]=\"'emergency'\"\n                    [label]=\"'Emergency'\"\n                    [colLabel]=\"4\"\n                    [colInput]=\"8\"\n                    [required]=\"true\"\n                    [api]=\"apiSelectParameter\"\n                    [queryParam]=\"paramSelectEmergency\"\n                    [searchable]=\"false\"\n                    [skeleton]=\"loadingForm\"\n                    formControlName=\"emergencyCategory\">\n                </xa-select>\n                <div class=\"form-group row\">\n                    <div class=\"offset-sm-4 col-sm-8\">\n                        <button\n                            type=\"reset\"\n                            status=\"danger\"\n                            (click)=\"onFake()\"\n                            class=\"reset-left\"\n                            nbButton>\n                            {{ 'Fake Report' | translate}}\n                        </button>\n                        <button\n                            type=\"submit\"\n                            status=\"primary\"\n                            (click)=\"onProcess()\"\n                            [disabled]=\"formGroup.invalid || formGroup.pristine || disabled\"\n                            class=\"submit-right\"\n                            nbButton>\n                            {{ 'Process' | translate}}\n                        </button>\n                    </div>\n                </div>\n            </form>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-md-12 col-lg-12 col-xxxl-6\">\n            <xa-datatable\n                [api]=\"apiPath\"\n                [filters]=\"filters\"\n                (onButtonCell)=\"onPreview($event)\"\n                [filterFn]=\"keyword\"\n                [selectionType]=\"null\"\n                [add]=\"false\"\n                [edit]=\"false\"\n                [delete]=\"false\"\n                [sort]=\"sort\"\n                [columns]=\"columns\">\n            </xa-datatable>\n        </div>\n    </div>\n</xa-page-outlet>  ",
                        styles: [".nb-theme-default :host .split-row{border-bottom:1px solid #edf1f7;margin-bottom:1rem}.nb-theme-default :host .photo-profile{height:225px;width:225px;background-size:cover;margin:20px auto}.nb-theme-default :host .reset-left{margin-right:.25rem}.nb-theme-default :host .submit-right{margin-left:.25rem}.nb-theme-dark :host .split-row{border-bottom:1px solid #151a30;margin-bottom:1rem}.nb-theme-dark :host .photo-profile{height:225px;width:225px;background-size:cover;margin:20px auto}.nb-theme-dark :host .reset-left{margin-right:.25rem}.nb-theme-dark :host .submit-right{margin-left:.25rem}.nb-theme-cosmic :host .split-row{border-bottom:1px solid #1b1b38;margin-bottom:1rem}.nb-theme-cosmic :host .photo-profile{height:225px;width:225px;background-size:cover;margin:20px auto}.nb-theme-cosmic :host .reset-left{margin-right:.25rem}.nb-theme-cosmic :host .submit-right{margin-left:.25rem}.nb-theme-corporate :host .split-row{border-bottom:1px solid #edf1f7;margin-bottom:1rem}.nb-theme-corporate :host .photo-profile{height:225px;width:225px;background-size:cover;margin:20px auto}.nb-theme-corporate :host .reset-left{margin-right:.25rem}.nb-theme-corporate :host .submit-right{margin-left:.25rem}"]
                    }] }
        ];
        /** @nocollapse */
        NgxaCerMonitoringDetailComponent.ctorParameters = function () { return [
            { type: core.Injector },
            { type: router.Router },
            { type: router.ActivatedRoute },
            { type: undefined, decorators: [{ type: core.Inject, args: [shared.PANIC,] }] },
            { type: theme.NbDialogService }
        ]; };
        return NgxaCerMonitoringDetailComponent;
    }(ngxaCommon.BaseFilterComponent));
    if (false) {
        /** @type {?} */
        NgxaCerMonitoringDetailComponent.prototype.profile;
        /** @type {?} */
        NgxaCerMonitoringDetailComponent.prototype.image;
        /** @type {?} */
        NgxaCerMonitoringDetailComponent.prototype.imageDefault;
        /** @type {?} */
        NgxaCerMonitoringDetailComponent.prototype.apiPath;
        /** @type {?} */
        NgxaCerMonitoringDetailComponent.prototype.columns;
        /** @type {?} */
        NgxaCerMonitoringDetailComponent.prototype.sort;
        /** @type {?} */
        NgxaCerMonitoringDetailComponent.prototype.apiSelectParameter;
        /** @type {?} */
        NgxaCerMonitoringDetailComponent.prototype.paramSelectStatus;
        /** @type {?} */
        NgxaCerMonitoringDetailComponent.prototype.paramSelectEmergency;
        /** @type {?} */
        NgxaCerMonitoringDetailComponent.prototype.disabledFake;
        /**
         * @type {?}
         * @private
         */
        NgxaCerMonitoringDetailComponent.prototype.panicCode;
        /**
         * @type {?}
         * @private
         */
        NgxaCerMonitoringDetailComponent.prototype.username;
        /**
         * @type {?}
         * @private
         */
        NgxaCerMonitoringDetailComponent.prototype.oauthResource;
        /**
         * @type {?}
         * @private
         */
        NgxaCerMonitoringDetailComponent.prototype.enc;
        /** @type {?} */
        NgxaCerMonitoringDetailComponent.prototype.injector;
        /**
         * @type {?}
         * @private
         */
        NgxaCerMonitoringDetailComponent.prototype.router;
        /**
         * @type {?}
         * @private
         */
        NgxaCerMonitoringDetailComponent.prototype.route;
        /**
         * @type {?}
         * @private
         */
        NgxaCerMonitoringDetailComponent.prototype.panicService;
        /**
         * @type {?}
         * @private
         */
        NgxaCerMonitoringDetailComponent.prototype.dialogService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ɵ0 = {
        code: '#DASHBOARD-PAGE',
    }, ɵ1 = {
        code: '#DASHBOARD-PAGE',
    };
    /** @type {?} */
    var routes = [{
            path: '',
            component: NgxaDashboardComponent,
            canActivateChild: [ngxaAuth.AuthGuardChildService],
            children: [
                {
                    path: '',
                    component: NgxaCerMonitoringPageComponent,
                    data: ɵ0,
                },
                {
                    path: 'details/:code',
                    component: NgxaCerMonitoringDetailComponent,
                    data: ɵ1,
                },
            ],
        }];
    var NgxaCerDashboardRoutingModule = /** @class */ (function () {
        function NgxaCerDashboardRoutingModule() {
        }
        NgxaCerDashboardRoutingModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [router.RouterModule.forChild(routes)],
                        exports: [router.RouterModule],
                    },] }
        ];
        return NgxaCerDashboardRoutingModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxaCerSlideOutComponent = /** @class */ (function () {
        function NgxaCerSlideOutComponent() {
            this.showInfo = false;
            this.onToggle = new core.EventEmitter();
        }
        /**
         * @return {?}
         */
        NgxaCerSlideOutComponent.prototype.toggleDetail = /**
         * @return {?}
         */
        function () {
            this.showInfo = !this.showInfo;
            this.onToggle.emit(this.showInfo);
        };
        NgxaCerSlideOutComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'xa-cer-slide-out',
                        template: "<nb-icon *ngIf=\"showInfo\" [icon]=\"'arrow-forward-outline'\"\n         pack=\"eva\"\n         class=\"show-hide-toggle\"\n         (click)=\"toggleDetail()\">\n</nb-icon>\n<div class=\"slide-out-container\"\n     [class.expanded]=\"showInfo\"\n     [class.collapsed]=\"!showInfo\">\n  <div class=\"content-wrapper\">\n    <ng-content></ng-content>\n  </div>\n</div>\n",
                        styles: ["/*!\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */.nb-theme-default :host .show-hide-toggle{display:block;position:absolute;top:1.5rem;cursor:pointer;background-color:transparent;z-index:999}[dir=ltr] .nb-theme-default :host .show-hide-toggle{right:1.5rem}[dir=rtl] .nb-theme-default :host .show-hide-toggle{left:1.5rem}.nb-theme-default :host .slide-out-container{position:absolute;padding:1.5rem;width:40%;z-index:998}[dir=ltr] .nb-theme-default :host .slide-out-container{border-top-right-radius:.25rem;border-bottom-right-radius:.25rem}[dir=rtl] .nb-theme-default :host .slide-out-container{border-top-left-radius:.25rem;border-bottom-left-radius:.25rem}.nb-theme-default :host .slide-out-container,.nb-theme-default :host .slide-out-container::before{display:block;height:490px;top:0;overflow:hidden;transition:.2s ease-out}.nb-theme-default :host .slide-out-container::before{content:'';width:100%;position:absolute;background:#f7f9fc;box-shadow:0 4px 14px 0 #8f9bb3;opacity:.9;z-index:1}[dir=ltr] .nb-theme-default :host .slide-out-container::before{right:0}[dir=rtl] .nb-theme-default :host .slide-out-container::before{left:0;box-shadow:0 4px 14px 0 #8f9bb3}[dir=ltr] .nb-theme-default :host .slide-out-container.collapsed{left:calc(100% - 0rem)}[dir=rtl] .nb-theme-default :host .slide-out-container.collapsed{right:calc(100% - 6rem)}.nb-theme-default :host .slide-out-container.expanded{left:calc(100% + 1px - 40%)}[dir=rtl] .nb-theme-default :host .slide-out-container.expanded{left:auto;right:calc(100% - 40%)}.nb-theme-default :host .content-wrapper{z-index:1;position:relative;width:100%;margin:0 6rem;transition:.2s ease-out}.nb-theme-default :host .expanded .content-wrapper{margin:0}@media (max-width:991.98px){.nb-theme-default :host .slide-out-container{width:50%}.nb-theme-default :host .slide-out-container.expanded{left:calc(100% + 1px - 50%)}[dir=rtl] .nb-theme-default :host .slide-out-container.expanded{right:calc(100% + 1px - 50%)}}@media (max-width:575.98px){.nb-theme-default :host .show-hide-toggle{right:.5rem}.nb-theme-default :host .slide-out-container{width:100%}.nb-theme-default :host .slide-out-container.collapsed{left:calc(100% + 1px - 3rem)}[dir=rtl] .nb-theme-default :host .slide-out-container.collapsed{right:calc(100% - 3rem)}.nb-theme-default :host .slide-out-container.expanded{left:calc(100% + 1px - 100%)}[dir=rtl] .nb-theme-default :host .slide-out-container.expanded{right:calc(100% - 100%)}}.nb-theme-dark :host .show-hide-toggle{display:block;position:absolute;top:1.5rem;cursor:pointer;background-color:transparent;z-index:999}[dir=ltr] .nb-theme-dark :host .show-hide-toggle{right:1.5rem}[dir=rtl] .nb-theme-dark :host .show-hide-toggle{left:1.5rem}.nb-theme-dark :host .slide-out-container{position:absolute;padding:1.5rem;width:40%;z-index:998}[dir=ltr] .nb-theme-dark :host .slide-out-container{border-top-right-radius:.25rem;border-bottom-right-radius:.25rem}[dir=rtl] .nb-theme-dark :host .slide-out-container{border-top-left-radius:.25rem;border-bottom-left-radius:.25rem}.nb-theme-dark :host .slide-out-container,.nb-theme-dark :host .slide-out-container::before{display:block;height:490px;top:0;overflow:hidden;transition:.2s ease-out}.nb-theme-dark :host .slide-out-container::before{content:'';width:100%;position:absolute;background:linear-gradient(270deg,#222b45 0,#151a30 100%);box-shadow:0 4px 14px 0 #8f9bb3;opacity:.9;z-index:1}[dir=ltr] .nb-theme-dark :host .slide-out-container::before{right:0}[dir=rtl] .nb-theme-dark :host .slide-out-container::before{left:0;box-shadow:0 4px 14px 0 #8f9bb3}[dir=ltr] .nb-theme-dark :host .slide-out-container.collapsed{left:calc(100% - 0rem)}[dir=rtl] .nb-theme-dark :host .slide-out-container.collapsed{right:calc(100% - 6rem)}.nb-theme-dark :host .slide-out-container.expanded{left:calc(100% + 1px - 40%)}[dir=rtl] .nb-theme-dark :host .slide-out-container.expanded{left:auto;right:calc(100% - 40%)}.nb-theme-dark :host .content-wrapper{z-index:1;position:relative;width:100%;margin:0 6rem;transition:.2s ease-out}.nb-theme-dark :host .expanded .content-wrapper{margin:0}@media (max-width:991.98px){.nb-theme-dark :host .slide-out-container{width:50%}.nb-theme-dark :host .slide-out-container.expanded{left:calc(100% + 1px - 50%)}[dir=rtl] .nb-theme-dark :host .slide-out-container.expanded{right:calc(100% + 1px - 50%)}}@media (max-width:575.98px){.nb-theme-dark :host .show-hide-toggle{right:.5rem}.nb-theme-dark :host .slide-out-container{width:100%}.nb-theme-dark :host .slide-out-container.collapsed{left:calc(100% + 1px - 3rem)}[dir=rtl] .nb-theme-dark :host .slide-out-container.collapsed{right:calc(100% - 3rem)}.nb-theme-dark :host .slide-out-container.expanded{left:calc(100% + 1px - 100%)}[dir=rtl] .nb-theme-dark :host .slide-out-container.expanded{right:calc(100% - 100%)}}.nb-theme-cosmic :host .show-hide-toggle{display:block;position:absolute;top:1.5rem;cursor:pointer;background-color:transparent;z-index:999}[dir=ltr] .nb-theme-cosmic :host .show-hide-toggle{right:1.5rem}[dir=rtl] .nb-theme-cosmic :host .show-hide-toggle{left:1.5rem}.nb-theme-cosmic :host .slide-out-container{position:absolute;padding:1.5rem;width:40%;z-index:998}[dir=ltr] .nb-theme-cosmic :host .slide-out-container{border-top-right-radius:.25rem;border-bottom-right-radius:.25rem}[dir=rtl] .nb-theme-cosmic :host .slide-out-container{border-top-left-radius:.25rem;border-bottom-left-radius:.25rem}.nb-theme-cosmic :host .slide-out-container,.nb-theme-cosmic :host .slide-out-container::before{display:block;height:490px;top:0;overflow:hidden;transition:.2s ease-out}.nb-theme-cosmic :host .slide-out-container::before{content:'';width:100%;position:absolute;background:#252547;box-shadow:2px 0 3px #29157a;opacity:.9;z-index:1}[dir=ltr] .nb-theme-cosmic :host .slide-out-container::before{right:0}[dir=rtl] .nb-theme-cosmic :host .slide-out-container::before{left:0;box-shadow:-2px 0 3px #29157a}[dir=ltr] .nb-theme-cosmic :host .slide-out-container.collapsed{left:calc(100% - 0rem)}[dir=rtl] .nb-theme-cosmic :host .slide-out-container.collapsed{right:calc(100% - 6rem)}.nb-theme-cosmic :host .slide-out-container.expanded{left:calc(100% + 1px - 40%)}[dir=rtl] .nb-theme-cosmic :host .slide-out-container.expanded{left:auto;right:calc(100% - 40%)}.nb-theme-cosmic :host .content-wrapper{z-index:1;position:relative;width:100%;margin:0 6rem;transition:.2s ease-out}.nb-theme-cosmic :host .expanded .content-wrapper{margin:0}@media (max-width:991.98px){.nb-theme-cosmic :host .slide-out-container{width:50%}.nb-theme-cosmic :host .slide-out-container.expanded{left:calc(100% + 1px - 50%)}[dir=rtl] .nb-theme-cosmic :host .slide-out-container.expanded{right:calc(100% + 1px - 50%)}}@media (max-width:575.98px){.nb-theme-cosmic :host .show-hide-toggle{right:.5rem}.nb-theme-cosmic :host .slide-out-container{width:100%}.nb-theme-cosmic :host .slide-out-container.collapsed{left:calc(100% + 1px - 3rem)}[dir=rtl] .nb-theme-cosmic :host .slide-out-container.collapsed{right:calc(100% - 3rem)}.nb-theme-cosmic :host .slide-out-container.expanded{left:calc(100% + 1px - 100%)}[dir=rtl] .nb-theme-cosmic :host .slide-out-container.expanded{right:calc(100% - 100%)}}.nb-theme-corporate :host .show-hide-toggle{display:block;position:absolute;top:1.5rem;cursor:pointer;background-color:transparent;z-index:999}[dir=ltr] .nb-theme-corporate :host .show-hide-toggle{right:1.5rem}[dir=rtl] .nb-theme-corporate :host .show-hide-toggle{left:1.5rem}.nb-theme-corporate :host .slide-out-container{position:absolute;padding:1.5rem;width:40%;z-index:998}[dir=ltr] .nb-theme-corporate :host .slide-out-container{border-top-right-radius:.17rem;border-bottom-right-radius:.17rem}[dir=rtl] .nb-theme-corporate :host .slide-out-container{border-top-left-radius:.17rem;border-bottom-left-radius:.17rem}.nb-theme-corporate :host .slide-out-container,.nb-theme-corporate :host .slide-out-container::before{display:block;height:490px;top:0;overflow:hidden;transition:.2s ease-out}.nb-theme-corporate :host .slide-out-container::before{content:'';width:100%;position:absolute;background:linear-gradient(270deg,#edf1f7 0,#e4e9f2 100%);box-shadow:0 4px 14px 0 #8f9bb3;opacity:.9;z-index:1}[dir=ltr] .nb-theme-corporate :host .slide-out-container::before{right:0}[dir=rtl] .nb-theme-corporate :host .slide-out-container::before{left:0;box-shadow:0 4px 14px 0 #8f9bb3}[dir=ltr] .nb-theme-corporate :host .slide-out-container.collapsed{left:calc(100% - 0rem)}[dir=rtl] .nb-theme-corporate :host .slide-out-container.collapsed{right:calc(100% - 6rem)}.nb-theme-corporate :host .slide-out-container.expanded{left:calc(100% + 1px - 40%)}[dir=rtl] .nb-theme-corporate :host .slide-out-container.expanded{left:auto;right:calc(100% - 40%)}.nb-theme-corporate :host .content-wrapper{z-index:1;position:relative;width:100%;margin:0 6rem;transition:.2s ease-out}.nb-theme-corporate :host .expanded .content-wrapper{margin:0}@media (max-width:991.98px){.nb-theme-corporate :host .slide-out-container{width:50%}.nb-theme-corporate :host .slide-out-container.expanded{left:calc(100% + 1px - 50%)}[dir=rtl] .nb-theme-corporate :host .slide-out-container.expanded{right:calc(100% + 1px - 50%)}}@media (max-width:575.98px){.nb-theme-corporate :host .show-hide-toggle{right:.5rem}.nb-theme-corporate :host .slide-out-container{width:100%}.nb-theme-corporate :host .slide-out-container.collapsed{left:calc(100% + 1px - 3rem)}[dir=rtl] .nb-theme-corporate :host .slide-out-container.collapsed{right:calc(100% - 3rem)}.nb-theme-corporate :host .slide-out-container.expanded{left:calc(100% + 1px - 100%)}[dir=rtl] .nb-theme-corporate :host .slide-out-container.expanded{right:calc(100% - 100%)}}"]
                    }] }
        ];
        NgxaCerSlideOutComponent.propDecorators = {
            showInfo: [{ type: core.Input }],
            onToggle: [{ type: core.Output }]
        };
        return NgxaCerSlideOutComponent;
    }());
    if (false) {
        /** @type {?} */
        NgxaCerSlideOutComponent.prototype.showInfo;
        /** @type {?} */
        NgxaCerSlideOutComponent.prototype.onToggle;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxaCerMonitoringInfoComponent = /** @class */ (function () {
        function NgxaCerMonitoringInfoComponent(router, panicService, dialogService) {
            this.router = router;
            this.panicService = panicService;
            this.dialogService = dialogService;
            this.marker = { mark: [0, 0] };
            this.data = {};
        }
        Object.defineProperty(NgxaCerMonitoringInfoComponent.prototype, "markerFn", {
            set: /**
             * @param {?} marker
             * @return {?}
             */
            function (marker) {
                var _this = this;
                if (marker) {
                    this.panicService.getPanic(marker.alt).then((/**
                     * @param {?} value
                     * @return {?}
                     */
                    function (value) {
                        _this.data = value;
                    }));
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        NgxaCerMonitoringInfoComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        /**
         * @return {?}
         */
        NgxaCerMonitoringInfoComponent.prototype.onViewDetails = /**
         * @return {?}
         */
        function () {
            this.router.navigate(['/app/dashboard/details', this.data['panicCode']]);
        };
        /**
         * @return {?}
         */
        NgxaCerMonitoringInfoComponent.prototype.onPreview = /**
         * @return {?}
         */
        function () {
            this.dialogService.open(NgxaCerMonitoringPreviewComponent, {
                context: {
                    checksum: this.data['fileMetadata']['checksum'],
                    user: this.data['username'],
                    fileType: this.data['fileMetadata']['fileType'],
                },
            });
        };
        NgxaCerMonitoringInfoComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'xa-cer-monitoring-info',
                        template: "<div class=\"civilians-emergency\">\n    <h5 class=\"h5\">{{data.name}}</h5>\n    <div class=\"civilians-body\">\n        <div class=\"form-group row\">\n            <div class=\"col-sm-5 col-md-5 col-sm-5\">\n                <span class=\"label-body\">{{'ID Number' | translate}}</span>\n            </div>\n            <div class=\"col-sm-7 col-md-7 col-sm-7\">\n                <span>{{data.idNumber}}</span>\n            </div>\n        </div>\n        <div class=\"form-group row\">\n            <div class=\"col-sm-5 col-md-5 col-sm-5\">\n                <span class=\"label-body\">{{'Gender' | translate}}</span>\n            </div>\n            <div class=\"col-sm-7 col-md-7 col-sm-7\">\n                <span>{{data.gender}}</span>\n            </div>\n        </div>\n        <div class=\"form-group row\">\n            <div class=\"col-sm-5 col-md-5 col-sm-5\">\n                <span class=\"label-body\">{{'Age' | translate}}</span>\n            </div>\n            <div class=\"col-sm-7 col-md-7 col-sm-7\">\n                <span>{{data.age + ' '}}{{'Years' | translate}}</span>\n            </div>\n        </div>\n        <div class=\"form-group row\">\n            <div class=\"col-sm-5 col-md-5 col-sm-5\">\n                <span class=\"label-body\">{{'Phone Number' | translate}}</span>\n            </div>\n            <div class=\"col-sm-7 col-md-7 col-sm-7\">\n                <span>{{data.phoneNumber}}</span>\n            </div>\n        </div>\n        <div class=\"form-group row\">\n            <div class=\"col-sm-5 col-md-5 col-sm-5\">\n                <span class=\"label-body\">{{'Device Name' | translate}}</span>\n            </div>\n            <div class=\"col-sm-7 col-md-7 col-sm-7\">\n                <span>{{data.latestDeviceName}}</span>\n            </div>\n        </div>\n        <div class=\"form-group row\">\n            <div class=\"col-sm-5 col-md-5 col-sm-5\">\n                <span class=\"label-body\">{{'Location' | translate}}</span>\n            </div>\n            <div class=\"col-sm-7 col-md-7 col-sm-7\">\n                <span>{{data.latestFormattedAddress}}</span>\n            </div>\n        </div>\n        <div class=\"form-group row\">\n            <div class=\"col-sm-8 col-md-8 col-sm-8\">\n                <button\n                type=\"submit\"\n                status=\"warning\"\n                class=\"preview-right\"\n                (click)=\"onPreview()\"\n                nbButton>\n                {{ 'Preview' | translate}}\n                </button>\n            </div>\n            <div class=\"col-sm-4 col-md-4 col-sm-4\">\n                <button\n                type=\"submit\"\n                status=\"primary\"\n                class=\"details-right\"\n                (click)=\"onViewDetails()\"\n                nbButton>\n                {{ 'Details' | translate}}\n                </button>\n            </div>\n        </div>\n    </div>\n    <div class=\"civilians-footer\">\n    </div>\n</div>\n",
                        styles: [".nb-theme-default :host .civilians-emergency{width:100%;z-index:999}.nb-theme-default :host .civilians-body{margin:2rem 0;font-size:.85rem}.nb-theme-default :host .label-body{color:#8e9196;font-family:Open Sans,sans-serif;line-height:1rem;font-weight:700}.nb-theme-default :host .preview-right{right:0;position:absolute;margin:2rem 0}.nb-theme-default :host .details-right{right:0;position:absolute;margin:2rem 1rem}.nb-theme-dark :host .civilians-emergency{width:100%;z-index:999}.nb-theme-dark :host .civilians-body{margin:2rem 0;font-size:.85rem}.nb-theme-dark :host .label-body{color:#8e9196;font-family:Open Sans,sans-serif;line-height:1rem;font-weight:700}.nb-theme-dark :host .preview-right{right:0;position:absolute;margin:2rem 0}.nb-theme-dark :host .details-right{right:0;position:absolute;margin:2rem 1rem}.nb-theme-cosmic :host .civilians-emergency{width:100%;z-index:999}.nb-theme-cosmic :host .civilians-body{margin:2rem 0;font-size:.85rem}.nb-theme-cosmic :host .label-body{color:#8e9196;font-family:Open Sans,sans-serif;line-height:1rem;font-weight:700}.nb-theme-cosmic :host .preview-right{right:0;position:absolute;margin:2rem 0}.nb-theme-cosmic :host .details-right{right:0;position:absolute;margin:2rem 1rem}.nb-theme-corporate :host .civilians-emergency{width:100%;z-index:999}.nb-theme-corporate :host .civilians-body{margin:2rem 0;font-size:.85rem}.nb-theme-corporate :host .label-body{color:#8e9196;font-family:Open Sans,sans-serif;line-height:1rem;font-weight:700}.nb-theme-corporate :host .preview-right{right:0;position:absolute;margin:2rem 0}.nb-theme-corporate :host .details-right{right:0;position:absolute;margin:2rem 1rem}"]
                    }] }
        ];
        /** @nocollapse */
        NgxaCerMonitoringInfoComponent.ctorParameters = function () { return [
            { type: router.Router },
            { type: undefined, decorators: [{ type: core.Inject, args: [shared.PANIC,] }] },
            { type: theme.NbDialogService }
        ]; };
        NgxaCerMonitoringInfoComponent.propDecorators = {
            markerFn: [{ type: core.Input }]
        };
        return NgxaCerMonitoringInfoComponent;
    }());
    if (false) {
        /** @type {?} */
        NgxaCerMonitoringInfoComponent.prototype.marker;
        /** @type {?} */
        NgxaCerMonitoringInfoComponent.prototype.data;
        /**
         * @type {?}
         * @private
         */
        NgxaCerMonitoringInfoComponent.prototype.router;
        /**
         * @type {?}
         * @private
         */
        NgxaCerMonitoringInfoComponent.prototype.panicService;
        /**
         * @type {?}
         * @private
         */
        NgxaCerMonitoringInfoComponent.prototype.dialogService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxaCerDatatableComponent = /** @class */ (function () {
        function NgxaCerDatatableComponent(locale, layout, injector) {
            this.locale = locale;
            this.layout = layout;
            this.injector = injector;
            this.rows = [];
            this.columns = [];
            this.filters = [];
            this.selected = [];
            this.limit = 10;
            this.count = 0;
            this.offset = 0;
            this.externalPaging = false;
            this.externalSorting = false;
            this.loadingIndicator = false;
            this.scrollbarH = true;
            this.scrollbarV = false;
            this.reorderable = true;
            this.sortType = ngxDatatable.SortType.single;
            this.columnMode = ngxDatatable.ColumnMode.force;
            this.headerHeight = 40;
            this.footerHeight = 'auto';
            this.rowHeight = 'auto';
            this.column = true;
            this.footer = true;
            this.startWithOpenData = true;
            this.filterEvent = false;
            this.buttonCell = new core.EventEmitter();
            this.select = new core.EventEmitter();
            this.activate = new core.EventEmitter();
            this.destroy$ = new rxjs.Subject();
            this.pageOffset = 0;
            this.http = injector.get(shared.HTTP_SERVICE);
            this.cdref = injector.get(core.ChangeDetectorRef);
        }
        Object.defineProperty(NgxaCerDatatableComponent.prototype, "filterFn", {
            set: /**
             * @param {?} keyword
             * @return {?}
             */
            function (keyword) {
                this.keywordParam = keyword;
                this._keyword = keyword;
                this.count = 0;
                this.offset = 0;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        NgxaCerDatatableComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            if (this.startWithOpenData) {
                this.fetch();
            }
            this.layout.onChangeLayoutSize().takeUntil(this.destroy$).subscribe((/**
             * @return {?}
             */
            function () {
                _this.datatable.recalculate();
                _this.cdref.detectChanges();
            }));
        };
        /**
         * @return {?}
         */
        NgxaCerDatatableComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.destroy$.next(true);
            this.destroy$.complete();
            this.destroy$.unsubscribe();
        };
        /**
         * @return {?}
         */
        NgxaCerDatatableComponent.prototype.fetch = /**
         * @return {?}
         */
        function () {
            var _this = this;
            if (this.api) {
                this.externalPaging = true;
                this.externalSorting = true;
                this.getRequest().subscribe((/**
                 * @param {?} rows
                 * @return {?}
                 */
                function (rows) {
                    _this.rows = rows;
                    _this.cdref.detectChanges();
                }));
            }
        };
        /**
         * @param {?} order
         * @return {?}
         */
        NgxaCerDatatableComponent.prototype.onSort = /**
         * @param {?} order
         * @return {?}
         */
        function (order) {
            var _this = this;
            if (order) {
                if (Array.isArray(order.sorts)) {
                    order.sorts.forEach((/**
                     * @param {?} sort
                     * @return {?}
                     */
                    function (sort) {
                        if (sort['dir'] === 'asc') {
                            _this.sort = { asc: [sort['prop']] };
                        }
                        else {
                            _this.sort = { desc: [sort['prop']] };
                        }
                    }));
                }
            }
            this.fetch();
        };
        /**
         * @param {?} selected
         * @return {?}
         */
        NgxaCerDatatableComponent.prototype.onSelect = /**
         * @param {?} selected
         * @return {?}
         */
        function (selected) {
            this.select.emit(selected);
        };
        /**
         * @param {?} event
         * @return {?}
         */
        NgxaCerDatatableComponent.prototype.onActivate = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (event.type === 'click') {
                if (this.selectionType === 'checkbox') {
                    if (event.cellIndex > 0) {
                        this.activate.emit(event.row);
                    }
                }
                else {
                    this.activate.emit(event.row);
                }
            }
        };
        /**
         * @param {?} page
         * @return {?}
         */
        NgxaCerDatatableComponent.prototype.setPage = /**
         * @param {?} page
         * @return {?}
         */
        function (page) {
            this.pageOffset = page.offset * this.limit;
            this.fetch();
        };
        /**
         * @param {?} value
         * @return {?}
         */
        NgxaCerDatatableComponent.prototype.sanitizedValue = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            return value !== null && value !== undefined ? this.stripHtml(value) : value;
        };
        /**
         * @param {?} html
         * @return {?}
         */
        NgxaCerDatatableComponent.prototype.stripHtml = /**
         * @param {?} html
         * @return {?}
         */
        function (html) {
            if (!html.replace) {
                return html;
            }
            return html.replace(/<\/?[^>]+(>|$)/g, '');
        };
        /**
         * @param {?} event
         * @return {?}
         */
        NgxaCerDatatableComponent.prototype.onClickButton = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            this.buttonCell.emit(event);
        };
        /**
         * @private
         * @return {?}
         */
        NgxaCerDatatableComponent.prototype.getRequest = /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            /** @type {?} */
            var body = {
                offset: this.pageOffset,
                limit: this.limit,
                keyword: this._keyword,
                order: this.sort,
            };
            this.loadingIndicator = true;
            return this.http.HTTP_AUTH(this.api, body)
                .pipe(operators.map((/**
             * @param {?} response
             * @return {?}
             */
            function (response) {
                _this.count = Number(response.totalRecord);
                _this.loadingIndicator = false;
                return ((/** @type {?} */ (response['data'])));
            })), operators.catchError((/**
             * @return {?}
             */
            function () {
                _this.loadingIndicator = false;
                _this.count = 0;
                return rxjs.of([]);
            })));
        };
        NgxaCerDatatableComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'xa-cer-datatable',
                        template: "<ngx-datatable\n    class=\"ngxa\"\n    [rows]=\"rows\"\n    [columns]=\"columns\"\n    [selected]=\"selected\"\n    [limit]=\"limit\"\n    [count]=\"count\"\n    [offset]=\"offset\"\n    [externalPaging]=\"externalPaging\"\n    [externalSorting]=\"externalSorting\"\n    [loadingIndicator]=\"loadingIndicator\"\n    [scrollbarH]=\"scrollbarH\"\n    [scrollbarV]=\"scrollbarV\"\n    [reorderable]=\"reorderable\"\n    [sortType]=\"sortType\"\n    [selectionType]=\"selectionType\"\n    [columnMode]=\"columnMode\"\n    [headerHeight]=\"headerHeight\"\n    [footerHeight]=\"footerHeight\"\n    [rowHeight]=\"rowHeight\"\n    (page)=\"setPage($event)\"\n    (sort)=\"onSort($event)\"\n    (select)=\"onSelect($event)\"\n    (activate)=\"onActivate($event)\"\n    #datatable>\n    <div *ngIf=\"column\">\n        <ngx-datatable-column *ngIf=\"selectionType === 'checkbox'\"\n            [width]=\"30\"\n            [sortable]=\"false\"\n            [canAutoResize]=\"false\"\n            [draggable]=\"false\"\n            [resizeable]=\"false\"\n            [headerCheckboxable]=\"true\"\n            [checkboxable]=\"true\"\n            [frozenLeft]=\"true\">\n        </ngx-datatable-column>\n        <ngx-datatable-column *ngFor=\"let col of columns\"\n            [prop]=\"col.prop\"\n            [name]=\"col.name | translate\"\n            [sortable]=\"col.sortable\"\n            [canAutoResize]=\"col.canAutoResize\"\n            [draggable]=\"col.draggable\"\n            [resizeable]=\"col.resizeable\"\n            [width]=\"col.width\"\n            [frozenLeft]=\"col.frozenLeft\"\n            [frozenRight]=\"col.frozenRight\">\n            <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n                <span *ngIf=\"!col.cellTemplate && !col.type\" [title]=\"sanitizedValue(value)\" [innerHTML]=\"value\"></span>\n                <span *ngIf=\"!col.cellTemplate && col.type === 'html'\" [title]=\"sanitizedValue(value)\" [innerHTML]=\"value\"></span>\n                <span *ngIf=\"!col.cellTemplate && col.type === 'icon'\" [title]=\"sanitizedValue(value)\"><span class=\"{{value}}\"></span></span>\n                <button\n                    *ngIf=\"!col.cellTemplate && col.type === 'button'\"\n                    [status]=\"col.buttonStatus ? col.buttonStatus : 'primary'\"\n                    (click)=\"onClickButton(value)\"\n                    [size]=\"'tiny'\"\n                    nbButton>\n                    {{ col.button | translate }}\n                </button>\n            </ng-template>\n        </ngx-datatable-column>\n    </div>\n    <ngx-datatable-footer *ngIf=\"footer\">\n        <ng-template\n            ngx-datatable-footer-template\n            let-rowCount=\"rowCount\"\n            let-pageSize=\"pageSize\"\n            let-selectedCount=\"selectedCount\"\n            let-curPage=\"curPage\"\n            let-offset=\"offset\"\n            let-isVisible=\"isVisible\">\n            <div class=\"page-count\">\n                <div> {{ selectedCount }} {{ 'Selected' | translate }} | {{ count }} {{ 'Total' | translate }} </div>\n            </div>\n            <datatable-pager\n                [pagerLeftArrowIcon]=\"'datatable-icon-left'\"\n                [pagerRightArrowIcon]=\"'datatable-icon-right'\"\n                [pagerPreviousIcon]=\"'datatable-icon-prev'\"\n                [pagerNextIcon]=\"'datatable-icon-skip'\"\n                [page]=\"curPage\"\n                [size]=\"pageSize\"\n                [count]=\"rowCount\"\n                [hidden]=\"!((rowCount / pageSize) > 1)\"\n                (change)=\"datatable.onFooterPage($event)\">\n            </datatable-pager>\n        </ng-template>\n    </ngx-datatable-footer>\n</ngx-datatable>\n",
                        encapsulation: core.ViewEncapsulation.None,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        styles: [".ngx-datatable.material{background:#fff;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.ngx-datatable.material.striped .datatable-row-odd{background:#eee}.ngx-datatable.material.multi-click-selection .datatable-body-row.active,.ngx-datatable.material.multi-click-selection .datatable-body-row.active .datatable-row-group,.ngx-datatable.material.multi-selection .datatable-body-row.active,.ngx-datatable.material.multi-selection .datatable-body-row.active .datatable-row-group,.ngx-datatable.material.single-selection .datatable-body-row.active,.ngx-datatable.material.single-selection .datatable-body-row.active .datatable-row-group{background-color:#304ffe;color:#fff}.ngx-datatable.material.multi-click-selection .datatable-body-row.active:hover,.ngx-datatable.material.multi-click-selection .datatable-body-row.active:hover .datatable-row-group,.ngx-datatable.material.multi-selection .datatable-body-row.active:hover,.ngx-datatable.material.multi-selection .datatable-body-row.active:hover .datatable-row-group,.ngx-datatable.material.single-selection .datatable-body-row.active:hover,.ngx-datatable.material.single-selection .datatable-body-row.active:hover .datatable-row-group{background-color:#193ae4;color:#fff}.ngx-datatable.material.multi-click-selection .datatable-body-row.active:focus,.ngx-datatable.material.multi-click-selection .datatable-body-row.active:focus .datatable-row-group,.ngx-datatable.material.multi-selection .datatable-body-row.active:focus,.ngx-datatable.material.multi-selection .datatable-body-row.active:focus .datatable-row-group,.ngx-datatable.material.single-selection .datatable-body-row.active:focus,.ngx-datatable.material.single-selection .datatable-body-row.active:focus .datatable-row-group{background-color:#2041ef;color:#fff}.ngx-datatable.material:not(.cell-selection) .datatable-body-row:hover,.ngx-datatable.material:not(.cell-selection) .datatable-body-row:hover .datatable-row-group{background-color:#eee;transition-property:background;transition-duration:.3s;transition-timing-function:linear}.ngx-datatable.material:not(.cell-selection) .datatable-body-row:focus,.ngx-datatable.material:not(.cell-selection) .datatable-body-row:focus .datatable-row-group{background-color:#ddd}.ngx-datatable.material.cell-selection .datatable-body-cell:hover,.ngx-datatable.material.cell-selection .datatable-body-cell:hover .datatable-row-group{background-color:#eee;transition-property:background;transition-duration:.3s;transition-timing-function:linear}.ngx-datatable.material.cell-selection .datatable-body-cell:focus,.ngx-datatable.material.cell-selection .datatable-body-cell:focus .datatable-row-group{background-color:#ddd}.ngx-datatable.material.cell-selection .datatable-body-cell.active,.ngx-datatable.material.cell-selection .datatable-body-cell.active .datatable-row-group{background-color:#304ffe;color:#fff}.ngx-datatable.material.cell-selection .datatable-body-cell.active:hover,.ngx-datatable.material.cell-selection .datatable-body-cell.active:hover .datatable-row-group{background-color:#193ae4;color:#fff}.ngx-datatable.material.cell-selection .datatable-body-cell.active:focus,.ngx-datatable.material.cell-selection .datatable-body-cell.active:focus .datatable-row-group{background-color:#2041ef;color:#fff}.ngx-datatable.material .empty-row{height:50px;text-align:left;padding:.5rem 1.2rem;vertical-align:top;border-top:0}.ngx-datatable.material .loading-row{text-align:left;padding:.5rem 1.2rem;vertical-align:top;border-top:0}.ngx-datatable.material .datatable-body .datatable-row-left,.ngx-datatable.material .datatable-header .datatable-row-left{background-color:#fff;background-position:100% 0;background-repeat:repeat-y;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAFklEQVQIHWPSkNeSBmJhTQVtbiDNCgASagIIuJX8OgAAAABJRU5ErkJggg==)}.ngx-datatable.material .datatable-body .datatable-row-right,.ngx-datatable.material .datatable-header .datatable-row-right{background-position:0 0;background-color:#fff;background-repeat:repeat-y;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAFklEQVQI12PQkNdi1VTQ5gbSwkAsDQARLAIGtOSFUAAAAABJRU5ErkJggg==)}.ngx-datatable.material .datatable-header{border-bottom:1px solid rgba(0,0,0,.12)}.ngx-datatable.material .datatable-header .datatable-header-cell{text-align:left;padding:.9rem 1.2rem;background-color:#fff;color:rgba(0,0,0,.54);vertical-align:bottom;font-size:12px;font-weight:500}.ngx-datatable.material .datatable-header .datatable-header-cell .datatable-header-cell-wrapper{position:relative}.ngx-datatable.material .datatable-header .datatable-header-cell.longpress .draggable::after{transition:transform .4s,opacity .4s;opacity:.5;transform:scale(1)}.ngx-datatable.material .datatable-header .datatable-header-cell .draggable::after{content:' ';position:absolute;top:50%;left:50%;margin:-30px 0 0 -30px;height:60px;width:60px;background:#eee;border-radius:100%;opacity:1;-webkit-filter:none;filter:none;transform:scale(0);z-index:9999;pointer-events:none}.ngx-datatable.material .datatable-header .datatable-header-cell.dragging .resize-handle{border-right:none}.ngx-datatable.material .datatable-header .resize-handle{border-right:1px solid #eee}.ngx-datatable.material .datatable-body .datatable-row-detail{background:#f5f5f5;padding:10px}.ngx-datatable.material .datatable-body .datatable-group-header{background:#f5f5f5;border-bottom:1px solid #d9d8d9;border-top:1px solid #d9d8d9}.ngx-datatable.material .datatable-body .datatable-body-row .datatable-body-cell,.ngx-datatable.material .datatable-body .datatable-body-row .datatable-body-group-cell{text-align:left;padding:.9rem 1.2rem;vertical-align:top;border-top:0;color:rgba(0,0,0,.87);transition:width .3s;font-size:14px;font-weight:400}.ngx-datatable.material .datatable-body .progress-linear{display:block;width:100%;height:5px;padding:0;margin:0;position:absolute}.ngx-datatable.material .datatable-body .progress-linear .container{display:block;position:relative;overflow:hidden;width:100%;height:5px;transform:translate(0,0) scale(1,1);background-color:#aad1f9}.ngx-datatable.material .datatable-body .progress-linear .container .bar{transition:transform .2s linear;-webkit-animation:.8s cubic-bezier(.39,.575,.565,1) infinite query;animation:.8s cubic-bezier(.39,.575,.565,1) infinite query;background-color:#106cc8;position:absolute;left:0;top:0;bottom:0;width:100%;height:5px}.ngx-datatable.material .datatable-footer{border-top:1px solid rgba(0,0,0,.12);font-size:12px;font-weight:400;color:rgba(0,0,0,.54)}.ngx-datatable.material .datatable-footer .page-count{line-height:50px;height:50px;padding:0 1.2rem}.ngx-datatable.material .datatable-footer .datatable-pager{margin:0 10px}.ngx-datatable.material .datatable-footer .datatable-pager li{vertical-align:middle}.ngx-datatable.material .datatable-footer .datatable-pager li.disabled a{color:rgba(0,0,0,.26)!important;background-color:transparent!important}.ngx-datatable.material .datatable-footer .datatable-pager li.active a{background-color:rgba(158,158,158,.2);font-weight:700}.ngx-datatable.material .datatable-footer .datatable-pager a{height:22px;min-width:24px;line-height:22px;padding:0 6px;border-radius:3px;margin:6px 3px;text-align:center;color:rgba(0,0,0,.54);text-decoration:none;vertical-align:bottom}.ngx-datatable.material .datatable-footer .datatable-pager a:hover{color:rgba(0,0,0,.75);background-color:rgba(158,158,158,.2)}.ngx-datatable.material .datatable-footer .datatable-pager .datatable-icon-left,.ngx-datatable.material .datatable-footer .datatable-pager .datatable-icon-prev,.ngx-datatable.material .datatable-footer .datatable-pager .datatable-icon-right,.ngx-datatable.material .datatable-footer .datatable-pager .datatable-icon-skip{font-size:20px;line-height:20px;padding:0 3px}.ngx-datatable.material .datatable-summary-row .datatable-body-row,.ngx-datatable.material .datatable-summary-row .datatable-body-row:hover{background-color:#ddd}.ngx-datatable.material .datatable-summary-row .datatable-body-row .datatable-body-cell{font-weight:700}.datatable-checkbox{position:relative;margin:0;cursor:pointer;vertical-align:middle;display:inline-block;box-sizing:border-box;padding:0}.datatable-checkbox input[type=checkbox]{position:relative;margin:0 1rem 0 0;cursor:pointer;outline:0}.datatable-checkbox input[type=checkbox]:before{transition:.3s ease-in-out;content:'';position:absolute;left:0;z-index:1;width:1rem;height:1rem;border:2px solid #f2f2f2}.datatable-checkbox input[type=checkbox]:checked:before{transform:rotate(-45deg);height:.5rem;border-color:#009688;border-top-style:none;border-right-style:none}.datatable-checkbox input[type=checkbox]:after{content:'';position:absolute;top:0;left:0;width:1rem;height:1rem;background:#fff;cursor:pointer}@-webkit-keyframes query{0%{opacity:1;transform:translateX(35%) scale(.3,1)}100%{opacity:0;transform:translateX(-50%) scale(0,1)}}@keyframes query{0%{opacity:1;transform:translateX(35%) scale(.3,1)}100%{opacity:0;transform:translateX(-50%) scale(0,1)}}.ngx-datatable.bootstrap{box-shadow:none;font-size:13px}.ngx-datatable.bootstrap .datatable-header{height:unset!important}.ngx-datatable.bootstrap .datatable-header .datatable-header-cell{vertical-align:bottom;padding:.75rem;border-bottom:1px solid #d1d4d7}.ngx-datatable.bootstrap .datatable-header .datatable-header-cell .datatable-header-cell-label{line-height:24px}.ngx-datatable.bootstrap .datatable-body .datatable-body-row{vertical-align:top;border-top:1px solid #d1d4d7}.ngx-datatable.bootstrap .datatable-body .datatable-body-row.datatable-row-even{background-color:rgba(0,0,0,.05)}.ngx-datatable.bootstrap .datatable-body .datatable-body-row.active{background-color:#1483ff;color:#fff}.ngx-datatable.bootstrap .datatable-body .datatable-body-row .datatable-body-cell{padding:.75rem;text-align:left;vertical-align:top}.ngx-datatable.bootstrap .datatable-body .empty-row{position:relative;padding:.75rem 1.25rem;margin-bottom:0}.ngx-datatable.bootstrap .datatable-footer{background:#424242;color:#ededed;margin-top:-1px}.ngx-datatable.bootstrap .datatable-footer .page-count{line-height:50px;height:50px;padding:0 1.2rem}.ngx-datatable.bootstrap .datatable-footer .datatable-pager{margin:0 10px;vertical-align:top}.ngx-datatable.bootstrap .datatable-footer .datatable-pager ul li{margin:10px 0}.ngx-datatable.bootstrap .datatable-footer .datatable-pager ul li:not(.disabled).active a,.ngx-datatable.bootstrap .datatable-footer .datatable-pager ul li:not(.disabled):hover a{background-color:#545454;font-weight:700}.ngx-datatable.bootstrap .datatable-footer .datatable-pager a{height:22px;min-width:24px;line-height:22px;padding:0;border-radius:3px;margin:0 3px;text-align:center;text-decoration:none;vertical-align:bottom;color:#ededed}.ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-left,.ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-prev,.ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-right,.ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-skip{font-size:18px;line-height:27px;padding:0 3px}.ngx-datatable.bootstrap .datatable-summary-row .datatable-body-row .datatable-body-cell{font-weight:700}.ngx-datatable.dark{box-shadow:none;background:#1b1e27;border:1px solid #2f3646;color:#fff;font-size:13px}.ngx-datatable.dark .datatable-header{background:#181b24;color:#72809b}.ngx-datatable.dark .datatable-header .datatable-header-cell{text-align:left;padding:.5rem 1.2rem;font-weight:700}.ngx-datatable.dark .datatable-header .datatable-header-cell .datatable-header-cell-label{line-height:24px}.ngx-datatable.dark .datatable-body{background:#1a1e28}.ngx-datatable.dark .datatable-body .datatable-body-row{border-top:1px solid #2f3646}.ngx-datatable.dark .datatable-body .datatable-body-row .datatable-body-cell{text-align:left;padding:.5rem 1.2rem;vertical-align:top}.ngx-datatable.dark .datatable-body .datatable-body-row:hover{background:#171b24;transition-property:background;transition-duration:.3s;transition-timing-function:linear}.ngx-datatable.dark .datatable-body .datatable-body-row:focus{background-color:#232837}.ngx-datatable.dark .datatable-body .datatable-body-row.active{background-color:#1483ff;color:#fff}.ngx-datatable.dark .datatable-footer{background:#232837;color:#72809b;margin-top:-1px}.ngx-datatable.dark .datatable-footer .page-count{line-height:50px;height:50px;padding:0 1.2rem}.ngx-datatable.dark .datatable-footer .datatable-pager{margin:0 10px;vertical-align:top}.ngx-datatable.dark .datatable-footer .datatable-pager ul li{margin:10px 0}.ngx-datatable.dark .datatable-footer .datatable-pager ul li:not(.disabled).active a,.ngx-datatable.dark .datatable-footer .datatable-pager ul li:not(.disabled):hover a{background-color:#455066;font-weight:700}.ngx-datatable.dark .datatable-footer .datatable-pager a{height:22px;min-width:24px;line-height:22px;padding:0;border-radius:3px;margin:0 3px;text-align:center;text-decoration:none;vertical-align:bottom;color:#72809b}.ngx-datatable.dark .datatable-footer .datatable-pager .datatable-icon-left,.ngx-datatable.dark .datatable-footer .datatable-pager .datatable-icon-prev,.ngx-datatable.dark .datatable-footer .datatable-pager .datatable-icon-right,.ngx-datatable.dark .datatable-footer .datatable-pager .datatable-icon-skip{font-size:18px;line-height:27px;padding:0 3px}.ngx-datatable.dark .datatable-summary-row .datatable-body-row,.ngx-datatable.dark .datatable-summary-row .datatable-body-row:hover{background-color:#14171f}.ngx-datatable.dark .datatable-summary-row .datatable-body-row .datatable-body-cell{font-weight:700}.ngx-datatable.ngxa{box-shadow:none;font-size:13px}.ngx-datatable.ngxa .datatable-header{height:unset!important}.ngx-datatable.ngxa .datatable-header .datatable-header-cell{vertical-align:bottom;padding:.75rem;border-bottom:1px solid #d1d4d7}.ngx-datatable.ngxa .datatable-header .datatable-header-cell .datatable-header-cell-label{line-height:24px}.ngx-datatable.ngxa .datatable-header .datatable-header-cell .datatable-checkbox input[type=checkbox]:checked:before{transform:rotate(-45deg);height:.5rem;border-color:#36f;border-top-style:none;border-right-style:none}.ngx-datatable.ngxa .datatable-header .datatable-row-left{background-color:#fff;background-position:100% 0;background-repeat:repeat-y;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAFklEQVQIHWPSkNeSBmJhTQVtbiDNCgASagIIuJX8OgAAAABJRU5ErkJggg==)}.ngx-datatable.ngxa .datatable-header .datatable-row-right{background-color:#fff;background-position:0 0;background-repeat:repeat-y;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAFklEQVQI12PQkNdi1VTQ5gbSwkAsDQARLAIGtOSFUAAAAABJRU5ErkJggg==)}.ngx-datatable.ngxa .datatable-body .datatable-body-row{vertical-align:top}.ngx-datatable.ngxa .datatable-body .datatable-body-row.datatable-row-even,.ngx-datatable.ngxa .datatable-body .datatable-body-row.datatable-row-even .datatable-row-left,.ngx-datatable.ngxa .datatable-body .datatable-body-row.datatable-row-even .datatable-row-right{background-color:#f2f2f2}.ngx-datatable.ngxa .datatable-body .datatable-body-row.datatable-row-odd .datatable-row-left,.ngx-datatable.ngxa .datatable-body .datatable-body-row.datatable-row-odd .datatable-row-right{background-color:#fff}.ngx-datatable.ngxa .datatable-body .datatable-body-row .datatable-row-left{background-position:100% 0;background-repeat:repeat-y;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAFklEQVQIHWPSkNeSBmJhTQVtbiDNCgASagIIuJX8OgAAAABJRU5ErkJggg==)}.ngx-datatable.ngxa .datatable-body .datatable-body-row .datatable-row-right{background-position:0 0;background-repeat:repeat-y;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAFklEQVQI12PQkNdi1VTQ5gbSwkAsDQARLAIGtOSFUAAAAABJRU5ErkJggg==)}.ngx-datatable.ngxa .datatable-body .datatable-body-row.active{background-color:#36f;color:#fff}.ngx-datatable.ngxa .datatable-body .datatable-body-row.active .datatable-row-left,.ngx-datatable.ngxa .datatable-body .datatable-body-row.active .datatable-row-right{background-color:#36f}.ngx-datatable.ngxa .datatable-body .datatable-body-row:hover,.ngx-datatable.ngxa .datatable-body .datatable-body-row:hover .datatable-row-group{cursor:pointer;border-bottom:.025rem solid #7899ff;transition-property:background;transition-duration:.3s;transition-timing-function:linear}.ngx-datatable.ngxa .datatable-body .datatable-body-row .datatable-body-cell{padding:.75rem;text-align:left;vertical-align:top}.ngx-datatable.ngxa .datatable-body .datatable-body-row .datatable-body-cell .datatable-checkbox input[type=checkbox]:checked:before{transform:rotate(-45deg);height:.5rem;border-color:#36f;border-top-style:none;border-right-style:none}.ngx-datatable.ngxa .datatable-body .empty-row{position:relative;padding:.75rem 1.25rem;margin-bottom:0}.ngx-datatable.ngxa .datatable-body .progress-linear{display:block;width:100%;height:5px;padding:0;margin:0;position:absolute}.ngx-datatable.ngxa .datatable-body .progress-linear .container{display:block;position:relative;overflow:hidden;width:100%;height:5px;transform:translate(0,0) scale(1,1);background-color:#aad1f9}.ngx-datatable.ngxa .datatable-body .progress-linear .container .bar{transition:transform .2s linear;-webkit-animation:.8s cubic-bezier(.39,.575,.565,1) infinite query;animation:.8s cubic-bezier(.39,.575,.565,1) infinite query;background-color:#106cc8;position:absolute;left:0;top:0;bottom:0;width:100%;height:5px}.ngx-datatable.ngxa .datatable-footer{background:#f2f2f2;color:#5a5a5a;margin-top:-1px}.ngx-datatable.ngxa .datatable-footer .page-count{padding:.7rem}.ngx-datatable.ngxa .datatable-footer .datatable-pager{margin:0 10px;vertical-align:top}.ngx-datatable.ngxa .datatable-footer .datatable-pager ul li{margin:10px 0}.ngx-datatable.ngxa .datatable-footer .datatable-pager ul li:not(.disabled).active a,.ngx-datatable.ngxa .datatable-footer .datatable-pager ul li:not(.disabled):hover a{background-color:#c1c1c1;font-weight:700}.ngx-datatable.ngxa .datatable-footer .datatable-pager a{height:22px;min-width:24px;line-height:22px;padding:0;border-radius:3px;margin:0 3px;text-align:center;text-decoration:none;vertical-align:bottom;color:#5a5a5a}.ngx-datatable.ngxa .datatable-footer .datatable-pager .datatable-icon-left,.ngx-datatable.ngxa .datatable-footer .datatable-pager .datatable-icon-prev,.ngx-datatable.ngxa .datatable-footer .datatable-pager .datatable-icon-right,.ngx-datatable.ngxa .datatable-footer .datatable-pager .datatable-icon-skip{line-height:27px;padding:0 .2rem}.ngx-datatable.ngxa .datatable-summary-row .datatable-body-row .datatable-body-cell{font-weight:700}"]
                    }] }
        ];
        /** @nocollapse */
        NgxaCerDatatableComponent.ctorParameters = function () { return [
            { type: String, decorators: [{ type: core.Inject, args: [core.LOCALE_ID,] }] },
            { type: ngxaTheme.LayoutService },
            { type: core.Injector }
        ]; };
        NgxaCerDatatableComponent.propDecorators = {
            rows: [{ type: core.Input }],
            columns: [{ type: core.Input }],
            filters: [{ type: core.Input }],
            selected: [{ type: core.Input }],
            limit: [{ type: core.Input }],
            count: [{ type: core.Input }],
            offset: [{ type: core.Input }],
            externalPaging: [{ type: core.Input }],
            externalSorting: [{ type: core.Input }],
            loadingIndicator: [{ type: core.Input }],
            scrollbarH: [{ type: core.Input }],
            scrollbarV: [{ type: core.Input }],
            reorderable: [{ type: core.Input }],
            sortType: [{ type: core.Input }],
            messages: [{ type: core.Input }],
            selectionType: [{ type: core.Input }],
            columnMode: [{ type: core.Input }],
            headerHeight: [{ type: core.Input }],
            footerHeight: [{ type: core.Input }],
            rowHeight: [{ type: core.Input }],
            column: [{ type: core.Input }],
            footer: [{ type: core.Input }],
            api: [{ type: core.Input }],
            startWithOpenData: [{ type: core.Input }],
            filterEvent: [{ type: core.Input }],
            formGroupFilter: [{ type: core.Input }],
            buttonCell: [{ type: core.Output }],
            select: [{ type: core.Output }],
            activate: [{ type: core.Output }],
            datatable: [{ type: core.ViewChild, args: ['datatable', { static: false },] }],
            filterFn: [{ type: core.Input }]
        };
        return NgxaCerDatatableComponent;
    }());
    if (false) {
        /** @type {?} */
        NgxaCerDatatableComponent.prototype.rows;
        /** @type {?} */
        NgxaCerDatatableComponent.prototype.columns;
        /** @type {?} */
        NgxaCerDatatableComponent.prototype.filters;
        /** @type {?} */
        NgxaCerDatatableComponent.prototype.selected;
        /** @type {?} */
        NgxaCerDatatableComponent.prototype.limit;
        /** @type {?} */
        NgxaCerDatatableComponent.prototype.count;
        /** @type {?} */
        NgxaCerDatatableComponent.prototype.offset;
        /** @type {?} */
        NgxaCerDatatableComponent.prototype.externalPaging;
        /** @type {?} */
        NgxaCerDatatableComponent.prototype.externalSorting;
        /** @type {?} */
        NgxaCerDatatableComponent.prototype.loadingIndicator;
        /** @type {?} */
        NgxaCerDatatableComponent.prototype.scrollbarH;
        /** @type {?} */
        NgxaCerDatatableComponent.prototype.scrollbarV;
        /** @type {?} */
        NgxaCerDatatableComponent.prototype.reorderable;
        /** @type {?} */
        NgxaCerDatatableComponent.prototype.sortType;
        /** @type {?} */
        NgxaCerDatatableComponent.prototype.messages;
        /** @type {?} */
        NgxaCerDatatableComponent.prototype.selectionType;
        /** @type {?} */
        NgxaCerDatatableComponent.prototype.columnMode;
        /** @type {?} */
        NgxaCerDatatableComponent.prototype.headerHeight;
        /** @type {?} */
        NgxaCerDatatableComponent.prototype.footerHeight;
        /** @type {?} */
        NgxaCerDatatableComponent.prototype.rowHeight;
        /** @type {?} */
        NgxaCerDatatableComponent.prototype.column;
        /** @type {?} */
        NgxaCerDatatableComponent.prototype.footer;
        /** @type {?} */
        NgxaCerDatatableComponent.prototype.api;
        /** @type {?} */
        NgxaCerDatatableComponent.prototype.startWithOpenData;
        /** @type {?} */
        NgxaCerDatatableComponent.prototype.filterEvent;
        /** @type {?} */
        NgxaCerDatatableComponent.prototype.formGroupFilter;
        /** @type {?} */
        NgxaCerDatatableComponent.prototype.buttonCell;
        /** @type {?} */
        NgxaCerDatatableComponent.prototype.select;
        /** @type {?} */
        NgxaCerDatatableComponent.prototype.activate;
        /** @type {?} */
        NgxaCerDatatableComponent.prototype.datatable;
        /** @type {?} */
        NgxaCerDatatableComponent.prototype.keywordParam;
        /** @type {?} */
        NgxaCerDatatableComponent.prototype._keyword;
        /**
         * @type {?}
         * @protected
         */
        NgxaCerDatatableComponent.prototype.http;
        /**
         * @type {?}
         * @private
         */
        NgxaCerDatatableComponent.prototype.destroy$;
        /**
         * @type {?}
         * @private
         */
        NgxaCerDatatableComponent.prototype.cdref;
        /**
         * @type {?}
         * @private
         */
        NgxaCerDatatableComponent.prototype.sort;
        /**
         * @type {?}
         * @private
         */
        NgxaCerDatatableComponent.prototype.pageOffset;
        /** @type {?} */
        NgxaCerDatatableComponent.prototype.locale;
        /**
         * @type {?}
         * @private
         */
        NgxaCerDatatableComponent.prototype.layout;
        /** @type {?} */
        NgxaCerDatatableComponent.prototype.injector;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var components = [
        NgxaDashboardComponent,
        NgxaCerMonitoringPageComponent,
        NgxaCerMonitoringInfoComponent,
        NgxaCerSlideOutComponent,
        NgxaCerDatatableComponent,
        NgxaCerMonitoringDetailComponent,
        NgxaCerMonitoringPreviewComponent,
        NgxaFakeReportPromptComponent,
    ];
    /** @type {?} */
    var modules = [
        forms.FormsModule,
        forms.ReactiveFormsModule,
        theme.NbCardModule,
        theme.NbAlertModule,
        theme.NbIconModule,
        theme.NbDialogModule.forChild(),
        theme.NbWindowModule.forChild(),
        ngxaTheme.NgxaThemeModule,
        ngxaCommon.NgxaInputModule,
        ngxaCommon.NgxaCheckBoxModule,
        ngxaCommon.NgxaButtonModule,
        ngxaCommon.NgxaBaseModule,
        ngxaCommon.NgxaSelectModule,
        ngxaCommon.NgxaMapsModule,
        ngxDatatable.NgxDatatableModule,
        ngxaCommon.NgxaTableModule,
        ngxaCommon.NgxaLabelModule,
        NgxaCerDashboardRoutingModule,
    ];
    /** @type {?} */
    var providers = [];
    /** @type {?} */
    var entryComponents = [
        NgxaCerMonitoringPreviewComponent,
        NgxaFakeReportPromptComponent,
    ];
    var NgxaCerDashboardModule = /** @class */ (function () {
        function NgxaCerDashboardModule() {
        }
        NgxaCerDashboardModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: __spread(modules),
                        declarations: __spread(components),
                        providers: __spread(providers),
                        entryComponents: __spread(entryComponents),
                    },] }
        ];
        return NgxaCerDashboardModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxaCerFakeModule = /** @class */ (function () {
        function NgxaCerFakeModule() {
        }
        NgxaCerFakeModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [],
                        imports: [],
                        exports: [],
                    },] }
        ];
        return NgxaCerFakeModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxaCerReportsComponent = /** @class */ (function () {
        function NgxaCerReportsComponent() {
        }
        NgxaCerReportsComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'xa-cer-report',
                        template: "\n    <router-outlet></router-outlet>\n  "
                    }] }
        ];
        return NgxaCerReportsComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ReportsPanicService = /** @class */ (function () {
        function ReportsPanicService() {
        }
        /**
         * @return {?}
         */
        ReportsPanicService.prototype.getReports = /**
         * @return {?}
         */
        function () {
            return this.reports;
        };
        /**
         * @param {?} reports
         * @return {?}
         */
        ReportsPanicService.prototype.setReports = /**
         * @param {?} reports
         * @return {?}
         */
        function (reports) {
            this.reports = reports;
        };
        ReportsPanicService.decorators = [
            { type: core.Injectable }
        ];
        return ReportsPanicService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        ReportsPanicService.prototype.reports;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxaReportsEmergencyListPageComponent = /** @class */ (function (_super) {
        __extends(NgxaReportsEmergencyListPageComponent, _super);
        function NgxaReportsEmergencyListPageComponent(injector, router, reportService) {
            var _this = _super.call(this, injector, {
                'fullname': [],
                'phoneNumber': [],
                'latestFormattedAddress': [],
            }) || this;
            _this.injector = injector;
            _this.router = router;
            _this.reportService = reportService;
            _this.selectionType = ngxDatatable.SelectionType.single;
            _this.columns = [
                { name: 'Name', prop: 'name', width: 225, frozenLeft: true },
                { name: 'Address', prop: 'latestFormattedAddress', width: 275, frozenLeft: true },
                { name: 'Gender', prop: 'gender', width: 125, frozenLeft: true },
                { name: 'Phone Number', prop: 'phoneNumber', width: 140, frozenLeft: true },
                { name: 'Emergency Category', prop: 'emergencyCategory' },
                { name: 'Status', prop: 'status' },
                { name: 'Created', prop: 'createdBy' },
                { name: 'Created Date', prop: 'createdDate' },
                { name: 'Modified', prop: 'modifiedBy' },
                { name: 'Modified Date', prop: 'modifiedDate' },
                { name: 'Active', prop: 'active' },
            ];
            _this.expanded = false;
            _this.apiPath = _this.api['panic']['datatable-panic-reports'];
            _this.filters = [
                { controlName: 'fullname', type: 'input' },
                { controlName: 'phoneNumber', type: 'input' },
                { controlName: 'latestFormattedAddress', type: 'input' }
            ];
            return _this;
        }
        /**
         * @return {?}
         */
        NgxaReportsEmergencyListPageComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () { };
        /**
         * @return {?}
         */
        NgxaReportsEmergencyListPageComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () { };
        /**
         * @param {?} data
         * @return {?}
         */
        NgxaReportsEmergencyListPageComponent.prototype.onViewDetail = /**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            this.reportService.setReports(data);
            this.router.navigate(['/app/reports/emergency/detail']);
        };
        NgxaReportsEmergencyListPageComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'xa-reports-emergency-list-page',
                        template: "<xa-page-outlet [header]=\"'Emergency Reports'\">\n  <div class=\"row\">\n    <div class=\"col-md-12 col-lg-12 col-xxxl-6\">\n      <xa-datatable\n        [api]=\"apiPath\"\n        [formGroupFilter]=\"formGroupFilter\"\n        [filters]=\"filters\"\n        [add]=\"false\"\n        [delete]=\"false\"\n        [selectionType]=\"selectionType\"\n        (onFilter)=\"doFilterAdvanced($event)\"\n        (onEdit)=\"onViewDetail($event)\"\n        [filterFn]=\"keyword\"\n        [columns]=\"columns\">\n        <form [formGroup]=\"formGroupFilter\">\n          <xa-input-text\n            [name]=\"'fullname'\"\n            [label]=\"'Name'\"\n            formControlName=\"fullname\">\n          </xa-input-text>\n          <xa-input-text\n            [name]=\"'phoneNumber'\"\n            [label]=\"'Phone Number'\"\n            formControlName=\"phoneNumber\">\n          </xa-input-text>\n          <xa-input-text\n            [name]=\"'latestFormattedAddress'\"\n            [label]=\"'Address'\"\n            formControlName=\"latestFormattedAddress\">\n          </xa-input-text>\n        </form>\n      </xa-datatable>\n    </div>\n  </div>\n</xa-page-outlet>\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        NgxaReportsEmergencyListPageComponent.ctorParameters = function () { return [
            { type: core.Injector },
            { type: router.Router },
            { type: ReportsPanicService }
        ]; };
        return NgxaReportsEmergencyListPageComponent;
    }(ngxaCommon.BaseFilterComponent));
    if (false) {
        /** @type {?} */
        NgxaReportsEmergencyListPageComponent.prototype.apiPath;
        /** @type {?} */
        NgxaReportsEmergencyListPageComponent.prototype.selectionType;
        /** @type {?} */
        NgxaReportsEmergencyListPageComponent.prototype.columns;
        /** @type {?} */
        NgxaReportsEmergencyListPageComponent.prototype.expanded;
        /** @type {?} */
        NgxaReportsEmergencyListPageComponent.prototype.injector;
        /**
         * @type {?}
         * @private
         */
        NgxaReportsEmergencyListPageComponent.prototype.router;
        /**
         * @type {?}
         * @private
         */
        NgxaReportsEmergencyListPageComponent.prototype.reportService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxaReportsPreviewComponent = /** @class */ (function () {
        function NgxaReportsPreviewComponent(apiPath, httpBaseService, sanitizer) {
            this.apiPath = apiPath;
            this.httpBaseService = httpBaseService;
            this.sanitizer = sanitizer;
        }
        /**
         * @return {?}
         */
        NgxaReportsPreviewComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.getEvidence(this.checksum, this.user, this.fileType);
        };
        /**
         * @private
         * @param {?} checksum
         * @param {?} user
         * @param {?} fileType
         * @return {?}
         */
        NgxaReportsPreviewComponent.prototype.getEvidence = /**
         * @private
         * @param {?} checksum
         * @param {?} user
         * @param {?} fileType
         * @return {?}
         */
        function (checksum, user, fileType) {
            var _this = this;
            this.httpBaseService.HTTP_AUTH(this.apiPath['file']['evidence'], null, null, null, [checksum, user], 'arraybuffer')
                .pipe(operators.tap((/**
             * @param {?} response
             * @return {?}
             */
            function (response) {
                /** @type {?} */
                var fileBlob = new Blob([response], {
                    type: fileType,
                });
                /** @type {?} */
                var reader = new FileReader();
                reader.readAsDataURL(fileBlob);
                reader.onloadend = (/**
                 * @return {?}
                 */
                function () {
                    _this.url = _this.sanitizer.bypassSecurityTrustUrl(reader.result.toString());
                });
            }))).subscribe();
        };
        NgxaReportsPreviewComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'xa-reports-preview',
                        template: "<nb-card *ngIf=\"url && fileType.includes('image')\">\n    <nb-card-body>\n        <img [src]=\"url\" height=\"500\">\n    </nb-card-body>\n</nb-card>\n<video *ngIf=\"url && fileType.includes('video')\" [src]=\"url\" height=\"500\" controls></video>\n<audio *ngIf=\"url && fileType.includes('audio')\" controls>\n    <source [src]=\"url\" [type]=\"fileType\">\n</audio>",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        NgxaReportsPreviewComponent.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: [shared.API,] }] },
            { type: undefined, decorators: [{ type: core.Inject, args: [shared.HTTP_SERVICE,] }] },
            { type: platformBrowser.DomSanitizer }
        ]; };
        NgxaReportsPreviewComponent.propDecorators = {
            url: [{ type: core.Input }],
            checksum: [{ type: core.Input }],
            user: [{ type: core.Input }],
            fileType: [{ type: core.Input }]
        };
        return NgxaReportsPreviewComponent;
    }());
    if (false) {
        /** @type {?} */
        NgxaReportsPreviewComponent.prototype.url;
        /** @type {?} */
        NgxaReportsPreviewComponent.prototype.checksum;
        /** @type {?} */
        NgxaReportsPreviewComponent.prototype.user;
        /** @type {?} */
        NgxaReportsPreviewComponent.prototype.fileType;
        /**
         * @type {?}
         * @private
         */
        NgxaReportsPreviewComponent.prototype.apiPath;
        /**
         * @type {?}
         * @private
         */
        NgxaReportsPreviewComponent.prototype.httpBaseService;
        /** @type {?} */
        NgxaReportsPreviewComponent.prototype.sanitizer;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxaFakePromptComponent = /** @class */ (function () {
        function NgxaFakePromptComponent(ref) {
            this.ref = ref;
            this.disabled = false;
        }
        /**
         * @param {?} password
         * @return {?}
         */
        NgxaFakePromptComponent.prototype.submit = /**
         * @param {?} password
         * @return {?}
         */
        function (password) {
            this.disabled = true;
            this.ref.close(password);
        };
        NgxaFakePromptComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'xa-fake-prompt',
                        template: "<nb-card>\n  <nb-card-header>\n    <h6 class=\"text-danger deactivated-label\">\n        {{ 'Fake Report' | translate }}\n    </h6>\n  </nb-card-header>\n  <nb-card-body>\n    <p>\n      {{ 'message.fake-form' | translate }}\n    </p>\n    <p>\n      {{ 'message.input-password' | translate }}\n    </p>\n    <input\n      [(ngModel)]=\"password\"\n      type=\"password\"\n      nbInput\n      class=\"fake-password\"\n      placeholder=\"Password\">\n  </nb-card-body>\n  <nb-card-footer>\n    <button\n      type=\"submit\"\n      status=\"danger\"\n      size=\"large\"\n      class=\"fake-button\"\n      [disabled]=\"!password || disabled\"\n      (click)=\"submit(password)\"\n      nbButton>\n      {{ 'Fake Report' | translate }}\n    </button>\n  </nb-card-footer>\n</nb-card>\n",
                        styles: ["/*!\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */.nb-theme-default :host input.fake-password{max-width:unset;width:100%}.nb-theme-default :host .cancel{margin-right:1rem}.nb-theme-default :host button.fake-button{width:100%}.nb-theme-dark :host input.fake-password{max-width:unset;width:100%}.nb-theme-dark :host .cancel{margin-right:1rem}.nb-theme-dark :host button.fake-button{width:100%}.nb-theme-cosmic :host input.fake-password{max-width:unset;width:100%}.nb-theme-cosmic :host .cancel{margin-right:1rem}.nb-theme-cosmic :host button.fake-button{width:100%}.nb-theme-corporate :host input.fake-password{max-width:unset;width:100%}.nb-theme-corporate :host .cancel{margin-right:1rem}.nb-theme-corporate :host button.fake-button{width:100%}@media (max-width:767.98px){.nb-theme-default :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-default :host button.fake-button{font-size:.6rem}.nb-theme-dark :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-dark :host button.fake-button{font-size:.6rem}.nb-theme-cosmic :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-cosmic :host button.fake-button{font-size:.6rem}.nb-theme-corporate :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-corporate :host button.fake-button{font-size:.6rem}}"]
                    }] }
        ];
        /** @nocollapse */
        NgxaFakePromptComponent.ctorParameters = function () { return [
            { type: theme.NbDialogRef }
        ]; };
        return NgxaFakePromptComponent;
    }());
    if (false) {
        /** @type {?} */
        NgxaFakePromptComponent.prototype.disabled;
        /** @type {?} */
        NgxaFakePromptComponent.prototype.password;
        /**
         * @type {?}
         * @protected
         */
        NgxaFakePromptComponent.prototype.ref;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxaReportsEmergencyDetailComponent = /** @class */ (function (_super) {
        __extends(NgxaReportsEmergencyDetailComponent, _super);
        function NgxaReportsEmergencyDetailComponent(injector, router, route, dialogService, reportService) {
            var _this = _super.call(this, injector, null, {
                'status': [],
                'emergencyCategory': [],
            }) || this;
            _this.injector = injector;
            _this.router = router;
            _this.route = route;
            _this.dialogService = dialogService;
            _this.reportService = reportService;
            _this.profile = {};
            _this.imageDefault = document.getElementsByTagName('base')[0].href + "/assets/images/avatars/default.png";
            _this.columns = [
                { name: 'Evidence', prop: 'fileMetadata', width: 100, frozenLeft: true, type: 'button',
                    button: 'Preview', buttonStatus: 'warning' },
                { name: 'File Size', prop: 'fileMetadata.size', width: 125, frozenLeft: true, type: 'prefix',
                    prefix: 'bytes' },
                { name: 'Latitude', prop: 'location.latitude', width: 125, frozenLeft: true },
                { name: 'Longitude', prop: 'location.longitude', width: 125, frozenLeft: true },
                { name: 'Address', prop: 'location.formattedAddress', width: 350 },
                { name: 'Province', prop: 'location.province', width: 150 },
                { name: 'City', prop: 'location.city', width: 150 },
                { name: 'District', prop: 'location.district', width: 150 },
                { name: 'Device ID', prop: 'device.deviceID', width: 150 },
                { name: 'Device Name', prop: 'device.deviceName', width: 150 },
            ];
            _this.sort = {
                'desc': ['createdDate'],
            };
            _this.enc = injector.get(utils.EncryptionService);
            _this.oauthResource = injector.get(shared.OAUTH_INFO);
            _this.apiSelectParameter = _this.api['master']['select-parameter'];
            _this.dataReport = _this.reportService.getReports();
            _this.keyword = {
                panicCode: _this.dataReport['panicCode'],
            };
            _this.username = _this.dataReport['username'],
                _this.apiPath = _this.api['panic']['datatable-panic-detail'];
            return _this;
        }
        /**
         * @return {?}
         */
        NgxaReportsEmergencyDetailComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () { };
        /**
         * @return {?}
         */
        NgxaReportsEmergencyDetailComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.onInit('security', 'get-profile-personal');
            this.paramSelectStatus = [{
                    key: 'parameterGroupCode',
                    value: 'STATUS_EMERGENCY',
                }];
            this.paramSelectEmergency = [{
                    key: 'parameterGroupCode',
                    value: 'CATEGORY_EMERGENCY',
                }];
        };
        /**
         * @param {?} serviceName
         * @param {?} apiName
         * @return {?}
         */
        NgxaReportsEmergencyDetailComponent.prototype.onInit = /**
         * @param {?} serviceName
         * @param {?} apiName
         * @return {?}
         */
        function (serviceName, apiName) {
            var _this = this;
            this.loadingForm = true;
            /** @type {?} */
            var data = {
                username: this.username,
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
        /**
         * @param {?} prop
         * @return {?}
         */
        NgxaReportsEmergencyDetailComponent.prototype.valueSelect = /**
         * @param {?} prop
         * @return {?}
         */
        function (prop) {
            if (this.formGroup.get(prop).value) {
                if (this.formGroup.get(prop).value.value) {
                    return this.formGroup.get(prop).value.value;
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
         * @param {?} data
         * @return {?}
         */
        NgxaReportsEmergencyDetailComponent.prototype.onPreview = /**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            this.dialogService.open(NgxaReportsPreviewComponent, {
                context: {
                    checksum: data['checksum'],
                    user: this.username,
                    fileType: data['fileType'],
                },
            });
        };
        /**
         * @return {?}
         */
        NgxaReportsEmergencyDetailComponent.prototype.onFake = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.dialogService.open(NgxaFakePromptComponent)
                .onClose.subscribe((/**
             * @param {?} password
             * @return {?}
             */
            function (password) {
                if (password) {
                    _this.disabledFake = true;
                    /** @type {?} */
                    var data = {
                        password: _this.enc.encryptAES(_this.oauthResource['aes_key'], password),
                        panicCode: _this.dataReport['panicCode'],
                    };
                    ((/** @type {?} */ (_super.prototype.onSubmit.call(_this, data, 'panic', 'fake-report'))))
                        .pipe(operators.takeUntil(_this.destroy$))
                        .subscribe((/**
                     * @param {?} response
                     * @return {?}
                     */
                    function (response) {
                        if (response) {
                            if (response.respStatusCode === shared.ResponseCode.OK_SCR011.toString()) {
                                _this.router.navigate(['/app/dashboard']);
                            }
                        }
                    }));
                }
                else {
                    _this.disabledFake = false;
                }
            }));
        };
        /**
         * @return {?}
         */
        NgxaReportsEmergencyDetailComponent.prototype.onProcess = /**
         * @return {?}
         */
        function () {
            var _this = this;
            /** @type {?} */
            var data = {
                panicCode: this.dataReport['panicCode'],
                status: this.valueSelect('status'),
                emergencyCategory: this.valueSelect('emergencyCategory'),
            };
            ((/** @type {?} */ (_super.prototype.onSubmit.call(this, data, 'panic', 'process-report'))))
                .pipe(operators.takeUntil(this.destroy$))
                .subscribe((/**
             * @param {?} response
             * @return {?}
             */
            function (response) {
                if (response) {
                    if (response.respStatusCode === shared.ResponseCode.OK_UPDATED.toString()) {
                        _this.router.navigate(['/app/dashboard']);
                    }
                }
            }));
        };
        NgxaReportsEmergencyDetailComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'xa-reports-emergency-detail.component',
                        template: "<xa-page-outlet [url]=\"'/app/reports/emergency'\" [header]=\"'Emergency Report Detail'\">\n    <div class=\"row\">\n        <div class=\"col-md-4 col-lg-4 col-xxxl-6\">\n            <div class=\"photo-profile\"\n            [ngStyle]=\"{ \n                'background-image': 'url(' + (image? image: imageDefault) + ')'\n            }\">\n            </div>\n        </div>\n        <div class=\"col-md-8 col-lg-8 col-xxxl-6\">\n            <div class=\"split-row\">\n                <xa-label-text\n                    [label]=\"'Name'\"\n                    [colLabel]=\"4\"\n                    [colContent]=\"8\"\n                    [content]=\"profile.name\"\n                    [skeleton]=\"loadingForm\">\n                </xa-label-text>\n                <xa-label-text\n                    [label]=\"'ID Number'\"\n                    [colLabel]=\"4\"\n                    [colContent]=\"8\"\n                    [content]=\"profile.idNumber\"\n                    [skeleton]=\"loadingForm\">\n                </xa-label-text>\n                <xa-label-text\n                    [label]=\"'Gender'\"\n                    [colLabel]=\"4\"\n                    [colContent]=\"8\"\n                    [content]=\"profile.gender\"\n                    [skeleton]=\"loadingForm\">\n                </xa-label-text>\n                <xa-label-text\n                    [label]=\"'Place / Date of Birth'\"\n                    [colLabel]=\"4\"\n                    [colContent]=\"8\"\n                    [content]=\"profile.placeOfBirth ? (profile.placeOfBirth + ', ' + profile.dateOfBirth) : ''\"\n                    [skeleton]=\"loadingForm\">\n                </xa-label-text>\n            </div>\n            <div class=\"split-row\">\n                <xa-label-text\n                    [label]=\"'Username'\"\n                    [colLabel]=\"4\"\n                    [colContent]=\"8\"\n                    [content]=\"profile.username\"\n                    [skeleton]=\"loadingForm\">\n                </xa-label-text>\n                <xa-label-text\n                    [label]=\"'Email'\"\n                    [colLabel]=\"4\"\n                    [colContent]=\"8\"\n                    [content]=\"profile.email\"\n                    [skeleton]=\"loadingForm\">\n                </xa-label-text>\n                <xa-label-text\n                    [label]=\"'Phone Number'\"\n                    [colLabel]=\"4\"\n                    [colContent]=\"8\"\n                    [content]=\"profile.phoneNumber\"\n                    [skeleton]=\"loadingForm\">\n                </xa-label-text>\n                <xa-label-text\n                    [label]=\"'Address'\"\n                    [colLabel]=\"4\"\n                    [colContent]=\"8\"\n                    [content]=\"profile.address\"\n                    [skeleton]=\"loadingForm\">\n                </xa-label-text>\n                <xa-label-text\n                    [label]=\"'Country'\"\n                    [colLabel]=\"4\"\n                    [colContent]=\"8\"\n                    [content]=\"profile.country\"\n                    [skeleton]=\"loadingForm\">\n                </xa-label-text>\n            </div>\n            <div class=\"split-row\">\n                <xa-label-text\n                    [label]=\"'Related Person'\"\n                    [colLabel]=\"4\"\n                    [colContent]=\"8\"\n                    [content]=\"profile.referenceName\"\n                    [skeleton]=\"loadingForm\">\n                </xa-label-text>\n                <xa-label-text\n                    [label]=\"'Relationship'\"\n                    [colLabel]=\"4\"\n                    [colContent]=\"8\"\n                    [content]=\"profile.relationship\"\n                    [skeleton]=\"loadingForm\">\n                </xa-label-text>\n                <xa-label-text\n                    [label]=\"'Address'\"\n                    [colLabel]=\"4\"\n                    [colContent]=\"8\"\n                    [content]=\"profile.referenceAddress\"\n                    [skeleton]=\"loadingForm\">\n                </xa-label-text>\n                <xa-label-text\n                    [label]=\"'Phone Number'\"\n                    [colLabel]=\"4\"\n                    [colContent]=\"8\"\n                    [content]=\"profile.referencePhoneNumber\"\n                    [skeleton]=\"loadingForm\">\n                </xa-label-text>\n            </div>\n            <form [formGroup]=\"formGroup\">\n                <xa-select\n                    [name]=\"'status'\"\n                    [label]=\"'Status'\"\n                    [colLabel]=\"4\"\n                    [colInput]=\"8\"\n                    [required]=\"true\"\n                    [api]=\"apiSelectParameter\"\n                    [queryParam]=\"paramSelectStatus\"\n                    [searchable]=\"false\"\n                    [skeleton]=\"loadingForm\"\n                    formControlName=\"status\">\n                </xa-select>\n                <xa-select\n                    [name]=\"'emergency'\"\n                    [label]=\"'Emergency'\"\n                    [colLabel]=\"4\"\n                    [colInput]=\"8\"\n                    [required]=\"true\"\n                    [api]=\"apiSelectParameter\"\n                    [queryParam]=\"paramSelectEmergency\"\n                    [searchable]=\"false\"\n                    [skeleton]=\"loadingForm\"\n                    formControlName=\"emergencyCategory\">\n                </xa-select>\n                <div class=\"form-group row\">\n                    <div class=\"offset-sm-4 col-sm-8\">\n                        <button\n                            type=\"reset\"\n                            status=\"danger\"\n                            (click)=\"onFake()\"\n                            class=\"reset-left\"\n                            nbButton>\n                            {{ 'Fake Report' | translate}}\n                        </button>\n                        <button\n                            type=\"submit\"\n                            status=\"primary\"\n                            (click)=\"onProcess()\"\n                            [disabled]=\"formGroup.invalid || formGroup.pristine || disabled\"\n                            class=\"submit-right\"\n                            nbButton>\n                            {{ 'Process' | translate}}\n                        </button>\n                    </div>\n                </div>\n            </form>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-md-12 col-lg-12 col-xxxl-6\">\n            <xa-datatable\n                [api]=\"apiPath\"\n                [filters]=\"filters\"\n                (onButtonCell)=\"onPreview($event)\"\n                [filterFn]=\"keyword\"\n                [selectionType]=\"null\"\n                [add]=\"false\"\n                [edit]=\"false\"\n                [delete]=\"false\"\n                [sort]=\"sort\"\n                [columns]=\"columns\">\n            </xa-datatable>\n        </div>\n    </div>\n</xa-page-outlet>  ",
                        styles: [".nb-theme-default :host .split-row{border-bottom:1px solid #edf1f7;margin-bottom:1rem}.nb-theme-default :host .photo-profile{height:225px;width:225px;background-size:cover;margin:20px auto}.nb-theme-default :host .reset-left{margin-right:.25rem}.nb-theme-default :host .submit-right{margin-left:.25rem}.nb-theme-dark :host .split-row{border-bottom:1px solid #151a30;margin-bottom:1rem}.nb-theme-dark :host .photo-profile{height:225px;width:225px;background-size:cover;margin:20px auto}.nb-theme-dark :host .reset-left{margin-right:.25rem}.nb-theme-dark :host .submit-right{margin-left:.25rem}.nb-theme-cosmic :host .split-row{border-bottom:1px solid #1b1b38;margin-bottom:1rem}.nb-theme-cosmic :host .photo-profile{height:225px;width:225px;background-size:cover;margin:20px auto}.nb-theme-cosmic :host .reset-left{margin-right:.25rem}.nb-theme-cosmic :host .submit-right{margin-left:.25rem}.nb-theme-corporate :host .split-row{border-bottom:1px solid #edf1f7;margin-bottom:1rem}.nb-theme-corporate :host .photo-profile{height:225px;width:225px;background-size:cover;margin:20px auto}.nb-theme-corporate :host .reset-left{margin-right:.25rem}.nb-theme-corporate :host .submit-right{margin-left:.25rem}"]
                    }] }
        ];
        /** @nocollapse */
        NgxaReportsEmergencyDetailComponent.ctorParameters = function () { return [
            { type: core.Injector },
            { type: router.Router },
            { type: router.ActivatedRoute },
            { type: theme.NbDialogService },
            { type: ReportsPanicService }
        ]; };
        return NgxaReportsEmergencyDetailComponent;
    }(ngxaCommon.BaseFilterComponent));
    if (false) {
        /** @type {?} */
        NgxaReportsEmergencyDetailComponent.prototype.profile;
        /** @type {?} */
        NgxaReportsEmergencyDetailComponent.prototype.image;
        /** @type {?} */
        NgxaReportsEmergencyDetailComponent.prototype.imageDefault;
        /** @type {?} */
        NgxaReportsEmergencyDetailComponent.prototype.apiPath;
        /** @type {?} */
        NgxaReportsEmergencyDetailComponent.prototype.columns;
        /** @type {?} */
        NgxaReportsEmergencyDetailComponent.prototype.sort;
        /** @type {?} */
        NgxaReportsEmergencyDetailComponent.prototype.apiSelectParameter;
        /** @type {?} */
        NgxaReportsEmergencyDetailComponent.prototype.paramSelectStatus;
        /** @type {?} */
        NgxaReportsEmergencyDetailComponent.prototype.paramSelectEmergency;
        /** @type {?} */
        NgxaReportsEmergencyDetailComponent.prototype.disabledFake;
        /**
         * @type {?}
         * @private
         */
        NgxaReportsEmergencyDetailComponent.prototype.username;
        /**
         * @type {?}
         * @private
         */
        NgxaReportsEmergencyDetailComponent.prototype.oauthResource;
        /**
         * @type {?}
         * @private
         */
        NgxaReportsEmergencyDetailComponent.prototype.enc;
        /**
         * @type {?}
         * @private
         */
        NgxaReportsEmergencyDetailComponent.prototype.dataReport;
        /** @type {?} */
        NgxaReportsEmergencyDetailComponent.prototype.injector;
        /**
         * @type {?}
         * @private
         */
        NgxaReportsEmergencyDetailComponent.prototype.router;
        /**
         * @type {?}
         * @private
         */
        NgxaReportsEmergencyDetailComponent.prototype.route;
        /**
         * @type {?}
         * @private
         */
        NgxaReportsEmergencyDetailComponent.prototype.dialogService;
        /**
         * @type {?}
         * @private
         */
        NgxaReportsEmergencyDetailComponent.prototype.reportService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxaReportsFakeListPageComponent = /** @class */ (function (_super) {
        __extends(NgxaReportsFakeListPageComponent, _super);
        function NgxaReportsFakeListPageComponent(injector, router, reportService) {
            var _this = _super.call(this, injector, {
                'fullname': [],
                'phoneNumber': [],
                'latestFormattedAddress': [],
            }) || this;
            _this.injector = injector;
            _this.router = router;
            _this.reportService = reportService;
            _this.selectionType = ngxDatatable.SelectionType.single;
            _this.columns = [
                { name: 'Username', prop: 'username', width: 125, frozenLeft: true },
                { name: 'Name', prop: 'name', width: 225, frozenLeft: true },
                { name: 'Address', prop: 'latestFormattedAddress', width: 275, frozenLeft: true },
                { name: 'Gender', prop: 'gender', width: 125, frozenLeft: true },
                { name: 'Phone Number', prop: 'phoneNumber', width: 140, frozenLeft: true },
                { name: 'Created', prop: 'createdBy' },
                { name: 'Created Date', prop: 'createdDate' },
                { name: 'Modified', prop: 'modifiedBy' },
                { name: 'Modified Date', prop: 'modifiedDate' },
                { name: 'Active', prop: 'active' },
            ];
            _this.expanded = false;
            _this.apiPath = _this.api['panic']['datatable-fake-reports'];
            _this.filters = [
                { controlName: 'fullname', type: 'input' },
                { controlName: 'phoneNumber', type: 'input' },
                { controlName: 'latestFormattedAddress', type: 'input' }
            ];
            return _this;
        }
        /**
         * @return {?}
         */
        NgxaReportsFakeListPageComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () { };
        /**
         * @return {?}
         */
        NgxaReportsFakeListPageComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () { };
        /**
         * @param {?} data
         * @return {?}
         */
        NgxaReportsFakeListPageComponent.prototype.onViewDetail = /**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            this.reportService.setReports(data);
            this.router.navigate(['/app/reports/fake/detail']);
        };
        NgxaReportsFakeListPageComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'xa-reports-fake-list-page',
                        template: "<xa-page-outlet [header]=\"'Fake Reports'\">\n  <div class=\"row\">\n    <div class=\"col-md-12 col-lg-12 col-xxxl-6\">\n      <xa-datatable\n        [api]=\"apiPath\"\n        [formGroupFilter]=\"formGroupFilter\"\n        [filters]=\"filters\"\n        [add]=\"false\"\n        [delete]=\"false\"\n        [selectionType]=\"selectionType\"\n        (onFilter)=\"doFilterAdvanced($event)\"\n        [filterFn]=\"keyword\"\n        [columns]=\"columns\">\n        <form [formGroup]=\"formGroupFilter\">\n          <xa-input-text\n            [name]=\"'fullname'\"\n            [label]=\"'Name'\"\n            formControlName=\"fullname\">\n          </xa-input-text>\n          <xa-input-text\n            [name]=\"'phoneNumber'\"\n            [label]=\"'Phone Number'\"\n            formControlName=\"phoneNumber\">\n          </xa-input-text>\n          <xa-input-text\n            [name]=\"'latestFormattedAddress'\"\n            [label]=\"'Address'\"\n            formControlName=\"latestFormattedAddress\">\n          </xa-input-text>\n        </form>\n      </xa-datatable>\n    </div>\n  </div>\n</xa-page-outlet>\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        NgxaReportsFakeListPageComponent.ctorParameters = function () { return [
            { type: core.Injector },
            { type: router.Router },
            { type: ReportsPanicService }
        ]; };
        return NgxaReportsFakeListPageComponent;
    }(ngxaCommon.BaseFilterComponent));
    if (false) {
        /** @type {?} */
        NgxaReportsFakeListPageComponent.prototype.apiPath;
        /** @type {?} */
        NgxaReportsFakeListPageComponent.prototype.selectionType;
        /** @type {?} */
        NgxaReportsFakeListPageComponent.prototype.columns;
        /** @type {?} */
        NgxaReportsFakeListPageComponent.prototype.expanded;
        /** @type {?} */
        NgxaReportsFakeListPageComponent.prototype.injector;
        /**
         * @type {?}
         * @private
         */
        NgxaReportsFakeListPageComponent.prototype.router;
        /**
         * @type {?}
         * @private
         */
        NgxaReportsFakeListPageComponent.prototype.reportService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ɵ0$1 = {
        code: '#EMERGENCY-REPORTS-PAGE',
    }, ɵ1$1 = {
        code: '#EMERGENCY-REPORTS-PAGE',
    }, ɵ2 = {
        code: '#FAKE-REPORTS-PAGE',
    };
    /** @type {?} */
    var routes$1 = [{
            path: '',
            component: NgxaCerReportsComponent,
            canActivateChild: [ngxaAuth.AuthGuardChildService],
            children: [
                {
                    path: 'emergency',
                    component: NgxaReportsEmergencyListPageComponent,
                    data: ɵ0$1,
                },
                {
                    path: 'emergency/detail',
                    component: NgxaReportsEmergencyDetailComponent,
                    data: ɵ1$1,
                },
                {
                    path: 'fake',
                    component: NgxaReportsFakeListPageComponent,
                    data: ɵ2,
                },
            ],
        }];
    var NgxaCerReportsRoutingModule = /** @class */ (function () {
        function NgxaCerReportsRoutingModule() {
        }
        NgxaCerReportsRoutingModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [router.RouterModule.forChild(routes$1)],
                        exports: [router.RouterModule],
                    },] }
        ];
        return NgxaCerReportsRoutingModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var components$1 = [
        NgxaCerReportsComponent,
        NgxaReportsEmergencyListPageComponent,
        NgxaReportsEmergencyDetailComponent,
        NgxaFakePromptComponent,
        NgxaReportsPreviewComponent,
        NgxaReportsFakeListPageComponent,
    ];
    /** @type {?} */
    var modules$1 = [
        forms.FormsModule,
        forms.ReactiveFormsModule,
        theme.NbCardModule,
        theme.NbAlertModule,
        theme.NbIconModule,
        theme.NbDialogModule.forChild(),
        theme.NbWindowModule.forChild(),
        ngxaTheme.NgxaThemeModule,
        ngxaCommon.NgxaInputModule,
        ngxaCommon.NgxaCheckBoxModule,
        ngxaCommon.NgxaButtonModule,
        ngxaCommon.NgxaBaseModule,
        ngxaCommon.NgxaSelectModule,
        ngxDatatable.NgxDatatableModule,
        ngxaCommon.NgxaTableModule,
        ngxaCommon.NgxaLabelModule,
        NgxaCerReportsRoutingModule,
    ];
    /** @type {?} */
    var providers$1 = [
        ReportsPanicService,
    ];
    /** @type {?} */
    var entry_components = [
        NgxaFakePromptComponent,
        NgxaReportsPreviewComponent,
    ];
    var NgxaCerReportsModule = /** @class */ (function () {
        function NgxaCerReportsModule() {
        }
        NgxaCerReportsModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: __spread(modules$1),
                        declarations: __spread(components$1),
                        providers: __spread(providers$1),
                        entryComponents: __spread(entry_components),
                    },] }
        ];
        return NgxaCerReportsModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxaStatisticsComponent = /** @class */ (function () {
        function NgxaStatisticsComponent() {
        }
        NgxaStatisticsComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'xa-cer-statistics',
                        template: "\n    <router-outlet></router-outlet>\n  "
                    }] }
        ];
        return NgxaStatisticsComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxaCerStatisticsAreaPageComponent = /** @class */ (function () {
        function NgxaCerStatisticsAreaPageComponent(injector, theme) {
            this.theme = theme;
            this.options = {};
            this.destroy$ = new rxjs.Subject();
            this.http = injector.get(shared.HTTP_SERVICE);
            this.api = injector.get(shared.API);
        }
        /**
         * @return {?}
         */
        NgxaCerStatisticsAreaPageComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var year = new Date().getFullYear();
            /** @type {?} */
            var tempData = [];
            for (var i = 3; i >= 0; i--) {
                tempData.push(year - i);
            }
            this.dataSelect = tempData;
            this.selected = year;
            this.getStatistics();
        };
        /**
         * @return {?}
         */
        NgxaCerStatisticsAreaPageComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.destroy$.next();
            this.destroy$.complete();
            this.themeSubscription.unsubscribe();
        };
        /**
         * @private
         * @return {?}
         */
        NgxaCerStatisticsAreaPageComponent.prototype.getStatistics = /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            this.http.HTTP_AUTH(this.api['panic']['statistics-area'], null, null, null, [this.selected]).subscribe((/**
             * @param {?} values
             * @return {?}
             */
            function (values) {
                _this.axis = values['axis']['data'];
                _this.legend = values['legend']['data'];
                _this.series = [];
                values['series'].forEach((/**
                 * @param {?} series
                 * @return {?}
                 */
                function (series) {
                    /** @type {?} */
                    var dataSeries = [];
                    values['axis']['data'].forEach((/**
                     * @param {?} axis
                     * @return {?}
                     */
                    function (axis) {
                        dataSeries.push(series['data'][axis]);
                    }));
                    _this.series.push({
                        name: series['name'],
                        type: 'bar',
                        barWidth: '60%',
                        data: dataSeries,
                    });
                }));
                _this.buildChart();
            }));
        };
        /**
         * @private
         * @return {?}
         */
        NgxaCerStatisticsAreaPageComponent.prototype.buildChart = /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            this.themeSubscription = this.theme.getJsTheme().subscribe((/**
             * @param {?} config
             * @return {?}
             */
            function (config) {
                /** @type {?} */
                var colors = config.variables;
                /** @type {?} */
                var echarts = config.variables.echarts;
                _this.options = {
                    backgroundColor: echarts.bg,
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow',
                        },
                    },
                    legend: {
                        data: _this.legend,
                        textStyle: {
                            color: echarts.textColor,
                        },
                    },
                    grid: {
                        left: '2%',
                        right: '3%',
                        bottom: '5%',
                        top: '15%',
                        containLabel: true,
                    },
                    xAxis: [
                        {
                            type: 'value',
                            axisLine: {
                                lineStyle: {
                                    color: echarts.axisLineColor,
                                },
                            },
                            splitLine: {
                                lineStyle: {
                                    color: echarts.splitLineColor,
                                },
                            },
                            axisLabel: {
                                textStyle: {
                                    color: echarts.textColor,
                                },
                            },
                        },
                    ],
                    yAxis: [
                        {
                            type: 'category',
                            data: _this.axis,
                            axisTick: {
                                alignWithLabel: true,
                            },
                            axisLine: {
                                lineStyle: {
                                    color: echarts.axisLineColor,
                                },
                            },
                            axisLabel: {
                                textStyle: {
                                    color: echarts.textColor,
                                },
                            },
                        },
                    ],
                    series: _this.series,
                };
            }));
        };
        /**
         * @param {?} data
         * @return {?}
         */
        NgxaCerStatisticsAreaPageComponent.prototype.onSelectChange = /**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            this.selected = data;
            this.getStatistics();
        };
        /**
         * @private
         * @return {?}
         */
        NgxaCerStatisticsAreaPageComponent.prototype.random = /**
         * @private
         * @return {?}
         */
        function () {
            return Math.round(Math.random() * 100);
        };
        NgxaCerStatisticsAreaPageComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'xa-cer-statistics-area',
                        template: "<xa-page-outlet\n    [header]=\"'Statistics of Emergency Report by Area'\"\n    [dataSelect]=\"dataSelect\"\n    [selected]=\"selected\"\n    (selectChange)=\"onSelectChange($event)\">\n    <xa-chart [options]=\"options\"></xa-chart>\n</xa-page-outlet>",
                        styles: [".nb-theme-default :host ::ng-deep nb-card-body{overflow:unset}.nb-theme-dark :host ::ng-deep nb-card-body{overflow:unset}.nb-theme-cosmic :host ::ng-deep nb-card-body{overflow:unset}.nb-theme-corporate :host ::ng-deep nb-card-body{overflow:unset}"]
                    }] }
        ];
        /** @nocollapse */
        NgxaCerStatisticsAreaPageComponent.ctorParameters = function () { return [
            { type: core.Injector },
            { type: theme.NbThemeService }
        ]; };
        return NgxaCerStatisticsAreaPageComponent;
    }());
    if (false) {
        /** @type {?} */
        NgxaCerStatisticsAreaPageComponent.prototype.options;
        /** @type {?} */
        NgxaCerStatisticsAreaPageComponent.prototype.data;
        /** @type {?} */
        NgxaCerStatisticsAreaPageComponent.prototype.dataSelect;
        /** @type {?} */
        NgxaCerStatisticsAreaPageComponent.prototype.selected;
        /**
         * @type {?}
         * @private
         */
        NgxaCerStatisticsAreaPageComponent.prototype.destroy$;
        /**
         * @type {?}
         * @private
         */
        NgxaCerStatisticsAreaPageComponent.prototype.http;
        /**
         * @type {?}
         * @private
         */
        NgxaCerStatisticsAreaPageComponent.prototype.api;
        /**
         * @type {?}
         * @private
         */
        NgxaCerStatisticsAreaPageComponent.prototype.themeSubscription;
        /**
         * @type {?}
         * @private
         */
        NgxaCerStatisticsAreaPageComponent.prototype.axis;
        /**
         * @type {?}
         * @private
         */
        NgxaCerStatisticsAreaPageComponent.prototype.legend;
        /**
         * @type {?}
         * @private
         */
        NgxaCerStatisticsAreaPageComponent.prototype.series;
        /**
         * @type {?}
         * @private
         */
        NgxaCerStatisticsAreaPageComponent.prototype.theme;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxaCerStatisticsGenderPageComponent = /** @class */ (function () {
        function NgxaCerStatisticsGenderPageComponent(injector, theme) {
            this.theme = theme;
            this.options = {};
            this.destroy$ = new rxjs.Subject();
            this.http = injector.get(shared.HTTP_SERVICE);
            this.api = injector.get(shared.API);
        }
        /**
         * @return {?}
         */
        NgxaCerStatisticsGenderPageComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var year = new Date().getFullYear();
            /** @type {?} */
            var tempData = [];
            for (var i = 3; i >= 0; i--) {
                tempData.push(year - i);
            }
            this.dataSelect = tempData;
            this.selected = year;
            this.getStatistics();
        };
        /**
         * @return {?}
         */
        NgxaCerStatisticsGenderPageComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.destroy$.next();
            this.destroy$.complete();
            this.themeSubscription.unsubscribe();
        };
        /**
         * @private
         * @return {?}
         */
        NgxaCerStatisticsGenderPageComponent.prototype.getStatistics = /**
         * @private
         * @return {?}
         */
        function () {
            this.buildChart();
        };
        /**
         * @private
         * @return {?}
         */
        NgxaCerStatisticsGenderPageComponent.prototype.buildChart = /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            this.themeSubscription = this.theme.getJsTheme().subscribe((/**
             * @param {?} config
             * @return {?}
             */
            function (config) {
                /** @type {?} */
                var colors = config.variables;
                _this.echarts = config.variables.echarts;
                _this.http.HTTP_AUTH(_this.api['panic']['statistics-gender'], null, null, null, [_this.selected]).subscribe((/**
                 * @param {?} values
                 * @return {?}
                 */
                function (values) {
                    _this.legend = values['legend']['data'];
                    _this.series = [];
                    console.log(values['series']);
                    values['series'].forEach((/**
                     * @param {?} series
                     * @return {?}
                     */
                    function (series) {
                        /** @type {?} */
                        var dataSeries = [];
                        values['axis']['data'].forEach((/**
                         * @param {?} axis
                         * @return {?}
                         */
                        function (axis) {
                            dataSeries.push({
                                value: series['data'][axis],
                                name: axis,
                            });
                        }));
                        _this.series.push({
                            name: series['name'],
                            type: 'pie',
                            radius: '80%',
                            center: ['50%', '50%'],
                            data: dataSeries,
                            itemStyle: {
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: _this.echarts.itemHoverShadowColor,
                                },
                            },
                            label: {
                                normal: {
                                    textStyle: {
                                        color: _this.echarts.textColor,
                                    },
                                },
                            },
                            labelLine: {
                                normal: {
                                    lineStyle: {
                                        color: _this.echarts.axisLineColor,
                                    },
                                },
                            },
                        });
                        _this.options = {
                            backgroundColor: _this.echarts.bg,
                            tooltip: {
                                trigger: 'item',
                                formatter: '{a} <br/>{b} : {c} ({d}%)',
                            },
                            legend: {
                                orient: 'vertical',
                                left: 'left',
                                data: _this.legend,
                                textStyle: {
                                    color: _this.echarts.textColor,
                                },
                            },
                            calculable: true,
                            series: _this.series,
                        };
                    }));
                }));
            }));
        };
        /**
         * @param {?} data
         * @return {?}
         */
        NgxaCerStatisticsGenderPageComponent.prototype.onSelectChange = /**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            this.selected = data;
            this.getStatistics();
        };
        NgxaCerStatisticsGenderPageComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'xa-cer-statistics-gender',
                        template: "<xa-page-outlet\n    [header]=\"'Statistics of Emergency Report by Gender'\"\n    [dataSelect]=\"dataSelect\"\n    [selected]=\"selected\"\n    (selectChange)=\"onSelectChange($event)\">\n    <xa-chart [options]=\"options\"></xa-chart>\n</xa-page-outlet>\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        NgxaCerStatisticsGenderPageComponent.ctorParameters = function () { return [
            { type: core.Injector },
            { type: theme.NbThemeService }
        ]; };
        return NgxaCerStatisticsGenderPageComponent;
    }());
    if (false) {
        /** @type {?} */
        NgxaCerStatisticsGenderPageComponent.prototype.options;
        /** @type {?} */
        NgxaCerStatisticsGenderPageComponent.prototype.data;
        /** @type {?} */
        NgxaCerStatisticsGenderPageComponent.prototype.dataSelect;
        /** @type {?} */
        NgxaCerStatisticsGenderPageComponent.prototype.selected;
        /**
         * @type {?}
         * @private
         */
        NgxaCerStatisticsGenderPageComponent.prototype.destroy$;
        /**
         * @type {?}
         * @private
         */
        NgxaCerStatisticsGenderPageComponent.prototype.http;
        /**
         * @type {?}
         * @private
         */
        NgxaCerStatisticsGenderPageComponent.prototype.api;
        /**
         * @type {?}
         * @private
         */
        NgxaCerStatisticsGenderPageComponent.prototype.themeSubscription;
        /**
         * @type {?}
         * @private
         */
        NgxaCerStatisticsGenderPageComponent.prototype.legend;
        /**
         * @type {?}
         * @private
         */
        NgxaCerStatisticsGenderPageComponent.prototype.series;
        /**
         * @type {?}
         * @private
         */
        NgxaCerStatisticsGenderPageComponent.prototype.echarts;
        /**
         * @type {?}
         * @private
         */
        NgxaCerStatisticsGenderPageComponent.prototype.theme;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxaCerStatisticsPeriodePageComponent = /** @class */ (function () {
        function NgxaCerStatisticsPeriodePageComponent(injector, theme) {
            this.theme = theme;
            this.options = {};
            this.destroy$ = new rxjs.Subject();
            this.http = injector.get(shared.HTTP_SERVICE);
            this.api = injector.get(shared.API);
        }
        /**
         * @return {?}
         */
        NgxaCerStatisticsPeriodePageComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var year = new Date().getFullYear();
            /** @type {?} */
            var tempData = [];
            for (var i = 3; i >= 0; i--) {
                tempData.push(year - i);
            }
            this.dataSelect = tempData;
            this.selected = year;
            this.getStatistics();
        };
        /**
         * @return {?}
         */
        NgxaCerStatisticsPeriodePageComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.destroy$.next();
            this.destroy$.complete();
            this.themeSubscription.unsubscribe();
        };
        /**
         * @private
         * @return {?}
         */
        NgxaCerStatisticsPeriodePageComponent.prototype.getStatistics = /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            this.http.HTTP_AUTH(this.api['panic']['statistics-periode'], null, null, null, [this.selected]).subscribe((/**
             * @param {?} values
             * @return {?}
             */
            function (values) {
                _this.axis = values['axis']['data'];
                _this.legend = values['legend']['data'];
                _this.series = [];
                values['series'].forEach((/**
                 * @param {?} series
                 * @return {?}
                 */
                function (series) {
                    /** @type {?} */
                    var dataSeries = [];
                    values['axis']['data'].forEach((/**
                     * @param {?} axis
                     * @return {?}
                     */
                    function (axis) {
                        dataSeries.push(series['data'][axis]);
                    }));
                    _this.series.push({
                        name: series['name'],
                        type: 'line',
                        smooth: true,
                        data: dataSeries,
                    });
                }));
                _this.buildChart();
            }));
        };
        /**
         * @private
         * @return {?}
         */
        NgxaCerStatisticsPeriodePageComponent.prototype.buildChart = /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            this.themeSubscription = this.theme.getJsTheme().subscribe((/**
             * @param {?} config
             * @return {?}
             */
            function (config) {
                /** @type {?} */
                var colors = config.variables;
                /** @type {?} */
                var echarts = config.variables.echarts;
                _this.options = {
                    backgroundColor: echarts.bg,
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross',
                        },
                    },
                    legend: {
                        data: _this.legend,
                        textStyle: {
                            color: echarts.textColor,
                        },
                    },
                    grid: {
                        left: '2%',
                        right: '3%',
                        bottom: '5%',
                        containLabel: true,
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data: _this.axis,
                            axisTick: {
                                alignWithLabel: true,
                            },
                            axisLine: {
                                lineStyle: {
                                    color: echarts.axisLineColor,
                                },
                            },
                            axisLabel: {
                                textStyle: {
                                    color: echarts.textColor,
                                },
                            },
                        },
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            axisLine: {
                                lineStyle: {
                                    color: echarts.axisLineColor,
                                },
                            },
                            splitLine: {
                                lineStyle: {
                                    color: echarts.splitLineColor,
                                },
                            },
                            axisLabel: {
                                textStyle: {
                                    color: echarts.textColor,
                                },
                            },
                        },
                    ],
                    series: _this.series,
                };
            }));
        };
        /**
         * @param {?} data
         * @return {?}
         */
        NgxaCerStatisticsPeriodePageComponent.prototype.onSelectChange = /**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            this.selected = data;
            this.getStatistics();
        };
        /**
         * @private
         * @return {?}
         */
        NgxaCerStatisticsPeriodePageComponent.prototype.random = /**
         * @private
         * @return {?}
         */
        function () {
            return Math.round(Math.random() * 100);
        };
        NgxaCerStatisticsPeriodePageComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'xa-cer-statistics-periode',
                        template: "<xa-page-outlet\n    [header]=\"'Statistics of Emergency Report by Periode'\"\n    [dataSelect]=\"dataSelect\"\n    [selected]=\"selected\"\n    (selectChange)=\"onSelectChange($event)\">\n    <xa-chart [options]=\"options\"></xa-chart>\n</xa-page-outlet>\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        NgxaCerStatisticsPeriodePageComponent.ctorParameters = function () { return [
            { type: core.Injector },
            { type: theme.NbThemeService }
        ]; };
        return NgxaCerStatisticsPeriodePageComponent;
    }());
    if (false) {
        /** @type {?} */
        NgxaCerStatisticsPeriodePageComponent.prototype.options;
        /** @type {?} */
        NgxaCerStatisticsPeriodePageComponent.prototype.data;
        /** @type {?} */
        NgxaCerStatisticsPeriodePageComponent.prototype.dataSelect;
        /** @type {?} */
        NgxaCerStatisticsPeriodePageComponent.prototype.selected;
        /**
         * @type {?}
         * @private
         */
        NgxaCerStatisticsPeriodePageComponent.prototype.destroy$;
        /**
         * @type {?}
         * @private
         */
        NgxaCerStatisticsPeriodePageComponent.prototype.http;
        /**
         * @type {?}
         * @private
         */
        NgxaCerStatisticsPeriodePageComponent.prototype.api;
        /**
         * @type {?}
         * @private
         */
        NgxaCerStatisticsPeriodePageComponent.prototype.themeSubscription;
        /**
         * @type {?}
         * @private
         */
        NgxaCerStatisticsPeriodePageComponent.prototype.axis;
        /**
         * @type {?}
         * @private
         */
        NgxaCerStatisticsPeriodePageComponent.prototype.legend;
        /**
         * @type {?}
         * @private
         */
        NgxaCerStatisticsPeriodePageComponent.prototype.series;
        /**
         * @type {?}
         * @private
         */
        NgxaCerStatisticsPeriodePageComponent.prototype.theme;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ɵ0$2 = {
        code: '#STATISTICS-AREA-PAGE',
    }, ɵ1$2 = {
        code: '#STATISTICS-GENDER-PAGE',
    }, ɵ2$1 = {
        code: '#STATISTICS-PERIODE-PAGE',
    };
    /** @type {?} */
    var routes$2 = [{
            path: '',
            component: NgxaStatisticsComponent,
            canActivateChild: [ngxaAuth.AuthGuardChildService],
            children: [
                {
                    path: 'area',
                    component: NgxaCerStatisticsAreaPageComponent,
                    data: ɵ0$2,
                },
                {
                    path: 'gender',
                    component: NgxaCerStatisticsGenderPageComponent,
                    data: ɵ1$2,
                },
                {
                    path: 'periode',
                    component: NgxaCerStatisticsPeriodePageComponent,
                    data: ɵ2$1,
                },
            ],
        }];
    var NgxaCerStatisticsRoutingModule = /** @class */ (function () {
        function NgxaCerStatisticsRoutingModule() {
        }
        NgxaCerStatisticsRoutingModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [router.RouterModule.forChild(routes$2)],
                        exports: [router.RouterModule],
                    },] }
        ];
        return NgxaCerStatisticsRoutingModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var components$2 = [
        NgxaStatisticsComponent,
        NgxaCerStatisticsAreaPageComponent,
        NgxaCerStatisticsGenderPageComponent,
        NgxaCerStatisticsPeriodePageComponent,
    ];
    /** @type {?} */
    var modules$2 = [
        forms.FormsModule,
        forms.ReactiveFormsModule,
        theme.NbCardModule,
        ngxaTheme.NgxaThemeModule,
        ngxaCommon.NgxaBaseModule,
        ngxaCommon.NgxaChartsModule,
        NgxaCerStatisticsRoutingModule,
    ];
    /** @type {?} */
    var providers$2 = [];
    /** @type {?} */
    var entryComponents$1 = [];
    var NgxaCerStatisticsModule = /** @class */ (function () {
        function NgxaCerStatisticsModule() {
        }
        NgxaCerStatisticsModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: __spread(modules$2),
                        declarations: __spread(components$2),
                        providers: __spread(providers$2),
                        entryComponents: __spread(entryComponents$1),
                    },] }
        ];
        return NgxaCerStatisticsModule;
    }());

    exports.NgxaCerDashboardModule = NgxaCerDashboardModule;
    exports.NgxaCerFakeModule = NgxaCerFakeModule;
    exports.NgxaCerModule = NgxaCerModule;
    exports.NgxaCerReportsModule = NgxaCerReportsModule;
    exports.NgxaCerStatisticsModule = NgxaCerStatisticsModule;
    exports.PanicIndexedDBService = PanicIndexedDBService;
    exports.PanicService = PanicService;
    exports.ɵa = NgxaCerDashboardRoutingModule;
    exports.ɵb = NgxaDashboardComponent;
    exports.ɵc = NgxaCerMonitoringPageComponent;
    exports.ɵd = NgxaCerMonitoringDetailComponent;
    exports.ɵe = NgxaCerMonitoringInfoComponent;
    exports.ɵf = NgxaCerSlideOutComponent;
    exports.ɵg = NgxaCerDatatableComponent;
    exports.ɵh = NgxaCerMonitoringPreviewComponent;
    exports.ɵi = NgxaFakeReportPromptComponent;
    exports.ɵj = NgxaCerReportsRoutingModule;
    exports.ɵk = NgxaCerReportsComponent;
    exports.ɵl = NgxaReportsEmergencyListPageComponent;
    exports.ɵm = ReportsPanicService;
    exports.ɵn = NgxaReportsEmergencyDetailComponent;
    exports.ɵo = NgxaReportsFakeListPageComponent;
    exports.ɵp = NgxaFakePromptComponent;
    exports.ɵq = NgxaReportsPreviewComponent;
    exports.ɵr = NgxaCerStatisticsRoutingModule;
    exports.ɵs = NgxaStatisticsComponent;
    exports.ɵt = NgxaCerStatisticsAreaPageComponent;
    exports.ɵu = NgxaCerStatisticsGenderPageComponent;
    exports.ɵv = NgxaCerStatisticsPeriodePageComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=xaphira-ngxa-cer.umd.js.map
