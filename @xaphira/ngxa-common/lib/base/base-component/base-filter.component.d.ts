import { Injector } from '@angular/core';
import { BaseFormComponent } from './base-form.component';
import { FormGroup } from '@angular/forms';
import { DatatableFilter, Keyword } from '../../table/models/datatable.model';
export declare abstract class BaseFilterComponent<T> extends BaseFormComponent<T> {
    injector: Injector;
    formGroupFilter: FormGroup;
    filters: DatatableFilter[];
    keyword: Keyword;
    rows: any[];
    constructor(injector: Injector, filtersConfig?: {
        [key: string]: any;
    }, controlsConfig?: {
        [key: string]: any;
    });
    doFilterAdvanced(keyword: Keyword): void;
}
