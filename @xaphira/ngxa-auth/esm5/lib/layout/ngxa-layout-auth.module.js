/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { NbCardModule, NbLayoutModule, NbIconModule, } from '@nebular/theme';
import { NgxaThemeModule } from '@xaphira/ngxa-theme';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AuthComponent } from './auth.component';
import { AuthBlockComponent } from './auth-block/auth-block.component';
import { RouterModule } from '@angular/router';
/** @type {?} */
var components = [
    AuthComponent,
    AuthBlockComponent,
];
var NgxaLayoutAuthModule = /** @class */ (function () {
    function NgxaLayoutAuthModule() {
    }
    NgxaLayoutAuthModule.decorators = [
        { type: NgModule, args: [{
                    declarations: tslib_1.__spread(components),
                    imports: [
                        NbLayoutModule,
                        NbCardModule,
                        NbIconModule,
                        CommonModule,
                        HttpClientModule,
                        NgxaThemeModule,
                        RouterModule,
                    ],
                    exports: tslib_1.__spread(components),
                },] }
    ];
    return NgxaLayoutAuthModule;
}());
export { NgxaLayoutAuthModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4YS1sYXlvdXQtYXV0aC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AeGFwaGlyYS9uZ3hhLWF1dGgvIiwic291cmNlcyI6WyJsaWIvbGF5b3V0L25neGEtbGF5b3V0LWF1dGgubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQ0wsWUFBWSxFQUNaLGNBQWMsRUFDZCxZQUFZLEdBQ2IsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN2RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7O0lBRXpDLFVBQVUsR0FBRztJQUNqQixhQUFhO0lBQ2Isa0JBQWtCO0NBQ25CO0FBRUQ7SUFBQTtJQWlCbUMsQ0FBQzs7Z0JBakJuQyxRQUFRLFNBQUM7b0JBQ1IsWUFBWSxtQkFDUCxVQUFVLENBQ2Q7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGNBQWM7d0JBQ2QsWUFBWTt3QkFDWixZQUFZO3dCQUNaLFlBQVk7d0JBQ1osZ0JBQWdCO3dCQUNoQixlQUFlO3dCQUNmLFlBQVk7cUJBQ2I7b0JBQ0QsT0FBTyxtQkFDRixVQUFVLENBQ2Q7aUJBQ0Y7O0lBQ2tDLDJCQUFDO0NBQUEsQUFqQnBDLElBaUJvQztTQUF2QixvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgTmJDYXJkTW9kdWxlLFxuICBOYkxheW91dE1vZHVsZSxcbiAgTmJJY29uTW9kdWxlLFxufSBmcm9tICdAbmVidWxhci90aGVtZSc7XG5pbXBvcnQgeyBOZ3hhVGhlbWVNb2R1bGUgfSBmcm9tICdAeGFwaGlyYS9uZ3hhLXRoZW1lJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgQXV0aENvbXBvbmVudCB9IGZyb20gJy4vYXV0aC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQXV0aEJsb2NrQ29tcG9uZW50IH0gZnJvbSAnLi9hdXRoLWJsb2NrL2F1dGgtYmxvY2suY29tcG9uZW50JztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmNvbnN0IGNvbXBvbmVudHMgPSBbXG4gIEF1dGhDb21wb25lbnQsXG4gIEF1dGhCbG9ja0NvbXBvbmVudCxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIC4uLmNvbXBvbmVudHMsXG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBOYkxheW91dE1vZHVsZSxcbiAgICBOYkNhcmRNb2R1bGUsXG4gICAgTmJJY29uTW9kdWxlLFxuICAgIENvbW1vbk1vZHVsZSxcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgIE5neGFUaGVtZU1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICAuLi5jb21wb25lbnRzLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBOZ3hhTGF5b3V0QXV0aE1vZHVsZSB7fVxuIl19