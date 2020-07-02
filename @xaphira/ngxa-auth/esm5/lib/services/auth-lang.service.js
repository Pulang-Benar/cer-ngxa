/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject, LOCALE_ID } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { of, from } from 'rxjs';
import { Pattern } from '@xaphira/utils';
import { SettingsIndexedDBService } from '../storage/settings-indexeddb.service';
import { take, switchMap } from 'rxjs/operators';
var AuthLanguageService = /** @class */ (function () {
    function AuthLanguageService(locale, settingsIndexedDB) {
        this.locale = locale;
        this.settingsIndexedDB = settingsIndexedDB;
    }
    /**
     * @param {?} req
     * @return {?}
     */
    AuthLanguageService.prototype.getLocale = /**
     * @param {?} req
     * @return {?}
     */
    function (req) {
        var _this = this;
        return from(this.settingsIndexedDB.get('locale')).pipe(take(1), switchMap((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /** @type {?} */
            var httpHeaders = req.headers ? req.headers : new HttpHeaders();
            /** @type {?} */
            var localeCode = value ?
                (value.match(new RegExp(Pattern.LOCALE, 'g')) ?
                    value :
                    _this.locale) : _this.locale;
            httpHeaders = httpHeaders.append('Accept-Language', localeCode);
            return of(req.clone({ headers: httpHeaders }));
        })));
    };
    AuthLanguageService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    AuthLanguageService.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] },
        { type: SettingsIndexedDBService }
    ]; };
    return AuthLanguageService;
}());
export { AuthLanguageService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    AuthLanguageService.prototype.locale;
    /**
     * @type {?}
     * @private
     */
    AuthLanguageService.prototype.settingsIndexedDB;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1sYW5nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AeGFwaGlyYS9uZ3hhLWF1dGgvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvYXV0aC1sYW5nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsV0FBVyxFQUFlLE1BQU0sc0JBQXNCLENBQUM7QUFDaEUsT0FBTyxFQUF1QixFQUFFLEVBQWlCLElBQUksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNwRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekMsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDakYsT0FBTyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVqRDtJQUdJLDZCQUF1QyxNQUFjLEVBQ3pDLGlCQUEyQztRQURoQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ3pDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBMEI7SUFBRyxDQUFDOzs7OztJQUUzRCx1Q0FBUzs7OztJQUFULFVBQVUsR0FBcUI7UUFBL0IsaUJBY0M7UUFiRyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUNsRCxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQ1AsU0FBUzs7OztRQUFDLFVBQUMsS0FBVTs7Z0JBQ2pCLFdBQVcsR0FBZ0IsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxXQUFXLEVBQUU7O2dCQUN0RSxVQUFVLEdBQVcsS0FBSyxDQUFDLENBQUM7Z0JBQ2xDLENBQ0ksS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDOUMsS0FBSyxDQUFDLENBQUM7b0JBQ1AsS0FBSSxDQUFDLE1BQU0sQ0FDZCxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsTUFBTTtZQUNmLFdBQVcsR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDLGlCQUFpQixFQUFFLFVBQVUsQ0FBQyxDQUFDO1lBQ2hFLE9BQU8sRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ25ELENBQUMsRUFBQyxDQUFDLENBQUM7SUFDUixDQUFDOztnQkFwQkosVUFBVTs7Ozs2Q0FHTSxNQUFNLFNBQUMsU0FBUztnQkFOeEIsd0JBQXdCOztJQXlCakMsMEJBQUM7Q0FBQSxBQXRCRCxJQXNCQztTQXJCWSxtQkFBbUI7Ozs7OztJQUVoQixxQ0FBeUM7Ozs7O0lBQ2pELGdEQUFtRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCwgTE9DQUxFX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwSGVhZGVycywgSHR0cFJlcXVlc3QgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0LCBvZiwgY29tYmluZUxhdGVzdCwgZnJvbSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUGF0dGVybiB9IGZyb20gJ0B4YXBoaXJhL3V0aWxzJztcbmltcG9ydCB7IFNldHRpbmdzSW5kZXhlZERCU2VydmljZSB9IGZyb20gJy4uL3N0b3JhZ2Uvc2V0dGluZ3MtaW5kZXhlZGRiLnNlcnZpY2UnO1xuaW1wb3J0IHsgdGFrZSwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXV0aExhbmd1YWdlU2VydmljZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihASW5qZWN0KExPQ0FMRV9JRCkgcHJpdmF0ZSBsb2NhbGU6IHN0cmluZyxcbiAgICAgICAgcHJpdmF0ZSBzZXR0aW5nc0luZGV4ZWREQjogU2V0dGluZ3NJbmRleGVkREJTZXJ2aWNlKSB7fVxuXG4gICAgZ2V0TG9jYWxlKHJlcTogSHR0cFJlcXVlc3Q8YW55Pik6IE9ic2VydmFibGU8SHR0cFJlcXVlc3Q8YW55Pj4ge1xuICAgICAgICByZXR1cm4gZnJvbSh0aGlzLnNldHRpbmdzSW5kZXhlZERCLmdldCgnbG9jYWxlJykpLnBpcGUoXG4gICAgICAgICAgICB0YWtlKDEpLFxuICAgICAgICAgICAgc3dpdGNoTWFwKCh2YWx1ZTogYW55KSA9PiB7XG4gICAgICAgICAgICBsZXQgaHR0cEhlYWRlcnM6IEh0dHBIZWFkZXJzID0gcmVxLmhlYWRlcnMgPyByZXEuaGVhZGVycyA6IG5ldyBIdHRwSGVhZGVycygpO1xuICAgICAgICAgICAgY29uc3QgbG9jYWxlQ29kZTogc3RyaW5nID0gdmFsdWUgP1xuICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgIHZhbHVlLm1hdGNoKG5ldyBSZWdFeHAoUGF0dGVybi5MT0NBTEUsICdnJykpID9cbiAgICAgICAgICAgICAgICB2YWx1ZSA6XG4gICAgICAgICAgICAgICAgdGhpcy5sb2NhbGVcbiAgICAgICAgICAgICkgOiB0aGlzLmxvY2FsZTtcbiAgICAgICAgICAgIGh0dHBIZWFkZXJzID0gaHR0cEhlYWRlcnMuYXBwZW5kKCdBY2NlcHQtTGFuZ3VhZ2UnLCBsb2NhbGVDb2RlKTtcbiAgICAgICAgICAgIHJldHVybiBvZihyZXEuY2xvbmUoeyBoZWFkZXJzOiBodHRwSGVhZGVycyB9KSk7XG4gICAgICAgIH0pKTtcbiAgICB9XG5cbn1cbiJdfQ==