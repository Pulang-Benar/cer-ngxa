/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
var NgxaPageOutletComponent = /** @class */ (function () {
    function NgxaPageOutletComponent(router) {
        this.router = router;
        this.width = 12;
        this.selectChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    NgxaPageOutletComponent.prototype.back = /**
     * @return {?}
     */
    function () {
        this.router.navigate([this.url]);
        return false;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NgxaPageOutletComponent.prototype.onChangeSelect = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.selected = event;
        this.selectChange.emit(event);
    };
    NgxaPageOutletComponent.decorators = [
        { type: Component, args: [{
                    selector: 'xa-page-outlet',
                    template: "<div class=\"row\">\n  <div class=\"col-lg-{{width}}\">\n    <nb-card>\n      <nb-card-header>\n        <nav class=\"navigation\">\n            <a href=\"#\" (click)=\"back()\" class=\"link back-link\" aria-label=\"Back\" *ngIf=\"url\">\n                <nb-icon icon=\"arrow-back\"></nb-icon>\n            </a>\n            {{header | translate}}\n        </nav>\n        <nb-select *ngIf=\"dataSelect\" [selected]=\"selected\" (selectedChange)=\"onChangeSelect($event)\">\n          <nb-option *ngFor=\"let data of dataSelect\" [value]=\"data\">{{ data }}</nb-option>\n        </nb-select>\n      </nb-card-header>\n      <nb-card-body>\n        <ng-content #pagecontent></ng-content>        \n      </nb-card-body>\n    </nb-card>\n  </div>\n</div>\n    ",
                    encapsulation: ViewEncapsulation.None,
                    styles: ["/*!\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */nb-card-header{display:flex;align-items:center;justify-content:space-between;padding-top:.5rem;padding-bottom:.5rem}.skeleton{-webkit-animation:1.7s linear infinite loading;animation:1.7s linear infinite loading;border-radius:.25rem;background:#dedfe1;background-image:linear-gradient(to right,#dedfe1 0,#f2f3f5 20%,#dedfe1 40%,#dedfe1 100%)}@-webkit-keyframes loading{0%{background-position:-100px}100%{background-position:380px}}@keyframes loading{0%{background-position:-100px}100%{background-position:380px}}.navigation .link{display:inline-block}.navigation .link nb-icon{color:#36f;font-size:1.25rem;vertical-align:middle;margin-right:.25rem}.input-skeleton,.label-skeleton{width:100%;height:2.5rem;line-height:1.5rem;padding:.4375rem 1.125rem}.button-skeleton{width:50%;height:2.5rem;line-height:1rem;padding:.625rem 1.125rem}"]
                }] }
    ];
    /** @nocollapse */
    NgxaPageOutletComponent.ctorParameters = function () { return [
        { type: Router }
    ]; };
    NgxaPageOutletComponent.propDecorators = {
        header: [{ type: Input }],
        url: [{ type: Input }],
        width: [{ type: Input }],
        dataSelect: [{ type: Input }],
        selected: [{ type: Input }],
        selectChange: [{ type: Output }]
    };
    return NgxaPageOutletComponent;
}());
export { NgxaPageOutletComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4YS1wYWdlLW91dGxldC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AeGFwaGlyYS9uZ3hhLWNvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi9iYXNlL3BhZ2Utb3V0bGV0L25neGEtcGFnZS1vdXRsZXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFGLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QztJQWNFLGlDQUFvQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUxsQixVQUFLLEdBQVcsRUFBRSxDQUFDO1FBR2xCLGlCQUFZLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7SUFFdEMsQ0FBQzs7OztJQUUvQixzQ0FBSTs7O0lBQVg7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7Ozs7SUFFTSxnREFBYzs7OztJQUFyQixVQUFzQixLQUFVO1FBQzlCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hDLENBQUM7O2dCQXhCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtvQkFFMUIsaXdCQUFnRDtvQkFDaEQsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2lCQUN0Qzs7OztnQkFQUSxNQUFNOzs7eUJBU1osS0FBSztzQkFDTCxLQUFLO3dCQUNMLEtBQUs7NkJBQ0wsS0FBSzsyQkFDTCxLQUFLOytCQUNMLE1BQU07O0lBY1QsOEJBQUM7Q0FBQSxBQTFCRCxJQTBCQztTQXBCWSx1QkFBdUI7OztJQUNsQyx5Q0FBK0I7O0lBQy9CLHNDQUE0Qjs7SUFDNUIsd0NBQW1DOztJQUNuQyw2Q0FBa0M7O0lBQ2xDLDJDQUE4Qjs7SUFDOUIsK0NBQTJFOzs7OztJQUUvRCx5Q0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3hhLXBhZ2Utb3V0bGV0JyxcbiAgc3R5bGVVcmxzOiBbJy4vbmd4YS1wYWdlLW91dGxldC5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vbmd4YS1wYWdlLW91dGxldC5jb21wb25lbnQuaHRtbCcsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIE5neGFQYWdlT3V0bGV0Q29tcG9uZW50IHtcbiAgQElucHV0KCkgcHVibGljIGhlYWRlcjogc3RyaW5nO1xuICBASW5wdXQoKSBwdWJsaWMgdXJsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHB1YmxpYyB3aWR0aDogbnVtYmVyID0gMTI7XG4gIEBJbnB1dCgpIHB1YmxpYyBkYXRhU2VsZWN0OiBhbnlbXTtcbiAgQElucHV0KCkgcHVibGljIHNlbGVjdGVkOiBhbnk7XG4gIEBPdXRwdXQoKSBwdWJsaWMgc2VsZWN0Q2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHt9XG5cbiAgcHVibGljIGJhY2soKTogYm9vbGVhbiB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMudXJsXSk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHVibGljIG9uQ2hhbmdlU2VsZWN0KGV2ZW50OiBhbnkpIHtcbiAgICB0aGlzLnNlbGVjdGVkID0gZXZlbnQ7XG4gICAgdGhpcy5zZWxlY3RDaGFuZ2UuZW1pdChldmVudCk7XG4gIH1cblxufVxuIl19