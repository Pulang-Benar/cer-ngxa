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
var routes = [{
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
var NgxaAuthRoutingModule = /** @class */ (function () {
    function NgxaAuthRoutingModule() {
    }
    NgxaAuthRoutingModule.decorators = [
        { type: NgModule, args: [{
                    imports: [RouterModule.forChild(routes)],
                    exports: [RouterModule],
                },] }
    ];
    return NgxaAuthRoutingModule;
}());
export { NgxaAuthRoutingModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4YS1hdXRoLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHhhcGhpcmEvbmd4YS1hdXRoLyIsInNvdXJjZXMiOlsibGliL2F1dGgvbmd4YS1hdXRoLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQVUsTUFBTSxpQkFBaUIsQ0FBQztBQUV2RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzVELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOztJQUU1RCxNQUFNLEdBQVcsQ0FBQztRQUN0QixJQUFJLEVBQUUsRUFBRTtRQUNSLFNBQVMsRUFBRSxhQUFhO1FBQ3hCLFFBQVEsRUFBRTtZQUNSO2dCQUNFLElBQUksRUFBRSxFQUFFO2dCQUNSLFNBQVMsRUFBRSxrQkFBa0I7Z0JBQzdCLFdBQVcsRUFBRSxDQUFDLHVCQUF1QixDQUFDO2FBQ3ZDO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsU0FBUyxFQUFFLGtCQUFrQjtnQkFDN0IsV0FBVyxFQUFFLENBQUMsdUJBQXVCLENBQUM7YUFDdkM7WUFDRDtnQkFDRSxJQUFJLEVBQUUsUUFBUTtnQkFDZCxTQUFTLEVBQUUsZUFBZTtnQkFDMUIsV0FBVyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7YUFDaEM7U0FDRjtLQUNGLENBQUM7QUFFRjtJQUFBO0lBS0EsQ0FBQzs7Z0JBTEEsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3hDLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztpQkFDeEI7O0lBRUQsNEJBQUM7Q0FBQSxBQUxELElBS0M7U0FEWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBBdXRoQ29tcG9uZW50IH0gZnJvbSAnLi4vbGF5b3V0L2F1dGguY29tcG9uZW50JztcbmltcG9ydCB7IExvZ2luUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vbG9naW4vbG9naW4tcGFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVW5hdXRob3JpemVHdWFyZFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy91bmF1dGgtZ3VhcmQuc2VydmljZSc7XG5pbXBvcnQgeyBMb2dvdXRDb21wb25lbnQgfSBmcm9tICcuL2xvZ291dC9sb2dvdXQuY29tcG9uZW50JztcbmltcG9ydCB7IEF1dGhHdWFyZFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9hdXRoLWd1YXJkLnNlcnZpY2UnO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFt7XG4gIHBhdGg6ICcnLFxuICBjb21wb25lbnQ6IEF1dGhDb21wb25lbnQsXG4gIGNoaWxkcmVuOiBbXG4gICAge1xuICAgICAgcGF0aDogJycsXG4gICAgICBjb21wb25lbnQ6IExvZ2luUGFnZUNvbXBvbmVudCxcbiAgICAgIGNhbkFjdGl2YXRlOiBbVW5hdXRob3JpemVHdWFyZFNlcnZpY2VdLFxuICAgIH0sXG4gICAge1xuICAgICAgcGF0aDogJ2xvZ2luJyxcbiAgICAgIGNvbXBvbmVudDogTG9naW5QYWdlQ29tcG9uZW50LFxuICAgICAgY2FuQWN0aXZhdGU6IFtVbmF1dGhvcml6ZUd1YXJkU2VydmljZV0sXG4gICAgfSxcbiAgICB7XG4gICAgICBwYXRoOiAnbG9nb3V0JyxcbiAgICAgIGNvbXBvbmVudDogTG9nb3V0Q29tcG9uZW50LFxuICAgICAgY2FuQWN0aXZhdGU6IFtBdXRoR3VhcmRTZXJ2aWNlXSxcbiAgICB9LFxuICBdLFxufV07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXG4gIGV4cG9ydHM6IFtSb3V0ZXJNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBOZ3hhQXV0aFJvdXRpbmdNb2R1bGUge1xufVxuIl19