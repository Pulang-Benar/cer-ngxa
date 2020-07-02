/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Subject } from 'rxjs';
import { Injectable, Inject } from '@angular/core';
import { tap } from 'rxjs/operators';
import { API, HTTP_SERVICE, oauthInfo } from '@xaphira/shared';
import { UserInfo } from '@xaphira/shared';
import { ProfileIndexedDBService } from '../storage/profile-indexeddb.service';
export class AuthUserService extends UserInfo {
    /**
     * @param {?} profileIndexedDB
     * @param {?} apiPath
     * @param {?} httpBaseService
     */
    constructor(profileIndexedDB, apiPath, httpBaseService) {
        super();
        this.profileIndexedDB = profileIndexedDB;
        this.apiPath = apiPath;
        this.httpBaseService = httpBaseService;
        this.loaderUserSubject$ = new Subject();
    }
    /**
     * @return {?}
     */
    loadPhotoUser() {
        Promise.all([
            this.profileIndexedDB.get('image-b64'),
            this.profileIndexedDB.get('image'),
            this.profileIndexedDB.get('name'),
        ]).then((/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            if (!value[0]) {
                if (value[1] && value[2]) {
                    this.getImage(value[1], value[2]);
                }
                else {
                    this.httpBaseService.HTTP_AUTH(this.apiPath['profile']['get-profile'])
                        .subscribe((/**
                     * @param {?} response
                     * @return {?}
                     */
                    (response) => {
                        Promise.all([
                            this.profileIndexedDB.put('name', response['name']),
                            this.profileIndexedDB.put('email', response['email']),
                            this.profileIndexedDB.put('image', response['image']),
                        ]).then((/**
                         * @return {?}
                         */
                        () => {
                            this.getImage(response['image'], response['name']);
                        }));
                    }));
                }
            }
            else {
                Promise.all([
                    this.profileIndexedDB.get('name'),
                    this.profileIndexedDB.get('image-b64'),
                ]).then((/**
                 * @param {?} profile
                 * @return {?}
                 */
                (profile) => {
                    /** @type {?} */
                    const user = {
                        name: profile[0],
                        picture: profile[1],
                    };
                    this.loaderUserSubject$.next(user);
                }));
            }
        }));
    }
    /**
     * @param {?} file
     * @param {?} checksum
     * @return {?}
     */
    updatePhotoUser(file, checksum) {
        if (file && checksum) {
            /** @type {?} */
            let picture;
            /** @type {?} */
            const imageBlob = new Blob([file], {
                type: 'image/png',
            });
            this.profileIndexedDB.put(oauthInfo.image, checksum).then();
            this.profileIndexedDB.put('image-blob', imageBlob).then();
            this.profileIndexedDB.get('name').then((/**
             * @param {?} name
             * @return {?}
             */
            (name) => {
                /** @type {?} */
                const reader = new FileReader();
                reader.readAsDataURL(imageBlob);
                reader.onloadend = (/**
                 * @return {?}
                 */
                () => {
                    picture = reader.result.toString();
                    /** @type {?} */
                    const user = {
                        name: name,
                        picture: picture,
                    };
                    this.profileIndexedDB.put('image-b64', picture).then();
                    this.loaderUserSubject$.next(user);
                });
            }));
        }
        else {
            this.loaderUserSubject$.next(null);
        }
        return this.loaderUserSubject$.asObservable();
    }
    /**
     * @return {?}
     */
    getUser() {
        return this.loaderUserSubject$.asObservable();
    }
    /**
     * @private
     * @param {?} checksum
     * @param {?} name
     * @return {?}
     */
    getImage(checksum, name) {
        this.httpBaseService.HTTP_AUTH(this.apiPath['file']['vw-photo-profile'], null, null, null, [checksum], 'arraybuffer')
            .pipe(tap((/**
         * @param {?} response
         * @return {?}
         */
        (response) => {
            /** @type {?} */
            let picture;
            /** @type {?} */
            const imageBlob = new Blob([response], {
                type: 'image/png',
            });
            this.profileIndexedDB.put('image-blob', imageBlob).then();
            /** @type {?} */
            const reader = new FileReader();
            reader.readAsDataURL(imageBlob);
            reader.onloadend = (/**
             * @return {?}
             */
            () => {
                picture = reader.result.toString();
                /** @type {?} */
                const user = {
                    name: name,
                    picture: picture,
                };
                this.profileIndexedDB.put('image-b64', picture).then();
                this.loaderUserSubject$.next(user);
            });
        }))).subscribe();
    }
}
AuthUserService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
AuthUserService.ctorParameters = () => [
    { type: ProfileIndexedDBService },
    { type: undefined, decorators: [{ type: Inject, args: [API,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [HTTP_SERVICE,] }] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC11c2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AeGFwaGlyYS9uZ3hhLWF1dGgvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvYXV0aC11c2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFBRSxHQUFHLEVBQVksWUFBWSxFQUFzQixTQUFTLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM3RixPQUFPLEVBQVEsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDakQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFHL0UsTUFBTSxPQUFPLGVBQWdCLFNBQVEsUUFBUTs7Ozs7O0lBRXpDLFlBQ1ksZ0JBQXlDLEVBQzdCLE9BQWlCLEVBQ1IsZUFBbUM7UUFDNUQsS0FBSyxFQUFFLENBQUM7UUFISixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQXlCO1FBQzdCLFlBQU8sR0FBUCxPQUFPLENBQVU7UUFDUixvQkFBZSxHQUFmLGVBQWUsQ0FBb0I7UUFHNUQsdUJBQWtCLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztJQURqRCxDQUFDOzs7O0lBR00sYUFBYTtRQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDO1lBQ1IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUM7WUFDdEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUM7WUFDbEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUM7U0FDcEMsQ0FBQyxDQUFDLElBQUk7Ozs7UUFBQyxDQUFDLEtBQVksRUFBRSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ1gsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUN0QixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDckM7cUJBQU07b0JBQ0gsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQzlCLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUM7eUJBQ3RDLFNBQVM7Ozs7b0JBQUMsQ0FBQyxRQUFhLEVBQUUsRUFBRTt3QkFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQzs0QkFDUixJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7NEJBQ25ELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQzs0QkFDckQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO3lCQUN4RCxDQUFDLENBQUMsSUFBSTs7O3dCQUFDLEdBQUcsRUFBRTs0QkFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRSxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzt3QkFDdkQsQ0FBQyxFQUFDLENBQUM7b0JBQ1AsQ0FBQyxFQUFDLENBQUM7aUJBQ047YUFDSjtpQkFBTTtnQkFDSCxPQUFPLENBQUMsR0FBRyxDQUFDO29CQUNSLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDO29CQUNqQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQztpQkFDekMsQ0FBQyxDQUFDLElBQUk7Ozs7Z0JBQUMsQ0FBQyxPQUFjLEVBQUUsRUFBRTs7MEJBQ2pCLElBQUksR0FBUzt3QkFDZixJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQzt3QkFDaEIsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7cUJBQ3RCO29CQUNELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3ZDLENBQUMsRUFBQyxDQUFDO2FBQ047UUFDTCxDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7Ozs7OztJQUVNLGVBQWUsQ0FBQyxJQUFVLEVBQUUsUUFBZ0I7UUFDL0MsSUFBSSxJQUFJLElBQUksUUFBUSxFQUFFOztnQkFDZCxPQUFlOztrQkFDYixTQUFTLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDL0IsSUFBSSxFQUFFLFdBQVc7YUFDcEIsQ0FBQztZQUNGLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUM1RCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxTQUFTLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUMxRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUk7Ozs7WUFBQyxDQUFDLElBQVMsRUFBRSxFQUFFOztzQkFDM0MsTUFBTSxHQUFlLElBQUksVUFBVSxFQUFFO2dCQUMzQyxNQUFNLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUNoQyxNQUFNLENBQUMsU0FBUzs7O2dCQUFHLEdBQUcsRUFBRTtvQkFDcEIsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7OzBCQUM3QixJQUFJLEdBQVM7d0JBQ2YsSUFBSSxFQUFFLElBQUk7d0JBQ1YsT0FBTyxFQUFFLE9BQU87cUJBQ25CO29CQUNELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO29CQUN2RCxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN2QyxDQUFDLENBQUEsQ0FBQztZQUNOLENBQUMsRUFBQyxDQUFDO1NBQ047YUFBTTtZQUNILElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdEM7UUFDRCxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNsRCxDQUFDOzs7O0lBRU0sT0FBTztRQUNWLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ2xELENBQUM7Ozs7Ozs7SUFFTyxRQUFRLENBQUMsUUFBYSxFQUFFLElBQVk7UUFDeEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQzlCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsa0JBQWtCLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFDMUQsQ0FBQyxRQUFRLENBQUMsRUFBRSxhQUFhLENBQUM7YUFDekIsSUFBSSxDQUFDLEdBQUc7Ozs7UUFBQyxDQUFDLFFBQWEsRUFBRSxFQUFFOztnQkFDcEIsT0FBZTs7a0JBQ2IsU0FBUyxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQ25DLElBQUksRUFBRSxXQUFXO2FBQ3BCLENBQUM7WUFDRixJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxTQUFTLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7a0JBQ3BELE1BQU0sR0FBZSxJQUFJLFVBQVUsRUFBRTtZQUMzQyxNQUFNLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ2hDLE1BQU0sQ0FBQyxTQUFTOzs7WUFBRyxHQUFHLEVBQUU7Z0JBQ3BCLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDOztzQkFDN0IsSUFBSSxHQUFTO29CQUNmLElBQUksRUFBRSxJQUFJO29CQUNWLE9BQU8sRUFBRSxPQUFPO2lCQUNuQjtnQkFDRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDdkQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN2QyxDQUFDLENBQUEsQ0FBQztRQUNOLENBQUMsRUFBQyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDcEIsQ0FBQzs7O1lBckdKLFVBQVU7Ozs7WUFGRix1QkFBdUI7NENBT3ZCLE1BQU0sU0FBQyxHQUFHOzRDQUNWLE1BQU0sU0FBQyxZQUFZOzs7Ozs7O0lBR3hCLDZDQUFpRDs7Ozs7SUFMN0MsMkNBQWlEOzs7OztJQUNqRCxrQ0FBcUM7Ozs7O0lBQ3JDLDBDQUFnRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQVBJLCBBUElNb2RlbCwgSFRUUF9TRVJWSUNFLCBIdHRwRmFjdG9yeVNlcnZpY2UsIG9hdXRoSW5mbyB9IGZyb20gJ0B4YXBoaXJhL3NoYXJlZCc7XG5pbXBvcnQgeyBVc2VyLCBVc2VySW5mbyB9IGZyb20gJ0B4YXBoaXJhL3NoYXJlZCc7XG5pbXBvcnQgeyBQcm9maWxlSW5kZXhlZERCU2VydmljZSB9IGZyb20gJy4uL3N0b3JhZ2UvcHJvZmlsZS1pbmRleGVkZGIuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBdXRoVXNlclNlcnZpY2UgZXh0ZW5kcyBVc2VySW5mbyB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBwcm9maWxlSW5kZXhlZERCOiBQcm9maWxlSW5kZXhlZERCU2VydmljZSxcbiAgICAgICAgQEluamVjdChBUEkpcHJpdmF0ZSBhcGlQYXRoOiBBUElNb2RlbCxcbiAgICAgICAgQEluamVjdChIVFRQX1NFUlZJQ0UpcHJpdmF0ZSBodHRwQmFzZVNlcnZpY2U6IEh0dHBGYWN0b3J5U2VydmljZSkge1xuICAgICAgICAgICAgc3VwZXIoKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBsb2FkZXJVc2VyU3ViamVjdCQgPSBuZXcgU3ViamVjdDxVc2VyPigpO1xuXG4gICAgcHVibGljIGxvYWRQaG90b1VzZXIoKTogdm9pZCB7XG4gICAgICAgIFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgIHRoaXMucHJvZmlsZUluZGV4ZWREQi5nZXQoJ2ltYWdlLWI2NCcpLFxuICAgICAgICAgICAgdGhpcy5wcm9maWxlSW5kZXhlZERCLmdldCgnaW1hZ2UnKSxcbiAgICAgICAgICAgIHRoaXMucHJvZmlsZUluZGV4ZWREQi5nZXQoJ25hbWUnKSxcbiAgICAgICAgXSkudGhlbigodmFsdWU6IGFueVtdKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXZhbHVlWzBdKSB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlWzFdICYmIHZhbHVlWzJdKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0SW1hZ2UodmFsdWVbMV0sIHZhbHVlWzJdKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmh0dHBCYXNlU2VydmljZS5IVFRQX0FVVEgoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXBpUGF0aFsncHJvZmlsZSddWydnZXQtcHJvZmlsZSddKVxuICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9maWxlSW5kZXhlZERCLnB1dCgnbmFtZScsIHJlc3BvbnNlWyduYW1lJ10pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZmlsZUluZGV4ZWREQi5wdXQoJ2VtYWlsJywgcmVzcG9uc2VbJ2VtYWlsJ10pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZmlsZUluZGV4ZWREQi5wdXQoJ2ltYWdlJywgcmVzcG9uc2VbJ2ltYWdlJ10pLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRJbWFnZShyZXNwb25zZVsnaW1hZ2UnXSwgcmVzcG9uc2VbJ25hbWUnXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZmlsZUluZGV4ZWREQi5nZXQoJ25hbWUnKSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9maWxlSW5kZXhlZERCLmdldCgnaW1hZ2UtYjY0JyksXG4gICAgICAgICAgICAgICAgXSkudGhlbigocHJvZmlsZTogYW55W10pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdXNlcjogVXNlciA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHByb2ZpbGVbMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBwaWN0dXJlOiBwcm9maWxlWzFdLFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRlclVzZXJTdWJqZWN0JC5uZXh0KHVzZXIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlUGhvdG9Vc2VyKGZpbGU6IEZpbGUsIGNoZWNrc3VtOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFVzZXI+IHtcbiAgICAgICAgaWYgKGZpbGUgJiYgY2hlY2tzdW0pIHtcbiAgICAgICAgICAgIGxldCBwaWN0dXJlOiBzdHJpbmc7XG4gICAgICAgICAgICBjb25zdCBpbWFnZUJsb2IgPSBuZXcgQmxvYihbZmlsZV0sIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5wcm9maWxlSW5kZXhlZERCLnB1dChvYXV0aEluZm8uaW1hZ2UsIGNoZWNrc3VtKS50aGVuKCk7XG4gICAgICAgICAgICB0aGlzLnByb2ZpbGVJbmRleGVkREIucHV0KCdpbWFnZS1ibG9iJywgaW1hZ2VCbG9iKS50aGVuKCk7XG4gICAgICAgICAgICB0aGlzLnByb2ZpbGVJbmRleGVkREIuZ2V0KCduYW1lJykudGhlbigobmFtZTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVhZGVyOiBGaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChpbWFnZUJsb2IpO1xuICAgICAgICAgICAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHBpY3R1cmUgPSByZWFkZXIucmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHVzZXI6IFVzZXIgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGljdHVyZTogcGljdHVyZSxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9maWxlSW5kZXhlZERCLnB1dCgnaW1hZ2UtYjY0JywgcGljdHVyZSkudGhlbigpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRlclVzZXJTdWJqZWN0JC5uZXh0KHVzZXIpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubG9hZGVyVXNlclN1YmplY3QkLm5leHQobnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMubG9hZGVyVXNlclN1YmplY3QkLmFzT2JzZXJ2YWJsZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRVc2VyKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvYWRlclVzZXJTdWJqZWN0JC5hc09ic2VydmFibGUoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldEltYWdlKGNoZWNrc3VtOiBhbnksIG5hbWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLmh0dHBCYXNlU2VydmljZS5IVFRQX0FVVEgoXG4gICAgICAgIHRoaXMuYXBpUGF0aFsnZmlsZSddWyd2dy1waG90by1wcm9maWxlJ10sIG51bGwsIG51bGwsIG51bGwsXG4gICAgICAgIFtjaGVja3N1bV0sICdhcnJheWJ1ZmZlcicpXG4gICAgICAgIC5waXBlKHRhcCgocmVzcG9uc2U6IGFueSkgPT4ge1xuICAgICAgICAgICAgbGV0IHBpY3R1cmU6IHN0cmluZztcbiAgICAgICAgICAgIGNvbnN0IGltYWdlQmxvYiA9IG5ldyBCbG9iKFtyZXNwb25zZV0sIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5wcm9maWxlSW5kZXhlZERCLnB1dCgnaW1hZ2UtYmxvYicsIGltYWdlQmxvYikudGhlbigpO1xuICAgICAgICAgICAgY29uc3QgcmVhZGVyOiBGaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGltYWdlQmxvYik7XG4gICAgICAgICAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHBpY3R1cmUgPSByZWFkZXIucmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgdXNlcjogVXNlciA9IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgcGljdHVyZTogcGljdHVyZSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHRoaXMucHJvZmlsZUluZGV4ZWREQi5wdXQoJ2ltYWdlLWI2NCcsIHBpY3R1cmUpLnRoZW4oKTtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRlclVzZXJTdWJqZWN0JC5uZXh0KHVzZXIpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSkpLnN1YnNjcmliZSgpO1xuICAgIH1cblxufVxuIl19