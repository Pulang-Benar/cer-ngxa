import { Injector } from '@angular/core';
import { IndexedDBService } from '@xaphira/ngxa-storage';
import { IndexedDBFactoryService } from '@xaphira/shared';
import { ProfileIDB } from '../models/profile.schema';
export declare class ProfileIndexedDBService extends IndexedDBService<ProfileIDB> implements IndexedDBFactoryService {
    constructor(injector: Injector);
    loginStorage(response: any): void;
    logout(): void;
}
