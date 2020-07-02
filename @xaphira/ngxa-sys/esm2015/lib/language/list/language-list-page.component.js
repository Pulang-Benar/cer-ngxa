/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Injector } from '@angular/core';
import { SelectionType } from '@swimlane/ngx-datatable';
import { Router } from '@angular/router';
import { BaseFilterComponent } from '@xaphira/ngxa-common';
import { LanguageService } from '../services/language.service';
export class LanguageListPageComponent extends BaseFilterComponent {
    /**
     * @param {?} injector
     * @param {?} router
     * @param {?} languageService
     */
    constructor(injector, router, languageService) {
        super(injector, {
            'localeCode': [],
            'identifier': [],
        });
        this.injector = injector;
        this.router = router;
        this.languageService = languageService;
        this.selectionType = SelectionType.single;
        this.columns = [
            { name: 'Language Code', prop: 'localeCode', width: 125, frozenLeft: true },
            { name: 'Language', prop: 'identifier', width: 275, frozenLeft: true },
            { name: 'Icon', prop: 'icon', width: 75, frozenLeft: true, type: 'icon' },
            { name: 'System Default Language', prop: 'localeDefault', width: 175, frozenLeft: true },
            { name: 'Created', prop: 'createdBy' },
            { name: 'Created Date', prop: 'createdDate' },
            { name: 'Modified', prop: 'modifiedBy' },
            { name: 'Modified Date', prop: 'modifiedDate' },
            { name: 'Active', prop: 'active' },
        ];
        this.expanded = false;
        this.apiPath = this.api['master']['datatable-locale'];
        this.filters = [
            { controlName: 'localeCode', type: 'input' },
            { controlName: 'identifier', type: 'input' }
        ];
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
     * @return {?}
     */
    onAddGroup() {
        this.router.navigate(['/app/sysconf/language', 'add']);
    }
    /**
     * @param {?} data
     * @return {?}
     */
    onViewDetail(data) {
        this.languageService.setLocale(data);
        this.router.navigate(['/app/sysconf/language', 'edit']);
    }
    /**
     * @return {?}
     */
    onReset() {
        this.router.navigate(['/app/sysconf/language']);
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
    onSubmit() {
        ((/** @type {?} */ (super.onSubmit(this.formGroup.value, 'master', 'post-language'))));
    }
}
LanguageListPageComponent.decorators = [
    { type: Component, args: [{
                selector: 'xa-language-list-page',
                template: "<xa-page-outlet [header]=\"'Language'\">\n  <div class=\"row\">\n    <div class=\"col-md-12 col-lg-12 col-xxxl-6\">\n      <xa-datatable\n        [api]=\"apiPath\"\n        [formGroupFilter]=\"formGroupFilter\"\n        [filters]=\"filters\"\n        [delete]=\"false\"\n        [selectionType]=\"selectionType\"\n        (onFilter)=\"doFilterAdvanced($event)\"\n        (onAdd)=\"onAddGroup()\"\n        (onEdit)=\"onViewDetail($event)\"\n        [filterFn]=\"keyword\"\n        [columns]=\"columns\">\n        <form [formGroup]=\"formGroupFilter\">\n          <xa-input-text\n            [name]=\"'localeCode'\"\n            [label]=\"'Locale Code'\"\n            formControlName=\"localeCode\">\n          </xa-input-text>\n          <xa-input-text\n            [name]=\"'identifier'\"\n            [label]=\"'Identifier'\"\n            formControlName=\"identifier\">\n          </xa-input-text>\n        </form>\n      </xa-datatable>\n    </div>\n  </div>\n</xa-page-outlet>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
LanguageListPageComponent.ctorParameters = () => [
    { type: Injector },
    { type: Router },
    { type: LanguageService }
];
if (false) {
    /** @type {?} */
    LanguageListPageComponent.prototype.apiPath;
    /** @type {?} */
    LanguageListPageComponent.prototype.selectionType;
    /** @type {?} */
    LanguageListPageComponent.prototype.columns;
    /** @type {?} */
    LanguageListPageComponent.prototype.expanded;
    /** @type {?} */
    LanguageListPageComponent.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    LanguageListPageComponent.prototype.router;
    /**
     * @type {?}
     * @private
     */
    LanguageListPageComponent.prototype.languageService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZ3VhZ2UtbGlzdC1wYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B4YXBoaXJhL25neGEtc3lzLyIsInNvdXJjZXMiOlsibGliL2xhbmd1YWdlL2xpc3QvbGFuZ3VhZ2UtbGlzdC1wYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxRQUFRLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDdkUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUd6QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFRL0QsTUFBTSxPQUFPLHlCQUEwQixTQUFRLG1CQUF3Qjs7Ozs7O0lBaUJyRSxZQUFtQixRQUFrQixFQUFVLE1BQWMsRUFBVSxlQUFnQztRQUNyRyxLQUFLLENBQUMsUUFBUSxFQUFFO1lBQ2QsWUFBWSxFQUFFLEVBQUU7WUFDaEIsWUFBWSxFQUFFLEVBQUU7U0FDakIsQ0FBQyxDQUFDO1FBSmMsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFkaEcsa0JBQWEsR0FBa0IsYUFBYSxDQUFDLE1BQU0sQ0FBQztRQUNwRCxZQUFPLEdBQXNCO1lBQ2xDLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRTtZQUMzRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUU7WUFDdEUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUU7WUFDekUsRUFBRSxJQUFJLEVBQUUseUJBQXlCLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUU7WUFDeEYsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7WUFDdEMsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUU7WUFDN0MsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUU7WUFDeEMsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUU7WUFDL0MsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUU7U0FDbkMsQ0FBQztRQUNLLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFPL0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLE9BQU8sR0FBRztZQUNiLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFO1lBQzVDLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFO1NBQUMsQ0FBQztJQUNsRCxDQUFDOzs7O0lBRUQsUUFBUTtJQUNSLENBQUM7Ozs7SUFFRCxXQUFXLEtBQVUsQ0FBQzs7OztJQUV0QixVQUFVO1FBQ1IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyx1QkFBdUIsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3pELENBQUM7Ozs7O0lBRUQsWUFBWSxDQUFDLElBQUk7UUFDZixJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLHVCQUF1QixFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDMUQsQ0FBQzs7OztJQUVELE9BQU87UUFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQztJQUNsRCxDQUFDOzs7O0lBRUQsSUFBSTtRQUNGLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDO1FBQ2pELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixDQUFDLG1CQUFBLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLGVBQWUsQ0FBQyxFQUFnQyxDQUFDLENBQUM7SUFDcEcsQ0FBQzs7O1lBMURGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2dCQUVqQyxrK0JBQWtEOzthQUNuRDs7OztZQWIyQixRQUFRO1lBRTNCLE1BQU07WUFJTixlQUFlOzs7O0lBVXRCLDRDQUE4Qjs7SUFDOUIsa0RBQTJEOztJQUMzRCw0Q0FVRTs7SUFDRiw2Q0FBaUM7O0lBRXJCLDZDQUF5Qjs7Ozs7SUFBRSwyQ0FBc0I7Ozs7O0lBQUUsb0RBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEluamVjdG9yLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNlbGVjdGlvblR5cGUgfSBmcm9tICdAc3dpbWxhbmUvbmd4LWRhdGF0YWJsZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSHR0cEJhc2VNb2RlbCwgQXBpQmFzZVJlc3BvbnNlIH0gZnJvbSAnQHhhcGhpcmEvc2hhcmVkJztcbmltcG9ydCB7IEJhc2VGaWx0ZXJDb21wb25lbnQgfSBmcm9tICdAeGFwaGlyYS9uZ3hhLWNvbW1vbic7XG5pbXBvcnQgeyBMYW5ndWFnZVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9sYW5ndWFnZS5zZXJ2aWNlJztcbmltcG9ydCB7IERhdGF0YWJsZUNvbHVtbiB9IGZyb20gJ0B4YXBoaXJhL25neGEtY29tbW9uJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAneGEtbGFuZ3VhZ2UtbGlzdC1wYWdlJyxcbiAgc3R5bGVVcmxzOiBbJy4vbGFuZ3VhZ2UtbGlzdC1wYWdlLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9sYW5ndWFnZS1saXN0LXBhZ2UuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBMYW5ndWFnZUxpc3RQYWdlQ29tcG9uZW50IGV4dGVuZHMgQmFzZUZpbHRlckNvbXBvbmVudDxhbnk+IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gIHB1YmxpYyBhcGlQYXRoOiBIdHRwQmFzZU1vZGVsO1xuICBwdWJsaWMgc2VsZWN0aW9uVHlwZTogU2VsZWN0aW9uVHlwZSA9IFNlbGVjdGlvblR5cGUuc2luZ2xlO1xuICBwdWJsaWMgY29sdW1uczogRGF0YXRhYmxlQ29sdW1uW10gPSBbXG4gICAgeyBuYW1lOiAnTGFuZ3VhZ2UgQ29kZScsIHByb3A6ICdsb2NhbGVDb2RlJywgd2lkdGg6IDEyNSwgZnJvemVuTGVmdDogdHJ1ZSB9LFxuICAgIHsgbmFtZTogJ0xhbmd1YWdlJywgcHJvcDogJ2lkZW50aWZpZXInLCB3aWR0aDogMjc1LCBmcm96ZW5MZWZ0OiB0cnVlIH0sXG4gICAgeyBuYW1lOiAnSWNvbicsIHByb3A6ICdpY29uJywgd2lkdGg6IDc1LCBmcm96ZW5MZWZ0OiB0cnVlLCB0eXBlOiAnaWNvbicgfSxcbiAgICB7IG5hbWU6ICdTeXN0ZW0gRGVmYXVsdCBMYW5ndWFnZScsIHByb3A6ICdsb2NhbGVEZWZhdWx0Jywgd2lkdGg6IDE3NSwgZnJvemVuTGVmdDogdHJ1ZSB9LFxuICAgIHsgbmFtZTogJ0NyZWF0ZWQnLCBwcm9wOiAnY3JlYXRlZEJ5JyB9LFxuICAgIHsgbmFtZTogJ0NyZWF0ZWQgRGF0ZScsIHByb3A6ICdjcmVhdGVkRGF0ZScgfSxcbiAgICB7IG5hbWU6ICdNb2RpZmllZCcsIHByb3A6ICdtb2RpZmllZEJ5JyB9LFxuICAgIHsgbmFtZTogJ01vZGlmaWVkIERhdGUnLCBwcm9wOiAnbW9kaWZpZWREYXRlJyB9LFxuICAgIHsgbmFtZTogJ0FjdGl2ZScsIHByb3A6ICdhY3RpdmUnIH0sXG4gIF07XG4gIHB1YmxpYyBleHBhbmRlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBpbmplY3RvcjogSW5qZWN0b3IsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgbGFuZ3VhZ2VTZXJ2aWNlOiBMYW5ndWFnZVNlcnZpY2UpIHtcbiAgICBzdXBlcihpbmplY3Rvciwge1xuICAgICAgJ2xvY2FsZUNvZGUnOiBbXSxcbiAgICAgICdpZGVudGlmaWVyJzogW10sXG4gICAgfSk7XG4gICAgdGhpcy5hcGlQYXRoID0gdGhpcy5hcGlbJ21hc3RlciddWydkYXRhdGFibGUtbG9jYWxlJ107XG4gICAgdGhpcy5maWx0ZXJzID0gW1xuICAgICAgeyBjb250cm9sTmFtZTogJ2xvY2FsZUNvZGUnLCB0eXBlOiAnaW5wdXQnIH0sXG4gICAgICB7IGNvbnRyb2xOYW1lOiAnaWRlbnRpZmllcicsIHR5cGU6ICdpbnB1dCcgfV07XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge31cblxuICBvbkFkZEdyb3VwKCk6IHZvaWQge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2FwcC9zeXNjb25mL2xhbmd1YWdlJywgJ2FkZCddKTtcbiAgfVxuXG4gIG9uVmlld0RldGFpbChkYXRhKTogdm9pZCB7XG4gICAgdGhpcy5sYW5ndWFnZVNlcnZpY2Uuc2V0TG9jYWxlKGRhdGEpO1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2FwcC9zeXNjb25mL2xhbmd1YWdlJywgJ2VkaXQnXSk7XG4gIH1cblxuICBvblJlc2V0KCk6IHZvaWQge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2FwcC9zeXNjb25mL2xhbmd1YWdlJ10pO1xuICB9XG5cbiAgYmFjaygpOiBib29sZWFuIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9hcHAvc3lzY29uZi9wYXJhbWV0ZXInXSk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgb25TdWJtaXQoKTogdm9pZCB7XG4gICAgKHN1cGVyLm9uU3VibWl0KHRoaXMuZm9ybUdyb3VwLnZhbHVlLCAnbWFzdGVyJywgJ3Bvc3QtbGFuZ3VhZ2UnKSAgYXMgT2JzZXJ2YWJsZTxBcGlCYXNlUmVzcG9uc2U+KTtcbiAgfVxuXG59XG4iXX0=