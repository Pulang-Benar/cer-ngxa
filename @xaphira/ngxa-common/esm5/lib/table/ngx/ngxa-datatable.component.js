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
var NgxaDatatableComponent = /** @class */ (function () {
    function NgxaDatatableComponent(locale, layout, injector) {
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
    Object.defineProperty(NgxaDatatableComponent.prototype, "filterFn", {
        set: /**
         * @param {?} keyword
         * @return {?}
         */
        function (keyword) {
            this.keywordParam = keyword;
            this._keyword = keyword;
            this.count = 0;
            this.offset = 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxaDatatableComponent.prototype, "filterDoFetchFn", {
        set: /**
         * @param {?} keyword
         * @return {?}
         */
        function (keyword) {
            if (keyword) {
                this.keywordParam = keyword;
                this._keyword = keyword;
            }
            this.count = 0;
            this.offset = 0;
            this.fetch();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxaDatatableComponent.prototype, "reloadFn", {
        set: /**
         * @param {?} reload
         * @return {?}
         */
        function (reload) {
            if (reload) {
                this.count = 0;
                this.offset = 0;
                this.fetch();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NgxaDatatableComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.startWithOpenData) {
            this.fetch();
        }
        this.layout.onChangeLayoutSize().takeUntil(this.destroy$).subscribe((/**
         * @return {?}
         */
        function () {
            _this.datatable.recalculate();
            _this.cdref.detectChanges();
        }));
    };
    /**
     * @return {?}
     */
    NgxaDatatableComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next(true);
        this.destroy$.complete();
        this.destroy$.unsubscribe();
    };
    /**
     * @param {?} search
     * @return {?}
     */
    NgxaDatatableComponent.prototype.doSearch = /**
     * @param {?} search
     * @return {?}
     */
    function (search) {
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
    };
    /**
     * @param {?} search
     * @return {?}
     */
    NgxaDatatableComponent.prototype.doFilter = /**
     * @param {?} search
     * @return {?}
     */
    function (search) {
        var _this = this;
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
            function (filter) {
                switch (filter.type) {
                    case 'input':
                    case 'datepicker':
                    case 'radio':
                        _this._keyword[filter.controlName] = search[filter.controlName];
                        break;
                    case 'select':
                        _this._keyword[filter.controlName] = search[filter.controlName].label;
                        break;
                    case 'checkbox':
                        _this._keyword[filter.controlName] = search[filter.controlName].name;
                        break;
                    default:
                        break;
                }
            }));
            this.count = 0;
            this.offset = 0;
            this.fetch();
        }
    };
    /**
     * @param {?} add
     * @return {?}
     */
    NgxaDatatableComponent.prototype.doAdd = /**
     * @param {?} add
     * @return {?}
     */
    function (add) {
        this.onAdd.emit(add);
    };
    /**
     * @param {?} row
     * @return {?}
     */
    NgxaDatatableComponent.prototype.doEdit = /**
     * @param {?} row
     * @return {?}
     */
    function (row) {
        this.onEdit.emit(row);
    };
    /**
     * @return {?}
     */
    NgxaDatatableComponent.prototype.doDelete = /**
     * @return {?}
     */
    function () {
        this.onDelete.emit(this.selected);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NgxaDatatableComponent.prototype.onKeyDown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.keyCode === 13) {
            this.doSearch(this._search);
        }
    };
    /**
     * @return {?}
     */
    NgxaDatatableComponent.prototype.fetch = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.api) {
            this.externalPaging = true;
            this.externalSorting = true;
            this.getRequest().subscribe((/**
             * @param {?} rows
             * @return {?}
             */
            function (rows) {
                _this.rows = rows;
                _this.cdref.detectChanges();
            }));
        }
    };
    /**
     * @param {?} page
     * @return {?}
     */
    NgxaDatatableComponent.prototype.setPage = /**
     * @param {?} page
     * @return {?}
     */
    function (page) {
        this.pageOffset = page.offset * this.limit;
        this.fetch();
    };
    /**
     * @param {?} order
     * @return {?}
     */
    NgxaDatatableComponent.prototype.onSort = /**
     * @param {?} order
     * @return {?}
     */
    function (order) {
        var _this = this;
        if (order) {
            if (Array.isArray(order.sorts)) {
                order.sorts.forEach((/**
                 * @param {?} sort
                 * @return {?}
                 */
                function (sort) {
                    if (sort['dir'] === 'asc') {
                        _this.sort = { asc: [sort['prop']] };
                    }
                    else {
                        _this.sort = { desc: [sort['prop']] };
                    }
                }));
            }
        }
        this.fetch();
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    NgxaDatatableComponent.prototype.onSelect = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var selected = _a.selected;
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
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NgxaDatatableComponent.prototype.onClickButton = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.onButtonCell.emit(event);
    };
    /**
     * @private
     * @return {?}
     */
    NgxaDatatableComponent.prototype.getRequest = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var body = {
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
        function (response) {
            _this.count = Number(response.totalRecord);
            _this.loadingIndicator = false;
            return ((/** @type {?} */ (response['data'])));
        })), catchError((/**
         * @return {?}
         */
        function () {
            _this.loadingIndicator = false;
            _this.count = 0;
            return of([]);
        })));
    };
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
    NgxaDatatableComponent.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] },
        { type: LayoutService },
        { type: Injector }
    ]; };
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
    return NgxaDatatableComponent;
}());
export { NgxaDatatableComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4YS1kYXRhdGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHhhcGhpcmEvbmd4YS1jb21tb24vIiwic291cmNlcyI6WyJsaWIvdGFibGUvbmd4L25neGEtZGF0YXRhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsaUJBQWlCLEVBQ2pCLE1BQU0sRUFDTixTQUFTLEVBQ1QsUUFBUSxFQUNSLGlCQUFpQixFQUdqQixTQUFTLEVBQ1QsdUJBQXVCLEVBQ3ZCLFlBQVksRUFDWixNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9DLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakQsT0FBTyxFQUFFLFVBQVUsRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLGtCQUFrQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDbEcsT0FBTyxFQUFFLFlBQVksRUFBcUMsTUFBTSxpQkFBaUIsQ0FBQztBQUNsRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFHcEQ7SUErRUUsZ0NBQXNDLE1BQWMsRUFDMUMsTUFBcUIsRUFDdEIsUUFBa0I7UUFGVyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQzFDLFdBQU0sR0FBTixNQUFNLENBQWU7UUFDdEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQXpFbEIsU0FBSSxHQUFVLEVBQUUsQ0FBQztRQUNqQixZQUFPLEdBQXNCLEVBQUUsQ0FBQztRQUNoQyxZQUFPLEdBQXNCLEVBQUUsQ0FBQztRQUNoQyxhQUFRLEdBQVUsRUFBRSxDQUFDO1FBQ3JCLFVBQUssR0FBdUIsRUFBRSxDQUFDO1FBQy9CLFVB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b0U7O0lBQ3BFLDJDQUF1RTs7SUF1QnZFLDhDQUE2Qjs7SUFDN0IsMENBQXlCOztJQUN6QiwwQ0FBaUM7Ozs7O0lBQ2pDLHNDQUFtQzs7Ozs7SUFDbkMsMENBQW9EOzs7OztJQUNwRCx1Q0FBaUM7Ozs7O0lBQ2pDLDRDQUErQjs7Ozs7SUFFL0IseUNBQTBCOztJQUVkLHdDQUF3Qzs7Ozs7SUFDbEQsd0NBQTZCOztJQUM3QiwwQ0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgSW5qZWN0LFxuICBMT0NBTEVfSUQsXG4gIEluamVjdG9yLFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3ksXG4gIFZpZXdDaGlsZCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIEV2ZW50RW1pdHRlcixcbiAgT3V0cHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFN1YmplY3QsIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDb2x1bW5Nb2RlLCBTZWxlY3Rpb25UeXBlLCBTb3J0VHlwZSwgRGF0YXRhYmxlQ29tcG9uZW50IH0gZnJvbSAnQHN3aW1sYW5lL25neC1kYXRhdGFibGUnO1xuaW1wb3J0IHsgSFRUUF9TRVJWSUNFLCBIdHRwRmFjdG9yeVNlcnZpY2UsIEh0dHBCYXNlTW9kZWwgfSBmcm9tICdAeGFwaGlyYS9zaGFyZWQnO1xuaW1wb3J0IHsgTGF5b3V0U2VydmljZSB9IGZyb20gJ0B4YXBoaXJhL25neGEtdGhlbWUnO1xuaW1wb3J0IHsgUGFnZSwgU29ydCwgS2V5d29yZCwgRGF0YXRhYmxlRmlsdGVyLCBEYXRhdGFibGVDb2x1bW4gfSBmcm9tICcuLi9tb2RlbHMvZGF0YXRhYmxlLm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAneGEtZGF0YXRhYmxlJyxcbiAgc3R5bGVVcmxzOiBbJy4vbmd4YS1kYXRhdGFibGUuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL25neGEtZGF0YXRhYmxlLmNvbXBvbmVudC5odG1sJyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE5neGFEYXRhdGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIHJvd3M6IGFueVtdID0gW107XG4gIEBJbnB1dCgpIGNvbHVtbnM6IERhdGF0YWJsZUNvbHVtbltdID0gW107XG4gIEBJbnB1dCgpIGZpbHRlcnM6IERhdGF0YWJsZUZpbHRlcltdID0gW107XG4gIEBJbnB1dCgpIHNlbGVjdGVkOiBhbnlbXSA9IFtdO1xuICBASW5wdXQoKSBsaW1pdDogbnVtYmVyIHwgdW5kZWZpbmVkID0gMTA7XG4gIEBJbnB1dCgpIGNvdW50OiBudW1iZXIgPSAwO1xuICBASW5wdXQoKSBvZmZzZXQ6IG51bWJlciA9IDA7XG4gIEBJbnB1dCgpIGV4dGVybmFsUGFnaW5nOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGV4dGVybmFsU29ydGluZzogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBsb2FkaW5nSW5kaWNhdG9yOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIHNjcm9sbGJhckg6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBzY3JvbGxiYXJWOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIHJlb3JkZXJhYmxlOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgc29ydFR5cGU6IFNvcnRUeXBlID0gU29ydFR5cGUuc2luZ2xlO1xuICBASW5wdXQoKSBtZXNzYWdlczogYW55O1xuICBASW5wdXQoKSBzZWxlY3Rpb25UeXBlOiBTZWxlY3Rpb25UeXBlID0gU2VsZWN0aW9uVHlwZS5jaGVja2JveDtcbiAgQElucHV0KCkgY29sdW1uTW9kZTogQ29sdW1uTW9kZSA9IENvbHVtbk1vZGUuZm9yY2U7XG4gIEBJbnB1dCgpIGhlYWRlckhlaWdodDogYW55ID0gNDA7XG4gIEBJbnB1dCgpIGZvb3RlckhlaWdodDogYW55ID0gJ2F1dG8nO1xuICBASW5wdXQoKSByb3dIZWlnaHQ6IG51bWJlciB8ICdhdXRvJyB8ICgocm93PzogYW55KSA9PiBudW1iZXIpID0gJ2F1dG8nO1xuICBASW5wdXQoKSBoZWFkZXI6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBjb2x1bW46IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBmb290ZXI6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBhZGQ6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBlZGl0OiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgZGVsZXRlOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgZmlsdGVyOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgYXBpOiBIdHRwQmFzZU1vZGVsO1xuICBASW5wdXQoKSBzdGFydFdpdGhPcGVuRGF0YTogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIGZpbHRlckV2ZW50OiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGZvcm1Hcm91cEZpbHRlcjogRm9ybUdyb3VwO1xuICBASW5wdXQoKSBzb3J0OiBTb3J0O1xuICBAT3V0cHV0KCkgb25BZGQ6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgQE91dHB1dCgpIG9uRWRpdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIG9uRGVsZXRlOiBFdmVudEVtaXR0ZXI8YW55W10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnlbXT4oKTtcbiAgQE91dHB1dCgpIG9uU2VhcmNoOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgb25GaWx0ZXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBvbkJ1dHRvbkNlbGw6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBWaWV3Q2hpbGQoJ2RhdGF0YWJsZScsIHtzdGF0aWM6IGZhbHNlfSkgZGF0YXRhYmxlOiBEYXRhdGFibGVDb21wb25lbnQ7XG4gIEBJbnB1dCgpIHNldCBmaWx0ZXJGbihrZXl3b3JkOiBLZXl3b3JkKSB7XG4gICAgdGhpcy5rZXl3b3JkUGFyYW0gPSBrZXl3b3JkO1xuICAgIHRoaXMuX2tleXdvcmQgPSBrZXl3b3JkO1xuICAgIHRoaXMuY291bnQgPSAwO1xuICAgIHRoaXMub2Zmc2V0ID0gMDtcbiAgfVxuICBASW5wdXQoKSBzZXQgZmlsdGVyRG9GZXRjaEZuKGtleXdvcmQ6IEtleXdvcmQpIHtcbiAgICBpZiAoa2V5d29yZCkge1xuICAgICAgdGhpcy5rZXl3b3JkUGFyYW0gPSBrZXl3b3JkO1xuICAgICAgdGhpcy5fa2V5d29yZCA9IGtleXdvcmQ7XG4gICAgfVxuICAgIHRoaXMuY291bnQgPSAwO1xuICAgIHRoaXMub2Zmc2V0ID0gMDtcbiAgICB0aGlzLmZldGNoKCk7XG4gIH1cbiAgQElucHV0KCkgc2V0IHJlbG9hZEZuKHJlbG9hZDogYm9vbGVhbikge1xuICAgIGlmIChyZWxvYWQpIHtcbiAgICAgIHRoaXMuY291bnQgPSAwO1xuICAgICAgdGhpcy5vZmZzZXQgPSAwO1xuICAgICAgdGhpcy5mZXRjaCgpO1xuICAgIH1cbiAgfVxuICBwdWJsaWMga2V5d29yZFBhcmFtOiBLZXl3b3JkO1xuICBwdWJsaWMgX2tleXdvcmQ6IEtleXdvcmQ7XG4gIHB1YmxpYyBpc0RlbGV0ZTogYm9vbGVhbiA9IGZhbHNlO1xuICBwcm90ZWN0ZWQgaHR0cDogSHR0cEZhY3RvcnlTZXJ2aWNlO1xuICBwcml2YXRlIGRlc3Ryb3kkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdDxhbnk+KCk7XG4gIHByaXZhdGUgY2RyZWY6IENoYW5nZURldGVjdG9yUmVmO1xuICBwcml2YXRlIHBhZ2VPZmZzZXQ6IG51bWJlciA9IDA7XG5cbiAgcHJvdGVjdGVkIF9zZWFyY2g6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KExPQ0FMRV9JRCkgcHVibGljIGxvY2FsZTogc3RyaW5nLFxuICAgIHByaXZhdGUgbGF5b3V0OiBMYXlvdXRTZXJ2aWNlLFxuICAgIHB1YmxpYyBpbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgICB0aGlzLmh0dHAgPSBpbmplY3Rvci5nZXQoSFRUUF9TRVJWSUNFKTtcbiAgICB0aGlzLmNkcmVmID0gaW5qZWN0b3IuZ2V0KENoYW5nZURldGVjdG9yUmVmKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnN0YXJ0V2l0aE9wZW5EYXRhKSB7XG4gICAgICB0aGlzLmZldGNoKCk7XG4gICAgfVxuICAgIHRoaXMubGF5b3V0Lm9uQ2hhbmdlTGF5b3V0U2l6ZSgpLnRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5kYXRhdGFibGUucmVjYWxjdWxhdGUoKTtcbiAgICAgIHRoaXMuY2RyZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KHRydWUpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBkb1NlYXJjaChzZWFyY2g6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMub25TZWFyY2guZW1pdChzZWFyY2gpO1xuICAgIGlmICh0aGlzLmtleXdvcmRQYXJhbSkge1xuICAgICAgdGhpcy5fa2V5d29yZCA9IHRoaXMua2V5d29yZFBhcmFtO1xuICAgICAgdGhpcy5fa2V5d29yZFsnX2FsbCddID0gc2VhcmNoO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9rZXl3b3JkID0ge1xuICAgICAgICAnX2FsbCc6IHNlYXJjaCxcbiAgICAgIH07XG4gICAgfVxuICAgIHRoaXMuY291bnQgPSAwO1xuICAgIHRoaXMub2Zmc2V0ID0gMDtcbiAgICB0aGlzLmZldGNoKCk7XG4gIH1cblxuICBkb0ZpbHRlcihzZWFyY2g6IGFueSk6IHZvaWQge1xuICAgIGlmICh0aGlzLmZpbHRlckV2ZW50KSB7XG4gICAgICB0aGlzLm9uRmlsdGVyLmVtaXQoc2VhcmNoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMua2V5d29yZFBhcmFtKSB7XG4gICAgICAgIHRoaXMuX2tleXdvcmQgPSB0aGlzLmtleXdvcmRQYXJhbTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2tleXdvcmQgPSB7fTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZmlsdGVycy5mb3JFYWNoKGZpbHRlciA9PiB7XG4gICAgICAgIHN3aXRjaCAoZmlsdGVyLnR5cGUpIHtcbiAgICAgICAgICBjYXNlICdpbnB1dCc6XG4gICAgICAgICAgY2FzZSAnZGF0ZXBpY2tlcic6XG4gICAgICAgICAgY2FzZSAncmFkaW8nOlxuICAgICAgICAgICAgdGhpcy5fa2V5d29yZFtmaWx0ZXIuY29udHJvbE5hbWVdID0gc2VhcmNoW2ZpbHRlci5jb250cm9sTmFtZV07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdzZWxlY3QnOlxuICAgICAgICAgICAgdGhpcy5fa2V5d29yZFtmaWx0ZXIuY29udHJvbE5hbWVdID0gc2VhcmNoW2ZpbHRlci5jb250cm9sTmFtZV0ubGFiZWw7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdjaGVja2JveCc6XG4gICAgICAgICAgICB0aGlzLl9rZXl3b3JkW2ZpbHRlci5jb250cm9sTmFtZV0gPSBzZWFyY2hbZmlsdGVyLmNvbnRyb2xOYW1lXS5uYW1lO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMuY291bnQgPSAwO1xuICAgICAgdGhpcy5vZmZzZXQgPSAwO1xuICAgICAgdGhpcy5mZXRjaCgpO1xuICAgIH1cbiAgfVxuXG4gIGRvQWRkKGFkZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMub25BZGQuZW1pdChhZGQpO1xuICB9XG5cbiAgZG9FZGl0KHJvdzogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vbkVkaXQuZW1pdChyb3cpO1xuICB9XG5cbiAgZG9EZWxldGUoKTogdm9pZCB7XG4gICAgdGhpcy5vbkRlbGV0ZS5lbWl0KHRoaXMuc2VsZWN0ZWQpO1xuICB9XG5cbiAgb25LZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XG4gICAgICB0aGlzLmRvU2VhcmNoKHRoaXMuX3NlYXJjaCk7XG4gICAgfVxuICB9XG5cbiAgZmV0Y2goKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuYXBpKSB7XG4gICAgICB0aGlzLmV4dGVybmFsUGFnaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuZXh0ZXJuYWxTb3J0aW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuZ2V0UmVxdWVzdCgpLnN1YnNjcmliZShyb3dzID0+IHtcbiAgICAgICAgdGhpcy5yb3dzID0gcm93cztcbiAgICAgICAgdGhpcy5jZHJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBzZXRQYWdlKHBhZ2U6IFBhZ2UpOiB2b2lkIHtcbiAgICB0aGlzLnBhZ2VPZmZzZXQgPSBwYWdlLm9mZnNldCAqIHRoaXMubGltaXQ7XG4gICAgdGhpcy5mZXRjaCgpO1xuICB9XG5cbiAgb25Tb3J0KG9yZGVyOiBhbnkpOiB2b2lkIHtcbiAgICBpZiAob3JkZXIpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KG9yZGVyLnNvcnRzKSkge1xuICAgICAgICBvcmRlci5zb3J0cy5mb3JFYWNoKHNvcnQgPT4ge1xuICAgICAgICAgIGlmIChzb3J0WydkaXInXSA9PT0gJ2FzYycpIHtcbiAgICAgICAgICAgIHRoaXMuc29ydCA9IHsgYXNjIDogW3NvcnRbJ3Byb3AnXV19O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNvcnQgPSB7IGRlc2MgOiBbc29ydFsncHJvcCddXX07XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5mZXRjaCgpO1xuICB9XG5cbiAgb25TZWxlY3QoeyBzZWxlY3RlZCB9KTogdm9pZCB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoc2VsZWN0ZWQpKSB7XG4gICAgICBpZiAoc2VsZWN0ZWQubGVuZ3RoID4gMCkge1xuICAgICAgICBpZiAodGhpcy5kZWxldGUpIHRoaXMuaXNEZWxldGUgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5pc0RlbGV0ZSA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgdGhpcy5zZWxlY3RlZCA9IHNlbGVjdGVkO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlzRGVsZXRlID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgb25DbGlja0J1dHRvbihldmVudCk6IHZvaWQge1xuICAgIHRoaXMub25CdXR0b25DZWxsLmVtaXQoZXZlbnQpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRSZXF1ZXN0KCk6IE9ic2VydmFibGU8YW55W10+IHtcbiAgICBjb25zdCBib2R5OiBhbnkgPSB7XG4gICAgICBvZmZzZXQ6IHRoaXMucGFnZU9mZnNldCxcbiAgICAgIGxpbWl0OiB0aGlzLmxpbWl0LFxuICAgICAga2V5d29yZCA6IHRoaXMuX2tleXdvcmQsXG4gICAgICBvcmRlcjogdGhpcy5zb3J0LFxuICAgIH07XG4gICAgdGhpcy5sb2FkaW5nSW5kaWNhdG9yID0gdHJ1ZTtcbiAgICByZXR1cm4gdGhpcy5odHRwLkhUVFBfQVVUSCh0aGlzLmFwaSwgYm9keSlcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgICAgICB0aGlzLmNvdW50ID0gTnVtYmVyKHJlc3BvbnNlLnRvdGFsUmVjb3JkKTtcbiAgICAgICAgICB0aGlzLmxvYWRpbmdJbmRpY2F0b3IgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gKDxhbnlbXT4gcmVzcG9uc2VbJ2RhdGEnXSk7XG4gICAgICAgIH0pLFxuICAgICAgICBjYXRjaEVycm9yKCgpID0+IHtcbiAgICAgICAgICB0aGlzLmxvYWRpbmdJbmRpY2F0b3IgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmNvdW50ID0gMDtcbiAgICAgICAgICByZXR1cm4gb2YoW10pO1xuICAgICAgICB9KSk7XG4gIH1cblxufVxuIl19