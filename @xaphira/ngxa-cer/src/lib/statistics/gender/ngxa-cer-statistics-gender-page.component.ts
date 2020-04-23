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

  constructor(injector: Injector, private theme: NbThemeService) {
    this.http = injector.get(HTTP_SERVICE);
    this.api = injector.get(API);

    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors = config.variables;
      const echarts: any = config.variables.echarts;

      this.options = {
        backgroundColor: echarts.bg,
        color: [colors.warningLight, colors.infoLight, colors.dangerLight, colors.successLight, colors.primaryLight],
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)',
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['USA', 'Germany', 'France', 'Canada', 'Russia'],
          textStyle: {
            color: echarts.textColor,
          },
        },
        series: [
          {
            name: 'Countries',
            type: 'pie',
            radius: '80%',
            center: ['50%', '50%'],
            data: [
              { value: 335, name: 'Germany' },
              { value: 310, name: 'France' },
              { value: 234, name: 'Canada' },
              { value: 135, name: 'Russia' },
              { value: 1548, name: 'USA' },
            ],
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
          },
        ],
      };
    });
  }

  ngOnInit(): void {
    this.dataSelect = [2017, 2018, 2019];
    this.selected = 2019;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    this.themeSubscription.unsubscribe();
  }

  public onSelectChange(data: any): void {
    console.log(data);
  }

}
