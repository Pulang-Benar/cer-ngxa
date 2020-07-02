/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorageMaskService } from './services/storage-mask.service';
import { STORAGE_SERVICE } from './providers/storage.provider';
/** @type {?} */
export const STORAGE_PROVIDERS = [
    { provide: STORAGE_SERVICE, useClass: StorageMaskService },
];
export class NgxaStorageModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return (/** @type {?} */ ({
            ngModule: NgxaStorageModule,
            providers: [
                ...STORAGE_PROVIDERS,
            ],
        }));
    }
}
NgxaStorageModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                ],
                exports: [],
                declarations: [],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4YS1zdG9yYWdlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B4YXBoaXJhL25neGEtc3RvcmFnZS8iLCJzb3VyY2VzIjpbImxpYi9uZ3hhLXN0b3JhZ2UubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDckUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDhCQUE4QixDQUFDOztBQUUvRCxNQUFNLE9BQU8saUJBQWlCLEdBQUc7SUFDL0IsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFFBQVEsRUFBRSxrQkFBa0IsRUFBQztDQUMxRDtBQVNELE1BQU0sT0FBTyxpQkFBaUI7Ozs7SUFFNUIsTUFBTSxDQUFDLE9BQU87UUFDWixPQUFPLG1CQUFxQjtZQUMxQixRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFNBQVMsRUFBRTtnQkFDVCxHQUFHLGlCQUFpQjthQUNyQjtTQUNGLEVBQUEsQ0FBQztJQUNKLENBQUM7OztZQWhCRixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7aUJBQ2I7Z0JBQ0QsT0FBTyxFQUFFLEVBQUU7Z0JBQ1gsWUFBWSxFQUFFLEVBQUU7YUFDakIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFN0b3JhZ2VNYXNrU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvc3RvcmFnZS1tYXNrLnNlcnZpY2UnO1xuaW1wb3J0IHsgU1RPUkFHRV9TRVJWSUNFIH0gZnJvbSAnLi9wcm92aWRlcnMvc3RvcmFnZS5wcm92aWRlcic7XG5cbmV4cG9ydCBjb25zdCBTVE9SQUdFX1BST1ZJREVSUyA9IFtcbiAgeyBwcm92aWRlOiBTVE9SQUdFX1NFUlZJQ0UsIHVzZUNsYXNzOiBTdG9yYWdlTWFza1NlcnZpY2V9LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgXSxcbiAgZXhwb3J0czogW10sXG4gIGRlY2xhcmF0aW9uczogW10sXG59KVxuZXhwb3J0IGNsYXNzIE5neGFTdG9yYWdlTW9kdWxlIHtcblxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4gPE1vZHVsZVdpdGhQcm92aWRlcnM+e1xuICAgICAgbmdNb2R1bGU6IE5neGFTdG9yYWdlTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIC4uLlNUT1JBR0VfUFJPVklERVJTLFxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG4iXX0=