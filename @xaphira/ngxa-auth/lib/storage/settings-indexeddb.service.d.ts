import { Injector } from '@angular/core';
import { IndexedDBService } from '@xaphira/ngxa-storage';
import { IndexedDBFactoryService } from '@xaphira/shared';
import { SettingsIDB } from '../models/settings.schema';
export declare class SettingsIndexedDBService extends IndexedDBService<SettingsIDB> implements IndexedDBFactoryService {
    private translate;
    constructor(injector: Injector);
    loginStorage(response: any): void;
}
