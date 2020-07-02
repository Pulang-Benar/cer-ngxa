/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Inject, Injector } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { PANIC, HTTP_SERVICE, API } from '@xaphira/shared';
var NgxaCerMonitoringPageComponent = /** @class */ (function () {
    function NgxaCerMonitoringPageComponent(injector, panicService) {
        var _this = this;
        this.panicService = panicService;
        this.showInfo = false;
        this.destroy$ = new Subject();
        this.http = injector.get(HTTP_SERVICE);
        this.api = injector.get(API);
        this.panicService.onCheckPanic()
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this.getAllPanicStorage();
        }));
    }
    /**
     * @return {?}
     */
    NgxaCerMonitoringPageComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.getAllPanicServer();
    };
    /**
     * @return {?}
     */
    NgxaCerMonitoringPageComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    /**
     * @private
     * @return {?}
     */
    NgxaCerMonitoringPageComponent.prototype.getAllPanicServer = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.http.HTTP_AUTH(this.api['panic']['get-allpanic']).subscribe((/**
         * @param {?} values
         * @return {?}
         */
        function (values) {
            /** @type {?} */
            var temps = [];
            values.forEach((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                temps.push({
                    mark: [
                        data['latestLatitude'], data['latestLongitude'],
                    ],
                    title: data['name'],
                    alt: data['panicCode'],
                    className: 'pulse',
                });
            }));
            _this.markers = temps;
            try {
                _this.panicService.clearAllPanic().then((/**
                 * @return {?}
                 */
                function () {
                    if (values.length) {
                        _this.panicService.putAllPanic(values);
                    }
                }));
            }
            catch (error) { }
        }));
    };
    /**
     * @private
     * @return {?}
     */
    NgxaCerMonitoringPageComponent.prototype.getAllPanicStorage = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.panicService.getAllPanic().subscribe((/**
         * @param {?} values
         * @return {?}
         */
        function (values) {
            /** @type {?} */
            var temps = [];
            values.forEach((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                temps.push({
                    mark: [
                        data['latestLatitude'], data['latestLongitude'],
                    ],
                    title: data['name'],
                    alt: data['panicCode'],
                    className: 'pulse',
                });
            }));
            _this.markers = temps;
        }));
    };
    /**
     * @param {?} data
     * @return {?}
     */
    NgxaCerMonitoringPageComponent.prototype.onMarker = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        this.markerSelected = data;
        this.showInfo = true;
    };
    /**
     * @param {?} showInfo
     * @return {?}
     */
    NgxaCerMonitoringPageComponent.prototype.onToggleInfo = /**
     * @param {?} showInfo
     * @return {?}
     */
    function (showInfo) {
        this.showInfo = showInfo;
    };
    NgxaCerMonitoringPageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'xa-cer-monitoring',
                    template: "<xa-page-outlet [header]=\"'Dashboard of Emergency Report'\">\n    <xa-maps-leaflet\n        [markersFn]=\"markers\"\n        (onMarkerClick)=\"onMarker($event)\">\n    </xa-maps-leaflet>\n</xa-page-outlet>\n<xa-cer-slide-out [showInfo]=\"showInfo\" (onToggle)=\"onToggleInfo($event)\">\n    <xa-cer-monitoring-info [markerFn]=\"markerSelected\">\n    </xa-cer-monitoring-info>\n</xa-cer-slide-out>\n",
                    styles: ["/*!\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */.nb-theme-default :host{position:relative;display:block;overflow:hidden}.nb-theme-dark :host{position:relative;display:block;overflow:hidden}.nb-theme-cosmic :host{position:relative;display:block;overflow:hidden}.nb-theme-corporate :host{position:relative;display:block;overflow:hidden}"]
                }] }
    ];
    /** @nocollapse */
    NgxaCerMonitoringPageComponent.ctorParameters = function () { return [
        { type: Injector },
        { type: undefined, decorators: [{ type: Inject, args: [PANIC,] }] }
    ]; };
    return NgxaCerMonitoringPageComponent;
}());
export { NgxaCerMonitoringPageComponent };
if (false) {
    /** @type {?} */
    NgxaCerMonitoringPageComponent.prototype.showInfo;
    /** @type {?} */
    NgxaCerMonitoringPageComponent.prototype.markers;
    /** @type {?} */
    NgxaCerMonitoringPageComponent.prototype.markerSelected;
    /**
     * @type {?}
     * @private
     */
    NgxaCerMonitoringPageComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NgxaCerMonitoringPageComponent.prototype.http;
    /**
     * @type {?}
     * @private
     */
    NgxaCerMonitoringPageComponent.prototype.api;
    /**
     * @type {?}
     * @private
     */
    NgxaCerMonitoringPageComponent.prototype.panicService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4YS1jZXItbW9uaXRvcmluZy1wYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B4YXBoaXJhL25neGEtY2VyLyIsInNvdXJjZXMiOlsibGliL2Rhc2hib2FyZC9tb25pdG9yaW5nL25neGEtY2VyLW1vbml0b3JpbmctcGFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFL0IsT0FBTyxFQUFFLEtBQUssRUFBMkMsWUFBWSxFQUFFLEdBQUcsRUFBWSxNQUFNLGlCQUFpQixDQUFDO0FBRTlHO0lBY0Usd0NBQVksUUFBa0IsRUFBeUIsWUFBaUM7UUFBeEYsaUJBUUM7UUFSc0QsaUJBQVksR0FBWixZQUFZLENBQXFCO1FBUGpGLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFHekIsYUFBUSxHQUFrQixJQUFJLE9BQU8sRUFBUSxDQUFDO1FBS3BELElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUU7YUFDN0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDOUIsU0FBUzs7O1FBQUM7WUFDVCxLQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUM5QixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCxpREFBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMzQixD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T25Jbml0LCBPbkRlc3Ryb3ksIEluamVjdCwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IExlYWZsZXRNb2RlbCB9IGZyb20gJ0B4YXBoaXJhL25neGEtY29tbW9uJztcbmltcG9ydCB7IFBBTklDLCBQYW5pY0ZhY3RvcnlTZXJ2aWNlLCBIdHRwRmFjdG9yeVNlcnZpY2UsIEhUVFBfU0VSVklDRSwgQVBJLCBBUElNb2RlbCB9IGZyb20gJ0B4YXBoaXJhL3NoYXJlZCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3hhLWNlci1tb25pdG9yaW5nJyxcbiAgc3R5bGVVcmxzOiBbJy4vbmd4YS1jZXItbW9uaXRvcmluZy1wYWdlLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9uZ3hhLWNlci1tb25pdG9yaW5nLXBhZ2UuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBOZ3hhQ2VyTW9uaXRvcmluZ1BhZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgcHVibGljIHNob3dJbmZvOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBtYXJrZXJzOiBMZWFmbGV0TW9kZWxbXTtcbiAgcHVibGljIG1hcmtlclNlbGVjdGVkOiBMZWFmbGV0TW9kZWw7XG4gIHByaXZhdGUgZGVzdHJveSQ6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBwcml2YXRlIGh0dHA6IEh0dHBGYWN0b3J5U2VydmljZTtcbiAgcHJpdmF0ZSBhcGk6IEFQSU1vZGVsO1xuXG4gIGNvbnN0cnVjdG9yKGluamVjdG9yOiBJbmplY3RvciwgQEluamVjdChQQU5JQykgcHJpdmF0ZSBwYW5pY1NlcnZpY2U6IFBhbmljRmFjdG9yeVNlcnZpY2UpIHtcbiAgICB0aGlzLmh0dHAgPSBpbmplY3Rvci5nZXQoSFRUUF9TRVJWSUNFKTtcbiAgICB0aGlzLmFwaSA9IGluamVjdG9yLmdldChBUEkpO1xuICAgIHRoaXMucGFuaWNTZXJ2aWNlLm9uQ2hlY2tQYW5pYygpXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5nZXRBbGxQYW5pY1N0b3JhZ2UoKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuZ2V0QWxsUGFuaWNTZXJ2ZXIoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0QWxsUGFuaWNTZXJ2ZXIoKTogdm9pZCB7XG4gICAgdGhpcy5odHRwLkhUVFBfQVVUSCh0aGlzLmFwaVsncGFuaWMnXVsnZ2V0LWFsbHBhbmljJ10pLnN1YnNjcmliZSgodmFsdWVzOiBhbnlbXSkgPT4ge1xuICAgICAgY29uc3QgdGVtcHM6IGFueVtdID0gW107XG4gICAgICB2YWx1ZXMuZm9yRWFjaCgoZGF0YTogYW55KSA9PiB7XG4gICAgICAgIHRlbXBzLnB1c2goe1xuICAgICAgICAgIG1hcms6IFtcbiAgICAgICAgICAgIGRhdGFbJ2xhdGVzdExhdGl0dWRlJ10sIGRhdGFbJ2xhdGVzdExvbmdpdHVkZSddLFxuICAgICAgICAgIF0sXG4gICAgICAgICAgdGl0bGU6IGRhdGFbJ25hbWUnXSxcbiAgICAgICAgICBhbHQ6IGRhdGFbJ3BhbmljQ29kZSddLFxuICAgICAgICAgIGNsYXNzTmFtZTogJ3B1bHNlJyxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMubWFya2VycyA9IHRlbXBzO1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhpcy5wYW5pY1NlcnZpY2UuY2xlYXJBbGxQYW5pYygpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIGlmICh2YWx1ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnBhbmljU2VydmljZS5wdXRBbGxQYW5pYyh2YWx1ZXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge31cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0QWxsUGFuaWNTdG9yYWdlKCk6IHZvaWQge1xuICAgIHRoaXMucGFuaWNTZXJ2aWNlLmdldEFsbFBhbmljKCkuc3Vic2NyaWJlKCh2YWx1ZXM6IGFueVtdKSA9PiB7XG4gICAgICBjb25zdCB0ZW1wczogYW55W10gPSBbXTtcbiAgICAgIHZhbHVlcy5mb3JFYWNoKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgdGVtcHMucHVzaCh7XG4gICAgICAgICAgbWFyazogW1xuICAgICAgICAgICAgZGF0YVsnbGF0ZXN0TGF0aXR1ZGUnXSwgZGF0YVsnbGF0ZXN0TG9uZ2l0dWRlJ10sXG4gICAgICAgICAgXSxcbiAgICAgICAgICB0aXRsZTogZGF0YVsnbmFtZSddLFxuICAgICAgICAgIGFsdDogZGF0YVsncGFuaWNDb2RlJ10sXG4gICAgICAgICAgY2xhc3NOYW1lOiAncHVsc2UnLFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5tYXJrZXJzID0gdGVtcHM7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgb25NYXJrZXIoZGF0YTogTGVhZmxldE1vZGVsKTogdm9pZCB7XG4gICAgdGhpcy5tYXJrZXJTZWxlY3RlZCA9IGRhdGE7XG4gICAgdGhpcy5zaG93SW5mbyA9IHRydWU7XG4gIH1cblxuICBwdWJsaWMgb25Ub2dnbGVJbmZvKHNob3dJbmZvOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5zaG93SW5mbyA9IHNob3dJbmZvO1xuICB9XG5cbn1cbiJdfQ==