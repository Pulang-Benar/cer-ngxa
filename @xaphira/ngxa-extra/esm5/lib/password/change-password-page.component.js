/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Injector } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Pattern, EncryptionService } from '@xaphira/utils';
import { BaseFormComponent } from '@xaphira/ngxa-common';
import { ResponseCode, OAUTH_INFO } from '@xaphira/shared';
var ChangePasswordPageComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ChangePasswordPageComponent, _super);
    function ChangePasswordPageComponent(injector) {
        var _this = _super.call(this, injector, {
            'password': [],
            'newPassword': [],
            'confirmPassword': [],
        }) || this;
        _this.injector = injector;
        _this.passwordPattern = Pattern.PASSWORD_MEDIUM;
        _this.enc = injector.get(EncryptionService);
        _this.oauthResource = injector.get(OAUTH_INFO);
        return _this;
    }
    /**
     * @return {?}
     */
    ChangePasswordPageComponent.prototype.onSubmit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var data = {
            password: this.enc.encryptAES(this.oauthResource['aes_key'], this.formGroup.get('password').value),
            newPassword: this.enc.encryptAES(this.oauthResource['aes_key'], this.formGroup.get('newPassword').value),
            confirmPassword: this.enc.encryptAES(this.oauthResource['aes_key'], this.formGroup.get('confirmPassword').value),
        };
        ((/** @type {?} */ (_super.prototype.onSubmit.call(this, data, 'security', 'change-password'))))
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            if (response) {
                switch (response.respStatusCode) {
                    case ResponseCode.ERR_SCR0002.toString():
                        _this.formGroup.controls['password'].setErrors({
                            'incorrect': true,
                        });
                        break;
                    case ResponseCode.ERR_SCR0006.toString():
                        _this.formGroup.controls['newPassword'].setErrors({
                            'equal': true,
                        });
                        break;
                    default:
                        break;
                }
            }
        }));
    };
    ChangePasswordPageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'xa-change-password-page',
                    template: "<xa-page-outlet [header]=\"'Change Password'\">\n  <form [formGroup]=\"formGroup\">\n    <xa-input-text\n      [name]=\"'password'\"\n      [label]=\"'Password'\"\n      [type]=\"'password'\"\n      [required]=\"true\"\n      formControlName=\"password\">\n    </xa-input-text>\n    <xa-input-text\n      [name]=\"'newPassword'\"\n      [label]=\"'New Password'\"\n      [type]=\"'password'\"\n      [required]=\"true\"\n      [pattern]=\"passwordPattern\"\n      xaValidateNotEqual=\"password\"\n      formControlName=\"newPassword\">\n    </xa-input-text>\n    <xa-input-text\n      [name]=\"'confirmPassword'\"\n      [label]=\"'Confirm Password'\"\n      [type]=\"'password'\"\n      [required]=\"true\"\n      xaValidateEqual=\"newPassword\"\n      formControlName=\"confirmPassword\">\n    </xa-input-text>\n    <xa-button-submit\n      [disabledButton]=\"disabled\"\n      (onSubmit)=\"onSubmit()\"\n      [name]=\"'Update Password'\"\n      [formGroupButton]=\"formGroup\">\n    </xa-button-submit>\n  </form>\n</xa-page-outlet>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    ChangePasswordPageComponent.ctorParameters = function () { return [
        { type: Injector }
    ]; };
    return ChangePasswordPageComponent;
}(BaseFormComponent));
export { ChangePasswordPageComponent };
if (false) {
    /** @type {?} */
    ChangePasswordPageComponent.prototype.passwordPattern;
    /**
     * @type {?}
     * @private
     */
    ChangePasswordPageComponent.prototype.enc;
    /**
     * @type {?}
     * @private
     */
    ChangePasswordPageComponent.prototype.oauthResource;
    /** @type {?} */
    ChangePasswordPageComponent.prototype.injector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlLXBhc3N3b3JkLXBhZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHhhcGhpcmEvbmd4YS1leHRyYS8iLCJzb3VyY2VzIjpbImxpYi9wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQtcGFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVwRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUF5QixNQUFNLGlCQUFpQixDQUFDO0FBRWxGO0lBS2lELHVEQUFzQjtJQU1yRSxxQ0FBbUIsUUFBa0I7UUFBckMsWUFDRSxrQkFBTSxRQUFRLEVBQUU7WUFDZCxVQUFVLEVBQUUsRUFBRTtZQUNkLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLGlCQUFpQixFQUFFLEVBQUU7U0FDdEIsQ0FBQyxTQUdIO1FBUmtCLGNBQVEsR0FBUixRQUFRLENBQVU7UUFKckMscUJBQWUsR0FBVyxPQUFPLENBQUMsZUFBZSxDQUFDO1FBVWhELEtBQUksQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQzNDLEtBQUksQ0FBQyxhQUFhLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQzs7SUFDaEQsQ0FBQzs7OztJQUVELDhDQUFROzs7SUFBUjtRQUFBLGlCQTBCQzs7WUF6Qk8sSUFBSSxHQUFRO1lBQ2hCLFFBQVEsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUNsRyxXQUFXLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFDeEcsZUFBZSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxLQUFLLENBQUM7U0FDakg7UUFDRCxDQUFDLG1CQUFBLGlCQUFNLFFBQVEsWUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixDQUFDLEVBQStCLENBQUM7YUFDM0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDOUIsU0FBUzs7OztRQUFDLFVBQUMsUUFBeUI7WUFDbkMsSUFBSSxRQUFRLEVBQUU7Z0JBQ1osUUFBUSxRQUFRLENBQUMsY0FBYyxFQUFFO29CQUMvQixLQUFLLFlBQVksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFO3dCQUN0QyxLQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxTQUFTLENBQUM7NEJBQzVDLFdBQVcsRUFBRSxJQUFJO3lCQUNsQixDQUFDLENBQUM7d0JBQ0gsTUFBTTtvQkFDUixLQUFLLFlBQVksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFO3dCQUN0QyxLQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxTQUFTLENBQUM7NEJBQy9DLE9BQU8sRUFBRSxJQUFJO3lCQUNkLENBQUMsQ0FBQzt3QkFDSCxNQUFNO29CQUNSO3dCQUNFLE1BQU07aUJBQ1Q7YUFDRjtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ2IsQ0FBQzs7Z0JBL0NGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUseUJBQXlCO29CQUVuQywwaENBQW9EOztpQkFDckQ7Ozs7Z0JBWm1CLFFBQVE7O0lBeUQ1QixrQ0FBQztDQUFBLEFBakRELENBS2lELGlCQUFpQixHQTRDakU7U0E1Q1ksMkJBQTJCOzs7SUFFdEMsc0RBQWtEOzs7OztJQUNsRCwwQ0FBK0I7Ozs7O0lBQy9CLG9EQUE2Qzs7SUFFakMsK0NBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQXBpQmFzZVJlc3BvbnNlIH0gZnJvbSAnQHhhcGhpcmEvc2hhcmVkJztcbmltcG9ydCB7IFBhdHRlcm4sIEVuY3J5cHRpb25TZXJ2aWNlIH0gZnJvbSAnQHhhcGhpcmEvdXRpbHMnO1xuaW1wb3J0IHsgQmFzZUZvcm1Db21wb25lbnQgfSBmcm9tICdAeGFwaGlyYS9uZ3hhLWNvbW1vbic7XG5pbXBvcnQgeyBSZXNwb25zZUNvZGUsIE9BVVRIX0lORk8sIFNlY3VyaXR5UmVzb3VyY2VNb2RlbCB9IGZyb20gJ0B4YXBoaXJhL3NoYXJlZCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3hhLWNoYW5nZS1wYXNzd29yZC1wYWdlJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2hhbmdlLXBhc3N3b3JkLXBhZ2UuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2NoYW5nZS1wYXNzd29yZC1wYWdlLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQ2hhbmdlUGFzc3dvcmRQYWdlQ29tcG9uZW50IGV4dGVuZHMgQmFzZUZvcm1Db21wb25lbnQ8YW55PiB7XG5cbiAgcGFzc3dvcmRQYXR0ZXJuOiBzdHJpbmcgPSBQYXR0ZXJuLlBBU1NXT1JEX01FRElVTTtcbiAgcHJpdmF0ZSBlbmM6IEVuY3J5cHRpb25TZXJ2aWNlO1xuICBwcml2YXRlIG9hdXRoUmVzb3VyY2U6IFNlY3VyaXR5UmVzb3VyY2VNb2RlbDtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgaW5qZWN0b3I6IEluamVjdG9yKSB7XG4gICAgc3VwZXIoaW5qZWN0b3IsIHtcbiAgICAgICdwYXNzd29yZCc6IFtdLFxuICAgICAgJ25ld1Bhc3N3b3JkJzogW10sXG4gICAgICAnY29uZmlybVBhc3N3b3JkJzogW10sXG4gICAgfSk7XG4gICAgdGhpcy5lbmMgPSBpbmplY3Rvci5nZXQoRW5jcnlwdGlvblNlcnZpY2UpO1xuICAgIHRoaXMub2F1dGhSZXNvdXJjZSA9IGluamVjdG9yLmdldChPQVVUSF9JTkZPKTtcbiAgfVxuXG4gIG9uU3VibWl0KCk6IHZvaWQge1xuICAgIGNvbnN0IGRhdGE6IGFueSA9IHtcbiAgICAgIHBhc3N3b3JkOiB0aGlzLmVuYy5lbmNyeXB0QUVTKHRoaXMub2F1dGhSZXNvdXJjZVsnYWVzX2tleSddLCB0aGlzLmZvcm1Hcm91cC5nZXQoJ3Bhc3N3b3JkJykudmFsdWUpLFxuICAgICAgbmV3UGFzc3dvcmQ6IHRoaXMuZW5jLmVuY3J5cHRBRVModGhpcy5vYXV0aFJlc291cmNlWydhZXNfa2V5J10sIHRoaXMuZm9ybUdyb3VwLmdldCgnbmV3UGFzc3dvcmQnKS52YWx1ZSksXG4gICAgICBjb25maXJtUGFzc3dvcmQ6IHRoaXMuZW5jLmVuY3J5cHRBRVModGhpcy5vYXV0aFJlc291cmNlWydhZXNfa2V5J10sIHRoaXMuZm9ybUdyb3VwLmdldCgnY29uZmlybVBhc3N3b3JkJykudmFsdWUpLFxuICAgIH07XG4gICAgKHN1cGVyLm9uU3VibWl0KGRhdGEsICdzZWN1cml0eScsICdjaGFuZ2UtcGFzc3dvcmQnKSBhcyBPYnNlcnZhYmxlPEFwaUJhc2VSZXNwb25zZT4pXG4gICAgICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChyZXNwb25zZTogQXBpQmFzZVJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAocmVzcG9uc2UucmVzcFN0YXR1c0NvZGUpIHtcbiAgICAgICAgICAgICAgICAgIGNhc2UgUmVzcG9uc2VDb2RlLkVSUl9TQ1IwMDAyLnRvU3RyaW5nKCk6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzWydwYXNzd29yZCddLnNldEVycm9ycyh7XG4gICAgICAgICAgICAgICAgICAgICAgJ2luY29ycmVjdCc6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgIGNhc2UgUmVzcG9uc2VDb2RlLkVSUl9TQ1IwMDA2LnRvU3RyaW5nKCk6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzWyduZXdQYXNzd29yZCddLnNldEVycm9ycyh7XG4gICAgICAgICAgICAgICAgICAgICAgJ2VxdWFsJzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgfVxuXG59XG4iXX0=