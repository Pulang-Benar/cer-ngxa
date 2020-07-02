/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { Location } from '@angular/common';
var AuthComponent = /** @class */ (function () {
    function AuthComponent(location) {
        this.location = location;
    }
    /**
     * @return {?}
     */
    AuthComponent.prototype.back = /**
     * @return {?}
     */
    function () {
        this.location.back();
        return false;
    };
    /**
     * @return {?}
     */
    AuthComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.alive = false;
    };
    AuthComponent.decorators = [
        { type: Component, args: [{
                    selector: 'xa-auth',
                    template: "<nb-layout>\n    <nb-layout-column>\n        <nb-card>\n            <nb-card-header>\n                <nav class=\"navigation\">\n                    <a href=\"#\" (click)=\"back()\" class=\"link back-link\" aria-label=\"Back\">\n                        <nb-icon icon=\"arrow-back\"></nb-icon>\n                    </a>\n                </nav>\n            </nb-card-header>\n            <nb-card-body>\n                <xa-auth-block>\n                    <router-outlet></router-outlet>\n                </xa-auth-block>\n            </nb-card-body>\n        </nb-card>\n    </nb-layout-column>\n</nb-layout>",
                    styles: ["/*!\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */:host nb-card{margin:0;height:calc(100vh - 2 * 2.5rem)}:host .navigation .link{display:inline-block;text-decoration:none}:host .navigation .link nb-icon{font-size:2rem;vertical-align:middle}:host .links nb-icon{font-size:2.5rem}:host nb-card-body{display:flex;width:100%}:host xa-auth-block{margin:auto}:host ::ng-deep nb-layout .layout .layout-container .content .columns nb-layout-column{padding:2.5rem}@media (max-width:767.98px){:host nb-card{border-radius:0;height:100vh}:host ::ng-deep nb-layout .layout .layout-container .content .columns nb-layout-column{padding:0}}"]
                }] }
    ];
    /** @nocollapse */
    AuthComponent.ctorParameters = function () { return [
        { type: Location }
    ]; };
    return AuthComponent;
}());
export { AuthComponent };
if (false) {
    /** @type {?} */
    AuthComponent.prototype.alive;
    /** @type {?} */
    AuthComponent.prototype.subscription;
    /** @type {?} */
    AuthComponent.prototype.authenticated;
    /** @type {?} */
    AuthComponent.prototype.token;
    /**
     * @type {?}
     * @private
     */
    AuthComponent.prototype.location;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AeGFwaGlyYS9uZ3hhLWF1dGgvIiwic291cmNlcyI6WyJsaWIvbGF5b3V0L2F1dGguY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUzQztJQVlJLHVCQUFvQixRQUFrQjtRQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVO0lBQUcsQ0FBQzs7OztJQUVuQyw0QkFBSTs7O0lBQVg7UUFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JCLE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7Ozs7SUFFRCxtQ0FBVzs7O0lBQVg7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDOztnQkFyQkosU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxTQUFTO29CQUVuQiw4bUJBQWtDOztpQkFDbkM7Ozs7Z0JBTlEsUUFBUTs7SUF5QmpCLG9CQUFDO0NBQUEsQUF2QkQsSUF1QkM7U0FsQlksYUFBYTs7O0lBRXRCLDhCQUFlOztJQUNmLHFDQUFrQjs7SUFDbEIsc0NBQXVCOztJQUN2Qiw4QkFBYzs7Ozs7SUFFRixpQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd4YS1hdXRoJyxcbiAgc3R5bGVVcmxzOiBbJ2F1dGguY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICdhdXRoLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQXV0aENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG5cbiAgICBhbGl2ZTogYm9vbGVhbjtcbiAgICBzdWJzY3JpcHRpb246IGFueTtcbiAgICBhdXRoZW50aWNhdGVkOiBib29sZWFuO1xuICAgIHRva2VuOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvbikge31cblxuICAgIHB1YmxpYyBiYWNrKCk6IGJvb2xlYW4ge1xuICAgICAgICB0aGlzLmxvY2F0aW9uLmJhY2soKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmFsaXZlID0gZmFsc2U7XG4gICAgfVxuXG59XG4iXX0=