import { ModuleWithProviders } from '@angular/core';
import { StorageMaskService } from './services/storage-mask.service';
export declare const STORAGE_PROVIDERS: {
    provide: import("@angular/core").InjectionToken<import("..").StorageFactoryService>;
    useClass: typeof StorageMaskService;
}[];
export declare class NgxaStorageModule {
    static forRoot(): ModuleWithProviders;
}
