/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, ViewEncapsulation, Optional, Self, Inject, LOCALE_ID, Output, EventEmitter } from '@angular/core';
import { NgControl } from '@angular/forms';
import { NgxaValueAccessor } from '../../base/ngxa-value-accessor.component';
var NgxaInputBaseIconComponent = /** @class */ (function (_super) {
    tslib_1.__extends(NgxaInputBaseIconComponent, _super);
    function NgxaInputBaseIconComponent(ngControl, locale) {
        var _this = _super.call(this, ngControl, locale) || this;
        _this.locale = locale;
        _this.minLength = 0;
        _this.maxLength = 100;
        _this.iconcursor = false;
        _this.icon = 'search-outline';
        _this.type = 'text';
        _this.clickIcon = new EventEmitter();
        _this.focus = new EventEmitter();
        return _this;
    }
    /**
     * @return {?}
     */
    NgxaInputBaseIconComponent.prototype.onClickIcon = /**
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
    NgxaInputBaseIconComponent.prototype.onFocus = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.focus.emit(value);
        this.onTouched(value);
    };
    NgxaInputBaseIconComponent.decorators = [
        { type: Component, args: [{
                    selector: 'xa-input-base-icon',
                    template: "<div class=\"input-group\">\n  <input\n    type=\"{{type}}\"\n    id=\"{{name}}\"\n    [pattern]=\"pattern\"\n    [minLength]=\"minLength\"\n    [maxLength]=\"maxLength\"\n    [placeholder]=\"placeholder ? (placeholder | translate) : ''\"\n    [required]=\"required\"\n    [disabled]=\"disabled\"\n    [ngClass]=\"{\n      'status-danger': hasErrors,\n      'status-success': hasSuccess\n    }\"\n    (input)=\"onChange($event.target.value)\"\n    (change)=\"onChange($event.target.value)\"\n    (blur)=\"onTouched($event.target.value)\"\n    (focus)=\"onFocus($event.target.value)\"\n    [(ngModel)]=\"value\"\n    #input nbInput fullWidth>\n  <div\n    class=\"input-icon\"\n    [ngStyle]=\"{\n      'cursor': iconcursor ? 'pointer' : 'unset'\n    }\">\n    <nb-icon class=\"input-icon-hover\" icon=\"{{icon}}\" (click)=\"onClickIcon()\"></nb-icon>\n  </div>\n</div>\n",
                    encapsulation: ViewEncapsulation.None,
                    styles: ["nb-icon{color:#8f9bb3}.input-icon{position:absolute;right:0;padding:10px}.input-icon-hover:hover{color:#598bff}"]
                }] }
    ];
    /** @nocollapse */
    NgxaInputBaseIconComponent.ctorParameters = function () { return [
        { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
        { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
    ]; };
    NgxaInputBaseIconComponent.propDecorators = {
        placeholder: [{ type: Input }],
        minLength: [{ type: Input }],
        maxLength: [{ type: Input }],
        iconcursor: [{ type: Input }],
        icon: [{ type: Input }],
        type: [{ type: Input }],
        clickIcon: [{ type: Output }],
        focus: [{ type: Output }]
    };
    return NgxaInputBaseIconComponent;
}(NgxaValueAccessor));
export { NgxaInputBaseIconComponent };
if (false) {
    /** @type {?} */
    NgxaInputBaseIconComponent.prototype.placeholder;
    /** @type {?} */
    NgxaInputBaseIconComponent.prototype.minLength;
    /** @type {?} */
    NgxaInputBaseIconComponent.prototype.maxLength;
    /** @type {?} */
    NgxaInputBaseIconComponent.prototype.iconcursor;
    /** @type {?} */
    NgxaInputBaseIconComponent.prototype.icon;
    /** @type {?} */
    NgxaInputBaseIconComponent.prototype.type;
    /** @type {?} */
    NgxaInputBaseIconComponent.prototype.clickIcon;
    /** @type {?} */
    NgxaInputBaseIconComponent.prototype.focus;
    /** @type {?} */
    NgxaInputBaseIconComponent.prototype.locale;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4YS1pbnB1dC1iYXNlLWljb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHhhcGhpcmEvbmd4YS1jb21tb24vIiwic291cmNlcyI6WyJsaWIvaW5wdXQvaWNvbi9uZ3hhLWlucHV0LWJhc2UtaWNvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3SCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFFN0U7SUFNZ0Qsc0RBQXlCO0lBVXJFLG9DQUFnQyxTQUFvQixFQUN4QixNQUFjO1FBRDFDLFlBRUUsa0JBQU0sU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUN6QjtRQUYyQixZQUFNLEdBQU4sTUFBTSxDQUFRO1FBVGpDLGVBQVMsR0FBVyxDQUFDLENBQUM7UUFDdEIsZUFBUyxHQUFXLEdBQUcsQ0FBQztRQUN4QixnQkFBVSxHQUFZLEtBQUssQ0FBQztRQUM1QixVQUFJLEdBQVcsZ0JBQWdCLENBQUM7UUFDaEMsVUFBSSxHQUFtQyxNQUFNLENBQUM7UUFDN0MsZUFBUyxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO1FBQzdELFdBQUssR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQzs7SUFLN0QsQ0FBQzs7OztJQUVELGdEQUFXOzs7SUFBWDtRQUNFLElBQUksSUFBSSxDQUFDLFVBQVU7WUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkQsQ0FBQzs7Ozs7SUFFRCw0Q0FBTzs7OztJQUFQLFVBQVEsS0FBVTtRQUNoQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hCLENBQUM7O2dCQTVCSixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtvQkFFOUIsazNCQUFvRDtvQkFDcEQsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2lCQUN0Qzs7OztnQkFSUSxTQUFTLHVCQW1CRCxRQUFRLFlBQUksSUFBSTs2Q0FDMUIsTUFBTSxTQUFDLFNBQVM7Ozs4QkFWbEIsS0FBSzs0QkFDTCxLQUFLOzRCQUNMLEtBQUs7NkJBQ0wsS0FBSzt1QkFDTCxLQUFLO3VCQUNMLEtBQUs7NEJBQ0wsTUFBTTt3QkFDTixNQUFNOztJQWVYLGlDQUFDO0NBQUEsQUE3QkQsQ0FNZ0QsaUJBQWlCLEdBdUJoRTtTQXZCWSwwQkFBMEI7OztJQUNuQyxpREFBNkI7O0lBQzdCLCtDQUErQjs7SUFDL0IsK0NBQWlDOztJQUNqQyxnREFBcUM7O0lBQ3JDLDBDQUF5Qzs7SUFDekMsMENBQXVEOztJQUN2RCwrQ0FBdUU7O0lBQ3ZFLDJDQUE2RDs7SUFHM0QsNENBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24sIE9wdGlvbmFsLCBTZWxmLCBJbmplY3QsIExPQ0FMRV9JRCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE5neGFWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnLi4vLi4vYmFzZS9uZ3hhLXZhbHVlLWFjY2Vzc29yLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3hhLWlucHV0LWJhc2UtaWNvbicsXG4gIHN0eWxlVXJsczogWycuL25neGEtaW5wdXQtYmFzZS1pY29uLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9uZ3hhLWlucHV0LWJhc2UtaWNvbi5jb21wb25lbnQuaHRtbCcsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIE5neGFJbnB1dEJhc2VJY29uQ29tcG9uZW50IGV4dGVuZHMgTmd4YVZhbHVlQWNjZXNzb3I8c3RyaW5nPiB7XG4gICAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgICBASW5wdXQoKSBtaW5MZW5ndGg6IG51bWJlciA9IDA7XG4gICAgQElucHV0KCkgbWF4TGVuZ3RoOiBudW1iZXIgPSAxMDA7XG4gICAgQElucHV0KCkgaWNvbmN1cnNvcjogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIGljb246IHN0cmluZyA9ICdzZWFyY2gtb3V0bGluZSc7XG4gICAgQElucHV0KCkgdHlwZTogJ3RleHQnIHwgJ3Bhc3N3b3JkJyB8ICdudW1iZXInID0gJ3RleHQnO1xuICAgIEBPdXRwdXQoKSBjbGlja0ljb246IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gICAgQE91dHB1dCgpIGZvY3VzOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gICAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQFNlbGYoKSBuZ0NvbnRyb2w6IE5nQ29udHJvbCxcbiAgICAgIEBJbmplY3QoTE9DQUxFX0lEKSBwdWJsaWMgbG9jYWxlOiBzdHJpbmcpIHtcbiAgICAgIHN1cGVyKG5nQ29udHJvbCwgbG9jYWxlKTtcbiAgICB9XG5cbiAgICBvbkNsaWNrSWNvbigpOiB2b2lkIHtcbiAgICAgIGlmICh0aGlzLmljb25jdXJzb3IpIHRoaXMuY2xpY2tJY29uLmVtaXQodGhpcy52YWx1ZSk7XG4gICAgfVxuXG4gICAgb25Gb2N1cyh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgICB0aGlzLmZvY3VzLmVtaXQodmFsdWUpO1xuICAgICAgdGhpcy5vblRvdWNoZWQodmFsdWUpO1xuICAgIH1cbn1cbiJdfQ==