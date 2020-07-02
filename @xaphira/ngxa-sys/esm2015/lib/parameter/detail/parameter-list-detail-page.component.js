/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Injector, ViewChild } from '@angular/core';
import { SelectionType } from '@swimlane/ngx-datatable';
import { Router } from '@angular/router';
import { BaseFilterComponent } from '@xaphira/ngxa-common';
import { ParameterService } from '../services/parameter.service';
import { ParameterGroupModel } from '../models/parameter.model';
import { ParameterEditGroupCollapseComponent } from '../group/edit-group/parameter-edit-group-collapse.component';
export class ParameterListDetailPageComponent extends BaseFilterComponent {
    /**
     * @param {?} injector
     * @param {?} router
     * @param {?} parameterService
     */
    constructor(injector, router, parameterService) {
        super(injector, {
            'parameterCode': [],
        }, {
            'parameterGroupCode': [],
            'parameterGroupName': [],
        });
        this.injector = injector;
        this.router = router;
        this.parameterService = parameterService;
        this.selectionType = SelectionType.single;
        this.columns = [
            { name: 'Parameter Code', prop: 'parameterCode', width: 350, frozenLeft: true },
            { name: 'Created', prop: 'createdBy' },
            { name: 'Created Date', prop: 'createdDate' },
            { name: 'Modified', prop: 'modifiedBy' },
            { name: 'Modified Date', prop: 'modifiedDate' },
            { name: 'Active', prop: 'active' },
        ];
        this.parameterGroup = new ParameterGroupModel();
        this.expanded = false;
        this.apiPath = this.api['master']['datatable-parameter'];
        this.filters = [{ controlName: 'parameterCode', type: 'input' }];
        if (this.parameterService.getParameterGroup()) {
            this.parameterGroup = this.parameterService.getParameterGroup();
            this.keyword = {
                parameterGroupCode: this.parameterGroup.parameterGroupCode,
            };
            this.formGroup.get('parameterGroupCode').setValue(this.parameterGroup.parameterGroupCode);
            this.formGroup.get('parameterGroupName').setValue(this.parameterGroup.parameterGroupName);
        }
        else {
            this.keyword = {
                parameterGroupCode: null,
            };
            this.router.navigate(['/app/sysconf/parameter']);
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngOnDestroy() { }
    /**
     * @param {?} event
     * @return {?}
     */
    onAddGroup(event) {
        this.parameterService.setParameter(null);
        this.router.navigate(['/app/sysconf/parameter/detail', 'add']);
    }
    /**
     * @param {?} data
     * @return {?}
     */
    onViewDetail(data) {
        this.parameterService.setParameter({
            parameterGroupCode: data['parameterGroupCode'],
            parameterGroupName: data['parameterGroupName'],
            parameterCode: data['parameterCode'],
        });
        this.router.navigate(['/app/sysconf/parameter/detail', 'edit']);
    }
    /**
     * @return {?}
     */
    onReset() {
        this.router.navigate(['/app/sysconf/parameter']);
    }
    /**
     * @return {?}
     */
    back() {
        this.router.navigate(['/app/sysconf/parameter']);
        return false;
    }
    /**
     * @return {?}
     */
    doExpanded() {
        this.collapse.toggle();
        this.expanded = !this.expanded;
    }
    /**
     * @return {?}
     */
    onSubmit() {
        ((/** @type {?} */ (super.onSubmit(this.formGroup.value, 'master', 'post-parameter-group'))));
    }
}
ParameterListDetailPageComponent.decorators = [
    { type: Component, args: [{
                selector: 'xa-parameter-list-detail-page',
                template: "<div class=\"row\">\n  <div class=\"col-lg-12\">\n    <nb-card>\n      <nb-card-header>\n        <nav class=\"navigation\">\n            <a href=\"#\" (click)=\"back()\" class=\"link back-link\" aria-label=\"Back\">\n                <nb-icon icon=\"arrow-back\"></nb-icon>\n            </a>\n            {{'Edit Parameter Group' | translate}}\n            <div class=\"link back-link parameter-expanded\">\n              <nb-icon\n                  [icon]=\"expanded ? 'arrow-upward-outline' : 'arrow-downward-outline'\"\n                  (click)=\"doExpanded()\">\n              </nb-icon>\n            </div>\n        </nav>\n      </nb-card-header>\n      <div xa-parameter-edit-group-collapse #collapseparameter>\n        <nb-card-body>\n          <div class=\"row\">\n            <div class=\"col-md-12 col-lg-12 col-xxxl-6\">\n              <form [formGroup]=\"formGroup\">\n                <xa-input-text\n                  [name]=\"'parameterGroupName'\"\n                  [label]=\"'Parameter Group Name'\"\n                  [required]=\"true\"\n                  formControlName=\"parameterGroupName\">\n                </xa-input-text>\n                <div class=\"form-group row\">\n                  <div class=\"offset-sm-3 col-sm-9\">\n                    <button\n                      type=\"reset\"\n                      status=\"danger\"\n                      (click)=\"onReset()\"\n                      class=\"reset-left\"\n                      nbButton>\n                      {{ 'Cancel' | translate}}\n                    </button>\n                    <button\n                      type=\"submit\"\n                      status=\"primary\"\n                      (click)=\"onSubmit()\"\n                      [disabled]=\"formGroup.invalid || formGroup.pristine || disabled\"\n                      class=\"submit-right\"\n                      nbButton>\n                      {{ 'Edit' | translate}}\n                    </button>\n                  </div>\n                </div>\n              </form>\n            </div>\n          </div>\n        </nb-card-body>\n      </div>\n    </nb-card>\n  </div>\n</div>\n\n<xa-page-outlet [url]=\"'/app/sysconf/parameter'\" [header]=\"'Parameter '+parameterGroup.parameterGroupName\">\n  <div class=\"row\">\n    <div class=\"col-md-12 col-lg-12 col-xxxl-6\">\n      <xa-datatable\n        [api]=\"apiPath\"\n        [formGroupFilter]=\"formGroupFilter\"\n        [filters]=\"filters\"\n        [delete]=\"false\"\n        [selectionType]=\"selectionType\"\n        (onFilter)=\"doFilterAdvanced($event)\"\n        (onAdd)=\"onAddGroup($event)\"\n        (onEdit)=\"onViewDetail($event)\"\n        [filterFn]=\"keyword\"\n        [columns]=\"columns\">\n        <form [formGroup]=\"formGroupFilter\">\n          <xa-input-text\n            [name]=\"'parameterCode'\"\n            [label]=\"'Parameter Code'\"\n            formControlName=\"parameterCode\">\n          </xa-input-text>\n        </form>\n      </xa-datatable>\n    </div>\n  </div>\n</xa-page-outlet>\n",
                styles: [".reset-left{margin-right:.25rem}.submit-right{margin-left:.25rem}.parameter-expanded{position:absolute;right:0;padding:0 1.75rem;cursor:pointer}"]
            }] }
];
/** @nocollapse */
ParameterListDetailPageComponent.ctorParameters = () => [
    { type: Injector },
    { type: Router },
    { type: ParameterService }
];
ParameterListDetailPageComponent.propDecorators = {
    collapse: [{ type: ViewChild, args: ['collapseparameter', { static: false },] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyYW1ldGVyLWxpc3QtZGV0YWlsLXBhZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHhhcGhpcmEvbmd4YS1zeXMvIiwic291cmNlcyI6WyJsaWIvcGFyYW1ldGVyL2RldGFpbC9wYXJhbWV0ZXItbGlzdC1kZXRhaWwtcGFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsUUFBUSxFQUFhLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRixPQUFPLEVBQWUsYUFBYSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDckUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXpDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzNELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLDZEQUE2RCxDQUFDO0FBUWxILE1BQU0sT0FBTyxnQ0FBaUMsU0FBUSxtQkFBd0I7Ozs7OztJQWdCNUUsWUFBbUIsUUFBa0IsRUFBVSxNQUFjLEVBQVUsZ0JBQWtDO1FBQ3ZHLEtBQUssQ0FBQyxRQUFRLEVBQUU7WUFDZCxlQUFlLEVBQUUsRUFBRTtTQUNwQixFQUFFO1lBQ0Qsb0JBQW9CLEVBQUUsRUFBRTtZQUN4QixvQkFBb0IsRUFBRSxFQUFFO1NBQ3pCLENBQUMsQ0FBQztRQU5jLGFBQVEsR0FBUixRQUFRLENBQVU7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQWJsRyxrQkFBYSxHQUFrQixhQUFhLENBQUMsTUFBTSxDQUFDO1FBQ3BELFlBQU8sR0FBa0I7WUFDOUIsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsSUFB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QUFRLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDakMsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixDQUFDLG1CQUFBLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLHNCQUFzQixDQUFDLEVBQWdDLENBQUMsQ0FBQztJQUMzRyxDQUFDOzs7WUFoRkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwrQkFBK0I7Z0JBRXpDLG8vRkFBMEQ7O2FBQzNEOzs7O1lBZDJCLFFBQVE7WUFFM0IsTUFBTTtZQUdOLGdCQUFnQjs7O3VCQXdCdEIsU0FBUyxTQUFDLG1CQUFtQixFQUFFLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBQzs7OztJQVovQyxtREFBOEI7O0lBQzlCLHlEQUEyRDs7SUFDM0QsbURBT0U7O0lBQ0YsMERBQXVFOztJQUN2RSxvREFBaUM7O0lBQ2pDLG9EQUErRjs7SUFFbkYsb0RBQXlCOzs7OztJQUFFLGtEQUFzQjs7Ozs7SUFBRSw0REFBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0b3IsIE9uRGVzdHJveSwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUYWJsZUNvbHVtbiwgU2VsZWN0aW9uVHlwZSB9IGZyb20gJ0Bzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBIdHRwQmFzZU1vZGVsLCBBcGlCYXNlUmVzcG9uc2UgfSBmcm9tICdAeGFwaGlyYS9zaGFyZWQnO1xuaW1wb3J0IHsgQmFzZUZpbHRlckNvbXBvbmVudCB9IGZyb20gJ0B4YXBoaXJhL25neGEtY29tbW9uJztcbmltcG9ydCB7IFBhcmFtZXRlclNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9wYXJhbWV0ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBQYXJhbWV0ZXJHcm91cE1vZGVsIH0gZnJvbSAnLi4vbW9kZWxzL3BhcmFtZXRlci5tb2RlbCc7XG5pbXBvcnQgeyBQYXJhbWV0ZXJFZGl0R3JvdXBDb2xsYXBzZUNvbXBvbmVudCB9IGZyb20gJy4uL2dyb3VwL2VkaXQtZ3JvdXAvcGFyYW1ldGVyLWVkaXQtZ3JvdXAtY29sbGFwc2UuY29tcG9uZW50JztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAneGEtcGFyYW1ldGVyLWxpc3QtZGV0YWlsLXBhZ2UnLFxuICBzdHlsZVVybHM6IFsnLi9wYXJhbWV0ZXItbGlzdC1kZXRhaWwtcGFnZS5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vcGFyYW1ldGVyLWxpc3QtZGV0YWlsLXBhZ2UuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBQYXJhbWV0ZXJMaXN0RGV0YWlsUGFnZUNvbXBvbmVudCBleHRlbmRzIEJhc2VGaWx0ZXJDb21wb25lbnQ8YW55PiBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICBwdWJsaWMgYXBpUGF0aDogSHR0cEJhc2VNb2RlbDtcbiAgcHVibGljIHNlbGVjdGlvblR5cGU6IFNlbGVjdGlvblR5cGUgPSBTZWxlY3Rpb25UeXBlLnNpbmdsZTtcbiAgcHVibGljIGNvbHVtbnM6IFRhYmxlQ29sdW1uW10gPSBbXG4gICAgeyBuYW1lOiAnUGFyYW1ldGVyIENvZGUnLCBwcm9wOiAncGFyYW1ldGVyQ29kZScsIHdpZHRoOiAzNTAsIGZyb3plbkxlZnQ6IHRydWUgfSxcbiAgICB7IG5hbWU6ICdDcmVhdGVkJywgcHJvcDogJ2NyZWF0ZWRCeScgfSxcbiAgICB7IG5hbWU6ICdDcmVhdGVkIERhdGUnLCBwcm9wOiAnY3JlYXRlZERhdGUnIH0sXG4gICAgeyBuYW1lOiAnTW9kaWZpZWQnLCBwcm9wOiAnbW9kaWZpZWRCeScgfSxcbiAgICB7IG5hbWU6ICdNb2RpZmllZCBEYXRlJywgcHJvcDogJ21vZGlmaWVkRGF0ZScgfSxcbiAgICB7IG5hbWU6ICdBY3RpdmUnLCBwcm9wOiAnYWN0aXZlJyB9LFxuICBdO1xuICBwdWJsaWMgcGFyYW1ldGVyR3JvdXA6IFBhcmFtZXRlckdyb3VwTW9kZWwgPSBuZXcgUGFyYW1ldGVyR3JvdXBNb2RlbCgpO1xuICBwdWJsaWMgZXhwYW5kZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQFZpZXdDaGlsZCgnY29sbGFwc2VwYXJhbWV0ZXInLCB7c3RhdGljOiBmYWxzZX0pIGNvbGxhcHNlOiBQYXJhbWV0ZXJFZGl0R3JvdXBDb2xsYXBzZUNvbXBvbmVudDtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgaW5qZWN0b3I6IEluamVjdG9yLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHBhcmFtZXRlclNlcnZpY2U6IFBhcmFtZXRlclNlcnZpY2UpIHtcbiAgICBzdXBlcihpbmplY3Rvciwge1xuICAgICAgJ3BhcmFtZXRlckNvZGUnOiBbXSxcbiAgICB9LCB7XG4gICAgICAncGFyYW1ldGVyR3JvdXBDb2RlJzogW10sXG4gICAgICAncGFyYW1ldGVyR3JvdXBOYW1lJzogW10sXG4gICAgfSk7XG4gICAgdGhpcy5hcGlQYXRoID0gdGhpcy5hcGlbJ21hc3RlciddWydkYXRhdGFibGUtcGFyYW1ldGVyJ107XG4gICAgdGhpcy5maWx0ZXJzID0gW3sgY29udHJvbE5hbWU6ICdwYXJhbWV0ZXJDb2RlJywgdHlwZTogJ2lucHV0JyB9XTtcbiAgICBpZiAodGhpcy5wYXJhbWV0ZXJTZXJ2aWNlLmdldFBhcmFtZXRlckdyb3VwKCkpIHtcbiAgICAgIHRoaXMucGFyYW1ldGVyR3JvdXAgPSB0aGlzLnBhcmFtZXRlclNlcnZpY2UuZ2V0UGFyYW1ldGVyR3JvdXAoKTtcbiAgICAgIHRoaXMua2V5d29yZCA9IHtcbiAgICAgICAgcGFyYW1ldGVyR3JvdXBDb2RlOiB0aGlzLnBhcmFtZXRlckdyb3VwLnBhcmFtZXRlckdyb3VwQ29kZSxcbiAgICAgIH07XG4gICAgICB0aGlzLmZvcm1Hcm91cC5nZXQoJ3BhcmFtZXRlckdyb3VwQ29kZScpLnNldFZhbHVlKHRoaXMucGFyYW1ldGVyR3JvdXAucGFyYW1ldGVyR3JvdXBDb2RlKTtcbiAgICAgIHRoaXMuZm9ybUdyb3VwLmdldCgncGFyYW1ldGVyR3JvdXBOYW1lJykuc2V0VmFsdWUodGhpcy5wYXJhbWV0ZXJHcm91cC5wYXJhbWV0ZXJHcm91cE5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmtleXdvcmQgPSB7XG4gICAgICAgIHBhcmFtZXRlckdyb3VwQ29kZTogbnVsbCxcbiAgICAgIH07XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9hcHAvc3lzY29uZi9wYXJhbWV0ZXInXSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHt9XG5cbiAgb25BZGRHcm91cChldmVudCk6IHZvaWQge1xuICAgIHRoaXMucGFyYW1ldGVyU2VydmljZS5zZXRQYXJhbWV0ZXIobnVsbCk7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvYXBwL3N5c2NvbmYvcGFyYW1ldGVyL2RldGFpbCcsICdhZGQnXSk7XG4gIH1cblxuICBvblZpZXdEZXRhaWwoZGF0YSk6IHZvaWQge1xuICAgIHRoaXMucGFyYW1ldGVyU2VydmljZS5zZXRQYXJhbWV0ZXIoe1xuICAgICAgcGFyYW1ldGVyR3JvdXBDb2RlOiBkYXRhWydwYXJhbWV0ZXJHcm91cENvZGUnXSxcbiAgICAgIHBhcmFtZXRlckdyb3VwTmFtZTogZGF0YVsncGFyYW1ldGVyR3JvdXBOYW1lJ10sXG4gICAgICBwYXJhbWV0ZXJDb2RlOiBkYXRhWydwYXJhbWV0ZXJDb2RlJ10sXG4gICAgfSk7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvYXBwL3N5c2NvbmYvcGFyYW1ldGVyL2RldGFpbCcsICdlZGl0J10pO1xuICB9XG5cbiAgb25SZXNldCgpOiB2b2lkIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9hcHAvc3lzY29uZi9wYXJhbWV0ZXInXSk7XG4gIH1cblxuICBiYWNrKCk6IGJvb2xlYW4ge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2FwcC9zeXNjb25mL3BhcmFtZXRlciddKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBkb0V4cGFuZGVkKCk6IHZvaWQge1xuICAgIHRoaXMuY29sbGFwc2UudG9nZ2xlKCk7XG4gICAgdGhpcy5leHBhbmRlZCA9ICF0aGlzLmV4cGFuZGVkO1xuICB9XG5cbiAgb25TdWJtaXQoKTogdm9pZCB7XG4gICAgKHN1cGVyLm9uU3VibWl0KHRoaXMuZm9ybUdyb3VwLnZhbHVlLCAnbWFzdGVyJywgJ3Bvc3QtcGFyYW1ldGVyLWdyb3VwJykgIGFzIE9ic2VydmFibGU8QXBpQmFzZVJlc3BvbnNlPik7XG4gIH1cblxufVxuIl19