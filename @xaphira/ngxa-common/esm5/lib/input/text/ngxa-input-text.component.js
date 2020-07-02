/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, ViewEncapsulation, Optional, Self, Inject, LOCALE_ID } from '@angular/core';
import { NgControl } from '@angular/forms';
import { NgxaValueAccessor } from '../../base/ngxa-value-accessor.component';
var NgxaInputTextComponent = /** @class */ (function (_super) {
    tslib_1.__extends(NgxaInputTextComponent, _super);
    function NgxaInputTextComponent(ngControl, locale) {
        var _this = _super.call(this, ngControl, locale) || this;
        _this.locale = locale;
        _this.colLabel = 3;
        _this.colInput = 9;
        _this.minLength = 0;
        _this.maxLength = 100;
        _this.type = 'text';
        return _this;
    }
    NgxaInputTextComponent.decorators = [
        { type: Component, args: [{
                    selector: 'xa-input-text',
                    template: "<xa-container-outlet\n  [name]=\"name\" [label]=\"label\" [nolabel]=\"nolabel\" \n  [colLabel]=\"colLabel\" [colContent]=\"colInput\"\n  [required]=\"required\" [hasErrors]=\"hasErrors\"\n  [errorMessages]=\"errorMessages\" [paramError]=\"paramError\"\n  [skeleton]=\"skeleton\">\n  <div class=\"col-sm-{{colInput}}\" *ngIf=\"!skeleton; else contentskeleton\">\n    <input\n      type=\"{{type}}\"\n      id=\"{{name}}\"\n      [pattern]=\"pattern\"\n      [minLength]=\"minLength\"\n      [maxLength]=\"maxLength\"\n      [placeholder]=\"placeholder ? (placeholder | translate) : ''\"\n      [required]=\"required\"\n      [disabled]=\"disabled\"\n      [ngClass]=\"{\n        'status-danger': hasErrors,\n        'status-success': (hasSuccess && required)\n      }\"\n      (input)=\"onChange($event.target.value)\"\n      (change)=\"onChange($event.target.value)\"\n      (blur)=\"onTouched($event.target.value)\"\n      (focus)=\"onTouched($event.target.value)\"\n      [(ngModel)]=\"value\"\n      #input nbInput fullWidth>\n  </div>\n  <ng-template #contentskeleton>\n    <div class=\"col-sm-{{colInput}}\">\n      <div\n        [ngClass]=\"{\n          'input-skeleton': true,\n          'skeleton': skeleton\n        }\">\n      </div>\n    </div>\n  </ng-template>\n</xa-container-outlet>",
                    encapsulation: ViewEncapsulation.None,
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    NgxaInputTextComponent.ctorParameters = function () { return [
        { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
        { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
    ]; };
    NgxaInputTextComponent.propDecorators = {
        placeholder: [{ type: Input }],
        colLabel: [{ type: Input }],
        colInput: [{ type: Input }],
        minLength: [{ type: Input }],
        maxLength: [{ type: Input }],
        type: [{ type: Input }]
    };
    return NgxaInputTextComponent;
}(NgxaValueAccessor));
export { NgxaInputTextComponent };
if (false) {
    /** @type {?} */
    NgxaInputTextComponent.prototype.placeholder;
    /** @type {?} */
    NgxaInputTextComponent.prototype.colLabel;
    /** @type {?} */
    NgxaInputTextComponent.prototype.colInput;
    /** @type {?} */
    NgxaInputTextComponent.prototype.minLength;
    /** @type {?} */
    NgxaInputTextComponent.prototype.maxLength;
    /** @type {?} */
    NgxaInputTextComponent.prototype.type;
    /** @type {?} */
    NgxaInputTextComponent.prototype.locale;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4YS1pbnB1dC10ZXh0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B4YXBoaXJhL25neGEtY29tbW9uLyIsInNvdXJjZXMiOlsibGliL2lucHV0L3RleHQvbmd4YS1pbnB1dC10ZXh0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFFN0U7SUFNNEMsa0RBQXlCO0lBUWpFLGdDQUFnQyxTQUFvQixFQUN4QixNQUFjO1FBRDFDLFlBRUUsa0JBQU0sU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUN6QjtRQUYyQixZQUFNLEdBQU4sTUFBTSxDQUFRO1FBUGpDLGNBQVEsR0FBVyxDQUFDLENBQUM7UUFDckIsY0FBUSxHQUFXLENBQUMsQ0FBQztRQUNyQixlQUFTLEdBQVcsQ0FBQyxDQUFDO1FBQ3RCLGVBQVMsR0FBVyxHQUFHLENBQUM7UUFDeEIsVUFBSSxHQUFtQyxNQUFNLENBQUM7O0lBS3ZELENBQUM7O2dCQWpCSixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBRXpCLDZ4Q0FBK0M7b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOztpQkFDdEM7Ozs7Z0JBUlEsU0FBUyx1QkFpQkQsUUFBUSxZQUFJLElBQUk7NkNBQzFCLE1BQU0sU0FBQyxTQUFTOzs7OEJBUmxCLEtBQUs7MkJBQ0wsS0FBSzsyQkFDTCxLQUFLOzRCQUNMLEtBQUs7NEJBQ0wsS0FBSzt1QkFDTCxLQUFLOztJQU1WLDZCQUFDO0NBQUEsQUFsQkQsQ0FNNEMsaUJBQWlCLEdBWTVEO1NBWlksc0JBQXNCOzs7SUFDL0IsNkNBQTZCOztJQUM3QiwwQ0FBOEI7O0lBQzlCLDBDQUE4Qjs7SUFDOUIsMkNBQStCOztJQUMvQiwyQ0FBaUM7O0lBQ2pDLHNDQUF1RDs7SUFHckQsd0NBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24sIE9wdGlvbmFsLCBTZWxmLCBJbmplY3QsIExPQ0FMRV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTmd4YVZhbHVlQWNjZXNzb3IgfSBmcm9tICcuLi8uLi9iYXNlL25neGEtdmFsdWUtYWNjZXNzb3IuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAneGEtaW5wdXQtdGV4dCcsXG4gIHN0eWxlVXJsczogWycuL25neGEtaW5wdXQtdGV4dC5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vbmd4YS1pbnB1dC10ZXh0LmNvbXBvbmVudC5odG1sJyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgTmd4YUlucHV0VGV4dENvbXBvbmVudCBleHRlbmRzIE5neGFWYWx1ZUFjY2Vzc29yPHN0cmluZz4ge1xuICAgIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gICAgQElucHV0KCkgY29sTGFiZWw6IG51bWJlciA9IDM7XG4gICAgQElucHV0KCkgY29sSW5wdXQ6IG51bWJlciA9IDk7XG4gICAgQElucHV0KCkgbWluTGVuZ3RoOiBudW1iZXIgPSAwO1xuICAgIEBJbnB1dCgpIG1heExlbmd0aDogbnVtYmVyID0gMTAwO1xuICAgIEBJbnB1dCgpIHR5cGU6ICd0ZXh0JyB8ICdwYXNzd29yZCcgfCAnbnVtYmVyJyA9ICd0ZXh0JztcblxuICAgIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBTZWxmKCkgbmdDb250cm9sOiBOZ0NvbnRyb2wsXG4gICAgICBASW5qZWN0KExPQ0FMRV9JRCkgcHVibGljIGxvY2FsZTogc3RyaW5nKSB7XG4gICAgICBzdXBlcihuZ0NvbnRyb2wsIGxvY2FsZSk7XG4gICAgfVxufVxuIl19