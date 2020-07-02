/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Injector } from '@angular/core';
import { BaseFormComponent } from '@xaphira/ngxa-common';
import { Router } from '@angular/router';
import { ResponseCode } from '@xaphira/shared';
import { takeUntil } from 'rxjs/operators';
var ParameterAddGroupPageComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ParameterAddGroupPageComponent, _super);
    function ParameterAddGroupPageComponent(injector, router) {
        var _this = _super.call(this, injector, {
            'parameterGroupCode': [],
            'parameterGroupName': [],
        }) || this;
        _this.injector = injector;
        _this.router = router;
        return _this;
    }
    /**
     * @return {?}
     */
    ParameterAddGroupPageComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    ParameterAddGroupPageComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    ParameterAddGroupPageComponent.prototype.onReset = /**
     * @return {?}
     */
    function () {
        this.router.navigate(['/app/sysconf/parameter']);
    };
    /**
     * @return {?}
     */
    ParameterAddGroupPageComponent.prototype.onSubmit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        ((/** @type {?} */ (_super.prototype.onSubmit.call(this, this.formGroup.value, 'master', 'post-parameter-group'))))
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            if (response.respStatusCode === ResponseCode.OK_SCR009.toString()) {
                _this.router.navigate(['/app/sysconf/parameter']);
            }
        }));
    };
    ParameterAddGroupPageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'xa-parameter-add-group-page',
                    template: "<xa-page-outlet [header]=\"'Add Parameter Group'\">\n  <div class=\"row\">\n    <div class=\"col-md-12 col-lg-12 col-xxxl-6\">\n      <form [formGroup]=\"formGroup\">\n        <xa-input-text\n          [name]=\"'parameterGroupCode'\"\n          [label]=\"'Parameter Group Code'\"\n          [required]=\"true\"\n          formControlName=\"parameterGroupCode\">\n        </xa-input-text>\n        <xa-input-text\n          [name]=\"'parameterGroupName'\"\n          [label]=\"'Parameter Group Name'\"\n          [required]=\"true\"\n          formControlName=\"parameterGroupName\">\n        </xa-input-text>\n        <div class=\"form-group row\">\n          <div class=\"offset-sm-3 col-sm-9\">\n            <button\n              type=\"reset\"\n              status=\"danger\"\n              (click)=\"onReset()\"\n              class=\"reset-left\"\n              nbButton>\n              {{ 'Cancel' | translate}}\n            </button>\n            <button\n              type=\"submit\"\n              status=\"primary\"\n              (click)=\"onSubmit()\"\n              [disabled]=\"formGroup.invalid || formGroup.pristine || disabled\"\n              class=\"submit-right\"\n              nbButton>\n              {{ 'Add' | translate}}\n            </button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</xa-page-outlet>\n",
                    styles: [".reset-left{margin-right:.25rem}.submit-right{margin-left:.25rem}"]
                }] }
    ];
    /** @nocollapse */
    ParameterAddGroupPageComponent.ctorParameters = function () { return [
        { type: Injector },
        { type: Router }
    ]; };
    return ParameterAddGroupPageComponent;
}(BaseFormComponent));
export { ParameterAddGroupPageComponent };
if (false) {
    /** @type {?} */
    ParameterAddGroupPageComponent.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    ParameterAddGroupPageComponent.prototype.router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyYW1ldGVyLWFkZC1ncm91cC1wYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B4YXBoaXJhL25neGEtc3lzLyIsInNvdXJjZXMiOlsibGliL3BhcmFtZXRlci9ncm91cC9hZGQtZ3JvdXAvcGFyYW1ldGVyLWFkZC1ncm91cC1wYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsUUFBUSxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFekMsT0FBTyxFQUFtQixZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0M7SUFLb0QsMERBQXNCO0lBRXhFLHdDQUFtQixRQUFrQixFQUFVLE1BQWM7UUFBN0QsWUFDRSxrQkFBTSxRQUFRLEVBQ1o7WUFDRSxvQkFBb0IsRUFBRSxFQUFFO1lBQ3hCLG9CQUFvQixFQUFFLEVBQUU7U0FDekIsQ0FBQyxTQUNMO1FBTmtCLGNBQVEsR0FBUixRQUFRLENBQVU7UUFBVSxZQUFNLEdBQU4sTUFBTSxDQUFROztJQU03RCxDQUFDOzs7O0lBRUQsaURBQVE7OztJQUFSLGNBQWtCLENBQUM7Ozs7SUFFbkIsb0RBQVc7OztJQUFYLGNBQXFCLENBQUM7Ozs7SUFFdEIsZ0RBQU87OztJQUFQO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUM7SUFDbkQsQ0FBQzs7OztJQUVELGlEQUFROzs7SUFBUjtRQUFBLGlCQVFDO1FBUEMsQ0FBQyxtQkFBQSxpQkFBTSxRQUFRLFlBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLHNCQUFzQixDQUFDLEVBQWdDLENBQUM7YUFDckcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDOUIsU0FBUzs7OztRQUFDLFVBQUEsUUFBUTtZQUNqQixJQUFJLFFBQVEsQ0FBQyxjQUFjLEtBQUssWUFBWSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsRUFBRTtnQkFDakUsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUM7YUFDbEQ7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7O2dCQS9CRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDZCQUE2QjtvQkFFdkMsZzJDQUF3RDs7aUJBQ3pEOzs7O2dCQVgyQixRQUFRO2dCQUUzQixNQUFNOztJQXNDZixxQ0FBQztDQUFBLEFBakNELENBS29ELGlCQUFpQixHQTRCcEU7U0E1QlksOEJBQThCOzs7SUFFN0Isa0RBQXlCOzs7OztJQUFFLGdEQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3RvciwgT25EZXN0cm95LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJhc2VGb3JtQ29tcG9uZW50IH0gZnJvbSAnQHhhcGhpcmEvbmd4YS1jb21tb24nO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEFwaUJhc2VSZXNwb25zZSwgUmVzcG9uc2VDb2RlIH0gZnJvbSAnQHhhcGhpcmEvc2hhcmVkJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAneGEtcGFyYW1ldGVyLWFkZC1ncm91cC1wYWdlJyxcbiAgc3R5bGVVcmxzOiBbJy4vcGFyYW1ldGVyLWFkZC1ncm91cC1wYWdlLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9wYXJhbWV0ZXItYWRkLWdyb3VwLXBhZ2UuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBQYXJhbWV0ZXJBZGRHcm91cFBhZ2VDb21wb25lbnQgZXh0ZW5kcyBCYXNlRm9ybUNvbXBvbmVudDxhbnk+IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBpbmplY3RvcjogSW5qZWN0b3IsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcbiAgICBzdXBlcihpbmplY3RvcixcbiAgICAgIHtcbiAgICAgICAgJ3BhcmFtZXRlckdyb3VwQ29kZSc6IFtdLFxuICAgICAgICAncGFyYW1ldGVyR3JvdXBOYW1lJzogW10sXG4gICAgICB9KTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge31cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHt9XG5cbiAgb25SZXNldCgpOiB2b2lkIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9hcHAvc3lzY29uZi9wYXJhbWV0ZXInXSk7XG4gIH1cblxuICBvblN1Ym1pdCgpOiB2b2lkIHtcbiAgICAoc3VwZXIub25TdWJtaXQodGhpcy5mb3JtR3JvdXAudmFsdWUsICdtYXN0ZXInLCAncG9zdC1wYXJhbWV0ZXItZ3JvdXAnKSAgYXMgT2JzZXJ2YWJsZTxBcGlCYXNlUmVzcG9uc2U+KVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgLnN1YnNjcmliZShyZXNwb25zZSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5yZXNwU3RhdHVzQ29kZSA9PT0gUmVzcG9uc2VDb2RlLk9LX1NDUjAwOS50b1N0cmluZygpKSB7XG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvYXBwL3N5c2NvbmYvcGFyYW1ldGVyJ10pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG59XG4iXX0=