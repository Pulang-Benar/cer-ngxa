/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Injector } from '@angular/core';
import { Subject } from 'rxjs';
import { NbThemeService } from '@nebular/theme';
import { HTTP_SERVICE, API } from '@xaphira/shared';
var NgxaCerStatisticsAreaPageComponent = /** @class */ (function () {
    function NgxaCerStatisticsAreaPageComponent(injector, theme) {
        this.theme = theme;
        this.options = {};
        this.destroy$ = new Subject();
        this.http = injector.get(HTTP_SERVICE);
        this.api = injector.get(API);
    }
    /**
     * @return {?}
     */
    NgxaCerStatisticsAreaPageComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var year = new Date().getFullYear();
        /** @type {?} */
        var tempData = [];
        for (var i = 3; i >= 0; i--) {
            tempData.push(year - i);
        }
        this.dataSelect = tempData;
        this.selected = year;
        this.getStatistics();
    };
    /**
     * @return {?}
     */
    NgxaCerStatisticsAreaPageComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
        this.themeSubscription.unsubscribe();
    };
    /**
     * @private
     * @return {?}
     */
    NgxaCerStatisticsAreaPageComponent.prototype.getStatistics = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.http.HTTP_AUTH(this.api['panic']['statistics-area'], null, null, null, [this.selected]).subscribe((/**
         * @param {?} values
         * @return {?}
         */
        function (values) {
            _this.axis = values['axis']['data'];
            _this.legend = values['legend']['data'];
            _this.series = [];
            values['series'].forEach((/**
             * @param {?} series
             * @return {?}
             */
            function (series) {
                /** @type {?} */
                var dataSeries = [];
                values['axis']['data'].forEach((/**
                 * @param {?} axis
                 * @return {?}
                 */
                function (axis) {
                    dataSeries.push(series['data'][axis]);
                }));
                _this.series.push({
                    name: series['name'],
                    type: 'bar',
                    barWidth: '60%',
                    data: dataSeries,
                });
            }));
            _this.buildChart();
        }));
    };
    /**
     * @private
     * @return {?}
     */
    NgxaCerStatisticsAreaPageComponent.prototype.buildChart = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.themeSubscription = this.theme.getJsTheme().subscribe((/**
         * @param {?} config
         * @return {?}
         */
        function (config) {
            /** @type {?} */
            var colors = config.variables;
            /** @type {?} */
            var echarts = config.variables.echarts;
            _this.options = {
                backgroundColor: echarts.bg,
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow',
                    },
                },
                legend: {
                    data: _this.legend,
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
                        data: _this.axis,
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
                series: _this.series,
            };
        }));
    };
    /**
     * @param {?} data
     * @return {?}
     */
    NgxaCerStatisticsAreaPageComponent.prototype.onSelectChange = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        this.selected = data;
        this.getStatistics();
    };
    /**
     * @private
     * @return {?}
     */
    NgxaCerStatisticsAreaPageComponent.prototype.random = /**
     * @private
     * @return {?}
     */
    function () {
        return Math.round(Math.random() * 100);
    };
    NgxaCerStatisticsAreaPageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'xa-cer-statistics-area',
                    template: "<xa-page-outlet\n    [header]=\"'Statistics of Emergency Report by Area'\"\n    [dataSelect]=\"dataSelect\"\n    [selected]=\"selected\"\n    (selectChange)=\"onSelectChange($event)\">\n    <xa-chart [options]=\"options\"></xa-chart>\n</xa-page-outlet>",
                    styles: [".nb-theme-default :host ::ng-deep nb-card-body{overflow:unset}.nb-theme-dark :host ::ng-deep nb-card-body{overflow:unset}.nb-theme-cosmic :host ::ng-deep nb-card-body{overflow:unset}.nb-theme-corporate :host ::ng-deep nb-card-body{overflow:unset}"]
                }] }
    ];
    /** @nocollapse */
    NgxaCerStatisticsAreaPageComponent.ctorParameters = function () { return [
        { type: Injector },
        { type: NbThemeService }
    ]; };
    return NgxaCerStatisticsAreaPageComponent;
}());
export { NgxaCerStatisticsAreaPageComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4YS1jZXItc3RhdGlzdGljcy1hcmVhLXBhZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHhhcGhpcmEvbmd4YS1jZXIvIiwic291cmNlcyI6WyJsaWIvc3RhdGlzdGljcy9hcmVhL25neGEtY2VyLXN0YXRpc3RpY3MtYXJlYS1wYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxPQUFPLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQzdDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRCxPQUFPLEVBQXNCLFlBQVksRUFBRSxHQUFHLEVBQVksTUFBTSxpQkFBaUIsQ0FBQztBQUVsRjtJQW9CRSw0Q0FBWSxRQUFrQixFQUFVLEtBQXFCO1FBQXJCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBYnRELFlBQU8sR0FBUSxFQUFFLENBQUM7UUFJakIsYUFBUSxHQUFrQixJQUFJLE9BQU8sRUFBUSxDQUFDO1FBVXBELElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7OztJQUVELHFEQUFROzs7SUFBUjs7WUFDUSxJQUFJLEdBQVcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUU7O1lBQ3ZDLFFBQVEsR0FBYSxFQUFFO1FBQzdCLEtBQUssSUFBSSxDQUFDLEdBQVcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDbkMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDekI7UUFDRCxJQUFJLENBQUMsVUFBVSxHQUFHLFFB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akIsd0RBQXlCOztJQUN6QixzREFBcUI7Ozs7O0lBQ3JCLHNEQUFzRDs7Ozs7SUFDdEQsa0RBQWlDOzs7OztJQUNqQyxpREFBc0I7Ozs7O0lBQ3RCLCtEQUF3Qzs7Ozs7SUFDeEMsa0RBQW9COzs7OztJQUNwQixvREFBc0I7Ozs7O0lBQ3RCLG9EQUFzQjs7Ozs7SUFHVSxtREFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95LCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBOYlRoZW1lU2VydmljZSB9IGZyb20gJ0BuZWJ1bGFyL3RoZW1lJztcbmltcG9ydCB7IEh0dHBGYWN0b3J5U2VydmljZSwgSFRUUF9TRVJWSUNFLCBBUEksIEFQSU1vZGVsIH0gZnJvbSAnQHhhcGhpcmEvc2hhcmVkJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAneGEtY2VyLXN0YXRpc3RpY3MtYXJlYScsXG4gIHN0eWxlVXJsczogWycuL25neGEtY2VyLXN0YXRpc3RpY3MtYXJlYS1wYWdlLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9uZ3hhLWNlci1zdGF0aXN0aWNzLWFyZWEtcGFnZS5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIE5neGFDZXJTdGF0aXN0aWNzQXJlYVBhZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgcHVibGljIG9wdGlvbnM6IGFueSA9IHt9O1xuICBwdWJsaWMgZGF0YTogYW55O1xuICBwdWJsaWMgZGF0YVNlbGVjdDogYW55W107XG4gIHB1YmxpYyBzZWxlY3RlZDogYW55O1xuICBwcml2YXRlIGRlc3Ryb3kkOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgcHJpdmF0ZSBodHRwOiBIdHRwRmFjdG9yeVNlcnZpY2U7XG4gIHByaXZhdGUgYXBpOiBBUElNb2RlbDtcbiAgcHJpdmF0ZSB0aGVtZVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIGF4aXM6IGFueVtdO1xuICBwcml2YXRlIGxlZ2VuZDogYW55W107XG4gIHByaXZhdGUgc2VyaWVzOiBhbnlbXTtcblxuXG4gIGNvbnN0cnVjdG9yKGluamVjdG9yOiBJbmplY3RvciwgcHJpdmF0ZSB0aGVtZTogTmJUaGVtZVNlcnZpY2UpIHtcbiAgICB0aGlzLmh0dHAgPSBpbmplY3Rvci5nZXQoSFRUUF9TRVJWSUNFKTtcbiAgICB0aGlzLmFwaSA9IGluamVjdG9yLmdldChBUEkpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29uc3QgeWVhcjogbnVtYmVyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xuICAgIGNvbnN0IHRlbXBEYXRhOiBudW1iZXJbXSA9IFtdO1xuICAgIGZvciAobGV0IGk6IG51bWJlciA9IDM7IGkgPj0gMDsgaS0tKSB7XG4gICAgICB0ZW1wRGF0YS5wdXNoKHllYXIgLSBpKTtcbiAgICB9XG4gICAgdGhpcy5kYXRhU2VsZWN0ID0gdGVtcERhdGE7XG4gICAgdGhpcy5zZWxlY3RlZCA9IHllYXI7XG4gICAgdGhpcy5nZXRTdGF0aXN0aWNzKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gICAgdGhpcy50aGVtZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRTdGF0aXN0aWNzKCk6IHZvaWQge1xuICAgIHRoaXMuaHR0cC5IVFRQX0FVVEgoXG4gICAgICB0aGlzLmFwaVsncGFuaWMnXVsnc3RhdGlzdGljcy1hcmVhJ10sXG4gICAgICBudWxsLFxuICAgICAgbnVsbCxcbiAgICAgIG51bGwsXG4gICAgICBbdGhpcy5zZWxlY3RlZF0pLnN1YnNjcmliZSgodmFsdWVzOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5heGlzID0gdmFsdWVzWydheGlzJ11bJ2RhdGEnXTtcbiAgICAgICAgdGhpcy5sZWdlbmQgPSB2YWx1ZXNbJ2xlZ2VuZCddWydkYXRhJ107XG4gICAgICAgIHRoaXMuc2VyaWVzID0gW107XG4gICAgICAgIHZhbHVlc1snc2VyaWVzJ10uZm9yRWFjaCgoc2VyaWVzOiBhbnkpID0+IHtcbiAgICAgICAgICBjb25zdCBkYXRhU2VyaWVzOiBhbnlbXSA9IFtdO1xuICAgICAgICAgIHZhbHVlc1snYXhpcyddWydkYXRhJ10uZm9yRWFjaCgoYXhpczogYW55KSA9PiB7XG4gICAgICAgICAgICBkYXRhU2VyaWVzLnB1c2goc2VyaWVzWydkYXRhJ11bYXhpc10pO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoaXMuc2VyaWVzLnB1c2goe1xuICAgICAgICAgICAgbmFtZTogc2VyaWVzWyduYW1lJ10sXG4gICAgICAgICAgICB0eXBlOiAnYmFyJyxcbiAgICAgICAgICAgIGJhcldpZHRoOiAnNjAlJyxcbiAgICAgICAgICAgIGRhdGE6IGRhdGFTZXJpZXMsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmJ1aWxkQ2hhcnQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGRDaGFydCgpOiB2b2lkIHtcbiAgICB0aGlzLnRoZW1lU3Vic2NyaXB0aW9uID0gdGhpcy50aGVtZS5nZXRKc1RoZW1lKCkuc3Vic2NyaWJlKGNvbmZpZyA9PiB7XG5cbiAgICAgIGNvbnN0IGNvbG9yczogYW55ID0gY29uZmlnLnZhcmlhYmxlcztcbiAgICAgIGNvbnN0IGVjaGFydHM6IGFueSA9IGNvbmZpZy52YXJpYWJsZXMuZWNoYXJ0cztcblxuICAgICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGVjaGFydHMuYmcsXG4gICAgICAgIHRvb2x0aXA6IHtcbiAgICAgICAgICB0cmlnZ2VyOiAnYXhpcycsXG4gICAgICAgICAgYXhpc1BvaW50ZXI6IHtcbiAgICAgICAgICAgIHR5cGU6ICdzaGFkb3cnLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgIGRhdGE6IHRoaXMubGVnZW5kLFxuICAgICAgICAgIHRleHRTdHlsZToge1xuICAgICAgICAgICAgY29sb3I6IGVjaGFydHMudGV4dENvbG9yLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGdyaWQ6IHtcbiAgICAgICAgICBsZWZ0OiAnMiUnLFxuICAgICAgICAgIHJpZ2h0OiAnMyUnLFxuICAgICAgICAgIGJvdHRvbTogJzUlJyxcbiAgICAgICAgICB0b3A6ICcxNSUnLFxuICAgICAgICAgIGNvbnRhaW5MYWJlbDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgeEF4aXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAndmFsdWUnLFxuICAgICAgICAgICAgYXhpc0xpbmU6IHtcbiAgICAgICAgICAgICAgbGluZVN0eWxlOiB7XG4gICAgICAgICAgICAgICAgY29sb3I6IGVjaGFydHMuYXhpc0xpbmVDb2xvcixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzcGxpdExpbmU6IHtcbiAgICAgICAgICAgICAgbGluZVN0eWxlOiB7XG4gICAgICAgICAgICAgICAgY29sb3I6IGVjaGFydHMuc3BsaXRMaW5lQ29sb3IsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYXhpc0xhYmVsOiB7XG4gICAgICAgICAgICAgIHRleHRTdHlsZToge1xuICAgICAgICAgICAgICAgIGNvbG9yOiBlY2hhcnRzLnRleHRDb2xvcixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgeUF4aXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnY2F0ZWdvcnknLFxuICAgICAgICAgICAgZGF0YTogdGhpcy5heGlzLFxuICAgICAgICAgICAgYXhpc1RpY2s6IHtcbiAgICAgICAgICAgICAgYWxpZ25XaXRoTGFiZWw6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYXhpc0xpbmU6IHtcbiAgICAgICAgICAgICAgbGluZVN0eWxlOiB7XG4gICAgICAgICAgICAgICAgY29sb3I6IGVjaGFydHMuYXhpc0xpbmVDb2xvcixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBheGlzTGFiZWw6IHtcbiAgICAgICAgICAgICAgdGV4dFN0eWxlOiB7XG4gICAgICAgICAgICAgICAgY29sb3I6IGVjaGFydHMudGV4dENvbG9yLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICBzZXJpZXM6IHRoaXMuc2VyaWVzLFxuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBvblNlbGVjdENoYW5nZShkYXRhOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnNlbGVjdGVkID0gZGF0YTtcbiAgICB0aGlzLmdldFN0YXRpc3RpY3MoKTtcbiAgfVxuXG4gIHByaXZhdGUgcmFuZG9tKCkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMDApO1xuICB9XG5cbn1cbiJdfQ==