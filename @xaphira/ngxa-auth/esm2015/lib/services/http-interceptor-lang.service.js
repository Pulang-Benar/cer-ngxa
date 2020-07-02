/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { signatureHeader } from '@xaphira/shared';
import { AuthLanguageService } from './auth-lang.service';
export class HttpInterceptorLangService {
    /**
     * @param {?} authLanguage
     */
    constructor(authLanguage) {
        this.authLanguage = authLanguage;
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
            if (req.headers.has(signatureHeader.mark)) {
                return this.authLanguage.getLocale(req).pipe(switchMap((/**
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
HttpInterceptorLangService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
HttpInterceptorLangService.ctorParameters = () => [
    { type: AuthLanguageService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    HttpInterceptorLangService.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    HttpInterceptorLangService.prototype.authLanguage;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1pbnRlcmNlcHRvci1sYW5nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AeGFwaGlyYS9uZ3hhLWF1dGgvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvaHR0cC1pbnRlcmNlcHRvci1sYW5nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMzQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRzFELE1BQU0sT0FBTywwQkFBMEI7Ozs7SUFFbkMsWUFBb0IsWUFBaUM7UUFBakMsaUJBQVksR0FBWixZQUFZLENBQXFCO1FBRTdDLGFBQVEsR0FBaUIsSUFBSSxPQUFPLEVBQU8sQ0FBQztJQUZJLENBQUM7Ozs7SUFJekQsV0FBVztRQUNULElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUM5QixDQUFDOzs7Ozs7SUFFTSxTQUFTLENBQUMsR0FBcUIsRUFBRSxJQUFpQjtRQUNyRCxJQUFJLEdBQUcsQ0FBQyxPQUFPLEVBQUU7WUFDYixJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDdkMsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUzs7OztnQkFBQyxDQUFDLEtBQXVCLEVBQUUsRUFBRTtvQkFDL0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUM5QixDQUFDLEVBQUMsQ0FBQyxDQUFDO2FBQ1A7U0FDSjtRQUNELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3JELENBQUM7OztZQXRCSixVQUFVOzs7O1lBRkYsbUJBQW1COzs7Ozs7O0lBT3hCLDhDQUFvRDs7Ozs7SUFGeEMsa0RBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cEludGVyY2VwdG9yLCBIdHRwUmVxdWVzdCwgSHR0cEhhbmRsZXIsIEh0dHBFdmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgc2lnbmF0dXJlSGVhZGVyIH0gZnJvbSAnQHhhcGhpcmEvc2hhcmVkJztcbmltcG9ydCB7IEF1dGhMYW5ndWFnZVNlcnZpY2UgfSBmcm9tICcuL2F1dGgtbGFuZy5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEh0dHBJbnRlcmNlcHRvckxhbmdTZXJ2aWNlIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yLCBPbkRlc3Ryb3kge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhdXRoTGFuZ3VhZ2U6IEF1dGhMYW5ndWFnZVNlcnZpY2UpIHt9XG5cbiAgICBwcml2YXRlIGRlc3Ryb3kkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdDxhbnk+KCk7XG5cbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgIHRoaXMuZGVzdHJveSQubmV4dCh0cnVlKTtcbiAgICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgICAgIHRoaXMuZGVzdHJveSQudW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaW50ZXJjZXB0KHJlcTogSHR0cFJlcXVlc3Q8YW55PiwgbmV4dDogSHR0cEhhbmRsZXIpOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XG4gICAgICAgIGlmIChyZXEuaGVhZGVycykge1xuICAgICAgICAgICAgaWYgKHJlcS5oZWFkZXJzLmhhcyhzaWduYXR1cmVIZWFkZXIubWFyaykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hdXRoTGFuZ3VhZ2UuZ2V0TG9jYWxlKHJlcSkucGlwZShzd2l0Y2hNYXAoKHZhbHVlOiBIdHRwUmVxdWVzdDxhbnk+KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXh0LmhhbmRsZSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXh0LmhhbmRsZShyZXEpLnRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKTtcbiAgICB9XG5cbn1cbiJdfQ==