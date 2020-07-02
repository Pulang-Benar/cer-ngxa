/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var components = [
    LanguageComponent,
    LanguageListPageComponent,
    LanguageAddEditPageComponent,
    DialogFlagComponent,
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
    NgxaCheckBoxModule,
    NgxaButtonModule,
    NgxaBaseModule,
    NgxaSelectModule,
    NgxaTableModule,
    NgxaLanguageRoutingModule,
];
/** @type {?} */
var providers = [
    LanguageService,
];
/** @type {?} */
var entryComponents = [
    DialogFlagComponent,
];
var NgxaLanguageModule = /** @class */ (function () {
    function NgxaLanguageModule() {
    }
    NgxaLanguageModule.decorators = [
        { type: NgModule, args: [{
                    imports: tslib_1.__spread(modules),
                    declarations: tslib_1.__spread(components),
                    providers: tslib_1.__spread(providers),
                    entryComponents: tslib_1.__spread(entryComponents),
                },] }
    ];
    return NgxaLanguageModule;
}());
export { NgxaLanguageModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4YS1sYW5ndWFnZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AeGFwaGlyYS9uZ3hhLXN5cy8iLCJzb3VyY2VzIjpbImxpYi9sYW5ndWFnZS9uZ3hhLWxhbmd1YWdlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUNMLGVBQWUsRUFDZixrQkFBa0IsRUFDbEIsZ0JBQWdCLEVBQ2hCLGNBQWMsRUFDZCxnQkFBZ0IsRUFDaEIsZUFBZSxHQUNoQixNQUFNLHNCQUFzQixDQUFDO0FBQzlCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzlELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQzNGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQzs7SUFFN0UsVUFBVSxHQUFHO0lBQ2pCLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsNEJBQTRCO0lBQzVCLG1CQUFtQjtDQUNwQjs7SUFFSyxPQUFPLEdBQUc7SUFDZCxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtJQUNaLGNBQWMsQ0FBQyxRQUFRLEVBQUU7SUFDekIsZUFBZTtJQUNmLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLHlCQUF5QjtDQUMxQjs7SUFFSyxTQUFTLEdBQUc7SUFDaEIsZUFBZTtDQUNoQjs7SUFFSyxlQUFlLEdBQUc7SUFDdEIsbUJBQW1CO0NBQ3BCO0FBRUQ7SUFBQTtJQWNrQyxDQUFDOztnQkFkbEMsUUFBUSxTQUFDO29CQUNSLE9BQU8sbUJBQ0YsT0FBTyxDQUNYO29CQUNELFlBQVksbUJBQ1AsVUFBVSxDQUNkO29CQUNELFNBQVMsbUJBQ0osU0FBUyxDQUNiO29CQUNELGVBQWUsbUJBQ1YsZUFBZSxDQUNuQjtpQkFDRjs7SUFDaUMseUJBQUM7Q0FBQSxBQWRuQyxJQWNtQztTQUF0QixrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOYkNhcmRNb2R1bGUsIE5iQWxlcnRNb2R1bGUsIE5iSWNvbk1vZHVsZSwgTmJEaWFsb2dNb2R1bGUgfSBmcm9tICdAbmVidWxhci90aGVtZSc7XG5pbXBvcnQgeyBOZ3hhVGhlbWVNb2R1bGUgfSBmcm9tICdAeGFwaGlyYS9uZ3hhLXRoZW1lJztcbmltcG9ydCB7XG4gIE5neGFJbnB1dE1vZHVsZSxcbiAgTmd4YUNoZWNrQm94TW9kdWxlLFxuICBOZ3hhQnV0dG9uTW9kdWxlLFxuICBOZ3hhQmFzZU1vZHVsZSxcbiAgTmd4YVNlbGVjdE1vZHVsZSxcbiAgTmd4YVRhYmxlTW9kdWxlLFxufSBmcm9tICdAeGFwaGlyYS9uZ3hhLWNvbW1vbic7XG5pbXBvcnQgeyBMYW5ndWFnZUNvbXBvbmVudCB9IGZyb20gJy4vbmd4YS1sYW5ndWFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGFuZ3VhZ2VMaXN0UGFnZUNvbXBvbmVudCB9IGZyb20gJy4vbGlzdC9sYW5ndWFnZS1saXN0LXBhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IE5neGFMYW5ndWFnZVJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL25neGEtbGFuZ3VhZ2Utcm91dGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgTGFuZ3VhZ2VBZGRFZGl0UGFnZUNvbXBvbmVudCB9IGZyb20gJy4vYWRkLWVkaXQvbGFuZ3VhZ2UtYWRkLWVkaXQtcGFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGFuZ3VhZ2VTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9sYW5ndWFnZS5zZXJ2aWNlJztcbmltcG9ydCB7IERpYWxvZ0ZsYWdDb21wb25lbnQgfSBmcm9tICcuL2FkZC1lZGl0L2RpYWxvZy1mbGFnL2RpYWxvZy1mbGFnLmNvbXBvbmVudCc7XG5cbmNvbnN0IGNvbXBvbmVudHMgPSBbXG4gIExhbmd1YWdlQ29tcG9uZW50LFxuICBMYW5ndWFnZUxpc3RQYWdlQ29tcG9uZW50LFxuICBMYW5ndWFnZUFkZEVkaXRQYWdlQ29tcG9uZW50LFxuICBEaWFsb2dGbGFnQ29tcG9uZW50LFxuXTtcblxuY29uc3QgbW9kdWxlcyA9IFtcbiAgRm9ybXNNb2R1bGUsXG4gIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gIE5iQ2FyZE1vZHVsZSxcbiAgTmJBbGVydE1vZHVsZSxcbiAgTmJJY29uTW9kdWxlLFxuICBOYkRpYWxvZ01vZHVsZS5mb3JDaGlsZCgpLFxuICBOZ3hhVGhlbWVNb2R1bGUsXG4gIE5neGFJbnB1dE1vZHVsZSxcbiAgTmd4YUNoZWNrQm94TW9kdWxlLFxuICBOZ3hhQnV0dG9uTW9kdWxlLFxuICBOZ3hhQmFzZU1vZHVsZSxcbiAgTmd4YVNlbGVjdE1vZHVsZSxcbiAgTmd4YVRhYmxlTW9kdWxlLFxuICBOZ3hhTGFuZ3VhZ2VSb3V0aW5nTW9kdWxlLFxuXTtcblxuY29uc3QgcHJvdmlkZXJzID0gW1xuICBMYW5ndWFnZVNlcnZpY2UsXG5dO1xuXG5jb25zdCBlbnRyeUNvbXBvbmVudHMgPSBbXG4gIERpYWxvZ0ZsYWdDb21wb25lbnQsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgLi4ubW9kdWxlcyxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgLi4uY29tcG9uZW50cyxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgLi4ucHJvdmlkZXJzLFxuICBdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtcbiAgICAuLi5lbnRyeUNvbXBvbmVudHMsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIE5neGFMYW5ndWFnZU1vZHVsZSB7IH1cbiJdfQ==