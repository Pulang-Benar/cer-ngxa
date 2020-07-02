/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuardChildService } from '@xaphira/ngxa-auth';
import { NgxaStatisticsComponent } from './ngxa-statistics.component';
import { NgxaCerStatisticsAreaPageComponent } from './area/ngxa-cer-statistics-area-page.component';
import { NgxaCerStatisticsGenderPageComponent } from './gender/ngxa-cer-statistics-gender-page.component';
import { NgxaCerStatisticsPeriodePageComponent } from './periode/ngxa-cer-statistics-periode-page.component';
var ɵ0 = {
    code: '#STATISTICS-AREA-PAGE',
}, ɵ1 = {
    code: '#STATISTICS-GENDER-PAGE',
}, ɵ2 = {
    code: '#STATISTICS-PERIODE-PAGE',
};
/** @type {?} */
var routes = [{
        path: '',
        component: NgxaStatisticsComponent,
        canActivateChild: [AuthGuardChildService],
        children: [
            {
                path: 'area',
                component: NgxaCerStatisticsAreaPageComponent,
                data: ɵ0,
            },
            {
                path: 'gender',
                component: NgxaCerStatisticsGenderPageComponent,
                data: ɵ1,
            },
            {
                path: 'periode',
                component: NgxaCerStatisticsPeriodePageComponent,
                data: ɵ2,
            },
        ],
    }];
var NgxaCerStatisticsRoutingModule = /** @class */ (function () {
    function NgxaCerStatisticsRoutingModule() {
    }
    NgxaCerStatisticsRoutingModule.decorators = [
        { type: NgModule, args: [{
                    imports: [RouterModule.forChild(routes)],
                    exports: [RouterModule],
                },] }
    ];
    return NgxaCerStatisticsRoutingModule;
}());
export { NgxaCerStatisticsRoutingModule };
export { ɵ0, ɵ1, ɵ2 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4YS1jZXItc3RhdGlzdGljcy1yb3V0aW5nLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B4YXBoaXJhL25neGEtY2VyLyIsInNvdXJjZXMiOlsibGliL3N0YXRpc3RpY3Mvbmd4YS1jZXItc3RhdGlzdGljcy1yb3V0aW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFVLE1BQU0saUJBQWlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDM0QsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDdEUsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDcEcsT0FBTyxFQUFFLG9DQUFvQyxFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDMUcsT0FBTyxFQUFFLHFDQUFxQyxFQUFFLE1BQU0sc0RBQXNELENBQUM7U0FVakc7SUFDSixJQUFJLEVBQUUsdUJBQXVCO0NBQzlCLE9BS0s7SUFDSixJQUFJLEVBQUUseUJBQXlCO0NBQ2hDLE9BS0s7SUFDSixJQUFJLEVBQUUsMEJBQTBCO0NBQ2pDOztJQXhCRCxNQUFNLEdBQVcsQ0FBQztRQUN0QixJQUFJLEVBQUUsRUFBRTtRQUNSLFNBQVMsRUFBRSx1QkFBdUI7UUFDbEMsZ0JBQWdCLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztRQUN6QyxRQUFRLEVBQUU7WUFDUjtnQkFDRSxJQUFJLEVBQUUsTUFBTTtnQkFDWixTQUFTLEVBQUUsa0NBQWtDO2dCQUM3QyxJQUFJLElBRUg7YUFDRjtZQUNEO2dCQUNFLElBQUksRUFBRSxRQUFRO2dCQUNkLFNBQVMsRUFBRSxvQ0FBb0M7Z0JBQy9DLElBQUksSUFFSDthQUNGO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsU0FBUyxFQUFFLHFDQUFxQztnQkFDaEQsSUFBSSxJQUVIO2FBQ0Y7U0FDRjtLQUNGLENBQUM7QUFFRjtJQUFBO0lBS0EsQ0FBQzs7Z0JBTEEsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3hDLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztpQkFDeEI7O0lBRUQscUNBQUM7Q0FBQSxBQUxELElBS0M7U0FEWSw4QkFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQXV0aEd1YXJkQ2hpbGRTZXJ2aWNlIH0gZnJvbSAnQHhhcGhpcmEvbmd4YS1hdXRoJztcbmltcG9ydCB7IE5neGFTdGF0aXN0aWNzQ29tcG9uZW50IH0gZnJvbSAnLi9uZ3hhLXN0YXRpc3RpY3MuY29tcG9uZW50JztcbmltcG9ydCB7IE5neGFDZXJTdGF0aXN0aWNzQXJlYVBhZ2VDb21wb25lbnQgfSBmcm9tICcuL2FyZWEvbmd4YS1jZXItc3RhdGlzdGljcy1hcmVhLXBhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IE5neGFDZXJTdGF0aXN0aWNzR2VuZGVyUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vZ2VuZGVyL25neGEtY2VyLXN0YXRpc3RpY3MtZ2VuZGVyLXBhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IE5neGFDZXJTdGF0aXN0aWNzUGVyaW9kZVBhZ2VDb21wb25lbnQgfSBmcm9tICcuL3BlcmlvZGUvbmd4YS1jZXItc3RhdGlzdGljcy1wZXJpb2RlLXBhZ2UuY29tcG9uZW50JztcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbe1xuICBwYXRoOiAnJyxcbiAgY29tcG9uZW50OiBOZ3hhU3RhdGlzdGljc0NvbXBvbmVudCxcbiAgY2FuQWN0aXZhdGVDaGlsZDogW0F1dGhHdWFyZENoaWxkU2VydmljZV0sXG4gIGNoaWxkcmVuOiBbXG4gICAge1xuICAgICAgcGF0aDogJ2FyZWEnLFxuICAgICAgY29tcG9uZW50OiBOZ3hhQ2VyU3RhdGlzdGljc0FyZWFQYWdlQ29tcG9uZW50LFxuICAgICAgZGF0YToge1xuICAgICAgICBjb2RlOiAnI1NUQVRJU1RJQ1MtQVJFQS1QQUdFJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICBwYXRoOiAnZ2VuZGVyJyxcbiAgICAgIGNvbXBvbmVudDogTmd4YUNlclN0YXRpc3RpY3NHZW5kZXJQYWdlQ29tcG9uZW50LFxuICAgICAgZGF0YToge1xuICAgICAgICBjb2RlOiAnI1NUQVRJU1RJQ1MtR0VOREVSLVBBR0UnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhdGg6ICdwZXJpb2RlJyxcbiAgICAgIGNvbXBvbmVudDogTmd4YUNlclN0YXRpc3RpY3NQZXJpb2RlUGFnZUNvbXBvbmVudCxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgY29kZTogJyNTVEFUSVNUSUNTLVBFUklPREUtUEFHRScsXG4gICAgICB9LFxuICAgIH0sXG4gIF0sXG59XTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1JvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcbiAgZXhwb3J0czogW1JvdXRlck1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIE5neGFDZXJTdGF0aXN0aWNzUm91dGluZ01vZHVsZSB7XG59XG4iXX0=