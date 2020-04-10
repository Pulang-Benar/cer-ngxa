import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbCardModule, NbAlertModule, NbIconModule, NbDialogModule, NbWindowModule } from '@nebular/theme';
import { NgxaThemeModule } from '@xaphira/ngxa-theme';
import {
  NgxaInputModule,
  NgxaCheckBoxModule,
  NgxaButtonModule,
  NgxaBaseModule,
  NgxaSelectModule,
  NgxaMapsModule,
  NgxaTableModule,
} from '@xaphira/ngxa-common';
import { NgxaCerDashboardRoutingModule } from './ngxa-cer-dashboard-routing.module';
import { NgxaCerMonitoringPageComponent } from './monitoring/ngxa-cer-monitoring-page.component';
import { NgxaCerMonitoringDetailComponent } from './monitoring/detail/ngxa-cer-monitoring-detail.component';
import { NgxaCerSlideOutComponent } from './monitoring/slide-out/ngxa-cer-slide-out.component';
import { NgxaCerMonitoringInfoComponent } from './monitoring/info/ngxa-cer-monitoring-info.component';
import { NgxaDashboardComponent } from './ngxa-dashboard.component';

const components = [
  NgxaDashboardComponent,
  NgxaCerMonitoringPageComponent,
  NgxaCerMonitoringInfoComponent,
  NgxaCerSlideOutComponent,
  NgxaCerMonitoringDetailComponent,
];

const modules = [
  FormsModule,
  ReactiveFormsModule,
  NbCardModule,
  NbAlertModule,
  NbIconModule,
  NbDialogModule.forChild(),
  NbWindowModule.forChild(),
  NgxaThemeModule,
  NgxaInputModule,
  NgxaCheckBoxModule,
  NgxaButtonModule,
  NgxaBaseModule,
  NgxaSelectModule,
  NgxaMapsModule,
  NgxaTableModule,
  NgxaCerDashboardRoutingModule,
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
export class NgxaCerDashboardModule { }
