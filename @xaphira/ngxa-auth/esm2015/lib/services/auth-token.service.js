/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Inject } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { tap, switchMap } from 'rxjs/operators';
import { Idle, DEFAULT_INTERRUPTSOURCES } from '@ng-idle/core';
import { HTTP_SERVICE, signatureHeader, API, OAUTH_INFO, oauthInfo } from '@xaphira/shared';
import { AuthIndexedDBService } from '../storage/auth-indexeddb.service';
import { ProfileIndexedDBService } from '../storage/profile-indexeddb.service';
import { SettingsIndexedDBService } from '../storage/settings-indexeddb.service';
export class AuthTokenService {
    /**
     * @param {?} httpBaseService
     * @param {?} oauthResource
     * @param {?} apiPath
     * @param {?} router
     * @param {?} authIndexedDB
     * @param {?} profileIndexedDB
     * @param {?} settingsIndexedDB
     * @param {?} idle
     */
    constructor(httpBaseService, oauthResource, apiPath, router, authIndexedDB, profileIndexedDB, settingsIndexedDB, idle) {
        this.httpBaseService = httpBaseService;
        this.oauthResource = oauthResource;
        this.apiPath = apiPath;
        this.router = router;
        this.authIndexedDB = authIndexedDB;
        this.profileIndexedDB = profileIndexedDB;
        this.settingsIndexedDB = settingsIndexedDB;
        this.idle = idle;
        idle.setIdle(oauthResource['session_idle']);
        idle.setTimeout(oauthResource['session_timeout']);
        idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);
        idle.onTimeout.subscribe((/**
         * @return {?}
         */
        () => {
            /* console.log('[RIP] Session Timeout'); */
            this.logout();
        }));
        idle.onIdleEnd.subscribe((/**
         * @return {?}
         */
        () => {
            /* console.log('[RIP] Session Idle End'); */
        }));
    }
    /**
     * @param {?} username
     * @param {?} password
     * @return {?}
     */
    login(username, password) {
        this.authIndexedDB.logout();
        return this.httpBaseService.
            HTTP_BASE(this.apiPath['auth']['token'], this.getAuthBody(username, password).toString(), this.getAuthHeader())
            .toPromise()
            .then((/**
         * @param {?} response
         * @return {?}
         */
        (response) => {
            this.idle.setIdle(response['expires_in']);
            this.idle.watch();
            /* console.log('[RIP] Session Idle Start'); */
            /* console.log('[RIP] Session Timeout in '+response['expires_in']+' seconds'); */
            this.authIndexedDB.loginStorage(response);
            this.profileIndexedDB.loginStorage(response);
            this.settingsIndexedDB.loginStorage(response);
        }));
    }
    /**
     * @return {?}
     */
    refresh() {
        return this.getBodyRefresh().pipe(switchMap((/**
         * @param {?} body
         * @return {?}
         */
        (body) => {
            return this.httpBaseService.
                HTTP_BASE(this.apiPath['auth']['token'], body, this.getAuthHeader())
                .pipe(tap((/**
             * @param {?} response
             * @return {?}
             */
            (response) => {
                this.idle.setIdle(response['expires_in']);
                this.authIndexedDB.logout();
                this.authIndexedDB.loginStorage(response);
            })));
        })));
    }
    /**
     * @return {?}
     */
    logout() {
        this.idle.stop();
        this.authIndexedDB.logout();
        this.profileIndexedDB.logout();
        this.router.navigate(['/auth']);
    }
    /**
     * @return {?}
     */
    isLogin() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.authIndexedDB.isLogin();
        });
    }
    /**
     * @param {?} request
     * @return {?}
     */
    oauthHeaders(request) {
        /** @type {?} */
        const result$ = new Subject();
        /** @type {?} */
        let httpHeaders = request.headers ? request.headers : new HttpHeaders();
        httpHeaders = httpHeaders.has(signatureHeader.authorization) ?
            httpHeaders.delete(signatureHeader.authorization) : httpHeaders;
        Promise.all([
            this.authIndexedDB.getEnc(oauthInfo.token_type),
            this.authIndexedDB.getEnc(oauthInfo.access_token)
        ])
            .then((/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            httpHeaders = httpHeaders.set(signatureHeader.authorization, value[0] + ' ' + value[1]);
            result$.next(request.clone({ headers: httpHeaders }));
        }));
        return result$.asObservable();
    }
    /**
     * @private
     * @return {?}
     */
    getAuthHeader() {
        return new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' +
                btoa(this.oauthResource['client_id'] + ':' + this.oauthResource['client_secret']),
            'Accept': 'application/json',
        });
    }
    /**
     * @private
     * @param {?} username
     * @param {?} password
     * @return {?}
     */
    getAuthBody(username, password) {
        /** @type {?} */
        const body = new URLSearchParams();
        body.append('client_id', this.oauthResource['client_id']);
        body.append('grant_type', this.oauthResource['grant_type']);
        body.append('username', username);
        body.append('password', password);
        return body;
    }
    /**
     * @private
     * @return {?}
     */
    getBodyRefresh() {
        /** @type {?} */
        const result$ = new Subject();
        this.authIndexedDB.getEnc(oauthInfo.refresh_token).then((/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            /** @type {?} */
            const body = new URLSearchParams();
            body.append('client_id', this.oauthResource['client_id']);
            body.append('grant_type', 'refresh_token');
            body.append('refresh_token', value);
            result$.next(body.toString());
        }));
        return result$.asObservable();
    }
}
AuthTokenService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
AuthTokenService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [HTTP_SERVICE,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [OAUTH_INFO,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [API,] }] },
    { type: Router },
    { type: AuthIndexedDBService },
    { type: ProfileIndexedDBService },
    { type: SettingsIndexedDBService },
    { type: Idle }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    AuthTokenService.prototype.httpBaseService;
    /**
     * @type {?}
     * @private
     */
    AuthTokenService.prototype.oauthResource;
    /**
     * @type {?}
     * @private
     */
    AuthTokenService.prototype.apiPath;
    /**
     * @type {?}
     * @private
     */
    AuthTokenService.prototype.router;
    /**
     * @type {?}
     * @private
     */
    AuthTokenService.prototype.authIndexedDB;
    /**
     * @type {?}
     * @private
     */
    AuthTokenService.prototype.profileIndexedDB;
    /**
     * @type {?}
     * @private
     */
    AuthTokenService.prototype.settingsIndexedDB;
    /**
     * @type {?}
     * @private
     */
    AuthTokenService.prototype.idle;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC10b2tlbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHhhcGhpcmEvbmd4YS1hdXRoLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2F1dGgtdG9rZW4uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxXQUFXLEVBQTZCLE1BQU0sc0JBQXNCLENBQUM7QUFDOUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsSUFBSSxFQUFFLHdCQUF3QixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9ELE9BQU8sRUFDSCxZQUFZLEVBQVksZUFBZSxFQUNuQixHQUFHLEVBQ0EsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzFFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBR2pGLE1BQU0sT0FBTyxnQkFBZ0I7Ozs7Ozs7Ozs7O0lBRXpCLFlBQXlDLGVBQW1DLEVBQzdDLGFBQW9DLEVBQzNDLE9BQWlCLEVBQzdCLE1BQWMsRUFDZCxhQUFtQyxFQUNuQyxnQkFBeUMsRUFDekMsaUJBQTJDLEVBQzNDLElBQVU7UUFQbUIsb0JBQWUsR0FBZixlQUFlLENBQW9CO1FBQzdDLGtCQUFhLEdBQWIsYUFBYSxDQUF1QjtRQUMzQyxZQUFPLEdBQVAsT0FBTyxDQUFVO1FBQzdCLFdBQU0sR0FBTixNQUFN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QyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDbEMsQ0FBQyxFQUFDLENBQUM7UUFDSCxPQUFPLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNsQyxDQUFDOzs7WUE3R0osVUFBVTs7Ozs0Q0FHTSxNQUFNLFNBQUMsWUFBWTs0Q0FDM0IsTUFBTSxTQUFDLFVBQVU7NENBQ2pCLE1BQU0sU0FBQyxHQUFHO1lBakJWLE1BQU07WUFRTixvQkFBb0I7WUFDcEIsdUJBQXVCO1lBQ3ZCLHdCQUF3QjtZQVB4QixJQUFJOzs7Ozs7O0lBWUcsMkNBQWdFOzs7OztJQUN4RSx5Q0FBK0Q7Ozs7O0lBQy9ELG1DQUFxQzs7Ozs7SUFDckMsa0NBQXNCOzs7OztJQUN0Qix5Q0FBMkM7Ozs7O0lBQzNDLDRDQUFpRDs7Ozs7SUFDakQsNkNBQW1EOzs7OztJQUNuRCxnQ0FBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBIZWFkZXJzLCBIdHRwUmVzcG9uc2UsIEh0dHBSZXF1ZXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRhcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgSWRsZSwgREVGQVVMVF9JTlRFUlJVUFRTT1VSQ0VTIH0gZnJvbSAnQG5nLWlkbGUvY29yZSc7XG5pbXBvcnQge1xuICAgIEhUVFBfU0VSVklDRSwgQVBJTW9kZWwsIHNpZ25hdHVyZUhlYWRlcixcbiAgICBIdHRwRmFjdG9yeVNlcnZpY2UsIEFQSSxcbiAgICBTZWN1cml0eVJlc291cmNlTW9kZWwsIE9BVVRIX0lORk8sIG9hdXRoSW5mbyB9IGZyb20gJ0B4YXBoaXJhL3NoYXJlZCc7XG5pbXBvcnQgeyBBdXRoSW5kZXhlZERCU2VydmljZSB9IGZyb20gJy4uL3N0b3JhZ2UvYXV0aC1pbmRleGVkZGIuc2VydmljZSc7XG5pbXBvcnQgeyBQcm9maWxlSW5kZXhlZERCU2VydmljZSB9IGZyb20gJy4uL3N0b3JhZ2UvcHJvZmlsZS1pbmRleGVkZGIuc2VydmljZSc7XG5pbXBvcnQgeyBTZXR0aW5nc0luZGV4ZWREQlNlcnZpY2UgfSBmcm9tICcuLi9zdG9yYWdlL3NldHRpbmdzLWluZGV4ZWRkYi5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEF1dGhUb2tlblNlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IoQEluamVjdChIVFRQX1NFUlZJQ0UpcHJpdmF0ZSBodHRwQmFzZVNlcnZpY2U6IEh0dHBGYWN0b3J5U2VydmljZSxcbiAgICAgICAgQEluamVjdChPQVVUSF9JTkZPKXByaXZhdGUgb2F1dGhSZXNvdXJjZTogU2VjdXJpdHlSZXNvdXJjZU1vZGVsLFxuICAgICAgICBASW5qZWN0KEFQSSlwcml2YXRlIGFwaVBhdGg6IEFQSU1vZGVsLFxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgICBwcml2YXRlIGF1dGhJbmRleGVkREI6IEF1dGhJbmRleGVkREJTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHByb2ZpbGVJbmRleGVkREI6IFByb2ZpbGVJbmRleGVkREJTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHNldHRpbmdzSW5kZXhlZERCOiBTZXR0aW5nc0luZGV4ZWREQlNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgaWRsZTogSWRsZSkge1xuICAgICAgICBpZGxlLnNldElkbGUob2F1dGhSZXNvdXJjZVsnc2Vzc2lvbl9pZGxlJ10pO1xuICAgICAgICBpZGxlLnNldFRpbWVvdXQob2F1dGhSZXNvdXJjZVsnc2Vzc2lvbl90aW1lb3V0J10pO1xuICAgICAgICBpZGxlLnNldEludGVycnVwdHMoREVGQVVMVF9JTlRFUlJVUFRTT1VSQ0VTKTtcbiAgICAgICAgaWRsZS5vblRpbWVvdXQuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgIC8qIGNvbnNvbGUubG9nKCdbUklQXSBTZXNzaW9uIFRpbWVvdXQnKTsgKi9cbiAgICAgICAgICAgIHRoaXMubG9nb3V0KCk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZGxlLm9uSWRsZUVuZC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgLyogY29uc29sZS5sb2coJ1tSSVBdIFNlc3Npb24gSWRsZSBFbmQnKTsgKi9cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGxvZ2luKHVzZXJuYW1lOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICB0aGlzLmF1dGhJbmRleGVkREIubG9nb3V0KCk7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBCYXNlU2VydmljZS5cbiAgICAgICAgSFRUUF9CQVNFKHRoaXMuYXBpUGF0aFsnYXV0aCddWyd0b2tlbiddLFxuICAgICAgICAgICAgdGhpcy5nZXRBdXRoQm9keSh1c2VybmFtZSwgcGFzc3dvcmQpLnRvU3RyaW5nKCksXG4gICAgICAgICAgICB0aGlzLmdldEF1dGhIZWFkZXIoKSlcbiAgICAgICAgICAgICAgICAudG9Qcm9taXNlKClcbiAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2U6IEh0dHBSZXNwb25zZTxhbnk+KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaWRsZS5zZXRJZGxlKHJlc3BvbnNlWydleHBpcmVzX2luJ10pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlkbGUud2F0Y2goKTtcbiAgICAgICAgICAgICAgICAgICAgLyogY29uc29sZS5sb2coJ1tSSVBdIFNlc3Npb24gSWRsZSBTdGFydCcpOyAqL1xuICAgICAgICAgICAgICAgICAgICAvKiBjb25zb2xlLmxvZygnW1JJUF0gU2Vzc2lvbiBUaW1lb3V0IGluICcrcmVzcG9uc2VbJ2V4cGlyZXNfaW4nXSsnIHNlY29uZHMnKTsgKi9cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hdXRoSW5kZXhlZERCLmxvZ2luU3RvcmFnZShyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZmlsZUluZGV4ZWREQi5sb2dpblN0b3JhZ2UocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmdzSW5kZXhlZERCLmxvZ2luU3RvcmFnZShyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlZnJlc2goKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Qm9keVJlZnJlc2goKS5waXBlKHN3aXRjaE1hcCgoYm9keTogYW55KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5odHRwQmFzZVNlcnZpY2UuXG4gICAgICAgICAgICBIVFRQX0JBU0UodGhpcy5hcGlQYXRoWydhdXRoJ11bJ3Rva2VuJ10sXG4gICAgICAgICAgICAgICAgYm9keSxcbiAgICAgICAgICAgICAgICB0aGlzLmdldEF1dGhIZWFkZXIoKSlcbiAgICAgICAgICAgICAgICAucGlwZSh0YXAoKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pZGxlLnNldElkbGUocmVzcG9uc2VbJ2V4cGlyZXNfaW4nXSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXV0aEluZGV4ZWREQi5sb2dvdXQoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hdXRoSW5kZXhlZERCLmxvZ2luU3RvcmFnZShyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICB9KSk7XG4gICAgfVxuXG4gICAgcHVibGljIGxvZ291dCgpIHtcbiAgICAgICAgdGhpcy5pZGxlLnN0b3AoKTtcbiAgICAgICAgdGhpcy5hdXRoSW5kZXhlZERCLmxvZ291dCgpO1xuICAgICAgICB0aGlzLnByb2ZpbGVJbmRleGVkREIubG9nb3V0KCk7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2F1dGgnXSk7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGlzTG9naW4oKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmF1dGhJbmRleGVkREIuaXNMb2dpbigpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvYXV0aEhlYWRlcnMocmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55Pik6IE9ic2VydmFibGU8SHR0cFJlcXVlc3Q8YW55Pj4ge1xuICAgICAgICBjb25zdCByZXN1bHQkOiBTdWJqZWN0PEh0dHBSZXF1ZXN0PGFueT4+ID0gbmV3IFN1YmplY3Q8SHR0cFJlcXVlc3Q8YW55Pj4oKTtcbiAgICAgICAgbGV0IGh0dHBIZWFkZXJzOiBIdHRwSGVhZGVycyA9IHJlcXVlc3QuaGVhZGVycyA/IHJlcXVlc3QuaGVhZGVycyA6IG5ldyBIdHRwSGVhZGVycygpO1xuICAgICAgICBodHRwSGVhZGVycyA9IGh0dHBIZWFkZXJzLmhhcyhzaWduYXR1cmVIZWFkZXIuYXV0aG9yaXphdGlvbikgP1xuICAgICAgICAgICAgICAgICAgICAgICAgaHR0cEhlYWRlcnMuZGVsZXRlKHNpZ25hdHVyZUhlYWRlci5hdXRob3JpemF0aW9uKSA6IGh0dHBIZWFkZXJzO1xuICAgICAgICBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICB0aGlzLmF1dGhJbmRleGVkREIuZ2V0RW5jKG9hdXRoSW5mby50b2tlbl90eXBlKSxcbiAgICAgICAgICAgIHRoaXMuYXV0aEluZGV4ZWREQi5nZXRFbmMob2F1dGhJbmZvLmFjY2Vzc190b2tlbildKVxuICAgICAgICAudGhlbigodmFsdWU6IHN0cmluZ1tdKSA9PiB7XG4gICAgICAgICAgICBodHRwSGVhZGVycyA9IGh0dHBIZWFkZXJzLnNldChzaWduYXR1cmVIZWFkZXIuYXV0aG9yaXphdGlvbiwgdmFsdWVbMF0gKyAnICcgKyB2YWx1ZVsxXSk7XG4gICAgICAgICAgICByZXN1bHQkLm5leHQocmVxdWVzdC5jbG9uZSh7IGhlYWRlcnM6IGh0dHBIZWFkZXJzIH0pKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXN1bHQkLmFzT2JzZXJ2YWJsZSgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0QXV0aEhlYWRlcigpOiBIdHRwSGVhZGVycyB7XG4gICAgICAgIHJldHVybiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmFzaWMgJyArXG4gICAgICAgICAgICAgICAgYnRvYSh0aGlzLm9hdXRoUmVzb3VyY2VbJ2NsaWVudF9pZCddICsgJzonICsgdGhpcy5vYXV0aFJlc291cmNlWydjbGllbnRfc2VjcmV0J10pLFxuICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRBdXRoQm9keSh1c2VybmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgICAgICAgY29uc3QgYm9keSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcbiAgICAgICAgYm9keS5hcHBlbmQoJ2NsaWVudF9pZCcsIHRoaXMub2F1dGhSZXNvdXJjZVsnY2xpZW50X2lkJ10pO1xuICAgICAgICBib2R5LmFwcGVuZCgnZ3JhbnRfdHlwZScsIHRoaXMub2F1dGhSZXNvdXJjZVsnZ3JhbnRfdHlwZSddKTtcbiAgICAgICAgYm9keS5hcHBlbmQoJ3VzZXJuYW1lJywgdXNlcm5hbWUpO1xuICAgICAgICBib2R5LmFwcGVuZCgncGFzc3dvcmQnLCBwYXNzd29yZCk7XG4gICAgICAgIHJldHVybiBib2R5O1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0Qm9keVJlZnJlc2goKTogT2JzZXJ2YWJsZTxTdHJpbmc+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0JDogU3ViamVjdDxTdHJpbmc+ID0gbmV3IFN1YmplY3Q8U3RyaW5nPigpO1xuICAgICAgICB0aGlzLmF1dGhJbmRleGVkREIuZ2V0RW5jKG9hdXRoSW5mby5yZWZyZXNoX3Rva2VuKS50aGVuKCh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBib2R5OiBVUkxTZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XG4gICAgICAgICAgICBib2R5LmFwcGVuZCgnY2xpZW50X2lkJywgdGhpcy5vYXV0aFJlc291cmNlWydjbGllbnRfaWQnXSk7XG4gICAgICAgICAgICBib2R5LmFwcGVuZCgnZ3JhbnRfdHlwZScsICdyZWZyZXNoX3Rva2VuJyk7XG4gICAgICAgICAgICBib2R5LmFwcGVuZCgncmVmcmVzaF90b2tlbicsIHZhbHVlKTtcbiAgICAgICAgICAgIHJlc3VsdCQubmV4dChib2R5LnRvU3RyaW5nKCkpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdCQuYXNPYnNlcnZhYmxlKCk7XG4gICAgfVxuXG59XG4iXX0=