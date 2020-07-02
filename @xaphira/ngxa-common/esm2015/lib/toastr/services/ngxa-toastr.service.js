/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import 'style-loader!angular2-toaster/toaster.css';
import { NbGlobalPhysicalPosition, NbToastrService, } from '@nebular/theme';
import { TranslateService } from '@ngx-translate/core';
export class NgxaToastrService {
    /**
     * @param {?} toastrService
     * @param {?} translate
     */
    constructor(toastrService, translate) {
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
    show(content, title, status, position, duration, hasIcon, destroyByClick) {
        if (!title)
            title = this.title(status);
        this.build(content, title, status, position, duration, hasIcon, destroyByClick);
    }
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
    showI18n(content, contentHasI18n, title, status, position, duration, hasIcon, destroyByClick) {
        if (!title)
            title = this.title(status);
        this.translate.get(title).subscribe((/**
         * @param {?} resultTitle
         * @return {?}
         */
        (resultTitle) => {
            title = resultTitle;
            if (contentHasI18n) {
                this.build(content, title, status, position, duration, hasIcon, destroyByClick);
            }
            else {
                this.translate.get(content).subscribe((/**
                 * @param {?} resultContent
                 * @return {?}
                 */
                (resultContent) => {
                    this.build(resultContent, title, status, position, duration, hasIcon, destroyByClick);
                }));
            }
        }));
    }
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
    build(content, title, status, position, duration, hasIcon, destroyByClick) {
        this.toastrService.show(content, title, {
            status: status ? status : this.status,
            position: position ? position : this.position,
            duration: duration ? duration : this.duration,
            hasIcon: hasIcon ? hasIcon : this.hasIcon,
            destroyByClick: destroyByClick ? destroyByClick : this.destroyByClick,
            preventDuplicates: this.preventDuplicates,
        });
    }
    /**
     * @private
     * @param {?} status
     * @return {?}
     */
    title(status) {
        /** @type {?} */
        let title = 'Success';
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
    }
}
NgxaToastrService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
NgxaToastrService.ctorParameters = () => [
    { type: NbToastrService },
    { type: TranslateService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4YS10b2FzdHIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B4YXBoaXJhL25neGEtY29tbW9uLyIsInNvdXJjZXMiOlsibGliL3RvYXN0ci9zZXJ2aWNlcy9uZ3hhLXRvYXN0ci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sMkNBQTJDLENBQUM7QUFDbkQsT0FBTyxFQUVMLHdCQUF3QixFQUV4QixlQUFlLEdBQ2hCLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFHdkQsTUFBTSxPQUFPLGlCQUFpQjs7Ozs7SUFFNUIsWUFDVSxhQUE4QixFQUM5QixTQUEyQjtRQUQzQixrQkFBYSxHQUFiLGFBQWEsQ0FBaUI7UUFDOUIsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFFN0IsV0FBTSxHQUFzQixTQUFTLENBQUM7UUFDdEMsYUFBUSxHQUFxQix3QkFBd0IsQ0FBQyxTQUFTLENBQUM7UUFDaEUsYUFBUSxHQUFXLElBQUksQ0FBQztRQUN4QixZQUFPLEdBQVksSUFBSSxDQUFDO1FBQ3hCLG1CQUFjLEdBQVksSUFBSSxDQUFDO1FBQy9CLHNCQUFpQixHQUFZLEtBQUssQ0FBQztJQVBILENBQUM7Ozs7Ozs7Ozs7O0lBU2xDLElBQUksQ0FDVCxPQUFlLEVBQ2YsS0FBYyxFQUNkLE1BQTBCLEVBQzFCLFFBQTJCLEVBQzNCLFFBQWlCLEVBQ2pCLE9BQWlCLEVBQ2pCLGNBQXdCO1FBQ3hCLElBQUksQ0FBQyxLQUFLO1lBQUUsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxjQUFjLENBQUMsQ0FB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Y3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCAnc3R5bGUtbG9hZGVyIWFuZ3VsYXIyLXRvYXN0ZXIvdG9hc3Rlci5jc3MnO1xuaW1wb3J0IHtcbiAgTmJDb21wb25lbnRTdGF0dXMsXG4gIE5iR2xvYmFsUGh5c2ljYWxQb3NpdGlvbixcbiAgTmJHbG9iYWxQb3NpdGlvbixcbiAgTmJUb2FzdHJTZXJ2aWNlLFxufSBmcm9tICdAbmVidWxhci90aGVtZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOZ3hhVG9hc3RyU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0b2FzdHJTZXJ2aWNlOiBOYlRvYXN0clNlcnZpY2UsXG4gICAgcHJpdmF0ZSB0cmFuc2xhdGU6IFRyYW5zbGF0ZVNlcnZpY2UpIHt9XG5cbiAgcHJpdmF0ZSBzdGF0dXM6IE5iQ29tcG9uZW50U3RhdHVzID0gJ3N1Y2Nlc3MnO1xuICBwcml2YXRlIHBvc2l0aW9uOiBOYkdsb2JhbFBvc2l0aW9uID0gTmJHbG9iYWxQaHlzaWNhbFBvc2l0aW9uLlRPUF9SSUdIVDtcbiAgcHJpdmF0ZSBkdXJhdGlvbjogbnVtYmVyID0gNTAwMDtcbiAgcHJpdmF0ZSBoYXNJY29uOiBib29sZWFuID0gdHJ1ZTtcbiAgcHJpdmF0ZSBkZXN0cm95QnlDbGljazogYm9vbGVhbiA9IHRydWU7XG4gIHByaXZhdGUgcHJldmVudER1cGxpY2F0ZXM6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBwdWJsaWMgc2hvdyhcbiAgICBjb250ZW50OiBzdHJpbmcsXG4gICAgdGl0bGU/OiBzdHJpbmcsXG4gICAgc3RhdHVzPzogTmJDb21wb25lbnRTdGF0dXMsXG4gICAgcG9zaXRpb24/OiBOYkdsb2JhbFBvc2l0aW9uLFxuICAgIGR1cmF0aW9uPzogbnVtYmVyLFxuICAgIGhhc0ljb24/OiBib29sZWFuLFxuICAgIGRlc3Ryb3lCeUNsaWNrPzogYm9vbGVhbikge1xuICAgIGlmICghdGl0bGUpIHRpdGxlID0gdGhpcy50aXRsZShzdGF0dXMpO1xuICAgIHRoaXMuYnVpbGQoY29udGVudCwgdGl0bGUsIHN0YXR1cywgcG9zaXRpb24sIGR1cmF0aW9uLCBoYXNJY29uLCBkZXN0cm95QnlDbGljayk7XG4gIH1cblxuICBwdWJsaWMgc2hvd0kxOG4oXG4gICAgY29udGVudDogc3RyaW5nLFxuICAgIGNvbnRlbnRIYXNJMThuPzogYm9vbGVhbixcbiAgICB0aXRsZT86IHN0cmluZyxcbiAgICBzdGF0dXM/OiBOYkNvbXBvbmVudFN0YXR1cyxcbiAgICBwb3NpdGlvbj86IE5iR2xvYmFsUG9zaXRpb24sXG4gICAgZHVyYXRpb24/OiBudW1iZXIsXG4gICAgaGFzSWNvbj86IGJvb2xlYW4sXG4gICAgZGVzdHJveUJ5Q2xpY2s/OiBib29sZWFuKSB7XG4gICAgaWYgKCF0aXRsZSkgdGl0bGUgPSB0aGlzLnRpdGxlKHN0YXR1cyk7XG4gICAgdGhpcy50cmFuc2xhdGUuZ2V0KHRpdGxlKS5zdWJzY3JpYmUoKHJlc3VsdFRpdGxlOiBzdHJpbmcpID0+IHtcbiAgICAgIHRpdGxlID0gcmVzdWx0VGl0bGU7XG4gICAgICBpZiAoY29udGVudEhhc0kxOG4pIHtcbiAgICAgICAgdGhpcy5idWlsZChjb250ZW50LCB0aXRsZSwgc3RhdHVzLCBwb3NpdGlvbiwgZHVyYXRpb24sIGhhc0ljb24sIGRlc3Ryb3lCeUNsaWNrKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudHJhbnNsYXRlLmdldChjb250ZW50KS5zdWJzY3JpYmUoKHJlc3VsdENvbnRlbnQ6IHN0cmluZykgPT4ge1xuICAgICAgICAgIHRoaXMuYnVpbGQocmVzdWx0Q29udGVudCwgdGl0bGUsIHN0YXR1cywgcG9zaXRpb24sIGR1cmF0aW9uLCBoYXNJY29uLCBkZXN0cm95QnlDbGljayk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBidWlsZChcbiAgICBjb250ZW50OiBzdHJpbmcsXG4gICAgdGl0bGU6IHN0cmluZyxcbiAgICBzdGF0dXM6IE5iQ29tcG9uZW50U3RhdHVzLFxuICAgIHBvc2l0aW9uOiBOYkdsb2JhbFBvc2l0aW9uLFxuICAgIGR1cmF0aW9uOiBudW1iZXIsXG4gICAgaGFzSWNvbjogYm9vbGVhbixcbiAgICBkZXN0cm95QnlDbGljazogYm9vbGVhbikge1xuICAgIHRoaXMudG9hc3RyU2VydmljZS5zaG93KGNvbnRlbnQsIHRpdGxlLCB7XG4gICAgICBzdGF0dXM6IHN0YXR1cyA/IHN0YXR1cyA6IHRoaXMuc3RhdHVzLFxuICAgICAgcG9zaXRpb246IHBvc2l0aW9uID8gcG9zaXRpb24gOiB0aGlzLnBvc2l0aW9uLFxuICAgICAgZHVyYXRpb246IGR1cmF0aW9uID8gZHVyYXRpb24gOiB0aGlzLmR1cmF0aW9uLFxuICAgICAgaGFzSWNvbjogaGFzSWNvbiA/IGhhc0ljb24gOiB0aGlzLmhhc0ljb24sXG4gICAgICBkZXN0cm95QnlDbGljazogZGVzdHJveUJ5Q2xpY2sgPyBkZXN0cm95QnlDbGljayA6IHRoaXMuZGVzdHJveUJ5Q2xpY2ssXG4gICAgICBwcmV2ZW50RHVwbGljYXRlczogdGhpcy5wcmV2ZW50RHVwbGljYXRlcyxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgdGl0bGUoc3RhdHVzOiBOYkNvbXBvbmVudFN0YXR1cykge1xuICAgIGxldCB0aXRsZSA9ICdTdWNjZXNzJztcbiAgICBzd2l0Y2ggKHN0YXR1cykge1xuICAgICAgY2FzZSAncHJpbWFyeSc6XG4gICAgICAgIHRpdGxlID0gJ05vdGlmaWNhdGlvbic7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnd2FybmluZyc6XG4gICAgICAgIHRpdGxlID0gJ1dhcm5pbmcnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2Rhbmdlcic6XG4gICAgICAgIHRpdGxlID0gJ0ZhaWx1cmUnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2luZm8nOlxuICAgICAgICB0aXRsZSA9ICdJbmZvcm1hdGlvbic7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiB0aXRsZTtcbiAgfVxuXG59XG4iXX0=