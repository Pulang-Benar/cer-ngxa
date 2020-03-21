import { Component, OnInit, Injector, OnDestroy } from '@angular/core';
import { HttpBaseModel } from '@xaphira/shared';
import { BaseFilterComponent } from '@xaphira/ngxa-common';
import { TableColumn } from '@swimlane/ngx-datatable';
import { Router } from '@angular/router';
import { ParameterService } from '../services/parameter.service';
import { ParameterGroupModel } from '../models/parameter.model';

@Component({
  selector: 'xa-parameter-list-detail-page',
  styleUrls: ['./parameter-list-detail-page.component.scss'],
  templateUrl: './parameter-list-detail-page.component.html',
})
export class ParameterListDetailPageComponent extends BaseFilterComponent<any> implements OnInit, OnDestroy {

  public apiPath: HttpBaseModel;
  public columns: TableColumn[] = [
    { name: 'Parameter Code', prop: 'parameterCode', width: 200, frozenLeft: true },
    { name: 'Parameter Value', prop: 'parameterValue', width: 200, frozenLeft: true },
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
    }, {
      'parameterGroupName': [],
      'i18n': [],
    });
    this.apiPath = this.api['master']['datatable-parameter'];
    this.filters = [
      { controlName: 'parameterCode', type: 'input' },
      { controlName: 'parameterValue', type: 'input' }];
    if (this.parameterService.getParameterGroup()) {
      this.parameterGroup = this.parameterService.getParameterGroup();
      this.keyword = {
        parameterGroupCode: this.parameterGroup.parameterGroupCode,
      };
      this.formGroup.get('parameterGroupName').setValue(this.parameterGroup.parameterGroupName);
      this.formGroup.get('i18n').setValue([{
        selected: this.parameterGroup.i18n,
      }]);
    } else {
      this.keyword = {
        parameterGroupCode: null,
      };
      this.router.navigate(['/app/sysconf/parameter']);
    }
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {}

  onAddGroup(event): void {
    this.parameterService.setParameter(null);
    this.router.navigate(['/app/sysconf/parameter/detail', 'add']);
  }

  onViewDetail(data): void {
    this.parameterService.setParameter({
      parameterCode: data['parameterCode'],
      parameterValue: data['parameterValue'],
    });
    this.router.navigate(['/app/sysconf/parameter/detail', 'edit']);
  }
  onReset(): void {
    this.router.navigate(['/app/sysconf/parameter']);
  }

}
