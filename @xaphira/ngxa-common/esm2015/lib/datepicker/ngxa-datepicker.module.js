/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export const components = [
    NgxaDatePickerComponent,
];
export class NgxaDatePickerModule {
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
                declarations: [
                    ...components,
                ],
                exports: [
                    ...components,
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4YS1kYXRlcGlja2VyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B4YXBoaXJhL25neGEtY29tbW9uLyIsInNvdXJjZXMiOlsibGliL2RhdGVwaWNrZXIvbmd4YS1kYXRlcGlja2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxhQUFhLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzFELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDOztBQUV0RSxNQUFNLE9BQU8sVUFBVSxHQUFHO0lBQ3hCLHVCQUF1QjtDQUN4QjtBQXdCRCxNQUFNLE9BQU8sb0JBQW9COzs7WUF0QmhDLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixXQUFXO29CQUNYLG1CQUFtQjtvQkFDbkIsYUFBYTtvQkFDYixrQkFBa0I7b0JBQ2xCLGtCQUFrQjtvQkFDbEIsbUJBQW1CLENBQUMsT0FBTyxDQUFDO3dCQUMxQixZQUFZLEVBQUUsRUFBRSxvQkFBb0IsRUFBRSxJQUFJLEVBQUU7d0JBQzVDLGFBQWEsRUFBRSxFQUFFLG9CQUFvQixFQUFFLElBQUksRUFBRTtxQkFDOUMsQ0FBQztvQkFDRixlQUFlO29CQUNmLGNBQWM7aUJBQ2Y7Z0JBQ0QsWUFBWSxFQUFFO29CQUNaLEdBQUcsVUFBVTtpQkFDZDtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsR0FBRyxVQUFVO2lCQUNkO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmJJbnB1dE1vZHVsZSwgTmJEYXRlcGlja2VyTW9kdWxlIH0gZnJvbSAnQG5lYnVsYXIvdGhlbWUnO1xuaW1wb3J0IHsgTmJEYXRlRm5zRGF0ZU1vZHVsZSB9IGZyb20gJ0BuZWJ1bGFyL2RhdGUtZm5zJztcbmltcG9ydCB7IE5iTW9tZW50RGF0ZU1vZHVsZSB9IGZyb20gJ0BuZWJ1bGFyL21vbWVudCc7XG5pbXBvcnQgeyBUcmFuc2xhdGVNb2R1bGUgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcbmltcG9ydCB7IE5neGFCYXNlTW9kdWxlIH0gZnJvbSAnLi4vYmFzZS9uZ3hhLWJhc2UubW9kdWxlJztcbmltcG9ydCB7IE5neGFEYXRlUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9uZ3hhLWRhdGVwaWNrZXIuY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IGNvbXBvbmVudHMgPSBbXG4gIE5neGFEYXRlUGlja2VyQ29tcG9uZW50LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIE5iSW5wdXRNb2R1bGUsXG4gICAgTmJEYXRlcGlja2VyTW9kdWxlLFxuICAgIE5iTW9tZW50RGF0ZU1vZHVsZSxcbiAgICBOYkRhdGVGbnNEYXRlTW9kdWxlLmZvclJvb3Qoe1xuICAgICAgcGFyc2VPcHRpb25zOiB7IGF3YXJlT2ZVbmljb2RlVG9rZW5zOiB0cnVlIH0sXG4gICAgICBmb3JtYXRPcHRpb25zOiB7IGF3YXJlT2ZVbmljb2RlVG9rZW5zOiB0cnVlIH0sXG4gICAgfSksXG4gICAgVHJhbnNsYXRlTW9kdWxlLFxuICAgIE5neGFCYXNlTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICAuLi5jb21wb25lbnRzLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgLi4uY29tcG9uZW50cyxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgTmd4YURhdGVQaWNrZXJNb2R1bGUgeyB9XG4iXX0=