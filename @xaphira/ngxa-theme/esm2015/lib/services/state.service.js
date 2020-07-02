/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { of as observableOf, BehaviorSubject } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
import { NbLayoutDirectionService, NbLayoutDirection } from '@nebular/theme';
export class StateService {
    /**
     * @param {?} directionService
     */
    constructor(directionService) {
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
        () => this.alive)))
            .subscribe((/**
         * @param {?} direction
         * @return {?}
         */
        direction => this.updateSidebarIcons(direction)));
        this.updateSidebarIcons(directionService.getDirection());
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.alive = false;
    }
    /**
     * @private
     * @param {?} direction
     * @return {?}
     */
    updateSidebarIcons(direction) {
        const [startSidebar, endSidebar] = this.sidebars;
        /** @type {?} */
        const isLtr = direction === NbLayoutDirection.LTR;
        /** @type {?} */
        const startIconClass = isLtr ? 'nb-layout-sidebar-left' : 'nb-layout-sidebar-right';
        /** @type {?} */
        const endIconClass = isLtr ? 'nb-layout-sidebar-right' : 'nb-layout-sidebar-left';
        startSidebar.icon = startIconClass;
        endSidebar.icon = endIconClass;
    }
    /**
     * @param {?} state
     * @return {?}
     */
    setLayoutState(state) {
        this.layoutState$.next(state);
    }
    /**
     * @return {?}
     */
    getLayoutStates() {
        return observableOf(this.layouts);
    }
    /**
     * @return {?}
     */
    onLayoutState() {
        return this.layoutState$.asObservable();
    }
    /**
     * @param {?} state
     * @return {?}
     */
    setSidebarState(state) {
        this.sidebarState$.next(state);
    }
    /**
     * @return {?}
     */
    getSidebarStates() {
        return observableOf(this.sidebars);
    }
    /**
     * @return {?}
     */
    onSidebarState() {
        return this.sidebarState$.asObservable();
    }
}
StateService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StateService.ctorParameters = () => [
    { type: NbLayoutDirectionService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B4YXBoaXJhL25neGEtdGhlbWUvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvc3RhdGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUN0RCxPQUFPLEVBQUUsRUFBRSxJQUFJLFlBQVksRUFBZ0IsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUc3RSxNQUFNLE9BQU8sWUFBWTs7OztJQXdDdkIsWUFBWSxnQkFBMEM7UUF0QzVDLFlBQU8sR0FBUTtZQUN2QjtnQkFDRSxJQUFJLEVBQUUsWUFBWTtnQkFDbEIsSUFBSSxFQUFFLG1CQUFtQjtnQkFDekIsRUFBRSxFQUFFLFlBQVk7Z0JBQ2hCLFFBQVEsRUFBRSxJQUFJO2FBQ2Y7WUFDRDtnQkFDRSxJQUFJLEVBQUUsWUFBWTtnQkFDbEIsSUFBSSxFQUFFLHNCQUFzQjtnQkFDNUIsRUFBRSxFQUFFLFlBQVk7YUFDakI7WUFDRDtnQkFDRSxJQUFJLEVBQUUsZUFBZTtnQkFDckIsSUFBSSxFQUFFLGtCQUFrQjtnQkFDeEIsRUFBRSxFQUFFLGVBQWU7YUFDcEI7U0FDRixDQUFDO1FBRVEsYUFBUSxHQUFRO1lBQ3hCO2dCQUNFLElBQUksRUFBRSx5QkFBeUI7Z0JBQy9CLElBQUksRUFBRSx3QkFBd0I7Z0JBQzlCLEVBQUUsRUFBRSxPQUFPO2dCQUNYLFFBQVEsRUFBRSxJQUFJO2FBQ2Y7WUFDRDtnQkFDRSxJQUFJLEVBQUUsdUJBQXVCO2dCQUM3QixJQUFJLEVBQUUseUJBQXlCO2dCQUMvQixFQUFFLEVBQUUsS0FBSzthQUNWO1NBQ0YsQ0FBQztRQUVRLGlCQUFZLEdBQUcsSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BELGtCQUFhLEdBQUcsSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRWhFLFVBQUssR0FBRyxJQUFJLENBQUM7UUFHWCxnQkFBZ0IsQ0FBQyxpQkFBaUIsRUFBRTthQUNqQyxJQUFJLENBQUMsU0FBUzs7O1FBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBQyxDQUFDO2FBQ2pDLFNBQVM7Ozs7UUFBQyxTQUFTLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsRUFBQyxDQUFDO1FBRTlELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO0lBQzNELENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQzs7Ozs7O0lBRU8sa0JBQWtCLENBQUMsU0FBNEI7Y0FDL0MsQ0FBRSxZQUFZLEVBQUUsVUFBVSxDQUFFLEdBQUcsSUFBSSxDQUFDLFFBQVE7O2NBQzVDLEtBQUssR0FBRyxTQUFTLEtBQUssaUJBQWlCLENBQUMsR0FBRzs7Y0FDM0MsY0FBYyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDLHlCQUF5Qjs7Y0FDN0UsWUFBWSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMseUJBQXlCLENBQUMsQ0FBQyxDQUFDLHdCQUF3QjtRQUNqRixZQUFZLENBQUMsSUFBSSxHQUFHLGNBQWMsQ0FBQztRQUNuQyxVQUFVLENBQUMsSUFBSSxHQUFHLFlBQVksQ0FBQztJQUNqQyxDQUFDOzs7OztJQUVELGNBQWMsQ0FBQyxLQUFVO1FBQ3ZCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hDLENBQUM7Ozs7SUFFRCxlQUFlO1FBQ2IsT0FBTyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Ozs7SUFFRCxhQUFhO1FBQ1gsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFDLENBQUM7Ozs7O0lBRUQsZUFBZSxDQUFDLEtBQVU7UUFDeEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakMsQ0FBQzs7OztJQUVELGdCQUFnQjtRQUNkLE9BQU8sWUFBWSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7O0lBRUQsY0FBYztRQUNaLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMzQyxDQUFDOzs7WUFwRkYsVUFBVTs7OztZQUZGLHdCQUF3Qjs7Ozs7OztJQUsvQiwrQkFpQkU7Ozs7O0lBRUYsZ0NBWUU7Ozs7O0lBRUYsb0NBQThEOzs7OztJQUM5RCxxQ0FBZ0U7O0lBRWhFLDZCQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBvZiBhcyBvYnNlcnZhYmxlT2YsICBPYnNlcnZhYmxlLCAgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlV2hpbGUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IE5iTGF5b3V0RGlyZWN0aW9uU2VydmljZSwgTmJMYXlvdXREaXJlY3Rpb24gfSBmcm9tICdAbmVidWxhci90aGVtZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdGF0ZVNlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuXG4gIHByb3RlY3RlZCBsYXlvdXRzOiBhbnkgPSBbXG4gICAge1xuICAgICAgbmFtZTogJ09uZSBDb2x1bW4nLFxuICAgICAgaWNvbjogJ25iLWxheW91dC1kZWZhdWx0JyxcbiAgICAgIGlkOiAnb25lLWNvbHVtbicsXG4gICAgICBzZWxlY3RlZDogdHJ1ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdUd28gQ29sdW1uJyxcbiAgICAgIGljb246ICduYi1sYXlvdXQtdHdvLWNvbHVtbicsXG4gICAgICBpZDogJ3R3by1jb2x1bW4nLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0NlbnRlciBDb2x1bW4nLFxuICAgICAgaWNvbjogJ25iLWxheW91dC1jZW50cmUnLFxuICAgICAgaWQ6ICdjZW50ZXItY29sdW1uJyxcbiAgICB9LFxuICBdO1xuXG4gIHByb3RlY3RlZCBzaWRlYmFyczogYW55ID0gW1xuICAgIHtcbiAgICAgIG5hbWU6ICdTaWRlYmFyIGF0IGxheW91dCBzdGFydCcsXG4gICAgICBpY29uOiAnbmItbGF5b3V0LXNpZGViYXItbGVmdCcsXG4gICAgICBpZDogJ3N0YXJ0JyxcbiAgICAgIHNlbGVjdGVkOiB0cnVlLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ1NpZGViYXIgYXQgbGF5b3V0IGVuZCcsXG4gICAgICBpY29uOiAnbmItbGF5b3V0LXNpZGViYXItcmlnaHQnLFxuICAgICAgaWQ6ICdlbmQnLFxuICAgIH0sXG4gIF07XG5cbiAgcHJvdGVjdGVkIGxheW91dFN0YXRlJCA9IG5ldyBCZWhhdmlvclN1YmplY3QodGhpcy5sYXlvdXRzWzBdKTtcbiAgcHJvdGVjdGVkIHNpZGViYXJTdGF0ZSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHRoaXMuc2lkZWJhcnNbMF0pO1xuXG4gIGFsaXZlID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3RvcihkaXJlY3Rpb25TZXJ2aWNlOiBOYkxheW91dERpcmVjdGlvblNlcnZpY2UpIHtcbiAgICBkaXJlY3Rpb25TZXJ2aWNlLm9uRGlyZWN0aW9uQ2hhbmdlKClcbiAgICAgIC5waXBlKHRha2VXaGlsZSgoKSA9PiB0aGlzLmFsaXZlKSlcbiAgICAgIC5zdWJzY3JpYmUoZGlyZWN0aW9uID0+IHRoaXMudXBkYXRlU2lkZWJhckljb25zKGRpcmVjdGlvbikpO1xuXG4gICAgdGhpcy51cGRhdGVTaWRlYmFySWNvbnMoZGlyZWN0aW9uU2VydmljZS5nZXREaXJlY3Rpb24oKSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmFsaXZlID0gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVNpZGViYXJJY29ucyhkaXJlY3Rpb246IE5iTGF5b3V0RGlyZWN0aW9uKSB7XG4gICAgY29uc3QgWyBzdGFydFNpZGViYXIsIGVuZFNpZGViYXIgXSA9IHRoaXMuc2lkZWJhcnM7XG4gICAgY29uc3QgaXNMdHIgPSBkaXJlY3Rpb24gPT09IE5iTGF5b3V0RGlyZWN0aW9uLkxUUjtcbiAgICBjb25zdCBzdGFydEljb25DbGFzcyA9IGlzTHRyID8gJ25iLWxheW91dC1zaWRlYmFyLWxlZnQnIDogJ25iLWxheW91dC1zaWRlYmFyLXJpZ2h0JztcbiAgICBjb25zdCBlbmRJY29uQ2xhc3MgPSBpc0x0ciA/ICduYi1sYXlvdXQtc2lkZWJhci1yaWdodCcgOiAnbmItbGF5b3V0LXNpZGViYXItbGVmdCc7XG4gICAgc3RhcnRTaWRlYmFyLmljb24gPSBzdGFydEljb25DbGFzcztcbiAgICBlbmRTaWRlYmFyLmljb24gPSBlbmRJY29uQ2xhc3M7XG4gIH1cblxuICBzZXRMYXlvdXRTdGF0ZShzdGF0ZTogYW55KTogYW55IHtcbiAgICB0aGlzLmxheW91dFN0YXRlJC5uZXh0KHN0YXRlKTtcbiAgfVxuXG4gIGdldExheW91dFN0YXRlcygpOiBPYnNlcnZhYmxlPGFueVtdPiB7XG4gICAgcmV0dXJuIG9ic2VydmFibGVPZih0aGlzLmxheW91dHMpO1xuICB9XG5cbiAgb25MYXlvdXRTdGF0ZSgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmxheW91dFN0YXRlJC5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIHNldFNpZGViYXJTdGF0ZShzdGF0ZTogYW55KTogYW55IHtcbiAgICB0aGlzLnNpZGViYXJTdGF0ZSQubmV4dChzdGF0ZSk7XG4gIH1cblxuICBnZXRTaWRlYmFyU3RhdGVzKCk6IE9ic2VydmFibGU8YW55W10+IHtcbiAgICByZXR1cm4gb2JzZXJ2YWJsZU9mKHRoaXMuc2lkZWJhcnMpO1xuICB9XG5cbiAgb25TaWRlYmFyU3RhdGUoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5zaWRlYmFyU3RhdGUkLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG59XG4iXX0=