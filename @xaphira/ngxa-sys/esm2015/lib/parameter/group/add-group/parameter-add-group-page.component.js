/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Injector } from '@angular/core';
import { BaseFormComponent } from '@xaphira/ngxa-common';
import { Router } from '@angular/router';
import { ResponseCode } from '@xaphira/shared';
import { takeUntil } from 'rxjs/operators';
export class ParameterAddGroupPageComponent extends BaseFormComponent {
    /**
     * @param {?} injector
     * @param {?} router
     */
    constructor(injector, router) {
        super(injector, {
            'parameterGroupCode': [],
            'parameterGroupName': [],
        });
        this.injector = injector;
        this.router = router;
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @return {?}
     */
    ngOnDestroy() { }
    /**
     * @return {?}
     */
    onReset() {
        this.router.navigate(['/app/sysconf/parameter']);
    }
    /**
     * @return {?}
     */
    onSubmit() {
        ((/** @type {?} */ (super.onSubmit(this.formGroup.value, 'master', 'post-parameter-group'))))
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @param {?} response
         * @return {?}
         */
        response => {
            if (response.respStatusCode === ResponseCode.OK_SCR009.toString()) {
                this.router.navigate(['/app/sysconf/parameter']);
            }
        }));
    }
}
ParameterAddGroupPageComponent.decorators = [
    { type: Component, args: [{
                selector: 'xa-parameter-add-group-page',
                template: "<xa-page-outlet [header]=\"'Add Parameter Group'\">\n  <div class=\"row\">\n    <div class=\"col-md-12 col-lg-12 col-xxxl-6\">\n      <form [formGroup]=\"formGroup\">\n        <xa-input-text\n          [name]=\"'parameterGroupCode'\"\n          [label]=\"'Parameter Group Code'\"\n          [required]=\"true\"\n          formControlName=\"parameterGroupCode\">\n        </xa-input-text>\n        <xa-input-text\n          [name]=\"'parameterGroupName'\"\n          [label]=\"'Parameter Group Name'\"\n          [required]=\"true\"\n          formControlName=\"parameterGroupName\">\n        </xa-input-text>\n        <div class=\"form-group row\">\n          <div class=\"offset-sm-3 col-sm-9\">\n            <button\n              type=\"reset\"\n              status=\"danger\"\n              (click)=\"onReset()\"\n              class=\"reset-left\"\n              nbButton>\n              {{ 'Cancel' | translate}}\n            </button>\n            <button\n              type=\"submit\"\n              status=\"primary\"\n              (click)=\"onSubmit()\"\n              [disabled]=\"formGroup.invalid || formGroup.pristine || disabled\"\n              class=\"submit-right\"\n              nbButton>\n              {{ 'Add' | translate}}\n            </button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</xa-page-outlet>\n",
                styles: [".reset-left{margin-right:.25rem}.submit-right{margin-left:.25rem}"]
            }] }
];
/** @nocollapse */
ParameterAddGroupPageComponent.ctorParameters = () => [
    { type: Injector },
    { type: Router }
];
if (false) {
    /** @type {?} */
    ParameterAddGroupPageComponent.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    ParameterAddGroupPageComponent.prototype.router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyYW1ldGVyLWFkZC1ncm91cC1wYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B4YXBoaXJhL25neGEtc3lzLyIsInNvdXJjZXMiOlsibGliL3BhcmFtZXRlci9ncm91cC9hZGQtZ3JvdXAvcGFyYW1ldGVyLWFkZC1ncm91cC1wYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxRQUFRLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QyxPQUFPLEVBQW1CLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQU8zQyxNQUFNLE9BQU8sOEJBQStCLFNBQVEsaUJBQXNCOzs7OztJQUV4RSxZQUFtQixRQUFrQixFQUFVLE1BQWM7UUFDM0QsS0FBSyxDQUFDLFFBQVEsRUFDWjtZQUNFLG9CQUFvQixFQUFFLEVBQUU7WUFDeEIsb0JBQW9CLEVBQUUsRUFBRTtTQUN6QixDQUFDLENBQUM7UUFMWSxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQU03RCxDQUFDOzs7O0lBRUQsUUFBUSxLQUFVLENBQUM7Ozs7SUFFbkIsV0FBVyxLQUFVLENBQUM7Ozs7SUFFdEIsT0FBTztRQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sQ0FBQyxtQkFBQSxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxzQkFBc0IsQ0FBQyxFQUFnQyxDQUFDO2FBQ3JHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQzlCLFNBQVM7Ozs7UUFBQyxRQUFRLENBQUMsRUFBRTtZQUNwQixJQUFJLFFBQVEsQ0FBQyxjQUFjLEtBQUssWUFBWSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsRUFBRTtnQkFDakUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUM7YUFDbEQ7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7OztZQS9CRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDZCQUE2QjtnQkFFdkMsZzJDQUF3RDs7YUFDekQ7Ozs7WUFYMkIsUUFBUTtZQUUzQixNQUFNOzs7O0lBWUQsa0RBQXlCOzs7OztJQUFFLGdEQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3RvciwgT25EZXN0cm95LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJhc2VGb3JtQ29tcG9uZW50IH0gZnJvbSAnQHhhcGhpcmEvbmd4YS1jb21tb24nO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEFwaUJhc2VSZXNwb25zZSwgUmVzcG9uc2VDb2RlIH0gZnJvbSAnQHhhcGhpcmEvc2hhcmVkJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAneGEtcGFyYW1ldGVyLWFkZC1ncm91cC1wYWdlJyxcbiAgc3R5bGVVcmxzOiBbJy4vcGFyYW1ldGVyLWFkZC1ncm91cC1wYWdlLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9wYXJhbWV0ZXItYWRkLWdyb3VwLXBhZ2UuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBQYXJhbWV0ZXJBZGRHcm91cFBhZ2VDb21wb25lbnQgZXh0ZW5kcyBCYXNlRm9ybUNvbXBvbmVudDxhbnk+IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBpbmplY3RvcjogSW5qZWN0b3IsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcbiAgICBzdXBlcihpbmplY3RvcixcbiAgICAgIHtcbiAgICAgICAgJ3BhcmFtZXRlckdyb3VwQ29kZSc6IFtdLFxuICAgICAgICAncGFyYW1ldGVyR3JvdXBOYW1lJzogW10sXG4gICAgICB9KTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge31cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHt9XG5cbiAgb25SZXNldCgpOiB2b2lkIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9hcHAvc3lzY29uZi9wYXJhbWV0ZXInXSk7XG4gIH1cblxuICBvblN1Ym1pdCgpOiB2b2lkIHtcbiAgICAoc3VwZXIub25TdWJtaXQodGhpcy5mb3JtR3JvdXAudmFsdWUsICdtYXN0ZXInLCAncG9zdC1wYXJhbWV0ZXItZ3JvdXAnKSAgYXMgT2JzZXJ2YWJsZTxBcGlCYXNlUmVzcG9uc2U+KVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgLnN1YnNjcmliZShyZXNwb25zZSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5yZXNwU3RhdHVzQ29kZSA9PT0gUmVzcG9uc2VDb2RlLk9LX1NDUjAwOS50b1N0cmluZygpKSB7XG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvYXBwL3N5c2NvbmYvcGFyYW1ldGVyJ10pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG59XG4iXX0=