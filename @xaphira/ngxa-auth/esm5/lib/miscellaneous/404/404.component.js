/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { Location } from '@angular/common';
var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent(location) {
        this.location = location;
    }
    /**
     * @return {?}
     */
    PageNotFoundComponent.prototype.goToHome = /**
     * @return {?}
     */
    function () {
        this.location.back();
        return;
    };
    PageNotFoundComponent.decorators = [
        { type: Component, args: [{
                    selector: 'xa-404',
                    template: "<div class=\"flex-centered\">\n  <h2 class=\"title\">404</h2>\n  <h2 class=\"title\">Page Not Found</h2>\n  <small class=\"sub-title\">The page you were looking for doesn't exist</small>\n  <button nbButton fullWidth (click)=\"goToHome()\" type=\"button\" class=\"home-button\">\n    Take me home\n  </button>\n</div>\n",
                    styles: [".flex-centered{margin:auto}nb-card-body{display:flex}.title{text-align:center}.sub-title{text-align:center;display:block;margin-bottom:3rem}.home-button{margin-bottom:2rem}"]
                }] }
    ];
    /** @nocollapse */
    PageNotFoundComponent.ctorParameters = function () { return [
        { type: Location }
    ]; };
    return PageNotFoundComponent;
}());
export { PageNotFoundComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    PageNotFoundComponent.prototype.location;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDA0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B4YXBoaXJhL25neGEtYXV0aC8iLCJzb3VyY2VzIjpbImxpYi9taXNjZWxsYW5lb3VzLzQwNC80MDQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUzQztJQU9FLCtCQUFvQixRQUFrQjtRQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVO0lBQ3RDLENBQUM7Ozs7SUFFRCx3Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JCLE9BQU87SUFDVCxDQUFDOztnQkFiRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFFBQVE7b0JBRWxCLDJVQUFtQzs7aUJBQ3BDOzs7O2dCQU5RLFFBQVE7O0lBZ0JqQiw0QkFBQztDQUFBLEFBZEQsSUFjQztTQVRZLHFCQUFxQjs7Ozs7O0lBRXBCLHlDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd4YS00MDQnLFxuICBzdHlsZVVybHM6IFsnLi80MDQuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuLzQwNC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2VOb3RGb3VuZENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBsb2NhdGlvbjogTG9jYXRpb24pIHtcbiAgfVxuXG4gIGdvVG9Ib21lKCkge1xuICAgIHRoaXMubG9jYXRpb24uYmFjaygpO1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19