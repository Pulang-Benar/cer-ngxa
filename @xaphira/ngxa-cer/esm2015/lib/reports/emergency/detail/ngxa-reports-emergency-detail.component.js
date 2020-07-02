/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Injector } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { NbDialogService } from '@nebular/theme';
import { EncryptionService } from '@xaphira/utils';
import { BaseFilterComponent } from '@xaphira/ngxa-common';
import { ResponseCode, OAUTH_INFO, } from '@xaphira/shared';
import { NgxaReportsPreviewComponent } from './preview/ngxa-reports-preview.component';
import { NgxaFakePromptComponent } from './prompt/ngxa-fake-prompt.component';
import { ReportsPanicService } from '../../services/reports-panic.service';
export class NgxaReportsEmergencyDetailComponent extends BaseFilterComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4YS1yZXBvcnRzLWVtZXJnZW5jeS1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHhhcGhpcmEvbmd4YS1jZXIvIiwic291cmNlcyI6WyJsaWIvcmVwb3J0cy9lbWVyZ2VuY3kvZGV0YWlsL25neGEtcmVwb3J0cy1lbWVyZ2VuY3ktZGV0YWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBNkIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFHekQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsbUJBQW1CLEVBQTJDLE1BQU0sc0JBQXNCLENBQUM7QUFDcEcsT0FBTyxFQU1MLFlBQVksRUFDWixVQUFVLEdBQ1gsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUN2RixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQU8zRSxNQUFNLE9BQU8sbUNBQW9DLFNBQVEsbUJBQXdCOzs7Ozs7OztJQWlDL0UsWUFBbUIsUUFBa0IsRUFBVSxNQUFjLEVBQ25ELEtBQXFCLEVBQ3JCLGFBQThCLEVBQVUsYUFBa0M7UUFDbEYsS0FBSyxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQ2xCO1lBQ0UsUUFBUSxFQUFFLEVBQUU7WUFDWixtQkFBbUIsRUFBRSxFQUFFO1NBQ3hCLENBQUMsQ0FBQztRQVBZLGFBQVEsR0FB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QUUsRUFBRTtZQUN2QyxJQUFJLFFBQVEsRUFBRTtnQkFDWixJQUFJLFFBQVEsQ0FBQyxjQUFjLEtBQUssWUFBWSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsRUFBRTtvQkFDbEUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7aUJBQzFDO2FBQ0Y7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUVQLENBQUM7OztZQS9KRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVDQUF1QztnQkFDakQsOCtOQUE2RDs7YUFFOUQ7Ozs7WUF6QjhDLFFBQVE7WUFDOUMsTUFBTTtZQUFFLGNBQWM7WUFJdEIsZUFBZTtZQWNmLG1CQUFtQjs7OztJQVMxQixzREFBeUI7O0lBQ3pCLG9EQUFxQjs7SUFDckIsMkRBQW1IOztJQUVuSCxzREFBOEI7O0lBQzlCLHNEQWFFOztJQUNGLG1EQUVFOztJQUNGLGlFQUF5Qzs7SUFDekMsZ0VBQTZDOztJQUM3QyxtRUFBZ0Q7O0lBQ2hELDJEQUE2Qjs7Ozs7SUFDN0IsdURBQXlCOzs7OztJQUN6Qiw0REFBNkM7Ozs7O0lBQzdDLGtEQUErQjs7Ozs7SUFDL0IseURBQXdCOztJQUVaLHVEQUF5Qjs7Ozs7SUFBRSxxREFBc0I7Ozs7O0lBQzNELG9EQUE2Qjs7Ozs7SUFDN0IsNERBQXNDOzs7OztJQUFFLDREQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0LCBPbkluaXQsIE9uRGVzdHJveSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgSHR0cEVycm9yUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBOYkRpYWxvZ1NlcnZpY2UgfSBmcm9tICdAbmVidWxhci90aGVtZSc7XG5pbXBvcnQgeyBFbmNyeXB0aW9uU2VydmljZSB9IGZyb20gJ0B4YXBoaXJhL3V0aWxzJztcbmltcG9ydCB7IEJhc2VGaWx0ZXJDb21wb25lbnQsIERhdGF0YWJsZUNvbHVtbiwgU29ydCwgU2VsZWN0UGFyYW1Nb2RlbCB9IGZyb20gJ0B4YXBoaXJhL25neGEtY29tbW9uJztcbmltcG9ydCB7XG4gIFBBTklDLFxuICBQYW5pY0ZhY3RvcnlTZXJ2aWNlLFxuICBIdHRwQmFzZU1vZGVsLFxuICBBcGlCYXNlUmVzcG9uc2UsXG4gIFNlY3VyaXR5UmVzb3VyY2VNb2RlbCxcbiAgUmVzcG9uc2VDb2RlLFxuICBPQVVUSF9JTkZPLFxufSBmcm9tICdAeGFwaGlyYS9zaGFyZWQnO1xuaW1wb3J0IHsgTmd4YVJlcG9ydHNQcmV2aWV3Q29tcG9uZW50IH0gZnJvbSAnLi9wcmV2aWV3L25neGEtcmVwb3J0cy1wcmV2aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ3hhRmFrZVByb21wdENvbXBvbmVudCB9IGZyb20gJy4vcHJvbXB0L25neGEtZmFrZS1wcm9tcHQuY29tcG9uZW50JztcbmltcG9ydCB7IFJlcG9ydHNQYW5pY1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9yZXBvcnRzLXBhbmljLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd4YS1yZXBvcnRzLWVtZXJnZW5jeS1kZXRhaWwuY29tcG9uZW50JyxcbiAgdGVtcGxhdGVVcmw6ICcuL25neGEtcmVwb3J0cy1lbWVyZ2VuY3ktZGV0YWlsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ25neGEtcmVwb3J0cy1lbWVyZ2VuY3ktZGV0YWlsLmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIE5neGFSZXBvcnRzRW1lcmdlbmN5RGV0YWlsQ29tcG9uZW50IGV4dGVuZHMgQmFzZUZpbHRlckNvbXBvbmVudDxhbnk+IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gIHB1YmxpYyBwcm9maWxlOiBhbnkgPSB7fTtcbiAgcHVibGljIGltYWdlOiBzdHJpbmc7XG4gIHB1YmxpYyBpbWFnZURlZmF1bHQ6IHN0cmluZyA9IGAke2RvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdiYXNlJylbMF0uaHJlZn0vYXNzZXRzL2ltYWdlcy9hdmF0YXJzL2RlZmF1bHQucG5nYDtcblxuICBwdWJsaWMgYXBpUGF0aDogSHR0cEJhc2VNb2RlbDtcbiAgcHVibGljIGNvbHVtbnM6IERhdGF0YWJsZUNvbHVtbltdID0gW1xuICAgIHsgbmFtZTogJ0V2aWRlbmNlJywgcHJvcDogJ2ZpbGVNZXRhZGF0YScsIHdpZHRoOiAxMDAsIGZyb3plbkxlZnQ6IHRydWUsIHR5cGU6ICdidXR0b24nLFxuICAgICAgYnV0dG9uOiAnUHJldmlldycsIGJ1dHRvblN0YXR1czogJ3dhcm5pbmcnIH0sXG4gICAgeyBuYW1lOiAnRmlsZSBTaXplJywgcHJvcDogJ2ZpbGVNZXRhZGF0YS5zaXplJywgd2lkdGg6IDEyNSwgZnJvemVuTGVmdDogdHJ1ZSwgdHlwZTogJ3ByZWZpeCcsXG4gICAgICBwcmVmaXg6ICdieXRlcycgfSxcbiAgICB7IG5hbWU6ICdMYXRpdHVkZScsIHByb3A6ICdsb2NhdGlvbi5sYXRpdHVkZScsIHdpZHRoOiAxMjUsIGZyb3plbkxlZnQ6IHRydWUgfSxcbiAgICB7IG5hbWU6ICdMb25naXR1ZGUnLCBwcm9wOiAnbG9jYXRpb24ubG9uZ2l0dWRlJywgd2lkdGg6IDEyNSwgZnJvemVuTGVmdDogdHJ1ZSB9LFxuICAgIHsgbmFtZTogJ0FkZHJlc3MnLCBwcm9wOiAnbG9jYXRpb24uZm9ybWF0dGVkQWRkcmVzcycsIHdpZHRoOiAzNTAgfSxcbiAgICB7IG5hbWU6ICdQcm92aW5jZScsIHByb3A6ICdsb2NhdGlvbi5wcm92aW5jZScsIHdpZHRoOiAxNTAgfSxcbiAgICB7IG5hbWU6ICdDaXR5JywgcHJvcDogJ2xvY2F0aW9uLmNpdHknLCB3aWR0aDogMTUwIH0sXG4gICAgeyBuYW1lOiAnRGlzdHJpY3QnLCBwcm9wOiAnbG9jYXRpb24uZGlzdHJpY3QnLCB3aWR0aDogMTUwIH0sXG4gICAgeyBuYW1lOiAnRGV2aWNlIElEJywgcHJvcDogJ2RldmljZS5kZXZpY2VJRCcsIHdpZHRoOiAxNTAgfSxcbiAgICB7IG5hbWU6ICdEZXZpY2UgTmFtZScsIHByb3A6ICdkZXZpY2UuZGV2aWNlTmFtZScsIHdpZHRoOiAxNTAgfSxcbiAgXTtcbiAgcHVibGljIHNvcnQ6IFNvcnQgPSB7XG4gICAgJ2Rlc2MnOiBbJ2NyZWF0ZWREYXRlJ10sXG4gIH07XG4gIHB1YmxpYyBhcGlTZWxlY3RQYXJhbWV0ZXI6IEh0dHBCYXNlTW9kZWw7XG4gIHB1YmxpYyBwYXJhbVNlbGVjdFN0YXR1czogU2VsZWN0UGFyYW1Nb2RlbFtdO1xuICBwdWJsaWMgcGFyYW1TZWxlY3RFbWVyZ2VuY3k6IFNlbGVjdFBhcmFtTW9kZWxbXTtcbiAgcHVibGljIGRpc2FibGVkRmFrZTogYm9vbGVhbjtcbiAgcHJpdmF0ZSB1c2VybmFtZTogc3RyaW5nO1xuICBwcml2YXRlIG9hdXRoUmVzb3VyY2U6IFNlY3VyaXR5UmVzb3VyY2VNb2RlbDtcbiAgcHJpdmF0ZSBlbmM6IEVuY3J5cHRpb25TZXJ2aWNlO1xuICBwcml2YXRlIGRhdGFSZXBvcnQ6IGFueTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgaW5qZWN0b3I6IEluamVjdG9yLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHByaXZhdGUgZGlhbG9nU2VydmljZTogTmJEaWFsb2dTZXJ2aWNlLCBwcml2YXRlIHJlcG9ydFNlcnZpY2U6IFJlcG9ydHNQYW5pY1NlcnZpY2UpIHtcbiAgICBzdXBlcihpbmplY3RvciwgbnVsbCxcbiAgICAgIHtcbiAgICAgICAgJ3N0YXR1cyc6IFtdLFxuICAgICAgICAnZW1lcmdlbmN5Q2F0ZWdvcnknOiBbXSxcbiAgICAgIH0pO1xuICAgIHRoaXMuZW5jID0gaW5qZWN0b3IuZ2V0KEVuY3J5cHRpb25TZXJ2aWNlKTtcbiAgICB0aGlzLm9hdXRoUmVzb3VyY2UgPSBpbmplY3Rvci5nZXQoT0FVVEhfSU5GTyk7XG4gICAgdGhpcy5hcGlTZWxlY3RQYXJhbWV0ZXIgPSB0aGlzLmFwaVsnbWFzdGVyJ11bJ3NlbGVjdC1wYXJhbWV0ZXInXTtcbiAgICB0aGlzLmRhdGFSZXBvcnQgPSB0aGlzLnJlcG9ydFNlcnZpY2UuZ2V0UmVwb3J0cygpO1xuICAgIHRoaXMua2V5d29yZCA9IHtcbiAgICAgIHBhbmljQ29kZTogdGhpcy5kYXRhUmVwb3J0WydwYW5pY0NvZGUnXSxcbiAgICB9O1xuICAgIHRoaXMudXNlcm5hbWUgPSB0aGlzLmRhdGFSZXBvcnRbJ3VzZXJuYW1lJ10sXG4gICAgdGhpcy5hcGlQYXRoID0gdGhpcy5hcGlbJ3BhbmljJ11bJ2RhdGF0YWJsZS1wYW5pYy1kZXRhaWwnXTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLm9uSW5pdCgnc2VjdXJpdHknLCAnZ2V0LXByb2ZpbGUtcGVyc29uYWwnKTtcbiAgICB0aGlzLnBhcmFtU2VsZWN0U3RhdHVzID0gW3tcbiAgICAgIGtleTogJ3BhcmFtZXRlckdyb3VwQ29kZScsXG4gICAgICB2YWx1ZTogJ1NUQVRVU19FTUVSR0VOQ1knLFxuICAgIH1dO1xuICAgIHRoaXMucGFyYW1TZWxlY3RFbWVyZ2VuY3kgPSBbe1xuICAgICAga2V5OiAncGFyYW1ldGVyR3JvdXBDb2RlJyxcbiAgICAgIHZhbHVlOiAnQ0FURUdPUllfRU1FUkdFTkNZJyxcbiAgICB9XTtcbiAgfVxuXG4gIG9uSW5pdChzZXJ2aWNlTmFtZTogc3RyaW5nLCBhcGlOYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmxvYWRpbmdGb3JtID0gdHJ1ZTtcbiAgICBjb25zdCBkYXRhOiBhbnkgPSB7XG4gICAgICB1c2VybmFtZTogdGhpcy51c2VybmFtZSxcbiAgICB9O1xuICAgIHRoaXMuZXhlYyhzZXJ2aWNlTmFtZSwgYXBpTmFtZSwgZGF0YSlcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChzdWNjZXNzOiBhbnkpID0+IHtcbiAgICAgICAgICB0aGlzLmxvYWRpbmdGb3JtID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5wcm9maWxlID0gc3VjY2VzcztcbiAgICAgICAgICBpZiAoc3VjY2Vzc1snaW1hZ2UnXSkge1xuICAgICAgICAgICAgdGhpcy5pbWFnZSA9IHN1Y2Nlc3NbJ2ltYWdlJ107XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAoZXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgdGhpcy5sb2FkaW5nRm9ybSA9IHRydWU7XG4gICAgICAgICAgY29uc3QgZXJyOiBBcGlCYXNlUmVzcG9uc2UgPSBlcnJvclsnZXJyb3InXTtcbiAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICB0aGlzLnRvYXN0ci5zaG93STE4bihlcnIucmVzcFN0YXR1c01lc3NhZ2VbZXJyLnJlc3BTdGF0dXNDb2RlXSwgdHJ1ZSwgbnVsbCwgJ2RhbmdlcicpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRvYXN0ci5zaG93STE4bihlcnIgYXMgYW55LCB0cnVlLCBudWxsLCAnZGFuZ2VyJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgKTtcbiAgfVxuXG4gIHZhbHVlU2VsZWN0KHByb3A6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMuZm9ybUdyb3VwLmdldChwcm9wKS52YWx1ZSkge1xuICAgICAgaWYgKHRoaXMuZm9ybUdyb3VwLmdldChwcm9wKS52YWx1ZS52YWx1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5mb3JtR3JvdXAuZ2V0KHByb3ApLnZhbHVlLnZhbHVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9ybUdyb3VwLmdldChwcm9wKS52YWx1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgb25QcmV2aWV3KGRhdGE6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuZGlhbG9nU2VydmljZS5vcGVuKE5neGFSZXBvcnRzUHJldmlld0NvbXBvbmVudCwge1xuICAgICAgY29udGV4dDoge1xuICAgICAgICBjaGVja3N1bTogZGF0YVsnY2hlY2tzdW0nXSxcbiAgICAgICAgdXNlcjogdGhpcy51c2VybmFtZSxcbiAgICAgICAgZmlsZVR5cGU6IGRhdGFbJ2ZpbGVUeXBlJ10sXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgb25GYWtlKCk6IHZvaWQge1xuICAgIHRoaXMuZGlhbG9nU2VydmljZS5vcGVuKE5neGFGYWtlUHJvbXB0Q29tcG9uZW50KVxuICAgICAgLm9uQ2xvc2Uuc3Vic2NyaWJlKChwYXNzd29yZDogc3RyaW5nKSA9PiB7XG4gICAgICAgIGlmIChwYXNzd29yZCkge1xuICAgICAgICAgIHRoaXMuZGlzYWJsZWRGYWtlID0gdHJ1ZTtcbiAgICAgICAgICBjb25zdCBkYXRhOiBhbnkgPSB7XG4gICAgICAgICAgICBwYXNzd29yZDogdGhpcy5lbmMuZW5jcnlwdEFFUyh0aGlzLm9hdXRoUmVzb3VyY2VbJ2Flc19rZXknXSwgcGFzc3dvcmQpLFxuICAgICAgICAgICAgcGFuaWNDb2RlOiB0aGlzLmRhdGFSZXBvcnRbJ3BhbmljQ29kZSddLFxuICAgICAgICAgIH07XG4gICAgICAgICAgKHN1cGVyLm9uU3VibWl0KGRhdGEsICdwYW5pYycsICdmYWtlLXJlcG9ydCcpIGFzIE9ic2VydmFibGU8QXBpQmFzZVJlc3BvbnNlPilcbiAgICAgICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKHJlc3BvbnNlOiBBcGlCYXNlUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnJlc3BTdGF0dXNDb2RlID09PSBSZXNwb25zZUNvZGUuT0tfU0NSMDExLnRvU3RyaW5nKCkpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2FwcC9kYXNoYm9hcmQnXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmRpc2FibGVkRmFrZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIG9uUHJvY2VzcygpOiB2b2lkIHtcbiAgICBjb25zdCBkYXRhOiBhbnkgPSB7XG4gICAgICBwYW5pY0NvZGU6IHRoaXMuZGF0YVJlcG9ydFsncGFuaWNDb2RlJ10sXG4gICAgICBzdGF0dXM6IHRoaXMudmFsdWVTZWxlY3QoJ3N0YXR1cycpLFxuICAgICAgZW1lcmdlbmN5Q2F0ZWdvcnk6IHRoaXMudmFsdWVTZWxlY3QoJ2VtZXJnZW5jeUNhdGVnb3J5JyksXG4gICAgfTtcbiAgICAoc3VwZXIub25TdWJtaXQoZGF0YSwgJ3BhbmljJywgJ3Byb2Nlc3MtcmVwb3J0JykgYXMgT2JzZXJ2YWJsZTxBcGlCYXNlUmVzcG9uc2U+KVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgLnN1YnNjcmliZSgocmVzcG9uc2U6IEFwaUJhc2VSZXNwb25zZSkgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgICAgICBpZiAocmVzcG9uc2UucmVzcFN0YXR1c0NvZGUgPT09IFJlc3BvbnNlQ29kZS5PS19VUERBVEVELnRvU3RyaW5nKCkpIHtcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2FwcC9kYXNoYm9hcmQnXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcblxuICB9XG5cbn1cbiJdfQ==