/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewEncapsulation } from '@angular/core';
var NgxaErrorMessageComponent = /** @class */ (function () {
    function NgxaErrorMessageComponent() {
        this.hasErrors = false;
        this.errorMessages = [];
    }
    NgxaErrorMessageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'xa-error-message',
                    template: "<div *ngIf=\"hasErrors\">\n  <div *ngFor=\"let message of errorMessages\">\n    <span class=\"caption status-danger\">{{message | translate:param}}</span>\n  </div>\n</div>",
                    encapsulation: ViewEncapsulation.None,
                    styles: [""]
                }] }
    ];
    NgxaErrorMessageComponent.propDecorators = {
        hasErrors: [{ type: Input }],
        errorMessages: [{ type: Input }],
        param: [{ type: Input }]
    };
    return NgxaErrorMessageComponent;
}());
export { NgxaErrorMessageComponent };
if (false) {
    /** @type {?} */
    NgxaErrorMessageComponent.prototype.hasErrors;
    /** @type {?} */
    NgxaErrorMessageComponent.prototype.errorMessages;
    /** @type {?} */
    NgxaErrorMessageComponent.prototype.param;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4YS1lcnJvci1tZXNzYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B4YXBoaXJhL25neGEtY29tbW9uLyIsInNvdXJjZXMiOlsibGliL2Jhc2UvZXJyb3ItbWVzc2FnZS9uZ3hhLWVycm9yLW1lc3NhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVwRTtJQUFBO1FBT2EsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUMzQixrQkFBYSxHQUFhLEVBQUUsQ0FBQztJQUUxQyxDQUFDOztnQkFWQSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFFNUIsd0xBQWtEO29CQUNsRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7aUJBQ3RDOzs7NEJBRUksS0FBSztnQ0FDTCxLQUFLO3dCQUNMLEtBQUs7O0lBQ1YsZ0NBQUM7Q0FBQSxBQVZELElBVUM7U0FKWSx5QkFBeUI7OztJQUNsQyw4Q0FBb0M7O0lBQ3BDLGtEQUFzQzs7SUFDdEMsMENBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAneGEtZXJyb3ItbWVzc2FnZScsXG4gIHN0eWxlVXJsczogWycuL25neGEtZXJyb3ItbWVzc2FnZS5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vbmd4YS1lcnJvci1tZXNzYWdlLmNvbXBvbmVudC5odG1sJyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgTmd4YUVycm9yTWVzc2FnZUNvbXBvbmVudCB7XG4gICAgQElucHV0KCkgaGFzRXJyb3JzOiBib29sZWFuID0gZmFsc2U7XG4gICAgQElucHV0KCkgZXJyb3JNZXNzYWdlczogc3RyaW5nW10gPSBbXTtcbiAgICBASW5wdXQoKSBwYXJhbTogYW55O1xufVxuIl19