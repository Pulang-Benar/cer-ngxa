import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomePageComponent } from '@xaphira/ngxa-extra';
import { PagesComponent } from './pages.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'home',
      component: HomePageComponent,
    },
    {
      path: 'dashboard',
      loadChildren: () => import('../cer/cer-dashboard-wrapper.module')
        .then(m => m.CerDashboardWrapperModule),
    },
    {
      path: 'statistics',
      loadChildren: () => import('../cer/cer-statistics-wrapper.module')
        .then(m => m.CerStatisticsWrapperModule),
    },
    {
      path: 'reports',
      loadChildren: () => import('../cer/cer-reports-wrapper.module')
        .then(m => m.CerReportsWrapperModule),
    },
    {
      path: 'fake-reports',
      loadChildren: () => import('../cer/cer-fake-wrapper.module')
        .then(m => m.CerFakeWrapperModule),
    },
    {
      path: 'mgmt/user',
      loadChildren: () => import('../sys/sys-mgmt-user-wrapper.module')
        .then(m => m.SysMgmtUserWrapperModule),
    },
    {
      path: 'sysconf/parameter',
      loadChildren: () => import('../sys/sys-parameter-wrapper.module')
        .then(m => m.SysParameterWrapperModule),
    },
    {
      path: 'sysconf/language',
      loadChildren: () => import('../sys/sys-language-wrapper.module')
        .then(m => m.SysLanguageWrapperModule),
    },
    {
      path: 'user',
      loadChildren: () => import('../extra/extra-wrapper.module')
        .then(m => m.ExtraWrapperModule),
    },
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full',
    },
    {
      path: '**',
      redirectTo: '/miscellaneous/404',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
