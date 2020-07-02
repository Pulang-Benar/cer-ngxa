/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
const components = [
    MgmtUserComponent,
    MgmtCiviliansListPageComponent,
    MgmtCiviliansDetailPageComponent,
    MgmtAdminListPageComponent,
    MgmtAdminDetailPageComponent,
];
/** @type {?} */
const modules = [
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
const providers = [
    ManagementUserService,
];
/** @type {?} */
const entry_components = [];
export class NgxaMgmtUserModule {
}
NgxaMgmtUserModule.decorators = [
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4YS1tZ210LXVzZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHhhcGhpcmEvbmd4YS1zeXMvIiwic291cmNlcyI6WyJsaWIvbWFuYWdlbWVudC91c2VyL25neGEtbWdtdC11c2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLFlBQVksRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQ0wsZUFBZSxFQUNmLGdCQUFnQixFQUNoQixjQUFjLEVBQ2QsZUFBZSxFQUNmLGVBQWUsR0FDaEIsTUFBTSxzQkFBc0IsQ0FBQztBQUM5QixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUNyRyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUMzRyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUNsRyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSwwREFBMEQsQ0FBQzs7TUFFbEcsVUFBVSxHQUFHO0lBQ2pCLGlCQUFpQjtJQUNqQiw4QkFBOEI7SUFDOUIsZ0NBQWdDO0lBQ2hDLDBCQUEwQjtJQUMxQiw0QkFBNEI7Q0FDN0I7O01BRUssT0FBTyxHQUFHO0lBQ2QsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osYUFBYTtJQUNiLFlBQVk7SUFDWixjQUFjLENBQUMsUUFBUSxFQUFFO0lBQ3pCLGVBQWU7SUFDZixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZUFBZTtJQUNmLHlCQUF5QjtDQUMxQjs7TUFFSyxTQUFTLEdBQUc7SUFDaEIscUJBQXFCO0NBQ3RCOztNQUVLLGdCQUFnQixHQUFHLEVBQ3hCO0FBZ0JELE1BQU0sT0FBTyxrQkFBa0I7OztZQWQ5QixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLEdBQUcsT0FBTztpQkFDWDtnQkFDRCxZQUFZLEVBQUU7b0JBQ1osR0FBRyxVQUFVO2lCQUNkO2dCQUNELFNBQVMsRUFBRTtvQkFDVCxHQUFHLFNBQVM7aUJBQ2I7Z0JBQ0QsZUFBZSxFQUFFO29CQUNmLEdBQUcsZ0JBQWdCO2lCQUNwQjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTmJDYXJkTW9kdWxlLCBOYkFsZXJ0TW9kdWxlLCBOYkljb25Nb2R1bGUsIE5iRGlhbG9nTW9kdWxlIH0gZnJvbSAnQG5lYnVsYXIvdGhlbWUnO1xuaW1wb3J0IHsgTmd4YVRoZW1lTW9kdWxlIH0gZnJvbSAnQHhhcGhpcmEvbmd4YS10aGVtZSc7XG5pbXBvcnQge1xuICBOZ3hhSW5wdXRNb2R1bGUsXG4gIE5neGFCdXR0b25Nb2R1bGUsXG4gIE5neGFCYXNlTW9kdWxlLFxuICBOZ3hhVGFibGVNb2R1bGUsXG4gIE5neGFMYWJlbE1vZHVsZSxcbn0gZnJvbSAnQHhhcGhpcmEvbmd4YS1jb21tb24nO1xuaW1wb3J0IHsgTmd4YU1nbXRVc2VyUm91dGluZ01vZHVsZSB9IGZyb20gJy4vbmd4YS1tZ210LXVzZXItcm91dGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgTWdtdFVzZXJDb21wb25lbnQgfSBmcm9tICcuL25neGEtbWdtdC11c2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNZ210Q2l2aWxpYW5zTGlzdFBhZ2VDb21wb25lbnQgfSBmcm9tICcuL2NpdmlsaWFucy9saXN0L21nbXQtY2l2aWxpYW5zLWxpc3QtcGFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWFuYWdlbWVudFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9tZ210LXVzZXIuc2VydmljZSc7XG5pbXBvcnQgeyBNZ210Q2l2aWxpYW5zRGV0YWlsUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vY2l2aWxpYW5zL2RldGFpbC9tZ210LWNpdmlsaWFucy1kZXRhaWwtcGFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWdtdEFkbWluTGlzdFBhZ2VDb21wb25lbnQgfSBmcm9tICcuL2FkbWluLXJlZ2lvbmFsL2xpc3QvbWdtdC1hZG1pbi1saXN0LXBhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IE1nbXRBZG1pbkRldGFpbFBhZ2VDb21wb25lbnQgfSBmcm9tICcuL2FkbWluLXJlZ2lvbmFsL2RldGFpbC9tZ210LWFkbWluLWRldGFpbC1wYWdlLmNvbXBvbmVudCc7XG5cbmNvbnN0IGNvbXBvbmVudHMgPSBbXG4gIE1nbXRVc2VyQ29tcG9uZW50LFxuICBNZ210Q2l2aWxpYW5zTGlzdFBhZ2VDb21wb25lbnQsXG4gIE1nbXRDaXZpbGlhbnNEZXRhaWxQYWdlQ29tcG9uZW50LFxuICBNZ210QWRtaW5MaXN0UGFnZUNvbXBvbmVudCxcbiAgTWdtdEFkbWluRGV0YWlsUGFnZUNvbXBvbmVudCxcbl07XG5cbmNvbnN0IG1vZHVsZXMgPSBbXG4gIEZvcm1zTW9kdWxlLFxuICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICBOYkNhcmRNb2R1bGUsXG4gIE5iQWxlcnRNb2R1bGUsXG4gIE5iSWNvbk1vZHVsZSxcbiAgTmJEaWFsb2dNb2R1bGUuZm9yQ2hpbGQoKSxcbiAgTmd4YVRoZW1lTW9kdWxlLFxuICBOZ3hhSW5wdXRNb2R1bGUsXG4gIE5neGFCdXR0b25Nb2R1bGUsXG4gIE5neGFCYXNlTW9kdWxlLFxuICBOZ3hhVGFibGVNb2R1bGUsXG4gIE5neGFMYWJlbE1vZHVsZSxcbiAgTmd4YU1nbXRVc2VyUm91dGluZ01vZHVsZSxcbl07XG5cbmNvbnN0IHByb3ZpZGVycyA9IFtcbiAgTWFuYWdlbWVudFVzZXJTZXJ2aWNlLFxuXTtcblxuY29uc3QgZW50cnlfY29tcG9uZW50cyA9IFtcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICAuLi5tb2R1bGVzLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICAuLi5jb21wb25lbnRzLFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICAuLi5wcm92aWRlcnMsXG4gIF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1xuICAgIC4uLmVudHJ5X2NvbXBvbmVudHMsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIE5neGFNZ210VXNlck1vZHVsZSB7IH1cbiJdfQ==