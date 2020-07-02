/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_SERVICE } from './providers/http.provider';
import { HttpCommonService } from './services/http-common.service';
/** @type {?} */
export const SHARED_PROVIDERS = [
    { provide: HTTP_SERVICE, useClass: HttpCommonService },
];
export class SharedModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return (/** @type {?} */ ({
            ngModule: SharedModule,
            providers: [
                ...SHARED_PROVIDERS,
            ],
        }));
    }
}
SharedModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                ],
                exports: [],
                declarations: [],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B4YXBoaXJhL3NoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOztBQUVuRSxNQUFNLE9BQU8sZ0JBQWdCLEdBQUc7SUFDOUIsRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxpQkFBaUIsRUFBQztDQUN0RDtBQVNELE1BQU0sT0FBTyxZQUFZOzs7O0lBRXZCLE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTyxtQkFBcUI7WUFDMUIsUUFBUSxFQUFFLFlBQVk7WUFDdEIsU0FBUyxFQUFFO2dCQUNULEdBQUcsZ0JBQWdCO2FBQ3BCO1NBQ0YsRUFBQSxDQUFDO0lBQ0osQ0FBQzs7O1lBaEJGLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtpQkFDYjtnQkFDRCxPQUFPLEVBQUUsRUFBRTtnQkFDWCxZQUFZLEVBQUUsRUFBRTthQUNqQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSFRUUF9TRVJWSUNFIH0gZnJvbSAnLi9wcm92aWRlcnMvaHR0cC5wcm92aWRlcic7XG5pbXBvcnQgeyBIdHRwQ29tbW9uU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvaHR0cC1jb21tb24uc2VydmljZSc7XG5cbmV4cG9ydCBjb25zdCBTSEFSRURfUFJPVklERVJTID0gW1xuICB7IHByb3ZpZGU6IEhUVFBfU0VSVklDRSwgdXNlQ2xhc3M6IEh0dHBDb21tb25TZXJ2aWNlfSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gIF0sXG4gIGV4cG9ydHM6IFtdLFxuICBkZWNsYXJhdGlvbnM6IFtdLFxufSlcbmV4cG9ydCBjbGFzcyBTaGFyZWRNb2R1bGUge1xuXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiA8TW9kdWxlV2l0aFByb3ZpZGVycz57XG4gICAgICBuZ01vZHVsZTogU2hhcmVkTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIC4uLlNIQVJFRF9QUk9WSURFUlMsXG4gICAgICBdLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==