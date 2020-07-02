/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Injector } from '@angular/core';
import { Subject } from 'rxjs';
import { NbThemeService } from '@nebular/theme';
import { HTTP_SERVICE, API } from '@xaphira/shared';
var NgxaCerStatisticsPeriodePageComponent = /** @class */ (function () {
    function NgxaCerStatisticsPeriodePageComponent(injector, theme) {
        this.theme = theme;
        this.options = {};
        this.destroy$ = new Subject();
        this.http = injector.get(HTTP_SERVICE);
        this.api = injector.get(API);
    }
    /**
     * @return {?}
     */
    NgxaCerStatisticsPeriodePageComponent.prototype.ngOnInit = /**
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
    NgxaCerStatisticsPeriodePageComponent.prototype.ngOnDestroy = /**
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
    NgxaCerStatisticsPeriodePageComponent.prototype.getStatistics = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.http.HTTP_AUTH(this.api['panic']['statistics-periode'], null, null, null, [this.selected]).subscribe((/**
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
                    type: 'line',
                    smooth: true,
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
    NgxaCerStatisticsPeriodePageComponent.prototype.buildChart = /**
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
                        type: 'cross',
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
                    containLabel: true,
                },
                xAxis: [
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
                series: _this.series,
            };
        }));
    };
    /**
     * @param {?} data
     * @return {?}
     */
    NgxaCerStatisticsPeriodePageComponent.prototype.onSelectChange = /**
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
    NgxaCerStatisticsPeriodePageComponent.prototype.random = /**
     * @private
     * @return {?}
     */
    function () {
        return Math.round(Math.random() * 100);
    };
    NgxaCerStatisticsPeriodePageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'xa-cer-statistics-periode',
                    template: "<xa-page-outlet\n    [header]=\"'Statistics of Emergency Report by Periode'\"\n    [dataSelect]=\"dataSelect\"\n    [selected]=\"selected\"\n    (selectChange)=\"onSelectChange($event)\">\n    <xa-chart [options]=\"options\"></xa-chart>\n</xa-page-outlet>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    NgxaCerStatisticsPeriodePageComponent.ctorParameters = function () { return [
        { type: Injector },
        { type: NbThemeService }
    ]; };
    return NgxaCerStatisticsPeriodePageComponent;
}());
export { NgxaCerStatisticsPeriodePageComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4YS1jZXItc3RhdGlzdGljcy1wZXJpb2RlLXBhZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHhhcGhpcmEvbmd4YS1jZXIvIiwic291cmNlcyI6WyJsaWIvc3RhdGlzdGljcy9wZXJpb2RlL25neGEtY2VyLXN0YXRpc3RpY3MtcGVyaW9kZS1wYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBNkIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxPQUFPLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQzdDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRCxPQUFPLEVBQXNCLFlBQVksRUFBRSxHQUFHLEVBQVksTUFBTSxpQkFBaUIsQ0FBQztBQUVsRjtJQW1CRSwrQ0FBWSxRQUFrQixFQUFVLEtBQXFCO1FBQXJCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBWnRELFlBQU8sR0FBUSxFQUFFLENBQUM7UUFJakIsYUFBUSxHQUFrQixJQUFJLE9BQU8sRUFBUSxDQUFDO1FBU3BELElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7OztJQUVELHdEQUFROzs7SUFBUjs7WUFDUSxJQUFJLEdBQVcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUU7O1lBQ3ZDLFFBQVEsR0FBYSxFQUFFO1FBQzdCLEtBQUssSUFBSSxDQUFDLEdBQVcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDbkMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDekI7UUFDRCxJQUFJLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQztRQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7OztJQUVELDJEQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkMsQ0FBQzs7Ozs7SUFFTyw2REFBYTs7OztJQUFyQjtRQUFBLGlCQXdCQztRQXZCQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FDakIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxFQUN2QyxJQUFJLEVBQ0osSUFBSSxFQUNKLElBQUksRUFDSixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLE1BQVc7WUFDckMsS0FBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbkMsS0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDdkMsS0FBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7WUFDakIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU87Ozs7WUFBQyxVQUFDLE1BQVc7O29CQUM3QixVQUFVLEdBQVUsRUFBRTtnQkFDNUIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU87Ozs7Z0JBQUMsVUFBQyxJQUFTO29CQUN2QyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUN4QyxDQUFDLEVBQUMsQ0FBQztnQkFDSCxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztvQkFDZixJQUFJLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQztvQkFDcEIsSUFBSSxFQUFFLE1BQU07b0JBQ1osTUFBTSxFQUFFLElBQUk7b0JBQ1osSUFBSSxFQUFFLFVBQVU7aUJBQ2pCLENBQUMsQ0FBQztZQUNMLENBQUMsRUFBQyxDQUFDO1lBQ0gsS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3RCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFTywwREFBVTs7OztJQUFsQjtRQUFBLGlCQW9FQztRQW5FQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQSxNQUFNOztnQkFFekQsTUFBTSxHQUFRLE1BQU0sQ0FBQyxTQUFTOztnQkFDOUIsT0FBTyxHQUFRLE1BQU0sQ0FBQyxTQUFTLENBQUMsT0FBTztZQUU3QyxLQUFJLENBQUMsT0FBTyxHQUFHO2dCQUNiLGVBQWUsRUFBRSxPQUFPLENBQUMsRUFBRTtnQkFDM0IsT0FBTyxFQUFFO29CQUNQLE9BQU8sRUFBRSxNQUFNO29CQUNmLFdBQVcsRUFBRTt3QkFDWCxJQUFJLEVBQUUsT0FBTztxQkFDZDtpQkFDRjtnQkFDRCxNQUFNLEVBQUU7b0JBQ04sSUFBSSxFQUFFLEtBQUksQ0FBQyxNQUFNO29CQUNqQixTQUFTLEVBQUU7d0JBQ1QsS0FBSyxFQUFFLE9BQU8sQ0FBQyxTQUFTO3FCQUN6QjtpQkFDRjtnQkFDRCxJQUFJLEVBQUU7b0JBQ0osSUFBSSxFQUFFLElBQUk7b0JBQ1YsS0FBSyxFQUFFLElBQUk7b0JBQ1gsTUFBTSxFQUFFLElBQUk7b0JBQ1osWUFBWSxFQUFFLElBQUk7aUJBQ25CO2dCQUNELEtBQUssRUFBRTtvQkFDTDt3QkFDRSxJQUFJLEVBQUUsVUFBVTt3QkFDaEIsSUFBSSxFQUFFLEtBQUksQ0FBQyxJQUFJO3dCQUNmLFFBQVEsRUFBRTs0QkFDUixjQUFjLEVBQUUsSUFBSTt5QkFDckI7d0JBQ0QsUUFBUSxFQUFFOzRCQUNSLFNBQVMsRUFBRTtnQ0FDVCxLQUFLLEVBQUUsT0FBTyxDQUFDLGFBQWE7NkJBQzdCO3lCQUNGO3dCQUNELFNBQVMsRUFBRTs0QkFDVCxTQUFTLEVBQUU7Z0NBQ1QsS0FBSyxFQUFFLE9BQU8sQ0FBQyxTQUFTOzZCQUN6Qjt5QkFDRjtxQkFDRjtpQkFDRjtnQkFDRCxLQUFLLEVBQUU7b0JBQ0w7d0JBQ0UsSUFBSSxFQUFFLE9BQU87d0JBQ2IsUUFBUSxFQUFFOzRCQUNSLFNBQVMsRUFBRTtnQ0FDVCxLQUFLLEVBQUUsT0FBTyxDQUFDLGFBQWE7NkJBQzdCO3lCQUNGO3dCQUNELFNBQVMsRUFBRTs0QkFDVCxTQUFTLEVBQUU7Z0NBQ1QsS0FBSyxFQUFFLE9BQU8sQ0FBQyxjQUFjOzZCQUM5Qjt5QkFDRjt3QkFDRCxTQUFTLEVBQUU7NEJBQ1QsU0FBUyxFQUFFO2dDQUNULEtBQUssRUFBRSxPQUFPLENBQUMsU0FBUzs2QkFDekI7eUJBQ0Y7cUJBQ0Y7aUJBQ0Y7Z0JBQ0QsTUFBTSxFQUFFLEtBQUksQ0FBQyxNQUFNO2FBQ3BCLENBQUM7UUFDSixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRU0sOERBQWM7Ozs7SUFBckIsVUFBc0IsSUFBUztRQUM3QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFFTyxzREFBTTs7OztJQUFkO1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQztJQUN6QyxDQUFDOztnQkFoSkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSwyQkFBMkI7b0JBRXJDLDZRQUFnRTs7aUJBQ2pFOzs7O2dCQVQ4QyxRQUFRO2dCQUU5QyxjQUFjOztJQXFKdkIsNENBQUM7Q0FBQSxBQWxKRCxJQWtKQztTQTdJWSxxQ0FBcUM7OztJQUVoRCx3REFBeUI7O0lBQ3pCLHFEQUFpQjs7SUFDakIsMkRBQXlCOztJQUN6Qix5REFBcUI7Ozs7O0lBQ3JCLHlEQUFzRDs7Ozs7SUFDdEQscURBQWlDOzs7OztJQUNqQyxvREFBc0I7Ozs7O0lBQ3RCLGtFQUF3Qzs7Ozs7SUFDeEMscURBQW9COzs7OztJQUNwQix1REFBc0I7Ozs7O0lBQ3RCLHVEQUFzQjs7Ozs7SUFFVSxzREFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95LCBJbmplY3QsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE5iVGhlbWVTZXJ2aWNlIH0gZnJvbSAnQG5lYnVsYXIvdGhlbWUnO1xuaW1wb3J0IHsgSHR0cEZhY3RvcnlTZXJ2aWNlLCBIVFRQX1NFUlZJQ0UsIEFQSSwgQVBJTW9kZWwgfSBmcm9tICdAeGFwaGlyYS9zaGFyZWQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd4YS1jZXItc3RhdGlzdGljcy1wZXJpb2RlJyxcbiAgc3R5bGVVcmxzOiBbJy4vbmd4YS1jZXItc3RhdGlzdGljcy1wZXJpb2RlLXBhZ2UuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL25neGEtY2VyLXN0YXRpc3RpY3MtcGVyaW9kZS1wYWdlLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgTmd4YUNlclN0YXRpc3RpY3NQZXJpb2RlUGFnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICBwdWJsaWMgb3B0aW9uczogYW55ID0ge307XG4gIHB1YmxpYyBkYXRhOiBhbnk7XG4gIHB1YmxpYyBkYXRhU2VsZWN0OiBhbnlbXTtcbiAgcHVibGljIHNlbGVjdGVkOiBhbnk7XG4gIHByaXZhdGUgZGVzdHJveSQ6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBwcml2YXRlIGh0dHA6IEh0dHBGYWN0b3J5U2VydmljZTtcbiAgcHJpdmF0ZSBhcGk6IEFQSU1vZGVsO1xuICBwcml2YXRlIHRoZW1lU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgYXhpczogYW55W107XG4gIHByaXZhdGUgbGVnZW5kOiBhbnlbXTtcbiAgcHJpdmF0ZSBzZXJpZXM6IGFueVtdO1xuXG4gIGNvbnN0cnVjdG9yKGluamVjdG9yOiBJbmplY3RvciwgcHJpdmF0ZSB0aGVtZTogTmJUaGVtZVNlcnZpY2UpIHtcbiAgICB0aGlzLmh0dHAgPSBpbmplY3Rvci5nZXQoSFRUUF9TRVJWSUNFKTtcbiAgICB0aGlzLmFwaSA9IGluamVjdG9yLmdldChBUEkpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29uc3QgeWVhcjogbnVtYmVyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xuICAgIGNvbnN0IHRlbXBEYXRhOiBudW1iZXJbXSA9IFtdO1xuICAgIGZvciAobGV0IGk6IG51bWJlciA9IDM7IGkgPj0gMDsgaS0tKSB7XG4gICAgICB0ZW1wRGF0YS5wdXNoKHllYXIgLSBpKTtcbiAgICB9XG4gICAgdGhpcy5kYXRhU2VsZWN0ID0gdGVtcERhdGE7XG4gICAgdGhpcy5zZWxlY3RlZCA9IHllYXI7XG4gICAgdGhpcy5nZXRTdGF0aXN0aWNzKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gICAgdGhpcy50aGVtZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRTdGF0aXN0aWNzKCk6IHZvaWQge1xuICAgIHRoaXMuaHR0cC5IVFRQX0FVVEgoXG4gICAgICB0aGlzLmFwaVsncGFuaWMnXVsnc3RhdGlzdGljcy1wZXJpb2RlJ10sXG4gICAgICBudWxsLFxuICAgICAgbnVsbCxcbiAgICAgIG51bGwsXG4gICAgICBbdGhpcy5zZWxlY3RlZF0pLnN1YnNjcmliZSgodmFsdWVzOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5heGlzID0gdmFsdWVzWydheGlzJ11bJ2RhdGEnXTtcbiAgICAgICAgdGhpcy5sZWdlbmQgPSB2YWx1ZXNbJ2xlZ2VuZCddWydkYXRhJ107XG4gICAgICAgIHRoaXMuc2VyaWVzID0gW107XG4gICAgICAgIHZhbHVlc1snc2VyaWVzJ10uZm9yRWFjaCgoc2VyaWVzOiBhbnkpID0+IHtcbiAgICAgICAgICBjb25zdCBkYXRhU2VyaWVzOiBhbnlbXSA9IFtdO1xuICAgICAgICAgIHZhbHVlc1snYXhpcyddWydkYXRhJ10uZm9yRWFjaCgoYXhpczogYW55KSA9PiB7XG4gICAgICAgICAgICBkYXRhU2VyaWVzLnB1c2goc2VyaWVzWydkYXRhJ11bYXhpc10pO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoaXMuc2VyaWVzLnB1c2goe1xuICAgICAgICAgICAgbmFtZTogc2VyaWVzWyduYW1lJ10sXG4gICAgICAgICAgICB0eXBlOiAnbGluZScsXG4gICAgICAgICAgICBzbW9vdGg6IHRydWUsXG4gICAgICAgICAgICBkYXRhOiBkYXRhU2VyaWVzLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5idWlsZENoYXJ0KCk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGJ1aWxkQ2hhcnQoKTogdm9pZCB7XG4gICAgdGhpcy50aGVtZVN1YnNjcmlwdGlvbiA9IHRoaXMudGhlbWUuZ2V0SnNUaGVtZSgpLnN1YnNjcmliZShjb25maWcgPT4ge1xuXG4gICAgICBjb25zdCBjb2xvcnM6IGFueSA9IGNvbmZpZy52YXJpYWJsZXM7XG4gICAgICBjb25zdCBlY2hhcnRzOiBhbnkgPSBjb25maWcudmFyaWFibGVzLmVjaGFydHM7XG5cbiAgICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBlY2hhcnRzLmJnLFxuICAgICAgICB0b29sdGlwOiB7XG4gICAgICAgICAgdHJpZ2dlcjogJ2F4aXMnLFxuICAgICAgICAgIGF4aXNQb2ludGVyOiB7XG4gICAgICAgICAgICB0eXBlOiAnY3Jvc3MnLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgIGRhdGE6IHRoaXMubGVnZW5kLFxuICAgICAgICAgIHRleHRTdHlsZToge1xuICAgICAgICAgICAgY29sb3I6IGVjaGFydHMudGV4dENvbG9yLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGdyaWQ6IHtcbiAgICAgICAgICBsZWZ0OiAnMiUnLFxuICAgICAgICAgIHJpZ2h0OiAnMyUnLFxuICAgICAgICAgIGJvdHRvbTogJzUlJyxcbiAgICAgICAgICBjb250YWluTGFiZWw6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHhBeGlzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ2NhdGVnb3J5JyxcbiAgICAgICAgICAgIGRhdGE6IHRoaXMuYXhpcyxcbiAgICAgICAgICAgIGF4aXNUaWNrOiB7XG4gICAgICAgICAgICAgIGFsaWduV2l0aExhYmVsOiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGF4aXNMaW5lOiB7XG4gICAgICAgICAgICAgIGxpbmVTdHlsZToge1xuICAgICAgICAgICAgICAgIGNvbG9yOiBlY2hhcnRzLmF4aXNMaW5lQ29sb3IsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYXhpc0xhYmVsOiB7XG4gICAgICAgICAgICAgIHRleHRTdHlsZToge1xuICAgICAgICAgICAgICAgIGNvbG9yOiBlY2hhcnRzLnRleHRDb2xvcixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgeUF4aXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAndmFsdWUnLFxuICAgICAgICAgICAgYXhpc0xpbmU6IHtcbiAgICAgICAgICAgICAgbGluZVN0eWxlOiB7XG4gICAgICAgICAgICAgICAgY29sb3I6IGVjaGFydHMuYXhpc0xpbmVDb2xvcixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzcGxpdExpbmU6IHtcbiAgICAgICAgICAgICAgbGluZVN0eWxlOiB7XG4gICAgICAgICAgICAgICAgY29sb3I6IGVjaGFydHMuc3BsaXRMaW5lQ29sb3IsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYXhpc0xhYmVsOiB7XG4gICAgICAgICAgICAgIHRleHRTdHlsZToge1xuICAgICAgICAgICAgICAgIGNvbG9yOiBlY2hhcnRzLnRleHRDb2xvcixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgc2VyaWVzOiB0aGlzLnNlcmllcyxcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgb25TZWxlY3RDaGFuZ2UoZGF0YTogYW55KTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3RlZCA9IGRhdGE7XG4gICAgdGhpcy5nZXRTdGF0aXN0aWNzKCk7XG4gIH1cblxuICBwcml2YXRlIHJhbmRvbSgpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTAwKTtcbiAgfVxuXG59XG4iXX0=