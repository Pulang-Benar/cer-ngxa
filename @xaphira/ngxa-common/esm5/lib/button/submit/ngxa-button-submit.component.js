/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
var NgxaButtonSubmitComponent = /** @class */ (function () {
    function NgxaButtonSubmitComponent() {
        this.formGroupButton = new FormGroup({});
        this.disabledButton = false;
        this.colLabel = 3;
        this.colButton = 9;
        this.type = 'submit';
        this.status = 'primary';
        this.skeleton = false;
        this.onSubmit = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    NgxaButtonSubmitComponent.prototype.click = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.onSubmit.emit(event);
    };
    NgxaButtonSubmitComponent.decorators = [
        { type: Component, args: [{
                    selector: 'xa-button-submit',
                    template: "<div class=\"form-group row\">\n  <div class=\"offset-sm-{{colLabel}} col-sm-{{colButton}}\" *ngIf=\"!skeleton; else contentskeleton\">\n    <button\n      type=\"{{type}}\"\n      status=\"{{status}}\"\n      (click)=\"click($event)\"\n      [disabled]=\"formGroupButton.invalid || formGroupButton.pristine || disabledButton\"\n      nbButton>\n      {{ name | translate}}\n    </button>\n  </div>\n  <ng-template #contentskeleton>\n    <div class=\"offset-sm-{{colLabel}} col-sm-{{colButton}}\">\n      <div\n        [ngClass]=\"{\n          'button-skeleton': true,\n          'skeleton': skeleton\n        }\">\n      </div>\n    </div>\n  </ng-template>\n</div>",
                    encapsulation: ViewEncapsulation.None,
                    styles: [""]
                }] }
    ];
    NgxaButtonSubmitComponent.propDecorators = {
        formGroupButton: [{ type: Input }],
        name: [{ type: Input }],
        disabledButton: [{ type: Input }],
        colLabel: [{ type: Input }],
        colButton: [{ type: Input }],
        type: [{ type: Input }],
        status: [{ type: Input }],
        skeleton: [{ type: Input }],
        onSubmit: [{ type: Output }]
    };
    return NgxaButtonSubmitComponent;
}());
export { NgxaButtonSubmitComponent };
if (false) {
    /** @type {?} */
    NgxaButtonSubmitComponent.prototype.formGroupButton;
    /** @type {?} */
    NgxaButtonSubmitComponent.prototype.name;
    /** @type {?} */
    NgxaButtonSubmitComponent.prototype.disabledButton;
    /** @type {?} */
    NgxaButtonSubmitComponent.prototype.colLabel;
    /** @type {?} */
    NgxaButtonSubmitComponent.prototype.colButton;
    /** @type {?} */
    NgxaButtonSubmitComponent.prototype.type;
    /** @type {?} */
    NgxaButtonSubmitComponent.prototype.status;
    /** @type {?} */
    NgxaButtonSubmitComponent.prototype.skeleton;
    /** @type {?} */
    NgxaButtonSubmitComponent.prototype.onSubmit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4YS1idXR0b24tc3VibWl0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B4YXBoaXJhL25neGEtY29tbW9uLyIsInNvdXJjZXMiOlsibGliL2J1dHRvbi9zdWJtaXQvbmd4YS1idXR0b24tc3VibWl0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQXFDLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0gsT0FBTyxFQUFhLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXREO0lBQUE7UUFPYSxvQkFBZSxHQUFjLElBQUksU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRS9DLG1CQUFjLEdBQVksS0FBSyxDQUFDO1FBQ2hDLGFBQVEsR0FBVyxDQUFDLENBQUM7UUFDckIsY0FBUyxHQUFXLENBQUMsQ0FBQztRQUN0QixTQUFJLEdBQWtDLFFBQVEsQ0FBQztRQUMvQyxXQUFNLEdBQThDLFNBQVMsQ0FBQztRQUM5RCxhQUFRLEdBQVksS0FBSyxDQUFDO1FBQ3pCLGFBQVEsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQUtwRSxDQUFDOzs7OztJQUhVLHlDQUFLOzs7O0lBQVosVUFBYSxLQUFVO1FBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVCLENBQUM7O2dCQW5CSixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFFNUIsc3FCQUFrRDtvQkFDbEQsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2lCQUN0Qzs7O2tDQUVJLEtBQUs7dUJBQ0wsS0FBSztpQ0FDTCxLQUFLOzJCQUNMLEtBQUs7NEJBQ0wsS0FBSzt1QkFDTCxLQUFLO3lCQUNMLEtBQUs7MkJBQ0wsS0FBSzsyQkFDTCxNQUFNOztJQUtYLGdDQUFDO0NBQUEsQUFwQkQsSUFvQkM7U0FkWSx5QkFBeUI7OztJQUNsQyxvREFBd0Q7O0lBQ3hELHlDQUFzQjs7SUFDdEIsbURBQXlDOztJQUN6Qyw2Q0FBOEI7O0lBQzlCLDhDQUErQjs7SUFDL0IseUNBQXdEOztJQUN4RCwyQ0FBdUU7O0lBQ3ZFLDZDQUFtQzs7SUFDbkMsNkNBQWdFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24sIE9wdGlvbmFsLCBTZWxmLCBJbmplY3QsIExPQ0FMRV9JRCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nQ29udHJvbCwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd4YS1idXR0b24tc3VibWl0JyxcbiAgc3R5bGVVcmxzOiBbJy4vbmd4YS1idXR0b24tc3VibWl0LmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9uZ3hhLWJ1dHRvbi1zdWJtaXQuY29tcG9uZW50Lmh0bWwnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBOZ3hhQnV0dG9uU3VibWl0Q29tcG9uZW50IHtcbiAgICBASW5wdXQoKSBmb3JtR3JvdXBCdXR0b246IEZvcm1Hcm91cCA9IG5ldyBGb3JtR3JvdXAoe30pO1xuICAgIEBJbnB1dCgpIG5hbWU6IHN0cmluZztcbiAgICBASW5wdXQoKSBkaXNhYmxlZEJ1dHRvbjogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIGNvbExhYmVsOiBudW1iZXIgPSAzO1xuICAgIEBJbnB1dCgpIGNvbEJ1dHRvbjogbnVtYmVyID0gOTtcbiAgICBASW5wdXQoKSB0eXBlOiAnYnV0dG9uJyB8ICdzdWJtaXQnIHwgJ3Jlc2V0JyA9ICdzdWJtaXQnO1xuICAgIEBJbnB1dCgpIHN0YXR1czogJ3ByaW1hcnknIHwgJ2RhbmdlcicgfCAnd2FybmluZycgfCAnaW5mbycgPSAncHJpbWFyeSc7XG4gICAgQElucHV0KCkgc2tlbGV0b246IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBAT3V0cHV0KCkgb25TdWJtaXQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgICBwdWJsaWMgY2xpY2soZXZlbnQ6IGFueSkge1xuICAgICAgdGhpcy5vblN1Ym1pdC5lbWl0KGV2ZW50KTtcbiAgICB9XG59XG4iXX0=