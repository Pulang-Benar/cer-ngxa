/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthTokenService } from './auth-token.service';
import { Subject } from 'rxjs';
var UnauthorizeGuardService = /** @class */ (function () {
    function UnauthorizeGuardService(router, authTokenService) {
        this.router = router;
        this.authTokenService = authTokenService;
    }
    /**
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    UnauthorizeGuardService.prototype.canActivate = /**
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
            result$.next(!value);
            if (value) {
                _this.router.navigate(['/app']);
            }
        }));
        return result$.asObservable();
    };
    UnauthorizeGuardService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    UnauthorizeGuardService.ctorParameters = function () { return [
        { type: Router },
        { type: AuthTokenService }
    ]; };
    return UnauthorizeGuardService;
}());
export { UnauthorizeGuardService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    UnauthorizeGuardService.prototype.router;
    /**
     * @type {?}
     * @private
     */
    UnauthorizeGuardService.prototype.authTokenService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5hdXRoLWd1YXJkLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AeGFwaGlyYS9uZ3hhLWF1dGgvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvdW5hdXRoLWd1YXJkLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBNEQsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDbkcsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRTNDO0lBRUksaUNBQW9CLE1BQWMsRUFBVSxnQkFBa0M7UUFBMUQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFBRyxDQUFDOzs7Ozs7SUFFbEYsNkNBQVc7Ozs7O0lBQVgsVUFBWSxLQUE2QixFQUFFLEtBQTBCO1FBQXJFLGlCQVNDOztZQVJTLE9BQU8sR0FBcUIsSUFBSSxPQUFPLEVBQVc7UUFDeEQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUk7Ozs7UUFBQyxVQUFDLEtBQWM7WUFDaEQsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3JCLElBQUksS0FBSyxFQUFFO2dCQUNQLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzthQUNsQztRQUNMLENBQUMsRUFBQyxDQUFDO1FBQ0gsT0FBTyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDbEMsQ0FBQzs7Z0JBYkosVUFBVTs7OztnQkFMd0QsTUFBTTtnQkFFaEUsZ0JBQWdCOztJQWtCekIsOEJBQUM7Q0FBQSxBQWZELElBZUM7U0FkWSx1QkFBdUI7Ozs7OztJQUNwQix5Q0FBc0I7Ozs7O0lBQUUsbURBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FuQWN0aXZhdGUsIEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIFJvdXRlclN0YXRlU25hcHNob3QsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBdXRoVG9rZW5TZXJ2aWNlIH0gZnJvbSAnLi9hdXRoLXRva2VuLnNlcnZpY2UnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVW5hdXRob3JpemVHdWFyZFNlcnZpY2UgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBhdXRoVG9rZW5TZXJ2aWNlOiBBdXRoVG9rZW5TZXJ2aWNlKSB7fVxuXG4gICAgY2FuQWN0aXZhdGUocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCQ6IFN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuICAgICAgICB0aGlzLmF1dGhUb2tlblNlcnZpY2UuaXNMb2dpbigpLnRoZW4oKHZhbHVlOiBib29sZWFuKSA9PiB7XG4gICAgICAgICAgICByZXN1bHQkLm5leHQoIXZhbHVlKTtcbiAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2FwcCddKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXN1bHQkLmFzT2JzZXJ2YWJsZSgpO1xuICAgIH1cblxufVxuIl19