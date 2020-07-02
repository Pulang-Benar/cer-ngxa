/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbCardModule, NbDialogModule, NbAlertModule, NbIconModule } from '@nebular/theme';
import { NgxaThemeModule } from '@xaphira/ngxa-theme';
import { NgxaInputModule, NgxaButtonModule, NgxaBaseModule, NgxaCheckBoxModule, NgxaEditorModule, NgxaSelectModule, } from '@xaphira/ngxa-common';
import { ChangePasswordPageComponent } from './password/change-password-page.component';
import { ExtraComponent } from './ngxa-extra.component';
import { NgxaExtraRoutingModule } from './ngxa-extra-routing.module';
import { ProfilePageComponent } from './profile/profile-page.component';
import { SettingsPageComponent } from './settings/settings-page.component';
import { SecurityPageComponent } from './security/security-page.component';
import { DeactivatedPromptComponent } from './security/prompt/deactivated-prompt.component';
import { NgxaImageModule } from '@xaphira/ngxa-common';
import { HomePageComponent } from './home/home-page.component';
/** @type {?} */
const components = [
    ExtraComponent,
    ChangePasswordPageComponent,
    DeactivatedPromptComponent,
    SecurityPageComponent,
    ProfilePageComponent,
    SettingsPageComponent,
    HomePageComponent,
];
/** @type {?} */
const entry_components = [
    DeactivatedPromptComponent,
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
    NgxaEditorModule,
    NgxaSelectModule,
    NgxaImageModule,
    NgxaExtraRoutingModule,
];
export class NgxaExtraModule {
}
NgxaExtraModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    ...modules,
                ],
                declarations: [
                    ...components,
                ],
                entryComponents: [
                    ...entry_components,
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4YS1leHRyYS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AeGFwaGlyYS9uZ3hhLWV4dHJhLyIsInNvdXJjZXMiOlsibGliL25neGEtZXh0cmEubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0YsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFDTCxlQUFlLEVBQ2YsZ0JBQWdCLEVBQ2hCLGNBQWMsRUFDZCxrQkFBa0IsRUFDbEIsZ0JBQWdCLEVBQ2hCLGdCQUFnQixHQUNqQixNQUFNLHNCQUFzQixDQUFDO0FBQzlCLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUM1RixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7O01BRXpELFVBQVUsR0FBRztJQUNqQixjQUFjO0lBQ2QsMkJBQTJCO0lBQzNCLDBCQUEwQjtJQUMxQixxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLHFCQUFxQjtJQUNyQixpQkFBaUI7Q0FDbEI7O01BRUssZ0JBQWdCLEdBQUc7SUFDdkIsMEJBQTBCO0NBQzNCOztNQUVLLE9BQU8sR0FBRztJQUNkLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGFBQWE7SUFDYixZQUFZO0lBQ1osY0FBYyxDQUFDLFFBQVEsRUFBRTtJQUN6QixlQUFlO0lBQ2YsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLHNCQUFzQjtDQUN2QjtBQWFELE1BQU0sT0FBTyxlQUFlOzs7WUFYM0IsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxHQUFHLE9BQU87aUJBQ1g7Z0JBQ0QsWUFBWSxFQUFFO29CQUNaLEdBQUcsVUFBVTtpQkFDZDtnQkFDRCxlQUFlLEVBQUU7b0JBQ2YsR0FBRyxnQkFBZ0I7aUJBQ3BCO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOYkNhcmRNb2R1bGUsIE5iRGlhbG9nTW9kdWxlLCBOYkFsZXJ0TW9kdWxlLCBOYkljb25Nb2R1bGUgfSBmcm9tICdAbmVidWxhci90aGVtZSc7XG5pbXBvcnQgeyBOZ3hhVGhlbWVNb2R1bGUgfSBmcm9tICdAeGFwaGlyYS9uZ3hhLXRoZW1lJztcbmltcG9ydCB7XG4gIE5neGFJbnB1dE1vZHVsZSxcbiAgTmd4YUJ1dHRvbk1vZHVsZSxcbiAgTmd4YUJhc2VNb2R1bGUsXG4gIE5neGFDaGVja0JveE1vZHVsZSxcbiAgTmd4YUVkaXRvck1vZHVsZSxcbiAgTmd4YVNlbGVjdE1vZHVsZSxcbn0gZnJvbSAnQHhhcGhpcmEvbmd4YS1jb21tb24nO1xuaW1wb3J0IHsgQ2hhbmdlUGFzc3dvcmRQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQtcGFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRXh0cmFDb21wb25lbnQgfSBmcm9tICcuL25neGEtZXh0cmEuY29tcG9uZW50JztcbmltcG9ydCB7IE5neGFFeHRyYVJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL25neGEtZXh0cmEtcm91dGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgUHJvZmlsZVBhZ2VDb21wb25lbnQgfSBmcm9tICcuL3Byb2ZpbGUvcHJvZmlsZS1wYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZXR0aW5nc1BhZ2VDb21wb25lbnQgfSBmcm9tICcuL3NldHRpbmdzL3NldHRpbmdzLXBhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IFNlY3VyaXR5UGFnZUNvbXBvbmVudCB9IGZyb20gJy4vc2VjdXJpdHkvc2VjdXJpdHktcGFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGVhY3RpdmF0ZWRQcm9tcHRDb21wb25lbnQgfSBmcm9tICcuL3NlY3VyaXR5L3Byb21wdC9kZWFjdGl2YXRlZC1wcm9tcHQuY29tcG9uZW50JztcbmltcG9ydCB7IE5neGFJbWFnZU1vZHVsZSB9IGZyb20gJ0B4YXBoaXJhL25neGEtY29tbW9uJztcbmltcG9ydCB7IEhvbWVQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9ob21lL2hvbWUtcGFnZS5jb21wb25lbnQnO1xuXG5jb25zdCBjb21wb25lbnRzID0gW1xuICBFeHRyYUNvbXBvbmVudCxcbiAgQ2hhbmdlUGFzc3dvcmRQYWdlQ29tcG9uZW50LFxuICBEZWFjdGl2YXRlZFByb21wdENvbXBvbmVudCxcbiAgU2VjdXJpdHlQYWdlQ29tcG9uZW50LFxuICBQcm9maWxlUGFnZUNvbXBvbmVudCxcbiAgU2V0dGluZ3NQYWdlQ29tcG9uZW50LFxuICBIb21lUGFnZUNvbXBvbmVudCxcbl07XG5cbmNvbnN0IGVudHJ5X2NvbXBvbmVudHMgPSBbXG4gIERlYWN0aXZhdGVkUHJvbXB0Q29tcG9uZW50LFxuXTtcblxuY29uc3QgbW9kdWxlcyA9IFtcbiAgRm9ybXNNb2R1bGUsXG4gIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gIE5iQ2FyZE1vZHVsZSxcbiAgTmJBbGVydE1vZHVsZSxcbiAgTmJJY29uTW9kdWxlLFxuICBOYkRpYWxvZ01vZHVsZS5mb3JDaGlsZCgpLFxuICBOZ3hhVGhlbWVNb2R1bGUsXG4gIE5neGFJbnB1dE1vZHVsZSxcbiAgTmd4YUNoZWNrQm94TW9kdWxlLFxuICBOZ3hhQnV0dG9uTW9kdWxlLFxuICBOZ3hhQmFzZU1vZHVsZSxcbiAgTmd4YUVkaXRvck1vZHVsZSxcbiAgTmd4YVNlbGVjdE1vZHVsZSxcbiAgTmd4YUltYWdlTW9kdWxlLFxuICBOZ3hhRXh0cmFSb3V0aW5nTW9kdWxlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIC4uLm1vZHVsZXMsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIC4uLmNvbXBvbmVudHMsXG4gIF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1xuICAgIC4uLmVudHJ5X2NvbXBvbmVudHMsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIE5neGFFeHRyYU1vZHVsZSB7IH1cbiJdfQ==