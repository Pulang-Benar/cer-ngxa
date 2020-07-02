/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Injector } from '@angular/core';
import { SelectionType } from '@swimlane/ngx-datatable';
import { Router } from '@angular/router';
import { BaseFilterComponent } from '@xaphira/ngxa-common';
import { ManagementUserService } from '../../services/mgmt-user.service';
export class MgmtAdminListPageComponent extends BaseFilterComponent {
    /**
     * @param {?} injector
     * @param {?} router
     * @param {?} userService
     */
    constructor(injector, router, userService) {
        super(injector, {
            'username': [],
            'name': [],
            'phoneNumber': [],
        });
        this.injector = injector;
        this.router = router;
        this.userService = userService;
        this.selectionType = SelectionType.single;
        this.columns = [
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
        this.expanded = false;
        this.apiPath = this.api['security']['datatable-user'];
        this.filters = [
            { controlName: 'username', type: 'input' },
            { controlName: 'name', type: 'input' },
            { controlName: 'phoneNumber', type: 'input' }
        ];
        this.keyword = {
            authority: 'ROLE_ADMIN_REGIONAL',
        };
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
     * @param {?} data
     * @return {?}
     */
    onViewDetail(data) {
        this.userService.setUser(data);
        this.router.navigate(['/app/mgmt/user/admin-regional/detail']);
    }
}
MgmtAdminListPageComponent.decorators = [
    { type: Component, args: [{
                selector: 'xa-mgmt-admin-list-page',
                template: "<xa-page-outlet [header]=\"'Admin Regional'\">\n  <div class=\"row\">\n    <div class=\"col-md-12 col-lg-12 col-xxxl-6\">\n      <xa-datatable\n        [api]=\"apiPath\"\n        [formGroupFilter]=\"formGroupFilter\"\n        [filters]=\"filters\"\n        [add]=\"false\"\n        [delete]=\"false\"\n        [selectionType]=\"selectionType\"\n        (onFilter)=\"doFilterAdvanced($event)\"\n        (onEdit)=\"onViewDetail($event)\"\n        [filterFn]=\"keyword\"\n        [columns]=\"columns\">\n        <form [formGroup]=\"formGroupFilter\">\n          <xa-input-text\n            [name]=\"'username'\"\n            [label]=\"'Username'\"\n            formControlName=\"username\">\n          </xa-input-text>\n          <xa-input-text\n            [name]=\"'name'\"\n            [label]=\"'Name'\"\n            formControlName=\"name\">\n          </xa-input-text>\n          <xa-input-text\n            [name]=\"'phoneNumber'\"\n            [label]=\"'Phone Number'\"\n            formControlName=\"phoneNumber\">\n          </xa-input-text>\n        </form>\n      </xa-datatable>\n    </div>\n  </div>\n</xa-page-outlet>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
MgmtAdminListPageComponent.ctorParameters = () => [
    { type: Injector },
    { type: Router },
    { type: ManagementUserService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWdtdC1hZG1pbi1saXN0LXBhZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHhhcGhpcmEvbmd4YS1zeXMvIiwic291cmNlcyI6WyJsaWIvbWFuYWdlbWVudC91c2VyL2FkbWluLXJlZ2lvbmFsL2xpc3QvbWdtdC1hZG1pbi1saXN0LXBhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFFBQVEsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUN2RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDeEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBR3pDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRTNELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBT3pFLE1BQU0sT0FBTywwQkFBMkIsU0FBUSxtQkFBd0I7Ozs7OztJQWlCdEUsWUFBbUIsUUFBa0IsRUFBVSxNQUFjLEVBQVUsV0FBa0M7UUFDdkcsS0FBSyxDQUFDLFFBQVEsRUFBRTtZQUNkLFVBQVUsRUFBRSxFQUFFO1lBQ2QsTUFBTSxFQUFFLEVBQUU7WUFDVixhQUFhLEVBQUUsRUFBRTtTQUNsQixDQUFDLENBQUM7UUFMYyxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUF1QjtRQWRsRyxrQkFBYSxHQUFrQixhQUFhLENBQUMsTUFBTSxDQUFDO1FBQ3BELFlBQU8sR0FBc0I7WUFDbEMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFO1lBQ3BFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBQztZQUMzRCxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUU7WUFDOUQsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFO1lBQzNFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO1lBQ3RDLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFO1lBQzdDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFO1lBQ3hDLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFO1lBQy9DLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFO1NBQ25DLENBQUM7UUFDSyxhQUFRLEdBQVksS0FBSyxDQUFDO1FBUS9CLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxPQUFPLEdBQUc7WUFDYixFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRTtZQUMxQyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRTtZQUN0QyxFQUFFLFdBQVcsRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRTtTQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLE9BQU8sR0FBRztZQUNiLFNBQVMsRUFBRSxxQkFBcUI7U0FDakMsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCxRQUFRLEtBQVUsQ0FBQzs7OztJQUVuQixXQUFXLEtBQVUsQ0FBQzs7Ozs7SUFFdEIsWUFBWSxDQUFDLElBQUk7UUFDZixJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLHNDQUFzQyxDQUFDLENBQUMsQ0FBQztJQUNqRSxDQUFDOzs7WUE3Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx5QkFBeUI7Z0JBRW5DLHduQ0FBb0Q7O2FBQ3JEOzs7O1lBYjJCLFFBQVE7WUFFM0IsTUFBTTtZQUtOLHFCQUFxQjs7OztJQVM1Qiw2Q0FBOEI7O0lBQzlCLG1EQUEyRDs7SUFDM0QsNkNBVUU7O0lBQ0YsOENBQWlDOztJQUVyQiw4Q0FBeUI7Ozs7O0lBQUUsNENBQXNCOzs7OztJQUFFLGlEQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3RvciwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTZWxlY3Rpb25UeXBlIH0gZnJvbSAnQHN3aW1sYW5lL25neC1kYXRhdGFibGUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEh0dHBCYXNlTW9kZWwsIEFwaUJhc2VSZXNwb25zZSB9IGZyb20gJ0B4YXBoaXJhL3NoYXJlZCc7XG5pbXBvcnQgeyBCYXNlRmlsdGVyQ29tcG9uZW50IH0gZnJvbSAnQHhhcGhpcmEvbmd4YS1jb21tb24nO1xuaW1wb3J0IHsgRGF0YXRhYmxlQ29sdW1uIH0gZnJvbSAnQHhhcGhpcmEvbmd4YS1jb21tb24nO1xuaW1wb3J0IHsgTWFuYWdlbWVudFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbWdtdC11c2VyLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd4YS1tZ210LWFkbWluLWxpc3QtcGFnZScsXG4gIHN0eWxlVXJsczogWycuL21nbXQtYWRtaW4tbGlzdC1wYWdlLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9tZ210LWFkbWluLWxpc3QtcGFnZS5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIE1nbXRBZG1pbkxpc3RQYWdlQ29tcG9uZW50IGV4dGVuZHMgQmFzZUZpbHRlckNvbXBvbmVudDxhbnk+IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gIHB1YmxpYyBhcGlQYXRoOiBIdHRwQmFzZU1vZGVsO1xuICBwdWJsaWMgc2VsZWN0aW9uVHlwZTogU2VsZWN0aW9uVHlwZSA9IFNlbGVjdGlvblR5cGUuc2luZ2xlO1xuICBwdWJsaWMgY29sdW1uczogRGF0YXRhYmxlQ29sdW1uW10gPSBbXG4gICAgeyBuYW1lOiAnVXNlcm5hbWUnLCBwcm9wOiAndXNlcm5hbWUnLCB3aWR0aDogMTI1LCBmcm96ZW5MZWZ0OiB0cnVlIH0sXG4gICAgeyBuYW1lOiAnTmFtZScsIHByb3A6ICduYW1lJywgd2lkdGg6IDI3NSwgZnJvemVuTGVmdDogdHJ1ZX0sXG4gICAgeyBuYW1lOiAnRW1haWwnLCBwcm9wOiAnZW1haWwnLCB3aWR0aDogMjI1LCBmcm96ZW5MZWZ0OiB0cnVlIH0sXG4gICAgeyBuYW1lOiAnUGhvbmUgTnVtYmVyJywgcHJvcDogJ3Bob25lTnVtYmVyJywgd2lkdGg6IDE1MCwgZnJvemVuTGVmdDogdHJ1ZSB9LFxuICAgIHsgbmFtZTogJ0NyZWF0ZWQnLCBwcm9wOiAnY3JlYXRlZEJ5JyB9LFxuICAgIHsgbmFtZTogJ0NyZWF0ZWQgRGF0ZScsIHByb3A6ICdjcmVhdGVkRGF0ZScgfSxcbiAgICB7IG5hbWU6ICdNb2RpZmllZCcsIHByb3A6ICdtb2RpZmllZEJ5JyB9LFxuICAgIHsgbmFtZTogJ01vZGlmaWVkIERhdGUnLCBwcm9wOiAnbW9kaWZpZWREYXRlJyB9LFxuICAgIHsgbmFtZTogJ0FjdGl2ZScsIHByb3A6ICdhY3RpdmUnIH0sXG4gIF07XG4gIHB1YmxpYyBleHBhbmRlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBpbmplY3RvcjogSW5qZWN0b3IsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgdXNlclNlcnZpY2U6IE1hbmFnZW1lbnRVc2VyU2VydmljZSkge1xuICAgIHN1cGVyKGluamVjdG9yLCB7XG4gICAgICAndXNlcm5hbWUnOiBbXSxcbiAgICAgICduYW1lJzogW10sXG4gICAgICAncGhvbmVOdW1iZXInOiBbXSxcbiAgICB9KTtcbiAgICB0aGlzLmFwaVBhdGggPSB0aGlzLmFwaVsnc2VjdXJpdHknXVsnZGF0YXRhYmxlLXVzZXInXTtcbiAgICB0aGlzLmZpbHRlcnMgPSBbXG4gICAgICB7IGNvbnRyb2xOYW1lOiAndXNlcm5hbWUnLCB0eXBlOiAnaW5wdXQnIH0sXG4gICAgICB7IGNvbnRyb2xOYW1lOiAnbmFtZScsIHR5cGU6ICdpbnB1dCcgfSxcbiAgICAgIHsgY29udHJvbE5hbWU6ICdwaG9uZU51bWJlcicsIHR5cGU6ICdpbnB1dCcgfV07XG4gICAgdGhpcy5rZXl3b3JkID0ge1xuICAgICAgYXV0aG9yaXR5OiAnUk9MRV9BRE1JTl9SRUdJT05BTCcsXG4gICAgfTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge31cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHt9XG5cbiAgb25WaWV3RGV0YWlsKGRhdGEpOiB2b2lkIHtcbiAgICB0aGlzLnVzZXJTZXJ2aWNlLnNldFVzZXIoZGF0YSk7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvYXBwL21nbXQvdXNlci9hZG1pbi1yZWdpb25hbC9kZXRhaWwnXSk7XG4gIH1cblxufVxuIl19