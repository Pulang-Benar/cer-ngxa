import { TableColumn } from '@swimlane/ngx-datatable';

export class Page {
    count: number;
    pageSize: number;
    limit: number;
    offset: number;
}

export interface Sort {
    [name: string]: string[];
}

export interface Keyword {
    [name: string]: string;
}

export interface DatatableColumn extends TableColumn {
    type?: 'text' | 'html' | 'icon' | 'button' | 'custom';
    button?: string;
    buttonStatus?: 'primary' | 'success' | 'info' | 'warning' | 'danger';
}

export class DatatableParamModel {
    key: string;
    value: any;
}

export class DatatableFilter {
    controlName: string;
    type?: 'input' | 'datepicker' | 'select' | 'checkbox' | 'radio' = 'input';
}
