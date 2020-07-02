/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Injector } from '@angular/core';
import { SelectionType } from '@swimlane/ngx-datatable';
import { Router } from '@angular/router';
import { BaseFilterComponent } from '@xaphira/ngxa-common';
import { ManagementUserService } from '../../services/mgmt-user.service';
var MgmtAdminListPageComponent = /** @class */ (function (_super) {
    tslib_1.__extends(MgmtAdminListPageComponent, _super);
    function MgmtAdminListPageComponent(injector, router, userService) {
        var _this = _super.call(this, injector, {
            'username': [],
            'name': [],
            'phoneNumber': [],
        }) || this;
        _this.injector = injector;
        _this.router = router;
        _this.userService = userService;
        _this.selectionType = SelectionType.single;
        _this.columns = [
            { name: 'Username', prop: 'username', width: 125, frozenLeft: true },
            { name: 'Name', prop: 'name', width: 275, frozenLeft: true },
            { name: 'Email', prop: 'email', width: 225, frozenLeft: true },
            { name: 'Phone Number', prop: 'phoneNumber', width: 150, frozenLeft: true },
            { name: 'Created', prop: 'createdBy' },
            { name: 'Created Date', prop: 'createdDate' },
            { name: 'Modified', prop: 'modifiedBy' },
            { name: 'Modified Date', prop: 'modifiedDate' },
            { name: 'Active', prop: 'active' },
        ];
        _this.expanded = false;
        _this.apiPath = _this.api['security']['datatable-user'];
        _this.filters = [
            { controlName: 'username', type: 'input' },
            { controlName: 'name', type: 'input' },
            { controlName: 'phoneNumber', type: 'input' }
        ];
        _this.keyword = {
            authority: 'ROLE_ADMIN_REGIONAL',
        };
        return _this;
    }
    /**
     * @return {?}
     */
    MgmtAdminListPageComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    MgmtAdminListPageComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} data
     * @return {?}
     */
    MgmtAdminListPageComponent.prototype.onViewDetail = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        this.userService.setUser(data);
        this.router.navigate(['/app/mgmt/user/admin-regional/detail']);
    };
    MgmtAdminListPageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'xa-mgmt-admin-list-page',
                    template: "<xa-page-outlet [header]=\"'Admin Regional'\">\n  <div class=\"row\">\n    <div class=\"col-md-12 col-lg-12 col-xxxl-6\">\n      <xa-datatable\n        [api]=\"apiPath\"\n        [formGroupFilter]=\"formGroupFilter\"\n        [filters]=\"filters\"\n        [add]=\"false\"\n        [delete]=\"false\"\n        [selectionType]=\"selectionType\"\n        (onFilter)=\"doFilterAdvanced($event)\"\n        (onEdit)=\"onViewDetail($event)\"\n        [filterFn]=\"keyword\"\n        [columns]=\"columns\">\n        <form [formGroup]=\"formGroupFilter\">\n          <xa-input-text\n            [name]=\"'username'\"\n            [label]=\"'Username'\"\n            formControlName=\"username\">\n          </xa-input-text>\n          <xa-input-text\n            [name]=\"'name'\"\n            [label]=\"'Name'\"\n            formControlName=\"name\">\n          </xa-input-text>\n          <xa-input-text\n            [name]=\"'phoneNumber'\"\n            [label]=\"'Phone Number'\"\n            formControlName=\"phoneNumber\">\n          </xa-input-text>\n        </form>\n      </xa-datatable>\n    </div>\n  </div>\n</xa-page-outlet>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    MgmtAdminListPageComponent.ctorParameters = function () { return [
        { type: Injector },
        { type: Router },
        { type: ManagementUserService }
    ]; };
    return MgmtAdminListPageComponent;
}(BaseFilterComponent));
export { MgmtAdminListPageComponent };
if (false) {
    /** @type {?} */
    MgmtAdminListPageComponent.prototype.apiPath;
    /** @type {?} */
    MgmtAdminListPageComponent.prototype.selectionType;
    /** @type {?} */
    MgmtAdminListPageComponent.prototype.columns;
    /** @type {?} */
    MgmtAdminListPageComponent.prototype.expanded;
    /** @type {?} */
    MgmtAdminListPageComponent.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    MgmtAdminListPageComponent.prototype.router;
    /**
     * @type {?}
     * @private
     */
    MgmtAdminListPageComponent.prototype.userService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWdtdC1hZG1pbi1saXN0LXBhZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHhhcGhpcmEvbmd4YS1zeXMvIiwic291cmNlcyI6WyJsaWIvbWFuYWdlbWVudC91c2VyL2FkbWluLXJlZ2lvbmFsL2xpc3QvbWdtdC1hZG1pbi1saXN0LXBhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxRQUFRLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDdkUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUd6QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUUzRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUV6RTtJQUtnRCxzREFBd0I7SUFpQnRFLG9DQUFtQixRQUFrQixFQUFVLE1BQWMsRUFBVSxXQUFrQztRQUF6RyxZQUNFLGtCQUFNLFFBQVEsRUFBRTtZQUNkLFVBQVUsRUFBRSxFQUFFO1lBQ2QsTUFBTSxFQUFFLEVBQUU7WUFDVixhQUFhLEVBQUUsRUFBRTtTQUNsQixDQUFDLFNBU0g7UUFka0IsY0FBUSxHQUFSLFFBQVEsQ0FBVTtRQUFVLFlBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxpQkFBVyxHQUFYLFdBQVcsQ0FBdUI7UUFkbEcsbUJBQWEsR0FBa0IsYUFBYSxDQUFDLE1BQU0sQ0FBQztRQUNwRCxhQUFPLEdBQXNCO1lBQ2xDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRTtZQUNwRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUM7WUFDM0QsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFO1lBQzlELEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRTtZQUMzRSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTtZQUN0QyxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRTtZQUM3QyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRTtZQUN4QyxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRTtZQUMvQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRTtTQUNuQyxDQUFDO1FBQ0ssY0FBUSxHQUFZLEtBQUssQ0FBQztRQVEvQixLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUN0RCxLQUFJLENBQUMsT0FBTyxHQUFHO1lBQ2IsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUU7WUFDMUMsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUU7WUFDdEMsRUFBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUU7U0FBQyxDQUFDO1FBQ2pELEtBQUksQ0FBQyxPQUFPLEdBQUc7WUFDYixTQUFTLEVBQUUscUJBQXFCO1NBQ2pDLENBQUM7O0lBQ0osQ0FBQzs7OztJQUVELDZDQUFROzs7SUFBUixjQUFrQixDQUFDOzs7O0lBRW5CLGdEQUFXOzs7SUFBWCxjQUFxQixDQUFDOzs7OztJQUV0QixpREFBWTs7OztJQUFaLFVBQWEsSUFBSTtRQUNmLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsc0NBQXNDLENBQUMsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7O2dCQTdDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtvQkFFbkMsd25DQUFvRDs7aUJBQ3JEOzs7O2dCQWIyQixRQUFRO2dCQUUzQixNQUFNO2dCQUtOLHFCQUFxQjs7SUFpRDlCLGlDQUFDO0NBQUEsQUEvQ0QsQ0FLZ0QsbUJBQW1CLEdBMENsRTtTQTFDWSwwQkFBMEI7OztJQUVyQyw2Q0FBOEI7O0lBQzlCLG1EQUEyRDs7SUFDM0QsNkNBVUU7O0lBQ0YsOENBQWlDOztJQUVyQiw4Q0FBeUI7Ozs7O0lBQUUsNENBQXNCOzs7OztJQUFFLGlEQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3RvciwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTZWxlY3Rpb25UeXBlIH0gZnJvbSAnQHN3aW1sYW5lL25neC1kYXRhdGFibGUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEh0dHBCYXNlTW9kZWwsIEFwaUJhc2VSZXNwb25zZSB9IGZyb20gJ0B4YXBoaXJhL3NoYXJlZCc7XG5pbXBvcnQgeyBCYXNlRmlsdGVyQ29tcG9uZW50IH0gZnJvbSAnQHhhcGhpcmEvbmd4YS1jb21tb24nO1xuaW1wb3J0IHsgRGF0YXRhYmxlQ29sdW1uIH0gZnJvbSAnQHhhcGhpcmEvbmd4YS1jb21tb24nO1xuaW1wb3J0IHsgTWFuYWdlbWVudFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbWdtdC11c2VyLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd4YS1tZ210LWFkbWluLWxpc3QtcGFnZScsXG4gIHN0eWxlVXJsczogWycuL21nbXQtYWRtaW4tbGlzdC1wYWdlLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9tZ210LWFkbWluLWxpc3QtcGFnZS5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIE1nbXRBZG1pbkxpc3RQYWdlQ29tcG9uZW50IGV4dGVuZHMgQmFzZUZpbHRlckNvbXBvbmVudDxhbnk+IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gIHB1YmxpYyBhcGlQYXRoOiBIdHRwQmFzZU1vZGVsO1xuICBwdWJsaWMgc2VsZWN0aW9uVHlwZTogU2VsZWN0aW9uVHlwZSA9IFNlbGVjdGlvblR5cGUuc2luZ2xlO1xuICBwdWJsaWMgY29sdW1uczogRGF0YXRhYmxlQ29sdW1uW10gPSBbXG4gICAgeyBuYW1lOiAnVXNlcm5hbWUnLCBwcm9wOiAndXNlcm5hbWUnLCB3aWR0aDogMTI1LCBmcm96ZW5MZWZ0OiB0cnVlIH0sXG4gICAgeyBuYW1lOiAnTmFtZScsIHByb3A6ICduYW1lJywgd2lkdGg6IDI3NSwgZnJvemVuTGVmdDogdHJ1ZX0sXG4gICAgeyBuYW1lOiAnRW1haWwnLCBwcm9wOiAnZW1haWwnLCB3aWR0aDogMjI1LCBmcm96ZW5MZWZ0OiB0cnVlIH0sXG4gICAgeyBuYW1lOiAnUGhvbmUgTnVtYmVyJywgcHJvcDogJ3Bob25lTnVtYmVyJywgd2lkdGg6IDE1MCwgZnJvemVuTGVmdDogdHJ1ZSB9LFxuICAgIHsgbmFtZTogJ0NyZWF0ZWQnLCBwcm9wOiAnY3JlYXRlZEJ5JyB9LFxuICAgIHsgbmFtZTogJ0NyZWF0ZWQgRGF0ZScsIHByb3A6ICdjcmVhdGVkRGF0ZScgfSxcbiAgICB7IG5hbWU6ICdNb2RpZmllZCcsIHByb3A6ICdtb2RpZmllZEJ5JyB9LFxuICAgIHsgbmFtZTogJ01vZGlmaWVkIERhdGUnLCBwcm9wOiAnbW9kaWZpZWREYXRlJyB9LFxuICAgIHsgbmFtZTogJ0FjdGl2ZScsIHByb3A6ICdhY3RpdmUnIH0sXG4gIF07XG4gIHB1YmxpYyBleHBhbmRlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBpbmplY3RvcjogSW5qZWN0b3IsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgdXNlclNlcnZpY2U6IE1hbmFnZW1lbnRVc2VyU2VydmljZSkge1xuICAgIHN1cGVyKGluamVjdG9yLCB7XG4gICAgICAndXNlcm5hbWUnOiBbXSxcbiAgICAgICduYW1lJzogW10sXG4gICAgICAncGhvbmVOdW1iZXInOiBbXSxcbiAgICB9KTtcbiAgICB0aGlzLmFwaVBhdGggPSB0aGlzLmFwaVsnc2VjdXJpdHknXVsnZGF0YXRhYmxlLXVzZXInXTtcbiAgICB0aGlzLmZpbHRlcnMgPSBbXG4gICAgICB7IGNvbnRyb2xOYW1lOiAndXNlcm5hbWUnLCB0eXBlOiAnaW5wdXQnIH0sXG4gICAgICB7IGNvbnRyb2xOYW1lOiAnbmFtZScsIHR5cGU6ICdpbnB1dCcgfSxcbiAgICAgIHsgY29udHJvbE5hbWU6ICdwaG9uZU51bWJlcicsIHR5cGU6ICdpbnB1dCcgfV07XG4gICAgdGhpcy5rZXl3b3JkID0ge1xuICAgICAgYXV0aG9yaXR5OiAnUk9MRV9BRE1JTl9SRUdJT05BTCcsXG4gICAgfTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge31cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHt9XG5cbiAgb25WaWV3RGV0YWlsKGRhdGEpOiB2b2lkIHtcbiAgICB0aGlzLnVzZXJTZXJ2aWNlLnNldFVzZXIoZGF0YSk7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvYXBwL21nbXQvdXNlci9hZG1pbi1yZWdpb25hbC9kZXRhaWwnXSk7XG4gIH1cblxufVxuIl19