import { Injectable, Injector, ɵɵdefineInjectable, ɵɵinject, INJECTOR, Inject, NgModule, Component, Input, EventEmitter, Output, ChangeDetectorRef, ViewEncapsulation, ChangeDetectionStrategy, LOCALE_ID, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PANIC_INDEXED_DB, PANIC, HTTP_SERVICE, API, OAUTH_INFO, ResponseCode } from '@xaphira/shared';
import { IndexedDBService } from '@xaphira/ngxa-storage';
import { Subject, of } from 'rxjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbDialogRef, NbDialogService, NbCardModule, NbAlertModule, NbIconModule, NbDialogModule, NbWindowModule, NbThemeService } from '@nebular/theme';
import { LayoutService, NgxaThemeModule } from '@xaphira/ngxa-theme';
import { BaseFilterComponent, NgxaInputModule, NgxaCheckBoxModule, NgxaButtonModule, NgxaBaseModule, NgxaSelectModule, NgxaMapsModule, NgxaTableModule, NgxaLabelModule, NgxaChartsModule } from '@xaphira/ngxa-common';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { AuthGuardChildService } from '@xaphira/ngxa-auth';
import { takeUntil, tap, map, catchError } from 'rxjs/operators';
import { EncryptionService } from '@xaphira/utils';
import { DomSanitizer } from '@angular/platform-browser';
import { SortType, ColumnMode, NgxDatatableModule, SelectionType } from '@swimlane/ngx-datatable';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PanicIndexedDBService extends IndexedDBService {
    /**
     * @param {?} injector
     */
    constructor(injector) {
        super(injector, 'cer', 1, '#cer-panic');
    }
}
PanicIndexedDBService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
PanicIndexedDBService.ctorParameters = () => [
    { type: Injector }
];
/** @nocollapse */ PanicIndexedDBService.ngInjectableDef = ɵɵdefineInjectable({ factory: function PanicIndexedDBService_Factory() { return new PanicIndexedDBService(ɵɵinject(INJECTOR)); }, token: PanicIndexedDBService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PanicService {
    /**
     * @param {?} panicIndexedDB
     */
    constructor(panicIndexedDB) {
        this.panicIndexedDB = panicIndexedDB;
        this.loaderPanicSubject$ = new Subject();
    }
    /**
     * @param {?} data
     * @return {?}
     */
    notifyPanic(data) {
        this.panicIndexedDB.put(data['panicCode'], data).then((/**
         * @return {?}
         */
        () => {
            this.loaderPanicSubject$.next(data['panicCode']);
        }));
    }
    /**
     * @param {?} datas
     * @return {?}
     */
    putAllPanic(datas) {
        datas.forEach((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            this.panicIndexedDB.put(data['panicCode'], data).then();
        }));
    }
    /**
     * @return {?}
     */
    clearAllPanic() {
        return this.panicIndexedDB.clearAll();
    }
    /**
     * @param {?} panicCode
     * @return {?}
     */
    getPanic(panicCode) {
        return this.panicIndexedDB.get(panicCode);
    }
    /**
     * @return {?}
     */
    getAllPanic() {
        return this.panicIndexedDB.getAllOf();
    }
    /**
     * @return {?}
     */
    onCheckPanic() {
        return this.loaderPanicSubject$.asObservable();
    }
}
PanicService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
PanicService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [PANIC_INDEXED_DB,] }] }
];
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
const CER_PROVIDERS = [
    { provide: PANIC_INDEXED_DB, useClass: PanicIndexedDBService },
    { provide: PANIC, useClass: PanicService },
    PanicIndexedDBService,
    PanicService,
];
class NgxaCerModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return (/** @type {?} */ ({
            ngModule: NgxaCerModule,
            providers: [
                ...CER_PROVIDERS,
            ],
        }));
    }
}
NgxaCerModule.decorators = [
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
class NgxaDashboardComponent {
}
NgxaDashboardComponent.decorators = [
    { type: Component, args: [{
                selector: 'xa-cer-dashboard',
                template: `
    <router-outlet></router-outlet>
  `
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxaCerMonitoringPageComponent {
    /**
     * @param {?} injector
     * @param {?} panicService
     */
    constructor(injector, panicService) {
        this.panicService = panicService;
        this.showInfo = false;
        this.destroy$ = new Subject();
        this.http = injector.get(HTTP_SERVICE);
        this.api = injector.get(API);
        this.panicService.onCheckPanic()
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        () => {
            this.getAllPanicStorage();
        }));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.getAllPanicServer();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    /**
     * @private
     * @return {?}
     */
    getAllPanicServer() {
        this.http.HTTP_AUTH(this.api['panic']['get-allpanic']).subscribe((/**
         * @param {?} values
         * @return {?}
         */
        (values) => {
            /** @type {?} */
            const temps = [];
            values.forEach((/**
             * @param {?} data
             * @return {?}
             */
            (data) => {
                temps.push({
                    mark: [
                        data['latestLatitude'], data['latestLongitude'],
                    ],
                    title: data['name'],
                    alt: data['panicCode'],
                    className: 'pulse',
                });
            }));
            this.markers = temps;
            try {
                this.panicService.clearAllPanic().then((/**
                 * @return {?}
                 */
                () => {
                    if (values.length) {
                        this.panicService.putAllPanic(values);
                    }
                }));
            }
            catch (error) { }
        }));
    }
    /**
     * @private
     * @return {?}
     */
    getAllPanicStorage() {
        this.panicService.getAllPanic().subscribe((/**
         * @param {?} values
         * @return {?}
         */
        (values) => {
            /** @type {?} */
            const temps = [];
            values.forEach((/**
             * @param {?} data
             * @return {?}
             */
            (data) => {
                temps.push({
                    mark: [
                        data['latestLatitude'], data['latestLongitude'],
                    ],
                    title: data['name'],
                    alt: data['panicCode'],
                    className: 'pulse',
                });
            }));
            this.markers = temps;
        }));
    }
    /**
     * @param {?} data
     * @return {?}
     */
    onMarker(data) {
        this.markerSelected = data;
        this.showInfo = true;
    }
    /**
     * @param {?} showInfo
     * @return {?}
     */
    onToggleInfo(showInfo) {
        this.showInfo = showInfo;
    }
}
NgxaCerMonitoringPageComponent.decorators = [
    { type: Component, args: [{
                selector: 'xa-cer-monitoring',
                template: "<xa-page-outlet [header]=\"'Dashboard of Emergency Report'\">\n    <xa-maps-leaflet\n        [markersFn]=\"markers\"\n        (onMarkerClick)=\"onMarker($event)\">\n    </xa-maps-leaflet>\n</xa-page-outlet>\n<xa-cer-slide-out [showInfo]=\"showInfo\" (onToggle)=\"onToggleInfo($event)\">\n    <xa-cer-monitoring-info [markerFn]=\"markerSelected\">\n    </xa-cer-monitoring-info>\n</xa-cer-slide-out>\n",
                styles: ["/*!\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */.nb-theme-default :host{position:relative;display:block;overflow:hidden}.nb-theme-dark :host{position:relative;display:block;overflow:hidden}.nb-theme-cosmic :host{position:relative;display:block;overflow:hidden}.nb-theme-corporate :host{position:relative;display:block;overflow:hidden}"]
            }] }
];
/** @nocollapse */
NgxaCerMonitoringPageComponent.ctorParameters = () => [
    { type: Injector },
    { type: undefined, decorators: [{ type: Inject, args: [PANIC,] }] }
];
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
class NgxaCerMonitoringPreviewComponent {
    /**
     * @param {?} apiPath
     * @param {?} httpBaseService
     * @param {?} sanitizer
     */
    constructor(apiPath, httpBaseService, sanitizer) {
        this.apiPath = apiPath;
        this.httpBaseService = httpBaseService;
        this.sanitizer = sanitizer;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.getEvidence(this.checksum, this.user, this.fileType);
    }
    /**
     * @private
     * @param {?} checksum
     * @param {?} user
     * @param {?} fileType
     * @return {?}
     */
    getEvidence(checksum, user, fileType) {
        this.httpBaseService.HTTP_AUTH(this.apiPath['file']['evidence'], null, null, null, [checksum, user], 'arraybuffer')
            .pipe(tap((/**
         * @param {?} response
         * @return {?}
         */
        (response) => {
            /** @type {?} */
            const fileBlob = new Blob([response], {
                type: fileType,
            });
            /** @type {?} */
            const reader = new FileReader();
            reader.readAsDataURL(fileBlob);
            reader.onloadend = (/**
             * @return {?}
             */
            () => {
                this.url = this.sanitizer.bypassSecurityTrustUrl(reader.result.toString());
            });
        }))).subscribe();
    }
}
NgxaCerMonitoringPreviewComponent.decorators = [
    { type: Component, args: [{
                selector: 'xa-cer-monitoring-preview',
                template: "<nb-card *ngIf=\"url && fileType.includes('image')\">\n    <nb-card-body>\n        <img [src]=\"url\" height=\"500\">\n    </nb-card-body>\n</nb-card>\n<video *ngIf=\"url && fileType.includes('video')\" [src]=\"url\" height=\"500\" controls></video>\n<audio *ngIf=\"url && fileType.includes('audio')\" controls>\n    <source [src]=\"url\" [type]=\"fileType\">\n</audio>",
                styles: [""]
            }] }
];
/** @nocollapse */
NgxaCerMonitoringPreviewComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [API,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [HTTP_SERVICE,] }] },
    { type: DomSanitizer }
];
NgxaCerMonitoringPreviewComponent.propDecorators = {
    url: [{ type: Input }],
    checksum: [{ type: Input }],
    user: [{ type: Input }],
    fileType: [{ type: Input }]
};
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
class NgxaFakeReportPromptComponent {
    /**
     * @param {?} ref
     */
    constructor(ref) {
        this.ref = ref;
        this.disabled = false;
    }
    /**
     * @param {?} password
     * @return {?}
     */
    submit(password) {
        this.disabled = true;
        this.ref.close(password);
    }
}
NgxaFakeReportPromptComponent.decorators = [
    { type: Component, args: [{
                selector: 'xa-fake-report-prompt',
                template: "<nb-card>\n  <nb-card-header>\n    <h6 class=\"text-danger deactivated-label\">\n        {{ 'Fake Report' | translate }}\n    </h6>\n  </nb-card-header>\n  <nb-card-body>\n    <p>\n      {{ 'message.fake-form' | translate }}\n    </p>\n    <p>\n      {{ 'message.input-password' | translate }}\n    </p>\n    <input\n      [(ngModel)]=\"password\"\n      type=\"password\"\n      nbInput\n      class=\"fake-password\"\n      placeholder=\"Password\">\n  </nb-card-body>\n  <nb-card-footer>\n    <button\n      type=\"submit\"\n      status=\"danger\"\n      size=\"large\"\n      class=\"fake-button\"\n      [disabled]=\"!password || disabled\"\n      (click)=\"submit(password)\"\n      nbButton>\n      {{ 'Fake Report' | translate }}\n    </button>\n  </nb-card-footer>\n</nb-card>\n",
                styles: ["/*!\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */.nb-theme-default :host input.fake-password{max-width:unset;width:100%}.nb-theme-default :host .cancel{margin-right:1rem}.nb-theme-default :host button.fake-button{width:100%}.nb-theme-dark :host input.fake-password{max-width:unset;width:100%}.nb-theme-dark :host .cancel{margin-right:1rem}.nb-theme-dark :host button.fake-button{width:100%}.nb-theme-cosmic :host input.fake-password{max-width:unset;width:100%}.nb-theme-cosmic :host .cancel{margin-right:1rem}.nb-theme-cosmic :host button.fake-button{width:100%}.nb-theme-corporate :host input.fake-password{max-width:unset;width:100%}.nb-theme-corporate :host .cancel{margin-right:1rem}.nb-theme-corporate :host button.fake-button{width:100%}@media (max-width:767.98px){.nb-theme-default :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-default :host button.fake-button{font-size:.6rem}.nb-theme-dark :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-dark :host button.fake-button{font-size:.6rem}.nb-theme-cosmic :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-cosmic :host button.fake-button{font-size:.6rem}.nb-theme-corporate :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-corporate :host button.fake-button{font-size:.6rem}}"]
            }] }
];
/** @nocollapse */
NgxaFakeReportPromptComponent.ctorParameters = () => [
    { type: NbDialogRef }
];
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
class NgxaCerMonitoringDetailComponent extends BaseFilterComponent {
    /**
     * @param {?} injector
     * @param {?} router
     * @param {?} route
     * @param {?} panicService
     * @param {?} dialogService
     */
    constructor(injector, router, route, panicService, dialogService) {
        super(injector, null, {
            'status': [],
            'emergencyCategory': [],
        });
        this.injector = injector;
        this.router = router;
        this.route = route;
        this.panicService = panicService;
        this.dialogService = dialogService;
        this.profile = {};
        this.imageDefault = `${document.getElementsByTagName('base')[0].href}/assets/images/avatars/default.png`;
        this.columns = [
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
        this.sort = {
            'desc': ['createdDate'],
        };
        this.enc = injector.get(EncryptionService);
        this.oauthResource = injector.get(OAUTH_INFO);
        this.apiSelectParameter = this.api['master']['select-parameter'];
        if (this.route.snapshot.params['code']) {
            this.panicCode = this.route.snapshot.params['code'];
            this.keyword = {
                panicCode: this.panicCode,
            };
        }
        else {
            this.router.navigate(['/app/dashboard']);
        }
        this.apiPath = this.api['panic']['datatable-panic-detail'];
    }
    /**
     * @return {?}
     */
    ngOnDestroy() { }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.onInit('security', 'get-profile-personal');
        this.paramSelectStatus = [{
                key: 'parameterGroupCode',
                value: 'STATUS_EMERGENCY',
            }];
        this.paramSelectEmergency = [{
                key: 'parameterGroupCode',
                value: 'CATEGORY_EMERGENCY',
            }];
    }
    /**
     * @param {?} serviceName
     * @param {?} apiName
     * @return {?}
     */
    onInit(serviceName, apiName) {
        this.panicService.getPanic(this.panicCode).then((/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            this.loadingForm = true;
            this.username = value.username;
            /** @type {?} */
            const data = {
                username: value.username,
            };
            this.exec(serviceName, apiName, data)
                .subscribe((/**
             * @param {?} success
             * @return {?}
             */
            (success) => {
                this.loadingForm = false;
                this.profile = success;
                if (success['image']) {
                    this.image = success['image'];
                }
            }), (/**
             * @param {?} error
             * @return {?}
             */
            (error) => {
                this.loadingForm = true;
                /** @type {?} */
                const err = error['error'];
                if (err) {
                    this.toastr.showI18n(err.respStatusMessage[err.respStatusCode], true, null, 'danger');
                }
                else {
                    this.toastr.showI18n((/** @type {?} */ (err)), true, null, 'danger');
                }
            }));
        }));
    }
    /**
     * @param {?} prop
     * @return {?}
     */
    valueSelect(prop) {
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
    }
    /**
     * @param {?} data
     * @return {?}
     */
    onPreview(data) {
        this.dialogService.open(NgxaCerMonitoringPreviewComponent, {
            context: {
                checksum: data['checksum'],
                user: this.username,
                fileType: data['fileType'],
            },
        });
    }
    /**
     * @return {?}
     */
    onFake() {
        this.dialogService.open(NgxaFakeReportPromptComponent)
            .onClose.subscribe((/**
         * @param {?} password
         * @return {?}
         */
        (password) => {
            if (password) {
                this.disabledFake = true;
                /** @type {?} */
                const data = {
                    password: this.enc.encryptAES(this.oauthResource['aes_key'], password),
                    panicCode: this.panicCode,
                };
                ((/** @type {?} */ (super.onSubmit(data, 'panic', 'fake-report'))))
                    .pipe(takeUntil(this.destroy$))
                    .subscribe((/**
                 * @param {?} response
                 * @return {?}
                 */
                (response) => {
                    if (response) {
                        if (response.respStatusCode === ResponseCode.OK_SCR011.toString()) {
                            this.router.navigate(['/app/dashboard']);
                        }
                    }
                }));
            }
            else {
                this.disabledFake = false;
            }
        }));
    }
    /**
     * @return {?}
     */
    onProcess() {
        /** @type {?} */
        const data = {
            panicCode: this.panicCode,
            status: this.valueSelect('status'),
            emergencyCategory: this.valueSelect('emergencyCategory'),
        };
        ((/** @type {?} */ (super.onSubmit(data, 'panic', 'process-report'))))
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @param {?} response
         * @return {?}
         */
        (response) => {
            if (response) {
                if (response.respStatusCode === ResponseCode.OK_UPDATED.toString()) {
                    this.router.navigate(['/app/dashboard']);
                }
            }
        }));
    }
}
NgxaCerMonitoringDetailComponent.decorators = [
    { type: Component, args: [{
                selector: 'xa-cer-monitoring-detail',
                template: "<xa-page-outlet [url]=\"'/app/dashboard'\" [header]=\"'Emergency Report Detail'\">\n    <div class=\"row\">\n        <div class=\"col-md-4 col-lg-4 col-xxxl-6\">\n            <div class=\"photo-profile\"\n            [ngStyle]=\"{ \n                'background-image': 'url(' + (image? image: imageDefault) + ')'\n            }\">\n            </div>\n        </div>\n        <div class=\"col-md-8 col-lg-8 col-xxxl-6\">\n            <div class=\"split-row\">\n                <xa-label-text\n                    [label]=\"'Name'\"\n                    [colLabel]=\"4\"\n                    [colContent]=\"8\"\n                    [content]=\"profile.name\"\n                    [skeleton]=\"loadingForm\">\n                </xa-label-text>\n                <xa-label-text\n                    [label]=\"'ID Number'\"\n                    [colLabel]=\"4\"\n                    [colContent]=\"8\"\n                    [content]=\"profile.idNumber\"\n                    [skeleton]=\"loadingForm\">\n                </xa-label-text>\n                <xa-label-text\n                    [label]=\"'Gender'\"\n                    [colLabel]=\"4\"\n                    [colContent]=\"8\"\n                    [content]=\"profile.gender\"\n                    [skeleton]=\"loadingForm\">\n                </xa-label-text>\n                <xa-label-text\n                    [label]=\"'Place / Date of Birth'\"\n                    [colLabel]=\"4\"\n                    [colContent]=\"8\"\n                    [content]=\"profile.placeOfBirth ? (profile.placeOfBirth + ', ' + profile.dateOfBirth) : ''\"\n                    [skeleton]=\"loadingForm\">\n                </xa-label-text>\n            </div>\n            <div class=\"split-row\">\n                <xa-label-text\n                    [label]=\"'Username'\"\n                    [colLabel]=\"4\"\n                    [colContent]=\"8\"\n                    [content]=\"profile.username\"\n                    [skeleton]=\"loadingForm\">\n                </xa-label-text>\n                <xa-label-text\n                    [label]=\"'Email'\"\n                    [colLabel]=\"4\"\n                    [colContent]=\"8\"\n                    [content]=\"profile.email\"\n                    [skeleton]=\"loadingForm\">\n                </xa-label-text>\n                <xa-label-text\n                    [label]=\"'Phone Number'\"\n                    [colLabel]=\"4\"\n                    [colContent]=\"8\"\n                    [content]=\"profile.phoneNumber\"\n                    [skeleton]=\"loadingForm\">\n                </xa-label-text>\n                <xa-label-text\n                    [label]=\"'Address'\"\n                    [colLabel]=\"4\"\n                    [colContent]=\"8\"\n                    [content]=\"profile.address\"\n                    [skeleton]=\"loadingForm\">\n                </xa-label-text>\n                <xa-label-text\n                    [label]=\"'Country'\"\n                    [colLabel]=\"4\"\n                    [colContent]=\"8\"\n                    [content]=\"profile.country\"\n                    [skeleton]=\"loadingForm\">\n                </xa-label-text>\n            </div>\n            <div class=\"split-row\">\n                <xa-label-text\n                    [label]=\"'Related Person'\"\n                    [colLabel]=\"4\"\n                    [colContent]=\"8\"\n                    [content]=\"profile.referenceName\"\n                    [skeleton]=\"loadingForm\">\n                </xa-label-text>\n                <xa-label-text\n                    [label]=\"'Relationship'\"\n                    [colLabel]=\"4\"\n                    [colContent]=\"8\"\n                    [content]=\"profile.relationship\"\n                    [skeleton]=\"loadingForm\">\n                </xa-label-text>\n                <xa-label-text\n                    [label]=\"'Address'\"\n                    [colLabel]=\"4\"\n                    [colContent]=\"8\"\n                    [content]=\"profile.referenceAddress\"\n                    [skeleton]=\"loadingForm\">\n                </xa-label-text>\n                <xa-label-text\n                    [label]=\"'Phone Number'\"\n                    [colLabel]=\"4\"\n                    [colContent]=\"8\"\n                    [content]=\"profile.referencePhoneNumber\"\n                    [skeleton]=\"loadingForm\">\n                </xa-label-text>\n            </div>\n            <form [formGroup]=\"formGroup\">\n                <xa-select\n                    [name]=\"'status'\"\n                    [label]=\"'Status'\"\n                    [colLabel]=\"4\"\n                    [colInput]=\"8\"\n                    [required]=\"true\"\n                    [api]=\"apiSelectParameter\"\n                    [queryParam]=\"paramSelectStatus\"\n                    [searchable]=\"false\"\n                    [skeleton]=\"loadingForm\"\n                    formControlName=\"status\">\n                </xa-select>\n                <xa-select\n                    [name]=\"'emergency'\"\n                    [label]=\"'Emergency'\"\n                    [colLabel]=\"4\"\n                    [colInput]=\"8\"\n                    [required]=\"true\"\n                    [api]=\"apiSelectParameter\"\n                    [queryParam]=\"paramSelectEmergency\"\n                    [searchable]=\"false\"\n                    [skeleton]=\"loadingForm\"\n                    formControlName=\"emergencyCategory\">\n                </xa-select>\n                <div class=\"form-group row\">\n                    <div class=\"offset-sm-4 col-sm-8\">\n                        <button\n                            type=\"reset\"\n                            status=\"danger\"\n                            (click)=\"onFake()\"\n                            class=\"reset-left\"\n                            nbButton>\n                            {{ 'Fake Report' | translate}}\n                        </button>\n                        <button\n                            type=\"submit\"\n                            status=\"primary\"\n                            (click)=\"onProcess()\"\n                            [disabled]=\"formGroup.invalid || formGroup.pristine || disabled\"\n                            class=\"submit-right\"\n                            nbButton>\n                            {{ 'Process' | translate}}\n                        </button>\n                    </div>\n                </div>\n            </form>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-md-12 col-lg-12 col-xxxl-6\">\n            <xa-datatable\n                [api]=\"apiPath\"\n                [filters]=\"filters\"\n                (onButtonCell)=\"onPreview($event)\"\n                [filterFn]=\"keyword\"\n                [selectionType]=\"null\"\n                [add]=\"false\"\n                [edit]=\"false\"\n                [delete]=\"false\"\n                [sort]=\"sort\"\n                [columns]=\"columns\">\n            </xa-datatable>\n        </div>\n    </div>\n</xa-page-outlet>  ",
                styles: [".nb-theme-default :host .split-row{border-bottom:1px solid #edf1f7;margin-bottom:1rem}.nb-theme-default :host .photo-profile{height:225px;width:225px;background-size:cover;margin:20px auto}.nb-theme-default :host .reset-left{margin-right:.25rem}.nb-theme-default :host .submit-right{margin-left:.25rem}.nb-theme-dark :host .split-row{border-bottom:1px solid #151a30;margin-bottom:1rem}.nb-theme-dark :host .photo-profile{height:225px;width:225px;background-size:cover;margin:20px auto}.nb-theme-dark :host .reset-left{margin-right:.25rem}.nb-theme-dark :host .submit-right{margin-left:.25rem}.nb-theme-cosmic :host .split-row{border-bottom:1px solid #1b1b38;margin-bottom:1rem}.nb-theme-cosmic :host .photo-profile{height:225px;width:225px;background-size:cover;margin:20px auto}.nb-theme-cosmic :host .reset-left{margin-right:.25rem}.nb-theme-cosmic :host .submit-right{margin-left:.25rem}.nb-theme-corporate :host .split-row{border-bottom:1px solid #edf1f7;margin-bottom:1rem}.nb-theme-corporate :host .photo-profile{height:225px;width:225px;background-size:cover;margin:20px auto}.nb-theme-corporate :host .reset-left{margin-right:.25rem}.nb-theme-corporate :host .submit-right{margin-left:.25rem}"]
            }] }
];
/** @nocollapse */
NgxaCerMonitoringDetailComponent.ctorParameters = () => [
    { type: Injector },
    { type: Router },
    { type: ActivatedRoute },
    { type: undefined, decorators: [{ type: Inject, args: [PANIC,] }] },
    { type: NbDialogService }
];
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
const ɵ0 = {
    code: '#DASHBOARD-PAGE',
}, ɵ1 = {
    code: '#DASHBOARD-PAGE',
};
/** @type {?} */
const routes = [{
        path: '',
        component: NgxaDashboardComponent,
        canActivateChild: [AuthGuardChildService],
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
class NgxaCerDashboardRoutingModule {
}
NgxaCerDashboardRoutingModule.decorators = [
    { type: NgModule, args: [{
                imports: [RouterModule.forChild(routes)],
                exports: [RouterModule],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxaCerSlideOutComponent {
    constructor() {
        this.showInfo = false;
        this.onToggle = new EventEmitter();
    }
    /**
     * @return {?}
     */
    toggleDetail() {
        this.showInfo = !this.showInfo;
        this.onToggle.emit(this.showInfo);
    }
}
NgxaCerSlideOutComponent.decorators = [
    { type: Component, args: [{
                selector: 'xa-cer-slide-out',
                template: "<nb-icon *ngIf=\"showInfo\" [icon]=\"'arrow-forward-outline'\"\n         pack=\"eva\"\n         class=\"show-hide-toggle\"\n         (click)=\"toggleDetail()\">\n</nb-icon>\n<div class=\"slide-out-container\"\n     [class.expanded]=\"showInfo\"\n     [class.collapsed]=\"!showInfo\">\n  <div class=\"content-wrapper\">\n    <ng-content></ng-content>\n  </div>\n</div>\n",
                styles: ["/*!\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */.nb-theme-default :host .show-hide-toggle{display:block;position:absolute;top:1.5rem;cursor:pointer;background-color:transparent;z-index:999}[dir=ltr] .nb-theme-default :host .show-hide-toggle{right:1.5rem}[dir=rtl] .nb-theme-default :host .show-hide-toggle{left:1.5rem}.nb-theme-default :host .slide-out-container{position:absolute;padding:1.5rem;width:40%;z-index:998}[dir=ltr] .nb-theme-default :host .slide-out-container{border-top-right-radius:.25rem;border-bottom-right-radius:.25rem}[dir=rtl] .nb-theme-default :host .slide-out-container{border-top-left-radius:.25rem;border-bottom-left-radius:.25rem}.nb-theme-default :host .slide-out-container,.nb-theme-default :host .slide-out-container::before{display:block;height:490px;top:0;overflow:hidden;transition:.2s ease-out}.nb-theme-default :host .slide-out-container::before{content:'';width:100%;position:absolute;background:#f7f9fc;box-shadow:0 4px 14px 0 #8f9bb3;opacity:.9;z-index:1}[dir=ltr] .nb-theme-default :host .slide-out-container::before{right:0}[dir=rtl] .nb-theme-default :host .slide-out-container::before{left:0;box-shadow:0 4px 14px 0 #8f9bb3}[dir=ltr] .nb-theme-default :host .slide-out-container.collapsed{left:calc(100% - 0rem)}[dir=rtl] .nb-theme-default :host .slide-out-container.collapsed{right:calc(100% - 6rem)}.nb-theme-default :host .slide-out-container.expanded{left:calc(100% + 1px - 40%)}[dir=rtl] .nb-theme-default :host .slide-out-container.expanded{left:auto;right:calc(100% - 40%)}.nb-theme-default :host .content-wrapper{z-index:1;position:relative;width:100%;margin:0 6rem;transition:.2s ease-out}.nb-theme-default :host .expanded .content-wrapper{margin:0}@media (max-width:991.98px){.nb-theme-default :host .slide-out-container{width:50%}.nb-theme-default :host .slide-out-container.expanded{left:calc(100% + 1px - 50%)}[dir=rtl] .nb-theme-default :host .slide-out-container.expanded{right:calc(100% + 1px - 50%)}}@media (max-width:575.98px){.nb-theme-default :host .show-hide-toggle{right:.5rem}.nb-theme-default :host .slide-out-container{width:100%}.nb-theme-default :host .slide-out-container.collapsed{left:calc(100% + 1px - 3rem)}[dir=rtl] .nb-theme-default :host .slide-out-container.collapsed{right:calc(100% - 3rem)}.nb-theme-default :host .slide-out-container.expanded{left:calc(100% + 1px - 100%)}[dir=rtl] .nb-theme-default :host .slide-out-container.expanded{right:calc(100% - 100%)}}.nb-theme-dark :host .show-hide-toggle{display:block;position:absolute;top:1.5rem;cursor:pointer;background-color:transparent;z-index:999}[dir=ltr] .nb-theme-dark :host .show-hide-toggle{right:1.5rem}[dir=rtl] .nb-theme-dark :host .show-hide-toggle{left:1.5rem}.nb-theme-dark :host .slide-out-container{position:absolute;padding:1.5rem;width:40%;z-index:998}[dir=ltr] .nb-theme-dark :host .slide-out-container{border-top-right-radius:.25rem;border-bottom-right-radius:.25rem}[dir=rtl] .nb-theme-dark :host .slide-out-container{border-top-left-radius:.25rem;border-bottom-left-radius:.25rem}.nb-theme-dark :host .slide-out-container,.nb-theme-dark :host .slide-out-container::before{display:block;height:490px;top:0;overflow:hidden;transition:.2s ease-out}.nb-theme-dark :host .slide-out-container::before{content:'';width:100%;position:absolute;background:linear-gradient(270deg,#222b45 0,#151a30 100%);box-shadow:0 4px 14px 0 #8f9bb3;opacity:.9;z-index:1}[dir=ltr] .nb-theme-dark :host .slide-out-container::before{right:0}[dir=rtl] .nb-theme-dark :host .slide-out-container::before{left:0;box-shadow:0 4px 14px 0 #8f9bb3}[dir=ltr] .nb-theme-dark :host .slide-out-container.collapsed{left:calc(100% - 0rem)}[dir=rtl] .nb-theme-dark :host .slide-out-container.collapsed{right:calc(100% - 6rem)}.nb-theme-dark :host .slide-out-container.expanded{left:calc(100% + 1px - 40%)}[dir=rtl] .nb-theme-dark :host .slide-out-container.expanded{left:auto;right:calc(100% - 40%)}.nb-theme-dark :host .content-wrapper{z-index:1;position:relative;width:100%;margin:0 6rem;transition:.2s ease-out}.nb-theme-dark :host .expanded .content-wrapper{margin:0}@media (max-width:991.98px){.nb-theme-dark :host .slide-out-container{width:50%}.nb-theme-dark :host .slide-out-container.expanded{left:calc(100% + 1px - 50%)}[dir=rtl] .nb-theme-dark :host .slide-out-container.expanded{right:calc(100% + 1px - 50%)}}@media (max-width:575.98px){.nb-theme-dark :host .show-hide-toggle{right:.5rem}.nb-theme-dark :host .slide-out-container{width:100%}.nb-theme-dark :host .slide-out-container.collapsed{left:calc(100% + 1px - 3rem)}[dir=rtl] .nb-theme-dark :host .slide-out-container.collapsed{right:calc(100% - 3rem)}.nb-theme-dark :host .slide-out-container.expanded{left:calc(100% + 1px - 100%)}[dir=rtl] .nb-theme-dark :host .slide-out-container.expanded{right:calc(100% - 100%)}}.nb-theme-cosmic :host .show-hide-toggle{display:block;position:absolute;top:1.5rem;cursor:pointer;background-color:transparent;z-index:999}[dir=ltr] .nb-theme-cosmic :host .show-hide-toggle{right:1.5rem}[dir=rtl] .nb-theme-cosmic :host .show-hide-toggle{left:1.5rem}.nb-theme-cosmic :host .slide-out-container{position:absolute;padding:1.5rem;width:40%;z-index:998}[dir=ltr] .nb-theme-cosmic :host .slide-out-container{border-top-right-radius:.25rem;border-bottom-right-radius:.25rem}[dir=rtl] .nb-theme-cosmic :host .slide-out-container{border-top-left-radius:.25rem;border-bottom-left-radius:.25rem}.nb-theme-cosmic :host .slide-out-container,.nb-theme-cosmic :host .slide-out-container::before{display:block;height:490px;top:0;overflow:hidden;transition:.2s ease-out}.nb-theme-cosmic :host .slide-out-container::before{content:'';width:100%;position:absolute;background:#252547;box-shadow:2px 0 3px #29157a;opacity:.9;z-index:1}[dir=ltr] .nb-theme-cosmic :host .slide-out-container::before{right:0}[dir=rtl] .nb-theme-cosmic :host .slide-out-container::before{left:0;box-shadow:-2px 0 3px #29157a}[dir=ltr] .nb-theme-cosmic :host .slide-out-container.collapsed{left:calc(100% - 0rem)}[dir=rtl] .nb-theme-cosmic :host .slide-out-container.collapsed{right:calc(100% - 6rem)}.nb-theme-cosmic :host .slide-out-container.expanded{left:calc(100% + 1px - 40%)}[dir=rtl] .nb-theme-cosmic :host .slide-out-container.expanded{left:auto;right:calc(100% - 40%)}.nb-theme-cosmic :host .content-wrapper{z-index:1;position:relative;width:100%;margin:0 6rem;transition:.2s ease-out}.nb-theme-cosmic :host .expanded .content-wrapper{margin:0}@media (max-width:991.98px){.nb-theme-cosmic :host .slide-out-container{width:50%}.nb-theme-cosmic :host .slide-out-container.expanded{left:calc(100% + 1px - 50%)}[dir=rtl] .nb-theme-cosmic :host .slide-out-container.expanded{right:calc(100% + 1px - 50%)}}@media (max-width:575.98px){.nb-theme-cosmic :host .show-hide-toggle{right:.5rem}.nb-theme-cosmic :host .slide-out-container{width:100%}.nb-theme-cosmic :host .slide-out-container.collapsed{left:calc(100% + 1px - 3rem)}[dir=rtl] .nb-theme-cosmic :host .slide-out-container.collapsed{right:calc(100% - 3rem)}.nb-theme-cosmic :host .slide-out-container.expanded{left:calc(100% + 1px - 100%)}[dir=rtl] .nb-theme-cosmic :host .slide-out-container.expanded{right:calc(100% - 100%)}}.nb-theme-corporate :host .show-hide-toggle{display:block;position:absolute;top:1.5rem;cursor:pointer;background-color:transparent;z-index:999}[dir=ltr] .nb-theme-corporate :host .show-hide-toggle{right:1.5rem}[dir=rtl] .nb-theme-corporate :host .show-hide-toggle{left:1.5rem}.nb-theme-corporate :host .slide-out-container{position:absolute;padding:1.5rem;width:40%;z-index:998}[dir=ltr] .nb-theme-corporate :host .slide-out-container{border-top-right-radius:.17rem;border-bottom-right-radius:.17rem}[dir=rtl] .nb-theme-corporate :host .slide-out-container{border-top-left-radius:.17rem;border-bottom-left-radius:.17rem}.nb-theme-corporate :host .slide-out-container,.nb-theme-corporate :host .slide-out-container::before{display:block;height:490px;top:0;overflow:hidden;transition:.2s ease-out}.nb-theme-corporate :host .slide-out-container::before{content:'';width:100%;position:absolute;background:linear-gradient(270deg,#edf1f7 0,#e4e9f2 100%);box-shadow:0 4px 14px 0 #8f9bb3;opacity:.9;z-index:1}[dir=ltr] .nb-theme-corporate :host .slide-out-container::before{right:0}[dir=rtl] .nb-theme-corporate :host .slide-out-container::before{left:0;box-shadow:0 4px 14px 0 #8f9bb3}[dir=ltr] .nb-theme-corporate :host .slide-out-container.collapsed{left:calc(100% - 0rem)}[dir=rtl] .nb-theme-corporate :host .slide-out-container.collapsed{right:calc(100% - 6rem)}.nb-theme-corporate :host .slide-out-container.expanded{left:calc(100% + 1px - 40%)}[dir=rtl] .nb-theme-corporate :host .slide-out-container.expanded{left:auto;right:calc(100% - 40%)}.nb-theme-corporate :host .content-wrapper{z-index:1;position:relative;width:100%;margin:0 6rem;transition:.2s ease-out}.nb-theme-corporate :host .expanded .content-wrapper{margin:0}@media (max-width:991.98px){.nb-theme-corporate :host .slide-out-container{width:50%}.nb-theme-corporate :host .slide-out-container.expanded{left:calc(100% + 1px - 50%)}[dir=rtl] .nb-theme-corporate :host .slide-out-container.expanded{right:calc(100% + 1px - 50%)}}@media (max-width:575.98px){.nb-theme-corporate :host .show-hide-toggle{right:.5rem}.nb-theme-corporate :host .slide-out-container{width:100%}.nb-theme-corporate :host .slide-out-container.collapsed{left:calc(100% + 1px - 3rem)}[dir=rtl] .nb-theme-corporate :host .slide-out-container.collapsed{right:calc(100% - 3rem)}.nb-theme-corporate :host .slide-out-container.expanded{left:calc(100% + 1px - 100%)}[dir=rtl] .nb-theme-corporate :host .slide-out-container.expanded{right:calc(100% - 100%)}}"]
            }] }
];
NgxaCerSlideOutComponent.propDecorators = {
    showInfo: [{ type: Input }],
    onToggle: [{ type: Output }]
};
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
class NgxaCerMonitoringInfoComponent {
    /**
     * @param {?} router
     * @param {?} panicService
     * @param {?} dialogService
     */
    constructor(router, panicService, dialogService) {
        this.router = router;
        this.panicService = panicService;
        this.dialogService = dialogService;
        this.marker = { mark: [0, 0] };
        this.data = {};
    }
    /**
     * @param {?} marker
     * @return {?}
     */
    set markerFn(marker) {
        if (marker) {
            this.panicService.getPanic(marker.alt).then((/**
             * @param {?} value
             * @return {?}
             */
            (value) => {
                this.data = value;
            }));
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    onViewDetails() {
        this.router.navigate(['/app/dashboard/details', this.data['panicCode']]);
    }
    /**
     * @return {?}
     */
    onPreview() {
        this.dialogService.open(NgxaCerMonitoringPreviewComponent, {
            context: {
                checksum: this.data['fileMetadata']['checksum'],
                user: this.data['username'],
                fileType: this.data['fileMetadata']['fileType'],
            },
        });
    }
}
NgxaCerMonitoringInfoComponent.decorators = [
    { type: Component, args: [{
                selector: 'xa-cer-monitoring-info',
                template: "<div class=\"civilians-emergency\">\n    <h5 class=\"h5\">{{data.name}}</h5>\n    <div class=\"civilians-body\">\n        <div class=\"form-group row\">\n            <div class=\"col-sm-5 col-md-5 col-sm-5\">\n                <span class=\"label-body\">{{'ID Number' | translate}}</span>\n            </div>\n            <div class=\"col-sm-7 col-md-7 col-sm-7\">\n                <span>{{data.idNumber}}</span>\n            </div>\n        </div>\n        <div class=\"form-group row\">\n            <div class=\"col-sm-5 col-md-5 col-sm-5\">\n                <span class=\"label-body\">{{'Gender' | translate}}</span>\n            </div>\n            <div class=\"col-sm-7 col-md-7 col-sm-7\">\n                <span>{{data.gender}}</span>\n            </div>\n        </div>\n        <div class=\"form-group row\">\n            <div class=\"col-sm-5 col-md-5 col-sm-5\">\n                <span class=\"label-body\">{{'Age' | translate}}</span>\n            </div>\n            <div class=\"col-sm-7 col-md-7 col-sm-7\">\n                <span>{{data.age + ' '}}{{'Years' | translate}}</span>\n            </div>\n        </div>\n        <div class=\"form-group row\">\n            <div class=\"col-sm-5 col-md-5 col-sm-5\">\n                <span class=\"label-body\">{{'Phone Number' | translate}}</span>\n            </div>\n            <div class=\"col-sm-7 col-md-7 col-sm-7\">\n                <span>{{data.phoneNumber}}</span>\n            </div>\n        </div>\n        <div class=\"form-group row\">\n            <div class=\"col-sm-5 col-md-5 col-sm-5\">\n                <span class=\"label-body\">{{'Device Name' | translate}}</span>\n            </div>\n            <div class=\"col-sm-7 col-md-7 col-sm-7\">\n                <span>{{data.latestDeviceName}}</span>\n            </div>\n        </div>\n        <div class=\"form-group row\">\n            <div class=\"col-sm-5 col-md-5 col-sm-5\">\n                <span class=\"label-body\">{{'Location' | translate}}</span>\n            </div>\n            <div class=\"col-sm-7 col-md-7 col-sm-7\">\n                <span>{{data.latestFormattedAddress}}</span>\n            </div>\n        </div>\n        <div class=\"form-group row\">\n            <div class=\"col-sm-8 col-md-8 col-sm-8\">\n                <button\n                type=\"submit\"\n                status=\"warning\"\n                class=\"preview-right\"\n                (click)=\"onPreview()\"\n                nbButton>\n                {{ 'Preview' | translate}}\n                </button>\n            </div>\n            <div class=\"col-sm-4 col-md-4 col-sm-4\">\n                <button\n                type=\"submit\"\n                status=\"primary\"\n                class=\"details-right\"\n                (click)=\"onViewDetails()\"\n                nbButton>\n                {{ 'Details' | translate}}\n                </button>\n            </div>\n        </div>\n    </div>\n    <div class=\"civilians-footer\">\n    </div>\n</div>\n",
                styles: [".nb-theme-default :host .civilians-emergency{width:100%;z-index:999}.nb-theme-default :host .civilians-body{margin:2rem 0;font-size:.85rem}.nb-theme-default :host .label-body{color:#8e9196;font-family:Open Sans,sans-serif;line-height:1rem;font-weight:700}.nb-theme-default :host .preview-right{right:0;position:absolute;margin:2rem 0}.nb-theme-default :host .details-right{right:0;position:absolute;margin:2rem 1rem}.nb-theme-dark :host .civilians-emergency{width:100%;z-index:999}.nb-theme-dark :host .civilians-body{margin:2rem 0;font-size:.85rem}.nb-theme-dark :host .label-body{color:#8e9196;font-family:Open Sans,sans-serif;line-height:1rem;font-weight:700}.nb-theme-dark :host .preview-right{right:0;position:absolute;margin:2rem 0}.nb-theme-dark :host .details-right{right:0;position:absolute;margin:2rem 1rem}.nb-theme-cosmic :host .civilians-emergency{width:100%;z-index:999}.nb-theme-cosmic :host .civilians-body{margin:2rem 0;font-size:.85rem}.nb-theme-cosmic :host .label-body{color:#8e9196;font-family:Open Sans,sans-serif;line-height:1rem;font-weight:700}.nb-theme-cosmic :host .preview-right{right:0;position:absolute;margin:2rem 0}.nb-theme-cosmic :host .details-right{right:0;position:absolute;margin:2rem 1rem}.nb-theme-corporate :host .civilians-emergency{width:100%;z-index:999}.nb-theme-corporate :host .civilians-body{margin:2rem 0;font-size:.85rem}.nb-theme-corporate :host .label-body{color:#8e9196;font-family:Open Sans,sans-serif;line-height:1rem;font-weight:700}.nb-theme-corporate :host .preview-right{right:0;position:absolute;margin:2rem 0}.nb-theme-corporate :host .details-right{right:0;position:absolute;margin:2rem 1rem}"]
            }] }
];
/** @nocollapse */
NgxaCerMonitoringInfoComponent.ctorParameters = () => [
    { type: Router },
    { type: undefined, decorators: [{ type: Inject, args: [PANIC,] }] },
    { type: NbDialogService }
];
NgxaCerMonitoringInfoComponent.propDecorators = {
    markerFn: [{ type: Input }]
};
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
class NgxaCerDatatableComponent {
    /**
     * @param {?} locale
     * @param {?} layout
     * @param {?} injector
     */
    constructor(locale, layout, injector) {
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
        this.sortType = SortType.single;
        this.columnMode = ColumnMode.force;
        this.headerHeight = 40;
        this.footerHeight = 'auto';
        this.rowHeight = 'auto';
        this.column = true;
        this.footer = true;
        this.startWithOpenData = true;
        this.filterEvent = false;
        this.buttonCell = new EventEmitter();
        this.select = new EventEmitter();
        this.activate = new EventEmitter();
        this.destroy$ = new Subject();
        this.pageOffset = 0;
        this.http = injector.get(HTTP_SERVICE);
        this.cdref = injector.get(ChangeDetectorRef);
    }
    /**
     * @param {?} keyword
     * @return {?}
     */
    set filterFn(keyword) {
        this.keywordParam = keyword;
        this._keyword = keyword;
        this.count = 0;
        this.offset = 0;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.startWithOpenData) {
            this.fetch();
        }
        this.layout.onChangeLayoutSize().takeUntil(this.destroy$).subscribe((/**
         * @return {?}
         */
        () => {
            this.datatable.recalculate();
            this.cdref.detectChanges();
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
        this.destroy$.unsubscribe();
    }
    /**
     * @return {?}
     */
    fetch() {
        if (this.api) {
            this.externalPaging = true;
            this.externalSorting = true;
            this.getRequest().subscribe((/**
             * @param {?} rows
             * @return {?}
             */
            rows => {
                this.rows = rows;
                this.cdref.detectChanges();
            }));
        }
    }
    /**
     * @param {?} order
     * @return {?}
     */
    onSort(order) {
        if (order) {
            if (Array.isArray(order.sorts)) {
                order.sorts.forEach((/**
                 * @param {?} sort
                 * @return {?}
                 */
                sort => {
                    if (sort['dir'] === 'asc') {
                        this.sort = { asc: [sort['prop']] };
                    }
                    else {
                        this.sort = { desc: [sort['prop']] };
                    }
                }));
            }
        }
        this.fetch();
    }
    /**
     * @param {?} selected
     * @return {?}
     */
    onSelect(selected) {
        this.select.emit(selected);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onActivate(event) {
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
    }
    /**
     * @param {?} page
     * @return {?}
     */
    setPage(page) {
        this.pageOffset = page.offset * this.limit;
        this.fetch();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    sanitizedValue(value) {
        return value !== null && value !== undefined ? this.stripHtml(value) : value;
    }
    /**
     * @param {?} html
     * @return {?}
     */
    stripHtml(html) {
        if (!html.replace) {
            return html;
        }
        return html.replace(/<\/?[^>]+(>|$)/g, '');
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onClickButton(event) {
        this.buttonCell.emit(event);
    }
    /**
     * @private
     * @return {?}
     */
    getRequest() {
        /** @type {?} */
        const body = {
            offset: this.pageOffset,
            limit: this.limit,
            keyword: this._keyword,
            order: this.sort,
        };
        this.loadingIndicator = true;
        return this.http.HTTP_AUTH(this.api, body)
            .pipe(map((/**
         * @param {?} response
         * @return {?}
         */
        (response) => {
            this.count = Number(response.totalRecord);
            this.loadingIndicator = false;
            return ((/** @type {?} */ (response['data'])));
        })), catchError((/**
         * @return {?}
         */
        () => {
            this.loadingIndicator = false;
            this.count = 0;
            return of([]);
        })));
    }
}
NgxaCerDatatableComponent.decorators = [
    { type: Component, args: [{
                selector: 'xa-cer-datatable',
                template: "<ngx-datatable\n    class=\"ngxa\"\n    [rows]=\"rows\"\n    [columns]=\"columns\"\n    [selected]=\"selected\"\n    [limit]=\"limit\"\n    [count]=\"count\"\n    [offset]=\"offset\"\n    [externalPaging]=\"externalPaging\"\n    [externalSorting]=\"externalSorting\"\n    [loadingIndicator]=\"loadingIndicator\"\n    [scrollbarH]=\"scrollbarH\"\n    [scrollbarV]=\"scrollbarV\"\n    [reorderable]=\"reorderable\"\n    [sortType]=\"sortType\"\n    [selectionType]=\"selectionType\"\n    [columnMode]=\"columnMode\"\n    [headerHeight]=\"headerHeight\"\n    [footerHeight]=\"footerHeight\"\n    [rowHeight]=\"rowHeight\"\n    (page)=\"setPage($event)\"\n    (sort)=\"onSort($event)\"\n    (select)=\"onSelect($event)\"\n    (activate)=\"onActivate($event)\"\n    #datatable>\n    <div *ngIf=\"column\">\n        <ngx-datatable-column *ngIf=\"selectionType === 'checkbox'\"\n            [width]=\"30\"\n            [sortable]=\"false\"\n            [canAutoResize]=\"false\"\n            [draggable]=\"false\"\n            [resizeable]=\"false\"\n            [headerCheckboxable]=\"true\"\n            [checkboxable]=\"true\"\n            [frozenLeft]=\"true\">\n        </ngx-datatable-column>\n        <ngx-datatable-column *ngFor=\"let col of columns\"\n            [prop]=\"col.prop\"\n            [name]=\"col.name | translate\"\n            [sortable]=\"col.sortable\"\n            [canAutoResize]=\"col.canAutoResize\"\n            [draggable]=\"col.draggable\"\n            [resizeable]=\"col.resizeable\"\n            [width]=\"col.width\"\n            [frozenLeft]=\"col.frozenLeft\"\n            [frozenRight]=\"col.frozenRight\">\n            <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n                <span *ngIf=\"!col.cellTemplate && !col.type\" [title]=\"sanitizedValue(value)\" [innerHTML]=\"value\"></span>\n                <span *ngIf=\"!col.cellTemplate && col.type === 'html'\" [title]=\"sanitizedValue(value)\" [innerHTML]=\"value\"></span>\n                <span *ngIf=\"!col.cellTemplate && col.type === 'icon'\" [title]=\"sanitizedValue(value)\"><span class=\"{{value}}\"></span></span>\n                <button\n                    *ngIf=\"!col.cellTemplate && col.type === 'button'\"\n                    [status]=\"col.buttonStatus ? col.buttonStatus : 'primary'\"\n                    (click)=\"onClickButton(value)\"\n                    [size]=\"'tiny'\"\n                    nbButton>\n                    {{ col.button | translate }}\n                </button>\n            </ng-template>\n        </ngx-datatable-column>\n    </div>\n    <ngx-datatable-footer *ngIf=\"footer\">\n        <ng-template\n            ngx-datatable-footer-template\n            let-rowCount=\"rowCount\"\n            let-pageSize=\"pageSize\"\n            let-selectedCount=\"selectedCount\"\n            let-curPage=\"curPage\"\n            let-offset=\"offset\"\n            let-isVisible=\"isVisible\">\n            <div class=\"page-count\">\n                <div> {{ selectedCount }} {{ 'Selected' | translate }} | {{ count }} {{ 'Total' | translate }} </div>\n            </div>\n            <datatable-pager\n                [pagerLeftArrowIcon]=\"'datatable-icon-left'\"\n                [pagerRightArrowIcon]=\"'datatable-icon-right'\"\n                [pagerPreviousIcon]=\"'datatable-icon-prev'\"\n                [pagerNextIcon]=\"'datatable-icon-skip'\"\n                [page]=\"curPage\"\n                [size]=\"pageSize\"\n                [count]=\"rowCount\"\n                [hidden]=\"!((rowCount / pageSize) > 1)\"\n                (change)=\"datatable.onFooterPage($event)\">\n            </datatable-pager>\n        </ng-template>\n    </ngx-datatable-footer>\n</ngx-datatable>\n",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".ngx-datatable.material{background:#fff;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.ngx-datatable.material.striped .datatable-row-odd{background:#eee}.ngx-datatable.material.multi-click-selection .datatable-body-row.active,.ngx-datatable.material.multi-click-selection .datatable-body-row.active .datatable-row-group,.ngx-datatable.material.multi-selection .datatable-body-row.active,.ngx-datatable.material.multi-selection .datatable-body-row.active .datatable-row-group,.ngx-datatable.material.single-selection .datatable-body-row.active,.ngx-datatable.material.single-selection .datatable-body-row.active .datatable-row-group{background-color:#304ffe;color:#fff}.ngx-datatable.material.multi-click-selection .datatable-body-row.active:hover,.ngx-datatable.material.multi-click-selection .datatable-body-row.active:hover .datatable-row-group,.ngx-datatable.material.multi-selection .datatable-body-row.active:hover,.ngx-datatable.material.multi-selection .datatable-body-row.active:hover .datatable-row-group,.ngx-datatable.material.single-selection .datatable-body-row.active:hover,.ngx-datatable.material.single-selection .datatable-body-row.active:hover .datatable-row-group{background-color:#193ae4;color:#fff}.ngx-datatable.material.multi-click-selection .datatable-body-row.active:focus,.ngx-datatable.material.multi-click-selection .datatable-body-row.active:focus .datatable-row-group,.ngx-datatable.material.multi-selection .datatable-body-row.active:focus,.ngx-datatable.material.multi-selection .datatable-body-row.active:focus .datatable-row-group,.ngx-datatable.material.single-selection .datatable-body-row.active:focus,.ngx-datatable.material.single-selection .datatable-body-row.active:focus .datatable-row-group{background-color:#2041ef;color:#fff}.ngx-datatable.material:not(.cell-selection) .datatable-body-row:hover,.ngx-datatable.material:not(.cell-selection) .datatable-body-row:hover .datatable-row-group{background-color:#eee;transition-property:background;transition-duration:.3s;transition-timing-function:linear}.ngx-datatable.material:not(.cell-selection) .datatable-body-row:focus,.ngx-datatable.material:not(.cell-selection) .datatable-body-row:focus .datatable-row-group{background-color:#ddd}.ngx-datatable.material.cell-selection .datatable-body-cell:hover,.ngx-datatable.material.cell-selection .datatable-body-cell:hover .datatable-row-group{background-color:#eee;transition-property:background;transition-duration:.3s;transition-timing-function:linear}.ngx-datatable.material.cell-selection .datatable-body-cell:focus,.ngx-datatable.material.cell-selection .datatable-body-cell:focus .datatable-row-group{background-color:#ddd}.ngx-datatable.material.cell-selection .datatable-body-cell.active,.ngx-datatable.material.cell-selection .datatable-body-cell.active .datatable-row-group{background-color:#304ffe;color:#fff}.ngx-datatable.material.cell-selection .datatable-body-cell.active:hover,.ngx-datatable.material.cell-selection .datatable-body-cell.active:hover .datatable-row-group{background-color:#193ae4;color:#fff}.ngx-datatable.material.cell-selection .datatable-body-cell.active:focus,.ngx-datatable.material.cell-selection .datatable-body-cell.active:focus .datatable-row-group{background-color:#2041ef;color:#fff}.ngx-datatable.material .empty-row{height:50px;text-align:left;padding:.5rem 1.2rem;vertical-align:top;border-top:0}.ngx-datatable.material .loading-row{text-align:left;padding:.5rem 1.2rem;vertical-align:top;border-top:0}.ngx-datatable.material .datatable-body .datatable-row-left,.ngx-datatable.material .datatable-header .datatable-row-left{background-color:#fff;background-position:100% 0;background-repeat:repeat-y;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAFklEQVQIHWPSkNeSBmJhTQVtbiDNCgASagIIuJX8OgAAAABJRU5ErkJggg==)}.ngx-datatable.material .datatable-body .datatable-row-right,.ngx-datatable.material .datatable-header .datatable-row-right{background-position:0 0;background-color:#fff;background-repeat:repeat-y;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAFklEQVQI12PQkNdi1VTQ5gbSwkAsDQARLAIGtOSFUAAAAABJRU5ErkJggg==)}.ngx-datatable.material .datatable-header{border-bottom:1px solid rgba(0,0,0,.12)}.ngx-datatable.material .datatable-header .datatable-header-cell{text-align:left;padding:.9rem 1.2rem;background-color:#fff;color:rgba(0,0,0,.54);vertical-align:bottom;font-size:12px;font-weight:500}.ngx-datatable.material .datatable-header .datatable-header-cell .datatable-header-cell-wrapper{position:relative}.ngx-datatable.material .datatable-header .datatable-header-cell.longpress .draggable::after{transition:transform .4s,opacity .4s;opacity:.5;transform:scale(1)}.ngx-datatable.material .datatable-header .datatable-header-cell .draggable::after{content:' ';position:absolute;top:50%;left:50%;margin:-30px 0 0 -30px;height:60px;width:60px;background:#eee;border-radius:100%;opacity:1;-webkit-filter:none;filter:none;transform:scale(0);z-index:9999;pointer-events:none}.ngx-datatable.material .datatable-header .datatable-header-cell.dragging .resize-handle{border-right:none}.ngx-datatable.material .datatable-header .resize-handle{border-right:1px solid #eee}.ngx-datatable.material .datatable-body .datatable-row-detail{background:#f5f5f5;padding:10px}.ngx-datatable.material .datatable-body .datatable-group-header{background:#f5f5f5;border-bottom:1px solid #d9d8d9;border-top:1px solid #d9d8d9}.ngx-datatable.material .datatable-body .datatable-body-row .datatable-body-cell,.ngx-datatable.material .datatable-body .datatable-body-row .datatable-body-group-cell{text-align:left;padding:.9rem 1.2rem;vertical-align:top;border-top:0;color:rgba(0,0,0,.87);transition:width .3s;font-size:14px;font-weight:400}.ngx-datatable.material .datatable-body .progress-linear{display:block;width:100%;height:5px;padding:0;margin:0;position:absolute}.ngx-datatable.material .datatable-body .progress-linear .container{display:block;position:relative;overflow:hidden;width:100%;height:5px;transform:translate(0,0) scale(1,1);background-color:#aad1f9}.ngx-datatable.material .datatable-body .progress-linear .container .bar{transition:transform .2s linear;-webkit-animation:.8s cubic-bezier(.39,.575,.565,1) infinite query;animation:.8s cubic-bezier(.39,.575,.565,1) infinite query;background-color:#106cc8;position:absolute;left:0;top:0;bottom:0;width:100%;height:5px}.ngx-datatable.material .datatable-footer{border-top:1px solid rgba(0,0,0,.12);font-size:12px;font-weight:400;color:rgba(0,0,0,.54)}.ngx-datatable.material .datatable-footer .page-count{line-height:50px;height:50px;padding:0 1.2rem}.ngx-datatable.material .datatable-footer .datatable-pager{margin:0 10px}.ngx-datatable.material .datatable-footer .datatable-pager li{vertical-align:middle}.ngx-datatable.material .datatable-footer .datatable-pager li.disabled a{color:rgba(0,0,0,.26)!important;background-color:transparent!important}.ngx-datatable.material .datatable-footer .datatable-pager li.active a{background-color:rgba(158,158,158,.2);font-weight:700}.ngx-datatable.material .datatable-footer .datatable-pager a{height:22px;min-width:24px;line-height:22px;padding:0 6px;border-radius:3px;margin:6px 3px;text-align:center;color:rgba(0,0,0,.54);text-decoration:none;vertical-align:bottom}.ngx-datatable.material .datatable-footer .datatable-pager a:hover{color:rgba(0,0,0,.75);background-color:rgba(158,158,158,.2)}.ngx-datatable.material .datatable-footer .datatable-pager .datatable-icon-left,.ngx-datatable.material .datatable-footer .datatable-pager .datatable-icon-prev,.ngx-datatable.material .datatable-footer .datatable-pager .datatable-icon-right,.ngx-datatable.material .datatable-footer .datatable-pager .datatable-icon-skip{font-size:20px;line-height:20px;padding:0 3px}.ngx-datatable.material .datatable-summary-row .datatable-body-row,.ngx-datatable.material .datatable-summary-row .datatable-body-row:hover{background-color:#ddd}.ngx-datatable.material .datatable-summary-row .datatable-body-row .datatable-body-cell{font-weight:700}.datatable-checkbox{position:relative;margin:0;cursor:pointer;vertical-align:middle;display:inline-block;box-sizing:border-box;padding:0}.datatable-checkbox input[type=checkbox]{position:relative;margin:0 1rem 0 0;cursor:pointer;outline:0}.datatable-checkbox input[type=checkbox]:before{transition:.3s ease-in-out;content:'';position:absolute;left:0;z-index:1;width:1rem;height:1rem;border:2px solid #f2f2f2}.datatable-checkbox input[type=checkbox]:checked:before{transform:rotate(-45deg);height:.5rem;border-color:#009688;border-top-style:none;border-right-style:none}.datatable-checkbox input[type=checkbox]:after{content:'';position:absolute;top:0;left:0;width:1rem;height:1rem;background:#fff;cursor:pointer}@-webkit-keyframes query{0%{opacity:1;transform:translateX(35%) scale(.3,1)}100%{opacity:0;transform:translateX(-50%) scale(0,1)}}@keyframes query{0%{opacity:1;transform:translateX(35%) scale(.3,1)}100%{opacity:0;transform:translateX(-50%) scale(0,1)}}.ngx-datatable.bootstrap{box-shadow:none;font-size:13px}.ngx-datatable.bootstrap .datatable-header{height:unset!important}.ngx-datatable.bootstrap .datatable-header .datatable-header-cell{vertical-align:bottom;padding:.75rem;border-bottom:1px solid #d1d4d7}.ngx-datatable.bootstrap .datatable-header .datatable-header-cell .datatable-header-cell-label{line-height:24px}.ngx-datatable.bootstrap .datatable-body .datatable-body-row{vertical-align:top;border-top:1px solid #d1d4d7}.ngx-datatable.bootstrap .datatable-body .datatable-body-row.datatable-row-even{background-color:rgba(0,0,0,.05)}.ngx-datatable.bootstrap .datatable-body .datatable-body-row.active{background-color:#1483ff;color:#fff}.ngx-datatable.bootstrap .datatable-body .datatable-body-row .datatable-body-cell{padding:.75rem;text-align:left;vertical-align:top}.ngx-datatable.bootstrap .datatable-body .empty-row{position:relative;padding:.75rem 1.25rem;margin-bottom:0}.ngx-datatable.bootstrap .datatable-footer{background:#424242;color:#ededed;margin-top:-1px}.ngx-datatable.bootstrap .datatable-footer .page-count{line-height:50px;height:50px;padding:0 1.2rem}.ngx-datatable.bootstrap .datatable-footer .datatable-pager{margin:0 10px;vertical-align:top}.ngx-datatable.bootstrap .datatable-footer .datatable-pager ul li{margin:10px 0}.ngx-datatable.bootstrap .datatable-footer .datatable-pager ul li:not(.disabled).active a,.ngx-datatable.bootstrap .datatable-footer .datatable-pager ul li:not(.disabled):hover a{background-color:#545454;font-weight:700}.ngx-datatable.bootstrap .datatable-footer .datatable-pager a{height:22px;min-width:24px;line-height:22px;padding:0;border-radius:3px;margin:0 3px;text-align:center;text-decoration:none;vertical-align:bottom;color:#ededed}.ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-left,.ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-prev,.ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-right,.ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-skip{font-size:18px;line-height:27px;padding:0 3px}.ngx-datatable.bootstrap .datatable-summary-row .datatable-body-row .datatable-body-cell{font-weight:700}.ngx-datatable.dark{box-shadow:none;background:#1b1e27;border:1px solid #2f3646;color:#fff;font-size:13px}.ngx-datatable.dark .datatable-header{background:#181b24;color:#72809b}.ngx-datatable.dark .datatable-header .datatable-header-cell{text-align:left;padding:.5rem 1.2rem;font-weight:700}.ngx-datatable.dark .datatable-header .datatable-header-cell .datatable-header-cell-label{line-height:24px}.ngx-datatable.dark .datatable-body{background:#1a1e28}.ngx-datatable.dark .datatable-body .datatable-body-row{border-top:1px solid #2f3646}.ngx-datatable.dark .datatable-body .datatable-body-row .datatable-body-cell{text-align:left;padding:.5rem 1.2rem;vertical-align:top}.ngx-datatable.dark .datatable-body .datatable-body-row:hover{background:#171b24;transition-property:background;transition-duration:.3s;transition-timing-function:linear}.ngx-datatable.dark .datatable-body .datatable-body-row:focus{background-color:#232837}.ngx-datatable.dark .datatable-body .datatable-body-row.active{background-color:#1483ff;color:#fff}.ngx-datatable.dark .datatable-footer{background:#232837;color:#72809b;margin-top:-1px}.ngx-datatable.dark .datatable-footer .page-count{line-height:50px;height:50px;padding:0 1.2rem}.ngx-datatable.dark .datatable-footer .datatable-pager{margin:0 10px;vertical-align:top}.ngx-datatable.dark .datatable-footer .datatable-pager ul li{margin:10px 0}.ngx-datatable.dark .datatable-footer .datatable-pager ul li:not(.disabled).active a,.ngx-datatable.dark .datatable-footer .datatable-pager ul li:not(.disabled):hover a{background-color:#455066;font-weight:700}.ngx-datatable.dark .datatable-footer .datatable-pager a{height:22px;min-width:24px;line-height:22px;padding:0;border-radius:3px;margin:0 3px;text-align:center;text-decoration:none;vertical-align:bottom;color:#72809b}.ngx-datatable.dark .datatable-footer .datatable-pager .datatable-icon-left,.ngx-datatable.dark .datatable-footer .datatable-pager .datatable-icon-prev,.ngx-datatable.dark .datatable-footer .datatable-pager .datatable-icon-right,.ngx-datatable.dark .datatable-footer .datatable-pager .datatable-icon-skip{font-size:18px;line-height:27px;padding:0 3px}.ngx-datatable.dark .datatable-summary-row .datatable-body-row,.ngx-datatable.dark .datatable-summary-row .datatable-body-row:hover{background-color:#14171f}.ngx-datatable.dark .datatable-summary-row .datatable-body-row .datatable-body-cell{font-weight:700}.ngx-datatable.ngxa{box-shadow:none;font-size:13px}.ngx-datatable.ngxa .datatable-header{height:unset!important}.ngx-datatable.ngxa .datatable-header .datatable-header-cell{vertical-align:bottom;padding:.75rem;border-bottom:1px solid #d1d4d7}.ngx-datatable.ngxa .datatable-header .datatable-header-cell .datatable-header-cell-label{line-height:24px}.ngx-datatable.ngxa .datatable-header .datatable-header-cell .datatable-checkbox input[type=checkbox]:checked:before{transform:rotate(-45deg);height:.5rem;border-color:#36f;border-top-style:none;border-right-style:none}.ngx-datatable.ngxa .datatable-header .datatable-row-left{background-color:#fff;background-position:100% 0;background-repeat:repeat-y;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAFklEQVQIHWPSkNeSBmJhTQVtbiDNCgASagIIuJX8OgAAAABJRU5ErkJggg==)}.ngx-datatable.ngxa .datatable-header .datatable-row-right{background-color:#fff;background-position:0 0;background-repeat:repeat-y;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAFklEQVQI12PQkNdi1VTQ5gbSwkAsDQARLAIGtOSFUAAAAABJRU5ErkJggg==)}.ngx-datatable.ngxa .datatable-body .datatable-body-row{vertical-align:top}.ngx-datatable.ngxa .datatable-body .datatable-body-row.datatable-row-even,.ngx-datatable.ngxa .datatable-body .datatable-body-row.datatable-row-even .datatable-row-left,.ngx-datatable.ngxa .datatable-body .datatable-body-row.datatable-row-even .datatable-row-right{background-color:#f2f2f2}.ngx-datatable.ngxa .datatable-body .datatable-body-row.datatable-row-odd .datatable-row-left,.ngx-datatable.ngxa .datatable-body .datatable-body-row.datatable-row-odd .datatable-row-right{background-color:#fff}.ngx-datatable.ngxa .datatable-body .datatable-body-row .datatable-row-left{background-position:100% 0;background-repeat:repeat-y;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAFklEQVQIHWPSkNeSBmJhTQVtbiDNCgASagIIuJX8OgAAAABJRU5ErkJggg==)}.ngx-datatable.ngxa .datatable-body .datatable-body-row .datatable-row-right{background-position:0 0;background-repeat:repeat-y;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAFklEQVQI12PQkNdi1VTQ5gbSwkAsDQARLAIGtOSFUAAAAABJRU5ErkJggg==)}.ngx-datatable.ngxa .datatable-body .datatable-body-row.active{background-color:#36f;color:#fff}.ngx-datatable.ngxa .datatable-body .datatable-body-row.active .datatable-row-left,.ngx-datatable.ngxa .datatable-body .datatable-body-row.active .datatable-row-right{background-color:#36f}.ngx-datatable.ngxa .datatable-body .datatable-body-row:hover,.ngx-datatable.ngxa .datatable-body .datatable-body-row:hover .datatable-row-group{cursor:pointer;border-bottom:.025rem solid #7899ff;transition-property:background;transition-duration:.3s;transition-timing-function:linear}.ngx-datatable.ngxa .datatable-body .datatable-body-row .datatable-body-cell{padding:.75rem;text-align:left;vertical-align:top}.ngx-datatable.ngxa .datatable-body .datatable-body-row .datatable-body-cell .datatable-checkbox input[type=checkbox]:checked:before{transform:rotate(-45deg);height:.5rem;border-color:#36f;border-top-style:none;border-right-style:none}.ngx-datatable.ngxa .datatable-body .empty-row{position:relative;padding:.75rem 1.25rem;margin-bottom:0}.ngx-datatable.ngxa .datatable-body .progress-linear{display:block;width:100%;height:5px;padding:0;margin:0;position:absolute}.ngx-datatable.ngxa .datatable-body .progress-linear .container{display:block;position:relative;overflow:hidden;width:100%;height:5px;transform:translate(0,0) scale(1,1);background-color:#aad1f9}.ngx-datatable.ngxa .datatable-body .progress-linear .container .bar{transition:transform .2s linear;-webkit-animation:.8s cubic-bezier(.39,.575,.565,1) infinite query;animation:.8s cubic-bezier(.39,.575,.565,1) infinite query;background-color:#106cc8;position:absolute;left:0;top:0;bottom:0;width:100%;height:5px}.ngx-datatable.ngxa .datatable-footer{background:#f2f2f2;color:#5a5a5a;margin-top:-1px}.ngx-datatable.ngxa .datatable-footer .page-count{padding:.7rem}.ngx-datatable.ngxa .datatable-footer .datatable-pager{margin:0 10px;vertical-align:top}.ngx-datatable.ngxa .datatable-footer .datatable-pager ul li{margin:10px 0}.ngx-datatable.ngxa .datatable-footer .datatable-pager ul li:not(.disabled).active a,.ngx-datatable.ngxa .datatable-footer .datatable-pager ul li:not(.disabled):hover a{background-color:#c1c1c1;font-weight:700}.ngx-datatable.ngxa .datatable-footer .datatable-pager a{height:22px;min-width:24px;line-height:22px;padding:0;border-radius:3px;margin:0 3px;text-align:center;text-decoration:none;vertical-align:bottom;color:#5a5a5a}.ngx-datatable.ngxa .datatable-footer .datatable-pager .datatable-icon-left,.ngx-datatable.ngxa .datatable-footer .datatable-pager .datatable-icon-prev,.ngx-datatable.ngxa .datatable-footer .datatable-pager .datatable-icon-right,.ngx-datatable.ngxa .datatable-footer .datatable-pager .datatable-icon-skip{line-height:27px;padding:0 .2rem}.ngx-datatable.ngxa .datatable-summary-row .datatable-body-row .datatable-body-cell{font-weight:700}"]
            }] }
];
/** @nocollapse */
NgxaCerDatatableComponent.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] },
    { type: LayoutService },
    { type: Injector }
];
NgxaCerDatatableComponent.propDecorators = {
    rows: [{ type: Input }],
    columns: [{ type: Input }],
    filters: [{ type: Input }],
    selected: [{ type: Input }],
    limit: [{ type: Input }],
    count: [{ type: Input }],
    offset: [{ type: Input }],
    externalPaging: [{ type: Input }],
    externalSorting: [{ type: Input }],
    loadingIndicator: [{ type: Input }],
    scrollbarH: [{ type: Input }],
    scrollbarV: [{ type: Input }],
    reorderable: [{ type: Input }],
    sortType: [{ type: Input }],
    messages: [{ type: Input }],
    selectionType: [{ type: Input }],
    columnMode: [{ type: Input }],
    headerHeight: [{ type: Input }],
    footerHeight: [{ type: Input }],
    rowHeight: [{ type: Input }],
    column: [{ type: Input }],
    footer: [{ type: Input }],
    api: [{ type: Input }],
    startWithOpenData: [{ type: Input }],
    filterEvent: [{ type: Input }],
    formGroupFilter: [{ type: Input }],
    buttonCell: [{ type: Output }],
    select: [{ type: Output }],
    activate: [{ type: Output }],
    datatable: [{ type: ViewChild, args: ['datatable', { static: false },] }],
    filterFn: [{ type: Input }]
};
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
const components = [
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
const modules = [
    FormsModule,
    ReactiveFormsModule,
    NbCardModule,
    NbAlertModule,
    NbIconModule,
    NbDialogModule.forChild(),
    NbWindowModule.forChild(),
    NgxaThemeModule,
    NgxaInputModule,
    NgxaCheckBoxModule,
    NgxaButtonModule,
    NgxaBaseModule,
    NgxaSelectModule,
    NgxaMapsModule,
    NgxDatatableModule,
    NgxaTableModule,
    NgxaLabelModule,
    NgxaCerDashboardRoutingModule,
];
/** @type {?} */
const providers = [];
/** @type {?} */
const entryComponents = [
    NgxaCerMonitoringPreviewComponent,
    NgxaFakeReportPromptComponent,
];
class NgxaCerDashboardModule {
}
NgxaCerDashboardModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    ...modules,
                ],
                declarations: [
                    ...components,
                ],
                providers: [
                    ...providers,
                ],
                entryComponents: [
                    ...entryComponents,
                ],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxaCerFakeModule {
}
NgxaCerFakeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [],
                imports: [],
                exports: [],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxaCerReportsComponent {
}
NgxaCerReportsComponent.decorators = [
    { type: Component, args: [{
                selector: 'xa-cer-report',
                template: `
    <router-outlet></router-outlet>
  `
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ReportsPanicService {
    /**
     * @return {?}
     */
    getReports() {
        return this.reports;
    }
    /**
     * @param {?} reports
     * @return {?}
     */
    setReports(reports) {
        this.reports = reports;
    }
}
ReportsPanicService.decorators = [
    { type: Injectable }
];
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
class NgxaReportsEmergencyListPageComponent extends BaseFilterComponent {
    /**
     * @param {?} injector
     * @param {?} router
     * @param {?} reportService
     */
    constructor(injector, router, reportService) {
        super(injector, {
            'fullname': [],
            'phoneNumber': [],
            'latestFormattedAddress': [],
        });
        this.injector = injector;
        this.router = router;
        this.reportService = reportService;
        this.selectionType = SelectionType.single;
        this.columns = [
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
        this.expanded = false;
        this.apiPath = this.api['panic']['datatable-panic-reports'];
        this.filters = [
            { controlName: 'fullname', type: 'input' },
            { controlName: 'phoneNumber', type: 'input' },
            { controlName: 'latestFormattedAddress', type: 'input' }
        ];
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @return {?}
     */
    ngOnDestroy() { }
    /**
     * @param {?} data
     * @return {?}
     */
    onViewDetail(data) {
        this.reportService.setReports(data);
        this.router.navigate(['/app/reports/emergency/detail']);
    }
}
NgxaReportsEmergencyListPageComponent.decorators = [
    { type: Component, args: [{
                selector: 'xa-reports-emergency-list-page',
                template: "<xa-page-outlet [header]=\"'Emergency Reports'\">\n  <div class=\"row\">\n    <div class=\"col-md-12 col-lg-12 col-xxxl-6\">\n      <xa-datatable\n        [api]=\"apiPath\"\n        [formGroupFilter]=\"formGroupFilter\"\n        [filters]=\"filters\"\n        [add]=\"false\"\n        [delete]=\"false\"\n        [selectionType]=\"selectionType\"\n        (onFilter)=\"doFilterAdvanced($event)\"\n        (onEdit)=\"onViewDetail($event)\"\n        [filterFn]=\"keyword\"\n        [columns]=\"columns\">\n        <form [formGroup]=\"formGroupFilter\">\n          <xa-input-text\n            [name]=\"'fullname'\"\n            [label]=\"'Name'\"\n            formControlName=\"fullname\">\n          </xa-input-text>\n          <xa-input-text\n            [name]=\"'phoneNumber'\"\n            [label]=\"'Phone Number'\"\n            formControlName=\"phoneNumber\">\n          </xa-input-text>\n          <xa-input-text\n            [name]=\"'latestFormattedAddress'\"\n            [label]=\"'Address'\"\n            formControlName=\"latestFormattedAddress\">\n          </xa-input-text>\n        </form>\n      </xa-datatable>\n    </div>\n  </div>\n</xa-page-outlet>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
NgxaReportsEmergencyListPageComponent.ctorParameters = () => [
    { type: Injector },
    { type: Router },
    { type: ReportsPanicService }
];
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
class NgxaReportsPreviewComponent {
    /**
     * @param {?} apiPath
     * @param {?} httpBaseService
     * @param {?} sanitizer
     */
    constructor(apiPath, httpBaseService, sanitizer) {
        this.apiPath = apiPath;
        this.httpBaseService = httpBaseService;
        this.sanitizer = sanitizer;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.getEvidence(this.checksum, this.user, this.fileType);
    }
    /**
     * @private
     * @param {?} checksum
     * @param {?} user
     * @param {?} fileType
     * @return {?}
     */
    getEvidence(checksum, user, fileType) {
        this.httpBaseService.HTTP_AUTH(this.apiPath['file']['evidence'], null, null, null, [checksum, user], 'arraybuffer')
            .pipe(tap((/**
         * @param {?} response
         * @return {?}
         */
        (response) => {
            /** @type {?} */
            const fileBlob = new Blob([response], {
                type: fileType,
            });
            /** @type {?} */
            const reader = new FileReader();
            reader.readAsDataURL(fileBlob);
            reader.onloadend = (/**
             * @return {?}
             */
            () => {
                this.url = this.sanitizer.bypassSecurityTrustUrl(reader.result.toString());
            });
        }))).subscribe();
    }
}
NgxaReportsPreviewComponent.decorators = [
    { type: Component, args: [{
                selector: 'xa-reports-preview',
                template: "<nb-card *ngIf=\"url && fileType.includes('image')\">\n    <nb-card-body>\n        <img [src]=\"url\" height=\"500\">\n    </nb-card-body>\n</nb-card>\n<video *ngIf=\"url && fileType.includes('video')\" [src]=\"url\" height=\"500\" controls></video>\n<audio *ngIf=\"url && fileType.includes('audio')\" controls>\n    <source [src]=\"url\" [type]=\"fileType\">\n</audio>",
                styles: [""]
            }] }
];
/** @nocollapse */
NgxaReportsPreviewComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [API,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [HTTP_SERVICE,] }] },
    { type: DomSanitizer }
];
NgxaReportsPreviewComponent.propDecorators = {
    url: [{ type: Input }],
    checksum: [{ type: Input }],
    user: [{ type: Input }],
    fileType: [{ type: Input }]
};
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
class NgxaFakePromptComponent {
    /**
     * @param {?} ref
     */
    constructor(ref) {
        this.ref = ref;
        this.disabled = false;
    }
    /**
     * @param {?} password
     * @return {?}
     */
    submit(password) {
        this.disabled = true;
        this.ref.close(password);
    }
}
NgxaFakePromptComponent.decorators = [
    { type: Component, args: [{
                selector: 'xa-fake-prompt',
                template: "<nb-card>\n  <nb-card-header>\n    <h6 class=\"text-danger deactivated-label\">\n        {{ 'Fake Report' | translate }}\n    </h6>\n  </nb-card-header>\n  <nb-card-body>\n    <p>\n      {{ 'message.fake-form' | translate }}\n    </p>\n    <p>\n      {{ 'message.input-password' | translate }}\n    </p>\n    <input\n      [(ngModel)]=\"password\"\n      type=\"password\"\n      nbInput\n      class=\"fake-password\"\n      placeholder=\"Password\">\n  </nb-card-body>\n  <nb-card-footer>\n    <button\n      type=\"submit\"\n      status=\"danger\"\n      size=\"large\"\n      class=\"fake-button\"\n      [disabled]=\"!password || disabled\"\n      (click)=\"submit(password)\"\n      nbButton>\n      {{ 'Fake Report' | translate }}\n    </button>\n  </nb-card-footer>\n</nb-card>\n",
                styles: ["/*!\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */.nb-theme-default :host input.fake-password{max-width:unset;width:100%}.nb-theme-default :host .cancel{margin-right:1rem}.nb-theme-default :host button.fake-button{width:100%}.nb-theme-dark :host input.fake-password{max-width:unset;width:100%}.nb-theme-dark :host .cancel{margin-right:1rem}.nb-theme-dark :host button.fake-button{width:100%}.nb-theme-cosmic :host input.fake-password{max-width:unset;width:100%}.nb-theme-cosmic :host .cancel{margin-right:1rem}.nb-theme-cosmic :host button.fake-button{width:100%}.nb-theme-corporate :host input.fake-password{max-width:unset;width:100%}.nb-theme-corporate :host .cancel{margin-right:1rem}.nb-theme-corporate :host button.fake-button{width:100%}@media (max-width:767.98px){.nb-theme-default :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-default :host button.fake-button{font-size:.6rem}.nb-theme-dark :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-dark :host button.fake-button{font-size:.6rem}.nb-theme-cosmic :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-cosmic :host button.fake-button{font-size:.6rem}.nb-theme-corporate :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-corporate :host button.fake-button{font-size:.6rem}}"]
            }] }
];
/** @nocollapse */
NgxaFakePromptComponent.ctorParameters = () => [
    { type: NbDialogRef }
];
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
class NgxaReportsEmergencyDetailComponent extends BaseFilterComponent {
    /**
     * @param {?} injector
     * @param {?} router
     * @param {?} route
     * @param {?} dialogService
     * @param {?} reportService
     */
    constructor(injector, router, route, dialogService, reportService) {
        super(injector, null, {
            'status': [],
            'emergencyCategory': [],
        });
        this.injector = injector;
        this.router = router;
        this.route = route;
        this.dialogService = dialogService;
        this.reportService = reportService;
        this.profile = {};
        this.imageDefault = `${document.getElementsByTagName('base')[0].href}/assets/images/avatars/default.png`;
        this.columns = [
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
        this.sort = {
            'desc': ['createdDate'],
        };
        this.enc = injector.get(EncryptionService);
        this.oauthResource = injector.get(OAUTH_INFO);
        this.apiSelectParameter = this.api['master']['select-parameter'];
        this.dataReport = this.reportService.getReports();
        this.keyword = {
            panicCode: this.dataReport['panicCode'],
        };
        this.username = this.dataReport['username'],
            this.apiPath = this.api['panic']['datatable-panic-detail'];
    }
    /**
     * @return {?}
     */
    ngOnDestroy() { }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.onInit('security', 'get-profile-personal');
        this.paramSelectStatus = [{
                key: 'parameterGroupCode',
                value: 'STATUS_EMERGENCY',
            }];
        this.paramSelectEmergency = [{
                key: 'parameterGroupCode',
                value: 'CATEGORY_EMERGENCY',
            }];
    }
    /**
     * @param {?} serviceName
     * @param {?} apiName
     * @return {?}
     */
    onInit(serviceName, apiName) {
        this.loadingForm = true;
        /** @type {?} */
        const data = {
            username: this.username,
        };
        this.exec(serviceName, apiName, data)
            .subscribe((/**
         * @param {?} success
         * @return {?}
         */
        (success) => {
            this.loadingForm = false;
            this.profile = success;
            if (success['image']) {
                this.image = success['image'];
            }
        }), (/**
         * @param {?} error
         * @return {?}
         */
        (error) => {
            this.loadingForm = true;
            /** @type {?} */
            const err = error['error'];
            if (err) {
                this.toastr.showI18n(err.respStatusMessage[err.respStatusCode], true, null, 'danger');
            }
            else {
                this.toastr.showI18n((/** @type {?} */ (err)), true, null, 'danger');
            }
        }));
    }
    /**
     * @param {?} prop
     * @return {?}
     */
    valueSelect(prop) {
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
    }
    /**
     * @param {?} data
     * @return {?}
     */
    onPreview(data) {
        this.dialogService.open(NgxaReportsPreviewComponent, {
            context: {
                checksum: data['checksum'],
                user: this.username,
                fileType: data['fileType'],
            },
        });
    }
    /**
     * @return {?}
     */
    onFake() {
        this.dialogService.open(NgxaFakePromptComponent)
            .onClose.subscribe((/**
         * @param {?} password
         * @return {?}
         */
        (password) => {
            if (password) {
                this.disabledFake = true;
                /** @type {?} */
                const data = {
                    password: this.enc.encryptAES(this.oauthResource['aes_key'], password),
                    panicCode: this.dataReport['panicCode'],
                };
                ((/** @type {?} */ (super.onSubmit(data, 'panic', 'fake-report'))))
                    .pipe(takeUntil(this.destroy$))
                    .subscribe((/**
                 * @param {?} response
                 * @return {?}
                 */
                (response) => {
                    if (response) {
                        if (response.respStatusCode === ResponseCode.OK_SCR011.toString()) {
                            this.router.navigate(['/app/dashboard']);
                        }
                    }
                }));
            }
            else {
                this.disabledFake = false;
            }
        }));
    }
    /**
     * @return {?}
     */
    onProcess() {
        /** @type {?} */
        const data = {
            panicCode: this.dataReport['panicCode'],
            status: this.valueSelect('status'),
            emergencyCategory: this.valueSelect('emergencyCategory'),
        };
        ((/** @type {?} */ (super.onSubmit(data, 'panic', 'process-report'))))
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @param {?} response
         * @return {?}
         */
        (response) => {
            if (response) {
                if (response.respStatusCode === ResponseCode.OK_UPDATED.toString()) {
                    this.router.navigate(['/app/dashboard']);
                }
            }
        }));
    }
}
NgxaReportsEmergencyDetailComponent.decorators = [
    { type: Component, args: [{
                selector: 'xa-reports-emergency-detail.component',
                template: "<xa-page-outlet [url]=\"'/app/reports/emergency'\" [header]=\"'Emergency Report Detail'\">\n    <div class=\"row\">\n        <div class=\"col-md-4 col-lg-4 col-xxxl-6\">\n            <div class=\"photo-profile\"\n            [ngStyle]=\"{ \n                'background-image': 'url(' + (image? image: imageDefault) + ')'\n            }\">\n            </div>\n        </div>\n        <div class=\"col-md-8 col-lg-8 col-xxxl-6\">\n            <div class=\"split-row\">\n                <xa-label-text\n                    [label]=\"'Name'\"\n                    [colLabel]=\"4\"\n                    [colContent]=\"8\"\n                    [content]=\"profile.name\"\n                    [skeleton]=\"loadingForm\">\n                </xa-label-text>\n                <xa-label-text\n                    [label]=\"'ID Number'\"\n                    [colLabel]=\"4\"\n                    [colContent]=\"8\"\n                    [content]=\"profile.idNumber\"\n                    [skeleton]=\"loadingForm\">\n                </xa-label-text>\n                <xa-label-text\n                    [label]=\"'Gender'\"\n                    [colLabel]=\"4\"\n                    [colContent]=\"8\"\n                    [content]=\"profile.gender\"\n                    [skeleton]=\"loadingForm\">\n                </xa-label-text>\n                <xa-label-text\n                    [label]=\"'Place / Date of Birth'\"\n                    [colLabel]=\"4\"\n                    [colContent]=\"8\"\n                    [content]=\"profile.placeOfBirth ? (profile.placeOfBirth + ', ' + profile.dateOfBirth) : ''\"\n                    [skeleton]=\"loadingForm\">\n                </xa-label-text>\n            </div>\n            <div class=\"split-row\">\n                <xa-label-text\n                    [label]=\"'Username'\"\n                    [colLabel]=\"4\"\n                    [colContent]=\"8\"\n                    [content]=\"profile.username\"\n                    [skeleton]=\"loadingForm\">\n                </xa-label-text>\n                <xa-label-text\n                    [label]=\"'Email'\"\n                    [colLabel]=\"4\"\n                    [colContent]=\"8\"\n                    [content]=\"profile.email\"\n                    [skeleton]=\"loadingForm\">\n                </xa-label-text>\n                <xa-label-text\n                    [label]=\"'Phone Number'\"\n                    [colLabel]=\"4\"\n                    [colContent]=\"8\"\n                    [content]=\"profile.phoneNumber\"\n                    [skeleton]=\"loadingForm\">\n                </xa-label-text>\n                <xa-label-text\n                    [label]=\"'Address'\"\n                    [colLabel]=\"4\"\n                    [colContent]=\"8\"\n                    [content]=\"profile.address\"\n                    [skeleton]=\"loadingForm\">\n                </xa-label-text>\n                <xa-label-text\n                    [label]=\"'Country'\"\n                    [colLabel]=\"4\"\n                    [colContent]=\"8\"\n                    [content]=\"profile.country\"\n                    [skeleton]=\"loadingForm\">\n                </xa-label-text>\n            </div>\n            <div class=\"split-row\">\n                <xa-label-text\n                    [label]=\"'Related Person'\"\n                    [colLabel]=\"4\"\n                    [colContent]=\"8\"\n                    [content]=\"profile.referenceName\"\n                    [skeleton]=\"loadingForm\">\n                </xa-label-text>\n                <xa-label-text\n                    [label]=\"'Relationship'\"\n                    [colLabel]=\"4\"\n                    [colContent]=\"8\"\n                    [content]=\"profile.relationship\"\n                    [skeleton]=\"loadingForm\">\n                </xa-label-text>\n                <xa-label-text\n                    [label]=\"'Address'\"\n                    [colLabel]=\"4\"\n                    [colContent]=\"8\"\n                    [content]=\"profile.referenceAddress\"\n                    [skeleton]=\"loadingForm\">\n                </xa-label-text>\n                <xa-label-text\n                    [label]=\"'Phone Number'\"\n                    [colLabel]=\"4\"\n                    [colContent]=\"8\"\n                    [content]=\"profile.referencePhoneNumber\"\n                    [skeleton]=\"loadingForm\">\n                </xa-label-text>\n            </div>\n            <form [formGroup]=\"formGroup\">\n                <xa-select\n                    [name]=\"'status'\"\n                    [label]=\"'Status'\"\n                    [colLabel]=\"4\"\n                    [colInput]=\"8\"\n                    [required]=\"true\"\n                    [api]=\"apiSelectParameter\"\n                    [queryParam]=\"paramSelectStatus\"\n                    [searchable]=\"false\"\n                    [skeleton]=\"loadingForm\"\n                    formControlName=\"status\">\n                </xa-select>\n                <xa-select\n                    [name]=\"'emergency'\"\n                    [label]=\"'Emergency'\"\n                    [colLabel]=\"4\"\n                    [colInput]=\"8\"\n                    [required]=\"true\"\n                    [api]=\"apiSelectParameter\"\n                    [queryParam]=\"paramSelectEmergency\"\n                    [searchable]=\"false\"\n                    [skeleton]=\"loadingForm\"\n                    formControlName=\"emergencyCategory\">\n                </xa-select>\n                <div class=\"form-group row\">\n                    <div class=\"offset-sm-4 col-sm-8\">\n                        <button\n                            type=\"reset\"\n                            status=\"danger\"\n                            (click)=\"onFake()\"\n                            class=\"reset-left\"\n                            nbButton>\n                            {{ 'Fake Report' | translate}}\n                        </button>\n                        <button\n                            type=\"submit\"\n                            status=\"primary\"\n                            (click)=\"onProcess()\"\n                            [disabled]=\"formGroup.invalid || formGroup.pristine || disabled\"\n                            class=\"submit-right\"\n                            nbButton>\n                            {{ 'Process' | translate}}\n                        </button>\n                    </div>\n                </div>\n            </form>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-md-12 col-lg-12 col-xxxl-6\">\n            <xa-datatable\n                [api]=\"apiPath\"\n                [filters]=\"filters\"\n                (onButtonCell)=\"onPreview($event)\"\n                [filterFn]=\"keyword\"\n                [selectionType]=\"null\"\n                [add]=\"false\"\n                [edit]=\"false\"\n                [delete]=\"false\"\n                [sort]=\"sort\"\n                [columns]=\"columns\">\n            </xa-datatable>\n        </div>\n    </div>\n</xa-page-outlet>  ",
                styles: [".nb-theme-default :host .split-row{border-bottom:1px solid #edf1f7;margin-bottom:1rem}.nb-theme-default :host .photo-profile{height:225px;width:225px;background-size:cover;margin:20px auto}.nb-theme-default :host .reset-left{margin-right:.25rem}.nb-theme-default :host .submit-right{margin-left:.25rem}.nb-theme-dark :host .split-row{border-bottom:1px solid #151a30;margin-bottom:1rem}.nb-theme-dark :host .photo-profile{height:225px;width:225px;background-size:cover;margin:20px auto}.nb-theme-dark :host .reset-left{margin-right:.25rem}.nb-theme-dark :host .submit-right{margin-left:.25rem}.nb-theme-cosmic :host .split-row{border-bottom:1px solid #1b1b38;margin-bottom:1rem}.nb-theme-cosmic :host .photo-profile{height:225px;width:225px;background-size:cover;margin:20px auto}.nb-theme-cosmic :host .reset-left{margin-right:.25rem}.nb-theme-cosmic :host .submit-right{margin-left:.25rem}.nb-theme-corporate :host .split-row{border-bottom:1px solid #edf1f7;margin-bottom:1rem}.nb-theme-corporate :host .photo-profile{height:225px;width:225px;background-size:cover;margin:20px auto}.nb-theme-corporate :host .reset-left{margin-right:.25rem}.nb-theme-corporate :host .submit-right{margin-left:.25rem}"]
            }] }
];
/** @nocollapse */
NgxaReportsEmergencyDetailComponent.ctorParameters = () => [
    { type: Injector },
    { type: Router },
    { type: ActivatedRoute },
    { type: NbDialogService },
    { type: ReportsPanicService }
];
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
class NgxaReportsFakeListPageComponent extends BaseFilterComponent {
    /**
     * @param {?} injector
     * @param {?} router
     * @param {?} reportService
     */
    constructor(injector, router, reportService) {
        super(injector, {
            'fullname': [],
            'phoneNumber': [],
            'latestFormattedAddress': [],
        });
        this.injector = injector;
        this.router = router;
        this.reportService = reportService;
        this.selectionType = SelectionType.single;
        this.columns = [
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
        this.expanded = false;
        this.apiPath = this.api['panic']['datatable-fake-reports'];
        this.filters = [
            { controlName: 'fullname', type: 'input' },
            { controlName: 'phoneNumber', type: 'input' },
            { controlName: 'latestFormattedAddress', type: 'input' }
        ];
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @return {?}
     */
    ngOnDestroy() { }
    /**
     * @param {?} data
     * @return {?}
     */
    onViewDetail(data) {
        this.reportService.setReports(data);
        this.router.navigate(['/app/reports/fake/detail']);
    }
}
NgxaReportsFakeListPageComponent.decorators = [
    { type: Component, args: [{
                selector: 'xa-reports-fake-list-page',
                template: "<xa-page-outlet [header]=\"'Fake Reports'\">\n  <div class=\"row\">\n    <div class=\"col-md-12 col-lg-12 col-xxxl-6\">\n      <xa-datatable\n        [api]=\"apiPath\"\n        [formGroupFilter]=\"formGroupFilter\"\n        [filters]=\"filters\"\n        [add]=\"false\"\n        [delete]=\"false\"\n        [selectionType]=\"selectionType\"\n        (onFilter)=\"doFilterAdvanced($event)\"\n        [filterFn]=\"keyword\"\n        [columns]=\"columns\">\n        <form [formGroup]=\"formGroupFilter\">\n          <xa-input-text\n            [name]=\"'fullname'\"\n            [label]=\"'Name'\"\n            formControlName=\"fullname\">\n          </xa-input-text>\n          <xa-input-text\n            [name]=\"'phoneNumber'\"\n            [label]=\"'Phone Number'\"\n            formControlName=\"phoneNumber\">\n          </xa-input-text>\n          <xa-input-text\n            [name]=\"'latestFormattedAddress'\"\n            [label]=\"'Address'\"\n            formControlName=\"latestFormattedAddress\">\n          </xa-input-text>\n        </form>\n      </xa-datatable>\n    </div>\n  </div>\n</xa-page-outlet>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
NgxaReportsFakeListPageComponent.ctorParameters = () => [
    { type: Injector },
    { type: Router },
    { type: ReportsPanicService }
];
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
const ɵ0$1 = {
    code: '#EMERGENCY-REPORTS-PAGE',
}, ɵ1$1 = {
    code: '#EMERGENCY-REPORTS-PAGE',
}, ɵ2 = {
    code: '#FAKE-REPORTS-PAGE',
};
/** @type {?} */
const routes$1 = [{
        path: '',
        component: NgxaCerReportsComponent,
        canActivateChild: [AuthGuardChildService],
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
class NgxaCerReportsRoutingModule {
}
NgxaCerReportsRoutingModule.decorators = [
    { type: NgModule, args: [{
                imports: [RouterModule.forChild(routes$1)],
                exports: [RouterModule],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const components$1 = [
    NgxaCerReportsComponent,
    NgxaReportsEmergencyListPageComponent,
    NgxaReportsEmergencyDetailComponent,
    NgxaFakePromptComponent,
    NgxaReportsPreviewComponent,
    NgxaReportsFakeListPageComponent,
];
/** @type {?} */
const modules$1 = [
    FormsModule,
    ReactiveFormsModule,
    NbCardModule,
    NbAlertModule,
    NbIconModule,
    NbDialogModule.forChild(),
    NbWindowModule.forChild(),
    NgxaThemeModule,
    NgxaInputModule,
    NgxaCheckBoxModule,
    NgxaButtonModule,
    NgxaBaseModule,
    NgxaSelectModule,
    NgxDatatableModule,
    NgxaTableModule,
    NgxaLabelModule,
    NgxaCerReportsRoutingModule,
];
/** @type {?} */
const providers$1 = [
    ReportsPanicService,
];
/** @type {?} */
const entry_components = [
    NgxaFakePromptComponent,
    NgxaReportsPreviewComponent,
];
class NgxaCerReportsModule {
}
NgxaCerReportsModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    ...modules$1,
                ],
                declarations: [
                    ...components$1,
                ],
                providers: [
                    ...providers$1,
                ],
                entryComponents: [
                    ...entry_components,
                ],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxaStatisticsComponent {
}
NgxaStatisticsComponent.decorators = [
    { type: Component, args: [{
                selector: 'xa-cer-statistics',
                template: `
    <router-outlet></router-outlet>
  `
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxaCerStatisticsAreaPageComponent {
    /**
     * @param {?} injector
     * @param {?} theme
     */
    constructor(injector, theme) {
        this.theme = theme;
        this.options = {};
        this.destroy$ = new Subject();
        this.http = injector.get(HTTP_SERVICE);
        this.api = injector.get(API);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const year = new Date().getFullYear();
        /** @type {?} */
        const tempData = [];
        for (let i = 3; i >= 0; i--) {
            tempData.push(year - i);
        }
        this.dataSelect = tempData;
        this.selected = year;
        this.getStatistics();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        this.themeSubscription.unsubscribe();
    }
    /**
     * @private
     * @return {?}
     */
    getStatistics() {
        this.http.HTTP_AUTH(this.api['panic']['statistics-area'], null, null, null, [this.selected]).subscribe((/**
         * @param {?} values
         * @return {?}
         */
        (values) => {
            this.axis = values['axis']['data'];
            this.legend = values['legend']['data'];
            this.series = [];
            values['series'].forEach((/**
             * @param {?} series
             * @return {?}
             */
            (series) => {
                /** @type {?} */
                const dataSeries = [];
                values['axis']['data'].forEach((/**
                 * @param {?} axis
                 * @return {?}
                 */
                (axis) => {
                    dataSeries.push(series['data'][axis]);
                }));
                this.series.push({
                    name: series['name'],
                    type: 'bar',
                    barWidth: '60%',
                    data: dataSeries,
                });
            }));
            this.buildChart();
        }));
    }
    /**
     * @private
     * @return {?}
     */
    buildChart() {
        this.themeSubscription = this.theme.getJsTheme().subscribe((/**
         * @param {?} config
         * @return {?}
         */
        config => {
            /** @type {?} */
            const colors = config.variables;
            /** @type {?} */
            const echarts = config.variables.echarts;
            this.options = {
                backgroundColor: echarts.bg,
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow',
                    },
                },
                legend: {
                    data: this.legend,
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
                        data: this.axis,
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
                series: this.series,
            };
        }));
    }
    /**
     * @param {?} data
     * @return {?}
     */
    onSelectChange(data) {
        this.selected = data;
        this.getStatistics();
    }
    /**
     * @private
     * @return {?}
     */
    random() {
        return Math.round(Math.random() * 100);
    }
}
NgxaCerStatisticsAreaPageComponent.decorators = [
    { type: Component, args: [{
                selector: 'xa-cer-statistics-area',
                template: "<xa-page-outlet\n    [header]=\"'Statistics of Emergency Report by Area'\"\n    [dataSelect]=\"dataSelect\"\n    [selected]=\"selected\"\n    (selectChange)=\"onSelectChange($event)\">\n    <xa-chart [options]=\"options\"></xa-chart>\n</xa-page-outlet>",
                styles: [".nb-theme-default :host ::ng-deep nb-card-body{overflow:unset}.nb-theme-dark :host ::ng-deep nb-card-body{overflow:unset}.nb-theme-cosmic :host ::ng-deep nb-card-body{overflow:unset}.nb-theme-corporate :host ::ng-deep nb-card-body{overflow:unset}"]
            }] }
];
/** @nocollapse */
NgxaCerStatisticsAreaPageComponent.ctorParameters = () => [
    { type: Injector },
    { type: NbThemeService }
];
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
class NgxaCerStatisticsGenderPageComponent {
    /**
     * @param {?} injector
     * @param {?} theme
     */
    constructor(injector, theme) {
        this.theme = theme;
        this.options = {};
        this.destroy$ = new Subject();
        this.http = injector.get(HTTP_SERVICE);
        this.api = injector.get(API);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const year = new Date().getFullYear();
        /** @type {?} */
        const tempData = [];
        for (let i = 3; i >= 0; i--) {
            tempData.push(year - i);
        }
        this.dataSelect = tempData;
        this.selected = year;
        this.getStatistics();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        this.themeSubscription.unsubscribe();
    }
    /**
     * @private
     * @return {?}
     */
    getStatistics() {
        this.buildChart();
    }
    /**
     * @private
     * @return {?}
     */
    buildChart() {
        this.themeSubscription = this.theme.getJsTheme().subscribe((/**
         * @param {?} config
         * @return {?}
         */
        config => {
            /** @type {?} */
            const colors = config.variables;
            this.echarts = config.variables.echarts;
            this.http.HTTP_AUTH(this.api['panic']['statistics-gender'], null, null, null, [this.selected]).subscribe((/**
             * @param {?} values
             * @return {?}
             */
            (values) => {
                this.legend = values['legend']['data'];
                this.series = [];
                console.log(values['series']);
                values['series'].forEach((/**
                 * @param {?} series
                 * @return {?}
                 */
                (series) => {
                    /** @type {?} */
                    const dataSeries = [];
                    values['axis']['data'].forEach((/**
                     * @param {?} axis
                     * @return {?}
                     */
                    (axis) => {
                        dataSeries.push({
                            value: series['data'][axis],
                            name: axis,
                        });
                    }));
                    this.series.push({
                        name: series['name'],
                        type: 'pie',
                        radius: '80%',
                        center: ['50%', '50%'],
                        data: dataSeries,
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: this.echarts.itemHoverShadowColor,
                            },
                        },
                        label: {
                            normal: {
                                textStyle: {
                                    color: this.echarts.textColor,
                                },
                            },
                        },
                        labelLine: {
                            normal: {
                                lineStyle: {
                                    color: this.echarts.axisLineColor,
                                },
                            },
                        },
                    });
                    this.options = {
                        backgroundColor: this.echarts.bg,
                        tooltip: {
                            trigger: 'item',
                            formatter: '{a} <br/>{b} : {c} ({d}%)',
                        },
                        legend: {
                            orient: 'vertical',
                            left: 'left',
                            data: this.legend,
                            textStyle: {
                                color: this.echarts.textColor,
                            },
                        },
                        calculable: true,
                        series: this.series,
                    };
                }));
            }));
        }));
    }
    /**
     * @param {?} data
     * @return {?}
     */
    onSelectChange(data) {
        this.selected = data;
        this.getStatistics();
    }
}
NgxaCerStatisticsGenderPageComponent.decorators = [
    { type: Component, args: [{
                selector: 'xa-cer-statistics-gender',
                template: "<xa-page-outlet\n    [header]=\"'Statistics of Emergency Report by Gender'\"\n    [dataSelect]=\"dataSelect\"\n    [selected]=\"selected\"\n    (selectChange)=\"onSelectChange($event)\">\n    <xa-chart [options]=\"options\"></xa-chart>\n</xa-page-outlet>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
NgxaCerStatisticsGenderPageComponent.ctorParameters = () => [
    { type: Injector },
    { type: NbThemeService }
];
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
class NgxaCerStatisticsPeriodePageComponent {
    /**
     * @param {?} injector
     * @param {?} theme
     */
    constructor(injector, theme) {
        this.theme = theme;
        this.options = {};
        this.destroy$ = new Subject();
        this.http = injector.get(HTTP_SERVICE);
        this.api = injector.get(API);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const year = new Date().getFullYear();
        /** @type {?} */
        const tempData = [];
        for (let i = 3; i >= 0; i--) {
            tempData.push(year - i);
        }
        this.dataSelect = tempData;
        this.selected = year;
        this.getStatistics();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        this.themeSubscription.unsubscribe();
    }
    /**
     * @private
     * @return {?}
     */
    getStatistics() {
        this.http.HTTP_AUTH(this.api['panic']['statistics-periode'], null, null, null, [this.selected]).subscribe((/**
         * @param {?} values
         * @return {?}
         */
        (values) => {
            this.axis = values['axis']['data'];
            this.legend = values['legend']['data'];
            this.series = [];
            values['series'].forEach((/**
             * @param {?} series
             * @return {?}
             */
            (series) => {
                /** @type {?} */
                const dataSeries = [];
                values['axis']['data'].forEach((/**
                 * @param {?} axis
                 * @return {?}
                 */
                (axis) => {
                    dataSeries.push(series['data'][axis]);
                }));
                this.series.push({
                    name: series['name'],
                    type: 'line',
                    smooth: true,
                    data: dataSeries,
                });
            }));
            this.buildChart();
        }));
    }
    /**
     * @private
     * @return {?}
     */
    buildChart() {
        this.themeSubscription = this.theme.getJsTheme().subscribe((/**
         * @param {?} config
         * @return {?}
         */
        config => {
            /** @type {?} */
            const colors = config.variables;
            /** @type {?} */
            const echarts = config.variables.echarts;
            this.options = {
                backgroundColor: echarts.bg,
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                    },
                },
                legend: {
                    data: this.legend,
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
                        data: this.axis,
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
                series: this.series,
            };
        }));
    }
    /**
     * @param {?} data
     * @return {?}
     */
    onSelectChange(data) {
        this.selected = data;
        this.getStatistics();
    }
    /**
     * @private
     * @return {?}
     */
    random() {
        return Math.round(Math.random() * 100);
    }
}
NgxaCerStatisticsPeriodePageComponent.decorators = [
    { type: Component, args: [{
                selector: 'xa-cer-statistics-periode',
                template: "<xa-page-outlet\n    [header]=\"'Statistics of Emergency Report by Periode'\"\n    [dataSelect]=\"dataSelect\"\n    [selected]=\"selected\"\n    (selectChange)=\"onSelectChange($event)\">\n    <xa-chart [options]=\"options\"></xa-chart>\n</xa-page-outlet>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
NgxaCerStatisticsPeriodePageComponent.ctorParameters = () => [
    { type: Injector },
    { type: NbThemeService }
];
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
const ɵ0$2 = {
    code: '#STATISTICS-AREA-PAGE',
}, ɵ1$2 = {
    code: '#STATISTICS-GENDER-PAGE',
}, ɵ2$1 = {
    code: '#STATISTICS-PERIODE-PAGE',
};
/** @type {?} */
const routes$2 = [{
        path: '',
        component: NgxaStatisticsComponent,
        canActivateChild: [AuthGuardChildService],
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
class NgxaCerStatisticsRoutingModule {
}
NgxaCerStatisticsRoutingModule.decorators = [
    { type: NgModule, args: [{
                imports: [RouterModule.forChild(routes$2)],
                exports: [RouterModule],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const components$2 = [
    NgxaStatisticsComponent,
    NgxaCerStatisticsAreaPageComponent,
    NgxaCerStatisticsGenderPageComponent,
    NgxaCerStatisticsPeriodePageComponent,
];
/** @type {?} */
const modules$2 = [
    FormsModule,
    ReactiveFormsModule,
    NbCardModule,
    NgxaThemeModule,
    NgxaBaseModule,
    NgxaChartsModule,
    NgxaCerStatisticsRoutingModule,
];
/** @type {?} */
const providers$2 = [];
/** @type {?} */
const entryComponents$1 = [];
class NgxaCerStatisticsModule {
}
NgxaCerStatisticsModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    ...modules$2,
                ],
                declarations: [
                    ...components$2,
                ],
                providers: [
                    ...providers$2,
                ],
                entryComponents: [
                    ...entryComponents$1,
                ],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NgxaCerDashboardModule, NgxaCerFakeModule, NgxaCerModule, NgxaCerReportsModule, NgxaCerStatisticsModule, PanicIndexedDBService, PanicService, NgxaCerDashboardRoutingModule as ɵa, NgxaDashboardComponent as ɵb, NgxaCerMonitoringPageComponent as ɵc, NgxaCerMonitoringDetailComponent as ɵd, NgxaCerMonitoringInfoComponent as ɵe, NgxaCerSlideOutComponent as ɵf, NgxaCerDatatableComponent as ɵg, NgxaCerMonitoringPreviewComponent as ɵh, NgxaFakeReportPromptComponent as ɵi, NgxaCerReportsRoutingModule as ɵj, NgxaCerReportsComponent as ɵk, NgxaReportsEmergencyListPageComponent as ɵl, ReportsPanicService as ɵm, NgxaReportsEmergencyDetailComponent as ɵn, NgxaReportsFakeListPageComponent as ɵo, NgxaFakePromptComponent as ɵp, NgxaReportsPreviewComponent as ɵq, NgxaCerStatisticsRoutingModule as ɵr, NgxaStatisticsComponent as ɵs, NgxaCerStatisticsAreaPageComponent as ɵt, NgxaCerStatisticsGenderPageComponent as ɵu, NgxaCerStatisticsPeriodePageComponent as ɵv };
//# sourceMappingURL=xaphira-ngxa-cer.js.map
