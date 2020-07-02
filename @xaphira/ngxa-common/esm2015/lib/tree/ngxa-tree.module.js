/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxaTreeComponent } from './ngxa-tree.component';
import { NgxaTreeNodeComponent } from './ngxa-tree-node.component';
import { TranslateModule } from '@ngx-translate/core';
import { NgxaBaseModule } from '../base/ngxa-base.module';
import { NbIconModule } from '@nebular/theme';
/** @type {?} */
export const components = [
    NgxaTreeComponent,
    NgxaTreeNodeComponent,
];
export class NgxaTreeModule {
}
NgxaTreeModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    NbIconModule,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4YS10cmVlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B4YXBoaXJhL25neGEtY29tbW9uLyIsInNvdXJjZXMiOlsibGliL3RyZWUvbmd4YS10cmVlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWxFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ25FLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDOztBQUU5QyxNQUFNLE9BQU8sVUFBVSxHQUFHO0lBQ3hCLGlCQUFpQjtJQUNqQixxQkFBcUI7Q0FDdEI7QUFrQkQsTUFBTSxPQUFPLGNBQWM7OztZQWhCMUIsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLFdBQVc7b0JBQ1gsbUJBQW1CO29CQUNuQixZQUFZO29CQUNaLGVBQWU7b0JBQ2YsY0FBYztpQkFDZjtnQkFDRCxZQUFZLEVBQUU7b0JBQ1osR0FBRyxVQUFVO2lCQUNkO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxHQUFHLFVBQVU7aUJBQ2Q7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IE5neGFUcmVlQ29tcG9uZW50IH0gZnJvbSAnLi9uZ3hhLXRyZWUuY29tcG9uZW50JztcbmltcG9ydCB7IE5neGFUcmVlTm9kZUNvbXBvbmVudCB9IGZyb20gJy4vbmd4YS10cmVlLW5vZGUuY29tcG9uZW50JztcbmltcG9ydCB7IFRyYW5zbGF0ZU1vZHVsZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuaW1wb3J0IHsgTmd4YUJhc2VNb2R1bGUgfSBmcm9tICcuLi9iYXNlL25neGEtYmFzZS5tb2R1bGUnO1xuaW1wb3J0IHsgTmJJY29uTW9kdWxlIH0gZnJvbSAnQG5lYnVsYXIvdGhlbWUnO1xuXG5leHBvcnQgY29uc3QgY29tcG9uZW50cyA9IFtcbiAgTmd4YVRyZWVDb21wb25lbnQsXG4gIE5neGFUcmVlTm9kZUNvbXBvbmVudCxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBOYkljb25Nb2R1bGUsXG4gICAgVHJhbnNsYXRlTW9kdWxlLFxuICAgIE5neGFCYXNlTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICAuLi5jb21wb25lbnRzLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgLi4uY29tcG9uZW50cyxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgTmd4YVRyZWVNb2R1bGUge31cbiJdfQ==