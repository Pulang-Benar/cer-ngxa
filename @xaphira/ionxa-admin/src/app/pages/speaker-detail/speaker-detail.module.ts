import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpeakerDetailPageComponent } from './speaker-detail.component';
import { SpeakerDetailPageRoutingModule } from './speaker-detail-routing.module';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    SpeakerDetailPageRoutingModule,
  ],
  declarations: [
    SpeakerDetailPageComponent,
  ],
})
export class SpeakerDetailModule { }
