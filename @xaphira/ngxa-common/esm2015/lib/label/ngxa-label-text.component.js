/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewEncapsulation } from '@angular/core';
export class NgxaLabelTextComponent {
    constructor() {
        this.colLabel = 3;
        this.colContent = 9;
        this.skeleton = false;
        this.content = '';
        this.label = '';
        this.nolabel = false;
        this.required = false;
    }
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
NgxaLabelTextComponent.ctorParameters = () => [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4YS1sYWJlbC10ZXh0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B4YXBoaXJhL25neGEtY29tbW9uLyIsInNvdXJjZXMiOlsibGliL2xhYmVsL25neGEtbGFiZWwtdGV4dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUXBFLE1BQU0sT0FBTyxzQkFBc0I7SUFZL0I7UUFWUyxhQUFRLEdBQVcsQ0FBQyxDQUFDO1FBQ3JCLGVBQVUsR0FBVyxDQUFDLENBQUM7UUFDdkIsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUUxQixZQUFPLEdBQVcsRUFBRSxDQUFDO1FBQ3JCLFVBQUssR0FBVyxFQUFFLENBQUM7UUFDbkIsWUFBTyxHQUFZLEtBQUssQ0FBQztRQUN6QixhQUFRLEdBQVksS0FBSyxDQUFDO0lBR3BCLENBQUM7OztZQWxCbkIsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUV6Qiwwb0JBQStDO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7YUFDdEM7Ozs7O3VCQUdJLEtBQUs7eUJBQ0wsS0FBSzt1QkFDTCxLQUFLO21CQUNMLEtBQUs7c0JBQ0wsS0FBSztvQkFDTCxLQUFLO3NCQUNMLEtBQUs7dUJBQ0wsS0FBSzt5QkFDTCxLQUFLOzs7O0lBUk4sMENBQThCOztJQUM5Qiw0Q0FBZ0M7O0lBQ2hDLDBDQUFtQzs7SUFDbkMsc0NBQXNCOztJQUN0Qix5Q0FBOEI7O0lBQzlCLHVDQUE0Qjs7SUFDNUIseUNBQWtDOztJQUNsQywwQ0FBbUM7O0lBQ25DLDRDQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3hhLWxhYmVsLXRleHQnLFxuICBzdHlsZVVybHM6IFsnLi9uZ3hhLWxhYmVsLXRleHQuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL25neGEtbGFiZWwtdGV4dC5jb21wb25lbnQuaHRtbCcsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIE5neGFMYWJlbFRleHRDb21wb25lbnQge1xuXG4gICAgQElucHV0KCkgY29sTGFiZWw6IG51bWJlciA9IDM7XG4gICAgQElucHV0KCkgY29sQ29udGVudDogbnVtYmVyID0gOTtcbiAgICBASW5wdXQoKSBza2VsZXRvbjogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIG5hbWU6IHN0cmluZztcbiAgICBASW5wdXQoKSBjb250ZW50OiBzdHJpbmcgPSAnJztcbiAgICBASW5wdXQoKSBsYWJlbDogc3RyaW5nID0gJyc7XG4gICAgQElucHV0KCkgbm9sYWJlbDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIHJlcXVpcmVkOiBib29sZWFuID0gZmFsc2U7XG4gICAgQElucHV0KCkgcGFyYW1FcnJvcjogYW55O1xuXG4gICAgY29uc3RydWN0b3IoKSB7fVxufVxuIl19