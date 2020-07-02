/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Router } from '@angular/router';
import { Injectable, Inject } from '@angular/core';
import { AuthTokenService } from './auth-token.service';
import { Subject } from 'rxjs';
import { USER_INFO, UserInfo } from '@xaphira/shared';
export class AuthGuardService {
    /**
     * @param {?} router
     * @param {?} authTokenService
     * @param {?} authService
     */
    constructor(router, authTokenService, authService) {
        this.router = router;
        this.authTokenService = authTokenService;
        this.authService = authService;
    }
    /**
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    canActivate(route, state) {
        /** @type {?} */
        const result$ = new Subject();
        this.authTokenService.isLogin().then((/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            result$.next(value);
            if (!value) {
                this.router.navigate(['/auth']);
            }
            else {
                this.authService.loadPhotoUser();
            }
        }));
        return result$.asObservable();
    }
}
AuthGuardService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
AuthGuardService.ctorParameters = () => [
    { type: Router },
    { type: AuthTokenService },
    { type: UserInfo, decorators: [{ type: Inject, args: [USER_INFO,] }] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1ndWFyZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHhhcGhpcmEvbmd4YS1hdXRoLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2F1dGgtZ3VhcmQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUE0RCxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNuRyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFHdEQsTUFBTSxPQUFPLGdCQUFnQjs7Ozs7O0lBQ3pCLFlBQW9CLE1BQWMsRUFBVSxnQkFBa0MsRUFDL0MsV0FBcUI7UUFEaEMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDL0MsZ0JBQVcsR0FBWCxXQUFXLENBQVU7SUFBRyxDQUFDOzs7Ozs7SUFFeEQsV0FBVyxDQUFDLEtBQTZCLEVBQUUsS0FBMEI7O2NBQzNELE9BQU8sR0FBcUIsSUFBSSxPQUFPLEVBQVc7UUFDeEQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUk7Ozs7UUFBQyxDQUFDLEtBQWMsRUFBRSxFQUFFO1lBQ3BELE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDcEIsSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDUixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7YUFDbkM7aUJBQU07Z0JBQ0gsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsQ0FBQzthQUNwQztRQUNMLENBQUMsRUFBQyxDQUFDO1FBQ0gsT0FBTyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDbEMsQ0FBQzs7O1lBaEJKLFVBQVU7Ozs7WUFOd0QsTUFBTTtZQUVoRSxnQkFBZ0I7WUFFTCxRQUFRLHVCQUtuQixNQUFNLFNBQUMsU0FBUzs7Ozs7OztJQURULGtDQUFzQjs7Ozs7SUFBRSw0Q0FBMEM7Ozs7O0lBQzFFLHVDQUFnRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhbkFjdGl2YXRlLCBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBSb3V0ZXJTdGF0ZVNuYXBzaG90LCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBdXRoVG9rZW5TZXJ2aWNlIH0gZnJvbSAnLi9hdXRoLXRva2VuLnNlcnZpY2UnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgVVNFUl9JTkZPLCBVc2VySW5mbyB9IGZyb20gJ0B4YXBoaXJhL3NoYXJlZCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBdXRoR3VhcmRTZXJ2aWNlIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgYXV0aFRva2VuU2VydmljZTogQXV0aFRva2VuU2VydmljZSxcbiAgICAgICAgQEluamVjdChVU0VSX0lORk8pIHByaXZhdGUgYXV0aFNlcnZpY2U6IFVzZXJJbmZvKSB7fVxuXG4gICAgY2FuQWN0aXZhdGUocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCQ6IFN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuICAgICAgICB0aGlzLmF1dGhUb2tlblNlcnZpY2UuaXNMb2dpbigpLnRoZW4oKHZhbHVlOiBib29sZWFuKSA9PiB7XG4gICAgICAgICAgICByZXN1bHQkLm5leHQodmFsdWUpO1xuICAgICAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2F1dGgnXSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UubG9hZFBob3RvVXNlcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdCQuYXNPYnNlcnZhYmxlKCk7XG4gICAgfVxuXG59XG4iXX0=