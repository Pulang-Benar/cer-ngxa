/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { HttpAbstractService } from './http-abstract.service';
import { HttpMethod } from '../models/http-base.model';
import { signatureHeader } from '../models';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class HttpCommonService extends HttpAbstractService {
    /**
     * @param {?} http
     */
    constructor(http) {
        super();
        this.http = http;
    }
    /**
     * @param {?} api
     * @param {?=} body
     * @param {?=} headers
     * @param {?=} params
     * @param {?=} pathVariable
     * @param {?=} responseType
     * @return {?}
     */
    HTTP_AUTH(api, body, headers, params, pathVariable, responseType) {
        if (headers) {
            headers = headers.append(signatureHeader.mark, 'true');
        }
        else
            headers = new HttpHeaders().append(signatureHeader.mark, 'true');
        responseType = responseType ? responseType : 'json';
        return this.HTTP_BASE(api, body, headers, params, pathVariable, responseType);
    }
    /**
     * @param {?} api
     * @param {?=} body
     * @param {?=} headers
     * @param {?=} params
     * @param {?=} pathVariable
     * @param {?=} responseType
     * @return {?}
     */
    HTTP_BASE(api, body, headers, params, pathVariable, responseType) {
        /** @type {?} */
        let response = null;
        responseType = responseType ? responseType : 'json';
        switch (api.method) {
            case HttpMethod.POST:
                response = this.POST(this.API(api, pathVariable), body, headers, params, responseType);
                break;
            case HttpMethod.PUT:
                response = this.PUT(this.API(api, pathVariable), body, headers, params);
                break;
            case HttpMethod.DELETE:
                response = this.DELETE(this.API(api, pathVariable), headers, params);
                break;
            default:
                response = this.GET(this.API(api, pathVariable), headers, params, responseType);
                break;
        }
        return response;
    }
    /**
     * @param {?} url
     * @param {?=} headers
     * @param {?=} params
     * @param {?=} responseType
     * @return {?}
     */
    GET(url, headers, params, responseType) {
        return this.http.get(url, { headers: headers, params: params, responseType: responseType });
    }
    /**
     * @param {?} url
     * @param {?} body
     * @param {?=} headers
     * @param {?=} params
     * @param {?=} responseType
     * @return {?}
     */
    POST(url, body, headers, params, responseType) {
        return this.http.post(url, body, { headers: headers, params: params, responseType: responseType });
    }
    /**
     * @param {?} url
     * @param {?} body
     * @param {?=} headers
     * @param {?=} params
     * @return {?}
     */
    PUT(url, body, headers, params) {
        return this.http.put(url, body, { headers: headers, params: params });
    }
    /**
     * @param {?} url
     * @param {?=} headers
     * @param {?=} params
     * @return {?}
     */
    DELETE(url, headers, params) {
        return this.http.delete(url, { headers: headers, params: params });
    }
}
HttpCommonService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
HttpCommonService.ctorParameters = () => [
    { type: HttpClient }
];
/** @nocollapse */ HttpCommonService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function HttpCommonService_Factory() { return new HttpCommonService(i0.ɵɵinject(i1.HttpClient)); }, token: HttpCommonService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @protected
     */
    HttpCommonService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1jb21tb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B4YXBoaXJhL3NoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9odHRwLWNvbW1vbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFjLE1BQU0sc0JBQXNCLENBQUM7QUFFM0UsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFpQixVQUFVLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sV0FBVyxDQUFDOzs7QUFLNUMsTUFBTSxPQUFPLGlCQUFrQixTQUFRLG1CQUFtQjs7OztJQUV4RCxZQUFzQixJQUFnQjtRQUNwQyxLQUFLLEVBQUUsQ0FBQztRQURZLFNBQUksR0FBSixJQUFJLENBQVk7SUFFdEMsQ0FBQzs7Ozs7Ozs7OztJQUVNLFNBQVMsQ0FBQyxHQUFrQixFQUNqQixJQUFVLEVBQ1YsT0FBcUIsRUFDckIsTUFBbUIsRUFDbkIsWUFBdUIsRUFDdkIsWUFBcUM7UUFDckQsSUFBSSxPQUFPLEVBQUU7WUFDWCxPQUFPLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQ3hEOztZQUFNLE9BQU8sR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3hFLFlBQVksR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1FBQ3BELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQ2hGLENBQUM7Ozs7Ozs7Ozs7SUFFTSxTQUFTLENBQUMsR0FBa0IsRUFDakIsSUFBVSxFQUNWLE9BQXFCLEVBQ3JCLE1BQW1CLEVBQ25CLFlBQXVCLEVBQ3ZCLFlBQXFDOztZQUNqRCxRQUFRLEdBQW9CLElBQUk7UUFDcEMsWUFBWSxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDcEQsUUFBUSxHQUFHLENBQUMsTUFBTSxFQUFFO1lBQ2xCLEtBQUssVUFBVSxDQUFDLElBQUk7Z0JBQ2xCLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLFlBQVksQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFlBQVksQ0FBQyxDQUFDO2dCQUN2RixNQUFNO1lBQ1IsS0FBSyxVQUFVLENBQUMsR0FBRztnQkFDakIsUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsWUFBWSxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztnQkFDeEUsTUFBTTtZQUNSLEtBQUssVUFBVSxDQUFDLE1BQU07Z0JBQ3BCLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLFlBQVksQ0FBQyxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztnQkFDckUsTUFBTTtZQUNSO2dCQUNFLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLFlBQVksQ0FBQyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsWUFBWSxDQUFDLENBQUM7Z0JBQ2hGLE1BQU07U0FDVDtRQUNELE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7Ozs7Ozs7O0lBRU0sR0FBRyxDQUFDLEdBQVcsRUFBRSxPQUFxQixFQUFFLE1BQW1CLEVBQUUsWUFBa0I7UUFDcEYsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBQyxDQUFDLENBQUM7SUFDNUYsQ0FBQzs7Ozs7Ozs7O0lBRU0sSUFBSSxDQUFDLEdBQVcsRUFBRSxJQUFTLEVBQUUsT0FBcUIsRUFBRSxNQUFtQixFQUFFLFlBQWtCO1FBRWhHLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFDLENBQUMsQ0FBQztJQUNuRyxDQUFDOzs7Ozs7OztJQUVNLEdBQUcsQ0FBQyxHQUFXLEVBQUUsSUFBUyxFQUFFLE9BQXFCLEVBQUUsTUFBbUI7UUFDM0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFDLENBQUMsQ0FBQztJQUN0RSxDQUFDOzs7Ozs7O0lBRU0sTUFBTSxDQUFDLEdBQVcsRUFBRSxPQUFxQixFQUFFLE1BQW1CO1FBQ25FLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFDLENBQUMsQ0FBQztJQUNuRSxDQUFDOzs7WUE5REYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBUnFCLFVBQVU7Ozs7Ozs7O0lBV2xCLGlDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBIZWFkZXJzLCBIdHRwQ2xpZW50LCBIdHRwUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvUngnO1xuaW1wb3J0IHsgSHR0cEFic3RyYWN0U2VydmljZSB9IGZyb20gJy4vaHR0cC1hYnN0cmFjdC5zZXJ2aWNlJztcbmltcG9ydCB7IEh0dHBCYXNlTW9kZWwsIEh0dHBNZXRob2QgfSBmcm9tICcuLi9tb2RlbHMvaHR0cC1iYXNlLm1vZGVsJztcbmltcG9ydCB7IHNpZ25hdHVyZUhlYWRlciB9IGZyb20gJy4uL21vZGVscyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBIdHRwQ29tbW9uU2VydmljZSBleHRlbmRzIEh0dHBBYnN0cmFjdFNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBodHRwOiBIdHRwQ2xpZW50KSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHB1YmxpYyBIVFRQX0FVVEgoYXBpOiBIdHRwQmFzZU1vZGVsLFxuICAgICAgICAgICAgICAgICAgICBib2R5PzogYW55LFxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMsXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtcz86IEh0dHBQYXJhbXMsXG4gICAgICAgICAgICAgICAgICAgIHBhdGhWYXJpYWJsZT86IHN0cmluZ1tdLFxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZVR5cGU/OiAnanNvbicgfCAnYXJyYXlidWZmZXInKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBpZiAoaGVhZGVycykge1xuICAgICAgaGVhZGVycyA9IGhlYWRlcnMuYXBwZW5kKHNpZ25hdHVyZUhlYWRlci5tYXJrLCAndHJ1ZScpO1xuICAgIH0gZWxzZSBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKCkuYXBwZW5kKHNpZ25hdHVyZUhlYWRlci5tYXJrLCAndHJ1ZScpO1xuICAgIHJlc3BvbnNlVHlwZSA9IHJlc3BvbnNlVHlwZSA/IHJlc3BvbnNlVHlwZSA6ICdqc29uJztcbiAgICByZXR1cm4gdGhpcy5IVFRQX0JBU0UoYXBpLCBib2R5LCBoZWFkZXJzLCBwYXJhbXMsIHBhdGhWYXJpYWJsZSwgcmVzcG9uc2VUeXBlKTtcbiAgfVxuXG4gIHB1YmxpYyBIVFRQX0JBU0UoYXBpOiBIdHRwQmFzZU1vZGVsLFxuICAgICAgICAgICAgICAgICAgICBib2R5PzogYW55LFxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMsXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtcz86IEh0dHBQYXJhbXMsXG4gICAgICAgICAgICAgICAgICAgIHBhdGhWYXJpYWJsZT86IHN0cmluZ1tdLFxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZVR5cGU/OiAnanNvbicgfCAnYXJyYXlidWZmZXInKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBsZXQgcmVzcG9uc2U6IE9ic2VydmFibGU8YW55PiA9IG51bGw7XG4gICAgcmVzcG9uc2VUeXBlID0gcmVzcG9uc2VUeXBlID8gcmVzcG9uc2VUeXBlIDogJ2pzb24nO1xuICAgIHN3aXRjaCAoYXBpLm1ldGhvZCkge1xuICAgICAgY2FzZSBIdHRwTWV0aG9kLlBPU1Q6XG4gICAgICAgIHJlc3BvbnNlID0gdGhpcy5QT1NUKHRoaXMuQVBJKGFwaSwgcGF0aFZhcmlhYmxlKSwgYm9keSwgaGVhZGVycywgcGFyYW1zLCByZXNwb25zZVR5cGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgSHR0cE1ldGhvZC5QVVQ6XG4gICAgICAgIHJlc3BvbnNlID0gdGhpcy5QVVQodGhpcy5BUEkoYXBpLCBwYXRoVmFyaWFibGUpLCBib2R5LCBoZWFkZXJzLCBwYXJhbXMpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgSHR0cE1ldGhvZC5ERUxFVEU6XG4gICAgICAgIHJlc3BvbnNlID0gdGhpcy5ERUxFVEUodGhpcy5BUEkoYXBpLCBwYXRoVmFyaWFibGUpLCBoZWFkZXJzLCBwYXJhbXMpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJlc3BvbnNlID0gdGhpcy5HRVQodGhpcy5BUEkoYXBpLCBwYXRoVmFyaWFibGUpLCBoZWFkZXJzLCBwYXJhbXMsIHJlc3BvbnNlVHlwZSk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH1cblxuICBwdWJsaWMgR0VUKHVybDogc3RyaW5nLCBoZWFkZXJzPzogSHR0cEhlYWRlcnMsIHBhcmFtcz86IEh0dHBQYXJhbXMsIHJlc3BvbnNlVHlwZT86IGFueSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodXJsLCB7aGVhZGVyczogaGVhZGVycywgcGFyYW1zOiBwYXJhbXMsIHJlc3BvbnNlVHlwZTogcmVzcG9uc2VUeXBlfSk7XG4gIH1cblxuICBwdWJsaWMgUE9TVCh1cmw6IHN0cmluZywgYm9keTogYW55LCBoZWFkZXJzPzogSHR0cEhlYWRlcnMsIHBhcmFtcz86IEh0dHBQYXJhbXMsIHJlc3BvbnNlVHlwZT86IGFueSk6XG4gICAgT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodXJsLCBib2R5LCB7aGVhZGVyczogaGVhZGVycywgcGFyYW1zOiBwYXJhbXMsIHJlc3BvbnNlVHlwZTogcmVzcG9uc2VUeXBlfSk7XG4gIH1cblxuICBwdWJsaWMgUFVUKHVybDogc3RyaW5nLCBib2R5OiBhbnksIGhlYWRlcnM/OiBIdHRwSGVhZGVycywgcGFyYW1zPzogSHR0cFBhcmFtcyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQodXJsLCBib2R5LCB7aGVhZGVyczogaGVhZGVycywgcGFyYW1zOiBwYXJhbXN9KTtcbiAgfVxuXG4gIHB1YmxpYyBERUxFVEUodXJsOiBzdHJpbmcsIGhlYWRlcnM/OiBIdHRwSGVhZGVycywgcGFyYW1zPzogSHR0cFBhcmFtcyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUodXJsLCB7aGVhZGVyczogaGVhZGVycywgcGFyYW1zOiBwYXJhbXN9KTtcbiAgfVxuXG59XG4iXX0=