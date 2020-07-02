import { HttpRequest } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/empty';
import 'rxjs/add/operator/takeUntil';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { SecurityResourceModel } from '@xaphira/shared';
import { EncryptionService } from '@xaphira/utils';
import { AuthIndexedDBService } from '../storage/auth-indexeddb.service';
export declare class AuthSignatureService {
    private translate;
    private enc;
    private oauthResource;
    private authStorage;
    constructor(translate: TranslateService, enc: EncryptionService, oauthResource: SecurityResourceModel, authStorage: AuthIndexedDBService);
    signHeaders(req: HttpRequest<any>): Observable<HttpRequest<any>>;
    key(): Observable<string>;
    timestamp(): string;
    date(): string;
    signature(url: string): Observable<string>;
    private getPath;
}
