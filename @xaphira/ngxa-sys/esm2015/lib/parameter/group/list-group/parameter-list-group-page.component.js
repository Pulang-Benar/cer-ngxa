/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { BaseFilterComponent } from '@xaphira/ngxa-common';
import { ParameterService } from '../../services/parameter.service';
export class ParameterListGroupPageComponent extends BaseFilterComponent {
    /**
     * @param {?} injector
     * @param {?} router
     * @param {?} parameterService
     * @param {?} dialogService
     */
    constructor(injector, router, parameterService, dialogService) {
        super(injector, {
            'parameterGroupCode': [],
            'parameterGroupName': [],
        });
        this.injector = injector;
        this.router = router;
        this.parameterService = parameterService;
        this.dialogService = dialogService;
        this.columns = [
            { name: 'Parameter Group Code', prop: 'parameterGroupCode', width: 220, frozenLeft: true },
            { name: 'Parameter Group Name', prop: 'parameterGroupName', width: 200, frozenLeft: true },
            { name: 'Created', prop: 'createdBy' },
            { name: 'Created Date', prop: 'createdDate' },
            { name: 'Modified', prop: 'modifiedBy' },
            { name: 'Modified Date', prop: 'modifiedDate' },
            { name: 'Active', prop: 'active' },
        ];
        this.reload = false;
        this.filters = [
            { controlName: 'parameterGroupCode', type: 'input' },
            { controlName: 'parameterGroupName', type: 'input' }
        ];
        this.apiPath = this.api['master']['datatable-parameter-group'];
        this.apiPathLocale = this.api['master']['all-locale'];
        this.apiPathDelete = this.api['master']['delete-parameter-group'];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.http.HTTP_AUTH(this.apiPathLocale).subscribe((/**
         * @param {?} value
         * @return {?}
         */
        value => {
            this.parameterService.setLocales(value);
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() { }
    /**
     * @return {?}
     */
    onAddGroup() {
        this.router.navigate(['/app/sysconf/parameter/group', 'add']);
    }
    /**
     * @param {?} data
     * @return {?}
     */
    onViewDetail(data) {
        this.parameterService.setParameterGroup({
            parameterGroupCode: data['parameterGroupCode'],
            parameterGroupName: data['parameterGroupName'],
        });
        this.router.navigate(['/app/sysconf/parameter/detail']);
    }
    /**
     * @param {?} data
     * @param {?} dialog
     * @return {?}
     */
    onDeleteGroup(data, dialog) {
        this.parameterGroupCodes = [];
        data.forEach((/**
         * @param {?} value
         * @return {?}
         */
        value => {
            this.parameterGroupCodes.push(value.parameterGroupCode);
        }));
        this.dialogService.open(dialog, { context: 'alert.delete' });
    }
    /**
     * @param {?} ref
     * @return {?}
     */
    onDelete(ref) {
        this.disabled = true;
        this.http.HTTP_AUTH(this.apiPathDelete, this.parameterGroupCodes).subscribe((/**
         * @param {?} success
         * @return {?}
         */
        (success) => {
            ref.close();
            this.disabled = false;
            this.reload = true;
            this.toastr.showI18n(success.respStatusMessage[success.respStatusCode], true);
        }), (/**
         * @param {?} error
         * @return {?}
         */
        (error) => {
            this.disabled = false;
            this.toastr.showI18n(error.respStatusMessage[error.respStatusCode], true, null, 'danger');
        }));
    }
}
ParameterListGroupPageComponent.decorators = [
    { type: Component, args: [{
                selector: 'xa-parameter-list-group-page',
                template: "<xa-page-outlet [header]=\"'Parameter Group'\">\n  <div class=\"row\">\n    <div class=\"col-md-12 col-lg-12 col-xxxl-6\">\n      <xa-datatable\n        [api]=\"apiPath\"\n        [formGroupFilter]=\"formGroupFilter\"\n        [filters]=\"filters\"\n        [reloadFn]=\"reload\"\n        (onAdd)=\"onAddGroup()\"\n        (onEdit)=\"onViewDetail($event)\"\n        (onDelete)=\"onDeleteGroup($event, dialogdelete)\"\n        [columns]=\"columns\">\n        <form [formGroup]=\"formGroupFilter\">\n          <xa-input-text\n            [name]=\"'parameterGroupCode'\"\n            [label]=\"'Parameter Group Code'\"\n            formControlName=\"parameterGroupCode\">\n          </xa-input-text>\n          <xa-input-text\n            [name]=\"'parameterGroupName'\"\n            [label]=\"'Parameter Group Name'\"\n            formControlName=\"parameterGroupName\">\n          </xa-input-text>\n        </form>\n      </xa-datatable>\n    </div>\n  </div>\n</xa-page-outlet>\n\n<ng-template #dialogdelete let-data let-ref=\"dialogRef\">\n  <nb-card accent=\"danger\">\n    <nb-card-header>{{ 'Warning' | translate}}</nb-card-header>\n    <nb-card-body>{{ data | translate}}</nb-card-body>\n    <nb-card-footer>\n      <div class=\"row\">\n        <button\n          type=\"reset\"\n          status=\"danger\"\n          (click)=\"ref.close()\"\n          class=\"reset-left\"\n          nbButton>\n          {{ 'Cancel' | translate}}\n        </button>\n        <button\n          type=\"submit\"\n          status=\"primary\"\n          (click)=\"onDelete(ref)\"\n          [disabled]=\"disabled\"\n          class=\"submit-right\"\n          nbButton>\n          {{ 'Delete' | translate}}\n        </button>\n      </div>\n    </nb-card-footer>\n  </nb-card>\n</ng-template>",
                styles: [".reset-left{margin-left:1rem;margin-right:.5rem}.submit-right{margin-left:.5rem}"]
            }] }
];
/** @nocollapse */
ParameterListGroupPageComponent.ctorParameters = () => [
    { type: Injector },
    { type: Router },
    { type: ParameterService },
    { type: NbDialogService }
];
if (false) {
    /** @type {?} */
    ParameterListGroupPageComponent.prototype.apiPath;
    /** @type {?} */
    ParameterListGroupPageComponent.prototype.apiPathLocale;
    /** @type {?} */
    ParameterListGroupPageComponent.prototype.apiPathDelete;
    /** @type {?} */
    ParameterListGroupPageComponent.prototype.columns;
    /** @type {?} */
    ParameterListGroupPageComponent.prototype.reload;
    /**
     * @type {?}
     * @private
     */
    ParameterListGroupPageComponent.prototype.parameterGroupCodes;
    /** @type {?} */
    ParameterListGroupPageComponent.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    ParameterListGroupPageComponent.prototype.router;
    /**
     * @type {?}
     * @private
     */
    ParameterListGroupPageComponent.prototype.parameterService;
    /**
     * @type {?}
     * @private
     */
    ParameterListGroupPageComponent.prototype.dialogService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyYW1ldGVyLWxpc3QtZ3JvdXAtcGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AeGFwaGlyYS9uZ3hhLXN5cy8iLCJzb3VyY2VzIjpbImxpYi9wYXJhbWV0ZXIvZ3JvdXAvbGlzdC1ncm91cC9wYXJhbWV0ZXItbGlzdC1ncm91cC1wYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxRQUFRLEVBQTBCLE1BQU0sZUFBZSxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QyxPQUFPLEVBQUUsZUFBZSxFQUFlLE1BQU0sZ0JBQWdCLENBQUM7QUFFOUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFPcEUsTUFBTSxPQUFPLCtCQUFnQyxTQUFRLG1CQUF3Qjs7Ozs7OztJQWlCM0UsWUFBbUIsUUFBa0IsRUFDM0IsTUFBYyxFQUNkLGdCQUFrQyxFQUNsQyxhQUE4QjtRQUN0QyxLQUFLLENBQUMsUUFBUSxFQUFFO1lBQ2Qsb0JBQW9CLEVBQUUsRUFBRTtZQUN4QixvQkFBb0IsRUFBRSxFQUFFO1NBQ3pCLENBQUMsQ0FBQztRQVBjLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDM0IsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsa0JBQWEsR0FBYixhQUFhLENBQWlCO1FBZmpDLFlBQU8sR0FBa0I7WUFDOUIsRUFBRSxJQUFJLEVBQUUsc0JBQXNCLEVBQUUsSUFBSSxFQUFFLG9CQUFvQixFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRTtZQUMxRixFQUFFLElBQUksRUFBRSxzQkFBc0IsRUFBRSxJQUFJLEVBQUUsb0JBQW9CLEVBQUUsS0FB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LENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNuQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2hGLENBQUM7Ozs7UUFDRCxDQUFDLEtBQXNCLEVBQUUsRUFBRTtZQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDNUYsQ0FBQyxFQUNGLENBQUM7SUFDSixDQUFDOzs7WUFsRkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw4QkFBOEI7Z0JBRXhDLGd3REFBeUQ7O2FBQzFEOzs7O1lBWjJCLFFBQVE7WUFDM0IsTUFBTTtZQUtOLGdCQUFnQjtZQUhoQixlQUFlOzs7O0lBWXRCLGtEQUE4Qjs7SUFDOUIsd0RBQW9DOztJQUNwQyx3REFBb0M7O0lBQ3BDLGtEQVFFOztJQUNGLGlEQUErQjs7Ozs7SUFDL0IsOERBQW1DOztJQUV2QixtREFBeUI7Ozs7O0lBQ25DLGlEQUFzQjs7Ozs7SUFDdEIsMkRBQTBDOzs7OztJQUMxQyx3REFBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0b3IsIE9uRGVzdHJveSwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBUYWJsZUNvbHVtbiB9IGZyb20gJ0Bzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlJztcbmltcG9ydCB7IE5iRGlhbG9nU2VydmljZSwgTmJEaWFsb2dSZWYgfSBmcm9tICdAbmVidWxhci90aGVtZSc7XG5pbXBvcnQgeyBIdHRwQmFzZU1vZGVsLCBBcGlCYXNlUmVzcG9uc2UgfSBmcm9tICdAeGFwaGlyYS9zaGFyZWQnO1xuaW1wb3J0IHsgQmFzZUZpbHRlckNvbXBvbmVudCB9IGZyb20gJ0B4YXBoaXJhL25neGEtY29tbW9uJztcbmltcG9ydCB7IFBhcmFtZXRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9wYXJhbWV0ZXIuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3hhLXBhcmFtZXRlci1saXN0LWdyb3VwLXBhZ2UnLFxuICBzdHlsZVVybHM6IFsnLi9wYXJhbWV0ZXItbGlzdC1ncm91cC1wYWdlLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9wYXJhbWV0ZXItbGlzdC1ncm91cC1wYWdlLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgUGFyYW1ldGVyTGlzdEdyb3VwUGFnZUNvbXBvbmVudCBleHRlbmRzIEJhc2VGaWx0ZXJDb21wb25lbnQ8YW55PiBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICBwdWJsaWMgYXBpUGF0aDogSHR0cEJhc2VNb2RlbDtcbiAgcHVibGljIGFwaVBhdGhMb2NhbGU6IEh0dHBCYXNlTW9kZWw7XG4gIHB1YmxpYyBhcGlQYXRoRGVsZXRlOiBIdHRwQmFzZU1vZGVsO1xuICBwdWJsaWMgY29sdW1uczogVGFibGVDb2x1bW5bXSA9IFtcbiAgICB7IG5hbWU6ICdQYXJhbWV0ZXIgR3JvdXAgQ29kZScsIHByb3A6ICdwYXJhbWV0ZXJHcm91cENvZGUnLCB3aWR0aDogMjIwLCBmcm96ZW5MZWZ0OiB0cnVlIH0sXG4gICAgeyBuYW1lOiAnUGFyYW1ldGVyIEdyb3VwIE5hbWUnLCBwcm9wOiAncGFyYW1ldGVyR3JvdXBOYW1lJywgd2lkdGg6IDIwMCwgZnJvemVuTGVmdDogdHJ1ZSB9LFxuICAgIHsgbmFtZTogJ0NyZWF0ZWQnLCBwcm9wOiAnY3JlYXRlZEJ5JyB9LFxuICAgIHsgbmFtZTogJ0NyZWF0ZWQgRGF0ZScsIHByb3A6ICdjcmVhdGVkRGF0ZScgfSxcbiAgICB7IG5hbWU6ICdNb2RpZmllZCcsIHByb3A6ICdtb2RpZmllZEJ5JyB9LFxuICAgIHsgbmFtZTogJ01vZGlmaWVkIERhdGUnLCBwcm9wOiAnbW9kaWZpZWREYXRlJyB9LFxuICAgIHsgbmFtZTogJ0FjdGl2ZScsIHByb3A6ICdhY3RpdmUnIH0sXG4gIF07XG4gIHB1YmxpYyByZWxvYWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBwYXJhbWV0ZXJHcm91cENvZGVzOiBhbnlbXTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBwYXJhbWV0ZXJTZXJ2aWNlOiBQYXJhbWV0ZXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgZGlhbG9nU2VydmljZTogTmJEaWFsb2dTZXJ2aWNlKSB7XG4gICAgc3VwZXIoaW5qZWN0b3IsIHtcbiAgICAgICdwYXJhbWV0ZXJHcm91cENvZGUnOiBbXSxcbiAgICAgICdwYXJhbWV0ZXJHcm91cE5hbWUnOiBbXSxcbiAgICB9KTtcbiAgICB0aGlzLmZpbHRlcnMgPSBbXG4gICAgICB7IGNvbnRyb2xOYW1lOiAncGFyYW1ldGVyR3JvdXBDb2RlJywgdHlwZTogJ2lucHV0JyB9LFxuICAgICAgeyBjb250cm9sTmFtZTogJ3BhcmFtZXRlckdyb3VwTmFtZScsIHR5cGU6ICdpbnB1dCcgfV07XG4gICAgdGhpcy5hcGlQYXRoID0gdGhpcy5hcGlbJ21hc3RlciddWydkYXRhdGFibGUtcGFyYW1ldGVyLWdyb3VwJ107XG4gICAgdGhpcy5hcGlQYXRoTG9jYWxlID0gdGhpcy5hcGlbJ21hc3RlciddWydhbGwtbG9jYWxlJ107XG4gICAgdGhpcy5hcGlQYXRoRGVsZXRlID0gdGhpcy5hcGlbJ21hc3RlciddWydkZWxldGUtcGFyYW1ldGVyLWdyb3VwJ107XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmh0dHAuSFRUUF9BVVRIKHRoaXMuYXBpUGF0aExvY2FsZSkuc3Vic2NyaWJlKHZhbHVlID0+IHtcbiAgICAgIHRoaXMucGFyYW1ldGVyU2VydmljZS5zZXRMb2NhbGVzKHZhbHVlKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge31cblxuICBvbkFkZEdyb3VwKCk6IHZvaWQge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2FwcC9zeXNjb25mL3BhcmFtZXRlci9ncm91cCcsICdhZGQnXSk7XG4gIH1cblxuICBvblZpZXdEZXRhaWwoZGF0YSk6IHZvaWQge1xuICAgIHRoaXMucGFyYW1ldGVyU2VydmljZS5zZXRQYXJhbWV0ZXJHcm91cCh7XG4gICAgICBwYXJhbWV0ZXJHcm91cENvZGU6IGRhdGFbJ3BhcmFtZXRlckdyb3VwQ29kZSddLFxuICAgICAgcGFyYW1ldGVyR3JvdXBOYW1lOiBkYXRhWydwYXJhbWV0ZXJHcm91cE5hbWUnXSxcbiAgICB9KTtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9hcHAvc3lzY29uZi9wYXJhbWV0ZXIvZGV0YWlsJ10pO1xuICB9XG5cbiAgb25EZWxldGVHcm91cChkYXRhLCBkaWFsb2c6IFRlbXBsYXRlUmVmPGFueT4pOiB2b2lkIHtcbiAgICB0aGlzLnBhcmFtZXRlckdyb3VwQ29kZXMgPSBbXTtcbiAgICBkYXRhLmZvckVhY2godmFsdWUgPT4ge1xuICAgICAgdGhpcy5wYXJhbWV0ZXJHcm91cENvZGVzLnB1c2godmFsdWUucGFyYW1ldGVyR3JvdXBDb2RlKTtcbiAgICB9KTtcbiAgICB0aGlzLmRpYWxvZ1NlcnZpY2Uub3BlbihcbiAgICAgIGRpYWxvZyxcbiAgICAgIHsgY29udGV4dDogJ2FsZXJ0LmRlbGV0ZScgfSk7XG4gIH1cblxuICBvbkRlbGV0ZShyZWY6IE5iRGlhbG9nUmVmPGFueT4pOiB2b2lkIHtcbiAgICB0aGlzLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB0aGlzLmh0dHAuSFRUUF9BVVRIKHRoaXMuYXBpUGF0aERlbGV0ZSwgdGhpcy5wYXJhbWV0ZXJHcm91cENvZGVzKS5zdWJzY3JpYmUoXG4gICAgICAoc3VjY2VzczogQXBpQmFzZVJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHJlZi5jbG9zZSgpO1xuICAgICAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMucmVsb2FkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy50b2FzdHIuc2hvd0kxOG4oc3VjY2Vzcy5yZXNwU3RhdHVzTWVzc2FnZVtzdWNjZXNzLnJlc3BTdGF0dXNDb2RlXSwgdHJ1ZSk7XG4gICAgICB9LFxuICAgICAgKGVycm9yOiBBcGlCYXNlUmVzcG9uc2UpID0+IHtcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnRvYXN0ci5zaG93STE4bihlcnJvci5yZXNwU3RhdHVzTWVzc2FnZVtlcnJvci5yZXNwU3RhdHVzQ29kZV0sIHRydWUsIG51bGwsICdkYW5nZXInKTtcbiAgICAgIH0sXG4gICAgKTtcbiAgfVxuXG59XG4iXX0=