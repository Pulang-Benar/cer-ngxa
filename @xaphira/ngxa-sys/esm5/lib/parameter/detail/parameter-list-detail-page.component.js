/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Injector, ViewChild } from '@angular/core';
import { SelectionType } from '@swimlane/ngx-datatable';
import { Router } from '@angular/router';
import { BaseFilterComponent } from '@xaphira/ngxa-common';
import { ParameterService } from '../services/parameter.service';
import { ParameterGroupModel } from '../models/parameter.model';
import { ParameterEditGroupCollapseComponent } from '../group/edit-group/parameter-edit-group-collapse.component';
var ParameterListDetailPageComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ParameterListDetailPageComponent, _super);
    function ParameterListDetailPageComponent(injector, router, parameterService) {
        var _this = _super.call(this, injector, {
            'parameterCode': [],
        }, {
            'parameterGroupCode': [],
            'parameterGroupName': [],
        }) || this;
        _this.injector = injector;
        _this.router = router;
        _this.parameterService = parameterService;
        _this.selectionType = SelectionType.single;
        _this.columns = [
            { name: 'Parameter Code', prop: 'parameterCode', width: 350, frozenLeft: true },
            { name: 'Created', prop: 'createdBy' },
            { name: 'Created Date', prop: 'createdDate' },
            { name: 'Modified', prop: 'modifiedBy' },
            { name: 'Modified Date', prop: 'modifiedDate' },
            { name: 'Active', prop: 'active' },
        ];
        _this.parameterGroup = new ParameterGroupModel();
        _this.expanded = false;
        _this.apiPath = _this.api['master']['datatable-parameter'];
        _this.filters = [{ controlName: 'parameterCode', type: 'input' }];
        if (_this.parameterService.getParameterGroup()) {
            _this.parameterGroup = _this.parameterService.getParameterGroup();
            _this.keyword = {
                parameterGroupCode: _this.parameterGroup.parameterGroupCode,
            };
            _this.formGroup.get('parameterGroupCode').setValue(_this.parameterGroup.parameterGroupCode);
            _this.formGroup.get('parameterGroupName').setValue(_this.parameterGroup.parameterGroupName);
        }
        else {
            _this.keyword = {
                parameterGroupCode: null,
            };
            _this.router.navigate(['/app/sysconf/parameter']);
        }
        return _this;
    }
    /**
     * @return {?}
     */
    ParameterListDetailPageComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    ParameterListDetailPageComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} event
     * @return {?}
     */
    ParameterListDetailPageComponent.prototype.onAddGroup = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.parameterService.setParameter(null);
        this.router.navigate(['/app/sysconf/parameter/detail', 'add']);
    };
    /**
     * @param {?} data
     * @return {?}
     */
    ParameterListDetailPageComponent.prototype.onViewDetail = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        this.parameterService.setParameter({
            parameterGroupCode: data['parameterGroupCode'],
            parameterGroupName: data['parameterGroupName'],
            parameterCode: data['parameterCode'],
        });
        this.router.navigate(['/app/sysconf/parameter/detail', 'edit']);
    };
    /**
     * @return {?}
     */
    ParameterListDetailPageComponent.prototype.onReset = /**
     * @return {?}
     */
    function () {
        this.router.navigate(['/app/sysconf/parameter']);
    };
    /**
     * @return {?}
     */
    ParameterListDetailPageComponent.prototype.back = /**
     * @return {?}
     */
    function () {
        this.router.navigate(['/app/sysconf/parameter']);
        return false;
    };
    /**
     * @return {?}
     */
    ParameterListDetailPageComponent.prototype.doExpanded = /**
     * @return {?}
     */
    function () {
        this.collapse.toggle();
        this.expanded = !this.expanded;
    };
    /**
     * @return {?}
     */
    ParameterListDetailPageComponent.prototype.onSubmit = /**
     * @return {?}
     */
    function () {
        ((/** @type {?} */ (_super.prototype.onSubmit.call(this, this.formGroup.value, 'master', 'post-parameter-group'))));
    };
    ParameterListDetailPageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'xa-parameter-list-detail-page',
                    template: "<div class=\"row\">\n  <div class=\"col-lg-12\">\n    <nb-card>\n      <nb-card-header>\n        <nav class=\"navigation\">\n            <a href=\"#\" (click)=\"back()\" class=\"link back-link\" aria-label=\"Back\">\n                <nb-icon icon=\"arrow-back\"></nb-icon>\n            </a>\n            {{'Edit Parameter Group' | translate}}\n            <div class=\"link back-link parameter-expanded\">\n              <nb-icon\n                  [icon]=\"expanded ? 'arrow-upward-outline' : 'arrow-downward-outline'\"\n                  (click)=\"doExpanded()\">\n              </nb-icon>\n            </div>\n        </nav>\n      </nb-card-header>\n      <div xa-parameter-edit-group-collapse #collapseparameter>\n        <nb-card-body>\n          <div class=\"row\">\n            <div class=\"col-md-12 col-lg-12 col-xxxl-6\">\n              <form [formGroup]=\"formGroup\">\n                <xa-input-text\n                  [name]=\"'parameterGroupName'\"\n                  [label]=\"'Parameter Group Name'\"\n                  [required]=\"true\"\n                  formControlName=\"parameterGroupName\">\n                </xa-input-text>\n                <div class=\"form-group row\">\n                  <div class=\"offset-sm-3 col-sm-9\">\n                    <button\n                      type=\"reset\"\n                      status=\"danger\"\n                      (click)=\"onReset()\"\n                      class=\"reset-left\"\n                      nbButton>\n                      {{ 'Cancel' | translate}}\n                    </button>\n                    <button\n                      type=\"submit\"\n                      status=\"primary\"\n                      (click)=\"onSubmit()\"\n                      [disabled]=\"formGroup.invalid || formGroup.pristine || disabled\"\n                      class=\"submit-right\"\n                      nbButton>\n                      {{ 'Edit' | translate}}\n                    </button>\n                  </div>\n                </div>\n              </form>\n            </div>\n          </div>\n        </nb-card-body>\n      </div>\n    </nb-card>\n  </div>\n</div>\n\n<xa-page-outlet [url]=\"'/app/sysconf/parameter'\" [header]=\"'Parameter '+parameterGroup.parameterGroupName\">\n  <div class=\"row\">\n    <div class=\"col-md-12 col-lg-12 col-xxxl-6\">\n      <xa-datatable\n        [api]=\"apiPath\"\n        [formGroupFilter]=\"formGroupFilter\"\n        [filters]=\"filters\"\n        [delete]=\"false\"\n        [selectionType]=\"selectionType\"\n        (onFilter)=\"doFilterAdvanced($event)\"\n        (onAdd)=\"onAddGroup($event)\"\n        (onEdit)=\"onViewDetail($event)\"\n        [filterFn]=\"keyword\"\n        [columns]=\"columns\">\n        <form [formGroup]=\"formGroupFilter\">\n          <xa-input-text\n            [name]=\"'parameterCode'\"\n            [label]=\"'Parameter Code'\"\n            formControlName=\"parameterCode\">\n          </xa-input-text>\n        </form>\n      </xa-datatable>\n    </div>\n  </div>\n</xa-page-outlet>\n",
                    styles: [".reset-left{margin-right:.25rem}.submit-right{margin-left:.25rem}.parameter-expanded{position:absolute;right:0;padding:0 1.75rem;cursor:pointer}"]
                }] }
    ];
    /** @nocollapse */
    ParameterListDetailPageComponent.ctorParameters = function () { return [
        { type: Injector },
        { type: Router },
        { type: ParameterService }
    ]; };
    ParameterListDetailPageComponent.propDecorators = {
        collapse: [{ type: ViewChild, args: ['collapseparameter', { static: false },] }]
    };
    return ParameterListDetailPageComponent;
}(BaseFilterComponent));
export { ParameterListDetailPageComponent };
if (false) {
    /** @type {?} */
    ParameterListDetailPageComponent.prototype.apiPath;
    /** @type {?} */
    ParameterListDetailPageComponent.prototype.selectionType;
    /** @type {?} */
    ParameterListDetailPageComponent.prototype.columns;
    /** @type {?} */
    ParameterListDetailPageComponent.prototype.parameterGroup;
    /** @type {?} */
    ParameterListDetailPageComponent.prototype.expanded;
    /** @type {?} */
    ParameterListDetailPageComponent.prototype.collapse;
    /** @type {?} */
    ParameterListDetailPageComponent.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    ParameterListDetailPageComponent.prototype.router;
    /**
     * @type {?}
     * @private
     */
    ParameterListDetailPageComponent.prototype.parameterService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyYW1ldGVyLWxpc3QtZGV0YWlsLXBhZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHhhcGhpcmEvbmd4YS1zeXMvIiwic291cmNlcyI6WyJsaWIvcGFyYW1ldGVyL2RldGFpbC9wYXJhbWV0ZXItbGlzdC1kZXRhaWwtcGFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFFBQVEsRUFBYSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEYsT0FBTyxFQUFlLGFBQWEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNqRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUdsSDtJQUtzRCw0REFBd0I7SUFnQjVFLDBDQUFtQixRQUFrQixFQUFVLE1BQWMsRUFBVSxnQkFBa0M7UUFBekcsWUFDRSxrQkFBTSxRQUFRLEVBQUU7WUFDZCxlQUFlLEVBQUUsRUFBRTtTQUNwQixFQUFFO1lBQ0Qsb0JBQW9CLEVBQUUsRUFBRTtZQUN4QixvQkFBb0IsRUFBRSxFQUFFO1NBQ3pCLENBQUMsU0FnQkg7UUF0QmtCLGNBQVEsR0FBUixRQUFRLENBQVU7UUFBVSxZQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsc0JBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQWJsRyxtQkFBYSxHQUFrQixhQUFhLENBQUMsTUFBTSxDQUFDO1FBQ3BELGFBQU8sR0FBa0I7WUFDOUIsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUU7WUFDL0UsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7WUFDdEMsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUU7WUFDN0MsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUU7WUFDeEMsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUU7WUFDL0MsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUU7U0FDbkMsQ0FBQztRQUNLLG9CQUFjLEdBQXdCLElBQUksbUJBQW1CLEVBQUUsQ0FBQztRQUNoRSxjQUFRLEdBQVksS0FBSyxDQUFDO1FBVS9CLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQ3pELEtBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxFQUFFLFdBQVcsRUFBRSxlQUFlLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDakUsSUFBSSxLQUFJLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCLEVBQUUsRUFBRTtZQUM3QyxLQUFJLENBQUMsY0FBYyxHQUFHLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1lBQ2hFLEtBQUksQ0FBQyxPQUFPLEdBQUc7Z0JBQ2Isa0JBQWtCLEVBQUUsS0FBSSxDQUFDLGNBQWMsQ0FBQyxrQkFBa0I7YUFDM0QsQ0FBQztZQUNGLEtBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQUMsQ0FBQztZQUMxRixLQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsY0FBYyxDQUFDLGtCQUFrQixDQUFDLENBQUM7U0FDM0Y7YUFBTTtZQUNMLEtBQUksQ0FBQyxPQUFPLEdBQUc7Z0JBQ2Isa0JBQWtCLEVBQUUsSUFBSTthQUN6QixDQUFDO1lBQ0YsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUM7U0FDbEQ7O0lBQ0gsQ0FBQzs7OztJQUVELG1EQUFROzs7SUFBUjtJQUNBLENBQUM7Ozs7SUFFRCxzREFBVzs7O0lBQVgsY0FBcUIsQ0FBQzs7Ozs7SUFFdEIscURBQVU7Ozs7SUFBVixVQUFXLEtBQUs7UUFDZCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsK0JBQStCLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUNqRSxDQUFDOzs7OztJQUVELHVEQUFZOzs7O0lBQVosVUFBYSxJQUFJO1FBQ2YsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQztZQUNqQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsb0JBQW9CLENBQUM7WUFDOUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLG9CQUFvQixDQUFDO1lBQzlDLGFBQWEsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDO1NBQ3JDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsK0JBQStCLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNsRSxDQUFDOzs7O0lBRUQsa0RBQU87OztJQUFQO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUM7SUFDbkQsQ0FBQzs7OztJQUVELCtDQUFJOzs7SUFBSjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDO1FBQ2pELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7OztJQUVELHFEQUFVOzs7SUFBVjtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDakMsQ0FBQzs7OztJQUVELG1EQUFROzs7SUFBUjtRQUNFLENBQUMsbUJBQUEsaUJBQU0sUUFBUSxZQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxzQkFBc0IsQ0FBQyxFQUFnQyxDQUFDLENBQUM7SUFDM0csQ0FBQzs7Z0JBaEZGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsK0JBQStCO29CQUV6QyxvL0ZBQTBEOztpQkFDM0Q7Ozs7Z0JBZDJCLFFBQVE7Z0JBRTNCLE1BQU07Z0JBR04sZ0JBQWdCOzs7MkJBd0J0QixTQUFTLFNBQUMsbUJBQW1CLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDOztJQStEakQsdUNBQUM7Q0FBQSxBQWxGRCxDQUtzRCxtQkFBbUIsR0E2RXhFO1NBN0VZLGdDQUFnQzs7O0lBRTNDLG1EQUE4Qjs7SUFDOUIseURBQTJEOztJQUMzRCxtREFPRTs7SUFDRiwwREFBdUU7O0lBQ3ZFLG9EQUFpQzs7SUFDakMsb0RBQStGOztJQUVuRixvREFBeUI7Ozs7O0lBQUUsa0RBQXNCOzs7OztJQUFFLDREQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3RvciwgT25EZXN0cm95LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRhYmxlQ29sdW1uLCBTZWxlY3Rpb25UeXBlIH0gZnJvbSAnQHN3aW1sYW5lL25neC1kYXRhdGFibGUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEh0dHBCYXNlTW9kZWwsIEFwaUJhc2VSZXNwb25zZSB9IGZyb20gJ0B4YXBoaXJhL3NoYXJlZCc7XG5pbXBvcnQgeyBCYXNlRmlsdGVyQ29tcG9uZW50IH0gZnJvbSAnQHhhcGhpcmEvbmd4YS1jb21tb24nO1xuaW1wb3J0IHsgUGFyYW1ldGVyU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3BhcmFtZXRlci5zZXJ2aWNlJztcbmltcG9ydCB7IFBhcmFtZXRlckdyb3VwTW9kZWwgfSBmcm9tICcuLi9tb2RlbHMvcGFyYW1ldGVyLm1vZGVsJztcbmltcG9ydCB7IFBhcmFtZXRlckVkaXRHcm91cENvbGxhcHNlQ29tcG9uZW50IH0gZnJvbSAnLi4vZ3JvdXAvZWRpdC1ncm91cC9wYXJhbWV0ZXItZWRpdC1ncm91cC1jb2xsYXBzZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd4YS1wYXJhbWV0ZXItbGlzdC1kZXRhaWwtcGFnZScsXG4gIHN0eWxlVXJsczogWycuL3BhcmFtZXRlci1saXN0LWRldGFpbC1wYWdlLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9wYXJhbWV0ZXItbGlzdC1kZXRhaWwtcGFnZS5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFBhcmFtZXRlckxpc3REZXRhaWxQYWdlQ29tcG9uZW50IGV4dGVuZHMgQmFzZUZpbHRlckNvbXBvbmVudDxhbnk+IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gIHB1YmxpYyBhcGlQYXRoOiBIdHRwQmFzZU1vZGVsO1xuICBwdWJsaWMgc2VsZWN0aW9uVHlwZTogU2VsZWN0aW9uVHlwZSA9IFNlbGVjdGlvblR5cGUuc2luZ2xlO1xuICBwdWJsaWMgY29sdW1uczogVGFibGVDb2x1bW5bXSA9IFtcbiAgICB7IG5hbWU6ICdQYXJhbWV0ZXIgQ29kZScsIHByb3A6ICdwYXJhbWV0ZXJDb2RlJywgd2lkdGg6IDM1MCwgZnJvemVuTGVmdDogdHJ1ZSB9LFxuICAgIHsgbmFtZTogJ0NyZWF0ZWQnLCBwcm9wOiAnY3JlYXRlZEJ5JyB9LFxuICAgIHsgbmFtZTogJ0NyZWF0ZWQgRGF0ZScsIHByb3A6ICdjcmVhdGVkRGF0ZScgfSxcbiAgICB7IG5hbWU6ICdNb2RpZmllZCcsIHByb3A6ICdtb2RpZmllZEJ5JyB9LFxuICAgIHsgbmFtZTogJ01vZGlmaWVkIERhdGUnLCBwcm9wOiAnbW9kaWZpZWREYXRlJyB9LFxuICAgIHsgbmFtZTogJ0FjdGl2ZScsIHByb3A6ICdhY3RpdmUnIH0sXG4gIF07XG4gIHB1YmxpYyBwYXJhbWV0ZXJHcm91cDogUGFyYW1ldGVyR3JvdXBNb2RlbCA9IG5ldyBQYXJhbWV0ZXJHcm91cE1vZGVsKCk7XG4gIHB1YmxpYyBleHBhbmRlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBAVmlld0NoaWxkKCdjb2xsYXBzZXBhcmFtZXRlcicsIHtzdGF0aWM6IGZhbHNlfSkgY29sbGFwc2U6IFBhcmFtZXRlckVkaXRHcm91cENvbGxhcHNlQ29tcG9uZW50O1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBpbmplY3RvcjogSW5qZWN0b3IsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcGFyYW1ldGVyU2VydmljZTogUGFyYW1ldGVyU2VydmljZSkge1xuICAgIHN1cGVyKGluamVjdG9yLCB7XG4gICAgICAncGFyYW1ldGVyQ29kZSc6IFtdLFxuICAgIH0sIHtcbiAgICAgICdwYXJhbWV0ZXJHcm91cENvZGUnOiBbXSxcbiAgICAgICdwYXJhbWV0ZXJHcm91cE5hbWUnOiBbXSxcbiAgICB9KTtcbiAgICB0aGlzLmFwaVBhdGggPSB0aGlzLmFwaVsnbWFzdGVyJ11bJ2RhdGF0YWJsZS1wYXJhbWV0ZXInXTtcbiAgICB0aGlzLmZpbHRlcnMgPSBbeyBjb250cm9sTmFtZTogJ3BhcmFtZXRlckNvZGUnLCB0eXBlOiAnaW5wdXQnIH1dO1xuICAgIGlmICh0aGlzLnBhcmFtZXRlclNlcnZpY2UuZ2V0UGFyYW1ldGVyR3JvdXAoKSkge1xuICAgICAgdGhpcy5wYXJhbWV0ZXJHcm91cCA9IHRoaXMucGFyYW1ldGVyU2VydmljZS5nZXRQYXJhbWV0ZXJHcm91cCgpO1xuICAgICAgdGhpcy5rZXl3b3JkID0ge1xuICAgICAgICBwYXJhbWV0ZXJHcm91cENvZGU6IHRoaXMucGFyYW1ldGVyR3JvdXAucGFyYW1ldGVyR3JvdXBDb2RlLFxuICAgICAgfTtcbiAgICAgIHRoaXMuZm9ybUdyb3VwLmdldCgncGFyYW1ldGVyR3JvdXBDb2RlJykuc2V0VmFsdWUodGhpcy5wYXJhbWV0ZXJHcm91cC5wYXJhbWV0ZXJHcm91cENvZGUpO1xuICAgICAgdGhpcy5mb3JtR3JvdXAuZ2V0KCdwYXJhbWV0ZXJHcm91cE5hbWUnKS5zZXRWYWx1ZSh0aGlzLnBhcmFtZXRlckdyb3VwLnBhcmFtZXRlckdyb3VwTmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMua2V5d29yZCA9IHtcbiAgICAgICAgcGFyYW1ldGVyR3JvdXBDb2RlOiBudWxsLFxuICAgICAgfTtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2FwcC9zeXNjb25mL3BhcmFtZXRlciddKTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge31cblxuICBvbkFkZEdyb3VwKGV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5wYXJhbWV0ZXJTZXJ2aWNlLnNldFBhcmFtZXRlcihudWxsKTtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9hcHAvc3lzY29uZi9wYXJhbWV0ZXIvZGV0YWlsJywgJ2FkZCddKTtcbiAgfVxuXG4gIG9uVmlld0RldGFpbChkYXRhKTogdm9pZCB7XG4gICAgdGhpcy5wYXJhbWV0ZXJTZXJ2aWNlLnNldFBhcmFtZXRlcih7XG4gICAgICBwYXJhbWV0ZXJHcm91cENvZGU6IGRhdGFbJ3BhcmFtZXRlckdyb3VwQ29kZSddLFxuICAgICAgcGFyYW1ldGVyR3JvdXBOYW1lOiBkYXRhWydwYXJhbWV0ZXJHcm91cE5hbWUnXSxcbiAgICAgIHBhcmFtZXRlckNvZGU6IGRhdGFbJ3BhcmFtZXRlckNvZGUnXSxcbiAgICB9KTtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9hcHAvc3lzY29uZi9wYXJhbWV0ZXIvZGV0YWlsJywgJ2VkaXQnXSk7XG4gIH1cblxuICBvblJlc2V0KCk6IHZvaWQge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2FwcC9zeXNjb25mL3BhcmFtZXRlciddKTtcbiAgfVxuXG4gIGJhY2soKTogYm9vbGVhbiB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvYXBwL3N5c2NvbmYvcGFyYW1ldGVyJ10pO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGRvRXhwYW5kZWQoKTogdm9pZCB7XG4gICAgdGhpcy5jb2xsYXBzZS50b2dnbGUoKTtcbiAgICB0aGlzLmV4cGFuZGVkID0gIXRoaXMuZXhwYW5kZWQ7XG4gIH1cblxuICBvblN1Ym1pdCgpOiB2b2lkIHtcbiAgICAoc3VwZXIub25TdWJtaXQodGhpcy5mb3JtR3JvdXAudmFsdWUsICdtYXN0ZXInLCAncG9zdC1wYXJhbWV0ZXItZ3JvdXAnKSAgYXMgT2JzZXJ2YWJsZTxBcGlCYXNlUmVzcG9uc2U+KTtcbiAgfVxuXG59XG4iXX0=