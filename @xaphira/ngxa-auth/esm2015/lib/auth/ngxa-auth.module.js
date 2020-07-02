/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { NbCheckboxModule, NbAlertModule, NbInputModule, NbButtonModule, NbIconModule, } from '@nebular/theme';
import { NgxaThemeModule } from '@xaphira/ngxa-theme';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { AUTH_INDEXED_DB, PROFILE_INDEXED_DB, SETTINGS_INDEXED_DB, USER_INFO } from '@xaphira/shared';
import { AuthGuardService } from '../services/auth-guard.service';
import { UnauthorizeGuardService } from '../services/unauth-guard.service';
import { AuthTokenService } from '../services/auth-token.service';
import { AuthGuardChildService } from '../services/auth-guard-child.service';
import { LoginPageComponent } from './login/login-page.component';
import { LogoutComponent } from './logout/logout.component';
import { NgxaAuthRoutingModule } from './ngxa-auth-routing.module';
import { NgxaLayoutAuthModule } from '../layout/ngxa-layout-auth.module';
import { AuthSignatureService } from '../services/auth-signature.service';
import { HttpInterceptorTokenService } from '../services/http-interceptor-token.service';
import { HttpInterceptorSignatureService } from '../services/http-interceptor-signature.service';
import { HttpInterceptorLangService } from '../services/http-interceptor-lang.service';
import { HttpInterceptorErrorService } from '../services/http-interceptor-error.service';
import { AuthUserService } from '../services/auth-user.service';
import { AuthIndexedDBService } from '../storage/auth-indexeddb.service';
import { ProfileIndexedDBService } from '../storage/profile-indexeddb.service';
import { SettingsIndexedDBService } from '../storage/settings-indexeddb.service';
import { AuthLanguageService } from '../services/auth-lang.service';
/** @type {?} */
const AUTH_PROVIDERS = [
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorTokenService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorSignatureService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorLangService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorErrorService, multi: true },
    { provide: USER_INFO, useClass: AuthUserService },
    { provide: AUTH_INDEXED_DB, useClass: AuthIndexedDBService },
    { provide: PROFILE_INDEXED_DB, useClass: ProfileIndexedDBService },
    { provide: SETTINGS_INDEXED_DB, useClass: SettingsIndexedDBService },
    AuthGuardService,
    UnauthorizeGuardService,
    AuthTokenService,
    AuthGuardChildService,
    AuthSignatureService,
    AuthLanguageService,
];
/** @type {?} */
const components = [
    LoginPageComponent,
    LogoutComponent,
];
export class NgxaAuthModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return (/** @type {?} */ ({
            ngModule: NgxaAuthModule,
            providers: [
                ...AUTH_PROVIDERS,
            ],
        }));
    }
}
NgxaAuthModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    ...components,
                ],
                imports: [
                    NbCheckboxModule,
                    NbAlertModule,
                    NbInputModule,
                    NbButtonModule,
                    NbIconModule,
                    CommonModule,
                    FormsModule,
                    TranslateModule,
                    ReactiveFormsModule,
                    HttpClientModule,
                    NgxaThemeModule,
                    NgxaLayoutAuthModule,
                    NgxaAuthRoutingModule,
                ],
                exports: [
                    ...components,
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4YS1hdXRoLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B4YXBoaXJhL25neGEtYXV0aC8iLCJzb3VyY2VzIjpbImxpYi9hdXRoL25neGEtYXV0aC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFDTCxnQkFBZ0IsRUFDaEIsYUFBYSxFQUNiLGFBQWEsRUFDYixjQUFjLEVBQ2QsWUFBWSxHQUNiLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDM0UsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxlQUFlLEVBQUUsa0JBQWtCLEVBQUUsbUJBQW1CLEVBQUUsU0FBUyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDdEcsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDbEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDbEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDN0UsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzVELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ25FLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ3pGLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNoRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN6RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUNqRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7TUFFOUQsY0FBYyxHQUFHO0lBQ3JCLEVBQUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSwyQkFBMkIsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFDO0lBQ2pGLEVBQUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSwrQkFBK0IsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFDO0lBQ3JGLEVBQUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSwwQkFBMEIsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFDO0lBQ2hGLEVBQUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSwyQkFBMkIsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFDO0lBQ2pGLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFFO0lBQ2pELEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUUsb0JBQW9CLEVBQUU7SUFDNUQsRUFBRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsUUFBUSxFQUFFLHVCQUF1QixFQUFFO0lBQ2xFLEVBQUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFFBQVEsRUFBRSx3QkFBd0IsRUFBRTtJQUNwRSxnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtDQUNwQjs7TUFFSyxVQUFVLEdBQUc7SUFDakIsa0JBQWtCO0lBQ2xCLGVBQWU7Q0FDaEI7QUF5QkQsTUFBTSxPQUFPLGNBQWM7Ozs7SUFDekIsTUFBTSxDQUFDLE9BQU87UUFDWixPQUFPLG1CQUFxQjtZQUMxQixRQUFRLEVBQUUsY0FBYztZQUN4QixTQUFTLEVBQUU7Z0JBQ1QsR0FBRyxjQUFjO2FBQ2xCO1NBQ0YsRUFBQSxDQUFDO0lBQ0osQ0FBQzs7O1lBL0JGLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUU7b0JBQ1osR0FBRyxVQUFVO2lCQUNkO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxnQkFBZ0I7b0JBQ2hCLGFBQWE7b0JBQ2IsYUFBYTtvQkFDYixjQUFjO29CQUNkLFlBQVk7b0JBQ1osWUFBWTtvQkFDWixXQUFXO29CQUNYLGVBQWU7b0JBQ2YsbUJBQW1CO29CQUNuQixnQkFBZ0I7b0JBQ2hCLGVBQWU7b0JBQ2Ysb0JBQW9CO29CQUNwQixxQkFBcUI7aUJBQ3RCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxHQUFHLFVBQVU7aUJBQ2Q7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBOYkNoZWNrYm94TW9kdWxlLFxuICBOYkFsZXJ0TW9kdWxlLFxuICBOYklucHV0TW9kdWxlLFxuICBOYkJ1dHRvbk1vZHVsZSxcbiAgTmJJY29uTW9kdWxlLFxufSBmcm9tICdAbmVidWxhci90aGVtZSc7XG5pbXBvcnQgeyBOZ3hhVGhlbWVNb2R1bGUgfSBmcm9tICdAeGFwaGlyYS9uZ3hhLXRoZW1lJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUsIEhUVFBfSU5URVJDRVBUT1JTIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgVHJhbnNsYXRlTW9kdWxlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5pbXBvcnQgeyBBVVRIX0lOREVYRURfREIsIFBST0ZJTEVfSU5ERVhFRF9EQiwgU0VUVElOR1NfSU5ERVhFRF9EQiwgVVNFUl9JTkZPIH0gZnJvbSAnQHhhcGhpcmEvc2hhcmVkJztcbmltcG9ydCB7IEF1dGhHdWFyZFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9hdXRoLWd1YXJkLnNlcnZpY2UnO1xuaW1wb3J0IHsgVW5hdXRob3JpemVHdWFyZFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy91bmF1dGgtZ3VhcmQuc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoVG9rZW5TZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvYXV0aC10b2tlbi5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhHdWFyZENoaWxkU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2F1dGgtZ3VhcmQtY2hpbGQuc2VydmljZSc7XG5pbXBvcnQgeyBMb2dpblBhZ2VDb21wb25lbnQgfSBmcm9tICcuL2xvZ2luL2xvZ2luLXBhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IExvZ291dENvbXBvbmVudCB9IGZyb20gJy4vbG9nb3V0L2xvZ291dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmd4YUF1dGhSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9uZ3hhLWF1dGgtcm91dGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgTmd4YUxheW91dEF1dGhNb2R1bGUgfSBmcm9tICcuLi9sYXlvdXQvbmd4YS1sYXlvdXQtYXV0aC5tb2R1bGUnO1xuaW1wb3J0IHsgQXV0aFNpZ25hdHVyZVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9hdXRoLXNpZ25hdHVyZS5zZXJ2aWNlJztcbmltcG9ydCB7IEh0dHBJbnRlcmNlcHRvclRva2VuU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2h0dHAtaW50ZXJjZXB0b3ItdG9rZW4uc2VydmljZSc7XG5pbXBvcnQgeyBIdHRwSW50ZXJjZXB0b3JTaWduYXR1cmVTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvaHR0cC1pbnRlcmNlcHRvci1zaWduYXR1cmUuc2VydmljZSc7XG5pbXBvcnQgeyBIdHRwSW50ZXJjZXB0b3JMYW5nU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2h0dHAtaW50ZXJjZXB0b3ItbGFuZy5zZXJ2aWNlJztcbmltcG9ydCB7IEh0dHBJbnRlcmNlcHRvckVycm9yU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2h0dHAtaW50ZXJjZXB0b3ItZXJyb3Iuc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoVXNlclNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9hdXRoLXVzZXIuc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoSW5kZXhlZERCU2VydmljZSB9IGZyb20gJy4uL3N0b3JhZ2UvYXV0aC1pbmRleGVkZGIuc2VydmljZSc7XG5pbXBvcnQgeyBQcm9maWxlSW5kZXhlZERCU2VydmljZSB9IGZyb20gJy4uL3N0b3JhZ2UvcHJvZmlsZS1pbmRleGVkZGIuc2VydmljZSc7XG5pbXBvcnQgeyBTZXR0aW5nc0luZGV4ZWREQlNlcnZpY2UgfSBmcm9tICcuLi9zdG9yYWdlL3NldHRpbmdzLWluZGV4ZWRkYi5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhMYW5ndWFnZVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9hdXRoLWxhbmcuc2VydmljZSc7XG5cbmNvbnN0IEFVVEhfUFJPVklERVJTID0gW1xuICB7IHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLCB1c2VDbGFzczogSHR0cEludGVyY2VwdG9yVG9rZW5TZXJ2aWNlLCBtdWx0aTogdHJ1ZX0sXG4gIHsgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsIHVzZUNsYXNzOiBIdHRwSW50ZXJjZXB0b3JTaWduYXR1cmVTZXJ2aWNlLCBtdWx0aTogdHJ1ZX0sXG4gIHsgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsIHVzZUNsYXNzOiBIdHRwSW50ZXJjZXB0b3JMYW5nU2VydmljZSwgbXVsdGk6IHRydWV9LFxuICB7IHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLCB1c2VDbGFzczogSHR0cEludGVyY2VwdG9yRXJyb3JTZXJ2aWNlLCBtdWx0aTogdHJ1ZX0sXG4gIHsgcHJvdmlkZTogVVNFUl9JTkZPLCB1c2VDbGFzczogQXV0aFVzZXJTZXJ2aWNlIH0sXG4gIHsgcHJvdmlkZTogQVVUSF9JTkRFWEVEX0RCLCB1c2VDbGFzczogQXV0aEluZGV4ZWREQlNlcnZpY2UgfSxcbiAgeyBwcm92aWRlOiBQUk9GSUxFX0lOREVYRURfREIsIHVzZUNsYXNzOiBQcm9maWxlSW5kZXhlZERCU2VydmljZSB9LFxuICB7IHByb3ZpZGU6IFNFVFRJTkdTX0lOREVYRURfREIsIHVzZUNsYXNzOiBTZXR0aW5nc0luZGV4ZWREQlNlcnZpY2UgfSxcbiAgQXV0aEd1YXJkU2VydmljZSxcbiAgVW5hdXRob3JpemVHdWFyZFNlcnZpY2UsXG4gIEF1dGhUb2tlblNlcnZpY2UsXG4gIEF1dGhHdWFyZENoaWxkU2VydmljZSxcbiAgQXV0aFNpZ25hdHVyZVNlcnZpY2UsXG4gIEF1dGhMYW5ndWFnZVNlcnZpY2UsXG5dO1xuXG5jb25zdCBjb21wb25lbnRzID0gW1xuICBMb2dpblBhZ2VDb21wb25lbnQsXG4gIExvZ291dENvbXBvbmVudCxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIC4uLmNvbXBvbmVudHMsXG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBOYkNoZWNrYm94TW9kdWxlLFxuICAgIE5iQWxlcnRNb2R1bGUsXG4gICAgTmJJbnB1dE1vZHVsZSxcbiAgICBOYkJ1dHRvbk1vZHVsZSxcbiAgICBOYkljb25Nb2R1bGUsXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFRyYW5zbGF0ZU1vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgTmd4YVRoZW1lTW9kdWxlLFxuICAgIE5neGFMYXlvdXRBdXRoTW9kdWxlLFxuICAgIE5neGFBdXRoUm91dGluZ01vZHVsZSxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIC4uLmNvbXBvbmVudHMsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIE5neGFBdXRoTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIDxNb2R1bGVXaXRoUHJvdmlkZXJzPntcbiAgICAgIG5nTW9kdWxlOiBOZ3hhQXV0aE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAuLi5BVVRIX1BST1ZJREVSUyxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl19