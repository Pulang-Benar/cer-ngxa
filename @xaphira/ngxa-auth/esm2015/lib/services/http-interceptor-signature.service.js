/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import { Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { signatureHeader, OAUTH_INFO } from '@xaphira/shared';
import { AuthSignatureService } from './auth-signature.service';
export class HttpInterceptorSignatureService {
    /**
     * @param {?} authSignature
     * @param {?} oauthResource
     */
    constructor(authSignature, oauthResource) {
        this.authSignature = authSignature;
        this.oauthResource = oauthResource;
        this.destroy$ = new Subject();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
        this.destroy$.unsubscribe();
    }
    /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    intercept(req, next) {
        if (req.headers) {
            if (req.headers.has(signatureHeader.mark) && this.oauthResource.signature) {
                return this.authSignature.signHeaders(req).pipe(switchMap((/**
                 * @param {?} value
                 * @return {?}
                 */
                (value) => {
                    return next.handle(value);
                })));
            }
        }
        return next.handle(req).takeUntil(this.destroy$);
    }
}
HttpInterceptorSignatureService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
HttpInterceptorSignatureService.ctorParameters = () => [
    { type: AuthSignatureService },
    { type: undefined, decorators: [{ type: Inject, args: [OAUTH_INFO,] }] }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    HttpInterceptorSignatureService.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    HttpInterceptorSignatureService.prototype.authSignature;
    /**
     * @type {?}
     * @private
     */
    HttpInterceptorSignatureService.prototype.oauthResource;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1pbnRlcmNlcHRvci1zaWduYXR1cmUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B4YXBoaXJhL25neGEtYXV0aC8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9odHRwLWludGVyY2VwdG9yLXNpZ25hdHVyZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFhLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU5RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUF5QixVQUFVLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNyRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUdoRSxNQUFNLE9BQU8sK0JBQStCOzs7OztJQUV4QyxZQUFvQixhQUFtQyxFQUN2QixhQUFvQztRQURoRCxrQkFBYSxHQUFiLGFBQWEsQ0FBc0I7UUFDdkIsa0JBQWEsR0FBYixhQUFhLENBQXVCO1FBRTVELGFBQVEsR0FBaUIsSUFBSSxPQUFPLEVBQU8sQ0FBQztJQUZtQixDQUFDOzs7O0lBSXhFLFdBQVc7UUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDOUIsQ0FBQzs7Ozs7O0lBRU0sU0FBUyxDQUFDLEdBQXFCLEVBQUUsSUFBaUI7UUFDckQsSUFBSSxHQUFHLENBQUMsT0FBTyxFQUFFO1lBQ2IsSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUU7Z0JBQ3ZFLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVM7Ozs7Z0JBQUMsQ0FBQyxLQUF1QixFQUFFLEVBQUU7b0JBQ2xGLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDOUIsQ0FBQyxFQUFDLENBQUMsQ0FBQzthQUNQO1NBQ0o7UUFDRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNyRCxDQUFDOzs7WUF2QkosVUFBVTs7OztZQUZGLG9CQUFvQjs0Q0FNcEIsTUFBTSxTQUFDLFVBQVU7Ozs7Ozs7SUFFdEIsbURBQW9EOzs7OztJQUh4Qyx3REFBMkM7Ozs7O0lBQ25ELHdEQUFnRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBJbnRlcmNlcHRvciwgSHR0cFJlcXVlc3QsIEh0dHBIYW5kbGVyLCBIdHRwRXZlbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSwgT25EZXN0cm95LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IHNpZ25hdHVyZUhlYWRlciwgU2VjdXJpdHlSZXNvdXJjZU1vZGVsLCBPQVVUSF9JTkZPIH0gZnJvbSAnQHhhcGhpcmEvc2hhcmVkJztcbmltcG9ydCB7IEF1dGhTaWduYXR1cmVTZXJ2aWNlIH0gZnJvbSAnLi9hdXRoLXNpZ25hdHVyZS5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEh0dHBJbnRlcmNlcHRvclNpZ25hdHVyZVNlcnZpY2UgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3IsIE9uRGVzdHJveSB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGF1dGhTaWduYXR1cmU6IEF1dGhTaWduYXR1cmVTZXJ2aWNlLFxuICAgICAgICBASW5qZWN0KE9BVVRIX0lORk8pIHByaXZhdGUgb2F1dGhSZXNvdXJjZTogU2VjdXJpdHlSZXNvdXJjZU1vZGVsKSB7fVxuXG4gICAgcHJpdmF0ZSBkZXN0cm95JDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3Q8YW55PigpO1xuXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICB0aGlzLmRlc3Ryb3kkLm5leHQodHJ1ZSk7XG4gICAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gICAgICB0aGlzLmRlc3Ryb3kkLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGludGVyY2VwdChyZXE6IEh0dHBSZXF1ZXN0PGFueT4sIG5leHQ6IEh0dHBIYW5kbGVyKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xuICAgICAgICBpZiAocmVxLmhlYWRlcnMpIHtcbiAgICAgICAgICAgIGlmIChyZXEuaGVhZGVycy5oYXMoc2lnbmF0dXJlSGVhZGVyLm1hcmspICYmIHRoaXMub2F1dGhSZXNvdXJjZS5zaWduYXR1cmUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hdXRoU2lnbmF0dXJlLnNpZ25IZWFkZXJzKHJlcSkucGlwZShzd2l0Y2hNYXAoKHZhbHVlOiBIdHRwUmVxdWVzdDxhbnk+KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXh0LmhhbmRsZSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXh0LmhhbmRsZShyZXEpLnRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKTtcbiAgICB9XG5cbn1cbiJdfQ==