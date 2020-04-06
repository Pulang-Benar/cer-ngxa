import { Component, Input, Inject, OnInit } from '@angular/core';
import { LeafletModel } from '@xaphira/ngxa-common';
import { PANIC, PanicFactoryService } from '@xaphira/shared';

@Component({
  selector: 'xa-cer-monitoring-detail',
  templateUrl: './ngxa-cer-monitoring-detail.component.html',
  styleUrls: ['ngxa-cer-monitoring-detail.component.scss'],
})
export class NgxaCerMonitoringDetailComponent implements OnInit {

  @Input() public set markerFn(marker: LeafletModel) {
    if (marker) {
      this.panicService.getPanic(marker.alt).then((value: any) => {
        this.data = value;
      });
    }
  }
  public marker: LeafletModel = { markers: []};
  public data: any = {};

  constructor(@Inject(PANIC) private panicService: PanicFactoryService) {}

  ngOnInit(): void {
  }

}
