/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { NbCardModule } from '@nebular/theme';
import { NgxaMapsLeafletComponent } from './leaflet/ngxa-maps-leaflet.component';
import { NgxaMapsAgmComponent } from './agm/ngxa-maps-agm.component';
/** @type {?} */
export var components = [
    NgxaMapsLeafletComponent,
    NgxaMapsAgmComponent,
];
var NgxaMapsModule = /** @class */ (function () {
    function NgxaMapsModule() {
    }
    NgxaMapsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        AgmCoreModule.forRoot({
                            apiKey: 'AIzaSyB3ctAGo_z3FNOVWquijMGBgesM1XlRa-Y',
                            libraries: ['places'],
                        }),
                        LeafletModule.forRoot(),
                        NbCardModule,
                    ],
                    declarations: tslib_1.__spread(components),
                    exports: tslib_1.__spread(components),
                },] }
    ];
    return NgxaMapsModule;
}());
export { NgxaMapsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4YS1tYXBzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B4YXBoaXJhL25neGEtY29tbW9uLyIsInNvdXJjZXMiOlsibGliL21hcHMvbmd4YS1tYXBzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQzFDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUMsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDakYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sK0JBQStCLENBQUM7O0FBRXJFLE1BQU0sS0FBTyxVQUFVLEdBQUc7SUFDeEIsd0JBQXdCO0lBQ3hCLG9CQUFvQjtDQUNyQjtBQUVEO0lBQUE7SUFrQjhCLENBQUM7O2dCQWxCOUIsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLFdBQVc7d0JBQ1gsYUFBYSxDQUFDLE9BQU8sQ0FBQzs0QkFDcEIsTUFBTSxFQUFFLHlDQUF5Qzs0QkFDakQsU0FBUyxFQUFFLENBQUMsUUFBUSxDQUFDO3lCQUN0QixDQUFDO3dCQUNGLGFBQWEsQ0FBQyxPQUFPLEVBQUU7d0JBQ3ZCLFlBQVk7cUJBQ2I7b0JBQ0QsWUFBWSxtQkFDUCxVQUFVLENBQ2Q7b0JBQ0QsT0FBTyxtQkFDRixVQUFVLENBQ2Q7aUJBQ0Y7O0lBQzZCLHFCQUFDO0NBQUEsQUFsQi9CLElBa0IrQjtTQUFsQixjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEFnbUNvcmVNb2R1bGUgfSBmcm9tICdAYWdtL2NvcmUnO1xuaW1wb3J0IHsgTGVhZmxldE1vZHVsZSB9IGZyb20gJ0Bhc3ltbWV0cmlrL25neC1sZWFmbGV0JztcbmltcG9ydCB7IE5iQ2FyZE1vZHVsZSB9IGZyb20gJ0BuZWJ1bGFyL3RoZW1lJztcbmltcG9ydCB7IE5neGFNYXBzTGVhZmxldENvbXBvbmVudCB9IGZyb20gJy4vbGVhZmxldC9uZ3hhLW1hcHMtbGVhZmxldC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmd4YU1hcHNBZ21Db21wb25lbnQgfSBmcm9tICcuL2FnbS9uZ3hhLW1hcHMtYWdtLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBjb21wb25lbnRzID0gW1xuICBOZ3hhTWFwc0xlYWZsZXRDb21wb25lbnQsXG4gIE5neGFNYXBzQWdtQ29tcG9uZW50LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBBZ21Db3JlTW9kdWxlLmZvclJvb3Qoe1xuICAgICAgYXBpS2V5OiAnQUl6YVN5QjNjdEFHb196M0ZOT1ZXcXVpak1HQmdlc00xWGxSYS1ZJyxcbiAgICAgIGxpYnJhcmllczogWydwbGFjZXMnXSxcbiAgICB9KSxcbiAgICBMZWFmbGV0TW9kdWxlLmZvclJvb3QoKSxcbiAgICBOYkNhcmRNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIC4uLmNvbXBvbmVudHMsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICAuLi5jb21wb25lbnRzLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBOZ3hhTWFwc01vZHVsZSB7IH1cbiJdfQ==