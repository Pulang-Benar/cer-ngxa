/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { EncryptionService } from './services/encryption.service';
import { TranslationService } from './services/translation.service';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
/**
 * @param {?} http
 * @return {?}
 */
export function createTranslateLoader(http) {
    return new TranslationService(http, './assets/i18n/', '.json');
}
/** @type {?} */
export var UTILS_PROVIDERS = [
    EncryptionService,
];
var UtilsModule = /** @class */ (function () {
    function UtilsModule() {
    }
    /**
     * @return {?}
     */
    UtilsModule.forRoot = /**
     * @return {?}
     */
    function () {
        return (/** @type {?} */ ({
            ngModule: UtilsModule,
            providers: tslib_1.__spread(UTILS_PROVIDERS, TranslateModule.forRoot({
                loader: {
                    provide: TranslateLoader,
                    useFactory: (createTranslateLoader),
                    deps: [HttpClient],
                },
            }).providers),
        }));
    };
    UtilsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        TranslateModule,
                    ],
                    exports: [TranslateModule],
                    declarations: [],
                },] }
    ];
    return UtilsModule;
}());
export { UtilsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHhhcGhpcmEvdXRpbHMvIiwic291cmNlcyI6WyJsaWIvdXRpbHMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNwRSxPQUFPLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7OztBQUV2RSxNQUFNLFVBQVUscUJBQXFCLENBQUMsSUFBZ0I7SUFDcEQsT0FBTyxJQUFJLGtCQUFrQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUNqRSxDQUFDOztBQUVELE1BQU0sS0FBTyxlQUFlLEdBQUc7SUFDN0IsaUJBQWlCO0NBQ2xCO0FBRUQ7SUFBQTtJQXlCQSxDQUFDOzs7O0lBZlEsbUJBQU87OztJQUFkO1FBQ0UsT0FBTyxtQkFBcUI7WUFDMUIsUUFBUSxFQUFFLFdBQVc7WUFDckIsU0FBUyxtQkFDSixlQUFlLEVBQ2YsZUFBZSxDQUFDLE9BQU8sQ0FBQztnQkFDckIsTUFBTSxFQUFFO29CQUNKLE9BQU8sRUFBRSxlQUFlO29CQUN4QixVQUFVLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztvQkFDbkMsSUFBSSxFQUFFLENBQUMsVUFBVSxDQUFDO2lCQUNyQjthQUNGLENBQUMsQ0FBQyxTQUFTLENBQ2pCO1NBQ0YsRUFBQSxDQUFDO0lBQ0osQ0FBQzs7Z0JBeEJGLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixlQUFlO3FCQUNoQjtvQkFDRCxPQUFPLEVBQUUsQ0FBRSxlQUFlLENBQUU7b0JBQzVCLFlBQVksRUFBRSxFQUFFO2lCQUNqQjs7SUFrQkQsa0JBQUM7Q0FBQSxBQXpCRCxJQXlCQztTQWpCWSxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgRW5jcnlwdGlvblNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2VuY3J5cHRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGlvblNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3RyYW5zbGF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgVHJhbnNsYXRlTW9kdWxlLCBUcmFuc2xhdGVMb2FkZXIgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRyYW5zbGF0ZUxvYWRlcihodHRwOiBIdHRwQ2xpZW50KSB7XG4gIHJldHVybiBuZXcgVHJhbnNsYXRpb25TZXJ2aWNlKGh0dHAsICcuL2Fzc2V0cy9pMThuLycsICcuanNvbicpO1xufVxuXG5leHBvcnQgY29uc3QgVVRJTFNfUFJPVklERVJTID0gW1xuICBFbmNyeXB0aW9uU2VydmljZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgVHJhbnNsYXRlTW9kdWxlLFxuICBdLFxuICBleHBvcnRzOiBbIFRyYW5zbGF0ZU1vZHVsZSBdLFxuICBkZWNsYXJhdGlvbnM6IFtdLFxufSlcbmV4cG9ydCBjbGFzcyBVdGlsc01vZHVsZSB7XG5cbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIDxNb2R1bGVXaXRoUHJvdmlkZXJzPntcbiAgICAgIG5nTW9kdWxlOiBVdGlsc01vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAuLi5VVElMU19QUk9WSURFUlMsXG4gICAgICAgIC4uLlRyYW5zbGF0ZU1vZHVsZS5mb3JSb290KHtcbiAgICAgICAgICAgICAgbG9hZGVyOiB7XG4gICAgICAgICAgICAgICAgICBwcm92aWRlOiBUcmFuc2xhdGVMb2FkZXIsXG4gICAgICAgICAgICAgICAgICB1c2VGYWN0b3J5OiAoY3JlYXRlVHJhbnNsYXRlTG9hZGVyKSxcbiAgICAgICAgICAgICAgICAgIGRlcHM6IFtIdHRwQ2xpZW50XSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pLnByb3ZpZGVycyxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl19