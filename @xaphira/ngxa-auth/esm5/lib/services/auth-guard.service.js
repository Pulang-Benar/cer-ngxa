/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Router } from '@angular/router';
import { Injectable, Inject } from '@angular/core';
import { AuthTokenService } from './auth-token.service';
import { Subject } from 'rxjs';
import { USER_INFO, UserInfo } from '@xaphira/shared';
var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(router, authTokenService, authService) {
        this.router = router;
        this.authTokenService = authTokenService;
        this.authService = authService;
    }
    /**
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    AuthGuardService.prototype.canActivate = /**
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    function (route, state) {
        var _this = this;
        /** @type {?} */
        var result$ = new Subject();
        this.authTokenService.isLogin().then((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            result$.next(value);
            if (!value) {
                _this.router.navigate(['/auth']);
            }
            else {
                _this.authService.loadPhotoUser();
            }
        }));
        return result$.asObservable();
    };
    AuthGuardService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    AuthGuardService.ctorParameters = function () { return [
        { type: Router },
        { type: AuthTokenService },
        { type: UserInfo, decorators: [{ type: Inject, args: [USER_INFO,] }] }
    ]; };
    return AuthGuardService;
}());
export { AuthGuardService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    AuthGuardService.prototype.router;
    /**
     * @type {?}
     * @private
     */
    AuthGuardService.prototype.authTokenService;
    /**
     * @type {?}
     * @private
     */
    AuthGuardService.prototype.authService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1ndWFyZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHhhcGhpcmEvbmd4YS1hdXRoLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2F1dGgtZ3VhcmQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUE0RCxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNuRyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFdEQ7SUFFSSwwQkFBb0IsTUFBYyxFQUFVLGdCQUFrQyxFQUMvQyxXQUFxQjtRQURoQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUMvQyxnQkFBVyxHQUFYLFdBQVcsQ0FBVTtJQUFHLENBQUM7Ozs7OztJQUV4RCxzQ0FBVzs7Ozs7SUFBWCxVQUFZLEtBQTZCLEVBQUUsS0FBMEI7UUFBckUsaUJBV0M7O1lBVlMsT0FBTyxHQUFxQixJQUFJLE9BQU8sRUFBVztRQUN4RCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSTs7OztRQUFDLFVBQUMsS0FBYztZQUNoRCxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ1IsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2FBQ25DO2lCQUFNO2dCQUNILEtBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLENBQUM7YUFDcEM7UUFDTCxDQUFDLEVBQUMsQ0FBQztRQUNILE9BQU8sT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ2xDLENBQUM7O2dCQWhCSixVQUFVOzs7O2dCQU53RCxNQUFNO2dCQUVoRSxnQkFBZ0I7Z0JBRUwsUUFBUSx1QkFLbkIsTUFBTSxTQUFDLFNBQVM7O0lBZXpCLHVCQUFDO0NBQUEsQUFsQkQsSUFrQkM7U0FqQlksZ0JBQWdCOzs7Ozs7SUFDYixrQ0FBc0I7Ozs7O0lBQUUsNENBQTBDOzs7OztJQUMxRSx1Q0FBZ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYW5BY3RpdmF0ZSwgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgUm91dGVyU3RhdGVTbmFwc2hvdCwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXV0aFRva2VuU2VydmljZSB9IGZyb20gJy4vYXV0aC10b2tlbi5zZXJ2aWNlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFVTRVJfSU5GTywgVXNlckluZm8gfSBmcm9tICdAeGFwaGlyYS9zaGFyZWQnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXV0aEd1YXJkU2VydmljZSBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIGF1dGhUb2tlblNlcnZpY2U6IEF1dGhUb2tlblNlcnZpY2UsXG4gICAgICAgIEBJbmplY3QoVVNFUl9JTkZPKSBwcml2YXRlIGF1dGhTZXJ2aWNlOiBVc2VySW5mbykge31cblxuICAgIGNhbkFjdGl2YXRlKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgICAgICBjb25zdCByZXN1bHQkOiBTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcbiAgICAgICAgdGhpcy5hdXRoVG9rZW5TZXJ2aWNlLmlzTG9naW4oKS50aGVuKCh2YWx1ZTogYm9vbGVhbikgPT4ge1xuICAgICAgICAgICAgcmVzdWx0JC5uZXh0KHZhbHVlKTtcbiAgICAgICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9hdXRoJ10pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmxvYWRQaG90b1VzZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXN1bHQkLmFzT2JzZXJ2YWJsZSgpO1xuICAgIH1cblxufVxuIl19