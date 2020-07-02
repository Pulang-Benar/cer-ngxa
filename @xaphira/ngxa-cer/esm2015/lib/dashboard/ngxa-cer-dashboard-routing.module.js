/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuardChildService } from '@xaphira/ngxa-auth';
import { NgxaDashboardComponent } from './ngxa-dashboard.component';
import { NgxaCerMonitoringPageComponent } from './monitoring/ngxa-cer-monitoring-page.component';
import { NgxaCerMonitoringDetailComponent } from './monitoring/detail/ngxa-cer-monitoring-detail.component';
const ɵ0 = {
    code: '#DASHBOARD-PAGE',
}, ɵ1 = {
    code: '#DASHBOARD-PAGE',
};
/** @type {?} */
const routes = [{
        path: '',
        component: NgxaDashboardComponent,
        canActivateChild: [AuthGuardChildService],
        children: [
            {
                path: '',
                component: NgxaCerMonitoringPageComponent,
                data: ɵ0,
            },
            {
                path: 'details/:code',
                component: NgxaCerMonitoringDetailComponent,
                data: ɵ1,
            },
        ],
    }];
export class NgxaCerDashboardRoutingModule {
}
NgxaCerDashboardRoutingModule.decorators = [
    { type: NgModule, args: [{
                imports: [RouterModule.forChild(routes)],
                exports: [RouterModule],
            },] }
];
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4YS1jZXItZGFzaGJvYXJkLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHhhcGhpcmEvbmd4YS1jZXIvIiwic291cmNlcyI6WyJsaWIvZGFzaGJvYXJkL25neGEtY2VyLWRhc2hib2FyZC1yb3V0aW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFVLE1BQU0saUJBQWlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDM0QsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDcEUsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDakcsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sMERBQTBELENBQUM7V0FVaEc7SUFDSixJQUFJLEVBQUUsaUJBQWlCO0NBQ3hCLE9BS0s7SUFDSixJQUFJLEVBQUUsaUJBQWlCO0NBQ3hCOztNQWpCRCxNQUFNLEdBQVcsQ0FBQztRQUN0QixJQUFJLEVBQUUsRUFBRTtRQUNSLFNBQVMsRUFBRSxzQkFBc0I7UUFDakMsZ0JBQWdCLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztRQUN6QyxRQUFRLEVBQUU7WUFDUjtnQkFDRSxJQUFJLEVBQUUsRUFBRTtnQkFDUixTQUFTLEVBQUUsOEJBQThCO2dCQUN6QyxJQUFJLElBRUg7YUFDRjtZQUNEO2dCQUNFLElBQUksRUFBRSxlQUFlO2dCQUNyQixTQUFTLEVBQUUsZ0NBQWdDO2dCQUMzQyxJQUFJLElBRUg7YUFDRjtTQUNGO0tBQ0YsQ0FBQztBQU1GLE1BQU0sT0FBTyw2QkFBNkI7OztZQUp6QyxRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDeEMsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2FBQ3hCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEF1dGhHdWFyZENoaWxkU2VydmljZSB9IGZyb20gJ0B4YXBoaXJhL25neGEtYXV0aCc7XG5pbXBvcnQgeyBOZ3hhRGFzaGJvYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9uZ3hhLWRhc2hib2FyZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmd4YUNlck1vbml0b3JpbmdQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9tb25pdG9yaW5nL25neGEtY2VyLW1vbml0b3JpbmctcGFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmd4YUNlck1vbml0b3JpbmdEZXRhaWxDb21wb25lbnQgfSBmcm9tICcuL21vbml0b3JpbmcvZGV0YWlsL25neGEtY2VyLW1vbml0b3JpbmctZGV0YWlsLmNvbXBvbmVudCc7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW3tcbiAgcGF0aDogJycsXG4gIGNvbXBvbmVudDogTmd4YURhc2hib2FyZENvbXBvbmVudCxcbiAgY2FuQWN0aXZhdGVDaGlsZDogW0F1dGhHdWFyZENoaWxkU2VydmljZV0sXG4gIGNoaWxkcmVuOiBbXG4gICAge1xuICAgICAgcGF0aDogJycsXG4gICAgICBjb21wb25lbnQ6IE5neGFDZXJNb25pdG9yaW5nUGFnZUNvbXBvbmVudCxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgY29kZTogJyNEQVNIQk9BUkQtUEFHRScsXG4gICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgcGF0aDogJ2RldGFpbHMvOmNvZGUnLFxuICAgICAgY29tcG9uZW50OiBOZ3hhQ2VyTW9uaXRvcmluZ0RldGFpbENvbXBvbmVudCxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgY29kZTogJyNEQVNIQk9BUkQtUEFHRScsXG4gICAgICB9LFxuICAgIH0sXG4gIF0sXG59XTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1JvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcbiAgZXhwb3J0czogW1JvdXRlck1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIE5neGFDZXJEYXNoYm9hcmRSb3V0aW5nTW9kdWxlIHtcbn1cbiJdfQ==