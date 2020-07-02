/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export const PROVIDERS = [
    { provide: ErrorHandler, useClass: ErrorHandlerService },
    CustomPreloadingStrategy,
    AnalyticsService,
    LayoutService,
    StateService,
];
/** @type {?} */
export const NB_MODULES = [
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
export const COMPONENTS = [
    HeaderComponent,
    FooterComponent,
    SearchInputComponent,
    OneColumnLayoutComponent,
    ThreeColumnsLayoutComponent,
    TwoColumnsLayoutComponent,
];
/** @type {?} */
export const PIPES = [
    CapitalizePipe,
    PluralPipe,
    RoundPipe,
    TimingPipe,
    NumberWithCommasPipe,
];
export class NgxaThemeModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return (/** @type {?} */ ({
            ngModule: NgxaThemeModule,
            providers: [
                ...PROVIDERS,
                ...NbThemeModule.forRoot({
                    name: 'default',
                }, [DEFAULT_THEME, COSMIC_THEME, CORPORATE_THEME, DARK_THEME]).providers,
            ],
        }));
    }
}
NgxaThemeModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, ...NB_MODULES],
                declarations: [...COMPONENTS, ...PIPES],
                exports: [CommonModule, ...COMPONENTS, ...PIPES],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4YS10aGVtZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AeGFwaGlyYS9uZ3hhLXRoZW1lLyIsInNvdXJjZXMiOlsibGliL25neGEtdGhlbWUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQXVCLFFBQVEsRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFDTCxlQUFlLEVBQ2YsY0FBYyxFQUNkLFlBQVksRUFDWixjQUFjLEVBQ2QsZUFBZSxFQUNmLFlBQVksRUFDWixtQkFBbUIsRUFDbkIsY0FBYyxFQUNkLGNBQWMsRUFDZCxZQUFZLEVBQ1osYUFBYSxHQUNkLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDdEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFckQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUN4RixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMvQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDakQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDdkUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDbEYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDckYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDM0YsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRWpELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDOztBQUV0RCxNQUFNLE9BQU8sU0FBUyxHQUFHO0lBQ3ZCLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsbUJBQW1CLEVBQUM7SUFDdkQsd0JBQXdCO0lBQ3hCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsWUFBWTtDQUNiOztBQUVELE1BQU0sT0FBTyxVQUFVLEdBQUc7SUFDeEIsZUFBZTtJQUNmLGNBQWM7SUFDZCxZQUFZO0lBQ1osWUFBWTtJQUNaLGVBQWU7SUFDZixjQUFjO0lBQ2QsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGNBQWM7SUFDZCxZQUFZO0lBQ1osZ0JBQWdCO0NBQ2pCOztBQUNELE1BQU0sT0FBTyxVQUFVLEdBQUc7SUFDeEIsZUFBZTtJQUNmLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsd0JBQXdCO0lBQ3hCLDJCQUEyQjtJQUMzQix5QkFBeUI7Q0FDMUI7O0FBQ0QsTUFBTSxPQUFPLEtBQUssR0FBRztJQUNuQixjQUFjO0lBQ2QsVUFBVTtJQUNWLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysb0JBQW9CO0NBQ3JCO0FBT0QsTUFBTSxPQUFPLGVBQWU7Ozs7SUFDMUIsTUFBTSxDQUFDLE9BQU87UUFDWixPQUFPLG1CQUFxQjtZQUMxQixRQUFRLEVBQUUsZUFBZTtZQUN6QixTQUFTLEVBQUU7Z0JBQ1QsR0FBRyxTQUFTO2dCQUNaLEdBQUcsYUFBYSxDQUFDLE9BQU8sQ0FDdEI7b0JBQ0UsSUFBSSxFQUFFLFNBQVM7aUJBQ2hCLEVBQ0QsQ0FBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxVQUFVLENBQUUsQ0FDN0QsQ0FBQyxTQUFTO2FBQ1o7U0FDRixFQUFBLENBQUM7SUFDSixDQUFDOzs7WUFuQkYsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxHQUFHLFVBQVUsQ0FBQztnQkFDdEMsWUFBWSxFQUFFLENBQUMsR0FBRyxVQUFVLEVBQUUsR0FBRyxLQUFLLENBQUM7Z0JBQ3ZDLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxHQUFHLFVBQVUsRUFBRSxHQUFHLEtBQUssQ0FBQzthQUNqRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlLCBFcnJvckhhbmRsZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBOYkFjdGlvbnNNb2R1bGUsXG4gIE5iTGF5b3V0TW9kdWxlLFxuICBOYk1lbnVNb2R1bGUsXG4gIE5iU2VhcmNoTW9kdWxlLFxuICBOYlNpZGViYXJNb2R1bGUsXG4gIE5iVXNlck1vZHVsZSxcbiAgTmJDb250ZXh0TWVudU1vZHVsZSxcbiAgTmJCdXR0b25Nb2R1bGUsXG4gIE5iU2VsZWN0TW9kdWxlLFxuICBOYkljb25Nb2R1bGUsXG4gIE5iVGhlbWVNb2R1bGUsXG59IGZyb20gJ0BuZWJ1bGFyL3RoZW1lJztcbmltcG9ydCB7IE5iRXZhSWNvbnNNb2R1bGUgfSBmcm9tICdAbmVidWxhci9ldmEtaWNvbnMnO1xuaW1wb3J0IHsgTmJTZWN1cml0eU1vZHVsZSB9IGZyb20gJ0BuZWJ1bGFyL3NlY3VyaXR5JztcblxuaW1wb3J0IHsgSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEZvb3RlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZWFyY2hJbnB1dENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9zZWFyY2gtaW5wdXQvc2VhcmNoLWlucHV0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDYXBpdGFsaXplUGlwZSB9IGZyb20gJy4vcGlwZXMvY2FwaXRhbGl6ZS5waXBlJztcbmltcG9ydCB7IFBsdXJhbFBpcGUgfSBmcm9tICcuL3BpcGVzL3BsdXJhbC5waXBlJztcbmltcG9ydCB7IFJvdW5kUGlwZSB9IGZyb20gJy4vcGlwZXMvcm91bmQucGlwZSc7XG5pbXBvcnQgeyBUaW1pbmdQaXBlIH0gZnJvbSAnLi9waXBlcy90aW1pbmcucGlwZSc7XG5pbXBvcnQgeyBOdW1iZXJXaXRoQ29tbWFzUGlwZSB9IGZyb20gJy4vcGlwZXMvbnVtYmVyLXdpdGgtY29tbWFzLnBpcGUnO1xuaW1wb3J0IHsgT25lQ29sdW1uTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXRzL29uZS1jb2x1bW4vb25lLWNvbHVtbi5sYXlvdXQnO1xuaW1wb3J0IHsgVHdvQ29sdW1uc0xheW91dENvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0cy90d28tY29sdW1ucy90d28tY29sdW1ucy5sYXlvdXQnO1xuaW1wb3J0IHsgVGhyZWVDb2x1bW5zTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXRzL3RocmVlLWNvbHVtbnMvdGhyZWUtY29sdW1ucy5sYXlvdXQnO1xuaW1wb3J0IHsgREVGQVVMVF9USEVNRSB9IGZyb20gJy4vc3R5bGVzL3RoZW1lLmRlZmF1bHQnO1xuaW1wb3J0IHsgQ09TTUlDX1RIRU1FIH0gZnJvbSAnLi9zdHlsZXMvdGhlbWUuY29zbWljJztcbmltcG9ydCB7IENPUlBPUkFURV9USEVNRSB9IGZyb20gJy4vc3R5bGVzL3RoZW1lLmNvcnBvcmF0ZSc7XG5pbXBvcnQgeyBEQVJLX1RIRU1FIH0gZnJvbSAnLi9zdHlsZXMvdGhlbWUuZGFyayc7XG5cbmltcG9ydCB7IEVycm9ySGFuZGxlclNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2Vycm9yLWhhbmRsZXIuc2VydmljZSc7XG5pbXBvcnQgeyBDdXN0b21QcmVsb2FkaW5nU3RyYXRlZ3kgfSBmcm9tICcuL3NlcnZpY2VzL3ByZWxvYWRpbmctc3RyYXRlZ3kuc2VydmljZSc7XG5pbXBvcnQgeyBBbmFseXRpY3NTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9hbmFseXRpY3Muc2VydmljZSc7XG5pbXBvcnQgeyBMYXlvdXRTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9sYXlvdXQuc2VydmljZSc7XG5pbXBvcnQgeyBTdGF0ZVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3N0YXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgVHJhbnNsYXRlTW9kdWxlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5cbmV4cG9ydCBjb25zdCBQUk9WSURFUlMgPSBbXG4gIHsgcHJvdmlkZTogRXJyb3JIYW5kbGVyLCB1c2VDbGFzczogRXJyb3JIYW5kbGVyU2VydmljZX0sXG4gIEN1c3RvbVByZWxvYWRpbmdTdHJhdGVneSxcbiAgQW5hbHl0aWNzU2VydmljZSxcbiAgTGF5b3V0U2VydmljZSxcbiAgU3RhdGVTZXJ2aWNlLFxuXTtcblxuZXhwb3J0IGNvbnN0IE5CX01PRFVMRVMgPSBbXG4gIFRyYW5zbGF0ZU1vZHVsZSxcbiAgTmJMYXlvdXRNb2R1bGUsXG4gIE5iTWVudU1vZHVsZSxcbiAgTmJVc2VyTW9kdWxlLFxuICBOYkFjdGlvbnNNb2R1bGUsXG4gIE5iU2VhcmNoTW9kdWxlLFxuICBOYlNpZGViYXJNb2R1bGUsXG4gIE5iQ29udGV4dE1lbnVNb2R1bGUsXG4gIE5iU2VjdXJpdHlNb2R1bGUsXG4gIE5iQnV0dG9uTW9kdWxlLFxuICBOYlNlbGVjdE1vZHVsZSxcbiAgTmJJY29uTW9kdWxlLFxuICBOYkV2YUljb25zTW9kdWxlLFxuXTtcbmV4cG9ydCBjb25zdCBDT01QT05FTlRTID0gW1xuICBIZWFkZXJDb21wb25lbnQsXG4gIEZvb3RlckNvbXBvbmVudCxcbiAgU2VhcmNoSW5wdXRDb21wb25lbnQsXG4gIE9uZUNvbHVtbkxheW91dENvbXBvbmVudCxcbiAgVGhyZWVDb2x1bW5zTGF5b3V0Q29tcG9uZW50LFxuICBUd29Db2x1bW5zTGF5b3V0Q29tcG9uZW50LFxuXTtcbmV4cG9ydCBjb25zdCBQSVBFUyA9IFtcbiAgQ2FwaXRhbGl6ZVBpcGUsXG4gIFBsdXJhbFBpcGUsXG4gIFJvdW5kUGlwZSxcbiAgVGltaW5nUGlwZSxcbiAgTnVtYmVyV2l0aENvbW1hc1BpcGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCAuLi5OQl9NT0RVTEVTXSxcbiAgZGVjbGFyYXRpb25zOiBbLi4uQ09NUE9ORU5UUywgLi4uUElQRVNdLFxuICBleHBvcnRzOiBbQ29tbW9uTW9kdWxlLCAuLi5DT01QT05FTlRTLCAuLi5QSVBFU10sXG59KVxuZXhwb3J0IGNsYXNzIE5neGFUaGVtZU1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiA8TW9kdWxlV2l0aFByb3ZpZGVycz57XG4gICAgICBuZ01vZHVsZTogTmd4YVRoZW1lTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIC4uLlBST1ZJREVSUyxcbiAgICAgICAgLi4uTmJUaGVtZU1vZHVsZS5mb3JSb290KFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdkZWZhdWx0JyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIFsgREVGQVVMVF9USEVNRSwgQ09TTUlDX1RIRU1FLCBDT1JQT1JBVEVfVEhFTUUsIERBUktfVEhFTUUgXSxcbiAgICAgICAgKS5wcm92aWRlcnMsXG4gICAgICBdLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==