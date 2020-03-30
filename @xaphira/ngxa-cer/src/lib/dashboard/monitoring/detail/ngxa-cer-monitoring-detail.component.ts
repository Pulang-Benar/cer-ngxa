import { Component } from '@angular/core';
import { NbWindowRef } from '@nebular/theme';

@Component({
  templateUrl: './ngxa-cer-monitoring-detail.component.html',
  styleUrls: ['ngxa-cer-monitoring-detail.component.scss'],
})
export class CerMonitoringDetailComponent {
  constructor(public windowRef: NbWindowRef) {}

  close() {
    this.windowRef.close();
  }
}
