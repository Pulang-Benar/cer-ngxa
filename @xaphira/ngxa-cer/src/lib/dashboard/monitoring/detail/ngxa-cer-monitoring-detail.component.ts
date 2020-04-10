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
    { name: 'File Format', prop: 'parameterCode', width: 350, frozenLeft: true },
    { name: 'Created', prop: 'createdBy' },
    { name: 'Created Date', prop: 'createdDate' },
    { name: 'Modified', prop: 'modifiedBy' },
    { name: 'Modified Date', prop: 'modifiedDate' },
    { name: 'Active', prop: 'active' },
  ];

  constructor(public injector: Injector, private router: Router,
    private route: ActivatedRoute, @Inject(PANIC) private panicService: PanicFactoryService) {
    super(injector);
    if (this.route.snapshot.params['code']) {

    } else {
      this.router.navigate(['/app/dashboard']);
    }
    this.apiPath = this.api['master']['datatable-parameter'];
  }

  ngOnDestroy(): void {}

  ngOnInit(): void {
  }

}
