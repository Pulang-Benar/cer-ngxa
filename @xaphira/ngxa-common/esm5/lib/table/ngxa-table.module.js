/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
export var components = [
    NgxaDatatableComponent,
    NgxaDatatableBaseComponent,
    NgxaDatatableHeaderComponent,
    NgxaDatatableCollapseComponent,
];
var NgxaTableModule = /** @class */ (function () {
    function NgxaTableModule() {
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
                    declarations: tslib_1.__spread(components),
                    exports: tslib_1.__spread(components),
                },] }
    ];
    return NgxaTableModule;
}());
export { NgxaTableModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4YS10YWJsZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AeGFwaGlyYS9uZ3hhLWNvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi90YWJsZS9uZ3hhLXRhYmxlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDN0QsT0FBTyxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzdELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQzVGLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQ3pHLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDOztBQUVoRSxNQUFNLEtBQU8sVUFBVSxHQUFHO0lBQ3hCLHNCQUFzQjtJQUN0QiwwQkFBMEI7SUFDMUIsNEJBQTRCO0lBQzVCLDhCQUE4QjtDQUMvQjtBQUVEO0lBQUE7SUFvQitCLENBQUM7O2dCQXBCL0IsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLFdBQVc7d0JBQ1gsbUJBQW1CO3dCQUNuQixlQUFlO3dCQUNmLGNBQWM7d0JBQ2QsWUFBWTt3QkFDWixrQkFBa0I7d0JBQ2xCLGNBQWM7d0JBQ2QsZUFBZTt3QkFDZixnQkFBZ0I7cUJBQ2pCO29CQUNELFlBQVksbUJBQ1AsVUFBVSxDQUNkO29CQUNELE9BQU8sbUJBQ0YsVUFBVSxDQUNkO2lCQUNGOztJQUM4QixzQkFBQztDQUFBLEFBcEJoQyxJQW9CZ0M7U0FBbkIsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBUcmFuc2xhdGVNb2R1bGUgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcbmltcG9ydCB7IE5neERhdGF0YWJsZU1vZHVsZSB9IGZyb20gJ0Bzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlJztcbmltcG9ydCB7IE5iSWNvbk1vZHVsZSwgTmJCdXR0b25Nb2R1bGUgfSBmcm9tICdAbmVidWxhci90aGVtZSc7XG5pbXBvcnQgeyBOZ3hhQmFzZU1vZHVsZSB9IGZyb20gJy4uL2Jhc2Uvbmd4YS1iYXNlLm1vZHVsZSc7XG5pbXBvcnQgeyBOZ3hhSW5wdXRNb2R1bGUgfSBmcm9tICcuLi9pbnB1dC9uZ3hhLWlucHV0Lm1vZHVsZSc7XG5pbXBvcnQgeyBOZ3hhRGF0YXRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi9uZ3gvbmd4YS1kYXRhdGFibGUuY29tcG9uZW50JztcbmltcG9ydCB7IE5neGFEYXRhdGFibGVIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL25neC9oZWFkZXIvbmd4YS1kYXRhdGFibGUtaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ3hhRGF0YXRhYmxlQ29sbGFwc2VDb21wb25lbnQgfSBmcm9tICcuL25neC9oZWFkZXIvY29sbGFwc2Uvbmd4YS1kYXRhdGFibGUtY29sbGFwc2UuY29tcG9uZW50JztcbmltcG9ydCB7IE5neGFEYXRhdGFibGVCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi9uZ3gvYmFzZS9uZ3hhLWRhdGF0YWJsZS1iYXNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ3hhQnV0dG9uTW9kdWxlIH0gZnJvbSAnLi4vYnV0dG9uL25neGEtYnV0dG9uLm1vZHVsZSc7XG5cbmV4cG9ydCBjb25zdCBjb21wb25lbnRzID0gW1xuICBOZ3hhRGF0YXRhYmxlQ29tcG9uZW50LFxuICBOZ3hhRGF0YXRhYmxlQmFzZUNvbXBvbmVudCxcbiAgTmd4YURhdGF0YWJsZUhlYWRlckNvbXBvbmVudCxcbiAgTmd4YURhdGF0YWJsZUNvbGxhcHNlQ29tcG9uZW50LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIFRyYW5zbGF0ZU1vZHVsZSxcbiAgICBOYkJ1dHRvbk1vZHVsZSxcbiAgICBOYkljb25Nb2R1bGUsXG4gICAgTmd4RGF0YXRhYmxlTW9kdWxlLFxuICAgIE5neGFCYXNlTW9kdWxlLFxuICAgIE5neGFJbnB1dE1vZHVsZSxcbiAgICBOZ3hhQnV0dG9uTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICAuLi5jb21wb25lbnRzLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgLi4uY29tcG9uZW50cyxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgTmd4YVRhYmxlTW9kdWxlIHsgfVxuIl19