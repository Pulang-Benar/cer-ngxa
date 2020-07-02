/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class HttpInterceptorErrorService extends HttpErrorHandler {
    /**
     * @param {?} translate
     * @param {?} authToken
     * @param {?} authStorage
     * @param {?} authSignature
     */
    constructor(translate, authToken, authStorage, authSignature) {
        super(translate, authToken, authStorage, authSignature);
        this.translate = translate;
        this.authToken = authToken;
        this.authStorage = authStorage;
        this.authSignature = authSignature;
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
        return next.handle(req).pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => {
            if (error instanceof HttpErrorResponse) {
                return this.errorHandler(error, req, next);
            }
            else {
                return Observable.throw(error);
            }
        }))).takeUntil(this.destroy$);
    }
}
HttpInterceptorErrorService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
HttpInterceptorErrorService.ctorParameters = () => [
    { type: TranslateService },
    { type: AuthTokenService },
    { type: AuthIndexedDBService },
    { type: AuthSignatureService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1pbnRlcmNlcHRvci1lcnJvci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHhhcGhpcmEvbmd4YS1hdXRoLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2h0dHAtaW50ZXJjZXB0b3ItZXJyb3Iuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUF3RCxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQy9HLE9BQU8sRUFBRSxVQUFVLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUd6RSxNQUFNLE9BQU8sMkJBQTRCLFNBQVEsZ0JBQWdCOzs7Ozs7O0lBRTdELFlBQ1csU0FBMkIsRUFDM0IsU0FBMkIsRUFDM0IsV0FBaUMsRUFDakMsYUFBbUM7UUFDMUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBSmpELGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBQzNCLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBQzNCLGdCQUFXLEdBQVgsV0FBVyxDQUFzQjtRQUNqQyxrQkFBYSxHQUFiLGFBQWEsQ0FBc0I7UUFJdEMsYUFBUSxHQUFpQixJQUFJLE9BQU8sRUFBTyxDQUFDO0lBRnBELENBQUM7Ozs7SUFJRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzlCLENBQUM7Ozs7OztJQUVELFNBQVMsQ0FBQyxHQUFxQixFQUFFLElBQWlCO1FBQzlDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQ3hCLFVBQVU7Ozs7UUFBQyxLQUFLLENBQUMsRUFBRTtZQUNmLElBQUksS0FBSyxZQUFZLGlCQUFpQixFQUFFO2dCQUNwQyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQzthQUM5QztpQkFBTTtnQkFDSCxPQUFPLFVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDbEM7UUFDVCxDQUFDLEVBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDakMsQ0FBQzs7O1lBNUJKLFVBQVU7Ozs7WUFORixnQkFBZ0I7WUFFaEIsZ0JBQWdCO1lBRWhCLG9CQUFvQjtZQURwQixvQkFBb0I7Ozs7Ozs7SUFjekIsK0NBQW9EOztJQVBoRCxnREFBa0M7O0lBQ2xDLGdEQUFrQzs7SUFDbEMsa0RBQXdDOztJQUN4QyxvREFBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwSW50ZXJjZXB0b3IsIEh0dHBSZXF1ZXN0LCBIdHRwSGFuZGxlciwgSHR0cEV2ZW50LCBIdHRwRXJyb3JSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcbmltcG9ydCB7IEh0dHBFcnJvckhhbmRsZXIgfSBmcm9tICcuL2h0dHAtZXJyb3IuaGFuZGxlcic7XG5pbXBvcnQgeyBBdXRoVG9rZW5TZXJ2aWNlIH0gZnJvbSAnLi9hdXRoLXRva2VuLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXV0aFNpZ25hdHVyZVNlcnZpY2UgfSBmcm9tICcuL2F1dGgtc2lnbmF0dXJlLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXV0aEluZGV4ZWREQlNlcnZpY2UgfSBmcm9tICcuLi9zdG9yYWdlL2F1dGgtaW5kZXhlZGRiLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSHR0cEludGVyY2VwdG9yRXJyb3JTZXJ2aWNlIGV4dGVuZHMgSHR0cEVycm9ySGFuZGxlciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciwgT25EZXN0cm95IHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlLFxuICAgICAgICBwdWJsaWMgYXV0aFRva2VuOiBBdXRoVG9rZW5TZXJ2aWNlLFxuICAgICAgICBwdWJsaWMgYXV0aFN0b3JhZ2U6IEF1dGhJbmRleGVkREJTZXJ2aWNlLFxuICAgICAgICBwdWJsaWMgYXV0aFNpZ25hdHVyZTogQXV0aFNpZ25hdHVyZVNlcnZpY2UpIHtcbiAgICAgICAgc3VwZXIodHJhbnNsYXRlLCBhdXRoVG9rZW4sIGF1dGhTdG9yYWdlLCBhdXRoU2lnbmF0dXJlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGRlc3Ryb3kkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdDxhbnk+KCk7XG5cbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgIHRoaXMuZGVzdHJveSQubmV4dCh0cnVlKTtcbiAgICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgICAgIHRoaXMuZGVzdHJveSQudW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICBpbnRlcmNlcHQocmVxOiBIdHRwUmVxdWVzdDxhbnk+LCBuZXh0OiBIdHRwSGFuZGxlcik6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcbiAgICAgICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcSkucGlwZShcbiAgICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEh0dHBFcnJvclJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmVycm9ySGFuZGxlcihlcnJvciwgcmVxLCBuZXh0KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICB9KSkudGFrZVVudGlsKHRoaXMuZGVzdHJveSQpO1xuICAgIH1cblxufVxuIl19