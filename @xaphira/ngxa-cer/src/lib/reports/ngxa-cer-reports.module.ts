import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NbCardModule, NbAlertModule, NbIconModule, NbDialogModule, NbWindowModule } from '@nebular/theme';
import { NgxaThemeModule } from '@xaphira/ngxa-theme';
import {
  NgxaInputModule,
  NgxaButtonModule,
  NgxaBaseModule,
  NgxaTableModule,
  NgxaLabelModule,
  NgxaCheckBoxModule,
  NgxaSelectModule,
} from '@xaphira/ngxa-common';
import { NgxaCerReportsComponent } from './ngxa-cer-reports.component';
import { NgxaCerReportsRoutingModule } from './ngxa-cer-reports-routing.module';
import { ReportsPanicService } from './services/reports-panic.service';
import { NgxaReportsEmergencyListPageComponent } from './emergency/list/ngxa-reports-emergency-list-page.component';
import { NgxaFakePromptComponent } from './emergency/detail/prompt/ngxa-fake-prompt.component';
import { NgxaReportsPreviewComponent } from './emergency/detail/preview/ngxa-reports-preview.component';
import {
  NgxaReportsEmergencyDetailComponent,
} from './emergency/detail/ngxa-reports-emergency-detail.component';
import { NgxaReportsFakeListPageComponent } from './fake/list/ngxa-reports-fake-list-page.component';
import { ExportEmergencyComponent } from './emergency/export/export-emergency.component';

const components = [
  NgxaCerReportsComponent,
  NgxaReportsEmergencyListPageComponent,
  NgxaReportsEmergencyDetailComponent,
  NgxaFakePromptComponent,
  NgxaReportsPreviewComponent,
  NgxaReportsFakeListPageComponent,
  ExportEmergencyComponent,
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
  NgxDatatableModule,
  NgxaTableModule,
  NgxaLabelModule,
  NgxaCerReportsRoutingModule,
];

const providers = [
  ReportsPanicService,
];

const entry_components = [
  NgxaFakePromptComponent,
  NgxaReportsPreviewComponent,
  ExportEmergencyComponent,
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
    ...entry_components,
  ],
})
export class NgxaCerReportsModule { }
