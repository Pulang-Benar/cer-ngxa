/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Injector } from '@angular/core';
import { IndexedDBService } from '@xaphira/ngxa-storage';
import { oauthInfoModels, TypeDataOauth } from '@xaphira/shared';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
var SettingsIndexedDBService = /** @class */ (function (_super) {
    tslib_1.__extends(SettingsIndexedDBService, _super);
    function SettingsIndexedDBService(injector) {
        var _this = _super.call(this, injector, 'xa-core', 1, '#xa-settings') || this;
        _this.translate = injector.get(TranslateService);
        return _this;
    }
    /**
     * @param {?} response
     * @return {?}
     */
    SettingsIndexedDBService.prototype.loginStorage = /**
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
                if (data.type === TypeDataOauth.SETTINGS) {
                    _this.put(data.key, data.string ? response[data.key] : JSON.stringify(response[data.key])).then();
                    if (data.key === 'locale') {
                        _this.translate.getTranslation(response[data.key]).subscribe((/**
                         * @param {?} lang
                         * @return {?}
                         */
                        function (lang) {
                            _this.translate.use(response[data.key]);
                            _this.translate.setTranslation(response[data.key], lang, true);
                        }));
                    }
                }
            }
        }));
    };
    SettingsIndexedDBService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    SettingsIndexedDBService.ctorParameters = function () { return [
        { type: Injector }
    ]; };
    /** @nocollapse */ SettingsIndexedDBService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function SettingsIndexedDBService_Factory() { return new SettingsIndexedDBService(i0.ɵɵinject(i0.INJECTOR)); }, token: SettingsIndexedDBService, providedIn: "root" });
    return SettingsIndexedDBService;
}(IndexedDBService));
export { SettingsIndexedDBService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SettingsIndexedDBService.prototype.translate;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3MtaW5kZXhlZGRiLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AeGFwaGlyYS9uZ3hhLWF1dGgvIiwic291cmNlcyI6WyJsaWIvc3RvcmFnZS9zZXR0aW5ncy1pbmRleGVkZGIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxlQUFlLEVBQTJCLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzFGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDOztBQUd2RDtJQUM4QyxvREFBNkI7SUFJekUsa0NBQVksUUFBa0I7UUFBOUIsWUFDRSxrQkFBTSxRQUFRLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxjQUFjLENBQUMsU0FFOUM7UUFEQyxLQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQzs7SUFDbEQsQ0FBQzs7Ozs7SUFFTSwrQ0FBWTs7OztJQUFuQixVQUFvQixRQUFhO1FBQWpDLGlCQWNDO1FBYkMsZUFBZSxDQUFDLE9BQU87Ozs7UUFBQyxVQUFBLElBQUk7WUFDMUIsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUN0QixJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssYUFBYSxDQUFDLFFBQVEsRUFBRTtvQkFDeEMsS0FBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ2pHLElBQUksSUFBSSxDQUFDLEdBQUcsS0FBSyxRQUFRLEVBQUU7d0JBQ3pCLEtBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxTQUFTOzs7O3dCQUFDLFVBQUMsSUFBUzs0QkFDcEUsS0FBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDOzRCQUN2QyxLQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQzt3QkFDaEUsQ0FBQyxFQUFDLENBQUM7cUJBQ0o7aUJBQ0Y7YUFDRjtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBeEJGLFVBQVUsU0FBQyxFQUFDLFVBQVUsRUFBRyxNQUFNLEVBQUM7Ozs7Z0JBTlosUUFBUTs7O21DQUE3QjtDQWdDQyxBQTFCRCxDQUM4QyxnQkFBZ0IsR0F5QjdEO1NBekJZLHdCQUF3Qjs7Ozs7O0lBRW5DLDZDQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbmRleGVkREJTZXJ2aWNlIH0gZnJvbSAnQHhhcGhpcmEvbmd4YS1zdG9yYWdlJztcbmltcG9ydCB7IG9hdXRoSW5mb01vZGVscywgSW5kZXhlZERCRmFjdG9yeVNlcnZpY2UsIFR5cGVEYXRhT2F1dGggfSBmcm9tICdAeGFwaGlyYS9zaGFyZWQnO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuaW1wb3J0IHsgU2V0dGluZ3NJREIgfSBmcm9tICcuLi9tb2RlbHMvc2V0dGluZ3Muc2NoZW1hJztcblxuQEluamVjdGFibGUoe3Byb3ZpZGVkSW4gOiAncm9vdCd9KVxuZXhwb3J0IGNsYXNzIFNldHRpbmdzSW5kZXhlZERCU2VydmljZSBleHRlbmRzIEluZGV4ZWREQlNlcnZpY2U8U2V0dGluZ3NJREI+IGltcGxlbWVudHMgSW5kZXhlZERCRmFjdG9yeVNlcnZpY2Uge1xuXG4gIHByaXZhdGUgdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlO1xuXG4gIGNvbnN0cnVjdG9yKGluamVjdG9yOiBJbmplY3Rvcikge1xuICAgIHN1cGVyKGluamVjdG9yLCAneGEtY29yZScsIDEsICcjeGEtc2V0dGluZ3MnKTtcbiAgICB0aGlzLnRyYW5zbGF0ZSA9IGluamVjdG9yLmdldChUcmFuc2xhdGVTZXJ2aWNlKTtcbiAgfVxuXG4gIHB1YmxpYyBsb2dpblN0b3JhZ2UocmVzcG9uc2U6IGFueSk6IHZvaWQge1xuICAgIG9hdXRoSW5mb01vZGVscy5mb3JFYWNoKGRhdGEgPT4ge1xuICAgICAgaWYgKHJlc3BvbnNlW2RhdGEua2V5XSkge1xuICAgICAgICBpZiAoZGF0YS50eXBlID09PSBUeXBlRGF0YU9hdXRoLlNFVFRJTkdTKSB7XG4gICAgICAgICAgdGhpcy5wdXQoZGF0YS5rZXksIGRhdGEuc3RyaW5nID8gcmVzcG9uc2VbZGF0YS5rZXldIDogSlNPTi5zdHJpbmdpZnkocmVzcG9uc2VbZGF0YS5rZXldKSkudGhlbigpO1xuICAgICAgICAgIGlmIChkYXRhLmtleSA9PT0gJ2xvY2FsZScpIHtcbiAgICAgICAgICAgIHRoaXMudHJhbnNsYXRlLmdldFRyYW5zbGF0aW9uKHJlc3BvbnNlW2RhdGEua2V5XSkuc3Vic2NyaWJlKChsYW5nOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy50cmFuc2xhdGUudXNlKHJlc3BvbnNlW2RhdGEua2V5XSk7XG4gICAgICAgICAgICAgIHRoaXMudHJhbnNsYXRlLnNldFRyYW5zbGF0aW9uKHJlc3BvbnNlW2RhdGEua2V5XSwgbGFuZywgdHJ1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG59XG4iXX0=