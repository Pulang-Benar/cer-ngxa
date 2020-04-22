import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxaChartComponent } from './base/ngxa-chart.component';

export const components = [
  NgxaChartComponent,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
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
