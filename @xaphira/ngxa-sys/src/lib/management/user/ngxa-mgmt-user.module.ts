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
import { NgxaMgmtUserRoutingModule } from './ngxa-mgmt-user-routing.module';
import { MgmtUserComponent } from './ngxa-mgmt-user.component';
import { MgmtUserListPageComponent } from './list/mgmt-user-list-page.component';

const components = [
  MgmtUserComponent,
  MgmtUserListPageComponent,
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
  NgxaMgmtUserRoutingModule,
];

const providers = [
];

const entry_components = [
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
export class NgxaMgmtUserModule { }
