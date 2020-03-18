import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SchedulePageComponent } from './schedule.component';
import { ScheduleFilterPageComponent } from '../schedule-filter/schedule-filter.component';
import { SchedulePageRoutingModule } from './schedule-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SchedulePageRoutingModule,
  ],
  declarations: [
    SchedulePageComponent,
    ScheduleFilterPageComponent,
  ],
  entryComponents: [
    ScheduleFilterPageComponent,
  ],
})
export class ScheduleModule { }
