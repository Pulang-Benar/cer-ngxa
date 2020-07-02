/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Inject, Injector } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { NbDialogService } from '@nebular/theme';
import { EncryptionService } from '@xaphira/utils';
import { BaseFilterComponent } from '@xaphira/ngxa-common';
import { PANIC, ResponseCode, OAUTH_INFO, } from '@xaphira/shared';
import { NgxaCerMonitoringPreviewComponent } from '../preview/ngxa-cer-monitoring-preview.component';
import { NgxaFakeReportPromptComponent } from './prompt/ngxa-fake-report-prompt.component';
export class NgxaCerMonitoringDetailComponent extends BaseFilterComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4YS1jZXItbW9uaXRvcmluZy1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHhhcGhpcmEvbmd4YS1jZXIvIiwic291cmNlcyI6WyJsaWIvZGFzaGJvYXJkL21vbml0b3JpbmcvZGV0YWlsL25neGEtY2VyLW1vbml0b3JpbmctZGV0YWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQXFCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBR3pELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFFLG1CQUFtQixFQUEyQyxNQUFNLHNCQUFzQixDQUFDO0FBQ3BHLE9BQU8sRUFDTCxLQUFLLEVBS0wsWUFBWSxFQUNaLFVBQVUsR0FDWCxNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ3JHLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBTzNGLE1BQU0sT0FBTyxnQ0FBaUMsU0FBUSxtQkFBd0I7Ozs7Ozs7O0lBaUM1RSxZQUFtQixRQUFrQixFQUFVLE1BQWMsRUFDbkQsS0FBcUIsRUFBeUIsWUFBaUMsRUFDL0UsYUFBOEI7UUFDdEMsS0FBSyxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQ2xCO1lBQ0UsUUFBUSxFQUFFLEVBQUU7WUFDWixtQkFBbUIsRUFBRSxFQUFFO1NBQ3hCLENBQUMsQ0FBQztRQVBZLGFBQVEsR0FBUixRQUFRLENBQVU7UUFBVSxXQUFNLEdBQU4s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QWlCLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQztTQUN6RDtRQUNELENBQUMsbUJBQUEsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLGdCQUFnQixDQUFDLEVBQStCLENBQUM7YUFDN0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDOUIsU0FBUzs7OztRQUFDLENBQUMsUUFBeUIsRUFBRSxFQUFFO1lBQ3ZDLElBQUksUUFBUSxFQUFFO2dCQUNaLElBQUksUUFBUSxDQUFDLGNBQWMsS0FBSyxZQUFZLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxFQUFFO29CQUNsRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztpQkFDMUM7YUFDRjtRQUNILENBQUMsRUFBQyxDQUFDO0lBRVAsQ0FBQzs7O1lBcktGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQyxzK05BQTBEOzthQUUzRDs7OztZQXhCOEMsUUFBUTtZQUM5QyxNQUFNO1lBQUUsY0FBYzs0Q0EwREssTUFBTSxTQUFDLEtBQUs7WUF0RHZDLGVBQWU7Ozs7SUFzQnRCLG1EQUF5Qjs7SUFDekIsaURBQXFCOztJQUNyQix3REFBbUg7O0lBRW5ILG1EQUE4Qjs7SUFDOUIsbURBYUU7O0lBQ0YsZ0RBRUU7O0lBQ0YsOERBQXlDOztJQUN6Qyw2REFBNkM7O0lBQzdDLGdFQUFnRDs7SUFDaEQsd0RBQTZCOzs7OztJQUM3QixxREFBMEI7Ozs7O0lBQzFCLG9EQUF5Qjs7Ozs7SUFDekIseURBQTZDOzs7OztJQUM3QywrQ0FBK0I7O0lBRW5CLG9EQUF5Qjs7Ozs7SUFBRSxrREFBc0I7Ozs7O0lBQzNELGlEQUE2Qjs7Ozs7SUFBRSx3REFBd0Q7Ozs7O0lBQ3ZGLHlEQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0LCBPbkluaXQsIE9uRGVzdHJveSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgSHR0cEVycm9yUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBOYkRpYWxvZ1NlcnZpY2UgfSBmcm9tICdAbmVidWxhci90aGVtZSc7XG5pbXBvcnQgeyBFbmNyeXB0aW9uU2VydmljZSB9IGZyb20gJ0B4YXBoaXJhL3V0aWxzJztcbmltcG9ydCB7IEJhc2VGaWx0ZXJDb21wb25lbnQsIERhdGF0YWJsZUNvbHVtbiwgU29ydCwgU2VsZWN0UGFyYW1Nb2RlbCB9IGZyb20gJ0B4YXBoaXJhL25neGEtY29tbW9uJztcbmltcG9ydCB7XG4gIFBBTklDLFxuICBQYW5pY0ZhY3RvcnlTZXJ2aWNlLFxuICBIdHRwQmFzZU1vZGVsLFxuICBBcGlCYXNlUmVzcG9uc2UsXG4gIFNlY3VyaXR5UmVzb3VyY2VNb2RlbCxcbiAgUmVzcG9uc2VDb2RlLFxuICBPQVVUSF9JTkZPLFxufSBmcm9tICdAeGFwaGlyYS9zaGFyZWQnO1xuaW1wb3J0IHsgTmd4YUNlck1vbml0b3JpbmdQcmV2aWV3Q29tcG9uZW50IH0gZnJvbSAnLi4vcHJldmlldy9uZ3hhLWNlci1tb25pdG9yaW5nLXByZXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IE5neGFGYWtlUmVwb3J0UHJvbXB0Q29tcG9uZW50IH0gZnJvbSAnLi9wcm9tcHQvbmd4YS1mYWtlLXJlcG9ydC1wcm9tcHQuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAneGEtY2VyLW1vbml0b3JpbmctZGV0YWlsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL25neGEtY2VyLW1vbml0b3JpbmctZGV0YWlsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ25neGEtY2VyLW1vbml0b3JpbmctZGV0YWlsLmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIE5neGFDZXJNb25pdG9yaW5nRGV0YWlsQ29tcG9uZW50IGV4dGVuZHMgQmFzZUZpbHRlckNvbXBvbmVudDxhbnk+IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gIHB1YmxpYyBwcm9maWxlOiBhbnkgPSB7fTtcbiAgcHVibGljIGltYWdlOiBzdHJpbmc7XG4gIHB1YmxpYyBpbWFnZURlZmF1bHQ6IHN0cmluZyA9IGAke2RvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdiYXNlJylbMF0uaHJlZn0vYXNzZXRzL2ltYWdlcy9hdmF0YXJzL2RlZmF1bHQucG5nYDtcblxuICBwdWJsaWMgYXBpUGF0aDogSHR0cEJhc2VNb2RlbDtcbiAgcHVibGljIGNvbHVtbnM6IERhdGF0YWJsZUNvbHVtbltdID0gW1xuICAgIHsgbmFtZTogJ0V2aWRlbmNlJywgcHJvcDogJ2ZpbGVNZXRhZGF0YScsIHdpZHRoOiAxMDAsIGZyb3plbkxlZnQ6IHRydWUsIHR5cGU6ICdidXR0b24nLFxuICAgICAgYnV0dG9uOiAnUHJldmlldycsIGJ1dHRvblN0YXR1czogJ3dhcm5pbmcnIH0sXG4gICAgeyBuYW1lOiAnRmlsZSBTaXplJywgcHJvcDogJ2ZpbGVNZXRhZGF0YS5zaXplJywgd2lkdGg6IDEyNSwgZnJvemVuTGVmdDogdHJ1ZSwgdHlwZTogJ3ByZWZpeCcsXG4gICAgICBwcmVmaXg6ICdieXRlcycgfSxcbiAgICB7IG5hbWU6ICdMYXRpdHVkZScsIHByb3A6ICdsb2NhdGlvbi5sYXRpdHVkZScsIHdpZHRoOiAxMjUsIGZyb3plbkxlZnQ6IHRydWUgfSxcbiAgICB7IG5hbWU6ICdMb25naXR1ZGUnLCBwcm9wOiAnbG9jYXRpb24ubG9uZ2l0dWRlJywgd2lkdGg6IDEyNSwgZnJvemVuTGVmdDogdHJ1ZSB9LFxuICAgIHsgbmFtZTogJ0FkZHJlc3MnLCBwcm9wOiAnbG9jYXRpb24uZm9ybWF0dGVkQWRkcmVzcycsIHdpZHRoOiAzNTAgfSxcbiAgICB7IG5hbWU6ICdQcm92aW5jZScsIHByb3A6ICdsb2NhdGlvbi5wcm92aW5jZScsIHdpZHRoOiAxNTAgfSxcbiAgICB7IG5hbWU6ICdDaXR5JywgcHJvcDogJ2xvY2F0aW9uLmNpdHknLCB3aWR0aDogMTUwIH0sXG4gICAgeyBuYW1lOiAnRGlzdHJpY3QnLCBwcm9wOiAnbG9jYXRpb24uZGlzdHJpY3QnLCB3aWR0aDogMTUwIH0sXG4gICAgeyBuYW1lOiAnRGV2aWNlIElEJywgcHJvcDogJ2RldmljZS5kZXZpY2VJRCcsIHdpZHRoOiAxNTAgfSxcbiAgICB7IG5hbWU6ICdEZXZpY2UgTmFtZScsIHByb3A6ICdkZXZpY2UuZGV2aWNlTmFtZScsIHdpZHRoOiAxNTAgfSxcbiAgXTtcbiAgcHVibGljIHNvcnQ6IFNvcnQgPSB7XG4gICAgJ2Rlc2MnOiBbJ2NyZWF0ZWREYXRlJ10sXG4gIH07XG4gIHB1YmxpYyBhcGlTZWxlY3RQYXJhbWV0ZXI6IEh0dHBCYXNlTW9kZWw7XG4gIHB1YmxpYyBwYXJhbVNlbGVjdFN0YXR1czogU2VsZWN0UGFyYW1Nb2RlbFtdO1xuICBwdWJsaWMgcGFyYW1TZWxlY3RFbWVyZ2VuY3k6IFNlbGVjdFBhcmFtTW9kZWxbXTtcbiAgcHVibGljIGRpc2FibGVkRmFrZTogYm9vbGVhbjtcbiAgcHJpdmF0ZSBwYW5pY0NvZGU6IHN0cmluZztcbiAgcHJpdmF0ZSB1c2VybmFtZTogc3RyaW5nO1xuICBwcml2YXRlIG9hdXRoUmVzb3VyY2U6IFNlY3VyaXR5UmVzb3VyY2VNb2RlbDtcbiAgcHJpdmF0ZSBlbmM6IEVuY3J5cHRpb25TZXJ2aWNlO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBpbmplY3RvcjogSW5qZWN0b3IsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIEBJbmplY3QoUEFOSUMpIHByaXZhdGUgcGFuaWNTZXJ2aWNlOiBQYW5pY0ZhY3RvcnlTZXJ2aWNlLFxuICAgIHByaXZhdGUgZGlhbG9nU2VydmljZTogTmJEaWFsb2dTZXJ2aWNlKSB7XG4gICAgc3VwZXIoaW5qZWN0b3IsIG51bGwsXG4gICAgICB7XG4gICAgICAgICdzdGF0dXMnOiBbXSxcbiAgICAgICAgJ2VtZXJnZW5jeUNhdGVnb3J5JzogW10sXG4gICAgICB9KTtcbiAgICB0aGlzLmVuYyA9IGluamVjdG9yLmdldChFbmNyeXB0aW9uU2VydmljZSk7XG4gICAgdGhpcy5vYXV0aFJlc291cmNlID0gaW5qZWN0b3IuZ2V0KE9BVVRIX0lORk8pO1xuICAgIHRoaXMuYXBpU2VsZWN0UGFyYW1ldGVyID0gdGhpcy5hcGlbJ21hc3RlciddWydzZWxlY3QtcGFyYW1ldGVyJ107XG4gICAgaWYgKHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zWydjb2RlJ10pIHtcbiAgICAgIHRoaXMucGFuaWNDb2RlID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXNbJ2NvZGUnXTtcbiAgICAgIHRoaXMua2V5d29yZCA9IHtcbiAgICAgICAgcGFuaWNDb2RlOiB0aGlzLnBhbmljQ29kZSxcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2FwcC9kYXNoYm9hcmQnXSk7XG4gICAgfVxuICAgIHRoaXMuYXBpUGF0aCA9IHRoaXMuYXBpWydwYW5pYyddWydkYXRhdGFibGUtcGFuaWMtZGV0YWlsJ107XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5vbkluaXQoJ3NlY3VyaXR5JywgJ2dldC1wcm9maWxlLXBlcnNvbmFsJyk7XG4gICAgdGhpcy5wYXJhbVNlbGVjdFN0YXR1cyA9IFt7XG4gICAgICBrZXk6ICdwYXJhbWV0ZXJHcm91cENvZGUnLFxuICAgICAgdmFsdWU6ICdTVEFUVVNfRU1FUkdFTkNZJyxcbiAgICB9XTtcbiAgICB0aGlzLnBhcmFtU2VsZWN0RW1lcmdlbmN5ID0gW3tcbiAgICAgIGtleTogJ3BhcmFtZXRlckdyb3VwQ29kZScsXG4gICAgICB2YWx1ZTogJ0NBVEVHT1JZX0VNRVJHRU5DWScsXG4gICAgfV07XG4gIH1cblxuICBvbkluaXQoc2VydmljZU5hbWU6IHN0cmluZywgYXBpTmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5wYW5pY1NlcnZpY2UuZ2V0UGFuaWModGhpcy5wYW5pY0NvZGUpLnRoZW4oKHZhbHVlOiBhbnkpID0+IHtcbiAgICAgIHRoaXMubG9hZGluZ0Zvcm0gPSB0cnVlO1xuICAgICAgdGhpcy51c2VybmFtZSA9IHZhbHVlLnVzZXJuYW1lO1xuICAgICAgY29uc3QgZGF0YTogYW55ID0ge1xuICAgICAgICB1c2VybmFtZTogdmFsdWUudXNlcm5hbWUsXG4gICAgICB9O1xuICAgICAgdGhpcy5leGVjKHNlcnZpY2VOYW1lLCBhcGlOYW1lLCBkYXRhKVxuICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgIChzdWNjZXNzOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHRoaXMubG9hZGluZ0Zvcm0gPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMucHJvZmlsZSA9IHN1Y2Nlc3M7XG4gICAgICAgICAgICBpZiAoc3VjY2Vzc1snaW1hZ2UnXSkge1xuICAgICAgICAgICAgICB0aGlzLmltYWdlID0gc3VjY2Vzc1snaW1hZ2UnXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIChlcnJvcjogSHR0cEVycm9yUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIHRoaXMubG9hZGluZ0Zvcm0gPSB0cnVlO1xuICAgICAgICAgICAgY29uc3QgZXJyOiBBcGlCYXNlUmVzcG9uc2UgPSBlcnJvclsnZXJyb3InXTtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgdGhpcy50b2FzdHIuc2hvd0kxOG4oZXJyLnJlc3BTdGF0dXNNZXNzYWdlW2Vyci5yZXNwU3RhdHVzQ29kZV0sIHRydWUsIG51bGwsICdkYW5nZXInKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMudG9hc3RyLnNob3dJMThuKGVyciBhcyBhbnksIHRydWUsIG51bGwsICdkYW5nZXInKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgdmFsdWVTZWxlY3QocHJvcDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5mb3JtR3JvdXAuZ2V0KHByb3ApLnZhbHVlKSB7XG4gICAgICBpZiAodGhpcy5mb3JtR3JvdXAuZ2V0KHByb3ApLnZhbHVlLnZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZvcm1Hcm91cC5nZXQocHJvcCkudmFsdWUudmFsdWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5mb3JtR3JvdXAuZ2V0KHByb3ApLnZhbHVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICBvblByZXZpZXcoZGF0YTogYW55KTogdm9pZCB7XG4gICAgdGhpcy5kaWFsb2dTZXJ2aWNlLm9wZW4oTmd4YUNlck1vbml0b3JpbmdQcmV2aWV3Q29tcG9uZW50LCB7XG4gICAgICBjb250ZXh0OiB7XG4gICAgICAgIGNoZWNrc3VtOiBkYXRhWydjaGVja3N1bSddLFxuICAgICAgICB1c2VyOiB0aGlzLnVzZXJuYW1lLFxuICAgICAgICBmaWxlVHlwZTogZGF0YVsnZmlsZVR5cGUnXSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICBvbkZha2UoKTogdm9pZCB7XG4gICAgdGhpcy5kaWFsb2dTZXJ2aWNlLm9wZW4oTmd4YUZha2VSZXBvcnRQcm9tcHRDb21wb25lbnQpXG4gICAgICAub25DbG9zZS5zdWJzY3JpYmUoKHBhc3N3b3JkOiBzdHJpbmcpID0+IHtcbiAgICAgICAgaWYgKHBhc3N3b3JkKSB7XG4gICAgICAgICAgdGhpcy5kaXNhYmxlZEZha2UgPSB0cnVlO1xuICAgICAgICAgIGNvbnN0IGRhdGE6IGFueSA9IHtcbiAgICAgICAgICAgIHBhc3N3b3JkOiB0aGlzLmVuYy5lbmNyeXB0QUVTKHRoaXMub2F1dGhSZXNvdXJjZVsnYWVzX2tleSddLCBwYXNzd29yZCksXG4gICAgICAgICAgICBwYW5pY0NvZGU6IHRoaXMucGFuaWNDb2RlLFxuICAgICAgICAgIH07XG4gICAgICAgICAgKHN1cGVyLm9uU3VibWl0KGRhdGEsICdwYW5pYycsICdmYWtlLXJlcG9ydCcpIGFzIE9ic2VydmFibGU8QXBpQmFzZVJlc3BvbnNlPilcbiAgICAgICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKHJlc3BvbnNlOiBBcGlCYXNlUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnJlc3BTdGF0dXNDb2RlID09PSBSZXNwb25zZUNvZGUuT0tfU0NSMDExLnRvU3RyaW5nKCkpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2FwcC9kYXNoYm9hcmQnXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmRpc2FibGVkRmFrZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIG9uUHJvY2VzcygpOiB2b2lkIHtcbiAgICBjb25zdCBkYXRhOiBhbnkgPSB7XG4gICAgICBwYW5pY0NvZGU6IHRoaXMucGFuaWNDb2RlLFxuICAgICAgc3RhdHVzOiB0aGlzLnZhbHVlU2VsZWN0KCdzdGF0dXMnKSxcbiAgICAgIGVtZXJnZW5jeUNhdGVnb3J5OiB0aGlzLnZhbHVlU2VsZWN0KCdlbWVyZ2VuY3lDYXRlZ29yeScpLFxuICAgIH07XG4gICAgKHN1cGVyLm9uU3VibWl0KGRhdGEsICdwYW5pYycsICdwcm9jZXNzLXJlcG9ydCcpIGFzIE9ic2VydmFibGU8QXBpQmFzZVJlc3BvbnNlPilcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgIC5zdWJzY3JpYmUoKHJlc3BvbnNlOiBBcGlCYXNlUmVzcG9uc2UpID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlKSB7XG4gICAgICAgICAgaWYgKHJlc3BvbnNlLnJlc3BTdGF0dXNDb2RlID09PSBSZXNwb25zZUNvZGUuT0tfVVBEQVRFRC50b1N0cmluZygpKSB7XG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9hcHAvZGFzaGJvYXJkJ10pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgfVxuXG59XG4iXX0=