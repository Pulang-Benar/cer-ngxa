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
export class AuthGuardChildService {
    /**
     * @param {?} router
     * @param {?} authTokenService
     * @param {?} enc
     * @param {?} storage
     */
    constructor(router, authTokenService, enc, storage) {
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
    canActivateChild(route, state) {
        /** @type {?} */
        const result$ = new Subject();
        this.authTokenService.isLogin().then((/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            result$.next(value);
            if (route.data) {
                Promise.all([
                    this.storage.getEnc('menus'),
                    this.storage.getEnc('extras'),
                ]).then((/**
                 * @param {?} strg
                 * @return {?}
                 */
                (strg) => {
                    if (!(strg[0].includes(route.data['code']) || strg[1].includes(route.data['code']))) {
                        this.router.navigate(['/app/home']);
                    }
                    return result$.asObservable();
                }));
            }
            if (!value) {
                this.router.navigate(['/auth']);
            }
        }));
        return result$.asObservable();
    }
}
AuthGuardChildService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
AuthGuardChildService.ctorParameters = () => [
    { type: Router },
    { type: AuthTokenService },
    { type: EncryptionService },
    { type: AuthIndexedDBService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1ndWFyZC1jaGlsZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHhhcGhpcmEvbmd4YS1hdXRoLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2F1dGgtZ3VhcmQtY2hpbGQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUErQyxNQUFNLEVBQW9CLE1BQU0saUJBQWlCLENBQUM7QUFDeEcsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN6RSxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRzNDLE1BQU0sT0FBTyxxQkFBcUI7Ozs7Ozs7SUFDOUIsWUFDWSxNQUFjLEVBQ2QsZ0JBQWtDLEVBQ2xDLEdBQXNCLEVBQ3RCLE9BQTZCO1FBSDdCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQ3RCLFlBQU8sR0FBUCxPQUFPLENBQXNCO0lBQUcsQ0FBQzs7Ozs7O0lBRTdDLGdCQUFnQixDQUFDLEtBQTZCLEVBQUUsS0FBMEI7O2NBQ2hFLE9BQU8sR0FBcUIsSUFBSSxPQUFPLEVBQVc7UUFDeEQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUk7Ozs7UUFBQyxDQUFDLEtBQWMsRUFBRSxFQUFFO1lBQ3BELE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDcEIsSUFBSSxLQUFLLENBQUMsSUFBSSxFQUFFO2dCQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUM7b0JBQ1IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO29CQUM1QixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7aUJBQ2hDLENBQUMsQ0FBQyxJQUFJOzs7O2dCQUFDLENBQUMsSUFBYyxFQUFFLEVBQUU7b0JBQ3ZCLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUU7d0JBQ2pGLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztxQkFDdkM7b0JBQ0QsT0FBTyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUM7Z0JBQ2xDLENBQUMsRUFBQyxDQUFDO2FBQ047WUFDRCxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUNSLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQzthQUNuQztRQUNMLENBQUMsRUFBQyxDQUFDO1FBQ0gsT0FBTyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDbEMsQ0FBQzs7O1lBNUJKLFVBQVU7Ozs7WUFQMkMsTUFBTTtZQUduRCxnQkFBZ0I7WUFEaEIsaUJBQWlCO1lBRWpCLG9CQUFvQjs7Ozs7OztJQU1yQix1Q0FBc0I7Ozs7O0lBQ3RCLGlEQUEwQzs7Ozs7SUFDMUMsb0NBQThCOzs7OztJQUM5Qix3Q0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBSb3V0ZXJTdGF0ZVNuYXBzaG90LCBSb3V0ZXIsIENhbkFjdGl2YXRlQ2hpbGQgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRW5jcnlwdGlvblNlcnZpY2UgfSBmcm9tICdAeGFwaGlyYS91dGlscyc7XG5pbXBvcnQgeyBBdXRoVG9rZW5TZXJ2aWNlIH0gZnJvbSAnLi9hdXRoLXRva2VuLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXV0aEluZGV4ZWREQlNlcnZpY2UgfSBmcm9tICcuLi9zdG9yYWdlL2F1dGgtaW5kZXhlZGRiLnNlcnZpY2UnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXV0aEd1YXJkQ2hpbGRTZXJ2aWNlIGltcGxlbWVudHMgQ2FuQWN0aXZhdGVDaGlsZCB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgIHByaXZhdGUgYXV0aFRva2VuU2VydmljZTogQXV0aFRva2VuU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBlbmM6IEVuY3J5cHRpb25TZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHN0b3JhZ2U6IEF1dGhJbmRleGVkREJTZXJ2aWNlKSB7fVxuXG4gICAgY2FuQWN0aXZhdGVDaGlsZChyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0JDogU3ViamVjdDxib29sZWFuPiA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG4gICAgICAgIHRoaXMuYXV0aFRva2VuU2VydmljZS5pc0xvZ2luKCkudGhlbigodmFsdWU6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgICAgIHJlc3VsdCQubmV4dCh2YWx1ZSk7XG4gICAgICAgICAgICBpZiAocm91dGUuZGF0YSkge1xuICAgICAgICAgICAgICAgIFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yYWdlLmdldEVuYygnbWVudXMnKSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yYWdlLmdldEVuYygnZXh0cmFzJyksXG4gICAgICAgICAgICAgICAgXSkudGhlbigoc3RyZzogc3RyaW5nW10pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEoc3RyZ1swXS5pbmNsdWRlcyhyb3V0ZS5kYXRhWydjb2RlJ10pIHx8IHN0cmdbMV0uaW5jbHVkZXMocm91dGUuZGF0YVsnY29kZSddKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2FwcC9ob21lJ10pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQkLmFzT2JzZXJ2YWJsZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2F1dGgnXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0JC5hc09ic2VydmFibGUoKTtcbiAgICB9XG5cbn1cbiJdfQ==