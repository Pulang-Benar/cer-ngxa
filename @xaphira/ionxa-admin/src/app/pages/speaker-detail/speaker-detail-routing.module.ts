import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SpeakerDetailPageComponent } from './speaker-detail.component';

const routes: Routes = [
  {
    path: '',
    component: SpeakerDetailPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpeakerDetailPageRoutingModule { }
