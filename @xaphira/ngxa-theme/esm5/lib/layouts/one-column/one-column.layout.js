/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
var OneColumnLayoutComponent = /** @class */ (function () {
    function OneColumnLayoutComponent() {
    }
    OneColumnLayoutComponent.decorators = [
        { type: Component, args: [{
                    selector: 'xa-one-column-layout',
                    template: "\n    <nb-layout windowMode>\n      <nb-layout-header fixed>\n        <xa-header></xa-header>\n      </nb-layout-header>\n\n      <nb-sidebar class=\"menu-sidebar\" tag=\"menu-sidebar\" responsive>\n        <ng-content select=\"nb-menu\"></ng-content>\n      </nb-sidebar>\n\n      <nb-layout-column>\n        <ng-content select=\"router-outlet\"></ng-content>\n      </nb-layout-column>\n\n      <nb-layout-footer fixed>\n        <xa-footer></xa-footer>\n      </nb-layout-footer>\n    </nb-layout>\n  ",
                    styles: ["/*!\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */.nb-theme-default :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}.nb-theme-dark :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}.nb-theme-cosmic :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}.nb-theme-corporate :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}"]
                }] }
    ];
    return OneColumnLayoutComponent;
}());
export { OneColumnLayoutComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25lLWNvbHVtbi5sYXlvdXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AeGFwaGlyYS9uZ3hhLXRoZW1lLyIsInNvdXJjZXMiOlsibGliL2xheW91dHMvb25lLWNvbHVtbi9vbmUtY29sdW1uLmxheW91dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxQztJQUFBO0lBdUJ1QyxDQUFDOztnQkF2QnZDLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsc0JBQXNCO29CQUVoQyxRQUFRLEVBQUUseWZBa0JUOztpQkFDRjs7SUFDc0MsK0JBQUM7Q0FBQSxBQXZCeEMsSUF1QndDO1NBQTNCLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd4YS1vbmUtY29sdW1uLWxheW91dCcsXG4gIHN0eWxlVXJsczogWycuL29uZS1jb2x1bW4ubGF5b3V0LnNjc3MnXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmItbGF5b3V0IHdpbmRvd01vZGU+XG4gICAgICA8bmItbGF5b3V0LWhlYWRlciBmaXhlZD5cbiAgICAgICAgPHhhLWhlYWRlcj48L3hhLWhlYWRlcj5cbiAgICAgIDwvbmItbGF5b3V0LWhlYWRlcj5cblxuICAgICAgPG5iLXNpZGViYXIgY2xhc3M9XCJtZW51LXNpZGViYXJcIiB0YWc9XCJtZW51LXNpZGViYXJcIiByZXNwb25zaXZlPlxuICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJuYi1tZW51XCI+PC9uZy1jb250ZW50PlxuICAgICAgPC9uYi1zaWRlYmFyPlxuXG4gICAgICA8bmItbGF5b3V0LWNvbHVtbj5cbiAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwicm91dGVyLW91dGxldFwiPjwvbmctY29udGVudD5cbiAgICAgIDwvbmItbGF5b3V0LWNvbHVtbj5cblxuICAgICAgPG5iLWxheW91dC1mb290ZXIgZml4ZWQ+XG4gICAgICAgIDx4YS1mb290ZXI+PC94YS1mb290ZXI+XG4gICAgICA8L25iLWxheW91dC1mb290ZXI+XG4gICAgPC9uYi1sYXlvdXQ+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIE9uZUNvbHVtbkxheW91dENvbXBvbmVudCB7fVxuIl19