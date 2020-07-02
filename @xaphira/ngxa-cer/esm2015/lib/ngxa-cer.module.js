/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PANIC_INDEXED_DB, PANIC } from '@xaphira/shared';
import { PanicIndexedDBService } from './storage/panic-indexeddb.service';
import { PanicService } from './services/panic.service';
/** @type {?} */
const CER_PROVIDERS = [
    { provide: PANIC_INDEXED_DB, useClass: PanicIndexedDBService },
    { provide: PANIC, useClass: PanicService },
    PanicIndexedDBService,
    PanicService,
];
export class NgxaCerModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return (/** @type {?} */ ({
            ngModule: NgxaCerModule,
            providers: [
                ...CER_PROVIDERS,
            ],
        }));
    }
}
NgxaCerModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                ],
                exports: [],
                declarations: [],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4YS1jZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHhhcGhpcmEvbmd4YS1jZXIvIiwic291cmNlcyI6WyJsaWIvbmd4YS1jZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLEtBQUssRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzFELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7TUFFbEQsYUFBYSxHQUFHO0lBQ3BCLEVBQUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxxQkFBcUIsRUFBRTtJQUM5RCxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRTtJQUMxQyxxQkFBcUI7SUFDckIsWUFBWTtDQUNiO0FBU0QsTUFBTSxPQUFPLGFBQWE7Ozs7SUFFeEIsTUFBTSxDQUFDLE9BQU87UUFDWixPQUFPLG1CQUFxQjtZQUMxQixRQUFRLEVBQUUsYUFBYTtZQUN2QixTQUFTLEVBQUU7Z0JBQ1QsR0FBRyxhQUFhO2FBQ2pCO1NBQ0YsRUFBQSxDQUFDO0lBQ0osQ0FBQzs7O1lBaEJGLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtpQkFDYjtnQkFDRCxPQUFPLEVBQUUsRUFBRTtnQkFDWCxZQUFZLEVBQUUsRUFBRTthQUNqQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUEFOSUNfSU5ERVhFRF9EQiwgUEFOSUMgfSBmcm9tICdAeGFwaGlyYS9zaGFyZWQnO1xuaW1wb3J0IHsgUGFuaWNJbmRleGVkREJTZXJ2aWNlIH0gZnJvbSAnLi9zdG9yYWdlL3BhbmljLWluZGV4ZWRkYi5zZXJ2aWNlJztcbmltcG9ydCB7IFBhbmljU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvcGFuaWMuc2VydmljZSc7XG5cbmNvbnN0IENFUl9QUk9WSURFUlMgPSBbXG4gIHsgcHJvdmlkZTogUEFOSUNfSU5ERVhFRF9EQiwgdXNlQ2xhc3M6IFBhbmljSW5kZXhlZERCU2VydmljZSB9LFxuICB7IHByb3ZpZGU6IFBBTklDLCB1c2VDbGFzczogUGFuaWNTZXJ2aWNlIH0sXG4gIFBhbmljSW5kZXhlZERCU2VydmljZSxcbiAgUGFuaWNTZXJ2aWNlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgXSxcbiAgZXhwb3J0czogW10sXG4gIGRlY2xhcmF0aW9uczogW10sXG59KVxuZXhwb3J0IGNsYXNzIE5neGFDZXJNb2R1bGUge1xuXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiA8TW9kdWxlV2l0aFByb3ZpZGVycz57XG4gICAgICBuZ01vZHVsZTogTmd4YUNlck1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAuLi5DRVJfUFJPVklERVJTLFxuICAgICAgXSxcbiAgICB9O1xuICB9XG5cbn1cbiJdfQ==