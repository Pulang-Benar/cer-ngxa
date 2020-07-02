/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewEncapsulation, Inject, LOCALE_ID, Injector, Output, EventEmitter, ChangeDetectorRef, ViewChild, ChangeDetectionStrategy, } from '@angular/core';
import { Subject, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ColumnMode, SelectionType, SortType, DatatableComponent } from '@swimlane/ngx-datatable';
import { LayoutService } from '@xaphira/ngxa-theme';
import { HTTP_SERVICE } from '@xaphira/shared';
import { FormGroup } from '@angular/forms';
export class NgxaCerDatatableComponent {
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
        this.columnMode = ColumnMode.force;
        this.headerHeight = 40;
        this.footerHeight = 'auto';
        this.rowHeight = 'auto';
        this.column = true;
        this.footer = true;
        this.startWithOpenData = true;
        this.filterEvent = false;
        this.buttonCell = new EventEmitter();
        this.select = new EventEmitter();
        this.activate = new EventEmitter();
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
     * @param {?} selected
     * @return {?}
     */
    onSelect(selected) {
        this.select.emit(selected);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onActivate(event) {
        if (event.type === 'click') {
            if (this.selectionType === 'checkbox') {
                if (event.cellIndex > 0) {
                    this.activate.emit(event.row);
                }
            }
            else {
                this.activate.emit(event.row);
            }
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
     * @param {?} value
     * @return {?}
     */
    sanitizedValue(value) {
        return value !== null && value !== undefined ? this.stripHtml(value) : value;
    }
    /**
     * @param {?} html
     * @return {?}
     */
    stripHtml(html) {
        if (!html.replace) {
            return html;
        }
        return html.replace(/<\/?[^>]+(>|$)/g, '');
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onClickButton(event) {
        this.buttonCell.emit(event);
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
NgxaCerDatatableComponent.decorators = [
    { type: Component, args: [{
                selector: 'xa-cer-datatable',
                template: "<ngx-datatable\n    class=\"ngxa\"\n    [rows]=\"rows\"\n    [columns]=\"columns\"\n    [selected]=\"selected\"\n    [limit]=\"limit\"\n    [count]=\"count\"\n    [offset]=\"offset\"\n    [externalPaging]=\"externalPaging\"\n    [externalSorting]=\"externalSorting\"\n    [loadingIndicator]=\"loadingIndicator\"\n    [scrollbarH]=\"scrollbarH\"\n    [scrollbarV]=\"scrollbarV\"\n    [reorderable]=\"reorderable\"\n    [sortType]=\"sortType\"\n    [selectionType]=\"selectionType\"\n    [columnMode]=\"columnMode\"\n    [headerHeight]=\"headerHeight\"\n    [footerHeight]=\"footerHeight\"\n    [rowHeight]=\"rowHeight\"\n    (page)=\"setPage($event)\"\n    (sort)=\"onSort($event)\"\n    (select)=\"onSelect($event)\"\n    (activate)=\"onActivate($event)\"\n    #datatable>\n    <div *ngIf=\"column\">\n        <ngx-datatable-column *ngIf=\"selectionType === 'checkbox'\"\n            [width]=\"30\"\n            [sortable]=\"false\"\n            [canAutoResize]=\"false\"\n            [draggable]=\"false\"\n            [resizeable]=\"false\"\n            [headerCheckboxable]=\"true\"\n            [checkboxable]=\"true\"\n            [frozenLeft]=\"true\">\n        </ngx-datatable-column>\n        <ngx-datatable-column *ngFor=\"let col of columns\"\n            [prop]=\"col.prop\"\n            [name]=\"col.name | translate\"\n            [sortable]=\"col.sortable\"\n            [canAutoResize]=\"col.canAutoResize\"\n            [draggable]=\"col.draggable\"\n            [resizeable]=\"col.resizeable\"\n            [width]=\"col.width\"\n            [frozenLeft]=\"col.frozenLeft\"\n            [frozenRight]=\"col.frozenRight\">\n            <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n                <span *ngIf=\"!col.cellTemplate && !col.type\" [title]=\"sanitizedValue(value)\" [innerHTML]=\"value\"></span>\n                <span *ngIf=\"!col.cellTemplate && col.type === 'html'\" [title]=\"sanitizedValue(value)\" [innerHTML]=\"value\"></span>\n                <span *ngIf=\"!col.cellTemplate && col.type === 'icon'\" [title]=\"sanitizedValue(value)\"><span class=\"{{value}}\"></span></span>\n                <button\n                    *ngIf=\"!col.cellTemplate && col.type === 'button'\"\n                    [status]=\"col.buttonStatus ? col.buttonStatus : 'primary'\"\n                    (click)=\"onClickButton(value)\"\n                    [size]=\"'tiny'\"\n                    nbButton>\n                    {{ col.button | translate }}\n                </button>\n            </ng-template>\n        </ngx-datatable-column>\n    </div>\n    <ngx-datatable-footer *ngIf=\"footer\">\n        <ng-template\n            ngx-datatable-footer-template\n            let-rowCount=\"rowCount\"\n            let-pageSize=\"pageSize\"\n            let-selectedCount=\"selectedCount\"\n            let-curPage=\"curPage\"\n            let-offset=\"offset\"\n            let-isVisible=\"isVisible\">\n            <div class=\"page-count\">\n                <div> {{ selectedCount }} {{ 'Selected' | translate }} | {{ count }} {{ 'Total' | translate }} </div>\n            </div>\n            <datatable-pager\n                [pagerLeftArrowIcon]=\"'datatable-icon-left'\"\n                [pagerRightArrowIcon]=\"'datatable-icon-right'\"\n                [pagerPreviousIcon]=\"'datatable-icon-prev'\"\n                [pagerNextIcon]=\"'datatable-icon-skip'\"\n                [page]=\"curPage\"\n                [size]=\"pageSize\"\n                [count]=\"rowCount\"\n                [hidden]=\"!((rowCount / pageSize) > 1)\"\n                (change)=\"datatable.onFooterPage($event)\">\n            </datatable-pager>\n        </ng-template>\n    </ngx-datatable-footer>\n</ngx-datatable>\n",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".ngx-datatable.material{background:#fff;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.ngx-datatable.material.striped .datatable-row-odd{background:#eee}.ngx-datatable.material.multi-click-selection .datatable-body-row.active,.ngx-datatable.material.multi-click-selection .datatable-body-row.active .datatable-row-group,.ngx-datatable.material.multi-selection .datatable-body-row.active,.ngx-datatable.material.multi-selection .datatable-body-row.active .datatable-row-group,.ngx-datatable.material.single-selection .datatable-body-row.active,.ngx-datatable.material.single-selection .datatable-body-row.active .datatable-row-group{background-color:#304ffe;color:#fff}.ngx-datatable.material.multi-click-selection .datatable-body-row.active:hover,.ngx-datatable.material.multi-click-selection .datatable-body-row.active:hover .datatable-row-group,.ngx-datatable.material.multi-selection .datatable-body-row.active:hover,.ngx-datatable.material.multi-selection .datatable-body-row.active:hover .datatable-row-group,.ngx-datatable.material.single-selection .datatable-body-row.active:hover,.ngx-datatable.material.single-selection .datatable-body-row.active:hover .datatable-row-group{background-color:#193ae4;color:#fff}.ngx-datatable.material.multi-click-selection .datatable-body-row.active:focus,.ngx-datatable.material.multi-click-selection .datatable-body-row.active:focus .datatable-row-group,.ngx-datatable.material.multi-selection .datatable-body-row.active:focus,.ngx-datatable.material.multi-selection .datatable-body-row.active:focus .datatable-row-group,.ngx-datatable.material.single-selection .datatable-body-row.active:focus,.ngx-datatable.material.single-selection .datatable-body-row.active:focus .datatable-row-group{background-color:#2041ef;color:#fff}.ngx-datatable.material:not(.cell-selection) .datatable-body-row:hover,.ngx-datatable.material:not(.cell-selection) .datatable-body-row:hover .datatable-row-group{background-color:#eee;transition-property:background;transition-duration:.3s;transition-timing-function:linear}.ngx-datatable.material:not(.cell-selection) .datatable-body-row:focus,.ngx-datatable.material:not(.cell-selection) .datatable-body-row:focus .datatable-row-group{background-color:#ddd}.ngx-datatable.material.cell-selection .datatable-body-cell:hover,.ngx-datatable.material.cell-selection .datatable-body-cell:hover .datatable-row-group{background-color:#eee;transition-property:background;transition-duration:.3s;transition-timing-function:linear}.ngx-datatable.material.cell-selection .datatable-body-cell:focus,.ngx-datatable.material.cell-selection .datatable-body-cell:focus .datatable-row-group{background-color:#ddd}.ngx-datatable.material.cell-selection .datatable-body-cell.active,.ngx-datatable.material.cell-selection .datatable-body-cell.active .datatable-row-group{background-color:#304ffe;color:#fff}.ngx-datatable.material.cell-selection .datatable-body-cell.active:hover,.ngx-datatable.material.cell-selection .datatable-body-cell.active:hover .datatable-row-group{background-color:#193ae4;color:#fff}.ngx-datatable.material.cell-selection .datatable-body-cell.active:focus,.ngx-datatable.material.cell-selection .datatable-body-cell.active:focus .datatable-row-group{background-color:#2041ef;color:#fff}.ngx-datatable.material .empty-row{height:50px;text-align:left;padding:.5rem 1.2rem;vertical-align:top;border-top:0}.ngx-datatable.material .loading-row{text-align:left;padding:.5rem 1.2rem;vertical-align:top;border-top:0}.ngx-datatable.material .datatable-body .datatable-row-left,.ngx-datatable.material .datatable-header .datatable-row-left{background-color:#fff;background-position:100% 0;background-repeat:repeat-y;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAFklEQVQIHWPSkNeSBmJhTQVtbiDNCgASagIIuJX8OgAAAABJRU5ErkJggg==)}.ngx-datatable.material .datatable-body .datatable-row-right,.ngx-datatable.material .datatable-header .datatable-row-right{background-position:0 0;background-color:#fff;background-repeat:repeat-y;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAFklEQVQI12PQkNdi1VTQ5gbSwkAsDQARLAIGtOSFUAAAAABJRU5ErkJggg==)}.ngx-datatable.material .datatable-header{border-bottom:1px solid rgba(0,0,0,.12)}.ngx-datatable.material .datatable-header .datatable-header-cell{text-align:left;padding:.9rem 1.2rem;background-color:#fff;color:rgba(0,0,0,.54);vertical-align:bottom;font-size:12px;font-weight:500}.ngx-datatable.material .datatable-header .datatable-header-cell .datatable-header-cell-wrapper{position:relative}.ngx-datatable.material .datatable-header .datatable-header-cell.longpress .draggable::after{transition:transform .4s,opacity .4s;opacity:.5;transform:scale(1)}.ngx-datatable.material .datatable-header .datatable-header-cell .draggable::after{content:' ';position:absolute;top:50%;left:50%;margin:-30px 0 0 -30px;height:60px;width:60px;background:#eee;border-radius:100%;opacity:1;-webkit-filter:none;filter:none;transform:scale(0);z-index:9999;pointer-events:none}.ngx-datatable.material .datatable-header .datatable-header-cell.dragging .resize-handle{border-right:none}.ngx-datatable.material .datatable-header .resize-handle{border-right:1px solid #eee}.ngx-datatable.material .datatable-body .datatable-row-detail{background:#f5f5f5;padding:10px}.ngx-datatable.material .datatable-body .datatable-group-header{background:#f5f5f5;border-bottom:1px solid #d9d8d9;border-top:1px solid #d9d8d9}.ngx-datatable.material .datatable-body .datatable-body-row .datatable-body-cell,.ngx-datatable.material .datatable-body .datatable-body-row .datatable-body-group-cell{text-align:left;padding:.9rem 1.2rem;vertical-align:top;border-top:0;color:rgba(0,0,0,.87);transition:width .3s;font-size:14px;font-weight:400}.ngx-datatable.material .datatable-body .progress-linear{display:block;width:100%;height:5px;padding:0;margin:0;position:absolute}.ngx-datatable.material .datatable-body .progress-linear .container{display:block;position:relative;overflow:hidden;width:100%;height:5px;transform:translate(0,0) scale(1,1);background-color:#aad1f9}.ngx-datatable.material .datatable-body .progress-linear .container .bar{transition:transform .2s linear;-webkit-animation:.8s cubic-bezier(.39,.575,.565,1) infinite query;animation:.8s cubic-bezier(.39,.575,.565,1) infinite query;background-color:#106cc8;position:absolute;left:0;top:0;bottom:0;width:100%;height:5px}.ngx-datatable.material .datatable-footer{border-top:1px solid rgba(0,0,0,.12);font-size:12px;font-weight:400;color:rgba(0,0,0,.54)}.ngx-datatable.material .datatable-footer .page-count{line-height:50px;height:50px;padding:0 1.2rem}.ngx-datatable.material .datatable-footer .datatable-pager{margin:0 10px}.ngx-datatable.material .datatable-footer .datatable-pager li{vertical-align:middle}.ngx-datatable.material .datatable-footer .datatable-pager li.disabled a{color:rgba(0,0,0,.26)!important;background-color:transparent!important}.ngx-datatable.material .datatable-footer .datatable-pager li.active a{background-color:rgba(158,158,158,.2);font-weight:700}.ngx-datatable.material .datatable-footer .datatable-pager a{height:22px;min-width:24px;line-height:22px;padding:0 6px;border-radius:3px;margin:6px 3px;text-align:center;color:rgba(0,0,0,.54);text-decoration:none;vertical-align:bottom}.ngx-datatable.material .datatable-footer .datatable-pager a:hover{color:rgba(0,0,0,.75);background-color:rgba(158,158,158,.2)}.ngx-datatable.material .datatable-footer .datatable-pager .datatable-icon-left,.ngx-datatable.material .datatable-footer .datatable-pager .datatable-icon-prev,.ngx-datatable.material .datatable-footer .datatable-pager .datatable-icon-right,.ngx-datatable.material .datatable-footer .datatable-pager .datatable-icon-skip{font-size:20px;line-height:20px;padding:0 3px}.ngx-datatable.material .datatable-summary-row .datatable-body-row,.ngx-datatable.material .datatable-summary-row .datatable-body-row:hover{background-color:#ddd}.ngx-datatable.material .datatable-summary-row .datatable-body-row .datatable-body-cell{font-weight:700}.datatable-checkbox{position:relative;margin:0;cursor:pointer;vertical-align:middle;display:inline-block;box-sizing:border-box;padding:0}.datatable-checkbox input[type=checkbox]{position:relative;margin:0 1rem 0 0;cursor:pointer;outline:0}.datatable-checkbox input[type=checkbox]:before{transition:.3s ease-in-out;content:'';position:absolute;left:0;z-index:1;width:1rem;height:1rem;border:2px solid #f2f2f2}.datatable-checkbox input[type=checkbox]:checked:before{transform:rotate(-45deg);height:.5rem;border-color:#009688;border-top-style:none;border-right-style:none}.datatable-checkbox input[type=checkbox]:after{content:'';position:absolute;top:0;left:0;width:1rem;height:1rem;background:#fff;cursor:pointer}@-webkit-keyframes query{0%{opacity:1;transform:translateX(35%) scale(.3,1)}100%{opacity:0;transform:translateX(-50%) scale(0,1)}}@keyframes query{0%{opacity:1;transform:translateX(35%) scale(.3,1)}100%{opacity:0;transform:translateX(-50%) scale(0,1)}}.ngx-datatable.bootstrap{box-shadow:none;font-size:13px}.ngx-datatable.bootstrap .datatable-header{height:unset!important}.ngx-datatable.bootstrap .datatable-header .datatable-header-cell{vertical-align:bottom;padding:.75rem;border-bottom:1px solid #d1d4d7}.ngx-datatable.bootstrap .datatable-header .datatable-header-cell .datatable-header-cell-label{line-height:24px}.ngx-datatable.bootstrap .datatable-body .datatable-body-row{vertical-align:top;border-top:1px solid #d1d4d7}.ngx-datatable.bootstrap .datatable-body .datatable-body-row.datatable-row-even{background-color:rgba(0,0,0,.05)}.ngx-datatable.bootstrap .datatable-body .datatable-body-row.active{background-color:#1483ff;color:#fff}.ngx-datatable.bootstrap .datatable-body .datatable-body-row .datatable-body-cell{padding:.75rem;text-align:left;vertical-align:top}.ngx-datatable.bootstrap .datatable-body .empty-row{position:relative;padding:.75rem 1.25rem;margin-bottom:0}.ngx-datatable.bootstrap .datatable-footer{background:#424242;color:#ededed;margin-top:-1px}.ngx-datatable.bootstrap .datatable-footer .page-count{line-height:50px;height:50px;padding:0 1.2rem}.ngx-datatable.bootstrap .datatable-footer .datatable-pager{margin:0 10px;vertical-align:top}.ngx-datatable.bootstrap .datatable-footer .datatable-pager ul li{margin:10px 0}.ngx-datatable.bootstrap .datatable-footer .datatable-pager ul li:not(.disabled).active a,.ngx-datatable.bootstrap .datatable-footer .datatable-pager ul li:not(.disabled):hover a{background-color:#545454;font-weight:700}.ngx-datatable.bootstrap .datatable-footer .datatable-pager a{height:22px;min-width:24px;line-height:22px;padding:0;border-radius:3px;margin:0 3px;text-align:center;text-decoration:none;vertical-align:bottom;color:#ededed}.ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-left,.ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-prev,.ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-right,.ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-skip{font-size:18px;line-height:27px;padding:0 3px}.ngx-datatable.bootstrap .datatable-summary-row .datatable-body-row .datatable-body-cell{font-weight:700}.ngx-datatable.dark{box-shadow:none;background:#1b1e27;border:1px solid #2f3646;color:#fff;font-size:13px}.ngx-datatable.dark .datatable-header{background:#181b24;color:#72809b}.ngx-datatable.dark .datatable-header .datatable-header-cell{text-align:left;padding:.5rem 1.2rem;font-weight:700}.ngx-datatable.dark .datatable-header .datatable-header-cell .datatable-header-cell-label{line-height:24px}.ngx-datatable.dark .datatable-body{background:#1a1e28}.ngx-datatable.dark .datatable-body .datatable-body-row{border-top:1px solid #2f3646}.ngx-datatable.dark .datatable-body .datatable-body-row .datatable-body-cell{text-align:left;padding:.5rem 1.2rem;vertical-align:top}.ngx-datatable.dark .datatable-body .datatable-body-row:hover{background:#171b24;transition-property:background;transition-duration:.3s;transition-timing-function:linear}.ngx-datatable.dark .datatable-body .datatable-body-row:focus{background-color:#232837}.ngx-datatable.dark .datatable-body .datatable-body-row.active{background-color:#1483ff;color:#fff}.ngx-datatable.dark .datatable-footer{background:#232837;color:#72809b;margin-top:-1px}.ngx-datatable.dark .datatable-footer .page-count{line-height:50px;height:50px;padding:0 1.2rem}.ngx-datatable.dark .datatable-footer .datatable-pager{margin:0 10px;vertical-align:top}.ngx-datatable.dark .datatable-footer .datatable-pager ul li{margin:10px 0}.ngx-datatable.dark .datatable-footer .datatable-pager ul li:not(.disabled).active a,.ngx-datatable.dark .datatable-footer .datatable-pager ul li:not(.disabled):hover a{background-color:#455066;font-weight:700}.ngx-datatable.dark .datatable-footer .datatable-pager a{height:22px;min-width:24px;line-height:22px;padding:0;border-radius:3px;margin:0 3px;text-align:center;text-decoration:none;vertical-align:bottom;color:#72809b}.ngx-datatable.dark .datatable-footer .datatable-pager .datatable-icon-left,.ngx-datatable.dark .datatable-footer .datatable-pager .datatable-icon-prev,.ngx-datatable.dark .datatable-footer .datatable-pager .datatable-icon-right,.ngx-datatable.dark .datatable-footer .datatable-pager .datatable-icon-skip{font-size:18px;line-height:27px;padding:0 3px}.ngx-datatable.dark .datatable-summary-row .datatable-body-row,.ngx-datatable.dark .datatable-summary-row .datatable-body-row:hover{background-color:#14171f}.ngx-datatable.dark .datatable-summary-row .datatable-body-row .datatable-body-cell{font-weight:700}.ngx-datatable.ngxa{box-shadow:none;font-size:13px}.ngx-datatable.ngxa .datatable-header{height:unset!important}.ngx-datatable.ngxa .datatable-header .datatable-header-cell{vertical-align:bottom;padding:.75rem;border-bottom:1px solid #d1d4d7}.ngx-datatable.ngxa .datatable-header .datatable-header-cell .datatable-header-cell-label{line-height:24px}.ngx-datatable.ngxa .datatable-header .datatable-header-cell .datatable-checkbox input[type=checkbox]:checked:before{transform:rotate(-45deg);height:.5rem;border-color:#36f;border-top-style:none;border-right-style:none}.ngx-datatable.ngxa .datatable-header .datatable-row-left{background-color:#fff;background-position:100% 0;background-repeat:repeat-y;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAFklEQVQIHWPSkNeSBmJhTQVtbiDNCgASagIIuJX8OgAAAABJRU5ErkJggg==)}.ngx-datatable.ngxa .datatable-header .datatable-row-right{background-color:#fff;background-position:0 0;background-repeat:repeat-y;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAFklEQVQI12PQkNdi1VTQ5gbSwkAsDQARLAIGtOSFUAAAAABJRU5ErkJggg==)}.ngx-datatable.ngxa .datatable-body .datatable-body-row{vertical-align:top}.ngx-datatable.ngxa .datatable-body .datatable-body-row.datatable-row-even,.ngx-datatable.ngxa .datatable-body .datatable-body-row.datatable-row-even .datatable-row-left,.ngx-datatable.ngxa .datatable-body .datatable-body-row.datatable-row-even .datatable-row-right{background-color:#f2f2f2}.ngx-datatable.ngxa .datatable-body .datatable-body-row.datatable-row-odd .datatable-row-left,.ngx-datatable.ngxa .datatable-body .datatable-body-row.datatable-row-odd .datatable-row-right{background-color:#fff}.ngx-datatable.ngxa .datatable-body .datatable-body-row .datatable-row-left{background-position:100% 0;background-repeat:repeat-y;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAFklEQVQIHWPSkNeSBmJhTQVtbiDNCgASagIIuJX8OgAAAABJRU5ErkJggg==)}.ngx-datatable.ngxa .datatable-body .datatable-body-row .datatable-row-right{background-position:0 0;background-repeat:repeat-y;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAFklEQVQI12PQkNdi1VTQ5gbSwkAsDQARLAIGtOSFUAAAAABJRU5ErkJggg==)}.ngx-datatable.ngxa .datatable-body .datatable-body-row.active{background-color:#36f;color:#fff}.ngx-datatable.ngxa .datatable-body .datatable-body-row.active .datatable-row-left,.ngx-datatable.ngxa .datatable-body .datatable-body-row.active .datatable-row-right{background-color:#36f}.ngx-datatable.ngxa .datatable-body .datatable-body-row:hover,.ngx-datatable.ngxa .datatable-body .datatable-body-row:hover .datatable-row-group{cursor:pointer;border-bottom:.025rem solid #7899ff;transition-property:background;transition-duration:.3s;transition-timing-function:linear}.ngx-datatable.ngxa .datatable-body .datatable-body-row .datatable-body-cell{padding:.75rem;text-align:left;vertical-align:top}.ngx-datatable.ngxa .datatable-body .datatable-body-row .datatable-body-cell .datatable-checkbox input[type=checkbox]:checked:before{transform:rotate(-45deg);height:.5rem;border-color:#36f;border-top-style:none;border-right-style:none}.ngx-datatable.ngxa .datatable-body .empty-row{position:relative;padding:.75rem 1.25rem;margin-bottom:0}.ngx-datatable.ngxa .datatable-body .progress-linear{display:block;width:100%;height:5px;padding:0;margin:0;position:absolute}.ngx-datatable.ngxa .datatable-body .progress-linear .container{display:block;position:relative;overflow:hidden;width:100%;height:5px;transform:translate(0,0) scale(1,1);background-color:#aad1f9}.ngx-datatable.ngxa .datatable-body .progress-linear .container .bar{transition:transform .2s linear;-webkit-animation:.8s cubic-bezier(.39,.575,.565,1) infinite query;animation:.8s cubic-bezier(.39,.575,.565,1) infinite query;background-color:#106cc8;position:absolute;left:0;top:0;bottom:0;width:100%;height:5px}.ngx-datatable.ngxa .datatable-footer{background:#f2f2f2;color:#5a5a5a;margin-top:-1px}.ngx-datatable.ngxa .datatable-footer .page-count{padding:.7rem}.ngx-datatable.ngxa .datatable-footer .datatable-pager{margin:0 10px;vertical-align:top}.ngx-datatable.ngxa .datatable-footer .datatable-pager ul li{margin:10px 0}.ngx-datatable.ngxa .datatable-footer .datatable-pager ul li:not(.disabled).active a,.ngx-datatable.ngxa .datatable-footer .datatable-pager ul li:not(.disabled):hover a{background-color:#c1c1c1;font-weight:700}.ngx-datatable.ngxa .datatable-footer .datatable-pager a{height:22px;min-width:24px;line-height:22px;padding:0;border-radius:3px;margin:0 3px;text-align:center;text-decoration:none;vertical-align:bottom;color:#5a5a5a}.ngx-datatable.ngxa .datatable-footer .datatable-pager .datatable-icon-left,.ngx-datatable.ngxa .datatable-footer .datatable-pager .datatable-icon-prev,.ngx-datatable.ngxa .datatable-footer .datatable-pager .datatable-icon-right,.ngx-datatable.ngxa .datatable-footer .datatable-pager .datatable-icon-skip{line-height:27px;padding:0 .2rem}.ngx-datatable.ngxa .datatable-summary-row .datatable-body-row .datatable-body-cell{font-weight:700}"]
            }] }
];
/** @nocollapse */
NgxaCerDatatableComponent.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] },
    { type: LayoutService },
    { type: Injector }
];
NgxaCerDatatableComponent.propDecorators = {
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
    column: [{ type: Input }],
    footer: [{ type: Input }],
    api: [{ type: Input }],
    startWithOpenData: [{ type: Input }],
    filterEvent: [{ type: Input }],
    formGroupFilter: [{ type: Input }],
    buttonCell: [{ type: Output }],
    select: [{ type: Output }],
    activate: [{ type: Output }],
    datatable: [{ type: ViewChild, args: ['datatable', { static: false },] }],
    filterFn: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NgxaCerDatatableComponent.prototype.rows;
    /** @type {?} */
    NgxaCerDatatableComponent.prototype.columns;
    /** @type {?} */
    NgxaCerDatatableComponent.prototype.filters;
    /** @type {?} */
    NgxaCerDatatableComponent.prototype.selected;
    /** @type {?} */
    NgxaCerDatatableComponent.prototype.limit;
    /** @type {?} */
    NgxaCerDatatableComponent.prototype.count;
    /** @type {?} */
    NgxaCerDatatableComponent.prototype.offset;
    /** @type {?} */
    NgxaCerDatatableComponent.prototype.externalPaging;
    /** @type {?} */
    NgxaCerDatatableComponent.prototype.externalSorting;
    /** @type {?} */
    NgxaCerDatatableComponent.prototype.loadingIndicator;
    /** @type {?} */
    NgxaCerDatatableComponent.prototype.scrollbarH;
    /** @type {?} */
    NgxaCerDatatableComponent.prototype.scrollbarV;
    /** @type {?} */
    NgxaCerDatatableComponent.prototype.reorderable;
    /** @type {?} */
    NgxaCerDatatableComponent.prototype.sortType;
    /** @type {?} */
    NgxaCerDatatableComponent.prototype.messages;
    /** @type {?} */
    NgxaCerDatatableComponent.prototype.selectionType;
    /** @type {?} */
    NgxaCerDatatableComponent.prototype.columnMode;
    /** @type {?} */
    NgxaCerDatatableComponent.prototype.headerHeight;
    /** @type {?} */
    NgxaCerDatatableComponent.prototype.footerHeight;
    /** @type {?} */
    NgxaCerDatatableComponent.prototype.rowHeight;
    /** @type {?} */
    NgxaCerDatatableComponent.prototype.column;
    /** @type {?} */
    NgxaCerDatatableComponent.prototype.footer;
    /** @type {?} */
    NgxaCerDatatableComponent.prototype.api;
    /** @type {?} */
    NgxaCerDatatableComponent.prototype.startWithOpenData;
    /** @type {?} */
    NgxaCerDatatableComponent.prototype.filterEvent;
    /** @type {?} */
    NgxaCerDatatableComponent.prototype.formGroupFilter;
    /** @type {?} */
    NgxaCerDatatableComponent.prototype.buttonCell;
    /** @type {?} */
    NgxaCerDatatableComponent.prototype.select;
    /** @type {?} */
    NgxaCerDatatableComponent.prototype.activate;
    /** @type {?} */
    NgxaCerDatatableComponent.prototype.datatable;
    /** @type {?} */
    NgxaCerDatatableComponent.prototype.keywordParam;
    /** @type {?} */
    NgxaCerDatatableComponent.prototype._keyword;
    /**
     * @type {?}
     * @protected
     */
    NgxaCerDatatableComponent.prototype.http;
    /**
     * @type {?}
     * @private
     */
    NgxaCerDatatableComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NgxaCerDatatableComponent.prototype.cdref;
    /**
     * @type {?}
     * @private
     */
    NgxaCerDatatableComponent.prototype.sort;
    /**
     * @type {?}
     * @private
     */
    NgxaCerDatatableComponent.prototype.pageOffset;
    /** @type {?} */
    NgxaCerDatatableComponent.prototype.locale;
    /**
     * @type {?}
     * @private
     */
    NgxaCerDatatableComponent.prototype.layout;
    /** @type {?} */
    NgxaCerDatatableComponent.prototype.injector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4YS1jZXItZGF0YXRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B4YXBoaXJhL25neGEtY2VyLyIsInNvdXJjZXMiOlsibGliL2Rhc2hib2FyZC9tb25pdG9yaW5nL2RldGFpbC9kYXRhdGFibGUvbmd4YS1jZXItZGF0YXRhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsaUJBQWlCLEVBQ2pCLE1BQU0sRUFDTixTQUFTLEVBQ1QsUUFBUSxFQUNSLE1BQU0sRUFDTixZQUFZLEVBR1osaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCx1QkFBdUIsR0FDeEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsVUFBVSxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUVsRyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDcEQsT0FBTyxFQUFzQixZQUFZLEVBQWlCLE1BQU0saUJBQWlCLENBQUM7QUFDbEYsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBUzNDLE1BQU0sT0FBTyx5QkFBeUI7Ozs7OztJQThDcEMsWUFBc0MsTUFBYyxFQUMxQyxNQUFxQixFQUN0QixRQUFrQjtRQUZXLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDMUMsV0FBTSxHQUFOLE1BQU0sQ0FBZTtRQUN0QixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBL0NsQixTQUFJLEdBQVUsRUFBRSxDQUFDO1FBQ2pCLFlBQU8sR0FBc0IsRUFBRSxDQUFDO1FBQ2hDLFlBQU8sR0FBc0IsRUFBRSxDQUFDO1FBQ2hDLGFBQVEsR0FBVSxFQUFFLENBQUM7UUFDckIsVUFBSyxHQUF1QixFQUFFLENBQUM7UUFDL0IsVUFBSyxHQUFXLENBQUMsQ0FBQztRQUNsQixXQUFNLEdBQVcsQ0FBQyxDQUFDO1FBQ25CLG1CQUFjLEdBQVksS0FBSyxDQUFDO1FBQ2hDLG9CQUFlLEdBQVksS0FBSyxDQUFDO1FBQ2pDLHFCQUFnQixHQUFZLEtBQUssQ0FBQztRQUNsQyxlQUFVLEdBQVksSUFBSSxDQUFDO1FBQzNCLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFDNUIsZ0JBQVcsR0FBWSxJQUFJLENBQUM7UUFDNUIsYUFBUSxHQUFhLFFBQVEsQ0FBQyxNQUFNLENBQUM7UUFHckMsZUFBVSxHQUFlLFVBQVUsQ0FBQyxLQUFLLENBQUM7UUFDMUMsaUJBQVksR0FBUSxFQUFFLENBQUM7UUFDdkIsaUJBQVksR0FBUSxNQUFNLENBQUM7UUFDM0IsY0FBUyxHQUE4QyxNQUFNLENBQUM7UUFDOUQsV0FBTSxHQUFZLElBQUksQ0FBQztRQUN2QixXQUFNLEdBQVksSUFBSSxDQUFDO1FBRXZCLHNCQUFpQixHQUFZLElBQUksQ0FBQztRQUNsQyxnQkFBVyxHQUFZLEtBQUssQ0FBQztRQUU1QixlQUFVLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFDeEQsV0FBTSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3BELGFBQVEsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQVl4RCxhQUFRLEdBQWlCLElBQUksT0FBTyxFQUFPLENBQUM7UUFHNUMsZUFBVSxHQUFXLENBQUMsQ0FBQztRQUszQixJQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDakQsQ0FBQzs7Ozs7SUFwQkQsSUFBYSxRQUFRLENBQUMsT0FBZ0I7UUFDcEMsSUFBSSxDQUFDLFlBQVksR0FBRyxPQUFPLENBQUM7UUFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7UUFDeEIsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDZixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNsQixDQUFDOzs7O0lBaUJELFFBQVE7UUFDTixJQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtZQUMxQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDZDtRQUNELElBQUksQ0FBQyxNQUFNLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVM7OztRQUFDLEdBQUcsRUFBRTtZQUN2RSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQzdCLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDN0IsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUM5QixDQUFDOzs7O0lBRUQsS0FBSztRQUNILElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNaLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1lBQzNCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1lBQzVCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxTQUFTOzs7O1lBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ2pDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO2dCQUNqQixJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQzdCLENBQUMsRUFBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxLQUFVO1FBQ2YsSUFBSSxLQUFLLEVBQUU7WUFDVCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUM5QixLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU87Ozs7Z0JBQUMsSUFBSSxDQUFDLEVBQUU7b0JBQ3pCLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEtBQUssRUFBRTt3QkFDekIsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLEdBQUcsRUFBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFDLENBQUM7cUJBQ3JDO3lCQUFNO3dCQUNMLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxJQUFJLEVBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBQyxDQUFDO3FCQUN0QztnQkFDSCxDQUFDLEVBQUMsQ0FBQzthQUNKO1NBQ0Y7UUFDRCxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDZixDQUFDOzs7OztJQUVELFFBQVEsQ0FBQyxRQUFhO1FBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzdCLENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFDLEtBQVU7UUFDbkIsSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLE9BQU8sRUFBRTtZQUMxQixJQUFJLElBQUksQ0FBQyxhQUFhLEtBQUssVUFBVSxFQUFFO2dCQUNyQyxJQUFJLEtBQUssQ0FBQyxTQUFTLEdBQUcsQ0FBQyxFQUFFO29CQUN2QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQy9CO2FBQ0Y7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQy9CO1NBQ0Y7SUFDSCxDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxJQUFVO1FBQ2hCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzNDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNmLENBQUM7Ozs7O0lBRUQsY0FBYyxDQUFDLEtBQVU7UUFDdkIsT0FBTyxLQUFLLEtBQUssSUFBSSxJQUFJLEtBQUssS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUMvRSxDQUFDOzs7OztJQUVELFNBQVMsQ0FBQyxJQUFZO1FBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2pCLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7Ozs7SUFFRCxhQUFhLENBQUMsS0FBSztRQUNqQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7OztJQUVPLFVBQVU7O2NBQ1YsSUFBSSxHQUFRO1lBQ2hCLE1BQU0sRUFBRSxJQUFJLENBQUMsVUFBVTtZQUN2QixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsT0FBTyxFQUFHLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSTtTQUNqQjtRQUNELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7UUFDN0IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQzthQUN2QyxJQUFJLENBQ0gsR0FBRzs7OztRQUFDLENBQUMsUUFBYSxFQUFFLEVBQUU7WUFDcEIsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQzFDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7WUFDOUIsT0FBTyxDQUFDLG1CQUFRLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBQSxDQUFDLENBQUM7UUFDcEMsQ0FBQyxFQUFDLEVBQ0YsVUFBVTs7O1FBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztZQUM5QixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztZQUNmLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2hCLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDVixDQUFDOzs7WUE5SkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBRTVCLGdySEFBa0Q7Z0JBQ2xELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7YUFDaEQ7Ozs7eUNBK0NjLE1BQU0sU0FBQyxTQUFTO1lBekR0QixhQUFhO1lBYnBCLFFBQVE7OzttQkF5QlAsS0FBSztzQkFDTCxLQUFLO3NCQUNMLEtBQUs7dUJBQ0wsS0FBSztvQkFDTCxLQUFLO29CQUNMLEtBQUs7cUJBQ0wsS0FBSzs2QkFDTCxLQUFLOzhCQUNMLEtBQUs7K0JBQ0wsS0FBSzt5QkFDTCxLQUFLO3lCQUNMLEtBQUs7MEJBQ0wsS0FBSzt1QkFDTCxLQUFLO3VCQUNMLEtBQUs7NEJBQ0wsS0FBSzt5QkFDTCxLQUFLOzJCQUNMLEtBQUs7MkJBQ0wsS0FBSzt3QkFDTCxLQUFLO3FCQUNMLEtBQUs7cUJBQ0wsS0FBSztrQkFDTCxLQUFLO2dDQUNMLEtBQUs7MEJBQ0wsS0FBSzs4QkFDTCxLQUFLO3lCQUNMLE1BQU07cUJBQ04sTUFBTTt1QkFDTixNQUFNO3dCQUNOLFNBQVMsU0FBQyxXQUFXLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDO3VCQUN0QyxLQUFLOzs7O0lBOUJOLHlDQUEwQjs7SUFDMUIsNENBQXlDOztJQUN6Qyw0Q0FBeUM7O0lBQ3pDLDZDQUE4Qjs7SUFDOUIsMENBQXdDOztJQUN4QywwQ0FBMkI7O0lBQzNCLDJDQUE0Qjs7SUFDNUIsbURBQXlDOztJQUN6QyxvREFBMEM7O0lBQzFDLHFEQUEyQzs7SUFDM0MsK0NBQW9DOztJQUNwQywrQ0FBcUM7O0lBQ3JDLGdEQUFxQzs7SUFDckMsNkNBQThDOztJQUM5Qyw2Q0FBdUI7O0lBQ3ZCLGtEQUFzQzs7SUFDdEMsK0NBQW1EOztJQUNuRCxpREFBZ0M7O0lBQ2hDLGlEQUFvQzs7SUFDcEMsOENBQXVFOztJQUN2RSwyQ0FBZ0M7O0lBQ2hDLDJDQUFnQzs7SUFDaEMsd0NBQTRCOztJQUM1QixzREFBMkM7O0lBQzNDLGdEQUFzQzs7SUFDdEMsb0RBQW9DOztJQUNwQywrQ0FBa0U7O0lBQ2xFLDJDQUE4RDs7SUFDOUQsNkNBQWdFOztJQUNoRSw4Q0FBdUU7O0lBUXZFLGlEQUE2Qjs7SUFDN0IsNkNBQXlCOzs7OztJQUN6Qix5Q0FBbUM7Ozs7O0lBQ25DLDZDQUFvRDs7Ozs7SUFDcEQsMENBQWlDOzs7OztJQUNqQyx5Q0FBbUI7Ozs7O0lBQ25CLCtDQUErQjs7SUFFbkIsMkNBQXdDOzs7OztJQUNsRCwyQ0FBNkI7O0lBQzdCLDZDQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBJbmplY3QsXG4gIExPQ0FMRV9JRCxcbiAgSW5qZWN0b3IsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIFZpZXdDaGlsZCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENvbHVtbk1vZGUsIFNlbGVjdGlvblR5cGUsIFNvcnRUeXBlLCBEYXRhdGFibGVDb21wb25lbnQgfSBmcm9tICdAc3dpbWxhbmUvbmd4LWRhdGF0YWJsZSc7XG5pbXBvcnQgeyBEYXRhdGFibGVDb2x1bW4sIFBhZ2UsIERhdGF0YWJsZUZpbHRlciwgS2V5d29yZCwgU29ydCB9IGZyb20gJ0B4YXBoaXJhL25neGEtY29tbW9uJztcbmltcG9ydCB7IExheW91dFNlcnZpY2UgfSBmcm9tICdAeGFwaGlyYS9uZ3hhLXRoZW1lJztcbmltcG9ydCB7IEh0dHBGYWN0b3J5U2VydmljZSwgSFRUUF9TRVJWSUNFLCBIdHRwQmFzZU1vZGVsIH0gZnJvbSAnQHhhcGhpcmEvc2hhcmVkJztcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAneGEtY2VyLWRhdGF0YWJsZScsXG4gIHN0eWxlVXJsczogWycuL25neGEtY2VyLWRhdGF0YWJsZS5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vbmd4YS1jZXItZGF0YXRhYmxlLmNvbXBvbmVudC5odG1sJyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE5neGFDZXJEYXRhdGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIHJvd3M6IGFueVtdID0gW107XG4gIEBJbnB1dCgpIGNvbHVtbnM6IERhdGF0YWJsZUNvbHVtbltdID0gW107XG4gIEBJbnB1dCgpIGZpbHRlcnM6IERhdGF0YWJsZUZpbHRlcltdID0gW107XG4gIEBJbnB1dCgpIHNlbGVjdGVkOiBhbnlbXSA9IFtdO1xuICBASW5wdXQoKSBsaW1pdDogbnVtYmVyIHwgdW5kZWZpbmVkID0gMTA7XG4gIEBJbnB1dCgpIGNvdW50OiBudW1iZXIgPSAwO1xuICBASW5wdXQoKSBvZmZzZXQ6IG51bWJlciA9IDA7XG4gIEBJbnB1dCgpIGV4dGVybmFsUGFnaW5nOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGV4dGVybmFsU29ydGluZzogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBsb2FkaW5nSW5kaWNhdG9yOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIHNjcm9sbGJhckg6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBzY3JvbGxiYXJWOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIHJlb3JkZXJhYmxlOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgc29ydFR5cGU6IFNvcnRUeXBlID0gU29ydFR5cGUuc2luZ2xlO1xuICBASW5wdXQoKSBtZXNzYWdlczogYW55O1xuICBASW5wdXQoKSBzZWxlY3Rpb25UeXBlOiBTZWxlY3Rpb25UeXBlO1xuICBASW5wdXQoKSBjb2x1bW5Nb2RlOiBDb2x1bW5Nb2RlID0gQ29sdW1uTW9kZS5mb3JjZTtcbiAgQElucHV0KCkgaGVhZGVySGVpZ2h0OiBhbnkgPSA0MDtcbiAgQElucHV0KCkgZm9vdGVySGVpZ2h0OiBhbnkgPSAnYXV0byc7XG4gIEBJbnB1dCgpIHJvd0hlaWdodDogbnVtYmVyIHwgJ2F1dG8nIHwgKChyb3c/OiBhbnkpID0+IG51bWJlcikgPSAnYXV0byc7XG4gIEBJbnB1dCgpIGNvbHVtbjogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIGZvb3RlcjogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIGFwaTogSHR0cEJhc2VNb2RlbDtcbiAgQElucHV0KCkgc3RhcnRXaXRoT3BlbkRhdGE6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBmaWx0ZXJFdmVudDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBmb3JtR3JvdXBGaWx0ZXI6IEZvcm1Hcm91cDtcbiAgQE91dHB1dCgpIGJ1dHRvbkNlbGw6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBzZWxlY3Q6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBhY3RpdmF0ZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQFZpZXdDaGlsZCgnZGF0YXRhYmxlJywge3N0YXRpYzogZmFsc2V9KSBkYXRhdGFibGU6IERhdGF0YWJsZUNvbXBvbmVudDtcbiAgQElucHV0KCkgc2V0IGZpbHRlckZuKGtleXdvcmQ6IEtleXdvcmQpIHtcbiAgICB0aGlzLmtleXdvcmRQYXJhbSA9IGtleXdvcmQ7XG4gICAgdGhpcy5fa2V5d29yZCA9IGtleXdvcmQ7XG4gICAgdGhpcy5jb3VudCA9IDA7XG4gICAgdGhpcy5vZmZzZXQgPSAwO1xuICB9XG5cbiAgcHVibGljIGtleXdvcmRQYXJhbTogS2V5d29yZDtcbiAgcHVibGljIF9rZXl3b3JkOiBLZXl3b3JkO1xuICBwcm90ZWN0ZWQgaHR0cDogSHR0cEZhY3RvcnlTZXJ2aWNlO1xuICBwcml2YXRlIGRlc3Ryb3kkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdDxhbnk+KCk7XG4gIHByaXZhdGUgY2RyZWY6IENoYW5nZURldGVjdG9yUmVmO1xuICBwcml2YXRlIHNvcnQ6IFNvcnQ7XG4gIHByaXZhdGUgcGFnZU9mZnNldDogbnVtYmVyID0gMDtcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KExPQ0FMRV9JRCkgcHVibGljIGxvY2FsZTogc3RyaW5nLFxuICAgIHByaXZhdGUgbGF5b3V0OiBMYXlvdXRTZXJ2aWNlLFxuICAgIHB1YmxpYyBpbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgICAgIHRoaXMuaHR0cCA9IGluamVjdG9yLmdldChIVFRQX1NFUlZJQ0UpO1xuICAgICAgdGhpcy5jZHJlZiA9IGluamVjdG9yLmdldChDaGFuZ2VEZXRlY3RvclJlZik7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zdGFydFdpdGhPcGVuRGF0YSkge1xuICAgICAgdGhpcy5mZXRjaCgpO1xuICAgIH1cbiAgICB0aGlzLmxheW91dC5vbkNoYW5nZUxheW91dFNpemUoKS50YWtlVW50aWwodGhpcy5kZXN0cm95JCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuZGF0YXRhYmxlLnJlY2FsY3VsYXRlKCk7XG4gICAgICB0aGlzLmNkcmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCh0cnVlKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gICAgdGhpcy5kZXN0cm95JC51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgZmV0Y2goKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuYXBpKSB7XG4gICAgICB0aGlzLmV4dGVybmFsUGFnaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuZXh0ZXJuYWxTb3J0aW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuZ2V0UmVxdWVzdCgpLnN1YnNjcmliZShyb3dzID0+IHtcbiAgICAgICAgdGhpcy5yb3dzID0gcm93cztcbiAgICAgICAgdGhpcy5jZHJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBvblNvcnQob3JkZXI6IGFueSk6IHZvaWQge1xuICAgIGlmIChvcmRlcikge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkob3JkZXIuc29ydHMpKSB7XG4gICAgICAgIG9yZGVyLnNvcnRzLmZvckVhY2goc29ydCA9PiB7XG4gICAgICAgICAgaWYgKHNvcnRbJ2RpciddID09PSAnYXNjJykge1xuICAgICAgICAgICAgdGhpcy5zb3J0ID0geyBhc2MgOiBbc29ydFsncHJvcCddXX07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc29ydCA9IHsgZGVzYyA6IFtzb3J0Wydwcm9wJ11dfTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmZldGNoKCk7XG4gIH1cblxuICBvblNlbGVjdChzZWxlY3RlZDogYW55KTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3QuZW1pdChzZWxlY3RlZCk7XG4gIH1cblxuICBvbkFjdGl2YXRlKGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICBpZiAoZXZlbnQudHlwZSA9PT0gJ2NsaWNrJykge1xuICAgICAgaWYgKHRoaXMuc2VsZWN0aW9uVHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgICBpZiAoZXZlbnQuY2VsbEluZGV4ID4gMCkge1xuICAgICAgICAgIHRoaXMuYWN0aXZhdGUuZW1pdChldmVudC5yb3cpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmFjdGl2YXRlLmVtaXQoZXZlbnQucm93KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzZXRQYWdlKHBhZ2U6IFBhZ2UpOiB2b2lkIHtcbiAgICB0aGlzLnBhZ2VPZmZzZXQgPSBwYWdlLm9mZnNldCAqIHRoaXMubGltaXQ7XG4gICAgdGhpcy5mZXRjaCgpO1xuICB9XG5cbiAgc2FuaXRpemVkVmFsdWUodmFsdWU6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHZhbHVlICE9PSBudWxsICYmIHZhbHVlICE9PSB1bmRlZmluZWQgPyB0aGlzLnN0cmlwSHRtbCh2YWx1ZSkgOiB2YWx1ZTtcbiAgfVxuXG4gIHN0cmlwSHRtbChodG1sOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmICghaHRtbC5yZXBsYWNlKSB7XG4gICAgICByZXR1cm4gaHRtbDtcbiAgICB9XG4gICAgcmV0dXJuIGh0bWwucmVwbGFjZSgvPFxcLz9bXj5dKyg+fCQpL2csICcnKTtcbiAgfVxuXG4gIG9uQ2xpY2tCdXR0b24oZXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLmJ1dHRvbkNlbGwuZW1pdChldmVudCk7XG4gIH1cblxuICBwcml2YXRlIGdldFJlcXVlc3QoKTogT2JzZXJ2YWJsZTxhbnlbXT4ge1xuICAgIGNvbnN0IGJvZHk6IGFueSA9IHtcbiAgICAgIG9mZnNldDogdGhpcy5wYWdlT2Zmc2V0LFxuICAgICAgbGltaXQ6IHRoaXMubGltaXQsXG4gICAgICBrZXl3b3JkIDogdGhpcy5fa2V5d29yZCxcbiAgICAgIG9yZGVyOiB0aGlzLnNvcnQsXG4gICAgfTtcbiAgICB0aGlzLmxvYWRpbmdJbmRpY2F0b3IgPSB0cnVlO1xuICAgIHJldHVybiB0aGlzLmh0dHAuSFRUUF9BVVRIKHRoaXMuYXBpLCBib2R5KVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgocmVzcG9uc2U6IGFueSkgPT4ge1xuICAgICAgICAgIHRoaXMuY291bnQgPSBOdW1iZXIocmVzcG9uc2UudG90YWxSZWNvcmQpO1xuICAgICAgICAgIHRoaXMubG9hZGluZ0luZGljYXRvciA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiAoPGFueVtdPiByZXNwb25zZVsnZGF0YSddKTtcbiAgICAgICAgfSksXG4gICAgICAgIGNhdGNoRXJyb3IoKCkgPT4ge1xuICAgICAgICAgIHRoaXMubG9hZGluZ0luZGljYXRvciA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuY291bnQgPSAwO1xuICAgICAgICAgIHJldHVybiBvZihbXSk7XG4gICAgICAgIH0pKTtcbiAgfVxuXG59XG4iXX0=