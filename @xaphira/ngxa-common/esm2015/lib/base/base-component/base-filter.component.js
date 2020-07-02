/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BaseFormComponent } from './base-form.component';
/**
 * @abstract
 * @template T
 */
export class BaseFilterComponent extends BaseFormComponent {
    /**
     * @param {?} injector
     * @param {?=} filtersConfig
     * @param {?=} controlsConfig
     */
    constructor(injector, filtersConfig, controlsConfig) {
        super(injector, controlsConfig);
        this.injector = injector;
        this.rows = [];
        if (filtersConfig)
            this.formGroupFilter = this.formBuilder.group(filtersConfig);
    }
    /**
     * @param {?} keyword
     * @return {?}
     */
    doFilterAdvanced(keyword) {
        this.keyword = keyword;
    }
}
if (false) {
    /** @type {?} */
    BaseFilterComponent.prototype.formGroupFilter;
    /** @type {?} */
    BaseFilterComponent.prototype.filters;
    /** @type {?} */
    BaseFilterComponent.prototype.keyword;
    /** @type {?} */
    BaseFilterComponent.prototype.rows;
    /** @type {?} */
    BaseFilterComponent.prototype.injector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1maWx0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHhhcGhpcmEvbmd4YS1jb21tb24vIiwic291cmNlcyI6WyJsaWIvYmFzZS9iYXNlLWNvbXBvbmVudC9iYXNlLWZpbHRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7OztBQUkxRCxNQUFNLE9BQWdCLG1CQUF1QixTQUFRLGlCQUFvQjs7Ozs7O0lBT3JFLFlBQ1csUUFBa0IsRUFDekIsYUFFQyxFQUNELGNBRUM7UUFDRCxLQUFLLENBQUMsUUFBUSxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBUHpCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFIdEIsU0FBSSxHQUFVLEVBQUUsQ0FBQztRQVdwQixJQUFJLGFBQWE7WUFDYixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsT0FBZ0I7UUFDL0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDekIsQ0FBQztDQUVKOzs7SUF0QkcsOENBQWtDOztJQUNsQyxzQ0FBa0M7O0lBQ2xDLHNDQUF3Qjs7SUFDeEIsbUNBQXdCOztJQUdwQix1Q0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmFzZUZvcm1Db21wb25lbnQgfSBmcm9tICcuL2Jhc2UtZm9ybS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRGF0YXRhYmxlRmlsdGVyLCBLZXl3b3JkIH0gZnJvbSAnLi4vLi4vdGFibGUvbW9kZWxzL2RhdGF0YWJsZS5tb2RlbCc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlRmlsdGVyQ29tcG9uZW50PFQ+IGV4dGVuZHMgQmFzZUZvcm1Db21wb25lbnQ8VD4ge1xuXG4gICAgcHVibGljIGZvcm1Hcm91cEZpbHRlcjogRm9ybUdyb3VwO1xuICAgIHB1YmxpYyBmaWx0ZXJzOiBEYXRhdGFibGVGaWx0ZXJbXTtcbiAgICBwdWJsaWMga2V5d29yZDogS2V5d29yZDtcbiAgICBwdWJsaWMgcm93czogYW55W10gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgaW5qZWN0b3I6IEluamVjdG9yLFxuICAgICAgICBmaWx0ZXJzQ29uZmlnPzoge1xuICAgICAgICAgICAgW2tleTogc3RyaW5nXTogYW55O1xuICAgICAgICB9LFxuICAgICAgICBjb250cm9sc0NvbmZpZz86IHtcbiAgICAgICAgICAgIFtrZXk6IHN0cmluZ106IGFueTtcbiAgICAgICAgfSkge1xuICAgICAgICBzdXBlcihpbmplY3RvciwgY29udHJvbHNDb25maWcpO1xuICAgICAgICBpZiAoZmlsdGVyc0NvbmZpZylcbiAgICAgICAgICAgIHRoaXMuZm9ybUdyb3VwRmlsdGVyID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cChmaWx0ZXJzQ29uZmlnKTtcbiAgICB9XG5cbiAgICBkb0ZpbHRlckFkdmFuY2VkKGtleXdvcmQ6IEtleXdvcmQpIHtcbiAgICAgIHRoaXMua2V5d29yZCA9IGtleXdvcmQ7XG4gICAgfVxuXG59XG4iXX0=