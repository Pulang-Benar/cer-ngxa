import { Component, Input } from '@angular/core';

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
  public data: any;
  public type: 'bar' | 'pie' | 'line' | 'horizontalBar' | 'radar';

}
