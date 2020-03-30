import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardChildService } from '@xaphira/ngxa-auth';
import { CerMonitoringComponent } from './monitoring/ngxa-cer-monitoring.component';

const routes: Routes = [{
  path: '',
  component: CerMonitoringComponent,
  canActivateChild: [AuthGuardChildService],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NgxaCerDashboardRoutingModule {
}
