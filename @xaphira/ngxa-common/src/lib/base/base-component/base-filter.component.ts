import { Injector } from '@angular/core';
import { BaseFormComponent } from './base-form.component';
import { FormGroup } from '@angular/forms';
import { DatatableFilter, Keyword } from '../../table/models/datatable.model';

export abstract class BaseFilterComponent<T> extends BaseFormComponent<T> {

    protected formGroupFilter: FormGroup;
    protected filters: DatatableFilter[];
    protected keyword: Keyword;
    protected rows: any[] = [];

    constructor(
        public injector: Injector,
        filtersConfig?: {
            [key: string]: any;
        },
        controlsConfig?: {
            [key: string]: any;
        }) {
        super(injector, controlsConfig);
        if (filtersConfig)
            this.formGroupFilter = this.formBuilder.group(filtersConfig);
    }

    doFilterAdvanced(keyword: Keyword) {
      this.keyword = keyword;
    }

}
