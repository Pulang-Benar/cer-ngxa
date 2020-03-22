import { Component, OnInit, Injector, OnDestroy } from '@angular/core';
import { HttpBaseModel } from '@xaphira/shared';
import { BaseFilterComponent } from '@xaphira/ngxa-common';
import { TableColumn } from '@swimlane/ngx-datatable';
import { Router } from '@angular/router';
import { ParameterService } from '../services/parameter.service';

@Component({
  selector: 'xa-parameter-list-group-page',
  styleUrls: ['./parameter-list-group-page.component.scss'],
  templateUrl: './parameter-list-group-page.component.html',
})
export class ParameterListGroupPageComponent extends BaseFilterComponent<any> implements OnInit, OnDestroy {

  public apiPath: HttpBaseModel;
  public apiPathLocale: HttpBaseModel;
  public columns: TableColumn[] = [
    { name: 'Parameter Group Code', prop: 'parameterGroupCode', width: 220, frozenLeft: true },
    { name: 'Parameter Group Name', prop: 'parameterGroupName', width: 200, frozenLeft: true },
    { name: 'Created', prop: 'createdBy' },
    { name: 'Created Date', prop: 'createdDate' },
    { name: 'Modified', prop: 'modifiedBy' },
    { name: 'Modified Date', prop: 'modifiedDate' },
    { name: 'Active', prop: 'active' },
  ];

  constructor(public injector: Injector, private router: Router, private parameterService: ParameterService) {
    super(injector, {
      'parameterGroupCode': [],
      'parameterGroupName': [],
    });
    this.apiPath = this.api['master']['datatable-parameter-group'];
    this.filters = [
      { controlName: 'parameterGroupCode', type: 'input' },
      { controlName: 'parameterGroupName', type: 'input' }];
    this.apiPathLocale = this.api['master']['all-locale'];
  }

  ngOnInit(): void {
    this.http.HTTP_AUTH(this.apiPathLocale).subscribe(value => {
      this.parameterService.setLocales(value);
    });
  }

  ngOnDestroy(): void {}

  onAddGroup(): void {
    this.router.navigate(['/app/sysconf/parameter/group', 'add']);
  }

  onViewDetail(data): void {
    this.parameterService.setParameterGroup({
      parameterGroupCode: data['parameterGroupCode'],
      parameterGroupName: data['parameterGroupName'],
    });
    this.router.navigate(['/app/sysconf/parameter/detail']);
  }

}
