/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { NbCardModule } from '@nebular/theme';
import { NgxaMapsLeafletComponent } from './leaflet/ngxa-maps-leaflet.component';
import { NgxaMapsAgmComponent } from './agm/ngxa-maps-agm.component';
/** @type {?} */
export const components = [
    NgxaMapsLeafletComponent,
    NgxaMapsAgmComponent,
];
export class NgxaMapsModule {
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
                declarations: [
                    ...components,
                ],
                exports: [
                    ...components,
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4YS1tYXBzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B4YXBoaXJhL25neGEtY29tbW9uLyIsInNvdXJjZXMiOlsibGliL21hcHMvbmd4YS1tYXBzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDMUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUNqRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7QUFFckUsTUFBTSxPQUFPLFVBQVUsR0FBRztJQUN4Qix3QkFBd0I7SUFDeEIsb0JBQW9CO0NBQ3JCO0FBb0JELE1BQU0sT0FBTyxjQUFjOzs7WUFsQjFCLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixXQUFXO29CQUNYLGFBQWEsQ0FBQyxPQUFPLENBQUM7d0JBQ3BCLE1BQU0sRUFBRSx5Q0FBeUM7d0JBQ2pELFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQztxQkFDdEIsQ0FBQztvQkFDRixhQUFhLENBQUMsT0FBTyxFQUFFO29CQUN2QixZQUFZO2lCQUNiO2dCQUNELFlBQVksRUFBRTtvQkFDWixHQUFHLFVBQVU7aUJBQ2Q7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLEdBQUcsVUFBVTtpQkFDZDthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEFnbUNvcmVNb2R1bGUgfSBmcm9tICdAYWdtL2NvcmUnO1xuaW1wb3J0IHsgTGVhZmxldE1vZHVsZSB9IGZyb20gJ0Bhc3ltbWV0cmlrL25neC1sZWFmbGV0JztcbmltcG9ydCB7IE5iQ2FyZE1vZHVsZSB9IGZyb20gJ0BuZWJ1bGFyL3RoZW1lJztcbmltcG9ydCB7IE5neGFNYXBzTGVhZmxldENvbXBvbmVudCB9IGZyb20gJy4vbGVhZmxldC9uZ3hhLW1hcHMtbGVhZmxldC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmd4YU1hcHNBZ21Db21wb25lbnQgfSBmcm9tICcuL2FnbS9uZ3hhLW1hcHMtYWdtLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBjb21wb25lbnRzID0gW1xuICBOZ3hhTWFwc0xlYWZsZXRDb21wb25lbnQsXG4gIE5neGFNYXBzQWdtQ29tcG9uZW50LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBBZ21Db3JlTW9kdWxlLmZvclJvb3Qoe1xuICAgICAgYXBpS2V5OiAnQUl6YVN5QjNjdEFHb196M0ZOT1ZXcXVpak1HQmdlc00xWGxSYS1ZJyxcbiAgICAgIGxpYnJhcmllczogWydwbGFjZXMnXSxcbiAgICB9KSxcbiAgICBMZWFmbGV0TW9kdWxlLmZvclJvb3QoKSxcbiAgICBOYkNhcmRNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIC4uLmNvbXBvbmVudHMsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICAuLi5jb21wb25lbnRzLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBOZ3hhTWFwc01vZHVsZSB7IH1cbiJdfQ==