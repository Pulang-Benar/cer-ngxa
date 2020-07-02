import { Observable } from 'rxjs';
import { APIModel, HttpFactoryService } from '@xaphira/shared';
import { User, UserInfo } from '@xaphira/shared';
import { ProfileIndexedDBService } from '../storage/profile-indexeddb.service';
export declare class AuthUserService extends UserInfo {
    private profileIndexedDB;
    private apiPath;
    private httpBaseService;
    constructor(profileIndexedDB: ProfileIndexedDBService, apiPath: APIModel, httpBaseService: HttpFactoryService);
    private loaderUserSubject$;
    loadPhotoUser(): void;
    updatePhotoUser(file: File, checksum: string): Observable<User>;
    getUser(): Observable<any>;
    private getImage;
}
