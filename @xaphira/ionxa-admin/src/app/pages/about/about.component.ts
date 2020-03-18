import { Component, ViewEncapsulation } from '@angular/core';

import { PopoverController } from '@ionic/angular';

import { PopoverPageComponent } from '../about-popover/about-popover.component';

@Component({
  selector: 'xa-page-about',
  templateUrl: 'about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutPageComponent {
  conferenceDate = '2047-05-17';

  constructor(public popoverCtrl: PopoverController) { }

  async presentPopover(event: Event) {
    const popover = await this.popoverCtrl.create({
      component: PopoverPageComponent,
      event,
    });
    await popover.present();
  }
}
