/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var NgxaReportsEmergencyDetailComponent = /** @class */ (function (_super) {
    tslib_1.__extends(NgxaReportsEmergencyDetailComponent, _super);
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
        _this.enc = injector.get(EncryptionService);
        _this.oauthResource = injector.get(OAUTH_INFO);
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
                    .pipe(takeUntil(_this.destroy$))
                    .subscribe((/**
                 * @param {?} response
                 * @return {?}
                 */
                function (response) {
                    if (response) {
                        if (response.respStatusCode === ResponseCode.OK_SCR011.toString()) {
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
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            if (response) {
                if (response.respStatusCode === ResponseCode.OK_UPDATED.toString()) {
                    _this.router.navigate(['/app/dashboard']);
                }
            }
        }));
    };
    NgxaReportsEmergencyDetailComponent.decorators = [
        { type: Component, args: [{
                    selector: 'xa-reports-emergency-detail.component',
                    template: "<xa-page-outlet [url]=\"'/app/reports/emergency'\" [header]=\"'Emergency Report Detail'\">\n    <div class=\"row\">\n        <div class=\"col-md-4 col-lg-4 col-xxxl-6\">\n            <div class=\"photo-profile\"\n            [ngStyle]=\"{ \n                'background-image': 'url(' + (image? image: imageDefault) + ')'\n            }\">\n            </div>\n        </div>\n        <div class=\"col-md-8 col-lg-8 col-xxxl-6\">\n            <div class=\"split-row\">\n                <xa-label-text\n                    [label]=\"'Name'\"\n                    [colLabel]=\"4\"\n                    [colContent]=\"8\"\n                    [content]=\"profile.name\"\n                    [skeleton]=\"loadingForm\">\n                </xa-label-text>\n                <xa-label-text\n                    [label]=\"'ID Number'\"\n                    [colLabel]=\"4\"\n                    [colContent]=\"8\"\n                    [content]=\"profile.idNumber\"\n                    [skeleton]=\"loadingForm\">\n                </xa-label-text>\n                <xa-label-text\n                    [label]=\"'Gender'\"\n                    [colLabel]=\"4\"\n                    [colContent]=\"8\"\n                    [content]=\"profile.gender\"\n                    [skeleton]=\"loadingForm\">\n                </xa-label-text>\n                <xa-label-text\n                    [label]=\"'Place / Date of Birth'\"\n                    [colLabel]=\"4\"\n                    [colContent]=\"8\"\n                    [content]=\"profile.placeOfBirth ? (profile.placeOfBirth + ', ' + profile.dateOfBirth) : ''\"\n                    [skeleton]=\"loadingForm\">\n                </xa-label-text>\n            </div>\n            <div class=\"split-row\">\n                <xa-label-text\n                    [label]=\"'Username'\"\n                    [colLabel]=\"4\"\n                    [colContent]=\"8\"\n                    [content]=\"profile.username\"\n                    [skeleton]=\"loadingForm\">\n                </xa-label-text>\n                <xa-label-text\n                    [label]=\"'Email'\"\n                    [colLabel]=\"4\"\n                    [colContent]=\"8\"\n                    [content]=\"profile.email\"\n                    [skeleton]=\"loadingForm\">\n                </xa-label-text>\n                <xa-label-text\n                    [label]=\"'Phone Number'\"\n                    [colLabel]=\"4\"\n                    [colContent]=\"8\"\n                    [content]=\"profile.phoneNumber\"\n                    [skeleton]=\"loadingForm\">\n                </xa-label-text>\n                <xa-label-text\n                    [label]=\"'Address'\"\n                    [colLabel]=\"4\"\n                    [colContent]=\"8\"\n                    [content]=\"profile.address\"\n                    [skeleton]=\"loadingForm\">\n                </xa-label-text>\n                <xa-label-text\n                    [label]=\"'Country'\"\n                    [colLabel]=\"4\"\n                    [colContent]=\"8\"\n                    [content]=\"profile.country\"\n                    [skeleton]=\"loadingForm\">\n                </xa-label-text>\n            </div>\n            <div class=\"split-row\">\n                <xa-label-text\n                    [label]=\"'Related Person'\"\n                    [colLabel]=\"4\"\n                    [colContent]=\"8\"\n                    [content]=\"profile.referenceName\"\n                    [skeleton]=\"loadingForm\">\n                </xa-label-text>\n                <xa-label-text\n                    [label]=\"'Relationship'\"\n                    [colLabel]=\"4\"\n                    [colContent]=\"8\"\n                    [content]=\"profile.relationship\"\n                    [skeleton]=\"loadingForm\">\n                </xa-label-text>\n                <xa-label-text\n                    [label]=\"'Address'\"\n                    [colLabel]=\"4\"\n                    [colContent]=\"8\"\n                    [content]=\"profile.referenceAddress\"\n                    [skeleton]=\"loadingForm\">\n                </xa-label-text>\n                <xa-label-text\n                    [label]=\"'Phone Number'\"\n                    [colLabel]=\"4\"\n                    [colContent]=\"8\"\n                    [content]=\"profile.referencePhoneNumber\"\n                    [skeleton]=\"loadingForm\">\n                </xa-label-text>\n            </div>\n            <form [formGroup]=\"formGroup\">\n                <xa-select\n                    [name]=\"'status'\"\n                    [label]=\"'Status'\"\n                    [colLabel]=\"4\"\n                    [colInput]=\"8\"\n                    [required]=\"true\"\n                    [api]=\"apiSelectParameter\"\n                    [queryParam]=\"paramSelectStatus\"\n                    [searchable]=\"false\"\n                    [skeleton]=\"loadingForm\"\n                    formControlName=\"status\">\n                </xa-select>\n                <xa-select\n                    [name]=\"'emergency'\"\n                    [label]=\"'Emergency'\"\n                    [colLabel]=\"4\"\n                    [colInput]=\"8\"\n                    [required]=\"true\"\n                    [api]=\"apiSelectParameter\"\n                    [queryParam]=\"paramSelectEmergency\"\n                    [searchable]=\"false\"\n                    [skeleton]=\"loadingForm\"\n                    formControlName=\"emergencyCategory\">\n                </xa-select>\n                <div class=\"form-group row\">\n                    <div class=\"offset-sm-4 col-sm-8\">\n                        <button\n                            type=\"reset\"\n                            status=\"danger\"\n                            (click)=\"onFake()\"\n                            class=\"reset-left\"\n                            nbButton>\n                            {{ 'Fake Report' | translate}}\n                        </button>\n                        <button\n                            type=\"submit\"\n                            status=\"primary\"\n                            (click)=\"onProcess()\"\n                            [disabled]=\"formGroup.invalid || formGroup.pristine || disabled\"\n                            class=\"submit-right\"\n                            nbButton>\n                            {{ 'Process' | translate}}\n                        </button>\n                    </div>\n                </div>\n            </form>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-md-12 col-lg-12 col-xxxl-6\">\n            <xa-datatable\n                [api]=\"apiPath\"\n                [filters]=\"filters\"\n                (onButtonCell)=\"onPreview($event)\"\n                [filterFn]=\"keyword\"\n                [selectionType]=\"null\"\n                [add]=\"false\"\n                [edit]=\"false\"\n                [delete]=\"false\"\n                [sort]=\"sort\"\n                [columns]=\"columns\">\n            </xa-datatable>\n        </div>\n    </div>\n</xa-page-outlet>  ",
                    styles: [".nb-theme-default :host .split-row{border-bottom:1px solid #edf1f7;margin-bottom:1rem}.nb-theme-default :host .photo-profile{height:225px;width:225px;background-size:cover;margin:20px auto}.nb-theme-default :host .reset-left{margin-right:.25rem}.nb-theme-default :host .submit-right{margin-left:.25rem}.nb-theme-dark :host .split-row{border-bottom:1px solid #151a30;margin-bottom:1rem}.nb-theme-dark :host .photo-profile{height:225px;width:225px;background-size:cover;margin:20px auto}.nb-theme-dark :host .reset-left{margin-right:.25rem}.nb-theme-dark :host .submit-right{margin-left:.25rem}.nb-theme-cosmic :host .split-row{border-bottom:1px solid #1b1b38;margin-bottom:1rem}.nb-theme-cosmic :host .photo-profile{height:225px;width:225px;background-size:cover;margin:20px auto}.nb-theme-cosmic :host .reset-left{margin-right:.25rem}.nb-theme-cosmic :host .submit-right{margin-left:.25rem}.nb-theme-corporate :host .split-row{border-bottom:1px solid #edf1f7;margin-bottom:1rem}.nb-theme-corporate :host .photo-profile{height:225px;width:225px;background-size:cover;margin:20px auto}.nb-theme-corporate :host .reset-left{margin-right:.25rem}.nb-theme-corporate :host .submit-right{margin-left:.25rem}"]
                }] }
    ];
    /** @nocollapse */
    NgxaReportsEmergencyDetailComponent.ctorParameters = function () { return [
        { type: Injector },
        { type: Router },
        { type: ActivatedRoute },
        { type: NbDialogService },
        { type: ReportsPanicService }
    ]; };
    return NgxaReportsEmergencyDetailComponent;
}(BaseFilterComponent));
export { NgxaReportsEmergencyDetailComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4YS1yZXBvcnRzLWVtZXJnZW5jeS1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHhhcGhpcmEvbmd4YS1jZXIvIiwic291cmNlcyI6WyJsaWIvcmVwb3J0cy9lbWVyZ2VuY3kvZGV0YWlsL25neGEtcmVwb3J0cy1lbWVyZ2VuY3ktZGV0YWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQTZCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBR3pELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFFLG1CQUFtQixFQUEyQyxNQUFNLHNCQUFzQixDQUFDO0FBQ3BHLE9BQU8sRUFNTCxZQUFZLEVBQ1osVUFBVSxHQUNYLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDdkYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDOUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFM0U7SUFLeUQsK0RBQXdCO0lBaUMvRSw2Q0FBbUIsUUFBa0IsRUFBVSxNQUFjLEVBQ25ELEtBQXFCLEVBQ3JCLGFBQThCLEVBQVUsYUFBa0M7UUFGcEYsWUFHRSxrQkFBTSxRQUFRLEVBQUUsSUFBSSxFQUNsQjtZQUNFLFFBQVEsRUFBRSxFQUFFO1lBQ1osbUJBQW1CLEVBQUUsRUFBRTtTQUN4QixDQUFDLFNBVUw7UUFqQmtCLGNBQVEsR0FBUixRQUFRLENBQVU7UUFBVSxZQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ25ELFdBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLG1CQUFhLEdBQWIsYUFBYSxDQUFpQjtRQUFVLG1CQUFhLEdBQWIsYUFBYSxDQUFxQjtRQWpDN0UsYUFBTyxHQUFRLEVBQUUsQ0FBQztRQUVsQixrQkFBWSxHQUFjLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLHVDQUFvQyxDQUFDO1FBRzVHLGFBQU8sR0FBc0I7WUFDbEMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxRQUFRO2dCQUNwRixNQUFNLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUU7WUFDOUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxtQkFBbUIsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFFBQVE7Z0JBQzFGLE1BQU0sRUFBRSxPQUFPLEVBQUU7WUFDbkIsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxtQkFBbUIsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUU7WUFDN0UsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxvQkFBb0IsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUU7WUFDL0UsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSwyQkFBMkIsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO1lBQ2xFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsbUJBQW1CLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtZQUMzRCxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO1lBQ25ELEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsbUJBQW1CLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtZQUMzRCxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLGlCQUFpQixFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7WUFDMUQsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxtQkFBbUIsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO1NBQy9ELENBQUM7UUFDSyxVQUFJLEdBQVM7WUFDbEIsTUFBTSxFQUFFLENBQUMsYUFBYSxDQUFDO1NBQ3hCLENBQUM7UUFrQkEsS0FBSSxDQUFDLEdBQUcsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDM0MsS0FBSSxDQUFDLGFBQWEsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzlDLEtBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDakUsS0FBSSxDQUFDLFVBQVUsR0FBRyxLQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xELEtBQUksQ0FBQyxPQUFPLEdBQUc7WUFDYixTQUFTLEVBQUUsS0FBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUM7U0FDeEMsQ0FBQztRQUNGLEtBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUM7WUFDM0MsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLHdCQUF3QixDQUFDLENBQUM7O0lBQzdELENBQUM7Ozs7SUFFRCx5REFBVzs7O0lBQVgsY0FBcUIsQ0FBQzs7OztJQUV0QixzREFBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxzQkFBc0IsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxDQUFDO2dCQUN4QixHQUFHLEVBQUUsb0JBQW9CO2dCQUN6QixLQUFLLEVBQUUsa0JBQWtCO2FBQzFCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxvQkFBb0IsR0FBRyxDQUFDO2dCQUMzQixHQUFHLEVBQUUsb0JBQW9CO2dCQUN6QixLQUFLLEVBQUUsb0JBQW9CO2FBQzVCLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7OztJQUVELG9EQUFNOzs7OztJQUFOLFVBQU8sV0FBbUIsRUFBRSxPQUFlO1FBQTNDLGlCQXdCQztRQXZCQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQzs7WUFDbEIsSUFBSSxHQUFRO1lBQ2hCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtTQUN4QjtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUM7YUFDbEMsU0FBUzs7OztRQUNSLFVBQUMsT0FBWTtZQUNYLEtBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1lBQ3pCLEtBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1lBQ3ZCLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNwQixLQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUMvQjtRQUNILENBQUM7Ozs7UUFDRCxVQUFDLEtBQXdCO1lBQ3ZCLEtBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDOztnQkFDbEIsR0FBRyxHQUFvQixLQUFLLENBQUMsT0FBTyxDQUFDO1lBQzNDLElBQUksR0FBRyxFQUFFO2dCQUNQLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQzthQUN2RjtpQkFBTTtnQkFDTCxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxtQkFBQSxHQUFHLEVBQU8sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO2FBQ3hEO1FBQ0gsQ0FBQyxFQUNGLENBQUM7SUFDTixDQUFDOzs7OztJQUVELHlEQUFXOzs7O0lBQVgsVUFBWSxJQUFZO1FBQ3RCLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFO1lBQ2xDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRTtnQkFDeEMsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO2FBQzdDO2lCQUFNO2dCQUNMLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDO2FBQ3ZDO1NBQ0Y7YUFBTTtZQUNMLE9BQU8sSUFBSSxDQUFDO1NBQ2I7SUFDSCxDQUFDOzs7OztJQUVELHVEQUFTOzs7O0lBQVQsVUFBVSxJQUFTO1FBQ2pCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLDJCQUEyQixFQUFFO1lBQ25ELE9BQU8sRUFBRTtnQkFDUCxRQUFRLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQztnQkFDMUIsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRO2dCQUNuQixRQUFRLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQzthQUMzQjtTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCxvREFBTTs7O0lBQU47UUFBQSxpQkFzQkM7UUFyQkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUM7YUFDN0MsT0FBTyxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLFFBQWdCO1lBQ2xDLElBQUksUUFBUSxFQUFFO2dCQUNaLEtBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDOztvQkFDbkIsSUFBSSxHQUFRO29CQUNoQixRQUFRLEVBQUUsS0FBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsRUFBRSxRQUFRLENBQUM7b0JBQ3RFLFNBQVMsRUFBRSxLQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQztpQkFDeEM7Z0JBQ0QsQ0FBQyxtQkFBQSxpQkFBTSxRQUFRLGFBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxhQUFhLENBQUMsRUFBK0IsQ0FBQztxQkFDMUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7cUJBQzlCLFNBQVM7Ozs7Z0JBQUMsVUFBQyxRQUF5QjtvQkFDbkMsSUFBSSxRQUFRLEVBQUU7d0JBQ1osSUFBSSxRQUFRLENBQUMsY0FBYyxLQUFLLFlBQVksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLEVBQUU7NEJBQ2pFLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO3lCQUMxQztxQkFDRjtnQkFDSCxDQUFDLEVBQUMsQ0FBQzthQUNOO2lCQUFNO2dCQUNMLEtBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO2FBQzNCO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDUCxDQUFDOzs7O0lBRUQsdURBQVM7OztJQUFUO1FBQUEsaUJBZ0JDOztZQWZPLElBQUksR0FBUTtZQUNoQixTQUFTLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUM7WUFDdkMsTUFBTSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDO1lBQ2xDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsbUJBQW1CLENBQUM7U0FDekQ7UUFDRCxDQUFDLG1CQUFBLGlCQUFNLFFBQVEsWUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLGdCQUFnQixDQUFDLEVBQStCLENBQUM7YUFDN0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDOUIsU0FBUzs7OztRQUFDLFVBQUMsUUFBeUI7WUFDbkMsSUFBSSxRQUFRLEVBQUU7Z0JBQ1osSUFBSSxRQUFRLENBQUMsY0FBYyxLQUFLLFlBQVksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLEVBQUU7b0JBQ2xFLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO2lCQUMxQzthQUNGO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFFUCxDQUFDOztnQkEvSkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx1Q0FBdUM7b0JBQ2pELDgrTkFBNkQ7O2lCQUU5RDs7OztnQkF6QjhDLFFBQVE7Z0JBQzlDLE1BQU07Z0JBQUUsY0FBYztnQkFJdEIsZUFBZTtnQkFjZixtQkFBbUI7O0lBbUs1QiwwQ0FBQztDQUFBLEFBaktELENBS3lELG1CQUFtQixHQTRKM0U7U0E1SlksbUNBQW1DOzs7SUFFOUMsc0RBQXlCOztJQUN6QixvREFBcUI7O0lBQ3JCLDJEQUFtSDs7SUFFbkgsc0RBQThCOztJQUM5QixzREFhRTs7SUFDRixtREFFRTs7SUFDRixpRUFBeUM7O0lBQ3pDLGdFQUE2Qzs7SUFDN0MsbUVBQWdEOztJQUNoRCwyREFBNkI7Ozs7O0lBQzdCLHVEQUF5Qjs7Ozs7SUFDekIsNERBQTZDOzs7OztJQUM3QyxrREFBK0I7Ozs7O0lBQy9CLHlEQUF3Qjs7SUFFWix1REFBeUI7Ozs7O0lBQUUscURBQXNCOzs7OztJQUMzRCxvREFBNkI7Ozs7O0lBQzdCLDREQUFzQzs7Ozs7SUFBRSw0REFBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCwgT25Jbml0LCBPbkRlc3Ryb3ksIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEh0dHBFcnJvclJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTmJEaWFsb2dTZXJ2aWNlIH0gZnJvbSAnQG5lYnVsYXIvdGhlbWUnO1xuaW1wb3J0IHsgRW5jcnlwdGlvblNlcnZpY2UgfSBmcm9tICdAeGFwaGlyYS91dGlscyc7XG5pbXBvcnQgeyBCYXNlRmlsdGVyQ29tcG9uZW50LCBEYXRhdGFibGVDb2x1bW4sIFNvcnQsIFNlbGVjdFBhcmFtTW9kZWwgfSBmcm9tICdAeGFwaGlyYS9uZ3hhLWNvbW1vbic7XG5pbXBvcnQge1xuICBQQU5JQyxcbiAgUGFuaWNGYWN0b3J5U2VydmljZSxcbiAgSHR0cEJhc2VNb2RlbCxcbiAgQXBpQmFzZVJlc3BvbnNlLFxuICBTZWN1cml0eVJlc291cmNlTW9kZWwsXG4gIFJlc3BvbnNlQ29kZSxcbiAgT0FVVEhfSU5GTyxcbn0gZnJvbSAnQHhhcGhpcmEvc2hhcmVkJztcbmltcG9ydCB7IE5neGFSZXBvcnRzUHJldmlld0NvbXBvbmVudCB9IGZyb20gJy4vcHJldmlldy9uZ3hhLXJlcG9ydHMtcHJldmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmd4YUZha2VQcm9tcHRDb21wb25lbnQgfSBmcm9tICcuL3Byb21wdC9uZ3hhLWZha2UtcHJvbXB0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZXBvcnRzUGFuaWNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvcmVwb3J0cy1wYW5pYy5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAneGEtcmVwb3J0cy1lbWVyZ2VuY3ktZGV0YWlsLmNvbXBvbmVudCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9uZ3hhLXJlcG9ydHMtZW1lcmdlbmN5LWRldGFpbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWyduZ3hhLXJlcG9ydHMtZW1lcmdlbmN5LWRldGFpbC5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBOZ3hhUmVwb3J0c0VtZXJnZW5jeURldGFpbENvbXBvbmVudCBleHRlbmRzIEJhc2VGaWx0ZXJDb21wb25lbnQ8YW55PiBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICBwdWJsaWMgcHJvZmlsZTogYW55ID0ge307XG4gIHB1YmxpYyBpbWFnZTogc3RyaW5nO1xuICBwdWJsaWMgaW1hZ2VEZWZhdWx0OiBzdHJpbmcgPSBgJHtkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYmFzZScpWzBdLmhyZWZ9L2Fzc2V0cy9pbWFnZXMvYXZhdGFycy9kZWZhdWx0LnBuZ2A7XG5cbiAgcHVibGljIGFwaVBhdGg6IEh0dHBCYXNlTW9kZWw7XG4gIHB1YmxpYyBjb2x1bW5zOiBEYXRhdGFibGVDb2x1bW5bXSA9IFtcbiAgICB7IG5hbWU6ICdFdmlkZW5jZScsIHByb3A6ICdmaWxlTWV0YWRhdGEnLCB3aWR0aDogMTAwLCBmcm96ZW5MZWZ0OiB0cnVlLCB0eXBlOiAnYnV0dG9uJyxcbiAgICAgIGJ1dHRvbjogJ1ByZXZpZXcnLCBidXR0b25TdGF0dXM6ICd3YXJuaW5nJyB9LFxuICAgIHsgbmFtZTogJ0ZpbGUgU2l6ZScsIHByb3A6ICdmaWxlTWV0YWRhdGEuc2l6ZScsIHdpZHRoOiAxMjUsIGZyb3plbkxlZnQ6IHRydWUsIHR5cGU6ICdwcmVmaXgnLFxuICAgICAgcHJlZml4OiAnYnl0ZXMnIH0sXG4gICAgeyBuYW1lOiAnTGF0aXR1ZGUnLCBwcm9wOiAnbG9jYXRpb24ubGF0aXR1ZGUnLCB3aWR0aDogMTI1LCBmcm96ZW5MZWZ0OiB0cnVlIH0sXG4gICAgeyBuYW1lOiAnTG9uZ2l0dWRlJywgcHJvcDogJ2xvY2F0aW9uLmxvbmdpdHVkZScsIHdpZHRoOiAxMjUsIGZyb3plbkxlZnQ6IHRydWUgfSxcbiAgICB7IG5hbWU6ICdBZGRyZXNzJywgcHJvcDogJ2xvY2F0aW9uLmZvcm1hdHRlZEFkZHJlc3MnLCB3aWR0aDogMzUwIH0sXG4gICAgeyBuYW1lOiAnUHJvdmluY2UnLCBwcm9wOiAnbG9jYXRpb24ucHJvdmluY2UnLCB3aWR0aDogMTUwIH0sXG4gICAgeyBuYW1lOiAnQ2l0eScsIHByb3A6ICdsb2NhdGlvbi5jaXR5Jywgd2lkdGg6IDE1MCB9LFxuICAgIHsgbmFtZTogJ0Rpc3RyaWN0JywgcHJvcDogJ2xvY2F0aW9uLmRpc3RyaWN0Jywgd2lkdGg6IDE1MCB9LFxuICAgIHsgbmFtZTogJ0RldmljZSBJRCcsIHByb3A6ICdkZXZpY2UuZGV2aWNlSUQnLCB3aWR0aDogMTUwIH0sXG4gICAgeyBuYW1lOiAnRGV2aWNlIE5hbWUnLCBwcm9wOiAnZGV2aWNlLmRldmljZU5hbWUnLCB3aWR0aDogMTUwIH0sXG4gIF07XG4gIHB1YmxpYyBzb3J0OiBTb3J0ID0ge1xuICAgICdkZXNjJzogWydjcmVhdGVkRGF0ZSddLFxuICB9O1xuICBwdWJsaWMgYXBpU2VsZWN0UGFyYW1ldGVyOiBIdHRwQmFzZU1vZGVsO1xuICBwdWJsaWMgcGFyYW1TZWxlY3RTdGF0dXM6IFNlbGVjdFBhcmFtTW9kZWxbXTtcbiAgcHVibGljIHBhcmFtU2VsZWN0RW1lcmdlbmN5OiBTZWxlY3RQYXJhbU1vZGVsW107XG4gIHB1YmxpYyBkaXNhYmxlZEZha2U6IGJvb2xlYW47XG4gIHByaXZhdGUgdXNlcm5hbWU6IHN0cmluZztcbiAgcHJpdmF0ZSBvYXV0aFJlc291cmNlOiBTZWN1cml0eVJlc291cmNlTW9kZWw7XG4gIHByaXZhdGUgZW5jOiBFbmNyeXB0aW9uU2VydmljZTtcbiAgcHJpdmF0ZSBkYXRhUmVwb3J0OiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGluamVjdG9yOiBJbmplY3RvciwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcml2YXRlIGRpYWxvZ1NlcnZpY2U6IE5iRGlhbG9nU2VydmljZSwgcHJpdmF0ZSByZXBvcnRTZXJ2aWNlOiBSZXBvcnRzUGFuaWNTZXJ2aWNlKSB7XG4gICAgc3VwZXIoaW5qZWN0b3IsIG51bGwsXG4gICAgICB7XG4gICAgICAgICdzdGF0dXMnOiBbXSxcbiAgICAgICAgJ2VtZXJnZW5jeUNhdGVnb3J5JzogW10sXG4gICAgICB9KTtcbiAgICB0aGlzLmVuYyA9IGluamVjdG9yLmdldChFbmNyeXB0aW9uU2VydmljZSk7XG4gICAgdGhpcy5vYXV0aFJlc291cmNlID0gaW5qZWN0b3IuZ2V0KE9BVVRIX0lORk8pO1xuICAgIHRoaXMuYXBpU2VsZWN0UGFyYW1ldGVyID0gdGhpcy5hcGlbJ21hc3RlciddWydzZWxlY3QtcGFyYW1ldGVyJ107XG4gICAgdGhpcy5kYXRhUmVwb3J0ID0gdGhpcy5yZXBvcnRTZXJ2aWNlLmdldFJlcG9ydHMoKTtcbiAgICB0aGlzLmtleXdvcmQgPSB7XG4gICAgICBwYW5pY0NvZGU6IHRoaXMuZGF0YVJlcG9ydFsncGFuaWNDb2RlJ10sXG4gICAgfTtcbiAgICB0aGlzLnVzZXJuYW1lID0gdGhpcy5kYXRhUmVwb3J0Wyd1c2VybmFtZSddLFxuICAgIHRoaXMuYXBpUGF0aCA9IHRoaXMuYXBpWydwYW5pYyddWydkYXRhdGFibGUtcGFuaWMtZGV0YWlsJ107XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5vbkluaXQoJ3NlY3VyaXR5JywgJ2dldC1wcm9maWxlLXBlcnNvbmFsJyk7XG4gICAgdGhpcy5wYXJhbVNlbGVjdFN0YXR1cyA9IFt7XG4gICAgICBrZXk6ICdwYXJhbWV0ZXJHcm91cENvZGUnLFxuICAgICAgdmFsdWU6ICdTVEFUVVNfRU1FUkdFTkNZJyxcbiAgICB9XTtcbiAgICB0aGlzLnBhcmFtU2VsZWN0RW1lcmdlbmN5ID0gW3tcbiAgICAgIGtleTogJ3BhcmFtZXRlckdyb3VwQ29kZScsXG4gICAgICB2YWx1ZTogJ0NBVEVHT1JZX0VNRVJHRU5DWScsXG4gICAgfV07XG4gIH1cblxuICBvbkluaXQoc2VydmljZU5hbWU6IHN0cmluZywgYXBpTmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5sb2FkaW5nRm9ybSA9IHRydWU7XG4gICAgY29uc3QgZGF0YTogYW55ID0ge1xuICAgICAgdXNlcm5hbWU6IHRoaXMudXNlcm5hbWUsXG4gICAgfTtcbiAgICB0aGlzLmV4ZWMoc2VydmljZU5hbWUsIGFwaU5hbWUsIGRhdGEpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAoc3VjY2VzczogYW55KSA9PiB7XG4gICAgICAgICAgdGhpcy5sb2FkaW5nRm9ybSA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMucHJvZmlsZSA9IHN1Y2Nlc3M7XG4gICAgICAgICAgaWYgKHN1Y2Nlc3NbJ2ltYWdlJ10pIHtcbiAgICAgICAgICAgIHRoaXMuaW1hZ2UgPSBzdWNjZXNzWydpbWFnZSddO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgKGVycm9yOiBIdHRwRXJyb3JSZXNwb25zZSkgPT4ge1xuICAgICAgICAgIHRoaXMubG9hZGluZ0Zvcm0gPSB0cnVlO1xuICAgICAgICAgIGNvbnN0IGVycjogQXBpQmFzZVJlc3BvbnNlID0gZXJyb3JbJ2Vycm9yJ107XG4gICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgdGhpcy50b2FzdHIuc2hvd0kxOG4oZXJyLnJlc3BTdGF0dXNNZXNzYWdlW2Vyci5yZXNwU3RhdHVzQ29kZV0sIHRydWUsIG51bGwsICdkYW5nZXInKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50b2FzdHIuc2hvd0kxOG4oZXJyIGFzIGFueSwgdHJ1ZSwgbnVsbCwgJ2RhbmdlcicpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICk7XG4gIH1cblxuICB2YWx1ZVNlbGVjdChwcm9wOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLmZvcm1Hcm91cC5nZXQocHJvcCkudmFsdWUpIHtcbiAgICAgIGlmICh0aGlzLmZvcm1Hcm91cC5nZXQocHJvcCkudmFsdWUudmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9ybUdyb3VwLmdldChwcm9wKS52YWx1ZS52YWx1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZvcm1Hcm91cC5nZXQocHJvcCkudmFsdWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIG9uUHJldmlldyhkYXRhOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLmRpYWxvZ1NlcnZpY2Uub3BlbihOZ3hhUmVwb3J0c1ByZXZpZXdDb21wb25lbnQsIHtcbiAgICAgIGNvbnRleHQ6IHtcbiAgICAgICAgY2hlY2tzdW06IGRhdGFbJ2NoZWNrc3VtJ10sXG4gICAgICAgIHVzZXI6IHRoaXMudXNlcm5hbWUsXG4gICAgICAgIGZpbGVUeXBlOiBkYXRhWydmaWxlVHlwZSddLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIG9uRmFrZSgpOiB2b2lkIHtcbiAgICB0aGlzLmRpYWxvZ1NlcnZpY2Uub3BlbihOZ3hhRmFrZVByb21wdENvbXBvbmVudClcbiAgICAgIC5vbkNsb3NlLnN1YnNjcmliZSgocGFzc3dvcmQ6IHN0cmluZykgPT4ge1xuICAgICAgICBpZiAocGFzc3dvcmQpIHtcbiAgICAgICAgICB0aGlzLmRpc2FibGVkRmFrZSA9IHRydWU7XG4gICAgICAgICAgY29uc3QgZGF0YTogYW55ID0ge1xuICAgICAgICAgICAgcGFzc3dvcmQ6IHRoaXMuZW5jLmVuY3J5cHRBRVModGhpcy5vYXV0aFJlc291cmNlWydhZXNfa2V5J10sIHBhc3N3b3JkKSxcbiAgICAgICAgICAgIHBhbmljQ29kZTogdGhpcy5kYXRhUmVwb3J0WydwYW5pY0NvZGUnXSxcbiAgICAgICAgICB9O1xuICAgICAgICAgIChzdXBlci5vblN1Ym1pdChkYXRhLCAncGFuaWMnLCAnZmFrZS1yZXBvcnQnKSBhcyBPYnNlcnZhYmxlPEFwaUJhc2VSZXNwb25zZT4pXG4gICAgICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChyZXNwb25zZTogQXBpQmFzZVJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5yZXNwU3RhdHVzQ29kZSA9PT0gUmVzcG9uc2VDb2RlLk9LX1NDUjAxMS50b1N0cmluZygpKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9hcHAvZGFzaGJvYXJkJ10pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5kaXNhYmxlZEZha2UgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICBvblByb2Nlc3MoKTogdm9pZCB7XG4gICAgY29uc3QgZGF0YTogYW55ID0ge1xuICAgICAgcGFuaWNDb2RlOiB0aGlzLmRhdGFSZXBvcnRbJ3BhbmljQ29kZSddLFxuICAgICAgc3RhdHVzOiB0aGlzLnZhbHVlU2VsZWN0KCdzdGF0dXMnKSxcbiAgICAgIGVtZXJnZW5jeUNhdGVnb3J5OiB0aGlzLnZhbHVlU2VsZWN0KCdlbWVyZ2VuY3lDYXRlZ29yeScpLFxuICAgIH07XG4gICAgKHN1cGVyLm9uU3VibWl0KGRhdGEsICdwYW5pYycsICdwcm9jZXNzLXJlcG9ydCcpIGFzIE9ic2VydmFibGU8QXBpQmFzZVJlc3BvbnNlPilcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgIC5zdWJzY3JpYmUoKHJlc3BvbnNlOiBBcGlCYXNlUmVzcG9uc2UpID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlKSB7XG4gICAgICAgICAgaWYgKHJlc3BvbnNlLnJlc3BTdGF0dXNDb2RlID09PSBSZXNwb25zZUNvZGUuT0tfVVBEQVRFRC50b1N0cmluZygpKSB7XG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9hcHAvZGFzaGJvYXJkJ10pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgfVxuXG59XG4iXX0=