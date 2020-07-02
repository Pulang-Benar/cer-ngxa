import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthTokenService } from './auth-token.service';
import { Observable } from 'rxjs';
export declare class UnauthorizeGuardService implements CanActivate {
    private router;
    private authTokenService;
    constructor(router: Router, authTokenService: AuthTokenService);
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>;
}
