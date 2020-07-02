/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Inject, Injector } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { NbDialogService } from '@nebular/theme';
import { EncryptionService } from '@xaphira/utils';
import { BaseFilterComponent } from '@xaphira/ngxa-common';
import { PANIC, ResponseCode, OAUTH_INFO, } from '@xaphira/shared';
import { NgxaCerMonitoringPreviewComponent } from '../preview/ngxa-cer-monitoring-preview.component';
import { NgxaFakeReportPromptComponent } from './prompt/ngxa-fake-report-prompt.component';
var NgxaCerMonitoringDetailComponent = /** @class */ (function (_super) {
    tslib_1.__extends(NgxaCerMonitoringDetailComponent, _super);
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
        _this.enc = injector.get(EncryptionService);
        _this.oauthResource = injector.get(OAUTH_INFO);
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
    NgxaCerMonitoringDetailComponent.decorators = [
        { type: Component, args: [{
                    selector: 'xa-cer-monitoring-detail',
                    template: "<xa-page-outlet [url]=\"'/app/dashboard'\" [header]=\"'Emergency Report Detail'\">\n    <div class=\"row\">\n        <div class=\"col-md-4 col-lg-4 col-xxxl-6\">\n            <div class=\"photo-profile\"\n            [ngStyle]=\"{ \n                'background-image': 'url(' + (image? image: imageDefault) + ')'\n            }\">\n            </div>\n        </div>\n        <div class=\"col-md-8 col-lg-8 col-xxxl-6\">\n            <div class=\"split-row\">\n                <xa-label-text\n                    [label]=\"'Name'\"\n                    [colLabel]=\"4\"\n                    [colContent]=\"8\"\n                    [content]=\"profile.name\"\n                    [skeleton]=\"loadingForm\">\n                </xa-label-text>\n                <xa-label-text\n                    [label]=\"'ID Number'\"\n                    [colLabel]=\"4\"\n                    [colContent]=\"8\"\n                    [content]=\"profile.idNumber\"\n                    [skeleton]=\"loadingForm\">\n                </xa-label-text>\n                <xa-label-text\n                    [label]=\"'Gender'\"\n                    [colLabel]=\"4\"\n                    [colContent]=\"8\"\n                    [content]=\"profile.gender\"\n                    [skeleton]=\"loadingForm\">\n                </xa-label-text>\n                <xa-label-text\n                    [label]=\"'Place / Date of Birth'\"\n                    [colLabel]=\"4\"\n                    [colContent]=\"8\"\n                    [content]=\"profile.placeOfBirth ? (profile.placeOfBirth + ', ' + profile.dateOfBirth) : ''\"\n                    [skeleton]=\"loadingForm\">\n                </xa-label-text>\n            </div>\n            <div class=\"split-row\">\n                <xa-label-text\n                    [label]=\"'Username'\"\n                    [colLabel]=\"4\"\n                    [colContent]=\"8\"\n                    [content]=\"profile.username\"\n                    [skeleton]=\"loadingForm\">\n                </xa-label-text>\n                <xa-label-text\n                    [label]=\"'Email'\"\n                    [colLabel]=\"4\"\n                    [colContent]=\"8\"\n                    [content]=\"profile.email\"\n                    [skeleton]=\"loadingForm\">\n                </xa-label-text>\n                <xa-label-text\n                    [label]=\"'Phone Number'\"\n                    [colLabel]=\"4\"\n                    [colContent]=\"8\"\n                    [content]=\"profile.phoneNumber\"\n                    [skeleton]=\"loadingForm\">\n                </xa-label-text>\n                <xa-label-text\n                    [label]=\"'Address'\"\n                    [colLabel]=\"4\"\n                    [colContent]=\"8\"\n                    [content]=\"profile.address\"\n                    [skeleton]=\"loadingForm\">\n                </xa-label-text>\n                <xa-label-text\n                    [label]=\"'Country'\"\n                    [colLabel]=\"4\"\n                    [colContent]=\"8\"\n                    [content]=\"profile.country\"\n                    [skeleton]=\"loadingForm\">\n                </xa-label-text>\n            </div>\n            <div class=\"split-row\">\n                <xa-label-text\n                    [label]=\"'Related Person'\"\n                    [colLabel]=\"4\"\n                    [colContent]=\"8\"\n                    [content]=\"profile.referenceName\"\n                    [skeleton]=\"loadingForm\">\n                </xa-label-text>\n                <xa-label-text\n                    [label]=\"'Relationship'\"\n                    [colLabel]=\"4\"\n                    [colContent]=\"8\"\n                    [content]=\"profile.relationship\"\n                    [skeleton]=\"loadingForm\">\n                </xa-label-text>\n                <xa-label-text\n                    [label]=\"'Address'\"\n                    [colLabel]=\"4\"\n                    [colContent]=\"8\"\n                    [content]=\"profile.referenceAddress\"\n                    [skeleton]=\"loadingForm\">\n                </xa-label-text>\n                <xa-label-text\n                    [label]=\"'Phone Number'\"\n                    [colLabel]=\"4\"\n                    [colContent]=\"8\"\n                    [content]=\"profile.referencePhoneNumber\"\n                    [skeleton]=\"loadingForm\">\n                </xa-label-text>\n            </div>\n            <form [formGroup]=\"formGroup\">\n                <xa-select\n                    [name]=\"'status'\"\n                    [label]=\"'Status'\"\n                    [colLabel]=\"4\"\n                    [colInput]=\"8\"\n                    [required]=\"true\"\n                    [api]=\"apiSelectParameter\"\n                    [queryParam]=\"paramSelectStatus\"\n                    [searchable]=\"false\"\n                    [skeleton]=\"loadingForm\"\n                    formControlName=\"status\">\n                </xa-select>\n                <xa-select\n                    [name]=\"'emergency'\"\n                    [label]=\"'Emergency'\"\n                    [colLabel]=\"4\"\n                    [colInput]=\"8\"\n                    [required]=\"true\"\n                    [api]=\"apiSelectParameter\"\n                    [queryParam]=\"paramSelectEmergency\"\n                    [searchable]=\"false\"\n                    [skeleton]=\"loadingForm\"\n                    formControlName=\"emergencyCategory\">\n                </xa-select>\n                <div class=\"form-group row\">\n                    <div class=\"offset-sm-4 col-sm-8\">\n                        <button\n                            type=\"reset\"\n                            status=\"danger\"\n                            (click)=\"onFake()\"\n                            class=\"reset-left\"\n                            nbButton>\n                            {{ 'Fake Report' | translate}}\n                        </button>\n                        <button\n                            type=\"submit\"\n                            status=\"primary\"\n                            (click)=\"onProcess()\"\n                            [disabled]=\"formGroup.invalid || formGroup.pristine || disabled\"\n                            class=\"submit-right\"\n                            nbButton>\n                            {{ 'Process' | translate}}\n                        </button>\n                    </div>\n                </div>\n            </form>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-md-12 col-lg-12 col-xxxl-6\">\n            <xa-datatable\n                [api]=\"apiPath\"\n                [filters]=\"filters\"\n                (onButtonCell)=\"onPreview($event)\"\n                [filterFn]=\"keyword\"\n                [selectionType]=\"null\"\n                [add]=\"false\"\n                [edit]=\"false\"\n                [delete]=\"false\"\n                [sort]=\"sort\"\n                [columns]=\"columns\">\n            </xa-datatable>\n        </div>\n    </div>\n</xa-page-outlet>  ",
                    styles: [".nb-theme-default :host .split-row{border-bottom:1px solid #edf1f7;margin-bottom:1rem}.nb-theme-default :host .photo-profile{height:225px;width:225px;background-size:cover;margin:20px auto}.nb-theme-default :host .reset-left{margin-right:.25rem}.nb-theme-default :host .submit-right{margin-left:.25rem}.nb-theme-dark :host .split-row{border-bottom:1px solid #151a30;margin-bottom:1rem}.nb-theme-dark :host .photo-profile{height:225px;width:225px;background-size:cover;margin:20px auto}.nb-theme-dark :host .reset-left{margin-right:.25rem}.nb-theme-dark :host .submit-right{margin-left:.25rem}.nb-theme-cosmic :host .split-row{border-bottom:1px solid #1b1b38;margin-bottom:1rem}.nb-theme-cosmic :host .photo-profile{height:225px;width:225px;background-size:cover;margin:20px auto}.nb-theme-cosmic :host .reset-left{margin-right:.25rem}.nb-theme-cosmic :host .submit-right{margin-left:.25rem}.nb-theme-corporate :host .split-row{border-bottom:1px solid #edf1f7;margin-bottom:1rem}.nb-theme-corporate :host .photo-profile{height:225px;width:225px;background-size:cover;margin:20px auto}.nb-theme-corporate :host .reset-left{margin-right:.25rem}.nb-theme-corporate :host .submit-right{margin-left:.25rem}"]
                }] }
    ];
    /** @nocollapse */
    NgxaCerMonitoringDetailComponent.ctorParameters = function () { return [
        { type: Injector },
        { type: Router },
        { type: ActivatedRoute },
        { type: undefined, decorators: [{ type: Inject, args: [PANIC,] }] },
        { type: NbDialogService }
    ]; };
    return NgxaCerMonitoringDetailComponent;
}(BaseFilterComponent));
export { NgxaCerMonitoringDetailComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4YS1jZXItbW9uaXRvcmluZy1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHhhcGhpcmEvbmd4YS1jZXIvIiwic291cmNlcyI6WyJsaWIvZGFzaGJvYXJkL21vbml0b3JpbmcvZGV0YWlsL25neGEtY2VyLW1vbml0b3JpbmctZGV0YWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFxQixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUd6RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxtQkFBbUIsRUFBMkMsTUFBTSxzQkFBc0IsQ0FBQztBQUNwRyxPQUFPLEVBQ0wsS0FBSyxFQUtMLFlBQVksRUFDWixVQUFVLEdBQ1gsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUNyRyxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUUzRjtJQUtzRCw0REFBd0I7SUFpQzVFLDBDQUFtQixRQUFrQixFQUFVLE1BQWMsRUFDbkQsS0FBcUIsRUFBeUIsWUFBaUMsRUFDL0UsYUFBOEI7UUFGeEMsWUFHRSxrQkFBTSxRQUFRLEVBQUUsSUFBSSxFQUNsQjtZQUNFLFFBQVEsRUFBRSxFQUFFO1lBQ1osbUJBQW1CLEVBQUUsRUFBRTtTQUN4QixDQUFDLFNBYUw7UUFwQmtCLGNBQVEsR0FBUixRQUFRLENBQVU7UUFBVSxZQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ25ELFdB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LCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCwgT25Jbml0LCBPbkRlc3Ryb3ksIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEh0dHBFcnJvclJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTmJEaWFsb2dTZXJ2aWNlIH0gZnJvbSAnQG5lYnVsYXIvdGhlbWUnO1xuaW1wb3J0IHsgRW5jcnlwdGlvblNlcnZpY2UgfSBmcm9tICdAeGFwaGlyYS91dGlscyc7XG5pbXBvcnQgeyBCYXNlRmlsdGVyQ29tcG9uZW50LCBEYXRhdGFibGVDb2x1bW4sIFNvcnQsIFNlbGVjdFBhcmFtTW9kZWwgfSBmcm9tICdAeGFwaGlyYS9uZ3hhLWNvbW1vbic7XG5pbXBvcnQge1xuICBQQU5JQyxcbiAgUGFuaWNGYWN0b3J5U2VydmljZSxcbiAgSHR0cEJhc2VNb2RlbCxcbiAgQXBpQmFzZVJlc3BvbnNlLFxuICBTZWN1cml0eVJlc291cmNlTW9kZWwsXG4gIFJlc3BvbnNlQ29kZSxcbiAgT0FVVEhfSU5GTyxcbn0gZnJvbSAnQHhhcGhpcmEvc2hhcmVkJztcbmltcG9ydCB7IE5neGFDZXJNb25pdG9yaW5nUHJldmlld0NvbXBvbmVudCB9IGZyb20gJy4uL3ByZXZpZXcvbmd4YS1jZXItbW9uaXRvcmluZy1wcmV2aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ3hhRmFrZVJlcG9ydFByb21wdENvbXBvbmVudCB9IGZyb20gJy4vcHJvbXB0L25neGEtZmFrZS1yZXBvcnQtcHJvbXB0LmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3hhLWNlci1tb25pdG9yaW5nLWRldGFpbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9uZ3hhLWNlci1tb25pdG9yaW5nLWRldGFpbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWyduZ3hhLWNlci1tb25pdG9yaW5nLWRldGFpbC5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBOZ3hhQ2VyTW9uaXRvcmluZ0RldGFpbENvbXBvbmVudCBleHRlbmRzIEJhc2VGaWx0ZXJDb21wb25lbnQ8YW55PiBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICBwdWJsaWMgcHJvZmlsZTogYW55ID0ge307XG4gIHB1YmxpYyBpbWFnZTogc3RyaW5nO1xuICBwdWJsaWMgaW1hZ2VEZWZhdWx0OiBzdHJpbmcgPSBgJHtkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYmFzZScpWzBdLmhyZWZ9L2Fzc2V0cy9pbWFnZXMvYXZhdGFycy9kZWZhdWx0LnBuZ2A7XG5cbiAgcHVibGljIGFwaVBhdGg6IEh0dHBCYXNlTW9kZWw7XG4gIHB1YmxpYyBjb2x1bW5zOiBEYXRhdGFibGVDb2x1bW5bXSA9IFtcbiAgICB7IG5hbWU6ICdFdmlkZW5jZScsIHByb3A6ICdmaWxlTWV0YWRhdGEnLCB3aWR0aDogMTAwLCBmcm96ZW5MZWZ0OiB0cnVlLCB0eXBlOiAnYnV0dG9uJyxcbiAgICAgIGJ1dHRvbjogJ1ByZXZpZXcnLCBidXR0b25TdGF0dXM6ICd3YXJuaW5nJyB9LFxuICAgIHsgbmFtZTogJ0ZpbGUgU2l6ZScsIHByb3A6ICdmaWxlTWV0YWRhdGEuc2l6ZScsIHdpZHRoOiAxMjUsIGZyb3plbkxlZnQ6IHRydWUsIHR5cGU6ICdwcmVmaXgnLFxuICAgICAgcHJlZml4OiAnYnl0ZXMnIH0sXG4gICAgeyBuYW1lOiAnTGF0aXR1ZGUnLCBwcm9wOiAnbG9jYXRpb24ubGF0aXR1ZGUnLCB3aWR0aDogMTI1LCBmcm96ZW5MZWZ0OiB0cnVlIH0sXG4gICAgeyBuYW1lOiAnTG9uZ2l0dWRlJywgcHJvcDogJ2xvY2F0aW9uLmxvbmdpdHVkZScsIHdpZHRoOiAxMjUsIGZyb3plbkxlZnQ6IHRydWUgfSxcbiAgICB7IG5hbWU6ICdBZGRyZXNzJywgcHJvcDogJ2xvY2F0aW9uLmZvcm1hdHRlZEFkZHJlc3MnLCB3aWR0aDogMzUwIH0sXG4gICAgeyBuYW1lOiAnUHJvdmluY2UnLCBwcm9wOiAnbG9jYXRpb24ucHJvdmluY2UnLCB3aWR0aDogMTUwIH0sXG4gICAgeyBuYW1lOiAnQ2l0eScsIHByb3A6ICdsb2NhdGlvbi5jaXR5Jywgd2lkdGg6IDE1MCB9LFxuICAgIHsgbmFtZTogJ0Rpc3RyaWN0JywgcHJvcDogJ2xvY2F0aW9uLmRpc3RyaWN0Jywgd2lkdGg6IDE1MCB9LFxuICAgIHsgbmFtZTogJ0RldmljZSBJRCcsIHByb3A6ICdkZXZpY2UuZGV2aWNlSUQnLCB3aWR0aDogMTUwIH0sXG4gICAgeyBuYW1lOiAnRGV2aWNlIE5hbWUnLCBwcm9wOiAnZGV2aWNlLmRldmljZU5hbWUnLCB3aWR0aDogMTUwIH0sXG4gIF07XG4gIHB1YmxpYyBzb3J0OiBTb3J0ID0ge1xuICAgICdkZXNjJzogWydjcmVhdGVkRGF0ZSddLFxuICB9O1xuICBwdWJsaWMgYXBpU2VsZWN0UGFyYW1ldGVyOiBIdHRwQmFzZU1vZGVsO1xuICBwdWJsaWMgcGFyYW1TZWxlY3RTdGF0dXM6IFNlbGVjdFBhcmFtTW9kZWxbXTtcbiAgcHVibGljIHBhcmFtU2VsZWN0RW1lcmdlbmN5OiBTZWxlY3RQYXJhbU1vZGVsW107XG4gIHB1YmxpYyBkaXNhYmxlZEZha2U6IGJvb2xlYW47XG4gIHByaXZhdGUgcGFuaWNDb2RlOiBzdHJpbmc7XG4gIHByaXZhdGUgdXNlcm5hbWU6IHN0cmluZztcbiAgcHJpdmF0ZSBvYXV0aFJlc291cmNlOiBTZWN1cml0eVJlc291cmNlTW9kZWw7XG4gIHByaXZhdGUgZW5jOiBFbmNyeXB0aW9uU2VydmljZTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgaW5qZWN0b3I6IEluamVjdG9yLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBASW5qZWN0KFBBTklDKSBwcml2YXRlIHBhbmljU2VydmljZTogUGFuaWNGYWN0b3J5U2VydmljZSxcbiAgICBwcml2YXRlIGRpYWxvZ1NlcnZpY2U6IE5iRGlhbG9nU2VydmljZSkge1xuICAgIHN1cGVyKGluamVjdG9yLCBudWxsLFxuICAgICAge1xuICAgICAgICAnc3RhdHVzJzogW10sXG4gICAgICAgICdlbWVyZ2VuY3lDYXRlZ29yeSc6IFtdLFxuICAgICAgfSk7XG4gICAgdGhpcy5lbmMgPSBpbmplY3Rvci5nZXQoRW5jcnlwdGlvblNlcnZpY2UpO1xuICAgIHRoaXMub2F1dGhSZXNvdXJjZSA9IGluamVjdG9yLmdldChPQVVUSF9JTkZPKTtcbiAgICB0aGlzLmFwaVNlbGVjdFBhcmFtZXRlciA9IHRoaXMuYXBpWydtYXN0ZXInXVsnc2VsZWN0LXBhcmFtZXRlciddO1xuICAgIGlmICh0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtc1snY29kZSddKSB7XG4gICAgICB0aGlzLnBhbmljQ29kZSA9IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zWydjb2RlJ107XG4gICAgICB0aGlzLmtleXdvcmQgPSB7XG4gICAgICAgIHBhbmljQ29kZTogdGhpcy5wYW5pY0NvZGUsXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9hcHAvZGFzaGJvYXJkJ10pO1xuICAgIH1cbiAgICB0aGlzLmFwaVBhdGggPSB0aGlzLmFwaVsncGFuaWMnXVsnZGF0YXRhYmxlLXBhbmljLWRldGFpbCddO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMub25Jbml0KCdzZWN1cml0eScsICdnZXQtcHJvZmlsZS1wZXJzb25hbCcpO1xuICAgIHRoaXMucGFyYW1TZWxlY3RTdGF0dXMgPSBbe1xuICAgICAga2V5OiAncGFyYW1ldGVyR3JvdXBDb2RlJyxcbiAgICAgIHZhbHVlOiAnU1RBVFVTX0VNRVJHRU5DWScsXG4gICAgfV07XG4gICAgdGhpcy5wYXJhbVNlbGVjdEVtZXJnZW5jeSA9IFt7XG4gICAgICBrZXk6ICdwYXJhbWV0ZXJHcm91cENvZGUnLFxuICAgICAgdmFsdWU6ICdDQVRFR09SWV9FTUVSR0VOQ1knLFxuICAgIH1dO1xuICB9XG5cbiAgb25Jbml0KHNlcnZpY2VOYW1lOiBzdHJpbmcsIGFwaU5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMucGFuaWNTZXJ2aWNlLmdldFBhbmljKHRoaXMucGFuaWNDb2RlKS50aGVuKCh2YWx1ZTogYW55KSA9PiB7XG4gICAgICB0aGlzLmxvYWRpbmdGb3JtID0gdHJ1ZTtcbiAgICAgIHRoaXMudXNlcm5hbWUgPSB2YWx1ZS51c2VybmFtZTtcbiAgICAgIGNvbnN0IGRhdGE6IGFueSA9IHtcbiAgICAgICAgdXNlcm5hbWU6IHZhbHVlLnVzZXJuYW1lLFxuICAgICAgfTtcbiAgICAgIHRoaXMuZXhlYyhzZXJ2aWNlTmFtZSwgYXBpTmFtZSwgZGF0YSlcbiAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAoc3VjY2VzczogYW55KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxvYWRpbmdGb3JtID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnByb2ZpbGUgPSBzdWNjZXNzO1xuICAgICAgICAgICAgaWYgKHN1Y2Nlc3NbJ2ltYWdlJ10pIHtcbiAgICAgICAgICAgICAgdGhpcy5pbWFnZSA9IHN1Y2Nlc3NbJ2ltYWdlJ107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICAoZXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxvYWRpbmdGb3JtID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbnN0IGVycjogQXBpQmFzZVJlc3BvbnNlID0gZXJyb3JbJ2Vycm9yJ107XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgIHRoaXMudG9hc3RyLnNob3dJMThuKGVyci5yZXNwU3RhdHVzTWVzc2FnZVtlcnIucmVzcFN0YXR1c0NvZGVdLCB0cnVlLCBudWxsLCAnZGFuZ2VyJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLnRvYXN0ci5zaG93STE4bihlcnIgYXMgYW55LCB0cnVlLCBudWxsLCAnZGFuZ2VyJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIHZhbHVlU2VsZWN0KHByb3A6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMuZm9ybUdyb3VwLmdldChwcm9wKS52YWx1ZSkge1xuICAgICAgaWYgKHRoaXMuZm9ybUdyb3VwLmdldChwcm9wKS52YWx1ZS52YWx1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5mb3JtR3JvdXAuZ2V0KHByb3ApLnZhbHVlLnZhbHVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9ybUdyb3VwLmdldChwcm9wKS52YWx1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgb25QcmV2aWV3KGRhdGE6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuZGlhbG9nU2VydmljZS5vcGVuKE5neGFDZXJNb25pdG9yaW5nUHJldmlld0NvbXBvbmVudCwge1xuICAgICAgY29udGV4dDoge1xuICAgICAgICBjaGVja3N1bTogZGF0YVsnY2hlY2tzdW0nXSxcbiAgICAgICAgdXNlcjogdGhpcy51c2VybmFtZSxcbiAgICAgICAgZmlsZVR5cGU6IGRhdGFbJ2ZpbGVUeXBlJ10sXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgb25GYWtlKCk6IHZvaWQge1xuICAgIHRoaXMuZGlhbG9nU2VydmljZS5vcGVuKE5neGFGYWtlUmVwb3J0UHJvbXB0Q29tcG9uZW50KVxuICAgICAgLm9uQ2xvc2Uuc3Vic2NyaWJlKChwYXNzd29yZDogc3RyaW5nKSA9PiB7XG4gICAgICAgIGlmIChwYXNzd29yZCkge1xuICAgICAgICAgIHRoaXMuZGlzYWJsZWRGYWtlID0gdHJ1ZTtcbiAgICAgICAgICBjb25zdCBkYXRhOiBhbnkgPSB7XG4gICAgICAgICAgICBwYXNzd29yZDogdGhpcy5lbmMuZW5jcnlwdEFFUyh0aGlzLm9hdXRoUmVzb3VyY2VbJ2Flc19rZXknXSwgcGFzc3dvcmQpLFxuICAgICAgICAgICAgcGFuaWNDb2RlOiB0aGlzLnBhbmljQ29kZSxcbiAgICAgICAgICB9O1xuICAgICAgICAgIChzdXBlci5vblN1Ym1pdChkYXRhLCAncGFuaWMnLCAnZmFrZS1yZXBvcnQnKSBhcyBPYnNlcnZhYmxlPEFwaUJhc2VSZXNwb25zZT4pXG4gICAgICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChyZXNwb25zZTogQXBpQmFzZVJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5yZXNwU3RhdHVzQ29kZSA9PT0gUmVzcG9uc2VDb2RlLk9LX1NDUjAxMS50b1N0cmluZygpKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9hcHAvZGFzaGJvYXJkJ10pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5kaXNhYmxlZEZha2UgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICBvblByb2Nlc3MoKTogdm9pZCB7XG4gICAgY29uc3QgZGF0YTogYW55ID0ge1xuICAgICAgcGFuaWNDb2RlOiB0aGlzLnBhbmljQ29kZSxcbiAgICAgIHN0YXR1czogdGhpcy52YWx1ZVNlbGVjdCgnc3RhdHVzJyksXG4gICAgICBlbWVyZ2VuY3lDYXRlZ29yeTogdGhpcy52YWx1ZVNlbGVjdCgnZW1lcmdlbmN5Q2F0ZWdvcnknKSxcbiAgICB9O1xuICAgIChzdXBlci5vblN1Ym1pdChkYXRhLCAncGFuaWMnLCAncHJvY2Vzcy1yZXBvcnQnKSBhcyBPYnNlcnZhYmxlPEFwaUJhc2VSZXNwb25zZT4pXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAuc3Vic2NyaWJlKChyZXNwb25zZTogQXBpQmFzZVJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZSkge1xuICAgICAgICAgIGlmIChyZXNwb25zZS5yZXNwU3RhdHVzQ29kZSA9PT0gUmVzcG9uc2VDb2RlLk9LX1VQREFURUQudG9TdHJpbmcoKSkge1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvYXBwL2Rhc2hib2FyZCddKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gIH1cblxufVxuIl19