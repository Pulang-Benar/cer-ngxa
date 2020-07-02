/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewEncapsulation, Optional, Self, Inject, LOCALE_ID, Output, EventEmitter } from '@angular/core';
import { NgControl } from '@angular/forms';
import { NgxaValueAccessor } from '../../base/ngxa-value-accessor.component';
export class NgxaInputIconComponent extends NgxaValueAccessor {
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
        this.maxLength = 100;
        this.type = 'text';
        this.iconcursor = false;
        this.eva = false;
        this.icon = 'search-outline';
        this.clickIcon = new EventEmitter();
        this.focus = new EventEmitter();
    }
    /**
     * @return {?}
     */
    onClickIcon() {
        if (this.iconcursor)
            this.clickIcon.emit(this.value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onFocus(value) {
        this.focus.emit(value);
        this.onTouched(value);
    }
}
NgxaInputIconComponent.decorators = [
    { type: Component, args: [{
                selector: 'xa-input-icon',
                template: "<xa-container-outlet\n  [name]=\"name\" [label]=\"label\" [nolabel]=\"nolabel\"\n  [colLabel]=\"colLabel\" [colContent]=\"colInput\"\n  [required]=\"required\" [hasErrors]=\"hasErrors\"\n  [errorMessages]=\"errorMessages\" [paramError]=\"paramError\"\n  [skeleton]=\"skeleton\">\n  <div class=\"col-sm-{{colInput}} input-group\" *ngIf=\"!skeleton; else contentskeleton\">\n    <input\n      type=\"{{type}}\"\n      id=\"{{name}}\"\n      [pattern]=\"pattern\"\n      [minLength]=\"minLength\"\n      [maxLength]=\"maxLength\"\n      [placeholder]=\"placeholder ? (placeholder | translate) : ''\"\n      [required]=\"required\"\n      [disabled]=\"disabled\"\n      [ngClass]=\"{\n        'status-danger': hasErrors,\n        'status-success': (hasSuccess && required)\n      }\"\n      (input)=\"onChange($event.target.value)\"\n      (change)=\"onChange($event.target.value)\"\n      (blur)=\"onTouched($event.target.value)\"\n      (focus)=\"onFocus($event.target.value)\"\n      [(ngModel)]=\"value\"\n      #input nbInput fullWidth>\n      <div\n        class=\"xinput-icon\"\n        [ngStyle]=\"{\n          'cursor': iconcursor ? 'pointer' : 'unset'\n        }\">\n        <span class=\"{{icon}}\" *ngIf=\"!eva\"></span>\n        <nb-icon class=\"xinput-icon-hover\" icon=\"{{icon}}\" (click)=\"onClickIcon()\" *ngIf=\"eva\"></nb-icon>\n      </div>\n  </div>\n  <ng-template #contentskeleton>\n    <div class=\"col-sm-{{colInput}}\">\n      <div\n        [ngClass]=\"{\n          'input-skeleton': true,\n          'skeleton': skeleton\n        }\">\n      </div>\n    </div>\n  </ng-template>\n</xa-container-outlet>",
                encapsulation: ViewEncapsulation.None,
                styles: ["nb-icon{color:#8f9bb3}.xinput-icon{position:absolute;right:0;margin:.6rem 1.5rem 0 0}.xinput-icon-hover:hover{color:#598bff}"]
            }] }
];
/** @nocollapse */
NgxaInputIconComponent.ctorParameters = () => [
    { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
];
NgxaInputIconComponent.propDecorators = {
    placeholder: [{ type: Input }],
    colLabel: [{ type: Input }],
    colInput: [{ type: Input }],
    minLength: [{ type: Input }],
    maxLength: [{ type: Input }],
    type: [{ type: Input }],
    iconcursor: [{ type: Input }],
    eva: [{ type: Input }],
    icon: [{ type: Input }],
    clickIcon: [{ type: Output }],
    focus: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    NgxaInputIconComponent.prototype.placeholder;
    /** @type {?} */
    NgxaInputIconComponent.prototype.colLabel;
    /** @type {?} */
    NgxaInputIconComponent.prototype.colInput;
    /** @type {?} */
    NgxaInputIconComponent.prototype.minLength;
    /** @type {?} */
    NgxaInputIconComponent.prototype.maxLength;
    /** @type {?} */
    NgxaInputIconComponent.prototype.type;
    /** @type {?} */
    NgxaInputIconComponent.prototype.iconcursor;
    /** @type {?} */
    NgxaInputIconComponent.prototype.eva;
    /** @type {?} */
    NgxaInputIconComponent.prototype.icon;
    /** @type {?} */
    NgxaInputIconComponent.prototype.clickIcon;
    /** @type {?} */
    NgxaInputIconComponent.prototype.focus;
    /** @type {?} */
    NgxaInputIconComponent.prototype.locale;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4YS1pbnB1dC1pY29uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B4YXBoaXJhL25neGEtY29tbW9uLyIsInNvdXJjZXMiOlsibGliL2lucHV0L2ljb24vbmd4YS1pbnB1dC1pY29uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0gsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBUTdFLE1BQU0sT0FBTyxzQkFBdUIsU0FBUSxpQkFBeUI7Ozs7O0lBYWpFLFlBQWdDLFNBQW9CLEVBQ3hCLE1BQWM7UUFDeEMsS0FBSyxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztRQURDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFaakMsYUFBUSxHQUFXLENBQUMsQ0FBQztRQUNyQixhQUFRLEdBQVcsQ0FBQyxDQUFDO1FBQ3JCLGNBQVMsR0FBVyxDQUFDLENBQUM7UUFDdEIsY0FBUyxHQUFXLEdBQUcsQ0FBQztRQUN4QixTQUFJLEdBQW1DLE1BQU0sQ0FBQztRQUM5QyxlQUFVLEdBQVksS0FBSyxDQUFDO1FBQzVCLFFBQUcsR0FBWSxLQUFLLENBQUM7UUFDckIsU0FBSSxHQUFXLGdCQUFnQixDQUFDO1FBQy9CLGNBQVMsR0FBeUIsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUM3RCxVQUFLLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7SUFLN0QsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxVQUFVO1lBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Ozs7O0lBRUQsT0FBTyxDQUFDLEtBQVU7UUFDaEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4QixDQUFDOzs7WUEvQkosU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUV6QixzbURBQStDO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7YUFDdEM7Ozs7WUFSUSxTQUFTLHVCQXNCRCxRQUFRLFlBQUksSUFBSTt5Q0FDMUIsTUFBTSxTQUFDLFNBQVM7OzswQkFibEIsS0FBSzt1QkFDTCxLQUFLO3VCQUNMLEtBQUs7d0JBQ0wsS0FBSzt3QkFDTCxLQUFLO21CQUNMLEtBQUs7eUJBQ0wsS0FBSztrQkFDTCxLQUFLO21CQUNMLEtBQUs7d0JBQ0wsTUFBTTtvQkFDTixNQUFNOzs7O0lBVlAsNkNBQTZCOztJQUM3QiwwQ0FBOEI7O0lBQzlCLDBDQUE4Qjs7SUFDOUIsMkNBQStCOztJQUMvQiwyQ0FBaUM7O0lBQ2pDLHNDQUF1RDs7SUFDdkQsNENBQXFDOztJQUNyQyxxQ0FBOEI7O0lBQzlCLHNDQUF5Qzs7SUFDekMsMkNBQXVFOztJQUN2RSx1Q0FBNkQ7O0lBRzNELHdDQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBPcHRpb25hbCwgU2VsZiwgSW5qZWN0LCBMT0NBTEVfSUQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ0NvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOZ3hhVmFsdWVBY2Nlc3NvciB9IGZyb20gJy4uLy4uL2Jhc2Uvbmd4YS12YWx1ZS1hY2Nlc3Nvci5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd4YS1pbnB1dC1pY29uJyxcbiAgc3R5bGVVcmxzOiBbJy4vbmd4YS1pbnB1dC1pY29uLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9uZ3hhLWlucHV0LWljb24uY29tcG9uZW50Lmh0bWwnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBOZ3hhSW5wdXRJY29uQ29tcG9uZW50IGV4dGVuZHMgTmd4YVZhbHVlQWNjZXNzb3I8c3RyaW5nPiB7XG4gICAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgICBASW5wdXQoKSBjb2xMYWJlbDogbnVtYmVyID0gMztcbiAgICBASW5wdXQoKSBjb2xJbnB1dDogbnVtYmVyID0gOTtcbiAgICBASW5wdXQoKSBtaW5MZW5ndGg6IG51bWJlciA9IDA7XG4gICAgQElucHV0KCkgbWF4TGVuZ3RoOiBudW1iZXIgPSAxMDA7XG4gICAgQElucHV0KCkgdHlwZTogJ3RleHQnIHwgJ3Bhc3N3b3JkJyB8ICdudW1iZXInID0gJ3RleHQnO1xuICAgIEBJbnB1dCgpIGljb25jdXJzb3I6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBASW5wdXQoKSBldmE6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBASW5wdXQoKSBpY29uOiBzdHJpbmcgPSAnc2VhcmNoLW91dGxpbmUnO1xuICAgIEBPdXRwdXQoKSBjbGlja0ljb246IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gICAgQE91dHB1dCgpIGZvY3VzOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gICAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQFNlbGYoKSBuZ0NvbnRyb2w6IE5nQ29udHJvbCxcbiAgICAgIEBJbmplY3QoTE9DQUxFX0lEKSBwdWJsaWMgbG9jYWxlOiBzdHJpbmcpIHtcbiAgICAgIHN1cGVyKG5nQ29udHJvbCwgbG9jYWxlKTtcbiAgICB9XG5cbiAgICBvbkNsaWNrSWNvbigpOiB2b2lkIHtcbiAgICAgIGlmICh0aGlzLmljb25jdXJzb3IpIHRoaXMuY2xpY2tJY29uLmVtaXQodGhpcy52YWx1ZSk7XG4gICAgfVxuXG4gICAgb25Gb2N1cyh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgICB0aGlzLmZvY3VzLmVtaXQodmFsdWUpO1xuICAgICAgdGhpcy5vblRvdWNoZWQodmFsdWUpO1xuICAgIH1cbn1cbiJdfQ==