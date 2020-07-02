/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxaBaseModule } from '../base/ngxa-base.module';
import { NgxaSelectComponent } from './ngxa-select.component';
import { ContentSelectDirective } from './directive/content-select.directive';
/** @type {?} */
export const components = [
    NgxaSelectComponent,
];
/** @type {?} */
export const directives = [
    ContentSelectDirective,
];
export class NgxaSelectModule {
}
NgxaSelectModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    NgSelectModule,
                    TranslateModule,
                    NgxaBaseModule,
                ],
                declarations: [
                    ...components,
                    ...directives,
                ],
                exports: [
                    ...components,
                    ...directives,
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4YS1zZWxlY3QubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHhhcGhpcmEvbmd4YS1jb21tb24vIiwic291cmNlcyI6WyJsaWIvc2VsZWN0L25neGEtc2VsZWN0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzFELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDOztBQUU5RSxNQUFNLE9BQU8sVUFBVSxHQUFHO0lBQ3hCLG1CQUFtQjtDQUNwQjs7QUFFRCxNQUFNLE9BQU8sVUFBVSxHQUFHO0lBQ3hCLHNCQUFzQjtDQUN2QjtBQW9CRCxNQUFNLE9BQU8sZ0JBQWdCOzs7WUFsQjVCLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixXQUFXO29CQUNYLG1CQUFtQjtvQkFDbkIsY0FBYztvQkFDZCxlQUFlO29CQUNmLGNBQWM7aUJBQ2Y7Z0JBQ0QsWUFBWSxFQUFFO29CQUNaLEdBQUcsVUFBVTtvQkFDYixHQUFHLFVBQVU7aUJBQ2Q7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLEdBQUcsVUFBVTtvQkFDYixHQUFHLFVBQVU7aUJBQ2Q7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBUcmFuc2xhdGVNb2R1bGUgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcbmltcG9ydCB7IE5nU2VsZWN0TW9kdWxlIH0gZnJvbSAnQG5nLXNlbGVjdC9uZy1zZWxlY3QnO1xuaW1wb3J0IHsgTmd4YUJhc2VNb2R1bGUgfSBmcm9tICcuLi9iYXNlL25neGEtYmFzZS5tb2R1bGUnO1xuaW1wb3J0IHsgTmd4YVNlbGVjdENvbXBvbmVudCB9IGZyb20gJy4vbmd4YS1zZWxlY3QuY29tcG9uZW50JztcbmltcG9ydCB7IENvbnRlbnRTZWxlY3REaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZS9jb250ZW50LXNlbGVjdC5kaXJlY3RpdmUnO1xuXG5leHBvcnQgY29uc3QgY29tcG9uZW50cyA9IFtcbiAgTmd4YVNlbGVjdENvbXBvbmVudCxcbl07XG5cbmV4cG9ydCBjb25zdCBkaXJlY3RpdmVzID0gW1xuICBDb250ZW50U2VsZWN0RGlyZWN0aXZlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIE5nU2VsZWN0TW9kdWxlLFxuICAgIFRyYW5zbGF0ZU1vZHVsZSxcbiAgICBOZ3hhQmFzZU1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgLi4uY29tcG9uZW50cyxcbiAgICAuLi5kaXJlY3RpdmVzLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgLi4uY29tcG9uZW50cyxcbiAgICAuLi5kaXJlY3RpdmVzLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBOZ3hhU2VsZWN0TW9kdWxlIHsgfVxuIl19