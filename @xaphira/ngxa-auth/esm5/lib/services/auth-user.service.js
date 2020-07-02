/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Subject } from 'rxjs';
import { Injectable, Inject } from '@angular/core';
import { tap } from 'rxjs/operators';
import { API, HTTP_SERVICE, oauthInfo } from '@xaphira/shared';
import { UserInfo } from '@xaphira/shared';
import { ProfileIndexedDBService } from '../storage/profile-indexeddb.service';
var AuthUserService = /** @class */ (function (_super) {
    tslib_1.__extends(AuthUserService, _super);
    function AuthUserService(profileIndexedDB, apiPath, httpBaseService) {
        var _this = _super.call(this) || this;
        _this.profileIndexedDB = profileIndexedDB;
        _this.apiPath = apiPath;
        _this.httpBaseService = httpBaseService;
        _this.loaderUserSubject$ = new Subject();
        return _this;
    }
    /**
     * @return {?}
     */
    AuthUserService.prototype.loadPhotoUser = /**
     * @return {?}
     */
    function () {
        var _this = this;
        Promise.all([
            this.profileIndexedDB.get('image-b64'),
            this.profileIndexedDB.get('image'),
            this.profileIndexedDB.get('name'),
        ]).then((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (!value[0]) {
                if (value[1] && value[2]) {
                    _this.getImage(value[1], value[2]);
                }
                else {
                    _this.httpBaseService.HTTP_AUTH(_this.apiPath['profile']['get-profile'])
                        .subscribe((/**
                     * @param {?} response
                     * @return {?}
                     */
                    function (response) {
                        Promise.all([
                            _this.profileIndexedDB.put('name', response['name']),
                            _this.profileIndexedDB.put('email', response['email']),
                            _this.profileIndexedDB.put('image', response['image']),
                        ]).then((/**
                         * @return {?}
                         */
                        function () {
                            _this.getImage(response['image'], response['name']);
                        }));
                    }));
                }
            }
            else {
                Promise.all([
                    _this.profileIndexedDB.get('name'),
                    _this.profileIndexedDB.get('image-b64'),
                ]).then((/**
                 * @param {?} profile
                 * @return {?}
                 */
                function (profile) {
                    /** @type {?} */
                    var user = {
                        name: profile[0],
                        picture: profile[1],
                    };
                    _this.loaderUserSubject$.next(user);
                }));
            }
        }));
    };
    /**
     * @param {?} file
     * @param {?} checksum
     * @return {?}
     */
    AuthUserService.prototype.updatePhotoUser = /**
     * @param {?} file
     * @param {?} checksum
     * @return {?}
     */
    function (file, checksum) {
        var _this = this;
        if (file && checksum) {
            /** @type {?} */
            var picture_1;
            /** @type {?} */
            var imageBlob_1 = new Blob([file], {
                type: 'image/png',
            });
            this.profileIndexedDB.put(oauthInfo.image, checksum).then();
            this.profileIndexedDB.put('image-blob', imageBlob_1).then();
            this.profileIndexedDB.get('name').then((/**
             * @param {?} name
             * @return {?}
             */
            function (name) {
                /** @type {?} */
                var reader = new FileReader();
                reader.readAsDataURL(imageBlob_1);
                reader.onloadend = (/**
                 * @return {?}
                 */
                function () {
                    picture_1 = reader.result.toString();
                    /** @type {?} */
                    var user = {
                        name: name,
                        picture: picture_1,
                    };
                    _this.profileIndexedDB.put('image-b64', picture_1).then();
                    _this.loaderUserSubject$.next(user);
                });
            }));
        }
        else {
            this.loaderUserSubject$.next(null);
        }
        return this.loaderUserSubject$.asObservable();
    };
    /**
     * @return {?}
     */
    AuthUserService.prototype.getUser = /**
     * @return {?}
     */
    function () {
        return this.loaderUserSubject$.asObservable();
    };
    /**
     * @private
     * @param {?} checksum
     * @param {?} name
     * @return {?}
     */
    AuthUserService.prototype.getImage = /**
     * @private
     * @param {?} checksum
     * @param {?} name
     * @return {?}
     */
    function (checksum, name) {
        var _this = this;
        this.httpBaseService.HTTP_AUTH(this.apiPath['file']['vw-photo-profile'], null, null, null, [checksum], 'arraybuffer')
            .pipe(tap((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            /** @type {?} */
            var picture;
            /** @type {?} */
            var imageBlob = new Blob([response], {
                type: 'image/png',
            });
            _this.profileIndexedDB.put('image-blob', imageBlob).then();
            /** @type {?} */
            var reader = new FileReader();
            reader.readAsDataURL(imageBlob);
            reader.onloadend = (/**
             * @return {?}
             */
            function () {
                picture = reader.result.toString();
                /** @type {?} */
                var user = {
                    name: name,
                    picture: picture,
                };
                _this.profileIndexedDB.put('image-b64', picture).then();
                _this.loaderUserSubject$.next(user);
            });
        }))).subscribe();
    };
    AuthUserService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    AuthUserService.ctorParameters = function () { return [
        { type: ProfileIndexedDBService },
        { type: undefined, decorators: [{ type: Inject, args: [API,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [HTTP_SERVICE,] }] }
    ]; };
    return AuthUserService;
}(UserInfo));
export { AuthUserService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    AuthUserService.prototype.loaderUserSubject$;
    /**
     * @type {?}
     * @private
     */
    AuthUserService.prototype.profileIndexedDB;
    /**
     * @type {?}
     * @private
     */
    AuthUserService.prototype.apiPath;
    /**
     * @type {?}
     * @private
     */
    AuthUserService.prototype.httpBaseService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC11c2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AeGFwaGlyYS9uZ3hhLWF1dGgvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvYXV0aC11c2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsR0FBRyxFQUFZLFlBQVksRUFBc0IsU0FBUyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDN0YsT0FBTyxFQUFRLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2pELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRS9FO0lBQ3FDLDJDQUFRO0lBRXpDLHlCQUNZLGdCQUF5QyxFQUM3QixPQUFpQixFQUNSLGVBQW1DO1FBSHBFLFlBSVEsaUJBQU8sU0FDZDtRQUpXLHNCQUFnQixHQUFoQixnQkFBZ0IsQ0FBeUI7UUFDN0IsYUFBTyxHQUFQLE9BQU8sQ0FBVTtRQUNSLHFCQUFlLEdBQWYsZUFBZSxDQUFvQjtRQUc1RCx3QkFBa0IsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDOztJQURqRCxDQUFDOzs7O0lBR00sdUNBQWE7OztJQUFwQjtRQUFBLGlCQW1DQztRQWxDRyxPQUFPLENBQUMsR0FBRyxDQUFDO1lBQ1IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUM7WUFDdEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUM7WUFDbEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUM7U0FDcEMsQ0FBQyxDQUFDLElBQUk7Ozs7UUFBQyxVQUFDLEtB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QUFDLFFBQVEsRUFBRSxDQUFDOztvQkFDN0IsSUFBSSxHQUFTO29CQUNmLElBQUksRUFBRSxJQUFJO29CQUNWLE9BQU8sRUFBRSxPQUFPO2lCQUNuQjtnQkFDRCxLQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDdkQsS0FBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN2QyxDQUFDLENBQUEsQ0FBQztRQUNOLENBQUMsRUFBQyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDcEIsQ0FBQzs7Z0JBckdKLFVBQVU7Ozs7Z0JBRkYsdUJBQXVCO2dEQU92QixNQUFNLFNBQUMsR0FBRztnREFDVixNQUFNLFNBQUMsWUFBWTs7SUFpRzVCLHNCQUFDO0NBQUEsQUF2R0QsQ0FDcUMsUUFBUSxHQXNHNUM7U0F0R1ksZUFBZTs7Ozs7O0lBUXhCLDZDQUFpRDs7Ozs7SUFMN0MsMkNBQWlEOzs7OztJQUNqRCxrQ0FBcUM7Ozs7O0lBQ3JDLDBDQUFnRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQVBJLCBBUElNb2RlbCwgSFRUUF9TRVJWSUNFLCBIdHRwRmFjdG9yeVNlcnZpY2UsIG9hdXRoSW5mbyB9IGZyb20gJ0B4YXBoaXJhL3NoYXJlZCc7XG5pbXBvcnQgeyBVc2VyLCBVc2VySW5mbyB9IGZyb20gJ0B4YXBoaXJhL3NoYXJlZCc7XG5pbXBvcnQgeyBQcm9maWxlSW5kZXhlZERCU2VydmljZSB9IGZyb20gJy4uL3N0b3JhZ2UvcHJvZmlsZS1pbmRleGVkZGIuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBdXRoVXNlclNlcnZpY2UgZXh0ZW5kcyBVc2VySW5mbyB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBwcm9maWxlSW5kZXhlZERCOiBQcm9maWxlSW5kZXhlZERCU2VydmljZSxcbiAgICAgICAgQEluamVjdChBUEkpcHJpdmF0ZSBhcGlQYXRoOiBBUElNb2RlbCxcbiAgICAgICAgQEluamVjdChIVFRQX1NFUlZJQ0UpcHJpdmF0ZSBodHRwQmFzZVNlcnZpY2U6IEh0dHBGYWN0b3J5U2VydmljZSkge1xuICAgICAgICAgICAgc3VwZXIoKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBsb2FkZXJVc2VyU3ViamVjdCQgPSBuZXcgU3ViamVjdDxVc2VyPigpO1xuXG4gICAgcHVibGljIGxvYWRQaG90b1VzZXIoKTogdm9pZCB7XG4gICAgICAgIFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgIHRoaXMucHJvZmlsZUluZGV4ZWREQi5nZXQoJ2ltYWdlLWI2NCcpLFxuICAgICAgICAgICAgdGhpcy5wcm9maWxlSW5kZXhlZERCLmdldCgnaW1hZ2UnKSxcbiAgICAgICAgICAgIHRoaXMucHJvZmlsZUluZGV4ZWREQi5nZXQoJ25hbWUnKSxcbiAgICAgICAgXSkudGhlbigodmFsdWU6IGFueVtdKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXZhbHVlWzBdKSB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlWzFdICYmIHZhbHVlWzJdKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0SW1hZ2UodmFsdWVbMV0sIHZhbHVlWzJdKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmh0dHBCYXNlU2VydmljZS5IVFRQX0FVVEgoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXBpUGF0aFsncHJvZmlsZSddWydnZXQtcHJvZmlsZSddKVxuICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9maWxlSW5kZXhlZERCLnB1dCgnbmFtZScsIHJlc3BvbnNlWyduYW1lJ10pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZmlsZUluZGV4ZWREQi5wdXQoJ2VtYWlsJywgcmVzcG9uc2VbJ2VtYWlsJ10pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZmlsZUluZGV4ZWREQi5wdXQoJ2ltYWdlJywgcmVzcG9uc2VbJ2ltYWdlJ10pLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRJbWFnZShyZXNwb25zZVsnaW1hZ2UnXSwgcmVzcG9uc2VbJ25hbWUnXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZmlsZUluZGV4ZWREQi5nZXQoJ25hbWUnKSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9maWxlSW5kZXhlZERCLmdldCgnaW1hZ2UtYjY0JyksXG4gICAgICAgICAgICAgICAgXSkudGhlbigocHJvZmlsZTogYW55W10pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdXNlcjogVXNlciA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHByb2ZpbGVbMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBwaWN0dXJlOiBwcm9maWxlWzFdLFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRlclVzZXJTdWJqZWN0JC5uZXh0KHVzZXIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlUGhvdG9Vc2VyKGZpbGU6IEZpbGUsIGNoZWNrc3VtOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFVzZXI+IHtcbiAgICAgICAgaWYgKGZpbGUgJiYgY2hlY2tzdW0pIHtcbiAgICAgICAgICAgIGxldCBwaWN0dXJlOiBzdHJpbmc7XG4gICAgICAgICAgICBjb25zdCBpbWFnZUJsb2IgPSBuZXcgQmxvYihbZmlsZV0sIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5wcm9maWxlSW5kZXhlZERCLnB1dChvYXV0aEluZm8uaW1hZ2UsIGNoZWNrc3VtKS50aGVuKCk7XG4gICAgICAgICAgICB0aGlzLnByb2ZpbGVJbmRleGVkREIucHV0KCdpbWFnZS1ibG9iJywgaW1hZ2VCbG9iKS50aGVuKCk7XG4gICAgICAgICAgICB0aGlzLnByb2ZpbGVJbmRleGVkREIuZ2V0KCduYW1lJykudGhlbigobmFtZTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVhZGVyOiBGaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChpbWFnZUJsb2IpO1xuICAgICAgICAgICAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHBpY3R1cmUgPSByZWFkZXIucmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHVzZXI6IFVzZXIgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGljdHVyZTogcGljdHVyZSxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9maWxlSW5kZXhlZERCLnB1dCgnaW1hZ2UtYjY0JywgcGljdHVyZSkudGhlbigpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRlclVzZXJTdWJqZWN0JC5uZXh0KHVzZXIpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubG9hZGVyVXNlclN1YmplY3QkLm5leHQobnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMubG9hZGVyVXNlclN1YmplY3QkLmFzT2JzZXJ2YWJsZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRVc2VyKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvYWRlclVzZXJTdWJqZWN0JC5hc09ic2VydmFibGUoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldEltYWdlKGNoZWNrc3VtOiBhbnksIG5hbWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLmh0dHBCYXNlU2VydmljZS5IVFRQX0FVVEgoXG4gICAgICAgIHRoaXMuYXBpUGF0aFsnZmlsZSddWyd2dy1waG90by1wcm9maWxlJ10sIG51bGwsIG51bGwsIG51bGwsXG4gICAgICAgIFtjaGVja3N1bV0sICdhcnJheWJ1ZmZlcicpXG4gICAgICAgIC5waXBlKHRhcCgocmVzcG9uc2U6IGFueSkgPT4ge1xuICAgICAgICAgICAgbGV0IHBpY3R1cmU6IHN0cmluZztcbiAgICAgICAgICAgIGNvbnN0IGltYWdlQmxvYiA9IG5ldyBCbG9iKFtyZXNwb25zZV0sIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5wcm9maWxlSW5kZXhlZERCLnB1dCgnaW1hZ2UtYmxvYicsIGltYWdlQmxvYikudGhlbigpO1xuICAgICAgICAgICAgY29uc3QgcmVhZGVyOiBGaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGltYWdlQmxvYik7XG4gICAgICAgICAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHBpY3R1cmUgPSByZWFkZXIucmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgdXNlcjogVXNlciA9IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgcGljdHVyZTogcGljdHVyZSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHRoaXMucHJvZmlsZUluZGV4ZWREQi5wdXQoJ2ltYWdlLWI2NCcsIHBpY3R1cmUpLnRoZW4oKTtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRlclVzZXJTdWJqZWN0JC5uZXh0KHVzZXIpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSkpLnN1YnNjcmliZSgpO1xuICAgIH1cblxufVxuIl19