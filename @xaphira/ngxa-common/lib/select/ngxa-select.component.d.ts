import { Injector, OnDestroy, EventEmitter } from '@angular/core';
import { NgControl } from '@angular/forms';
import { NgxaValueAccessor } from '../base/ngxa-value-accessor.component';
import { Subject } from 'rxjs';
import { HttpFactoryService, HttpBaseModel } from '@xaphira/shared';
import { SelectParamModel, SelectResponseModel } from './select.model';
import { NgSelectComponent } from '@ng-select/ng-select';
export declare class NgxaSelectComponent extends NgxaValueAccessor<any> implements OnDestroy {
    locale: string;
    injector: Injector;
    placeholder: string;
    colLabel: number;
    colInput: number;
    items: SelectResponseModel[];
    multiple: boolean;
    loading: boolean;
    addTag: boolean;
    closeOnSelect: boolean;
    clearable: boolean;
    searchable: boolean;
    hideSelected: boolean;
    minTermLength: number;
    maxTermLength: number;
    api: HttpBaseModel;
    limit: number;
    offsetNextLoad: number;
    queryParam: SelectParamModel[];
    onSelect: EventEmitter<any>;
    onClear: EventEmitter<boolean>;
    select: NgSelectComponent;
    contentTemplate: any;
    notFoundText: string;
    typeToSearchText: string;
    virtualScroll: boolean;
    paramSearch: any;
    typeahead$: Subject<string>;
    protected http: HttpFactoryService;
    private destroy$;
    private total;
    private totalRecord;
    private cdref;
    _value: any;
    value: any;
    constructor(ngControl: NgControl, locale: string, injector: Injector);
    onInit(): void;
    ngOnDestroy(): void;
    onOpen(): void;
    onClose(): void;
    onScroll({ end }: {
        end: any;
    }, search: string): void;
    onScrollToEnd(search: string): void;
    doClear(): void;
    private reset;
    private fetchMore;
    private fetchSearch;
    private fetchNone;
    private getRequest;
    onKeyDown(event: KeyboardEvent, term: string): boolean;
}
