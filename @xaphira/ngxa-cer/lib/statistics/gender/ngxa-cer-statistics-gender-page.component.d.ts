import { OnInit, OnDestroy, Injector } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
export declare class NgxaCerStatisticsGenderPageComponent implements OnInit, OnDestroy {
    private theme;
    options: any;
    data: any;
    dataSelect: any[];
    selected: any;
    private destroy$;
    private http;
    private api;
    private themeSubscription;
    private legend;
    private series;
    private echarts;
    constructor(injector: Injector, theme: NbThemeService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    private getStatistics;
    private buildChart;
    onSelectChange(data: any): void;
}
