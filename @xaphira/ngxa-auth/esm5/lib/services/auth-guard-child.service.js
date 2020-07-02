/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { EncryptionService } from '@xaphira/utils';
import { AuthTokenService } from './auth-token.service';
import { AuthIndexedDBService } from '../storage/auth-indexeddb.service';
import { Subject } from 'rxjs';
var AuthGuardChildService = /** @class */ (function () {
    function AuthGuardChildService(router, authTokenService, enc, storage) {
        this.router = router;
        this.authTokenService = authTokenService;
        this.enc = enc;
        this.storage = storage;
    }
    /**
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    AuthGuardChildService.prototype.canActivateChild = /**
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
            if (route.data) {
                Promise.all([
                    _this.storage.getEnc('menus'),
                    _this.storage.getEnc('extras'),
                ]).then((/**
                 * @param {?} strg
                 * @return {?}
                 */
                function (strg) {
                    if (!(strg[0].includes(route.data['code']) || strg[1].includes(route.data['code']))) {
                        _this.router.navigate(['/app/home']);
                    }
                    return result$.asObservable();
                }));
            }
            if (!value) {
                _this.router.navigate(['/auth']);
            }
        }));
        return result$.asObservable();
    };
    AuthGuardChildService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    AuthGuardChildService.ctorParameters = function () { return [
        { type: Router },
        { type: AuthTokenService },
        { type: EncryptionService },
        { type: AuthIndexedDBService }
    ]; };
    return AuthGuardChildService;
}());
export { AuthGuardChildService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    AuthGuardChildService.prototype.router;
    /**
     * @type {?}
     * @private
     */
    AuthGuardChildService.prototype.authTokenService;
    /**
     * @type {?}
     * @private
     */
    AuthGuardChildService.prototype.enc;
    /**
     * @type {?}
     * @private
     */
    AuthGuardChildService.prototype.storage;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1ndWFyZC1jaGlsZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHhhcGhpcmEvbmd4YS1hdXRoLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2F1dGgtZ3VhcmQtY2hpbGQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUErQyxNQUFNLEVBQW9CLE1BQU0saUJBQWlCLENBQUM7QUFDeEcsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN6RSxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRTNDO0lBRUksK0JBQ1ksTUFBYyxFQUNkLGdCQUFrQyxFQUNsQyxHQUFzQixFQUN0QixPQUE2QjtRQUg3QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUN0QixZQUFPLEdBQVAsT0FBTyxDQUFzQjtJQUFHLENBQUM7Ozs7OztJQUU3QyxnREFBZ0I7Ozs7O0lBQWhCLFVBQWlCLEtBQTZCLEVBQUUsS0FBMEI7UUFBMUUsaUJBb0JDOztZQW5CUyxPQUFPLEdBQXFCLElBQUksT0FBTyxFQUFXO1FBQ3hELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJOzs7O1FBQUMsVUFBQyxLQUFjO1lBQ2hELE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDcEIsSUFBSSxLQUFLLENBQUMsSUFBSSxFQUFFO2dCQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUM7b0JBQ1IsS0FBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO29CQUM1QixLQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7aUJBQ2hDLENBQUMsQ0FBQyxJQUFJOzs7O2dCQUFDLFVBQUMsSUFBYztvQkFDbkIsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRTt3QkFDakYsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO3FCQUN2QztvQkFDRCxPQUFPLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQztnQkFDbEMsQ0FBQyxFQUFDLENBQUM7YUFDTjtZQUNELElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ1IsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2FBQ25DO1FBQ0wsQ0FBQyxFQUFDLENBQUM7UUFDSCxPQUFPLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNsQyxDQUFDOztnQkE1QkosVUFBVTs7OztnQkFQMkMsTUFBTTtnQkFHbkQsZ0JBQWdCO2dCQURoQixpQkFBaUI7Z0JBRWpCLG9CQUFvQjs7SUFpQzdCLDRCQUFDO0NBQUEsQUE5QkQsSUE4QkM7U0E3QlkscUJBQXFCOzs7Ozs7SUFFMUIsdUNBQXNCOzs7OztJQUN0QixpREFBMEM7Ozs7O0lBQzFDLG9DQUE4Qjs7Ozs7SUFDOUIsd0NBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgUm91dGVyU3RhdGVTbmFwc2hvdCwgUm91dGVyLCBDYW5BY3RpdmF0ZUNoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEVuY3J5cHRpb25TZXJ2aWNlIH0gZnJvbSAnQHhhcGhpcmEvdXRpbHMnO1xuaW1wb3J0IHsgQXV0aFRva2VuU2VydmljZSB9IGZyb20gJy4vYXV0aC10b2tlbi5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhJbmRleGVkREJTZXJ2aWNlIH0gZnJvbSAnLi4vc3RvcmFnZS9hdXRoLWluZGV4ZWRkYi5zZXJ2aWNlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEF1dGhHdWFyZENoaWxkU2VydmljZSBpbXBsZW1lbnRzIENhbkFjdGl2YXRlQ2hpbGQge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgICBwcml2YXRlIGF1dGhUb2tlblNlcnZpY2U6IEF1dGhUb2tlblNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgZW5jOiBFbmNyeXB0aW9uU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBzdG9yYWdlOiBBdXRoSW5kZXhlZERCU2VydmljZSkge31cblxuICAgIGNhbkFjdGl2YXRlQ2hpbGQocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCQ6IFN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuICAgICAgICB0aGlzLmF1dGhUb2tlblNlcnZpY2UuaXNMb2dpbigpLnRoZW4oKHZhbHVlOiBib29sZWFuKSA9PiB7XG4gICAgICAgICAgICByZXN1bHQkLm5leHQodmFsdWUpO1xuICAgICAgICAgICAgaWYgKHJvdXRlLmRhdGEpIHtcbiAgICAgICAgICAgICAgICBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmFnZS5nZXRFbmMoJ21lbnVzJyksXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmFnZS5nZXRFbmMoJ2V4dHJhcycpLFxuICAgICAgICAgICAgICAgIF0pLnRoZW4oKHN0cmc6IHN0cmluZ1tdKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHN0cmdbMF0uaW5jbHVkZXMocm91dGUuZGF0YVsnY29kZSddKSB8fCBzdHJnWzFdLmluY2x1ZGVzKHJvdXRlLmRhdGFbJ2NvZGUnXSkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9hcHAvaG9tZSddKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0JC5hc09ic2VydmFibGUoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9hdXRoJ10pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdCQuYXNPYnNlcnZhYmxlKCk7XG4gICAgfVxuXG59XG4iXX0=