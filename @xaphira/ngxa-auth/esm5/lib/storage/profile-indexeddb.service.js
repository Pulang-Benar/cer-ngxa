/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Injector } from '@angular/core';
import { IndexedDBService } from '@xaphira/ngxa-storage';
import { oauthInfoModels, TypeDataOauth } from '@xaphira/shared';
import * as i0 from "@angular/core";
var ProfileIndexedDBService = /** @class */ (function (_super) {
    tslib_1.__extends(ProfileIndexedDBService, _super);
    function ProfileIndexedDBService(injector) {
        return _super.call(this, injector, 'xa-core', 1, '#xa-profile') || this;
    }
    /**
     * @param {?} response
     * @return {?}
     */
    ProfileIndexedDBService.prototype.loginStorage = /**
     * @param {?} response
     * @return {?}
     */
    function (response) {
        var _this = this;
        oauthInfoModels.forEach((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            if (response[data.key]) {
                if (data.type === TypeDataOauth.PROFILE) {
                    _this.put(data.key, data.string ? response[data.key] : JSON.stringify(response[data.key])).then();
                }
            }
        }));
    };
    /**
     * @return {?}
     */
    ProfileIndexedDBService.prototype.logout = /**
     * @return {?}
     */
    function () {
        var _this = this;
        oauthInfoModels.forEach((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            if (data.type === TypeDataOauth.PROFILE) {
                _this.remove(data.key);
            }
        }));
    };
    ProfileIndexedDBService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    ProfileIndexedDBService.ctorParameters = function () { return [
        { type: Injector }
    ]; };
    /** @nocollapse */ ProfileIndexedDBService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ProfileIndexedDBService_Factory() { return new ProfileIndexedDBService(i0.ɵɵinject(i0.INJECTOR)); }, token: ProfileIndexedDBService, providedIn: "root" });
    return ProfileIndexedDBService;
}(IndexedDBService));
export { ProfileIndexedDBService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS1pbmRleGVkZGIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B4YXBoaXJhL25neGEtYXV0aC8iLCJzb3VyY2VzIjpbImxpYi9zdG9yYWdlL3Byb2ZpbGUtaW5kZXhlZGRiLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsZUFBZSxFQUEyQixhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7QUFHMUY7SUFDNkMsbURBQTRCO0lBRXZFLGlDQUFZLFFBQWtCO2VBQzVCLGtCQUFNLFFBQVEsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLGFBQWEsQ0FBQztJQUM5QyxDQUFDOzs7OztJQUVNLDhDQUFZOzs7O0lBQW5CLFVBQW9CLFFBQWE7UUFBakMsaUJBUUM7UUFQQyxlQUFlLENBQUMsT0FBTzs7OztRQUFDLFVBQUEsSUFBSTtZQUN4QixJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ3RCLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxhQUFhLENBQUMsT0FBTyxFQUFFO29CQUN2QyxLQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztpQkFDbEc7YUFDRjtRQUNMLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVNLHdDQUFNOzs7SUFBYjtRQUFBLGlCQU1DO1FBTEMsZUFBZSxDQUFDLE9BQU87Ozs7UUFBQyxVQUFBLElBQUk7WUFDMUIsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLGFBQWEsQ0FBQyxPQUFPLEVBQUU7Z0JBQ3ZDLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ3ZCO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOztnQkF2QkYsVUFBVSxTQUFDLEVBQUMsVUFBVSxFQUFHLE1BQU0sRUFBQzs7OztnQkFMWixRQUFROzs7a0NBQTdCO0NBOEJDLEFBekJELENBQzZDLGdCQUFnQixHQXdCNUQ7U0F4QlksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEluZGV4ZWREQlNlcnZpY2UgfSBmcm9tICdAeGFwaGlyYS9uZ3hhLXN0b3JhZ2UnO1xuaW1wb3J0IHsgb2F1dGhJbmZvTW9kZWxzLCBJbmRleGVkREJGYWN0b3J5U2VydmljZSwgVHlwZURhdGFPYXV0aCB9IGZyb20gJ0B4YXBoaXJhL3NoYXJlZCc7XG5pbXBvcnQgeyBQcm9maWxlSURCIH0gZnJvbSAnLi4vbW9kZWxzL3Byb2ZpbGUuc2NoZW1hJztcblxuQEluamVjdGFibGUoe3Byb3ZpZGVkSW4gOiAncm9vdCd9KVxuZXhwb3J0IGNsYXNzIFByb2ZpbGVJbmRleGVkREJTZXJ2aWNlIGV4dGVuZHMgSW5kZXhlZERCU2VydmljZTxQcm9maWxlSURCPiBpbXBsZW1lbnRzIEluZGV4ZWREQkZhY3RvcnlTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcihpbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgICBzdXBlcihpbmplY3RvciwgJ3hhLWNvcmUnLCAxLCAnI3hhLXByb2ZpbGUnKTtcbiAgfVxuXG4gIHB1YmxpYyBsb2dpblN0b3JhZ2UocmVzcG9uc2U6IGFueSk6IHZvaWQge1xuICAgIG9hdXRoSW5mb01vZGVscy5mb3JFYWNoKGRhdGEgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2VbZGF0YS5rZXldKSB7XG4gICAgICAgICAgaWYgKGRhdGEudHlwZSA9PT0gVHlwZURhdGFPYXV0aC5QUk9GSUxFKSB7XG4gICAgICAgICAgICB0aGlzLnB1dChkYXRhLmtleSwgZGF0YS5zdHJpbmcgPyByZXNwb25zZVtkYXRhLmtleV0gOiBKU09OLnN0cmluZ2lmeShyZXNwb25zZVtkYXRhLmtleV0pKS50aGVuKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgbG9nb3V0KCk6IHZvaWQge1xuICAgIG9hdXRoSW5mb01vZGVscy5mb3JFYWNoKGRhdGEgPT4ge1xuICAgICAgaWYgKGRhdGEudHlwZSA9PT0gVHlwZURhdGFPYXV0aC5QUk9GSUxFKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlKGRhdGEua2V5KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG59XG4iXX0=