/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import 'style-loader!angular2-toaster/toaster.css';
import { NbGlobalPhysicalPosition, NbToastrService, } from '@nebular/theme';
import { TranslateService } from '@ngx-translate/core';
var NgxaToastrService = /** @class */ (function () {
    function NgxaToastrService(toastrService, translate) {
        this.toastrService = toastrService;
        this.translate = translate;
        this.status = 'success';
        this.position = NbGlobalPhysicalPosition.TOP_RIGHT;
        this.duration = 5000;
        this.hasIcon = true;
        this.destroyByClick = true;
        this.preventDuplicates = false;
    }
    /**
     * @param {?} content
     * @param {?=} title
     * @param {?=} status
     * @param {?=} position
     * @param {?=} duration
     * @param {?=} hasIcon
     * @param {?=} destroyByClick
     * @return {?}
     */
    NgxaToastrService.prototype.show = /**
     * @param {?} content
     * @param {?=} title
     * @param {?=} status
     * @param {?=} position
     * @param {?=} duration
     * @param {?=} hasIcon
     * @param {?=} destroyByClick
     * @return {?}
     */
    function (content, title, status, position, duration, hasIcon, destroyByClick) {
        if (!title)
            title = this.title(status);
        this.build(content, title, status, position, duration, hasIcon, destroyByClick);
    };
    /**
     * @param {?} content
     * @param {?=} contentHasI18n
     * @param {?=} title
     * @param {?=} status
     * @param {?=} position
     * @param {?=} duration
     * @param {?=} hasIcon
     * @param {?=} destroyByClick
     * @return {?}
     */
    NgxaToastrService.prototype.showI18n = /**
     * @param {?} content
     * @param {?=} contentHasI18n
     * @param {?=} title
     * @param {?=} status
     * @param {?=} position
     * @param {?=} duration
     * @param {?=} hasIcon
     * @param {?=} destroyByClick
     * @return {?}
     */
    function (content, contentHasI18n, title, status, position, duration, hasIcon, destroyByClick) {
        var _this = this;
        if (!title)
            title = this.title(status);
        this.translate.get(title).subscribe((/**
         * @param {?} resultTitle
         * @return {?}
         */
        function (resultTitle) {
            title = resultTitle;
            if (contentHasI18n) {
                _this.build(content, title, status, position, duration, hasIcon, destroyByClick);
            }
            else {
                _this.translate.get(content).subscribe((/**
                 * @param {?} resultContent
                 * @return {?}
                 */
                function (resultContent) {
                    _this.build(resultContent, title, status, position, duration, hasIcon, destroyByClick);
                }));
            }
        }));
    };
    /**
     * @private
     * @param {?} content
     * @param {?} title
     * @param {?} status
     * @param {?} position
     * @param {?} duration
     * @param {?} hasIcon
     * @param {?} destroyByClick
     * @return {?}
     */
    NgxaToastrService.prototype.build = /**
     * @private
     * @param {?} content
     * @param {?} title
     * @param {?} status
     * @param {?} position
     * @param {?} duration
     * @param {?} hasIcon
     * @param {?} destroyByClick
     * @return {?}
     */
    function (content, title, status, position, duration, hasIcon, destroyByClick) {
        this.toastrService.show(content, title, {
            status: status ? status : this.status,
            position: position ? position : this.position,
            duration: duration ? duration : this.duration,
            hasIcon: hasIcon ? hasIcon : this.hasIcon,
            destroyByClick: destroyByClick ? destroyByClick : this.destroyByClick,
            preventDuplicates: this.preventDuplicates,
        });
    };
    /**
     * @private
     * @param {?} status
     * @return {?}
     */
    NgxaToastrService.prototype.title = /**
     * @private
     * @param {?} status
     * @return {?}
     */
    function (status) {
        /** @type {?} */
        var title = 'Success';
        switch (status) {
            case 'primary':
                title = 'Notification';
                break;
            case 'warning':
                title = 'Warning';
                break;
            case 'danger':
                title = 'Failure';
                break;
            case 'info':
                title = 'Information';
                break;
            default:
                break;
        }
        return title;
    };
    NgxaToastrService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    NgxaToastrService.ctorParameters = function () { return [
        { type: NbToastrService },
        { type: TranslateService }
    ]; };
    return NgxaToastrService;
}());
export { NgxaToastrService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NgxaToastrService.prototype.status;
    /**
     * @type {?}
     * @private
     */
    NgxaToastrService.prototype.position;
    /**
     * @type {?}
     * @private
     */
    NgxaToastrService.prototype.duration;
    /**
     * @type {?}
     * @private
     */
    NgxaToastrService.prototype.hasIcon;
    /**
     * @type {?}
     * @private
     */
    NgxaToastrService.prototype.destroyByClick;
    /**
     * @type {?}
     * @private
     */
    NgxaToastrService.prototype.preventDuplicates;
    /**
     * @type {?}
     * @private
     */
    NgxaToastrService.prototype.toastrService;
    /**
     * @type {?}
     * @private
     */
    NgxaToastrService.prototype.translate;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4YS10b2FzdHIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B4YXBoaXJhL25neGEtY29tbW9uLyIsInNvdXJjZXMiOlsibGliL3RvYXN0ci9zZXJ2aWNlcy9uZ3hhLXRvYXN0ci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sMkNBQTJDLENBQUM7QUFDbkQsT0FBTyxFQUVMLHdCQUF3QixFQUV4QixlQUFlLEdBQ2hCLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFdkQ7SUFHRSwyQkFDVSxhQUE4QixFQUM5QixTQUEyQjtRQUQzQixrQkFBYSxHQUFiLGFBQWEsQ0FBaUI7UUFDOUIsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFFN0IsV0FBTSxHQUFzQixTQUFTLENBQUM7UUFDdEMsYUFBUSxHQUFxQix3QkFBd0IsQ0FBQyxTQUFTLENBQUM7UUFDaEUsYUFBUSxHQUFXLElBQUksQ0FBQztRQUN4QixZQUFPLEdBQVksSUFBSSxDQUFDO1FBQ3hCLG1CQUFjLEdBQVksSUFBSSxDQUFDO1FBQy9CLHNCQUFpQixHQUFZLEtBQUssQ0FBQztJQVBILENBQUM7Ozs7Ozs7Ozs7O0lBU2xDLGdDQUFJOzs7Ozs7Ozs7O0lBQVgsVUFDRSxPQUFlLEVBQ2YsS0FBYyxFQUNkLE1BQTBCLEVBQzFCLFFBQTJCLEVBQzNCLFFBQWlCLEVBQ2pCLE9BQWlCLEVBQ2pCLGNBQXdCO1FBQ3hCLElBQUksQ0FBQyxLQUFLO1lBQUUsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxjQUFjLENBQUMsQ0FBQztJQUNs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Q0FBMkM7Ozs7O0lBUnpDLDBDQUFzQzs7Ozs7SUFDdEMsc0NBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgJ3N0eWxlLWxvYWRlciFhbmd1bGFyMi10b2FzdGVyL3RvYXN0ZXIuY3NzJztcbmltcG9ydCB7XG4gIE5iQ29tcG9uZW50U3RhdHVzLFxuICBOYkdsb2JhbFBoeXNpY2FsUG9zaXRpb24sXG4gIE5iR2xvYmFsUG9zaXRpb24sXG4gIE5iVG9hc3RyU2VydmljZSxcbn0gZnJvbSAnQG5lYnVsYXIvdGhlbWUnO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTmd4YVRvYXN0clNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdG9hc3RyU2VydmljZTogTmJUb2FzdHJTZXJ2aWNlLFxuICAgIHByaXZhdGUgdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlKSB7fVxuXG4gIHByaXZhdGUgc3RhdHVzOiBOYkNvbXBvbmVudFN0YXR1cyA9ICdzdWNjZXNzJztcbiAgcHJpdmF0ZSBwb3NpdGlvbjogTmJHbG9iYWxQb3NpdGlvbiA9IE5iR2xvYmFsUGh5c2ljYWxQb3NpdGlvbi5UT1BfUklHSFQ7XG4gIHByaXZhdGUgZHVyYXRpb246IG51bWJlciA9IDUwMDA7XG4gIHByaXZhdGUgaGFzSWNvbjogYm9vbGVhbiA9IHRydWU7XG4gIHByaXZhdGUgZGVzdHJveUJ5Q2xpY2s6IGJvb2xlYW4gPSB0cnVlO1xuICBwcml2YXRlIHByZXZlbnREdXBsaWNhdGVzOiBib29sZWFuID0gZmFsc2U7XG5cbiAgcHVibGljIHNob3coXG4gICAgY29udGVudDogc3RyaW5nLFxuICAgIHRpdGxlPzogc3RyaW5nLFxuICAgIHN0YXR1cz86IE5iQ29tcG9uZW50U3RhdHVzLFxuICAgIHBvc2l0aW9uPzogTmJHbG9iYWxQb3NpdGlvbixcbiAgICBkdXJhdGlvbj86IG51bWJlcixcbiAgICBoYXNJY29uPzogYm9vbGVhbixcbiAgICBkZXN0cm95QnlDbGljaz86IGJvb2xlYW4pIHtcbiAgICBpZiAoIXRpdGxlKSB0aXRsZSA9IHRoaXMudGl0bGUoc3RhdHVzKTtcbiAgICB0aGlzLmJ1aWxkKGNvbnRlbnQsIHRpdGxlLCBzdGF0dXMsIHBvc2l0aW9uLCBkdXJhdGlvbiwgaGFzSWNvbiwgZGVzdHJveUJ5Q2xpY2spO1xuICB9XG5cbiAgcHVibGljIHNob3dJMThuKFxuICAgIGNvbnRlbnQ6IHN0cmluZyxcbiAgICBjb250ZW50SGFzSTE4bj86IGJvb2xlYW4sXG4gICAgdGl0bGU/OiBzdHJpbmcsXG4gICAgc3RhdHVzPzogTmJDb21wb25lbnRTdGF0dXMsXG4gICAgcG9zaXRpb24/OiBOYkdsb2JhbFBvc2l0aW9uLFxuICAgIGR1cmF0aW9uPzogbnVtYmVyLFxuICAgIGhhc0ljb24/OiBib29sZWFuLFxuICAgIGRlc3Ryb3lCeUNsaWNrPzogYm9vbGVhbikge1xuICAgIGlmICghdGl0bGUpIHRpdGxlID0gdGhpcy50aXRsZShzdGF0dXMpO1xuICAgIHRoaXMudHJhbnNsYXRlLmdldCh0aXRsZSkuc3Vic2NyaWJlKChyZXN1bHRUaXRsZTogc3RyaW5nKSA9PiB7XG4gICAgICB0aXRsZSA9IHJlc3VsdFRpdGxlO1xuICAgICAgaWYgKGNvbnRlbnRIYXNJMThuKSB7XG4gICAgICAgIHRoaXMuYnVpbGQoY29udGVudCwgdGl0bGUsIHN0YXR1cywgcG9zaXRpb24sIGR1cmF0aW9uLCBoYXNJY29uLCBkZXN0cm95QnlDbGljayk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnRyYW5zbGF0ZS5nZXQoY29udGVudCkuc3Vic2NyaWJlKChyZXN1bHRDb250ZW50OiBzdHJpbmcpID0+IHtcbiAgICAgICAgICB0aGlzLmJ1aWxkKHJlc3VsdENvbnRlbnQsIHRpdGxlLCBzdGF0dXMsIHBvc2l0aW9uLCBkdXJhdGlvbiwgaGFzSWNvbiwgZGVzdHJveUJ5Q2xpY2spO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGQoXG4gICAgY29udGVudDogc3RyaW5nLFxuICAgIHRpdGxlOiBzdHJpbmcsXG4gICAgc3RhdHVzOiBOYkNvbXBvbmVudFN0YXR1cyxcbiAgICBwb3NpdGlvbjogTmJHbG9iYWxQb3NpdGlvbixcbiAgICBkdXJhdGlvbjogbnVtYmVyLFxuICAgIGhhc0ljb246IGJvb2xlYW4sXG4gICAgZGVzdHJveUJ5Q2xpY2s6IGJvb2xlYW4pIHtcbiAgICB0aGlzLnRvYXN0clNlcnZpY2Uuc2hvdyhjb250ZW50LCB0aXRsZSwge1xuICAgICAgc3RhdHVzOiBzdGF0dXMgPyBzdGF0dXMgOiB0aGlzLnN0YXR1cyxcbiAgICAgIHBvc2l0aW9uOiBwb3NpdGlvbiA/IHBvc2l0aW9uIDogdGhpcy5wb3NpdGlvbixcbiAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbiA/IGR1cmF0aW9uIDogdGhpcy5kdXJhdGlvbixcbiAgICAgIGhhc0ljb246IGhhc0ljb24gPyBoYXNJY29uIDogdGhpcy5oYXNJY29uLFxuICAgICAgZGVzdHJveUJ5Q2xpY2s6IGRlc3Ryb3lCeUNsaWNrID8gZGVzdHJveUJ5Q2xpY2sgOiB0aGlzLmRlc3Ryb3lCeUNsaWNrLFxuICAgICAgcHJldmVudER1cGxpY2F0ZXM6IHRoaXMucHJldmVudER1cGxpY2F0ZXMsXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHRpdGxlKHN0YXR1czogTmJDb21wb25lbnRTdGF0dXMpIHtcbiAgICBsZXQgdGl0bGUgPSAnU3VjY2Vzcyc7XG4gICAgc3dpdGNoIChzdGF0dXMpIHtcbiAgICAgIGNhc2UgJ3ByaW1hcnknOlxuICAgICAgICB0aXRsZSA9ICdOb3RpZmljYXRpb24nO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3dhcm5pbmcnOlxuICAgICAgICB0aXRsZSA9ICdXYXJuaW5nJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdkYW5nZXInOlxuICAgICAgICB0aXRsZSA9ICdGYWlsdXJlJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdpbmZvJzpcbiAgICAgICAgdGl0bGUgPSAnSW5mb3JtYXRpb24nO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gdGl0bGU7XG4gIH1cblxufVxuIl19