/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NbInputModule, NbIconModule } from '@nebular/theme';
import { CommonModule } from '@angular/common';
import { NgxaBaseModule } from '../base/ngxa-base.module';
import { NgxaInputTextComponent } from './text/ngxa-input-text.component';
import { NgxaInputCurrencyComponent } from './currency/ngxa-input-currency.component';
import { NgxaInputIconComponent } from './icon/ngxa-input-icon.component';
import { NgxaInputBaseIconComponent } from './icon/ngxa-input-base-icon.component';
/** @type {?} */
export const components = [
    NgxaInputTextComponent,
    NgxaInputBaseIconComponent,
    NgxaInputIconComponent,
    NgxaInputCurrencyComponent,
];
export class NgxaInputModule {
}
NgxaInputModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    NbInputModule,
                    NbIconModule,
                    TranslateModule,
                    NgxaBaseModule,
                ],
                declarations: [
                    ...components,
                ],
                exports: [
                    ...components,
                    NbInputModule,
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4YS1pbnB1dC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AeGFwaGlyYS9uZ3hhLWNvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi9pbnB1dC9uZ3hhLWlucHV0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUN0RixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQzs7QUFFbkYsTUFBTSxPQUFPLFVBQVUsR0FBRztJQUN4QixzQkFBc0I7SUFDdEIsMEJBQTBCO0lBQzFCLHNCQUFzQjtJQUN0QiwwQkFBMEI7Q0FDM0I7QUFvQkQsTUFBTSxPQUFPLGVBQWU7OztZQWxCM0IsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLFdBQVc7b0JBQ1gsbUJBQW1CO29CQUNuQixhQUFhO29CQUNiLFlBQVk7b0JBQ1osZUFBZTtvQkFDZixjQUFjO2lCQUNmO2dCQUNELFlBQVksRUFBRTtvQkFDWixHQUFHLFVBQVU7aUJBQ2Q7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLEdBQUcsVUFBVTtvQkFDYixhQUFhO2lCQUNkO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBUcmFuc2xhdGVNb2R1bGUgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcbmltcG9ydCB7IE5iSW5wdXRNb2R1bGUsIE5iSWNvbk1vZHVsZSB9IGZyb20gJ0BuZWJ1bGFyL3RoZW1lJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ3hhQmFzZU1vZHVsZSB9IGZyb20gJy4uL2Jhc2Uvbmd4YS1iYXNlLm1vZHVsZSc7XG5pbXBvcnQgeyBOZ3hhSW5wdXRUZXh0Q29tcG9uZW50IH0gZnJvbSAnLi90ZXh0L25neGEtaW5wdXQtdGV4dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmd4YUlucHV0Q3VycmVuY3lDb21wb25lbnQgfSBmcm9tICcuL2N1cnJlbmN5L25neGEtaW5wdXQtY3VycmVuY3kuY29tcG9uZW50JztcbmltcG9ydCB7IE5neGFJbnB1dEljb25Db21wb25lbnQgfSBmcm9tICcuL2ljb24vbmd4YS1pbnB1dC1pY29uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ3hhSW5wdXRCYXNlSWNvbkNvbXBvbmVudCB9IGZyb20gJy4vaWNvbi9uZ3hhLWlucHV0LWJhc2UtaWNvbi5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgY29tcG9uZW50cyA9IFtcbiAgTmd4YUlucHV0VGV4dENvbXBvbmVudCxcbiAgTmd4YUlucHV0QmFzZUljb25Db21wb25lbnQsXG4gIE5neGFJbnB1dEljb25Db21wb25lbnQsXG4gIE5neGFJbnB1dEN1cnJlbmN5Q29tcG9uZW50LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIE5iSW5wdXRNb2R1bGUsXG4gICAgTmJJY29uTW9kdWxlLFxuICAgIFRyYW5zbGF0ZU1vZHVsZSxcbiAgICBOZ3hhQmFzZU1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgLi4uY29tcG9uZW50cyxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIC4uLmNvbXBvbmVudHMsXG4gICAgTmJJbnB1dE1vZHVsZSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgTmd4YUlucHV0TW9kdWxlIHsgfVxuIl19