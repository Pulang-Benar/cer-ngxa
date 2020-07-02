/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbCardModule, NbAlertModule, NbIconModule, NbDialogModule } from '@nebular/theme';
import { NgxaThemeModule } from '@xaphira/ngxa-theme';
import { NgxaInputModule, NgxaCheckBoxModule, NgxaButtonModule, NgxaBaseModule, NgxaSelectModule, NgxaTableModule, } from '@xaphira/ngxa-common';
import { LanguageComponent } from './ngxa-language.component';
import { LanguageListPageComponent } from './list/language-list-page.component';
import { NgxaLanguageRoutingModule } from './ngxa-language-routing.module';
import { LanguageAddEditPageComponent } from './add-edit/language-add-edit-page.component';
import { LanguageService } from './services/language.service';
import { DialogFlagComponent } from './add-edit/dialog-flag/dialog-flag.component';
/** @type {?} */
const components = [
    LanguageComponent,
    LanguageListPageComponent,
    LanguageAddEditPageComponent,
    DialogFlagComponent,
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
    NgxaLanguageRoutingModule,
];
/** @type {?} */
const providers = [
    LanguageService,
];
/** @type {?} */
const entryComponents = [
    DialogFlagComponent,
];
export class NgxaLanguageModule {
}
NgxaLanguageModule.decorators = [
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4YS1sYW5ndWFnZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AeGFwaGlyYS9uZ3hhLXN5cy8iLCJzb3VyY2VzIjpbImxpYi9sYW5ndWFnZS9uZ3hhLWxhbmd1YWdlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLFlBQVksRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQ0wsZUFBZSxFQUNmLGtCQUFrQixFQUNsQixnQkFBZ0IsRUFDaEIsY0FBYyxFQUNkLGdCQUFnQixFQUNoQixlQUFlLEdBQ2hCLE1BQU0sc0JBQXNCLENBQUM7QUFDOUIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDOUQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDaEYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDM0UsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDM0YsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzlELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDOztNQUU3RSxVQUFVLEdBQUc7SUFDakIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6Qiw0QkFBNEI7SUFDNUIsbUJBQW1CO0NBQ3BCOztNQUVLLE9BQU8sR0FBRztJQUNkLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGFBQWE7SUFDYixZQUFZO0lBQ1osY0FBYyxDQUFDLFFBQVEsRUFBRTtJQUN6QixlQUFlO0lBQ2YsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YseUJBQXlCO0NBQzFCOztNQUVLLFNBQVMsR0FBRztJQUNoQixlQUFlO0NBQ2hCOztNQUVLLGVBQWUsR0FBRztJQUN0QixtQkFBbUI7Q0FDcEI7QUFnQkQsTUFBTSxPQUFPLGtCQUFrQjs7O1lBZDlCLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsR0FBRyxPQUFPO2lCQUNYO2dCQUNELFlBQVksRUFBRTtvQkFDWixHQUFHLFVBQVU7aUJBQ2Q7Z0JBQ0QsU0FBUyxFQUFFO29CQUNULEdBQUcsU0FBUztpQkFDYjtnQkFDRCxlQUFlLEVBQUU7b0JBQ2YsR0FBRyxlQUFlO2lCQUNuQjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTmJDYXJkTW9kdWxlLCBOYkFsZXJ0TW9kdWxlLCBOYkljb25Nb2R1bGUsIE5iRGlhbG9nTW9kdWxlIH0gZnJvbSAnQG5lYnVsYXIvdGhlbWUnO1xuaW1wb3J0IHsgTmd4YVRoZW1lTW9kdWxlIH0gZnJvbSAnQHhhcGhpcmEvbmd4YS10aGVtZSc7XG5pbXBvcnQge1xuICBOZ3hhSW5wdXRNb2R1bGUsXG4gIE5neGFDaGVja0JveE1vZHVsZSxcbiAgTmd4YUJ1dHRvbk1vZHVsZSxcbiAgTmd4YUJhc2VNb2R1bGUsXG4gIE5neGFTZWxlY3RNb2R1bGUsXG4gIE5neGFUYWJsZU1vZHVsZSxcbn0gZnJvbSAnQHhhcGhpcmEvbmd4YS1jb21tb24nO1xuaW1wb3J0IHsgTGFuZ3VhZ2VDb21wb25lbnQgfSBmcm9tICcuL25neGEtbGFuZ3VhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IExhbmd1YWdlTGlzdFBhZ2VDb21wb25lbnQgfSBmcm9tICcuL2xpc3QvbGFuZ3VhZ2UtbGlzdC1wYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ3hhTGFuZ3VhZ2VSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9uZ3hhLWxhbmd1YWdlLXJvdXRpbmcubW9kdWxlJztcbmltcG9ydCB7IExhbmd1YWdlQWRkRWRpdFBhZ2VDb21wb25lbnQgfSBmcm9tICcuL2FkZC1lZGl0L2xhbmd1YWdlLWFkZC1lZGl0LXBhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IExhbmd1YWdlU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvbGFuZ3VhZ2Uuc2VydmljZSc7XG5pbXBvcnQgeyBEaWFsb2dGbGFnQ29tcG9uZW50IH0gZnJvbSAnLi9hZGQtZWRpdC9kaWFsb2ctZmxhZy9kaWFsb2ctZmxhZy5jb21wb25lbnQnO1xuXG5jb25zdCBjb21wb25lbnRzID0gW1xuICBMYW5ndWFnZUNvbXBvbmVudCxcbiAgTGFuZ3VhZ2VMaXN0UGFnZUNvbXBvbmVudCxcbiAgTGFuZ3VhZ2VBZGRFZGl0UGFnZUNvbXBvbmVudCxcbiAgRGlhbG9nRmxhZ0NvbXBvbmVudCxcbl07XG5cbmNvbnN0IG1vZHVsZXMgPSBbXG4gIEZvcm1zTW9kdWxlLFxuICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICBOYkNhcmRNb2R1bGUsXG4gIE5iQWxlcnRNb2R1bGUsXG4gIE5iSWNvbk1vZHVsZSxcbiAgTmJEaWFsb2dNb2R1bGUuZm9yQ2hpbGQoKSxcbiAgTmd4YVRoZW1lTW9kdWxlLFxuICBOZ3hhSW5wdXRNb2R1bGUsXG4gIE5neGFDaGVja0JveE1vZHVsZSxcbiAgTmd4YUJ1dHRvbk1vZHVsZSxcbiAgTmd4YUJhc2VNb2R1bGUsXG4gIE5neGFTZWxlY3RNb2R1bGUsXG4gIE5neGFUYWJsZU1vZHVsZSxcbiAgTmd4YUxhbmd1YWdlUm91dGluZ01vZHVsZSxcbl07XG5cbmNvbnN0IHByb3ZpZGVycyA9IFtcbiAgTGFuZ3VhZ2VTZXJ2aWNlLFxuXTtcblxuY29uc3QgZW50cnlDb21wb25lbnRzID0gW1xuICBEaWFsb2dGbGFnQ29tcG9uZW50LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIC4uLm1vZHVsZXMsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIC4uLmNvbXBvbmVudHMsXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIC4uLnByb3ZpZGVycyxcbiAgXSxcbiAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgLi4uZW50cnlDb21wb25lbnRzLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBOZ3hhTGFuZ3VhZ2VNb2R1bGUgeyB9XG4iXX0=