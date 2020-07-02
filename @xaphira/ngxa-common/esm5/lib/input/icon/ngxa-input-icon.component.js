/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, ViewEncapsulation, Optional, Self, Inject, LOCALE_ID, Output, EventEmitter } from '@angular/core';
import { NgControl } from '@angular/forms';
import { NgxaValueAccessor } from '../../base/ngxa-value-accessor.component';
var NgxaInputIconComponent = /** @class */ (function (_super) {
    tslib_1.__extends(NgxaInputIconComponent, _super);
    function NgxaInputIconComponent(ngControl, locale) {
        var _this = _super.call(this, ngControl, locale) || this;
        _this.locale = locale;
        _this.colLabel = 3;
        _this.colInput = 9;
        _this.minLength = 0;
        _this.maxLength = 100;
        _this.type = 'text';
        _this.iconcursor = false;
        _this.eva = false;
        _this.icon = 'search-outline';
        _this.clickIcon = new EventEmitter();
        _this.focus = new EventEmitter();
        return _this;
    }
    /**
     * @return {?}
     */
    NgxaInputIconComponent.prototype.onClickIcon = /**
     * @return {?}
     */
    function () {
        if (this.iconcursor)
            this.clickIcon.emit(this.value);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NgxaInputIconComponent.prototype.onFocus = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.focus.emit(value);
        this.onTouched(value);
    };
    NgxaInputIconComponent.decorators = [
        { type: Component, args: [{
                    selector: 'xa-input-icon',
                    template: "<xa-container-outlet\n  [name]=\"name\" [label]=\"label\" [nolabel]=\"nolabel\"\n  [colLabel]=\"colLabel\" [colContent]=\"colInput\"\n  [required]=\"required\" [hasErrors]=\"hasErrors\"\n  [errorMessages]=\"errorMessages\" [paramError]=\"paramError\"\n  [skeleton]=\"skeleton\">\n  <div class=\"col-sm-{{colInput}} input-group\" *ngIf=\"!skeleton; else contentskeleton\">\n    <input\n      type=\"{{type}}\"\n      id=\"{{name}}\"\n      [pattern]=\"pattern\"\n      [minLength]=\"minLength\"\n      [maxLength]=\"maxLength\"\n      [placeholder]=\"placeholder ? (placeholder | translate) : ''\"\n      [required]=\"required\"\n      [disabled]=\"disabled\"\n      [ngClass]=\"{\n        'status-danger': hasErrors,\n        'status-success': (hasSuccess && required)\n      }\"\n      (input)=\"onChange($event.target.value)\"\n      (change)=\"onChange($event.target.value)\"\n      (blur)=\"onTouched($event.target.value)\"\n      (focus)=\"onFocus($event.target.value)\"\n      [(ngModel)]=\"value\"\n      #input nbInput fullWidth>\n      <div\n        class=\"xinput-icon\"\n        [ngStyle]=\"{\n          'cursor': iconcursor ? 'pointer' : 'unset'\n        }\">\n        <span class=\"{{icon}}\" *ngIf=\"!eva\"></span>\n        <nb-icon class=\"xinput-icon-hover\" icon=\"{{icon}}\" (click)=\"onClickIcon()\" *ngIf=\"eva\"></nb-icon>\n      </div>\n  </div>\n  <ng-template #contentskeleton>\n    <div class=\"col-sm-{{colInput}}\">\n      <div\n        [ngClass]=\"{\n          'input-skeleton': true,\n          'skeleton': skeleton\n        }\">\n      </div>\n    </div>\n  </ng-template>\n</xa-container-outlet>",
                    encapsulation: ViewEncapsulation.None,
                    styles: ["nb-icon{color:#8f9bb3}.xinput-icon{position:absolute;right:0;margin:.6rem 1.5rem 0 0}.xinput-icon-hover:hover{color:#598bff}"]
                }] }
    ];
    /** @nocollapse */
    NgxaInputIconComponent.ctorParameters = function () { return [
        { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
        { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
    ]; };
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
    return NgxaInputIconComponent;
}(NgxaValueAccessor));
export { NgxaInputIconComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4YS1pbnB1dC1pY29uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B4YXBoaXJhL25neGEtY29tbW9uLyIsInNvdXJjZXMiOlsibGliL2lucHV0L2ljb24vbmd4YS1pbnB1dC1pY29uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdILE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUU3RTtJQU00QyxrREFBeUI7SUFhakUsZ0NBQWdDLFNBQW9CLEVBQ3hCLE1BQWM7UUFEMUMsWUFFRSxrQkFBTSxTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQ3pCO1FBRjJCLFlBQU0sR0FBTixNQUFNLENBQVE7UUFaakMsY0FBUSxHQUFXLENBQUMsQ0FBQztRQUNyQixjQUFRLEdBQVcsQ0FBQyxDQUFDO1FBQ3JCLGVBQVMsR0FBVyxDQUFDLENBQUM7UUFDdEIsZUFBUyxHQUFXLEdBQUcsQ0FBQztRQUN4QixVQUFJLEdBQW1DLE1BQU0sQ0FBQztRQUM5QyxnQkFBVSxHQUFZLEtBQUssQ0FBQztRQUM1QixTQUFHLEdBQVksS0FBSyxDQUFDO1FBQ3JCLFVBQUksR0FBVyxnQkFBZ0IsQ0FBQztRQUMvQixlQUFTLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUM7UUFDN0QsV0FBSyxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDOztJQUs3RCxDQUFDOzs7O0lBRUQsNENBQVc7OztJQUFYO1FBQ0UsSUFBSSxJQUFJLENBQUMsVUFBVTtZQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2RCxDQUFDOzs7OztJQUVELHdDQUFPOzs7O0lBQVAsVUFBUSxLQUFVO1FBQ2hCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEIsQ0FBQzs7Z0JBL0JKLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtvQkFFekIsc21EQUErQztvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2lCQUN0Qzs7OztnQkFSUSxTQUFTLHVCQXNCRCxRQUFRLFlBQUksSUFBSTs2Q0FDMUIsTUFBTSxTQUFDLFNBQVM7Ozs4QkFibEIsS0FBSzsyQkFDTCxLQUFLOzJCQUNMLEtBQUs7NEJBQ0wsS0FBSzs0QkFDTCxLQUFLO3VCQUNMLEtBQUs7NkJBQ0wsS0FBSztzQkFDTCxLQUFLO3VCQUNMLEtBQUs7NEJBQ0wsTUFBTTt3QkFDTixNQUFNOztJQWVYLDZCQUFDO0NBQUEsQUFoQ0QsQ0FNNEMsaUJBQWlCLEdBMEI1RDtTQTFCWSxzQkFBc0I7OztJQUMvQiw2Q0FBNkI7O0lBQzdCLDBDQUE4Qjs7SUFDOUIsMENBQThCOztJQUM5QiwyQ0FBK0I7O0lBQy9CLDJDQUFpQzs7SUFDakMsc0NBQXVEOztJQUN2RCw0Q0FBcUM7O0lBQ3JDLHFDQUE4Qjs7SUFDOUIsc0NBQXlDOztJQUN6QywyQ0FBdUU7O0lBQ3ZFLHVDQUE2RDs7SUFHM0Qsd0NBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24sIE9wdGlvbmFsLCBTZWxmLCBJbmplY3QsIExPQ0FMRV9JRCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE5neGFWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnLi4vLi4vYmFzZS9uZ3hhLXZhbHVlLWFjY2Vzc29yLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3hhLWlucHV0LWljb24nLFxuICBzdHlsZVVybHM6IFsnLi9uZ3hhLWlucHV0LWljb24uY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL25neGEtaW5wdXQtaWNvbi5jb21wb25lbnQuaHRtbCcsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIE5neGFJbnB1dEljb25Db21wb25lbnQgZXh0ZW5kcyBOZ3hhVmFsdWVBY2Nlc3NvcjxzdHJpbmc+IHtcbiAgICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGNvbExhYmVsOiBudW1iZXIgPSAzO1xuICAgIEBJbnB1dCgpIGNvbElucHV0OiBudW1iZXIgPSA5O1xuICAgIEBJbnB1dCgpIG1pbkxlbmd0aDogbnVtYmVyID0gMDtcbiAgICBASW5wdXQoKSBtYXhMZW5ndGg6IG51bWJlciA9IDEwMDtcbiAgICBASW5wdXQoKSB0eXBlOiAndGV4dCcgfCAncGFzc3dvcmQnIHwgJ251bWJlcicgPSAndGV4dCc7XG4gICAgQElucHV0KCkgaWNvbmN1cnNvcjogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIGV2YTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIGljb246IHN0cmluZyA9ICdzZWFyY2gtb3V0bGluZSc7XG4gICAgQE91dHB1dCgpIGNsaWNrSWNvbjogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgICBAT3V0cHV0KCkgZm9jdXM6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBAU2VsZigpIG5nQ29udHJvbDogTmdDb250cm9sLFxuICAgICAgQEluamVjdChMT0NBTEVfSUQpIHB1YmxpYyBsb2NhbGU6IHN0cmluZykge1xuICAgICAgc3VwZXIobmdDb250cm9sLCBsb2NhbGUpO1xuICAgIH1cblxuICAgIG9uQ2xpY2tJY29uKCk6IHZvaWQge1xuICAgICAgaWYgKHRoaXMuaWNvbmN1cnNvcikgdGhpcy5jbGlja0ljb24uZW1pdCh0aGlzLnZhbHVlKTtcbiAgICB9XG5cbiAgICBvbkZvY3VzKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICAgIHRoaXMuZm9jdXMuZW1pdCh2YWx1ZSk7XG4gICAgICB0aGlzLm9uVG91Y2hlZCh2YWx1ZSk7XG4gICAgfVxufVxuIl19