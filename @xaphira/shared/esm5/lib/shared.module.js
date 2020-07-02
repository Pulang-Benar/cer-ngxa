/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_SERVICE } from './providers/http.provider';
import { HttpCommonService } from './services/http-common.service';
/** @type {?} */
export var SHARED_PROVIDERS = [
    { provide: HTTP_SERVICE, useClass: HttpCommonService },
];
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    /**
     * @return {?}
     */
    SharedModule.forRoot = /**
     * @return {?}
     */
    function () {
        return (/** @type {?} */ ({
            ngModule: SharedModule,
            providers: tslib_1.__spread(SHARED_PROVIDERS),
        }));
    };
    SharedModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                    ],
                    exports: [],
                    declarations: [],
                },] }
    ];
    return SharedModule;
}());
export { SharedModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B4YXBoaXJhL3NoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7QUFFbkUsTUFBTSxLQUFPLGdCQUFnQixHQUFHO0lBQzlCLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUM7Q0FDdEQ7QUFFRDtJQUFBO0lBaUJBLENBQUM7Ozs7SUFSUSxvQkFBTzs7O0lBQWQ7UUFDRSxPQUFPLG1CQUFxQjtZQUMxQixRQUFRLEVBQUUsWUFBWTtZQUN0QixTQUFTLG1CQUNKLGdCQUFnQixDQUNwQjtTQUNGLEVBQUEsQ0FBQztJQUNKLENBQUM7O2dCQWhCRixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7cUJBQ2I7b0JBQ0QsT0FBTyxFQUFFLEVBQUU7b0JBQ1gsWUFBWSxFQUFFLEVBQUU7aUJBQ2pCOztJQVdELG1CQUFDO0NBQUEsQUFqQkQsSUFpQkM7U0FWWSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIVFRQX1NFUlZJQ0UgfSBmcm9tICcuL3Byb3ZpZGVycy9odHRwLnByb3ZpZGVyJztcbmltcG9ydCB7IEh0dHBDb21tb25TZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9odHRwLWNvbW1vbi5zZXJ2aWNlJztcblxuZXhwb3J0IGNvbnN0IFNIQVJFRF9QUk9WSURFUlMgPSBbXG4gIHsgcHJvdmlkZTogSFRUUF9TRVJWSUNFLCB1c2VDbGFzczogSHR0cENvbW1vblNlcnZpY2V9LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgXSxcbiAgZXhwb3J0czogW10sXG4gIGRlY2xhcmF0aW9uczogW10sXG59KVxuZXhwb3J0IGNsYXNzIFNoYXJlZE1vZHVsZSB7XG5cbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIDxNb2R1bGVXaXRoUHJvdmlkZXJzPntcbiAgICAgIG5nTW9kdWxlOiBTaGFyZWRNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgLi4uU0hBUkVEX1BST1ZJREVSUyxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl19