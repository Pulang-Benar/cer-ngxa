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
const ɵ0 = {
    code: '#STATISTICS-AREA-PAGE',
}, ɵ1 = {
    code: '#STATISTICS-GENDER-PAGE',
}, ɵ2 = {
    code: '#STATISTICS-PERIODE-PAGE',
};
/** @type {?} */
const routes = [{
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
export class NgxaCerStatisticsRoutingModule {
}
NgxaCerStatisticsRoutingModule.decorators = [
    { type: NgModule, args: [{
                imports: [RouterModule.forChild(routes)],
                exports: [RouterModule],
            },] }
];
export { ɵ0, ɵ1, ɵ2 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4YS1jZXItc3RhdGlzdGljcy1yb3V0aW5nLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B4YXBoaXJhL25neGEtY2VyLyIsInNvdXJjZXMiOlsibGliL3N0YXRpc3RpY3Mvbmd4YS1jZXItc3RhdGlzdGljcy1yb3V0aW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFVLE1BQU0saUJBQWlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDM0QsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDdEUsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDcEcsT0FBTyxFQUFFLG9DQUFvQyxFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDMUcsT0FBTyxFQUFFLHFDQUFxQyxFQUFFLE1BQU0sc0RBQXNELENBQUM7V0FVakc7SUFDSixJQUFJLEVBQUUsdUJBQXVCO0NBQzlCLE9BS0s7SUFDSixJQUFJLEVBQUUseUJBQXlCO0NBQ2hDLE9BS0s7SUFDSixJQUFJLEVBQUUsMEJBQTBCO0NBQ2pDOztNQXhCRCxNQUFNLEdBQVcsQ0FBQztRQUN0QixJQUFJLEVBQUUsRUFBRTtRQUNSLFNBQVMsRUFBRSx1QkFBdUI7UUFDbEMsZ0JBQWdCLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztRQUN6QyxRQUFRLEVBQUU7WUFDUjtnQkFDRSxJQUFJLEVBQUUsTUFBTTtnQkFDWixTQUFTLEVBQUUsa0NBQWtDO2dCQUM3QyxJQUFJLElBRUg7YUFDRjtZQUNEO2dCQUNFLElBQUksRUFBRSxRQUFRO2dCQUNkLFNBQVMsRUFBRSxvQ0FBb0M7Z0JBQy9DLElBQUksSUFFSDthQUNGO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsU0FBUyxFQUFFLHFDQUFxQztnQkFDaEQsSUFBSSxJQUVIO2FBQ0Y7U0FDRjtLQUNGLENBQUM7QUFNRixNQUFNLE9BQU8sOEJBQThCOzs7WUFKMUMsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3hDLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQzthQUN4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBdXRoR3VhcmRDaGlsZFNlcnZpY2UgfSBmcm9tICdAeGFwaGlyYS9uZ3hhLWF1dGgnO1xuaW1wb3J0IHsgTmd4YVN0YXRpc3RpY3NDb21wb25lbnQgfSBmcm9tICcuL25neGEtc3RhdGlzdGljcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmd4YUNlclN0YXRpc3RpY3NBcmVhUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vYXJlYS9uZ3hhLWNlci1zdGF0aXN0aWNzLWFyZWEtcGFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmd4YUNlclN0YXRpc3RpY3NHZW5kZXJQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9nZW5kZXIvbmd4YS1jZXItc3RhdGlzdGljcy1nZW5kZXItcGFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmd4YUNlclN0YXRpc3RpY3NQZXJpb2RlUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vcGVyaW9kZS9uZ3hhLWNlci1zdGF0aXN0aWNzLXBlcmlvZGUtcGFnZS5jb21wb25lbnQnO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFt7XG4gIHBhdGg6ICcnLFxuICBjb21wb25lbnQ6IE5neGFTdGF0aXN0aWNzQ29tcG9uZW50LFxuICBjYW5BY3RpdmF0ZUNoaWxkOiBbQXV0aEd1YXJkQ2hpbGRTZXJ2aWNlXSxcbiAgY2hpbGRyZW46IFtcbiAgICB7XG4gICAgICBwYXRoOiAnYXJlYScsXG4gICAgICBjb21wb25lbnQ6IE5neGFDZXJTdGF0aXN0aWNzQXJlYVBhZ2VDb21wb25lbnQsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGNvZGU6ICcjU1RBVElTVElDUy1BUkVBLVBBR0UnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhdGg6ICdnZW5kZXInLFxuICAgICAgY29tcG9uZW50OiBOZ3hhQ2VyU3RhdGlzdGljc0dlbmRlclBhZ2VDb21wb25lbnQsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGNvZGU6ICcjU1RBVElTVElDUy1HRU5ERVItUEFHRScsXG4gICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgcGF0aDogJ3BlcmlvZGUnLFxuICAgICAgY29tcG9uZW50OiBOZ3hhQ2VyU3RhdGlzdGljc1BlcmlvZGVQYWdlQ29tcG9uZW50LFxuICAgICAgZGF0YToge1xuICAgICAgICBjb2RlOiAnI1NUQVRJU1RJQ1MtUEVSSU9ERS1QQUdFJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgXSxcbn1dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxuICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgTmd4YUNlclN0YXRpc3RpY3NSb3V0aW5nTW9kdWxlIHtcbn1cbiJdfQ==