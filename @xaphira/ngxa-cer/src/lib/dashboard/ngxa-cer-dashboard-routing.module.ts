import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardChildService } from '@xaphira/ngxa-auth';
import { NgxaDashboardComponent } from './ngxa-dashboard.component';
import { NgxaCerMonitoringPageComponent } from './monitoring/ngxa-cer-monitoring-page.component';
import { NgxaCerMonitoringDetailComponent } from './monitoring/detail/ngxa-cer-monitoring-detail.component';

const routes: Routes = [{
  path: '',
  component: NgxaDashboardComponent,
  canActivateChild: [AuthGuardChildService],
  children: [
    {
      path: '',
      component: NgxaCerMonitoringPageComponent,
      data: {
        code: '#DASHBOARD-PAGE',
      },
    },
    {
      path: 'details/:code',
      component: NgxaCerMonitoringDetailComponent,
      data: {
        code: '#DASHBOARD-PAGE',
      },
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NgxaCerDashboardRoutingModule {
}
