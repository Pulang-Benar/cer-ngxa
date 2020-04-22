import { Component, Input, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { LeafletModel } from '@xaphira/ngxa-common';
import { PANIC, PanicFactoryService } from '@xaphira/shared';
import { NgxaCerMonitoringPreviewComponent } from '../preview/ngxa-cer-monitoring-preview.component';

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
  public marker: LeafletModel = { mark: [0,0]};
  public data: any = {};

  constructor(private router: Router, @Inject(PANIC) private panicService: PanicFactoryService,
    private dialogService: NbDialogService) {}

  ngOnInit(): void {
  }

  public onViewDetails(): void {
    this.router.navigate(['/app/dashboard/details', this.data['panicCode']]);
  }

  onPreview(): void {
    this.dialogService.open(NgxaCerMonitoringPreviewComponent, {
      context: {
        checksum: this.data['fileMetadata']['checksum'],
        user: this.data['username'],
        fileType: this.data['fileMetadata']['fileType'],
      },
    });
  }

}
