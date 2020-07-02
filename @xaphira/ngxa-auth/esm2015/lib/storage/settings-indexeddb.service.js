/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Injector } from '@angular/core';
import { IndexedDBService } from '@xaphira/ngxa-storage';
import { oauthInfoModels, TypeDataOauth } from '@xaphira/shared';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export class SettingsIndexedDBService extends IndexedDBService {
    /**
     * @param {?} injector
     */
    constructor(injector) {
        super(injector, 'xa-core', 1, '#xa-settings');
        this.translate = injector.get(TranslateService);
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
                if (data.type === TypeDataOauth.SETTINGS) {
                    this.put(data.key, data.string ? response[data.key] : JSON.stringify(response[data.key])).then();
                    if (data.key === 'locale') {
                        this.translate.getTranslation(response[data.key]).subscribe((/**
                         * @param {?} lang
                         * @return {?}
                         */
                        (lang) => {
                            this.translate.use(response[data.key]);
                            this.translate.setTranslation(response[data.key], lang, true);
                        }));
                    }
                }
            }
        }));
    }
}
SettingsIndexedDBService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
SettingsIndexedDBService.ctorParameters = () => [
    { type: Injector }
];
/** @nocollapse */ SettingsIndexedDBService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function SettingsIndexedDBService_Factory() { return new SettingsIndexedDBService(i0.ɵɵinject(i0.INJECTOR)); }, token: SettingsIndexedDBService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    SettingsIndexedDBService.prototype.translate;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3MtaW5kZXhlZGRiLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AeGFwaGlyYS9uZ3hhLWF1dGgvIiwic291cmNlcyI6WyJsaWIvc3RvcmFnZS9zZXR0aW5ncy1pbmRleGVkZGIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDekQsT0FBTyxFQUFFLGVBQWUsRUFBMkIsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDMUYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7O0FBSXZELE1BQU0sT0FBTyx3QkFBeUIsU0FBUSxnQkFBNkI7Ozs7SUFJekUsWUFBWSxRQUFrQjtRQUM1QixLQUFLLENBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDbEQsQ0FBQzs7Ozs7SUFFTSxZQUFZLENBQUMsUUFBYTtRQUMvQixlQUFlLENBQUMsT0FBTzs7OztRQUFDLElBQUksQ0FBQyxFQUFFO1lBQzdCLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDdEIsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLGFBQWEsQ0FBQyxRQUFRLEVBQUU7b0JBQ3hDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO29CQUNqRyxJQUFJLElBQUksQ0FBQyxHQUFHLEtBQUssUUFBUSxFQUFFO3dCQUN6QixJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsU0FBUzs7Ozt3QkFBQyxDQUFDLElBQVMsRUFBRSxFQUFFOzRCQUN4RSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7NEJBQ3ZDLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO3dCQUNoRSxDQUFDLEVBQUMsQ0FBQztxQkFDSjtpQkFDRjthQUNGO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7WUF4QkYsVUFBVSxTQUFDLEVBQUMsVUFBVSxFQUFHLE1BQU0sRUFBQzs7OztZQU5aLFFBQVE7Ozs7Ozs7O0lBUzNCLDZDQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbmRleGVkREJTZXJ2aWNlIH0gZnJvbSAnQHhhcGhpcmEvbmd4YS1zdG9yYWdlJztcbmltcG9ydCB7IG9hdXRoSW5mb01vZGVscywgSW5kZXhlZERCRmFjdG9yeVNlcnZpY2UsIFR5cGVEYXRhT2F1dGggfSBmcm9tICdAeGFwaGlyYS9zaGFyZWQnO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuaW1wb3J0IHsgU2V0dGluZ3NJREIgfSBmcm9tICcuLi9tb2RlbHMvc2V0dGluZ3Muc2NoZW1hJztcblxuQEluamVjdGFibGUoe3Byb3ZpZGVkSW4gOiAncm9vdCd9KVxuZXhwb3J0IGNsYXNzIFNldHRpbmdzSW5kZXhlZERCU2VydmljZSBleHRlbmRzIEluZGV4ZWREQlNlcnZpY2U8U2V0dGluZ3NJREI+IGltcGxlbWVudHMgSW5kZXhlZERCRmFjdG9yeVNlcnZpY2Uge1xuXG4gIHByaXZhdGUgdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlO1xuXG4gIGNvbnN0cnVjdG9yKGluamVjdG9yOiBJbmplY3Rvcikge1xuICAgIHN1cGVyKGluamVjdG9yLCAneGEtY29yZScsIDEsICcjeGEtc2V0dGluZ3MnKTtcbiAgICB0aGlzLnRyYW5zbGF0ZSA9IGluamVjdG9yLmdldChUcmFuc2xhdGVTZXJ2aWNlKTtcbiAgfVxuXG4gIHB1YmxpYyBsb2dpblN0b3JhZ2UocmVzcG9uc2U6IGFueSk6IHZvaWQge1xuICAgIG9hdXRoSW5mb01vZGVscy5mb3JFYWNoKGRhdGEgPT4ge1xuICAgICAgaWYgKHJlc3BvbnNlW2RhdGEua2V5XSkge1xuICAgICAgICBpZiAoZGF0YS50eXBlID09PSBUeXBlRGF0YU9hdXRoLlNFVFRJTkdTKSB7XG4gICAgICAgICAgdGhpcy5wdXQoZGF0YS5rZXksIGRhdGEuc3RyaW5nID8gcmVzcG9uc2VbZGF0YS5rZXldIDogSlNPTi5zdHJpbmdpZnkocmVzcG9uc2VbZGF0YS5rZXldKSkudGhlbigpO1xuICAgICAgICAgIGlmIChkYXRhLmtleSA9PT0gJ2xvY2FsZScpIHtcbiAgICAgICAgICAgIHRoaXMudHJhbnNsYXRlLmdldFRyYW5zbGF0aW9uKHJlc3BvbnNlW2RhdGEua2V5XSkuc3Vic2NyaWJlKChsYW5nOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy50cmFuc2xhdGUudXNlKHJlc3BvbnNlW2RhdGEua2V5XSk7XG4gICAgICAgICAgICAgIHRoaXMudHJhbnNsYXRlLnNldFRyYW5zbGF0aW9uKHJlc3BvbnNlW2RhdGEua2V5XSwgbGFuZywgdHJ1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG59XG4iXX0=