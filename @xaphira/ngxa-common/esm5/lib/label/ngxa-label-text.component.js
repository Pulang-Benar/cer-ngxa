/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewEncapsulation } from '@angular/core';
var NgxaLabelTextComponent = /** @class */ (function () {
    function NgxaLabelTextComponent() {
        this.colLabel = 3;
        this.colContent = 9;
        this.skeleton = false;
        this.content = '';
        this.label = '';
        this.nolabel = false;
        this.required = false;
    }
    NgxaLabelTextComponent.decorators = [
        { type: Component, args: [{
                    selector: 'xa-label-text',
                    template: "<xa-container-outlet\n  [name]=\"name\" [label]=\"label\" [nolabel]=\"nolabel\" \n  [colLabel]=\"colLabel\" [colContent]=\"colContent\"\n  [required]=\"required\" [paramError]=\"paramError\"\n  [skeleton]=\"skeleton\">\n  <div class=\"col-sm-{{colContent}}\" *ngIf=\"!skeleton; else contentskeleton\">\n    <span class=\"label-content\">{{content | translate}}</span>\n  </div>\n  <ng-template #contentskeleton>\n    <div class=\"col-sm-{{colContent}}\">\n      <div\n        [ngClass]=\"{\n          'input-skeleton': true,\n          'skeleton': skeleton\n        }\">\n      </div>\n    </div>\n  </ng-template>\n</xa-container-outlet>",
                    encapsulation: ViewEncapsulation.None,
                    styles: [".label-content{color:#777c86;font-family:Open Sans,sans-serif;font-size:.75rem;font-weight:600}"]
                }] }
    ];
    /** @nocollapse */
    NgxaLabelTextComponent.ctorParameters = function () { return []; };
    NgxaLabelTextComponent.propDecorators = {
        colLabel: [{ type: Input }],
        colContent: [{ type: Input }],
        skeleton: [{ type: Input }],
        name: [{ type: Input }],
        content: [{ type: Input }],
        label: [{ type: Input }],
        nolabel: [{ type: Input }],
        required: [{ type: Input }],
        paramError: [{ type: Input }]
    };
    return NgxaLabelTextComponent;
}());
export { NgxaLabelTextComponent };
if (false) {
    /** @type {?} */
    NgxaLabelTextComponent.prototype.colLabel;
    /** @type {?} */
    NgxaLabelTextComponent.prototype.colContent;
    /** @type {?} */
    NgxaLabelTextComponent.prototype.skeleton;
    /** @type {?} */
    NgxaLabelTextComponent.prototype.name;
    /** @type {?} */
    NgxaLabelTextComponent.prototype.content;
    /** @type {?} */
    NgxaLabelTextComponent.prototype.label;
    /** @type {?} */
    NgxaLabelTextComponent.prototype.nolabel;
    /** @type {?} */
    NgxaLabelTextComponent.prototype.required;
    /** @type {?} */
    NgxaLabelTextComponent.prototype.paramError;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4YS1sYWJlbC10ZXh0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B4YXBoaXJhL25neGEtY29tbW9uLyIsInNvdXJjZXMiOlsibGliL2xhYmVsL25neGEtbGFiZWwtdGV4dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXBFO0lBa0JJO1FBVlMsYUFBUSxHQUFXLENBQUMsQ0FBQztRQUNyQixlQUFVLEdBQVcsQ0FBQyxDQUFDO1FBQ3ZCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFFMUIsWUFBTyxHQUFXLEVBQUUsQ0FBQztRQUNyQixVQUFLLEdBQVcsRUFBRSxDQUFDO1FBQ25CLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFDekIsYUFBUSxHQUFZLEtBQUssQ0FBQztJQUdwQixDQUFDOztnQkFsQm5CLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtvQkFFekIsMG9CQUErQztvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2lCQUN0Qzs7Ozs7MkJBR0ksS0FBSzs2QkFDTCxLQUFLOzJCQUNMLEtBQUs7dUJBQ0wsS0FBSzswQkFDTCxLQUFLO3dCQUNMLEtBQUs7MEJBQ0wsS0FBSzsyQkFDTCxLQUFLOzZCQUNMLEtBQUs7O0lBR1YsNkJBQUM7Q0FBQSxBQW5CRCxJQW1CQztTQWJZLHNCQUFzQjs7O0lBRS9CLDBDQUE4Qjs7SUFDOUIsNENBQWdDOztJQUNoQywwQ0FBbUM7O0lBQ25DLHNDQUFzQjs7SUFDdEIseUNBQThCOztJQUM5Qix1Q0FBNEI7O0lBQzVCLHlDQUFrQzs7SUFDbEMsMENBQW1DOztJQUNuQyw0Q0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd4YS1sYWJlbC10ZXh0JyxcbiAgc3R5bGVVcmxzOiBbJy4vbmd4YS1sYWJlbC10ZXh0LmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9uZ3hhLWxhYmVsLXRleHQuY29tcG9uZW50Lmh0bWwnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBOZ3hhTGFiZWxUZXh0Q29tcG9uZW50IHtcblxuICAgIEBJbnB1dCgpIGNvbExhYmVsOiBudW1iZXIgPSAzO1xuICAgIEBJbnB1dCgpIGNvbENvbnRlbnQ6IG51bWJlciA9IDk7XG4gICAgQElucHV0KCkgc2tlbGV0b246IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBASW5wdXQoKSBuYW1lOiBzdHJpbmc7XG4gICAgQElucHV0KCkgY29udGVudDogc3RyaW5nID0gJyc7XG4gICAgQElucHV0KCkgbGFiZWw6IHN0cmluZyA9ICcnO1xuICAgIEBJbnB1dCgpIG5vbGFiZWw6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBASW5wdXQoKSByZXF1aXJlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIHBhcmFtRXJyb3I6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKCkge31cbn1cbiJdfQ==