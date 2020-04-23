import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxEchartsModule } from 'ngx-echarts';
import { ChartModule } from 'angular2-chartjs';
import { NgxaChartComponent } from './base/ngxa-chart.component';

export const components = [
  NgxaChartComponent,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgxChartsModule,
    ChartModule,
    NgxEchartsModule,
  ],
  declarations: [
    ...components,
  ],
  exports: [
    ...components,
  ],
})
export class NgxaChartsModule { }
