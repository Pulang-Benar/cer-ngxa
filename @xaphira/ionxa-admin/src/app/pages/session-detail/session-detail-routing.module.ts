import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SessionDetailPageComponent } from './session-detail.component';

const routes: Routes = [
  {
    path: '',
    component: SessionDetailPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SessionDetailPageRoutingModule { }
