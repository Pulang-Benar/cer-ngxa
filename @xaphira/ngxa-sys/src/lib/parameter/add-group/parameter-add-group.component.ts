import { Component, OnInit, Injector, OnDestroy, Inject } from '@angular/core';
import { Validators, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ApiBaseResponse, HttpBaseModel, IndexedDBFactoryService, PROFILE_INDEXED_DB } from '@xaphira/shared';
import {
  ResponseCode,
  USER_INFO,
  User,
  UserInfo, } from '@xaphira/shared';
import { Pattern } from '@xaphira/utils';
import { BaseFormComponent, SelectParamModel, CheckboxModel } from '@xaphira/ngxa-common';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'xa-parameter-add-group-page',
  styleUrls: ['./parameter-add-group.component.scss'],
  templateUrl: './parameter-add-group.component.html',
})
export class ParameterAddGroupPageComponent extends BaseFormComponent<any> implements OnInit, OnDestroy {

  public dataI18n: CheckboxModel[] = [
    {
      selected: false,
    },
  ];

  constructor(public injector: Injector, private router: Router) {
    super(injector,
      {
        'parameterGroupCode': [],
        'parameterGroupName': [],
        'i18n': [],
      });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {}

  onReset(): void {
    this.router.navigate(['/app/sysconf/parameter']);
  }

}
