/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { signatureHeader } from '@xaphira/shared';
import { AuthLanguageService } from './auth-lang.service';
var HttpInterceptorLangService = /** @class */ (function () {
    function HttpInterceptorLangService(authLanguage) {
        this.authLanguage = authLanguage;
        this.destroy$ = new Subject();
    }
    /**
     * @return {?}
     */
    HttpInterceptorLangService.prototype.ngOnDestroy = /**
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
    HttpInterceptorLangService.prototype.intercept = /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    function (req, next) {
        if (req.headers) {
            if (req.headers.has(signatureHeader.mark)) {
                return this.authLanguage.getLocale(req).pipe(switchMap((/**
                 * @param {?} value
                 * @return {?}
                 */
                function (value) {
                    return next.handle(value);
                })));
            }
        }
        return next.handle(req).takeUntil(this.destroy$);
    };
    HttpInterceptorLangService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    HttpInterceptorLangService.ctorParameters = function () { return [
        { type: AuthLanguageService }
    ]; };
    return HttpInterceptorLangService;
}());
export { HttpInterceptorLangService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1pbnRlcmNlcHRvci1sYW5nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AeGFwaGlyYS9uZ3hhLWF1dGgvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvaHR0cC1pbnRlcmNlcHRvci1sYW5nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMzQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRTFEO0lBR0ksb0NBQW9CLFlBQWlDO1FBQWpDLGlCQUFZLEdBQVosWUFBWSxDQUFxQjtRQUU3QyxhQUFRLEdBQWlCLElBQUksT0FBTyxFQUFPLENBQUM7SUFGSSxDQUFDOzs7O0lBSXpELGdEQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUM5QixDQUFDOzs7Ozs7SUFFTSw4Q0FBUzs7Ozs7SUFBaEIsVUFBaUIsR0FBcUIsRUFBRSxJQUFpQjtRQUNyRCxJQUFJLEdBQUcsQ0FBQyxPQUFPLEVBQUU7WUFDYixJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDdkMsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUzs7OztnQkFBQyxVQUFDLEtBQXVCO29CQUMzRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzlCLENBQUMsRUFBQyxDQUFDLENBQUM7YUFDUDtTQUNKO1FBQ0QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDckQsQ0FBQzs7Z0JBdEJKLFVBQVU7Ozs7Z0JBRkYsbUJBQW1COztJQTBCNUIsaUNBQUM7Q0FBQSxBQXhCRCxJQXdCQztTQXZCWSwwQkFBMEI7Ozs7OztJQUluQyw4Q0FBb0Q7Ozs7O0lBRnhDLGtEQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBJbnRlcmNlcHRvciwgSHR0cFJlcXVlc3QsIEh0dHBIYW5kbGVyLCBIdHRwRXZlbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IHNpZ25hdHVyZUhlYWRlciB9IGZyb20gJ0B4YXBoaXJhL3NoYXJlZCc7XG5pbXBvcnQgeyBBdXRoTGFuZ3VhZ2VTZXJ2aWNlIH0gZnJvbSAnLi9hdXRoLWxhbmcuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBIdHRwSW50ZXJjZXB0b3JMYW5nU2VydmljZSBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciwgT25EZXN0cm95IHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXV0aExhbmd1YWdlOiBBdXRoTGFuZ3VhZ2VTZXJ2aWNlKSB7fVxuXG4gICAgcHJpdmF0ZSBkZXN0cm95JDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3Q8YW55PigpO1xuXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICB0aGlzLmRlc3Ryb3kkLm5leHQodHJ1ZSk7XG4gICAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gICAgICB0aGlzLmRlc3Ryb3kkLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGludGVyY2VwdChyZXE6IEh0dHBSZXF1ZXN0PGFueT4sIG5leHQ6IEh0dHBIYW5kbGVyKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xuICAgICAgICBpZiAocmVxLmhlYWRlcnMpIHtcbiAgICAgICAgICAgIGlmIChyZXEuaGVhZGVycy5oYXMoc2lnbmF0dXJlSGVhZGVyLm1hcmspKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXV0aExhbmd1YWdlLmdldExvY2FsZShyZXEpLnBpcGUoc3dpdGNoTWFwKCh2YWx1ZTogSHR0cFJlcXVlc3Q8YW55PikgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV4dC5oYW5kbGUodmFsdWUpO1xuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxKS50YWtlVW50aWwodGhpcy5kZXN0cm95JCk7XG4gICAgfVxuXG59XG4iXX0=