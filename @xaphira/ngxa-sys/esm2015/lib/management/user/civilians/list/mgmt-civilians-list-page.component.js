/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Injector } from '@angular/core';
import { SelectionType } from '@swimlane/ngx-datatable';
import { Router } from '@angular/router';
import { BaseFilterComponent } from '@xaphira/ngxa-common';
import { ManagementUserService } from '../../services/mgmt-user.service';
export class MgmtCiviliansListPageComponent extends BaseFilterComponent {
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
            authority: 'ROLE_END',
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
        this.router.navigate(['/app/mgmt/user/civilians/detail']);
    }
}
MgmtCiviliansListPageComponent.decorators = [
    { type: Component, args: [{
                selector: 'xa-mgmt-civilians-list-page',
                template: "<xa-page-outlet [header]=\"'Civilians'\">\n  <div class=\"row\">\n    <div class=\"col-md-12 col-lg-12 col-xxxl-6\">\n      <xa-datatable\n        [api]=\"apiPath\"\n        [formGroupFilter]=\"formGroupFilter\"\n        [filters]=\"filters\"\n        [add]=\"false\"\n        [delete]=\"false\"\n        [selectionType]=\"selectionType\"\n        (onFilter)=\"doFilterAdvanced($event)\"\n        (onEdit)=\"onViewDetail($event)\"\n        [filterFn]=\"keyword\"\n        [columns]=\"columns\">\n        <form [formGroup]=\"formGroupFilter\">\n          <xa-input-text\n            [name]=\"'username'\"\n            [label]=\"'Username'\"\n            formControlName=\"username\">\n          </xa-input-text>\n          <xa-input-text\n            [name]=\"'name'\"\n            [label]=\"'Name'\"\n            formControlName=\"name\">\n          </xa-input-text>\n          <xa-input-text\n            [name]=\"'phoneNumber'\"\n            [label]=\"'Phone Number'\"\n            formControlName=\"phoneNumber\">\n          </xa-input-text>\n        </form>\n      </xa-datatable>\n    </div>\n  </div>\n</xa-page-outlet>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
MgmtCiviliansListPageComponent.ctorParameters = () => [
    { type: Injector },
    { type: Router },
    { type: ManagementUserService }
];
if (false) {
    /** @type {?} */
    MgmtCiviliansListPageComponent.prototype.apiPath;
    /** @type {?} */
    MgmtCiviliansListPageComponent.prototype.selectionType;
    /** @type {?} */
    MgmtCiviliansListPageComponent.prototype.columns;
    /** @type {?} */
    MgmtCiviliansListPageComponent.prototype.expanded;
    /** @type {?} */
    MgmtCiviliansListPageComponent.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    MgmtCiviliansListPageComponent.prototype.router;
    /**
     * @type {?}
     * @private
     */
    MgmtCiviliansListPageComponent.prototype.userService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWdtdC1jaXZpbGlhbnMtbGlzdC1wYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B4YXBoaXJhL25neGEtc3lzLyIsInNvdXJjZXMiOlsibGliL21hbmFnZW1lbnQvdXNlci9jaXZpbGlhbnMvbGlzdC9tZ210LWNpdmlsaWFucy1saXN0LXBhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFFBQVEsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUN2RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDeEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBR3pDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRTNELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBT3pFLE1BQU0sT0FBTyw4QkFBK0IsU0FBUSxtQkFBd0I7Ozs7OztJQWlCMUUsWUFBbUIsUUFBa0IsRUFBVSxNQUFjLEVBQVUsV0FBa0M7UUFDdkcsS0FBSyxDQUFDLFFBQVEsRUFBRTtZQUNkLFVBQVUsRUFBRSxFQUFFO1lBQ2QsTUFBTSxFQUFFLEVBQUU7WUFDVixhQUFhLEVBQUUsRUFBRTtTQUNsQixDQUFDLENBQUM7UUFMYyxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUF1QjtRQWRsRyxrQkFBYSxHQUFrQixhQUFhLENBQUMsTUFBTSxDQUFDO1FBQ3BELFlBQU8sR0FBc0I7WUFDbEMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFO1lBQ3BFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBQztZQUMzRCxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUU7WUFDOUQsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFO1lBQzNFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO1lBQ3RDLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFO1lBQzdDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFO1lBQ3hDLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFO1lBQy9DLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFO1NBQ25DLENBQUM7UUFDSyxhQUFRLEdBQVksS0FBSyxDQUFDO1FBUS9CLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxPQUFPLEdBQUc7WUFDYixFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRTtZQUMxQyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRTtZQUN0QyxFQUFFLFdBQVcsRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRTtTQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLE9BQU8sR0FBRztZQUNiLFNBQVMsRUFBRSxVQUFVO1NBQ3RCLENBQUM7SUFDSixDQUFDOzs7O0lBRUQsUUFBUSxLQUFVLENBQUM7Ozs7SUFFbkIsV0FBVyxLQUFVLENBQUM7Ozs7O0lBRXRCLFlBQVksQ0FBQyxJQUFJO1FBQ2YsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDLENBQUM7SUFDNUQsQ0FBQzs7O1lBN0NGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsNkJBQTZCO2dCQUV2QyxtbkNBQXdEOzthQUN6RDs7OztZQWIyQixRQUFRO1lBRTNCLE1BQU07WUFLTixxQkFBcUI7Ozs7SUFTNUIsaURBQThCOztJQUM5Qix1REFBMkQ7O0lBQzNELGlEQVVFOztJQUNGLGtEQUFpQzs7SUFFckIsa0RBQXlCOzs7OztJQUFFLGdEQUFzQjs7Ozs7SUFBRSxxREFBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0b3IsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2VsZWN0aW9uVHlwZSB9IGZyb20gJ0Bzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBIdHRwQmFzZU1vZGVsLCBBcGlCYXNlUmVzcG9uc2UgfSBmcm9tICdAeGFwaGlyYS9zaGFyZWQnO1xuaW1wb3J0IHsgQmFzZUZpbHRlckNvbXBvbmVudCB9IGZyb20gJ0B4YXBoaXJhL25neGEtY29tbW9uJztcbmltcG9ydCB7IERhdGF0YWJsZUNvbHVtbiB9IGZyb20gJ0B4YXBoaXJhL25neGEtY29tbW9uJztcbmltcG9ydCB7IE1hbmFnZW1lbnRVc2VyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL21nbXQtdXNlci5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAneGEtbWdtdC1jaXZpbGlhbnMtbGlzdC1wYWdlJyxcbiAgc3R5bGVVcmxzOiBbJy4vbWdtdC1jaXZpbGlhbnMtbGlzdC1wYWdlLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9tZ210LWNpdmlsaWFucy1saXN0LXBhZ2UuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBNZ210Q2l2aWxpYW5zTGlzdFBhZ2VDb21wb25lbnQgZXh0ZW5kcyBCYXNlRmlsdGVyQ29tcG9uZW50PGFueT4gaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgcHVibGljIGFwaVBhdGg6IEh0dHBCYXNlTW9kZWw7XG4gIHB1YmxpYyBzZWxlY3Rpb25UeXBlOiBTZWxlY3Rpb25UeXBlID0gU2VsZWN0aW9uVHlwZS5zaW5nbGU7XG4gIHB1YmxpYyBjb2x1bW5zOiBEYXRhdGFibGVDb2x1bW5bXSA9IFtcbiAgICB7IG5hbWU6ICdVc2VybmFtZScsIHByb3A6ICd1c2VybmFtZScsIHdpZHRoOiAxMjUsIGZyb3plbkxlZnQ6IHRydWUgfSxcbiAgICB7IG5hbWU6ICdOYW1lJywgcHJvcDogJ25hbWUnLCB3aWR0aDogMjc1LCBmcm96ZW5MZWZ0OiB0cnVlfSxcbiAgICB7IG5hbWU6ICdFbWFpbCcsIHByb3A6ICdlbWFpbCcsIHdpZHRoOiAyMjUsIGZyb3plbkxlZnQ6IHRydWUgfSxcbiAgICB7IG5hbWU6ICdQaG9uZSBOdW1iZXInLCBwcm9wOiAncGhvbmVOdW1iZXInLCB3aWR0aDogMTUwLCBmcm96ZW5MZWZ0OiB0cnVlIH0sXG4gICAgeyBuYW1lOiAnQ3JlYXRlZCcsIHByb3A6ICdjcmVhdGVkQnknIH0sXG4gICAgeyBuYW1lOiAnQ3JlYXRlZCBEYXRlJywgcHJvcDogJ2NyZWF0ZWREYXRlJyB9LFxuICAgIHsgbmFtZTogJ01vZGlmaWVkJywgcHJvcDogJ21vZGlmaWVkQnknIH0sXG4gICAgeyBuYW1lOiAnTW9kaWZpZWQgRGF0ZScsIHByb3A6ICdtb2RpZmllZERhdGUnIH0sXG4gICAgeyBuYW1lOiAnQWN0aXZlJywgcHJvcDogJ2FjdGl2ZScgfSxcbiAgXTtcbiAgcHVibGljIGV4cGFuZGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGluamVjdG9yOiBJbmplY3RvciwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSB1c2VyU2VydmljZTogTWFuYWdlbWVudFVzZXJTZXJ2aWNlKSB7XG4gICAgc3VwZXIoaW5qZWN0b3IsIHtcbiAgICAgICd1c2VybmFtZSc6IFtdLFxuICAgICAgJ25hbWUnOiBbXSxcbiAgICAgICdwaG9uZU51bWJlcic6IFtdLFxuICAgIH0pO1xuICAgIHRoaXMuYXBpUGF0aCA9IHRoaXMuYXBpWydzZWN1cml0eSddWydkYXRhdGFibGUtdXNlciddO1xuICAgIHRoaXMuZmlsdGVycyA9IFtcbiAgICAgIHsgY29udHJvbE5hbWU6ICd1c2VybmFtZScsIHR5cGU6ICdpbnB1dCcgfSxcbiAgICAgIHsgY29udHJvbE5hbWU6ICduYW1lJywgdHlwZTogJ2lucHV0JyB9LFxuICAgICAgeyBjb250cm9sTmFtZTogJ3Bob25lTnVtYmVyJywgdHlwZTogJ2lucHV0JyB9XTtcbiAgICB0aGlzLmtleXdvcmQgPSB7XG4gICAgICBhdXRob3JpdHk6ICdST0xFX0VORCcsXG4gICAgfTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge31cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHt9XG5cbiAgb25WaWV3RGV0YWlsKGRhdGEpOiB2b2lkIHtcbiAgICB0aGlzLnVzZXJTZXJ2aWNlLnNldFVzZXIoZGF0YSk7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvYXBwL21nbXQvdXNlci9jaXZpbGlhbnMvZGV0YWlsJ10pO1xuICB9XG5cbn1cbiJdfQ==