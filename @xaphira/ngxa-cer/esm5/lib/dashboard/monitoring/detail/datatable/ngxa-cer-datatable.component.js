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
var NgxaCerDatatableComponent = /** @class */ (function () {
    function NgxaCerDatatableComponent(locale, layout, injector) {
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
    Object.defineProperty(NgxaCerDatatableComponent.prototype, "filterFn", {
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
    /**
     * @return {?}
     */
    NgxaCerDatatableComponent.prototype.ngOnInit = /**
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
    NgxaCerDatatableComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next(true);
        this.destroy$.complete();
        this.destroy$.unsubscribe();
    };
    /**
     * @return {?}
     */
    NgxaCerDatatableComponent.prototype.fetch = /**
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
     * @param {?} order
     * @return {?}
     */
    NgxaCerDatatableComponent.prototype.onSort = /**
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
     * @param {?} selected
     * @return {?}
     */
    NgxaCerDatatableComponent.prototype.onSelect = /**
     * @param {?} selected
     * @return {?}
     */
    function (selected) {
        this.select.emit(selected);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NgxaCerDatatableComponent.prototype.onActivate = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
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
    };
    /**
     * @param {?} page
     * @return {?}
     */
    NgxaCerDatatableComponent.prototype.setPage = /**
     * @param {?} page
     * @return {?}
     */
    function (page) {
        this.pageOffset = page.offset * this.limit;
        this.fetch();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NgxaCerDatatableComponent.prototype.sanitizedValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value !== null && value !== undefined ? this.stripHtml(value) : value;
    };
    /**
     * @param {?} html
     * @return {?}
     */
    NgxaCerDatatableComponent.prototype.stripHtml = /**
     * @param {?} html
     * @return {?}
     */
    function (html) {
        if (!html.replace) {
            return html;
        }
        return html.replace(/<\/?[^>]+(>|$)/g, '');
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NgxaCerDatatableComponent.prototype.onClickButton = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.buttonCell.emit(event);
    };
    /**
     * @private
     * @return {?}
     */
    NgxaCerDatatableComponent.prototype.getRequest = /**
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
    NgxaCerDatatableComponent.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] },
        { type: LayoutService },
        { type: Injector }
    ]; };
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
    return NgxaCerDatatableComponent;
}());
export { NgxaCerDatatableComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4YS1jZXItZGF0YXRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B4YXBoaXJhL25neGEtY2VyLyIsInNvdXJjZXMiOlsibGliL2Rhc2hib2FyZC9tb25pdG9yaW5nL2RldGFpbC9kYXRhdGFibGUvbmd4YS1jZXItZGF0YXRhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsaUJBQWlCLEVBQ2pCLE1BQU0sRUFDTixTQUFTLEVBQ1QsUUFBUSxFQUNSLE1BQU0sRUFDTixZQUFZLEVBR1osaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCx1QkFBdUIsR0FDeEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsVUFBVSxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUVsRyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDcEQsT0FBTyxFQUFzQixZQUFZLEVBQWlCLE1BQU0saUJBQWlCLENBQUM7QUFDbEYsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDO0lBcURFLG1DQUFzQyxNQUFjLEVBQzFDLE1BQXFCLEVBQ3RCLFFBQWtCO1FBRlcsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUMxQyxXQUFNLEdBQU4sTUFBTSxDQUFlO1FBQ3RCLGFBQVEsR0FBUixRQUFRLENBQVU7UUEvQ2xCLFNBQUksR0FBVSxFQUFFLENBQUM7UUFDakIsWUFBTyxHQUFzQixFQUFFLENBQUM7UUFDaEMsWUFBTyxHQUFzQixFQUFFLENBQUM7UUFDaEMsYUFBUSxHQUFVLEVBQUUsQ0FBQztR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cEMseUNBQTBCOztJQUMxQiw0Q0FBeUM7O0lBQ3pDLDRDQUF5Qzs7SUFDekMsNkNBQThCOztJQUM5QiwwQ0FBd0M7O0lBQ3hDLDBDQUEyQjs7SUFDM0IsMkNBQTRCOztJQUM1QixtREFBeUM7O0lBQ3pDLG9EQUEwQzs7SUFDMUMscURBQTJDOztJQUMzQywrQ0FBb0M7O0lBQ3BDLCtDQUFxQzs7SUFDckMsZ0RBQXFDOztJQUNyQyw2Q0FBOEM7O0lBQzlDLDZDQUF1Qjs7SUFDdkIsa0RBQXNDOztJQUN0QywrQ0FBbUQ7O0lBQ25ELGlEQUFnQzs7SUFDaEMsaURBQW9DOztJQUNwQyw4Q0FBdUU7O0lBQ3ZFLDJDQUFnQzs7SUFDaEMsMkNBQWdDOztJQUNoQyx3Q0FBNEI7O0lBQzVCLHNEQUEyQzs7SUFDM0MsZ0RBQXNDOztJQUN0QyxvREFBb0M7O0lBQ3BDLCtDQUFrRTs7SUFDbEUsMkNBQThEOztJQUM5RCw2Q0FBZ0U7O0lBQ2hFLDhDQUF1RTs7SUFRdkUsaURBQTZCOztJQUM3Qiw2Q0FBeUI7Ozs7O0lBQ3pCLHlDQUFtQzs7Ozs7SUFDbkMsNkNBQW9EOzs7OztJQUNwRCwwQ0FBaUM7Ozs7O0lBQ2pDLHlDQUFtQjs7Ozs7SUFDbkIsK0NBQStCOztJQUVuQiwyQ0FBd0M7Ozs7O0lBQ2xELDJDQUE2Qjs7SUFDN0IsNkNBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIEluamVjdCxcbiAgTE9DQUxFX0lELFxuICBJbmplY3RvcixcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgVmlld0NoaWxkLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0LCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ29sdW1uTW9kZSwgU2VsZWN0aW9uVHlwZSwgU29ydFR5cGUsIERhdGF0YWJsZUNvbXBvbmVudCB9IGZyb20gJ0Bzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlJztcbmltcG9ydCB7IERhdGF0YWJsZUNvbHVtbiwgUGFnZSwgRGF0YXRhYmxlRmlsdGVyLCBLZXl3b3JkLCBTb3J0IH0gZnJvbSAnQHhhcGhpcmEvbmd4YS1jb21tb24nO1xuaW1wb3J0IHsgTGF5b3V0U2VydmljZSB9IGZyb20gJ0B4YXBoaXJhL25neGEtdGhlbWUnO1xuaW1wb3J0IHsgSHR0cEZhY3RvcnlTZXJ2aWNlLCBIVFRQX1NFUlZJQ0UsIEh0dHBCYXNlTW9kZWwgfSBmcm9tICdAeGFwaGlyYS9zaGFyZWQnO1xuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd4YS1jZXItZGF0YXRhYmxlJyxcbiAgc3R5bGVVcmxzOiBbJy4vbmd4YS1jZXItZGF0YXRhYmxlLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9uZ3hhLWNlci1kYXRhdGFibGUuY29tcG9uZW50Lmh0bWwnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTmd4YUNlckRhdGF0YWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgcm93czogYW55W10gPSBbXTtcbiAgQElucHV0KCkgY29sdW1uczogRGF0YXRhYmxlQ29sdW1uW10gPSBbXTtcbiAgQElucHV0KCkgZmlsdGVyczogRGF0YXRhYmxlRmlsdGVyW10gPSBbXTtcbiAgQElucHV0KCkgc2VsZWN0ZWQ6IGFueVtdID0gW107XG4gIEBJbnB1dCgpIGxpbWl0OiBudW1iZXIgfCB1bmRlZmluZWQgPSAxMDtcbiAgQElucHV0KCkgY291bnQ6IG51bWJlciA9IDA7XG4gIEBJbnB1dCgpIG9mZnNldDogbnVtYmVyID0gMDtcbiAgQElucHV0KCkgZXh0ZXJuYWxQYWdpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgZXh0ZXJuYWxTb3J0aW5nOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGxvYWRpbmdJbmRpY2F0b3I6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgc2Nyb2xsYmFySDogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIHNjcm9sbGJhclY6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgcmVvcmRlcmFibGU6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBzb3J0VHlwZTogU29ydFR5cGUgPSBTb3J0VHlwZS5zaW5nbGU7XG4gIEBJbnB1dCgpIG1lc3NhZ2VzOiBhbnk7XG4gIEBJbnB1dCgpIHNlbGVjdGlvblR5cGU6IFNlbGVjdGlvblR5cGU7XG4gIEBJbnB1dCgpIGNvbHVtbk1vZGU6IENvbHVtbk1vZGUgPSBDb2x1bW5Nb2RlLmZvcmNlO1xuICBASW5wdXQoKSBoZWFkZXJIZWlnaHQ6IGFueSA9IDQwO1xuICBASW5wdXQoKSBmb290ZXJIZWlnaHQ6IGFueSA9ICdhdXRvJztcbiAgQElucHV0KCkgcm93SGVpZ2h0OiBudW1iZXIgfCAnYXV0bycgfCAoKHJvdz86IGFueSkgPT4gbnVtYmVyKSA9ICdhdXRvJztcbiAgQElucHV0KCkgY29sdW1uOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgZm9vdGVyOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgYXBpOiBIdHRwQmFzZU1vZGVsO1xuICBASW5wdXQoKSBzdGFydFdpdGhPcGVuRGF0YTogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIGZpbHRlckV2ZW50OiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGZvcm1Hcm91cEZpbHRlcjogRm9ybUdyb3VwO1xuICBAT3V0cHV0KCkgYnV0dG9uQ2VsbDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIHNlbGVjdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGFjdGl2YXRlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAVmlld0NoaWxkKCdkYXRhdGFibGUnLCB7c3RhdGljOiBmYWxzZX0pIGRhdGF0YWJsZTogRGF0YXRhYmxlQ29tcG9uZW50O1xuICBASW5wdXQoKSBzZXQgZmlsdGVyRm4oa2V5d29yZDogS2V5d29yZCkge1xuICAgIHRoaXMua2V5d29yZFBhcmFtID0ga2V5d29yZDtcbiAgICB0aGlzLl9rZXl3b3JkID0ga2V5d29yZDtcbiAgICB0aGlzLmNvdW50ID0gMDtcbiAgICB0aGlzLm9mZnNldCA9IDA7XG4gIH1cblxuICBwdWJsaWMga2V5d29yZFBhcmFtOiBLZXl3b3JkO1xuICBwdWJsaWMgX2tleXdvcmQ6IEtleXdvcmQ7XG4gIHByb3RlY3RlZCBodHRwOiBIdHRwRmFjdG9yeVNlcnZpY2U7XG4gIHByaXZhdGUgZGVzdHJveSQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0PGFueT4oKTtcbiAgcHJpdmF0ZSBjZHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWY7XG4gIHByaXZhdGUgc29ydDogU29ydDtcbiAgcHJpdmF0ZSBwYWdlT2Zmc2V0OiBudW1iZXIgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoTE9DQUxFX0lEKSBwdWJsaWMgbG9jYWxlOiBzdHJpbmcsXG4gICAgcHJpdmF0ZSBsYXlvdXQ6IExheW91dFNlcnZpY2UsXG4gICAgcHVibGljIGluamVjdG9yOiBJbmplY3Rvcikge1xuICAgICAgdGhpcy5odHRwID0gaW5qZWN0b3IuZ2V0KEhUVFBfU0VSVklDRSk7XG4gICAgICB0aGlzLmNkcmVmID0gaW5qZWN0b3IuZ2V0KENoYW5nZURldGVjdG9yUmVmKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnN0YXJ0V2l0aE9wZW5EYXRhKSB7XG4gICAgICB0aGlzLmZldGNoKCk7XG4gICAgfVxuICAgIHRoaXMubGF5b3V0Lm9uQ2hhbmdlTGF5b3V0U2l6ZSgpLnRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5kYXRhdGFibGUucmVjYWxjdWxhdGUoKTtcbiAgICAgIHRoaXMuY2RyZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KHRydWUpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBmZXRjaCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5hcGkpIHtcbiAgICAgIHRoaXMuZXh0ZXJuYWxQYWdpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5leHRlcm5hbFNvcnRpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5nZXRSZXF1ZXN0KCkuc3Vic2NyaWJlKHJvd3MgPT4ge1xuICAgICAgICB0aGlzLnJvd3MgPSByb3dzO1xuICAgICAgICB0aGlzLmNkcmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG9uU29ydChvcmRlcjogYW55KTogdm9pZCB7XG4gICAgaWYgKG9yZGVyKSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShvcmRlci5zb3J0cykpIHtcbiAgICAgICAgb3JkZXIuc29ydHMuZm9yRWFjaChzb3J0ID0+IHtcbiAgICAgICAgICBpZiAoc29ydFsnZGlyJ10gPT09ICdhc2MnKSB7XG4gICAgICAgICAgICB0aGlzLnNvcnQgPSB7IGFzYyA6IFtzb3J0Wydwcm9wJ11dfTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zb3J0ID0geyBkZXNjIDogW3NvcnRbJ3Byb3AnXV19O1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuZmV0Y2goKTtcbiAgfVxuXG4gIG9uU2VsZWN0KHNlbGVjdGVkOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnNlbGVjdC5lbWl0KHNlbGVjdGVkKTtcbiAgfVxuXG4gIG9uQWN0aXZhdGUoZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgIGlmIChldmVudC50eXBlID09PSAnY2xpY2snKSB7XG4gICAgICBpZiAodGhpcy5zZWxlY3Rpb25UeXBlID09PSAnY2hlY2tib3gnKSB7XG4gICAgICAgIGlmIChldmVudC5jZWxsSW5kZXggPiAwKSB7XG4gICAgICAgICAgdGhpcy5hY3RpdmF0ZS5lbWl0KGV2ZW50LnJvdyk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYWN0aXZhdGUuZW1pdChldmVudC5yb3cpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNldFBhZ2UocGFnZTogUGFnZSk6IHZvaWQge1xuICAgIHRoaXMucGFnZU9mZnNldCA9IHBhZ2Uub2Zmc2V0ICogdGhpcy5saW1pdDtcbiAgICB0aGlzLmZldGNoKCk7XG4gIH1cblxuICBzYW5pdGl6ZWRWYWx1ZSh2YWx1ZTogYW55KTogYW55IHtcbiAgICByZXR1cm4gdmFsdWUgIT09IG51bGwgJiYgdmFsdWUgIT09IHVuZGVmaW5lZCA/IHRoaXMuc3RyaXBIdG1sKHZhbHVlKSA6IHZhbHVlO1xuICB9XG5cbiAgc3RyaXBIdG1sKGh0bWw6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKCFodG1sLnJlcGxhY2UpIHtcbiAgICAgIHJldHVybiBodG1sO1xuICAgIH1cbiAgICByZXR1cm4gaHRtbC5yZXBsYWNlKC88XFwvP1tePl0rKD58JCkvZywgJycpO1xuICB9XG5cbiAgb25DbGlja0J1dHRvbihldmVudCk6IHZvaWQge1xuICAgIHRoaXMuYnV0dG9uQ2VsbC5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0UmVxdWVzdCgpOiBPYnNlcnZhYmxlPGFueVtdPiB7XG4gICAgY29uc3QgYm9keTogYW55ID0ge1xuICAgICAgb2Zmc2V0OiB0aGlzLnBhZ2VPZmZzZXQsXG4gICAgICBsaW1pdDogdGhpcy5saW1pdCxcbiAgICAgIGtleXdvcmQgOiB0aGlzLl9rZXl3b3JkLFxuICAgICAgb3JkZXI6IHRoaXMuc29ydCxcbiAgICB9O1xuICAgIHRoaXMubG9hZGluZ0luZGljYXRvciA9IHRydWU7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5IVFRQX0FVVEgodGhpcy5hcGksIGJvZHkpXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgICAgdGhpcy5jb3VudCA9IE51bWJlcihyZXNwb25zZS50b3RhbFJlY29yZCk7XG4gICAgICAgICAgdGhpcy5sb2FkaW5nSW5kaWNhdG9yID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuICg8YW55W10+IHJlc3BvbnNlWydkYXRhJ10pO1xuICAgICAgICB9KSxcbiAgICAgICAgY2F0Y2hFcnJvcigoKSA9PiB7XG4gICAgICAgICAgdGhpcy5sb2FkaW5nSW5kaWNhdG9yID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5jb3VudCA9IDA7XG4gICAgICAgICAgcmV0dXJuIG9mKFtdKTtcbiAgICAgICAgfSkpO1xuICB9XG5cbn1cbiJdfQ==