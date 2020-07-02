import { OnInit, Injector, OnDestroy } from '@angular/core';
import { SelectionType } from '@swimlane/ngx-datatable';
import { Router } from '@angular/router';
import { HttpBaseModel } from '@xaphira/shared';
import { BaseFilterComponent } from '@xaphira/ngxa-common';
import { LanguageService } from '../services/language.service';
import { DatatableColumn } from '@xaphira/ngxa-common';
export declare class LanguageListPageComponent extends BaseFilterComponent<any> implements OnInit, OnDestroy {
    injector: Injector;
    private router;
    private languageService;
    apiPath: HttpBaseModel;
    selectionType: SelectionType;
    columns: DatatableColumn[];
    expanded: boolean;
    constructor(injector: Injector, router: Router, languageService: LanguageService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    onAddGroup(): void;
    onViewDetail(data: any): void;
    onReset(): void;
    back(): boolean;
    onSubmit(): void;
}
