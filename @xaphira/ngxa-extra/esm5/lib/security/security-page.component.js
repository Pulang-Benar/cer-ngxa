/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Injector } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { NbDialogService } from '@nebular/theme';
import { ResponseCode, OAUTH_INFO } from '@xaphira/shared';
import { AuthTokenService } from '@xaphira/ngxa-auth';
import { BaseFormComponent } from '@xaphira/ngxa-common';
import { DeactivatedPromptComponent } from './prompt/deactivated-prompt.component';
import { EncryptionService } from '@xaphira/utils';
var SecurityPageComponent = /** @class */ (function (_super) {
    tslib_1.__extends(SecurityPageComponent, _super);
    function SecurityPageComponent(injector, dialogService) {
        var _this = _super.call(this, injector, {
            'password': [],
        }) || this;
        _this.injector = injector;
        _this.dialogService = dialogService;
        _this.enc = injector.get(EncryptionService);
        _this.oauthResource = injector.get(OAUTH_INFO);
        _this.authToken = injector.get(AuthTokenService);
        return _this;
    }
    /**
     * @return {?}
     */
    SecurityPageComponent.prototype.onSubmit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.disabled = true;
        this.dialogService.open(DeactivatedPromptComponent)
            .onClose.subscribe((/**
         * @param {?} password
         * @return {?}
         */
        function (password) {
            if (password) {
                _this.disabled = true;
                /** @type {?} */
                var data = {
                    password: _this.enc.encryptAES(_this.oauthResource['aes_key'], password),
                };
                ((/** @type {?} */ (_super.prototype.onSubmit.call(_this, data, 'security', 'deactivated'))))
                    .pipe(takeUntil(_this.destroy$))
                    .subscribe((/**
                 * @param {?} response
                 * @return {?}
                 */
                function (response) {
                    if (response) {
                        if (response.respStatusCode === ResponseCode.OK_SCR003.toString()) {
                            _this.authToken.logout();
                        }
                    }
                }));
            }
            else {
                _this.disabled = false;
            }
        }));
    };
    SecurityPageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'xa-security-page',
                    template: "<xa-change-password-page></xa-change-password-page>\n<nb-card>\n    <nb-card-body>\n        <div class=\"row\">\n            <div class=\"col-md-3 col-lg-3 col-xxxl-6\">\n                <button\n                    type=\"button\"\n                    status=\"danger\"\n                    size=\"large\"\n                    class=\"deactivated-button\"\n                    [disabled]=\"disabled\"\n                    (click)=\"onSubmit()\"\n                    nbButton>\n                    {{ 'Deactivate Account' | translate }}\n                </button>\n            </div>\n            <div class=\"col-md-8 col-lg-8 col-xxxl-6\">\n                <h6 class=\"text-danger deactivated-label\">\n                    {{ 'message.deactivated-account' | translate }}\n                </h6>\n            </div>\n        </div>\n    </nb-card-body>\n</nb-card>\n",
                    styles: ["button.deactivated-button{width:100%}h6.deactivated-label{padding-top:10px;text-align:center}"]
                }] }
    ];
    /** @nocollapse */
    SecurityPageComponent.ctorParameters = function () { return [
        { type: Injector },
        { type: NbDialogService }
    ]; };
    return SecurityPageComponent;
}(BaseFormComponent));
export { SecurityPageComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VjdXJpdHktcGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AeGFwaGlyYS9uZ3hhLWV4dHJhLyIsInNvdXJjZXMiOlsibGliL3NlY3VyaXR5L3NlY3VyaXR5LXBhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVqRCxPQUFPLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBeUIsTUFBTSxpQkFBaUIsQ0FBQztBQUNsRixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUVuRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVuRDtJQUsyQyxpREFBc0I7SUFNL0QsK0JBQW1CLFFBQWtCLEVBQzNCLGFBQThCO1FBRHhDLFlBRUUsa0JBQU0sUUFBUSxFQUFFO1lBQ2QsVUFBVSxFQUFFLEVBQUU7U0FDZixDQUFDLFNBSUg7UUFSa0IsY0FBUSxHQUFSLFFBQVEsQ0FBVTtRQUMzQixtQkFBYSxHQUFiLGFBQWEsQ0FBaUI7UUFJdEMsS0FBSSxDQUFDLEdBQUcsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDM0MsS0FBSSxDQUFDLGFBQWEsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzlDLEtBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDOztJQUNsRCxDQUFDOzs7O0lBRUQsd0NBQVE7OztJQUFSO1FBQUEsaUJBc0JDO1FBckJDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLDBCQUEwQixDQUFDO2FBQ2hELE9BQU8sQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxRQUFnQjtZQUNsQyxJQUFJLFFBQVEsRUFBRTtnQkFDWixLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQzs7b0JBQ2YsSUFBSSxHQUFRO29CQUNoQixRQUFRLEVBQUUsS0FBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsRUFBRSxRQUFRLENBQUM7aUJBQ3ZFO2dCQUNELENBQUMsbUJBQUEsaUJBQU0sUUFBUSxhQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsYUFBYSxDQUFDLEVBQStCLENBQUM7cUJBQzdFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO3FCQUM5QixTQUFTOzs7O2dCQUFDLFVBQUMsUUFBeUI7b0JBQ25DLElBQUksUUFBUSxFQUFFO3dCQUNaLElBQUksUUFBUSxDQUFDLGNBQWMsS0FBSyxZQUFZLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxFQUFFOzRCQUNqRSxLQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDO3lCQUN6QjtxQkFDRjtnQkFDSCxDQUFDLEVBQUMsQ0FBQzthQUNOO2lCQUFNO2dCQUNMLEtBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO2FBQ3ZCO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDUCxDQUFDOztnQkEzQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBRTVCLDgyQkFBNkM7O2lCQUM5Qzs7OztnQkFmbUIsUUFBUTtnQkFFbkIsZUFBZTs7SUFzRHhCLDRCQUFDO0NBQUEsQUE3Q0QsQ0FLMkMsaUJBQWlCLEdBd0MzRDtTQXhDWSxxQkFBcUI7Ozs7OztJQUVoQyxvQ0FBK0I7Ozs7O0lBQy9CLDhDQUE2Qzs7Ozs7SUFDN0MsMENBQW9DOztJQUV4Qix5Q0FBeUI7Ozs7O0lBQ25DLDhDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE5iRGlhbG9nU2VydmljZSB9IGZyb20gJ0BuZWJ1bGFyL3RoZW1lJztcbmltcG9ydCB7IEFwaUJhc2VSZXNwb25zZSB9IGZyb20gJ0B4YXBoaXJhL3NoYXJlZCc7XG5pbXBvcnQgeyBSZXNwb25zZUNvZGUsIE9BVVRIX0lORk8sIFNlY3VyaXR5UmVzb3VyY2VNb2RlbCB9IGZyb20gJ0B4YXBoaXJhL3NoYXJlZCc7XG5pbXBvcnQgeyBBdXRoVG9rZW5TZXJ2aWNlIH0gZnJvbSAnQHhhcGhpcmEvbmd4YS1hdXRoJztcbmltcG9ydCB7IEJhc2VGb3JtQ29tcG9uZW50IH0gZnJvbSAnQHhhcGhpcmEvbmd4YS1jb21tb24nO1xuaW1wb3J0IHsgRGVhY3RpdmF0ZWRQcm9tcHRDb21wb25lbnQgfSBmcm9tICcuL3Byb21wdC9kZWFjdGl2YXRlZC1wcm9tcHQuY29tcG9uZW50JztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEVuY3J5cHRpb25TZXJ2aWNlIH0gZnJvbSAnQHhhcGhpcmEvdXRpbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd4YS1zZWN1cml0eS1wYWdlJyxcbiAgc3R5bGVVcmxzOiBbJy4vc2VjdXJpdHktcGFnZS5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vc2VjdXJpdHktcGFnZS5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFNlY3VyaXR5UGFnZUNvbXBvbmVudCBleHRlbmRzIEJhc2VGb3JtQ29tcG9uZW50PGFueT4ge1xuXG4gIHByaXZhdGUgZW5jOiBFbmNyeXB0aW9uU2VydmljZTtcbiAgcHJpdmF0ZSBvYXV0aFJlc291cmNlOiBTZWN1cml0eVJlc291cmNlTW9kZWw7XG4gIHByaXZhdGUgYXV0aFRva2VuOiBBdXRoVG9rZW5TZXJ2aWNlO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgcHJpdmF0ZSBkaWFsb2dTZXJ2aWNlOiBOYkRpYWxvZ1NlcnZpY2UpIHtcbiAgICBzdXBlcihpbmplY3Rvciwge1xuICAgICAgJ3Bhc3N3b3JkJzogW10sXG4gICAgfSk7XG4gICAgdGhpcy5lbmMgPSBpbmplY3Rvci5nZXQoRW5jcnlwdGlvblNlcnZpY2UpO1xuICAgIHRoaXMub2F1dGhSZXNvdXJjZSA9IGluamVjdG9yLmdldChPQVVUSF9JTkZPKTtcbiAgICB0aGlzLmF1dGhUb2tlbiA9IGluamVjdG9yLmdldChBdXRoVG9rZW5TZXJ2aWNlKTtcbiAgfVxuXG4gIG9uU3VibWl0KCk6IHZvaWQge1xuICAgIHRoaXMuZGlzYWJsZWQgPSB0cnVlO1xuICAgIHRoaXMuZGlhbG9nU2VydmljZS5vcGVuKERlYWN0aXZhdGVkUHJvbXB0Q29tcG9uZW50KVxuICAgICAgLm9uQ2xvc2Uuc3Vic2NyaWJlKChwYXNzd29yZDogc3RyaW5nKSA9PiB7XG4gICAgICAgIGlmIChwYXNzd29yZCkge1xuICAgICAgICAgIHRoaXMuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgIGNvbnN0IGRhdGE6IGFueSA9IHtcbiAgICAgICAgICAgIHBhc3N3b3JkOiB0aGlzLmVuYy5lbmNyeXB0QUVTKHRoaXMub2F1dGhSZXNvdXJjZVsnYWVzX2tleSddLCBwYXNzd29yZCksXG4gICAgICAgICAgfTtcbiAgICAgICAgICAoc3VwZXIub25TdWJtaXQoZGF0YSwgJ3NlY3VyaXR5JywgJ2RlYWN0aXZhdGVkJykgYXMgT2JzZXJ2YWJsZTxBcGlCYXNlUmVzcG9uc2U+KVxuICAgICAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgICAgICAgLnN1YnNjcmliZSgocmVzcG9uc2U6IEFwaUJhc2VSZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UucmVzcFN0YXR1c0NvZGUgPT09IFJlc3BvbnNlQ29kZS5PS19TQ1IwMDMudG9TdHJpbmcoKSkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5hdXRoVG9rZW4ubG9nb3V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbn1cbiJdfQ==