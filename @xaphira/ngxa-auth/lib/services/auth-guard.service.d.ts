import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthTokenService } from './auth-token.service';
import { Observable } from 'rxjs';
import { UserInfo } from '@xaphira/shared';
export declare class AuthGuardService implements CanActivate {
    private router;
    private authTokenService;
    private authService;
    constructor(router: Router, authTokenService: AuthTokenService, authService: UserInfo);
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>;
}
