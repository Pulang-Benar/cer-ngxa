/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuardChildService } from '@xaphira/ngxa-auth';
import { ParameterComponent } from './ngxa-parameter.component';
import { ParameterListGroupPageComponent } from './group/list-group/parameter-list-group-page.component';
import { ParameterAddGroupPageComponent } from './group/add-group/parameter-add-group-page.component';
import { ParameterListDetailPageComponent } from './detail/parameter-list-detail-page.component';
import { ParameterDoDetailPageComponent } from './detail/do/parameter-do-detail-page.component';
const ɵ0 = {
    code: '#SYSCONF-PARAMETER-PAGE',
}, ɵ1 = {
    code: '#SYSCONF-PARAMETER-PAGE',
}, ɵ2 = {
    code: '#SYSCONF-PARAMETER-PAGE',
}, ɵ3 = {
    code: '#SYSCONF-PARAMETER-PAGE',
}, ɵ4 = {
    code: '#SYSCONF-PARAMETER-PAGE',
};
/** @type {?} */
const routes = [{
        path: '',
        component: ParameterComponent,
        canActivateChild: [AuthGuardChildService],
        children: [
            {
                path: '',
                component: ParameterListGroupPageComponent,
                data: ɵ0,
            },
            {
                path: 'group',
                component: ParameterListGroupPageComponent,
                data: ɵ1,
            },
            {
                path: 'group/:action',
                component: ParameterAddGroupPageComponent,
                data: ɵ2,
            },
            {
                path: 'detail',
                component: ParameterListDetailPageComponent,
                data: ɵ3,
            },
            {
                path: 'detail/:action',
                component: ParameterDoDetailPageComponent,
                data: ɵ4,
            },
        ],
    }];
