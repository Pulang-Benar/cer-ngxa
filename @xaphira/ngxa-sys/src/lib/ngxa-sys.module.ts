import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbCardModule, NbAlertModule, NbIconModule, NbDialogModule } from '@nebular/theme';
import { NgxaThemeModule } from '@xaphira/ngxa-theme';
import {
  NgxaInputModule,
  NgxaCheckBoxModule,
  NgxaButtonModule,
  NgxaBaseModule,
  NgxaEditorModule,
  NgxaSelectModule,
  NgxaTableModule,
} from '@xaphira/ngxa-common';
import { SysComponent } from './ngxa-sys.component';
import { NgxaSysRoutingModule } from './ngxa-sys-routing.module';
import { NgxaParameterModule } from './parameter/ngxa-parameter.module';

const components = [
  SysComponent,
];

const modules = [
  FormsModule,
  ReactiveFormsModule,
  NbCardModule,
  NbAlertModule,
  NbIconModule,
  NbDialogModule.forChild(),
  NgxaThemeModule,
  NgxaInputModule,
  NgxaCheckBoxModule,
  NgxaButtonModule,
  NgxaBaseModule,
  NgxaEditorModule,
  NgxaSelectModule,
  NgxaTableModule,
  NgxaSysRoutingModule,
  NgxaParameterModule,
];

@NgModule({
  imports: [
    ...modules,
  ],
  declarations: [
    ...components,
  ],
})
export class NgxaSysModule { }
