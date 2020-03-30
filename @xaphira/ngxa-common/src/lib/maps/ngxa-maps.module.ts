import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { NgxEchartsModule } from 'ngx-echarts';
import { NbCardModule } from '@nebular/theme';
import { NgxaMapsLeafletComponent } from './leaflet/ngxa-maps-leaflet.component';
import { NgxaMapsAgmComponent } from './agm/ngxa-maps-agm.component';

export const components = [
  NgxaMapsLeafletComponent,
  NgxaMapsAgmComponent,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB3ctAGo_z3FNOVWquijMGBgesM1XlRa-Y',
      libraries: ['places'],
    }),
    LeafletModule.forRoot(),
    NgxEchartsModule,
    NbCardModule,
  ],
  declarations: [
    ...components,
  ],
  exports: [
    ...components,
  ],
})
export class NgxaMapsModule { }
