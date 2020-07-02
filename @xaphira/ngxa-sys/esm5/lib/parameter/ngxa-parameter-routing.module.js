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
var ɵ0 = {
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
var routes = [{
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
var NgxaParameterRoutingModule = /** @class */ (function () {
    function NgxaParameterRoutingModule() {
    }
    NgxaParameterRoutingModule.decorators = [
        { type: NgModule, args: [{
                    imports: [RouterModule.forChild(routes)],
                    exports: [RouterModule],
                },] }
    ];
    return NgxaParameterRoutingModule;
}());
export { NgxaParameterRoutingModule };
export { ɵ0, ɵ1, ɵ2, ɵ3, ɵ4 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4YS1wYXJhbWV0ZXItcm91dGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AeGFwaGlyYS9uZ3hhLXN5cy8iLCJzb3VyY2VzIjpbImxpYi9wYXJhbWV0ZXIvbmd4YS1wYXJhbWV0ZXItcm91dGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBVSxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzNELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ3pHLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQ3RHLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ2pHLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO1NBVXBGO0lBQ0osSUFBSSxFQUFFLHlCQUF5QjtDQUNoQyxPQUtLO0lBQ0osSUFBSSxFQUFFLHlCQUF5QjtDQUNoQyxPQUtLO0lBQ0osSUFBSSxFQUFFLHlCQUF5QjtDQUNoQyxPQUtLO0lBQ0osSUFBSSxFQUFFLHlCQUF5QjtDQUNoQyxPQUtLO0lBQ0osSUFBSSxFQUFFLHlCQUF5QjtDQUNoQzs7SUF0Q0QsTUFBTSxHQUFXLENBQUM7UUFDdEIsSUFBSSxFQUFFLEVBQUU7UUFDUixTQUFTLEVBQUUsa0JBQWtCO1FBQzdCLGdCQUFnQixFQUFFLENBQUMscUJBQXFCLENBQUM7UUFDekMsUUFBUSxFQUFFO1lBQ1I7Z0JBQ0UsSUFBSSxFQUFFLEVBQUU7Z0JBQ1IsU0FBUyxFQUFFLCtCQUErQjtnQkFDMUMsSUFBSSxJQUVIO2FBQ0Y7WUFDRDtnQkFDRSxJQUFJLEVBQUUsT0FBTztnQkFDYixTQUFTLEVBQUUsK0JBQStCO2dCQUMxQyxJQUFJLElBRUg7YUFDRjtZQUNEO2dCQUNFLElBQUksRUFBRSxlQUFlO2dCQUNyQixTQUFTLEVBQUUsOEJBQThCO2dCQUN6QyxJQUFJLElBRUg7YUFDRjtZQUNEO2dCQUNFLElBQUksRUFBRSxRQUFRO2dCQUNkLFNBQVMsRUFBRSxnQ0FBZ0M7Z0JBQzNDLElBQUksSUFFSDthQUNGO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLGdCQUFnQjtnQkFDdEIsU0FBUyxFQUFFLDhCQUE4QjtnQkFDekMsSUFBSSxJQUVIO2FBQ0Y7U0FDRjtLQUNGLENBQUM7QUFFRjtJQUFBO0lBS0EsQ0FBQzs7Z0JBTEEsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3hDLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztpQkFDeEI7O0lBRUQsaUNBQUM7Q0FBQSxBQUxELElBS0M7U0FEWSwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQXV0aEd1YXJkQ2hpbGRTZXJ2aWNlIH0gZnJvbSAnQHhhcGhpcmEvbmd4YS1hdXRoJztcbmltcG9ydCB7IFBhcmFtZXRlckNvbXBvbmVudCB9IGZyb20gJy4vbmd4YS1wYXJhbWV0ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFBhcmFtZXRlckxpc3RHcm91cFBhZ2VDb21wb25lbnQgfSBmcm9tICcuL2dyb3VwL2xpc3QtZ3JvdXAvcGFyYW1ldGVyLWxpc3QtZ3JvdXAtcGFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGFyYW1ldGVyQWRkR3JvdXBQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9ncm91cC9hZGQtZ3JvdXAvcGFyYW1ldGVyLWFkZC1ncm91cC1wYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQYXJhbWV0ZXJMaXN0RGV0YWlsUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vZGV0YWlsL3BhcmFtZXRlci1saXN0LWRldGFpbC1wYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQYXJhbWV0ZXJEb0RldGFpbFBhZ2VDb21wb25lbnQgfSBmcm9tICcuL2RldGFpbC9kby9wYXJhbWV0ZXItZG8tZGV0YWlsLXBhZ2UuY29tcG9uZW50JztcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbe1xuICBwYXRoOiAnJyxcbiAgY29tcG9uZW50OiBQYXJhbWV0ZXJDb21wb25lbnQsXG4gIGNhbkFjdGl2YXRlQ2hpbGQ6IFtBdXRoR3VhcmRDaGlsZFNlcnZpY2VdLFxuICBjaGlsZHJlbjogW1xuICAgIHtcbiAgICAgIHBhdGg6ICcnLFxuICAgICAgY29tcG9uZW50OiBQYXJhbWV0ZXJMaXN0R3JvdXBQYWdlQ29tcG9uZW50LFxuICAgICAgZGF0YToge1xuICAgICAgICBjb2RlOiAnI1NZU0NPTkYtUEFSQU1FVEVSLVBBR0UnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhdGg6ICdncm91cCcsXG4gICAgICBjb21wb25lbnQ6IFBhcmFtZXRlckxpc3RHcm91cFBhZ2VDb21wb25lbnQsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGNvZGU6ICcjU1lTQ09ORi1QQVJBTUVURVItUEFHRScsXG4gICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgcGF0aDogJ2dyb3VwLzphY3Rpb24nLFxuICAgICAgY29tcG9uZW50OiBQYXJhbWV0ZXJBZGRHcm91cFBhZ2VDb21wb25lbnQsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGNvZGU6ICcjU1lTQ09ORi1QQVJBTUVURVItUEFHRScsXG4gICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgcGF0aDogJ2RldGFpbCcsXG4gICAgICBjb21wb25lbnQ6IFBhcmFtZXRlckxpc3REZXRhaWxQYWdlQ29tcG9uZW50LFxuICAgICAgZGF0YToge1xuICAgICAgICBjb2RlOiAnI1NZU0NPTkYtUEFSQU1FVEVSLVBBR0UnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhdGg6ICdkZXRhaWwvOmFjdGlvbicsXG4gICAgICBjb21wb25lbnQ6IFBhcmFtZXRlckRvRGV0YWlsUGFnZUNvbXBvbmVudCxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgY29kZTogJyNTWVNDT05GLVBBUkFNRVRFUi1QQUdFJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgXSxcbn1dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxuICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgTmd4YVBhcmFtZXRlclJvdXRpbmdNb2R1bGUge1xufVxuIl19