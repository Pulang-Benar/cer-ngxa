/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { AuthTokenService } from '../../services/auth-token.service';
var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(authTokenService) {
        this.authTokenService = authTokenService;
        this.authTokenService.logout();
    }
    LogoutComponent.decorators = [
        { type: Component, args: [{
                    selector: 'xa-logout',
                    template: ''
                }] }
    ];
    /** @nocollapse */
    LogoutComponent.ctorParameters = function () { return [
        { type: AuthTokenService }
    ]; };
    return LogoutComponent;
}());
export { LogoutComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    LogoutComponent.prototype.authTokenService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nb3V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B4YXBoaXJhL25neGEtYXV0aC8iLCJzb3VyY2VzIjpbImxpYi9hdXRoL2xvZ291dC9sb2dvdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRXJFO0lBTUkseUJBQW9CLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNuQyxDQUFDOztnQkFSSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLFFBQVEsRUFBRSxFQUFFO2lCQUNmOzs7O2dCQUxRLGdCQUFnQjs7SUFXekIsc0JBQUM7Q0FBQSxBQVRELElBU0M7U0FMWSxlQUFlOzs7Ozs7SUFFWiwyQ0FBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEF1dGhUb2tlblNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hdXRoLXRva2VuLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3hhLWxvZ291dCcsXG4gICAgdGVtcGxhdGU6ICcnLFxufSlcbmV4cG9ydCBjbGFzcyBMb2dvdXRDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhdXRoVG9rZW5TZXJ2aWNlOiBBdXRoVG9rZW5TZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuYXV0aFRva2VuU2VydmljZS5sb2dvdXQoKTtcbiAgICB9XG59XG4iXX0=