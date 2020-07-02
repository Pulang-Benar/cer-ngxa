/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorageMaskService } from './services/storage-mask.service';
import { STORAGE_SERVICE } from './providers/storage.provider';
/** @type {?} */
export var STORAGE_PROVIDERS = [
    { provide: STORAGE_SERVICE, useClass: StorageMaskService },
];
var NgxaStorageModule = /** @class */ (function () {
    function NgxaStorageModule() {
    }
    /**
     * @return {?}
     */
    NgxaStorageModule.forRoot = /**
     * @return {?}
     */
    function () {
        return (/** @type {?} */ ({
            ngModule: NgxaStorageModule,
            providers: tslib_1.__spread(STORAGE_PROVIDERS),
        }));
    };
    NgxaStorageModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                    ],
                    exports: [],
                    declarations: [],
                },] }
    ];
    return NgxaStorageModule;
}());
export { NgxaStorageModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4YS1zdG9yYWdlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B4YXBoaXJhL25neGEtc3RvcmFnZS8iLCJzb3VyY2VzIjpbImxpYi9uZ3hhLXN0b3JhZ2UubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7QUFFL0QsTUFBTSxLQUFPLGlCQUFpQixHQUFHO0lBQy9CLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUUsa0JBQWtCLEVBQUM7Q0FDMUQ7QUFFRDtJQUFBO0lBaUJBLENBQUM7Ozs7SUFSUSx5QkFBTzs7O0lBQWQ7UUFDRSxPQUFPLG1CQUFxQjtZQUMxQixRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFNBQVMsbUJBQ0osaUJBQWlCLENBQ3JCO1NBQ0YsRUFBQSxDQUFDO0lBQ0osQ0FBQzs7Z0JBaEJGLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTtxQkFDYjtvQkFDRCxPQUFPLEVBQUUsRUFBRTtvQkFDWCxZQUFZLEVBQUUsRUFBRTtpQkFDakI7O0lBV0Qsd0JBQUM7Q0FBQSxBQWpCRCxJQWlCQztTQVZZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgU3RvcmFnZU1hc2tTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9zdG9yYWdlLW1hc2suc2VydmljZSc7XG5pbXBvcnQgeyBTVE9SQUdFX1NFUlZJQ0UgfSBmcm9tICcuL3Byb3ZpZGVycy9zdG9yYWdlLnByb3ZpZGVyJztcblxuZXhwb3J0IGNvbnN0IFNUT1JBR0VfUFJPVklERVJTID0gW1xuICB7IHByb3ZpZGU6IFNUT1JBR0VfU0VSVklDRSwgdXNlQ2xhc3M6IFN0b3JhZ2VNYXNrU2VydmljZX0sXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICBdLFxuICBleHBvcnRzOiBbXSxcbiAgZGVjbGFyYXRpb25zOiBbXSxcbn0pXG5leHBvcnQgY2xhc3MgTmd4YVN0b3JhZ2VNb2R1bGUge1xuXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiA8TW9kdWxlV2l0aFByb3ZpZGVycz57XG4gICAgICBuZ01vZHVsZTogTmd4YVN0b3JhZ2VNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgLi4uU1RPUkFHRV9QUk9WSURFUlMsXG4gICAgICBdLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==