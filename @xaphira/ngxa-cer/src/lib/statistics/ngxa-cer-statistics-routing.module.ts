import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardChildService } from '@xaphira/ngxa-auth';
import { NgxaStatisticsComponent } from './ngxa-statistics.component';
import { NgxaCerStatisticsAreaPageComponent } from './area/ngxa-cer-statistics-area-page.component';
import { NgxaCerStatisticsGenderPageComponent } from './gender/ngxa-cer-statistics-gender-page.component';
import { NgxaCerStatisticsPeriodePageComponent } from './periode/ngxa-cer-statistics-periode-page.component';

const routes: Routes = [{
  path: '',
  component: NgxaStatisticsComponent,
  canActivateChild: [AuthGuardChildService],
  children: [
    {
      path: 'area',
      component: NgxaCerStatisticsAreaPageComponent,
      data: {
        code: '#STATISTICS-AREA-PAGE',
      },
    },
    {
      path: 'gender',
      component: NgxaCerStatisticsGenderPageComponent,
      data: {
        code: '#STATISTICS-GENDER-PAGE',
      },
    },
    {
      path: 'periode',
      component: NgxaCerStatisticsPeriodePageComponent,
      data: {
        code: '#STATISTICS-PERIODE-PAGE',
      },
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NgxaCerStatisticsRoutingModule {
}
