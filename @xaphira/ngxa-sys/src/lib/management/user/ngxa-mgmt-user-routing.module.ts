import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardChildService } from '@xaphira/ngxa-auth';
import { MgmtUserComponent } from './ngxa-mgmt-user.component';
import { MgmtCiviliansListPageComponent } from './civilians/list/mgmt-civilians-list-page.component';
import { MgmtCiviliansDetailPageComponent } from './civilians/detail/mgmt-civilians-detail-page.component';
import { MgmtAdminListPageComponent } from './admin-regional/list/mgmt-admin-list-page.component';
import { MgmtAdminDetailPageComponent } from './admin-regional/detail/mgmt-admin-detail-page.component';

const routes: Routes = [{
  path: '',
  component: MgmtUserComponent,
  canActivateChild: [AuthGuardChildService],
  children: [
    {
      path: 'civilians',
      component: MgmtCiviliansListPageComponent,
      data: {
        code: '#MANAGEMENT-CIVILIANS-PAGE',
      },
    },
    {
      path: 'civilians/detail',
      component: MgmtCiviliansDetailPageComponent,
      data: {
        code: '#MANAGEMENT-CIVILIANS-PAGE',
      },
    },
    {
      path: 'admin-regional',
      component: MgmtAdminListPageComponent,
      data: {
        code: '#MANAGEMENT-ADMIN-REGIONAL-PAGE',
      },
    },
    {
      path: 'admin-regional/detail',
      component: MgmtAdminDetailPageComponent,
      data: {
        code: '#MANAGEMENT-ADMIN-REGIONAL-PAGE',
      },
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NgxaMgmtUserRoutingModule {
}
