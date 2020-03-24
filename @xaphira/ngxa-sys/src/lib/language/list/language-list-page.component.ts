import { Component, OnInit, Injector, OnDestroy } from '@angular/core';
import { TableColumn, SelectionType } from '@swimlane/ngx-datatable';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpBaseModel, ApiBaseResponse } from '@xaphira/shared';
import { BaseFilterComponent } from '@xaphira/ngxa-common';

@Component({
  selector: 'xa-language-list-page',
  styleUrls: ['./language-list-page.component.scss'],
  templateUrl: './language-list-page.component.html',
})
export class LanguageListPageComponent extends BaseFilterComponent<any> implements OnInit, OnDestroy {

  public apiPath: HttpBaseModel;
  public selectionType: SelectionType = SelectionType.single;
  public columns: TableColumn[] = [
    { name: 'Language Code', prop: 'localeCode', width: 125, frozenLeft: true },
    { name: 'Language', prop: 'identifier', width: 275, frozenLeft: true },
    { name: 'Icon', prop: 'icon', width: 75, frozenLeft: true },
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
    this.apiPath = this.api['master']['datatable-locale'];
    this.filters = [
      { controlName: 'localeCode', type: 'input' },
      { controlName: 'identifier', type: 'input' }];
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {}

  onAddGroup(event): void {
    this.router.navigate(['/app/sysconf/language', 'add']);
  }

  onViewDetail(data): void {
    this.router.navigate(['/app/sysconf/language', 'edit']);
  }

  onReset(): void {
    this.router.navigate(['/app/sysconf/language']);
  }

  back(): boolean {
    this.router.navigate(['/app/sysconf/parameter']);
    return false;
  }

  onSubmit(): void {
    (super.onSubmit(this.formGroup.value, 'master', 'post-language')  as Observable<ApiBaseResponse>);
  }

}
