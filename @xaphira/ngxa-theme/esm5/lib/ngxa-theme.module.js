/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbActionsModule, NbLayoutModule, NbMenuModule, NbSearchModule, NbSidebarModule, NbUserModule, NbContextMenuModule, NbButtonModule, NbSelectModule, NbIconModule, NbThemeModule, } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbSecurityModule } from '@nebular/security';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { PluralPipe } from './pipes/plural.pipe';
import { RoundPipe } from './pipes/round.pipe';
import { TimingPipe } from './pipes/timing.pipe';
import { NumberWithCommasPipe } from './pipes/number-with-commas.pipe';
import { OneColumnLayoutComponent } from './layouts/one-column/one-column.layout';
import { TwoColumnsLayoutComponent } from './layouts/two-columns/two-columns.layout';
import { ThreeColumnsLayoutComponent } from './layouts/three-columns/three-columns.layout';
import { DEFAULT_THEME } from './styles/theme.default';
import { COSMIC_THEME } from './styles/theme.cosmic';
import { CORPORATE_THEME } from './styles/theme.corporate';
import { DARK_THEME } from './styles/theme.dark';
import { ErrorHandlerService } from './services/error-handler.service';
import { CustomPreloadingStrategy } from './services/preloading-strategy.service';
import { AnalyticsService } from './services/analytics.service';
import { LayoutService } from './services/layout.service';
import { StateService } from './services/state.service';
import { TranslateModule } from '@ngx-translate/core';
/** @type {?} */
export var PROVIDERS = [
    { provide: ErrorHandler, useClass: ErrorHandlerService },
    CustomPreloadingStrategy,
    AnalyticsService,
    LayoutService,
    StateService,
];
/** @type {?} */
export var NB_MODULES = [
    TranslateModule,
    NbLayoutModule,
    NbMenuModule,
    NbUserModule,
    NbActionsModule,
    NbSearchModule,
    NbSidebarModule,
    NbContextMenuModule,
    NbSecurityModule,
    NbButtonModule,
    NbSelectModule,
    NbIconModule,
    NbEvaIconsModule,
];
/** @type {?} */
export var COMPONENTS = [
    HeaderComponent,
    FooterComponent,
    SearchInputComponent,
    OneColumnLayoutComponent,
    ThreeColumnsLayoutComponent,
    TwoColumnsLayoutComponent,
];
/** @type {?} */
export var PIPES = [
    CapitalizePipe,
    PluralPipe,
    RoundPipe,
    TimingPipe,
    NumberWithCommasPipe,
];
var NgxaThemeModule = /** @class */ (function () {
    function NgxaThemeModule() {
    }
    /**
     * @return {?}
     */
    NgxaThemeModule.forRoot = /**
     * @return {?}
     */
    function () {
        return (/** @type {?} */ ({
            ngModule: NgxaThemeModule,
            providers: tslib_1.__spread(PROVIDERS, NbThemeModule.forRoot({
                name: 'default',
            }, [DEFAULT_THEME, COSMIC_THEME, CORPORATE_THEME, DARK_THEME]).providers),
        }));
    };
    NgxaThemeModule.decorators = [
        { type: NgModule, args: [{
                    imports: tslib_1.__spread([CommonModule], NB_MODULES),
                    declarations: tslib_1.__spread(COMPONENTS, PIPES),
                    exports: tslib_1.__spread([CommonModule], COMPONENTS, PIPES),
                },] }
    ];
    return NgxaThemeModule;
}());
export { NgxaThemeModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4YS10aGVtZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AeGFwaGlyYS9uZ3hhLXRoZW1lLyIsInNvdXJjZXMiOlsibGliL25neGEtdGhlbWUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQ0wsZUFBZSxFQUNmLGNBQWMsRUFDZCxZQUFZLEVBQ1osY0FBYyxFQUNkLGVBQWUsRUFDZixZQUFZLEVBQ1osbUJBQW1CLEVBQ25CLGNBQWMsRUFDZCxjQUFjLEVBQ2QsWUFBWSxFQUNaLGFBQWEsR0FDZCxNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRXJELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdkUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDeEYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDL0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ3JGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQzNGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDckQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUVqRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUNsRixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7QUFFdEQsTUFBTSxLQUFPLFNBQVMsR0FBRztJQUN2QixFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLG1CQUFtQixFQUFDO0lBQ3ZELHdCQUF3QjtJQUN4QixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFlBQVk7Q0FDYjs7QUFFRCxNQUFNLEtBQU8sVUFBVSxHQUFHO0lBQ3hCLGVBQWU7SUFDZixjQUFjO0lBQ2QsWUFBWTtJQUNaLFlBQVk7SUFDWixlQUFlO0lBQ2YsY0FBYztJQUNkLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxjQUFjO0lBQ2QsWUFBWTtJQUNaLGdCQUFnQjtDQUNqQjs7QUFDRCxNQUFNLEtBQU8sVUFBVSxHQUFHO0lBQ3hCLGVBQWU7SUFDZixlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLHdCQUF3QjtJQUN4QiwyQkFBMkI7SUFDM0IseUJBQXlCO0NBQzFCOztBQUNELE1BQU0sS0FBTyxLQUFLLEdBQUc7SUFDbkIsY0FBYztJQUNkLFVBQVU7SUFDVixTQUFTO0lBQ1QsVUFBVTtJQUNWLG9CQUFvQjtDQUNyQjtBQUVEO0lBQUE7SUFvQkEsQ0FBQzs7OztJQWRRLHVCQUFPOzs7SUFBZDtRQUNFLE9BQU8sbUJBQXFCO1lBQzFCLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFNBQVMsbUJBQ0osU0FBUyxFQUNULGFBQWEsQ0FBQyxPQUFPLENBQ3RCO2dCQUNFLElBQUksRUFBRSxTQUFTO2FBQ2hCLEVBQ0QsQ0FBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxVQUFVLENBQUUsQ0FDN0QsQ0FBQyxTQUFTLENBQ1o7U0FDRixFQUFBLENBQUM7SUFDSixDQUFDOztnQkFuQkYsUUFBUSxTQUFDO29CQUNSLE9BQU8sb0JBQUcsWUFBWSxHQUFLLFVBQVUsQ0FBQztvQkFDdEMsWUFBWSxtQkFBTSxVQUFVLEVBQUssS0FBSyxDQUFDO29CQUN2QyxPQUFPLG9CQUFHLFlBQVksR0FBSyxVQUFVLEVBQUssS0FBSyxDQUFDO2lCQUNqRDs7SUFnQkQsc0JBQUM7Q0FBQSxBQXBCRCxJQW9CQztTQWZZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSwgRXJyb3JIYW5kbGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgTmJBY3Rpb25zTW9kdWxlLFxuICBOYkxheW91dE1vZHVsZSxcbiAgTmJNZW51TW9kdWxlLFxuICBOYlNlYXJjaE1vZHVsZSxcbiAgTmJTaWRlYmFyTW9kdWxlLFxuICBOYlVzZXJNb2R1bGUsXG4gIE5iQ29udGV4dE1lbnVNb2R1bGUsXG4gIE5iQnV0dG9uTW9kdWxlLFxuICBOYlNlbGVjdE1vZHVsZSxcbiAgTmJJY29uTW9kdWxlLFxuICBOYlRoZW1lTW9kdWxlLFxufSBmcm9tICdAbmVidWxhci90aGVtZSc7XG5pbXBvcnQgeyBOYkV2YUljb25zTW9kdWxlIH0gZnJvbSAnQG5lYnVsYXIvZXZhLWljb25zJztcbmltcG9ydCB7IE5iU2VjdXJpdHlNb2R1bGUgfSBmcm9tICdAbmVidWxhci9zZWN1cml0eSc7XG5cbmltcG9ydCB7IEhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb290ZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2VhcmNoSW5wdXRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc2VhcmNoLWlucHV0L3NlYXJjaC1pbnB1dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2FwaXRhbGl6ZVBpcGUgfSBmcm9tICcuL3BpcGVzL2NhcGl0YWxpemUucGlwZSc7XG5pbXBvcnQgeyBQbHVyYWxQaXBlIH0gZnJvbSAnLi9waXBlcy9wbHVyYWwucGlwZSc7XG5pbXBvcnQgeyBSb3VuZFBpcGUgfSBmcm9tICcuL3BpcGVzL3JvdW5kLnBpcGUnO1xuaW1wb3J0IHsgVGltaW5nUGlwZSB9IGZyb20gJy4vcGlwZXMvdGltaW5nLnBpcGUnO1xuaW1wb3J0IHsgTnVtYmVyV2l0aENvbW1hc1BpcGUgfSBmcm9tICcuL3BpcGVzL251bWJlci13aXRoLWNvbW1hcy5waXBlJztcbmltcG9ydCB7IE9uZUNvbHVtbkxheW91dENvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0cy9vbmUtY29sdW1uL29uZS1jb2x1bW4ubGF5b3V0JztcbmltcG9ydCB7IFR3b0NvbHVtbnNMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuL2xheW91dHMvdHdvLWNvbHVtbnMvdHdvLWNvbHVtbnMubGF5b3V0JztcbmltcG9ydCB7IFRocmVlQ29sdW1uc0xheW91dENvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0cy90aHJlZS1jb2x1bW5zL3RocmVlLWNvbHVtbnMubGF5b3V0JztcbmltcG9ydCB7IERFRkFVTFRfVEhFTUUgfSBmcm9tICcuL3N0eWxlcy90aGVtZS5kZWZhdWx0JztcbmltcG9ydCB7IENPU01JQ19USEVNRSB9IGZyb20gJy4vc3R5bGVzL3RoZW1lLmNvc21pYyc7XG5pbXBvcnQgeyBDT1JQT1JBVEVfVEhFTUUgfSBmcm9tICcuL3N0eWxlcy90aGVtZS5jb3Jwb3JhdGUnO1xuaW1wb3J0IHsgREFSS19USEVNRSB9IGZyb20gJy4vc3R5bGVzL3RoZW1lLmRhcmsnO1xuXG5pbXBvcnQgeyBFcnJvckhhbmRsZXJTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9lcnJvci1oYW5kbGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ3VzdG9tUHJlbG9hZGluZ1N0cmF0ZWd5IH0gZnJvbSAnLi9zZXJ2aWNlcy9wcmVsb2FkaW5nLXN0cmF0ZWd5LnNlcnZpY2UnO1xuaW1wb3J0IHsgQW5hbHl0aWNzU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvYW5hbHl0aWNzLnNlcnZpY2UnO1xuaW1wb3J0IHsgTGF5b3V0U2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvbGF5b3V0LnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9zdGF0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IFRyYW5zbGF0ZU1vZHVsZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuXG5leHBvcnQgY29uc3QgUFJPVklERVJTID0gW1xuICB7IHByb3ZpZGU6IEVycm9ySGFuZGxlciwgdXNlQ2xhc3M6IEVycm9ySGFuZGxlclNlcnZpY2V9LFxuICBDdXN0b21QcmVsb2FkaW5nU3RyYXRlZ3ksXG4gIEFuYWx5dGljc1NlcnZpY2UsXG4gIExheW91dFNlcnZpY2UsXG4gIFN0YXRlU2VydmljZSxcbl07XG5cbmV4cG9ydCBjb25zdCBOQl9NT0RVTEVTID0gW1xuICBUcmFuc2xhdGVNb2R1bGUsXG4gIE5iTGF5b3V0TW9kdWxlLFxuICBOYk1lbnVNb2R1bGUsXG4gIE5iVXNlck1vZHVsZSxcbiAgTmJBY3Rpb25zTW9kdWxlLFxuICBOYlNlYXJjaE1vZHVsZSxcbiAgTmJTaWRlYmFyTW9kdWxlLFxuICBOYkNvbnRleHRNZW51TW9kdWxlLFxuICBOYlNlY3VyaXR5TW9kdWxlLFxuICBOYkJ1dHRvbk1vZHVsZSxcbiAgTmJTZWxlY3RNb2R1bGUsXG4gIE5iSWNvbk1vZHVsZSxcbiAgTmJFdmFJY29uc01vZHVsZSxcbl07XG5leHBvcnQgY29uc3QgQ09NUE9ORU5UUyA9IFtcbiAgSGVhZGVyQ29tcG9uZW50LFxuICBGb290ZXJDb21wb25lbnQsXG4gIFNlYXJjaElucHV0Q29tcG9uZW50LFxuICBPbmVDb2x1bW5MYXlvdXRDb21wb25lbnQsXG4gIFRocmVlQ29sdW1uc0xheW91dENvbXBvbmVudCxcbiAgVHdvQ29sdW1uc0xheW91dENvbXBvbmVudCxcbl07XG5leHBvcnQgY29uc3QgUElQRVMgPSBbXG4gIENhcGl0YWxpemVQaXBlLFxuICBQbHVyYWxQaXBlLFxuICBSb3VuZFBpcGUsXG4gIFRpbWluZ1BpcGUsXG4gIE51bWJlcldpdGhDb21tYXNQaXBlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgLi4uTkJfTU9EVUxFU10sXG4gIGRlY2xhcmF0aW9uczogWy4uLkNPTVBPTkVOVFMsIC4uLlBJUEVTXSxcbiAgZXhwb3J0czogW0NvbW1vbk1vZHVsZSwgLi4uQ09NUE9ORU5UUywgLi4uUElQRVNdLFxufSlcbmV4cG9ydCBjbGFzcyBOZ3hhVGhlbWVNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4gPE1vZHVsZVdpdGhQcm92aWRlcnM+e1xuICAgICAgbmdNb2R1bGU6IE5neGFUaGVtZU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAuLi5QUk9WSURFUlMsXG4gICAgICAgIC4uLk5iVGhlbWVNb2R1bGUuZm9yUm9vdChcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnZGVmYXVsdCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbIERFRkFVTFRfVEhFTUUsIENPU01JQ19USEVNRSwgQ09SUE9SQVRFX1RIRU1FLCBEQVJLX1RIRU1FIF0sXG4gICAgICAgICkucHJvdmlkZXJzLFxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG4iXX0=