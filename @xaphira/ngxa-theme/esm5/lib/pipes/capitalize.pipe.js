/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
var CapitalizePipe = /** @class */ (function () {
    function CapitalizePipe() {
    }
    /**
     * @param {?} input
     * @return {?}
     */
    CapitalizePipe.prototype.transform = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        return input && input.length
            ? (input.charAt(0).toUpperCase() + input.slice(1).toLowerCase())
            : input;
    };
    CapitalizePipe.decorators = [
        { type: Pipe, args: [{ name: 'ngxCapitalize' },] }
    ];
    return CapitalizePipe;
}());
export { CapitalizePipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FwaXRhbGl6ZS5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHhhcGhpcmEvbmd4YS10aGVtZS8iLCJzb3VyY2VzIjpbImxpYi9waXBlcy9jYXBpdGFsaXplLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRXBEO0lBQUE7SUFRQSxDQUFDOzs7OztJQUxDLGtDQUFTOzs7O0lBQVQsVUFBVSxLQUFhO1FBQ3JCLE9BQU8sS0FBSyxJQUFJLEtBQUssQ0FBQyxNQUFNO1lBQzFCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNoRSxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQ1osQ0FBQzs7Z0JBUEYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRTs7SUFRL0IscUJBQUM7Q0FBQSxBQVJELElBUUM7U0FQWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7IG5hbWU6ICduZ3hDYXBpdGFsaXplJyB9KVxuZXhwb3J0IGNsYXNzIENhcGl0YWxpemVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgdHJhbnNmb3JtKGlucHV0OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBpbnB1dCAmJiBpbnB1dC5sZW5ndGhcbiAgICAgID8gKGlucHV0LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgaW5wdXQuc2xpY2UoMSkudG9Mb3dlckNhc2UoKSlcbiAgICAgIDogaW5wdXQ7XG4gIH1cbn1cbiJdfQ==