import { Component, OnInit, Injector, OnDestroy } from '@angular/core';
import { SelectionType } from '@swimlane/ngx-datatable';
import { Router } from '@angular/router';
import { HttpBaseModel } from '@xaphira/shared';
import { BaseFilterComponent } from '@xaphira/ngxa-common';
import { DatatableColumn } from '@xaphira/ngxa-common';
import { ReportsPanicService } from '../../services/reports-panic.service';

@Component({
  selector: 'xa-reports-emergency-list-page',
  styleUrls: ['./ngxa-reports-emergency-list-page.component.scss'],
  templateUrl: './ngxa-reports-emergency-list-page.component.html',
})
export class NgxaReportsEmergencyListPageComponent extends BaseFilterComponent<any> implements OnInit, OnDestroy {

  public apiPath: HttpBaseModel;
  public selectionType: SelectionType = SelectionType.single;
  public columns: DatatableColumn[] = [
    { name: 'Name', prop: 'name', width: 225, frozenLeft: true},
    { name: 'Address', prop: 'latestFormattedAddress', width: 275, frozenLeft: true},
    { name: 'Gender', prop: 'gender', width: 125, frozenLeft: true },
    { name: 'Phone Number', prop: 'phoneNumber', width: 140, frozenLeft: true },
    { name: 'Emergency Category', prop: 'emergencyCategory' },
    { name: 'Status', prop: 'status' },
    { name: 'Created', prop: 'createdBy' },
    { name: 'Created Date', prop: 'createdDate' },
    { name: 'Modified', prop: 'modifiedBy' },
    { name: 'Modified Date', prop: 'modifiedDate' },
    { name: 'Active', prop: 'active' },
  ];
  public expanded: boolean = false;

  constructor(public injector: Injector, private router: Router, private reportService: ReportsPanicService) {
    super(injector, {
      'fullname': [],
      'phoneNumber': [],
      'latestFormattedAddress': [],
    });
    this.apiPath = this.api['panic']['datatable-panic-reports'];
    this.filters = [
      { controlName: 'fullname', type: 'input' },
      { controlName: 'phoneNumber', type: 'input' },
      { controlName: 'latestFormattedAddress', type: 'input' }];
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {}

  onViewDetail(data): void {
    this.reportService.setReports(data);
    this.router.navigate(['/app/reports/emergency/detail']);
  }

  doExport(event): void {
  }

}
