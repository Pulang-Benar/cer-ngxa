/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, take, switchMap, catchError } from 'rxjs/operators';
var HttpErrorHandler = /** @class */ (function () {
    function HttpErrorHandler(translate, authToken, authStorage, authSignature) {
        this.translate = translate;
        this.authToken = authToken;
        this.authStorage = authStorage;
        this.authSignature = authSignature;
        this.isRefreshingToken = false;
        this.refreshTokenSubject = new BehaviorSubject(null);
    }
    /**
     * @protected
     * @param {?} error
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    HttpErrorHandler.prototype.errorHandler = /**
     * @protected
     * @param {?} error
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    function (error, req, next) {
        /** @type {?} */
        var err = new HttpErrorResponse({
            error: error.error,
            headers: error.headers,
            status: error.status,
            statusText: error.statusText,
            url: error.url,
        });
        if (error.error instanceof ArrayBuffer) {
            /** @type {?} */
            var decodedString = String.fromCharCode.apply(null, new Uint8Array(error.error));
            err = new HttpErrorResponse({
                error: JSON.parse(decodedString),
                headers: error.headers,
                status: error.status,
                statusText: error.statusText,
                url: error.url,
            });
        }
        switch (err.status) {
            case 200:
            case 201:
            case 304:
                return Observable.empty();
            case 400:
                return this.error400(err);
            case 401:
                return this.error401(err, req, next);
            case 404:
            case 403:
            case 500:
            case 504:
            case 0:
                return Observable.throw(this.errorDefault(err));
            default:
                break;
        }
        return Observable.throw(err);
    };
    /**
     * @protected
     * @param {?} error
     * @return {?}
     */
    HttpErrorHandler.prototype.errorDefault = /**
     * @protected
     * @param {?} error
     * @return {?}
     */
    function (error) {
        /** @type {?} */
        var err = {
            respStatusCode: error.status,
            respStatusMessage: {},
        };
        err.respStatusMessage[err.respStatusCode] = error.statusText;
        /** @type {?} */
        var msgKey = 'error.' + err.respStatusCode;
        if (error.error) {
            if (error.error['respStatusCode']) {
                err = error.error;
                msgKey = err.respStatusMessage[err.respStatusCode];
            }
        }
        this.translate.get(msgKey).subscribe((/**
         * @param {?} result
         * @return {?}
         */
        function (result) {
            err.respStatusMessage[err.respStatusCode] = result;
        }));
        return err;
    };
    /**
     * @protected
     * @param {?} error
     * @return {?}
     */
    HttpErrorHandler.prototype.error400 = /**
     * @protected
     * @param {?} error
     * @return {?}
     */
    function (error) {
        if (error.error['respStatusCode']) {
            if (error.error['respStatusCode'] === 'invalid_grant') {
                switch (error.error['respStatusMessage']['invalid_grant']) {
                    case 'Bad credentials':
                    case 'User account is locked':
                    case 'User is disabled':
                    case 'User account has expired':
                        return Observable.throw(this.errorDefault(error));
                    default:
                        this.authToken.logout();
                        return Observable.throw(this.errorDefault(error));
                }
            }
            else {
                return Observable.throw(this.errorDefault(error));
            }
        }
        return Observable.throw(error);
    };
    /**
     * @protected
     * @param {?} error
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    HttpErrorHandler.prototype.error401 = /**
     * @protected
     * @param {?} error
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    function (error, request, next) {
        var _this = this;
        if (error.error) {
            if (error.error['respStatusCode'] === 'invalid_token') {
                if (!this.isRefreshingToken) {
                    this.isRefreshingToken = true;
                    this.refreshTokenSubject.next(null);
                    return this.authToken.refresh().pipe(switchMap((/**
                     * @param {?} response
                     * @return {?}
                     */
                    function (response) {
                        _this.isRefreshingToken = false;
                        _this.refreshTokenSubject.next(response);
                        return _this.authToken.oauthHeaders(request).pipe(switchMap((/**
                         * @param {?} req
                         * @return {?}
                         */
                        function (req) {
                            request = req;
                            return _this.authSignature.signHeaders(request).pipe(switchMap((/**
                             * @param {?} valReq
                             * @return {?}
                             */
                            function (valReq) {
                                return next.handle(valReq);
                            })));
                        })));
                    })), catchError((/**
                     * @param {?} err
                     * @return {?}
                     */
                    function (err) {
                        return _this.errorHandler(err, request, next);
                    })));
                }
                else {
                    /** @type {?} */
                    var msg = error.error['respStatusMessage']['invalid_token'];
                    if (msg.includes('expired')) {
                        this.authToken.logout();
                    }
                    else {
                        return this.refreshTokenSubject.pipe(filter((/**
                         * @param {?} response
                         * @return {?}
                         */
                        function (response) { return response != null; })), take(1), switchMap((/**
                         * @return {?}
                         */
                        function () {
                            return _this.authToken.oauthHeaders(request).pipe(switchMap((/**
                             * @param {?} req
                             * @return {?}
                             */
                            function (req) {
                                request = req;
                                return _this.authSignature.signHeaders(request).pipe(switchMap((/**
                                 * @param {?} valReq
                                 * @return {?}
                                 */
                                function (valReq) {
                                    return next.handle(valReq);
                                })));
                            })));
                        })));
                    }
                }
            }
        }
        return Observable.throw(error);
    };
    return HttpErrorHandler;
}());
export { HttpErrorHandler };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    HttpErrorHandler.prototype.isRefreshingToken;
    /**
     * @type {?}
     * @protected
     */
    HttpErrorHandler.prototype.refreshTokenSubject;
    /**
     * @type {?}
     * @protected
     */
    HttpErrorHandler.prototype.translate;
    /**
     * @type {?}
     * @protected
     */
    HttpErrorHandler.prototype.authToken;
    /**
     * @type {?}
     * @protected
     */
    HttpErrorHandler.prototype.authStorage;
    /**
     * @type {?}
     * @protected
     */
    HttpErrorHandler.prototype.authSignature;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1lcnJvci5oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHhhcGhpcmEvbmd4YS1hdXRoLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2h0dHAtZXJyb3IuaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUF1QyxNQUFNLHNCQUFzQixDQUFDO0FBRTlGLE9BQU8sRUFBRSxlQUFlLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQU1yRTtJQUtJLDBCQUNjLFNBQTJCLEVBQzNCLFNBQTJCLEVBQzNCLFdBQWlDLEVBQ2pDLGFBQW1DO1FBSG5DLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBQzNCLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBQzNCLGdCQUFXLEdBQVgsV0FBVyxDQUFzQjtRQUNqQyxrQkFBYSxHQUFiLGFBQWEsQ0FBc0I7UUFQdkMsc0JBQWlCLEdBQVksS0FBSyxDQUFDO1FBQ25DLHdCQUFtQixHQUF5QixJQUFJLGVBQWUsQ0FBTSxJQUFJLENBQUMsQ0FBQztJQU1qQyxDQUFDOzs7Ozs7OztJQUUzQyx1Q0FBWTs7Ozs7OztJQUF0QixVQUF1QixLQUF3QixFQUFFLEdBQXFCLEVBQUUsSUFBaUI7O1lBQ2pGLEdBQUcsR0FBc0IsSUFBSSxpQkFBaUIsQ0FBQztZQUMvQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUs7WUFDbEIsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO1lBQ3RCLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTTtZQUNwQixVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7WUFDNUIsR0FBRyxFQUFFLEtBQUssQ0FBQyxHQUFHO1NBQ2pCLENBQUM7UUFFRixJQUFJLEtBQUssQ0FBQyxLQUFLLFlBQVksV0FBVyxFQUFFOztnQkFDOUIs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QUFDLEVBQUMsQ0FDTCxDQUFDOzRCQUNOLENBQUMsRUFBQyxDQUFDLENBQUM7d0JBQ1osQ0FBQyxFQUFDLENBQUMsQ0FBQztxQkFDWDtpQkFDSjthQUNKO1NBQ0o7UUFDRCxPQUFPLFVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUNMLHVCQUFDO0FBQUQsQ0FBQyxBQTNJRCxJQTJJQzs7Ozs7OztJQXpJRyw2Q0FBNkM7Ozs7O0lBQzdDLCtDQUFxRjs7Ozs7SUFHakYscUNBQXFDOzs7OztJQUNyQyxxQ0FBcUM7Ozs7O0lBQ3JDLHVDQUEyQzs7Ozs7SUFDM0MseUNBQTZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cEVycm9yUmVzcG9uc2UsIEh0dHBSZXF1ZXN0LCBIdHRwSGFuZGxlciwgSHR0cEV2ZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIHRha2UsIHN3aXRjaE1hcCwgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEFwaUJhc2VSZXNwb25zZSB9IGZyb20gJ0B4YXBoaXJhL3NoYXJlZCc7XG5pbXBvcnQgeyBBdXRoVG9rZW5TZXJ2aWNlIH0gZnJvbSAnLi9hdXRoLXRva2VuLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXV0aFNpZ25hdHVyZVNlcnZpY2UgfSBmcm9tICcuL2F1dGgtc2lnbmF0dXJlLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXV0aEluZGV4ZWREQlNlcnZpY2UgfSBmcm9tICcuLi9zdG9yYWdlL2F1dGgtaW5kZXhlZGRiLnNlcnZpY2UnO1xuXG5leHBvcnQgY2xhc3MgSHR0cEVycm9ySGFuZGxlciB7XG5cbiAgICBwcm90ZWN0ZWQgaXNSZWZyZXNoaW5nVG9rZW46IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcm90ZWN0ZWQgcmVmcmVzaFRva2VuU3ViamVjdDogQmVoYXZpb3JTdWJqZWN0PGFueT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGFueT4obnVsbCk7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIHRyYW5zbGF0ZTogVHJhbnNsYXRlU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIGF1dGhUb2tlbjogQXV0aFRva2VuU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIGF1dGhTdG9yYWdlOiBBdXRoSW5kZXhlZERCU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIGF1dGhTaWduYXR1cmU6IEF1dGhTaWduYXR1cmVTZXJ2aWNlKSB7fVxuXG4gICAgcHJvdGVjdGVkIGVycm9ySGFuZGxlcihlcnJvcjogSHR0cEVycm9yUmVzcG9uc2UsIHJlcTogSHR0cFJlcXVlc3Q8YW55PiwgbmV4dDogSHR0cEhhbmRsZXIpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICBsZXQgZXJyOiBIdHRwRXJyb3JSZXNwb25zZSA9IG5ldyBIdHRwRXJyb3JSZXNwb25zZSh7XG4gICAgICAgICAgICBlcnJvcjogZXJyb3IuZXJyb3IsXG4gICAgICAgICAgICBoZWFkZXJzOiBlcnJvci5oZWFkZXJzLFxuICAgICAgICAgICAgc3RhdHVzOiBlcnJvci5zdGF0dXMsXG4gICAgICAgICAgICBzdGF0dXNUZXh0OiBlcnJvci5zdGF0dXNUZXh0LFxuICAgICAgICAgICAgdXJsOiBlcnJvci51cmwsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChlcnJvci5lcnJvciBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB7XG4gICAgICAgICAgICBjb25zdCBkZWNvZGVkU3RyaW5nID0gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLCBuZXcgVWludDhBcnJheShlcnJvci5lcnJvcikpO1xuICAgICAgICAgICAgZXJyID0gbmV3IEh0dHBFcnJvclJlc3BvbnNlKHtcbiAgICAgICAgICAgICAgICBlcnJvcjogSlNPTi5wYXJzZShkZWNvZGVkU3RyaW5nKSxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiBlcnJvci5oZWFkZXJzLFxuICAgICAgICAgICAgICAgIHN0YXR1czogZXJyb3Iuc3RhdHVzLFxuICAgICAgICAgICAgICAgIHN0YXR1c1RleHQ6IGVycm9yLnN0YXR1c1RleHQsXG4gICAgICAgICAgICAgICAgdXJsOiBlcnJvci51cmwsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2ggKGVyci5zdGF0dXMpIHtcbiAgICAgICAgICAgIGNhc2UgMjAwOlxuICAgICAgICAgICAgY2FzZSAyMDE6XG4gICAgICAgICAgICBjYXNlIDMwNDpcbiAgICAgICAgICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS5lbXB0eSgpO1xuICAgICAgICAgICAgY2FzZSA0MDA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXJyb3I0MDAoZXJyKTtcbiAgICAgICAgICAgIGNhc2UgNDAxOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmVycm9yNDAxKGVyciwgcmVxLCBuZXh0KTtcbiAgICAgICAgICAgIGNhc2UgNDA0OlxuICAgICAgICAgICAgY2FzZSA0MDM6XG4gICAgICAgICAgICBjYXNlIDUwMDpcbiAgICAgICAgICAgIGNhc2UgNTA0OlxuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KHRoaXMuZXJyb3JEZWZhdWx0KGVycikpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnIpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBlcnJvckRlZmF1bHQoZXJyb3I6IGFueSB8IEh0dHBFcnJvclJlc3BvbnNlKTogQXBpQmFzZVJlc3BvbnNlIHtcbiAgICAgICAgbGV0IGVycjogQXBpQmFzZVJlc3BvbnNlID0ge1xuICAgICAgICAgICAgcmVzcFN0YXR1c0NvZGU6IGVycm9yLnN0YXR1cyxcbiAgICAgICAgICAgIHJlc3BTdGF0dXNNZXNzYWdlOiB7fSxcbiAgICAgICAgfTtcbiAgICAgICAgZXJyLnJlc3BTdGF0dXNNZXNzYWdlW2Vyci5yZXNwU3RhdHVzQ29kZV0gPSBlcnJvci5zdGF0dXNUZXh0O1xuICAgICAgICBsZXQgbXNnS2V5OiBzdHJpbmcgPSAnZXJyb3IuJyArIGVyci5yZXNwU3RhdHVzQ29kZTtcbiAgICAgICAgaWYgKGVycm9yLmVycm9yKSB7XG4gICAgICAgICAgICBpZiAoZXJyb3IuZXJyb3JbJ3Jlc3BTdGF0dXNDb2RlJ10pIHtcbiAgICAgICAgICAgICAgICBlcnIgPSBlcnJvci5lcnJvcjtcbiAgICAgICAgICAgICAgICBtc2dLZXkgPSBlcnIucmVzcFN0YXR1c01lc3NhZ2VbZXJyLnJlc3BTdGF0dXNDb2RlXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRyYW5zbGF0ZS5nZXQobXNnS2V5KS5zdWJzY3JpYmUoKHJlc3VsdDogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICBlcnIucmVzcFN0YXR1c01lc3NhZ2VbZXJyLnJlc3BTdGF0dXNDb2RlXSA9IHJlc3VsdDtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBlcnI7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGVycm9yNDAwIChlcnJvcjogSHR0cEVycm9yUmVzcG9uc2UpOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XG4gICAgICAgIGlmIChlcnJvci5lcnJvclsncmVzcFN0YXR1c0NvZGUnXSkge1xuICAgICAgICAgICAgaWYgKGVycm9yLmVycm9yWydyZXNwU3RhdHVzQ29kZSddID09PSAnaW52YWxpZF9ncmFudCcpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGVycm9yLmVycm9yWydyZXNwU3RhdHVzTWVzc2FnZSddWydpbnZhbGlkX2dyYW50J10pIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnQmFkIGNyZWRlbnRpYWxzJzpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnVXNlciBhY2NvdW50IGlzIGxvY2tlZCc6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ1VzZXIgaXMgZGlzYWJsZWQnOlxuICAgICAgICAgICAgICAgICAgICBjYXNlICdVc2VyIGFjY291bnQgaGFzIGV4cGlyZWQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3codGhpcy5lcnJvckRlZmF1bHQoZXJyb3IpKTtcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXV0aFRva2VuLmxvZ291dCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3codGhpcy5lcnJvckRlZmF1bHQoZXJyb3IpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KHRoaXMuZXJyb3JEZWZhdWx0KGVycm9yKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBlcnJvcjQwMSAoZXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlLCByZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+LCBuZXh0OiBIdHRwSGFuZGxlcik6XG4gICAgICAgIE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcbiAgICAgICAgaWYgKGVycm9yLmVycm9yKSB7XG4gICAgICAgICAgICBpZiAoZXJyb3IuZXJyb3JbJ3Jlc3BTdGF0dXNDb2RlJ10gPT09ICdpbnZhbGlkX3Rva2VuJykge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc1JlZnJlc2hpbmdUb2tlbikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzUmVmcmVzaGluZ1Rva2VuID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoVG9rZW5TdWJqZWN0Lm5leHQobnVsbCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmF1dGhUb2tlbi5yZWZyZXNoKCkucGlwZShcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaE1hcCgocmVzcG9uc2U6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNSZWZyZXNoaW5nVG9rZW4gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2hUb2tlblN1YmplY3QubmV4dChyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXV0aFRva2VuLm9hdXRoSGVhZGVycyhyZXF1ZXN0KS5waXBlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2hNYXAoKHJlcTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0ID0gcmVxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXV0aFNpZ25hdHVyZS5zaWduSGVhZGVycyhyZXF1ZXN0KS5waXBlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaE1hcCgodmFsUmVxOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5leHQuaGFuZGxlKHZhbFJlcSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoRXJyb3IoKGVycjogSHR0cEVycm9yUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5lcnJvckhhbmRsZXIoZXJyLCByZXF1ZXN0LCBuZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtc2c6IHN0cmluZyA9IGVycm9yLmVycm9yWydyZXNwU3RhdHVzTWVzc2FnZSddWydpbnZhbGlkX3Rva2VuJ107XG4gICAgICAgICAgICAgICAgICAgIGlmIChtc2cuaW5jbHVkZXMoJ2V4cGlyZWQnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hdXRoVG9rZW4ubG9nb3V0KCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZWZyZXNoVG9rZW5TdWJqZWN0LnBpcGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyKHJlc3BvbnNlID0+IHJlc3BvbnNlICE9IG51bGwpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRha2UoMSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoTWFwKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXV0aFRva2VuLm9hdXRoSGVhZGVycyhyZXF1ZXN0KS5waXBlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoTWFwKChyZXE6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3QgPSByZXE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXV0aFNpZ25hdHVyZS5zaWduSGVhZGVycyhyZXF1ZXN0KS5waXBlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2hNYXAoKHZhbFJlcTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV4dC5oYW5kbGUodmFsUmVxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IpO1xuICAgIH1cbn1cbiJdfQ==