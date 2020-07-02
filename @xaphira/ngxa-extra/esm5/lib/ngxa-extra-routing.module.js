/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuardChildService } from '@xaphira/ngxa-auth';
import { ExtraComponent } from './ngxa-extra.component';
import { ProfilePageComponent } from './profile/profile-page.component';
import { SettingsPageComponent } from './settings/settings-page.component';
import { SecurityPageComponent } from './security/security-page.component';
var ɵ0 = {
    code: '#PROFILE-PAGE',
}, ɵ1 = {
    code: '#SECURITY-PAGE',
}, ɵ2 = {
    code: '#SETTINGS-PAGE',
};
/** @type {?} */
var routes = [{
        path: '',
        component: ExtraComponent,
        canActivateChild: [AuthGuardChildService],
        children: [
            {
                path: 'profile',
                component: ProfilePageComponent,
                data: ɵ0,
            },
            {
                path: 'security',
                component: SecurityPageComponent,
                data: ɵ1,
            },
            {
                path: 'settings',
                component: SettingsPageComponent,
                data: ɵ2,
            },
        ],
    }];
var NgxaExtraRoutingModule = /** @class */ (function () {
    function NgxaExtraRoutingModule() {
    }
    NgxaExtraRoutingModule.decorators = [
        { type: NgModule, args: [{
                    imports: [RouterModule.forChild(routes)],
                    exports: [RouterModule],
                },] }
    ];
    return NgxaExtraRoutingModule;
}());
export { NgxaExtraRoutingModule };
export { ɵ0, ɵ1, ɵ2 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4YS1leHRyYS1yb3V0aW5nLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B4YXBoaXJhL25neGEtZXh0cmEvIiwic291cmNlcyI6WyJsaWIvbmd4YS1leHRyYS1yb3V0aW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFVLE1BQU0saUJBQWlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDM0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO1NBVy9EO0lBQ0osSUFBSSxFQUFFLGVBQWU7Q0FDdEIsT0FLSztJQUNKLElBQUksRUFBRSxnQkFBZ0I7Q0FDdkIsT0FLSztJQUNKLElBQUksRUFBRSxnQkFBZ0I7Q0FDdkI7O0lBeEJELE1BQU0sR0FBVyxDQUFDO1FBQ3RCLElBQUksRUFBRSxFQUFFO1FBQ1IsU0FBUyxFQUFFLGNBQWM7UUFDekIsZ0JBQWdCLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztRQUN6QyxRQUFRLEVBQUU7WUFDUjtnQkFDRSxJQUFJLEVBQUUsU0FBUztnQkFDZixTQUFTLEVBQUUsb0JBQW9CO2dCQUMvQixJQUFJLElBRUg7YUFDRjtZQUNEO2dCQUNFLElBQUksRUFBRSxVQUFVO2dCQUNoQixTQUFTLEVBQUUscUJBQXFCO2dCQUNoQyxJQUFJLElBRUg7YUFDRjtZQUNEO2dCQUNFLElBQUksRUFBRSxVQUFVO2dCQUNoQixTQUFTLEVBQUUscUJBQXFCO2dCQUNoQyxJQUFJLElBRUg7YUFDRjtTQUNGO0tBQ0YsQ0FBQztBQUVGO0lBQUE7SUFLQSxDQUFDOztnQkFMQSxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDeEMsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2lCQUN4Qjs7SUFFRCw2QkFBQztDQUFBLEFBTEQsSUFLQztTQURZLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBdXRoR3VhcmRDaGlsZFNlcnZpY2UgfSBmcm9tICdAeGFwaGlyYS9uZ3hhLWF1dGgnO1xuaW1wb3J0IHsgRXh0cmFDb21wb25lbnQgfSBmcm9tICcuL25neGEtZXh0cmEuY29tcG9uZW50JztcbmltcG9ydCB7IFByb2ZpbGVQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9maWxlL3Byb2ZpbGUtcGFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2V0dGluZ3NQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9zZXR0aW5ncy9zZXR0aW5ncy1wYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZWN1cml0eVBhZ2VDb21wb25lbnQgfSBmcm9tICcuL3NlY3VyaXR5L3NlY3VyaXR5LXBhZ2UuY29tcG9uZW50JztcblxuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFt7XG4gIHBhdGg6ICcnLFxuICBjb21wb25lbnQ6IEV4dHJhQ29tcG9uZW50LFxuICBjYW5BY3RpdmF0ZUNoaWxkOiBbQXV0aEd1YXJkQ2hpbGRTZXJ2aWNlXSxcbiAgY2hpbGRyZW46IFtcbiAgICB7XG4gICAgICBwYXRoOiAncHJvZmlsZScsXG4gICAgICBjb21wb25lbnQ6IFByb2ZpbGVQYWdlQ29tcG9uZW50LFxuICAgICAgZGF0YToge1xuICAgICAgICBjb2RlOiAnI1BST0ZJTEUtUEFHRScsXG4gICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgcGF0aDogJ3NlY3VyaXR5JyxcbiAgICAgIGNvbXBvbmVudDogU2VjdXJpdHlQYWdlQ29tcG9uZW50LFxuICAgICAgZGF0YToge1xuICAgICAgICBjb2RlOiAnI1NFQ1VSSVRZLVBBR0UnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhdGg6ICdzZXR0aW5ncycsXG4gICAgICBjb21wb25lbnQ6IFNldHRpbmdzUGFnZUNvbXBvbmVudCxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgY29kZTogJyNTRVRUSU5HUy1QQUdFJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgXSxcbn1dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxuICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgTmd4YUV4dHJhUm91dGluZ01vZHVsZSB7XG59XG4iXX0=