/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Inject } from '@angular/core';
import { API, HTTP_SERVICE } from '@xaphira/shared';
import { tap } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';
export class NgxaCerMonitoringPreviewComponent {
    /**
     * @param {?} apiPath
     * @param {?} httpBaseService
     * @param {?} sanitizer
     */
    constructor(apiPath, httpBaseService, sanitizer) {
        this.apiPath = apiPath;
        this.httpBaseService = httpBaseService;
        this.sanitizer = sanitizer;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.getEvidence(this.checksum, this.user, this.fileType);
    }
    /**
     * @private
     * @param {?} checksum
     * @param {?} user
     * @param {?} fileType
     * @return {?}
     */
    getEvidence(checksum, user, fileType) {
        this.httpBaseService.HTTP_AUTH(this.apiPath['file']['evidence'], null, null, null, [checksum, user], 'arraybuffer')
            .pipe(tap((/**
         * @param {?} response
         * @return {?}
         */
        (response) => {
            /** @type {?} */
            const fileBlob = new Blob([response], {
                type: fileType,
            });
            /** @type {?} */
            const reader = new FileReader();
            reader.readAsDataURL(fileBlob);
            reader.onloadend = (/**
             * @return {?}
             */
            () => {
                this.url = this.sanitizer.bypassSecurityTrustUrl(reader.result.toString());
            });
        }))).subscribe();
    }
}
NgxaCerMonitoringPreviewComponent.decorators = [
    { type: Component, args: [{
                selector: 'xa-cer-monitoring-preview',
                template: "<nb-card *ngIf=\"url && fileType.includes('image')\">\n    <nb-card-body>\n        <img [src]=\"url\" height=\"500\">\n    </nb-card-body>\n</nb-card>\n<video *ngIf=\"url && fileType.includes('video')\" [src]=\"url\" height=\"500\" controls></video>\n<audio *ngIf=\"url && fileType.includes('audio')\" controls>\n    <source [src]=\"url\" [type]=\"fileType\">\n</audio>",
                styles: [""]
            }] }
];
/** @nocollapse */
NgxaCerMonitoringPreviewComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [API,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [HTTP_SERVICE,] }] },
    { type: DomSanitizer }
];
NgxaCerMonitoringPreviewComponent.propDecorators = {
    url: [{ type: Input }],
    checksum: [{ type: Input }],
    user: [{ type: Input }],
    fileType: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4YS1jZXItbW9uaXRvcmluZy1wcmV2aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B4YXBoaXJhL25neGEtY2VyLyIsInNvdXJjZXMiOlsibGliL2Rhc2hib2FyZC9tb25pdG9yaW5nL3ByZXZpZXcvbmd4YS1jZXItbW9uaXRvcmluZy1wcmV2aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pFLE9BQU8sRUFBWSxHQUFHLEVBQUUsWUFBWSxFQUFzQixNQUFNLGlCQUFpQixDQUFDO0FBQ2xGLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFPekQsTUFBTSxPQUFPLGlDQUFpQzs7Ozs7O0lBTzVDLFlBQ3NCLE9BQWlCLEVBQ1IsZUFBbUMsRUFDekQsU0FBdUI7UUFGVixZQUFPLEdBQVAsT0FBTyxDQUFVO1FBQ1Isb0JBQWUsR0FBZixlQUFlLENBQW9CO1FBQ3pELGNBQVMsR0FBVCxTQUFTLENBQWM7SUFBRyxDQUFDOzs7O0lBRXBDLFFBQVE7UUFDTixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDNUQsQ0FBQzs7Ozs7Ozs7SUFFTyxXQUFXLENBQUMsUUFBYSxFQUFFLElBQVksRUFBRSxRQUFnQjtRQUMvRCxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FDOUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxVQUFVLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFDbEQsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEVBQUUsYUFBYSxDQUFDO2FBQy9CLElBQUksQ0FBQyxHQUFHOzs7O1FBQUMsQ0FBQyxRQUFhLEVBQUUsRUFBRTs7a0JBQ2xCLFFBQVEsR0FBUyxJQUFJLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUMxQyxJQUFJLEVBQUUsUUFBUTthQUNmLENBQUM7O2tCQUNJLE1BQU0sR0FBZSxJQUFJLFVBQVUsRUFBRTtZQUMzQyxNQUFNLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQy9CLE1BQU0sQ0FBQyxTQUFTOzs7WUFBRyxHQUFHLEVBQUU7Z0JBQ3RCLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxzQkFBc0IsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7WUFDN0UsQ0FBQyxDQUFBLENBQUM7UUFDTixDQUFDLEVBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ2xCLENBQUM7OztZQW5DRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMsNlhBQTJEOzthQUU1RDs7Ozs0Q0FTSSxNQUFNLFNBQUMsR0FBRzs0Q0FDVixNQUFNLFNBQUMsWUFBWTtZQWhCZixZQUFZOzs7a0JBU2xCLEtBQUs7dUJBQ0wsS0FBSzttQkFDTCxLQUFLO3VCQUNMLEtBQUs7Ozs7SUFITixnREFBeUI7O0lBQ3pCLHFEQUE4Qjs7SUFDOUIsaURBQTBCOztJQUMxQixxREFBOEI7Ozs7O0lBRzVCLG9EQUFxQzs7Ozs7SUFDckMsNERBQWdFOztJQUNoRSxzREFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQVBJTW9kZWwsIEFQSSwgSFRUUF9TRVJWSUNFLCBIdHRwRmFjdG9yeVNlcnZpY2UgfSBmcm9tICdAeGFwaGlyYS9zaGFyZWQnO1xuaW1wb3J0IHsgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3hhLWNlci1tb25pdG9yaW5nLXByZXZpZXcnLFxuICB0ZW1wbGF0ZVVybDogJy4vbmd4YS1jZXItbW9uaXRvcmluZy1wcmV2aWV3LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ25neGEtY2VyLW1vbml0b3JpbmctcHJldmlldy5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBOZ3hhQ2VyTW9uaXRvcmluZ1ByZXZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIHB1YmxpYyB1cmw6IGFueTtcbiAgQElucHV0KCkgcHVibGljIGNoZWNrc3VtOiBhbnk7XG4gIEBJbnB1dCgpIHB1YmxpYyB1c2VyOiBhbnk7XG4gIEBJbnB1dCgpIHB1YmxpYyBmaWxlVHlwZTogYW55O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoQVBJKXByaXZhdGUgYXBpUGF0aDogQVBJTW9kZWwsXG4gICAgQEluamVjdChIVFRQX1NFUlZJQ0UpcHJpdmF0ZSBodHRwQmFzZVNlcnZpY2U6IEh0dHBGYWN0b3J5U2VydmljZSxcbiAgICBwdWJsaWMgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5nZXRFdmlkZW5jZSh0aGlzLmNoZWNrc3VtLCB0aGlzLnVzZXIsIHRoaXMuZmlsZVR5cGUpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRFdmlkZW5jZShjaGVja3N1bTogYW55LCB1c2VyOiBzdHJpbmcsIGZpbGVUeXBlOiBzdHJpbmcpIHtcbiAgICB0aGlzLmh0dHBCYXNlU2VydmljZS5IVFRQX0FVVEgoXG4gICAgdGhpcy5hcGlQYXRoWydmaWxlJ11bJ2V2aWRlbmNlJ10sIG51bGwsIG51bGwsIG51bGwsXG4gICAgW2NoZWNrc3VtLCB1c2VyXSwgJ2FycmF5YnVmZmVyJylcbiAgICAucGlwZSh0YXAoKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgICAgY29uc3QgZmlsZUJsb2I6IEJsb2IgPSBuZXcgQmxvYihbcmVzcG9uc2VdLCB7XG4gICAgICAgICAgdHlwZTogZmlsZVR5cGUsXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCByZWFkZXI6IEZpbGVSZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlQmxvYik7XG4gICAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiB7XG4gICAgICAgICAgdGhpcy51cmwgPSB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0VXJsKHJlYWRlci5yZXN1bHQudG9TdHJpbmcoKSk7XG4gICAgICAgIH07XG4gICAgfSkpLnN1YnNjcmliZSgpO1xuICB9XG5cbn1cbiJdfQ==