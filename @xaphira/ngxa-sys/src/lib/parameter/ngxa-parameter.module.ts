import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbCardModule, NbAlertModule, NbIconModule, NbDialogModule } from '@nebular/theme';
import { NgxaThemeModule } from '@xaphira/ngxa-theme';
import {
  NgxaInputModule,
  NgxaCheckBoxModule,
  NgxaButtonModule,
  NgxaBaseModule,
  NgxaSelectModule,
  NgxaTableModule,
} from '@xaphira/ngxa-common';
import { ParameterComponent } from './ngxa-parameter.component';
import { NgxaParameterRoutingModule } from './ngxa-parameter-routing.module';
import { ParameterListGroupPageComponent } from './group/list-group/parameter-list-group-page.component';
import { ParameterAddGroupPageComponent } from './group/add-group/parameter-add-group-page.component';
import { ParameterListDetailPageComponent } from './detail/parameter-list-detail-page.component';
import { ParameterService } from './services/parameter.service';
import { ParameterDoDetailPageComponent } from './detail/do/parameter-do-detail-page.component';
import { ParameterEditGroupCollapseComponent } from './group/edit-group/parameter-edit-group-collapse.component';

const components = [
  ParameterComponent,
  ParameterListGroupPageComponent,
  ParameterAddGroupPageComponent,
  ParameterEditGroupCollapseComponent,
  ParameterListDetailPageComponent,
  ParameterDoDetailPageComponent,
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
  NgxaSelectModule,
  NgxaTableModule,
  NgxaParameterRoutingModule,
];

const providers = [
  ParameterService,
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
})
export class NgxaParameterModule { }
