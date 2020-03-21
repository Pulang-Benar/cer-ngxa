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
      component: PagesComponent,
    },
    {
      path: 'user',
      loadChildren: () => import('../extra/extra-wrapper.module')
        .then(m => m.ExtraWrapperModule),
    },
    {
      path: 'sysconf',
      loadChildren: () => import('../sys/sys-wrapper.module')
        .then(m => m.SysWrapperModule),
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
