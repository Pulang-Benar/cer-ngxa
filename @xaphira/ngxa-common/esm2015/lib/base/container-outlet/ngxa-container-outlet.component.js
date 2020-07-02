/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewEncapsulation } from '@angular/core';
export class NgxaContainerOutletComponent {
    constructor() {
        this.label = '';
        this.colLabel = 3;
        this.colContent = 9;
        this.nolabel = false;
        this.required = false;
        this.hasErrors = false;
        this.errorMessages = [];
        this.skeleton = false;
    }
}
NgxaContainerOutletComponent.decorators = [
    { type: Component, args: [{
                selector: 'xa-container-outlet',
                template: "<div class=\"form-group row\">\n  <label\n    *ngIf=\"(!skeleton || nolabel);else labelskeleton\"\n    for=\"{{name}}\"\n    class=\"label col-sm-{{colLabel}} col-form-label\">\n    {{label | translate}}{{ (!nolabel) ? ((required) ? ' *' : '') : '' }}\n  </label>\n  <ng-template #labelskeleton>\n    <div class=\"col-sm-{{colLabel}}\">\n      <label\n        class=\"label col-form-label\"\n        [ngClass]=\"{\n          'label-skeleton': true,\n          'skeleton': skeleton\n        }\">\n      </label>\n    </div>\n  </ng-template>\n  <ng-content></ng-content>\n  <div class=\"offset-sm-{{colLabel}} col-sm-{{colContent}}\">\n    <xa-error-message [hasErrors]=\"hasErrors\" [errorMessages]=\"errorMessages\" [param]=\"paramError\">\n    </xa-error-message>\n  </div>\n</div>",
                encapsulation: ViewEncapsulation.None,
                styles: [""]
            }] }
];
NgxaContainerOutletComponent.propDecorators = {
    name: [{ type: Input }],
    label: [{ type: Input }],
    colLabel: [{ type: Input }],
    colContent: [{ type: Input }],
    nolabel: [{ type: Input }],
    required: [{ type: Input }],
    hasErrors: [{ type: Input }],
    errorMessages: [{ type: Input }],
    paramError: [{ type: Input }],
    skeleton: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NgxaContainerOutletComponent.prototype.name;
    /** @type {?} */
    NgxaContainerOutletComponent.prototype.label;
    /** @type {?} */
    NgxaContainerOutletComponent.prototype.colLabel;
    /** @type {?} */
    NgxaContainerOutletComponent.prototype.colContent;
    /** @type {?} */
    NgxaContainerOutletComponent.prototype.nolabel;
    /** @type {?} */
    NgxaContainerOutletComponent.prototype.required;
    /** @type {?} */
    NgxaContainerOutletComponent.prototype.hasErrors;
    /** @type {?} */
    NgxaContainerOutletComponent.prototype.errorMessages;
    /** @type {?} */
    NgxaContainerOutletComponent.prototype.paramError;
    /** @type {?} */
    NgxaContainerOutletComponent.prototype.skeleton;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4YS1jb250YWluZXItb3V0bGV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B4YXBoaXJhL25neGEtY29tbW9uLyIsInNvdXJjZXMiOlsibGliL2Jhc2UvY29udGFpbmVyLW91dGxldC9uZ3hhLWNvbnRhaW5lci1vdXRsZXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVFwRSxNQUFNLE9BQU8sNEJBQTRCO0lBTnpDO1FBUWEsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUNuQixhQUFRLEdBQVcsQ0FBQyxDQUFDO1FBQ3JCLGVBQVUsR0FBVyxDQUFDLENBQUM7UUFDdkIsWUFBTyxHQUFZLEtBQUssQ0FBQztRQUN6QixhQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0Isa0JBQWEsR0FBYSxFQUFFLENBQUM7UUFFN0IsYUFBUSxHQUFZLEtBQUssQ0FBQztJQUN2QyxDQUFDOzs7WUFqQkEsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBRS9CLDJ4QkFBcUQ7Z0JBQ3JELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOzthQUN0Qzs7O21CQUVJLEtBQUs7b0JBQ0wsS0FBSzt1QkFDTCxLQUFLO3lCQUNMLEtBQUs7c0JBQ0wsS0FBSzt1QkFDTCxLQUFLO3dCQUNMLEtBQUs7NEJBQ0wsS0FBSzt5QkFDTCxLQUFLO3VCQUNMLEtBQUs7Ozs7SUFUTiw0Q0FBc0I7O0lBQ3RCLDZDQUE0Qjs7SUFDNUIsZ0RBQThCOztJQUM5QixrREFBZ0M7O0lBQ2hDLCtDQUFrQzs7SUFDbEMsZ0RBQW1DOztJQUNuQyxpREFBb0M7O0lBQ3BDLHFEQUFzQzs7SUFDdEMsa0RBQXlCOztJQUN6QixnREFBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd4YS1jb250YWluZXItb3V0bGV0JyxcbiAgc3R5bGVVcmxzOiBbJy4vbmd4YS1jb250YWluZXItb3V0bGV0LmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9uZ3hhLWNvbnRhaW5lci1vdXRsZXQuY29tcG9uZW50Lmh0bWwnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBOZ3hhQ29udGFpbmVyT3V0bGV0Q29tcG9uZW50IHtcbiAgICBASW5wdXQoKSBuYW1lOiBzdHJpbmc7XG4gICAgQElucHV0KCkgbGFiZWw6IHN0cmluZyA9ICcnO1xuICAgIEBJbnB1dCgpIGNvbExhYmVsOiBudW1iZXIgPSAzO1xuICAgIEBJbnB1dCgpIGNvbENvbnRlbnQ6IG51bWJlciA9IDk7XG4gICAgQElucHV0KCkgbm9sYWJlbDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIHJlcXVpcmVkOiBib29sZWFuID0gZmFsc2U7XG4gICAgQElucHV0KCkgaGFzRXJyb3JzOiBib29sZWFuID0gZmFsc2U7XG4gICAgQElucHV0KCkgZXJyb3JNZXNzYWdlczogc3RyaW5nW10gPSBbXTtcbiAgICBASW5wdXQoKSBwYXJhbUVycm9yOiBhbnk7XG4gICAgQElucHV0KCkgc2tlbGV0b246IGJvb2xlYW4gPSBmYWxzZTtcbn1cbiJdfQ==