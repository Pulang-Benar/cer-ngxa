/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Inject, Input, ViewEncapsulation, Optional, Self, LOCALE_ID, } from '@angular/core';
import { NgControl } from '@angular/forms';
import { NgxaValueAccessor } from '../../base/ngxa-value-accessor.component';
export class NgxaTextareaComponent extends NgxaValueAccessor {
    /**
     * @param {?} ngControl
     * @param {?} locale
     */
    constructor(ngControl, locale) {
        super(ngControl, locale);
        this.locale = locale;
        this.colLabel = 3;
        this.colInput = 9;
        this.minLength = 0;
        this.maxLength = 250;
        this.height = 120;
    }
    /**
     * @return {?}
     */
    onInit() {
        this.paramError = {
            value: this.minLength,
        };
    }
    /**
     * @return {?}
     */
    ngOnDestroy() { }
}
NgxaTextareaComponent.decorators = [
    { type: Component, args: [{
                selector: 'xa-textarea',
                template: "<xa-container-outlet\n  [name]=\"name\" [label]=\"label\"\n  [colLabel]=\"colLabel\" [colContent]=\"colInput\"\n  [required]=\"required\" [hasErrors]=\"hasErrors\"\n  [errorMessages]=\"errorMessages\" [paramError]=\"paramError\"\n  [skeleton]=\"skeleton\">\n  <div class=\"col-sm-{{colInput}}\" *ngIf=\"!skeleton; else contentskeleton\">\n    <textarea \n      id=\"{{name}}\"\n      [minLength]=\"minLength\"\n      [maxLength]=\"maxLength\"\n      [required]=\"required\"\n      [placeholder]=\"placeholder ? (placeholder | translate) : ''\"\n      [disabled]=\"disabled\"\n      [ngClass]=\"{\n        'status-danger': hasErrors,\n        'status-success': hasSuccess\n      }\"\n      [ngStyle]=\"{ \n        'width':  '100%',\n        'height':  height + 'px'\n      }\"\n      (input)=\"onChange($event.target.value)\"\n      (change)=\"onChange($event.target.value)\"\n      (blur)=\"onTouched($event.target.value)\"\n      (focus)=\"onTouched($event.target.value)\"\n      [(ngModel)]=\"value\"\n      nbInput fullWidth>\n    </textarea>\n  </div>\n  <ng-template #contentskeleton>\n    <div class=\"col-sm-{{colInput}}\">\n      <div\n        [ngClass]=\"{\n          'skeleton': skeleton\n        }\"\n        [ngStyle]=\"{ \n          'width':  '100%',\n          'height':  height + 'px'\n        }\">\n      </div>\n    </div>\n  </ng-template>\n</xa-container-outlet>",
                encapsulation: ViewEncapsulation.None,
                styles: [""]
            }] }
];
/** @nocollapse */
NgxaTextareaComponent.ctorParameters = () => [
    { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
];
NgxaTextareaComponent.propDecorators = {
    placeholder: [{ type: Input }],
    colLabel: [{ type: Input }],
    colInput: [{ type: Input }],
    minLength: [{ type: Input }],
    maxLength: [{ type: Input }],
    height: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NgxaTextareaComponent.prototype.placeholder;
    /** @type {?} */
    NgxaTextareaComponent.prototype.colLabel;
    /** @type {?} */
    NgxaTextareaComponent.prototype.colInput;
    /** @type {?} */
    NgxaTextareaComponent.prototype.minLength;
    /** @type {?} */
    NgxaTextareaComponent.prototype.maxLength;
    /** @type {?} */
    NgxaTextareaComponent.prototype.height;
    /** @type {?} */
    NgxaTextareaComponent.prototype.locale;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dGFyZWEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHhhcGhpcmEvbmd4YS1jb21tb24vIiwic291cmNlcyI6WyJsaWIvZWRpdG9yL3RleHRhcmVhL3RleHRhcmVhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxNQUFNLEVBRU4sS0FBSyxFQUNMLGlCQUFpQixFQUNqQixRQUFRLEVBQ1IsSUFBSSxFQUNKLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFRN0UsTUFBTSxPQUFPLHFCQUFzQixTQUFRLGlCQUF5Qjs7Ozs7SUFRbEUsWUFBZ0MsU0FBb0IsRUFDeEIsTUFBYztRQUN4QyxLQUFLLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBREMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQVBqQyxhQUFRLEdBQVcsQ0FBQyxDQUFDO1FBQ3JCLGFBQVEsR0FBVyxDQUFDLENBQUM7UUFDckIsY0FBUyxHQUFXLENBQUMsQ0FBQztRQUN0QixjQUFTLEdBQVcsR0FBRyxDQUFDO1FBQ3hCLFdBQU0sR0FBVyxHQUFHLENBQUM7SUFLOUIsQ0FBQzs7OztJQUVELE1BQU07UUFDSixJQUFJLENBQUMsVUFBVSxHQUFHO1lBQ2hCLEtBQUssRUFBRSxJQUFJLENBQUMsU0FBUztTQUN0QixDQUFDO0lBQ0osQ0FBQzs7OztJQUVELFdBQVcsS0FBVSxDQUFDOzs7WUF6QnZCLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTtnQkFFdkIsaTNDQUF3QztnQkFDeEMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2FBQ3RDOzs7O1lBUlEsU0FBUyx1QkFpQkgsUUFBUSxZQUFJLElBQUk7eUNBQzFCLE1BQU0sU0FBQyxTQUFTOzs7MEJBUmxCLEtBQUs7dUJBQ0wsS0FBSzt1QkFDTCxLQUFLO3dCQUNMLEtBQUs7d0JBQ0wsS0FBSztxQkFDTCxLQUFLOzs7O0lBTE4sNENBQTZCOztJQUM3Qix5Q0FBOEI7O0lBQzlCLHlDQUE4Qjs7SUFDOUIsMENBQStCOztJQUMvQiwwQ0FBaUM7O0lBQ2pDLHVDQUE4Qjs7SUFHNUIsdUNBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbmplY3QsXG4gIE9uRGVzdHJveSxcbiAgSW5wdXQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBPcHRpb25hbCxcbiAgU2VsZixcbiAgTE9DQUxFX0lELFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE5neGFWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnLi4vLi4vYmFzZS9uZ3hhLXZhbHVlLWFjY2Vzc29yLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3hhLXRleHRhcmVhJyxcbiAgc3R5bGVVcmxzOiBbJy4vdGV4dGFyZWEuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL3RleHRhcmVhLmNvbXBvbmVudC5odG1sJyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgTmd4YVRleHRhcmVhQ29tcG9uZW50IGV4dGVuZHMgTmd4YVZhbHVlQWNjZXNzb3I8c3RyaW5nPiBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNvbExhYmVsOiBudW1iZXIgPSAzO1xuICBASW5wdXQoKSBjb2xJbnB1dDogbnVtYmVyID0gOTtcbiAgQElucHV0KCkgbWluTGVuZ3RoOiBudW1iZXIgPSAwO1xuICBASW5wdXQoKSBtYXhMZW5ndGg6IG51bWJlciA9IDI1MDtcbiAgQElucHV0KCkgaGVpZ2h0OiBudW1iZXIgPSAxMjA7XG5cbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQFNlbGYoKSBuZ0NvbnRyb2w6IE5nQ29udHJvbCxcbiAgICBASW5qZWN0KExPQ0FMRV9JRCkgcHVibGljIGxvY2FsZTogc3RyaW5nKSB7XG4gICAgc3VwZXIobmdDb250cm9sLCBsb2NhbGUpO1xuICB9XG5cbiAgb25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMucGFyYW1FcnJvciA9IHtcbiAgICAgIHZhbHVlOiB0aGlzLm1pbkxlbmd0aCxcbiAgICB9O1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7fVxuXG59XG4iXX0=