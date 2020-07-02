/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { BaseFormComponent } from './base-form.component';
/**
 * @abstract
 * @template T
 */
var /**
 * @abstract
 * @template T
 */
BaseFilterComponent = /** @class */ (function (_super) {
    tslib_1.__extends(BaseFilterComponent, _super);
    function BaseFilterComponent(injector, filtersConfig, controlsConfig) {
        var _this = _super.call(this, injector, controlsConfig) || this;
        _this.injector = injector;
        _this.rows = [];
        if (filtersConfig)
            _this.formGroupFilter = _this.formBuilder.group(filtersConfig);
        return _this;
    }
    /**
     * @param {?} keyword
     * @return {?}
     */
    BaseFilterComponent.prototype.doFilterAdvanced = /**
     * @param {?} keyword
     * @return {?}
     */
    function (keyword) {
        this.keyword = keyword;
    };
    return BaseFilterComponent;
}(BaseFormComponent));
/**
 * @abstract
 * @template T
 */
export { BaseFilterComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1maWx0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHhhcGhpcmEvbmd4YS1jb21tb24vIiwic291cmNlcyI6WyJsaWIvYmFzZS9iYXNlLWNvbXBvbmVudC9iYXNlLWZpbHRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7QUFJMUQ7Ozs7O0lBQXFELCtDQUFvQjtJQU9yRSw2QkFDVyxRQUFrQixFQUN6QixhQUVDLEVBQ0QsY0FFQztRQVBMLFlBUUksa0JBQU0sUUFBUSxFQUFFLGNBQWMsQ0FBQyxTQUdsQztRQVZVLGNBQVEsR0FBUixRQUFRLENBQVU7UUFIdEIsVUFBSSxHQUFVLEVBQUUsQ0FBQztRQVdwQixJQUFJLGFBQWE7WUFDYixLQUFJLENBQUMsZUFBZSxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDOztJQUNyRSxDQUFDOzs7OztJQUVELDhDQUFnQjs7OztJQUFoQixVQUFpQixPQUFnQjtRQUMvQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUN6QixDQUFDO0lBRUwsMEJBQUM7QUFBRCxDQUFDLEFBeEJELENBQXFELGlCQUFpQixHQXdCckU7Ozs7Ozs7O0lBdEJHLDhDQUFrQzs7SUFDbEMsc0NBQWtDOztJQUNsQyxzQ0FBd0I7O0lBQ3hCLG1DQUF3Qjs7SUFHcEIsdUNBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJhc2VGb3JtQ29tcG9uZW50IH0gZnJvbSAnLi9iYXNlLWZvcm0uY29tcG9uZW50JztcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IERhdGF0YWJsZUZpbHRlciwgS2V5d29yZCB9IGZyb20gJy4uLy4uL3RhYmxlL21vZGVscy9kYXRhdGFibGUubW9kZWwnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZUZpbHRlckNvbXBvbmVudDxUPiBleHRlbmRzIEJhc2VGb3JtQ29tcG9uZW50PFQ+IHtcblxuICAgIHB1YmxpYyBmb3JtR3JvdXBGaWx0ZXI6IEZvcm1Hcm91cDtcbiAgICBwdWJsaWMgZmlsdGVyczogRGF0YXRhYmxlRmlsdGVyW107XG4gICAgcHVibGljIGtleXdvcmQ6IEtleXdvcmQ7XG4gICAgcHVibGljIHJvd3M6IGFueVtdID0gW107XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIGluamVjdG9yOiBJbmplY3RvcixcbiAgICAgICAgZmlsdGVyc0NvbmZpZz86IHtcbiAgICAgICAgICAgIFtrZXk6IHN0cmluZ106IGFueTtcbiAgICAgICAgfSxcbiAgICAgICAgY29udHJvbHNDb25maWc/OiB7XG4gICAgICAgICAgICBba2V5OiBzdHJpbmddOiBhbnk7XG4gICAgICAgIH0pIHtcbiAgICAgICAgc3VwZXIoaW5qZWN0b3IsIGNvbnRyb2xzQ29uZmlnKTtcbiAgICAgICAgaWYgKGZpbHRlcnNDb25maWcpXG4gICAgICAgICAgICB0aGlzLmZvcm1Hcm91cEZpbHRlciA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoZmlsdGVyc0NvbmZpZyk7XG4gICAgfVxuXG4gICAgZG9GaWx0ZXJBZHZhbmNlZChrZXl3b3JkOiBLZXl3b3JkKSB7XG4gICAgICB0aGlzLmtleXdvcmQgPSBrZXl3b3JkO1xuICAgIH1cblxufVxuIl19