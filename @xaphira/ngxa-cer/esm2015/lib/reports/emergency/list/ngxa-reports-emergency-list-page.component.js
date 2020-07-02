/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Injector } from '@angular/core';
import { SelectionType } from '@swimlane/ngx-datatable';
import { Router } from '@angular/router';
import { BaseFilterComponent } from '@xaphira/ngxa-common';
import { ReportsPanicService } from '../../services/reports-panic.service';
export class NgxaReportsEmergencyListPageComponent extends BaseFilterComponent {
    /**
     * @param {?} injector
     * @param {?} router
     * @param {?} reportService
     */
    constructor(injector, router, reportService) {
        super(injector, {
            'fullname': [],
            'phoneNumber': [],
            'latestFormattedAddress': [],
        });
        this.injector = injector;
        this.router = router;
        this.reportService = reportService;
        this.selectionType = SelectionType.single;
        this.columns = [
            { name: 'Name', prop: 'name', width: 225, frozenLeft: true },
            { name: 'Address', prop: 'latestFormattedAddress', width: 275, frozenLeft: true },
            { name: 'Gender', prop: 'gender', width: 125, frozenLeft: true },
            { name: 'Phone Number', prop: 'phoneNumber', width: 140, frozenLeft: true },
            { name: 'Emergency Category', prop: 'emergencyCategory' },
            { name: 'Status', prop: 'status' },
            { name: 'Created', prop: 'createdBy' },
            { name: 'Created Date', prop: 'createdDate' },
            { name: 'Modified', prop: 'modifiedBy' },
            { name: 'Modified Date', prop: 'modifiedDate' },
            { name: 'Active', prop: 'active' },
        ];
        this.expanded = false;
        this.apiPath = this.api['panic']['datatable-panic-reports'];
        this.filters = [
            { controlName: 'fullname', type: 'input' },
            { controlName: 'phoneNumber', type: 'input' },
            { controlName: 'latestFormattedAddress', type: 'input' }
        ];
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
        this.reportService.setReports(data);
        this.router.navigate(['/app/reports/emergency/detail']);
    }
}
NgxaReportsEmergencyListPageComponent.decorators = [
    { type: Component, args: [{
                selector: 'xa-reports-emergency-list-page',
                template: "<xa-page-outlet [header]=\"'Emergency Reports'\">\n  <div class=\"row\">\n    <div class=\"col-md-12 col-lg-12 col-xxxl-6\">\n      <xa-datatable\n        [api]=\"apiPath\"\n        [formGroupFilter]=\"formGroupFilter\"\n        [filters]=\"filters\"\n        [add]=\"false\"\n        [delete]=\"false\"\n        [selectionType]=\"selectionType\"\n        (onFilter)=\"doFilterAdvanced($event)\"\n        (onEdit)=\"onViewDetail($event)\"\n        [filterFn]=\"keyword\"\n        [columns]=\"columns\">\n        <form [formGroup]=\"formGroupFilter\">\n          <xa-input-text\n            [name]=\"'fullname'\"\n            [label]=\"'Name'\"\n            formControlName=\"fullname\">\n          </xa-input-text>\n          <xa-input-text\n            [name]=\"'phoneNumber'\"\n            [label]=\"'Phone Number'\"\n            formControlName=\"phoneNumber\">\n          </xa-input-text>\n          <xa-input-text\n            [name]=\"'latestFormattedAddress'\"\n            [label]=\"'Address'\"\n            formControlName=\"latestFormattedAddress\">\n          </xa-input-text>\n        </form>\n      </xa-datatable>\n    </div>\n  </div>\n</xa-page-outlet>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
NgxaReportsEmergencyListPageComponent.ctorParameters = () => [
    { type: Injector },
    { type: Router },
    { type: ReportsPanicService }
];
if (false) {
    /** @type {?} */
    NgxaReportsEmergencyListPageComponent.prototype.apiPath;
    /** @type {?} */
    NgxaReportsEmergencyListPageComponent.prototype.selectionType;
    /** @type {?} */
    NgxaReportsEmergencyListPageComponent.prototype.columns;
    /** @type {?} */
    NgxaReportsEmergencyListPageComponent.prototype.expanded;
    /** @type {?} */
    NgxaReportsEmergencyListPageComponent.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    NgxaReportsEmergencyListPageComponent.prototype.router;
    /**
     * @type {?}
     * @private
     */
    NgxaReportsEmergencyListPageComponent.prototype.reportService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4YS1yZXBvcnRzLWVtZXJnZW5jeS1saXN0LXBhZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHhhcGhpcmEvbmd4YS1jZXIvIiwic291cmNlcyI6WyJsaWIvcmVwb3J0cy9lbWVyZ2VuY3kvbGlzdC9uZ3hhLXJlcG9ydHMtZW1lcmdlbmN5LWxpc3QtcGFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsUUFBUSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFekMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFM0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFPM0UsTUFBTSxPQUFPLHFDQUFzQyxTQUFRLG1CQUF3Qjs7Ozs7O0lBbUJqRixZQUFtQixRQUFrQixFQUFVLE1BQWMsRUFBVSxhQUFrQztRQUN2RyxLQUFLLENBQUMsUUFBUSxFQUFFO1lBQ2QsVUFBVSxFQUFFLEVBQUU7WUFDZCxhQUFhLEVBQUUsRUFBRTtZQUNqQix3QkFBd0IsRUFBRSxFQUFFO1NBQzdCLENBQUMsQ0FBQztRQUxjLGFBQVEsR0FBUixRQUFRLENBQVU7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQXFCO1FBaEJsRyxrQkFBYSxHQUFrQixhQUFhLENBQUMsTUFBTSxDQUFDO1FBQ3BELFlBQU8sR0FBc0I7WUFDbEMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFDO1lBQzNELEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsd0JBQXdCLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFDO1lBQ2hGLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRTtZQUNoRSxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUU7WUFDM0UsRUFBRSxJQUFJLEVBQUUsb0JBQW9CLEVBQUUsSUFBSSxFQUFFLG1CQUFtQixFQUFFO1lBQ3pELEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFO1lBQ2xDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO1lBQ3RDLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFO1lBQzdDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFO1lBQ3hDLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFO1lBQy9DLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFO1NBQ25DLENBQUM7UUFDSyxhQUFRLEdBQVksS0FBSyxDQUFDO1FBUS9CLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxPQUFPLEdBQUc7WUFDYixFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRTtZQUMxQyxFQUFFLFdBQVcsRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRTtZQUM3QyxFQUFFLFdBQVcsRUFBRSx3QkFBd0IsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFO1NBQUMsQ0FBQztJQUM5RCxDQUFDOzs7O0lBRUQsUUFBUSxLQUFVLENBQUM7Ozs7SUFFbkIsV0FBVyxLQUFVLENBQUM7Ozs7O0lBRXRCLFlBQVksQ0FBQyxJQUFJO1FBQ2YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDLENBQUM7SUFDMUQsQ0FBQzs7O1lBNUNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0NBQWdDO2dCQUUxQyw4cENBQWdFOzthQUNqRTs7OztZQVoyQixRQUFRO1lBRTNCLE1BQU07WUFJTixtQkFBbUI7Ozs7SUFTMUIsd0RBQThCOztJQUM5Qiw4REFBMkQ7O0lBQzNELHdEQVlFOztJQUNGLHlEQUFpQzs7SUFFckIseURBQXlCOzs7OztJQUFFLHVEQUFzQjs7Ozs7SUFBRSw4REFBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0b3IsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2VsZWN0aW9uVHlwZSB9IGZyb20gJ0Bzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBIdHRwQmFzZU1vZGVsIH0gZnJvbSAnQHhhcGhpcmEvc2hhcmVkJztcbmltcG9ydCB7IEJhc2VGaWx0ZXJDb21wb25lbnQgfSBmcm9tICdAeGFwaGlyYS9uZ3hhLWNvbW1vbic7XG5pbXBvcnQgeyBEYXRhdGFibGVDb2x1bW4gfSBmcm9tICdAeGFwaGlyYS9uZ3hhLWNvbW1vbic7XG5pbXBvcnQgeyBSZXBvcnRzUGFuaWNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvcmVwb3J0cy1wYW5pYy5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAneGEtcmVwb3J0cy1lbWVyZ2VuY3ktbGlzdC1wYWdlJyxcbiAgc3R5bGVVcmxzOiBbJy4vbmd4YS1yZXBvcnRzLWVtZXJnZW5jeS1saXN0LXBhZ2UuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL25neGEtcmVwb3J0cy1lbWVyZ2VuY3ktbGlzdC1wYWdlLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgTmd4YVJlcG9ydHNFbWVyZ2VuY3lMaXN0UGFnZUNvbXBvbmVudCBleHRlbmRzIEJhc2VGaWx0ZXJDb21wb25lbnQ8YW55PiBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICBwdWJsaWMgYXBpUGF0aDogSHR0cEJhc2VNb2RlbDtcbiAgcHVibGljIHNlbGVjdGlvblR5cGU6IFNlbGVjdGlvblR5cGUgPSBTZWxlY3Rpb25UeXBlLnNpbmdsZTtcbiAgcHVibGljIGNvbHVtbnM6IERhdGF0YWJsZUNvbHVtbltdID0gW1xuICAgIHsgbmFtZTogJ05hbWUnLCBwcm9wOiAnbmFtZScsIHdpZHRoOiAyMjUsIGZyb3plbkxlZnQ6IHRydWV9LFxuICAgIHsgbmFtZTogJ0FkZHJlc3MnLCBwcm9wOiAnbGF0ZXN0Rm9ybWF0dGVkQWRkcmVzcycsIHdpZHRoOiAyNzUsIGZyb3plbkxlZnQ6IHRydWV9LFxuICAgIHsgbmFtZTogJ0dlbmRlcicsIHByb3A6ICdnZW5kZXInLCB3aWR0aDogMTI1LCBmcm96ZW5MZWZ0OiB0cnVlIH0sXG4gICAgeyBuYW1lOiAnUGhvbmUgTnVtYmVyJywgcHJvcDogJ3Bob25lTnVtYmVyJywgd2lkdGg6IDE0MCwgZnJvemVuTGVmdDogdHJ1ZSB9LFxuICAgIHsgbmFtZTogJ0VtZXJnZW5jeSBDYXRlZ29yeScsIHByb3A6ICdlbWVyZ2VuY3lDYXRlZ29yeScgfSxcbiAgICB7IG5hbWU6ICdTdGF0dXMnLCBwcm9wOiAnc3RhdHVzJyB9LFxuICAgIHsgbmFtZTogJ0NyZWF0ZWQnLCBwcm9wOiAnY3JlYXRlZEJ5JyB9LFxuICAgIHsgbmFtZTogJ0NyZWF0ZWQgRGF0ZScsIHByb3A6ICdjcmVhdGVkRGF0ZScgfSxcbiAgICB7IG5hbWU6ICdNb2RpZmllZCcsIHByb3A6ICdtb2RpZmllZEJ5JyB9LFxuICAgIHsgbmFtZTogJ01vZGlmaWVkIERhdGUnLCBwcm9wOiAnbW9kaWZpZWREYXRlJyB9LFxuICAgIHsgbmFtZTogJ0FjdGl2ZScsIHByb3A6ICdhY3RpdmUnIH0sXG4gIF07XG4gIHB1YmxpYyBleHBhbmRlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBpbmplY3RvcjogSW5qZWN0b3IsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcmVwb3J0U2VydmljZTogUmVwb3J0c1BhbmljU2VydmljZSkge1xuICAgIHN1cGVyKGluamVjdG9yLCB7XG4gICAgICAnZnVsbG5hbWUnOiBbXSxcbiAgICAgICdwaG9uZU51bWJlcic6IFtdLFxuICAgICAgJ2xhdGVzdEZvcm1hdHRlZEFkZHJlc3MnOiBbXSxcbiAgICB9KTtcbiAgICB0aGlzLmFwaVBhdGggPSB0aGlzLmFwaVsncGFuaWMnXVsnZGF0YXRhYmxlLXBhbmljLXJlcG9ydHMnXTtcbiAgICB0aGlzLmZpbHRlcnMgPSBbXG4gICAgICB7IGNvbnRyb2xOYW1lOiAnZnVsbG5hbWUnLCB0eXBlOiAnaW5wdXQnIH0sXG4gICAgICB7IGNvbnRyb2xOYW1lOiAncGhvbmVOdW1iZXInLCB0eXBlOiAnaW5wdXQnIH0sXG4gICAgICB7IGNvbnRyb2xOYW1lOiAnbGF0ZXN0Rm9ybWF0dGVkQWRkcmVzcycsIHR5cGU6ICdpbnB1dCcgfV07XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHt9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7fVxuXG4gIG9uVmlld0RldGFpbChkYXRhKTogdm9pZCB7XG4gICAgdGhpcy5yZXBvcnRTZXJ2aWNlLnNldFJlcG9ydHMoZGF0YSk7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvYXBwL3JlcG9ydHMvZW1lcmdlbmN5L2RldGFpbCddKTtcbiAgfVxuXG59XG4iXX0=