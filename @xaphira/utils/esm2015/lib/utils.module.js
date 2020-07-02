/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export const UTILS_PROVIDERS = [
    EncryptionService,
];
export class UtilsModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return (/** @type {?} */ ({
            ngModule: UtilsModule,
            providers: [
                ...UTILS_PROVIDERS,
                ...TranslateModule.forRoot({
                    loader: {
                        provide: TranslateLoader,
                        useFactory: (createTranslateLoader),
                        deps: [HttpClient],
                    },
                }).providers,
            ],
        }));
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHhhcGhpcmEvdXRpbHMvIiwic291cmNlcyI6WyJsaWIvdXRpbHMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxlQUFlLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7Ozs7O0FBRXZFLE1BQU0sVUFBVSxxQkFBcUIsQ0FBQyxJQUFnQjtJQUNwRCxPQUFPLElBQUksa0JBQWtCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ2pFLENBQUM7O0FBRUQsTUFBTSxPQUFPLGVBQWUsR0FBRztJQUM3QixpQkFBaUI7Q0FDbEI7QUFVRCxNQUFNLE9BQU8sV0FBVzs7OztJQUV0QixNQUFNLENBQUMsT0FBTztRQUNaLE9BQU8sbUJBQXFCO1lBQzFCLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFNBQVMsRUFBRTtnQkFDVCxHQUFHLGVBQWU7Z0JBQ2xCLEdBQUcsZUFBZSxDQUFDLE9BQU8sQ0FBQztvQkFDckIsTUFBTSxFQUFFO3dCQUNKLE9BQU8sRUFBRSxlQUFlO3dCQUN4QixVQUFVLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQzt3QkFDbkMsSUFBSSxFQUFFLENBQUMsVUFBVSxDQUFDO3FCQUNyQjtpQkFDRixDQUFDLENBQUMsU0FBUzthQUNqQjtTQUNGLEVBQUEsQ0FBQztJQUNKLENBQUM7OztZQXhCRixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osZUFBZTtpQkFDaEI7Z0JBQ0QsT0FBTyxFQUFFLENBQUUsZUFBZSxDQUFFO2dCQUM1QixZQUFZLEVBQUUsRUFBRTthQUNqQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEVuY3J5cHRpb25TZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9lbmNyeXB0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgVHJhbnNsYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy90cmFuc2xhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IFRyYW5zbGF0ZU1vZHVsZSwgVHJhbnNsYXRlTG9hZGVyIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUcmFuc2xhdGVMb2FkZXIoaHR0cDogSHR0cENsaWVudCkge1xuICByZXR1cm4gbmV3IFRyYW5zbGF0aW9uU2VydmljZShodHRwLCAnLi9hc3NldHMvaTE4bi8nLCAnLmpzb24nKTtcbn1cblxuZXhwb3J0IGNvbnN0IFVUSUxTX1BST1ZJREVSUyA9IFtcbiAgRW5jcnlwdGlvblNlcnZpY2UsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFRyYW5zbGF0ZU1vZHVsZSxcbiAgXSxcbiAgZXhwb3J0czogWyBUcmFuc2xhdGVNb2R1bGUgXSxcbiAgZGVjbGFyYXRpb25zOiBbXSxcbn0pXG5leHBvcnQgY2xhc3MgVXRpbHNNb2R1bGUge1xuXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiA8TW9kdWxlV2l0aFByb3ZpZGVycz57XG4gICAgICBuZ01vZHVsZTogVXRpbHNNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgLi4uVVRJTFNfUFJPVklERVJTLFxuICAgICAgICAuLi5UcmFuc2xhdGVNb2R1bGUuZm9yUm9vdCh7XG4gICAgICAgICAgICAgIGxvYWRlcjoge1xuICAgICAgICAgICAgICAgICAgcHJvdmlkZTogVHJhbnNsYXRlTG9hZGVyLFxuICAgICAgICAgICAgICAgICAgdXNlRmFjdG9yeTogKGNyZWF0ZVRyYW5zbGF0ZUxvYWRlciksXG4gICAgICAgICAgICAgICAgICBkZXBzOiBbSHR0cENsaWVudF0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KS5wcm92aWRlcnMsXG4gICAgICBdLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==