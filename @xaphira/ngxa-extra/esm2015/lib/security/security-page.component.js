/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Injector } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { NbDialogService } from '@nebular/theme';
import { ResponseCode, OAUTH_INFO } from '@xaphira/shared';
import { AuthTokenService } from '@xaphira/ngxa-auth';
import { BaseFormComponent } from '@xaphira/ngxa-common';
import { DeactivatedPromptComponent } from './prompt/deactivated-prompt.component';
import { EncryptionService } from '@xaphira/utils';
export class SecurityPageComponent extends BaseFormComponent {
    /**
     * @param {?} injector
     * @param {?} dialogService
     */
    constructor(injector, dialogService) {
        super(injector, {
            'password': [],
        });
        this.injector = injector;
        this.dialogService = dialogService;
        this.enc = injector.get(EncryptionService);
        this.oauthResource = injector.get(OAUTH_INFO);
        this.authToken = injector.get(AuthTokenService);
    }
    /**
     * @return {?}
     */
    onSubmit() {
        this.disabled = true;
        this.dialogService.open(DeactivatedPromptComponent)
            .onClose.subscribe((/**
         * @param {?} password
         * @return {?}
         */
        (password) => {
            if (password) {
                this.disabled = true;
                /** @type {?} */
                const data = {
                    password: this.enc.encryptAES(this.oauthResource['aes_key'], password),
                };
                ((/** @type {?} */ (super.onSubmit(data, 'security', 'deactivated'))))
                    .pipe(takeUntil(this.destroy$))
                    .subscribe((/**
                 * @param {?} response
                 * @return {?}
                 */
                (response) => {
                    if (response) {
                        if (response.respStatusCode === ResponseCode.OK_SCR003.toString()) {
                            this.authToken.logout();
                        }
                    }
                }));
            }
            else {
                this.disabled = false;
            }
        }));
    }
}
SecurityPageComponent.decorators = [
    { type: Component, args: [{
                selector: 'xa-security-page',
                template: "<xa-change-password-page></xa-change-password-page>\n<nb-card>\n    <nb-card-body>\n        <div class=\"row\">\n            <div class=\"col-md-3 col-lg-3 col-xxxl-6\">\n                <button\n                    type=\"button\"\n                    status=\"danger\"\n                    size=\"large\"\n                    class=\"deactivated-button\"\n                    [disabled]=\"disabled\"\n                    (click)=\"onSubmit()\"\n                    nbButton>\n                    {{ 'Deactivate Account' | translate }}\n                </button>\n            </div>\n            <div class=\"col-md-8 col-lg-8 col-xxxl-6\">\n                <h6 class=\"text-danger deactivated-label\">\n                    {{ 'message.deactivated-account' | translate }}\n                </h6>\n            </div>\n        </div>\n    </nb-card-body>\n</nb-card>\n",
                styles: ["button.deactivated-button{width:100%}h6.deactivated-label{padding-top:10px;text-align:center}"]
            }] }
];
/** @nocollapse */
SecurityPageComponent.ctorParameters = () => [
    { type: Injector },
    { type: NbDialogService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SecurityPageComponent.prototype.enc;
    /**
     * @type {?}
     * @private
     */
    SecurityPageComponent.prototype.oauthResource;
    /**
     * @type {?}
     * @private
     */
    SecurityPageComponent.prototype.authToken;
    /** @type {?} */
    SecurityPageComponent.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    SecurityPageComponent.prototype.dialogService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VjdXJpdHktcGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AeGFwaGlyYS9uZ3hhLWV4dHJhLyIsInNvdXJjZXMiOlsibGliL3NlY3VyaXR5L3NlY3VyaXR5LXBhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWpELE9BQU8sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUF5QixNQUFNLGlCQUFpQixDQUFDO0FBQ2xGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3pELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBRW5GLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBT25ELE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxpQkFBc0I7Ozs7O0lBTS9ELFlBQW1CLFFBQWtCLEVBQzNCLGFBQThCO1FBQ3RDLEtBQUssQ0FBQyxRQUFRLEVBQUU7WUFDZCxVQUFVLEVBQUUsRUFBRTtTQUNmLENBQUMsQ0FBQztRQUpjLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDM0Isa0JBQWEsR0FBYixhQUFhLENBQWlCO1FBSXRDLElBQUksQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxhQUFhLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUNsRCxDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLDBCQUEwQixDQUFDO2FBQ2hELE9BQU8sQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxRQUFnQixFQUFFLEVBQUU7WUFDdEMsSUFBSSxRQUFRLEVBQUU7Z0JBQ1osSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7O3NCQUNmLElBQUksR0FBUTtvQkFDaEIsUUFBUSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEVBQUUsUUFBUSxDQUFDO2lCQUN2RTtnQkFDRCxDQUFDLG1CQUFBLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxhQUFhLENBQUMsRUFBK0IsQ0FBQztxQkFDN0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7cUJBQzlCLFNBQVM7Ozs7Z0JBQUMsQ0FBQyxRQUF5QixFQUFFLEVBQUU7b0JBQ3ZDLElBQUksUUFBUSxFQUFFO3dCQUNaLElBQUksUUFBUSxDQUFDLGNBQWMsS0FBSyxZQUFZLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxFQUFFOzRCQUNqRSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDO3lCQUN6QjtxQkFDRjtnQkFDSCxDQUFDLEVBQUMsQ0FBQzthQUNOO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO2FBQ3ZCO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDUCxDQUFDOzs7WUEzQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBRTVCLDgyQkFBNkM7O2FBQzlDOzs7O1lBZm1CLFFBQVE7WUFFbkIsZUFBZTs7Ozs7OztJQWdCdEIsb0NBQStCOzs7OztJQUMvQiw4Q0FBNkM7Ozs7O0lBQzdDLDBDQUFvQzs7SUFFeEIseUNBQXlCOzs7OztJQUNuQyw4Q0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBOYkRpYWxvZ1NlcnZpY2UgfSBmcm9tICdAbmVidWxhci90aGVtZSc7XG5pbXBvcnQgeyBBcGlCYXNlUmVzcG9uc2UgfSBmcm9tICdAeGFwaGlyYS9zaGFyZWQnO1xuaW1wb3J0IHsgUmVzcG9uc2VDb2RlLCBPQVVUSF9JTkZPLCBTZWN1cml0eVJlc291cmNlTW9kZWwgfSBmcm9tICdAeGFwaGlyYS9zaGFyZWQnO1xuaW1wb3J0IHsgQXV0aFRva2VuU2VydmljZSB9IGZyb20gJ0B4YXBoaXJhL25neGEtYXV0aCc7XG5pbXBvcnQgeyBCYXNlRm9ybUNvbXBvbmVudCB9IGZyb20gJ0B4YXBoaXJhL25neGEtY29tbW9uJztcbmltcG9ydCB7IERlYWN0aXZhdGVkUHJvbXB0Q29tcG9uZW50IH0gZnJvbSAnLi9wcm9tcHQvZGVhY3RpdmF0ZWQtcHJvbXB0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBFbmNyeXB0aW9uU2VydmljZSB9IGZyb20gJ0B4YXBoaXJhL3V0aWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAneGEtc2VjdXJpdHktcGFnZScsXG4gIHN0eWxlVXJsczogWycuL3NlY3VyaXR5LXBhZ2UuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL3NlY3VyaXR5LXBhZ2UuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBTZWN1cml0eVBhZ2VDb21wb25lbnQgZXh0ZW5kcyBCYXNlRm9ybUNvbXBvbmVudDxhbnk+IHtcblxuICBwcml2YXRlIGVuYzogRW5jcnlwdGlvblNlcnZpY2U7XG4gIHByaXZhdGUgb2F1dGhSZXNvdXJjZTogU2VjdXJpdHlSZXNvdXJjZU1vZGVsO1xuICBwcml2YXRlIGF1dGhUb2tlbjogQXV0aFRva2VuU2VydmljZTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIHByaXZhdGUgZGlhbG9nU2VydmljZTogTmJEaWFsb2dTZXJ2aWNlKSB7XG4gICAgc3VwZXIoaW5qZWN0b3IsIHtcbiAgICAgICdwYXNzd29yZCc6IFtdLFxuICAgIH0pO1xuICAgIHRoaXMuZW5jID0gaW5qZWN0b3IuZ2V0KEVuY3J5cHRpb25TZXJ2aWNlKTtcbiAgICB0aGlzLm9hdXRoUmVzb3VyY2UgPSBpbmplY3Rvci5nZXQoT0FVVEhfSU5GTyk7XG4gICAgdGhpcy5hdXRoVG9rZW4gPSBpbmplY3Rvci5nZXQoQXV0aFRva2VuU2VydmljZSk7XG4gIH1cblxuICBvblN1Ym1pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB0aGlzLmRpYWxvZ1NlcnZpY2Uub3BlbihEZWFjdGl2YXRlZFByb21wdENvbXBvbmVudClcbiAgICAgIC5vbkNsb3NlLnN1YnNjcmliZSgocGFzc3dvcmQ6IHN0cmluZykgPT4ge1xuICAgICAgICBpZiAocGFzc3dvcmQpIHtcbiAgICAgICAgICB0aGlzLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICBjb25zdCBkYXRhOiBhbnkgPSB7XG4gICAgICAgICAgICBwYXNzd29yZDogdGhpcy5lbmMuZW5jcnlwdEFFUyh0aGlzLm9hdXRoUmVzb3VyY2VbJ2Flc19rZXknXSwgcGFzc3dvcmQpLFxuICAgICAgICAgIH07XG4gICAgICAgICAgKHN1cGVyLm9uU3VibWl0KGRhdGEsICdzZWN1cml0eScsICdkZWFjdGl2YXRlZCcpIGFzIE9ic2VydmFibGU8QXBpQmFzZVJlc3BvbnNlPilcbiAgICAgICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKHJlc3BvbnNlOiBBcGlCYXNlUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnJlc3BTdGF0dXNDb2RlID09PSBSZXNwb25zZUNvZGUuT0tfU0NSMDAzLnRvU3RyaW5nKCkpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuYXV0aFRva2VuLmxvZ291dCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG59XG4iXX0=