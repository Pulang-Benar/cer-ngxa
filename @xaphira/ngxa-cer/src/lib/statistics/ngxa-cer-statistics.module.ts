import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbCardModule } from '@nebular/theme';
import { NgxaChartsModule, NgxaBaseModule } from '@xaphira/ngxa-common';
import { NgxaThemeModule } from '@xaphira/ngxa-theme';
import { NgxaCerStatisticsRoutingModule } from './ngxa-cer-statistics-routing.module';
import { NgxaStatisticsComponent } from './ngxa-statistics.component';
import { NgxaCerStatisticsAreaPageComponent } from './area/ngxa-cer-statistics-area-page.component';
import { NgxaCerStatisticsGenderPageComponent } from './gender/ngxa-cer-statistics-gender-page.component';
import { NgxaCerStatisticsPeriodePageComponent } from './periode/ngxa-cer-statistics-periode-page.component';
import { NgxaCerStatisticsEmergencyPageComponent } from './emergency/ngxa-cer-statistics-emergency-page.component';
import { NgxaCerStatisticsDevicePageComponent } from './device/ngxa-cer-statistics-device-page.component';
import { NgxaCerStatisticsAgePageComponent } from './age/ngxa-cer-statistics-age-page.component';

const components = [
  NgxaStatisticsComponent,
  NgxaCerStatisticsAreaPageComponent,
  NgxaCerStatisticsGenderPageComponent,
  NgxaCerStatisticsPeriodePageComponent,
  NgxaCerStatisticsEmergencyPageComponent,
  NgxaCerStatisticsDevicePageComponent,
  NgxaCerStatisticsAgePageComponent,
];

const modules = [
  FormsModule,
  ReactiveFormsModule,
  NbCardModule,
  NgxaThemeModule,
  NgxaBaseModule,
  NgxaChartsModule,
  NgxaCerStatisticsRoutingModule,
];

const providers = [
];

const entryComponents = [
];

@NgModule({
  imports: [
    ...modules,
  ],
  declarations: [
    ...components,
  ],
  providers: [
    ...providers,
  ],
  entryComponents: [
    ...entryComponents,
  ],
})
export class NgxaCerStatisticsModule { }
