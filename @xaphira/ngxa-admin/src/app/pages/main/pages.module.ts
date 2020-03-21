import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { MiscellaneousModule } from '@xaphira/ngxa-auth';
import { NgxaThemeModule } from '@xaphira/ngxa-theme';
import { NgxaExtraModule } from '@xaphira/ngxa-extra';
import { NgxaSysModule } from '@xaphira/ngxa-sys';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    NgxaThemeModule,
    NbMenuModule,
    MiscellaneousModule,
    NgxaExtraModule,
    NgxaSysModule,
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}
