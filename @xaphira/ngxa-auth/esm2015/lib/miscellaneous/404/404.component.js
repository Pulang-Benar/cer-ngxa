/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { Location } from '@angular/common';
export class PageNotFoundComponent {
    /**
     * @param {?} location
     */
    constructor(location) {
        this.location = location;
    }
    /**
     * @return {?}
     */
    goToHome() {
        this.location.back();
        return;
    }
}
PageNotFoundComponent.decorators = [
    { type: Component, args: [{
                selector: 'xa-404',
                template: "<div class=\"flex-centered\">\n  <h2 class=\"title\">404</h2>\n  <h2 class=\"title\">Page Not Found</h2>\n  <small class=\"sub-title\">The page you were looking for doesn't exist</small>\n  <button nbButton fullWidth (click)=\"goToHome()\" type=\"button\" class=\"home-button\">\n    Take me home\n  </button>\n</div>\n",
                styles: [".flex-centered{margin:auto}nb-card-body{display:flex}.title{text-align:center}.sub-title{text-align:center;display:block;margin-bottom:3rem}.home-button{margin-bottom:2rem}"]
            }] }
];
/** @nocollapse */
PageNotFoundComponent.ctorParameters = () => [
    { type: Location }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    PageNotFoundComponent.prototype.location;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDA0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B4YXBoaXJhL25neGEtYXV0aC8iLCJzb3VyY2VzIjpbImxpYi9taXNjZWxsYW5lb3VzLzQwNC80MDQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQU8zQyxNQUFNLE9BQU8scUJBQXFCOzs7O0lBRWhDLFlBQW9CLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7SUFDdEMsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JCLE9BQU87SUFDVCxDQUFDOzs7WUFiRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFFBQVE7Z0JBRWxCLDJVQUFtQzs7YUFDcEM7Ozs7WUFOUSxRQUFROzs7Ozs7O0lBU0gseUNBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3hhLTQwNCcsXG4gIHN0eWxlVXJsczogWycuLzQwNC5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vNDA0LmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgUGFnZU5vdEZvdW5kQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvbikge1xuICB9XG5cbiAgZ29Ub0hvbWUoKSB7XG4gICAgdGhpcy5sb2NhdGlvbi5iYWNrKCk7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=