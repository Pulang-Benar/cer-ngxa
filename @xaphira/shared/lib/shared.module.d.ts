import { ModuleWithProviders } from '@angular/core';
import { HttpCommonService } from './services/http-common.service';
export declare const SHARED_PROVIDERS: {
    provide: import("@angular/core").InjectionToken<import("..").HttpFactoryService>;
    useClass: typeof HttpCommonService;
}[];
export declare class SharedModule {
    static forRoot(): ModuleWithProviders;
}
