import { Component, OnInit, Injector, OnDestroy } from '@angular/core';
import { HttpBaseModel } from '@xaphira/shared';
import { BaseFilterComponent } from '@xaphira/ngxa-common';
import { TableColumn } from '@swimlane/ngx-datatable';
import { Router } from '@angular/router';
import { ParameterService } from '../services/parameter.service';
import { ParameterGroupModel } from '../models/parameter-group.model';

@Component({
  selector: 'xa-parameter-list-detail-page',
  styleUrls: ['./parameter-list-detail-page.component.scss'],
  templateUrl: './parameter-list-detail-page.component.html',
})
export class ParameterListDetailPageComponent extends BaseFilterComponent<any> implements OnInit, OnDestroy {

  public apiPath: HttpBaseModel;
  public columns: TableColumn[] = [
    { name: 'Paramter Code', prop: 'parameterCode', width: 200, frozenLeft: true },
    { name: 'Paramter Value', prop: 'parameterValue', width: 200, frozenLeft: true },
    { name: 'Created', prop: 'createdBy' },
    { name: 'Created Date', prop: 'createdDate' },
    { name: 'Modified', prop: 'modifiedBy' },
    { name: 'Modified Date', prop: 'modifiedDate' },
    { name: 'Active', prop: 'active' },
  ];
  public parameterGroup: ParameterGroupModel = new ParameterGroupModel();

  constructor(public injector: Injector, private router: Router, private parameterService: ParameterService) {
    super(injector, {
      'parameterCode': [],
      'parameterValue': [],
    });
    this.parameterGroup = this.parameterService.getParameterGroup();
    this.apiPath = this.api['master']['datatable-parameter'];
    this.filters = [
      { controlName: 'parameterCode', type: 'input' },
      { controlName: 'parameterValue', type: 'input' }];
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {}

  onAddGroup(event): void {
    this.router.navigate(['/app/sysconf/parameter/add-group']);
  }

  onViewDetail(event): void {
    console.log(event);
  }

}
