import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { AboutPageComponent } from './about.component';
import { PopoverPageComponent } from '../about-popover/about-popover.component';
import { AboutPageRoutingModule } from './about-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutPageRoutingModule,
  ],
  declarations: [AboutPageComponent, PopoverPageComponent],
  entryComponents: [PopoverPageComponent],
  bootstrap: [AboutPageComponent],
})
export class AboutModule {}
