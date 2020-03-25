import { Component, OnInit, Injector, OnDestroy } from '@angular/core';
import { SelectionType } from '@swimlane/ngx-datatable';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpBaseModel, ApiBaseResponse } from '@xaphira/shared';
import { BaseFilterComponent } from '@xaphira/ngxa-common';
import { DatatableColumn } from '@xaphira/ngxa-common';

@Component({
  selector: 'xa-mgmt-user-list-page',
  styleUrls: ['./mgmt-user-list-page.component.scss'],
  templateUrl: './mgmt-user-list-page.component.html',
})
export class MgmtUserListPageComponent extends BaseFilterComponent<any> implements OnInit, OnDestroy {

  public apiPath: HttpBaseModel;
  public selectionType: SelectionType = SelectionType.single;
  public columns: DatatableColumn[] = [
    { name: 'Language Code', prop: 'localeCode', width: 125, frozenLeft: true },
    { name: 'Language', prop: 'identifier', width: 275, frozenLeft: true },
    { name: 'Icon', prop: 'icon', width: 75, frozenLeft: true, type: 'icon' },
    { name: 'System Default Language', prop: 'localeDefault', width: 175, frozenLeft: true },
    { name: 'Created', prop: 'createdBy' },
    { name: 'Created Date', prop: 'createdDate' },
    { name: 'Modified', prop: 'modifiedBy' },
    { name: 'Modified Date', prop: 'modifiedDate' },
    { name: 'Active', prop: 'active' },
  ];
  public expanded: boolean = false;

  constructor(public injector: Injector, private router: Router) {
    super(injector, {
      'localeCode': [],
      'identifier': [],
    });
    this.apiPath = this.api['security']['datatable-user'];
    this.filters = [
      { controlName: 'localeCode', type: 'input' },
      { controlName: 'identifier', type: 'input' }];
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {}

  onAddGroup(): void {
    this.router.navigate(['/app/mgmt/user', 'add']);
  }

  onViewDetail(data): void {
    this.router.navigate(['/app/mgmt/user', 'edit']);
  }

  onReset(): void {
    this.router.navigate(['/app/mgmt/user']);
  }

  back(): boolean {
    this.router.navigate(['/app/sysconf/parameter']);
    return false;
  }

  onSubmit(): void {
    (super.onSubmit(this.formGroup.value, 'master', 'post-language')  as Observable<ApiBaseResponse>);
  }

}
