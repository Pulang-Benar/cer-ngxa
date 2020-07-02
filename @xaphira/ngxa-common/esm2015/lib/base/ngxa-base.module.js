/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { NgxaErrorMessageComponent } from './error-message/ngxa-error-message.component';
import { NgxaPageOutletComponent } from './page-outlet/ngxa-page-outlet.component';
import { NbCardModule, NbIconModule, NbSelectModule } from '@nebular/theme';
import { NgxaContainerOutletComponent } from './container-outlet/ngxa-container-outlet.component';
import { CurrencyMaskDirective } from './directive/currency.directive';
import { EqualValidator } from './directive/equal-validator.directive';
import { NotEqualValidator } from './directive/not-equal-validator.directive';
import { NgxaToastrModule } from '../toastr/ngxa-toastr.module';
import { DragDropDirective } from './directive/drag-drop.directive';
/** @type {?} */
export const components = [
    NgxaPageOutletComponent,
    NgxaContainerOutletComponent,
    NgxaErrorMessageComponent,
];
/** @type {?} */
export const directives = [
    CurrencyMaskDirective,
    EqualValidator,
    NotEqualValidator,
    DragDropDirective,
];
export class NgxaBaseModule {
}
NgxaBaseModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    TranslateModule,
                    NbCardModule,
                    NbIconModule,
                    NbSelectModule,
                    NgxaToastrModule.forRoot(),
                ],
                declarations: [
                    ...components,
                    ...directives,
                ],
                exports: [
                    ...components,
                    ...directives,
                    TranslateModule,
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4YS1iYXNlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B4YXBoaXJhL25neGEtY29tbW9uLyIsInNvdXJjZXMiOlsibGliL2Jhc2Uvbmd4YS1iYXNlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUN6RixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNuRixPQUFPLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1RSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUNsRyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDdkUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDOUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUNBQWlDLENBQUM7O0FBRXBFLE1BQU0sT0FBTyxVQUFVLEdBQUc7SUFDeEIsdUJBQXVCO0lBQ3ZCLDRCQUE0QjtJQUM1Qix5QkFBeUI7Q0FDMUI7O0FBRUQsTUFBTSxPQUFPLFVBQVUsR0FBRztJQUN4QixxQkFBcUI7SUFDckIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixpQkFBaUI7Q0FDbEI7QUFzQkQsTUFBTSxPQUFPLGNBQWM7OztZQXBCMUIsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLFdBQVc7b0JBQ1gsZUFBZTtvQkFDZixZQUFZO29CQUNaLFlBQVk7b0JBQ1osY0FBYztvQkFDZCxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7aUJBQzNCO2dCQUNELFlBQVksRUFBRTtvQkFDWixHQUFHLFVBQVU7b0JBQ2IsR0FBRyxVQUFVO2lCQUNkO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxHQUFHLFVBQVU7b0JBQ2IsR0FBRyxVQUFVO29CQUNiLGVBQWU7aUJBQ2hCO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBUcmFuc2xhdGVNb2R1bGUgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ3hhRXJyb3JNZXNzYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9lcnJvci1tZXNzYWdlL25neGEtZXJyb3ItbWVzc2FnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmd4YVBhZ2VPdXRsZXRDb21wb25lbnQgfSBmcm9tICcuL3BhZ2Utb3V0bGV0L25neGEtcGFnZS1vdXRsZXQuY29tcG9uZW50JztcbmltcG9ydCB7IE5iQ2FyZE1vZHVsZSwgTmJJY29uTW9kdWxlLCBOYlNlbGVjdE1vZHVsZSB9IGZyb20gJ0BuZWJ1bGFyL3RoZW1lJztcbmltcG9ydCB7IE5neGFDb250YWluZXJPdXRsZXRDb21wb25lbnQgfSBmcm9tICcuL2NvbnRhaW5lci1vdXRsZXQvbmd4YS1jb250YWluZXItb3V0bGV0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDdXJyZW5jeU1hc2tEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZS9jdXJyZW5jeS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRXF1YWxWYWxpZGF0b3IgfSBmcm9tICcuL2RpcmVjdGl2ZS9lcXVhbC12YWxpZGF0b3IuZGlyZWN0aXZlJztcbmltcG9ydCB7IE5vdEVxdWFsVmFsaWRhdG9yIH0gZnJvbSAnLi9kaXJlY3RpdmUvbm90LWVxdWFsLXZhbGlkYXRvci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTmd4YVRvYXN0ck1vZHVsZSB9IGZyb20gJy4uL3RvYXN0ci9uZ3hhLXRvYXN0ci5tb2R1bGUnO1xuaW1wb3J0IHsgRHJhZ0Ryb3BEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZS9kcmFnLWRyb3AuZGlyZWN0aXZlJztcblxuZXhwb3J0IGNvbnN0IGNvbXBvbmVudHMgPSBbXG4gIE5neGFQYWdlT3V0bGV0Q29tcG9uZW50LFxuICBOZ3hhQ29udGFpbmVyT3V0bGV0Q29tcG9uZW50LFxuICBOZ3hhRXJyb3JNZXNzYWdlQ29tcG9uZW50LFxuXTtcblxuZXhwb3J0IGNvbnN0IGRpcmVjdGl2ZXMgPSBbXG4gIEN1cnJlbmN5TWFza0RpcmVjdGl2ZSxcbiAgRXF1YWxWYWxpZGF0b3IsXG4gIE5vdEVxdWFsVmFsaWRhdG9yLFxuICBEcmFnRHJvcERpcmVjdGl2ZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgVHJhbnNsYXRlTW9kdWxlLFxuICAgIE5iQ2FyZE1vZHVsZSxcbiAgICBOYkljb25Nb2R1bGUsXG4gICAgTmJTZWxlY3RNb2R1bGUsXG4gICAgTmd4YVRvYXN0ck1vZHVsZS5mb3JSb290KCksXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIC4uLmNvbXBvbmVudHMsXG4gICAgLi4uZGlyZWN0aXZlcyxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIC4uLmNvbXBvbmVudHMsXG4gICAgLi4uZGlyZWN0aXZlcyxcbiAgICBUcmFuc2xhdGVNb2R1bGUsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIE5neGFCYXNlTW9kdWxlIHsgfVxuIl19