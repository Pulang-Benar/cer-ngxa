import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TutorialPageComponent } from './tutorial.component';

const routes: Routes = [
  {
    path: '',
    component: TutorialPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TutorialPageRoutingModule { }
