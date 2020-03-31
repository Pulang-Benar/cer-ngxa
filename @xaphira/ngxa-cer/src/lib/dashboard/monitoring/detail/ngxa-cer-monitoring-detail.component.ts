import { Component, Input } from '@angular/core';
import { LeafletModel } from '@xaphira/ngxa-common';

@Component({
  selector: 'xa-cer-monitoring-detail',
  templateUrl: './ngxa-cer-monitoring-detail.component.html',
  styleUrls: ['ngxa-cer-monitoring-detail.component.scss'],
})
export class NgxaCerMonitoringDetailComponent {

  @Input() public marker: LeafletModel;

}
