import { Injectable, Injector } from '@angular/core';
import { IndexedDBService } from '@xaphira/ngxa-storage';
import { IndexedDBFactoryService } from '@xaphira/shared';
import { PanicIDB } from '../models/panic.schema';

@Injectable({providedIn : 'root'})
export class PanicIndexedDBService extends IndexedDBService<PanicIDB> implements IndexedDBFactoryService {

  constructor(injector: Injector) {
    super(injector, 'cer', 1, '#cer-panic');
  }

}
