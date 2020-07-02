import { OnInit, Injector, OnDestroy } from '@angular/core';
import { TableColumn, SelectionType } from '@swimlane/ngx-datatable';
import { Router } from '@angular/router';
import { HttpBaseModel } from '@xaphira/shared';
import { BaseFilterComponent } from '@xaphira/ngxa-common';
import { ParameterService } from '../services/parameter.service';
import { ParameterGroupModel } from '../models/parameter.model';
import { ParameterEditGroupCollapseComponent } from '../group/edit-group/parameter-edit-group-collapse.component';
export declare class ParameterListDetailPageComponent extends BaseFilterComponent<any> implements OnInit, OnDestroy {
    injector: Injector;
    private router;
    private parameterService;
    apiPath: HttpBaseModel;
    selectionType: SelectionType;
    columns: TableColumn[];
    parameterGroup: ParameterGroupModel;
    expanded: boolean;
    collapse: ParameterEditGroupCollapseComponent;
    constructor(injector: Injector, router: Router, parameterService: ParameterService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    onAddGroup(event: any): void;
    onViewDetail(data: any): void;
    onReset(): void;
    back(): boolean;
    doExpanded(): void;
    onSubmit(): void;
}
