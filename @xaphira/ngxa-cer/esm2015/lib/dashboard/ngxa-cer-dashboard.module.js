/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbCardModule, NbAlertModule, NbIconModule, NbDialogModule, NbWindowModule } from '@nebular/theme';
import { NgxaThemeModule } from '@xaphira/ngxa-theme';
import { NgxaInputModule, NgxaCheckBoxModule, NgxaButtonModule, NgxaBaseModule, NgxaSelectModule, NgxaMapsModule, NgxaTableModule, NgxaLabelModule, } from '@xaphira/ngxa-common';
import { NgxaCerDashboardRoutingModule } from './ngxa-cer-dashboard-routing.module';
import { NgxaCerMonitoringPageComponent } from './monitoring/ngxa-cer-monitoring-page.component';
import { NgxaCerMonitoringDetailComponent } from './monitoring/detail/ngxa-cer-monitoring-detail.component';
import { NgxaCerSlideOutComponent } from './monitoring/slide-out/ngxa-cer-slide-out.component';
import { NgxaCerMonitoringInfoComponent } from './monitoring/info/ngxa-cer-monitoring-info.component';
import { NgxaDashboardComponent } from './ngxa-dashboard.component';
import { NgxaCerDatatableComponent } from './monitoring/detail/datatable/ngxa-cer-datatable.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxaCerMonitoringPreviewComponent } from './monitoring/preview/ngxa-cer-monitoring-preview.component';
import { NgxaFakeReportPromptComponent } from './monitoring/detail/prompt/ngxa-fake-report-prompt.component';
/** @type {?} */
const components = [
    NgxaDashboardComponent,
    NgxaCerMonitoringPageComponent,
    NgxaCerMonitoringInfoComponent,
    NgxaCerSlideOutComponent,
    NgxaCerDatatableComponent,
    NgxaCerMonitoringDetailComponent,
    NgxaCerMonitoringPreviewComponent,
    NgxaFakeReportPromptComponent,
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
    NgxaMapsModule,
    NgxDatatableModule,
    NgxaTableModule,
    NgxaLabelModule,
    NgxaCerDashboardRoutingModule,
];
/** @type {?} */
const providers = [];
/** @type {?} */
const entryComponents = [
    NgxaCerMonitoringPreviewComponent,
    NgxaFakeReportPromptComponent,
];
export class NgxaCerDashboardModule {
}
NgxaCerDashboardModule.decorators = [
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
                    ...entryComponents,
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4YS1jZXItZGFzaGJvYXJkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B4YXBoaXJhL25neGEtY2VyLyIsInNvdXJjZXMiOlsibGliL2Rhc2hib2FyZC9uZ3hhLWNlci1kYXNoYm9hcmQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsWUFBWSxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNHLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQ0wsZUFBZSxFQUNmLGtCQUFrQixFQUNsQixnQkFBZ0IsRUFDaEIsY0FBYyxFQUNkLGdCQUFnQixFQUNoQixjQUFjLEVBQ2QsZUFBZSxFQUNmLGVBQWUsR0FDaEIsTUFBTSxzQkFBc0IsQ0FBQztBQUM5QixPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNwRixPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUNqRyxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUM1RyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUMvRixPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUN0RyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNwRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUN2RyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUMvRyxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSw4REFBOEQsQ0FBQzs7TUFFdkcsVUFBVSxHQUFHO0lBQ2pCLHNCQUFzQjtJQUN0Qiw4QkFBOEI7SUFDOUIsOEJBQThCO0lBQzlCLHdCQUF3QjtJQUN4Qix5QkFBeUI7SUFDekIsZ0NBQWdDO0lBQ2hDLGlDQUFpQztJQUNqQyw2QkFBNkI7Q0FDOUI7O01BRUssT0FBTyxHQUFHO0lBQ2QsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osYUFBYTtJQUNiLFlBQVk7SUFDWixjQUFjLENBQUMsUUFBUSxFQUFFO0lBQ3pCLGNBQWMsQ0FBQyxRQUFRLEVBQUU7SUFDekIsZUFBZTtJQUNmLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZUFBZTtJQUNmLDZCQUE2QjtDQUM5Qjs7TUFFSyxTQUFTLEdBQUcsRUFDakI7O01BRUssZUFBZSxHQUFHO0lBQ3RCLGlDQUFpQztJQUNqQyw2QkFBNkI7Q0FDOUI7QUFnQkQsTUFBTSxPQUFPLHNCQUFzQjs7O1lBZGxDLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsR0FBRyxPQUFPO2lCQUNYO2dCQUNELFlBQVksRUFBRTtvQkFDWixHQUFHLFVBQVU7aUJBQ2Q7Z0JBQ0QsU0FBUyxFQUFFO29CQUNULEdBQUcsU0FBUztpQkFDYjtnQkFDRCxlQUFlLEVBQUU7b0JBQ2YsR0FBRyxlQUFlO2lCQUNuQjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTmJDYXJkTW9kdWxlLCBOYkFsZXJ0TW9kdWxlLCBOYkljb25Nb2R1bGUsIE5iRGlhbG9nTW9kdWxlLCBOYldpbmRvd01vZHVsZSB9IGZyb20gJ0BuZWJ1bGFyL3RoZW1lJztcbmltcG9ydCB7IE5neGFUaGVtZU1vZHVsZSB9IGZyb20gJ0B4YXBoaXJhL25neGEtdGhlbWUnO1xuaW1wb3J0IHtcbiAgTmd4YUlucHV0TW9kdWxlLFxuICBOZ3hhQ2hlY2tCb3hNb2R1bGUsXG4gIE5neGFCdXR0b25Nb2R1bGUsXG4gIE5neGFCYXNlTW9kdWxlLFxuICBOZ3hhU2VsZWN0TW9kdWxlLFxuICBOZ3hhTWFwc01vZHVsZSxcbiAgTmd4YVRhYmxlTW9kdWxlLFxuICBOZ3hhTGFiZWxNb2R1bGUsXG59IGZyb20gJ0B4YXBoaXJhL25neGEtY29tbW9uJztcbmltcG9ydCB7IE5neGFDZXJEYXNoYm9hcmRSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9uZ3hhLWNlci1kYXNoYm9hcmQtcm91dGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgTmd4YUNlck1vbml0b3JpbmdQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9tb25pdG9yaW5nL25neGEtY2VyLW1vbml0b3JpbmctcGFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmd4YUNlck1vbml0b3JpbmdEZXRhaWxDb21wb25lbnQgfSBmcm9tICcuL21vbml0b3JpbmcvZGV0YWlsL25neGEtY2VyLW1vbml0b3JpbmctZGV0YWlsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ3hhQ2VyU2xpZGVPdXRDb21wb25lbnQgfSBmcm9tICcuL21vbml0b3Jpbmcvc2xpZGUtb3V0L25neGEtY2VyLXNsaWRlLW91dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmd4YUNlck1vbml0b3JpbmdJbmZvQ29tcG9uZW50IH0gZnJvbSAnLi9tb25pdG9yaW5nL2luZm8vbmd4YS1jZXItbW9uaXRvcmluZy1pbmZvLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ3hhRGFzaGJvYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9uZ3hhLWRhc2hib2FyZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmd4YUNlckRhdGF0YWJsZUNvbXBvbmVudCB9IGZyb20gJy4vbW9uaXRvcmluZy9kZXRhaWwvZGF0YXRhYmxlL25neGEtY2VyLWRhdGF0YWJsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmd4RGF0YXRhYmxlTW9kdWxlIH0gZnJvbSAnQHN3aW1sYW5lL25neC1kYXRhdGFibGUnO1xuaW1wb3J0IHsgTmd4YUNlck1vbml0b3JpbmdQcmV2aWV3Q29tcG9uZW50IH0gZnJvbSAnLi9tb25pdG9yaW5nL3ByZXZpZXcvbmd4YS1jZXItbW9uaXRvcmluZy1wcmV2aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ3hhRmFrZVJlcG9ydFByb21wdENvbXBvbmVudCB9IGZyb20gJy4vbW9uaXRvcmluZy9kZXRhaWwvcHJvbXB0L25neGEtZmFrZS1yZXBvcnQtcHJvbXB0LmNvbXBvbmVudCc7XG5cbmNvbnN0IGNvbXBvbmVudHMgPSBbXG4gIE5neGFEYXNoYm9hcmRDb21wb25lbnQsXG4gIE5neGFDZXJNb25pdG9yaW5nUGFnZUNvbXBvbmVudCxcbiAgTmd4YUNlck1vbml0b3JpbmdJbmZvQ29tcG9uZW50LFxuICBOZ3hhQ2VyU2xpZGVPdXRDb21wb25lbnQsXG4gIE5neGFDZXJEYXRhdGFibGVDb21wb25lbnQsXG4gIE5neGFDZXJNb25pdG9yaW5nRGV0YWlsQ29tcG9uZW50LFxuICBOZ3hhQ2VyTW9uaXRvcmluZ1ByZXZpZXdDb21wb25lbnQsXG4gIE5neGFGYWtlUmVwb3J0UHJvbXB0Q29tcG9uZW50LFxuXTtcblxuY29uc3QgbW9kdWxlcyA9IFtcbiAgRm9ybXNNb2R1bGUsXG4gIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gIE5iQ2FyZE1vZHVsZSxcbiAgTmJBbGVydE1vZHVsZSxcbiAgTmJJY29uTW9kdWxlLFxuICBOYkRpYWxvZ01vZHVsZS5mb3JDaGlsZCgpLFxuICBOYldpbmRvd01vZHVsZS5mb3JDaGlsZCgpLFxuICBOZ3hhVGhlbWVNb2R1bGUsXG4gIE5neGFJbnB1dE1vZHVsZSxcbiAgTmd4YUNoZWNrQm94TW9kdWxlLFxuICBOZ3hhQnV0dG9uTW9kdWxlLFxuICBOZ3hhQmFzZU1vZHVsZSxcbiAgTmd4YVNlbGVjdE1vZHVsZSxcbiAgTmd4YU1hcHNNb2R1bGUsXG4gIE5neERhdGF0YWJsZU1vZHVsZSxcbiAgTmd4YVRhYmxlTW9kdWxlLFxuICBOZ3hhTGFiZWxNb2R1bGUsXG4gIE5neGFDZXJEYXNoYm9hcmRSb3V0aW5nTW9kdWxlLFxuXTtcblxuY29uc3QgcHJvdmlkZXJzID0gW1xuXTtcblxuY29uc3QgZW50cnlDb21wb25lbnRzID0gW1xuICBOZ3hhQ2VyTW9uaXRvcmluZ1ByZXZpZXdDb21wb25lbnQsXG4gIE5neGFGYWtlUmVwb3J0UHJvbXB0Q29tcG9uZW50LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIC4uLm1vZHVsZXMsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIC4uLmNvbXBvbmVudHMsXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIC4uLnByb3ZpZGVycyxcbiAgXSxcbiAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgLi4uZW50cnlDb21wb25lbnRzLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBOZ3hhQ2VyRGFzaGJvYXJkTW9kdWxlIHsgfVxuIl19