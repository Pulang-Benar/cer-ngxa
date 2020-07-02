/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Injector } from '@angular/core';
import { SelectionType } from '@swimlane/ngx-datatable';
import { Router } from '@angular/router';
import { BaseFilterComponent } from '@xaphira/ngxa-common';
import { ReportsPanicService } from '../../services/reports-panic.service';
var NgxaReportsFakeListPageComponent = /** @class */ (function (_super) {
    tslib_1.__extends(NgxaReportsFakeListPageComponent, _super);
    function NgxaReportsFakeListPageComponent(injector, router, reportService) {
        var _this = _super.call(this, injector, {
            'fullname': [],
            'phoneNumber': [],
            'latestFormattedAddress': [],
        }) || this;
        _this.injector = injector;
        _this.router = router;
        _this.reportService = reportService;
        _this.selectionType = SelectionType.single;
        _this.columns = [
            { name: 'Username', prop: 'username', width: 125, frozenLeft: true },
            { name: 'Name', prop: 'name', width: 225, frozenLeft: true },
            { name: 'Address', prop: 'latestFormattedAddress', width: 275, frozenLeft: true },
            { name: 'Gender', prop: 'gender', width: 125, frozenLeft: true },
            { name: 'Phone Number', prop: 'phoneNumber', width: 140, frozenLeft: true },
            { name: 'Created', prop: 'createdBy' },
            { name: 'Created Date', prop: 'createdDate' },
            { name: 'Modified', prop: 'modifiedBy' },
            { name: 'Modified Date', prop: 'modifiedDate' },
            { name: 'Active', prop: 'active' },
        ];
        _this.expanded = false;
        _this.apiPath = _this.api['panic']['datatable-fake-reports'];
        _this.filters = [
            { controlName: 'fullname', type: 'input' },
            { controlName: 'phoneNumber', type: 'input' },
            { controlName: 'latestFormattedAddress', type: 'input' }
        ];
        return _this;
    }
    /**
     * @return {?}
     */
    NgxaReportsFakeListPageComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    NgxaReportsFakeListPageComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} data
     * @return {?}
     */
    NgxaReportsFakeListPageComponent.prototype.onViewDetail = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        this.reportService.setReports(data);
        this.router.navigate(['/app/reports/fake/detail']);
    };
    NgxaReportsFakeListPageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'xa-reports-fake-list-page',
                    template: "<xa-page-outlet [header]=\"'Fake Reports'\">\n  <div class=\"row\">\n    <div class=\"col-md-12 col-lg-12 col-xxxl-6\">\n      <xa-datatable\n        [api]=\"apiPath\"\n        [formGroupFilter]=\"formGroupFilter\"\n        [filters]=\"filters\"\n        [add]=\"false\"\n        [delete]=\"false\"\n        [selectionType]=\"selectionType\"\n        (onFilter)=\"doFilterAdvanced($event)\"\n        [filterFn]=\"keyword\"\n        [columns]=\"columns\">\n        <form [formGroup]=\"formGroupFilter\">\n          <xa-input-text\n            [name]=\"'fullname'\"\n            [label]=\"'Name'\"\n            formControlName=\"fullname\">\n          </xa-input-text>\n          <xa-input-text\n            [name]=\"'phoneNumber'\"\n            [label]=\"'Phone Number'\"\n            formControlName=\"phoneNumber\">\n          </xa-input-text>\n          <xa-input-text\n            [name]=\"'latestFormattedAddress'\"\n            [label]=\"'Address'\"\n            formControlName=\"latestFormattedAddress\">\n          </xa-input-text>\n        </form>\n      </xa-datatable>\n    </div>\n  </div>\n</xa-page-outlet>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    NgxaReportsFakeListPageComponent.ctorParameters = function () { return [
        { type: Injector },
        { type: Router },
        { type: ReportsPanicService }
    ]; };
    return NgxaReportsFakeListPageComponent;
}(BaseFilterComponent));
export { NgxaReportsFakeListPageComponent };
if (false) {
    /** @type {?} */
    NgxaReportsFakeListPageComponent.prototype.apiPath;
    /** @type {?} */
    NgxaReportsFakeListPageComponent.prototype.selectionType;
    /** @type {?} */
    NgxaReportsFakeListPageComponent.prototype.columns;
    /** @type {?} */
    NgxaReportsFakeListPageComponent.prototype.expanded;
    /** @type {?} */
    NgxaReportsFakeListPageComponent.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    NgxaReportsFakeListPageComponent.prototype.router;
    /**
     * @type {?}
     * @private
     */
    NgxaReportsFakeListPageComponent.prototype.reportService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4YS1yZXBvcnRzLWZha2UtbGlzdC1wYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B4YXBoaXJhL25neGEtY2VyLyIsInNvdXJjZXMiOlsibGliL3JlcG9ydHMvZmFrZS9saXN0L25neGEtcmVwb3J0cy1mYWtlLWxpc3QtcGFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFFBQVEsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUN2RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDeEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXpDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRTNELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRTNFO0lBS3NELDREQUF3QjtJQWtCNUUsMENBQW1CLFFBQWtCLEVBQVUsTUFBYyxFQUFVLGFBQWtDO1FBQXpHLFlBQ0Usa0JBQU0sUUFBUSxFQUFFO1lBQ2QsVUFBVSxFQUFFLEVBQUU7WUFDZCxhQUFhLEVBQUUsRUFBRTtZQUNqQix3QkFBd0IsRUFBRSxFQUFFO1NBQzdCLENBQUMsU0FNSDtRQVhrQixjQUFRLEdBQVIsUUFBUSxDQUFVO1FBQVUsWUFBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLG1CQUFhLEdBQWIsYUFBYSxDQUFxQjtRQWZsRyxtQkFBYSxHQUFrQixhQUFhLENBQUMsTUFBTSxDQUFDO1FBQ3BELGFBQU8sR0FBc0I7WUFDbEMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFDO1lBQ25FLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBQztZQUMzRCxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLHdCQUF3QixFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBQztZQUNoRixFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUU7WUFDaEUsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFO1lBQzNFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO1lBQ3RDLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFO1lBQzdDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFO1lBQ3hDLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFO1lBQy9DLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFO1NBQ25DLENBQUM7UUFDSyxjQUFRLEdBQVksS0FBSyxDQUFDO1FBUS9CLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQzNELEtBQUksQ0FBQyxPQUFPLEdBQUc7WUFDYixFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRTtZQUMxQyxFQUFFLFdBQVcsRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRTtZQUM3QyxFQUFFLFdBQVcsRUFBRSx3QkFBd0IsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFO1NBQUMsQ0FBQzs7SUFDOUQsQ0FBQzs7OztJQUVELG1EQUFROzs7SUFBUixjQUFrQixDQUFDOzs7O0lBRW5CLHNEQUFXOzs7SUFBWCxjQUFxQixDQUFDOzs7OztJQUV0Qix1REFBWTs7OztJQUFaLFVBQWEsSUFBSTtRQUNmLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFDO0lBQ3JELENBQUM7O2dCQTNDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjtvQkFFckMsOG1DQUEyRDs7aUJBQzVEOzs7O2dCQVoyQixRQUFRO2dCQUUzQixNQUFNO2dCQUlOLG1CQUFtQjs7SUErQzVCLHVDQUFDO0NBQUEsQUE3Q0QsQ0FLc0QsbUJBQW1CLEdBd0N4RTtTQXhDWSxnQ0FBZ0M7OztJQUUzQyxtREFBOEI7O0lBQzlCLHlEQUEyRDs7SUFDM0QsbURBV0U7O0lBQ0Ysb0RBQWlDOztJQUVyQixvREFBeUI7Ozs7O0lBQUUsa0RBQXNCOzs7OztJQUFFLHlEQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3RvciwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTZWxlY3Rpb25UeXBlIH0gZnJvbSAnQHN3aW1sYW5lL25neC1kYXRhdGFibGUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEh0dHBCYXNlTW9kZWwgfSBmcm9tICdAeGFwaGlyYS9zaGFyZWQnO1xuaW1wb3J0IHsgQmFzZUZpbHRlckNvbXBvbmVudCB9IGZyb20gJ0B4YXBoaXJhL25neGEtY29tbW9uJztcbmltcG9ydCB7IERhdGF0YWJsZUNvbHVtbiB9IGZyb20gJ0B4YXBoaXJhL25neGEtY29tbW9uJztcbmltcG9ydCB7IFJlcG9ydHNQYW5pY1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9yZXBvcnRzLXBhbmljLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd4YS1yZXBvcnRzLWZha2UtbGlzdC1wYWdlJyxcbiAgc3R5bGVVcmxzOiBbJy4vbmd4YS1yZXBvcnRzLWZha2UtbGlzdC1wYWdlLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9uZ3hhLXJlcG9ydHMtZmFrZS1saXN0LXBhZ2UuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBOZ3hhUmVwb3J0c0Zha2VMaXN0UGFnZUNvbXBvbmVudCBleHRlbmRzIEJhc2VGaWx0ZXJDb21wb25lbnQ8YW55PiBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICBwdWJsaWMgYXBpUGF0aDogSHR0cEJhc2VNb2RlbDtcbiAgcHVibGljIHNlbGVjdGlvblR5cGU6IFNlbGVjdGlvblR5cGUgPSBTZWxlY3Rpb25UeXBlLnNpbmdsZTtcbiAgcHVibGljIGNvbHVtbnM6IERhdGF0YWJsZUNvbHVtbltdID0gW1xuICAgIHsgbmFtZTogJ1VzZXJuYW1lJywgcHJvcDogJ3VzZXJuYW1lJywgd2lkdGg6IDEyNSwgZnJvemVuTGVmdDogdHJ1ZX0sXG4gICAgeyBuYW1lOiAnTmFtZScsIHByb3A6ICduYW1lJywgd2lkdGg6IDIyNSwgZnJvemVuTGVmdDogdHJ1ZX0sXG4gICAgeyBuYW1lOiAnQWRkcmVzcycsIHByb3A6ICdsYXRlc3RGb3JtYXR0ZWRBZGRyZXNzJywgd2lkdGg6IDI3NSwgZnJvemVuTGVmdDogdHJ1ZX0sXG4gICAgeyBuYW1lOiAnR2VuZGVyJywgcHJvcDogJ2dlbmRlcicsIHdpZHRoOiAxMjUsIGZyb3plbkxlZnQ6IHRydWUgfSxcbiAgICB7IG5hbWU6ICdQaG9uZSBOdW1iZXInLCBwcm9wOiAncGhvbmVOdW1iZXInLCB3aWR0aDogMTQwLCBmcm96ZW5MZWZ0OiB0cnVlIH0sXG4gICAgeyBuYW1lOiAnQ3JlYXRlZCcsIHByb3A6ICdjcmVhdGVkQnknIH0sXG4gICAgeyBuYW1lOiAnQ3JlYXRlZCBEYXRlJywgcHJvcDogJ2NyZWF0ZWREYXRlJyB9LFxuICAgIHsgbmFtZTogJ01vZGlmaWVkJywgcHJvcDogJ21vZGlmaWVkQnknIH0sXG4gICAgeyBuYW1lOiAnTW9kaWZpZWQgRGF0ZScsIHByb3A6ICdtb2RpZmllZERhdGUnIH0sXG4gICAgeyBuYW1lOiAnQWN0aXZlJywgcHJvcDogJ2FjdGl2ZScgfSxcbiAgXTtcbiAgcHVibGljIGV4cGFuZGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGluamVjdG9yOiBJbmplY3RvciwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSByZXBvcnRTZXJ2aWNlOiBSZXBvcnRzUGFuaWNTZXJ2aWNlKSB7XG4gICAgc3VwZXIoaW5qZWN0b3IsIHtcbiAgICAgICdmdWxsbmFtZSc6IFtdLFxuICAgICAgJ3Bob25lTnVtYmVyJzogW10sXG4gICAgICAnbGF0ZXN0Rm9ybWF0dGVkQWRkcmVzcyc6IFtdLFxuICAgIH0pO1xuICAgIHRoaXMuYXBpUGF0aCA9IHRoaXMuYXBpWydwYW5pYyddWydkYXRhdGFibGUtZmFrZS1yZXBvcnRzJ107XG4gICAgdGhpcy5maWx0ZXJzID0gW1xuICAgICAgeyBjb250cm9sTmFtZTogJ2Z1bGxuYW1lJywgdHlwZTogJ2lucHV0JyB9LFxuICAgICAgeyBjb250cm9sTmFtZTogJ3Bob25lTnVtYmVyJywgdHlwZTogJ2lucHV0JyB9LFxuICAgICAgeyBjb250cm9sTmFtZTogJ2xhdGVzdEZvcm1hdHRlZEFkZHJlc3MnLCB0eXBlOiAnaW5wdXQnIH1dO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7fVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge31cblxuICBvblZpZXdEZXRhaWwoZGF0YSk6IHZvaWQge1xuICAgIHRoaXMucmVwb3J0U2VydmljZS5zZXRSZXBvcnRzKGRhdGEpO1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2FwcC9yZXBvcnRzL2Zha2UvZGV0YWlsJ10pO1xuICB9XG5cbn1cbiJdfQ==