import { OnDestroy, EventEmitter } from '@angular/core';
import { NgxaDatatableCollapseComponent } from './collapse/ngxa-datatable-collapse.component';
import { FormGroup } from '@angular/forms';
export declare class NgxaDatatableHeaderComponent implements OnDestroy {
    header: boolean;
    footer: boolean;
    add: boolean;
    edit: boolean;
    delete: boolean;
    filter: boolean;
    formGroupFilter: FormGroup;
    onSearch: EventEmitter<string>;
    onFilter: EventEmitter<any>;
    onAdd: EventEmitter<boolean>;
    onDelete: EventEmitter<boolean>;
    collapse: NgxaDatatableCollapseComponent;
    _search: string;
    showFilter: boolean;
    disabledButtonFilter: boolean;
    ngOnDestroy(): void;
    doSearch(search: string): void;
    doFilterFunnel(): void;
    doFilter(): void;
    doAdd(): void;
    doDelete(): void;
    onKeyDown(event: KeyboardEvent): void;
    onFocusSearch(): void;
}
