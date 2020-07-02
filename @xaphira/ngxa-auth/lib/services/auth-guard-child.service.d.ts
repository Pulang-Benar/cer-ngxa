import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';
import { EncryptionService } from '@xaphira/utils';
import { AuthTokenService } from './auth-token.service';
import { AuthIndexedDBService } from '../storage/auth-indexeddb.service';
import { Observable } from 'rxjs';
export declare class AuthGuardChildService implements CanActivateChild {
    private router;
    private authTokenService;
    private enc;
    private storage;
    constructor(router: Router, authTokenService: AuthTokenService, enc: EncryptionService, storage: AuthIndexedDBService);
    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>;
}
