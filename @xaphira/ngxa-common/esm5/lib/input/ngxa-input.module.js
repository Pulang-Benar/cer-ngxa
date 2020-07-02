/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
export var components = [
    NgxaInputTextComponent,
    NgxaInputBaseIconComponent,
    NgxaInputIconComponent,
    NgxaInputCurrencyComponent,
];
var NgxaInputModule = /** @class */ (function () {
    function NgxaInputModule() {
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
                    declarations: tslib_1.__spread(components),
                    exports: tslib_1.__spread(components, [
                        NbInputModule,
                    ]),
                },] }
    ];
    return NgxaInputModule;
}());
export { NgxaInputModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4YS1pbnB1dC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AeGFwaGlyYS9uZ3hhLWNvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi9pbnB1dC9uZ3hhLWlucHV0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDMUQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDMUUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDdEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDMUUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7O0FBRW5GLE1BQU0sS0FBTyxVQUFVLEdBQUc7SUFDeEIsc0JBQXNCO0lBQ3RCLDBCQUEwQjtJQUMxQixzQkFBc0I7SUFDdEIsMEJBQTBCO0NBQzNCO0FBRUQ7SUFBQTtJQWtCK0IsQ0FBQzs7Z0JBbEIvQixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osV0FBVzt3QkFDWCxtQkFBbUI7d0JBQ25CLGFBQWE7d0JBQ2IsWUFBWTt3QkFDWixlQUFlO3dCQUNmLGNBQWM7cUJBQ2Y7b0JBQ0QsWUFBWSxtQkFDUCxVQUFVLENBQ2Q7b0JBQ0QsT0FBTyxtQkFDRixVQUFVO3dCQUNiLGFBQWE7c0JBQ2Q7aUJBQ0Y7O0lBQzhCLHNCQUFDO0NBQUEsQUFsQmhDLElBa0JnQztTQUFuQixlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgVHJhbnNsYXRlTW9kdWxlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5pbXBvcnQgeyBOYklucHV0TW9kdWxlLCBOYkljb25Nb2R1bGUgfSBmcm9tICdAbmVidWxhci90aGVtZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmd4YUJhc2VNb2R1bGUgfSBmcm9tICcuLi9iYXNlL25neGEtYmFzZS5tb2R1bGUnO1xuaW1wb3J0IHsgTmd4YUlucHV0VGV4dENvbXBvbmVudCB9IGZyb20gJy4vdGV4dC9uZ3hhLWlucHV0LXRleHQuY29tcG9uZW50JztcbmltcG9ydCB7IE5neGFJbnB1dEN1cnJlbmN5Q29tcG9uZW50IH0gZnJvbSAnLi9jdXJyZW5jeS9uZ3hhLWlucHV0LWN1cnJlbmN5LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ3hhSW5wdXRJY29uQ29tcG9uZW50IH0gZnJvbSAnLi9pY29uL25neGEtaW5wdXQtaWNvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmd4YUlucHV0QmFzZUljb25Db21wb25lbnQgfSBmcm9tICcuL2ljb24vbmd4YS1pbnB1dC1iYXNlLWljb24uY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IGNvbXBvbmVudHMgPSBbXG4gIE5neGFJbnB1dFRleHRDb21wb25lbnQsXG4gIE5neGFJbnB1dEJhc2VJY29uQ29tcG9uZW50LFxuICBOZ3hhSW5wdXRJY29uQ29tcG9uZW50LFxuICBOZ3hhSW5wdXRDdXJyZW5jeUNvbXBvbmVudCxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBOYklucHV0TW9kdWxlLFxuICAgIE5iSWNvbk1vZHVsZSxcbiAgICBUcmFuc2xhdGVNb2R1bGUsXG4gICAgTmd4YUJhc2VNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIC4uLmNvbXBvbmVudHMsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICAuLi5jb21wb25lbnRzLFxuICAgIE5iSW5wdXRNb2R1bGUsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIE5neGFJbnB1dE1vZHVsZSB7IH1cbiJdfQ==