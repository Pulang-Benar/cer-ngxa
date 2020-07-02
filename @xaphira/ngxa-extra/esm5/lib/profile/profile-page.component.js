/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Injector, Inject } from '@angular/core';
import { Validators } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { PROFILE_INDEXED_DB } from '@xaphira/shared';
import { ResponseCode, USER_INFO, UserInfo, } from '@xaphira/shared';
import { Pattern } from '@xaphira/utils';
import { BaseFormComponent } from '@xaphira/ngxa-common';
var ProfilePageComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ProfilePageComponent, _super);
    function ProfilePageComponent(injector, userService, profileIndexedDB) {
        var _this = _super.call(this, injector, {
            'name': [],
            'email': [],
            'phoneNumber': [],
            'address': [null, [Validators.minLength(5)]],
            'country': [],
            'province': [],
            'city': [],
            'district': [],
            'subDistrict': [],
        }) || this;
        _this.injector = injector;
        _this.userService = userService;
        _this.profileIndexedDB = profileIndexedDB;
        _this.patternEmail = Pattern.EMAIL;
        _this.patternPhoneNumber = Pattern.PHONE_NUMBER;
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
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            if (response) {
                switch (response.respStatusCode) {
                    case ResponseCode.ERR_SCR0008.toString():
                        _this.formGroup.controls['email'].setErrors({
                            'email': true,
                        });
                        break;
                    case ResponseCode.ERR_SCR0007A.toString():
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
        { type: Component, args: [{
                    selector: 'xa-profile-page',
                    template: "<xa-page-outlet [header]=\"'Profile'\">\n  <div class=\"row\">\n    <div class=\"col-md-4 col-lg-4 col-xxxl-6\">\n      <form [formGroup]=\"formGroupImage\">\n        <xa-image-upload\n          [radius]=\"50\"\n          [skeleton]=\"loadingForm\"\n          [image]=\"image\"\n          [uploadFn]=\"uploadFinished\"\n          (onUpload)=\"uploadImage($event)\"\n          formControlName=\"image\">\n        </xa-image-upload>\n      </form>\n    </div>\n    <div class=\"col-md-8 col-lg-8 col-xxxl-6\">\n      <form [formGroup]=\"formGroup\">\n        <xa-input-text\n          [name]=\"'name'\"\n          [label]=\"'Name'\"\n          [required]=\"true\"\n          [skeleton]=\"loadingForm\"\n          formControlName=\"name\">\n        </xa-input-text>\n        <xa-input-text\n          [name]=\"'email'\"\n          [label]=\"'Email'\"\n          [required]=\"true\"\n          [pattern]=\"patternEmail\"\n          [skeleton]=\"loadingForm\"\n          formControlName=\"email\">\n        </xa-input-text>\n        <xa-input-text\n          [name]=\"'phoneNumber'\"\n          [label]=\"'Telephone'\"\n          [required]=\"true\"\n          [pattern]=\"patternPhoneNumber\"\n          [skeleton]=\"loadingForm\"\n          formControlName=\"phoneNumber\">\n        </xa-input-text>\n        <xa-textarea\n          [name]=\"'address'\"\n          [label]=\"'Address'\"\n          [required]=\"true\"\n          [minLength]=\"minLength\"\n          [skeleton]=\"loadingForm\"\n          formControlName=\"address\">\n        </xa-textarea>\n        <xa-select\n          [name]=\"'country'\"\n          [label]=\"'Country'\"\n          [api]=\"apiSelectCountry\"\n          [skeleton]=\"loadingForm\"\n          (onSelect)=\"onSelectCountry($event)\"\n          (onClear)=\"onClearCountry()\"\n          formControlName=\"country\">\n        </xa-select>\n        <xa-select\n          [name]=\"'province'\"\n          [label]=\"'Province'\"\n          [api]=\"apiSelectProvince\"\n          [queryParam]=\"paramSelectProvince\"\n          [skeleton]=\"loadingForm\"\n          (onSelect)=\"onSelectProvince($event)\"\n          (onClear)=\"onClearProvince()\"\n          formControlName=\"province\">\n        </xa-select>\n        <xa-select\n          [name]=\"'city'\"\n          [label]=\"'City'\"\n          [api]=\"apiSelectCity\"\n          [queryParam]=\"paramSelectCity\"\n          [skeleton]=\"loadingForm\"\n          (onSelect)=\"onSelectCity($event)\"\n          (onClear)=\"onClearCity()\"\n          formControlName=\"city\">\n        </xa-select>\n        <xa-select\n          [name]=\"'district'\"\n          [label]=\"'District'\"\n          [api]=\"apiSelectDistrict\"\n          [queryParam]=\"paramSelectDistrict\"\n          [skeleton]=\"loadingForm\"\n          (onSelect)=\"onSelectDistrict($event)\"\n          (onClear)=\"onClearDistrict()\"\n          formControlName=\"district\">\n        </xa-select>\n        <xa-select\n          [name]=\"'subDistrict'\"\n          [label]=\"'Sub District'\"\n          [api]=\"apiSelectSubDistrict\"\n          [queryParam]=\"paramSelectSubDistrict\"\n          [skeleton]=\"loadingForm\"\n          formControlName=\"subDistrict\">\n        </xa-select>\n        <xa-button-submit\n          (onSubmit)=\"onSubmit()\"\n          [name]=\"'Update Profile'\"\n          [disabledButton]=\"disabled\"\n          [formGroupButton]=\"formGroup\"\n          [skeleton]=\"loadingForm\">\n        </xa-button-submit>\n      </form>\n    </div>\n  </div>\n</xa-page-outlet>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    ProfilePageComponent.ctorParameters = function () { return [
        { type: Injector },
        { type: UserInfo, decorators: [{ type: Inject, args: [USER_INFO,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [PROFILE_INDEXED_DB,] }] }
    ]; };
    return ProfilePageComponent;
}(BaseFormComponent));
export { ProfilePageComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS1wYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B4YXBoaXJhL25neGEtZXh0cmEvIiwic291cmNlcyI6WyJsaWIvcHJvZmlsZS9wcm9maWxlLXBhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxRQUFRLEVBQWEsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxVQUFVLEVBQWEsTUFBTSxnQkFBZ0IsQ0FBQztBQUV2RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUEyRCxrQkFBa0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzlHLE9BQU8sRUFDTCxZQUFZLEVBQ1osU0FBUyxFQUNULFFBQVEsR0FDVCxNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6QyxPQUFPLEVBQUUsaUJBQWlCLEVBQW9CLE1BQU0sc0JBQXNCLENBQUM7QUFHM0U7SUFLMEMsZ0RBQXNCO0lBd0I5RCw4QkFDUyxRQUFrQixFQUNFLFdBQXFCLEVBQ1osZ0JBQXlDO1FBSC9FLFlBSUUsa0JBQU0sUUFBUSxFQUNaO1lBQ0UsTUFBTSxFQUFFLEVBQUU7WUFDVixPQUFPLEVBQUUsRUFBRTtZQUNYLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLFNBQVMsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1QyxTQUFTLEVBQUUsRUFBRTtZQUNiLFVBQVUsRUFBRSxFQUFFO1lBQ2QsTUFBTSxFQUFFLEVBQUU7WUFDVixVQUFVLEVBQUUsRUFBRTtZQUNkLGFBQWEsRUFBRSxFQUFFO1NBQ2xCLENBQUMsU0FTTDtRQXZCUSxjQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ0UsaUJBQVcsR0FBWCxXQUFX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QUEyQzs7SUFFM0MsaURBQXdDOztJQUN4QyxtREFBK0M7O0lBRS9DLG9EQUEyQzs7SUFDM0Msc0RBQWtEOztJQUdoRCx3Q0FBeUI7Ozs7O0lBQ3pCLDJDQUFnRDs7Ozs7SUFDaEQsZ0RBQTZFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEluamVjdG9yLCBPbkRlc3Ryb3ksIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVmFsaWRhdG9ycywgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQXBpQmFzZVJlc3BvbnNlLCBIdHRwQmFzZU1vZGVsLCBJbmRleGVkREJGYWN0b3J5U2VydmljZSwgUFJPRklMRV9JTkRFWEVEX0RCIH0gZnJvbSAnQHhhcGhpcmEvc2hhcmVkJztcbmltcG9ydCB7XG4gIFJlc3BvbnNlQ29kZSxcbiAgVVNFUl9JTkZPLFxuICBVc2VySW5mbyxcbn0gZnJvbSAnQHhhcGhpcmEvc2hhcmVkJztcbmltcG9ydCB7IFBhdHRlcm4gfSBmcm9tICdAeGFwaGlyYS91dGlscyc7XG5pbXBvcnQgeyBCYXNlRm9ybUNvbXBvbmVudCwgU2VsZWN0UGFyYW1Nb2RlbCB9IGZyb20gJ0B4YXBoaXJhL25neGEtY29tbW9uJztcbmltcG9ydCB7IEh0dHBFcnJvclJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd4YS1wcm9maWxlLXBhZ2UnLFxuICBzdHlsZVVybHM6IFsnLi9wcm9maWxlLXBhZ2UuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2ZpbGUtcGFnZS5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFByb2ZpbGVQYWdlQ29tcG9uZW50IGV4dGVuZHMgQmFzZUZvcm1Db21wb25lbnQ8YW55PiBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICBwdWJsaWMgaW1hZ2U6IHN0cmluZztcbiAgcHVibGljIGZvcm1Hcm91cEltYWdlOiBGb3JtR3JvdXA7XG4gIHB1YmxpYyB1cGxvYWRGaW5pc2hlZDogYm9vbGVhbjtcbiAgcHVibGljIHBhdHRlcm5FbWFpbDogc3RyaW5nID0gUGF0dGVybi5FTUFJTDtcbiAgcHVibGljIHBhdHRlcm5QaG9uZU51bWJlcjogc3RyaW5nID0gUGF0dGVybi5QSE9ORV9OVU1CRVI7XG4gIHB1YmxpYyBtaW5MZW5ndGg6IG51bWJlciA9IDU7XG4gIHB1YmxpYyBkaXNhYmxlZFVwbG9hZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIHB1YmxpYyBhcGlTZWxlY3RDb3VudHJ5OiBIdHRwQmFzZU1vZGVsO1xuXG4gIHB1YmxpYyBhcGlTZWxlY3RQcm92aW5jZTogSHR0cEJhc2VNb2RlbDtcbiAgcHVibGljIHBhcmFtU2VsZWN0UHJvdmluY2U6IFNlbGVjdFBhcmFtTW9kZWxbXTtcblxuICBwdWJsaWMgYXBpU2VsZWN0Q2l0eTogSHR0cEJhc2VNb2RlbDtcbiAgcHVibGljIHBhcmFtU2VsZWN0Q2l0eTogU2VsZWN0UGFyYW1Nb2RlbFtdO1xuXG4gIHB1YmxpYyBhcGlTZWxlY3REaXN0cmljdDogSHR0cEJhc2VNb2RlbDtcbiAgcHVibGljIHBhcmFtU2VsZWN0RGlzdHJpY3Q6IFNlbGVjdFBhcmFtTW9kZWxbXTtcblxuICBwdWJsaWMgYXBpU2VsZWN0U3ViRGlzdHJpY3Q6IEh0dHBCYXNlTW9kZWw7XG4gIHB1YmxpYyBwYXJhbVNlbGVjdFN1YkRpc3RyaWN0OiBTZWxlY3RQYXJhbU1vZGVsW107XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGluamVjdG9yOiBJbmplY3RvcixcbiAgICBASW5qZWN0KFVTRVJfSU5GTykgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlckluZm8sXG4gICAgQEluamVjdChQUk9GSUxFX0lOREVYRURfREIpIHByaXZhdGUgcHJvZmlsZUluZGV4ZWREQjogSW5kZXhlZERCRmFjdG9yeVNlcnZpY2UpIHtcbiAgICBzdXBlcihpbmplY3RvcixcbiAgICAgIHtcbiAgICAgICAgJ25hbWUnOiBbXSxcbiAgICAgICAgJ2VtYWlsJzogW10sXG4gICAgICAgICdwaG9uZU51bWJlcic6IFtdLFxuICAgICAgICAnYWRkcmVzcyc6IFtudWxsLCBbVmFsaWRhdG9ycy5taW5MZW5ndGgoNSldXSxcbiAgICAgICAgJ2NvdW50cnknOiBbXSxcbiAgICAgICAgJ3Byb3ZpbmNlJzogW10sXG4gICAgICAgICdjaXR5JzogW10sXG4gICAgICAgICdkaXN0cmljdCc6IFtdLFxuICAgICAgICAnc3ViRGlzdHJpY3QnOiBbXSxcbiAgICAgIH0pO1xuICAgIHRoaXMuZm9ybUdyb3VwSW1hZ2UgPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgICdpbWFnZSc6IFtdLFxuICAgIH0pO1xuICAgIHRoaXMuYXBpU2VsZWN0Q291bnRyeSA9IHRoaXMuYXBpWydtYXN0ZXInXVsnc2VsZWN0LWNvdW50cnknXTtcbiAgICB0aGlzLmFwaVNlbGVjdFByb3ZpbmNlID0gdGhpcy5hcGlbJ21hc3RlciddWydzZWxlY3QtcHJvdmluY2UnXTtcbiAgICB0aGlzLmFwaVNlbGVjdENpdHkgPSB0aGlzLmFwaVsnbWFzdGVyJ11bJ3NlbGVjdC1jaXR5J107XG4gICAgdGhpcy5hcGlTZWxlY3REaXN0cmljdCA9IHRoaXMuYXBpWydtYXN0ZXInXVsnc2VsZWN0LWRpc3RyaWN0J107XG4gICAgdGhpcy5hcGlTZWxlY3RTdWJEaXN0cmljdCA9IHRoaXMuYXBpWydtYXN0ZXInXVsnc2VsZWN0LXN1YmRpc3RyaWN0J107XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLm9uSW5pdCgncHJvZmlsZScsICdnZXQtcHJvZmlsZScpO1xuICAgIHRoaXMucHJvZmlsZUluZGV4ZWREQi5nZXQoJ2ltYWdlLWI2NCcpLnRoZW4oKHZhbHVlOiBhbnkpID0+IHtcbiAgICAgIHRoaXMuaW1hZ2UgPSB2YWx1ZTtcbiAgICB9KTtcbiAgICB0aGlzLnBhcmFtU2VsZWN0UHJvdmluY2UgPSBbe1xuICAgICAga2V5OiAnY291bnRyeScsXG4gICAgICB2YWx1ZTogJ3VuZGVmaW5lZCcsXG4gICAgfV07XG4gICAgdGhpcy5wYXJhbVNlbGVjdENpdHkgPSBbe1xuICAgICAga2V5OiAncHJvdmluY2UnLFxuICAgICAgdmFsdWU6ICd1bmRlZmluZWQnLFxuICAgIH1dO1xuICAgIHRoaXMucGFyYW1TZWxlY3REaXN0cmljdCA9IFt7XG4gICAgICBrZXk6ICdjaXR5JyxcbiAgICAgIHZhbHVlOiAndW5kZWZpbmVkJyxcbiAgICB9XTtcbiAgICB0aGlzLnBhcmFtU2VsZWN0U3ViRGlzdHJpY3QgPSBbe1xuICAgICAga2V5OiAnZGlzdHJpY3QnLFxuICAgICAgdmFsdWU6ICd1bmRlZmluZWQnLFxuICAgIH1dO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7fVxuXG4gIG9uSW5pdChzZXJ2aWNlTmFtZTogc3RyaW5nLCBhcGlOYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmxvYWRpbmdGb3JtID0gdHJ1ZTtcbiAgICB0aGlzLmV4ZWMoc2VydmljZU5hbWUsIGFwaU5hbWUpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAoc3VjY2VzczogYW55KSA9PiB7XG4gICAgICAgICAgdGhpcy5sb2FkaW5nRm9ybSA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzWyduYW1lJ10uc2V0VmFsdWUoc3VjY2Vzc1snbmFtZSddKTtcbiAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1snZW1haWwnXS5zZXRWYWx1ZShzdWNjZXNzWydlbWFpbCddKTtcbiAgICAgICAgICBzdWNjZXNzWydhZGRyZXNzJ10gPyB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1snYWRkcmVzcyddLnNldFZhbHVlKHN1Y2Nlc3NbJ2FkZHJlc3MnXSkgOiBudWxsO1xuICAgICAgICAgIHN1Y2Nlc3NbJ3Byb3ZpbmNlJ10gPyB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1sncHJvdmluY2UnXS5zZXRWYWx1ZShzdWNjZXNzWydwcm92aW5jZSddKSA6IG51bGw7XG4gICAgICAgICAgc3VjY2Vzc1snY2l0eSddID8gdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbJ2NpdHknXS5zZXRWYWx1ZShzdWNjZXNzWydjaXR5J10pIDogbnVsbDtcbiAgICAgICAgICBzdWNjZXNzWydkaXN0cmljdCddID8gdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbJ2Rpc3RyaWN0J10uc2V0VmFsdWUoc3VjY2Vzc1snZGlzdHJpY3QnXSkgOiBudWxsO1xuICAgICAgICAgIHN1Y2Nlc3NbJ3N1YkRpc3RyaWN0J10gPyB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1snc3ViRGlzdHJpY3QnXS5zZXRWYWx1ZShzdWNjZXNzWydzdWJEaXN0cmljdCddKSA6IG51bGw7XG4gICAgICAgICAgc3VjY2Vzc1sncGhvbmVOdW1iZXInXSA/IHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzWydwaG9uZU51bWJlciddLnNldFZhbHVlKHN1Y2Nlc3NbJ3Bob25lTnVtYmVyJ10pIDogbnVsbDtcbiAgICAgICAgICBzdWNjZXNzWydtb2JpbGVOdW1iZXInXSA/IHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzWydtb2JpbGVOdW1iZXInXS5zZXRWYWx1ZShzdWNjZXNzWydtb2JpbGVOdW1iZXInXSkgOiBudWxsO1xuICAgICAgICAgIHRoaXMuZm9ybUdyb3VwLm1hcmtBc1ByaXN0aW5lKCk7XG4gICAgICAgIH0sXG4gICAgICAgIChlcnJvcjogSHR0cEVycm9yUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICB0aGlzLmxvYWRpbmdGb3JtID0gdHJ1ZTtcbiAgICAgICAgICBjb25zdCBlcnI6IEFwaUJhc2VSZXNwb25zZSA9IGVycm9yWydlcnJvciddO1xuICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgIHRoaXMudG9hc3RyLnNob3dJMThuKGVyci5yZXNwU3RhdHVzTWVzc2FnZVtlcnIucmVzcFN0YXR1c0NvZGVdLCB0cnVlLCBudWxsLCAnZGFuZ2VyJyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudG9hc3RyLnNob3dJMThuKGVyciBhcyBhbnksIHRydWUsIG51bGwsICdkYW5nZXInKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICApO1xuICB9XG5cbiAgb25TZWxlY3RDb3VudHJ5KHNlbGVjdDogYW55KTogdm9pZCB7XG4gICAgdGhpcy5wYXJhbVNlbGVjdFByb3ZpbmNlID0gW1xuICAgICAge1xuICAgICAgICBrZXk6ICdjb3VudHJ5JyxcbiAgICAgICAgdmFsdWU6IHNlbGVjdCA/IHNlbGVjdC52YWx1ZSA6ICd1bmRlZmluZWQnLFxuICAgICAgfSxcbiAgICBdO1xuICAgIHRoaXMub25DbGVhclByb3ZpbmNlKCk7XG4gIH1cbiAgb25TZWxlY3RQcm92aW5jZShzZWxlY3Q6IGFueSk6IHZvaWQge1xuICAgIHRoaXMucGFyYW1TZWxlY3RDaXR5ID0gW1xuICAgICAge1xuICAgICAgICBrZXk6ICdwcm92aW5jZScsXG4gICAgICAgIHZhbHVlOiBzZWxlY3QgPyBzZWxlY3QudmFsdWUgOiAndW5kZWZpbmVkJyxcbiAgICAgIH0sXG4gICAgXTtcbiAgICB0aGlzLm9uQ2xlYXJQcm92aW5jZSgpO1xuICB9XG4gIG9uU2VsZWN0Q2l0eShzZWxlY3Q6IGFueSk6IHZvaWQge1xuICAgIHRoaXMucGFyYW1TZWxlY3REaXN0cmljdCA9IFtcbiAgICAgIHtcbiAgICAgICAga2V5OiAnY2l0eScsXG4gICAgICAgIHZhbHVlOiBzZWxlY3QgPyBzZWxlY3QudmFsdWUgOiAndW5kZWZpbmVkJyxcbiAgICAgIH0sXG4gICAgXTtcbiAgICB0aGlzLm9uQ2xlYXJDaXR5KCk7XG4gIH1cbiAgb25TZWxlY3REaXN0cmljdChzZWxlY3Q6IGFueSk6IHZvaWQge1xuICAgIHRoaXMucGFyYW1TZWxlY3RTdWJEaXN0cmljdCA9IFtcbiAgICAgIHtcbiAgICAgICAga2V5OiAnZGlzdHJpY3QnLFxuICAgICAgICB2YWx1ZTogc2VsZWN0ID8gc2VsZWN0LnZhbHVlIDogJ3VuZGVmaW5lZCcsXG4gICAgICB9LFxuICAgIF07XG4gICAgdGhpcy5vbkNsZWFyRGlzdHJpY3QoKTtcbiAgfVxuXG4gIG9uQ2xlYXJDb3VudHJ5KCk6IHZvaWQge1xuICAgIHRoaXMuZm9ybUdyb3VwLnBhdGNoVmFsdWUoe1xuICAgICAgJ3Byb3ZpbmNlJzogW10sXG4gICAgICAnY2l0eSc6IFtdLFxuICAgICAgJ2Rpc3RyaWN0JzogW10sXG4gICAgICAnc3ViRGlzdHJpY3QnOiBbXSxcbiAgICB9KTtcbiAgfVxuICBvbkNsZWFyUHJvdmluY2UoKTogdm9pZCB7XG4gICAgdGhpcy5mb3JtR3JvdXAucGF0Y2hWYWx1ZSh7XG4gICAgICAnY2l0eSc6IFtdLFxuICAgICAgJ2Rpc3RyaWN0JzogW10sXG4gICAgICAnc3ViRGlzdHJpY3QnOiBbXSxcbiAgICB9KTtcbiAgfVxuICBvbkNsZWFyQ2l0eSgpOiB2b2lkIHtcbiAgICB0aGlzLmZvcm1Hcm91cC5wYXRjaFZhbHVlKHtcbiAgICAgICdkaXN0cmljdCc6IFtdLFxuICAgICAgJ3N1YkRpc3RyaWN0JzogW10sXG4gICAgfSk7XG4gIH1cbiAgb25DbGVhckRpc3RyaWN0KCk6IHZvaWQge1xuICAgIHRoaXMuZm9ybUdyb3VwLmdldCgnc3ViRGlzdHJpY3QnKS5wYXRjaFZhbHVlKFtdKTtcbiAgfVxuXG4gIHVwbG9hZEltYWdlKGZpbGU6IGFueSkge1xuICAgIGNvbnN0IGRhdGE6IEZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgZGF0YS5hcHBlbmQoJ3Bob3RvJywgZmlsZSk7XG4gICAgdGhpcy5mb3JtR3JvdXBJbWFnZS5nZXQoJ2ltYWdlJykuZGlzYWJsZSgpO1xuICAgIHRoaXMuZXhlYygnZmlsZScsICdwaG90by1wcm9maWxlJywgZGF0YSkuc3Vic2NyaWJlKFxuICAgICAgICAoc3VjY2VzczogQXBpQmFzZVJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgdGhpcy51c2VyU2VydmljZS51cGRhdGVQaG90b1VzZXIoZmlsZSwgc3VjY2Vzcy5yZXNwU3RhdHVzTWVzc2FnZVsnY2hlY2tzdW0nXSk7XG4gICAgICAgICAgdGhpcy51cGxvYWRGaW5pc2hlZCA9IHRydWU7XG4gICAgICAgICAgdGhpcy5mb3JtR3JvdXBJbWFnZS5tYXJrQXNQcmlzdGluZSgpO1xuICAgICAgICAgIHRoaXMudG9hc3RyLnNob3dJMThuKHN1Y2Nlc3MucmVzcFN0YXR1c01lc3NhZ2Vbc3VjY2Vzcy5yZXNwU3RhdHVzQ29kZV0sIHRydWUsIG51bGwsICdzdWNjZXNzJyk7XG4gICAgICAgIH0sXG4gICAgICAgIChlcnJvcjogQXBpQmFzZVJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgdGhpcy5mb3JtR3JvdXBJbWFnZS5nZXQoJ2ltYWdlJykuZW5hYmxlKCk7XG4gICAgICAgICAgdGhpcy50b2FzdHIuc2hvd0kxOG4oZXJyb3IucmVzcFN0YXR1c01lc3NhZ2VbZXJyb3IucmVzcFN0YXR1c0NvZGVdLCB0cnVlLCBudWxsLCAnZGFuZ2VyJyk7XG4gICAgICAgIH0sXG4gICAgKTtcbiAgfVxuXG4gIHZhbHVlU2VsZWN0KHByb3A6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMuZm9ybUdyb3VwLmdldChwcm9wKS52YWx1ZSkge1xuICAgICAgaWYgKHRoaXMuZm9ybUdyb3VwLmdldChwcm9wKS52YWx1ZS5sYWJlbCkge1xuICAgICAgICByZXR1cm4gdGhpcy5mb3JtR3JvdXAuZ2V0KHByb3ApLnZhbHVlLmxhYmVsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9ybUdyb3VwLmdldChwcm9wKS52YWx1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgb25TdWJtaXQoKSB7XG4gICAgY29uc3QgZGF0YTogYW55ID0ge1xuICAgICAgbmFtZTogdGhpcy5mb3JtR3JvdXAuZ2V0KCduYW1lJykudmFsdWUsXG4gICAgICBlbWFpbDogdGhpcy5mb3JtR3JvdXAuZ2V0KCdlbWFpbCcpLnZhbHVlLFxuICAgICAgcGhvbmVOdW1iZXI6IHRoaXMuZm9ybUdyb3VwLmdldCgncGhvbmVOdW1iZXInKS52YWx1ZSxcbiAgICAgIGFkZHJlc3M6IHRoaXMuZm9ybUdyb3VwLmdldCgnYWRkcmVzcycpLnZhbHVlLFxuICAgICAgY291bnRyeTogdGhpcy52YWx1ZVNlbGVjdCgnY291bnRyeScpLFxuICAgICAgcHJvdmluY2U6IHRoaXMudmFsdWVTZWxlY3QoJ3Byb3ZpbmNlJyksXG4gICAgICBjaXR5OiB0aGlzLnZhbHVlU2VsZWN0KCdjaXR5JyksXG4gICAgICBkaXN0cmljdDogdGhpcy52YWx1ZVNlbGVjdCgnZGlzdHJpY3QnKSxcbiAgICAgIHN1YkRpc3RyaWN0OiB0aGlzLnZhbHVlU2VsZWN0KCdzdWJEaXN0cmljdCcpLFxuICAgIH07XG4gICAgKHN1cGVyLm9uU3VibWl0KGRhdGEsICdwcm9maWxlJywgJ2NoYW5nZS1wcm9maWxlJykgYXMgT2JzZXJ2YWJsZTxBcGlCYXNlUmVzcG9uc2U+KVxuICAgICAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgICAgICAgLnN1YnNjcmliZSgocmVzcG9uc2U6IEFwaUJhc2VSZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHJlc3BvbnNlLnJlc3BTdGF0dXNDb2RlKSB7XG4gICAgICAgICAgICAgICAgICBjYXNlIFJlc3BvbnNlQ29kZS5FUlJfU0NSMDAwOC50b1N0cmluZygpOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1snZW1haWwnXS5zZXRFcnJvcnMoe1xuICAgICAgICAgICAgICAgICAgICAgICdlbWFpbCc6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgIGNhc2UgUmVzcG9uc2VDb2RlLkVSUl9TQ1IwMDA3QS50b1N0cmluZygpOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1sncGhvbmVOdW1iZXInXS5zZXRFcnJvcnMoe1xuICAgICAgICAgICAgICAgICAgICAgICdlcnJvci5wYXR0ZXJuLnBob25lTnVtYmVyJzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgfVxuXG59XG4iXX0=