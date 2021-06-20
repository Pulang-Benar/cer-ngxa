import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardChildService } from '@xaphira/ngxa-auth';
import { NgxaStatisticsComponent } from './ngxa-statistics.component';
import { NgxaCerStatisticsAreaPageComponent } from './area/ngxa-cer-statistics-area-page.component';
import { NgxaCerStatisticsGenderPageComponent } from './gender/ngxa-cer-statistics-gender-page.component';
import { NgxaCerStatisticsPeriodePageComponent } from './periode/ngxa-cer-statistics-periode-page.component';
import { NgxaCerStatisticsEmergencyPageComponent } from './emergency/ngxa-cer-statistics-emergency-page.component';
import { NgxaCerStatisticsDevicePageComponent } from './device/ngxa-cer-statistics-device-page.component';
import { NgxaCerStatisticsAgePageComponent } from './age/ngxa-cer-statistics-age-page.component';

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
    {
      path: 'emergency',
      component: NgxaCerStatisticsEmergencyPageComponent,
      data: {
        code: '#STATISTICS-EMERGENCY-PAGE',
      },
    },
    {
      path: 'device',
      component: NgxaCerStatisticsDevicePageComponent,
      data: {
        code: '#STATISTICS-DEVICE-PAGE',
      },
    },
    {
      path: 'age',
      component: NgxaCerStatisticsAgePageComponent,
      data: {
        code: '#STATISTICS-AGE-PAGE',
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
