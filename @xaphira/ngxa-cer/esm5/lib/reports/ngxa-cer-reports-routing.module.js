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
var ɵ0 = {
    code: '#EMERGENCY-REPORTS-PAGE',
}, ɵ1 = {
    code: '#EMERGENCY-REPORTS-PAGE',
}, ɵ2 = {
    code: '#FAKE-REPORTS-PAGE',
};
/** @type {?} */
var routes = [{
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
var NgxaCerReportsRoutingModule = /** @class */ (function () {
    function NgxaCerReportsRoutingModule() {
    }
    NgxaCerReportsRoutingModule.decorators = [
        { type: NgModule, args: [{
                    imports: [RouterModule.forChild(routes)],
                    exports: [RouterModule],
                },] }
    ];
    return NgxaCerReportsRoutingModule;
}());
export { NgxaCerReportsRoutingModule };
export { ɵ0, ɵ1, ɵ2 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4YS1jZXItcmVwb3J0cy1yb3V0aW5nLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B4YXBoaXJhL25neGEtY2VyLyIsInNvdXJjZXMiOlsibGliL3JlcG9ydHMvbmd4YS1jZXItcmVwb3J0cy1yb3V0aW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFVLE1BQU0saUJBQWlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDM0QsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDdkUsT0FBTyxFQUFFLHFDQUFxQyxFQUFFLE1BQU0sNkRBQTZELENBQUM7QUFDcEgsT0FBTyxFQUNMLG1DQUFtQyxHQUNwQyxNQUFNLDREQUE0RCxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO1NBVXpGO0lBQ0osSUFBSSxFQUFFLHlCQUF5QjtDQUNoQyxPQUtLO0lBQ0osSUFBSSxFQUFFLHlCQUF5QjtDQUNoQyxPQUtLO0lBQ0osSUFBSSxFQUFFLG9CQUFvQjtDQUMzQjs7SUF4QkQsTUFBTSxHQUFXLENBQUM7UUFDdEIsSUFBSSxFQUFFLEVBQUU7UUFDUixTQUFTLEVBQUUsdUJBQXVCO1FBQ2xDLGdCQUFnQixFQUFFLENBQUMscUJBQXFCLENBQUM7UUFDekMsUUFBUSxFQUFFO1lBQ1I7Z0JBQ0UsSUFBSSxFQUFFLFdBQVc7Z0JBQ2pCLFNBQVMsRUFBRSxxQ0FBcUM7Z0JBQ2hELElBQUksSUFFSDthQUNGO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLGtCQUFrQjtnQkFDeEIsU0FBUyxFQUFFLG1DQUFtQztnQkFDOUMsSUFBSSxJQUVIO2FBQ0Y7WUFDRDtnQkFDRSxJQUFJLEVBQUUsTUFBTTtnQkFDWixTQUFTLEVBQUUsZ0NBQWdDO2dCQUMzQyxJQUFJLElBRUg7YUFDRjtTQUNGO0tBQ0YsQ0FBQztBQUVGO0lBQUE7SUFLQSxDQUFDOztnQkFMQSxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDeEMsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2lCQUN4Qjs7SUFFRCxrQ0FBQztDQUFBLEFBTEQsSUFLQztTQURZLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBdXRoR3VhcmRDaGlsZFNlcnZpY2UgfSBmcm9tICdAeGFwaGlyYS9uZ3hhLWF1dGgnO1xuaW1wb3J0IHsgTmd4YUNlclJlcG9ydHNDb21wb25lbnQgfSBmcm9tICcuL25neGEtY2VyLXJlcG9ydHMuY29tcG9uZW50JztcbmltcG9ydCB7IE5neGFSZXBvcnRzRW1lcmdlbmN5TGlzdFBhZ2VDb21wb25lbnQgfSBmcm9tICcuL2VtZXJnZW5jeS9saXN0L25neGEtcmVwb3J0cy1lbWVyZ2VuY3ktbGlzdC1wYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQge1xuICBOZ3hhUmVwb3J0c0VtZXJnZW5jeURldGFpbENvbXBvbmVudCxcbn0gZnJvbSAnLi9lbWVyZ2VuY3kvZGV0YWlsL25neGEtcmVwb3J0cy1lbWVyZ2VuY3ktZGV0YWlsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ3hhUmVwb3J0c0Zha2VMaXN0UGFnZUNvbXBvbmVudCB9IGZyb20gJy4vZmFrZS9saXN0L25neGEtcmVwb3J0cy1mYWtlLWxpc3QtcGFnZS5jb21wb25lbnQnO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFt7XG4gIHBhdGg6ICcnLFxuICBjb21wb25lbnQ6IE5neGFDZXJSZXBvcnRzQ29tcG9uZW50LFxuICBjYW5BY3RpdmF0ZUNoaWxkOiBbQXV0aEd1YXJkQ2hpbGRTZXJ2aWNlXSxcbiAgY2hpbGRyZW46IFtcbiAgICB7XG4gICAgICBwYXRoOiAnZW1lcmdlbmN5JyxcbiAgICAgIGNvbXBvbmVudDogTmd4YVJlcG9ydHNFbWVyZ2VuY3lMaXN0UGFnZUNvbXBvbmVudCxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgY29kZTogJyNFTUVSR0VOQ1ktUkVQT1JUUy1QQUdFJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICBwYXRoOiAnZW1lcmdlbmN5L2RldGFpbCcsXG4gICAgICBjb21wb25lbnQ6IE5neGFSZXBvcnRzRW1lcmdlbmN5RGV0YWlsQ29tcG9uZW50LFxuICAgICAgZGF0YToge1xuICAgICAgICBjb2RlOiAnI0VNRVJHRU5DWS1SRVBPUlRTLVBBR0UnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhdGg6ICdmYWtlJyxcbiAgICAgIGNvbXBvbmVudDogTmd4YVJlcG9ydHNGYWtlTGlzdFBhZ2VDb21wb25lbnQsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGNvZGU6ICcjRkFLRS1SRVBPUlRTLVBBR0UnLFxuICAgICAgfSxcbiAgICB9LFxuICBdLFxufV07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXG4gIGV4cG9ydHM6IFtSb3V0ZXJNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBOZ3hhQ2VyUmVwb3J0c1JvdXRpbmdNb2R1bGUge1xufVxuIl19