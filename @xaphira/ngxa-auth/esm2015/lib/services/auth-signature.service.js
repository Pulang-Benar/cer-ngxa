/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/empty';
import 'rxjs/add/operator/takeUntil';
import { TranslateService } from '@ngx-translate/core';
import { DatePipe } from '@angular/common';
import { of, combineLatest } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
import { signatureHeader, OAUTH_INFO, oauthInfo } from '@xaphira/shared';
import { DateFormat, EncryptionService } from '@xaphira/utils';
import { AuthIndexedDBService } from '../storage/auth-indexeddb.service';
export class AuthSignatureService {
    /**
     * @param {?} translate
     * @param {?} enc
     * @param {?} oauthResource
     * @param {?} authStorage
     */
    constructor(translate, enc, oauthResource, authStorage) {
        this.translate = translate;
        this.enc = enc;
        this.oauthResource = oauthResource;
        this.authStorage = authStorage;
    }
    /**
     * @param {?} req
     * @return {?}
     */
    signHeaders(req) {
        return combineLatest([
            this.key(),
            this.signature(this.getPath(req.url)),
        ]).pipe(take(1), switchMap((/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            if (signatureHeader.signature) {
                /** @type {?} */
                let httpHeaders = req.headers ? req.headers : new HttpHeaders();
                httpHeaders.keys().forEach((/**
                 * @param {?} key
                 * @return {?}
                 */
                (key) => {
                    if (key === signatureHeader.key)
                        httpHeaders = httpHeaders.delete(signatureHeader.key);
                    if (key === signatureHeader.timestamp)
                        httpHeaders = httpHeaders.delete(signatureHeader.timestamp);
                    if (key === signatureHeader.signature)
                        httpHeaders = httpHeaders.delete(signatureHeader.signature);
                }));
                httpHeaders = httpHeaders.set(signatureHeader.key, value[0]);
                httpHeaders = httpHeaders.set(signatureHeader.timestamp, this.timestamp());
                httpHeaders = httpHeaders.set(signatureHeader.signature, value[1]);
                return of(req.clone({ headers: httpHeaders }));
            }
            return of(req);
        })));
    }
    /**
     * @return {?}
     */
    key() {
        return this.authStorage.getOfEnc(oauthInfo.public_key);
    }
    /**
     * @return {?}
     */
    timestamp() {
        return Math.floor(new Date().getTime() / 1000).toString();
    }
    /**
     * @return {?}
     */
    date() {
        return new DatePipe(this.translate.currentLang).transform(new Date(), DateFormat.DATE);
    }
    /**
     * @param {?} url
     * @return {?}
     */
    signature(url) {
        return combineLatest([
            this.key(),
            this.authStorage.getOfEnc(oauthInfo.access_token),
        ]).pipe(take(1), switchMap((/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            /** @type {?} */
            const key = value[0] + ':' +
                this.timestamp() + ':' +
                this.date() + ':' +
                url + ':' +
                value[1];
            return of(this.enc.getHmacSha256(this.oauthResource['private_key'], key));
        })));
    }
    /**
     * @private
     * @param {?} url
     * @return {?}
     */
    getPath(url) {
        return '/' + url
            .replace(/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*(:[0-9]{1,5})?(\/).*?/g, '');
    }
}
AuthSignatureService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
AuthSignatureService.ctorParameters = () => [
    { type: TranslateService },
    { type: EncryptionService },
    { type: undefined, decorators: [{ type: Inject, args: [OAUTH_INFO,] }] },
    { type: AuthIndexedDBService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    AuthSignatureService.prototype.translate;
    /**
     * @type {?}
     * @private
     */
    AuthSignatureService.prototype.enc;
    /**
     * @type {?}
     * @private
     */
    AuthSignatureService.prototype.oauthResource;
    /**
     * @type {?}
     * @private
     */
    AuthSignatureService.prototype.authStorage;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1zaWduYXR1cmUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B4YXBoaXJhL25neGEtYXV0aC8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9hdXRoLXNpZ25hdHVyZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsV0FBVyxFQUFlLE1BQU0sc0JBQXNCLENBQUM7QUFDaEUsT0FBTyx5QkFBeUIsQ0FBQztBQUNqQyxPQUFPLDJCQUEyQixDQUFDO0FBQ25DLE9BQU8sMkJBQTJCLENBQUM7QUFDbkMsT0FBTyw2QkFBNkIsQ0FBQztBQUNyQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFjLEVBQUUsRUFBRSxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDckQsT0FBTyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsZUFBZSxFQUF5QixVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDaEcsT0FBTyxFQUFFLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBR3pFLE1BQU0sT0FBTyxvQkFBb0I7Ozs7Ozs7SUFFN0IsWUFDWSxTQUEyQixFQUMzQixHQUFzQixFQUNGLGFBQW9DLEVBQ3hELFdBQWlDO1FBSGpDLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBQzNCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQ0Ysa0JBQWEsR0FBYixhQUFhLENBQXVCO1FBQ3hELGdCQUFXLEdBQVgsV0FBVyxDQUFzQjtJ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LEdBQUc7Z0JBQ3RCLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxHQUFHO2dCQUNqQixHQUFHLEdBQUcsR0FBRztnQkFDVCxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM5RSxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQ1IsQ0FBQzs7Ozs7O0lBRU8sT0FBTyxDQUFDLEdBQVc7UUFDdkIsT0FBTyxHQUFHLEdBQUcsR0FBRzthQUNmLE9BQU8sQ0FBQyw2R0FBNkcsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNoSSxDQUFDOzs7WUFsRUosVUFBVTs7OztZQVJGLGdCQUFnQjtZQUtKLGlCQUFpQjs0Q0FTN0IsTUFBTSxTQUFDLFVBQVU7WUFSakIsb0JBQW9COzs7Ozs7O0lBTXJCLHlDQUFtQzs7Ozs7SUFDbkMsbUNBQThCOzs7OztJQUM5Qiw2Q0FBZ0U7Ozs7O0lBQ2hFLDJDQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cEhlYWRlcnMsIEh0dHBSZXF1ZXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9jYXRjaCc7XG5pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvdGhyb3cnO1xuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL2VtcHR5JztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvdGFrZVVudGlsJztcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcbmltcG9ydCB7IERhdGVQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mLCBjb21iaW5lTGF0ZXN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBzd2l0Y2hNYXAsIHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBzaWduYXR1cmVIZWFkZXIsIFNlY3VyaXR5UmVzb3VyY2VNb2RlbCwgT0FVVEhfSU5GTywgb2F1dGhJbmZvIH0gZnJvbSAnQHhhcGhpcmEvc2hhcmVkJztcbmltcG9ydCB7IERhdGVGb3JtYXQsIEVuY3J5cHRpb25TZXJ2aWNlIH0gZnJvbSAnQHhhcGhpcmEvdXRpbHMnO1xuaW1wb3J0IHsgQXV0aEluZGV4ZWREQlNlcnZpY2UgfSBmcm9tICcuLi9zdG9yYWdlL2F1dGgtaW5kZXhlZGRiLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXV0aFNpZ25hdHVyZVNlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGVuYzogRW5jcnlwdGlvblNlcnZpY2UsXG4gICAgICAgIEBJbmplY3QoT0FVVEhfSU5GTykgcHJpdmF0ZSBvYXV0aFJlc291cmNlOiBTZWN1cml0eVJlc291cmNlTW9kZWwsXG4gICAgICAgIHByaXZhdGUgYXV0aFN0b3JhZ2U6IEF1dGhJbmRleGVkREJTZXJ2aWNlKSB7fVxuXG4gICAgcHVibGljIHNpZ25IZWFkZXJzKHJlcTogSHR0cFJlcXVlc3Q8YW55Pik6IE9ic2VydmFibGU8SHR0cFJlcXVlc3Q8YW55Pj4ge1xuICAgICAgICByZXR1cm4gY29tYmluZUxhdGVzdChbXG4gICAgICAgICAgICB0aGlzLmtleSgpLFxuICAgICAgICAgICAgdGhpcy5zaWduYXR1cmUodGhpcy5nZXRQYXRoKHJlcS51cmwpKSxcbiAgICAgICAgXSkucGlwZShcbiAgICAgICAgICAgIHRha2UoMSksXG4gICAgICAgICAgICBzd2l0Y2hNYXAoKHZhbHVlOiBzdHJpbmdbXSkgPT4ge1xuICAgICAgICAgICAgaWYgKHNpZ25hdHVyZUhlYWRlci5zaWduYXR1cmUpIHtcbiAgICAgICAgICAgICAgICBsZXQgaHR0cEhlYWRlcnM6IEh0dHBIZWFkZXJzID0gcmVxLmhlYWRlcnMgPyByZXEuaGVhZGVycyA6IG5ldyBIdHRwSGVhZGVycygpO1xuICAgICAgICAgICAgICAgIGh0dHBIZWFkZXJzLmtleXMoKS5mb3JFYWNoKChrZXk6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSBzaWduYXR1cmVIZWFkZXIua2V5KVxuICAgICAgICAgICAgICAgICAgICAgICAgaHR0cEhlYWRlcnMgPSBodHRwSGVhZGVycy5kZWxldGUoc2lnbmF0dXJlSGVhZGVyLmtleSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChrZXkgPT09IHNpZ25hdHVyZUhlYWRlci50aW1lc3RhbXApXG4gICAgICAgICAgICAgICAgICAgICAgICBodHRwSGVhZGVycyA9IGh0dHBIZWFkZXJzLmRlbGV0ZShzaWduYXR1cmVIZWFkZXIudGltZXN0YW1wKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGtleSA9PT0gc2lnbmF0dXJlSGVhZGVyLnNpZ25hdHVyZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGh0dHBIZWFkZXJzID0gaHR0cEhlYWRlcnMuZGVsZXRlKHNpZ25hdHVyZUhlYWRlci5zaWduYXR1cmUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGh0dHBIZWFkZXJzID0gaHR0cEhlYWRlcnMuc2V0KHNpZ25hdHVyZUhlYWRlci5rZXksIHZhbHVlWzBdKTtcbiAgICAgICAgICAgICAgICBodHRwSGVhZGVycyA9IGh0dHBIZWFkZXJzLnNldChzaWduYXR1cmVIZWFkZXIudGltZXN0YW1wLCB0aGlzLnRpbWVzdGFtcCgpKTtcbiAgICAgICAgICAgICAgICBodHRwSGVhZGVycyA9IGh0dHBIZWFkZXJzLnNldChzaWduYXR1cmVIZWFkZXIuc2lnbmF0dXJlLCB2YWx1ZVsxXSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9mKHJlcS5jbG9uZSh7IGhlYWRlcnM6IGh0dHBIZWFkZXJzIH0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBvZihyZXEpO1xuICAgICAgICB9KSk7XG4gICAgfVxuXG4gICAgcHVibGljIGtleSgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm4gdGhpcy5hdXRoU3RvcmFnZS5nZXRPZkVuYyhvYXV0aEluZm8ucHVibGljX2tleSk7XG4gICAgfVxuXG4gICAgcHVibGljIHRpbWVzdGFtcCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihuZXcgRGF0ZSgpLmdldFRpbWUoKSAvIDEwMDApLnRvU3RyaW5nKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGRhdGUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlUGlwZSh0aGlzLnRyYW5zbGF0ZS5jdXJyZW50TGFuZykudHJhbnNmb3JtKG5ldyBEYXRlKCksIERhdGVGb3JtYXQuREFURSk7XG4gICAgfVxuXG4gICAgcHVibGljIHNpZ25hdHVyZSh1cmw6IHN0cmluZyk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KFtcbiAgICAgICAgICAgIHRoaXMua2V5KCksXG4gICAgICAgICAgICB0aGlzLmF1dGhTdG9yYWdlLmdldE9mRW5jKG9hdXRoSW5mby5hY2Nlc3NfdG9rZW4pLFxuICAgICAgICBdKS5waXBlKFxuICAgICAgICAgICAgdGFrZSgxKSxcbiAgICAgICAgICAgIHN3aXRjaE1hcCgodmFsdWU6IHN0cmluZ1tdKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSB2YWx1ZVswXSArICc6JyArXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbWVzdGFtcCgpICsgJzonICtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0ZSgpICsgJzonICtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybCArICc6JyArXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVsxXTtcbiAgICAgICAgICAgIHJldHVybiBvZih0aGlzLmVuYy5nZXRIbWFjU2hhMjU2KHRoaXMub2F1dGhSZXNvdXJjZVsncHJpdmF0ZV9rZXknXSwga2V5KSk7XG4gICAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldFBhdGgodXJsOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJy8nICsgdXJsXG4gICAgICAgIC5yZXBsYWNlKC9eKGh0dHA6XFwvXFwvd3d3XFwufGh0dHBzOlxcL1xcL3d3d1xcLnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC8pP1thLXowLTldKyhbXFwtXFwuXXsxfVthLXowLTldKykqKDpbMC05XXsxLDV9KT8oXFwvKS4qPy9nLCAnJyk7XG4gICAgfVxuXG59XG4iXX0=