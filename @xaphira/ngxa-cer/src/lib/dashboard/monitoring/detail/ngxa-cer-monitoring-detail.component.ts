import { Component, Input, Inject, OnInit, OnDestroy, Injector } from '@angular/core';
import { LeafletModel, BaseFilterComponent } from '@xaphira/ngxa-common';
import { PANIC, PanicFactoryService, HttpBaseModel } from '@xaphira/shared';
import { SelectionType, TableColumn } from '@swimlane/ngx-datatable';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'xa-cer-monitoring-detail',
  templateUrl: './ngxa-cer-monitoring-detail.component.html',
  styleUrls: ['ngxa-cer-monitoring-detail.component.scss'],
})
export class NgxaCerMonitoringDetailComponent extends BaseFilterComponent<any> implements OnInit, OnDestroy {

  public apiPath: HttpBaseModel;
  public selectionType: SelectionType = SelectionType.single;
  public columns: TableColumn[] = [
    { name: 'File Checksum', prop: 'fileChecksum', width: 150, frozenLeft: true },
    { name: 'Latitude', prop: 'location.latitude', width: 125, frozenLeft: true },
    { name: 'Longitude', prop: 'location.longitude', width: 125, frozenLeft: true },
    { name: 'Area', prop: 'location.area', width: 150, frozenLeft: true },
    { name: 'Address', prop: 'location.formattedAddress', width: 350 },
    { name: 'Device ID', prop: 'device.deviceID', width: 150 },
    { name: 'Device Name', prop: 'device.deviceName', width: 150 },
  ];
  public data: any = {};
  private panicCode: string;

  constructor(public injector: Injector, private router: Router,
    private route: ActivatedRoute, @Inject(PANIC) private panicService: PanicFactoryService) {
    super(injector);
    if (this.route.snapshot.params['code']) {
      this.panicCode = this.route.snapshot.params['code'];
      this.keyword = {
        panicCode: this.panicCode,
      };
      this.panicService.getPanic(this.panicCode).then((value: any) => {
        this.data = value;
      });
    } else {
      this.router.navigate(['/app/dashboard']);
    }
    this.apiPath = this.api['panic']['datatable-panic-detail'];
  }

  ngOnDestroy(): void {}

  ngOnInit(): void {
  }

}
