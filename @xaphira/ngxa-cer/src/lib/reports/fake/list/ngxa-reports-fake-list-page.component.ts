import { Component, OnInit, Injector, OnDestroy } from '@angular/core';
import { SelectionType } from '@swimlane/ngx-datatable';
import { Router } from '@angular/router';
import { HttpBaseModel } from '@xaphira/shared';
import { BaseFilterComponent } from '@xaphira/ngxa-common';
import { DatatableColumn } from '@xaphira/ngxa-common';
import { ReportsPanicService } from '../../services/reports-panic.service';

@Component({
  selector: 'xa-reports-fake-list-page',
  styleUrls: ['./ngxa-reports-fake-list-page.component.scss'],
  templateUrl: './ngxa-reports-fake-list-page.component.html',
})
export class NgxaReportsFakeListPageComponent extends BaseFilterComponent<any> implements OnInit, OnDestroy {

  public apiPath: HttpBaseModel;
  public selectionType: SelectionType = SelectionType.single;
  public columns: DatatableColumn[] = [
    { name: 'Username', prop: 'username', width: 125, frozenLeft: true},
    { name: 'Name', prop: 'name', width: 225, frozenLeft: true},
    { name: 'Address', prop: 'latestFormattedAddress', width: 275, frozenLeft: true},
    { name: 'Gender', prop: 'gender', width: 125, frozenLeft: true },
    { name: 'Phone Number', prop: 'phoneNumber', width: 140, frozenLeft: true },
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
    this.apiPath = this.api['panic']['datatable-fake-reports'];
    this.filters = [
      { controlName: 'fullname', type: 'input' },
      { controlName: 'phoneNumber', type: 'input' },
      { controlName: 'latestFormattedAddress', type: 'input' }];
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {}

  onViewDetail(data): void {
    this.reportService.setReports(data);
    this.router.navigate(['/app/reports/fake/detail']);
  }

}
