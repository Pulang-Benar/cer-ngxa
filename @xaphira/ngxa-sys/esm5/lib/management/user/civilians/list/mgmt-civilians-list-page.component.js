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
var MgmtCiviliansListPageComponent = /** @class */ (function (_super) {
    tslib_1.__extends(MgmtCiviliansListPageComponent, _super);
    function MgmtCiviliansListPageComponent(injector, router, userService) {
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
            authority: 'ROLE_END',
        };
        return _this;
    }
    /**
     * @return {?}
     */
    MgmtCiviliansListPageComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    MgmtCiviliansListPageComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} data
     * @return {?}
     */
    MgmtCiviliansListPageComponent.prototype.onViewDetail = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        this.userService.setUser(data);
        this.router.navigate(['/app/mgmt/user/civilians/detail']);
    };
    MgmtCiviliansListPageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'xa-mgmt-civilians-list-page',
                    template: "<xa-page-outlet [header]=\"'Civilians'\">\n  <div class=\"row\">\n    <div class=\"col-md-12 col-lg-12 col-xxxl-6\">\n      <xa-datatable\n        [api]=\"apiPath\"\n        [formGroupFilter]=\"formGroupFilter\"\n        [filters]=\"filters\"\n        [add]=\"false\"\n        [delete]=\"false\"\n        [selectionType]=\"selectionType\"\n        (onFilter)=\"doFilterAdvanced($event)\"\n        (onEdit)=\"onViewDetail($event)\"\n        [filterFn]=\"keyword\"\n        [columns]=\"columns\">\n        <form [formGroup]=\"formGroupFilter\">\n          <xa-input-text\n            [name]=\"'username'\"\n            [label]=\"'Username'\"\n            formControlName=\"username\">\n          </xa-input-text>\n          <xa-input-text\n            [name]=\"'name'\"\n            [label]=\"'Name'\"\n            formControlName=\"name\">\n          </xa-input-text>\n          <xa-input-text\n            [name]=\"'phoneNumber'\"\n            [label]=\"'Phone Number'\"\n            formControlName=\"phoneNumber\">\n          </xa-input-text>\n        </form>\n      </xa-datatable>\n    </div>\n  </div>\n</xa-page-outlet>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    MgmtCiviliansListPageComponent.ctorParameters = function () { return [
        { type: Injector },
        { type: Router },
        { type: ManagementUserService }
    ]; };
    return MgmtCiviliansListPageComponent;
}(BaseFilterComponent));
export { MgmtCiviliansListPageComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWdtdC1jaXZpbGlhbnMtbGlzdC1wYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B4YXBoaXJhL25neGEtc3lzLyIsInNvdXJjZXMiOlsibGliL21hbmFnZW1lbnQvdXNlci9jaXZpbGlhbnMvbGlzdC9tZ210LWNpdmlsaWFucy1saXN0LXBhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxRQUFRLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDdkUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUd6QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUUzRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUV6RTtJQUtvRCwwREFBd0I7SUFpQjFFLHdDQUFtQixRQUFrQixFQUFVLE1BQWMsRUFBVSxXQUFrQztRQUF6RyxZQUNFLGtCQUFNLFFBQVEsRUFBRTtZQUNkLFVBQVUsRUFBRSxFQUFFO1lBQ2QsTUFBTSxFQUFFLEVBQUU7WUFDVixhQUFhLEVBQUUsRUFBRTtTQUNsQixDQUFDLFNBU0g7UUFka0IsY0FBUSxHQUFSLFFBQVEsQ0FBVTtRQUFVLFlBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxpQkFBVyxHQUFYLFdBQVcsQ0FBdUI7UUFkbEcsbUJBQWEsR0FBa0IsYUFBYSxDQUFDLE1BQU0sQ0FBQztRQUNwRCxhQUFPLEdBQXNCO1lBQ2xDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRTtZQUNwRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUM7WUFDM0QsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFO1lBQzlELEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRTtZQUMzRSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTtZQUN0QyxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRTtZQUM3QyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRTtZQUN4QyxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRTtZQUMvQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRTtTQUNuQyxDQUFDO1FBQ0ssY0FBUSxHQUFZLEtBQUssQ0FBQztRQVEvQixLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUN0RCxLQUFJLENBQUMsT0FBTyxHQUFHO1lBQ2IsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUU7WUFDMUMsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUU7WUFDdEMsRUFBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUU7U0FBQyxDQUFDO1FBQ2pELEtBQUksQ0FBQyxPQUFPLEdBQUc7WUFDYixTQUFTLEVBQUUsVUFBVTtTQUN0QixDQUFDOztJQUNKLENBQUM7Ozs7SUFFRCxpREFBUTs7O0lBQVIsY0FBa0IsQ0FBQzs7OztJQUVuQixvREFBVzs7O0lBQVgsY0FBcUIsQ0FBQzs7Ozs7SUFFdEIscURBQVk7Ozs7SUFBWixVQUFhLElBQUk7UUFDZixJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGlDQUFpQyxDQUFDLENBQUMsQ0FBQztJQUM1RCxDQUFDOztnQkE3Q0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSw2QkFBNkI7b0JBRXZDLG1uQ0FBd0Q7O2lCQUN6RDs7OztnQkFiMkIsUUFBUTtnQkFFM0IsTUFBTTtnQkFLTixxQkFBcUI7O0lBaUQ5QixxQ0FBQztDQUFBLEFBL0NELENBS29ELG1CQUFtQixHQTBDdEU7U0ExQ1ksOEJBQThCOzs7SUFFekMsaURBQThCOztJQUM5Qix1REFBMkQ7O0lBQzNELGlEQVVFOztJQUNGLGtEQUFpQzs7SUFFckIsa0RBQXlCOzs7OztJQUFFLGdEQUFzQjs7Ozs7SUFBRSxxREFBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0b3IsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2VsZWN0aW9uVHlwZSB9IGZyb20gJ0Bzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBIdHRwQmFzZU1vZGVsLCBBcGlCYXNlUmVzcG9uc2UgfSBmcm9tICdAeGFwaGlyYS9zaGFyZWQnO1xuaW1wb3J0IHsgQmFzZUZpbHRlckNvbXBvbmVudCB9IGZyb20gJ0B4YXBoaXJhL25neGEtY29tbW9uJztcbmltcG9ydCB7IERhdGF0YWJsZUNvbHVtbiB9IGZyb20gJ0B4YXBoaXJhL25neGEtY29tbW9uJztcbmltcG9ydCB7IE1hbmFnZW1lbnRVc2VyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL21nbXQtdXNlci5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAneGEtbWdtdC1jaXZpbGlhbnMtbGlzdC1wYWdlJyxcbiAgc3R5bGVVcmxzOiBbJy4vbWdtdC1jaXZpbGlhbnMtbGlzdC1wYWdlLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9tZ210LWNpdmlsaWFucy1saXN0LXBhZ2UuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBNZ210Q2l2aWxpYW5zTGlzdFBhZ2VDb21wb25lbnQgZXh0ZW5kcyBCYXNlRmlsdGVyQ29tcG9uZW50PGFueT4gaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgcHVibGljIGFwaVBhdGg6IEh0dHBCYXNlTW9kZWw7XG4gIHB1YmxpYyBzZWxlY3Rpb25UeXBlOiBTZWxlY3Rpb25UeXBlID0gU2VsZWN0aW9uVHlwZS5zaW5nbGU7XG4gIHB1YmxpYyBjb2x1bW5zOiBEYXRhdGFibGVDb2x1bW5bXSA9IFtcbiAgICB7IG5hbWU6ICdVc2VybmFtZScsIHByb3A6ICd1c2VybmFtZScsIHdpZHRoOiAxMjUsIGZyb3plbkxlZnQ6IHRydWUgfSxcbiAgICB7IG5hbWU6ICdOYW1lJywgcHJvcDogJ25hbWUnLCB3aWR0aDogMjc1LCBmcm96ZW5MZWZ0OiB0cnVlfSxcbiAgICB7IG5hbWU6ICdFbWFpbCcsIHByb3A6ICdlbWFpbCcsIHdpZHRoOiAyMjUsIGZyb3plbkxlZnQ6IHRydWUgfSxcbiAgICB7IG5hbWU6ICdQaG9uZSBOdW1iZXInLCBwcm9wOiAncGhvbmVOdW1iZXInLCB3aWR0aDogMTUwLCBmcm96ZW5MZWZ0OiB0cnVlIH0sXG4gICAgeyBuYW1lOiAnQ3JlYXRlZCcsIHByb3A6ICdjcmVhdGVkQnknIH0sXG4gICAgeyBuYW1lOiAnQ3JlYXRlZCBEYXRlJywgcHJvcDogJ2NyZWF0ZWREYXRlJyB9LFxuICAgIHsgbmFtZTogJ01vZGlmaWVkJywgcHJvcDogJ21vZGlmaWVkQnknIH0sXG4gICAgeyBuYW1lOiAnTW9kaWZpZWQgRGF0ZScsIHByb3A6ICdtb2RpZmllZERhdGUnIH0sXG4gICAgeyBuYW1lOiAnQWN0aXZlJywgcHJvcDogJ2FjdGl2ZScgfSxcbiAgXTtcbiAgcHVibGljIGV4cGFuZGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGluamVjdG9yOiBJbmplY3RvciwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSB1c2VyU2VydmljZTogTWFuYWdlbWVudFVzZXJTZXJ2aWNlKSB7XG4gICAgc3VwZXIoaW5qZWN0b3IsIHtcbiAgICAgICd1c2VybmFtZSc6IFtdLFxuICAgICAgJ25hbWUnOiBbXSxcbiAgICAgICdwaG9uZU51bWJlcic6IFtdLFxuICAgIH0pO1xuICAgIHRoaXMuYXBpUGF0aCA9IHRoaXMuYXBpWydzZWN1cml0eSddWydkYXRhdGFibGUtdXNlciddO1xuICAgIHRoaXMuZmlsdGVycyA9IFtcbiAgICAgIHsgY29udHJvbE5hbWU6ICd1c2VybmFtZScsIHR5cGU6ICdpbnB1dCcgfSxcbiAgICAgIHsgY29udHJvbE5hbWU6ICduYW1lJywgdHlwZTogJ2lucHV0JyB9LFxuICAgICAgeyBjb250cm9sTmFtZTogJ3Bob25lTnVtYmVyJywgdHlwZTogJ2lucHV0JyB9XTtcbiAgICB0aGlzLmtleXdvcmQgPSB7XG4gICAgICBhdXRob3JpdHk6ICdST0xFX0VORCcsXG4gICAgfTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge31cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHt9XG5cbiAgb25WaWV3RGV0YWlsKGRhdGEpOiB2b2lkIHtcbiAgICB0aGlzLnVzZXJTZXJ2aWNlLnNldFVzZXIoZGF0YSk7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvYXBwL21nbXQvdXNlci9jaXZpbGlhbnMvZGV0YWlsJ10pO1xuICB9XG5cbn1cbiJdfQ==