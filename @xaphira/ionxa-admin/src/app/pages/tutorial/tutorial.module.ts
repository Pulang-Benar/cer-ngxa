import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { TutorialPageComponent } from './tutorial.component';
import { TutorialPageRoutingModule } from './tutorial-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    TutorialPageRoutingModule,
  ],
  declarations: [TutorialPageComponent],
  entryComponents: [TutorialPageComponent],
})
export class TutorialModule {}
