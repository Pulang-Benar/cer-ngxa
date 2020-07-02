/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Inject } from '@angular/core';
import { API, HTTP_SERVICE } from '@xaphira/shared';
import { tap } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';
var NgxaReportsPreviewComponent = /** @class */ (function () {
    function NgxaReportsPreviewComponent(apiPath, httpBaseService, sanitizer) {
        this.apiPath = apiPath;
        this.httpBaseService = httpBaseService;
        this.sanitizer = sanitizer;
    }
    /**
     * @return {?}
     */
    NgxaReportsPreviewComponent.prototype.ngOnInit = /**
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
    NgxaReportsPreviewComponent.prototype.getEvidence = /**
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
    NgxaReportsPreviewComponent.decorators = [
        { type: Component, args: [{
                    selector: 'xa-reports-preview',
                    template: "<nb-card *ngIf=\"url && fileType.includes('image')\">\n    <nb-card-body>\n        <img [src]=\"url\" height=\"500\">\n    </nb-card-body>\n</nb-card>\n<video *ngIf=\"url && fileType.includes('video')\" [src]=\"url\" height=\"500\" controls></video>\n<audio *ngIf=\"url && fileType.includes('audio')\" controls>\n    <source [src]=\"url\" [type]=\"fileType\">\n</audio>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    NgxaReportsPreviewComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [API,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [HTTP_SERVICE,] }] },
        { type: DomSanitizer }
    ]; };
    NgxaReportsPreviewComponent.propDecorators = {
        url: [{ type: Input }],
        checksum: [{ type: Input }],
        user: [{ type: Input }],
        fileType: [{ type: Input }]
    };
    return NgxaReportsPreviewComponent;
}());
export { NgxaReportsPreviewComponent };
if (false) {
    /** @type {?} */
    NgxaReportsPreviewComponent.prototype.url;
    /** @type {?} */
    NgxaReportsPreviewComponent.prototype.checksum;
    /** @type {?} */
    NgxaReportsPreviewComponent.prototype.user;
    /** @type {?} */
    NgxaReportsPreviewComponent.prototype.fileType;
    /**
     * @type {?}
     * @private
     */
    NgxaReportsPreviewComponent.prototype.apiPath;
    /**
     * @type {?}
     * @private
     */
    NgxaReportsPreviewComponent.prototype.httpBaseService;
    /** @type {?} */
    NgxaReportsPreviewComponent.prototype.sanitizer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4YS1yZXBvcnRzLXByZXZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHhhcGhpcmEvbmd4YS1jZXIvIiwic291cmNlcyI6WyJsaWIvcmVwb3J0cy9lbWVyZ2VuY3kvZGV0YWlsL3ByZXZpZXcvbmd4YS1yZXBvcnRzLXByZXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakUsT0FBTyxFQUFZLEdBQUcsRUFBRSxZQUFZLEVBQXNCLE1BQU0saUJBQWlCLENBQUM7QUFDbEYsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUV6RDtJQVlFLHFDQUNzQixPQUFpQixFQUNSLGVBQW1DLEVBQ3pELFNBQXVCO1FBRlYsWUFBTyxHQUFQLE9BQU8sQ0FBVTtRQUNSLG9CQUFlLEdBQWYsZUFBZSxDQUFvQjtRQUN6RCxjQUFTLEdBQVQsU0FBUyxDQUFjO0lBQUcsQ0FBQzs7OztJQUVwQyw4Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDNUQsQ0FBQzs7Ozs7Ozs7SUFFTyxpREFBVzs7Ozs7OztJQUFuQixVQUFvQixRQUFhLEVBQUUsSUFBWSxFQUFFLFFBQWdCO1FBQWpFLGlCQWNDO1FBYkMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQzlCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsVUFBVSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQ2xELENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxFQUFFLGFBQWEsQ0FBQzthQUMvQixJQUFJLENBQUMsR0FBRzs7OztRQUFDLFVBQUMsUUFBYTs7Z0JBQ2QsUUFBUSxHQUFTLElBQUksSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQzFDLElBQUksRUFBRSxRQUFRO2FBQ2YsQ0FBQzs7Z0JBQ0ksTUFBTSxHQUFlLElBQUksVUFBVSxFQUFFO1lBQzNDLE1BQU0sQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDL0IsTUFBTSxDQUFDLFNBQVM7OztZQUFHO2dCQUNqQixLQUFJLENBQUMsR0FBRyxHQUFHLEtBQUksQ0FBQyxTQUFTLENBQUMsc0JBQXNCLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1lBQzdFLENBQUMsQ0FBQSxDQUFDO1FBQ04sQ0FBQyxFQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNsQixDQUFDOztnQkFuQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLDZYQUFvRDs7aUJBRXJEOzs7O2dEQVNJLE1BQU0sU0FBQyxHQUFHO2dEQUNWLE1BQU0sU0FBQyxZQUFZO2dCQWhCZixZQUFZOzs7c0JBU2xCLEtBQUs7MkJBQ0wsS0FBSzt1QkFDTCxLQUFLOzJCQUNMLEtBQUs7O0lBMkJSLGtDQUFDO0NBQUEsQUFyQ0QsSUFxQ0M7U0FoQ1ksMkJBQTJCOzs7SUFFdEMsMENBQXlCOztJQUN6QiwrQ0FBOEI7O0lBQzlCLDJDQUEwQjs7SUFDMUIsK0NBQThCOzs7OztJQUc1Qiw4Q0FBcUM7Ozs7O0lBQ3JDLHNEQUFnRTs7SUFDaEUsZ0RBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFQSU1vZGVsLCBBUEksIEhUVFBfU0VSVklDRSwgSHR0cEZhY3RvcnlTZXJ2aWNlIH0gZnJvbSAnQHhhcGhpcmEvc2hhcmVkJztcbmltcG9ydCB7IHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd4YS1yZXBvcnRzLXByZXZpZXcnLFxuICB0ZW1wbGF0ZVVybDogJy4vbmd4YS1yZXBvcnRzLXByZXZpZXcuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnbmd4YS1yZXBvcnRzLXByZXZpZXcuY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgTmd4YVJlcG9ydHNQcmV2aWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBwdWJsaWMgdXJsOiBhbnk7XG4gIEBJbnB1dCgpIHB1YmxpYyBjaGVja3N1bTogYW55O1xuICBASW5wdXQoKSBwdWJsaWMgdXNlcjogYW55O1xuICBASW5wdXQoKSBwdWJsaWMgZmlsZVR5cGU6IGFueTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KEFQSSlwcml2YXRlIGFwaVBhdGg6IEFQSU1vZGVsLFxuICAgIEBJbmplY3QoSFRUUF9TRVJWSUNFKXByaXZhdGUgaHR0cEJhc2VTZXJ2aWNlOiBIdHRwRmFjdG9yeVNlcnZpY2UsXG4gICAgcHVibGljIHNhbml0aXplcjogRG9tU2FuaXRpemVyKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuZ2V0RXZpZGVuY2UodGhpcy5jaGVja3N1bSwgdGhpcy51c2VyLCB0aGlzLmZpbGVUeXBlKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0RXZpZGVuY2UoY2hlY2tzdW06IGFueSwgdXNlcjogc3RyaW5nLCBmaWxlVHlwZTogc3RyaW5nKSB7XG4gICAgdGhpcy5odHRwQmFzZVNlcnZpY2UuSFRUUF9BVVRIKFxuICAgIHRoaXMuYXBpUGF0aFsnZmlsZSddWydldmlkZW5jZSddLCBudWxsLCBudWxsLCBudWxsLFxuICAgIFtjaGVja3N1bSwgdXNlcl0sICdhcnJheWJ1ZmZlcicpXG4gICAgLnBpcGUodGFwKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgIGNvbnN0IGZpbGVCbG9iOiBCbG9iID0gbmV3IEJsb2IoW3Jlc3BvbnNlXSwge1xuICAgICAgICAgIHR5cGU6IGZpbGVUeXBlLFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgcmVhZGVyOiBGaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZUJsb2IpO1xuICAgICAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4ge1xuICAgICAgICAgIHRoaXMudXJsID0gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFVybChyZWFkZXIucmVzdWx0LnRvU3RyaW5nKCkpO1xuICAgICAgICB9O1xuICAgIH0pKS5zdWJzY3JpYmUoKTtcbiAgfVxuXG59XG4iXX0=