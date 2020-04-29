import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardChildService } from '@xaphira/ngxa-auth';
import { NgxaCerReportsComponent } from './ngxa-cer-reports.component';
import { NgxaReportsEmergencyListPageComponent } from './emergency/list/ngxa-reports-emergency-list-page.component';
import {
  NgxaReportsEmergencyDetailComponent,
} from './emergency/detail/ngxa-reports-emergency-detail.component';
import { NgxaReportsFakeListPageComponent } from './fake/list/ngxa-reports-fake-list-page.component';

const routes: Routes = [{
  path: '',
  component: NgxaCerReportsComponent,
  canActivateChild: [AuthGuardChildService],
  children: [
    {
      path: 'emergency',
      component: NgxaReportsEmergencyListPageComponent,
      data: {
        code: '#EMERGENCY-REPORTS-PAGE',
      },
    },
    {
      path: 'emergency/detail',
      component: NgxaReportsEmergencyDetailComponent,
      data: {
        code: '#EMERGENCY-REPORTS-PAGE',
      },
    },
    {
      path: 'fake',
      component: NgxaReportsFakeListPageComponent,
      data: {
        code: '#FAKE-REPORTS-PAGE',
      },
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NgxaCerReportsRoutingModule {
}
