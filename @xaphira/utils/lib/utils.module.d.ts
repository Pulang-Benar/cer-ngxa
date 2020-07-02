import { ModuleWithProviders } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EncryptionService } from './services/encryption.service';
import { TranslationService } from './services/translation.service';
export declare function createTranslateLoader(http: HttpClient): TranslationService;
export declare const UTILS_PROVIDERS: (typeof EncryptionService)[];
export declare class UtilsModule {
    static forRoot(): ModuleWithProviders;
}
