/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbCardModule, NbAlertModule, NbIconModule, NbDialogModule } from '@nebular/theme';
import { NgxaThemeModule } from '@xaphira/ngxa-theme';
import { NgxaInputModule, NgxaCheckBoxModule, NgxaButtonModule, NgxaBaseModule, NgxaSelectModule, NgxaTableModule, } from '@xaphira/ngxa-common';
import { ParameterComponent } from './ngxa-parameter.component';
import { NgxaParameterRoutingModule } from './ngxa-parameter-routing.module';
import { ParameterListGroupPageComponent } from './group/list-group/parameter-list-group-page.component';
import { ParameterAddGroupPageComponent } from './group/add-group/parameter-add-group-page.component';
import { ParameterListDetailPageComponent } from './detail/parameter-list-detail-page.component';
import { ParameterService } from './services/parameter.service';
import { ParameterDoDetailPageComponent } from './detail/do/parameter-do-detail-page.component';
import { ParameterEditGroupCollapseComponent } from './group/edit-group/parameter-edit-group-collapse.component';
/** @type {?} */
const components = [
    ParameterComponent,
    ParameterListGroupPageComponent,
    ParameterAddGroupPageComponent,
    ParameterEditGroupCollapseComponent,
    ParameterListDetailPageComponent,
    ParameterDoDetailPageComponent,
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
    NgxaCheckBoxModule,
    NgxaButtonModule,
    NgxaBaseModule,
    NgxaSelectModule,
    NgxaTableModule,
    NgxaParameterRoutingModule,
];
/** @type {?} */
const providers = [
    ParameterService,
];
export class NgxaParameterModule {
}
NgxaParameterModule.decorators = [
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
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4YS1wYXJhbWV0ZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHhhcGhpcmEvbmd4YS1zeXMvIiwic291cmNlcyI6WyJsaWIvcGFyYW1ldGVyL25neGEtcGFyYW1ldGVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLFlBQVksRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQ0wsZUFBZSxFQUNmLGtCQUFrQixFQUNsQixnQkFBZ0IsRUFDaEIsY0FBYyxFQUNkLGdCQUFnQixFQUNoQixlQUFlLEdBQ2hCLE1BQU0sc0JBQXNCLENBQUM7QUFDOUIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDaEUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDN0UsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDekcsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDdEcsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDakcsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDaEUsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDaEcsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sNERBQTRELENBQUM7O01BRTNHLFVBQVUsR0FBRztJQUNqQixrQkFBa0I7SUFDbEIsK0JBQStCO0lBQy9CLDhCQUE4QjtJQUM5QixtQ0FBbUM7SUFDbkMsZ0NBQWdDO0lBQ2hDLDhCQUE4QjtDQUMvQjs7TUFFSyxPQUFPLEdBQUc7SUFDZCxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtJQUNaLGNBQWMsQ0FBQyxRQUFRLEVBQUU7SUFDekIsZUFBZTtJQUNmLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLDBCQUEwQjtDQUMzQjs7TUFFSyxTQUFTLEdBQUc7SUFDaEIsZ0JBQWdCO0NBQ2pCO0FBYUQsTUFBTSxPQUFPLG1CQUFtQjs7O1lBWC9CLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsR0FBRyxPQUFPO2lCQUNYO2dCQUNELFlBQVksRUFBRTtvQkFDWixHQUFHLFVBQVU7aUJBQ2Q7Z0JBQ0QsU0FBUyxFQUFFO29CQUNULEdBQUcsU0FBUztpQkFDYjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTmJDYXJkTW9kdWxlLCBOYkFsZXJ0TW9kdWxlLCBOYkljb25Nb2R1bGUsIE5iRGlhbG9nTW9kdWxlIH0gZnJvbSAnQG5lYnVsYXIvdGhlbWUnO1xuaW1wb3J0IHsgTmd4YVRoZW1lTW9kdWxlIH0gZnJvbSAnQHhhcGhpcmEvbmd4YS10aGVtZSc7XG5pbXBvcnQge1xuICBOZ3hhSW5wdXRNb2R1bGUsXG4gIE5neGFDaGVja0JveE1vZHVsZSxcbiAgTmd4YUJ1dHRvbk1vZHVsZSxcbiAgTmd4YUJhc2VNb2R1bGUsXG4gIE5neGFTZWxlY3RNb2R1bGUsXG4gIE5neGFUYWJsZU1vZHVsZSxcbn0gZnJvbSAnQHhhcGhpcmEvbmd4YS1jb21tb24nO1xuaW1wb3J0IHsgUGFyYW1ldGVyQ29tcG9uZW50IH0gZnJvbSAnLi9uZ3hhLXBhcmFtZXRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmd4YVBhcmFtZXRlclJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL25neGEtcGFyYW1ldGVyLXJvdXRpbmcubW9kdWxlJztcbmltcG9ydCB7IFBhcmFtZXRlckxpc3RHcm91cFBhZ2VDb21wb25lbnQgfSBmcm9tICcuL2dyb3VwL2xpc3QtZ3JvdXAvcGFyYW1ldGVyLWxpc3QtZ3JvdXAtcGFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGFyYW1ldGVyQWRkR3JvdXBQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9ncm91cC9hZGQtZ3JvdXAvcGFyYW1ldGVyLWFkZC1ncm91cC1wYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQYXJhbWV0ZXJMaXN0RGV0YWlsUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vZGV0YWlsL3BhcmFtZXRlci1saXN0LWRldGFpbC1wYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQYXJhbWV0ZXJTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9wYXJhbWV0ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBQYXJhbWV0ZXJEb0RldGFpbFBhZ2VDb21wb25lbnQgfSBmcm9tICcuL2RldGFpbC9kby9wYXJhbWV0ZXItZG8tZGV0YWlsLXBhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IFBhcmFtZXRlckVkaXRHcm91cENvbGxhcHNlQ29tcG9uZW50IH0gZnJvbSAnLi9ncm91cC9lZGl0LWdyb3VwL3BhcmFtZXRlci1lZGl0LWdyb3VwLWNvbGxhcHNlLmNvbXBvbmVudCc7XG5cbmNvbnN0IGNvbXBvbmVudHMgPSBbXG4gIFBhcmFtZXRlckNvbXBvbmVudCxcbiAgUGFyYW1ldGVyTGlzdEdyb3VwUGFnZUNvbXBvbmVudCxcbiAgUGFyYW1ldGVyQWRkR3JvdXBQYWdlQ29tcG9uZW50LFxuICBQYXJhbWV0ZXJFZGl0R3JvdXBDb2xsYXBzZUNvbXBvbmVudCxcbiAgUGFyYW1ldGVyTGlzdERldGFpbFBhZ2VDb21wb25lbnQsXG4gIFBhcmFtZXRlckRvRGV0YWlsUGFnZUNvbXBvbmVudCxcbl07XG5cbmNvbnN0IG1vZHVsZXMgPSBbXG4gIEZvcm1zTW9kdWxlLFxuICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICBOYkNhcmRNb2R1bGUsXG4gIE5iQWxlcnRNb2R1bGUsXG4gIE5iSWNvbk1vZHVsZSxcbiAgTmJEaWFsb2dNb2R1bGUuZm9yQ2hpbGQoKSxcbiAgTmd4YVRoZW1lTW9kdWxlLFxuICBOZ3hhSW5wdXRNb2R1bGUsXG4gIE5neGFDaGVja0JveE1vZHVsZSxcbiAgTmd4YUJ1dHRvbk1vZHVsZSxcbiAgTmd4YUJhc2VNb2R1bGUsXG4gIE5neGFTZWxlY3RNb2R1bGUsXG4gIE5neGFUYWJsZU1vZHVsZSxcbiAgTmd4YVBhcmFtZXRlclJvdXRpbmdNb2R1bGUsXG5dO1xuXG5jb25zdCBwcm92aWRlcnMgPSBbXG4gIFBhcmFtZXRlclNlcnZpY2UsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgLi4ubW9kdWxlcyxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgLi4uY29tcG9uZW50cyxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgLi4ucHJvdmlkZXJzLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBOZ3hhUGFyYW1ldGVyTW9kdWxlIHsgfVxuIl19