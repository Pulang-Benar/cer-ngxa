/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, take, switchMap, catchError } from 'rxjs/operators';
export class HttpErrorHandler {
    /**
     * @param {?} translate
     * @param {?} authToken
     * @param {?} authStorage
     * @param {?} authSignature
     */
    constructor(translate, authToken, authStorage, authSignature) {
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
    errorHandler(error, req, next) {
        /** @type {?} */
        let err = new HttpErrorResponse({
            error: error.error,
            headers: error.headers,
            status: error.status,
            statusText: error.statusText,
            url: error.url,
        });
        if (error.error instanceof ArrayBuffer) {
            /** @type {?} */
            const decodedString = String.fromCharCode.apply(null, new Uint8Array(error.error));
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
    }
    /**
     * @protected
     * @param {?} error
     * @return {?}
     */
    errorDefault(error) {
        /** @type {?} */
        let err = {
            respStatusCode: error.status,
            respStatusMessage: {},
        };
        err.respStatusMessage[err.respStatusCode] = error.statusText;
        /** @type {?} */
        let msgKey = 'error.' + err.respStatusCode;
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
        (result) => {
            err.respStatusMessage[err.respStatusCode] = result;
        }));
        return err;
    }
    /**
     * @protected
     * @param {?} error
     * @return {?}
     */
    error400(error) {
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
    }
    /**
     * @protected
     * @param {?} error
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    error401(error, request, next) {
        if (error.error) {
            if (error.error['respStatusCode'] === 'invalid_token') {
                if (!this.isRefreshingToken) {
                    this.isRefreshingToken = true;
                    this.refreshTokenSubject.next(null);
                    return this.authToken.refresh().pipe(switchMap((/**
                     * @param {?} response
                     * @return {?}
                     */
                    (response) => {
                        this.isRefreshingToken = false;
                        this.refreshTokenSubject.next(response);
                        return this.authToken.oauthHeaders(request).pipe(switchMap((/**
                         * @param {?} req
                         * @return {?}
                         */
                        (req) => {
                            request = req;
                            return this.authSignature.signHeaders(request).pipe(switchMap((/**
                             * @param {?} valReq
                             * @return {?}
                             */
                            (valReq) => {
                                return next.handle(valReq);
                            })));
                        })));
                    })), catchError((/**
                     * @param {?} err
                     * @return {?}
                     */
                    (err) => {
                        return this.errorHandler(err, request, next);
                    })));
                }
                else {
                    /** @type {?} */
                    const msg = error.error['respStatusMessage']['invalid_token'];
                    if (msg.includes('expired')) {
                        this.authToken.logout();
                    }
                    else {
                        return this.refreshTokenSubject.pipe(filter((/**
                         * @param {?} response
                         * @return {?}
                         */
                        response => response != null)), take(1), switchMap((/**
                         * @return {?}
                         */
                        () => {
                            return this.authToken.oauthHeaders(request).pipe(switchMap((/**
                             * @param {?} req
                             * @return {?}
                             */
                            (req) => {
                                request = req;
                                return this.authSignature.signHeaders(request).pipe(switchMap((/**
                                 * @param {?} valReq
                                 * @return {?}
                                 */
                                (valReq) => {
                                    return next.handle(valReq);
                                })));
                            })));
                        })));
                    }
                }
            }
        }
        return Observable.throw(error);
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1lcnJvci5oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHhhcGhpcmEvbmd4YS1hdXRoLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2h0dHAtZXJyb3IuaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUF1QyxNQUFNLHNCQUFzQixDQUFDO0FBRTlGLE9BQU8sRUFBRSxlQUFlLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQU1yRSxNQUFNLE9BQU8sZ0JBQWdCOzs7Ozs7O0lBS3pCLFlBQ2MsU0FBMkIsRUFDM0IsU0FBMkIsRUFDM0IsV0FBaUMsRUFDakMsYUFBbUM7UUFIbkMsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFDM0IsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFDM0IsZ0JBQVcsR0FBWCxXQUFXLENBQXNCO1FBQ2pDLGtCQUFhLEdBQWIsYUFBYSxDQUFzQjtRQVB2QyxzQkFBaUIsR0FBWSxLQUFLLENBQUM7UUFDbkMsd0JBQW1CLEdBQXlCLElBQUksZUFBZSxDQUFNLElBQUksQ0FBQyxDQUFDO0lBTWpDLENBQUM7Ozs7Ozs7O0lBRTNDLFlBQVksQ0FBQyxLQUF3QixFQUFFLEdBQXFCLEVBQUUsSUFBaUI7O1lBQ2pGLEdBQUcsR0FBc0IsSUFBSSxpQkFBaUIsQ0FBQztZQUMvQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUs7WUFDbEIsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO1lBQ3RCLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTTtZQUNwQixVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7WUFDNUIsR0FBRyxFQUFFLEtBQUssQ0FBQyxHQUFHO1NBQ2pCLENBQUM7UUFFRixJQUFJLEtBQUssQ0FBQyxLQUFLLFlBQVksV0FBVyxFQUFFOztrQkFDOUIsYUFBYSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLFVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbEYsR0FBRyxHQUFHLElBQUksaUJBQWlCLENBQUM7Z0JBQ3hCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQztnQkFDaEMsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO2dCQUN0QixNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU07Z0JBQ3BCLFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVTtnQkFDNUIsR0FBRyxFQUFFLEtBQUssQ0FBQyxHQUFHO2FBQ2pCLENBQUMsQ0FBQztTQUNOO1FBQ0QsUUFBUSxHQUFHLENBQUMsTUFBTSxFQUFFO1lBQ2hCLEtBQUssR0FBRyxDQUFDO1lBQ1QsS0FBSyxHQUFHLENBQUM7WUFDVCxLQUFLLEdBQUc7Z0JBQ0osT0FBTyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDOUIsS0FBSyxHQUFHO2dCQUNKLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM5QixLQUFLLEdBQUc7Z0JBQ0osT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDekMsS0FBSyxHQUFHLENBQUM7WUFDVCxLQUFLLEdBQUcsQ0FBQztZQUNULEtBQUssR0FBRyxDQUFDO1lBQ1QsS0FBSyxHQUFHLENBQUM7WUFDVCxLQUFLLENBQUM7Z0JBQ0YsT0FBTyxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNwRDtnQkFDSSxNQUFNO1NBQ2I7UUFDRCxPQUFPLFVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDakMsQ0FBQzs7Ozs7O0lBRVMsWUFBWSxDQUFDLEtBQThCOztZQUM3QyxHQUFHLEdBQW9CO1lBQ3ZCLGNBQWMsRUFBRSxLQUFLLENBQUMsTUFBTTtZQUM1QixpQkFBaUIsRUFBRSxFQUFFO1NBQ3hCO1FBQ0QsR0FBRyxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDOztZQUN6RCxNQUFNLEdBQVcsUUFBUSxHQUFHLEdBQUcsQ0FBQyxjQUFjO1FBQ2xELElBQUksS0FBSyxDQUFDLEtBQUssRUFBRTtZQUNiLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFO2dCQUMvQixHQUFHLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztnQkFDbEIsTUFBTSxHQUFHLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7YUFDdEQ7U0FDSjtRQUNELElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLE1BQWMsRUFBRSxFQUFFO1lBQ3BELEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLEdBQUcsTUFBTSxDQUFDO1FBQ3ZELENBQUMsRUFBQyxDQUFDO1FBQ0gsT0FBTyxHQUFHLENBQUM7SUFDZixDQUFDOzs7Ozs7SUFFUyxRQUFRLENBQUUsS0FBd0I7UUFDeEMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLEVBQUU7WUFDL0IsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLEtBQUssZUFBZSxFQUFFO2dCQUNuRCxRQUFRLEtBQUssQ0FBQyxLQUFLLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxlQUFlLENBQUMsRUFBRTtvQkFDdkQsS0FBSyxpQkFBaUIsQ0FBQztvQkFDdkIsS0FBSyx3QkFBd0IsQ0FBQztvQkFDOUIsS0FBSyxrQkFBa0IsQ0FBQztvQkFDeEIsS0FBSywwQkFBMEI7d0JBQzNCLE9BQU8sVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7b0JBQ3REO3dCQUNJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUM7d0JBQ3hCLE9BQU8sVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7aUJBQ3pEO2FBQ0o7aUJBQU07Z0JBQ0gsT0FBTyxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzthQUNyRDtTQUNKO1FBQ0QsT0FBTyxVQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25DLENBQUM7Ozs7Ozs7O0lBRVMsUUFBUSxDQUFFLEtBQXdCLEVBQUUsT0FBeUIsRUFBRSxJQUFpQjtRQUV0RixJQUFJLEtBQUssQ0FBQyxLQUFLLEVBQUU7WUFDYixJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxlQUFlLEVBQUU7Z0JBQ25ELElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUU7b0JBQ3pCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7b0JBQzlCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3BDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQ2hDLFNBQVM7Ozs7b0JBQUMsQ0FBQyxRQUFhLEVBQUUsRUFBRTt3QkFDeEIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQzt3QkFDL0IsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzt3QkFDeEMsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQzVDLFNBQVM7Ozs7d0JBQUMsQ0FBQyxHQUFRLEVBQUUsRUFBRTs0QkFDbkIsT0FBTyxHQUFHLEdBQUcsQ0FBQzs0QkFDZCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FDL0MsU0FBUzs7Ozs0QkFBQyxDQUFDLE1BQVcsRUFBRSxFQUFFO2dDQUN0QixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7NEJBQy9CLENBQUMsRUFBQyxDQUNMLENBQUM7d0JBQ04sQ0FBQyxFQUFDLENBQUMsQ0FBQztvQkFDWixDQUFDLEVBQUMsRUFDRixVQUFVOzs7O29CQUFDLENBQUMsR0FBc0IsRUFBRSxFQUFFO3dCQUNsQyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFDakQsQ0FBQyxFQUFDLENBQUMsQ0FBQztpQkFDWDtxQkFBTTs7MEJBQ0csR0FBRyxHQUFXLEtBQUssQ0FBQyxLQUFLLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxlQUFlLENBQUM7b0JBQ3JFLElBQUksR0FBRyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsRUFBRTt3QkFDekIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztxQkFDM0I7eUJBQU07d0JBQ0gsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUNoQyxNQUFNOzs7O3dCQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxJQUFJLElBQUksRUFBQyxFQUNwQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQ1AsU0FBUzs7O3dCQUFDLEdBQUcsRUFBRTs0QkFDWCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FDNUMsU0FBUzs7Ozs0QkFBQyxDQUFDLEdBQVEsRUFBRSxFQUFFO2dDQUNuQixPQUFPLEdBQUcsR0FBRyxDQUFDO2dDQUNkLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUMvQyxTQUFTOzs7O2dDQUFDLENBQUMsTUFBVyxFQUFFLEVBQUU7b0NBQ3RCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztnQ0FDL0IsQ0FBQyxFQUFDLENBQ0wsQ0FBQzs0QkFDTixDQUFDLEVBQUMsQ0FBQyxDQUFDO3dCQUNaLENBQUMsRUFBQyxDQUFDLENBQUM7cUJBQ1g7aUJBQ0o7YUFDSjtTQUNKO1FBQ0QsT0FBTyxVQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25DLENBQUM7Q0FDSjs7Ozs7O0lBeklHLDZDQUE2Qzs7Ozs7SUFDN0MsK0NBQXFGOzs7OztJQUdqRixxQ0FBcUM7Ozs7O0lBQ3JDLHFDQUFxQzs7Ozs7SUFDckMsdUNBQTJDOzs7OztJQUMzQyx5Q0FBNkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwRXJyb3JSZXNwb25zZSwgSHR0cFJlcXVlc3QsIEh0dHBIYW5kbGVyLCBIdHRwRXZlbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgdGFrZSwgc3dpdGNoTWFwLCBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQXBpQmFzZVJlc3BvbnNlIH0gZnJvbSAnQHhhcGhpcmEvc2hhcmVkJztcbmltcG9ydCB7IEF1dGhUb2tlblNlcnZpY2UgfSBmcm9tICcuL2F1dGgtdG9rZW4uc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoU2lnbmF0dXJlU2VydmljZSB9IGZyb20gJy4vYXV0aC1zaWduYXR1cmUuc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoSW5kZXhlZERCU2VydmljZSB9IGZyb20gJy4uL3N0b3JhZ2UvYXV0aC1pbmRleGVkZGIuc2VydmljZSc7XG5cbmV4cG9ydCBjbGFzcyBIdHRwRXJyb3JIYW5kbGVyIHtcblxuICAgIHByb3RlY3RlZCBpc1JlZnJlc2hpbmdUb2tlbjogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByb3RlY3RlZCByZWZyZXNoVG9rZW5TdWJqZWN0OiBCZWhhdmlvclN1YmplY3Q8YW55PiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8YW55PihudWxsKTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgYXV0aFRva2VuOiBBdXRoVG9rZW5TZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgYXV0aFN0b3JhZ2U6IEF1dGhJbmRleGVkREJTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgYXV0aFNpZ25hdHVyZTogQXV0aFNpZ25hdHVyZVNlcnZpY2UpIHt9XG5cbiAgICBwcm90ZWN0ZWQgZXJyb3JIYW5kbGVyKGVycm9yOiBIdHRwRXJyb3JSZXNwb25zZSwgcmVxOiBIdHRwUmVxdWVzdDxhbnk+LCBuZXh0OiBIdHRwSGFuZGxlcik6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIGxldCBlcnI6IEh0dHBFcnJvclJlc3BvbnNlID0gbmV3IEh0dHBFcnJvclJlc3BvbnNlKHtcbiAgICAgICAgICAgIGVycm9yOiBlcnJvci5lcnJvcixcbiAgICAgICAgICAgIGhlYWRlcnM6IGVycm9yLmhlYWRlcnMsXG4gICAgICAgICAgICBzdGF0dXM6IGVycm9yLnN0YXR1cyxcbiAgICAgICAgICAgIHN0YXR1c1RleHQ6IGVycm9yLnN0YXR1c1RleHQsXG4gICAgICAgICAgICB1cmw6IGVycm9yLnVybCxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGVycm9yLmVycm9yIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IGRlY29kZWRTdHJpbmcgPSBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsIG5ldyBVaW50OEFycmF5KGVycm9yLmVycm9yKSk7XG4gICAgICAgICAgICBlcnIgPSBuZXcgSHR0cEVycm9yUmVzcG9uc2Uoe1xuICAgICAgICAgICAgICAgIGVycm9yOiBKU09OLnBhcnNlKGRlY29kZWRTdHJpbmcpLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IGVycm9yLmhlYWRlcnMsXG4gICAgICAgICAgICAgICAgc3RhdHVzOiBlcnJvci5zdGF0dXMsXG4gICAgICAgICAgICAgICAgc3RhdHVzVGV4dDogZXJyb3Iuc3RhdHVzVGV4dCxcbiAgICAgICAgICAgICAgICB1cmw6IGVycm9yLnVybCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHN3aXRjaCAoZXJyLnN0YXR1cykge1xuICAgICAgICAgICAgY2FzZSAyMDA6XG4gICAgICAgICAgICBjYXNlIDIwMTpcbiAgICAgICAgICAgIGNhc2UgMzA0OlxuICAgICAgICAgICAgICAgIHJldHVybiBPYnNlcnZhYmxlLmVtcHR5KCk7XG4gICAgICAgICAgICBjYXNlIDQwMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5lcnJvcjQwMChlcnIpO1xuICAgICAgICAgICAgY2FzZSA0MDE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXJyb3I0MDEoZXJyLCByZXEsIG5leHQpO1xuICAgICAgICAgICAgY2FzZSA0MDQ6XG4gICAgICAgICAgICBjYXNlIDQwMzpcbiAgICAgICAgICAgIGNhc2UgNTAwOlxuICAgICAgICAgICAgY2FzZSA1MDQ6XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3codGhpcy5lcnJvckRlZmF1bHQoZXJyKSk7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycik7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGVycm9yRGVmYXVsdChlcnJvcjogYW55IHwgSHR0cEVycm9yUmVzcG9uc2UpOiBBcGlCYXNlUmVzcG9uc2Uge1xuICAgICAgICBsZXQgZXJyOiBBcGlCYXNlUmVzcG9uc2UgPSB7XG4gICAgICAgICAgICByZXNwU3RhdHVzQ29kZTogZXJyb3Iuc3RhdHVzLFxuICAgICAgICAgICAgcmVzcFN0YXR1c01lc3NhZ2U6IHt9LFxuICAgICAgICB9O1xuICAgICAgICBlcnIucmVzcFN0YXR1c01lc3NhZ2VbZXJyLnJlc3BTdGF0dXNDb2RlXSA9IGVycm9yLnN0YXR1c1RleHQ7XG4gICAgICAgIGxldCBtc2dLZXk6IHN0cmluZyA9ICdlcnJvci4nICsgZXJyLnJlc3BTdGF0dXNDb2RlO1xuICAgICAgICBpZiAoZXJyb3IuZXJyb3IpIHtcbiAgICAgICAgICAgIGlmIChlcnJvci5lcnJvclsncmVzcFN0YXR1c0NvZGUnXSkge1xuICAgICAgICAgICAgICAgIGVyciA9IGVycm9yLmVycm9yO1xuICAgICAgICAgICAgICAgIG1zZ0tleSA9IGVyci5yZXNwU3RhdHVzTWVzc2FnZVtlcnIucmVzcFN0YXR1c0NvZGVdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMudHJhbnNsYXRlLmdldChtc2dLZXkpLnN1YnNjcmliZSgocmVzdWx0OiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgIGVyci5yZXNwU3RhdHVzTWVzc2FnZVtlcnIucmVzcFN0YXR1c0NvZGVdID0gcmVzdWx0O1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGVycjtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZXJyb3I0MDAgKGVycm9yOiBIdHRwRXJyb3JSZXNwb25zZSk6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcbiAgICAgICAgaWYgKGVycm9yLmVycm9yWydyZXNwU3RhdHVzQ29kZSddKSB7XG4gICAgICAgICAgICBpZiAoZXJyb3IuZXJyb3JbJ3Jlc3BTdGF0dXNDb2RlJ10gPT09ICdpbnZhbGlkX2dyYW50Jykge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoZXJyb3IuZXJyb3JbJ3Jlc3BTdGF0dXNNZXNzYWdlJ11bJ2ludmFsaWRfZ3JhbnQnXSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdCYWQgY3JlZGVudGlhbHMnOlxuICAgICAgICAgICAgICAgICAgICBjYXNlICdVc2VyIGFjY291bnQgaXMgbG9ja2VkJzpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnVXNlciBpcyBkaXNhYmxlZCc6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ1VzZXIgYWNjb3VudCBoYXMgZXhwaXJlZCc6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyh0aGlzLmVycm9yRGVmYXVsdChlcnJvcikpO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hdXRoVG9rZW4ubG9nb3V0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyh0aGlzLmVycm9yRGVmYXVsdChlcnJvcikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3codGhpcy5lcnJvckRlZmF1bHQoZXJyb3IpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcik7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGVycm9yNDAxIChlcnJvcjogSHR0cEVycm9yUmVzcG9uc2UsIHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4sIG5leHQ6IEh0dHBIYW5kbGVyKTpcbiAgICAgICAgT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xuICAgICAgICBpZiAoZXJyb3IuZXJyb3IpIHtcbiAgICAgICAgICAgIGlmIChlcnJvci5lcnJvclsncmVzcFN0YXR1c0NvZGUnXSA9PT0gJ2ludmFsaWRfdG9rZW4nKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzUmVmcmVzaGluZ1Rva2VuKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNSZWZyZXNoaW5nVG9rZW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2hUb2tlblN1YmplY3QubmV4dChudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXV0aFRva2VuLnJlZnJlc2goKS5waXBlKFxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoTWFwKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1JlZnJlc2hpbmdUb2tlbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaFRva2VuU3ViamVjdC5uZXh0KHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hdXRoVG9rZW4ub2F1dGhIZWFkZXJzKHJlcXVlc3QpLnBpcGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaE1hcCgocmVxOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3QgPSByZXE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hdXRoU2lnbmF0dXJlLnNpZ25IZWFkZXJzKHJlcXVlc3QpLnBpcGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoTWFwKCh2YWxSZXE6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV4dC5oYW5kbGUodmFsUmVxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2hFcnJvcigoZXJyOiBIdHRwRXJyb3JSZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmVycm9ySGFuZGxlcihlcnIsIHJlcXVlc3QsIG5leHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1zZzogc3RyaW5nID0gZXJyb3IuZXJyb3JbJ3Jlc3BTdGF0dXNNZXNzYWdlJ11bJ2ludmFsaWRfdG9rZW4nXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1zZy5pbmNsdWRlcygnZXhwaXJlZCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmF1dGhUb2tlbi5sb2dvdXQoKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJlZnJlc2hUb2tlblN1YmplY3QucGlwZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXIocmVzcG9uc2UgPT4gcmVzcG9uc2UgIT0gbnVsbCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFrZSgxKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2hNYXAoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hdXRoVG9rZW4ub2F1dGhIZWFkZXJzKHJlcXVlc3QpLnBpcGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2hNYXAoKHJlcTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdCA9IHJlcTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hdXRoU2lnbmF0dXJlLnNpZ25IZWFkZXJzKHJlcXVlc3QpLnBpcGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaE1hcCgodmFsUmVxOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXh0LmhhbmRsZSh2YWxSZXEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcik7XG4gICAgfVxufVxuIl19