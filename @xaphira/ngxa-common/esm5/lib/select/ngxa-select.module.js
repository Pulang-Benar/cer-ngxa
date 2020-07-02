/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxaBaseModule } from '../base/ngxa-base.module';
import { NgxaSelectComponent } from './ngxa-select.component';
import { ContentSelectDirective } from './directive/content-select.directive';
/** @type {?} */
export var components = [
    NgxaSelectComponent,
];
/** @type {?} */
export var directives = [
    ContentSelectDirective,
];
var NgxaSelectModule = /** @class */ (function () {
    function NgxaSelectModule() {
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
                    declarations: tslib_1.__spread(components, directives),
                    exports: tslib_1.__spread(components, directives),
                },] }
    ];
    return NgxaSelectModule;
}());
export { NgxaSelectModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4YS1zZWxlY3QubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHhhcGhpcmEvbmd4YS1jb21tb24vIiwic291cmNlcyI6WyJsaWIvc2VsZWN0L25neGEtc2VsZWN0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQzs7QUFFOUUsTUFBTSxLQUFPLFVBQVUsR0FBRztJQUN4QixtQkFBbUI7Q0FDcEI7O0FBRUQsTUFBTSxLQUFPLFVBQVUsR0FBRztJQUN4QixzQkFBc0I7Q0FDdkI7QUFFRDtJQUFBO0lBa0JnQyxDQUFDOztnQkFsQmhDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixXQUFXO3dCQUNYLG1CQUFtQjt3QkFDbkIsY0FBYzt3QkFDZCxlQUFlO3dCQUNmLGNBQWM7cUJBQ2Y7b0JBQ0QsWUFBWSxtQkFDUCxVQUFVLEVBQ1YsVUFBVSxDQUNkO29CQUNELE9BQU8sbUJBQ0YsVUFBVSxFQUNWLFVBQVUsQ0FDZDtpQkFDRjs7SUFDK0IsdUJBQUM7Q0FBQSxBQWxCakMsSUFrQmlDO1NBQXBCLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBUcmFuc2xhdGVNb2R1bGUgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcbmltcG9ydCB7IE5nU2VsZWN0TW9kdWxlIH0gZnJvbSAnQG5nLXNlbGVjdC9uZy1zZWxlY3QnO1xuaW1wb3J0IHsgTmd4YUJhc2VNb2R1bGUgfSBmcm9tICcuLi9iYXNlL25neGEtYmFzZS5tb2R1bGUnO1xuaW1wb3J0IHsgTmd4YVNlbGVjdENvbXBvbmVudCB9IGZyb20gJy4vbmd4YS1zZWxlY3QuY29tcG9uZW50JztcbmltcG9ydCB7IENvbnRlbnRTZWxlY3REaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZS9jb250ZW50LXNlbGVjdC5kaXJlY3RpdmUnO1xuXG5leHBvcnQgY29uc3QgY29tcG9uZW50cyA9IFtcbiAgTmd4YVNlbGVjdENvbXBvbmVudCxcbl07XG5cbmV4cG9ydCBjb25zdCBkaXJlY3RpdmVzID0gW1xuICBDb250ZW50U2VsZWN0RGlyZWN0aXZlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIE5nU2VsZWN0TW9kdWxlLFxuICAgIFRyYW5zbGF0ZU1vZHVsZSxcbiAgICBOZ3hhQmFzZU1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgLi4uY29tcG9uZW50cyxcbiAgICAuLi5kaXJlY3RpdmVzLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgLi4uY29tcG9uZW50cyxcbiAgICAuLi5kaXJlY3RpdmVzLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBOZ3hhU2VsZWN0TW9kdWxlIHsgfVxuIl19