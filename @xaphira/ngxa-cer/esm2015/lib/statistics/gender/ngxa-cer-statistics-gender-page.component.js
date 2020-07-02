/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Injector } from '@angular/core';
import { Subject } from 'rxjs';
import { NbThemeService } from '@nebular/theme';
import { HTTP_SERVICE, API } from '@xaphira/shared';
export class NgxaCerStatisticsGenderPageComponent {
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
        this.buildChart();
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
            this.echarts = config.variables.echarts;
            this.http.HTTP_AUTH(this.api['panic']['statistics-gender'], null, null, null, [this.selected]).subscribe((/**
             * @param {?} values
             * @return {?}
             */
            (values) => {
                this.legend = values['legend']['data'];
                this.series = [];
                console.log(values['series']);
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
                        dataSeries.push({
                            value: series['data'][axis],
                            name: axis,
                        });
                    }));
                    this.series.push({
                        name: series['name'],
                        type: 'pie',
                        radius: '80%',
                        center: ['50%', '50%'],
                        data: dataSeries,
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: this.echarts.itemHoverShadowColor,
                            },
                        },
                        label: {
                            normal: {
                                textStyle: {
                                    color: this.echarts.textColor,
                                },
                            },
                        },
                        labelLine: {
                            normal: {
                                lineStyle: {
                                    color: this.echarts.axisLineColor,
                                },
                            },
                        },
                    });
                    this.options = {
                        backgroundColor: this.echarts.bg,
                        tooltip: {
                            trigger: 'item',
                            formatter: '{a} <br/>{b} : {c} ({d}%)',
                        },
                        legend: {
                            orient: 'vertical',
                            left: 'left',
                            data: this.legend,
                            textStyle: {
                                color: this.echarts.textColor,
                            },
                        },
                        calculable: true,
                        series: this.series,
                    };
                }));
            }));
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
}
NgxaCerStatisticsGenderPageComponent.decorators = [
    { type: Component, args: [{
                selector: 'xa-cer-statistics-gender',
                template: "<xa-page-outlet\n    [header]=\"'Statistics of Emergency Report by Gender'\"\n    [dataSelect]=\"dataSelect\"\n    [selected]=\"selected\"\n    (selectChange)=\"onSelectChange($event)\">\n    <xa-chart [options]=\"options\"></xa-chart>\n</xa-page-outlet>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
NgxaCerStatisticsGenderPageComponent.ctorParameters = () => [
    { type: Injector },
    { type: NbThemeService }
];
if (false) {
    /** @type {?} */
    NgxaCerStatisticsGenderPageComponent.prototype.options;
    /** @type {?} */
    NgxaCerStatisticsGenderPageComponent.prototype.data;
    /** @type {?} */
    NgxaCerStatisticsGenderPageComponent.prototype.dataSelect;
    /** @type {?} */
    NgxaCerStatisticsGenderPageComponent.prototype.selected;
    /**
     * @type {?}
     * @private
     */
    NgxaCerStatisticsGenderPageComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NgxaCerStatisticsGenderPageComponent.prototype.http;
    /**
     * @type {?}
     * @private
     */
    NgxaCerStatisticsGenderPageComponent.prototype.api;
    /**
     * @type {?}
     * @private
     */
    NgxaCerStatisticsGenderPageComponent.prototype.themeSubscription;
    /**
     * @type {?}
     * @private
     */
    NgxaCerStatisticsGenderPageComponent.prototype.legend;
    /**
     * @type {?}
     * @private
     */
    NgxaCerStatisticsGenderPageComponent.prototype.series;
    /**
     * @type {?}
     * @private
     */
    NgxaCerStatisticsGenderPageComponent.prototype.echarts;
    /**
     * @type {?}
     * @private
     */
    NgxaCerStatisticsGenderPageComponent.prototype.theme;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4YS1jZXItc3RhdGlzdGljcy1nZW5kZXItcGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AeGFwaGlyYS9uZ3hhLWNlci8iLCJzb3VyY2VzIjpbImxpYi9zdGF0aXN0aWNzL2dlbmRlci9uZ3hhLWNlci1zdGF0aXN0aWNzLWdlbmRlci1wYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxPQUFPLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQzdDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRCxPQUFPLEVBQXNCLFlBQVksRUFBRSxHQUFHLEVBQVksTUFBTSxpQkFBaUIsQ0FBQztBQU9sRixNQUFNLE9BQU8sb0NBQW9DOzs7OztJQWMvQyxZQUFZLFFBQWtCLEVBQVUsS0FBcUI7UUFBckIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFadEQsWUFBTyxHQUFRLEVBQUUsQ0FBQztRQUlqQixhQUFRLEdBQWtCLElBQUksT0FBTyxFQUFRLENBQUM7UUFTcEQsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMvQixDQUFDOzs7O0lBRUQsUUFBUTs7Y0FDQSxJQUFJLEdBQVcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUU7O2NBQ3ZDLFFBQVEsR0FBYSxFQUFFO1FBQzdCLEtBQUssSUFBSSxDQUFDLEdBQVcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDbkMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDekI7UUFDRCxJQUFJ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TUFBTTs0QkFDZixTQUFTLEVBQUUsMkJBQTJCO3lCQUN2Qzt3QkFDRCxNQUFNLEVBQUU7NEJBQ04sTUFBTSxFQUFFLFVBQVU7NEJBQ2xCLElBQUksRUFBRSxNQUFNOzRCQUNaLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTTs0QkFDakIsU0FBUyxFQUFFO2dDQUNULEtBQUssRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVM7NkJBQzlCO3lCQUNGO3dCQUNELFVBQVUsRUFBRSxJQUFJO3dCQUNoQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07cUJBQ3BCLENBQUM7Z0JBQ0osQ0FBQyxFQUFDLENBQUM7WUFDUCxDQUFDLEVBQUMsQ0FBQztRQUNMLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFTSxjQUFjLENBQUMsSUFBUztRQUM3QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7O1lBMUhGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsMEJBQTBCO2dCQUVwQyw0UUFBK0Q7O2FBQ2hFOzs7O1lBVHNDLFFBQVE7WUFFdEMsY0FBYzs7OztJQVVyQix1REFBeUI7O0lBQ3pCLG9EQUFpQjs7SUFDakIsMERBQXlCOztJQUN6Qix3REFBcUI7Ozs7O0lBQ3JCLHdEQUFzRDs7Ozs7SUFDdEQsb0RBQWlDOzs7OztJQUNqQyxtREFBc0I7Ozs7O0lBQ3RCLGlFQUF3Qzs7Ozs7SUFDeEMsc0RBQXNCOzs7OztJQUN0QixzREFBc0I7Ozs7O0lBQ3RCLHVEQUFxQjs7Ozs7SUFFVyxxREFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95LCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBOYlRoZW1lU2VydmljZSB9IGZyb20gJ0BuZWJ1bGFyL3RoZW1lJztcbmltcG9ydCB7IEh0dHBGYWN0b3J5U2VydmljZSwgSFRUUF9TRVJWSUNFLCBBUEksIEFQSU1vZGVsIH0gZnJvbSAnQHhhcGhpcmEvc2hhcmVkJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAneGEtY2VyLXN0YXRpc3RpY3MtZ2VuZGVyJyxcbiAgc3R5bGVVcmxzOiBbJy4vbmd4YS1jZXItc3RhdGlzdGljcy1nZW5kZXItcGFnZS5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vbmd4YS1jZXItc3RhdGlzdGljcy1nZW5kZXItcGFnZS5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIE5neGFDZXJTdGF0aXN0aWNzR2VuZGVyUGFnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICBwdWJsaWMgb3B0aW9uczogYW55ID0ge307XG4gIHB1YmxpYyBkYXRhOiBhbnk7XG4gIHB1YmxpYyBkYXRhU2VsZWN0OiBhbnlbXTtcbiAgcHVibGljIHNlbGVjdGVkOiBhbnk7XG4gIHByaXZhdGUgZGVzdHJveSQ6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBwcml2YXRlIGh0dHA6IEh0dHBGYWN0b3J5U2VydmljZTtcbiAgcHJpdmF0ZSBhcGk6IEFQSU1vZGVsO1xuICBwcml2YXRlIHRoZW1lU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgbGVnZW5kOiBhbnlbXTtcbiAgcHJpdmF0ZSBzZXJpZXM6IGFueVtdO1xuICBwcml2YXRlIGVjaGFydHM6IGFueTtcblxuICBjb25zdHJ1Y3RvcihpbmplY3RvcjogSW5qZWN0b3IsIHByaXZhdGUgdGhlbWU6IE5iVGhlbWVTZXJ2aWNlKSB7XG4gICAgdGhpcy5odHRwID0gaW5qZWN0b3IuZ2V0KEhUVFBfU0VSVklDRSk7XG4gICAgdGhpcy5hcGkgPSBpbmplY3Rvci5nZXQoQVBJKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IHllYXI6IG51bWJlciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcbiAgICBjb25zdCB0ZW1wRGF0YTogbnVtYmVyW10gPSBbXTtcbiAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAzOyBpID49IDA7IGktLSkge1xuICAgICAgdGVtcERhdGEucHVzaCh5ZWFyIC0gaSk7XG4gICAgfVxuICAgIHRoaXMuZGF0YVNlbGVjdCA9IHRlbXBEYXRhO1xuICAgIHRoaXMuc2VsZWN0ZWQgPSB5ZWFyO1xuICAgIHRoaXMuZ2V0U3RhdGlzdGljcygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICAgIHRoaXMudGhlbWVTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0U3RhdGlzdGljcygpOiB2b2lkIHtcbiAgICB0aGlzLmJ1aWxkQ2hhcnQoKTtcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGRDaGFydCgpOiB2b2lkIHtcbiAgICB0aGlzLnRoZW1lU3Vic2NyaXB0aW9uID0gdGhpcy50aGVtZS5nZXRKc1RoZW1lKCkuc3Vic2NyaWJlKGNvbmZpZyA9PiB7XG5cbiAgICAgIGNvbnN0IGNvbG9ycyA9IGNvbmZpZy52YXJpYWJsZXM7XG4gICAgICB0aGlzLmVjaGFydHMgPSBjb25maWcudmFyaWFibGVzLmVjaGFydHM7XG4gICAgICBcbiAgICAgIHRoaXMuaHR0cC5IVFRQX0FVVEgoXG4gICAgICAgIHRoaXMuYXBpWydwYW5pYyddWydzdGF0aXN0aWNzLWdlbmRlciddLFxuICAgICAgICBudWxsLFxuICAgICAgICBudWxsLFxuICAgICAgICBudWxsLFxuICAgICAgICBbdGhpcy5zZWxlY3RlZF0pLnN1YnNjcmliZSgodmFsdWVzOiBhbnkpID0+IHtcbiAgICAgICAgICB0aGlzLmxlZ2VuZCA9IHZhbHVlc1snbGVnZW5kJ11bJ2RhdGEnXTtcbiAgICAgICAgICB0aGlzLnNlcmllcyA9IFtdO1xuICAgICAgICAgIGNvbnNvbGUubG9nKHZhbHVlc1snc2VyaWVzJ10pO1xuICAgICAgICAgIHZhbHVlc1snc2VyaWVzJ10uZm9yRWFjaCgoc2VyaWVzOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGFTZXJpZXM6IGFueVtdID0gW107XG4gICAgICAgICAgICB2YWx1ZXNbJ2F4aXMnXVsnZGF0YSddLmZvckVhY2goKGF4aXM6IGFueSkgPT4ge1xuICAgICAgICAgICAgICBkYXRhU2VyaWVzLnB1c2goe1xuICAgICAgICAgICAgICAgIHZhbHVlOiBzZXJpZXNbJ2RhdGEnXVtheGlzXSxcbiAgICAgICAgICAgICAgICBuYW1lOiBheGlzLFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5zZXJpZXMucHVzaCh7XG4gICAgICAgICAgICAgIG5hbWU6IHNlcmllc1snbmFtZSddLFxuICAgICAgICAgICAgICB0eXBlOiAncGllJyxcbiAgICAgICAgICAgICAgcmFkaXVzOiAnODAlJyxcbiAgICAgICAgICAgICAgY2VudGVyOiBbJzUwJScsICc1MCUnXSxcbiAgICAgICAgICAgICAgZGF0YTogZGF0YVNlcmllcyxcbiAgICAgICAgICAgICAgaXRlbVN0eWxlOiB7XG4gICAgICAgICAgICAgICAgZW1waGFzaXM6IHtcbiAgICAgICAgICAgICAgICAgIHNoYWRvd0JsdXI6IDEwLFxuICAgICAgICAgICAgICAgICAgc2hhZG93T2Zmc2V0WDogMCxcbiAgICAgICAgICAgICAgICAgIHNoYWRvd0NvbG9yOiB0aGlzLmVjaGFydHMuaXRlbUhvdmVyU2hhZG93Q29sb3IsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgbGFiZWw6IHtcbiAgICAgICAgICAgICAgICBub3JtYWw6IHtcbiAgICAgICAgICAgICAgICAgIHRleHRTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdGhpcy5lY2hhcnRzLnRleHRDb2xvcixcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgbGFiZWxMaW5lOiB7XG4gICAgICAgICAgICAgICAgbm9ybWFsOiB7XG4gICAgICAgICAgICAgICAgICBsaW5lU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHRoaXMuZWNoYXJ0cy5heGlzTGluZUNvbG9yLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGlzLmVjaGFydHMuYmcsXG4gICAgICAgICAgICAgIHRvb2x0aXA6IHtcbiAgICAgICAgICAgICAgICB0cmlnZ2VyOiAnaXRlbScsXG4gICAgICAgICAgICAgICAgZm9ybWF0dGVyOiAne2F9IDxici8+e2J9IDoge2N9ICh7ZH0lKScsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgICAgIG9yaWVudDogJ3ZlcnRpY2FsJyxcbiAgICAgICAgICAgICAgICBsZWZ0OiAnbGVmdCcsXG4gICAgICAgICAgICAgICAgZGF0YTogdGhpcy5sZWdlbmQsXG4gICAgICAgICAgICAgICAgdGV4dFN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogdGhpcy5lY2hhcnRzLnRleHRDb2xvcixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBjYWxjdWxhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICBzZXJpZXM6IHRoaXMuc2VyaWVzLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIG9uU2VsZWN0Q2hhbmdlKGRhdGE6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0ZWQgPSBkYXRhO1xuICAgIHRoaXMuZ2V0U3RhdGlzdGljcygpO1xuICB9XG5cbn1cbiJdfQ==