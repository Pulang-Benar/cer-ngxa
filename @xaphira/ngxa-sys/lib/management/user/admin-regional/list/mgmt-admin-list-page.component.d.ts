import { OnInit, Injector, OnDestroy } from '@angular/core';
import { SelectionType } from '@swimlane/ngx-datatable';
import { Router } from '@angular/router';
import { HttpBaseModel } from '@xaphira/shared';
import { BaseFilterComponent } from '@xaphira/ngxa-common';
import { DatatableColumn } from '@xaphira/ngxa-common';
import { ManagementUserService } from '../../services/mgmt-user.service';
export declare class MgmtAdminListPageComponent extends BaseFilterComponent<any> implements OnInit, OnDestroy {
    injector: Injector;
    private router;
    private userService;
    apiPath: HttpBaseModel;
    selectionType: SelectionType;
    columns: DatatableColumn[];
    expanded: boolean;
    constructor(injector: Injector, router: Router, userService: ManagementUserService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    onViewDetail(data: any): void;
}
