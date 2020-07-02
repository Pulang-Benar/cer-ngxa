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
var ɵ0 = {
    code: '#SYSCONF-LANGUAGE-PAGE',
}, ɵ1 = {
    code: '#SYSCONF-LANGUAGE-PAGE',
};
/** @type {?} */
var routes = [{
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
var NgxaLanguageRoutingModule = /** @class */ (function () {
    function NgxaLanguageRoutingModule() {
    }
    NgxaLanguageRoutingModule.decorators = [
        { type: NgModule, args: [{
                    imports: [RouterModule.forChild(routes)],
                    exports: [RouterModule],
                },] }
    ];
    return NgxaLanguageRoutingModule;
}());
export { NgxaLanguageRoutingModule };
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4YS1sYW5ndWFnZS1yb3V0aW5nLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B4YXBoaXJhL25neGEtc3lzLyIsInNvdXJjZXMiOlsibGliL2xhbmd1YWdlL25neGEtbGFuZ3VhZ2Utcm91dGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBVSxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzNELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzlELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO1NBVS9FO0lBQ0osSUFBSSxFQUFFLHdCQUF3QjtDQUMvQixPQUtLO0lBQ0osSUFBSSxFQUFFLHdCQUF3QjtDQUMvQjs7SUFqQkQsTUFBTSxHQUFXLENBQUM7UUFDdEIsSUFBSSxFQUFFLEVBQUU7UUFDUixTQUFTLEVBQUUsaUJBQWlCO1FBQzVCLGdCQUFnQixFQUFFLENBQUMscUJBQXFCLENBQUM7UUFDekMsUUFBUSxFQUFFO1lBQ1I7Z0JBQ0UsSUFBSSxFQUFFLEVBQUU7Z0JBQ1IsU0FBUyxFQUFFLHlCQUF5QjtnQkFDcEMsSUFBSSxJQUVIO2FBQ0Y7WUFDRDtnQkFDRSxJQUFJLEVBQUUsU0FBUztnQkFDZixTQUFTLEVBQUUsNEJBQTRCO2dCQUN2QyxJQUFJLElBRUg7YUFDRjtTQUNGO0tBQ0YsQ0FBQztBQUVGO0lBQUE7SUFLQSxDQUFDOztnQkFMQSxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDeEMsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2lCQUN4Qjs7SUFFRCxnQ0FBQztDQUFBLEFBTEQsSUFLQztTQURZLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBdXRoR3VhcmRDaGlsZFNlcnZpY2UgfSBmcm9tICdAeGFwaGlyYS9uZ3hhLWF1dGgnO1xuaW1wb3J0IHsgTGFuZ3VhZ2VDb21wb25lbnQgfSBmcm9tICcuL25neGEtbGFuZ3VhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IExhbmd1YWdlTGlzdFBhZ2VDb21wb25lbnQgfSBmcm9tICcuL2xpc3QvbGFuZ3VhZ2UtbGlzdC1wYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMYW5ndWFnZUFkZEVkaXRQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9hZGQtZWRpdC9sYW5ndWFnZS1hZGQtZWRpdC1wYWdlLmNvbXBvbmVudCc7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW3tcbiAgcGF0aDogJycsXG4gIGNvbXBvbmVudDogTGFuZ3VhZ2VDb21wb25lbnQsXG4gIGNhbkFjdGl2YXRlQ2hpbGQ6IFtBdXRoR3VhcmRDaGlsZFNlcnZpY2VdLFxuICBjaGlsZHJlbjogW1xuICAgIHtcbiAgICAgIHBhdGg6ICcnLFxuICAgICAgY29tcG9uZW50OiBMYW5ndWFnZUxpc3RQYWdlQ29tcG9uZW50LFxuICAgICAgZGF0YToge1xuICAgICAgICBjb2RlOiAnI1NZU0NPTkYtTEFOR1VBR0UtUEFHRScsXG4gICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgcGF0aDogJzphY3Rpb24nLFxuICAgICAgY29tcG9uZW50OiBMYW5ndWFnZUFkZEVkaXRQYWdlQ29tcG9uZW50LFxuICAgICAgZGF0YToge1xuICAgICAgICBjb2RlOiAnI1NZU0NPTkYtTEFOR1VBR0UtUEFHRScsXG4gICAgICB9LFxuICAgIH0sXG4gIF0sXG59XTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1JvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcbiAgZXhwb3J0czogW1JvdXRlck1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIE5neGFMYW5ndWFnZVJvdXRpbmdNb2R1bGUge1xufVxuIl19