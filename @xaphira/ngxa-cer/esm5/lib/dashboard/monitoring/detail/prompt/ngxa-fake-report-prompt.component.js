/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
var NgxaFakeReportPromptComponent = /** @class */ (function () {
    function NgxaFakeReportPromptComponent(ref) {
        this.ref = ref;
        this.disabled = false;
    }
    /**
     * @param {?} password
     * @return {?}
     */
    NgxaFakeReportPromptComponent.prototype.submit = /**
     * @param {?} password
     * @return {?}
     */
    function (password) {
        this.disabled = true;
        this.ref.close(password);
    };
    NgxaFakeReportPromptComponent.decorators = [
        { type: Component, args: [{
                    selector: 'xa-fake-report-prompt',
                    template: "<nb-card>\n  <nb-card-header>\n    <h6 class=\"text-danger deactivated-label\">\n        {{ 'Fake Report' | translate }}\n    </h6>\n  </nb-card-header>\n  <nb-card-body>\n    <p>\n      {{ 'message.fake-form' | translate }}\n    </p>\n    <p>\n      {{ 'message.input-password' | translate }}\n    </p>\n    <input\n      [(ngModel)]=\"password\"\n      type=\"password\"\n      nbInput\n      class=\"fake-password\"\n      placeholder=\"Password\">\n  </nb-card-body>\n  <nb-card-footer>\n    <button\n      type=\"submit\"\n      status=\"danger\"\n      size=\"large\"\n      class=\"fake-button\"\n      [disabled]=\"!password || disabled\"\n      (click)=\"submit(password)\"\n      nbButton>\n      {{ 'Fake Report' | translate }}\n    </button>\n  </nb-card-footer>\n</nb-card>\n",
                    styles: ["/*!\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */.nb-theme-default :host input.fake-password{max-width:unset;width:100%}.nb-theme-default :host .cancel{margin-right:1rem}.nb-theme-default :host button.fake-button{width:100%}.nb-theme-dark :host input.fake-password{max-width:unset;width:100%}.nb-theme-dark :host .cancel{margin-right:1rem}.nb-theme-dark :host button.fake-button{width:100%}.nb-theme-cosmic :host input.fake-password{max-width:unset;width:100%}.nb-theme-cosmic :host .cancel{margin-right:1rem}.nb-theme-cosmic :host button.fake-button{width:100%}.nb-theme-corporate :host input.fake-password{max-width:unset;width:100%}.nb-theme-corporate :host .cancel{margin-right:1rem}.nb-theme-corporate :host button.fake-button{width:100%}@media (max-width:767.98px){.nb-theme-default :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-default :host button.fake-button{font-size:.6rem}.nb-theme-dark :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-dark :host button.fake-button{font-size:.6rem}.nb-theme-cosmic :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-cosmic :host button.fake-button{font-size:.6rem}.nb-theme-corporate :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-corporate :host button.fake-button{font-size:.6rem}}"]
                }] }
    ];
    /** @nocollapse */
    NgxaFakeReportPromptComponent.ctorParameters = function () { return [
        { type: NbDialogRef }
    ]; };
    return NgxaFakeReportPromptComponent;
}());
export { NgxaFakeReportPromptComponent };
if (false) {
    /** @type {?} */
    NgxaFakeReportPromptComponent.prototype.disabled;
    /** @type {?} */
    NgxaFakeReportPromptComponent.prototype.password;
    /**
     * @type {?}
     * @protected
     */
    NgxaFakeReportPromptComponent.prototype.ref;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4YS1mYWtlLXJlcG9ydC1wcm9tcHQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHhhcGhpcmEvbmd4YS1jZXIvIiwic291cmNlcyI6WyJsaWIvZGFzaGJvYXJkL21vbml0b3JpbmcvZGV0YWlsL3Byb21wdC9uZ3hhLWZha2UtcmVwb3J0LXByb21wdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDO0lBVUUsdUNBQXNCLEdBQStDO1FBQS9DLFFBQUcsR0FBSCxHQUFHLENBQTRDO1FBSDlELGFBQVEsR0FBWSxLQUFLLENBQUM7SUFJakMsQ0FBQzs7Ozs7SUFFRCw4Q0FBTTs7OztJQUFOLFVBQU8sUUFBUTtRQUNiLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzNCLENBQUM7O2dCQWhCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtvQkFDakMsZ3lCQUF1RDs7aUJBRXhEOzs7O2dCQU5RLFdBQVc7O0lBbUJwQixvQ0FBQztDQUFBLEFBakJELElBaUJDO1NBWlksNkJBQTZCOzs7SUFFeEMsaURBQWlDOztJQUNqQyxpREFBd0I7Ozs7O0lBRVosNENBQXlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYkRpYWxvZ1JlZiB9IGZyb20gJ0BuZWJ1bGFyL3RoZW1lJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAneGEtZmFrZS1yZXBvcnQtcHJvbXB0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL25neGEtZmFrZS1yZXBvcnQtcHJvbXB0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ25neGEtZmFrZS1yZXBvcnQtcHJvbXB0LmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIE5neGFGYWtlUmVwb3J0UHJvbXB0Q29tcG9uZW50IHtcblxuICBwdWJsaWMgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIHBhc3N3b3JkOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHJlZjogTmJEaWFsb2dSZWY8Tmd4YUZha2VSZXBvcnRQcm9tcHRDb21wb25lbnQ+KSB7XG4gIH1cblxuICBzdWJtaXQocGFzc3dvcmQpIHtcbiAgICB0aGlzLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB0aGlzLnJlZi5jbG9zZShwYXNzd29yZCk7XG4gIH1cbn1cbiJdfQ==