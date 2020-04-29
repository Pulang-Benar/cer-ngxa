import { Component, OnInit, OnDestroy, Injector } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { NbThemeService } from '@nebular/theme';
import { HttpFactoryService, HTTP_SERVICE, API, APIModel } from '@xaphira/shared';

@Component({
  selector: 'xa-cer-statistics-gender',
  styleUrls: ['./ngxa-cer-statistics-gender-page.component.scss'],
  templateUrl: './ngxa-cer-statistics-gender-page.component.html',
})
export class NgxaCerStatisticsGenderPageComponent implements OnInit, OnDestroy {

  public options: any = {};
  public data: any;
  public dataSelect: any[];
  public selected: any;
  private destroy$: Subject<void> = new Subject<void>();
  private http: HttpFactoryService;
  private api: APIModel;
  private themeSubscription: Subscription;
  private legend: any[];
  private series: any[];

  constructor(injector: Injector, private theme: NbThemeService) {
    this.http = injector.get(HTTP_SERVICE);
    this.api = injector.get(API);
  }

  ngOnInit(): void {
    const year: number = new Date().getFullYear();
    const tempData: number[] = [];
    for (let i: number = 3; i >= 0; i--) {
      tempData.push(year - i);
    }
    this.dataSelect = tempData;
    this.selected = year;
    this.getStatistics();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    this.themeSubscription.unsubscribe();
  }

  private getStatistics(): void {
    this.http.HTTP_AUTH(
      this.api['panic']['statistics-gender'],
      null,
      null,
      null,
      [this.selected]).subscribe((values: any) => {
        this.legend = values['legend']['data'];
        this.series = [];
        values['series'].forEach((series: any) => {
          const dataSeries: any[] = [];
          values['axis']['data'].forEach((axis: any) => {
            dataSeries.push({
              value: series['data'][axis],
              name: axis,
            });
          });
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
                shadowColor: echarts.itemHoverShadowColor,
              },
            },
            label: {
              normal: {
                textStyle: {
                  color: echarts.textColor,
                },
              },
            },
            labelLine: {
              normal: {
                lineStyle: {
                  color: echarts.axisLineColor,
                },
              },
            },
          });
        });
        this.buildChart();
    });
  }

  private buildChart(): void {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors = config.variables;
      const echarts: any = config.variables.echarts;

      this.options = {
        backgroundColor: echarts.bg,
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)',
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: this.legend,
          textStyle: {
            color: echarts.textColor,
          },
        },
        calculable: true,
        series: this.series,
      };
    });
  }

  public onSelectChange(data: any): void {
    this.selected = data;
    this.getStatistics();
  }

}
