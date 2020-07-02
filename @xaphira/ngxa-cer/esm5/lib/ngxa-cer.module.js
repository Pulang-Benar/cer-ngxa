/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PANIC_INDEXED_DB, PANIC } from '@xaphira/shared';
import { PanicIndexedDBService } from './storage/panic-indexeddb.service';
import { PanicService } from './services/panic.service';
/** @type {?} */
var CER_PROVIDERS = [
    { provide: PANIC_INDEXED_DB, useClass: PanicIndexedDBService },
    { provide: PANIC, useClass: PanicService },
    PanicIndexedDBService,
    PanicService,
];
var NgxaCerModule = /** @class */ (function () {
    function NgxaCerModule() {
    }
    /**
     * @return {?}
     */
    NgxaCerModule.forRoot = /**
     * @return {?}
     */
    function () {
        return (/** @type {?} */ ({
            ngModule: NgxaCerModule,
            providers: tslib_1.__spread(CER_PROVIDERS),
        }));
    };
    NgxaCerModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                    ],
                    exports: [],
                    declarations: [],
                },] }
    ];
    return NgxaCerModule;
}());
export { NgxaCerModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4YS1jZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHhhcGhpcmEvbmd4YS1jZXIvIiwic291cmNlcyI6WyJsaWIvbmd4YS1jZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxLQUFLLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7O0lBRWxELGFBQWEsR0FBRztJQUNwQixFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUscUJBQXFCLEVBQUU7SUFDOUQsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUU7SUFDMUMscUJBQXFCO0lBQ3JCLFlBQVk7Q0FDYjtBQUVEO0lBQUE7SUFrQkEsQ0FBQzs7OztJQVRRLHFCQUFPOzs7SUFBZDtRQUNFLE9BQU8sbUJBQXFCO1lBQzFCLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFNBQVMsbUJBQ0osYUFBYSxDQUNqQjtTQUNGLEVBQUEsQ0FBQztJQUNKLENBQUM7O2dCQWhCRixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7cUJBQ2I7b0JBQ0QsT0FBTyxFQUFFLEVBQUU7b0JBQ1gsWUFBWSxFQUFFLEVBQUU7aUJBQ2pCOztJQVlELG9CQUFDO0NBQUEsQUFsQkQsSUFrQkM7U0FYWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBQQU5JQ19JTkRFWEVEX0RCLCBQQU5JQyB9IGZyb20gJ0B4YXBoaXJhL3NoYXJlZCc7XG5pbXBvcnQgeyBQYW5pY0luZGV4ZWREQlNlcnZpY2UgfSBmcm9tICcuL3N0b3JhZ2UvcGFuaWMtaW5kZXhlZGRiLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGFuaWNTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9wYW5pYy5zZXJ2aWNlJztcblxuY29uc3QgQ0VSX1BST1ZJREVSUyA9IFtcbiAgeyBwcm92aWRlOiBQQU5JQ19JTkRFWEVEX0RCLCB1c2VDbGFzczogUGFuaWNJbmRleGVkREJTZXJ2aWNlIH0sXG4gIHsgcHJvdmlkZTogUEFOSUMsIHVzZUNsYXNzOiBQYW5pY1NlcnZpY2UgfSxcbiAgUGFuaWNJbmRleGVkREJTZXJ2aWNlLFxuICBQYW5pY1NlcnZpY2UsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICBdLFxuICBleHBvcnRzOiBbXSxcbiAgZGVjbGFyYXRpb25zOiBbXSxcbn0pXG5leHBvcnQgY2xhc3MgTmd4YUNlck1vZHVsZSB7XG5cbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIDxNb2R1bGVXaXRoUHJvdmlkZXJzPntcbiAgICAgIG5nTW9kdWxlOiBOZ3hhQ2VyTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIC4uLkNFUl9QUk9WSURFUlMsXG4gICAgICBdLFxuICAgIH07XG4gIH1cblxufVxuIl19