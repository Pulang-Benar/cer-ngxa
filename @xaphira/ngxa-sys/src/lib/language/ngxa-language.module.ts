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
import { LanguageComponent } from './ngxa-language.component';
import { LanguageListPageComponent } from './list/language-list-page.component';
import { NgxaLanguageRoutingModule } from './ngxa-language-routing.module';
import { LanguageAddEditPageComponent } from './add-edit/language-add-edit-page.component';
import { LanguageService } from './services/language.service';
import { DialogFlagComponent } from './add-edit/dialog-flag/dialog-flag.component';

const components = [
  LanguageComponent,
  LanguageListPageComponent,
  LanguageAddEditPageComponent,
  DialogFlagComponent,
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
  NgxaLanguageRoutingModule,
];

const providers = [
  LanguageService,
];

const entryComponents = [
  DialogFlagComponent,
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
export class NgxaLanguageModule { }
