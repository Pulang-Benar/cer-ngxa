import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SessionDetailPageComponent } from './session-detail.component';
import { SessionDetailPageRoutingModule } from './session-detail-routing.module';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    SessionDetailPageRoutingModule,
  ],
  declarations: [
    SessionDetailPageComponent,
  ],
})
export class SessionDetailModule { }
