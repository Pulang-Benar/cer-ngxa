import { Component } from '@angular/core';
import { NbWindowService } from '@nebular/theme';
import { LeafletModel } from '@xaphira/ngxa-common';
import { CerMonitoringDetailComponent } from './detail/ngxa-cer-monitoring-detail.component';

@Component({
  selector: 'xa-cer-dashboard',
  styleUrls: ['./ngxa-cer-monitoring.component.scss'],
  templateUrl: './ngxa-cer-monitoring.component.html',
})
export class CerMonitoringComponent {

  constructor(private windowService: NbWindowService) {}

  public onMarker(data: LeafletModel): void {
    console.log(data);
    this.windowService.open(CerMonitoringDetailComponent, { title: data.title });
  }

}
