/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuardChildService } from '@xaphira/ngxa-auth';
import { NgxaCerReportsComponent } from './ngxa-cer-reports.component';
import { NgxaReportsEmergencyListPageComponent } from './emergency/list/ngxa-reports-emergency-list-page.component';
import { NgxaReportsEmergencyDetailComponent, } from './emergency/detail/ngxa-reports-emergency-detail.component';
import { NgxaReportsFakeListPageComponent } from './fake/list/ngxa-reports-fake-list-page.component';
const ɵ0 = {
    code: '#EMERGENCY-REPORTS-PAGE',
}, ɵ1 = {
    code: '#EMERGENCY-REPORTS-PAGE',
}, ɵ2 = {
    code: '#FAKE-REPORTS-PAGE',
};
/** @type {?} */
const routes = [{
        path: '',
        component: NgxaCerReportsComponent,
        canActivateChild: [AuthGuardChildService],
        children: [
            {
                path: 'emergency',
                component: NgxaReportsEmergencyListPageComponent,
                data: ɵ0,
            },
            {
                path: 'emergency/detail',
                component: NgxaReportsEmergencyDetailComponent,
                data: ɵ1,
            },
            {
                path: 'fake',
                component: NgxaReportsFakeListPageComponent,
                data: ɵ2,
            },
        ],
    }];
export class NgxaCerReportsRoutingModule {
}
NgxaCerReportsRoutingModule.decorators = [
    { type: NgModule, args: [{
                imports: [RouterModule.forChild(routes)],
                exports: [RouterModule],
            },] }
];
export { ɵ0, ɵ1, ɵ2 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4YS1jZXItcmVwb3J0cy1yb3V0aW5nLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B4YXBoaXJhL25neGEtY2VyLyIsInNvdXJjZXMiOlsibGliL3JlcG9ydHMvbmd4YS1jZXItcmVwb3J0cy1yb3V0aW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFVLE1BQU0saUJBQWlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDM0QsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDdkUsT0FBTyxFQUFFLHFDQUFxQyxFQUFFLE1BQU0sNkRBQTZELENBQUM7QUFDcEgsT0FBTyxFQUNMLG1DQUFtQyxHQUNwQyxNQUFNLDREQUE0RCxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO1dBVXpGO0lBQ0osSUFBSSxFQUFFLHlCQUF5QjtDQUNoQyxPQUtLO0lBQ0osSUFBSSxFQUFFLHlCQUF5QjtDQUNoQyxPQUtLO0lBQ0osSUFBSSxFQUFFLG9CQUFvQjtDQUMzQjs7TUF4QkQsTUFBTSxHQUFXLENBQUM7UUFDdEIsSUFBSSxFQUFFLEVBQUU7UUFDUixTQUFTLEVBQUUsdUJBQXVCO1FBQ2xDLGdCQUFnQixFQUFFLENBQUMscUJBQXFCLENBQUM7UUFDekMsUUFBUSxFQUFFO1lBQ1I7Z0JBQ0UsSUFBSSxFQUFFLFdBQVc7Z0JBQ2pCLFNBQVMsRUFBRSxxQ0FBcUM7Z0JBQ2hELElBQUksSUFFSDthQUNGO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLGtCQUFrQjtnQkFDeEIsU0FBUyxFQUFFLG1DQUFtQztnQkFDOUMsSUFBSSxJQUVIO2FBQ0Y7WUFDRDtnQkFDRSxJQUFJLEVBQUUsTUFBTTtnQkFDWixTQUFTLEVBQUUsZ0NBQWdDO2dCQUMzQyxJQUFJLElBRUg7YUFDRjtTQUNGO0tBQ0YsQ0FBQztBQU1GLE1BQU0sT0FBTywyQkFBMkI7OztZQUp2QyxRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDeEMsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2FBQ3hCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEF1dGhHdWFyZENoaWxkU2VydmljZSB9IGZyb20gJ0B4YXBoaXJhL25neGEtYXV0aCc7XG5pbXBvcnQgeyBOZ3hhQ2VyUmVwb3J0c0NvbXBvbmVudCB9IGZyb20gJy4vbmd4YS1jZXItcmVwb3J0cy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmd4YVJlcG9ydHNFbWVyZ2VuY3lMaXN0UGFnZUNvbXBvbmVudCB9IGZyb20gJy4vZW1lcmdlbmN5L2xpc3Qvbmd4YS1yZXBvcnRzLWVtZXJnZW5jeS1saXN0LXBhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7XG4gIE5neGFSZXBvcnRzRW1lcmdlbmN5RGV0YWlsQ29tcG9uZW50LFxufSBmcm9tICcuL2VtZXJnZW5jeS9kZXRhaWwvbmd4YS1yZXBvcnRzLWVtZXJnZW5jeS1kZXRhaWwuY29tcG9uZW50JztcbmltcG9ydCB7IE5neGFSZXBvcnRzRmFrZUxpc3RQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9mYWtlL2xpc3Qvbmd4YS1yZXBvcnRzLWZha2UtbGlzdC1wYWdlLmNvbXBvbmVudCc7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW3tcbiAgcGF0aDogJycsXG4gIGNvbXBvbmVudDogTmd4YUNlclJlcG9ydHNDb21wb25lbnQsXG4gIGNhbkFjdGl2YXRlQ2hpbGQ6IFtBdXRoR3VhcmRDaGlsZFNlcnZpY2VdLFxuICBjaGlsZHJlbjogW1xuICAgIHtcbiAgICAgIHBhdGg6ICdlbWVyZ2VuY3knLFxuICAgICAgY29tcG9uZW50OiBOZ3hhUmVwb3J0c0VtZXJnZW5jeUxpc3RQYWdlQ29tcG9uZW50LFxuICAgICAgZGF0YToge1xuICAgICAgICBjb2RlOiAnI0VNRVJHRU5DWS1SRVBPUlRTLVBBR0UnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhdGg6ICdlbWVyZ2VuY3kvZGV0YWlsJyxcbiAgICAgIGNvbXBvbmVudDogTmd4YVJlcG9ydHNFbWVyZ2VuY3lEZXRhaWxDb21wb25lbnQsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGNvZGU6ICcjRU1FUkdFTkNZLVJFUE9SVFMtUEFHRScsXG4gICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgcGF0aDogJ2Zha2UnLFxuICAgICAgY29tcG9uZW50OiBOZ3hhUmVwb3J0c0Zha2VMaXN0UGFnZUNvbXBvbmVudCxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgY29kZTogJyNGQUtFLVJFUE9SVFMtUEFHRScsXG4gICAgICB9LFxuICAgIH0sXG4gIF0sXG59XTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1JvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcbiAgZXhwb3J0czogW1JvdXRlck1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIE5neGFDZXJSZXBvcnRzUm91dGluZ01vZHVsZSB7XG59XG4iXX0=