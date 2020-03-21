import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardChildService } from '@xaphira/ngxa-auth';
import { ParameterComponent } from './ngxa-parameter.component';
import { ParameterListGroupPageComponent } from './list-group/parameter-list-group-page.component';
import { ParameterAddGroupPageComponent } from './add-group/parameter-add-group.component';
import { ParameterListDetailPageComponent } from './list-detail/parameter-list-detail-page.component';

const routes: Routes = [{
  path: '',
  component: ParameterComponent,
  canActivateChild: [AuthGuardChildService],
  children: [
    {
      path: '',
      component: ParameterListGroupPageComponent,
      data: {
        code: '#SYSCONF-PARAMETER-PAGE',
      },
    },
    {
      path: 'add-group',
      component: ParameterAddGroupPageComponent,
      data: {
        code: '#SYSCONF-PARAMETER-PAGE',
      },
    },
    {
      path: 'list-detail',
      component: ParameterListDetailPageComponent,
      data: {
        code: '#SYSCONF-PARAMETER-PAGE',
      },
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NgxaParameterRoutingModule {
}
