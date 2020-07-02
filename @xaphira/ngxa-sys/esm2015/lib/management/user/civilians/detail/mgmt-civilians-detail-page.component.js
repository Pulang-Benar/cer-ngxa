/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Injector } from '@angular/core';
import { BaseFormComponent } from '@xaphira/ngxa-common';
import { ManagementUserService } from '../../services/mgmt-user.service';
export class MgmtCiviliansDetailPageComponent extends BaseFormComponent {
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
        this.onInit('security', 'get-profile-personal');
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
MgmtCiviliansDetailPageComponent.decorators = [
    { type: Component, args: [{
                selector: 'xa-mgmt-civilians-detail-page',
                template: "<xa-page-outlet [url]=\"'/app/mgmt/user/civilians'\" [header]=\"'Civilian Profile'\">\n  <div class=\"row\">\n    <div class=\"col-md-4 col-lg-4 col-xxxl-6\">\n      <div class=\"photo-profile\"\n        [ngStyle]=\"{ \n          'background-image': 'url(' + (image? image: imageDefault) + ')'\n        }\">\n      </div>\n    </div>\n    <div class=\"col-md-8 col-lg-8 col-xxxl-6\">\n      <div class=\"split-row\">\n        <xa-label-text\n          [label]=\"'Name'\"\n          [colLabel]=\"4\"\n          [colContent]=\"8\"\n          [content]=\"profile.name\"\n          [skeleton]=\"loadingForm\">\n        </xa-label-text>\n        <xa-label-text\n          [label]=\"'ID Number'\"\n          [colLabel]=\"4\"\n          [colContent]=\"8\"\n          [content]=\"profile.idNumber\"\n          [skeleton]=\"loadingForm\">\n        </xa-label-text>\n        <xa-label-text\n          [label]=\"'Gender'\"\n          [colLabel]=\"4\"\n          [colContent]=\"8\"\n          [content]=\"profile.gender\"\n          [skeleton]=\"loadingForm\">\n        </xa-label-text>\n        <xa-label-text\n          [label]=\"'Place / Date of Birth'\"\n          [colLabel]=\"4\"\n          [colContent]=\"8\"\n          [content]=\"profile.placeOfBirth ? (profile.placeOfBirth + ', ' + profile.dateOfBirth) : ''\"\n          [skeleton]=\"loadingForm\">\n        </xa-label-text>\n      </div>\n      <div class=\"split-row\">\n        <xa-label-text\n          [label]=\"'Username'\"\n          [colLabel]=\"4\"\n          [colContent]=\"8\"\n          [content]=\"profile.username\"\n          [skeleton]=\"loadingForm\">\n        </xa-label-text>\n        <xa-label-text\n          [label]=\"'Email'\"\n          [colLabel]=\"4\"\n          [colContent]=\"8\"\n          [content]=\"profile.email\"\n          [skeleton]=\"loadingForm\">\n        </xa-label-text>\n        <xa-label-text\n          [label]=\"'Phone Number'\"\n          [colLabel]=\"4\"\n          [colContent]=\"8\"\n          [content]=\"profile.phoneNumber\"\n          [skeleton]=\"loadingForm\">\n        </xa-label-text>\n        <xa-label-text\n          [label]=\"'Address'\"\n          [colLabel]=\"4\"\n          [colContent]=\"8\"\n          [content]=\"profile.address\"\n          [skeleton]=\"loadingForm\">\n        </xa-label-text>\n        <xa-label-text\n          [label]=\"'Country'\"\n          [colLabel]=\"4\"\n          [colContent]=\"8\"\n          [content]=\"profile.country\"\n          [skeleton]=\"loadingForm\">\n        </xa-label-text>\n      </div>\n      <div>\n        <xa-label-text\n          [label]=\"'Related Person'\"\n          [colLabel]=\"4\"\n          [colContent]=\"8\"\n          [content]=\"profile.referenceName\"\n          [skeleton]=\"loadingForm\">\n        </xa-label-text>\n        <xa-label-text\n          [label]=\"'Relationship'\"\n          [colLabel]=\"4\"\n          [colContent]=\"8\"\n          [content]=\"profile.relationship\"\n          [skeleton]=\"loadingForm\">\n        </xa-label-text>\n        <xa-label-text\n          [label]=\"'Address'\"\n          [colLabel]=\"4\"\n          [colContent]=\"8\"\n          [content]=\"profile.referenceAddress\"\n          [skeleton]=\"loadingForm\">\n        </xa-label-text>\n        <xa-label-text\n          [label]=\"'Phone Number'\"\n          [colLabel]=\"4\"\n          [colContent]=\"8\"\n          [content]=\"profile.referencePhoneNumber\"\n          [skeleton]=\"loadingForm\">\n        </xa-label-text>\n      </div>\n    </div>\n  </div>\n</xa-page-outlet>\n",
                styles: [".nb-theme-default :host .split-row{border-bottom:1px solid #edf1f7;margin-bottom:1rem}.nb-theme-default :host .photo-profile{height:225px;width:225px;background-size:cover;margin:20px auto}.nb-theme-dark :host .split-row{border-bottom:1px solid #151a30;margin-bottom:1rem}.nb-theme-dark :host .photo-profile{height:225px;width:225px;background-size:cover;margin:20px auto}.nb-theme-cosmic :host .split-row{border-bottom:1px solid #1b1b38;margin-bottom:1rem}.nb-theme-cosmic :host .photo-profile{height:225px;width:225px;background-size:cover;margin:20px auto}.nb-theme-corporate :host .split-row{border-bottom:1px solid #edf1f7;margin-bottom:1rem}.nb-theme-corporate :host .photo-profile{height:225px;width:225px;background-size:cover;margin:20px auto}"]
            }] }
];
/** @nocollapse */
MgmtCiviliansDetailPageComponent.ctorParameters = () => [
    { type: Injector },
    { type: ManagementUserService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWdtdC1jaXZpbGlhbnMtZGV0YWlsLXBhZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHhhcGhpcmEvbmd4YS1zeXMvIiwic291cmNlcyI6WyJsaWIvbWFuYWdlbWVudC91c2VyL2NpdmlsaWFucy9kZXRhaWwvbWdtdC1jaXZpbGlhbnMtZGV0YWlsLXBhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFFBQVEsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUd2RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQU96RSxNQUFNLE9BQU8sZ0NBQWlDLFNBQVEsaUJBQXNCOzs7OztJQU0xRSxZQUNTLFFBQWtCLEVBQ2pCLFdBQWtDO1FBQzFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUZULGFBQVEsR0FBUixRQUFRLENBQVU7UUFDakIsZ0JBQVcsR0FBWCxXQUFXLENBQXVCO1FBTnJDLFlBQU8sR0FBUSxFQUFFLENBQUM7UUFFbEIsaUJBQVksR0FBVyxHQUFHLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLG9DQUFvQyxDQUFDO0lBTW5ILENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsc0JBQXNCLENBQUMsQ0FBQztJQUNsRCxDQUFDOzs7O0lBRUQsV0FBVyxLQUFVLENBQUM7Ozs7OztJQUV0QixNQUFNLENBQUMsV0FBbUIsRUFBRSxPQUFlO1FBQ3pDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDOztjQUNsQixJQUFJLEdBQVE7WUFDaEIsUUFBUSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUMsUUFBUTtTQUM5QztRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUM7YUFDbEMsU0FBUzs7OztRQUNSLENBQUMsT0FBWSxFQUFFLEVBQUU7WUFDZixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztZQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztZQUN2QixJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDcEIsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDL0I7UUFDSCxDQUFDOzs7O1FBQ0QsQ0FBQyxLQUF3QixFQUFFLEVBQUU7WUFDM0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7O2tCQUNsQixHQUFHLEdBQW9CLEtBQUssQ0FBQyxPQUFPLENBQUM7WUFDM0MsSUFBSSxHQUFHLEVBQUU7Z0JBQ1AsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO2FBQ3ZGO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLG1CQUFBLEdBQUcsRUFBTyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7YUFDeEQ7UUFDSCxDQUFDLEVBQ0YsQ0FBQztJQUNOLENBQUM7OztZQS9DRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLCtCQUErQjtnQkFFekMsMCtHQUEwRDs7YUFDM0Q7Ozs7WUFWMkIsUUFBUTtZQUkzQixxQkFBcUI7Ozs7SUFTNUIsbURBQXlCOztJQUN6QixpREFBcUI7O0lBQ3JCLHdEQUFtSDs7SUFHakgsb0RBQXlCOzs7OztJQUN6Qix1REFBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0b3IsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cEVycm9yUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBBcGlCYXNlUmVzcG9uc2UgfSBmcm9tICdAeGFwaGlyYS9zaGFyZWQnO1xuaW1wb3J0IHsgQmFzZUZvcm1Db21wb25lbnQgfSBmcm9tICdAeGFwaGlyYS9uZ3hhLWNvbW1vbic7XG5pbXBvcnQgeyBNYW5hZ2VtZW50VXNlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9tZ210LXVzZXIuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3hhLW1nbXQtY2l2aWxpYW5zLWRldGFpbC1wYWdlJyxcbiAgc3R5bGVVcmxzOiBbJy4vbWdtdC1jaXZpbGlhbnMtZGV0YWlsLXBhZ2UuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL21nbXQtY2l2aWxpYW5zLWRldGFpbC1wYWdlLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgTWdtdENpdmlsaWFuc0RldGFpbFBhZ2VDb21wb25lbnQgZXh0ZW5kcyBCYXNlRm9ybUNvbXBvbmVudDxhbnk+IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gIHB1YmxpYyBwcm9maWxlOiBhbnkgPSB7fTtcbiAgcHVibGljIGltYWdlOiBzdHJpbmc7XG4gIHB1YmxpYyBpbWFnZURlZmF1bHQ6IHN0cmluZyA9IGAke2RvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdiYXNlJylbMF0uaHJlZn0vYXNzZXRzL2ltYWdlcy9hdmF0YXJzL2RlZmF1bHQucG5nYDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIHByaXZhdGUgdXNlclNlcnZpY2U6IE1hbmFnZW1lbnRVc2VyU2VydmljZSkge1xuICAgIHN1cGVyKGluamVjdG9yKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMub25Jbml0KCdzZWN1cml0eScsICdnZXQtcHJvZmlsZS1wZXJzb25hbCcpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7fVxuXG4gIG9uSW5pdChzZXJ2aWNlTmFtZTogc3RyaW5nLCBhcGlOYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmxvYWRpbmdGb3JtID0gdHJ1ZTtcbiAgICBjb25zdCBkYXRhOiBhbnkgPSB7XG4gICAgICB1c2VybmFtZTogdGhpcy51c2VyU2VydmljZS5nZXRVc2VyKCkudXNlcm5hbWUsXG4gICAgfTtcbiAgICB0aGlzLmV4ZWMoc2VydmljZU5hbWUsIGFwaU5hbWUsIGRhdGEpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAoc3VjY2VzczogYW55KSA9PiB7XG4gICAgICAgICAgdGhpcy5sb2FkaW5nRm9ybSA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMucHJvZmlsZSA9IHN1Y2Nlc3M7XG4gICAgICAgICAgaWYgKHN1Y2Nlc3NbJ2ltYWdlJ10pIHtcbiAgICAgICAgICAgIHRoaXMuaW1hZ2UgPSBzdWNjZXNzWydpbWFnZSddO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgKGVycm9yOiBIdHRwRXJyb3JSZXNwb25zZSkgPT4ge1xuICAgICAgICAgIHRoaXMubG9hZGluZ0Zvcm0gPSB0cnVlO1xuICAgICAgICAgIGNvbnN0IGVycjogQXBpQmFzZVJlc3BvbnNlID0gZXJyb3JbJ2Vycm9yJ107XG4gICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgdGhpcy50b2FzdHIuc2hvd0kxOG4oZXJyLnJlc3BTdGF0dXNNZXNzYWdlW2Vyci5yZXNwU3RhdHVzQ29kZV0sIHRydWUsIG51bGwsICdkYW5nZXInKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50b2FzdHIuc2hvd0kxOG4oZXJyIGFzIGFueSwgdHJ1ZSwgbnVsbCwgJ2RhbmdlcicpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICk7XG4gIH1cblxufVxuIl19