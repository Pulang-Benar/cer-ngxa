/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Injector } from '@angular/core';
import { Subject } from 'rxjs';
import { NbThemeService } from '@nebular/theme';
import { HTTP_SERVICE, API } from '@xaphira/shared';
export class NgxaCerStatisticsAreaPageComponent {
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
        this.http.HTTP_AUTH(this.api['panic']['statistics-area'], null, null, null, [this.selected]).subscribe((/**
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
                    type: 'bar',
                    barWidth: '60%',
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
                        type: 'shadow',
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
                    top: '15%',
                    containLabel: true,
                },
                xAxis: [
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
                yAxis: [
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
NgxaCerStatisticsAreaPageComponent.decorators = [
    { type: Component, args: [{
                selector: 'xa-cer-statistics-area',
                template: "<xa-page-outlet\n    [header]=\"'Statistics of Emergency Report by Area'\"\n    [dataSelect]=\"dataSelect\"\n    [selected]=\"selected\"\n    (selectChange)=\"onSelectChange($event)\">\n    <xa-chart [options]=\"options\"></xa-chart>\n</xa-page-outlet>",
                styles: [".nb-theme-default :host ::ng-deep nb-card-body{overflow:unset}.nb-theme-dark :host ::ng-deep nb-card-body{overflow:unset}.nb-theme-cosmic :host ::ng-deep nb-card-body{overflow:unset}.nb-theme-corporate :host ::ng-deep nb-card-body{overflow:unset}"]
            }] }
];
/** @nocollapse */
NgxaCerStatisticsAreaPageComponent.ctorParameters = () => [
    { type: Injector },
    { type: NbThemeService }
];
if (false) {
    /** @type {?} */
    NgxaCerStatisticsAreaPageComponent.prototype.options;
    /** @type {?} */
    NgxaCerStatisticsAreaPageComponent.prototype.data;
    /** @type {?} */
    NgxaCerStatisticsAreaPageComponent.prototype.dataSelect;
    /** @type {?} */
    NgxaCerStatisticsAreaPageComponent.prototype.selected;
    /**
     * @type {?}
     * @private
     */
    NgxaCerStatisticsAreaPageComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NgxaCerStatisticsAreaPageComponent.prototype.http;
    /**
     * @type {?}
     * @private
     */
    NgxaCerStatisticsAreaPageComponent.prototype.api;
    /**
     * @type {?}
     * @private
     */
    NgxaCerStatisticsAreaPageComponent.prototype.themeSubscription;
    /**
     * @type {?}
     * @private
     */
    NgxaCerStatisticsAreaPageComponent.prototype.axis;
    /**
     * @type {?}
     * @private
     */
    NgxaCerStatisticsAreaPageComponent.prototype.legend;
    /**
     * @type {?}
     * @private
     */
    NgxaCerStatisticsAreaPageComponent.prototype.series;
    /**
     * @type {?}
     * @private
     */
    NgxaCerStatisticsAreaPageComponent.prototype.theme;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4YS1jZXItc3RhdGlzdGljcy1hcmVhLXBhZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHhhcGhpcmEvbmd4YS1jZXIvIiwic291cmNlcyI6WyJsaWIvc3RhdGlzdGljcy9hcmVhL25neGEtY2VyLXN0YXRpc3RpY3MtYXJlYS1wYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxPQUFPLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQzdDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRCxPQUFPLEVBQXNCLFlBQVksRUFBRSxHQUFHLEVBQVksTUFBTSxpQkFBaUIsQ0FBQztBQU9sRixNQUFNLE9BQU8sa0NBQWtDOzs7OztJQWU3QyxZQUFZLFFBQWtCLEVBQVUsS0FBcUI7UUFBckIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFidEQsWUFBTyxHQUFRLEVBQUUsQ0FBQztRQUlqQixhQUFRLEdBQWtCLElBQUksT0FBTyxFQUFRLENBQUM7UUFVcEQsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMvQixDQUFDOzs7O0lBRUQsUUFBUTs7Y0FDQSxJQUFJLEdBQVcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUU7O2NBQ3ZDLFFBQVEsR0FBYSxFQUFFO1FBQzdCLEtBQUssSUFBSSxDQUFDLEdBQVcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDbkMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDekI7UUFDRCxJQUFJLENBQUMs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QXNCOzs7OztJQUN0QiwrREFBd0M7Ozs7O0lBQ3hDLGtEQUFvQjs7Ozs7SUFDcEIsb0RBQXNCOzs7OztJQUN0QixvREFBc0I7Ozs7O0lBR1UsbURBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgTmJUaGVtZVNlcnZpY2UgfSBmcm9tICdAbmVidWxhci90aGVtZSc7XG5pbXBvcnQgeyBIdHRwRmFjdG9yeVNlcnZpY2UsIEhUVFBfU0VSVklDRSwgQVBJLCBBUElNb2RlbCB9IGZyb20gJ0B4YXBoaXJhL3NoYXJlZCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3hhLWNlci1zdGF0aXN0aWNzLWFyZWEnLFxuICBzdHlsZVVybHM6IFsnLi9uZ3hhLWNlci1zdGF0aXN0aWNzLWFyZWEtcGFnZS5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vbmd4YS1jZXItc3RhdGlzdGljcy1hcmVhLXBhZ2UuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBOZ3hhQ2VyU3RhdGlzdGljc0FyZWFQYWdlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gIHB1YmxpYyBvcHRpb25zOiBhbnkgPSB7fTtcbiAgcHVibGljIGRhdGE6IGFueTtcbiAgcHVibGljIGRhdGFTZWxlY3Q6IGFueVtdO1xuICBwdWJsaWMgc2VsZWN0ZWQ6IGFueTtcbiAgcHJpdmF0ZSBkZXN0cm95JDogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIHByaXZhdGUgaHR0cDogSHR0cEZhY3RvcnlTZXJ2aWNlO1xuICBwcml2YXRlIGFwaTogQVBJTW9kZWw7XG4gIHByaXZhdGUgdGhlbWVTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBheGlzOiBhbnlbXTtcbiAgcHJpdmF0ZSBsZWdlbmQ6IGFueVtdO1xuICBwcml2YXRlIHNlcmllczogYW55W107XG5cblxuICBjb25zdHJ1Y3RvcihpbmplY3RvcjogSW5qZWN0b3IsIHByaXZhdGUgdGhlbWU6IE5iVGhlbWVTZXJ2aWNlKSB7XG4gICAgdGhpcy5odHRwID0gaW5qZWN0b3IuZ2V0KEhUVFBfU0VSVklDRSk7XG4gICAgdGhpcy5hcGkgPSBpbmplY3Rvci5nZXQoQVBJKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IHllYXI6IG51bWJlciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcbiAgICBjb25zdCB0ZW1wRGF0YTogbnVtYmVyW10gPSBbXTtcbiAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAzOyBpID49IDA7IGktLSkge1xuICAgICAgdGVtcERhdGEucHVzaCh5ZWFyIC0gaSk7XG4gICAgfVxuICAgIHRoaXMuZGF0YVNlbGVjdCA9IHRlbXBEYXRhO1xuICAgIHRoaXMuc2VsZWN0ZWQgPSB5ZWFyO1xuICAgIHRoaXMuZ2V0U3RhdGlzdGljcygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICAgIHRoaXMudGhlbWVTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0U3RhdGlzdGljcygpOiB2b2lkIHtcbiAgICB0aGlzLmh0dHAuSFRUUF9BVVRIKFxuICAgICAgdGhpcy5hcGlbJ3BhbmljJ11bJ3N0YXRpc3RpY3MtYXJlYSddLFxuICAgICAgbnVsbCxcbiAgICAgIG51bGwsXG4gICAgICBudWxsLFxuICAgICAgW3RoaXMuc2VsZWN0ZWRdKS5zdWJzY3JpYmUoKHZhbHVlczogYW55KSA9PiB7XG4gICAgICAgIHRoaXMuYXhpcyA9IHZhbHVlc1snYXhpcyddWydkYXRhJ107XG4gICAgICAgIHRoaXMubGVnZW5kID0gdmFsdWVzWydsZWdlbmQnXVsnZGF0YSddO1xuICAgICAgICB0aGlzLnNlcmllcyA9IFtdO1xuICAgICAgICB2YWx1ZXNbJ3NlcmllcyddLmZvckVhY2goKHNlcmllczogYW55KSA9PiB7XG4gICAgICAgICAgY29uc3QgZGF0YVNlcmllczogYW55W10gPSBbXTtcbiAgICAgICAgICB2YWx1ZXNbJ2F4aXMnXVsnZGF0YSddLmZvckVhY2goKGF4aXM6IGFueSkgPT4ge1xuICAgICAgICAgICAgZGF0YVNlcmllcy5wdXNoKHNlcmllc1snZGF0YSddW2F4aXNdKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLnNlcmllcy5wdXNoKHtcbiAgICAgICAgICAgIG5hbWU6IHNlcmllc1snbmFtZSddLFxuICAgICAgICAgICAgdHlwZTogJ2JhcicsXG4gICAgICAgICAgICBiYXJXaWR0aDogJzYwJScsXG4gICAgICAgICAgICBkYXRhOiBkYXRhU2VyaWVzLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5idWlsZENoYXJ0KCk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGJ1aWxkQ2hhcnQoKTogdm9pZCB7XG4gICAgdGhpcy50aGVtZVN1YnNjcmlwdGlvbiA9IHRoaXMudGhlbWUuZ2V0SnNUaGVtZSgpLnN1YnNjcmliZShjb25maWcgPT4ge1xuXG4gICAgICBjb25zdCBjb2xvcnM6IGFueSA9IGNvbmZpZy52YXJpYWJsZXM7XG4gICAgICBjb25zdCBlY2hhcnRzOiBhbnkgPSBjb25maWcudmFyaWFibGVzLmVjaGFydHM7XG5cbiAgICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBlY2hhcnRzLmJnLFxuICAgICAgICB0b29sdGlwOiB7XG4gICAgICAgICAgdHJpZ2dlcjogJ2F4aXMnLFxuICAgICAgICAgIGF4aXNQb2ludGVyOiB7XG4gICAgICAgICAgICB0eXBlOiAnc2hhZG93JyxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICBkYXRhOiB0aGlzLmxlZ2VuZCxcbiAgICAgICAgICB0ZXh0U3R5bGU6IHtcbiAgICAgICAgICAgIGNvbG9yOiBlY2hhcnRzLnRleHRDb2xvcixcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBncmlkOiB7XG4gICAgICAgICAgbGVmdDogJzIlJyxcbiAgICAgICAgICByaWdodDogJzMlJyxcbiAgICAgICAgICBib3R0b206ICc1JScsXG4gICAgICAgICAgdG9wOiAnMTUlJyxcbiAgICAgICAgICBjb250YWluTGFiZWw6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHhBeGlzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ3ZhbHVlJyxcbiAgICAgICAgICAgIGF4aXNMaW5lOiB7XG4gICAgICAgICAgICAgIGxpbmVTdHlsZToge1xuICAgICAgICAgICAgICAgIGNvbG9yOiBlY2hhcnRzLmF4aXNMaW5lQ29sb3IsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3BsaXRMaW5lOiB7XG4gICAgICAgICAgICAgIGxpbmVTdHlsZToge1xuICAgICAgICAgICAgICAgIGNvbG9yOiBlY2hhcnRzLnNwbGl0TGluZUNvbG9yLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGF4aXNMYWJlbDoge1xuICAgICAgICAgICAgICB0ZXh0U3R5bGU6IHtcbiAgICAgICAgICAgICAgICBjb2xvcjogZWNoYXJ0cy50ZXh0Q29sb3IsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIHlBeGlzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ2NhdGVnb3J5JyxcbiAgICAgICAgICAgIGRhdGE6IHRoaXMuYXhpcyxcbiAgICAgICAgICAgIGF4aXNUaWNrOiB7XG4gICAgICAgICAgICAgIGFsaWduV2l0aExhYmVsOiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGF4aXNMaW5lOiB7XG4gICAgICAgICAgICAgIGxpbmVTdHlsZToge1xuICAgICAgICAgICAgICAgIGNvbG9yOiBlY2hhcnRzLmF4aXNMaW5lQ29sb3IsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYXhpc0xhYmVsOiB7XG4gICAgICAgICAgICAgIHRleHRTdHlsZToge1xuICAgICAgICAgICAgICAgIGNvbG9yOiBlY2hhcnRzLnRleHRDb2xvcixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgc2VyaWVzOiB0aGlzLnNlcmllcyxcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgb25TZWxlY3RDaGFuZ2UoZGF0YTogYW55KTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3RlZCA9IGRhdGE7XG4gICAgdGhpcy5nZXRTdGF0aXN0aWNzKCk7XG4gIH1cblxuICBwcml2YXRlIHJhbmRvbSgpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTAwKTtcbiAgfVxuXG59XG4iXX0=