/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewEncapsulation } from '@angular/core';
export class NgxaErrorMessageComponent {
    constructor() {
        this.hasErrors = false;
        this.errorMessages = [];
    }
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
if (false) {
    /** @type {?} */
    NgxaErrorMessageComponent.prototype.hasErrors;
    /** @type {?} */
    NgxaErrorMessageComponent.prototype.errorMessages;
    /** @type {?} */
    NgxaErrorMessageComponent.prototype.param;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4YS1lcnJvci1tZXNzYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B4YXBoaXJhL25neGEtY29tbW9uLyIsInNvdXJjZXMiOlsibGliL2Jhc2UvZXJyb3ItbWVzc2FnZS9uZ3hhLWVycm9yLW1lc3NhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVFwRSxNQUFNLE9BQU8seUJBQXlCO0lBTnRDO1FBT2EsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUMzQixrQkFBYSxHQUFhLEVBQUUsQ0FBQztJQUUxQyxDQUFDOzs7WUFWQSxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFFNUIsd0xBQWtEO2dCQUNsRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7YUFDdEM7Ozt3QkFFSSxLQUFLOzRCQUNMLEtBQUs7b0JBQ0wsS0FBSzs7OztJQUZOLDhDQUFvQzs7SUFDcEMsa0RBQXNDOztJQUN0QywwQ0FBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd4YS1lcnJvci1tZXNzYWdlJyxcbiAgc3R5bGVVcmxzOiBbJy4vbmd4YS1lcnJvci1tZXNzYWdlLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9uZ3hhLWVycm9yLW1lc3NhZ2UuY29tcG9uZW50Lmh0bWwnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBOZ3hhRXJyb3JNZXNzYWdlQ29tcG9uZW50IHtcbiAgICBASW5wdXQoKSBoYXNFcnJvcnM6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBASW5wdXQoKSBlcnJvck1lc3NhZ2VzOiBzdHJpbmdbXSA9IFtdO1xuICAgIEBJbnB1dCgpIHBhcmFtOiBhbnk7XG59XG4iXX0=