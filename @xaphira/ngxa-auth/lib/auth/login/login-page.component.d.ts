import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthTokenService } from '../../services/auth-token.service';
export declare class LoginPageComponent {
    private router;
    private authTokenService;
    responseError: any;
    buttonLogin: boolean;
    private progressBar;
    form: FormGroup;
    constructor(router: Router, authTokenService: AuthTokenService);
    login(): void;
    readonly hasErrorUsername: boolean;
    readonly hasSuccessUsername: boolean;
    readonly hasErrorPassword: boolean;
    readonly hasSuccessPassword: boolean;
}
