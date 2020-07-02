/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
export class TwoColumnsLayoutComponent {
}
TwoColumnsLayoutComponent.decorators = [
    { type: Component, args: [{
                selector: 'xa-two-columns-layout',
                template: `
    <nb-layout windowMode>
      <nb-layout-header fixed>
        <xa-header></xa-header>
      </nb-layout-header>

      <nb-sidebar class="menu-sidebar" tag="menu-sidebar" responsive>
        <ng-content select="nb-menu"></ng-content>
      </nb-sidebar>

      <nb-layout-column class="small">
      </nb-layout-column>

      <nb-layout-column>
        <ng-content select="router-outlet"></ng-content>
      </nb-layout-column>

      <nb-layout-footer fixed>
        <xa-footer></xa-footer>
      </nb-layout-footer>

    </nb-layout>
  `,
                styles: ["/*!\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */.nb-theme-default :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}.nb-theme-dark :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}.nb-theme-cosmic :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}.nb-theme-corporate :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}"]
            }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHdvLWNvbHVtbnMubGF5b3V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHhhcGhpcmEvbmd4YS10aGVtZS8iLCJzb3VyY2VzIjpbImxpYi9sYXlvdXRzL3R3by1jb2x1bW5zL3R3by1jb2x1bW5zLmxheW91dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQTZCMUMsTUFBTSxPQUFPLHlCQUF5Qjs7O1lBM0JyQyxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtnQkFFakMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBc0JUOzthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3hhLXR3by1jb2x1bW5zLWxheW91dCcsXG4gIHN0eWxlVXJsczogWycuL3R3by1jb2x1bW5zLmxheW91dC5zY3NzJ10sXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5iLWxheW91dCB3aW5kb3dNb2RlPlxuICAgICAgPG5iLWxheW91dC1oZWFkZXIgZml4ZWQ+XG4gICAgICAgIDx4YS1oZWFkZXI+PC94YS1oZWFkZXI+XG4gICAgICA8L25iLWxheW91dC1oZWFkZXI+XG5cbiAgICAgIDxuYi1zaWRlYmFyIGNsYXNzPVwibWVudS1zaWRlYmFyXCIgdGFnPVwibWVudS1zaWRlYmFyXCIgcmVzcG9uc2l2ZT5cbiAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibmItbWVudVwiPjwvbmctY29udGVudD5cbiAgICAgIDwvbmItc2lkZWJhcj5cblxuICAgICAgPG5iLWxheW91dC1jb2x1bW4gY2xhc3M9XCJzbWFsbFwiPlxuICAgICAgPC9uYi1sYXlvdXQtY29sdW1uPlxuXG4gICAgICA8bmItbGF5b3V0LWNvbHVtbj5cbiAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwicm91dGVyLW91dGxldFwiPjwvbmctY29udGVudD5cbiAgICAgIDwvbmItbGF5b3V0LWNvbHVtbj5cblxuICAgICAgPG5iLWxheW91dC1mb290ZXIgZml4ZWQ+XG4gICAgICAgIDx4YS1mb290ZXI+PC94YS1mb290ZXI+XG4gICAgICA8L25iLWxheW91dC1mb290ZXI+XG5cbiAgICA8L25iLWxheW91dD5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgVHdvQ29sdW1uc0xheW91dENvbXBvbmVudCB7fVxuIl19