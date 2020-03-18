import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SupportPageComponent } from './support.component';
import { SupportPageRoutingModule } from './support-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SupportPageRoutingModule,
  ],
  declarations: [
    SupportPageComponent,
  ],
})
export class SupportModule { }
