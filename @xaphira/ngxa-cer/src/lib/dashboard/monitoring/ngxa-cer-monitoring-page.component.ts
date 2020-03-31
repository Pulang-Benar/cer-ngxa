import { Component, OnInit } from '@angular/core';
import { NbWindowService } from '@nebular/theme';
import { LeafletModel } from '@xaphira/ngxa-common';

@Component({
  selector: 'xa-cer-monitoring',
  styleUrls: ['./ngxa-cer-monitoring-page.component.scss'],
  templateUrl: './ngxa-cer-monitoring-page.component.html',
})
export class NgxaCerMonitoringPageComponent implements OnInit {

  public showDetail: boolean = false;
  public markers: LeafletModel;
  public markerSelected: LeafletModel = new LeafletModel();

  ngOnInit(): void {
    this.markers = {
      markers: [
        [ -6.342498, 106.639859 ],
      ],
      title: 'Ridla Fadilah',
      alt: '8e9457c7-cc1d-4c52-a9ac-dd5c5938cc93',
      className: 'pulse',
    };
  }

  public onMarker(data: LeafletModel): void {
    this.markerSelected = data;
    this.showDetail = true;
  }

  public onToggleDetail(showDetail: boolean): void {
    this.showDetail = showDetail;
  }

}