export class NgxaParameterRoutingModule {
}
NgxaParameterRoutingModule.decorators = [
    { type: NgModule, args: [{
                imports: [RouterModule.forChild(routes)],
                exports: [RouterModule],
            },] }
];
export { ɵ0, ɵ1, ɵ2, ɵ3, ɵ4 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4YS1wYXJhbWV0ZXItcm91dGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AeGFwaGlyYS9uZ3hhLXN5cy8iLCJzb3VyY2VzIjpbImxpYi9wYXJhbWV0ZXIvbmd4YS1wYXJhbWV0ZXItcm91dGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBVSxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzNELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ3pHLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQ3RHLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ2pHLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO1dBVXBGO0lBQ0osSUFBSSxFQUFFLHlCQUF5QjtDQUNoQyxPQUtLO0lBQ0osSUFBSSxFQUFFLHlCQUF5QjtDQUNoQyxPQUtLO0lBQ0osSUFBSSxFQUFFLHlCQUF5QjtDQUNoQyxPQUtLO0lBQ0osSUFBSSxFQUFFLHlCQUF5QjtDQUNoQyxPQUtLO0lBQ0osSUFBSSxFQUFFLHlCQUF5QjtDQUNoQzs7TUF0Q0QsTUFBTSxHQUFXLENBQUM7UUFDdEIsSUFBSSxFQUFFLEVBQUU7UUFDUixTQUFTLEVBQUUsa0JBQWtCO1FBQzdCLGdCQUFnQixFQUFFLENBQUMscUJBQXFCLENBQUM7UUFDekMsUUFBUSxFQUFFO1lBQ1I7Z0JBQ0UsSUFBSSxFQUFFLEVBQUU7Z0JBQ1IsU0FBUyxFQUFFLCtCQUErQjtnQkFDMUMsSUFBSSxJQUVIO2FBQ0Y7WUFDRDtnQkFDRSxJQUFJLEVBQUUsT0FBTztnQkFDYixTQUFTLEVBQUUsK0JBQStCO2dCQUMxQyxJQUFJLElBRUg7YUFDRjtZQUNEO2dCQUNFLElBQUksRUFBRSxlQUFlO2dCQUNyQixTQUFTLEVBQUUsOEJBQThCO2dCQUN6QyxJQUFJLElBRUg7YUFDRjtZQUNEO2dCQUNFLElBQUksRUFBRSxRQUFRO2dCQUNkLFNBQVMsRUFBRSxnQ0FBZ0M7Z0JBQzNDLElBQUksSUFFSDthQUNGO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLGdCQUFnQjtnQkFDdEIsU0FBUyxFQUFFLDhCQUE4QjtnQkFDekMsSUFBSSxJQUVIO2FBQ0Y7U0FDRjtLQUNGLENBQUM7QUFNRixNQUFNLE9BQU8sMEJBQTBCOzs7WUFKdEMsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3hDLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQzthQUN4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBdXRoR3VhcmRDaGlsZFNlcnZpY2UgfSBmcm9tICdAeGFwaGlyYS9uZ3hhLWF1dGgnO1xuaW1wb3J0IHsgUGFyYW1ldGVyQ29tcG9uZW50IH0gZnJvbSAnLi9uZ3hhLXBhcmFtZXRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGFyYW1ldGVyTGlzdEdyb3VwUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vZ3JvdXAvbGlzdC1ncm91cC9wYXJhbWV0ZXItbGlzdC1ncm91cC1wYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQYXJhbWV0ZXJBZGRHcm91cFBhZ2VDb21wb25lbnQgfSBmcm9tICcuL2dyb3VwL2FkZC1ncm91cC9wYXJhbWV0ZXItYWRkLWdyb3VwLXBhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IFBhcmFtZXRlckxpc3REZXRhaWxQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9kZXRhaWwvcGFyYW1ldGVyLWxpc3QtZGV0YWlsLXBhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IFBhcmFtZXRlckRvRGV0YWlsUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vZGV0YWlsL2RvL3BhcmFtZXRlci1kby1kZXRhaWwtcGFnZS5jb21wb25lbnQnO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFt7XG4gIHBhdGg6ICcnLFxuICBjb21wb25lbnQ6IFBhcmFtZXRlckNvbXBvbmVudCxcbiAgY2FuQWN0aXZhdGVDaGlsZDogW0F1dGhHdWFyZENoaWxkU2VydmljZV0sXG4gIGNoaWxkcmVuOiBbXG4gICAge1xuICAgICAgcGF0aDogJycsXG4gICAgICBjb21wb25lbnQ6IFBhcmFtZXRlckxpc3RHcm91cFBhZ2VDb21wb25lbnQsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGNvZGU6ICcjU1lTQ09ORi1QQVJBTUVURVItUEFHRScsXG4gICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgcGF0aDogJ2dyb3VwJyxcbiAgICAgIGNvbXBvbmVudDogUGFyYW1ldGVyTGlzdEdyb3VwUGFnZUNvbXBvbmVudCxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgY29kZTogJyNTWVNDT05GLVBBUkFNRVRFUi1QQUdFJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICBwYXRoOiAnZ3JvdXAvOmFjdGlvbicsXG4gICAgICBjb21wb25lbnQ6IFBhcmFtZXRlckFkZEdyb3VwUGFnZUNvbXBvbmVudCxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgY29kZTogJyNTWVNDT05GLVBBUkFNRVRFUi1QQUdFJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICBwYXRoOiAnZGV0YWlsJyxcbiAgICAgIGNvbXBvbmVudDogUGFyYW1ldGVyTGlzdERldGFpbFBhZ2VDb21wb25lbnQsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGNvZGU6ICcjU1lTQ09ORi1QQVJBTUVURVItUEFHRScsXG4gICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgcGF0aDogJ2RldGFpbC86YWN0aW9uJyxcbiAgICAgIGNvbXBvbmVudDogUGFyYW1ldGVyRG9EZXRhaWxQYWdlQ29tcG9uZW50LFxuICAgICAgZGF0YToge1xuICAgICAgICBjb2RlOiAnI1NZU0NPTkYtUEFSQU1FVEVSLVBBR0UnLFxuICAgICAgfSxcbiAgICB9LFxuICBdLFxufV07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXG4gIGV4cG9ydHM6IFtSb3V0ZXJNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBOZ3hhUGFyYW1ldGVyUm91dGluZ01vZHVsZSB7XG59XG4iXX0=