import { Injector } from '@angular/core';
import { IndexedDBService } from '@xaphira/ngxa-storage';
import { IndexedDBFactoryService } from '@xaphira/shared';
import { PanicIDB } from '../models/panic.schema';
export declare class PanicIndexedDBService extends IndexedDBService<PanicIDB> implements IndexedDBFactoryService {
    constructor(injector: Injector);
}
