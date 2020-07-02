/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { BaseFilterComponent } from '@xaphira/ngxa-common';
import { ParameterService } from '../../services/parameter.service';
var ParameterListGroupPageComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ParameterListGroupPageComponent, _super);
    function ParameterListGroupPageComponent(injector, router, parameterService, dialogService) {
        var _this = _super.call(this, injector, {
            'parameterGroupCode': [],
            'parameterGroupName': [],
        }) || this;
        _this.injector = injector;
        _this.router = router;
        _this.parameterService = parameterService;
        _this.dialogService = dialogService;
        _this.columns = [
            { name: 'Parameter Group Code', prop: 'parameterGroupCode', width: 220, frozenLeft: true },
            { name: 'Parameter Group Name', prop: 'parameterGroupName', width: 200, frozenLeft: true },
            { name: 'Created', prop: 'createdBy' },
            { name: 'Created Date', prop: 'createdDate' },
            { name: 'Modified', prop: 'modifiedBy' },
            { name: 'Modified Date', prop: 'modifiedDate' },
            { name: 'Active', prop: 'active' },
        ];
        _this.reload = false;
        _this.filters = [
            { controlName: 'parameterGroupCode', type: 'input' },
            { controlName: 'parameterGroupName', type: 'input' }
        ];
        _this.apiPath = _this.api['master']['datatable-parameter-group'];
        _this.apiPathLocale = _this.api['master']['all-locale'];
        _this.apiPathDelete = _this.api['master']['delete-parameter-group'];
        return _this;
    }
    /**
     * @return {?}
     */
    ParameterListGroupPageComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.http.HTTP_AUTH(this.apiPathLocale).subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            _this.parameterService.setLocales(value);
        }));
    };
    /**
     * @return {?}
     */
    ParameterListGroupPageComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    ParameterListGroupPageComponent.prototype.onAddGroup = /**
     * @return {?}
     */
    function () {
        this.router.navigate(['/app/sysconf/parameter/group', 'add']);
    };
    /**
     * @param {?} data
     * @return {?}
     */
    ParameterListGroupPageComponent.prototype.onViewDetail = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        this.parameterService.setParameterGroup({
            parameterGroupCode: data['parameterGroupCode'],
            parameterGroupName: data['parameterGroupName'],
        });
        this.router.navigate(['/app/sysconf/parameter/detail']);
    };
    /**
     * @param {?} data
     * @param {?} dialog
     * @return {?}
     */
    ParameterListGroupPageComponent.prototype.onDeleteGroup = /**
     * @param {?} data
     * @param {?} dialog
     * @return {?}
     */
    function (data, dialog) {
        var _this = this;
        this.parameterGroupCodes = [];
        data.forEach((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            _this.parameterGroupCodes.push(value.parameterGroupCode);
        }));
        this.dialogService.open(dialog, { context: 'alert.delete' });
    };
    /**
     * @param {?} ref
     * @return {?}
     */
    ParameterListGroupPageComponent.prototype.onDelete = /**
     * @param {?} ref
     * @return {?}
     */
    function (ref) {
        var _this = this;
        this.disabled = true;
        this.http.HTTP_AUTH(this.apiPathDelete, this.parameterGroupCodes).subscribe((/**
         * @param {?} success
         * @return {?}
         */
        function (success) {
            ref.close();
            _this.disabled = false;
            _this.reload = true;
            _this.toastr.showI18n(success.respStatusMessage[success.respStatusCode], true);
        }), (/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            _this.disabled = false;
            _this.toastr.showI18n(error.respStatusMessage[error.respStatusCode], true, null, 'danger');
        }));
    };
    ParameterListGroupPageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'xa-parameter-list-group-page',
                    template: "<xa-page-outlet [header]=\"'Parameter Group'\">\n  <div class=\"row\">\n    <div class=\"col-md-12 col-lg-12 col-xxxl-6\">\n      <xa-datatable\n        [api]=\"apiPath\"\n        [formGroupFilter]=\"formGroupFilter\"\n        [filters]=\"filters\"\n        [reloadFn]=\"reload\"\n        (onAdd)=\"onAddGroup()\"\n        (onEdit)=\"onViewDetail($event)\"\n        (onDelete)=\"onDeleteGroup($event, dialogdelete)\"\n        [columns]=\"columns\">\n        <form [formGroup]=\"formGroupFilter\">\n          <xa-input-text\n            [name]=\"'parameterGroupCode'\"\n            [label]=\"'Parameter Group Code'\"\n            formControlName=\"parameterGroupCode\">\n          </xa-input-text>\n          <xa-input-text\n            [name]=\"'parameterGroupName'\"\n            [label]=\"'Parameter Group Name'\"\n            formControlName=\"parameterGroupName\">\n          </xa-input-text>\n        </form>\n      </xa-datatable>\n    </div>\n  </div>\n</xa-page-outlet>\n\n<ng-template #dialogdelete let-data let-ref=\"dialogRef\">\n  <nb-card accent=\"danger\">\n    <nb-card-header>{{ 'Warning' | translate}}</nb-card-header>\n    <nb-card-body>{{ data | translate}}</nb-card-body>\n    <nb-card-footer>\n      <div class=\"row\">\n        <button\n          type=\"reset\"\n          status=\"danger\"\n          (click)=\"ref.close()\"\n          class=\"reset-left\"\n          nbButton>\n          {{ 'Cancel' | translate}}\n        </button>\n        <button\n          type=\"submit\"\n          status=\"primary\"\n          (click)=\"onDelete(ref)\"\n          [disabled]=\"disabled\"\n          class=\"submit-right\"\n          nbButton>\n          {{ 'Delete' | translate}}\n        </button>\n      </div>\n    </nb-card-footer>\n  </nb-card>\n</ng-template>",
                    styles: [".reset-left{margin-left:1rem;margin-right:.5rem}.submit-right{margin-left:.5rem}"]
                }] }
    ];
    /** @nocollapse */
    ParameterListGroupPageComponent.ctorParameters = function () { return [
        { type: Injector },
        { type: Router },
        { type: ParameterService },
        { type: NbDialogService }
    ]; };
    return ParameterListGroupPageComponent;
}(BaseFilterComponent));
export { ParameterListGroupPageComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyYW1ldGVyLWxpc3QtZ3JvdXAtcGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AeGFwaGlyYS9uZ3hhLXN5cy8iLCJzb3VyY2VzIjpbImxpYi9wYXJhbWV0ZXIvZ3JvdXAvbGlzdC1ncm91cC9wYXJhbWV0ZXItbGlzdC1ncm91cC1wYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsUUFBUSxFQUEwQixNQUFNLGVBQWUsQ0FBQztBQUNwRixPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFekMsT0FBTyxFQUFFLGVBQWUsRUFBZSxNQUFNLGdCQUFnQixDQUFDO0FBRTlELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzNELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBRXBFO0lBS3FELDJEQUF3QjtJQWlCM0UseUNBQW1CLFFBQWtCLEVBQzNCLE1BQWMsRUFDZCxnQkFBa0MsRUFDbEMsYUFBOEI7UUFIeEMsWUFJRSxrQkFBTSxRQUFRLEVBQUU7WUFDZCxvQkFBb0IsRUFBRSxFQUFFO1lBQ3hCLG9CQUFvQixFQUFFLEVBQUU7U0FDekIsQ0FBQyxTQU9IO1FBZGtCLGNBQVEsR0FBUixRQUFRLENBQVU7UUFDM0IsWUFBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLHNCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsbUJBQWEsR0FBYixhQUFhLENBQWlCO1FBZmpDLGFBQU8sR0FBa0I7WUFDOUIsRUFBRSxJQUFJLEVBQUUsc0JBQXNCLEVBQUUsSUFBSSxFQUFFLG9CQUFvQixFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRTtZQUMxRixFQUFFLElBQUksRUFBRSxzQkFBc0IsRUFBRSxJQUFJLEVBQUUsb0JBQW9CLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxV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QUFDO1lBQ1osS0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFDdEIsS0FBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDbkIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNoRixDQUFDOzs7O1FBQ0QsVUFBQyxLQUFzQjtZQUNyQixLQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUN0QixLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDNUYsQ0FBQyxFQUNGLENBQUM7SUFDSixDQUFDOztnQkFsRkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSw4QkFBOEI7b0JBRXhDLGd3REFBeUQ7O2lCQUMxRDs7OztnQkFaMkIsUUFBUTtnQkFDM0IsTUFBTTtnQkFLTixnQkFBZ0I7Z0JBSGhCLGVBQWU7O0lBeUZ4QixzQ0FBQztDQUFBLEFBcEZELENBS3FELG1CQUFtQixHQStFdkU7U0EvRVksK0JBQStCOzs7SUFFMUMsa0RBQThCOztJQUM5Qix3REFBb0M7O0lBQ3BDLHdEQUFvQzs7SUFDcEMsa0RBUUU7O0lBQ0YsaURBQStCOzs7OztJQUMvQiw4REFBbUM7O0lBRXZCLG1EQUF5Qjs7Ozs7SUFDbkMsaURBQXNCOzs7OztJQUN0QiwyREFBMEM7Ozs7O0lBQzFDLHdEQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3RvciwgT25EZXN0cm95LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFRhYmxlQ29sdW1uIH0gZnJvbSAnQHN3aW1sYW5lL25neC1kYXRhdGFibGUnO1xuaW1wb3J0IHsgTmJEaWFsb2dTZXJ2aWNlLCBOYkRpYWxvZ1JlZiB9IGZyb20gJ0BuZWJ1bGFyL3RoZW1lJztcbmltcG9ydCB7IEh0dHBCYXNlTW9kZWwsIEFwaUJhc2VSZXNwb25zZSB9IGZyb20gJ0B4YXBoaXJhL3NoYXJlZCc7XG5pbXBvcnQgeyBCYXNlRmlsdGVyQ29tcG9uZW50IH0gZnJvbSAnQHhhcGhpcmEvbmd4YS1jb21tb24nO1xuaW1wb3J0IHsgUGFyYW1ldGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3BhcmFtZXRlci5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAneGEtcGFyYW1ldGVyLWxpc3QtZ3JvdXAtcGFnZScsXG4gIHN0eWxlVXJsczogWycuL3BhcmFtZXRlci1saXN0LWdyb3VwLXBhZ2UuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL3BhcmFtZXRlci1saXN0LWdyb3VwLXBhZ2UuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBQYXJhbWV0ZXJMaXN0R3JvdXBQYWdlQ29tcG9uZW50IGV4dGVuZHMgQmFzZUZpbHRlckNvbXBvbmVudDxhbnk+IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gIHB1YmxpYyBhcGlQYXRoOiBIdHRwQmFzZU1vZGVsO1xuICBwdWJsaWMgYXBpUGF0aExvY2FsZTogSHR0cEJhc2VNb2RlbDtcbiAgcHVibGljIGFwaVBhdGhEZWxldGU6IEh0dHBCYXNlTW9kZWw7XG4gIHB1YmxpYyBjb2x1bW5zOiBUYWJsZUNvbHVtbltdID0gW1xuICAgIHsgbmFtZTogJ1BhcmFtZXRlciBHcm91cCBDb2RlJywgcHJvcDogJ3BhcmFtZXRlckdyb3VwQ29kZScsIHdpZHRoOiAyMjAsIGZyb3plbkxlZnQ6IHRydWUgfSxcbiAgICB7IG5hbWU6ICdQYXJhbWV0ZXIgR3JvdXAgTmFtZScsIHByb3A6ICdwYXJhbWV0ZXJHcm91cE5hbWUnLCB3aWR0aDogMjAwLCBmcm96ZW5MZWZ0OiB0cnVlIH0sXG4gICAgeyBuYW1lOiAnQ3JlYXRlZCcsIHByb3A6ICdjcmVhdGVkQnknIH0sXG4gICAgeyBuYW1lOiAnQ3JlYXRlZCBEYXRlJywgcHJvcDogJ2NyZWF0ZWREYXRlJyB9LFxuICAgIHsgbmFtZTogJ01vZGlmaWVkJywgcHJvcDogJ21vZGlmaWVkQnknIH0sXG4gICAgeyBuYW1lOiAnTW9kaWZpZWQgRGF0ZScsIHByb3A6ICdtb2RpZmllZERhdGUnIH0sXG4gICAgeyBuYW1lOiAnQWN0aXZlJywgcHJvcDogJ2FjdGl2ZScgfSxcbiAgXTtcbiAgcHVibGljIHJlbG9hZDogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIHBhcmFtZXRlckdyb3VwQ29kZXM6IGFueVtdO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIHBhcmFtZXRlclNlcnZpY2U6IFBhcmFtZXRlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBkaWFsb2dTZXJ2aWNlOiBOYkRpYWxvZ1NlcnZpY2UpIHtcbiAgICBzdXBlcihpbmplY3Rvciwge1xuICAgICAgJ3BhcmFtZXRlckdyb3VwQ29kZSc6IFtdLFxuICAgICAgJ3BhcmFtZXRlckdyb3VwTmFtZSc6IFtdLFxuICAgIH0pO1xuICAgIHRoaXMuZmlsdGVycyA9IFtcbiAgICAgIHsgY29udHJvbE5hbWU6ICdwYXJhbWV0ZXJHcm91cENvZGUnLCB0eXBlOiAnaW5wdXQnIH0sXG4gICAgICB7IGNvbnRyb2xOYW1lOiAncGFyYW1ldGVyR3JvdXBOYW1lJywgdHlwZTogJ2lucHV0JyB9XTtcbiAgICB0aGlzLmFwaVBhdGggPSB0aGlzLmFwaVsnbWFzdGVyJ11bJ2RhdGF0YWJsZS1wYXJhbWV0ZXItZ3JvdXAnXTtcbiAgICB0aGlzLmFwaVBhdGhMb2NhbGUgPSB0aGlzLmFwaVsnbWFzdGVyJ11bJ2FsbC1sb2NhbGUnXTtcbiAgICB0aGlzLmFwaVBhdGhEZWxldGUgPSB0aGlzLmFwaVsnbWFzdGVyJ11bJ2RlbGV0ZS1wYXJhbWV0ZXItZ3JvdXAnXTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaHR0cC5IVFRQX0FVVEgodGhpcy5hcGlQYXRoTG9jYWxlKS5zdWJzY3JpYmUodmFsdWUgPT4ge1xuICAgICAgdGhpcy5wYXJhbWV0ZXJTZXJ2aWNlLnNldExvY2FsZXModmFsdWUpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7fVxuXG4gIG9uQWRkR3JvdXAoKTogdm9pZCB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvYXBwL3N5c2NvbmYvcGFyYW1ldGVyL2dyb3VwJywgJ2FkZCddKTtcbiAgfVxuXG4gIG9uVmlld0RldGFpbChkYXRhKTogdm9pZCB7XG4gICAgdGhpcy5wYXJhbWV0ZXJTZXJ2aWNlLnNldFBhcmFtZXRlckdyb3VwKHtcbiAgICAgIHBhcmFtZXRlckdyb3VwQ29kZTogZGF0YVsncGFyYW1ldGVyR3JvdXBDb2RlJ10sXG4gICAgICBwYXJhbWV0ZXJHcm91cE5hbWU6IGRhdGFbJ3BhcmFtZXRlckdyb3VwTmFtZSddLFxuICAgIH0pO1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2FwcC9zeXNjb25mL3BhcmFtZXRlci9kZXRhaWwnXSk7XG4gIH1cblxuICBvbkRlbGV0ZUdyb3VwKGRhdGEsIGRpYWxvZzogVGVtcGxhdGVSZWY8YW55Pik6IHZvaWQge1xuICAgIHRoaXMucGFyYW1ldGVyR3JvdXBDb2RlcyA9IFtdO1xuICAgIGRhdGEuZm9yRWFjaCh2YWx1ZSA9PiB7XG4gICAgICB0aGlzLnBhcmFtZXRlckdyb3VwQ29kZXMucHVzaCh2YWx1ZS5wYXJhbWV0ZXJHcm91cENvZGUpO1xuICAgIH0pO1xuICAgIHRoaXMuZGlhbG9nU2VydmljZS5vcGVuKFxuICAgICAgZGlhbG9nLFxuICAgICAgeyBjb250ZXh0OiAnYWxlcnQuZGVsZXRlJyB9KTtcbiAgfVxuXG4gIG9uRGVsZXRlKHJlZjogTmJEaWFsb2dSZWY8YW55Pik6IHZvaWQge1xuICAgIHRoaXMuZGlzYWJsZWQgPSB0cnVlO1xuICAgIHRoaXMuaHR0cC5IVFRQX0FVVEgodGhpcy5hcGlQYXRoRGVsZXRlLCB0aGlzLnBhcmFtZXRlckdyb3VwQ29kZXMpLnN1YnNjcmliZShcbiAgICAgIChzdWNjZXNzOiBBcGlCYXNlUmVzcG9uc2UpID0+IHtcbiAgICAgICAgcmVmLmNsb3NlKCk7XG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yZWxvYWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnRvYXN0ci5zaG93STE4bihzdWNjZXNzLnJlc3BTdGF0dXNNZXNzYWdlW3N1Y2Nlc3MucmVzcFN0YXR1c0NvZGVdLCB0cnVlKTtcbiAgICAgIH0sXG4gICAgICAoZXJyb3I6IEFwaUJhc2VSZXNwb25zZSkgPT4ge1xuICAgICAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMudG9hc3RyLnNob3dJMThuKGVycm9yLnJlc3BTdGF0dXNNZXNzYWdlW2Vycm9yLnJlc3BTdGF0dXNDb2RlXSwgdHJ1ZSwgbnVsbCwgJ2RhbmdlcicpO1xuICAgICAgfSxcbiAgICApO1xuICB9XG5cbn1cbiJdfQ==