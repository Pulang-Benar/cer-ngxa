/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
export var components = [
    NgxaPageOutletComponent,
    NgxaContainerOutletComponent,
    NgxaErrorMessageComponent,
];
/** @type {?} */
export var directives = [
    CurrencyMaskDirective,
    EqualValidator,
    NotEqualValidator,
    DragDropDirective,
];
var NgxaBaseModule = /** @class */ (function () {
    function NgxaBaseModule() {
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
                    declarations: tslib_1.__spread(components, directives),
                    exports: tslib_1.__spread(components, directives, [
                        TranslateModule,
                    ]),
                },] }
    ];
    return NgxaBaseModule;
}());
export { NgxaBaseModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4YS1iYXNlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B4YXBoaXJhL25neGEtY29tbW9uLyIsInNvdXJjZXMiOlsibGliL2Jhc2Uvbmd4YS1iYXNlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDekYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDbkYsT0FBTyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsY0FBYyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDbEcsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDdkUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOztBQUVwRSxNQUFNLEtBQU8sVUFBVSxHQUFHO0lBQ3hCLHVCQUF1QjtJQUN2Qiw0QkFBNEI7SUFDNUIseUJBQXlCO0NBQzFCOztBQUVELE1BQU0sS0FBTyxVQUFVLEdBQUc7SUFDeEIscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsaUJBQWlCO0NBQ2xCO0FBRUQ7SUFBQTtJQW9COEIsQ0FBQzs7Z0JBcEI5QixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osV0FBVzt3QkFDWCxlQUFlO3dCQUNmLFlBQVk7d0JBQ1osWUFBWTt3QkFDWixjQUFjO3dCQUNkLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtxQkFDM0I7b0JBQ0QsWUFBWSxtQkFDUCxVQUFVLEVBQ1YsVUFBVSxDQUNkO29CQUNELE9BQU8sbUJBQ0YsVUFBVSxFQUNWLFVBQVU7d0JBQ2IsZUFBZTtzQkFDaEI7aUJBQ0Y7O0lBQzZCLHFCQUFDO0NBQUEsQUFwQi9CLElBb0IrQjtTQUFsQixjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgVHJhbnNsYXRlTW9kdWxlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmd4YUVycm9yTWVzc2FnZUNvbXBvbmVudCB9IGZyb20gJy4vZXJyb3ItbWVzc2FnZS9uZ3hhLWVycm9yLW1lc3NhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IE5neGFQYWdlT3V0bGV0Q29tcG9uZW50IH0gZnJvbSAnLi9wYWdlLW91dGxldC9uZ3hhLXBhZ2Utb3V0bGV0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOYkNhcmRNb2R1bGUsIE5iSWNvbk1vZHVsZSwgTmJTZWxlY3RNb2R1bGUgfSBmcm9tICdAbmVidWxhci90aGVtZSc7XG5pbXBvcnQgeyBOZ3hhQ29udGFpbmVyT3V0bGV0Q29tcG9uZW50IH0gZnJvbSAnLi9jb250YWluZXItb3V0bGV0L25neGEtY29udGFpbmVyLW91dGxldC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ3VycmVuY3lNYXNrRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmUvY3VycmVuY3kuZGlyZWN0aXZlJztcbmltcG9ydCB7IEVxdWFsVmFsaWRhdG9yIH0gZnJvbSAnLi9kaXJlY3RpdmUvZXF1YWwtdmFsaWRhdG9yLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOb3RFcXVhbFZhbGlkYXRvciB9IGZyb20gJy4vZGlyZWN0aXZlL25vdC1lcXVhbC12YWxpZGF0b3IuZGlyZWN0aXZlJztcbmltcG9ydCB7IE5neGFUb2FzdHJNb2R1bGUgfSBmcm9tICcuLi90b2FzdHIvbmd4YS10b2FzdHIubW9kdWxlJztcbmltcG9ydCB7IERyYWdEcm9wRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmUvZHJhZy1kcm9wLmRpcmVjdGl2ZSc7XG5cbmV4cG9ydCBjb25zdCBjb21wb25lbnRzID0gW1xuICBOZ3hhUGFnZU91dGxldENvbXBvbmVudCxcbiAgTmd4YUNvbnRhaW5lck91dGxldENvbXBvbmVudCxcbiAgTmd4YUVycm9yTWVzc2FnZUNvbXBvbmVudCxcbl07XG5cbmV4cG9ydCBjb25zdCBkaXJlY3RpdmVzID0gW1xuICBDdXJyZW5jeU1hc2tEaXJlY3RpdmUsXG4gIEVxdWFsVmFsaWRhdG9yLFxuICBOb3RFcXVhbFZhbGlkYXRvcixcbiAgRHJhZ0Ryb3BEaXJlY3RpdmUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFRyYW5zbGF0ZU1vZHVsZSxcbiAgICBOYkNhcmRNb2R1bGUsXG4gICAgTmJJY29uTW9kdWxlLFxuICAgIE5iU2VsZWN0TW9kdWxlLFxuICAgIE5neGFUb2FzdHJNb2R1bGUuZm9yUm9vdCgpLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICAuLi5jb21wb25lbnRzLFxuICAgIC4uLmRpcmVjdGl2ZXMsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICAuLi5jb21wb25lbnRzLFxuICAgIC4uLmRpcmVjdGl2ZXMsXG4gICAgVHJhbnNsYXRlTW9kdWxlLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBOZ3hhQmFzZU1vZHVsZSB7IH1cbiJdfQ==