/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import { HttpErrorHandler } from './http-error.handler';
import { AuthTokenService } from './auth-token.service';
import { AuthSignatureService } from './auth-signature.service';
import { AuthIndexedDBService } from '../storage/auth-indexeddb.service';
var HttpInterceptorErrorService = /** @class */ (function (_super) {
    tslib_1.__extends(HttpInterceptorErrorService, _super);
    function HttpInterceptorErrorService(translate, authToken, authStorage, authSignature) {
        var _this = _super.call(this, translate, authToken, authStorage, authSignature) || this;
        _this.translate = translate;
        _this.authToken = authToken;
        _this.authStorage = authStorage;
        _this.authSignature = authSignature;
        _this.destroy$ = new Subject();
        return _this;
    }
    /**
     * @return {?}
     */
    HttpInterceptorErrorService.prototype.ngOnDestroy = /**
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
    HttpInterceptorErrorService.prototype.intercept = /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    function (req, next) {
        var _this = this;
        return next.handle(req).pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            if (error instanceof HttpErrorResponse) {
                return _this.errorHandler(error, req, next);
            }
            else {
                return Observable.throw(error);
            }
        }))).takeUntil(this.destroy$);
    };
    HttpInterceptorErrorService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    HttpInterceptorErrorService.ctorParameters = function () { return [
        { type: TranslateService },
        { type: AuthTokenService },
        { type: AuthIndexedDBService },
        { type: AuthSignatureService }
    ]; };
    return HttpInterceptorErrorService;
}(HttpErrorHandler));
export { HttpInterceptorErrorService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    HttpInterceptorErrorService.prototype.destroy$;
    /** @type {?} */
    HttpInterceptorErrorService.prototype.translate;
    /** @type {?} */
    HttpInterceptorErrorService.prototype.authToken;
    /** @type {?} */
    HttpInterceptorErrorService.prototype.authStorage;
    /** @type {?} */
    HttpInterceptorErrorService.prototype.authSignature;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1pbnRlcmNlcHRvci1lcnJvci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHhhcGhpcmEvbmd4YS1hdXRoLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2h0dHAtaW50ZXJjZXB0b3ItZXJyb3Iuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBd0QsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMvRyxPQUFPLEVBQUUsVUFBVSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQ3RELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbEMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDaEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFFekU7SUFDaUQsdURBQWdCO0lBRTdELHFDQUNXLFNBQTJCLEVBQzNCLFNBQTJCLEVBQzNCLFdBQWlDLEVBQ2pDLGFBQW1DO1FBSjlDLFlBS0ksa0JBQU0sU0FBUyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsYUFBYSxDQUFDLFNBQzFEO1FBTFUsZUFBUyxHQUFULFNBQVMsQ0FBa0I7UUFDM0IsZUFBUyxHQUFULFNBQVMsQ0FBa0I7UUFDM0IsaUJBQVcsR0FBWCxXQUFXLENBQXNCO1FBQ2pDLG1CQUFhLEdBQWIsYUFBYSxDQUFzQjtRQUl0QyxjQUFRLEdBQWlCLElBQUksT0FBTyxFQUFPLENBQUM7O0lBRnBELENBQUM7Ozs7SUFJRCxpREFBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDOUIsQ0FBQzs7Ozs7O0lBRUQsK0NBQVM7Ozs7O0lBQVQsVUFBVSxHQUFxQixFQUFFLElBQWlCO1FBQWxELGlCQVNDO1FBUkcsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FDeEIsVUFBVTs7OztRQUFDLFVBQUEsS0FBSztZQUNaLElBQUksS0FBSyxZQUFZLGlCQUFpQixFQUFFO2dCQUNwQyxPQUFPLEtBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQzthQUM5QztpQkFBTTtnQkFDSCxPQUFPLFVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDbEM7UUFDVCxDQUFDLEVBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDakMsQ0FBQzs7Z0JBNUJKLFVBQVU7Ozs7Z0JBTkYsZ0JBQWdCO2dCQUVoQixnQkFBZ0I7Z0JBRWhCLG9CQUFvQjtnQkFEcEIsb0JBQW9COztJQWlDN0Isa0NBQUM7Q0FBQSxBQTlCRCxDQUNpRCxnQkFBZ0IsR0E2QmhFO1NBN0JZLDJCQUEyQjs7Ozs7O0lBVXBDLCtDQUFvRDs7SUFQaEQsZ0RBQWtDOztJQUNsQyxnREFBa0M7O0lBQ2xDLGtEQUF3Qzs7SUFDeEMsb0RBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cEludGVyY2VwdG9yLCBIdHRwUmVxdWVzdCwgSHR0cEhhbmRsZXIsIEh0dHBFdmVudCwgSHR0cEVycm9yUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5pbXBvcnQgeyBIdHRwRXJyb3JIYW5kbGVyIH0gZnJvbSAnLi9odHRwLWVycm9yLmhhbmRsZXInO1xuaW1wb3J0IHsgQXV0aFRva2VuU2VydmljZSB9IGZyb20gJy4vYXV0aC10b2tlbi5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhTaWduYXR1cmVTZXJ2aWNlIH0gZnJvbSAnLi9hdXRoLXNpZ25hdHVyZS5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhJbmRleGVkREJTZXJ2aWNlIH0gZnJvbSAnLi4vc3RvcmFnZS9hdXRoLWluZGV4ZWRkYi5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEh0dHBJbnRlcmNlcHRvckVycm9yU2VydmljZSBleHRlbmRzIEh0dHBFcnJvckhhbmRsZXIgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3IsIE9uRGVzdHJveSB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIHRyYW5zbGF0ZTogVHJhbnNsYXRlU2VydmljZSxcbiAgICAgICAgcHVibGljIGF1dGhUb2tlbjogQXV0aFRva2VuU2VydmljZSxcbiAgICAgICAgcHVibGljIGF1dGhTdG9yYWdlOiBBdXRoSW5kZXhlZERCU2VydmljZSxcbiAgICAgICAgcHVibGljIGF1dGhTaWduYXR1cmU6IEF1dGhTaWduYXR1cmVTZXJ2aWNlKSB7XG4gICAgICAgIHN1cGVyKHRyYW5zbGF0ZSwgYXV0aFRva2VuLCBhdXRoU3RvcmFnZSwgYXV0aFNpZ25hdHVyZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkZXN0cm95JDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3Q8YW55PigpO1xuXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICB0aGlzLmRlc3Ryb3kkLm5leHQodHJ1ZSk7XG4gICAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gICAgICB0aGlzLmRlc3Ryb3kkLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgaW50ZXJjZXB0KHJlcTogSHR0cFJlcXVlc3Q8YW55PiwgbmV4dDogSHR0cEhhbmRsZXIpOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XG4gICAgICAgIHJldHVybiBuZXh0LmhhbmRsZShyZXEpLnBpcGUoXG4gICAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBIdHRwRXJyb3JSZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5lcnJvckhhbmRsZXIoZXJyb3IsIHJlcSwgbmV4dCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgfSkpLnRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKTtcbiAgICB9XG5cbn1cbiJdfQ==