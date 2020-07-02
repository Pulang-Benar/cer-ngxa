/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
export class NgxaFakePromptComponent {
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
NgxaFakePromptComponent.decorators = [
    { type: Component, args: [{
                selector: 'xa-fake-prompt',
                template: "<nb-card>\n  <nb-card-header>\n    <h6 class=\"text-danger deactivated-label\">\n        {{ 'Fake Report' | translate }}\n    </h6>\n  </nb-card-header>\n  <nb-card-body>\n    <p>\n      {{ 'message.fake-form' | translate }}\n    </p>\n    <p>\n      {{ 'message.input-password' | translate }}\n    </p>\n    <input\n      [(ngModel)]=\"password\"\n      type=\"password\"\n      nbInput\n      class=\"fake-password\"\n      placeholder=\"Password\">\n  </nb-card-body>\n  <nb-card-footer>\n    <button\n      type=\"submit\"\n      status=\"danger\"\n      size=\"large\"\n      class=\"fake-button\"\n      [disabled]=\"!password || disabled\"\n      (click)=\"submit(password)\"\n      nbButton>\n      {{ 'Fake Report' | translate }}\n    </button>\n  </nb-card-footer>\n</nb-card>\n",
                styles: ["/*!\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */.nb-theme-default :host input.fake-password{max-width:unset;width:100%}.nb-theme-default :host .cancel{margin-right:1rem}.nb-theme-default :host button.fake-button{width:100%}.nb-theme-dark :host input.fake-password{max-width:unset;width:100%}.nb-theme-dark :host .cancel{margin-right:1rem}.nb-theme-dark :host button.fake-button{width:100%}.nb-theme-cosmic :host input.fake-password{max-width:unset;width:100%}.nb-theme-cosmic :host .cancel{margin-right:1rem}.nb-theme-cosmic :host button.fake-button{width:100%}.nb-theme-corporate :host input.fake-password{max-width:unset;width:100%}.nb-theme-corporate :host .cancel{margin-right:1rem}.nb-theme-corporate :host button.fake-button{width:100%}@media (max-width:767.98px){.nb-theme-default :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-default :host button.fake-button{font-size:.6rem}.nb-theme-dark :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-dark :host button.fake-button{font-size:.6rem}.nb-theme-cosmic :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-cosmic :host button.fake-button{font-size:.6rem}.nb-theme-corporate :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-corporate :host button.fake-button{font-size:.6rem}}"]
            }] }
];
/** @nocollapse */
NgxaFakePromptComponent.ctorParameters = () => [
    { type: NbDialogRef }
];
if (false) {
    /** @type {?} */
    NgxaFakePromptComponent.prototype.disabled;
    /** @type {?} */
    NgxaFakePromptComponent.prototype.password;
    /**
     * @type {?}
     * @protected
     */
    NgxaFakePromptComponent.prototype.ref;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4YS1mYWtlLXByb21wdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AeGFwaGlyYS9uZ3hhLWNlci8iLCJzb3VyY2VzIjpbImxpYi9yZXBvcnRzL2VtZXJnZW5jeS9kZXRhaWwvcHJvbXB0L25neGEtZmFrZS1wcm9tcHQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQU83QyxNQUFNLE9BQU8sdUJBQXVCOzs7O0lBS2xDLFlBQXNCLEdBQXlDO1FBQXpDLFFBQUcsR0FBSCxHQUFHLENBQXNDO1FBSHhELGFBQVEsR0FBWSxLQUFLLENBQUM7SUFJakMsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsUUFBUTtRQUNiLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzNCLENBQUM7OztZQWhCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsZ3lCQUFnRDs7YUFFakQ7Ozs7WUFOUSxXQUFXOzs7O0lBU2xCLDJDQUFpQzs7SUFDakMsMkNBQXdCOzs7OztJQUVaLHNDQUFtRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmJEaWFsb2dSZWYgfSBmcm9tICdAbmVidWxhci90aGVtZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3hhLWZha2UtcHJvbXB0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL25neGEtZmFrZS1wcm9tcHQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnbmd4YS1mYWtlLXByb21wdC5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBOZ3hhRmFrZVByb21wdENvbXBvbmVudCB7XG5cbiAgcHVibGljIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBwYXNzd29yZDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCByZWY6IE5iRGlhbG9nUmVmPE5neGFGYWtlUHJvbXB0Q29tcG9uZW50Pikge1xuICB9XG5cbiAgc3VibWl0KHBhc3N3b3JkKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IHRydWU7XG4gICAgdGhpcy5yZWYuY2xvc2UocGFzc3dvcmQpO1xuICB9XG59XG4iXX0=