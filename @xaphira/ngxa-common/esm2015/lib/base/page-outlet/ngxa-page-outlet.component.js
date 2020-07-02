/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
export class NgxaPageOutletComponent {
    /**
     * @param {?} router
     */
    constructor(router) {
        this.router = router;
        this.width = 12;
        this.selectChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    back() {
        this.router.navigate([this.url]);
        return false;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onChangeSelect(event) {
        this.selected = event;
        this.selectChange.emit(event);
    }
}
NgxaPageOutletComponent.decorators = [
    { type: Component, args: [{
                selector: 'xa-page-outlet',
                template: "<div class=\"row\">\n  <div class=\"col-lg-{{width}}\">\n    <nb-card>\n      <nb-card-header>\n        <nav class=\"navigation\">\n            <a href=\"#\" (click)=\"back()\" class=\"link back-link\" aria-label=\"Back\" *ngIf=\"url\">\n                <nb-icon icon=\"arrow-back\"></nb-icon>\n            </a>\n            {{header | translate}}\n        </nav>\n        <nb-select *ngIf=\"dataSelect\" [selected]=\"selected\" (selectedChange)=\"onChangeSelect($event)\">\n          <nb-option *ngFor=\"let data of dataSelect\" [value]=\"data\">{{ data }}</nb-option>\n        </nb-select>\n      </nb-card-header>\n      <nb-card-body>\n        <ng-content #pagecontent></ng-content>        \n      </nb-card-body>\n    </nb-card>\n  </div>\n</div>\n    ",
                encapsulation: ViewEncapsulation.None,
                styles: ["/*!\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */nb-card-header{display:flex;align-items:center;justify-content:space-between;padding-top:.5rem;padding-bottom:.5rem}.skeleton{-webkit-animation:1.7s linear infinite loading;animation:1.7s linear infinite loading;border-radius:.25rem;background:#dedfe1;background-image:linear-gradient(to right,#dedfe1 0,#f2f3f5 20%,#dedfe1 40%,#dedfe1 100%)}@-webkit-keyframes loading{0%{background-position:-100px}100%{background-position:380px}}@keyframes loading{0%{background-position:-100px}100%{background-position:380px}}.navigation .link{display:inline-block}.navigation .link nb-icon{color:#36f;font-size:1.25rem;vertical-align:middle;margin-right:.25rem}.input-skeleton,.label-skeleton{width:100%;height:2.5rem;line-height:1.5rem;padding:.4375rem 1.125rem}.button-skeleton{width:50%;height:2.5rem;line-height:1rem;padding:.625rem 1.125rem}"]
            }] }
];
/** @nocollapse */
NgxaPageOutletComponent.ctorParameters = () => [
    { type: Router }
];
NgxaPageOutletComponent.propDecorators = {
    header: [{ type: Input }],
    url: [{ type: Input }],
    width: [{ type: Input }],
    dataSelect: [{ type: Input }],
    selected: [{ type: Input }],
    selectChange: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    NgxaPageOutletComponent.prototype.header;
    /** @type {?} */
    NgxaPageOutletComponent.prototype.url;
    /** @type {?} */
    NgxaPageOutletComponent.prototype.width;
    /** @type {?} */
    NgxaPageOutletComponent.prototype.dataSelect;
    /** @type {?} */
    NgxaPageOutletComponent.prototype.selected;
    /** @type {?} */
    NgxaPageOutletComponent.prototype.selectChange;
    /**
     * @type {?}
     * @private
     */
    NgxaPageOutletComponent.prototype.router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4YS1wYWdlLW91dGxldC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AeGFwaGlyYS9uZ3hhLWNvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi9iYXNlL3BhZ2Utb3V0bGV0L25neGEtcGFnZS1vdXRsZXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFGLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQVF6QyxNQUFNLE9BQU8sdUJBQXVCOzs7O0lBUWxDLFlBQW9CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBTGxCLFVBQUssR0FBVyxFQUFFLENBQUM7UUFHbEIsaUJBQVksR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQUV0QyxDQUFDOzs7O0lBRS9CLElBQUk7UUFDVCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7Ozs7SUFFTSxjQUFjLENBQUMsS0FBVTtRQUM5QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN0QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7WUF4QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBRTFCLGl3QkFBZ0Q7Z0JBQ2hELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOzthQUN0Qzs7OztZQVBRLE1BQU07OztxQkFTWixLQUFLO2tCQUNMLEtBQUs7b0JBQ0wsS0FBSzt5QkFDTCxLQUFLO3VCQUNMLEtBQUs7MkJBQ0wsTUFBTTs7OztJQUxQLHlDQUErQjs7SUFDL0Isc0NBQTRCOztJQUM1Qix3Q0FBbUM7O0lBQ25DLDZDQUFrQzs7SUFDbEMsMkNBQThCOztJQUM5QiwrQ0FBMkU7Ozs7O0lBRS9ELHlDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAneGEtcGFnZS1vdXRsZXQnLFxuICBzdHlsZVVybHM6IFsnLi9uZ3hhLXBhZ2Utb3V0bGV0LmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9uZ3hhLXBhZ2Utb3V0bGV0LmNvbXBvbmVudC5odG1sJyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgTmd4YVBhZ2VPdXRsZXRDb21wb25lbnQge1xuICBASW5wdXQoKSBwdWJsaWMgaGVhZGVyOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHB1YmxpYyB1cmw6IHN0cmluZztcbiAgQElucHV0KCkgcHVibGljIHdpZHRoOiBudW1iZXIgPSAxMjtcbiAgQElucHV0KCkgcHVibGljIGRhdGFTZWxlY3Q6IGFueVtdO1xuICBASW5wdXQoKSBwdWJsaWMgc2VsZWN0ZWQ6IGFueTtcbiAgQE91dHB1dCgpIHB1YmxpYyBzZWxlY3RDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge31cblxuICBwdWJsaWMgYmFjaygpOiBib29sZWFuIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdGhpcy51cmxdKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwdWJsaWMgb25DaGFuZ2VTZWxlY3QoZXZlbnQ6IGFueSkge1xuICAgIHRoaXMuc2VsZWN0ZWQgPSBldmVudDtcbiAgICB0aGlzLnNlbGVjdENoYW5nZS5lbWl0KGV2ZW50KTtcbiAgfVxuXG59XG4iXX0=