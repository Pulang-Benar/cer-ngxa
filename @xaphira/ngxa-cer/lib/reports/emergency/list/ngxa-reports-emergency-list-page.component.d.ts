import { OnInit, Injector, OnDestroy } from '@angular/core';
import { SelectionType } from '@swimlane/ngx-datatable';
import { Router } from '@angular/router';
import { HttpBaseModel } from '@xaphira/shared';
import { BaseFilterComponent } from '@xaphira/ngxa-common';
import { DatatableColumn } from '@xaphira/ngxa-common';
import { ReportsPanicService } from '../../services/reports-panic.service';
export declare class NgxaReportsEmergencyListPageComponent extends BaseFilterComponent<any> implements OnInit, OnDestroy {
    injector: Injector;
    private router;
    private reportService;
    apiPath: HttpBaseModel;
    selectionType: SelectionType;
    columns: DatatableColumn[];
    expanded: boolean;
    constructor(injector: Injector, router: Router, reportService: ReportsPanicService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    onViewDetail(data: any): void;
}
