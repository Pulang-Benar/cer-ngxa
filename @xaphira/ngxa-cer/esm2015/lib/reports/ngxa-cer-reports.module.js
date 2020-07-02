/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NbCardModule, NbAlertModule, NbIconModule, NbDialogModule, NbWindowModule } from '@nebular/theme';
import { NgxaThemeModule } from '@xaphira/ngxa-theme';
import { NgxaInputModule, NgxaButtonModule, NgxaBaseModule, NgxaTableModule, NgxaLabelModule, NgxaCheckBoxModule, NgxaSelectModule, } from '@xaphira/ngxa-common';
import { NgxaCerReportsComponent } from './ngxa-cer-reports.component';
import { NgxaCerReportsRoutingModule } from './ngxa-cer-reports-routing.module';
import { ReportsPanicService } from './services/reports-panic.service';
import { NgxaReportsEmergencyListPageComponent } from './emergency/list/ngxa-reports-emergency-list-page.component';
import { NgxaFakePromptComponent } from './emergency/detail/prompt/ngxa-fake-prompt.component';
import { NgxaReportsPreviewComponent } from './emergency/detail/preview/ngxa-reports-preview.component';
import { NgxaReportsEmergencyDetailComponent, } from './emergency/detail/ngxa-reports-emergency-detail.component';
import { NgxaReportsFakeListPageComponent } from './fake/list/ngxa-reports-fake-list-page.component';
/** @type {?} */
const components = [
    NgxaCerReportsComponent,
    NgxaReportsEmergencyListPageComponent,
    NgxaReportsEmergencyDetailComponent,
    NgxaFakePromptComponent,
    NgxaReportsPreviewComponent,
    NgxaReportsFakeListPageComponent,
];
/** @type {?} */
const modules = [
    FormsModule,
    ReactiveFormsModule,
    NbCardModule,
    NbAlertModule,
    NbIconModule,
    NbDialogModule.forChild(),
    NbWindowModule.forChild(),
    NgxaThemeModule,
    NgxaInputModule,
    NgxaCheckBoxModule,
    NgxaButtonModule,
    NgxaBaseModule,
    NgxaSelectModule,
    NgxDatatableModule,
    NgxaTableModule,
    NgxaLabelModule,
    NgxaCerReportsRoutingModule,
];
/** @type {?} */
const providers = [
    ReportsPanicService,
];
/** @type {?} */
const entry_components = [
    NgxaFakePromptComponent,
    NgxaReportsPreviewComponent,
];
export class NgxaCerReportsModule {
}
NgxaCerReportsModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    ...modules,
                ],
                declarations: [
                    ...components,
                ],
                providers: [
                    ...providers,
                ],
                entryComponents: [
                    ...entry_components,
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4YS1jZXItcmVwb3J0cy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AeGFwaGlyYS9uZ3hhLWNlci8iLCJzb3VyY2VzIjpbImxpYi9yZXBvcnRzL25neGEtY2VyLXJlcG9ydHMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsWUFBWSxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNHLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQ0wsZUFBZSxFQUNmLGdCQUFnQixFQUNoQixjQUFjLEVBQ2QsZUFBZSxFQUNmLGVBQWUsRUFDZixrQkFBa0IsRUFDbEIsZ0JBQWdCLEdBQ2pCLE1BQU0sc0JBQXNCLENBQUM7QUFDOUIsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDdkUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDaEYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDdkUsT0FBTyxFQUFFLHFDQUFxQyxFQUFFLE1BQU0sNkRBQTZELENBQUM7QUFDcEgsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDL0YsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFDeEcsT0FBTyxFQUNMLG1DQUFtQyxHQUNwQyxNQUFNLDREQUE0RCxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLG1EQUFtRCxDQUFDOztNQUUvRixVQUFVLEdBQUc7SUFDakIsdUJBQXVCO0lBQ3ZCLHFDQUFxQztJQUNyQyxtQ0FBbUM7SUFDbkMsdUJBQXVCO0lBQ3ZCLDJCQUEyQjtJQUMzQixnQ0FBZ0M7Q0FDakM7O01BRUssT0FBTyxHQUFHO0lBQ2QsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osYUFBYTtJQUNiLFlBQVk7SUFDWixjQUFjLENBQUMsUUFBUSxFQUFFO0lBQ3pCLGNBQWMsQ0FBQyxRQUFRLEVBQUU7SUFDekIsZUFBZTtJQUNmLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixlQUFlO0lBQ2YsMkJBQTJCO0NBQzVCOztNQUVLLFNBQVMsR0FBRztJQUNoQixtQkFBbUI7Q0FDcEI7O01BRUssZ0JBQWdCLEdBQUc7SUFDdkIsdUJBQXVCO0lBQ3ZCLDJCQUEyQjtDQUM1QjtBQWdCRCxNQUFNLE9BQU8sb0JBQW9COzs7WUFkaEMsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxHQUFHLE9BQU87aUJBQ1g7Z0JBQ0QsWUFBWSxFQUFFO29CQUNaLEdBQUcsVUFBVTtpQkFDZDtnQkFDRCxTQUFTLEVBQUU7b0JBQ1QsR0FBRyxTQUFTO2lCQUNiO2dCQUNELGVBQWUsRUFBRTtvQkFDZixHQUFHLGdCQUFnQjtpQkFDcEI7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE5neERhdGF0YWJsZU1vZHVsZSB9IGZyb20gJ0Bzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlJztcbmltcG9ydCB7IE5iQ2FyZE1vZHVsZSwgTmJBbGVydE1vZHVsZSwgTmJJY29uTW9kdWxlLCBOYkRpYWxvZ01vZHVsZSwgTmJXaW5kb3dNb2R1bGUgfSBmcm9tICdAbmVidWxhci90aGVtZSc7XG5pbXBvcnQgeyBOZ3hhVGhlbWVNb2R1bGUgfSBmcm9tICdAeGFwaGlyYS9uZ3hhLXRoZW1lJztcbmltcG9ydCB7XG4gIE5neGFJbnB1dE1vZHVsZSxcbiAgTmd4YUJ1dHRvbk1vZHVsZSxcbiAgTmd4YUJhc2VNb2R1bGUsXG4gIE5neGFUYWJsZU1vZHVsZSxcbiAgTmd4YUxhYmVsTW9kdWxlLFxuICBOZ3hhQ2hlY2tCb3hNb2R1bGUsXG4gIE5neGFTZWxlY3RNb2R1bGUsXG59IGZyb20gJ0B4YXBoaXJhL25neGEtY29tbW9uJztcbmltcG9ydCB7IE5neGFDZXJSZXBvcnRzQ29tcG9uZW50IH0gZnJvbSAnLi9uZ3hhLWNlci1yZXBvcnRzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ3hhQ2VyUmVwb3J0c1JvdXRpbmdNb2R1bGUgfSBmcm9tICcuL25neGEtY2VyLXJlcG9ydHMtcm91dGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgUmVwb3J0c1BhbmljU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvcmVwb3J0cy1wYW5pYy5zZXJ2aWNlJztcbmltcG9ydCB7IE5neGFSZXBvcnRzRW1lcmdlbmN5TGlzdFBhZ2VDb21wb25lbnQgfSBmcm9tICcuL2VtZXJnZW5jeS9saXN0L25neGEtcmVwb3J0cy1lbWVyZ2VuY3ktbGlzdC1wYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ3hhRmFrZVByb21wdENvbXBvbmVudCB9IGZyb20gJy4vZW1lcmdlbmN5L2RldGFpbC9wcm9tcHQvbmd4YS1mYWtlLXByb21wdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmd4YVJlcG9ydHNQcmV2aWV3Q29tcG9uZW50IH0gZnJvbSAnLi9lbWVyZ2VuY3kvZGV0YWlsL3ByZXZpZXcvbmd4YS1yZXBvcnRzLXByZXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7XG4gIE5neGFSZXBvcnRzRW1lcmdlbmN5RGV0YWlsQ29tcG9uZW50LFxufSBmcm9tICcuL2VtZXJnZW5jeS9kZXRhaWwvbmd4YS1yZXBvcnRzLWVtZXJnZW5jeS1kZXRhaWwuY29tcG9uZW50JztcbmltcG9ydCB7IE5neGFSZXBvcnRzRmFrZUxpc3RQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9mYWtlL2xpc3Qvbmd4YS1yZXBvcnRzLWZha2UtbGlzdC1wYWdlLmNvbXBvbmVudCc7XG5cbmNvbnN0IGNvbXBvbmVudHMgPSBbXG4gIE5neGFDZXJSZXBvcnRzQ29tcG9uZW50LFxuICBOZ3hhUmVwb3J0c0VtZXJnZW5jeUxpc3RQYWdlQ29tcG9uZW50LFxuICBOZ3hhUmVwb3J0c0VtZXJnZW5jeURldGFpbENvbXBvbmVudCxcbiAgTmd4YUZha2VQcm9tcHRDb21wb25lbnQsXG4gIE5neGFSZXBvcnRzUHJldmlld0NvbXBvbmVudCxcbiAgTmd4YVJlcG9ydHNGYWtlTGlzdFBhZ2VDb21wb25lbnQsXG5dO1xuXG5jb25zdCBtb2R1bGVzID0gW1xuICBGb3Jtc01vZHVsZSxcbiAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgTmJDYXJkTW9kdWxlLFxuICBOYkFsZXJ0TW9kdWxlLFxuICBOYkljb25Nb2R1bGUsXG4gIE5iRGlhbG9nTW9kdWxlLmZvckNoaWxkKCksXG4gIE5iV2luZG93TW9kdWxlLmZvckNoaWxkKCksXG4gIE5neGFUaGVtZU1vZHVsZSxcbiAgTmd4YUlucHV0TW9kdWxlLFxuICBOZ3hhQ2hlY2tCb3hNb2R1bGUsXG4gIE5neGFCdXR0b25Nb2R1bGUsXG4gIE5neGFCYXNlTW9kdWxlLFxuICBOZ3hhU2VsZWN0TW9kdWxlLFxuICBOZ3hEYXRhdGFibGVNb2R1bGUsXG4gIE5neGFUYWJsZU1vZHVsZSxcbiAgTmd4YUxhYmVsTW9kdWxlLFxuICBOZ3hhQ2VyUmVwb3J0c1JvdXRpbmdNb2R1bGUsXG5dO1xuXG5jb25zdCBwcm92aWRlcnMgPSBbXG4gIFJlcG9ydHNQYW5pY1NlcnZpY2UsXG5dO1xuXG5jb25zdCBlbnRyeV9jb21wb25lbnRzID0gW1xuICBOZ3hhRmFrZVByb21wdENvbXBvbmVudCxcbiAgTmd4YVJlcG9ydHNQcmV2aWV3Q29tcG9uZW50LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIC4uLm1vZHVsZXMsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIC4uLmNvbXBvbmVudHMsXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIC4uLnByb3ZpZGVycyxcbiAgXSxcbiAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgLi4uZW50cnlfY29tcG9uZW50cyxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgTmd4YUNlclJlcG9ydHNNb2R1bGUgeyB9XG4iXX0=