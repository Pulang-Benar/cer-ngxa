/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbCardModule, NbAlertModule, NbIconModule, NbDialogModule } from '@nebular/theme';
import { NgxaThemeModule } from '@xaphira/ngxa-theme';
import { NgxaInputModule, NgxaButtonModule, NgxaBaseModule, NgxaTableModule, NgxaLabelModule, } from '@xaphira/ngxa-common';
import { NgxaMgmtUserRoutingModule } from './ngxa-mgmt-user-routing.module';
import { MgmtUserComponent } from './ngxa-mgmt-user.component';
import { MgmtCiviliansListPageComponent } from './civilians/list/mgmt-civilians-list-page.component';
import { ManagementUserService } from './services/mgmt-user.service';
import { MgmtCiviliansDetailPageComponent } from './civilians/detail/mgmt-civilians-detail-page.component';
import { MgmtAdminListPageComponent } from './admin-regional/list/mgmt-admin-list-page.component';
import { MgmtAdminDetailPageComponent } from './admin-regional/detail/mgmt-admin-detail-page.component';
/** @type {?} */
var components = [
    MgmtUserComponent,
    MgmtCiviliansListPageComponent,
    MgmtCiviliansDetailPageComponent,
    MgmtAdminListPageComponent,
    MgmtAdminDetailPageComponent,
];
/** @type {?} */
var modules = [
    FormsModule,
    ReactiveFormsModule,
    NbCardModule,
    NbAlertModule,
    NbIconModule,
    NbDialogModule.forChild(),
    NgxaThemeModule,
    NgxaInputModule,
    NgxaButtonModule,
    NgxaBaseModule,
    NgxaTableModule,
    NgxaLabelModule,
    NgxaMgmtUserRoutingModule,
];
/** @type {?} */
var providers = [
    ManagementUserService,
];
/** @type {?} */
var entry_components = [];
var NgxaMgmtUserModule = /** @class */ (function () {
    function NgxaMgmtUserModule() {
    }
    NgxaMgmtUserModule.decorators = [
        { type: NgModule, args: [{
                    imports: tslib_1.__spread(modules),
                    declarations: tslib_1.__spread(components),
                    providers: tslib_1.__spread(providers),
                    entryComponents: tslib_1.__spread(entry_components),
                },] }
    ];
    return NgxaMgmtUserModule;
}());
export { NgxaMgmtUserModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4YS1tZ210LXVzZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHhhcGhpcmEvbmd4YS1zeXMvIiwic291cmNlcyI6WyJsaWIvbWFuYWdlbWVudC91c2VyL25neGEtbWdtdC11c2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUNMLGVBQWUsRUFDZixnQkFBZ0IsRUFDaEIsY0FBYyxFQUNkLGVBQWUsRUFDZixlQUFlLEdBQ2hCLE1BQU0sc0JBQXNCLENBQUM7QUFDOUIsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDNUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDL0QsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDckcsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDckUsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0seURBQXlELENBQUM7QUFDM0csT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDbEcsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sMERBQTBELENBQUM7O0lBRWxHLFVBQVUsR0FBRztJQUNqQixpQkFBaUI7SUFDakIsOEJBQThCO0lBQzlCLGdDQUFnQztJQUNoQywwQkFBMEI7SUFDMUIsNEJBQTRCO0NBQzdCOztJQUVLLE9BQU8sR0FBRztJQUNkLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGFBQWE7SUFDYixZQUFZO0lBQ1osY0FBYyxDQUFDLFFBQVEsRUFBRTtJQUN6QixlQUFlO0lBQ2YsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsZUFBZTtJQUNmLGVBQWU7SUFDZix5QkFBeUI7Q0FDMUI7O0lBRUssU0FBUyxHQUFHO0lBQ2hCLHFCQUFxQjtDQUN0Qjs7SUFFSyxnQkFBZ0IsR0FBRyxFQUN4QjtBQUVEO0lBQUE7SUFja0MsQ0FBQzs7Z0JBZGxDLFFBQVEsU0FBQztvQkFDUixPQUFPLG1CQUNGLE9BQU8sQ0FDWDtvQkFDRCxZQUFZLG1CQUNQLFVBQVUsQ0FDZDtvQkFDRCxTQUFTLG1CQUNKLFNBQVMsQ0FDYjtvQkFDRCxlQUFlLG1CQUNWLGdCQUFnQixDQUNwQjtpQkFDRjs7SUFDaUMseUJBQUM7Q0FBQSxBQWRuQyxJQWNtQztTQUF0QixrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOYkNhcmRNb2R1bGUsIE5iQWxlcnRNb2R1bGUsIE5iSWNvbk1vZHVsZSwgTmJEaWFsb2dNb2R1bGUgfSBmcm9tICdAbmVidWxhci90aGVtZSc7XG5pbXBvcnQgeyBOZ3hhVGhlbWVNb2R1bGUgfSBmcm9tICdAeGFwaGlyYS9uZ3hhLXRoZW1lJztcbmltcG9ydCB7XG4gIE5neGFJbnB1dE1vZHVsZSxcbiAgTmd4YUJ1dHRvbk1vZHVsZSxcbiAgTmd4YUJhc2VNb2R1bGUsXG4gIE5neGFUYWJsZU1vZHVsZSxcbiAgTmd4YUxhYmVsTW9kdWxlLFxufSBmcm9tICdAeGFwaGlyYS9uZ3hhLWNvbW1vbic7XG5pbXBvcnQgeyBOZ3hhTWdtdFVzZXJSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9uZ3hhLW1nbXQtdXNlci1yb3V0aW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBNZ210VXNlckNvbXBvbmVudCB9IGZyb20gJy4vbmd4YS1tZ210LXVzZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE1nbXRDaXZpbGlhbnNMaXN0UGFnZUNvbXBvbmVudCB9IGZyb20gJy4vY2l2aWxpYW5zL2xpc3QvbWdtdC1jaXZpbGlhbnMtbGlzdC1wYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYW5hZ2VtZW50VXNlclNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL21nbXQtdXNlci5zZXJ2aWNlJztcbmltcG9ydCB7IE1nbXRDaXZpbGlhbnNEZXRhaWxQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9jaXZpbGlhbnMvZGV0YWlsL21nbXQtY2l2aWxpYW5zLWRldGFpbC1wYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNZ210QWRtaW5MaXN0UGFnZUNvbXBvbmVudCB9IGZyb20gJy4vYWRtaW4tcmVnaW9uYWwvbGlzdC9tZ210LWFkbWluLWxpc3QtcGFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWdtdEFkbWluRGV0YWlsUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vYWRtaW4tcmVnaW9uYWwvZGV0YWlsL21nbXQtYWRtaW4tZGV0YWlsLXBhZ2UuY29tcG9uZW50JztcblxuY29uc3QgY29tcG9uZW50cyA9IFtcbiAgTWdtdFVzZXJDb21wb25lbnQsXG4gIE1nbXRDaXZpbGlhbnNMaXN0UGFnZUNvbXBvbmVudCxcbiAgTWdtdENpdmlsaWFuc0RldGFpbFBhZ2VDb21wb25lbnQsXG4gIE1nbXRBZG1pbkxpc3RQYWdlQ29tcG9uZW50LFxuICBNZ210QWRtaW5EZXRhaWxQYWdlQ29tcG9uZW50LFxuXTtcblxuY29uc3QgbW9kdWxlcyA9IFtcbiAgRm9ybXNNb2R1bGUsXG4gIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gIE5iQ2FyZE1vZHVsZSxcbiAgTmJBbGVydE1vZHVsZSxcbiAgTmJJY29uTW9kdWxlLFxuICBOYkRpYWxvZ01vZHVsZS5mb3JDaGlsZCgpLFxuICBOZ3hhVGhlbWVNb2R1bGUsXG4gIE5neGFJbnB1dE1vZHVsZSxcbiAgTmd4YUJ1dHRvbk1vZHVsZSxcbiAgTmd4YUJhc2VNb2R1bGUsXG4gIE5neGFUYWJsZU1vZHVsZSxcbiAgTmd4YUxhYmVsTW9kdWxlLFxuICBOZ3hhTWdtdFVzZXJSb3V0aW5nTW9kdWxlLFxuXTtcblxuY29uc3QgcHJvdmlkZXJzID0gW1xuICBNYW5hZ2VtZW50VXNlclNlcnZpY2UsXG5dO1xuXG5jb25zdCBlbnRyeV9jb21wb25lbnRzID0gW1xuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIC4uLm1vZHVsZXMsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIC4uLmNvbXBvbmVudHMsXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIC4uLnByb3ZpZGVycyxcbiAgXSxcbiAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgLi4uZW50cnlfY29tcG9uZW50cyxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgTmd4YU1nbXRVc2VyTW9kdWxlIHsgfVxuIl19