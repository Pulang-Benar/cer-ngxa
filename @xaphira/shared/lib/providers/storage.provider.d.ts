import { InjectionToken } from '@angular/core';
import { IndexedDBFactoryService } from '../services/indexeddb-factory.service';
import { IndexedDBEncFactoryService } from '../services/indexeddb-enc-factory.service';
export declare const AUTH_INDEXED_DB: InjectionToken<IndexedDBEncFactoryService>;
export declare const PROFILE_INDEXED_DB: InjectionToken<IndexedDBFactoryService>;
export declare const SETTINGS_INDEXED_DB: InjectionToken<IndexedDBFactoryService>;
export declare const PANIC_INDEXED_DB: InjectionToken<IndexedDBFactoryService>;
