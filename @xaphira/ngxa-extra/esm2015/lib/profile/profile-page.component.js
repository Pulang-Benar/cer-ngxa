/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Injector, Inject } from '@angular/core';
import { Validators } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { PROFILE_INDEXED_DB } from '@xaphira/shared';
import { ResponseCode, USER_INFO, UserInfo, } from '@xaphira/shared';
import { Pattern } from '@xaphira/utils';
import { BaseFormComponent } from '@xaphira/ngxa-common';
export class ProfilePageComponent extends BaseFormComponent {
    /**
     * @param {?} injector
     * @param {?} userService
     * @param {?} profileIndexedDB
     */
    constructor(injector, userService, profileIndexedDB) {
        super(injector, {
            'name': [],
            'email': [],
            'phoneNumber': [],
            'address': [null, [Validators.minLength(5)]],
            'country': [],
            'province': [],
            'city': [],
            'district': [],
            'subDistrict': [],
        });
        this.injector = injector;
        this.userService = userService;
        this.profileIndexedDB = profileIndexedDB;
        this.patternEmail = Pattern.EMAIL;
        this.patternPhoneNumber = Pattern.PHONE_NUMBER;
        this.minLength = 5;
        this.disabledUpload = false;
        this.formGroupImage = this.formBuilder.group({
            'image': [],
        });
        this.apiSelectCountry = this.api['master']['select-country'];
        this.apiSelectProvince = this.api['master']['select-province'];
        this.apiSelectCity = this.api['master']['select-city'];
        this.apiSelectDistrict = this.api['master']['select-district'];
        this.apiSelectSubDistrict = this.api['master']['select-subdistrict'];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.onInit('profile', 'get-profile');
        this.profileIndexedDB.get('image-b64').then((/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            this.image = value;
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
    }
    /**
     * @return {?}
     */
    ngOnDestroy() { }
    /**
     * @param {?} serviceName
     * @param {?} apiName
     * @return {?}
     */
    onInit(serviceName, apiName) {
        this.loadingForm = true;
        this.exec(serviceName, apiName)
            .subscribe((/**
         * @param {?} success
         * @return {?}
         */
        (success) => {
            this.loadingForm = false;
            this.formGroup.controls['name'].setValue(success['name']);
            this.formGroup.controls['email'].setValue(success['email']);
            success['address'] ? this.formGroup.controls['address'].setValue(success['address']) : null;
            success['province'] ? this.formGroup.controls['province'].setValue(success['province']) : null;
            success['city'] ? this.formGroup.controls['city'].setValue(success['city']) : null;
            success['district'] ? this.formGroup.controls['district'].setValue(success['district']) : null;
            success['subDistrict'] ? this.formGroup.controls['subDistrict'].setValue(success['subDistrict']) : null;
            success['phoneNumber'] ? this.formGroup.controls['phoneNumber'].setValue(success['phoneNumber']) : null;
            success['mobileNumber'] ? this.formGroup.controls['mobileNumber'].setValue(success['mobileNumber']) : null;
            this.formGroup.markAsPristine();
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
     * @param {?} select
     * @return {?}
     */
    onSelectCountry(select) {
        this.paramSelectProvince = [
            {
                key: 'country',
                value: select ? select.value : 'undefined',
            },
        ];
        this.onClearProvince();
    }
    /**
     * @param {?} select
     * @return {?}
     */
    onSelectProvince(select) {
        this.paramSelectCity = [
            {
                key: 'province',
                value: select ? select.value : 'undefined',
            },
        ];
        this.onClearProvince();
    }
    /**
     * @param {?} select
     * @return {?}
     */
    onSelectCity(select) {
        this.paramSelectDistrict = [
            {
                key: 'city',
                value: select ? select.value : 'undefined',
            },
        ];
        this.onClearCity();
    }
    /**
     * @param {?} select
     * @return {?}
     */
    onSelectDistrict(select) {
        this.paramSelectSubDistrict = [
            {
                key: 'district',
                value: select ? select.value : 'undefined',
            },
        ];
        this.onClearDistrict();
    }
    /**
     * @return {?}
     */
    onClearCountry() {
        this.formGroup.patchValue({
            'province': [],
            'city': [],
            'district': [],
            'subDistrict': [],
        });
    }
    /**
     * @return {?}
     */
    onClearProvince() {
        this.formGroup.patchValue({
            'city': [],
            'district': [],
            'subDistrict': [],
        });
    }
    /**
     * @return {?}
     */
    onClearCity() {
        this.formGroup.patchValue({
            'district': [],
            'subDistrict': [],
        });
    }
    /**
     * @return {?}
     */
    onClearDistrict() {
        this.formGroup.get('subDistrict').patchValue([]);
    }
    /**
     * @param {?} file
     * @return {?}
     */
    uploadImage(file) {
        /** @type {?} */
        const data = new FormData();
        data.append('photo', file);
        this.formGroupImage.get('image').disable();
        this.exec('file', 'photo-profile', data).subscribe((/**
         * @param {?} success
         * @return {?}
         */
        (success) => {
            this.userService.updatePhotoUser(file, success.respStatusMessage['checksum']);
            this.uploadFinished = true;
            this.formGroupImage.markAsPristine();
            this.toastr.showI18n(success.respStatusMessage[success.respStatusCode], true, null, 'success');
        }), (/**
         * @param {?} error
         * @return {?}
         */
        (error) => {
            this.formGroupImage.get('image').enable();
            this.toastr.showI18n(error.respStatusMessage[error.respStatusCode], true, null, 'danger');
        }));
    }
    /**
     * @param {?} prop
     * @return {?}
     */
    valueSelect(prop) {
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
    }
    /**
     * @return {?}
     */
    onSubmit() {
        /** @type {?} */
        const data = {
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
        ((/** @type {?} */ (super.onSubmit(data, 'profile', 'change-profile'))))
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @param {?} response
         * @return {?}
         */
        (response) => {
            if (response) {
                switch (response.respStatusCode) {
                    case ResponseCode.ERR_SCR0008.toString():
                        this.formGroup.controls['email'].setErrors({
                            'email': true,
                        });
                        break;
                    case ResponseCode.ERR_SCR0007A.toString():
                        this.formGroup.controls['phoneNumber'].setErrors({
                            'error.pattern.phoneNumber': true,
                        });
                        break;
                    default:
                        break;
                }
            }
        }));
    }
}
ProfilePageComponent.decorators = [
    { type: Component, args: [{
                selector: 'xa-profile-page',
                template: "<xa-page-outlet [header]=\"'Profile'\">\n  <div class=\"row\">\n    <div class=\"col-md-4 col-lg-4 col-xxxl-6\">\n      <form [formGroup]=\"formGroupImage\">\n        <xa-image-upload\n          [radius]=\"50\"\n          [skeleton]=\"loadingForm\"\n          [image]=\"image\"\n          [uploadFn]=\"uploadFinished\"\n          (onUpload)=\"uploadImage($event)\"\n          formControlName=\"image\">\n        </xa-image-upload>\n      </form>\n    </div>\n    <div class=\"col-md-8 col-lg-8 col-xxxl-6\">\n      <form [formGroup]=\"formGroup\">\n        <xa-input-text\n          [name]=\"'name'\"\n          [label]=\"'Name'\"\n          [required]=\"true\"\n          [skeleton]=\"loadingForm\"\n          formControlName=\"name\">\n        </xa-input-text>\n        <xa-input-text\n          [name]=\"'email'\"\n          [label]=\"'Email'\"\n          [required]=\"true\"\n          [pattern]=\"patternEmail\"\n          [skeleton]=\"loadingForm\"\n          formControlName=\"email\">\n        </xa-input-text>\n        <xa-input-text\n          [name]=\"'phoneNumber'\"\n          [label]=\"'Telephone'\"\n          [required]=\"true\"\n          [pattern]=\"patternPhoneNumber\"\n          [skeleton]=\"loadingForm\"\n          formControlName=\"phoneNumber\">\n        </xa-input-text>\n        <xa-textarea\n          [name]=\"'address'\"\n          [label]=\"'Address'\"\n          [required]=\"true\"\n          [minLength]=\"minLength\"\n          [skeleton]=\"loadingForm\"\n          formControlName=\"address\">\n        </xa-textarea>\n        <xa-select\n          [name]=\"'country'\"\n          [label]=\"'Country'\"\n          [api]=\"apiSelectCountry\"\n          [skeleton]=\"loadingForm\"\n          (onSelect)=\"onSelectCountry($event)\"\n          (onClear)=\"onClearCountry()\"\n          formControlName=\"country\">\n        </xa-select>\n        <xa-select\n          [name]=\"'province'\"\n          [label]=\"'Province'\"\n          [api]=\"apiSelectProvince\"\n          [queryParam]=\"paramSelectProvince\"\n          [skeleton]=\"loadingForm\"\n          (onSelect)=\"onSelectProvince($event)\"\n          (onClear)=\"onClearProvince()\"\n          formControlName=\"province\">\n        </xa-select>\n        <xa-select\n          [name]=\"'city'\"\n          [label]=\"'City'\"\n          [api]=\"apiSelectCity\"\n          [queryParam]=\"paramSelectCity\"\n          [skeleton]=\"loadingForm\"\n          (onSelect)=\"onSelectCity($event)\"\n          (onClear)=\"onClearCity()\"\n          formControlName=\"city\">\n        </xa-select>\n        <xa-select\n          [name]=\"'district'\"\n          [label]=\"'District'\"\n          [api]=\"apiSelectDistrict\"\n          [queryParam]=\"paramSelectDistrict\"\n          [skeleton]=\"loadingForm\"\n          (onSelect)=\"onSelectDistrict($event)\"\n          (onClear)=\"onClearDistrict()\"\n          formControlName=\"district\">\n        </xa-select>\n        <xa-select\n          [name]=\"'subDistrict'\"\n          [label]=\"'Sub District'\"\n          [api]=\"apiSelectSubDistrict\"\n          [queryParam]=\"paramSelectSubDistrict\"\n          [skeleton]=\"loadingForm\"\n          formControlName=\"subDistrict\">\n        </xa-select>\n        <xa-button-submit\n          (onSubmit)=\"onSubmit()\"\n          [name]=\"'Update Profile'\"\n          [disabledButton]=\"disabled\"\n          [formGroupButton]=\"formGroup\"\n          [skeleton]=\"loadingForm\">\n        </xa-button-submit>\n      </form>\n    </div>\n  </div>\n</xa-page-outlet>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
ProfilePageComponent.ctorParameters = () => [
    { type: Injector },
    { type: UserInfo, decorators: [{ type: Inject, args: [USER_INFO,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [PROFILE_INDEXED_DB,] }] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS1wYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B4YXBoaXJhL25neGEtZXh0cmEvIiwic291cmNlcyI6WyJsaWIvcHJvZmlsZS9wcm9maWxlLXBhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFFBQVEsRUFBYSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLFVBQVUsRUFBYSxNQUFNLGdCQUFnQixDQUFDO0FBRXZELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQTJELGtCQUFrQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDOUcsT0FBTyxFQUNMLFlBQVksRUFDWixTQUFTLEVBQ1QsUUFBUSxHQUNULE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxpQkFBaUIsRUFBb0IsTUFBTSxzQkFBc0IsQ0FBQztBQVEzRSxNQUFNLE9BQU8sb0JBQXFCLFNBQVEsaUJBQXNCOzs7Ozs7SUF3QjlELFlBQ1MsUUFBa0IsRUFDRSxXQUFxQixFQUNaLGdCQUF5QztRQUM3RSxLQUFLLENBQUMsUUFBUSxFQUNaO1lBQ0UsTUFBTSxFQUFFLEVBQUU7WUFDVixPQUFPLEVBQUUsRUFBRTtZQUNYLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLFNBQVMsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1QyxTQUFTLEVBQUUsRUFBRTtZQUNiLFVBQVUsRUFBRSxFQUFFO1lBQ2QsTUFBTSxFQUFFLEVBQUU7WUFDVixVQUFVLEVBQUUsRUFBRTtZQUNkLGFBQWEsRUFBRSxFQUFFO1NBQ2xCLENBQUMsQ0FBQztRQWRFLGFBQVEsR0FBUixRQUFRLENBQVU7UUFD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QUFDO1lBQzVGLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDL0YsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNuRixPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQy9GLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDeEcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUN4RyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQzNHLElBQUksQ0FBQyxTQUFT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LCBJbmplY3RvciwgT25EZXN0cm95LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFZhbGlkYXRvcnMsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEFwaUJhc2VSZXNwb25zZSwgSHR0cEJhc2VNb2RlbCwgSW5kZXhlZERCRmFjdG9yeVNlcnZpY2UsIFBST0ZJTEVfSU5ERVhFRF9EQiB9IGZyb20gJ0B4YXBoaXJhL3NoYXJlZCc7XG5pbXBvcnQge1xuICBSZXNwb25zZUNvZGUsXG4gIFVTRVJfSU5GTyxcbiAgVXNlckluZm8sXG59IGZyb20gJ0B4YXBoaXJhL3NoYXJlZCc7XG5pbXBvcnQgeyBQYXR0ZXJuIH0gZnJvbSAnQHhhcGhpcmEvdXRpbHMnO1xuaW1wb3J0IHsgQmFzZUZvcm1Db21wb25lbnQsIFNlbGVjdFBhcmFtTW9kZWwgfSBmcm9tICdAeGFwaGlyYS9uZ3hhLWNvbW1vbic7XG5pbXBvcnQgeyBIdHRwRXJyb3JSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAneGEtcHJvZmlsZS1wYWdlJyxcbiAgc3R5bGVVcmxzOiBbJy4vcHJvZmlsZS1wYWdlLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9maWxlLXBhZ2UuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9maWxlUGFnZUNvbXBvbmVudCBleHRlbmRzIEJhc2VGb3JtQ29tcG9uZW50PGFueT4gaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgcHVibGljIGltYWdlOiBzdHJpbmc7XG4gIHB1YmxpYyBmb3JtR3JvdXBJbWFnZTogRm9ybUdyb3VwO1xuICBwdWJsaWMgdXBsb2FkRmluaXNoZWQ6IGJvb2xlYW47XG4gIHB1YmxpYyBwYXR0ZXJuRW1haWw6IHN0cmluZyA9IFBhdHRlcm4uRU1BSUw7XG4gIHB1YmxpYyBwYXR0ZXJuUGhvbmVOdW1iZXI6IHN0cmluZyA9IFBhdHRlcm4uUEhPTkVfTlVNQkVSO1xuICBwdWJsaWMgbWluTGVuZ3RoOiBudW1iZXIgPSA1O1xuICBwdWJsaWMgZGlzYWJsZWRVcGxvYWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBwdWJsaWMgYXBpU2VsZWN0Q291bnRyeTogSHR0cEJhc2VNb2RlbDtcblxuICBwdWJsaWMgYXBpU2VsZWN0UHJvdmluY2U6IEh0dHBCYXNlTW9kZWw7XG4gIHB1YmxpYyBwYXJhbVNlbGVjdFByb3ZpbmNlOiBTZWxlY3RQYXJhbU1vZGVsW107XG5cbiAgcHVibGljIGFwaVNlbGVjdENpdHk6IEh0dHBCYXNlTW9kZWw7XG4gIHB1YmxpYyBwYXJhbVNlbGVjdENpdHk6IFNlbGVjdFBhcmFtTW9kZWxbXTtcblxuICBwdWJsaWMgYXBpU2VsZWN0RGlzdHJpY3Q6IEh0dHBCYXNlTW9kZWw7XG4gIHB1YmxpYyBwYXJhbVNlbGVjdERpc3RyaWN0OiBTZWxlY3RQYXJhbU1vZGVsW107XG5cbiAgcHVibGljIGFwaVNlbGVjdFN1YkRpc3RyaWN0OiBIdHRwQmFzZU1vZGVsO1xuICBwdWJsaWMgcGFyYW1TZWxlY3RTdWJEaXN0cmljdDogU2VsZWN0UGFyYW1Nb2RlbFtdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgQEluamVjdChVU0VSX0lORk8pIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJJbmZvLFxuICAgIEBJbmplY3QoUFJPRklMRV9JTkRFWEVEX0RCKSBwcml2YXRlIHByb2ZpbGVJbmRleGVkREI6IEluZGV4ZWREQkZhY3RvcnlTZXJ2aWNlKSB7XG4gICAgc3VwZXIoaW5qZWN0b3IsXG4gICAgICB7XG4gICAgICAgICduYW1lJzogW10sXG4gICAgICAgICdlbWFpbCc6IFtdLFxuICAgICAgICAncGhvbmVOdW1iZXInOiBbXSxcbiAgICAgICAgJ2FkZHJlc3MnOiBbbnVsbCwgW1ZhbGlkYXRvcnMubWluTGVuZ3RoKDUpXV0sXG4gICAgICAgICdjb3VudHJ5JzogW10sXG4gICAgICAgICdwcm92aW5jZSc6IFtdLFxuICAgICAgICAnY2l0eSc6IFtdLFxuICAgICAgICAnZGlzdHJpY3QnOiBbXSxcbiAgICAgICAgJ3N1YkRpc3RyaWN0JzogW10sXG4gICAgICB9KTtcbiAgICB0aGlzLmZvcm1Hcm91cEltYWdlID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICAnaW1hZ2UnOiBbXSxcbiAgICB9KTtcbiAgICB0aGlzLmFwaVNlbGVjdENvdW50cnkgPSB0aGlzLmFwaVsnbWFzdGVyJ11bJ3NlbGVjdC1jb3VudHJ5J107XG4gICAgdGhpcy5hcGlTZWxlY3RQcm92aW5jZSA9IHRoaXMuYXBpWydtYXN0ZXInXVsnc2VsZWN0LXByb3ZpbmNlJ107XG4gICAgdGhpcy5hcGlTZWxlY3RDaXR5ID0gdGhpcy5hcGlbJ21hc3RlciddWydzZWxlY3QtY2l0eSddO1xuICAgIHRoaXMuYXBpU2VsZWN0RGlzdHJpY3QgPSB0aGlzLmFwaVsnbWFzdGVyJ11bJ3NlbGVjdC1kaXN0cmljdCddO1xuICAgIHRoaXMuYXBpU2VsZWN0U3ViRGlzdHJpY3QgPSB0aGlzLmFwaVsnbWFzdGVyJ11bJ3NlbGVjdC1zdWJkaXN0cmljdCddO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5vbkluaXQoJ3Byb2ZpbGUnLCAnZ2V0LXByb2ZpbGUnKTtcbiAgICB0aGlzLnByb2ZpbGVJbmRleGVkREIuZ2V0KCdpbWFnZS1iNjQnKS50aGVuKCh2YWx1ZTogYW55KSA9PiB7XG4gICAgICB0aGlzLmltYWdlID0gdmFsdWU7XG4gICAgfSk7XG4gICAgdGhpcy5wYXJhbVNlbGVjdFByb3ZpbmNlID0gW3tcbiAgICAgIGtleTogJ2NvdW50cnknLFxuICAgICAgdmFsdWU6ICd1bmRlZmluZWQnLFxuICAgIH1dO1xuICAgIHRoaXMucGFyYW1TZWxlY3RDaXR5ID0gW3tcbiAgICAgIGtleTogJ3Byb3ZpbmNlJyxcbiAgICAgIHZhbHVlOiAndW5kZWZpbmVkJyxcbiAgICB9XTtcbiAgICB0aGlzLnBhcmFtU2VsZWN0RGlzdHJpY3QgPSBbe1xuICAgICAga2V5OiAnY2l0eScsXG4gICAgICB2YWx1ZTogJ3VuZGVmaW5lZCcsXG4gICAgfV07XG4gICAgdGhpcy5wYXJhbVNlbGVjdFN1YkRpc3RyaWN0ID0gW3tcbiAgICAgIGtleTogJ2Rpc3RyaWN0JyxcbiAgICAgIHZhbHVlOiAndW5kZWZpbmVkJyxcbiAgICB9XTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge31cblxuICBvbkluaXQoc2VydmljZU5hbWU6IHN0cmluZywgYXBpTmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5sb2FkaW5nRm9ybSA9IHRydWU7XG4gICAgdGhpcy5leGVjKHNlcnZpY2VOYW1lLCBhcGlOYW1lKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHN1Y2Nlc3M6IGFueSkgPT4ge1xuICAgICAgICAgIHRoaXMubG9hZGluZ0Zvcm0gPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1snbmFtZSddLnNldFZhbHVlKHN1Y2Nlc3NbJ25hbWUnXSk7XG4gICAgICAgICAgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbJ2VtYWlsJ10uc2V0VmFsdWUoc3VjY2Vzc1snZW1haWwnXSk7XG4gICAgICAgICAgc3VjY2Vzc1snYWRkcmVzcyddID8gdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbJ2FkZHJlc3MnXS5zZXRWYWx1ZShzdWNjZXNzWydhZGRyZXNzJ10pIDogbnVsbDtcbiAgICAgICAgICBzdWNjZXNzWydwcm92aW5jZSddID8gdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbJ3Byb3ZpbmNlJ10uc2V0VmFsdWUoc3VjY2Vzc1sncHJvdmluY2UnXSkgOiBudWxsO1xuICAgICAgICAgIHN1Y2Nlc3NbJ2NpdHknXSA/IHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzWydjaXR5J10uc2V0VmFsdWUoc3VjY2Vzc1snY2l0eSddKSA6IG51bGw7XG4gICAgICAgICAgc3VjY2Vzc1snZGlzdHJpY3QnXSA/IHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzWydkaXN0cmljdCddLnNldFZhbHVlKHN1Y2Nlc3NbJ2Rpc3RyaWN0J10pIDogbnVsbDtcbiAgICAgICAgICBzdWNjZXNzWydzdWJEaXN0cmljdCddID8gdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbJ3N1YkRpc3RyaWN0J10uc2V0VmFsdWUoc3VjY2Vzc1snc3ViRGlzdHJpY3QnXSkgOiBudWxsO1xuICAgICAgICAgIHN1Y2Nlc3NbJ3Bob25lTnVtYmVyJ10gPyB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1sncGhvbmVOdW1iZXInXS5zZXRWYWx1ZShzdWNjZXNzWydwaG9uZU51bWJlciddKSA6IG51bGw7XG4gICAgICAgICAgc3VjY2Vzc1snbW9iaWxlTnVtYmVyJ10gPyB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1snbW9iaWxlTnVtYmVyJ10uc2V0VmFsdWUoc3VjY2Vzc1snbW9iaWxlTnVtYmVyJ10pIDogbnVsbDtcbiAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5tYXJrQXNQcmlzdGluZSgpO1xuICAgICAgICB9LFxuICAgICAgICAoZXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgdGhpcy5sb2FkaW5nRm9ybSA9IHRydWU7XG4gICAgICAgICAgY29uc3QgZXJyOiBBcGlCYXNlUmVzcG9uc2UgPSBlcnJvclsnZXJyb3InXTtcbiAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICB0aGlzLnRvYXN0ci5zaG93STE4bihlcnIucmVzcFN0YXR1c01lc3NhZ2VbZXJyLnJlc3BTdGF0dXNDb2RlXSwgdHJ1ZSwgbnVsbCwgJ2RhbmdlcicpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRvYXN0ci5zaG93STE4bihlcnIgYXMgYW55LCB0cnVlLCBudWxsLCAnZGFuZ2VyJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgKTtcbiAgfVxuXG4gIG9uU2VsZWN0Q291bnRyeShzZWxlY3Q6IGFueSk6IHZvaWQge1xuICAgIHRoaXMucGFyYW1TZWxlY3RQcm92aW5jZSA9IFtcbiAgICAgIHtcbiAgICAgICAga2V5OiAnY291bnRyeScsXG4gICAgICAgIHZhbHVlOiBzZWxlY3QgPyBzZWxlY3QudmFsdWUgOiAndW5kZWZpbmVkJyxcbiAgICAgIH0sXG4gICAgXTtcbiAgICB0aGlzLm9uQ2xlYXJQcm92aW5jZSgpO1xuICB9XG4gIG9uU2VsZWN0UHJvdmluY2Uoc2VsZWN0OiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnBhcmFtU2VsZWN0Q2l0eSA9IFtcbiAgICAgIHtcbiAgICAgICAga2V5OiAncHJvdmluY2UnLFxuICAgICAgICB2YWx1ZTogc2VsZWN0ID8gc2VsZWN0LnZhbHVlIDogJ3VuZGVmaW5lZCcsXG4gICAgICB9LFxuICAgIF07XG4gICAgdGhpcy5vbkNsZWFyUHJvdmluY2UoKTtcbiAgfVxuICBvblNlbGVjdENpdHkoc2VsZWN0OiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnBhcmFtU2VsZWN0RGlzdHJpY3QgPSBbXG4gICAgICB7XG4gICAgICAgIGtleTogJ2NpdHknLFxuICAgICAgICB2YWx1ZTogc2VsZWN0ID8gc2VsZWN0LnZhbHVlIDogJ3VuZGVmaW5lZCcsXG4gICAgICB9LFxuICAgIF07XG4gICAgdGhpcy5vbkNsZWFyQ2l0eSgpO1xuICB9XG4gIG9uU2VsZWN0RGlzdHJpY3Qoc2VsZWN0OiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnBhcmFtU2VsZWN0U3ViRGlzdHJpY3QgPSBbXG4gICAgICB7XG4gICAgICAgIGtleTogJ2Rpc3RyaWN0JyxcbiAgICAgICAgdmFsdWU6IHNlbGVjdCA/IHNlbGVjdC52YWx1ZSA6ICd1bmRlZmluZWQnLFxuICAgICAgfSxcbiAgICBdO1xuICAgIHRoaXMub25DbGVhckRpc3RyaWN0KCk7XG4gIH1cblxuICBvbkNsZWFyQ291bnRyeSgpOiB2b2lkIHtcbiAgICB0aGlzLmZvcm1Hcm91cC5wYXRjaFZhbHVlKHtcbiAgICAgICdwcm92aW5jZSc6IFtdLFxuICAgICAgJ2NpdHknOiBbXSxcbiAgICAgICdkaXN0cmljdCc6IFtdLFxuICAgICAgJ3N1YkRpc3RyaWN0JzogW10sXG4gICAgfSk7XG4gIH1cbiAgb25DbGVhclByb3ZpbmNlKCk6IHZvaWQge1xuICAgIHRoaXMuZm9ybUdyb3VwLnBhdGNoVmFsdWUoe1xuICAgICAgJ2NpdHknOiBbXSxcbiAgICAgICdkaXN0cmljdCc6IFtdLFxuICAgICAgJ3N1YkRpc3RyaWN0JzogW10sXG4gICAgfSk7XG4gIH1cbiAgb25DbGVhckNpdHkoKTogdm9pZCB7XG4gICAgdGhpcy5mb3JtR3JvdXAucGF0Y2hWYWx1ZSh7XG4gICAgICAnZGlzdHJpY3QnOiBbXSxcbiAgICAgICdzdWJEaXN0cmljdCc6IFtdLFxuICAgIH0pO1xuICB9XG4gIG9uQ2xlYXJEaXN0cmljdCgpOiB2b2lkIHtcbiAgICB0aGlzLmZvcm1Hcm91cC5nZXQoJ3N1YkRpc3RyaWN0JykucGF0Y2hWYWx1ZShbXSk7XG4gIH1cblxuICB1cGxvYWRJbWFnZShmaWxlOiBhbnkpIHtcbiAgICBjb25zdCBkYXRhOiBGb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIGRhdGEuYXBwZW5kKCdwaG90bycsIGZpbGUpO1xuICAgIHRoaXMuZm9ybUdyb3VwSW1hZ2UuZ2V0KCdpbWFnZScpLmRpc2FibGUoKTtcbiAgICB0aGlzLmV4ZWMoJ2ZpbGUnLCAncGhvdG8tcHJvZmlsZScsIGRhdGEpLnN1YnNjcmliZShcbiAgICAgICAgKHN1Y2Nlc3M6IEFwaUJhc2VSZXNwb25zZSkgPT4ge1xuICAgICAgICAgIHRoaXMudXNlclNlcnZpY2UudXBkYXRlUGhvdG9Vc2VyKGZpbGUsIHN1Y2Nlc3MucmVzcFN0YXR1c01lc3NhZ2VbJ2NoZWNrc3VtJ10pO1xuICAgICAgICAgIHRoaXMudXBsb2FkRmluaXNoZWQgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuZm9ybUdyb3VwSW1hZ2UubWFya0FzUHJpc3RpbmUoKTtcbiAgICAgICAgICB0aGlzLnRvYXN0ci5zaG93STE4bihzdWNjZXNzLnJlc3BTdGF0dXNNZXNzYWdlW3N1Y2Nlc3MucmVzcFN0YXR1c0NvZGVdLCB0cnVlLCBudWxsLCAnc3VjY2VzcycpO1xuICAgICAgICB9LFxuICAgICAgICAoZXJyb3I6IEFwaUJhc2VSZXNwb25zZSkgPT4ge1xuICAgICAgICAgIHRoaXMuZm9ybUdyb3VwSW1hZ2UuZ2V0KCdpbWFnZScpLmVuYWJsZSgpO1xuICAgICAgICAgIHRoaXMudG9hc3RyLnNob3dJMThuKGVycm9yLnJlc3BTdGF0dXNNZXNzYWdlW2Vycm9yLnJlc3BTdGF0dXNDb2RlXSwgdHJ1ZSwgbnVsbCwgJ2RhbmdlcicpO1xuICAgICAgICB9LFxuICAgICk7XG4gIH1cblxuICB2YWx1ZVNlbGVjdChwcm9wOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLmZvcm1Hcm91cC5nZXQocHJvcCkudmFsdWUpIHtcbiAgICAgIGlmICh0aGlzLmZvcm1Hcm91cC5nZXQocHJvcCkudmFsdWUubGFiZWwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9ybUdyb3VwLmdldChwcm9wKS52YWx1ZS5sYWJlbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZvcm1Hcm91cC5nZXQocHJvcCkudmFsdWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIG9uU3VibWl0KCkge1xuICAgIGNvbnN0IGRhdGE6IGFueSA9IHtcbiAgICAgIG5hbWU6IHRoaXMuZm9ybUdyb3VwLmdldCgnbmFtZScpLnZhbHVlLFxuICAgICAgZW1haWw6IHRoaXMuZm9ybUdyb3VwLmdldCgnZW1haWwnKS52YWx1ZSxcbiAgICAgIHBob25lTnVtYmVyOiB0aGlzLmZvcm1Hcm91cC5nZXQoJ3Bob25lTnVtYmVyJykudmFsdWUsXG4gICAgICBhZGRyZXNzOiB0aGlzLmZvcm1Hcm91cC5nZXQoJ2FkZHJlc3MnKS52YWx1ZSxcbiAgICAgIGNvdW50cnk6IHRoaXMudmFsdWVTZWxlY3QoJ2NvdW50cnknKSxcbiAgICAgIHByb3ZpbmNlOiB0aGlzLnZhbHVlU2VsZWN0KCdwcm92aW5jZScpLFxuICAgICAgY2l0eTogdGhpcy52YWx1ZVNlbGVjdCgnY2l0eScpLFxuICAgICAgZGlzdHJpY3Q6IHRoaXMudmFsdWVTZWxlY3QoJ2Rpc3RyaWN0JyksXG4gICAgICBzdWJEaXN0cmljdDogdGhpcy52YWx1ZVNlbGVjdCgnc3ViRGlzdHJpY3QnKSxcbiAgICB9O1xuICAgIChzdXBlci5vblN1Ym1pdChkYXRhLCAncHJvZmlsZScsICdjaGFuZ2UtcHJvZmlsZScpIGFzIE9ic2VydmFibGU8QXBpQmFzZVJlc3BvbnNlPilcbiAgICAgICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKHJlc3BvbnNlOiBBcGlCYXNlUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChyZXNwb25zZS5yZXNwU3RhdHVzQ29kZSkge1xuICAgICAgICAgICAgICAgICAgY2FzZSBSZXNwb25zZUNvZGUuRVJSX1NDUjAwMDgudG9TdHJpbmcoKTpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbJ2VtYWlsJ10uc2V0RXJyb3JzKHtcbiAgICAgICAgICAgICAgICAgICAgICAnZW1haWwnOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICBjYXNlIFJlc3BvbnNlQ29kZS5FUlJfU0NSMDAwN0EudG9TdHJpbmcoKTpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbJ3Bob25lTnVtYmVyJ10uc2V0RXJyb3JzKHtcbiAgICAgICAgICAgICAgICAgICAgICAnZXJyb3IucGF0dGVybi5waG9uZU51bWJlcic6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gIH1cblxufVxuIl19