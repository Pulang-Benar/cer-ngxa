/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, ViewEncapsulation, Optional, Self, Inject, LOCALE_ID } from '@angular/core';
import { NgControl } from '@angular/forms';
import { NgxaValueAccessor } from '../base/ngxa-value-accessor.component';
var NgxaRadioComponent = /** @class */ (function (_super) {
    tslib_1.__extends(NgxaRadioComponent, _super);
    function NgxaRadioComponent(ngControl, locale) {
        var _this = _super.call(this, ngControl, locale) || this;
        _this.locale = locale;
        _this.colLabel = 3;
        _this.colInput = 9;
        return _this;
    }
    /**
     * @return {?}
     */
    NgxaRadioComponent.prototype.onInit = /**
     * @return {?}
     */
    function () {
        if (!this.value && this.data)
            this.value = this.data[0].value;
    };
    NgxaRadioComponent.decorators = [
        { type: Component, args: [{
                    selector: 'xa-radio',
                    template: "<xa-container-outlet\n  [name]=\"name\" [label]=\"label\"\n  [colLabel]=\"colLabel\" [colContent]=\"colInput\"\n  [required]=\"required\" [hasErrors]=\"hasErrors\"\n  [errorMessages]=\"errorMessages\" [paramError]=\"paramError\"\n  [skeleton]=\"skeleton\">\n  <div class=\"col-sm-{{colInput}}\" *ngIf=\"!skeleton; else contentskeleton\">\n    <nb-radio-group\n      [(value)]=\"value\"\n      [name]=\"name\"\n      [disabled]=\"disabled\"\n      #radiogroup>\n      <nb-radio *ngFor=\"let item of data\"\n        [value]=\"item.value\">\n        {{item.name | translate}}\n      </nb-radio>\n    </nb-radio-group>\n  </div>\n  <ng-template #contentskeleton>\n    <div class=\"col-sm-{{colInput}}\">\n      <div\n        [ngClass]=\"{\n          'input-skeleton': true,\n          'skeleton': skeleton\n        }\">\n      </div>\n    </div>\n  </ng-template>\n</xa-container-outlet>",
                    encapsulation: ViewEncapsulation.None,
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    NgxaRadioComponent.ctorParameters = function () { return [
        { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
        { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
    ]; };
    NgxaRadioComponent.propDecorators = {
        placeholder: [{ type: Input }],
        colLabel: [{ type: Input }],
        colInput: [{ type: Input }],
        data: [{ type: Input }]
    };
    return NgxaRadioComponent;
}(NgxaValueAccessor));
export { NgxaRadioComponent };
if (false) {
    /** @type {?} */
    NgxaRadioComponent.prototype.placeholder;
    /** @type {?} */
    NgxaRadioComponent.prototype.colLabel;
    /** @type {?} */
    NgxaRadioComponent.prototype.colInput;
    /** @type {?} */
    NgxaRadioComponent.prototype.data;
    /** @type {?} */
    NgxaRadioComponent.prototype.locale;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4YS1yYWRpby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AeGFwaGlyYS9uZ3hhLWNvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi9yYWRpby9uZ3hhLXJhZGlvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFHMUU7SUFNd0MsOENBQXNCO0lBTTFELDRCQUFnQyxTQUFvQixFQUN4QixNQUFjO1FBRDFDLFlBRUUsa0JBQU0sU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUN6QjtRQUYyQixZQUFNLEdBQU4sTUFBTSxDQUFRO1FBTGpDLGNBQVEsR0FBVyxDQUFDLENBQUM7UUFDckIsY0FBUSxHQUFXLENBQUMsQ0FBQzs7SUFNOUIsQ0FBQzs7OztJQUVELG1DQUFNOzs7SUFBTjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxJQUFJO1lBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUNoRSxDQUFDOztnQkFuQkosU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxVQUFVO29CQUVwQiwrM0JBQTBDO29CQUMxQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7aUJBQ3RDOzs7O2dCQVRRLFNBQVMsdUJBZ0JELFFBQVEsWUFBSSxJQUFJOzZDQUMxQixNQUFNLFNBQUMsU0FBUzs7OzhCQU5sQixLQUFLOzJCQUNMLEtBQUs7MkJBQ0wsS0FBSzt1QkFDTCxLQUFLOztJQVVWLHlCQUFDO0NBQUEsQUFwQkQsQ0FNd0MsaUJBQWlCLEdBY3hEO1NBZFksa0JBQWtCOzs7SUFDM0IseUNBQTZCOztJQUM3QixzQ0FBOEI7O0lBQzlCLHNDQUE4Qjs7SUFDOUIsa0NBQTRCOztJQUcxQixvQ0FBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiwgT3B0aW9uYWwsIFNlbGYsIEluamVjdCwgTE9DQUxFX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ0NvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOZ3hhVmFsdWVBY2Nlc3NvciB9IGZyb20gJy4uL2Jhc2Uvbmd4YS12YWx1ZS1hY2Nlc3Nvci5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmFkaW9Nb2RlbCB9IGZyb20gJy4vcmFkaW8ubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd4YS1yYWRpbycsXG4gIHN0eWxlVXJsczogWycuL25neGEtcmFkaW8uY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL25neGEtcmFkaW8uY29tcG9uZW50Lmh0bWwnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBOZ3hhUmFkaW9Db21wb25lbnQgZXh0ZW5kcyBOZ3hhVmFsdWVBY2Nlc3Nvcjxhbnk+IHtcbiAgICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGNvbExhYmVsOiBudW1iZXIgPSAzO1xuICAgIEBJbnB1dCgpIGNvbElucHV0OiBudW1iZXIgPSA5O1xuICAgIEBJbnB1dCgpIGRhdGE6IFJhZGlvTW9kZWxbXTtcblxuICAgIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBTZWxmKCkgbmdDb250cm9sOiBOZ0NvbnRyb2wsXG4gICAgICBASW5qZWN0KExPQ0FMRV9JRCkgcHVibGljIGxvY2FsZTogc3RyaW5nKSB7XG4gICAgICBzdXBlcihuZ0NvbnRyb2wsIGxvY2FsZSk7XG4gICAgfVxuXG4gICAgb25Jbml0KCk6IHZvaWQge1xuICAgICAgaWYgKCF0aGlzLnZhbHVlICYmIHRoaXMuZGF0YSkgdGhpcy52YWx1ZSA9IHRoaXMuZGF0YVswXS52YWx1ZTtcbiAgICB9XG59XG4iXX0=