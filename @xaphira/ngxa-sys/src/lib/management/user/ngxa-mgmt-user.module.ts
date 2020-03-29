import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbCardModule, NbAlertModule, NbIconModule, NbDialogModule } from '@nebular/theme';
import { NgxaThemeModule } from '@xaphira/ngxa-theme';
import {
  NgxaInputModule,
  NgxaButtonModule,
  NgxaBaseModule,
  NgxaTableModule,
  NgxaLabelModule,
} from '@xaphira/ngxa-common';
import { NgxaMgmtUserRoutingModule } from './ngxa-mgmt-user-routing.module';
import { MgmtUserComponent } from './ngxa-mgmt-user.component';
import { MgmtCiviliansListPageComponent } from './civilians/list/mgmt-civilians-list-page.component';
import { ManagementUserService } from './services/mgmt-user.service';
import { MgmtCiviliansDetailPageComponent } from './civilians/detail/mgmt-civilians-detail-page.component';
import { MgmtAdminListPageComponent } from './admin-regional/list/mgmt-admin-list-page.component';
import { MgmtAdminDetailPageComponent } from './admin-regional/detail/mgmt-admin-detail-page.component';

const components = [
  MgmtUserComponent,
  MgmtCiviliansListPageComponent,
  MgmtCiviliansDetailPageComponent,
  MgmtAdminListPageComponent,
  MgmtAdminDetailPageComponent,
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
  NgxaButtonModule,
  NgxaBaseModule,
  NgxaTableModule,
  NgxaLabelModule,
  NgxaMgmtUserRoutingModule,
];

const providers = [
  ManagementUserService,
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
