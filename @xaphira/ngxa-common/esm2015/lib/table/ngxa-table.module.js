/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NbIconModule, NbButtonModule } from '@nebular/theme';
import { NgxaBaseModule } from '../base/ngxa-base.module';
import { NgxaInputModule } from '../input/ngxa-input.module';
import { NgxaDatatableComponent } from './ngx/ngxa-datatable.component';
import { NgxaDatatableHeaderComponent } from './ngx/header/ngxa-datatable-header.component';
import { NgxaDatatableCollapseComponent } from './ngx/header/collapse/ngxa-datatable-collapse.component';
import { NgxaDatatableBaseComponent } from './ngx/base/ngxa-datatable-base.component';
import { NgxaButtonModule } from '../button/ngxa-button.module';
/** @type {?} */
export const components = [
    NgxaDatatableComponent,
    NgxaDatatableBaseComponent,
    NgxaDatatableHeaderComponent,
    NgxaDatatableCollapseComponent,
];
export class NgxaTableModule {
}
NgxaTableModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    TranslateModule,
                    NbButtonModule,
                    NbIconModule,
                    NgxDatatableModule,
                    NgxaBaseModule,
                    NgxaInputModule,
                    NgxaButtonModule,
                ],
                declarations: [
                    ...components,
                ],
                exports: [
                    ...components,
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4YS10YWJsZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AeGFwaGlyYS9uZ3hhLWNvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi90YWJsZS9uZ3hhLXRhYmxlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDN0QsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDeEUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDNUYsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0seURBQXlELENBQUM7QUFDekcsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDdEYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sOEJBQThCLENBQUM7O0FBRWhFLE1BQU0sT0FBTyxVQUFVLEdBQUc7SUFDeEIsc0JBQXNCO0lBQ3RCLDBCQUEwQjtJQUMxQiw0QkFBNEI7SUFDNUIsOEJBQThCO0NBQy9CO0FBc0JELE1BQU0sT0FBTyxlQUFlOzs7WUFwQjNCLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixXQUFXO29CQUNYLG1CQUFtQjtvQkFDbkIsZUFBZTtvQkFDZixjQUFjO29CQUNkLFlBQVk7b0JBQ1osa0JBQWtCO29CQUNsQixjQUFjO29CQUNkLGVBQWU7b0JBQ2YsZ0JBQWdCO2lCQUNqQjtnQkFDRCxZQUFZLEVBQUU7b0JBQ1osR0FBRyxVQUFVO2lCQUNkO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxHQUFHLFVBQVU7aUJBQ2Q7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBUcmFuc2xhdGVNb2R1bGUgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcbmltcG9ydCB7IE5neERhdGF0YWJsZU1vZHVsZSB9IGZyb20gJ0Bzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlJztcbmltcG9ydCB7IE5iSWNvbk1vZHVsZSwgTmJCdXR0b25Nb2R1bGUgfSBmcm9tICdAbmVidWxhci90aGVtZSc7XG5pbXBvcnQgeyBOZ3hhQmFzZU1vZHVsZSB9IGZyb20gJy4uL2Jhc2Uvbmd4YS1iYXNlLm1vZHVsZSc7XG5pbXBvcnQgeyBOZ3hhSW5wdXRNb2R1bGUgfSBmcm9tICcuLi9pbnB1dC9uZ3hhLWlucHV0Lm1vZHVsZSc7XG5pbXBvcnQgeyBOZ3hhRGF0YXRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi9uZ3gvbmd4YS1kYXRhdGFibGUuY29tcG9uZW50JztcbmltcG9ydCB7IE5neGFEYXRhdGFibGVIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL25neC9oZWFkZXIvbmd4YS1kYXRhdGFibGUtaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ3hhRGF0YXRhYmxlQ29sbGFwc2VDb21wb25lbnQgfSBmcm9tICcuL25neC9oZWFkZXIvY29sbGFwc2Uvbmd4YS1kYXRhdGFibGUtY29sbGFwc2UuY29tcG9uZW50JztcbmltcG9ydCB7IE5neGFEYXRhdGFibGVCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi9uZ3gvYmFzZS9uZ3hhLWRhdGF0YWJsZS1iYXNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ3hhQnV0dG9uTW9kdWxlIH0gZnJvbSAnLi4vYnV0dG9uL25neGEtYnV0dG9uLm1vZHVsZSc7XG5cbmV4cG9ydCBjb25zdCBjb21wb25lbnRzID0gW1xuICBOZ3hhRGF0YXRhYmxlQ29tcG9uZW50LFxuICBOZ3hhRGF0YXRhYmxlQmFzZUNvbXBvbmVudCxcbiAgTmd4YURhdGF0YWJsZUhlYWRlckNvbXBvbmVudCxcbiAgTmd4YURhdGF0YWJsZUNvbGxhcHNlQ29tcG9uZW50LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIFRyYW5zbGF0ZU1vZHVsZSxcbiAgICBOYkJ1dHRvbk1vZHVsZSxcbiAgICBOYkljb25Nb2R1bGUsXG4gICAgTmd4RGF0YXRhYmxlTW9kdWxlLFxuICAgIE5neGFCYXNlTW9kdWxlLFxuICAgIE5neGFJbnB1dE1vZHVsZSxcbiAgICBOZ3hhQnV0dG9uTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICAuLi5jb21wb25lbnRzLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgLi4uY29tcG9uZW50cyxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgTmd4YVRhYmxlTW9kdWxlIHsgfVxuIl19