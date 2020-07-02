/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Inject, Injector } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { PANIC, HTTP_SERVICE, API } from '@xaphira/shared';
export class NgxaCerMonitoringPageComponent {
    /**
     * @param {?} injector
     * @param {?} panicService
     */
    constructor(injector, panicService) {
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
        () => {
            this.getAllPanicStorage();
        }));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.getAllPanicServer();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    /**
     * @private
     * @return {?}
     */
    getAllPanicServer() {
        this.http.HTTP_AUTH(this.api['panic']['get-allpanic']).subscribe((/**
         * @param {?} values
         * @return {?}
         */
        (values) => {
            /** @type {?} */
            const temps = [];
            values.forEach((/**
             * @param {?} data
             * @return {?}
             */
            (data) => {
                temps.push({
                    mark: [
                        data['latestLatitude'], data['latestLongitude'],
                    ],
                    title: data['name'],
                    alt: data['panicCode'],
                    className: 'pulse',
                });
            }));
            this.markers = temps;
            try {
                this.panicService.clearAllPanic().then((/**
                 * @return {?}
                 */
                () => {
                    if (values.length) {
                        this.panicService.putAllPanic(values);
                    }
                }));
            }
            catch (error) { }
        }));
    }
    /**
     * @private
     * @return {?}
     */
    getAllPanicStorage() {
        this.panicService.getAllPanic().subscribe((/**
         * @param {?} values
         * @return {?}
         */
        (values) => {
            /** @type {?} */
            const temps = [];
            values.forEach((/**
             * @param {?} data
             * @return {?}
             */
            (data) => {
                temps.push({
                    mark: [
                        data['latestLatitude'], data['latestLongitude'],
                    ],
                    title: data['name'],
                    alt: data['panicCode'],
                    className: 'pulse',
                });
            }));
            this.markers = temps;
        }));
    }
    /**
     * @param {?} data
     * @return {?}
     */
    onMarker(data) {
        this.markerSelected = data;
        this.showInfo = true;
    }
    /**
     * @param {?} showInfo
     * @return {?}
     */
    onToggleInfo(showInfo) {
        this.showInfo = showInfo;
    }
}
NgxaCerMonitoringPageComponent.decorators = [
    { type: Component, args: [{
                selector: 'xa-cer-monitoring',
                template: "<xa-page-outlet [header]=\"'Dashboard of Emergency Report'\">\n    <xa-maps-leaflet\n        [markersFn]=\"markers\"\n        (onMarkerClick)=\"onMarker($event)\">\n    </xa-maps-leaflet>\n</xa-page-outlet>\n<xa-cer-slide-out [showInfo]=\"showInfo\" (onToggle)=\"onToggleInfo($event)\">\n    <xa-cer-monitoring-info [markerFn]=\"markerSelected\">\n    </xa-cer-monitoring-info>\n</xa-cer-slide-out>\n",
                styles: ["/*!\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */.nb-theme-default :host{position:relative;display:block;overflow:hidden}.nb-theme-dark :host{position:relative;display:block;overflow:hidden}.nb-theme-cosmic :host{position:relative;display:block;overflow:hidden}.nb-theme-corporate :host{position:relative;display:block;overflow:hidden}"]
            }] }
];
/** @nocollapse */
NgxaCerMonitoringPageComponent.ctorParameters = () => [
    { type: Injector },
    { type: undefined, decorators: [{ type: Inject, args: [PANIC,] }] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4YS1jZXItbW9uaXRvcmluZy1wYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B4YXBoaXJhL25neGEtY2VyLyIsInNvdXJjZXMiOlsibGliL2Rhc2hib2FyZC9tb25pdG9yaW5nL25neGEtY2VyLW1vbml0b3JpbmctcGFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFL0IsT0FBTyxFQUFFLEtBQUssRUFBMkMsWUFBWSxFQUFFLEdBQUcsRUFBWSxNQUFNLGlCQUFpQixDQUFDO0FBTzlHLE1BQU0sT0FBTyw4QkFBOEI7Ozs7O0lBU3pDLFlBQVksUUFBa0IsRUFBeUIsWUFBaUM7UUFBakMsaUJBQVksR0FBWixZQUFZLENBQXFCO1FBUGpGLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFHekIsYUFBUSxHQUFrQixJQUFJLE9BQU8sRUFBUSxDQUFDO1FBS3BELElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUU7YUFDN0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDOUIsU0FBUzs7O1FBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDOUIsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzNCLENBQUM7Ozs7O0lBRU8saUJBQWlCO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxNQUFhLEVBQUUsRUFBRTs7a0JBQzNFLEtBQUssR0FBVSxFQUFFO1lBQ3ZCLE1BQU0sQ0FBQyxPQUFPOzs7O1lBQUMsQ0FBQyxJQUFTLEVBQUUsRUFBRTtnQkFDM0IsS0FBSyxDQUFDLElBQUksQ0FBQztvQkFDVCxJQUFJLEVBQUU7d0JBQ0osSUFBSSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDO3FCQUNoRDtvQkFDRCxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQztvQkFDbkIsR0FBRyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUM7b0JBQ3RCLFNBQVMsRUFBRSxPQUFPO2lCQUNuQixDQUFDLENBQUM7WUFDTCxDQUFDLEVBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ3JCLElBQUk7Z0JBQ0YsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxJQUFJOzs7Z0JBQUMsR0FBRyxFQUFFO29CQUMxQyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQUU7d0JBQ2pCLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO3FCQUN2QztnQkFDSCxDQUFDLEVBQUMsQ0FBQzthQUNKO1lBQUMsT0FBTyxLQUFLLEVBQUUsR0FBRTtRQUNwQixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRU8sa0JBQWtCO1FBQ3hCLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUMsU0FBUzs7OztRQUFDLENBQUMsTUFBYSxFQUFFLEVBQUU7O2tCQUNwRCxLQUFLLEdBQVUsRUFBRTtZQUN2QixNQUFNLENBQUMsT0FBTzs7OztZQUFDLENBQUMsSUFBUyxFQUFFLEVBQUU7Z0JBQzNCLEtBQUssQ0FBQyxJQUFJLENBQUM7b0JBQ1QsSUFBSSxFQUFFO3dCQUNKLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztxQkFDaEQ7b0JBQ0QsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUM7b0JBQ25CLEdBQUcsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDO29CQUN0QixTQUFTLEVBQUUsT0FBTztpQkFDbkIsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxFQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUN2QixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRU0sUUFBUSxDQUFDLElBQWtCO1FBQ2hDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1FBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ3ZCLENBQUM7Ozs7O0lBRU0sWUFBWSxDQUFDLFFBQWlCO1FBQ25DLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzNCLENBQUM7OztZQWpGRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFFN0IsNFpBQXdEOzthQUN6RDs7OztZQVY4QyxRQUFROzRDQW9CcEIsTUFBTSxTQUFDLEtBQUs7Ozs7SUFQN0Msa0RBQWlDOztJQUNqQyxpREFBK0I7O0lBQy9CLHdEQUFvQzs7Ozs7SUFDcEMsa0RBQXNEOzs7OztJQUN0RCw4Q0FBaUM7Ozs7O0lBQ2pDLDZDQUFzQjs7Ozs7SUFFVSxzREFBd0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95LCBJbmplY3QsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBMZWFmbGV0TW9kZWwgfSBmcm9tICdAeGFwaGlyYS9uZ3hhLWNvbW1vbic7XG5pbXBvcnQgeyBQQU5JQywgUGFuaWNGYWN0b3J5U2VydmljZSwgSHR0cEZhY3RvcnlTZXJ2aWNlLCBIVFRQX1NFUlZJQ0UsIEFQSSwgQVBJTW9kZWwgfSBmcm9tICdAeGFwaGlyYS9zaGFyZWQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd4YS1jZXItbW9uaXRvcmluZycsXG4gIHN0eWxlVXJsczogWycuL25neGEtY2VyLW1vbml0b3JpbmctcGFnZS5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vbmd4YS1jZXItbW9uaXRvcmluZy1wYWdlLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgTmd4YUNlck1vbml0b3JpbmdQYWdlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gIHB1YmxpYyBzaG93SW5mbzogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgbWFya2VyczogTGVhZmxldE1vZGVsW107XG4gIHB1YmxpYyBtYXJrZXJTZWxlY3RlZDogTGVhZmxldE1vZGVsO1xuICBwcml2YXRlIGRlc3Ryb3kkOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgcHJpdmF0ZSBodHRwOiBIdHRwRmFjdG9yeVNlcnZpY2U7XG4gIHByaXZhdGUgYXBpOiBBUElNb2RlbDtcblxuICBjb25zdHJ1Y3RvcihpbmplY3RvcjogSW5qZWN0b3IsIEBJbmplY3QoUEFOSUMpIHByaXZhdGUgcGFuaWNTZXJ2aWNlOiBQYW5pY0ZhY3RvcnlTZXJ2aWNlKSB7XG4gICAgdGhpcy5odHRwID0gaW5qZWN0b3IuZ2V0KEhUVFBfU0VSVklDRSk7XG4gICAgdGhpcy5hcGkgPSBpbmplY3Rvci5nZXQoQVBJKTtcbiAgICB0aGlzLnBhbmljU2VydmljZS5vbkNoZWNrUGFuaWMoKVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuZ2V0QWxsUGFuaWNTdG9yYWdlKCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmdldEFsbFBhbmljU2VydmVyKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cblxuICBwcml2YXRlIGdldEFsbFBhbmljU2VydmVyKCk6IHZvaWQge1xuICAgIHRoaXMuaHR0cC5IVFRQX0FVVEgodGhpcy5hcGlbJ3BhbmljJ11bJ2dldC1hbGxwYW5pYyddKS5zdWJzY3JpYmUoKHZhbHVlczogYW55W10pID0+IHtcbiAgICAgIGNvbnN0IHRlbXBzOiBhbnlbXSA9IFtdO1xuICAgICAgdmFsdWVzLmZvckVhY2goKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICB0ZW1wcy5wdXNoKHtcbiAgICAgICAgICBtYXJrOiBbXG4gICAgICAgICAgICBkYXRhWydsYXRlc3RMYXRpdHVkZSddLCBkYXRhWydsYXRlc3RMb25naXR1ZGUnXSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIHRpdGxlOiBkYXRhWyduYW1lJ10sXG4gICAgICAgICAgYWx0OiBkYXRhWydwYW5pY0NvZGUnXSxcbiAgICAgICAgICBjbGFzc05hbWU6ICdwdWxzZScsXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICB0aGlzLm1hcmtlcnMgPSB0ZW1wcztcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMucGFuaWNTZXJ2aWNlLmNsZWFyQWxsUGFuaWMoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICBpZiAodmFsdWVzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5wYW5pY1NlcnZpY2UucHV0QWxsUGFuaWModmFsdWVzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHt9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGdldEFsbFBhbmljU3RvcmFnZSgpOiB2b2lkIHtcbiAgICB0aGlzLnBhbmljU2VydmljZS5nZXRBbGxQYW5pYygpLnN1YnNjcmliZSgodmFsdWVzOiBhbnlbXSkgPT4ge1xuICAgICAgY29uc3QgdGVtcHM6IGFueVtdID0gW107XG4gICAgICB2YWx1ZXMuZm9yRWFjaCgoZGF0YTogYW55KSA9PiB7XG4gICAgICAgIHRlbXBzLnB1c2goe1xuICAgICAgICAgIG1hcms6IFtcbiAgICAgICAgICAgIGRhdGFbJ2xhdGVzdExhdGl0dWRlJ10sIGRhdGFbJ2xhdGVzdExvbmdpdHVkZSddLFxuICAgICAgICAgIF0sXG4gICAgICAgICAgdGl0bGU6IGRhdGFbJ25hbWUnXSxcbiAgICAgICAgICBhbHQ6IGRhdGFbJ3BhbmljQ29kZSddLFxuICAgICAgICAgIGNsYXNzTmFtZTogJ3B1bHNlJyxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMubWFya2VycyA9IHRlbXBzO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIG9uTWFya2VyKGRhdGE6IExlYWZsZXRNb2RlbCk6IHZvaWQge1xuICAgIHRoaXMubWFya2VyU2VsZWN0ZWQgPSBkYXRhO1xuICAgIHRoaXMuc2hvd0luZm8gPSB0cnVlO1xuICB9XG5cbiAgcHVibGljIG9uVG9nZ2xlSW5mbyhzaG93SW5mbzogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuc2hvd0luZm8gPSBzaG93SW5mbztcbiAgfVxuXG59XG4iXX0=