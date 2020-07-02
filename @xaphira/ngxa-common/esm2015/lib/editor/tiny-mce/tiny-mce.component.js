/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation, Input, Optional, Self, Inject, LOCALE_ID, ElementRef, } from '@angular/core';
import { NgxaValueAccessor } from '../../base/ngxa-value-accessor.component';
import { NgControl } from '@angular/forms';
export class TinyMCEComponent extends NgxaValueAccessor {
    /**
     * @param {?} ngControl
     * @param {?} locale
     * @param {?} element
     */
    constructor(ngControl, locale, element) {
        super(ngControl, locale);
        this.locale = locale;
        this.element = element;
        this.colLabel = 3;
        this.colInput = 9;
        this.plugins = ['link', 'paste', 'table'];
        this.height = 320;
    }
    /**
     * @param {?} element
     * @return {?}
     */
    editorChange(element) {
        if (!element) {
            element = this.element.nativeElement;
            element = element.getElementsByClassName('mce-edit-area').item(0);
        }
        if (this.ngControl.invalid) {
            if (!element.getAttribute('class').endsWith('status-danger'))
                element.setAttribute('class', element.getAttribute('class').concat(' status-danger'));
            this.ngControl.control.markAsTouched();
        }
        else {
            if (element.getAttribute('class').endsWith('status-danger')) {
                element.setAttribute('class', element.getAttribute('class').replace('status-danger', ''));
            }
        }
    }
}
TinyMCEComponent.decorators = [
    { type: Component, args: [{
                selector: 'xa-tiny-mce',
                template: "<xa-container-outlet\n  [name]=\"name\" [label]=\"label\"\n  [colLabel]=\"colLabel\" [colContent]=\"colInput\"\n  [required]=\"required\" [hasErrors]=\"hasErrors\"\n  [errorMessages]=\"errorMessages\" [paramError]=\"paramError\"\n  [skeleton]=\"skeleton\">\n  <div class=\"col-sm-{{colInput}}\" *ngIf=\"!skeleton; else contentskeleton\">\n    <xa-mce-core\n      [name]=\"name\"\n      [required]=\"required\"\n      [readonly]=\"disabled\"\n      [plugins]=\"plugins\"\n      [height]=\"height\"\n      [value]=\"value\"\n      [(ngModel)]=\"value\"\n      (change)=\"onChange($event)\"\n      (focus)=\"onTouched($event)\"\n      (editorchange)=\"editorChange($event.target.contentAreaContainer)\"\n      (focus)=\"editorChange($event.target.contentAreaContainer)\"\n      (blur)=\"editorChange($event.target.contentAreaContainer)\">\n    </xa-mce-core>\n  </div>\n  <ng-template #contentskeleton>\n    <div class=\"col-sm-{{colInput}}\">\n      <div\n        [ngClass]=\"{\n          'skeleton': skeleton\n        }\"\n        [ngStyle]=\"{ \n          'width':  '100%',\n          'height':  height + 'px'\n        }\">\n      </div>\n    </div>\n  </ng-template>\n</xa-container-outlet>",
                encapsulation: ViewEncapsulation.None,
                styles: [".mce-edit-area.status-danger{border:1px solid #ff3d71!important;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 0 3px #fde6e8}"]
            }] }
];
/** @nocollapse */
TinyMCEComponent.ctorParameters = () => [
    { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] },
    { type: ElementRef }
];
TinyMCEComponent.propDecorators = {
    placeholder: [{ type: Input }],
    colLabel: [{ type: Input }],
    colInput: [{ type: Input }],
    plugins: [{ type: Input }],
    height: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    TinyMCEComponent.prototype.placeholder;
    /** @type {?} */
    TinyMCEComponent.prototype.colLabel;
    /** @type {?} */
    TinyMCEComponent.prototype.colInput;
    /** @type {?} */
    TinyMCEComponent.prototype.plugins;
    /** @type {?} */
    TinyMCEComponent.prototype.height;
    /** @type {?} */
    TinyMCEComponent.prototype.locale;
    /**
     * @type {?}
     * @private
     */
    TinyMCEComponent.prototype.element;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlueS1tY2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHhhcGhpcmEvbmd4YS1jb21tb24vIiwic291cmNlcyI6WyJsaWIvZWRpdG9yL3RpbnktbWNlL3RpbnktbWNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsS0FBSyxFQUNMLFFBQVEsRUFDUixJQUFJLEVBQ0osTUFBTSxFQUNOLFNBQVMsRUFDVCxVQUFVLEdBQ1gsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDN0UsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBUTNDLE1BQU0sT0FBTyxnQkFBaUIsU0FBUSxpQkFBeUI7Ozs7OztJQU83RCxZQUFnQyxTQUFvQixFQUN4QixNQUFjLEVBQ2hDLE9BQW1CO1FBQzNCLEtBQUssQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFGQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2hDLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFQcEIsYUFBUSxHQUFXLENBQUMsQ0FBQztRQUNyQixhQUFRLEdBQVcsQ0FBQyxDQUFDO1FBQ3JCLFlBQU8sR0FBYSxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDL0MsV0FBTSxHQUFXLEdBQUcsQ0FBQztJQU05QixDQUFDOzs7OztJQUVELFlBQVksQ0FBQyxPQUFnQjtRQUMzQixJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ1osT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDO1lBQ3JDLE9BQU8sR0FBRyxPQUFPLENBQUMsc0JBQXNCLENBQUMsZUFBZSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ25FO1FBQ0QsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRTtZQUMxQixJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDO2dCQUMxRCxPQUFPLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7WUFDeEYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDeEM7YUFBTTtZQUNMLElBQUksT0FBTyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLEVBQUU7Z0JBQzNELE9BQU8sQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLGVBQWUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQzNGO1NBQ0Y7SUFDSCxDQUFDOzs7WUFqQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUV2QixtckNBQXdDO2dCQUN4QyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7YUFDdEM7Ozs7WUFQUSxTQUFTLHVCQWVILFFBQVEsWUFBSSxJQUFJO3lDQUMxQixNQUFNLFNBQUMsU0FBUztZQW5CbkIsVUFBVTs7OzBCQVlULEtBQUs7dUJBQ0wsS0FBSzt1QkFDTCxLQUFLO3NCQUNMLEtBQUs7cUJBQ0wsS0FBSzs7OztJQUpOLHVDQUE2Qjs7SUFDN0Isb0NBQThCOztJQUM5QixvQ0FBOEI7O0lBQzlCLG1DQUF3RDs7SUFDeEQsa0NBQThCOztJQUc1QixrQ0FBd0M7Ozs7O0lBQ3hDLG1DQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIElucHV0LFxuICBPcHRpb25hbCxcbiAgU2VsZixcbiAgSW5qZWN0LFxuICBMT0NBTEVfSUQsXG4gIEVsZW1lbnRSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmd4YVZhbHVlQWNjZXNzb3IgfSBmcm9tICcuLi8uLi9iYXNlL25neGEtdmFsdWUtYWNjZXNzb3IuY29tcG9uZW50JztcbmltcG9ydCB7IE5nQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAneGEtdGlueS1tY2UnLFxuICBzdHlsZVVybHM6IFsnLi90aW55LW1jZS5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vdGlueS1tY2UuY29tcG9uZW50Lmh0bWwnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBUaW55TUNFQ29tcG9uZW50IGV4dGVuZHMgTmd4YVZhbHVlQWNjZXNzb3I8c3RyaW5nPiB7XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNvbExhYmVsOiBudW1iZXIgPSAzO1xuICBASW5wdXQoKSBjb2xJbnB1dDogbnVtYmVyID0gOTtcbiAgQElucHV0KCkgcGx1Z2luczogc3RyaW5nW10gPSBbJ2xpbmsnLCAncGFzdGUnLCAndGFibGUnXTtcbiAgQElucHV0KCkgaGVpZ2h0OiBudW1iZXIgPSAzMjA7XG5cbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQFNlbGYoKSBuZ0NvbnRyb2w6IE5nQ29udHJvbCxcbiAgICBASW5qZWN0KExPQ0FMRV9JRCkgcHVibGljIGxvY2FsZTogc3RyaW5nLFxuICAgIHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZikge1xuICAgIHN1cGVyKG5nQ29udHJvbCwgbG9jYWxlKTtcbiAgfVxuXG4gIGVkaXRvckNoYW5nZShlbGVtZW50OiBFbGVtZW50KSB7XG4gICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICBlbGVtZW50ID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgICBlbGVtZW50ID0gZWxlbWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtY2UtZWRpdC1hcmVhJykuaXRlbSgwKTtcbiAgICB9XG4gICAgaWYgKHRoaXMubmdDb250cm9sLmludmFsaWQpIHtcbiAgICAgIGlmICghZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykuZW5kc1dpdGgoJ3N0YXR1cy1kYW5nZXInKSlcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykuY29uY2F0KCcgc3RhdHVzLWRhbmdlcicpKTtcbiAgICAgIHRoaXMubmdDb250cm9sLmNvbnRyb2wubWFya0FzVG91Y2hlZCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykuZW5kc1dpdGgoJ3N0YXR1cy1kYW5nZXInKSkge1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBlbGVtZW50LmdldEF0dHJpYnV0ZSgnY2xhc3MnKS5yZXBsYWNlKCdzdGF0dXMtZGFuZ2VyJywgJycpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==