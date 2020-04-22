import { Component, AfterViewInit, OnDestroy, Input } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'xa-chart',
  styleUrls: ['./ngxa-chart.component.scss'],
  templateUrl: './ngxa-chart.component.html',
})
export class NgxaChartComponent  {
  @Input() public set optionsFn(options: any) {
    this.options = options;
  }
  @Input() public options: any = {};

  constructor(private theme: NbThemeService) {
  }

}
