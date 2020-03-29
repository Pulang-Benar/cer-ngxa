import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NbIconModule } from '@nebular/theme';
import { CommonModule } from '@angular/common';
import { NgxaBaseModule } from '../base/ngxa-base.module';
import { NgxaLabelTextComponent } from './ngxa-label-text.component';

export const components = [
  NgxaLabelTextComponent,
];

@NgModule({
  imports: [
    CommonModule,
    NbIconModule,
    TranslateModule,
    NgxaBaseModule,
  ],
  declarations: [
    ...components,
  ],
  exports: [
    ...components,
  ],
})
export class NgxaLabelModule { }
