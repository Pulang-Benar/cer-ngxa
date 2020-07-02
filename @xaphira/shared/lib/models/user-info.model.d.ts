import { Observable } from 'rxjs';
export interface User {
    name: string;
    picture: string;
}
export declare abstract class UserInfo {
    abstract loadPhotoUser(): void;
    abstract updatePhotoUser(file: File, checksum: string): Observable<User>;
    abstract getUser(): Observable<User>;
}
