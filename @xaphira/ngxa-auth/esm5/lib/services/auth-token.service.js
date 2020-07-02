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
var AuthTokenService = /** @class */ (function () {
    function AuthTokenService(httpBaseService, oauthResource, apiPath, router, authIndexedDB, profileIndexedDB, settingsIndexedDB, idle) {
        var _this = this;
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
        function () {
            /* console.log('[RIP] Session Timeout'); */
            _this.logout();
        }));
        idle.onIdleEnd.subscribe((/**
         * @return {?}
         */
        function () {
            /* console.log('[RIP] Session Idle End'); */
        }));
    }
    /**
     * @param {?} username
     * @param {?} password
     * @return {?}
     */
    AuthTokenService.prototype.login = /**
     * @param {?} username
     * @param {?} password
     * @return {?}
     */
    function (username, password) {
        var _this = this;
        this.authIndexedDB.logout();
        return this.httpBaseService.
            HTTP_BASE(this.apiPath['auth']['token'], this.getAuthBody(username, password).toString(), this.getAuthHeader())
            .toPromise()
            .then((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            _this.idle.setIdle(response['expires_in']);
            _this.idle.watch();
            /* console.log('[RIP] Session Idle Start'); */
            /* console.log('[RIP] Session Timeout in '+response['expires_in']+' seconds'); */
            _this.authIndexedDB.loginStorage(response);
            _this.profileIndexedDB.loginStorage(response);
            _this.settingsIndexedDB.loginStorage(response);
        }));
    };
    /**
     * @return {?}
     */
    AuthTokenService.prototype.refresh = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.getBodyRefresh().pipe(switchMap((/**
         * @param {?} body
         * @return {?}
         */
        function (body) {
            return _this.httpBaseService.
                HTTP_BASE(_this.apiPath['auth']['token'], body, _this.getAuthHeader())
                .pipe(tap((/**
             * @param {?} response
             * @return {?}
             */
            function (response) {
                _this.idle.setIdle(response['expires_in']);
                _this.authIndexedDB.logout();
                _this.authIndexedDB.loginStorage(response);
            })));
        })));
    };
    /**
     * @return {?}
     */
    AuthTokenService.prototype.logout = /**
     * @return {?}
     */
    function () {
        this.idle.stop();
        this.authIndexedDB.logout();
        this.profileIndexedDB.logout();
        this.router.navigate(['/auth']);
    };
    /**
     * @return {?}
     */
    AuthTokenService.prototype.isLogin = /**
     * @return {?}
     */
    function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authIndexedDB.isLogin()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * @param {?} request
     * @return {?}
     */
    AuthTokenService.prototype.oauthHeaders = /**
     * @param {?} request
     * @return {?}
     */
    function (request) {
        /** @type {?} */
        var result$ = new Subject();
        /** @type {?} */
        var httpHeaders = request.headers ? request.headers : new HttpHeaders();
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
        function (value) {
            httpHeaders = httpHeaders.set(signatureHeader.authorization, value[0] + ' ' + value[1]);
            result$.next(request.clone({ headers: httpHeaders }));
        }));
        return result$.asObservable();
    };
    /**
     * @private
     * @return {?}
     */
    AuthTokenService.prototype.getAuthHeader = /**
     * @private
     * @return {?}
     */
    function () {
        return new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' +
                btoa(this.oauthResource['client_id'] + ':' + this.oauthResource['client_secret']),
            'Accept': 'application/json',
        });
    };
    /**
     * @private
     * @param {?} username
     * @param {?} password
     * @return {?}
     */
    AuthTokenService.prototype.getAuthBody = /**
     * @private
     * @param {?} username
     * @param {?} password
     * @return {?}
     */
    function (username, password) {
        /** @type {?} */
        var body = new URLSearchParams();
        body.append('client_id', this.oauthResource['client_id']);
        body.append('grant_type', this.oauthResource['grant_type']);
        body.append('username', username);
        body.append('password', password);
        return body;
    };
    /**
     * @private
     * @return {?}
     */
    AuthTokenService.prototype.getBodyRefresh = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var result$ = new Subject();
        this.authIndexedDB.getEnc(oauthInfo.refresh_token).then((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /** @type {?} */
            var body = new URLSearchParams();
            body.append('client_id', _this.oauthResource['client_id']);
            body.append('grant_type', 'refresh_token');
            body.append('refresh_token', value);
            result$.next(body.toString());
        }));
        return result$.asObservable();
    };
    AuthTokenService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    AuthTokenService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [HTTP_SERVICE,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [OAUTH_INFO,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [API,] }] },
        { type: Router },
        { type: AuthIndexedDBService },
        { type: ProfileIndexedDBService },
        { type: SettingsIndexedDBService },
        { type: Idle }
    ]; };
    return AuthTokenService;
}());
export { AuthTokenService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC10b2tlbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHhhcGhpcmEvbmd4YS1hdXRoLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2F1dGgtdG9rZW4uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxXQUFXLEVBQTZCLE1BQU0sc0JBQXNCLENBQUM7QUFDOUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsSUFBSSxFQUFFLHdCQUF3QixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9ELE9BQU8sRUFDSCxZQUFZLEVBQVksZUFBZSxFQUNuQixHQUFHLEVBQ0EsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzFFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBRWpGO0lBR0ksMEJBQXlDLGVBQW1DLEVBQzdDLGFBQW9DLEVBQzNDLE9BQWlCLEVBQzdCLE1BQWMsRUFDZCxhQUFtQyxFQUNuQyxnQkFBeUMsRUFDekMsaUJBQTJDLEVBQzNDLElBQVU7UUFQdEIsaUJBa0JDO1FBbEJ3QyxvQkFBZSxHQUFmLGVBQWUsQ0FBb0I7UUFDN0Msa0JBQWEsR0FBYixhQUFhLENBQXVCO1FBQzNDLFlBQU8sR0FBUCxPQUFPLENBQVU7UUFDN0IsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGtC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Q0FBQyxlQUFlLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDcEMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUNsQyxDQUFDLEVBQUMsQ0FBQztRQUNILE9BQU8sT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ2xDLENBQUM7O2dCQTdHSixVQUFVOzs7O2dEQUdNLE1BQU0sU0FBQyxZQUFZO2dEQUMzQixNQUFNLFNBQUMsVUFBVTtnREFDakIsTUFBTSxTQUFDLEdBQUc7Z0JBakJWLE1BQU07Z0JBUU4sb0JBQW9CO2dCQUNwQix1QkFBdUI7Z0JBQ3ZCLHdCQUF3QjtnQkFQeEIsSUFBSTs7SUF3SGIsdUJBQUM7Q0FBQSxBQS9HRCxJQStHQztTQTlHWSxnQkFBZ0I7Ozs7OztJQUViLDJDQUFnRTs7Ozs7SUFDeEUseUNBQStEOzs7OztJQUMvRCxtQ0FBcUM7Ozs7O0lBQ3JDLGtDQUFzQjs7Ozs7SUFDdEIseUNBQTJDOzs7OztJQUMzQyw0Q0FBaUQ7Ozs7O0lBQ2pELDZDQUFtRDs7Ozs7SUFDbkQsZ0NBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwSGVhZGVycywgSHR0cFJlc3BvbnNlLCBIdHRwUmVxdWVzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IElkbGUsIERFRkFVTFRfSU5URVJSVVBUU09VUkNFUyB9IGZyb20gJ0BuZy1pZGxlL2NvcmUnO1xuaW1wb3J0IHtcbiAgICBIVFRQX1NFUlZJQ0UsIEFQSU1vZGVsLCBzaWduYXR1cmVIZWFkZXIsXG4gICAgSHR0cEZhY3RvcnlTZXJ2aWNlLCBBUEksXG4gICAgU2VjdXJpdHlSZXNvdXJjZU1vZGVsLCBPQVVUSF9JTkZPLCBvYXV0aEluZm8gfSBmcm9tICdAeGFwaGlyYS9zaGFyZWQnO1xuaW1wb3J0IHsgQXV0aEluZGV4ZWREQlNlcnZpY2UgfSBmcm9tICcuLi9zdG9yYWdlL2F1dGgtaW5kZXhlZGRiLnNlcnZpY2UnO1xuaW1wb3J0IHsgUHJvZmlsZUluZGV4ZWREQlNlcnZpY2UgfSBmcm9tICcuLi9zdG9yYWdlL3Byb2ZpbGUtaW5kZXhlZGRiLnNlcnZpY2UnO1xuaW1wb3J0IHsgU2V0dGluZ3NJbmRleGVkREJTZXJ2aWNlIH0gZnJvbSAnLi4vc3RvcmFnZS9zZXR0aW5ncy1pbmRleGVkZGIuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBdXRoVG9rZW5TZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKEBJbmplY3QoSFRUUF9TRVJWSUNFKXByaXZhdGUgaHR0cEJhc2VTZXJ2aWNlOiBIdHRwRmFjdG9yeVNlcnZpY2UsXG4gICAgICAgIEBJbmplY3QoT0FVVEhfSU5GTylwcml2YXRlIG9hdXRoUmVzb3VyY2U6IFNlY3VyaXR5UmVzb3VyY2VNb2RlbCxcbiAgICAgICAgQEluamVjdChBUEkpcHJpdmF0ZSBhcGlQYXRoOiBBUElNb2RlbCxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgcHJpdmF0ZSBhdXRoSW5kZXhlZERCOiBBdXRoSW5kZXhlZERCU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBwcm9maWxlSW5kZXhlZERCOiBQcm9maWxlSW5kZXhlZERCU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBzZXR0aW5nc0luZGV4ZWREQjogU2V0dGluZ3NJbmRleGVkREJTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGlkbGU6IElkbGUpIHtcbiAgICAgICAgaWRsZS5zZXRJZGxlKG9hdXRoUmVzb3VyY2VbJ3Nlc3Npb25faWRsZSddKTtcbiAgICAgICAgaWRsZS5zZXRUaW1lb3V0KG9hdXRoUmVzb3VyY2VbJ3Nlc3Npb25fdGltZW91dCddKTtcbiAgICAgICAgaWRsZS5zZXRJbnRlcnJ1cHRzKERFRkFVTFRfSU5URVJSVVBUU09VUkNFUyk7XG4gICAgICAgIGlkbGUub25UaW1lb3V0LnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICAvKiBjb25zb2xlLmxvZygnW1JJUF0gU2Vzc2lvbiBUaW1lb3V0Jyk7ICovXG4gICAgICAgICAgICB0aGlzLmxvZ291dCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgaWRsZS5vbklkbGVFbmQuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgIC8qIGNvbnNvbGUubG9nKCdbUklQXSBTZXNzaW9uIElkbGUgRW5kJyk7ICovXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBsb2dpbih1c2VybmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgdGhpcy5hdXRoSW5kZXhlZERCLmxvZ291dCgpO1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwQmFzZVNlcnZpY2UuXG4gICAgICAgIEhUVFBfQkFTRSh0aGlzLmFwaVBhdGhbJ2F1dGgnXVsndG9rZW4nXSxcbiAgICAgICAgICAgIHRoaXMuZ2V0QXV0aEJvZHkodXNlcm5hbWUsIHBhc3N3b3JkKS50b1N0cmluZygpLFxuICAgICAgICAgICAgdGhpcy5nZXRBdXRoSGVhZGVyKCkpXG4gICAgICAgICAgICAgICAgLnRvUHJvbWlzZSgpXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlOiBIdHRwUmVzcG9uc2U8YW55PikgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlkbGUuc2V0SWRsZShyZXNwb25zZVsnZXhwaXJlc19pbiddKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pZGxlLndhdGNoKCk7XG4gICAgICAgICAgICAgICAgICAgIC8qIGNvbnNvbGUubG9nKCdbUklQXSBTZXNzaW9uIElkbGUgU3RhcnQnKTsgKi9cbiAgICAgICAgICAgICAgICAgICAgLyogY29uc29sZS5sb2coJ1tSSVBdIFNlc3Npb24gVGltZW91dCBpbiAnK3Jlc3BvbnNlWydleHBpcmVzX2luJ10rJyBzZWNvbmRzJyk7ICovXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXV0aEluZGV4ZWREQi5sb2dpblN0b3JhZ2UocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2ZpbGVJbmRleGVkREIubG9naW5TdG9yYWdlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXR0aW5nc0luZGV4ZWREQi5sb2dpblN0b3JhZ2UocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyByZWZyZXNoKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEJvZHlSZWZyZXNoKCkucGlwZShzd2l0Y2hNYXAoKGJvZHk6IGFueSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaHR0cEJhc2VTZXJ2aWNlLlxuICAgICAgICAgICAgSFRUUF9CQVNFKHRoaXMuYXBpUGF0aFsnYXV0aCddWyd0b2tlbiddLFxuICAgICAgICAgICAgICAgIGJvZHksXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRBdXRoSGVhZGVyKCkpXG4gICAgICAgICAgICAgICAgLnBpcGUodGFwKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaWRsZS5zZXRJZGxlKHJlc3BvbnNlWydleHBpcmVzX2luJ10pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmF1dGhJbmRleGVkREIubG9nb3V0KCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXV0aEluZGV4ZWREQi5sb2dpblN0b3JhZ2UocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBsb2dvdXQoKSB7XG4gICAgICAgIHRoaXMuaWRsZS5zdG9wKCk7XG4gICAgICAgIHRoaXMuYXV0aEluZGV4ZWREQi5sb2dvdXQoKTtcbiAgICAgICAgdGhpcy5wcm9maWxlSW5kZXhlZERCLmxvZ291dCgpO1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9hdXRoJ10pO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBpc0xvZ2luKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5hdXRoSW5kZXhlZERCLmlzTG9naW4oKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb2F1dGhIZWFkZXJzKHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4pOiBPYnNlcnZhYmxlPEh0dHBSZXF1ZXN0PGFueT4+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0JDogU3ViamVjdDxIdHRwUmVxdWVzdDxhbnk+PiA9IG5ldyBTdWJqZWN0PEh0dHBSZXF1ZXN0PGFueT4+KCk7XG4gICAgICAgIGxldCBodHRwSGVhZGVyczogSHR0cEhlYWRlcnMgPSByZXF1ZXN0LmhlYWRlcnMgPyByZXF1ZXN0LmhlYWRlcnMgOiBuZXcgSHR0cEhlYWRlcnMoKTtcbiAgICAgICAgaHR0cEhlYWRlcnMgPSBodHRwSGVhZGVycy5oYXMoc2lnbmF0dXJlSGVhZGVyLmF1dGhvcml6YXRpb24pID9cbiAgICAgICAgICAgICAgICAgICAgICAgIGh0dHBIZWFkZXJzLmRlbGV0ZShzaWduYXR1cmVIZWFkZXIuYXV0aG9yaXphdGlvbikgOiBodHRwSGVhZGVycztcbiAgICAgICAgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgdGhpcy5hdXRoSW5kZXhlZERCLmdldEVuYyhvYXV0aEluZm8udG9rZW5fdHlwZSksXG4gICAgICAgICAgICB0aGlzLmF1dGhJbmRleGVkREIuZ2V0RW5jKG9hdXRoSW5mby5hY2Nlc3NfdG9rZW4pXSlcbiAgICAgICAgLnRoZW4oKHZhbHVlOiBzdHJpbmdbXSkgPT4ge1xuICAgICAgICAgICAgaHR0cEhlYWRlcnMgPSBodHRwSGVhZGVycy5zZXQoc2lnbmF0dXJlSGVhZGVyLmF1dGhvcml6YXRpb24sIHZhbHVlWzBdICsgJyAnICsgdmFsdWVbMV0pO1xuICAgICAgICAgICAgcmVzdWx0JC5uZXh0KHJlcXVlc3QuY2xvbmUoeyBoZWFkZXJzOiBodHRwSGVhZGVycyB9KSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0JC5hc09ic2VydmFibGUoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldEF1dGhIZWFkZXIoKTogSHR0cEhlYWRlcnMge1xuICAgICAgICByZXR1cm4gbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0Jhc2ljICcgK1xuICAgICAgICAgICAgICAgIGJ0b2EodGhpcy5vYXV0aFJlc291cmNlWydjbGllbnRfaWQnXSArICc6JyArIHRoaXMub2F1dGhSZXNvdXJjZVsnY2xpZW50X3NlY3JldCddKSxcbiAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0QXV0aEJvZHkodXNlcm5hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6IFVSTFNlYXJjaFBhcmFtcyB7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XG4gICAgICAgIGJvZHkuYXBwZW5kKCdjbGllbnRfaWQnLCB0aGlzLm9hdXRoUmVzb3VyY2VbJ2NsaWVudF9pZCddKTtcbiAgICAgICAgYm9keS5hcHBlbmQoJ2dyYW50X3R5cGUnLCB0aGlzLm9hdXRoUmVzb3VyY2VbJ2dyYW50X3R5cGUnXSk7XG4gICAgICAgIGJvZHkuYXBwZW5kKCd1c2VybmFtZScsIHVzZXJuYW1lKTtcbiAgICAgICAgYm9keS5hcHBlbmQoJ3Bhc3N3b3JkJywgcGFzc3dvcmQpO1xuICAgICAgICByZXR1cm4gYm9keTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldEJvZHlSZWZyZXNoKCk6IE9ic2VydmFibGU8U3RyaW5nPiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCQ6IFN1YmplY3Q8U3RyaW5nPiA9IG5ldyBTdWJqZWN0PFN0cmluZz4oKTtcbiAgICAgICAgdGhpcy5hdXRoSW5kZXhlZERCLmdldEVuYyhvYXV0aEluZm8ucmVmcmVzaF90b2tlbikudGhlbigodmFsdWU6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgY29uc3QgYm9keTogVVJMU2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xuICAgICAgICAgICAgYm9keS5hcHBlbmQoJ2NsaWVudF9pZCcsIHRoaXMub2F1dGhSZXNvdXJjZVsnY2xpZW50X2lkJ10pO1xuICAgICAgICAgICAgYm9keS5hcHBlbmQoJ2dyYW50X3R5cGUnLCAncmVmcmVzaF90b2tlbicpO1xuICAgICAgICAgICAgYm9keS5hcHBlbmQoJ3JlZnJlc2hfdG9rZW4nLCB2YWx1ZSk7XG4gICAgICAgICAgICByZXN1bHQkLm5leHQoYm9keS50b1N0cmluZygpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXN1bHQkLmFzT2JzZXJ2YWJsZSgpO1xuICAgIH1cblxufVxuIl19