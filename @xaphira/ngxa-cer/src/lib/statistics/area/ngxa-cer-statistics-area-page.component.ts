import { Component, OnInit, OnDestroy, Injector } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { NbThemeService } from '@nebular/theme';
import { HttpFactoryService, HTTP_SERVICE, API, APIModel } from '@xaphira/shared';

@Component({
  selector: 'xa-cer-statistics-area',
  styleUrls: ['./ngxa-cer-statistics-area-page.component.scss'],
  templateUrl: './ngxa-cer-statistics-area-page.component.html',
})
export class NgxaCerStatisticsAreaPageComponent implements OnInit, OnDestroy {

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
        color: [colors.primaryLight],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
        },
        legend: {
          data: ['Score'],
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
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
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
        series: [
          {
            name: 'Score',
            type: 'bar',
            barWidth: '60%',
            data: [
              this.random(),
              this.random(),
              this.random(),
              this.random(),
              this.random(),
              this.random(),
              this.random(),
            ],
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
