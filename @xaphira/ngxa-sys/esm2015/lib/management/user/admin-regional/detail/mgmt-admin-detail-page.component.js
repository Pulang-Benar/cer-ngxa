/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Injector } from '@angular/core';
import { BaseFormComponent } from '@xaphira/ngxa-common';
import { ManagementUserService } from '../../services/mgmt-user.service';
export class MgmtAdminDetailPageComponent extends BaseFormComponent {
    /**
     * @param {?} injector
     * @param {?} userService
     */
    constructor(injector, userService) {
        super(injector);
        this.injector = injector;
        this.userService = userService;
        this.profile = {};
        this.imageDefault = `${document.getElementsByTagName('base')[0].href}/assets/images/avatars/default.png`;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.onInit('security', 'get-profile-base');
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
        /** @type {?} */
        const data = {
            username: this.userService.getUser().username,
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
}
MgmtAdminDetailPageComponent.decorators = [
    { type: Component, args: [{
                selector: 'xa-mgmt-admin-detail-page',
                template: "<xa-page-outlet [url]=\"'/app/mgmt/user/admin-regional'\" [header]=\"'Admin Regional Profile'\">\n  <div class=\"row\">\n    <div class=\"col-md-4 col-lg-4 col-xxxl-6\">\n      <div class=\"photo-profile\"\n        [ngStyle]=\"{ \n          'background-image': 'url(' + (image? image: imageDefault) + ')'\n        }\">\n      </div>\n    </div>\n    <div class=\"col-md-8 col-lg-8 col-xxxl-6\">\n      <xa-label-text\n        [label]=\"'Name'\"\n        [colLabel]=\"4\"\n        [colContent]=\"8\"\n        [content]=\"profile.name\"\n        [skeleton]=\"loadingForm\">\n      </xa-label-text>\n      <xa-label-text\n        [label]=\"'Username'\"\n        [colLabel]=\"4\"\n        [colContent]=\"8\"\n        [content]=\"profile.username\"\n        [skeleton]=\"loadingForm\">\n      </xa-label-text>\n      <xa-label-text\n        [label]=\"'Email'\"\n        [colLabel]=\"4\"\n        [colContent]=\"8\"\n        [content]=\"profile.email\"\n        [skeleton]=\"loadingForm\">\n      </xa-label-text>\n      <xa-label-text\n        [label]=\"'Phone Number'\"\n        [colLabel]=\"4\"\n        [colContent]=\"8\"\n        [content]=\"profile.phoneNumber\"\n        [skeleton]=\"loadingForm\">\n      </xa-label-text>\n      <xa-label-text\n        [label]=\"'Address'\"\n        [colLabel]=\"4\"\n        [colContent]=\"8\"\n        [content]=\"profile.address\"\n        [skeleton]=\"loadingForm\">\n      </xa-label-text>\n      <xa-label-text\n        [label]=\"'Country'\"\n        [colLabel]=\"4\"\n        [colContent]=\"8\"\n        [content]=\"profile.country\"\n        [skeleton]=\"loadingForm\">\n      </xa-label-text>\n    </div>\n  </div>\n</xa-page-outlet>\n",
                styles: [".nb-theme-default :host .split-row{border-bottom:1px solid #edf1f7;margin-bottom:1rem}.nb-theme-default :host .photo-profile{height:225px;width:225px;background-size:cover;margin:20px auto}.nb-theme-dark :host .split-row{border-bottom:1px solid #151a30;margin-bottom:1rem}.nb-theme-dark :host .photo-profile{height:225px;width:225px;background-size:cover;margin:20px auto}.nb-theme-cosmic :host .split-row{border-bottom:1px solid #1b1b38;margin-bottom:1rem}.nb-theme-cosmic :host .photo-profile{height:225px;width:225px;background-size:cover;margin:20px auto}.nb-theme-corporate :host .split-row{border-bottom:1px solid #edf1f7;margin-bottom:1rem}.nb-theme-corporate :host .photo-profile{height:225px;width:225px;background-size:cover;margin:20px auto}"]
            }] }
];
/** @nocollapse */
MgmtAdminDetailPageComponent.ctorParameters = () => [
    { type: Injector },
    { type: ManagementUserService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWdtdC1hZG1pbi1kZXRhaWwtcGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AeGFwaGlyYS9uZ3hhLXN5cy8iLCJzb3VyY2VzIjpbImxpYi9tYW5hZ2VtZW50L3VzZXIvYWRtaW4tcmVnaW9uYWwvZGV0YWlsL21nbXQtYWRtaW4tZGV0YWlsLXBhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFFBQVEsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUd2RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQU96RSxNQUFNLE9BQU8sNEJBQTZCLFNBQVEsaUJBQXNCOzs7OztJQU10RSxZQUNTLFFBQWtCLEVBQ2pCLFdBQWtDO1FBQzFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUZULGFBQVEsR0FBUixRQUFRLENBQVU7UUFDakIsZ0JBQVcsR0FBWCxXQUFXLENBQXVCO1FBTnJDLFlBQU8sR0FBUSxFQUFFLENBQUM7UUFFbEIsaUJBQVksR0FBVyxHQUFHLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLG9DQUFvQyxDQUFDO0lBTW5ILENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztJQUM5QyxDQUFDOzs7O0lBRUQsV0FBVyxLQUFVLENBQUM7Ozs7OztJQUV0QixNQUFNLENBQUMsV0FBbUIsRUFBRSxPQUFlO1FBQ3pDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDOztjQUNsQixJQUFJLEdBQVE7WUFDaEIsUUFBUSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUMsUUFBUTtTQUM5QztRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUM7YUFDbEMsU0FBUzs7OztRQUNSLENBQUMsT0FBWSxFQUFFLEVBQUU7WUFDZixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztZQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztZQUN2QixJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDcEIsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDL0I7UUFDSCxDQUFDOzs7O1FBQ0QsQ0FBQyxLQUF3QixFQUFFLEVBQUU7WUFDM0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7O2tCQUNsQixHQUFHLEdBQW9CLEtBQUssQ0FBQyxPQUFPLENBQUM7WUFDM0MsSUFBSSxHQUFHLEVBQUU7Z0JBQ1AsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO2FBQ3ZGO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLG1CQUFBLEdBQUcsRUFBTyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7YUFDeEQ7UUFDSCxDQUFDLEVBQ0YsQ0FBQztJQUNOLENBQUM7OztZQS9DRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjtnQkFFckMsNHBEQUFzRDs7YUFDdkQ7Ozs7WUFWMkIsUUFBUTtZQUkzQixxQkFBcUI7Ozs7SUFTNUIsK0NBQXlCOztJQUN6Qiw2Q0FBcUI7O0lBQ3JCLG9EQUFtSDs7SUFHakgsZ0RBQXlCOzs7OztJQUN6QixtREFBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0b3IsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cEVycm9yUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBBcGlCYXNlUmVzcG9uc2UgfSBmcm9tICdAeGFwaGlyYS9zaGFyZWQnO1xuaW1wb3J0IHsgQmFzZUZvcm1Db21wb25lbnQgfSBmcm9tICdAeGFwaGlyYS9uZ3hhLWNvbW1vbic7XG5pbXBvcnQgeyBNYW5hZ2VtZW50VXNlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9tZ210LXVzZXIuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3hhLW1nbXQtYWRtaW4tZGV0YWlsLXBhZ2UnLFxuICBzdHlsZVVybHM6IFsnLi9tZ210LWFkbWluLWRldGFpbC1wYWdlLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9tZ210LWFkbWluLWRldGFpbC1wYWdlLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgTWdtdEFkbWluRGV0YWlsUGFnZUNvbXBvbmVudCBleHRlbmRzIEJhc2VGb3JtQ29tcG9uZW50PGFueT4gaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgcHVibGljIHByb2ZpbGU6IGFueSA9IHt9O1xuICBwdWJsaWMgaW1hZ2U6IHN0cmluZztcbiAgcHVibGljIGltYWdlRGVmYXVsdDogc3RyaW5nID0gYCR7ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2Jhc2UnKVswXS5ocmVmfS9hc3NldHMvaW1hZ2VzL2F2YXRhcnMvZGVmYXVsdC5wbmdgO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgcHJpdmF0ZSB1c2VyU2VydmljZTogTWFuYWdlbWVudFVzZXJTZXJ2aWNlKSB7XG4gICAgc3VwZXIoaW5qZWN0b3IpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5vbkluaXQoJ3NlY3VyaXR5JywgJ2dldC1wcm9maWxlLWJhc2UnKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge31cblxuICBvbkluaXQoc2VydmljZU5hbWU6IHN0cmluZywgYXBpTmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5sb2FkaW5nRm9ybSA9IHRydWU7XG4gICAgY29uc3QgZGF0YTogYW55ID0ge1xuICAgICAgdXNlcm5hbWU6IHRoaXMudXNlclNlcnZpY2UuZ2V0VXNlcigpLnVzZXJuYW1lLFxuICAgIH07XG4gICAgdGhpcy5leGVjKHNlcnZpY2VOYW1lLCBhcGlOYW1lLCBkYXRhKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHN1Y2Nlc3M6IGFueSkgPT4ge1xuICAgICAgICAgIHRoaXMubG9hZGluZ0Zvcm0gPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLnByb2ZpbGUgPSBzdWNjZXNzO1xuICAgICAgICAgIGlmIChzdWNjZXNzWydpbWFnZSddKSB7XG4gICAgICAgICAgICB0aGlzLmltYWdlID0gc3VjY2Vzc1snaW1hZ2UnXTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIChlcnJvcjogSHR0cEVycm9yUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICB0aGlzLmxvYWRpbmdGb3JtID0gdHJ1ZTtcbiAgICAgICAgICBjb25zdCBlcnI6IEFwaUJhc2VSZXNwb25zZSA9IGVycm9yWydlcnJvciddO1xuICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgIHRoaXMudG9hc3RyLnNob3dJMThuKGVyci5yZXNwU3RhdHVzTWVzc2FnZVtlcnIucmVzcFN0YXR1c0NvZGVdLCB0cnVlLCBudWxsLCAnZGFuZ2VyJyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudG9hc3RyLnNob3dJMThuKGVyciBhcyBhbnksIHRydWUsIG51bGwsICdkYW5nZXInKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICApO1xuICB9XG5cbn1cbiJdfQ==