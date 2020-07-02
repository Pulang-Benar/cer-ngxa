/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Injector } from '@angular/core';
import { IndexedDBService } from '@xaphira/ngxa-storage';
import { oauthInfoModels, TypeDataOauth } from '@xaphira/shared';
import * as i0 from "@angular/core";
export class ProfileIndexedDBService extends IndexedDBService {
    /**
     * @param {?} injector
     */
    constructor(injector) {
        super(injector, 'xa-core', 1, '#xa-profile');
    }
    /**
     * @param {?} response
     * @return {?}
     */
    loginStorage(response) {
        oauthInfoModels.forEach((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            if (response[data.key]) {
                if (data.type === TypeDataOauth.PROFILE) {
                    this.put(data.key, data.string ? response[data.key] : JSON.stringify(response[data.key])).then();
                }
            }
        }));
    }
    /**
     * @return {?}
     */
    logout() {
        oauthInfoModels.forEach((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            if (data.type === TypeDataOauth.PROFILE) {
                this.remove(data.key);
            }
        }));
    }
}
ProfileIndexedDBService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
ProfileIndexedDBService.ctorParameters = () => [
    { type: Injector }
];
/** @nocollapse */ ProfileIndexedDBService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ProfileIndexedDBService_Factory() { return new ProfileIndexedDBService(i0.ɵɵinject(i0.INJECTOR)); }, token: ProfileIndexedDBService, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS1pbmRleGVkZGIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B4YXBoaXJhL25neGEtYXV0aC8iLCJzb3VyY2VzIjpbImxpYi9zdG9yYWdlL3Byb2ZpbGUtaW5kZXhlZGRiLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxlQUFlLEVBQTJCLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQUkxRixNQUFNLE9BQU8sdUJBQXdCLFNBQVEsZ0JBQTRCOzs7O0lBRXZFLFlBQVksUUFBa0I7UUFDNUIsS0FBSyxDQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQy9DLENBQUM7Ozs7O0lBRU0sWUFBWSxDQUFDLFFBQWE7UUFDL0IsZUFBZSxDQUFDLE9BQU87Ozs7UUFBQyxJQUFJLENBQUMsRUFBRTtZQUMzQixJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ3RCLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxhQUFhLENBQUMsT0FBTyxFQUFFO29CQUN2QyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztpQkFDbEc7YUFDRjtRQUNMLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVNLE1BQU07UUFDWCxlQUFlLENBQUMsT0FBTzs7OztRQUFDLElBQUksQ0FBQyxFQUFFO1lBQzdCLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxhQUFhLENBQUMsT0FBTyxFQUFFO2dCQUN2QyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUN2QjtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBdkJGLFVBQVUsU0FBQyxFQUFDLFVBQVUsRUFBRyxNQUFNLEVBQUM7Ozs7WUFMWixRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEluZGV4ZWREQlNlcnZpY2UgfSBmcm9tICdAeGFwaGlyYS9uZ3hhLXN0b3JhZ2UnO1xuaW1wb3J0IHsgb2F1dGhJbmZvTW9kZWxzLCBJbmRleGVkREJGYWN0b3J5U2VydmljZSwgVHlwZURhdGFPYXV0aCB9IGZyb20gJ0B4YXBoaXJhL3NoYXJlZCc7XG5pbXBvcnQgeyBQcm9maWxlSURCIH0gZnJvbSAnLi4vbW9kZWxzL3Byb2ZpbGUuc2NoZW1hJztcblxuQEluamVjdGFibGUoe3Byb3ZpZGVkSW4gOiAncm9vdCd9KVxuZXhwb3J0IGNsYXNzIFByb2ZpbGVJbmRleGVkREJTZXJ2aWNlIGV4dGVuZHMgSW5kZXhlZERCU2VydmljZTxQcm9maWxlSURCPiBpbXBsZW1lbnRzIEluZGV4ZWREQkZhY3RvcnlTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcihpbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgICBzdXBlcihpbmplY3RvciwgJ3hhLWNvcmUnLCAxLCAnI3hhLXByb2ZpbGUnKTtcbiAgfVxuXG4gIHB1YmxpYyBsb2dpblN0b3JhZ2UocmVzcG9uc2U6IGFueSk6IHZvaWQge1xuICAgIG9hdXRoSW5mb01vZGVscy5mb3JFYWNoKGRhdGEgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2VbZGF0YS5rZXldKSB7XG4gICAgICAgICAgaWYgKGRhdGEudHlwZSA9PT0gVHlwZURhdGFPYXV0aC5QUk9GSUxFKSB7XG4gICAgICAgICAgICB0aGlzLnB1dChkYXRhLmtleSwgZGF0YS5zdHJpbmcgPyByZXNwb25zZVtkYXRhLmtleV0gOiBKU09OLnN0cmluZ2lmeShyZXNwb25zZVtkYXRhLmtleV0pKS50aGVuKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgbG9nb3V0KCk6IHZvaWQge1xuICAgIG9hdXRoSW5mb01vZGVscy5mb3JFYWNoKGRhdGEgPT4ge1xuICAgICAgaWYgKGRhdGEudHlwZSA9PT0gVHlwZURhdGFPYXV0aC5QUk9GSUxFKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlKGRhdGEua2V5KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG59XG4iXX0=