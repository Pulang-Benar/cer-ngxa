/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuardChildService } from '@xaphira/ngxa-auth';
import { MgmtUserComponent } from './ngxa-mgmt-user.component';
import { MgmtCiviliansListPageComponent } from './civilians/list/mgmt-civilians-list-page.component';
import { MgmtCiviliansDetailPageComponent } from './civilians/detail/mgmt-civilians-detail-page.component';
import { MgmtAdminListPageComponent } from './admin-regional/list/mgmt-admin-list-page.component';
import { MgmtAdminDetailPageComponent } from './admin-regional/detail/mgmt-admin-detail-page.component';
const ɵ0 = {
    code: '#MANAGEMENT-CIVILIANS-PAGE',
}, ɵ1 = {
    code: '#MANAGEMENT-CIVILIANS-PAGE',
}, ɵ2 = {
    code: '#MANAGEMENT-ADMIN-REGIONAL-PAGE',
}, ɵ3 = {
    code: '#MANAGEMENT-ADMIN-REGIONAL-PAGE',
};
/** @type {?} */
const routes = [{
        path: '',
        component: MgmtUserComponent,
        canActivateChild: [AuthGuardChildService],
        children: [
            {
                path: 'civilians',
                component: MgmtCiviliansListPageComponent,
                data: ɵ0,
            },
            {
                path: 'civilians/detail',
                component: MgmtCiviliansDetailPageComponent,
                data: ɵ1,
            },
            {
                path: 'admin-regional',
                component: MgmtAdminListPageComponent,
                data: ɵ2,
            },
            {
                path: 'admin-regional/detail',
                component: MgmtAdminDetailPageComponent,
                data: ɵ3,
            },
        ],
    }];
export class NgxaMgmtUserRoutingModule {
}
NgxaMgmtUserRoutingModule.decorators = [
    { type: NgModule, args: [{
                imports: [RouterModule.forChild(routes)],
                exports: [RouterModule],
            },] }
];
export { ɵ0, ɵ1, ɵ2, ɵ3 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4YS1tZ210LXVzZXItcm91dGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AeGFwaGlyYS9uZ3hhLXN5cy8iLCJzb3VyY2VzIjpbImxpYi9tYW5hZ2VtZW50L3VzZXIvbmd4YS1tZ210LXVzZXItcm91dGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBVSxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzNELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQy9ELE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQ3JHLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQzNHLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQ2xHLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO1dBVTVGO0lBQ0osSUFBSSxFQUFFLDRCQUE0QjtDQUNuQyxPQUtLO0lBQ0osSUFBSSxFQUFFLDRCQUE0QjtDQUNuQyxPQUtLO0lBQ0osSUFBSSxFQUFFLGlDQUFpQztDQUN4QyxPQUtLO0lBQ0osSUFBSSxFQUFFLGlDQUFpQztDQUN4Qzs7TUEvQkQsTUFBTSxHQUFXLENBQUM7UUFDdEIsSUFBSSxFQUFFLEVBQUU7UUFDUixTQUFTLEVBQUUsaUJBQWlCO1FBQzVCLGdCQUFnQixFQUFFLENBQUMscUJBQXFCLENBQUM7UUFDekMsUUFBUSxFQUFFO1lBQ1I7Z0JBQ0UsSUFBSSxFQUFFLFdBQVc7Z0JBQ2pCLFNBQVMsRUFBRSw4QkFBOEI7Z0JBQ3pDLElBQUksSUFFSDthQUNGO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLGtCQUFrQjtnQkFDeEIsU0FBUyxFQUFFLGdDQUFnQztnQkFDM0MsSUFBSSxJQUVIO2FBQ0Y7WUFDRDtnQkFDRSxJQUFJLEVBQUUsZ0JBQWdCO2dCQUN0QixTQUFTLEVBQUUsMEJBQTBCO2dCQUNyQyxJQUFJLElBRUg7YUFDRjtZQUNEO2dCQUNFLElBQUksRUFBRSx1QkFBdUI7Z0JBQzdCLFNBQVMsRUFBRSw0QkFBNEI7Z0JBQ3ZDLElBQUksSUFFSDthQUNGO1NBQ0Y7S0FDRixDQUFDO0FBTUYsTUFBTSxPQUFPLHlCQUF5Qjs7O1lBSnJDLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUN4QyxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7YUFDeEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQXV0aEd1YXJkQ2hpbGRTZXJ2aWNlIH0gZnJvbSAnQHhhcGhpcmEvbmd4YS1hdXRoJztcbmltcG9ydCB7IE1nbXRVc2VyQ29tcG9uZW50IH0gZnJvbSAnLi9uZ3hhLW1nbXQtdXNlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWdtdENpdmlsaWFuc0xpc3RQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9jaXZpbGlhbnMvbGlzdC9tZ210LWNpdmlsaWFucy1saXN0LXBhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IE1nbXRDaXZpbGlhbnNEZXRhaWxQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9jaXZpbGlhbnMvZGV0YWlsL21nbXQtY2l2aWxpYW5zLWRldGFpbC1wYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNZ210QWRtaW5MaXN0UGFnZUNvbXBvbmVudCB9IGZyb20gJy4vYWRtaW4tcmVnaW9uYWwvbGlzdC9tZ210LWFkbWluLWxpc3QtcGFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWdtdEFkbWluRGV0YWlsUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vYWRtaW4tcmVnaW9uYWwvZGV0YWlsL21nbXQtYWRtaW4tZGV0YWlsLXBhZ2UuY29tcG9uZW50JztcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbe1xuICBwYXRoOiAnJyxcbiAgY29tcG9uZW50OiBNZ210VXNlckNvbXBvbmVudCxcbiAgY2FuQWN0aXZhdGVDaGlsZDogW0F1dGhHdWFyZENoaWxkU2VydmljZV0sXG4gIGNoaWxkcmVuOiBbXG4gICAge1xuICAgICAgcGF0aDogJ2NpdmlsaWFucycsXG4gICAgICBjb21wb25lbnQ6IE1nbXRDaXZpbGlhbnNMaXN0UGFnZUNvbXBvbmVudCxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgY29kZTogJyNNQU5BR0VNRU5ULUNJVklMSUFOUy1QQUdFJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICBwYXRoOiAnY2l2aWxpYW5zL2RldGFpbCcsXG4gICAgICBjb21wb25lbnQ6IE1nbXRDaXZpbGlhbnNEZXRhaWxQYWdlQ29tcG9uZW50LFxuICAgICAgZGF0YToge1xuICAgICAgICBjb2RlOiAnI01BTkFHRU1FTlQtQ0lWSUxJQU5TLVBBR0UnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhdGg6ICdhZG1pbi1yZWdpb25hbCcsXG4gICAgICBjb21wb25lbnQ6IE1nbXRBZG1pbkxpc3RQYWdlQ29tcG9uZW50LFxuICAgICAgZGF0YToge1xuICAgICAgICBjb2RlOiAnI01BTkFHRU1FTlQtQURNSU4tUkVHSU9OQUwtUEFHRScsXG4gICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgcGF0aDogJ2FkbWluLXJlZ2lvbmFsL2RldGFpbCcsXG4gICAgICBjb21wb25lbnQ6IE1nbXRBZG1pbkRldGFpbFBhZ2VDb21wb25lbnQsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGNvZGU6ICcjTUFOQUdFTUVOVC1BRE1JTi1SRUdJT05BTC1QQUdFJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgXSxcbn1dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxuICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgTmd4YU1nbXRVc2VyUm91dGluZ01vZHVsZSB7XG59XG4iXX0=