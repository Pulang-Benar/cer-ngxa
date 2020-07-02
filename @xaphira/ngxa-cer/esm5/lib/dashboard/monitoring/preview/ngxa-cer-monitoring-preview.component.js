/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Inject } from '@angular/core';
import { API, HTTP_SERVICE } from '@xaphira/shared';
import { tap } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';
var NgxaCerMonitoringPreviewComponent = /** @class */ (function () {
    function NgxaCerMonitoringPreviewComponent(apiPath, httpBaseService, sanitizer) {
        this.apiPath = apiPath;
        this.httpBaseService = httpBaseService;
        this.sanitizer = sanitizer;
    }
    /**
     * @return {?}
     */
    NgxaCerMonitoringPreviewComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.getEvidence(this.checksum, this.user, this.fileType);
    };
    /**
     * @private
     * @param {?} checksum
     * @param {?} user
     * @param {?} fileType
     * @return {?}
     */
    NgxaCerMonitoringPreviewComponent.prototype.getEvidence = /**
     * @private
     * @param {?} checksum
     * @param {?} user
     * @param {?} fileType
     * @return {?}
     */
    function (checksum, user, fileType) {
        var _this = this;
        this.httpBaseService.HTTP_AUTH(this.apiPath['file']['evidence'], null, null, null, [checksum, user], 'arraybuffer')
            .pipe(tap((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            /** @type {?} */
            var fileBlob = new Blob([response], {
                type: fileType,
            });
            /** @type {?} */
            var reader = new FileReader();
            reader.readAsDataURL(fileBlob);
            reader.onloadend = (/**
             * @return {?}
             */
            function () {
                _this.url = _this.sanitizer.bypassSecurityTrustUrl(reader.result.toString());
            });
        }))).subscribe();
    };
    NgxaCerMonitoringPreviewComponent.decorators = [
        { type: Component, args: [{
                    selector: 'xa-cer-monitoring-preview',
                    template: "<nb-card *ngIf=\"url && fileType.includes('image')\">\n    <nb-card-body>\n        <img [src]=\"url\" height=\"500\">\n    </nb-card-body>\n</nb-card>\n<video *ngIf=\"url && fileType.includes('video')\" [src]=\"url\" height=\"500\" controls></video>\n<audio *ngIf=\"url && fileType.includes('audio')\" controls>\n    <source [src]=\"url\" [type]=\"fileType\">\n</audio>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    NgxaCerMonitoringPreviewComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [API,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [HTTP_SERVICE,] }] },
        { type: DomSanitizer }
    ]; };
    NgxaCerMonitoringPreviewComponent.propDecorators = {
        url: [{ type: Input }],
        checksum: [{ type: Input }],
        user: [{ type: Input }],
        fileType: [{ type: Input }]
    };
    return NgxaCerMonitoringPreviewComponent;
}());
export { NgxaCerMonitoringPreviewComponent };
if (false) {
    /** @type {?} */
    NgxaCerMonitoringPreviewComponent.prototype.url;
    /** @type {?} */
    NgxaCerMonitoringPreviewComponent.prototype.checksum;
    /** @type {?} */
    NgxaCerMonitoringPreviewComponent.prototype.user;
    /** @type {?} */
    NgxaCerMonitoringPreviewComponent.prototype.fileType;
    /**
     * @type {?}
     * @private
     */
    NgxaCerMonitoringPreviewComponent.prototype.apiPath;
    /**
     * @type {?}
     * @private
     */
    NgxaCerMonitoringPreviewComponent.prototype.httpBaseService;
    /** @type {?} */
    NgxaCerMonitoringPreviewComponent.prototype.sanitizer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4YS1jZXItbW9uaXRvcmluZy1wcmV2aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B4YXBoaXJhL25neGEtY2VyLyIsInNvdXJjZXMiOlsibGliL2Rhc2hib2FyZC9tb25pdG9yaW5nL3ByZXZpZXcvbmd4YS1jZXItbW9uaXRvcmluZy1wcmV2aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pFLE9BQU8sRUFBWSxHQUFHLEVBQUUsWUFBWSxFQUFzQixNQUFNLGlCQUFpQixDQUFDO0FBQ2xGLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFekQ7SUFZRSwyQ0FDc0IsT0FBaUIsRUFDUixlQUFtQyxFQUN6RCxTQUF1QjtRQUZWLFlBQU8sR0FBUCxPQUFPLENBQVU7UUFDUixvQkFBZSxHQUFmLGVBQWUsQ0FBb0I7UUFDekQsY0FBUyxHQUFULFNBQVMsQ0FBYztJQUFHLENBQUM7Ozs7SUFFcEMsb0RBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzVELENBQUM7Ozs7Ozs7O0lBRU8sdURBQVc7Ozs7Ozs7SUFBbkIsVUFBb0IsUUFBYSxFQUFFLElBQVksRUFBRSxRQUFnQjtRQUFqRSxpQkFjQztRQWJDLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUM5QixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFVBQVUsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUNsRCxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsRUFBRSxhQUFhLENBQUM7YUFDL0IsSUFBSSxDQUFDLEdBQUc7Ozs7UUFBQyxVQUFDLFFBQWE7O2dCQUNkLFFBQVEsR0FBUyxJQUFJLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUMxQyxJQUFJLEVBQUUsUUFBUTthQUNmLENBQUM7O2dCQUNJLE1BQU0sR0FBZSxJQUFJLFVBQVUsRUFBRTtZQUMzQyxNQUFNLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQy9CLE1BQU0sQ0FBQyxTQUFTOzs7WUFBRztnQkFDakIsS0FBSSxDQUFDLEdBQUcsR0FBRyxLQUFJLENBQUMsU0FBUyxDQUFDLHNCQUFzQixDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztZQUM3RSxDQUFDLENBQUEsQ0FBQztRQUNOLENBQUMsRUFBQyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbEIsQ0FBQzs7Z0JBbkNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsMkJBQTJCO29CQUNyQyw2WEFBMkQ7O2lCQUU1RDs7OztnREFTSSxNQUFNLFNBQUMsR0FBRztnREFDVixNQUFNLFNBQUMsWUFBWTtnQkFoQmYsWUFBWTs7O3NCQVNsQixLQUFLOzJCQUNMLEtBQUs7dUJBQ0wsS0FBSzsyQkFDTCxLQUFLOztJQTJCUix3Q0FBQztDQUFBLEFBckNELElBcUNDO1NBaENZLGlDQUFpQzs7O0lBRTVDLGdEQUF5Qjs7SUFDekIscURBQThCOztJQUM5QixpREFBMEI7O0lBQzFCLHFEQUE4Qjs7Ozs7SUFHNUIsb0RBQXFDOzs7OztJQUNyQyw0REFBZ0U7O0lBQ2hFLHNEQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBUElNb2RlbCwgQVBJLCBIVFRQX1NFUlZJQ0UsIEh0dHBGYWN0b3J5U2VydmljZSB9IGZyb20gJ0B4YXBoaXJhL3NoYXJlZCc7XG5pbXBvcnQgeyB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAneGEtY2VyLW1vbml0b3JpbmctcHJldmlldycsXG4gIHRlbXBsYXRlVXJsOiAnLi9uZ3hhLWNlci1tb25pdG9yaW5nLXByZXZpZXcuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnbmd4YS1jZXItbW9uaXRvcmluZy1wcmV2aWV3LmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIE5neGFDZXJNb25pdG9yaW5nUHJldmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgcHVibGljIHVybDogYW55O1xuICBASW5wdXQoKSBwdWJsaWMgY2hlY2tzdW06IGFueTtcbiAgQElucHV0KCkgcHVibGljIHVzZXI6IGFueTtcbiAgQElucHV0KCkgcHVibGljIGZpbGVUeXBlOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChBUEkpcHJpdmF0ZSBhcGlQYXRoOiBBUElNb2RlbCxcbiAgICBASW5qZWN0KEhUVFBfU0VSVklDRSlwcml2YXRlIGh0dHBCYXNlU2VydmljZTogSHR0cEZhY3RvcnlTZXJ2aWNlLFxuICAgIHB1YmxpYyBzYW5pdGl6ZXI6IERvbVNhbml0aXplcikge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmdldEV2aWRlbmNlKHRoaXMuY2hlY2tzdW0sIHRoaXMudXNlciwgdGhpcy5maWxlVHlwZSk7XG4gIH1cblxuICBwcml2YXRlIGdldEV2aWRlbmNlKGNoZWNrc3VtOiBhbnksIHVzZXI6IHN0cmluZywgZmlsZVR5cGU6IHN0cmluZykge1xuICAgIHRoaXMuaHR0cEJhc2VTZXJ2aWNlLkhUVFBfQVVUSChcbiAgICB0aGlzLmFwaVBhdGhbJ2ZpbGUnXVsnZXZpZGVuY2UnXSwgbnVsbCwgbnVsbCwgbnVsbCxcbiAgICBbY2hlY2tzdW0sIHVzZXJdLCAnYXJyYXlidWZmZXInKVxuICAgIC5waXBlKHRhcCgocmVzcG9uc2U6IGFueSkgPT4ge1xuICAgICAgICBjb25zdCBmaWxlQmxvYjogQmxvYiA9IG5ldyBCbG9iKFtyZXNwb25zZV0sIHtcbiAgICAgICAgICB0eXBlOiBmaWxlVHlwZSxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHJlYWRlcjogRmlsZVJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGVCbG9iKTtcbiAgICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHtcbiAgICAgICAgICB0aGlzLnVybCA9IHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RVcmwocmVhZGVyLnJlc3VsdC50b1N0cmluZygpKTtcbiAgICAgICAgfTtcbiAgICB9KSkuc3Vic2NyaWJlKCk7XG4gIH1cblxufVxuIl19