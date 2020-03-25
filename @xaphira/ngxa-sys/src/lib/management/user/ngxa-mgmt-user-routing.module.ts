import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardChildService } from '@xaphira/ngxa-auth';
import { MgmtUserComponent } from './ngxa-mgmt-user.component';
import { MgmtUserListPageComponent } from './list/mgmt-user-list-page.component';

const routes: Routes = [{
  path: '',
  component: MgmtUserComponent,
  canActivateChild: [AuthGuardChildService],
  children: [
    {
      path: '',
      component: MgmtUserListPageComponent,
      data: {
        code: '#MANAGEMENT-USER-PAGE',
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
