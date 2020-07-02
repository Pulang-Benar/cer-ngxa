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
var ɵ0 = {
    code: '#DASHBOARD-PAGE',
}, ɵ1 = {
    code: '#DASHBOARD-PAGE',
};
/** @type {?} */
var routes = [{
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
var NgxaCerDashboardRoutingModule = /** @class */ (function () {
    function NgxaCerDashboardRoutingModule() {
    }
    NgxaCerDashboardRoutingModule.decorators = [
        { type: NgModule, args: [{
                    imports: [RouterModule.forChild(routes)],
                    exports: [RouterModule],
                },] }
    ];
    return NgxaCerDashboardRoutingModule;
}());
export { NgxaCerDashboardRoutingModule };
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4YS1jZXItZGFzaGJvYXJkLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHhhcGhpcmEvbmd4YS1jZXIvIiwic291cmNlcyI6WyJsaWIvZGFzaGJvYXJkL25neGEtY2VyLWRhc2hib2FyZC1yb3V0aW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFVLE1BQU0saUJBQWlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDM0QsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDcEUsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDakcsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sMERBQTBELENBQUM7U0FVaEc7SUFDSixJQUFJLEVBQUUsaUJBQWlCO0NBQ3hCLE9BS0s7SUFDSixJQUFJLEVBQUUsaUJBQWlCO0NBQ3hCOztJQWpCRCxNQUFNLEdBQVcsQ0FBQztRQUN0QixJQUFJLEVBQUUsRUFBRTtRQUNSLFNBQVMsRUFBRSxzQkFBc0I7UUFDakMsZ0JBQWdCLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztRQUN6QyxRQUFRLEVBQUU7WUFDUjtnQkFDRSxJQUFJLEVBQUUsRUFBRTtnQkFDUixTQUFTLEVBQUUsOEJBQThCO2dCQUN6QyxJQUFJLElBRUg7YUFDRjtZQUNEO2dCQUNFLElBQUksRUFBRSxlQUFlO2dCQUNyQixTQUFTLEVBQUUsZ0NBQWdDO2dCQUMzQyxJQUFJLElBRUg7YUFDRjtTQUNGO0tBQ0YsQ0FBQztBQUVGO0lBQUE7SUFLQSxDQUFDOztnQkFMQSxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDeEMsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2lCQUN4Qjs7SUFFRCxvQ0FBQztDQUFBLEFBTEQsSUFLQztTQURZLDZCQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBdXRoR3VhcmRDaGlsZFNlcnZpY2UgfSBmcm9tICdAeGFwaGlyYS9uZ3hhLWF1dGgnO1xuaW1wb3J0IHsgTmd4YURhc2hib2FyZENvbXBvbmVudCB9IGZyb20gJy4vbmd4YS1kYXNoYm9hcmQuY29tcG9uZW50JztcbmltcG9ydCB7IE5neGFDZXJNb25pdG9yaW5nUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vbW9uaXRvcmluZy9uZ3hhLWNlci1tb25pdG9yaW5nLXBhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IE5neGFDZXJNb25pdG9yaW5nRGV0YWlsQ29tcG9uZW50IH0gZnJvbSAnLi9tb25pdG9yaW5nL2RldGFpbC9uZ3hhLWNlci1tb25pdG9yaW5nLWRldGFpbC5jb21wb25lbnQnO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFt7XG4gIHBhdGg6ICcnLFxuICBjb21wb25lbnQ6IE5neGFEYXNoYm9hcmRDb21wb25lbnQsXG4gIGNhbkFjdGl2YXRlQ2hpbGQ6IFtBdXRoR3VhcmRDaGlsZFNlcnZpY2VdLFxuICBjaGlsZHJlbjogW1xuICAgIHtcbiAgICAgIHBhdGg6ICcnLFxuICAgICAgY29tcG9uZW50OiBOZ3hhQ2VyTW9uaXRvcmluZ1BhZ2VDb21wb25lbnQsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGNvZGU6ICcjREFTSEJPQVJELVBBR0UnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhdGg6ICdkZXRhaWxzLzpjb2RlJyxcbiAgICAgIGNvbXBvbmVudDogTmd4YUNlck1vbml0b3JpbmdEZXRhaWxDb21wb25lbnQsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGNvZGU6ICcjREFTSEJPQVJELVBBR0UnLFxuICAgICAgfSxcbiAgICB9LFxuICBdLFxufV07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXG4gIGV4cG9ydHM6IFtSb3V0ZXJNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBOZ3hhQ2VyRGFzaGJvYXJkUm91dGluZ01vZHVsZSB7XG59XG4iXX0=