/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { LeafletModel } from '@xaphira/ngxa-common';
import { PANIC } from '@xaphira/shared';
import { NgxaCerMonitoringPreviewComponent } from '../preview/ngxa-cer-monitoring-preview.component';
var NgxaCerMonitoringInfoComponent = /** @class */ (function () {
    function NgxaCerMonitoringInfoComponent(router, panicService, dialogService) {
        this.router = router;
        this.panicService = panicService;
        this.dialogService = dialogService;
        this.marker = { mark: [0, 0] };
        this.data = {};
    }
    Object.defineProperty(NgxaCerMonitoringInfoComponent.prototype, "markerFn", {
        set: /**
         * @param {?} marker
         * @return {?}
         */
        function (marker) {
            var _this = this;
            if (marker) {
                this.panicService.getPanic(marker.alt).then((/**
                 * @param {?} value
                 * @return {?}
                 */
                function (value) {
                    _this.data = value;
                }));
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NgxaCerMonitoringInfoComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    NgxaCerMonitoringInfoComponent.prototype.onViewDetails = /**
     * @return {?}
     */
    function () {
        this.router.navigate(['/app/dashboard/details', this.data['panicCode']]);
    };
    /**
     * @return {?}
     */
    NgxaCerMonitoringInfoComponent.prototype.onPreview = /**
     * @return {?}
     */
    function () {
        this.dialogService.open(NgxaCerMonitoringPreviewComponent, {
            context: {
                checksum: this.data['fileMetadata']['checksum'],
                user: this.data['username'],
                fileType: this.data['fileMetadata']['fileType'],
            },
        });
    };
    NgxaCerMonitoringInfoComponent.decorators = [
        { type: Component, args: [{
                    selector: 'xa-cer-monitoring-info',
                    template: "<div class=\"civilians-emergency\">\n    <h5 class=\"h5\">{{data.name}}</h5>\n    <div class=\"civilians-body\">\n        <div class=\"form-group row\">\n            <div class=\"col-sm-5 col-md-5 col-sm-5\">\n                <span class=\"label-body\">{{'ID Number' | translate}}</span>\n            </div>\n            <div class=\"col-sm-7 col-md-7 col-sm-7\">\n                <span>{{data.idNumber}}</span>\n            </div>\n        </div>\n        <div class=\"form-group row\">\n            <div class=\"col-sm-5 col-md-5 col-sm-5\">\n                <span class=\"label-body\">{{'Gender' | translate}}</span>\n            </div>\n            <div class=\"col-sm-7 col-md-7 col-sm-7\">\n                <span>{{data.gender}}</span>\n            </div>\n        </div>\n        <div class=\"form-group row\">\n            <div class=\"col-sm-5 col-md-5 col-sm-5\">\n                <span class=\"label-body\">{{'Age' | translate}}</span>\n            </div>\n            <div class=\"col-sm-7 col-md-7 col-sm-7\">\n                <span>{{data.age + ' '}}{{'Years' | translate}}</span>\n            </div>\n        </div>\n        <div class=\"form-group row\">\n            <div class=\"col-sm-5 col-md-5 col-sm-5\">\n                <span class=\"label-body\">{{'Phone Number' | translate}}</span>\n            </div>\n            <div class=\"col-sm-7 col-md-7 col-sm-7\">\n                <span>{{data.phoneNumber}}</span>\n            </div>\n        </div>\n        <div class=\"form-group row\">\n            <div class=\"col-sm-5 col-md-5 col-sm-5\">\n                <span class=\"label-body\">{{'Device Name' | translate}}</span>\n            </div>\n            <div class=\"col-sm-7 col-md-7 col-sm-7\">\n                <span>{{data.latestDeviceName}}</span>\n            </div>\n        </div>\n        <div class=\"form-group row\">\n            <div class=\"col-sm-5 col-md-5 col-sm-5\">\n                <span class=\"label-body\">{{'Location' | translate}}</span>\n            </div>\n            <div class=\"col-sm-7 col-md-7 col-sm-7\">\n                <span>{{data.latestFormattedAddress}}</span>\n            </div>\n        </div>\n        <div class=\"form-group row\">\n            <div class=\"col-sm-8 col-md-8 col-sm-8\">\n                <button\n                type=\"submit\"\n                status=\"warning\"\n                class=\"preview-right\"\n                (click)=\"onPreview()\"\n                nbButton>\n                {{ 'Preview' | translate}}\n                </button>\n            </div>\n            <div class=\"col-sm-4 col-md-4 col-sm-4\">\n                <button\n                type=\"submit\"\n                status=\"primary\"\n                class=\"details-right\"\n                (click)=\"onViewDetails()\"\n                nbButton>\n                {{ 'Details' | translate}}\n                </button>\n            </div>\n        </div>\n    </div>\n    <div class=\"civilians-footer\">\n    </div>\n</div>\n",
                    styles: [".nb-theme-default :host .civilians-emergency{width:100%;z-index:999}.nb-theme-default :host .civilians-body{margin:2rem 0;font-size:.85rem}.nb-theme-default :host .label-body{color:#8e9196;font-family:Open Sans,sans-serif;line-height:1rem;font-weight:700}.nb-theme-default :host .preview-right{right:0;position:absolute;margin:2rem 0}.nb-theme-default :host .details-right{right:0;position:absolute;margin:2rem 1rem}.nb-theme-dark :host .civilians-emergency{width:100%;z-index:999}.nb-theme-dark :host .civilians-body{margin:2rem 0;font-size:.85rem}.nb-theme-dark :host .label-body{color:#8e9196;font-family:Open Sans,sans-serif;line-height:1rem;font-weight:700}.nb-theme-dark :host .preview-right{right:0;position:absolute;margin:2rem 0}.nb-theme-dark :host .details-right{right:0;position:absolute;margin:2rem 1rem}.nb-theme-cosmic :host .civilians-emergency{width:100%;z-index:999}.nb-theme-cosmic :host .civilians-body{margin:2rem 0;font-size:.85rem}.nb-theme-cosmic :host .label-body{color:#8e9196;font-family:Open Sans,sans-serif;line-height:1rem;font-weight:700}.nb-theme-cosmic :host .preview-right{right:0;position:absolute;margin:2rem 0}.nb-theme-cosmic :host .details-right{right:0;position:absolute;margin:2rem 1rem}.nb-theme-corporate :host .civilians-emergency{width:100%;z-index:999}.nb-theme-corporate :host .civilians-body{margin:2rem 0;font-size:.85rem}.nb-theme-corporate :host .label-body{color:#8e9196;font-family:Open Sans,sans-serif;line-height:1rem;font-weight:700}.nb-theme-corporate :host .preview-right{right:0;position:absolute;margin:2rem 0}.nb-theme-corporate :host .details-right{right:0;position:absolute;margin:2rem 1rem}"]
                }] }
    ];
    /** @nocollapse */
    NgxaCerMonitoringInfoComponent.ctorParameters = function () { return [
        { type: Router },
        { type: undefined, decorators: [{ type: Inject, args: [PANIC,] }] },
        { type: NbDialogService }
    ]; };
    NgxaCerMonitoringInfoComponent.propDecorators = {
        markerFn: [{ type: Input }]
    };
    return NgxaCerMonitoringInfoComponent;
}());
export { NgxaCerMonitoringInfoComponent };
if (false) {
    /** @type {?} */
    NgxaCerMonitoringInfoComponent.prototype.marker;
    /** @type {?} */
    NgxaCerMonitoringInfoComponent.prototype.data;
    /**
     * @type {?}
     * @private
     */
    NgxaCerMonitoringInfoComponent.prototype.router;
    /**
     * @type {?}
     * @private
     */
    NgxaCerMonitoringInfoComponent.prototype.panicService;
    /**
     * @type {?}
     * @private
     */
    NgxaCerMonitoringInfoComponent.prototype.dialogService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4YS1jZXItbW9uaXRvcmluZy1pbmZvLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B4YXBoaXJhL25neGEtY2VyLyIsInNvdXJjZXMiOlsibGliL2Rhc2hib2FyZC9tb25pdG9yaW5nL2luZm8vbmd4YS1jZXItbW9uaXRvcmluZy1pbmZvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxLQUFLLEVBQXVCLE1BQU0saUJBQWlCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFFckc7SUFpQkUsd0NBQW9CLE1BQWMsRUFBeUIsWUFBaUMsRUFDbEYsYUFBOEI7UUFEcEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUF5QixpQkFBWSxHQUFaLFlBQVksQ0FBcUI7UUFDbEYsa0JBQWEsR0FBYixhQUFhLENBQWlCO1FBSmpDLFdBQU0sR0FBaUIsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQztRQUN0QyxTQUFJLEdBQVEsRUFBRSxDQUFDO0lBR3FCLENBQUM7SUFYNUMsc0JBQW9CLG9EQUFROzs7OztRQUE1QixVQUE2QixNQUFvQjtZQUFqRCxpQkFNQztZQUxDLElBQUksTUFBTSxFQUFFO2dCQUNWLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJOzs7O2dCQUFDLFVBQUMsS0FBVTtvQkFDckQsS0FBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7Z0JBQ3BCLENBQUMsRUFBQyxDQUFDO2FBQ0o7UUFDSCxDQUFDOzs7T0FBQTs7OztJQU9ELGlEQUFROzs7SUFBUjtJQUNBLENBQUM7Ozs7SUFFTSxzREFBYTs7O0lBQXBCO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyx3QkFBd0IsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzRSxDQUFDOzs7O0lBRUQsa0RBQVM7OztJQUFUO1FBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsaUNBQWlDLEVBQUU7WUFDekQsT0FBTyxFQUFFO2dCQUNQLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQztnQkFDL0MsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO2dCQUMzQixRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLENBQUM7YUFDaEQ7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDOztnQkFuQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx3QkFBd0I7b0JBQ2xDLGc4RkFBd0Q7O2lCQUV6RDs7OztnQkFWUSxNQUFNO2dEQXVCd0IsTUFBTSxTQUFDLEtBQUs7Z0JBdEIxQyxlQUFlOzs7MkJBWXJCLEtBQUs7O0lBOEJSLHFDQUFDO0NBQUEsQUFyQ0QsSUFxQ0M7U0FoQ1ksOEJBQThCOzs7SUFTekMsZ0RBQTZDOztJQUM3Qyw4Q0FBc0I7Ozs7O0lBRVYsZ0RBQXNCOzs7OztJQUFFLHNEQUF3RDs7Ozs7SUFDMUYsdURBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgSW5qZWN0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBOYkRpYWxvZ1NlcnZpY2UgfSBmcm9tICdAbmVidWxhci90aGVtZSc7XG5pbXBvcnQgeyBMZWFmbGV0TW9kZWwgfSBmcm9tICdAeGFwaGlyYS9uZ3hhLWNvbW1vbic7XG5pbXBvcnQgeyBQQU5JQywgUGFuaWNGYWN0b3J5U2VydmljZSB9IGZyb20gJ0B4YXBoaXJhL3NoYXJlZCc7XG5pbXBvcnQgeyBOZ3hhQ2VyTW9uaXRvcmluZ1ByZXZpZXdDb21wb25lbnQgfSBmcm9tICcuLi9wcmV2aWV3L25neGEtY2VyLW1vbml0b3JpbmctcHJldmlldy5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd4YS1jZXItbW9uaXRvcmluZy1pbmZvJyxcbiAgdGVtcGxhdGVVcmw6ICcuL25neGEtY2VyLW1vbml0b3JpbmctaW5mby5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWyduZ3hhLWNlci1tb25pdG9yaW5nLWluZm8uY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgTmd4YUNlck1vbml0b3JpbmdJbmZvQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBwdWJsaWMgc2V0IG1hcmtlckZuKG1hcmtlcjogTGVhZmxldE1vZGVsKSB7XG4gICAgaWYgKG1hcmtlcikge1xuICAgICAgdGhpcy5wYW5pY1NlcnZpY2UuZ2V0UGFuaWMobWFya2VyLmFsdCkudGhlbigodmFsdWU6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLmRhdGEgPSB2YWx1ZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBwdWJsaWMgbWFya2VyOiBMZWFmbGV0TW9kZWwgPSB7IG1hcms6IFswLDBdfTtcbiAgcHVibGljIGRhdGE6IGFueSA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIEBJbmplY3QoUEFOSUMpIHByaXZhdGUgcGFuaWNTZXJ2aWNlOiBQYW5pY0ZhY3RvcnlTZXJ2aWNlLFxuICAgIHByaXZhdGUgZGlhbG9nU2VydmljZTogTmJEaWFsb2dTZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbiAgcHVibGljIG9uVmlld0RldGFpbHMoKTogdm9pZCB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvYXBwL2Rhc2hib2FyZC9kZXRhaWxzJywgdGhpcy5kYXRhWydwYW5pY0NvZGUnXV0pO1xuICB9XG5cbiAgb25QcmV2aWV3KCk6IHZvaWQge1xuICAgIHRoaXMuZGlhbG9nU2VydmljZS5vcGVuKE5neGFDZXJNb25pdG9yaW5nUHJldmlld0NvbXBvbmVudCwge1xuICAgICAgY29udGV4dDoge1xuICAgICAgICBjaGVja3N1bTogdGhpcy5kYXRhWydmaWxlTWV0YWRhdGEnXVsnY2hlY2tzdW0nXSxcbiAgICAgICAgdXNlcjogdGhpcy5kYXRhWyd1c2VybmFtZSddLFxuICAgICAgICBmaWxlVHlwZTogdGhpcy5kYXRhWydmaWxlTWV0YWRhdGEnXVsnZmlsZVR5cGUnXSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxufVxuIl19