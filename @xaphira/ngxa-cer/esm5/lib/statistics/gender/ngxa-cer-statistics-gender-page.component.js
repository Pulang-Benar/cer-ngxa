/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Injector } from '@angular/core';
import { Subject } from 'rxjs';
import { NbThemeService } from '@nebular/theme';
import { HTTP_SERVICE, API } from '@xaphira/shared';
var NgxaCerStatisticsGenderPageComponent = /** @class */ (function () {
    function NgxaCerStatisticsGenderPageComponent(injector, theme) {
        this.theme = theme;
        this.options = {};
        this.destroy$ = new Subject();
        this.http = injector.get(HTTP_SERVICE);
        this.api = injector.get(API);
    }
    /**
     * @return {?}
     */
    NgxaCerStatisticsGenderPageComponent.prototype.ngOnInit = /**
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
    NgxaCerStatisticsGenderPageComponent.prototype.ngOnDestroy = /**
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
    NgxaCerStatisticsGenderPageComponent.prototype.getStatistics = /**
     * @private
     * @return {?}
     */
    function () {
        this.buildChart();
    };
    /**
     * @private
     * @return {?}
     */
    NgxaCerStatisticsGenderPageComponent.prototype.buildChart = /**
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
            _this.echarts = config.variables.echarts;
            _this.http.HTTP_AUTH(_this.api['panic']['statistics-gender'], null, null, null, [_this.selected]).subscribe((/**
             * @param {?} values
             * @return {?}
             */
            function (values) {
                _this.legend = values['legend']['data'];
                _this.series = [];
                console.log(values['series']);
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
                        dataSeries.push({
                            value: series['data'][axis],
                            name: axis,
                        });
                    }));
                    _this.series.push({
                        name: series['name'],
                        type: 'pie',
                        radius: '80%',
                        center: ['50%', '50%'],
                        data: dataSeries,
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: _this.echarts.itemHoverShadowColor,
                            },
                        },
                        label: {
                            normal: {
                                textStyle: {
                                    color: _this.echarts.textColor,
                                },
                            },
                        },
                        labelLine: {
                            normal: {
                                lineStyle: {
                                    color: _this.echarts.axisLineColor,
                                },
                            },
                        },
                    });
                    _this.options = {
                        backgroundColor: _this.echarts.bg,
                        tooltip: {
                            trigger: 'item',
                            formatter: '{a} <br/>{b} : {c} ({d}%)',
                        },
                        legend: {
                            orient: 'vertical',
                            left: 'left',
                            data: _this.legend,
                            textStyle: {
                                color: _this.echarts.textColor,
                            },
                        },
                        calculable: true,
                        series: _this.series,
                    };
                }));
            }));
        }));
    };
    /**
     * @param {?} data
     * @return {?}
     */
    NgxaCerStatisticsGenderPageComponent.prototype.onSelectChange = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        this.selected = data;
        this.getStatistics();
    };
    NgxaCerStatisticsGenderPageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'xa-cer-statistics-gender',
                    template: "<xa-page-outlet\n    [header]=\"'Statistics of Emergency Report by Gender'\"\n    [dataSelect]=\"dataSelect\"\n    [selected]=\"selected\"\n    (selectChange)=\"onSelectChange($event)\">\n    <xa-chart [options]=\"options\"></xa-chart>\n</xa-page-outlet>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    NgxaCerStatisticsGenderPageComponent.ctorParameters = function () { return [
        { type: Injector },
        { type: NbThemeService }
    ]; };
    return NgxaCerStatisticsGenderPageComponent;
}());
export { NgxaCerStatisticsGenderPageComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4YS1jZXItc3RhdGlzdGljcy1nZW5kZXItcGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AeGFwaGlyYS9uZ3hhLWNlci8iLCJzb3VyY2VzIjpbImxpYi9zdGF0aXN0aWNzL2dlbmRlci9uZ3hhLWNlci1zdGF0aXN0aWNzLWdlbmRlci1wYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxPQUFPLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQzdDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRCxPQUFPLEVBQXNCLFlBQVksRUFBRSxHQUFHLEVBQVksTUFBTSxpQkFBaUIsQ0FBQztBQUVsRjtJQW1CRSw4Q0FBWSxRQUFrQixFQUFVLEtBQXFCO1FBQXJCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBWnRELFlBQU8sR0FBUSxFQUFFLENBQUM7UUFJakIsYUFBUSxHQUFrQixJQUFJLE9BQU8sRUFBUSxDQUFDO1FBU3BELElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7OztJQUVELHVEQUFROzs7SUFBUjs7WUFDUSxJQUFJLEdBQVcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUU7O1lBQ3ZDLFFBQVEsR0FBYSxFQUFFO1FBQzdCLEtBQUssSUFBSSxDQUFDLEdBQVcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDbkMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDekI7UUFDRCxJQUFJLENBQUMsVUFBVSxH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Q2YsU0FBUyxFQUFFLDJCQUEyQjt5QkFDdkM7d0JBQ0QsTUFBTSxFQUFFOzRCQUNOLE1BQU0sRUFBRSxVQUFVOzRCQUNsQixJQUFJLEVBQUUsTUFBTTs0QkFDWixJQUFJLEVBQUUsS0FBSSxDQUFDLE1BQU07NEJBQ2pCLFNBQVMsRUFBRTtnQ0FDVCxLQUFLLEVBQUUsS0FBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTOzZCQUM5Qjt5QkFDRjt3QkFDRCxVQUFVLEVBQUUsSUFBSTt3QkFDaEIsTUFBTSxFQUFFLEtBQUksQ0FBQyxNQUFNO3FCQUNwQixDQUFDO2dCQUNKLENBQUMsRUFBQyxDQUFDO1lBQ1AsQ0FBQyxFQUFDLENBQUM7UUFDTCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRU0sNkRBQWM7Ozs7SUFBckIsVUFBc0IsSUFBUztRQUM3QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7Z0JBMUhGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsMEJBQTBCO29CQUVwQyw0UUFBK0Q7O2lCQUNoRTs7OztnQkFUc0MsUUFBUTtnQkFFdEMsY0FBYzs7SUErSHZCLDJDQUFDO0NBQUEsQUE1SEQsSUE0SEM7U0F2SFksb0NBQW9DOzs7SUFFL0MsdURBQXlCOztJQUN6QixvREFBaUI7O0lBQ2pCLDBEQUF5Qjs7SUFDekIsd0RBQXFCOzs7OztJQUNyQix3REFBc0Q7Ozs7O0lBQ3RELG9EQUFpQzs7Ozs7SUFDakMsbURBQXNCOzs7OztJQUN0QixpRUFBd0M7Ozs7O0lBQ3hDLHNEQUFzQjs7Ozs7SUFDdEIsc0RBQXNCOzs7OztJQUN0Qix1REFBcUI7Ozs7O0lBRVcscURBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgTmJUaGVtZVNlcnZpY2UgfSBmcm9tICdAbmVidWxhci90aGVtZSc7XG5pbXBvcnQgeyBIdHRwRmFjdG9yeVNlcnZpY2UsIEhUVFBfU0VSVklDRSwgQVBJLCBBUElNb2RlbCB9IGZyb20gJ0B4YXBoaXJhL3NoYXJlZCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3hhLWNlci1zdGF0aXN0aWNzLWdlbmRlcicsXG4gIHN0eWxlVXJsczogWycuL25neGEtY2VyLXN0YXRpc3RpY3MtZ2VuZGVyLXBhZ2UuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL25neGEtY2VyLXN0YXRpc3RpY3MtZ2VuZGVyLXBhZ2UuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBOZ3hhQ2VyU3RhdGlzdGljc0dlbmRlclBhZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgcHVibGljIG9wdGlvbnM6IGFueSA9IHt9O1xuICBwdWJsaWMgZGF0YTogYW55O1xuICBwdWJsaWMgZGF0YVNlbGVjdDogYW55W107XG4gIHB1YmxpYyBzZWxlY3RlZDogYW55O1xuICBwcml2YXRlIGRlc3Ryb3kkOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgcHJpdmF0ZSBodHRwOiBIdHRwRmFjdG9yeVNlcnZpY2U7XG4gIHByaXZhdGUgYXBpOiBBUElNb2RlbDtcbiAgcHJpdmF0ZSB0aGVtZVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIGxlZ2VuZDogYW55W107XG4gIHByaXZhdGUgc2VyaWVzOiBhbnlbXTtcbiAgcHJpdmF0ZSBlY2hhcnRzOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoaW5qZWN0b3I6IEluamVjdG9yLCBwcml2YXRlIHRoZW1lOiBOYlRoZW1lU2VydmljZSkge1xuICAgIHRoaXMuaHR0cCA9IGluamVjdG9yLmdldChIVFRQX1NFUlZJQ0UpO1xuICAgIHRoaXMuYXBpID0gaW5qZWN0b3IuZ2V0KEFQSSk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCB5ZWFyOiBudW1iZXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XG4gICAgY29uc3QgdGVtcERhdGE6IG51bWJlcltdID0gW107XG4gICAgZm9yIChsZXQgaTogbnVtYmVyID0gMzsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIHRlbXBEYXRhLnB1c2goeWVhciAtIGkpO1xuICAgIH1cbiAgICB0aGlzLmRhdGFTZWxlY3QgPSB0ZW1wRGF0YTtcbiAgICB0aGlzLnNlbGVjdGVkID0geWVhcjtcbiAgICB0aGlzLmdldFN0YXRpc3RpY3MoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgICB0aGlzLnRoZW1lU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwcml2YXRlIGdldFN0YXRpc3RpY3MoKTogdm9pZCB7XG4gICAgdGhpcy5idWlsZENoYXJ0KCk7XG4gIH1cblxuICBwcml2YXRlIGJ1aWxkQ2hhcnQoKTogdm9pZCB7XG4gICAgdGhpcy50aGVtZVN1YnNjcmlwdGlvbiA9IHRoaXMudGhlbWUuZ2V0SnNUaGVtZSgpLnN1YnNjcmliZShjb25maWcgPT4ge1xuXG4gICAgICBjb25zdCBjb2xvcnMgPSBjb25maWcudmFyaWFibGVzO1xuICAgICAgdGhpcy5lY2hhcnRzID0gY29uZmlnLnZhcmlhYmxlcy5lY2hhcnRzO1xuICAgICAgXG4gICAgICB0aGlzLmh0dHAuSFRUUF9BVVRIKFxuICAgICAgICB0aGlzLmFwaVsncGFuaWMnXVsnc3RhdGlzdGljcy1nZW5kZXInXSxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgW3RoaXMuc2VsZWN0ZWRdKS5zdWJzY3JpYmUoKHZhbHVlczogYW55KSA9PiB7XG4gICAgICAgICAgdGhpcy5sZWdlbmQgPSB2YWx1ZXNbJ2xlZ2VuZCddWydkYXRhJ107XG4gICAgICAgICAgdGhpcy5zZXJpZXMgPSBbXTtcbiAgICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZXNbJ3NlcmllcyddKTtcbiAgICAgICAgICB2YWx1ZXNbJ3NlcmllcyddLmZvckVhY2goKHNlcmllczogYW55KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkYXRhU2VyaWVzOiBhbnlbXSA9IFtdO1xuICAgICAgICAgICAgdmFsdWVzWydheGlzJ11bJ2RhdGEnXS5mb3JFYWNoKChheGlzOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgZGF0YVNlcmllcy5wdXNoKHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogc2VyaWVzWydkYXRhJ11bYXhpc10sXG4gICAgICAgICAgICAgICAgbmFtZTogYXhpcyxcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuc2VyaWVzLnB1c2goe1xuICAgICAgICAgICAgICBuYW1lOiBzZXJpZXNbJ25hbWUnXSxcbiAgICAgICAgICAgICAgdHlwZTogJ3BpZScsXG4gICAgICAgICAgICAgIHJhZGl1czogJzgwJScsXG4gICAgICAgICAgICAgIGNlbnRlcjogWyc1MCUnLCAnNTAlJ10sXG4gICAgICAgICAgICAgIGRhdGE6IGRhdGFTZXJpZXMsXG4gICAgICAgICAgICAgIGl0ZW1TdHlsZToge1xuICAgICAgICAgICAgICAgIGVtcGhhc2lzOiB7XG4gICAgICAgICAgICAgICAgICBzaGFkb3dCbHVyOiAxMCxcbiAgICAgICAgICAgICAgICAgIHNoYWRvd09mZnNldFg6IDAsXG4gICAgICAgICAgICAgICAgICBzaGFkb3dDb2xvcjogdGhpcy5lY2hhcnRzLml0ZW1Ib3ZlclNoYWRvd0NvbG9yLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGxhYmVsOiB7XG4gICAgICAgICAgICAgICAgbm9ybWFsOiB7XG4gICAgICAgICAgICAgICAgICB0ZXh0U3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHRoaXMuZWNoYXJ0cy50ZXh0Q29sb3IsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGxhYmVsTGluZToge1xuICAgICAgICAgICAgICAgIG5vcm1hbDoge1xuICAgICAgICAgICAgICAgICAgbGluZVN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB0aGlzLmVjaGFydHMuYXhpc0xpbmVDb2xvcixcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhpcy5lY2hhcnRzLmJnLFxuICAgICAgICAgICAgICB0b29sdGlwOiB7XG4gICAgICAgICAgICAgICAgdHJpZ2dlcjogJ2l0ZW0nLFxuICAgICAgICAgICAgICAgIGZvcm1hdHRlcjogJ3thfSA8YnIvPntifSA6IHtjfSAoe2R9JSknLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICAgICAgICBvcmllbnQ6ICd2ZXJ0aWNhbCcsXG4gICAgICAgICAgICAgICAgbGVmdDogJ2xlZnQnLFxuICAgICAgICAgICAgICAgIGRhdGE6IHRoaXMubGVnZW5kLFxuICAgICAgICAgICAgICAgIHRleHRTdHlsZToge1xuICAgICAgICAgICAgICAgICAgY29sb3I6IHRoaXMuZWNoYXJ0cy50ZXh0Q29sb3IsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgY2FsY3VsYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgc2VyaWVzOiB0aGlzLnNlcmllcyxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBvblNlbGVjdENoYW5nZShkYXRhOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnNlbGVjdGVkID0gZGF0YTtcbiAgICB0aGlzLmdldFN0YXRpc3RpY3MoKTtcbiAgfVxuXG59XG4iXX0=