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
var ɵ0 = {
    code: '#MANAGEMENT-CIVILIANS-PAGE',
}, ɵ1 = {
    code: '#MANAGEMENT-CIVILIANS-PAGE',
}, ɵ2 = {
    code: '#MANAGEMENT-ADMIN-REGIONAL-PAGE',
}, ɵ3 = {
    code: '#MANAGEMENT-ADMIN-REGIONAL-PAGE',
};
/** @type {?} */
var routes = [{
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
var NgxaMgmtUserRoutingModule = /** @class */ (function () {
    function NgxaMgmtUserRoutingModule() {
    }
    NgxaMgmtUserRoutingModule.decorators = [
        { type: NgModule, args: [{
                    imports: [RouterModule.forChild(routes)],
                    exports: [RouterModule],
                },] }
    ];
    return NgxaMgmtUserRoutingModule;
}());
export { NgxaMgmtUserRoutingModule };
export { ɵ0, ɵ1, ɵ2, ɵ3 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4YS1tZ210LXVzZXItcm91dGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AeGFwaGlyYS9uZ3hhLXN5cy8iLCJzb3VyY2VzIjpbImxpYi9tYW5hZ2VtZW50L3VzZXIvbmd4YS1tZ210LXVzZXItcm91dGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBVSxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzNELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQy9ELE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQ3JHLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQzNHLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQ2xHLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO1NBVTVGO0lBQ0osSUFBSSxFQUFFLDRCQUE0QjtDQUNuQyxPQUtLO0lBQ0osSUFBSSxFQUFFLDRCQUE0QjtDQUNuQyxPQUtLO0lBQ0osSUFBSSxFQUFFLGlDQUFpQztDQUN4QyxPQUtLO0lBQ0osSUFBSSxFQUFFLGlDQUFpQztDQUN4Qzs7SUEvQkQsTUFBTSxHQUFXLENBQUM7UUFDdEIsSUFBSSxFQUFFLEVBQUU7UUFDUixTQUFTLEVBQUUsaUJBQWlCO1FBQzVCLGdCQUFnQixFQUFFLENBQUMscUJBQXFCLENBQUM7UUFDekMsUUFBUSxFQUFFO1lBQ1I7Z0JBQ0UsSUFBSSxFQUFFLFdBQVc7Z0JBQ2pCLFNBQVMsRUFBRSw4QkFBOEI7Z0JBQ3pDLElBQUksSUFFSDthQUNGO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLGtCQUFrQjtnQkFDeEIsU0FBUyxFQUFFLGdDQUFnQztnQkFDM0MsSUFBSSxJQUVIO2FBQ0Y7WUFDRDtnQkFDRSxJQUFJLEVBQUUsZ0JBQWdCO2dCQUN0QixTQUFTLEVBQUUsMEJBQTBCO2dCQUNyQyxJQUFJLElBRUg7YUFDRjtZQUNEO2dCQUNFLElBQUksRUFBRSx1QkFBdUI7Z0JBQzdCLFNBQVMsRUFBRSw0QkFBNEI7Z0JBQ3ZDLElBQUksSUFFSDthQUNGO1NBQ0Y7S0FDRixDQUFDO0FBRUY7SUFBQTtJQUtBLENBQUM7O2dCQUxBLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN4QyxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7aUJBQ3hCOztJQUVELGdDQUFDO0NBQUEsQUFMRCxJQUtDO1NBRFkseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEF1dGhHdWFyZENoaWxkU2VydmljZSB9IGZyb20gJ0B4YXBoaXJhL25neGEtYXV0aCc7XG5pbXBvcnQgeyBNZ210VXNlckNvbXBvbmVudCB9IGZyb20gJy4vbmd4YS1tZ210LXVzZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE1nbXRDaXZpbGlhbnNMaXN0UGFnZUNvbXBvbmVudCB9IGZyb20gJy4vY2l2aWxpYW5zL2xpc3QvbWdtdC1jaXZpbGlhbnMtbGlzdC1wYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNZ210Q2l2aWxpYW5zRGV0YWlsUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vY2l2aWxpYW5zL2RldGFpbC9tZ210LWNpdmlsaWFucy1kZXRhaWwtcGFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWdtdEFkbWluTGlzdFBhZ2VDb21wb25lbnQgfSBmcm9tICcuL2FkbWluLXJlZ2lvbmFsL2xpc3QvbWdtdC1hZG1pbi1saXN0LXBhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IE1nbXRBZG1pbkRldGFpbFBhZ2VDb21wb25lbnQgfSBmcm9tICcuL2FkbWluLXJlZ2lvbmFsL2RldGFpbC9tZ210LWFkbWluLWRldGFpbC1wYWdlLmNvbXBvbmVudCc7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW3tcbiAgcGF0aDogJycsXG4gIGNvbXBvbmVudDogTWdtdFVzZXJDb21wb25lbnQsXG4gIGNhbkFjdGl2YXRlQ2hpbGQ6IFtBdXRoR3VhcmRDaGlsZFNlcnZpY2VdLFxuICBjaGlsZHJlbjogW1xuICAgIHtcbiAgICAgIHBhdGg6ICdjaXZpbGlhbnMnLFxuICAgICAgY29tcG9uZW50OiBNZ210Q2l2aWxpYW5zTGlzdFBhZ2VDb21wb25lbnQsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGNvZGU6ICcjTUFOQUdFTUVOVC1DSVZJTElBTlMtUEFHRScsXG4gICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgcGF0aDogJ2NpdmlsaWFucy9kZXRhaWwnLFxuICAgICAgY29tcG9uZW50OiBNZ210Q2l2aWxpYW5zRGV0YWlsUGFnZUNvbXBvbmVudCxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgY29kZTogJyNNQU5BR0VNRU5ULUNJVklMSUFOUy1QQUdFJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICBwYXRoOiAnYWRtaW4tcmVnaW9uYWwnLFxuICAgICAgY29tcG9uZW50OiBNZ210QWRtaW5MaXN0UGFnZUNvbXBvbmVudCxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgY29kZTogJyNNQU5BR0VNRU5ULUFETUlOLVJFR0lPTkFMLVBBR0UnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhdGg6ICdhZG1pbi1yZWdpb25hbC9kZXRhaWwnLFxuICAgICAgY29tcG9uZW50OiBNZ210QWRtaW5EZXRhaWxQYWdlQ29tcG9uZW50LFxuICAgICAgZGF0YToge1xuICAgICAgICBjb2RlOiAnI01BTkFHRU1FTlQtQURNSU4tUkVHSU9OQUwtUEFHRScsXG4gICAgICB9LFxuICAgIH0sXG4gIF0sXG59XTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1JvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcbiAgZXhwb3J0czogW1JvdXRlck1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIE5neGFNZ210VXNlclJvdXRpbmdNb2R1bGUge1xufVxuIl19