/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NbInputModule, NbDatepickerModule } from '@nebular/theme';
import { NbDateFnsDateModule } from '@nebular/date-fns';
import { NbMomentDateModule } from '@nebular/moment';
import { TranslateModule } from '@ngx-translate/core';
import { NgxaBaseModule } from '../base/ngxa-base.module';
import { NgxaDatePickerComponent } from './ngxa-datepicker.component';
/** @type {?} */
export var components = [
    NgxaDatePickerComponent,
];
var NgxaDatePickerModule = /** @class */ (function () {
    function NgxaDatePickerModule() {
    }
    NgxaDatePickerModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        NbInputModule,
                        NbDatepickerModule,
                        NbMomentDateModule,
                        NbDateFnsDateModule.forRoot({
                            parseOptions: { awareOfUnicodeTokens: true },
                            formatOptions: { awareOfUnicodeTokens: true },
                        }),
                        TranslateModule,
                        NgxaBaseModule,
                    ],
                    declarations: tslib_1.__spread(components),
                    exports: tslib_1.__spread(components),
                },] }
    ];
    return NgxaDatePickerModule;
}());
export { NgxaDatePickerModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4YS1kYXRlcGlja2VyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B4YXBoaXJhL25neGEtY29tbW9uLyIsInNvdXJjZXMiOlsibGliL2RhdGVwaWNrZXIvbmd4YS1kYXRlcGlja2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsYUFBYSxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDeEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDckQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7QUFFdEUsTUFBTSxLQUFPLFVBQVUsR0FBRztJQUN4Qix1QkFBdUI7Q0FDeEI7QUFFRDtJQUFBO0lBc0JvQyxDQUFDOztnQkF0QnBDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixXQUFXO3dCQUNYLG1CQUFtQjt3QkFDbkIsYUFBYTt3QkFDYixrQkFBa0I7d0JBQ2xCLGtCQUFrQjt3QkFDbEIsbUJBQW1CLENBQUMsT0FBTyxDQUFDOzRCQUMxQixZQUFZLEVBQUUsRUFBRSxvQkFBb0IsRUFBRSxJQUFJLEVBQUU7NEJBQzVDLGFBQWEsRUFBRSxFQUFFLG9CQUFvQixFQUFFLElBQUksRUFBRTt5QkFDOUMsQ0FBQzt3QkFDRixlQUFlO3dCQUNmLGNBQWM7cUJBQ2Y7b0JBQ0QsWUFBWSxtQkFDUCxVQUFVLENBQ2Q7b0JBQ0QsT0FBTyxtQkFDRixVQUFVLENBQ2Q7aUJBQ0Y7O0lBQ21DLDJCQUFDO0NBQUEsQUF0QnJDLElBc0JxQztTQUF4QixvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmJJbnB1dE1vZHVsZSwgTmJEYXRlcGlja2VyTW9kdWxlIH0gZnJvbSAnQG5lYnVsYXIvdGhlbWUnO1xuaW1wb3J0IHsgTmJEYXRlRm5zRGF0ZU1vZHVsZSB9IGZyb20gJ0BuZWJ1bGFyL2RhdGUtZm5zJztcbmltcG9ydCB7IE5iTW9tZW50RGF0ZU1vZHVsZSB9IGZyb20gJ0BuZWJ1bGFyL21vbWVudCc7XG5pbXBvcnQgeyBUcmFuc2xhdGVNb2R1bGUgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcbmltcG9ydCB7IE5neGFCYXNlTW9kdWxlIH0gZnJvbSAnLi4vYmFzZS9uZ3hhLWJhc2UubW9kdWxlJztcbmltcG9ydCB7IE5neGFEYXRlUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9uZ3hhLWRhdGVwaWNrZXIuY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IGNvbXBvbmVudHMgPSBbXG4gIE5neGFEYXRlUGlja2VyQ29tcG9uZW50LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIE5iSW5wdXRNb2R1bGUsXG4gICAgTmJEYXRlcGlja2VyTW9kdWxlLFxuICAgIE5iTW9tZW50RGF0ZU1vZHVsZSxcbiAgICBOYkRhdGVGbnNEYXRlTW9kdWxlLmZvclJvb3Qoe1xuICAgICAgcGFyc2VPcHRpb25zOiB7IGF3YXJlT2ZVbmljb2RlVG9rZW5zOiB0cnVlIH0sXG4gICAgICBmb3JtYXRPcHRpb25zOiB7IGF3YXJlT2ZVbmljb2RlVG9rZW5zOiB0cnVlIH0sXG4gICAgfSksXG4gICAgVHJhbnNsYXRlTW9kdWxlLFxuICAgIE5neGFCYXNlTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICAuLi5jb21wb25lbnRzLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgLi4uY29tcG9uZW50cyxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgTmd4YURhdGVQaWNrZXJNb2R1bGUgeyB9XG4iXX0=