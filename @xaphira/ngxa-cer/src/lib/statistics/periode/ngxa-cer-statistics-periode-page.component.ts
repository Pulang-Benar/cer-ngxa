import { Component, OnInit, OnDestroy, Inject, Injector } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { NbThemeService } from '@nebular/theme';
import { HttpFactoryService, HTTP_SERVICE, API, APIModel } from '@xaphira/shared';

@Component({
  selector: 'xa-cer-statistics-periode',
  styleUrls: ['./ngxa-cer-statistics-periode-page.component.scss'],
  templateUrl: './ngxa-cer-statistics-periode-page.component.html',
})
export class NgxaCerStatisticsPeriodePageComponent implements OnInit, OnDestroy {

  public options: any = {};
  public data: any;
  public dataSelect: any[];
  public selected: any;
  private destroy$: Subject<void> = new Subject<void>();
  private http: HttpFactoryService;
  private api: APIModel;
  private themeSubscription: Subscription;

  constructor(injector: Injector, private theme: NbThemeService) {
    this.http = injector.get(HTTP_SERVICE);
    this.api = injector.get(API);
  }

  ngOnInit(): void {
    this.dataSelect = [2017, 2018, 2019];
    this.selected = 2019;

    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const echarts: any = config.variables.echarts;

      this.options = {
        backgroundColor: echarts.bg,
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
          },
        },
        legend: {
          data: ['2015 Precipitation', '2016 Precipitation'],
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
            data: [
              'January',
              'February',
              'March',
              'April',
              'May',
              'June',
              'July',
              'August',
              'September',
              'October',
              'November',
              'Desember',
            ],
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
        series: [
          {
            name: '2015 Precipitation',
            type: 'line',
            smooth: true,
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
          },
          {
            name: '2016 Precipitation',
            type: 'line',
            smooth: true,
            data: [3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7],
          },
        ],
      };
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    this.themeSubscription.unsubscribe();
  }

  public onSelectChange(data: any): void {
    console.log(data);
  }

  private random() {
    return Math.round(Math.random() * 100);
  }

}
