import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardChildService } from '@xaphira/ngxa-auth';
import { SysComponent } from './ngxa-sys.component';

const routes: Routes = [{
  path: '',
  component: SysComponent,
  children: [
    {
      path: 'parameter',
      loadChildren: () => import('./parameter/ngxa-parameter.module')
        .then(m => m.NgxaParameterModule),
    },
    {
      path: 'language',
      component: SysComponent,
      canActivateChild: [AuthGuardChildService],
      data: {
        code: '#SYSCONF-LANGUAGE-PAGE',
      },
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NgxaSysRoutingModule {
}
