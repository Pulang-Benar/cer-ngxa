/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
export class DeactivatedPromptComponent {
    /**
     * @param {?} ref
     */
    constructor(ref) {
        this.ref = ref;
        this.disabled = false;
    }
    /**
     * @param {?} password
     * @return {?}
     */
    submit(password) {
        this.disabled = true;
        this.ref.close(password);
    }
}
DeactivatedPromptComponent.decorators = [
    { type: Component, args: [{
                selector: 'xa-deactivated-prompt',
                template: "<nb-card>\n  <nb-card-header>\n    <h6 class=\"text-danger deactivated-label\">\n        {{ 'Deactivate Account' | translate }}\n    </h6>\n  </nb-card-header>\n  <nb-card-body>\n    <p>\n      {{ 'message.deactivate-form' | translate }}\n    </p>\n    <p>\n      {{ 'message.input-password' | translate }}\n    </p>\n    <input\n      [(ngModel)]=\"password\"\n      type=\"password\"\n      nbInput\n      class=\"deactivated-password\"\n      placeholder=\"Password\">\n  </nb-card-body>\n  <nb-card-footer>\n    <button\n      type=\"submit\"\n      status=\"danger\"\n      size=\"large\"\n      class=\"deactivated-button\"\n      [disabled]=\"!password || disabled\"\n      (click)=\"submit(password)\"\n      nbButton>\n      {{ 'message.button-deactivate' | translate }}\n    </button>\n  </nb-card-footer>\n</nb-card>\n",
                styles: ["/*!\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */.nb-theme-default :host input.deactivated-password{max-width:unset;width:100%}.nb-theme-default :host .cancel{margin-right:1rem}.nb-theme-default :host button.deactivated-button{width:100%}.nb-theme-dark :host input.deactivated-password{max-width:unset;width:100%}.nb-theme-dark :host .cancel{margin-right:1rem}.nb-theme-dark :host button.deactivated-button{width:100%}.nb-theme-cosmic :host input.deactivated-password{max-width:unset;width:100%}.nb-theme-cosmic :host .cancel{margin-right:1rem}.nb-theme-cosmic :host button.deactivated-button{width:100%}.nb-theme-corporate :host input.deactivated-password{max-width:unset;width:100%}.nb-theme-corporate :host .cancel{margin-right:1rem}.nb-theme-corporate :host button.deactivated-button{width:100%}@media (max-width:767.98px){.nb-theme-default :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-default :host button.deactivated-button{font-size:.6rem}.nb-theme-dark :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-dark :host button.deactivated-button{font-size:.6rem}.nb-theme-cosmic :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-cosmic :host button.deactivated-button{font-size:.6rem}.nb-theme-corporate :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-corporate :host button.deactivated-button{font-size:.6rem}}"]
            }] }
];
/** @nocollapse */
DeactivatedPromptComponent.ctorParameters = () => [
    { type: NbDialogRef }
];
if (false) {
    /** @type {?} */
    DeactivatedPromptComponent.prototype.disabled;
    /** @type {?} */
    DeactivatedPromptComponent.prototype.password;
    /**
     * @type {?}
     * @protected
     */
    DeactivatedPromptComponent.prototype.ref;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVhY3RpdmF0ZWQtcHJvbXB0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B4YXBoaXJhL25neGEtZXh0cmEvIiwic291cmNlcyI6WyJsaWIvc2VjdXJpdHkvcHJvbXB0L2RlYWN0aXZhdGVkLXByb21wdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBTzdDLE1BQU0sT0FBTywwQkFBMEI7Ozs7SUFLckMsWUFBc0IsR0FBNEM7UUFBNUMsUUFBRyxHQUFILEdBQUcsQ0FBeUM7UUFIM0QsYUFBUSxHQUFZLEtBQUssQ0FBQztJQUlqQyxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxRQUFRO1FBQ2IsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDM0IsQ0FBQzs7O1lBaEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyx5MEJBQWdEOzthQUVqRDs7OztZQU5RLFdBQVc7Ozs7SUFTbEIsOENBQWlDOztJQUNqQyw4Q0FBd0I7Ozs7O0lBRVoseUNBQXNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYkRpYWxvZ1JlZiB9IGZyb20gJ0BuZWJ1bGFyL3RoZW1lJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAneGEtZGVhY3RpdmF0ZWQtcHJvbXB0JyxcbiAgdGVtcGxhdGVVcmw6ICdkZWFjdGl2YXRlZC1wcm9tcHQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnZGVhY3RpdmF0ZWQtcHJvbXB0LmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIERlYWN0aXZhdGVkUHJvbXB0Q29tcG9uZW50IHtcblxuICBwdWJsaWMgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIHBhc3N3b3JkOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHJlZjogTmJEaWFsb2dSZWY8RGVhY3RpdmF0ZWRQcm9tcHRDb21wb25lbnQ+KSB7XG4gIH1cblxuICBzdWJtaXQocGFzc3dvcmQpIHtcbiAgICB0aGlzLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB0aGlzLnJlZi5jbG9zZShwYXNzd29yZCk7XG4gIH1cbn1cbiJdfQ==