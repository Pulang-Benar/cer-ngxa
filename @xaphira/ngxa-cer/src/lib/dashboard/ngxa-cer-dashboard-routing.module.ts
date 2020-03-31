import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardChildService } from '@xaphira/ngxa-auth';
import { NgxaCerMonitoringPageComponent } from './monitoring/ngxa-cer-monitoring-page.component';

const routes: Routes = [{
  path: '',
  component: NgxaCerMonitoringPageComponent,
  canActivateChild: [AuthGuardChildService],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NgxaCerDashboardRoutingModule {
}
