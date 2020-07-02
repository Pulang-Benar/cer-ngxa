/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CKEditorModule } from 'ng2-ckeditor';
import { TinyMCEComponent } from './tiny-mce/tiny-mce.component';
import { CaldeiraKnabbenEditorComponent } from './ckeditor/ckeditor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgxaBaseModule } from '../base/ngxa-base.module';
import { MCECoreComponent } from './tiny-mce/mce-core.component';
import { NgxaTextareaComponent } from './textarea/textarea.component';
import { NbInputModule } from '@nebular/theme';
/** @type {?} */
export var components = [
    MCECoreComponent,
    TinyMCEComponent,
    CaldeiraKnabbenEditorComponent,
    NgxaTextareaComponent,
];
var NgxaEditorModule = /** @class */ (function () {
    function NgxaEditorModule() {
    }
    NgxaEditorModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        CKEditorModule,
                        TranslateModule,
                        NbInputModule,
                        NgxaBaseModule,
                    ],
                    declarations: tslib_1.__spread(components),
                    exports: tslib_1.__spread(components),
                },] }
    ];
    return NgxaEditorModule;
}());
export { NgxaEditorModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4YS1lZGl0b3IubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHhhcGhpcmEvbmd4YS1jb21tb24vIiwic291cmNlcyI6WyJsaWIvZWRpdG9yL25neGEtZWRpdG9yLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUM5QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNqRSxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUMvRSxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDakUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDdEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztBQUUvQyxNQUFNLEtBQU8sVUFBVSxHQUFHO0lBQ3hCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsOEJBQThCO0lBQzlCLHFCQUFxQjtDQUN0QjtBQUVEO0lBQUE7SUFpQmdDLENBQUM7O2dCQWpCaEMsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLFdBQVc7d0JBQ1gsbUJBQW1CO3dCQUNuQixjQUFjO3dCQUNkLGVBQWU7d0JBQ2YsYUFBYTt3QkFDYixjQUFjO3FCQUNmO29CQUNELFlBQVksbUJBQ1AsVUFBVSxDQUNkO29CQUNELE9BQU8sbUJBQ0YsVUFBVSxDQUNkO2lCQUNGOztJQUMrQix1QkFBQztDQUFBLEFBakJqQyxJQWlCaUM7U0FBcEIsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENLRWRpdG9yTW9kdWxlIH0gZnJvbSAnbmcyLWNrZWRpdG9yJztcbmltcG9ydCB7IFRpbnlNQ0VDb21wb25lbnQgfSBmcm9tICcuL3RpbnktbWNlL3RpbnktbWNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDYWxkZWlyYUtuYWJiZW5FZGl0b3JDb21wb25lbnQgfSBmcm9tICcuL2NrZWRpdG9yL2NrZWRpdG9yLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBUcmFuc2xhdGVNb2R1bGUgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcbmltcG9ydCB7IE5neGFCYXNlTW9kdWxlIH0gZnJvbSAnLi4vYmFzZS9uZ3hhLWJhc2UubW9kdWxlJztcbmltcG9ydCB7IE1DRUNvcmVDb21wb25lbnQgfSBmcm9tICcuL3RpbnktbWNlL21jZS1jb3JlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ3hhVGV4dGFyZWFDb21wb25lbnQgfSBmcm9tICcuL3RleHRhcmVhL3RleHRhcmVhLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOYklucHV0TW9kdWxlIH0gZnJvbSAnQG5lYnVsYXIvdGhlbWUnO1xuXG5leHBvcnQgY29uc3QgY29tcG9uZW50cyA9IFtcbiAgTUNFQ29yZUNvbXBvbmVudCxcbiAgVGlueU1DRUNvbXBvbmVudCxcbiAgQ2FsZGVpcmFLbmFiYmVuRWRpdG9yQ29tcG9uZW50LFxuICBOZ3hhVGV4dGFyZWFDb21wb25lbnQsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgQ0tFZGl0b3JNb2R1bGUsXG4gICAgVHJhbnNsYXRlTW9kdWxlLFxuICAgIE5iSW5wdXRNb2R1bGUsXG4gICAgTmd4YUJhc2VNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIC4uLmNvbXBvbmVudHMsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICAuLi5jb21wb25lbnRzLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBOZ3hhRWRpdG9yTW9kdWxlIHsgfVxuIl19