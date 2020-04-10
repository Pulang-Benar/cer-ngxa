import { Component, Input, Inject, OnInit } from '@angular/core';
import { LeafletModel } from '@xaphira/ngxa-common';
import { PANIC, PanicFactoryService } from '@xaphira/shared';
import { Router } from '@angular/router';

@Component({
  selector: 'xa-cer-monitoring-info',
  templateUrl: './ngxa-cer-monitoring-info.component.html',
  styleUrls: ['ngxa-cer-monitoring-info.component.scss'],
})
export class NgxaCerMonitoringInfoComponent implements OnInit {

  @Input() public set markerFn(marker: LeafletModel) {
    if (marker) {
      this.panicService.getPanic(marker.alt).then((value: any) => {
        this.data = value;
      });
    }
  }
  public marker: LeafletModel = { markers: []};
  public data: any = {};

  constructor(private router: Router, @Inject(PANIC) private panicService: PanicFactoryService) {}

  ngOnInit(): void {
  }

  public onViewDetails(): void {
    this.router.navigate(['/app/dashboard/details', this.data['panicCode']]);
  }

}
