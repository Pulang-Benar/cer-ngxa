/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
export class CapitalizePipe {
    /**
     * @param {?} input
     * @return {?}
     */
    transform(input) {
        return input && input.length
            ? (input.charAt(0).toUpperCase() + input.slice(1).toLowerCase())
            : input;
    }
}
CapitalizePipe.decorators = [
    { type: Pipe, args: [{ name: 'ngxCapitalize' },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FwaXRhbGl6ZS5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHhhcGhpcmEvbmd4YS10aGVtZS8iLCJzb3VyY2VzIjpbImxpYi9waXBlcy9jYXBpdGFsaXplLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBR3BELE1BQU0sT0FBTyxjQUFjOzs7OztJQUV6QixTQUFTLENBQUMsS0FBYTtRQUNyQixPQUFPLEtBQUssSUFBSSxLQUFLLENBQUMsTUFBTTtZQUMxQixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDaEUsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUNaLENBQUM7OztZQVBGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHsgbmFtZTogJ25neENhcGl0YWxpemUnIH0pXG5leHBvcnQgY2xhc3MgQ2FwaXRhbGl6ZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICB0cmFuc2Zvcm0oaW5wdXQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGlucHV0ICYmIGlucHV0Lmxlbmd0aFxuICAgICAgPyAoaW5wdXQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBpbnB1dC5zbGljZSgxKS50b0xvd2VyQ2FzZSgpKVxuICAgICAgOiBpbnB1dDtcbiAgfVxufVxuIl19