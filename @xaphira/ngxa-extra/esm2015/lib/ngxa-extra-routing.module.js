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
const ɵ0 = {
    code: '#PROFILE-PAGE',
}, ɵ1 = {
    code: '#SECURITY-PAGE',
}, ɵ2 = {
    code: '#SETTINGS-PAGE',
};
/** @type {?} */
const routes = [{
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
export class NgxaExtraRoutingModule {
}
NgxaExtraRoutingModule.decorators = [
    { type: NgModule, args: [{
                imports: [RouterModule.forChild(routes)],
                exports: [RouterModule],
            },] }
];
export { ɵ0, ɵ1, ɵ2 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4YS1leHRyYS1yb3V0aW5nLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B4YXBoaXJhL25neGEtZXh0cmEvIiwic291cmNlcyI6WyJsaWIvbmd4YS1leHRyYS1yb3V0aW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFVLE1BQU0saUJBQWlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDM0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO1dBVy9EO0lBQ0osSUFBSSxFQUFFLGVBQWU7Q0FDdEIsT0FLSztJQUNKLElBQUksRUFBRSxnQkFBZ0I7Q0FDdkIsT0FLSztJQUNKLElBQUksRUFBRSxnQkFBZ0I7Q0FDdkI7O01BeEJELE1BQU0sR0FBVyxDQUFDO1FBQ3RCLElBQUksRUFBRSxFQUFFO1FBQ1IsU0FBUyxFQUFFLGNBQWM7UUFDekIsZ0JBQWdCLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztRQUN6QyxRQUFRLEVBQUU7WUFDUjtnQkFDRSxJQUFJLEVBQUUsU0FBUztnQkFDZixTQUFTLEVBQUUsb0JBQW9CO2dCQUMvQixJQUFJLElBRUg7YUFDRjtZQUNEO2dCQUNFLElBQUksRUFBRSxVQUFVO2dCQUNoQixTQUFTLEVBQUUscUJBQXFCO2dCQUNoQyxJQUFJLElBRUg7YUFDRjtZQUNEO2dCQUNFLElBQUksRUFBRSxVQUFVO2dCQUNoQixTQUFTLEVBQUUscUJBQXFCO2dCQUNoQyxJQUFJLElBRUg7YUFDRjtTQUNGO0tBQ0YsQ0FBQztBQU1GLE1BQU0sT0FBTyxzQkFBc0I7OztZQUpsQyxRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDeEMsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2FBQ3hCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEF1dGhHdWFyZENoaWxkU2VydmljZSB9IGZyb20gJ0B4YXBoaXJhL25neGEtYXV0aCc7XG5pbXBvcnQgeyBFeHRyYUNvbXBvbmVudCB9IGZyb20gJy4vbmd4YS1leHRyYS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJvZmlsZVBhZ2VDb21wb25lbnQgfSBmcm9tICcuL3Byb2ZpbGUvcHJvZmlsZS1wYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZXR0aW5nc1BhZ2VDb21wb25lbnQgfSBmcm9tICcuL3NldHRpbmdzL3NldHRpbmdzLXBhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IFNlY3VyaXR5UGFnZUNvbXBvbmVudCB9IGZyb20gJy4vc2VjdXJpdHkvc2VjdXJpdHktcGFnZS5jb21wb25lbnQnO1xuXG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW3tcbiAgcGF0aDogJycsXG4gIGNvbXBvbmVudDogRXh0cmFDb21wb25lbnQsXG4gIGNhbkFjdGl2YXRlQ2hpbGQ6IFtBdXRoR3VhcmRDaGlsZFNlcnZpY2VdLFxuICBjaGlsZHJlbjogW1xuICAgIHtcbiAgICAgIHBhdGg6ICdwcm9maWxlJyxcbiAgICAgIGNvbXBvbmVudDogUHJvZmlsZVBhZ2VDb21wb25lbnQsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGNvZGU6ICcjUFJPRklMRS1QQUdFJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICBwYXRoOiAnc2VjdXJpdHknLFxuICAgICAgY29tcG9uZW50OiBTZWN1cml0eVBhZ2VDb21wb25lbnQsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGNvZGU6ICcjU0VDVVJJVFktUEFHRScsXG4gICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgcGF0aDogJ3NldHRpbmdzJyxcbiAgICAgIGNvbXBvbmVudDogU2V0dGluZ3NQYWdlQ29tcG9uZW50LFxuICAgICAgZGF0YToge1xuICAgICAgICBjb2RlOiAnI1NFVFRJTkdTLVBBR0UnLFxuICAgICAgfSxcbiAgICB9LFxuICBdLFxufV07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXG4gIGV4cG9ydHM6IFtSb3V0ZXJNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBOZ3hhRXh0cmFSb3V0aW5nTW9kdWxlIHtcbn1cbiJdfQ==