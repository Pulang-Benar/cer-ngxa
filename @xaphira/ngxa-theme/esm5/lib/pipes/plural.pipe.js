/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
var PluralPipe = /** @class */ (function () {
    function PluralPipe() {
    }
    /**
     * @param {?} input
     * @param {?} label
     * @param {?=} pluralLabel
     * @return {?}
     */
    PluralPipe.prototype.transform = /**
     * @param {?} input
     * @param {?} label
     * @param {?=} pluralLabel
     * @return {?}
     */
    function (input, label, pluralLabel) {
        if (pluralLabel === void 0) { pluralLabel = ''; }
        input = input || 0;
        return input === 1
            ? input + " " + label
            : pluralLabel
                ? input + " " + pluralLabel
                : input + " " + label + "s";
    };
    PluralPipe.decorators = [
        { type: Pipe, args: [{ name: 'ngxPlural' },] }
    ];
    return PluralPipe;
}());
export { PluralPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGx1cmFsLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AeGFwaGlyYS9uZ3hhLXRoZW1lLyIsInNvdXJjZXMiOlsibGliL3BpcGVzL3BsdXJhbC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUVwRDtJQUFBO0lBV0EsQ0FBQzs7Ozs7OztJQVJDLDhCQUFTOzs7Ozs7SUFBVCxVQUFVLEtBQWEsRUFBRSxLQUFhLEVBQUUsV0FBd0I7UUFBeEIsNEJBQUEsRUFBQSxnQkFBd0I7UUFDOUQsS0FBSyxHQUFHLEtBQUssSUFBSSxDQUFDLENBQUM7UUFDbkIsT0FBTyxLQUFLLEtBQUssQ0FBQztZQUNoQixDQUFDLENBQUksS0FBSyxTQUFJLEtBQU87WUFDckIsQ0FBQyxDQUFDLFdBQVc7Z0JBQ1gsQ0FBQyxDQUFJLEtBQUssU0FBSSxXQUFhO2dCQUMzQixDQUFDLENBQUksS0FBSyxTQUFJLEtBQUssTUFBRyxDQUFDO0lBQzdCLENBQUM7O2dCQVZGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7O0lBVzNCLGlCQUFDO0NBQUEsQUFYRCxJQVdDO1NBVlksVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoeyBuYW1lOiAnbmd4UGx1cmFsJyB9KVxuZXhwb3J0IGNsYXNzIFBsdXJhbFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICB0cmFuc2Zvcm0oaW5wdXQ6IG51bWJlciwgbGFiZWw6IHN0cmluZywgcGx1cmFsTGFiZWw6IHN0cmluZyA9ICcnKTogc3RyaW5nIHtcbiAgICBpbnB1dCA9IGlucHV0IHx8IDA7XG4gICAgcmV0dXJuIGlucHV0ID09PSAxXG4gICAgICA/IGAke2lucHV0fSAke2xhYmVsfWBcbiAgICAgIDogcGx1cmFsTGFiZWxcbiAgICAgICAgPyBgJHtpbnB1dH0gJHtwbHVyYWxMYWJlbH1gXG4gICAgICAgIDogYCR7aW5wdXR9ICR7bGFiZWx9c2A7XG4gIH1cbn1cbiJdfQ==