/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuardChildService } from '@xaphira/ngxa-auth';
import { LanguageComponent } from './ngxa-language.component';
import { LanguageListPageComponent } from './list/language-list-page.component';
import { LanguageAddEditPageComponent } from './add-edit/language-add-edit-page.component';
const ɵ0 = {
    code: '#SYSCONF-LANGUAGE-PAGE',
}, ɵ1 = {
    code: '#SYSCONF-LANGUAGE-PAGE',
};
/** @type {?} */
const routes = [{
        path: '',
        component: LanguageComponent,
        canActivateChild: [AuthGuardChildService],
        children: [
            {
                path: '',
                component: LanguageListPageComponent,
                data: ɵ0,
            },
            {
                path: ':action',
                component: LanguageAddEditPageComponent,
                data: ɵ1,
            },
        ],
    }];
export class NgxaLanguageRoutingModule {
}
NgxaLanguageRoutingModule.decorators = [
    { type: NgModule, args: [{
                imports: [RouterModule.forChild(routes)],
                exports: [RouterModule],
            },] }
];
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4YS1sYW5ndWFnZS1yb3V0aW5nLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B4YXBoaXJhL25neGEtc3lzLyIsInNvdXJjZXMiOlsibGliL2xhbmd1YWdlL25neGEtbGFuZ3VhZ2Utcm91dGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBVSxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzNELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzlELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO1dBVS9FO0lBQ0osSUFBSSxFQUFFLHdCQUF3QjtDQUMvQixPQUtLO0lBQ0osSUFBSSxFQUFFLHdCQUF3QjtDQUMvQjs7TUFqQkQsTUFBTSxHQUFXLENBQUM7UUFDdEIsSUFBSSxFQUFFLEVBQUU7UUFDUixTQUFTLEVBQUUsaUJBQWlCO1FBQzVCLGdCQUFnQixFQUFFLENBQUMscUJBQXFCLENBQUM7UUFDekMsUUFBUSxFQUFFO1lBQ1I7Z0JBQ0UsSUFBSSxFQUFFLEVBQUU7Z0JBQ1IsU0FBUyxFQUFFLHlCQUF5QjtnQkFDcEMsSUFBSSxJQUVIO2FBQ0Y7WUFDRDtnQkFDRSxJQUFJLEVBQUUsU0FBUztnQkFDZixTQUFTLEVBQUUsNEJBQTRCO2dCQUN2QyxJQUFJLElBRUg7YUFDRjtTQUNGO0tBQ0YsQ0FBQztBQU1GLE1BQU0sT0FBTyx5QkFBeUI7OztZQUpyQyxRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDeEMsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2FBQ3hCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEF1dGhHdWFyZENoaWxkU2VydmljZSB9IGZyb20gJ0B4YXBoaXJhL25neGEtYXV0aCc7XG5pbXBvcnQgeyBMYW5ndWFnZUNvbXBvbmVudCB9IGZyb20gJy4vbmd4YS1sYW5ndWFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGFuZ3VhZ2VMaXN0UGFnZUNvbXBvbmVudCB9IGZyb20gJy4vbGlzdC9sYW5ndWFnZS1saXN0LXBhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IExhbmd1YWdlQWRkRWRpdFBhZ2VDb21wb25lbnQgfSBmcm9tICcuL2FkZC1lZGl0L2xhbmd1YWdlLWFkZC1lZGl0LXBhZ2UuY29tcG9uZW50JztcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbe1xuICBwYXRoOiAnJyxcbiAgY29tcG9uZW50OiBMYW5ndWFnZUNvbXBvbmVudCxcbiAgY2FuQWN0aXZhdGVDaGlsZDogW0F1dGhHdWFyZENoaWxkU2VydmljZV0sXG4gIGNoaWxkcmVuOiBbXG4gICAge1xuICAgICAgcGF0aDogJycsXG4gICAgICBjb21wb25lbnQ6IExhbmd1YWdlTGlzdFBhZ2VDb21wb25lbnQsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGNvZGU6ICcjU1lTQ09ORi1MQU5HVUFHRS1QQUdFJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICBwYXRoOiAnOmFjdGlvbicsXG4gICAgICBjb21wb25lbnQ6IExhbmd1YWdlQWRkRWRpdFBhZ2VDb21wb25lbnQsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGNvZGU6ICcjU1lTQ09ORi1MQU5HVUFHRS1QQUdFJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgXSxcbn1dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxuICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgTmd4YUxhbmd1YWdlUm91dGluZ01vZHVsZSB7XG59XG4iXX0=