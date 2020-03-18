import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SpeakerListPageComponent } from './speaker-list.component';
const routes: Routes = [
  {
    path: '',
    component: SpeakerListPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpeakerListPageRoutingModule {}
