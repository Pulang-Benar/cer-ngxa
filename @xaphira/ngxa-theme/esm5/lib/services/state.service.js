/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { of as observableOf, BehaviorSubject } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
import { NbLayoutDirectionService, NbLayoutDirection } from '@nebular/theme';
var StateService = /** @class */ (function () {
    function StateService(directionService) {
        var _this = this;
        this.layouts = [
            {
                name: 'One Column',
                icon: 'nb-layout-default',
                id: 'one-column',
                selected: true,
            },
            {
                name: 'Two Column',
                icon: 'nb-layout-two-column',
                id: 'two-column',
            },
            {
                name: 'Center Column',
                icon: 'nb-layout-centre',
                id: 'center-column',
            },
        ];
        this.sidebars = [
            {
                name: 'Sidebar at layout start',
                icon: 'nb-layout-sidebar-left',
                id: 'start',
                selected: true,
            },
            {
                name: 'Sidebar at layout end',
                icon: 'nb-layout-sidebar-right',
                id: 'end',
            },
        ];
        this.layoutState$ = new BehaviorSubject(this.layouts[0]);
        this.sidebarState$ = new BehaviorSubject(this.sidebars[0]);
        this.alive = true;
        directionService.onDirectionChange()
            .pipe(takeWhile((/**
         * @return {?}
         */
        function () { return _this.alive; })))
            .subscribe((/**
         * @param {?} direction
         * @return {?}
         */
        function (direction) { return _this.updateSidebarIcons(direction); }));
        this.updateSidebarIcons(directionService.getDirection());
    }
    /**
     * @return {?}
     */
    StateService.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.alive = false;
    };
    /**
     * @private
     * @param {?} direction
     * @return {?}
     */
    StateService.prototype.updateSidebarIcons = /**
     * @private
     * @param {?} direction
     * @return {?}
     */
    function (direction) {
        var _a = tslib_1.__read(this.sidebars, 2), startSidebar = _a[0], endSidebar = _a[1];
        /** @type {?} */
        var isLtr = direction === NbLayoutDirection.LTR;
        /** @type {?} */
        var startIconClass = isLtr ? 'nb-layout-sidebar-left' : 'nb-layout-sidebar-right';
        /** @type {?} */
        var endIconClass = isLtr ? 'nb-layout-sidebar-right' : 'nb-layout-sidebar-left';
        startSidebar.icon = startIconClass;
        endSidebar.icon = endIconClass;
    };
    /**
     * @param {?} state
     * @return {?}
     */
    StateService.prototype.setLayoutState = /**
     * @param {?} state
     * @return {?}
     */
    function (state) {
        this.layoutState$.next(state);
    };
    /**
     * @return {?}
     */
    StateService.prototype.getLayoutStates = /**
     * @return {?}
     */
    function () {
        return observableOf(this.layouts);
    };
    /**
     * @return {?}
     */
    StateService.prototype.onLayoutState = /**
     * @return {?}
     */
    function () {
        return this.layoutState$.asObservable();
    };
    /**
     * @param {?} state
     * @return {?}
     */
    StateService.prototype.setSidebarState = /**
     * @param {?} state
     * @return {?}
     */
    function (state) {
        this.sidebarState$.next(state);
    };
    /**
     * @return {?}
     */
    StateService.prototype.getSidebarStates = /**
     * @return {?}
     */
    function () {
        return observableOf(this.sidebars);
    };
    /**
     * @return {?}
     */
    StateService.prototype.onSidebarState = /**
     * @return {?}
     */
    function () {
        return this.sidebarState$.asObservable();
    };
    StateService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StateService.ctorParameters = function () { return [
        { type: NbLayoutDirectionService }
    ]; };
    return StateService;
}());
export { StateService };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    StateService.prototype.layouts;
    /**
     * @type {?}
     * @protected
     */
    StateService.prototype.sidebars;
    /**
     * @type {?}
     * @protected
     */
    StateService.prototype.layoutState$;
    /**
     * @type {?}
     * @protected
     */
    StateService.prototype.sidebarState$;
    /** @type {?} */
    StateService.prototype.alive;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B4YXBoaXJhL25neGEtdGhlbWUvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvc3RhdGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFFLEVBQUUsSUFBSSxZQUFZLEVBQWdCLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN6RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFFLHdCQUF3QixFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0U7SUF5Q0Usc0JBQVksZ0JBQTBDO1FBQXRELGlCQU1DO1FBNUNTLFlBQU8sR0FBUTtZQUN2QjtnQkFDRSxJQUFJLEVBQUUsWUFBWTtnQkFDbEIsSUFBSSxFQUFFLG1CQUFtQjtnQkFDekIsRUFBRSxFQUFFLFlBQVk7Z0JBQ2hCLFFBQVEsRUFBRSxJQUFJO2FBQ2Y7WUFDRDtnQkFDRSxJQUFJLEVBQUUsWUFBWTtnQkFDbEIsSUFBSSxFQUFFLHNCQUFzQjtnQkFDNUIsRUFBRSxFQUFFLFlBQVk7YUFDakI7WUFDRDtnQkFDRSxJQUFJLEVBQUUsZUFBZTtnQkFDckIsSUFBSSxFQUFFLGtCQUFrQjtnQkFDeEIsRUFBRSxFQUFFLGVBQWU7YUFDcEI7U0FDRixDQUFDO1FBRVEsYUFBUSxHQUFRO1lBQ3hCO2dCQUNFLElBQUksRUFBRSx5QkFBeUI7Z0JBQy9CLElBQUksRUFBRSx3QkFBd0I7Z0JBQzlCLEVBQUUsRUFBRSxPQUFPO2dCQUNYLFFBQVEsRUFBRSxJQUFJO2FBQ2Y7WUFDRDtnQkFDRSxJQUFJLEVBQUUsdUJBQXVCO2dCQUM3QixJQUFJLEVBQUUseUJBQXlCO2dCQUMvQixFQUFFLEVBQUUsS0FBSzthQUNWO1NBQ0YsQ0FBQztRQUVRLGlCQUFZLEdBQUcsSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BELGtCQUFhLEdBQUcsSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRWhFLFVBQUssR0FBRyxJQUFJLENBQUM7UUFHWCxnQkFBZ0IsQ0FBQyxpQkFBaUIsRUFBRTthQUNqQyxJQUFJLENBQUMsU0FBUzs7O1FBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxLQUFLLEVBQVYsQ0FBVSxFQUFDLENBQUM7YUFDakMsU0FBUzs7OztRQUFDLFVBQUEsU0FBUyxJQUFJLE9BQUEsS0FBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxFQUFsQyxDQUFrQyxFQUFDLENBQUM7UUFFOUQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7SUFDM0QsQ0FBQzs7OztJQUVELGtDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7Ozs7OztJQUVPLHlDQUFrQjs7Ozs7SUFBMUIsVUFBMkIsU0FBNEI7UUFDL0MsSUFBQSxxQ0FBNEMsRUFBMUMsb0JBQVksRUFBRSxrQkFBNEI7O1lBQzVDLEtBQUssR0FBRyxTQUFTLEtBQUssaUJBQWlCLENBQUMsR0FBRzs7WUFDM0MsY0FBYyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDLHlCQUF5Qjs7WUFDN0UsWUFBWSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMseUJBQXlCLENBQUMsQ0FBQyxDQUFDLHdCQUF3QjtRQUNqRixZQUFZLENBQUMsSUFBSSxHQUFHLGNBQWMsQ0FBQztRQUNuQyxVQUFVLENBQUMsSUFBSSxHQUFHLFlBQVksQ0FBQztJQUNqQyxDQUFDOzs7OztJQUVELHFDQUFjOzs7O0lBQWQsVUFBZSxLQUFVO1FBQ3ZCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hDLENBQUM7Ozs7SUFFRCxzQ0FBZTs7O0lBQWY7UUFDRSxPQUFPLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7OztJQUVELG9DQUFhOzs7SUFBYjtRQUNFLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMxQyxDQUFDOzs7OztJQUVELHNDQUFlOzs7O0lBQWYsVUFBZ0IsS0FBVTtRQUN4QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7O0lBRUQsdUNBQWdCOzs7SUFBaEI7UUFDRSxPQUFPLFlBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDckMsQ0FBQzs7OztJQUVELHFDQUFjOzs7SUFBZDtRQUNFLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMzQyxDQUFDOztnQkFwRkYsVUFBVTs7OztnQkFGRix3QkFBd0I7O0lBdUZqQyxtQkFBQztDQUFBLEFBckZELElBcUZDO1NBcEZZLFlBQVk7Ozs7OztJQUV2QiwrQkFpQkU7Ozs7O0lBRUYsZ0NBWUU7Ozs7O0lBRUYsb0NBQThEOzs7OztJQUM5RCxxQ0FBZ0U7O0lBRWhFLDZCQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBvZiBhcyBvYnNlcnZhYmxlT2YsICBPYnNlcnZhYmxlLCAgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlV2hpbGUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IE5iTGF5b3V0RGlyZWN0aW9uU2VydmljZSwgTmJMYXlvdXREaXJlY3Rpb24gfSBmcm9tICdAbmVidWxhci90aGVtZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdGF0ZVNlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuXG4gIHByb3RlY3RlZCBsYXlvdXRzOiBhbnkgPSBbXG4gICAge1xuICAgICAgbmFtZTogJ09uZSBDb2x1bW4nLFxuICAgICAgaWNvbjogJ25iLWxheW91dC1kZWZhdWx0JyxcbiAgICAgIGlkOiAnb25lLWNvbHVtbicsXG4gICAgICBzZWxlY3RlZDogdHJ1ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdUd28gQ29sdW1uJyxcbiAgICAgIGljb246ICduYi1sYXlvdXQtdHdvLWNvbHVtbicsXG4gICAgICBpZDogJ3R3by1jb2x1bW4nLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0NlbnRlciBDb2x1bW4nLFxuICAgICAgaWNvbjogJ25iLWxheW91dC1jZW50cmUnLFxuICAgICAgaWQ6ICdjZW50ZXItY29sdW1uJyxcbiAgICB9LFxuICBdO1xuXG4gIHByb3RlY3RlZCBzaWRlYmFyczogYW55ID0gW1xuICAgIHtcbiAgICAgIG5hbWU6ICdTaWRlYmFyIGF0IGxheW91dCBzdGFydCcsXG4gICAgICBpY29uOiAnbmItbGF5b3V0LXNpZGViYXItbGVmdCcsXG4gICAgICBpZDogJ3N0YXJ0JyxcbiAgICAgIHNlbGVjdGVkOiB0cnVlLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ1NpZGViYXIgYXQgbGF5b3V0IGVuZCcsXG4gICAgICBpY29uOiAnbmItbGF5b3V0LXNpZGViYXItcmlnaHQnLFxuICAgICAgaWQ6ICdlbmQnLFxuICAgIH0sXG4gIF07XG5cbiAgcHJvdGVjdGVkIGxheW91dFN0YXRlJCA9IG5ldyBCZWhhdmlvclN1YmplY3QodGhpcy5sYXlvdXRzWzBdKTtcbiAgcHJvdGVjdGVkIHNpZGViYXJTdGF0ZSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHRoaXMuc2lkZWJhcnNbMF0pO1xuXG4gIGFsaXZlID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3RvcihkaXJlY3Rpb25TZXJ2aWNlOiBOYkxheW91dERpcmVjdGlvblNlcnZpY2UpIHtcbiAgICBkaXJlY3Rpb25TZXJ2aWNlLm9uRGlyZWN0aW9uQ2hhbmdlKClcbiAgICAgIC5waXBlKHRha2VXaGlsZSgoKSA9PiB0aGlzLmFsaXZlKSlcbiAgICAgIC5zdWJzY3JpYmUoZGlyZWN0aW9uID0+IHRoaXMudXBkYXRlU2lkZWJhckljb25zKGRpcmVjdGlvbikpO1xuXG4gICAgdGhpcy51cGRhdGVTaWRlYmFySWNvbnMoZGlyZWN0aW9uU2VydmljZS5nZXREaXJlY3Rpb24oKSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmFsaXZlID0gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVNpZGViYXJJY29ucyhkaXJlY3Rpb246IE5iTGF5b3V0RGlyZWN0aW9uKSB7XG4gICAgY29uc3QgWyBzdGFydFNpZGViYXIsIGVuZFNpZGViYXIgXSA9IHRoaXMuc2lkZWJhcnM7XG4gICAgY29uc3QgaXNMdHIgPSBkaXJlY3Rpb24gPT09IE5iTGF5b3V0RGlyZWN0aW9uLkxUUjtcbiAgICBjb25zdCBzdGFydEljb25DbGFzcyA9IGlzTHRyID8gJ25iLWxheW91dC1zaWRlYmFyLWxlZnQnIDogJ25iLWxheW91dC1zaWRlYmFyLXJpZ2h0JztcbiAgICBjb25zdCBlbmRJY29uQ2xhc3MgPSBpc0x0ciA/ICduYi1sYXlvdXQtc2lkZWJhci1yaWdodCcgOiAnbmItbGF5b3V0LXNpZGViYXItbGVmdCc7XG4gICAgc3RhcnRTaWRlYmFyLmljb24gPSBzdGFydEljb25DbGFzcztcbiAgICBlbmRTaWRlYmFyLmljb24gPSBlbmRJY29uQ2xhc3M7XG4gIH1cblxuICBzZXRMYXlvdXRTdGF0ZShzdGF0ZTogYW55KTogYW55IHtcbiAgICB0aGlzLmxheW91dFN0YXRlJC5uZXh0KHN0YXRlKTtcbiAgfVxuXG4gIGdldExheW91dFN0YXRlcygpOiBPYnNlcnZhYmxlPGFueVtdPiB7XG4gICAgcmV0dXJuIG9ic2VydmFibGVPZih0aGlzLmxheW91dHMpO1xuICB9XG5cbiAgb25MYXlvdXRTdGF0ZSgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmxheW91dFN0YXRlJC5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIHNldFNpZGViYXJTdGF0ZShzdGF0ZTogYW55KTogYW55IHtcbiAgICB0aGlzLnNpZGViYXJTdGF0ZSQubmV4dChzdGF0ZSk7XG4gIH1cblxuICBnZXRTaWRlYmFyU3RhdGVzKCk6IE9ic2VydmFibGU8YW55W10+IHtcbiAgICByZXR1cm4gb2JzZXJ2YWJsZU9mKHRoaXMuc2lkZWJhcnMpO1xuICB9XG5cbiAgb25TaWRlYmFyU3RhdGUoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5zaWRlYmFyU3RhdGUkLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG59XG4iXX0=