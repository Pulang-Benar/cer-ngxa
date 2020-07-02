/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Injector } from '@angular/core';
import { Subject } from 'rxjs';
import { NbThemeService } from '@nebular/theme';
import { HTTP_SERVICE, API } from '@xaphira/shared';
export class NgxaCerStatisticsPeriodePageComponent {
    /**
     * @param {?} injector
     * @param {?} theme
     */
    constructor(injector, theme) {
        this.theme = theme;
        this.options = {};
        this.destroy$ = new Subject();
        this.http = injector.get(HTTP_SERVICE);
        this.api = injector.get(API);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const year = new Date().getFullYear();
        /** @type {?} */
        const tempData = [];
        for (let i = 3; i >= 0; i--) {
            tempData.push(year - i);
        }
        this.dataSelect = tempData;
        this.selected = year;
        this.getStatistics();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        this.themeSubscription.unsubscribe();
    }
    /**
     * @private
     * @return {?}
     */
    getStatistics() {
        this.http.HTTP_AUTH(this.api['panic']['statistics-periode'], null, null, null, [this.selected]).subscribe((/**
         * @param {?} values
         * @return {?}
         */
        (values) => {
            this.axis = values['axis']['data'];
            this.legend = values['legend']['data'];
            this.series = [];
            values['series'].forEach((/**
             * @param {?} series
             * @return {?}
             */
            (series) => {
                /** @type {?} */
                const dataSeries = [];
                values['axis']['data'].forEach((/**
                 * @param {?} axis
                 * @return {?}
                 */
                (axis) => {
                    dataSeries.push(series['data'][axis]);
                }));
                this.series.push({
                    name: series['name'],
                    type: 'line',
                    smooth: true,
                    data: dataSeries,
                });
            }));
            this.buildChart();
        }));
    }
    /**
     * @private
     * @return {?}
     */
    buildChart() {
        this.themeSubscription = this.theme.getJsTheme().subscribe((/**
         * @param {?} config
         * @return {?}
         */
        config => {
            /** @type {?} */
            const colors = config.variables;
            /** @type {?} */
            const echarts = config.variables.echarts;
            this.options = {
                backgroundColor: echarts.bg,
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                    },
                },
                legend: {
                    data: this.legend,
                    textStyle: {
                        color: echarts.textColor,
                    },
                },
                grid: {
                    left: '2%',
                    right: '3%',
                    bottom: '5%',
                    containLabel: true,
                },
                xAxis: [
                    {
                        type: 'category',
                        data: this.axis,
                        axisTick: {
                            alignWithLabel: true,
                        },
                        axisLine: {
                            lineStyle: {
                                color: echarts.axisLineColor,
                            },
                        },
                        axisLabel: {
                            textStyle: {
                                color: echarts.textColor,
                            },
                        },
                    },
                ],
                yAxis: [
                    {
                        type: 'value',
                        axisLine: {
                            lineStyle: {
                                color: echarts.axisLineColor,
                            },
                        },
                        splitLine: {
                            lineStyle: {
                                color: echarts.splitLineColor,
                            },
                        },
                        axisLabel: {
                            textStyle: {
                                color: echarts.textColor,
                            },
                        },
                    },
                ],
                series: this.series,
            };
        }));
    }
    /**
     * @param {?} data
     * @return {?}
     */
    onSelectChange(data) {
        this.selected = data;
        this.getStatistics();
    }
    /**
     * @private
     * @return {?}
     */
    random() {
        return Math.round(Math.random() * 100);
    }
}
NgxaCerStatisticsPeriodePageComponent.decorators = [
    { type: Component, args: [{
                selector: 'xa-cer-statistics-periode',
                template: "<xa-page-outlet\n    [header]=\"'Statistics of Emergency Report by Periode'\"\n    [dataSelect]=\"dataSelect\"\n    [selected]=\"selected\"\n    (selectChange)=\"onSelectChange($event)\">\n    <xa-chart [options]=\"options\"></xa-chart>\n</xa-page-outlet>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
NgxaCerStatisticsPeriodePageComponent.ctorParameters = () => [
    { type: Injector },
    { type: NbThemeService }
];
if (false) {
    /** @type {?} */
    NgxaCerStatisticsPeriodePageComponent.prototype.options;
    /** @type {?} */
    NgxaCerStatisticsPeriodePageComponent.prototype.data;
    /** @type {?} */
    NgxaCerStatisticsPeriodePageComponent.prototype.dataSelect;
    /** @type {?} */
    NgxaCerStatisticsPeriodePageComponent.prototype.selected;
    /**
     * @type {?}
     * @private
     */
    NgxaCerStatisticsPeriodePageComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NgxaCerStatisticsPeriodePageComponent.prototype.http;
    /**
     * @type {?}
     * @private
     */
    NgxaCerStatisticsPeriodePageComponent.prototype.api;
    /**
     * @type {?}
     * @private
     */
    NgxaCerStatisticsPeriodePageComponent.prototype.themeSubscription;
    /**
     * @type {?}
     * @private
     */
    NgxaCerStatisticsPeriodePageComponent.prototype.axis;
    /**
     * @type {?}
     * @private
     */
    NgxaCerStatisticsPeriodePageComponent.prototype.legend;
    /**
     * @type {?}
     * @private
     */
    NgxaCerStatisticsPeriodePageComponent.prototype.series;
    /**
     * @type {?}
     * @private
     */
    NgxaCerStatisticsPeriodePageComponent.prototype.theme;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4YS1jZXItc3RhdGlzdGljcy1wZXJpb2RlLXBhZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHhhcGhpcmEvbmd4YS1jZXIvIiwic291cmNlcyI6WyJsaWIvc3RhdGlzdGljcy9wZXJpb2RlL25neGEtY2VyLXN0YXRpc3RpY3MtcGVyaW9kZS1wYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBNkIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxPQUFPLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQzdDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRCxPQUFPLEVBQXNCLFlBQVksRUFBRSxHQUFHLEVBQVksTUFBTSxpQkFBaUIsQ0FBQztBQU9sRixNQUFNLE9BQU8scUNBQXFDOzs7OztJQWNoRCxZQUFZLFFBQWtCLEVBQVUsS0FBcUI7UUFBckIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFadEQsWUFBTyxHQUFRLEVBQUUsQ0FBQztRQUlqQixhQUFRLEdBQWtCLElBQUksT0FBTyxFQUFRLENBQUM7UUFTcEQsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMvQixDQUFDOzs7O0lBRUQsUUFBUTs7Y0FDQSxJQUFJLEdBQVcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUU7O2NBQ3ZDLFFBQVEsR0FBYSxFQUFFO1FBQzdCLEtBQUssSUFBSSxDQUFDLEdBQVcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDbkMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDekI7UUFDRCxJ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QixrRUFBd0M7Ozs7O0lBQ3hDLHFEQUFvQjs7Ozs7SUFDcEIsdURBQXNCOzs7OztJQUN0Qix1REFBc0I7Ozs7O0lBRVUsc0RBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSwgSW5qZWN0LCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBOYlRoZW1lU2VydmljZSB9IGZyb20gJ0BuZWJ1bGFyL3RoZW1lJztcbmltcG9ydCB7IEh0dHBGYWN0b3J5U2VydmljZSwgSFRUUF9TRVJWSUNFLCBBUEksIEFQSU1vZGVsIH0gZnJvbSAnQHhhcGhpcmEvc2hhcmVkJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAneGEtY2VyLXN0YXRpc3RpY3MtcGVyaW9kZScsXG4gIHN0eWxlVXJsczogWycuL25neGEtY2VyLXN0YXRpc3RpY3MtcGVyaW9kZS1wYWdlLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9uZ3hhLWNlci1zdGF0aXN0aWNzLXBlcmlvZGUtcGFnZS5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIE5neGFDZXJTdGF0aXN0aWNzUGVyaW9kZVBhZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgcHVibGljIG9wdGlvbnM6IGFueSA9IHt9O1xuICBwdWJsaWMgZGF0YTogYW55O1xuICBwdWJsaWMgZGF0YVNlbGVjdDogYW55W107XG4gIHB1YmxpYyBzZWxlY3RlZDogYW55O1xuICBwcml2YXRlIGRlc3Ryb3kkOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgcHJpdmF0ZSBodHRwOiBIdHRwRmFjdG9yeVNlcnZpY2U7XG4gIHByaXZhdGUgYXBpOiBBUElNb2RlbDtcbiAgcHJpdmF0ZSB0aGVtZVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIGF4aXM6IGFueVtdO1xuICBwcml2YXRlIGxlZ2VuZDogYW55W107XG4gIHByaXZhdGUgc2VyaWVzOiBhbnlbXTtcblxuICBjb25zdHJ1Y3RvcihpbmplY3RvcjogSW5qZWN0b3IsIHByaXZhdGUgdGhlbWU6IE5iVGhlbWVTZXJ2aWNlKSB7XG4gICAgdGhpcy5odHRwID0gaW5qZWN0b3IuZ2V0KEhUVFBfU0VSVklDRSk7XG4gICAgdGhpcy5hcGkgPSBpbmplY3Rvci5nZXQoQVBJKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IHllYXI6IG51bWJlciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcbiAgICBjb25zdCB0ZW1wRGF0YTogbnVtYmVyW10gPSBbXTtcbiAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAzOyBpID49IDA7IGktLSkge1xuICAgICAgdGVtcERhdGEucHVzaCh5ZWFyIC0gaSk7XG4gICAgfVxuICAgIHRoaXMuZGF0YVNlbGVjdCA9IHRlbXBEYXRhO1xuICAgIHRoaXMuc2VsZWN0ZWQgPSB5ZWFyO1xuICAgIHRoaXMuZ2V0U3RhdGlzdGljcygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICAgIHRoaXMudGhlbWVTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0U3RhdGlzdGljcygpOiB2b2lkIHtcbiAgICB0aGlzLmh0dHAuSFRUUF9BVVRIKFxuICAgICAgdGhpcy5hcGlbJ3BhbmljJ11bJ3N0YXRpc3RpY3MtcGVyaW9kZSddLFxuICAgICAgbnVsbCxcbiAgICAgIG51bGwsXG4gICAgICBudWxsLFxuICAgICAgW3RoaXMuc2VsZWN0ZWRdKS5zdWJzY3JpYmUoKHZhbHVlczogYW55KSA9PiB7XG4gICAgICAgIHRoaXMuYXhpcyA9IHZhbHVlc1snYXhpcyddWydkYXRhJ107XG4gICAgICAgIHRoaXMubGVnZW5kID0gdmFsdWVzWydsZWdlbmQnXVsnZGF0YSddO1xuICAgICAgICB0aGlzLnNlcmllcyA9IFtdO1xuICAgICAgICB2YWx1ZXNbJ3NlcmllcyddLmZvckVhY2goKHNlcmllczogYW55KSA9PiB7XG4gICAgICAgICAgY29uc3QgZGF0YVNlcmllczogYW55W10gPSBbXTtcbiAgICAgICAgICB2YWx1ZXNbJ2F4aXMnXVsnZGF0YSddLmZvckVhY2goKGF4aXM6IGFueSkgPT4ge1xuICAgICAgICAgICAgZGF0YVNlcmllcy5wdXNoKHNlcmllc1snZGF0YSddW2F4aXNdKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLnNlcmllcy5wdXNoKHtcbiAgICAgICAgICAgIG5hbWU6IHNlcmllc1snbmFtZSddLFxuICAgICAgICAgICAgdHlwZTogJ2xpbmUnLFxuICAgICAgICAgICAgc21vb3RoOiB0cnVlLFxuICAgICAgICAgICAgZGF0YTogZGF0YVNlcmllcyxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYnVpbGRDaGFydCgpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBidWlsZENoYXJ0KCk6IHZvaWQge1xuICAgIHRoaXMudGhlbWVTdWJzY3JpcHRpb24gPSB0aGlzLnRoZW1lLmdldEpzVGhlbWUoKS5zdWJzY3JpYmUoY29uZmlnID0+IHtcblxuICAgICAgY29uc3QgY29sb3JzOiBhbnkgPSBjb25maWcudmFyaWFibGVzO1xuICAgICAgY29uc3QgZWNoYXJ0czogYW55ID0gY29uZmlnLnZhcmlhYmxlcy5lY2hhcnRzO1xuXG4gICAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogZWNoYXJ0cy5iZyxcbiAgICAgICAgdG9vbHRpcDoge1xuICAgICAgICAgIHRyaWdnZXI6ICdheGlzJyxcbiAgICAgICAgICBheGlzUG9pbnRlcjoge1xuICAgICAgICAgICAgdHlwZTogJ2Nyb3NzJyxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICBkYXRhOiB0aGlzLmxlZ2VuZCxcbiAgICAgICAgICB0ZXh0U3R5bGU6IHtcbiAgICAgICAgICAgIGNvbG9yOiBlY2hhcnRzLnRleHRDb2xvcixcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBncmlkOiB7XG4gICAgICAgICAgbGVmdDogJzIlJyxcbiAgICAgICAgICByaWdodDogJzMlJyxcbiAgICAgICAgICBib3R0b206ICc1JScsXG4gICAgICAgICAgY29udGFpbkxhYmVsOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB4QXhpczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdjYXRlZ29yeScsXG4gICAgICAgICAgICBkYXRhOiB0aGlzLmF4aXMsXG4gICAgICAgICAgICBheGlzVGljazoge1xuICAgICAgICAgICAgICBhbGlnbldpdGhMYWJlbDogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBheGlzTGluZToge1xuICAgICAgICAgICAgICBsaW5lU3R5bGU6IHtcbiAgICAgICAgICAgICAgICBjb2xvcjogZWNoYXJ0cy5heGlzTGluZUNvbG9yLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGF4aXNMYWJlbDoge1xuICAgICAgICAgICAgICB0ZXh0U3R5bGU6IHtcbiAgICAgICAgICAgICAgICBjb2xvcjogZWNoYXJ0cy50ZXh0Q29sb3IsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIHlBeGlzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ3ZhbHVlJyxcbiAgICAgICAgICAgIGF4aXNMaW5lOiB7XG4gICAgICAgICAgICAgIGxpbmVTdHlsZToge1xuICAgICAgICAgICAgICAgIGNvbG9yOiBlY2hhcnRzLmF4aXNMaW5lQ29sb3IsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3BsaXRMaW5lOiB7XG4gICAgICAgICAgICAgIGxpbmVTdHlsZToge1xuICAgICAgICAgICAgICAgIGNvbG9yOiBlY2hhcnRzLnNwbGl0TGluZUNvbG9yLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGF4aXNMYWJlbDoge1xuICAgICAgICAgICAgICB0ZXh0U3R5bGU6IHtcbiAgICAgICAgICAgICAgICBjb2xvcjogZWNoYXJ0cy50ZXh0Q29sb3IsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIHNlcmllczogdGhpcy5zZXJpZXMsXG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIG9uU2VsZWN0Q2hhbmdlKGRhdGE6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0ZWQgPSBkYXRhO1xuICAgIHRoaXMuZ2V0U3RhdGlzdGljcygpO1xuICB9XG5cbiAgcHJpdmF0ZSByYW5kb20oKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwMCk7XG4gIH1cblxufVxuIl19