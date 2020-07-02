/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewEncapsulation, Inject, LOCALE_ID, Injector, ChangeDetectorRef, ViewChild, ChangeDetectionStrategy, EventEmitter, Output, } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subject, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ColumnMode, SelectionType, SortType, DatatableComponent } from '@swimlane/ngx-datatable';
import { HTTP_SERVICE } from '@xaphira/shared';
import { LayoutService } from '@xaphira/ngxa-theme';
export class NgxaDatatableComponent {
    /**
     * @param {?} locale
     * @param {?} layout
     * @param {?} injector
     */
    constructor(locale, layout, injector) {
        this.locale = locale;
        this.layout = layout;
        this.injector = injector;
        this.rows = [];
        this.columns = [];
        this.filters = [];
        this.selected = [];
        this.limit = 10;
        this.count = 0;
        this.offset = 0;
        this.externalPaging = false;
        this.externalSorting = false;
        this.loadingIndicator = false;
        this.scrollbarH = true;
        this.scrollbarV = false;
        this.reorderable = true;
        this.sortType = SortType.single;
        this.selectionType = SelectionType.checkbox;
        this.columnMode = ColumnMode.force;
        this.headerHeight = 40;
        this.footerHeight = 'auto';
        this.rowHeight = 'auto';
        this.header = true;
        this.column = true;
        this.footer = true;
        this.add = true;
        this.edit = true;
        this.delete = true;
        this.filter = true;
        this.startWithOpenData = true;
        this.filterEvent = false;
        this.onAdd = new EventEmitter();
        this.onEdit = new EventEmitter();
        this.onDelete = new EventEmitter();
        this.onSearch = new EventEmitter();
        this.onFilter = new EventEmitter();
        this.onButtonCell = new EventEmitter();
        this.isDelete = false;
        this.destroy$ = new Subject();
        this.pageOffset = 0;
        this.http = injector.get(HTTP_SERVICE);
        this.cdref = injector.get(ChangeDetectorRef);
    }
    /**
     * @param {?} keyword
     * @return {?}
     */
    set filterFn(keyword) {
        this.keywordParam = keyword;
        this._keyword = keyword;
        this.count = 0;
        this.offset = 0;
    }
    /**
     * @param {?} keyword
     * @return {?}
     */
    set filterDoFetchFn(keyword) {
        if (keyword) {
            this.keywordParam = keyword;
            this._keyword = keyword;
        }
        this.count = 0;
        this.offset = 0;
        this.fetch();
    }
    /**
     * @param {?} reload
     * @return {?}
     */
    set reloadFn(reload) {
        if (reload) {
            this.count = 0;
            this.offset = 0;
            this.fetch();
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.startWithOpenData) {
            this.fetch();
        }
        this.layout.onChangeLayoutSize().takeUntil(this.destroy$).subscribe((/**
         * @return {?}
         */
        () => {
            this.datatable.recalculate();
            this.cdref.detectChanges();
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
        this.destroy$.unsubscribe();
    }
    /**
     * @param {?} search
     * @return {?}
     */
    doSearch(search) {
        this.onSearch.emit(search);
        if (this.keywordParam) {
            this._keyword = this.keywordParam;
            this._keyword['_all'] = search;
        }
        else {
            this._keyword = {
                '_all': search,
            };
        }
        this.count = 0;
        this.offset = 0;
        this.fetch();
    }
    /**
     * @param {?} search
     * @return {?}
     */
    doFilter(search) {
        if (this.filterEvent) {
            this.onFilter.emit(search);
        }
        else {
            if (this.keywordParam) {
                this._keyword = this.keywordParam;
            }
            else {
                this._keyword = {};
            }
            this.filters.forEach((/**
             * @param {?} filter
             * @return {?}
             */
            filter => {
                switch (filter.type) {
                    case 'input':
                    case 'datepicker':
                    case 'radio':
                        this._keyword[filter.controlName] = search[filter.controlName];
                        break;
                    case 'select':
                        this._keyword[filter.controlName] = search[filter.controlName].label;
                        break;
                    case 'checkbox':
                        this._keyword[filter.controlName] = search[filter.controlName].name;
                        break;
                    default:
                        break;
                }
            }));
            this.count = 0;
            this.offset = 0;
            this.fetch();
        }
    }
    /**
     * @param {?} add
     * @return {?}
     */
    doAdd(add) {
        this.onAdd.emit(add);
    }
    /**
     * @param {?} row
     * @return {?}
     */
    doEdit(row) {
        this.onEdit.emit(row);
    }
    /**
     * @return {?}
     */
    doDelete() {
        this.onDelete.emit(this.selected);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onKeyDown(event) {
        if (event.keyCode === 13) {
            this.doSearch(this._search);
        }
    }
    /**
     * @return {?}
     */
    fetch() {
        if (this.api) {
            this.externalPaging = true;
            this.externalSorting = true;
            this.getRequest().subscribe((/**
             * @param {?} rows
             * @return {?}
             */
            rows => {
                this.rows = rows;
                this.cdref.detectChanges();
            }));
        }
    }
    /**
     * @param {?} page
     * @return {?}
     */
    setPage(page) {
        this.pageOffset = page.offset * this.limit;
        this.fetch();
    }
    /**
     * @param {?} order
     * @return {?}
     */
    onSort(order) {
        if (order) {
            if (Array.isArray(order.sorts)) {
                order.sorts.forEach((/**
                 * @param {?} sort
                 * @return {?}
                 */
                sort => {
                    if (sort['dir'] === 'asc') {
                        this.sort = { asc: [sort['prop']] };
                    }
                    else {
                        this.sort = { desc: [sort['prop']] };
                    }
                }));
            }
        }
        this.fetch();
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    onSelect({ selected }) {
        if (Array.isArray(selected)) {
            if (selected.length > 0) {
                if (this.delete)
                    this.isDelete = true;
            }
            else {
                this.isDelete = false;
            }
            this.selected = selected;
        }
        else {
            this.isDelete = false;
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onClickButton(event) {
        this.onButtonCell.emit(event);
    }
    /**
     * @private
     * @return {?}
     */
    getRequest() {
        /** @type {?} */
        const body = {
            offset: this.pageOffset,
            limit: this.limit,
            keyword: this._keyword,
            order: this.sort,
        };
        this.loadingIndicator = true;
        return this.http.HTTP_AUTH(this.api, body)
            .pipe(map((/**
         * @param {?} response
         * @return {?}
         */
        (response) => {
            this.count = Number(response.totalRecord);
            this.loadingIndicator = false;
            return ((/** @type {?} */ (response['data'])));
        })), catchError((/**
         * @return {?}
         */
        () => {
            this.loadingIndicator = false;
            this.count = 0;
            return of([]);
        })));
    }
}
NgxaDatatableComponent.decorators = [
    { type: Component, args: [{
                selector: 'xa-datatable',
                template: "<xa-datatable-header\n    [header]=\"header\"\n    [add]=\"add\"\n    [delete]=\"isDelete\"\n    [filter]=\"filter\"\n    [formGroupFilter]=\"formGroupFilter\"\n    (onSearch)=\"doSearch($event)\"\n    (onFilter)=\"doFilter($event)\"\n    (onAdd)=\"doAdd($event)\"\n    (onDelete)=\"doDelete()\">\n    <ng-content></ng-content>\n</xa-datatable-header>\n<xa-datatable-base\n    [rows]=\"rows\"\n    [columns]=\"columns\"\n    [selected]=\"selected\"\n    [limit]=\"limit\"\n    [count]=\"count\"\n    [offset]=\"offset\"\n    [externalPaging]=\"externalPaging\"\n    [externalSorting]=\"externalSorting\"\n    [loadingIndicator]=\"loadingIndicator\"\n    [scrollbarH]=\"scrollbarH\"\n    [scrollbarV]=\"scrollbarV\"\n    [reorderable]=\"reorderable\"\n    [sortType]=\"sortType\"\n    [messages]=\"messages\"\n    [selectionType]=\"selectionType\"\n    [columnMode]=\"columnMode\"\n    [headerHeight]=\"headerHeight\"\n    [footerHeight]=\"footerHeight\"\n    [rowHeight]=\"rowHeight\"\n    [header]=\"header\"\n    [column]=\"column\"\n    [footer]=\"footer\"\n    [add]=\"add\"\n    [edit]=\"edit\"\n    [delete]=\"delete\"\n    [filter]=\"filter\"\n    [startWithOpenData]=\"startWithOpenData\"\n    (page)=\"setPage($event)\"\n    (sort)=\"onSort($event)\"\n    (select)=\"onSelect($event)\"\n    (activate)=\"doEdit($event)\"\n    (onButtonCell)=\"onClickButton($event)\">\n</xa-datatable-base>\n",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            }] }
];
/** @nocollapse */
NgxaDatatableComponent.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] },
    { type: LayoutService },
    { type: Injector }
];
NgxaDatatableComponent.propDecorators = {
    rows: [{ type: Input }],
    columns: [{ type: Input }],
    filters: [{ type: Input }],
    selected: [{ type: Input }],
    limit: [{ type: Input }],
    count: [{ type: Input }],
    offset: [{ type: Input }],
    externalPaging: [{ type: Input }],
    externalSorting: [{ type: Input }],
    loadingIndicator: [{ type: Input }],
    scrollbarH: [{ type: Input }],
    scrollbarV: [{ type: Input }],
    reorderable: [{ type: Input }],
    sortType: [{ type: Input }],
    messages: [{ type: Input }],
    selectionType: [{ type: Input }],
    columnMode: [{ type: Input }],
    headerHeight: [{ type: Input }],
    footerHeight: [{ type: Input }],
    rowHeight: [{ type: Input }],
    header: [{ type: Input }],
    column: [{ type: Input }],
    footer: [{ type: Input }],
    add: [{ type: Input }],
    edit: [{ type: Input }],
    delete: [{ type: Input }],
    filter: [{ type: Input }],
    api: [{ type: Input }],
    startWithOpenData: [{ type: Input }],
    filterEvent: [{ type: Input }],
    formGroupFilter: [{ type: Input }],
    sort: [{ type: Input }],
    onAdd: [{ type: Output }],
    onEdit: [{ type: Output }],
    onDelete: [{ type: Output }],
    onSearch: [{ type: Output }],
    onFilter: [{ type: Output }],
    onButtonCell: [{ type: Output }],
    datatable: [{ type: ViewChild, args: ['datatable', { static: false },] }],
    filterFn: [{ type: Input }],
    filterDoFetchFn: [{ type: Input }],
    reloadFn: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NgxaDatatableComponent.prototype.rows;
    /** @type {?} */
    NgxaDatatableComponent.prototype.columns;
    /** @type {?} */
    NgxaDatatableComponent.prototype.filters;
    /** @type {?} */
    NgxaDatatableComponent.prototype.selected;
    /** @type {?} */
    NgxaDatatableComponent.prototype.limit;
    /** @type {?} */
    NgxaDatatableComponent.prototype.count;
    /** @type {?} */
    NgxaDatatableComponent.prototype.offset;
    /** @type {?} */
    NgxaDatatableComponent.prototype.externalPaging;
    /** @type {?} */
    NgxaDatatableComponent.prototype.externalSorting;
    /** @type {?} */
    NgxaDatatableComponent.prototype.loadingIndicator;
    /** @type {?} */
    NgxaDatatableComponent.prototype.scrollbarH;
    /** @type {?} */
    NgxaDatatableComponent.prototype.scrollbarV;
    /** @type {?} */
    NgxaDatatableComponent.prototype.reorderable;
    /** @type {?} */
    NgxaDatatableComponent.prototype.sortType;
    /** @type {?} */
    NgxaDatatableComponent.prototype.messages;
    /** @type {?} */
    NgxaDatatableComponent.prototype.selectionType;
    /** @type {?} */
    NgxaDatatableComponent.prototype.columnMode;
    /** @type {?} */
    NgxaDatatableComponent.prototype.headerHeight;
    /** @type {?} */
    NgxaDatatableComponent.prototype.footerHeight;
    /** @type {?} */
    NgxaDatatableComponent.prototype.rowHeight;
    /** @type {?} */
    NgxaDatatableComponent.prototype.header;
    /** @type {?} */
    NgxaDatatableComponent.prototype.column;
    /** @type {?} */
    NgxaDatatableComponent.prototype.footer;
    /** @type {?} */
    NgxaDatatableComponent.prototype.add;
    /** @type {?} */
    NgxaDatatableComponent.prototype.edit;
    /** @type {?} */
    NgxaDatatableComponent.prototype.delete;
    /** @type {?} */
    NgxaDatatableComponent.prototype.filter;
    /** @type {?} */
    NgxaDatatableComponent.prototype.api;
    /** @type {?} */
    NgxaDatatableComponent.prototype.startWithOpenData;
    /** @type {?} */
    NgxaDatatableComponent.prototype.filterEvent;
    /** @type {?} */
    NgxaDatatableComponent.prototype.formGroupFilter;
    /** @type {?} */
    NgxaDatatableComponent.prototype.sort;
    /** @type {?} */
    NgxaDatatableComponent.prototype.onAdd;
    /** @type {?} */
    NgxaDatatableComponent.prototype.onEdit;
    /** @type {?} */
    NgxaDatatableComponent.prototype.onDelete;
    /** @type {?} */
    NgxaDatatableComponent.prototype.onSearch;
    /** @type {?} */
    NgxaDatatableComponent.prototype.onFilter;
    /** @type {?} */
    NgxaDatatableComponent.prototype.onButtonCell;
    /** @type {?} */
    NgxaDatatableComponent.prototype.datatable;
    /** @type {?} */
    NgxaDatatableComponent.prototype.keywordParam;
    /** @type {?} */
    NgxaDatatableComponent.prototype._keyword;
    /** @type {?} */
    NgxaDatatableComponent.prototype.isDelete;
    /**
     * @type {?}
     * @protected
     */
    NgxaDatatableComponent.prototype.http;
    /**
     * @type {?}
     * @private
     */
    NgxaDatatableComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NgxaDatatableComponent.prototype.cdref;
    /**
     * @type {?}
     * @private
     */
    NgxaDatatableComponent.prototype.pageOffset;
    /**
     * @type {?}
     * @protected
     */
    NgxaDatatableComponent.prototype._search;
    /** @type {?} */
    NgxaDatatableComponent.prototype.locale;
    /**
     * @type {?}
     * @private
     */
    NgxaDatatableComponent.prototype.layout;
    /** @type {?} */
    NgxaDatatableComponent.prototype.injector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4YS1kYXRhdGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHhhcGhpcmEvbmd4YS1jb21tb24vIiwic291cmNlcyI6WyJsaWIvdGFibGUvbmd4L25neGEtZGF0YXRhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsaUJBQWlCLEVBQ2pCLE1BQU0sRUFDTixTQUFTLEVBQ1QsUUFBUSxFQUNSLGlCQUFpQixFQUdqQixTQUFTLEVBQ1QsdUJBQXVCLEVBQ3ZCLFlBQVksRUFDWixNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9DLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakQsT0FBTyxFQUFFLFVBQVUsRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLGtCQUFrQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDbEcsT0FBTyxFQUFFLFlBQVksRUFBcUMsTUFBTSxpQkFBaUIsQ0FBQztBQUNsRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFVcEQsTUFBTSxPQUFPLHNCQUFzQjs7Ozs7O0lBd0VqQyxZQUFzQyxNQUFjLEVBQzFDLE1BQXFCLEVBQ3RCLFFBQWtCO1FBRlcsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUMxQyxXQUFNLEdBQU4sTUFBTSxDQUFlO1FBQ3RCLGFBQVEsR0FBUixRQUFRLENBQVU7UUF6RWxCLFNBQUksR0FBVSxFQUFFLENBQUM7UUFDakIsWUFBTyxHQUFzQixFQUFFLENBQUM7UUFDaEMsWUFBTyxHQUFzQixFQUFFLENBQUM7UUFDaEMsYUFBUSxHQUFVLEVBQUUsQ0FBQztRQUNyQixVQUFLLEdB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IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIEluamVjdCxcbiAgTE9DQUxFX0lELFxuICBJbmplY3RvcixcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIE9uSW5pdCxcbiAgT25EZXN0cm95LFxuICBWaWV3Q2hpbGQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBFdmVudEVtaXR0ZXIsXG4gIE91dHB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBTdWJqZWN0LCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ29sdW1uTW9kZSwgU2VsZWN0aW9uVHlwZSwgU29ydFR5cGUsIERhdGF0YWJsZUNvbXBvbmVudCB9IGZyb20gJ0Bzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlJztcbmltcG9ydCB7IEhUVFBfU0VSVklDRSwgSHR0cEZhY3RvcnlTZXJ2aWNlLCBIdHRwQmFzZU1vZGVsIH0gZnJvbSAnQHhhcGhpcmEvc2hhcmVkJztcbmltcG9ydCB7IExheW91dFNlcnZpY2UgfSBmcm9tICdAeGFwaGlyYS9uZ3hhLXRoZW1lJztcbmltcG9ydCB7IFBhZ2UsIFNvcnQsIEtleXdvcmQsIERhdGF0YWJsZUZpbHRlciwgRGF0YXRhYmxlQ29sdW1uIH0gZnJvbSAnLi4vbW9kZWxzL2RhdGF0YWJsZS5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3hhLWRhdGF0YWJsZScsXG4gIHN0eWxlVXJsczogWycuL25neGEtZGF0YXRhYmxlLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9uZ3hhLWRhdGF0YWJsZS5jb21wb25lbnQuaHRtbCcsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOZ3hhRGF0YXRhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSByb3dzOiBhbnlbXSA9IFtdO1xuICBASW5wdXQoKSBjb2x1bW5zOiBEYXRhdGFibGVDb2x1bW5bXSA9IFtdO1xuICBASW5wdXQoKSBmaWx0ZXJzOiBEYXRhdGFibGVGaWx0ZXJbXSA9IFtdO1xuICBASW5wdXQoKSBzZWxlY3RlZDogYW55W10gPSBbXTtcbiAgQElucHV0KCkgbGltaXQ6IG51bWJlciB8IHVuZGVmaW5lZCA9IDEwO1xuICBASW5wdXQoKSBjb3VudDogbnVtYmVyID0gMDtcbiAgQElucHV0KCkgb2Zmc2V0OiBudW1iZXIgPSAwO1xuICBASW5wdXQoKSBleHRlcm5hbFBhZ2luZzogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBleHRlcm5hbFNvcnRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgbG9hZGluZ0luZGljYXRvcjogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBzY3JvbGxiYXJIOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgc2Nyb2xsYmFyVjogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSByZW9yZGVyYWJsZTogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIHNvcnRUeXBlOiBTb3J0VHlwZSA9IFNvcnRUeXBlLnNpbmdsZTtcbiAgQElucHV0KCkgbWVzc2FnZXM6IGFueTtcbiAgQElucHV0KCkgc2VsZWN0aW9uVHlwZTogU2VsZWN0aW9uVHlwZSA9IFNlbGVjdGlvblR5cGUuY2hlY2tib3g7XG4gIEBJbnB1dCgpIGNvbHVtbk1vZGU6IENvbHVtbk1vZGUgPSBDb2x1bW5Nb2RlLmZvcmNlO1xuICBASW5wdXQoKSBoZWFkZXJIZWlnaHQ6IGFueSA9IDQwO1xuICBASW5wdXQoKSBmb290ZXJIZWlnaHQ6IGFueSA9ICdhdXRvJztcbiAgQElucHV0KCkgcm93SGVpZ2h0OiBudW1iZXIgfCAnYXV0bycgfCAoKHJvdz86IGFueSkgPT4gbnVtYmVyKSA9ICdhdXRvJztcbiAgQElucHV0KCkgaGVhZGVyOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgY29sdW1uOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgZm9vdGVyOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgYWRkOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgZWRpdDogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIGRlbGV0ZTogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIGZpbHRlcjogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIGFwaTogSHR0cEJhc2VNb2RlbDtcbiAgQElucHV0KCkgc3RhcnRXaXRoT3BlbkRhdGE6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBmaWx0ZXJFdmVudDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBmb3JtR3JvdXBGaWx0ZXI6IEZvcm1Hcm91cDtcbiAgQElucHV0KCkgc29ydDogU29ydDtcbiAgQE91dHB1dCgpIG9uQWRkOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIEBPdXRwdXQoKSBvbkVkaXQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBvbkRlbGV0ZTogRXZlbnRFbWl0dGVyPGFueVtdPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55W10+KCk7XG4gIEBPdXRwdXQoKSBvblNlYXJjaDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIG9uRmlsdGVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgb25CdXR0b25DZWxsOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAVmlld0NoaWxkKCdkYXRhdGFibGUnLCB7c3RhdGljOiBmYWxzZX0pIGRhdGF0YWJsZTogRGF0YXRhYmxlQ29tcG9uZW50O1xuICBASW5wdXQoKSBzZXQgZmlsdGVyRm4oa2V5d29yZDogS2V5d29yZCkge1xuICAgIHRoaXMua2V5d29yZFBhcmFtID0ga2V5d29yZDtcbiAgICB0aGlzLl9rZXl3b3JkID0ga2V5d29yZDtcbiAgICB0aGlzLmNvdW50ID0gMDtcbiAgICB0aGlzLm9mZnNldCA9IDA7XG4gIH1cbiAgQElucHV0KCkgc2V0IGZpbHRlckRvRmV0Y2hGbihrZXl3b3JkOiBLZXl3b3JkKSB7XG4gICAgaWYgKGtleXdvcmQpIHtcbiAgICAgIHRoaXMua2V5d29yZFBhcmFtID0ga2V5d29yZDtcbiAgICAgIHRoaXMuX2tleXdvcmQgPSBrZXl3b3JkO1xuICAgIH1cbiAgICB0aGlzLmNvdW50ID0gMDtcbiAgICB0aGlzLm9mZnNldCA9IDA7XG4gICAgdGhpcy5mZXRjaCgpO1xuICB9XG4gIEBJbnB1dCgpIHNldCByZWxvYWRGbihyZWxvYWQ6IGJvb2xlYW4pIHtcbiAgICBpZiAocmVsb2FkKSB7XG4gICAgICB0aGlzLmNvdW50ID0gMDtcbiAgICAgIHRoaXMub2Zmc2V0ID0gMDtcbiAgICAgIHRoaXMuZmV0Y2goKTtcbiAgICB9XG4gIH1cbiAgcHVibGljIGtleXdvcmRQYXJhbTogS2V5d29yZDtcbiAgcHVibGljIF9rZXl3b3JkOiBLZXl3b3JkO1xuICBwdWJsaWMgaXNEZWxldGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJvdGVjdGVkIGh0dHA6IEh0dHBGYWN0b3J5U2VydmljZTtcbiAgcHJpdmF0ZSBkZXN0cm95JDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3Q8YW55PigpO1xuICBwcml2YXRlIGNkcmVmOiBDaGFuZ2VEZXRlY3RvclJlZjtcbiAgcHJpdmF0ZSBwYWdlT2Zmc2V0OiBudW1iZXIgPSAwO1xuXG4gIHByb3RlY3RlZCBfc2VhcmNoOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChMT0NBTEVfSUQpIHB1YmxpYyBsb2NhbGU6IHN0cmluZyxcbiAgICBwcml2YXRlIGxheW91dDogTGF5b3V0U2VydmljZSxcbiAgICBwdWJsaWMgaW5qZWN0b3I6IEluamVjdG9yKSB7XG4gICAgdGhpcy5odHRwID0gaW5qZWN0b3IuZ2V0KEhUVFBfU0VSVklDRSk7XG4gICAgdGhpcy5jZHJlZiA9IGluamVjdG9yLmdldChDaGFuZ2VEZXRlY3RvclJlZik7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zdGFydFdpdGhPcGVuRGF0YSkge1xuICAgICAgdGhpcy5mZXRjaCgpO1xuICAgIH1cbiAgICB0aGlzLmxheW91dC5vbkNoYW5nZUxheW91dFNpemUoKS50YWtlVW50aWwodGhpcy5kZXN0cm95JCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuZGF0YXRhYmxlLnJlY2FsY3VsYXRlKCk7XG4gICAgICB0aGlzLmNkcmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCh0cnVlKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gICAgdGhpcy5kZXN0cm95JC51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgZG9TZWFyY2goc2VhcmNoOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLm9uU2VhcmNoLmVtaXQoc2VhcmNoKTtcbiAgICBpZiAodGhpcy5rZXl3b3JkUGFyYW0pIHtcbiAgICAgIHRoaXMuX2tleXdvcmQgPSB0aGlzLmtleXdvcmRQYXJhbTtcbiAgICAgIHRoaXMuX2tleXdvcmRbJ19hbGwnXSA9IHNlYXJjaDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fa2V5d29yZCA9IHtcbiAgICAgICAgJ19hbGwnOiBzZWFyY2gsXG4gICAgICB9O1xuICAgIH1cbiAgICB0aGlzLmNvdW50ID0gMDtcbiAgICB0aGlzLm9mZnNldCA9IDA7XG4gICAgdGhpcy5mZXRjaCgpO1xuICB9XG5cbiAgZG9GaWx0ZXIoc2VhcmNoOiBhbnkpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5maWx0ZXJFdmVudCkge1xuICAgICAgdGhpcy5vbkZpbHRlci5lbWl0KHNlYXJjaCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLmtleXdvcmRQYXJhbSkge1xuICAgICAgICB0aGlzLl9rZXl3b3JkID0gdGhpcy5rZXl3b3JkUGFyYW07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9rZXl3b3JkID0ge307XG4gICAgICB9XG4gICAgICB0aGlzLmZpbHRlcnMuZm9yRWFjaChmaWx0ZXIgPT4ge1xuICAgICAgICBzd2l0Y2ggKGZpbHRlci50eXBlKSB7XG4gICAgICAgICAgY2FzZSAnaW5wdXQnOlxuICAgICAgICAgIGNhc2UgJ2RhdGVwaWNrZXInOlxuICAgICAgICAgIGNhc2UgJ3JhZGlvJzpcbiAgICAgICAgICAgIHRoaXMuX2tleXdvcmRbZmlsdGVyLmNvbnRyb2xOYW1lXSA9IHNlYXJjaFtmaWx0ZXIuY29udHJvbE5hbWVdO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnc2VsZWN0JzpcbiAgICAgICAgICAgIHRoaXMuX2tleXdvcmRbZmlsdGVyLmNvbnRyb2xOYW1lXSA9IHNlYXJjaFtmaWx0ZXIuY29udHJvbE5hbWVdLmxhYmVsO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnY2hlY2tib3gnOlxuICAgICAgICAgICAgdGhpcy5fa2V5d29yZFtmaWx0ZXIuY29udHJvbE5hbWVdID0gc2VhcmNoW2ZpbHRlci5jb250cm9sTmFtZV0ubmFtZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLmNvdW50ID0gMDtcbiAgICAgIHRoaXMub2Zmc2V0ID0gMDtcbiAgICAgIHRoaXMuZmV0Y2goKTtcbiAgICB9XG4gIH1cblxuICBkb0FkZChhZGQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLm9uQWRkLmVtaXQoYWRkKTtcbiAgfVxuXG4gIGRvRWRpdChyb3c6IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25FZGl0LmVtaXQocm93KTtcbiAgfVxuXG4gIGRvRGVsZXRlKCk6IHZvaWQge1xuICAgIHRoaXMub25EZWxldGUuZW1pdCh0aGlzLnNlbGVjdGVkKTtcbiAgfVxuXG4gIG9uS2V5RG93bihldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMykge1xuICAgICAgdGhpcy5kb1NlYXJjaCh0aGlzLl9zZWFyY2gpO1xuICAgIH1cbiAgfVxuXG4gIGZldGNoKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmFwaSkge1xuICAgICAgdGhpcy5leHRlcm5hbFBhZ2luZyA9IHRydWU7XG4gICAgICB0aGlzLmV4dGVybmFsU29ydGluZyA9IHRydWU7XG4gICAgICB0aGlzLmdldFJlcXVlc3QoKS5zdWJzY3JpYmUocm93cyA9PiB7XG4gICAgICAgIHRoaXMucm93cyA9IHJvd3M7XG4gICAgICAgIHRoaXMuY2RyZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgc2V0UGFnZShwYWdlOiBQYWdlKTogdm9pZCB7XG4gICAgdGhpcy5wYWdlT2Zmc2V0ID0gcGFnZS5vZmZzZXQgKiB0aGlzLmxpbWl0O1xuICAgIHRoaXMuZmV0Y2goKTtcbiAgfVxuXG4gIG9uU29ydChvcmRlcjogYW55KTogdm9pZCB7XG4gICAgaWYgKG9yZGVyKSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShvcmRlci5zb3J0cykpIHtcbiAgICAgICAgb3JkZXIuc29ydHMuZm9yRWFjaChzb3J0ID0+IHtcbiAgICAgICAgICBpZiAoc29ydFsnZGlyJ10gPT09ICdhc2MnKSB7XG4gICAgICAgICAgICB0aGlzLnNvcnQgPSB7IGFzYyA6IFtzb3J0Wydwcm9wJ11dfTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zb3J0ID0geyBkZXNjIDogW3NvcnRbJ3Byb3AnXV19O1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuZmV0Y2goKTtcbiAgfVxuXG4gIG9uU2VsZWN0KHsgc2VsZWN0ZWQgfSk6IHZvaWQge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHNlbGVjdGVkKSkge1xuICAgICAgaWYgKHNlbGVjdGVkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgaWYgKHRoaXMuZGVsZXRlKSB0aGlzLmlzRGVsZXRlID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaXNEZWxldGUgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2VsZWN0ZWQgPSBzZWxlY3RlZDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pc0RlbGV0ZSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIG9uQ2xpY2tCdXR0b24oZXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLm9uQnV0dG9uQ2VsbC5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0UmVxdWVzdCgpOiBPYnNlcnZhYmxlPGFueVtdPiB7XG4gICAgY29uc3QgYm9keTogYW55ID0ge1xuICAgICAgb2Zmc2V0OiB0aGlzLnBhZ2VPZmZzZXQsXG4gICAgICBsaW1pdDogdGhpcy5saW1pdCxcbiAgICAgIGtleXdvcmQgOiB0aGlzLl9rZXl3b3JkLFxuICAgICAgb3JkZXI6IHRoaXMuc29ydCxcbiAgICB9O1xuICAgIHRoaXMubG9hZGluZ0luZGljYXRvciA9IHRydWU7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5IVFRQX0FVVEgodGhpcy5hcGksIGJvZHkpXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgICAgdGhpcy5jb3VudCA9IE51bWJlcihyZXNwb25zZS50b3RhbFJlY29yZCk7XG4gICAgICAgICAgdGhpcy5sb2FkaW5nSW5kaWNhdG9yID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuICg8YW55W10+IHJlc3BvbnNlWydkYXRhJ10pO1xuICAgICAgICB9KSxcbiAgICAgICAgY2F0Y2hFcnJvcigoKSA9PiB7XG4gICAgICAgICAgdGhpcy5sb2FkaW5nSW5kaWNhdG9yID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5jb3VudCA9IDA7XG4gICAgICAgICAgcmV0dXJuIG9mKFtdKTtcbiAgICAgICAgfSkpO1xuICB9XG5cbn1cbiJdfQ==