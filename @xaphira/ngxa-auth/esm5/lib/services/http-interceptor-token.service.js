/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { signatureHeader } from '@xaphira/shared';
import { AuthTokenService } from './auth-token.service';
var HttpInterceptorTokenService = /** @class */ (function () {
    function HttpInterceptorTokenService(authToken) {
        this.authToken = authToken;
        this.destroy$ = new Subject();
    }
    /**
     * @return {?}
     */
    HttpInterceptorTokenService.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next(true);
        this.destroy$.complete();
        this.destroy$.unsubscribe();
    };
    /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    HttpInterceptorTokenService.prototype.intercept = /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    function (req, next) {
        if (req.headers) {
            if (req.headers.has(signatureHeader.mark)) {
                return this.authToken.oauthHeaders(req).pipe(switchMap((/**
                 * @param {?} reqAuth
                 * @return {?}
                 */
                function (reqAuth) {
                    return next.handle(reqAuth);
                })));
            }
        }
        return next.handle(req).takeUntil(this.destroy$);
    };
    HttpInterceptorTokenService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    HttpInterceptorTokenService.ctorParameters = function () { return [
        { type: AuthTokenService }
    ]; };
    return HttpInterceptorTokenService;
}());
export { HttpInterceptorTokenService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    HttpInterceptorTokenService.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    HttpInterceptorTokenService.prototype.authToken;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1pbnRlcmNlcHRvci10b2tlbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHhhcGhpcmEvbmd4YS1hdXRoLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2h0dHAtaW50ZXJjZXB0b3ItdG9rZW4uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUV0RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDbEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFeEQ7SUFHSSxxQ0FBb0IsU0FBMkI7UUFBM0IsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFFdkMsYUFBUSxHQUFpQixJQUFJLE9BQU8sRUFBTyxDQUFDO0lBRkYsQ0FBQzs7OztJQUluRCxpREFBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDOUIsQ0FBQzs7Ozs7O0lBRU0sK0NBQVM7Ozs7O0lBQWhCLFVBQWlCLEdBQXFCLEVBQUUsSUFBaUI7UUFDckQsSUFBSSxHQUFHLENBQUMsT0FBTyxFQUFFO1lBQ2IsSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ3ZDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVM7Ozs7Z0JBQUMsVUFBQyxPQUFZO29CQUNoRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ2hDLENBQUMsRUFBQyxDQUFDLENBQUM7YUFDUDtTQUNKO1FBQ0QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDckQsQ0FBQzs7Z0JBdEJKLFVBQVU7Ozs7Z0JBRkYsZ0JBQWdCOztJQTBCekIsa0NBQUM7Q0FBQSxBQXhCRCxJQXdCQztTQXZCWSwyQkFBMkI7Ozs7OztJQUlwQywrQ0FBb0Q7Ozs7O0lBRnhDLGdEQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBJbnRlcmNlcHRvciwgSHR0cFJlcXVlc3QsIEh0dHBIYW5kbGVyLCBIdHRwRXZlbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBzaWduYXR1cmVIZWFkZXIgfSBmcm9tICdAeGFwaGlyYS9zaGFyZWQnO1xuaW1wb3J0IHsgQXV0aFRva2VuU2VydmljZSB9IGZyb20gJy4vYXV0aC10b2tlbi5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEh0dHBJbnRlcmNlcHRvclRva2VuU2VydmljZSBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciwgT25EZXN0cm95IHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXV0aFRva2VuOiBBdXRoVG9rZW5TZXJ2aWNlKSB7fVxuXG4gICAgcHJpdmF0ZSBkZXN0cm95JDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3Q8YW55PigpO1xuXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICB0aGlzLmRlc3Ryb3kkLm5leHQodHJ1ZSk7XG4gICAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gICAgICB0aGlzLmRlc3Ryb3kkLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGludGVyY2VwdChyZXE6IEh0dHBSZXF1ZXN0PGFueT4sIG5leHQ6IEh0dHBIYW5kbGVyKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xuICAgICAgICBpZiAocmVxLmhlYWRlcnMpIHtcbiAgICAgICAgICAgIGlmIChyZXEuaGVhZGVycy5oYXMoc2lnbmF0dXJlSGVhZGVyLm1hcmspKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXV0aFRva2VuLm9hdXRoSGVhZGVycyhyZXEpLnBpcGUoc3dpdGNoTWFwKChyZXFBdXRoOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcUF1dGgpO1xuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxKS50YWtlVW50aWwodGhpcy5kZXN0cm95JCk7XG4gICAgfVxuXG59XG4iXX0=