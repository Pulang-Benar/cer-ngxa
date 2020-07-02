/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthComponent } from '../layout/auth.component';
import { LoginPageComponent } from './login/login-page.component';
import { UnauthorizeGuardService } from '../services/unauth-guard.service';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuardService } from '../services/auth-guard.service';
/** @type {?} */
const routes = [{
        path: '',
        component: AuthComponent,
        children: [
            {
                path: '',
                component: LoginPageComponent,
                canActivate: [UnauthorizeGuardService],
            },
            {
                path: 'login',
                component: LoginPageComponent,
                canActivate: [UnauthorizeGuardService],
            },
            {
                path: 'logout',
                component: LogoutComponent,
                canActivate: [AuthGuardService],
            },
        ],
    }];
export class NgxaAuthRoutingModule {
}
NgxaAuthRoutingModule.decorators = [
    { type: NgModule, args: [{
                imports: [RouterModule.forChild(routes)],
                exports: [RouterModule],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4YS1hdXRoLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHhhcGhpcmEvbmd4YS1hdXRoLyIsInNvdXJjZXMiOlsibGliL2F1dGgvbmd4YS1hdXRoLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQVUsTUFBTSxpQkFBaUIsQ0FBQztBQUV2RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzVELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOztNQUU1RCxNQUFNLEdBQVcsQ0FBQztRQUN0QixJQUFJLEVBQUUsRUFBRTtRQUNSLFNBQVMsRUFBRSxhQUFhO1FBQ3hCLFFBQVEsRUFBRTtZQUNSO2dCQUNFLElBQUksRUFBRSxFQUFFO2dCQUNSLFNBQVMsRUFBRSxrQkFBa0I7Z0JBQzdCLFdBQVcsRUFBRSxDQUFDLHVCQUF1QixDQUFDO2FBQ3ZDO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsU0FBUyxFQUFFLGtCQUFrQjtnQkFDN0IsV0FBVyxFQUFFLENBQUMsdUJBQXVCLENBQUM7YUFDdkM7WUFDRDtnQkFDRSxJQUFJLEVBQUUsUUFBUTtnQkFDZCxTQUFTLEVBQUUsZUFBZTtnQkFDMUIsV0FBVyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7YUFDaEM7U0FDRjtLQUNGLENBQUM7QUFNRixNQUFNLE9BQU8scUJBQXFCOzs7WUFKakMsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3hDLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQzthQUN4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IEF1dGhDb21wb25lbnQgfSBmcm9tICcuLi9sYXlvdXQvYXV0aC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTG9naW5QYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9sb2dpbi9sb2dpbi1wYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVbmF1dGhvcml6ZUd1YXJkU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3VuYXV0aC1ndWFyZC5zZXJ2aWNlJztcbmltcG9ydCB7IExvZ291dENvbXBvbmVudCB9IGZyb20gJy4vbG9nb3V0L2xvZ291dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQXV0aEd1YXJkU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2F1dGgtZ3VhcmQuc2VydmljZSc7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW3tcbiAgcGF0aDogJycsXG4gIGNvbXBvbmVudDogQXV0aENvbXBvbmVudCxcbiAgY2hpbGRyZW46IFtcbiAgICB7XG4gICAgICBwYXRoOiAnJyxcbiAgICAgIGNvbXBvbmVudDogTG9naW5QYWdlQ29tcG9uZW50LFxuICAgICAgY2FuQWN0aXZhdGU6IFtVbmF1dGhvcml6ZUd1YXJkU2VydmljZV0sXG4gICAgfSxcbiAgICB7XG4gICAgICBwYXRoOiAnbG9naW4nLFxuICAgICAgY29tcG9uZW50OiBMb2dpblBhZ2VDb21wb25lbnQsXG4gICAgICBjYW5BY3RpdmF0ZTogW1VuYXV0aG9yaXplR3VhcmRTZXJ2aWNlXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhdGg6ICdsb2dvdXQnLFxuICAgICAgY29tcG9uZW50OiBMb2dvdXRDb21wb25lbnQsXG4gICAgICBjYW5BY3RpdmF0ZTogW0F1dGhHdWFyZFNlcnZpY2VdLFxuICAgIH0sXG4gIF0sXG59XTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1JvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcbiAgZXhwb3J0czogW1JvdXRlck1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIE5neGFBdXRoUm91dGluZ01vZHVsZSB7XG59XG4iXX0=