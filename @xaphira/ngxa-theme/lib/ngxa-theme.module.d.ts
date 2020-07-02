import { ModuleWithProviders, ErrorHandler } from '@angular/core';
import { NbLayoutModule, NbIconModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { PluralPipe } from './pipes/plural.pipe';
import { RoundPipe } from './pipes/round.pipe';
import { ErrorHandlerService } from './services/error-handler.service';
import { CustomPreloadingStrategy } from './services/preloading-strategy.service';
import { AnalyticsService } from './services/analytics.service';
import { LayoutService } from './services/layout.service';
import { StateService } from './services/state.service';
export declare const PROVIDERS: (typeof LayoutService | typeof CustomPreloadingStrategy | typeof AnalyticsService | typeof StateService | {
    provide: typeof ErrorHandler;
    useClass: typeof ErrorHandlerService;
})[];
export declare const NB_MODULES: (typeof NbLayoutModule | typeof NbIconModule | typeof NbEvaIconsModule)[];
export declare const COMPONENTS: (typeof HeaderComponent | typeof FooterComponent)[];
export declare const PIPES: (typeof CapitalizePipe | typeof PluralPipe | typeof RoundPipe)[];
export declare class NgxaThemeModule {
    static forRoot(): ModuleWithProviders;
}
