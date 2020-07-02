/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Injector } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Pattern, EncryptionService } from '@xaphira/utils';
import { BaseFormComponent } from '@xaphira/ngxa-common';
import { ResponseCode, OAUTH_INFO } from '@xaphira/shared';
export class ChangePasswordPageComponent extends BaseFormComponent {
    /**
     * @param {?} injector
     */
    constructor(injector) {
        super(injector, {
            'password': [],
            'newPassword': [],
            'confirmPassword': [],
        });
        this.injector = injector;
        this.passwordPattern = Pattern.PASSWORD_MEDIUM;
        this.enc = injector.get(EncryptionService);
        this.oauthResource = injector.get(OAUTH_INFO);
    }
    /**
     * @return {?}
     */
    onSubmit() {
        /** @type {?} */
        const data = {
            password: this.enc.encryptAES(this.oauthResource['aes_key'], this.formGroup.get('password').value),
            newPassword: this.enc.encryptAES(this.oauthResource['aes_key'], this.formGroup.get('newPassword').value),
            confirmPassword: this.enc.encryptAES(this.oauthResource['aes_key'], this.formGroup.get('confirmPassword').value),
        };
        ((/** @type {?} */ (super.onSubmit(data, 'security', 'change-password'))))
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @param {?} response
         * @return {?}
         */
        (response) => {
            if (response) {
                switch (response.respStatusCode) {
                    case ResponseCode.ERR_SCR0002.toString():
                        this.formGroup.controls['password'].setErrors({
                            'incorrect': true,
                        });
                        break;
                    case ResponseCode.ERR_SCR0006.toString():
                        this.formGroup.controls['newPassword'].setErrors({
                            'equal': true,
                        });
                        break;
                    default:
                        break;
                }
            }
        }));
    }
}
ChangePasswordPageComponent.decorators = [
    { type: Component, args: [{
                selector: 'xa-change-password-page',
                template: "<xa-page-outlet [header]=\"'Change Password'\">\n  <form [formGroup]=\"formGroup\">\n    <xa-input-text\n      [name]=\"'password'\"\n      [label]=\"'Password'\"\n      [type]=\"'password'\"\n      [required]=\"true\"\n      formControlName=\"password\">\n    </xa-input-text>\n    <xa-input-text\n      [name]=\"'newPassword'\"\n      [label]=\"'New Password'\"\n      [type]=\"'password'\"\n      [required]=\"true\"\n      [pattern]=\"passwordPattern\"\n      xaValidateNotEqual=\"password\"\n      formControlName=\"newPassword\">\n    </xa-input-text>\n    <xa-input-text\n      [name]=\"'confirmPassword'\"\n      [label]=\"'Confirm Password'\"\n      [type]=\"'password'\"\n      [required]=\"true\"\n      xaValidateEqual=\"newPassword\"\n      formControlName=\"confirmPassword\">\n    </xa-input-text>\n    <xa-button-submit\n      [disabledButton]=\"disabled\"\n      (onSubmit)=\"onSubmit()\"\n      [name]=\"'Update Password'\"\n      [formGroupButton]=\"formGroup\">\n    </xa-button-submit>\n  </form>\n</xa-page-outlet>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
ChangePasswordPageComponent.ctorParameters = () => [
    { type: Injector }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlLXBhc3N3b3JkLXBhZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHhhcGhpcmEvbmd4YS1leHRyYS8iLCJzb3VyY2VzIjpbImxpYi9wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQtcGFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXBELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDekQsT0FBTyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQXlCLE1BQU0saUJBQWlCLENBQUM7QUFPbEYsTUFBTSxPQUFPLDJCQUE0QixTQUFRLGlCQUFzQjs7OztJQU1yRSxZQUFtQixRQUFrQjtRQUNuQyxLQUFLLENBQUMsUUFBUSxFQUFFO1lBQ2QsVUFBVSxFQUFFLEVBQUU7WUFDZCxhQUFhLEVBQUUsRUFBRTtZQUNqQixpQkFBaUIsRUFBRSxFQUFFO1NBQ3RCLENBQUMsQ0FBQztRQUxjLGFBQVEsR0FBUixRQUFRLENBQVU7UUFKckMsb0JBQWUsR0FBVyxPQUFPLENBQUMsZUFBZSxDQUFDO1FBVWhELElBQUksQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxhQUFhLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNoRCxDQUFDOzs7O0lBRUQsUUFBUTs7Y0FDQSxJQUFJLEdBQVE7WUFDaEIsUUFBUSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQ2xHLFdBQVcsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUN4RyxlQUFlLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEtBQUssQ0FBQztTQUNqSDtRQUNELENBQUMsbUJBQUEsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixDQUFDLEVBQStCLENBQUM7YUFDM0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDOUIsU0FBUzs7OztRQUFDLENBQUMsUUFBeUIsRUFBRSxFQUFFO1lBQ3ZDLElBQUksUUFBUSxFQUFFO2dCQUNaLFFBQVEsUUFBUSxDQUFDLGNBQWMsRUFBRTtvQkFDL0IsS0FBSyxZQUFZLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRTt3QkFDdEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsU0FBUyxDQUFDOzRCQUM1QyxXQUFXLEVBQUUsSUFBSTt5QkFDbEIsQ0FBQyxDQUFDO3dCQUNILE1BQU07b0JBQ1IsS0FBSyxZQUFZLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRTt3QkFDdEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUMsU0FBUyxDQUFDOzRCQUMvQyxPQUFPLEVBQUUsSUFBSTt5QkFDZCxDQUFDLENBQUM7d0JBQ0gsTUFBTTtvQkFDUjt3QkFDRSxNQUFNO2lCQUNUO2FBQ0Y7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNiLENBQUM7OztZQS9DRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtnQkFFbkMsMGhDQUFvRDs7YUFDckQ7Ozs7WUFabUIsUUFBUTs7OztJQWUxQixzREFBa0Q7Ozs7O0lBQ2xELDBDQUErQjs7Ozs7SUFDL0Isb0RBQTZDOztJQUVqQywrQ0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBcGlCYXNlUmVzcG9uc2UgfSBmcm9tICdAeGFwaGlyYS9zaGFyZWQnO1xuaW1wb3J0IHsgUGF0dGVybiwgRW5jcnlwdGlvblNlcnZpY2UgfSBmcm9tICdAeGFwaGlyYS91dGlscyc7XG5pbXBvcnQgeyBCYXNlRm9ybUNvbXBvbmVudCB9IGZyb20gJ0B4YXBoaXJhL25neGEtY29tbW9uJztcbmltcG9ydCB7IFJlc3BvbnNlQ29kZSwgT0FVVEhfSU5GTywgU2VjdXJpdHlSZXNvdXJjZU1vZGVsIH0gZnJvbSAnQHhhcGhpcmEvc2hhcmVkJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAneGEtY2hhbmdlLXBhc3N3b3JkLXBhZ2UnLFxuICBzdHlsZVVybHM6IFsnLi9jaGFuZ2UtcGFzc3dvcmQtcGFnZS5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vY2hhbmdlLXBhc3N3b3JkLXBhZ2UuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBDaGFuZ2VQYXNzd29yZFBhZ2VDb21wb25lbnQgZXh0ZW5kcyBCYXNlRm9ybUNvbXBvbmVudDxhbnk+IHtcblxuICBwYXNzd29yZFBhdHRlcm46IHN0cmluZyA9IFBhdHRlcm4uUEFTU1dPUkRfTUVESVVNO1xuICBwcml2YXRlIGVuYzogRW5jcnlwdGlvblNlcnZpY2U7XG4gIHByaXZhdGUgb2F1dGhSZXNvdXJjZTogU2VjdXJpdHlSZXNvdXJjZU1vZGVsO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBpbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgICBzdXBlcihpbmplY3Rvciwge1xuICAgICAgJ3Bhc3N3b3JkJzogW10sXG4gICAgICAnbmV3UGFzc3dvcmQnOiBbXSxcbiAgICAgICdjb25maXJtUGFzc3dvcmQnOiBbXSxcbiAgICB9KTtcbiAgICB0aGlzLmVuYyA9IGluamVjdG9yLmdldChFbmNyeXB0aW9uU2VydmljZSk7XG4gICAgdGhpcy5vYXV0aFJlc291cmNlID0gaW5qZWN0b3IuZ2V0KE9BVVRIX0lORk8pO1xuICB9XG5cbiAgb25TdWJtaXQoKTogdm9pZCB7XG4gICAgY29uc3QgZGF0YTogYW55ID0ge1xuICAgICAgcGFzc3dvcmQ6IHRoaXMuZW5jLmVuY3J5cHRBRVModGhpcy5vYXV0aFJlc291cmNlWydhZXNfa2V5J10sIHRoaXMuZm9ybUdyb3VwLmdldCgncGFzc3dvcmQnKS52YWx1ZSksXG4gICAgICBuZXdQYXNzd29yZDogdGhpcy5lbmMuZW5jcnlwdEFFUyh0aGlzLm9hdXRoUmVzb3VyY2VbJ2Flc19rZXknXSwgdGhpcy5mb3JtR3JvdXAuZ2V0KCduZXdQYXNzd29yZCcpLnZhbHVlKSxcbiAgICAgIGNvbmZpcm1QYXNzd29yZDogdGhpcy5lbmMuZW5jcnlwdEFFUyh0aGlzLm9hdXRoUmVzb3VyY2VbJ2Flc19rZXknXSwgdGhpcy5mb3JtR3JvdXAuZ2V0KCdjb25maXJtUGFzc3dvcmQnKS52YWx1ZSksXG4gICAgfTtcbiAgICAoc3VwZXIub25TdWJtaXQoZGF0YSwgJ3NlY3VyaXR5JywgJ2NoYW5nZS1wYXNzd29yZCcpIGFzIE9ic2VydmFibGU8QXBpQmFzZVJlc3BvbnNlPilcbiAgICAgICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKHJlc3BvbnNlOiBBcGlCYXNlUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChyZXNwb25zZS5yZXNwU3RhdHVzQ29kZSkge1xuICAgICAgICAgICAgICAgICAgY2FzZSBSZXNwb25zZUNvZGUuRVJSX1NDUjAwMDIudG9TdHJpbmcoKTpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbJ3Bhc3N3b3JkJ10uc2V0RXJyb3JzKHtcbiAgICAgICAgICAgICAgICAgICAgICAnaW5jb3JyZWN0JzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgY2FzZSBSZXNwb25zZUNvZGUuRVJSX1NDUjAwMDYudG9TdHJpbmcoKTpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbJ25ld1Bhc3N3b3JkJ10uc2V0RXJyb3JzKHtcbiAgICAgICAgICAgICAgICAgICAgICAnZXF1YWwnOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICB9XG5cbn1cbiJdfQ==