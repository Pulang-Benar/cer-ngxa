/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, ViewEncapsulation, Optional, Self, Inject, LOCALE_ID, Injector, ChangeDetectorRef, Output, EventEmitter, ViewChild, ContentChild, TemplateRef, } from '@angular/core';
import { NgControl } from '@angular/forms';
import { NgxaValueAccessor } from '../base/ngxa-value-accessor.component';
import { Subject, of } from 'rxjs';
import { switchMap, catchError, map } from 'rxjs/operators';
import { HTTP_SERVICE, HttpMethod } from '@xaphira/shared';
import { NgSelectComponent } from '@ng-select/ng-select';
import { ContentSelectDirective } from './directive/content-select.directive';
var NgxaSelectComponent = /** @class */ (function (_super) {
    tslib_1.__extends(NgxaSelectComponent, _super);
    function NgxaSelectComponent(ngControl, locale, injector) {
        var _this = _super.call(this, ngControl, locale) || this;
        _this.locale = locale;
        _this.injector = injector;
        _this.colLabel = 3;
        _this.colInput = 9;
        _this.items = [];
        _this.multiple = false;
        _this.loading = false;
        _this.addTag = false;
        _this.closeOnSelect = true;
        _this.clearable = true;
        _this.searchable = true;
        _this.hideSelected = true;
        _this.minTermLength = 2;
        _this.maxTermLength = 50;
        _this.limit = 50;
        _this.offsetNextLoad = _this.limit - 35;
        _this.onSelect = new EventEmitter();
        _this.onClear = new EventEmitter();
        _this.notFoundText = 'select.notfound';
        _this.typeToSearchText = 'select.typesearch';
        _this.virtualScroll = true;
        _this.paramSearch = { value: _this.minTermLength };
        _this.typeahead$ = new Subject();
        _this.destroy$ = new Subject();
        _this.total = 0;
        _this.totalRecord = 0;
        _this.http = injector.get(HTTP_SERVICE);
        _this.cdref = injector.get(ChangeDetectorRef);
        return _this;
    }
    Object.defineProperty(NgxaSelectComponent.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () { return this._value; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this._value !== value) {
                this._value = value;
                this.onChange(value);
                this.onSelect.emit(value);
                /** @type {?} */
                var control = this.ngControl.control;
                if (control) {
                    control.updateValueAndValidity();
                    control.markAsTouched();
                    control.markAsDirty();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NgxaSelectComponent.prototype.onInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.paramSearch = { value: this.minTermLength };
        if (this.api) {
            this.fetchSearch().subscribe((/**
             * @param {?} items
             * @return {?}
             */
            function (items) {
                _this.fetchMore(items);
            }));
        }
    };
    /**
     * @return {?}
     */
    NgxaSelectComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next(true);
        this.destroy$.complete();
        this.destroy$.unsubscribe();
        this.typeahead$.next(null);
        this.typeahead$.complete();
        this.typeahead$.unsubscribe();
    };
    /**
     * @return {?}
     */
    NgxaSelectComponent.prototype.onOpen = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.api) {
            if (this.loading)
                return;
            this.total = 0;
            this.items = [];
            if (!this.searchable) {
                this.fetchNone().subscribe((/**
                 * @param {?} items
                 * @return {?}
                 */
                function (items) {
                    _this.fetchMore(items);
                }));
            }
        }
    };
    /**
     * @return {?}
     */
    NgxaSelectComponent.prototype.onClose = /**
     * @return {?}
     */
    function () {
        if (this.api) {
            this.reset();
        }
    };
    /**
     * @param {?} __0
     * @param {?} search
     * @return {?}
     */
    NgxaSelectComponent.prototype.onScroll = /**
     * @param {?} __0
     * @param {?} search
     * @return {?}
     */
    function (_a, search) {
        var _this = this;
        var end = _a.end;
        if (!this.loading) {
            if ((Number(end) + this.offsetNextLoad) >= this.total && this.total > 0 && this.total < this.totalRecord) {
                if (this.searchable && search) {
                    this.typeahead$.next(search);
                }
                else {
                    this.fetchNone().subscribe((/**
                     * @param {?} items
                     * @return {?}
                     */
                    function (items) {
                        _this.fetchMore(items);
                    }));
                }
            }
        }
    };
    /**
     * @param {?} search
     * @return {?}
     */
    NgxaSelectComponent.prototype.onScrollToEnd = /**
     * @param {?} search
     * @return {?}
     */
    function (search) {
        var _this = this;
        if (!this.loading) {
            if (this.total < this.totalRecord) {
                if (this.searchable && search) {
                    this.typeahead$.next(search);
                }
                else {
                    this.fetchNone().subscribe((/**
                     * @param {?} items
                     * @return {?}
                     */
                    function (items) {
                        _this.fetchMore(items);
                    }));
                }
            }
        }
    };
    /**
     * @return {?}
     */
    NgxaSelectComponent.prototype.doClear = /**
     * @return {?}
     */
    function () {
        this.onClear.emit(true);
    };
    /**
     * @private
     * @return {?}
     */
    NgxaSelectComponent.prototype.reset = /**
     * @private
     * @return {?}
     */
    function () {
        this.total = 0;
        this.items = [];
        this.loading = false;
    };
    /**
     * @private
     * @param {?} items
     * @return {?}
     */
    NgxaSelectComponent.prototype.fetchMore = /**
     * @private
     * @param {?} items
     * @return {?}
     */
    function (items) {
        this.items = tslib_1.__spread(this.items, items);
        this.cdref.detectChanges();
        this.loading = false;
    };
    /**
     * @private
     * @return {?}
     */
    NgxaSelectComponent.prototype.fetchSearch = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        return this.typeahead$.pipe(switchMap((/**
         * @param {?} term
         * @return {?}
         */
        function (term) {
            if (term) {
                if (term.length > _this.maxTermLength) {
                    return of([]);
                }
                return _this.getRequest(_this.total, term);
            }
            else
                return of([]);
        }))).takeUntil(this.destroy$);
    };
    /**
     * @private
     * @return {?}
     */
    NgxaSelectComponent.prototype.fetchNone = /**
     * @private
     * @return {?}
     */
    function () {
        return this.getRequest(this.total).takeUntil(this.destroy$);
    };
    /**
     * @private
     * @param {?=} offset
     * @param {?=} search
     * @return {?}
     */
    NgxaSelectComponent.prototype.getRequest = /**
     * @private
     * @param {?=} offset
     * @param {?=} search
     * @return {?}
     */
    function (offset, search) {
        var _this = this;
        /** @type {?} */
        var body;
        if (this.api.method === HttpMethod.POST) {
            body = {
                offset: offset ? offset : 0,
                limit: this.limit,
                keyword: {
                    _label: search,
                },
            };
            if (this.queryParam) {
                this.queryParam.forEach((/**
                 * @param {?} result
                 * @return {?}
                 */
                function (result) {
                    body['keyword'][result.key] = result.value;
                }));
            }
        }
        this.loading = true;
        return this.http.HTTP_AUTH(this.api, body)
            .pipe(map((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            _this.totalRecord = Number(response.totalRecord);
            _this.total = _this.total + Number(response.totalFiltered);
            return ((/** @type {?} */ (response['data'])));
        })), catchError((/**
         * @return {?}
         */
        function () { return of([]); })));
    };
    /**
     * @param {?} event
     * @param {?} term
     * @return {?}
     */
    NgxaSelectComponent.prototype.onKeyDown = /**
     * @param {?} event
     * @param {?} term
     * @return {?}
     */
    function (event, term) {
        if ([46, 8, 27, 13, 32, 110, 190, 189, 16, 20, 18, 222, 191].indexOf(event.keyCode) !== -1 ||
            (event.keyCode === 65 && event.ctrlKey === true) || // Allow: Ctrl+A
            (event.keyCode === 67 && event.ctrlKey === true) || // Allow: Ctrl+C
            (event.keyCode === 86 && event.ctrlKey === true) || // Allow: Ctrl+V
            (event.keyCode === 88 && event.ctrlKey === true) || // Allow: Ctrl+X
            (event.keyCode === 65 && event.metaKey === true) || // Cmd+A (Mac)
            (event.keyCode === 67 && event.metaKey === true) || // Cmd+C (Mac)
            (event.keyCode === 86 && event.metaKey === true) || // Cmd+V (Mac)
            (event.keyCode === 88 && event.metaKey === true) || // Cmd+X (Mac)
            (event.keyCode >= 35 && event.keyCode <= 39) || // Home, End, Left, Right
            (event.keyCode >= 65 && event.keyCode <= 90) ||
            (!event.shiftKey && (event.keyCode >= 48 && event.keyCode <= 57)) ||
            (event.keyCode >= 96 && event.keyCode <= 105)) {
            if (((!event.ctrlKey && !event.altKey && !event.metaKey) &&
                (([46, 8, 32].indexOf(event.keyCode) !== -1) ||
                    (event.keyCode >= 65 && event.keyCode <= 90) ||
                    (event.keyCode >= 48 && event.keyCode <= 57) ||
                    (event.keyCode >= 96 && event.keyCode <= 105))) ||
                ((event.ctrlKey || event.metaKey) && event.keyCode === 90) ||
                ((event.ctrlKey || event.metaKey) && event.keyCode === 89)) {
                this.reset();
            }
            if (term) {
                if (term.length > this.maxTermLength) {
                    return false;
                }
            }
            return true;
        }
        return false;
    };
    NgxaSelectComponent.decorators = [
        { type: Component, args: [{
                    selector: 'xa-select',
                    template: "<xa-container-outlet\n  [name]=\"name\" [label]=\"label\"\n  [colLabel]=\"colLabel\" [colContent]=\"colInput\"\n  [required]=\"required\" [hasErrors]=\"hasErrors\"\n  [errorMessages]=\"errorMessages\" [paramError]=\"paramError\"\n  [skeleton]=\"skeleton\">\n  <div class=\"col-sm-{{colInput}}\" *ngIf=\"!skeleton; else contentskeleton\">\n    <ng-select\n      [placeholder]=\"placeholder ? (placeholder | translate) : ''\"\n      [items]=\"items\"\n      [typeahead]=\"typeahead$\"\n      [multiple]=\"multiple\"\n      [loading]=\"loading\"\n      [notFoundText]=\"notFoundText | translate\"\n      [addTag]=\"addTag\"\n      [closeOnSelect]=\"closeOnSelect\"\n      [clearable]=\"required? false: clearable\"\n      [searchable]=\"searchable\"\n      [hideSelected]=\"hideSelected\"\n      [minTermLength]=\"minTermLength\"\n      [virtualScroll]=\"virtualScroll\"\n      [required]=\"required\"\n      [disabled]=\"disabled\"\n      (keydown)=\"onKeyDown($event, select.searchTerm)\"\n      (scroll)=\"onScroll($event, select.searchTerm)\"\n      (scrollToEnd)=\"onScrollToEnd(select.searchTerm)\"\n      (open)=\"onOpen()\"\n      (close)=\"onClose()\"\n      (clear)=\"doClear()\"\n      (change)=\"onChange($event)\"\n      (focus)=\"onTouched($event)\"\n      (blur)=\"onTouched($event)\"\n      [(ngModel)]=\"value\"\n      [ngClass]=\"{'required': required}\"\n      appendTo=\"body\"\n      typeToSearchText=\"{{typeToSearchText | translate:paramSearch}}\"\n      #select>\n        <ng-template *ngIf=\"contentTemplate\" ng-label-tmp let-item=\"item\">\n          <ng-container *ngTemplateOutlet=\"contentTemplate; context: {$implicit: item}\"></ng-container>\n        </ng-template>\n        <ng-template *ngIf=\"contentTemplate\" ng-option-tmp let-item=\"item\">\n          <ng-container *ngTemplateOutlet=\"contentTemplate; context: {$implicit: item}\"></ng-container>\n        </ng-template>\n    </ng-select>\n  </div>\n  <ng-template #contentskeleton>\n    <div class=\"col-sm-{{colInput}}\">\n      <div\n        [ngClass]=\"{\n          'input-skeleton': true,\n          'skeleton': skeleton\n        }\">\n      </div>\n    </div>\n  </ng-template>\n</xa-container-outlet>",
                    encapsulation: ViewEncapsulation.None,
                    styles: ["ng-select.ng-invalid.ng-touched .ng-select-container{border-color:#ff3d71}ng-select.ng-invalid.ng-touched:focus{border-color:#ff3d71;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 0 3px #fde6e8}ng-select.ng-valid.ng-touched.required .ng-select-container{border-color:#00d68f}ng-select.ng-valid.ng-touched.required:focus{border-color:#00d68f;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 0 3px #e4e9f2}body{font-size:1rem;font-weight:400;line-height:1.5;position:relative;font-family:Open Sans,sans-serif}.ng-select .ng-select-container{border-radius:.25rem;line-height:1.5rem;align-items:center;background-color:#f7f9fc;color:#1a2138;font-family:Open Sans,sans-serif;border:1px solid #edf1f7}"]
                }] }
    ];
    /** @nocollapse */
    NgxaSelectComponent.ctorParameters = function () { return [
        { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
        { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] },
        { type: Injector }
    ]; };
    NgxaSelectComponent.propDecorators = {
        placeholder: [{ type: Input }],
        colLabel: [{ type: Input }],
        colInput: [{ type: Input }],
        items: [{ type: Input }],
        multiple: [{ type: Input }],
        loading: [{ type: Input }],
        addTag: [{ type: Input }],
        closeOnSelect: [{ type: Input }],
        clearable: [{ type: Input }],
        searchable: [{ type: Input }],
        hideSelected: [{ type: Input }],
        minTermLength: [{ type: Input }],
        maxTermLength: [{ type: Input }],
        api: [{ type: Input }],
        limit: [{ type: Input }],
        offsetNextLoad: [{ type: Input }],
        queryParam: [{ type: Input }],
        onSelect: [{ type: Output }],
        onClear: [{ type: Output }],
        select: [{ type: ViewChild, args: ['select', { static: false },] }],
        contentTemplate: [{ type: ContentChild, args: [ContentSelectDirective, { static: false, read: TemplateRef },] }]
    };
    return NgxaSelectComponent;
}(NgxaValueAccessor));
export { NgxaSelectComponent };
if (false) {
    /** @type {?} */
    NgxaSelectComponent.prototype.placeholder;
    /** @type {?} */
    NgxaSelectComponent.prototype.colLabel;
    /** @type {?} */
    NgxaSelectComponent.prototype.colInput;
    /** @type {?} */
    NgxaSelectComponent.prototype.items;
    /** @type {?} */
    NgxaSelectComponent.prototype.multiple;
    /** @type {?} */
    NgxaSelectComponent.prototype.loading;
    /** @type {?} */
    NgxaSelectComponent.prototype.addTag;
    /** @type {?} */
    NgxaSelectComponent.prototype.closeOnSelect;
    /** @type {?} */
    NgxaSelectComponent.prototype.clearable;
    /** @type {?} */
    NgxaSelectComponent.prototype.searchable;
    /** @type {?} */
    NgxaSelectComponent.prototype.hideSelected;
    /** @type {?} */
    NgxaSelectComponent.prototype.minTermLength;
    /** @type {?} */
    NgxaSelectComponent.prototype.maxTermLength;
    /** @type {?} */
    NgxaSelectComponent.prototype.api;
    /** @type {?} */
    NgxaSelectComponent.prototype.limit;
    /** @type {?} */
    NgxaSelectComponent.prototype.offsetNextLoad;
    /** @type {?} */
    NgxaSelectComponent.prototype.queryParam;
    /** @type {?} */
    NgxaSelectComponent.prototype.onSelect;
    /** @type {?} */
    NgxaSelectComponent.prototype.onClear;
    /** @type {?} */
    NgxaSelectComponent.prototype.select;
    /** @type {?} */
    NgxaSelectComponent.prototype.contentTemplate;
    /** @type {?} */
    NgxaSelectComponent.prototype.notFoundText;
    /** @type {?} */
    NgxaSelectComponent.prototype.typeToSearchText;
    /** @type {?} */
    NgxaSelectComponent.prototype.virtualScroll;
    /** @type {?} */
    NgxaSelectComponent.prototype.paramSearch;
    /** @type {?} */
    NgxaSelectComponent.prototype.typeahead$;
    /**
     * @type {?}
     * @protected
     */
    NgxaSelectComponent.prototype.http;
    /**
     * @type {?}
     * @private
     */
    NgxaSelectComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NgxaSelectComponent.prototype.total;
    /**
     * @type {?}
     * @private
     */
    NgxaSelectComponent.prototype.totalRecord;
    /**
     * @type {?}
     * @private
     */
    NgxaSelectComponent.prototype.cdref;
    /** @type {?} */
    NgxaSelectComponent.prototype._value;
    /** @type {?} */
    NgxaSelectComponent.prototype.locale;
    /** @type {?} */
    NgxaSelectComponent.prototype.injector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4YS1zZWxlY3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHhhcGhpcmEvbmd4YS1jb21tb24vIiwic291cmNlcyI6WyJsaWIvc2VsZWN0L25neGEtc2VsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLGlCQUFpQixFQUNqQixRQUFRLEVBQ1IsSUFBSSxFQUNKLE1BQU0sRUFDTixTQUFTLEVBQ1QsUUFBUSxFQUNSLGlCQUFpQixFQUVqQixNQUFNLEVBQ04sWUFBWSxFQUNaLFNBQVMsRUFDVCxZQUFZLEVBQ1osV0FBVyxHQUNaLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUMxRSxPQUFPLEVBQWMsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQyxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1RCxPQUFPLEVBQXNCLFlBQVksRUFBaUIsVUFBVSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFOUYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDekQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFOUU7SUFNeUMsK0NBQXNCO0lBa0QzRCw2QkFBZ0MsU0FBb0IsRUFDeEIsTUFBYyxFQUNqQyxRQUFrQjtRQUYzQixZQUdFLGtCQUFNLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FHekI7UUFMMkIsWUFBTSxHQUFOLE1BQU0sQ0FBUTtRQUNqQyxjQUFRLEdBQVIsUUFBUSxDQUFVO1FBbERsQixjQUFRLEdBQVcsQ0FBQyxDQUFDO1FBQ3JCLGNBQVEsR0FBVyxDQUFDLENBQUM7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QW1COztJQW1CakIscUNBQXdDOztJQUN4Qyx1Q0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgT3B0aW9uYWwsXG4gIFNlbGYsXG4gIEluamVjdCxcbiAgTE9DQUxFX0lELFxuICBJbmplY3RvcixcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIE9uRGVzdHJveSxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIFZpZXdDaGlsZCxcbiAgQ29udGVudENoaWxkLFxuICBUZW1wbGF0ZVJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ0NvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOZ3hhVmFsdWVBY2Nlc3NvciB9IGZyb20gJy4uL2Jhc2Uvbmd4YS12YWx1ZS1hY2Nlc3Nvci5jb21wb25lbnQnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHN3aXRjaE1hcCwgY2F0Y2hFcnJvciwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgSHR0cEZhY3RvcnlTZXJ2aWNlLCBIVFRQX1NFUlZJQ0UsIEh0dHBCYXNlTW9kZWwsIEh0dHBNZXRob2QgfSBmcm9tICdAeGFwaGlyYS9zaGFyZWQnO1xuaW1wb3J0IHsgU2VsZWN0UGFyYW1Nb2RlbCwgU2VsZWN0UmVzcG9uc2VNb2RlbCB9IGZyb20gJy4vc2VsZWN0Lm1vZGVsJztcbmltcG9ydCB7IE5nU2VsZWN0Q29tcG9uZW50IH0gZnJvbSAnQG5nLXNlbGVjdC9uZy1zZWxlY3QnO1xuaW1wb3J0IHsgQ29udGVudFNlbGVjdERpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlL2NvbnRlbnQtc2VsZWN0LmRpcmVjdGl2ZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3hhLXNlbGVjdCcsXG4gIHN0eWxlVXJsczogWycuL25neGEtc2VsZWN0LmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9uZ3hhLXNlbGVjdC5jb21wb25lbnQuaHRtbCcsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIE5neGFTZWxlY3RDb21wb25lbnQgZXh0ZW5kcyBOZ3hhVmFsdWVBY2Nlc3Nvcjxhbnk+IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGNvbExhYmVsOiBudW1iZXIgPSAzO1xuICAgIEBJbnB1dCgpIGNvbElucHV0OiBudW1iZXIgPSA5O1xuICAgIEBJbnB1dCgpIGl0ZW1zOiBTZWxlY3RSZXNwb25zZU1vZGVsW10gPSBbXTtcbiAgICBASW5wdXQoKSBtdWx0aXBsZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIGxvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBASW5wdXQoKSBhZGRUYWc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBASW5wdXQoKSBjbG9zZU9uU2VsZWN0OiBib29sZWFuID0gdHJ1ZTtcbiAgICBASW5wdXQoKSBjbGVhcmFibGU6IGJvb2xlYW4gPSB0cnVlO1xuICAgIEBJbnB1dCgpIHNlYXJjaGFibGU6IGJvb2xlYW4gPSB0cnVlO1xuICAgIEBJbnB1dCgpIGhpZGVTZWxlY3RlZDogYm9vbGVhbiA9IHRydWU7XG4gICAgQElucHV0KCkgbWluVGVybUxlbmd0aDogbnVtYmVyID0gMjtcbiAgICBASW5wdXQoKSBtYXhUZXJtTGVuZ3RoOiBudW1iZXIgPSA1MDtcbiAgICBASW5wdXQoKSBhcGk6IEh0dHBCYXNlTW9kZWw7XG4gICAgQElucHV0KCkgbGltaXQ6IG51bWJlciA9IDUwO1xuICAgIEBJbnB1dCgpIG9mZnNldE5leHRMb2FkOiBudW1iZXIgPSB0aGlzLmxpbWl0IC0gMzU7XG4gICAgQElucHV0KCkgcXVlcnlQYXJhbTogU2VsZWN0UGFyYW1Nb2RlbFtdO1xuICAgIEBPdXRwdXQoKSBvblNlbGVjdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgICBAT3V0cHV0KCkgb25DbGVhcjogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICAgIEBWaWV3Q2hpbGQoJ3NlbGVjdCcsIHtzdGF0aWM6IGZhbHNlfSkgc2VsZWN0OiBOZ1NlbGVjdENvbXBvbmVudDtcbiAgICBAQ29udGVudENoaWxkKENvbnRlbnRTZWxlY3REaXJlY3RpdmUsIHtzdGF0aWM6IGZhbHNlLCByZWFkOiBUZW1wbGF0ZVJlZn0pIGNvbnRlbnRUZW1wbGF0ZTtcbiAgICBwdWJsaWMgbm90Rm91bmRUZXh0OiBzdHJpbmcgPSAnc2VsZWN0Lm5vdGZvdW5kJztcbiAgICBwdWJsaWMgdHlwZVRvU2VhcmNoVGV4dDogc3RyaW5nID0gJ3NlbGVjdC50eXBlc2VhcmNoJztcbiAgICBwdWJsaWMgdmlydHVhbFNjcm9sbDogYm9vbGVhbiA9IHRydWU7XG4gICAgcHVibGljIHBhcmFtU2VhcmNoOiBhbnkgPSB7IHZhbHVlOiB0aGlzLm1pblRlcm1MZW5ndGggfTtcbiAgICBwdWJsaWMgdHlwZWFoZWFkJDogU3ViamVjdDxzdHJpbmc+ID0gbmV3IFN1YmplY3Q8c3RyaW5nPigpO1xuICAgIHByb3RlY3RlZCBodHRwOiBIdHRwRmFjdG9yeVNlcnZpY2U7XG4gICAgcHJpdmF0ZSBkZXN0cm95JDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3Q8YW55PigpO1xuICAgIHByaXZhdGUgdG90YWw6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSB0b3RhbFJlY29yZDogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIGNkcmVmOiBDaGFuZ2VEZXRlY3RvclJlZjtcbiAgICBwdWJsaWMgX3ZhbHVlOiBhbnk7XG5cbiAgICBnZXQgdmFsdWUoKTogYW55IHsgcmV0dXJuIHRoaXMuX3ZhbHVlOyB9XG5cbiAgICBzZXQgdmFsdWUodmFsdWU6IGFueSkge1xuICAgICAgaWYgKHRoaXMuX3ZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgdGhpcy5vbkNoYW5nZSh2YWx1ZSk7XG4gICAgICAgICAgdGhpcy5vblNlbGVjdC5lbWl0KHZhbHVlKTtcbiAgICAgICAgICBjb25zdCBjb250cm9sID0gdGhpcy5uZ0NvbnRyb2wuY29udHJvbDtcbiAgICAgICAgICBpZiAoY29udHJvbCkge1xuICAgICAgICAgICAgICBjb250cm9sLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICAgICAgICAgICAgY29udHJvbC5tYXJrQXNUb3VjaGVkKCk7XG4gICAgICAgICAgICAgIGNvbnRyb2wubWFya0FzRGlydHkoKTtcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQFNlbGYoKSBuZ0NvbnRyb2w6IE5nQ29udHJvbCxcbiAgICAgIEBJbmplY3QoTE9DQUxFX0lEKSBwdWJsaWMgbG9jYWxlOiBzdHJpbmcsXG4gICAgICBwdWJsaWMgaW5qZWN0b3I6IEluamVjdG9yKSB7XG4gICAgICBzdXBlcihuZ0NvbnRyb2wsIGxvY2FsZSk7XG4gICAgICB0aGlzLmh0dHAgPSBpbmplY3Rvci5nZXQoSFRUUF9TRVJWSUNFKTtcbiAgICAgIHRoaXMuY2RyZWYgPSBpbmplY3Rvci5nZXQoQ2hhbmdlRGV0ZWN0b3JSZWYpO1xuICAgIH1cblxuICAgIG9uSW5pdCgpOiB2b2lkIHtcbiAgICAgIHRoaXMucGFyYW1TZWFyY2ggPSB7IHZhbHVlOiB0aGlzLm1pblRlcm1MZW5ndGggfTtcbiAgICAgIGlmICh0aGlzLmFwaSkge1xuICAgICAgICB0aGlzLmZldGNoU2VhcmNoKCkuc3Vic2NyaWJlKChpdGVtczogU2VsZWN0UmVzcG9uc2VNb2RlbFtdKSA9PiB7XG4gICAgICAgICAgdGhpcy5mZXRjaE1vcmUoaXRlbXMpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgIHRoaXMuZGVzdHJveSQubmV4dCh0cnVlKTtcbiAgICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgICAgIHRoaXMuZGVzdHJveSQudW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMudHlwZWFoZWFkJC5uZXh0KG51bGwpO1xuICAgICAgdGhpcy50eXBlYWhlYWQkLmNvbXBsZXRlKCk7XG4gICAgICB0aGlzLnR5cGVhaGVhZCQudW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICBvbk9wZW4oKTogdm9pZCB7XG4gICAgICBpZiAodGhpcy5hcGkpIHtcbiAgICAgICAgaWYgKHRoaXMubG9hZGluZykgcmV0dXJuO1xuICAgICAgICB0aGlzLnRvdGFsID0gMDtcbiAgICAgICAgdGhpcy5pdGVtcyA9IFtdO1xuICAgICAgICBpZiAoIXRoaXMuc2VhcmNoYWJsZSkge1xuICAgICAgICAgIHRoaXMuZmV0Y2hOb25lKCkuc3Vic2NyaWJlKChpdGVtczogU2VsZWN0UmVzcG9uc2VNb2RlbFtdKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmZldGNoTW9yZShpdGVtcyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBvbkNsb3NlKCk6IHZvaWQge1xuICAgICAgaWYgKHRoaXMuYXBpKSB7XG4gICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBvblNjcm9sbCh7IGVuZCB9LCBzZWFyY2g6IHN0cmluZyk6IHZvaWQge1xuICAgICAgaWYgKCF0aGlzLmxvYWRpbmcpIHtcbiAgICAgICAgaWYgKChOdW1iZXIoZW5kKSArIHRoaXMub2Zmc2V0TmV4dExvYWQpID49IHRoaXMudG90YWwgJiYgdGhpcy50b3RhbCA+IDAgICYmIHRoaXMudG90YWwgPCB0aGlzLnRvdGFsUmVjb3JkKSB7XG4gICAgICAgICAgaWYgKHRoaXMuc2VhcmNoYWJsZSAmJiBzZWFyY2gpIHtcbiAgICAgICAgICAgIHRoaXMudHlwZWFoZWFkJC5uZXh0KHNlYXJjaCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZmV0Y2hOb25lKCkuc3Vic2NyaWJlKChpdGVtczogU2VsZWN0UmVzcG9uc2VNb2RlbFtdKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuZmV0Y2hNb3JlKGl0ZW1zKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIG9uU2Nyb2xsVG9FbmQoc2VhcmNoOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgIGlmICghdGhpcy5sb2FkaW5nKSB7XG4gICAgICAgIGlmICh0aGlzLnRvdGFsIDwgdGhpcy50b3RhbFJlY29yZCkge1xuICAgICAgICAgIGlmICh0aGlzLnNlYXJjaGFibGUgJiYgc2VhcmNoKSB7XG4gICAgICAgICAgICB0aGlzLnR5cGVhaGVhZCQubmV4dChzZWFyY2gpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmZldGNoTm9uZSgpLnN1YnNjcmliZSgoaXRlbXM6IFNlbGVjdFJlc3BvbnNlTW9kZWxbXSkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmZldGNoTW9yZShpdGVtcyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBkb0NsZWFyKCk6IHZvaWQge1xuICAgICAgdGhpcy5vbkNsZWFyLmVtaXQodHJ1ZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZXNldCgpOiB2b2lkIHtcbiAgICAgIHRoaXMudG90YWwgPSAwO1xuICAgICAgdGhpcy5pdGVtcyA9IFtdO1xuICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmZXRjaE1vcmUoaXRlbXM6IFNlbGVjdFJlc3BvbnNlTW9kZWxbXSk6IHZvaWQge1xuICAgICAgdGhpcy5pdGVtcyA9IFsuLi50aGlzLml0ZW1zLCAuLi5pdGVtc107XG4gICAgICB0aGlzLmNkcmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIHByaXZhdGUgZmV0Y2hTZWFyY2goKTogT2JzZXJ2YWJsZTxTZWxlY3RSZXNwb25zZU1vZGVsW10+IHtcbiAgICAgIHJldHVybiB0aGlzLnR5cGVhaGVhZCQucGlwZShcbiAgICAgICAgc3dpdGNoTWFwKCh0ZXJtOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICBpZiAodGVybSkge1xuICAgICAgICAgICAgaWYgKHRlcm0ubGVuZ3RoID4gdGhpcy5tYXhUZXJtTGVuZ3RoKSB7XG4gICAgICAgICAgICAgIHJldHVybiBvZihbXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRSZXF1ZXN0KHRoaXMudG90YWwsIHRlcm0pO1xuICAgICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgcmV0dXJuIG9mKFtdKTtcbiAgICAgICAgfSkpLnRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGZldGNoTm9uZSgpOiBPYnNlcnZhYmxlPFNlbGVjdFJlc3BvbnNlTW9kZWxbXT4ge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0UmVxdWVzdCh0aGlzLnRvdGFsKS50YWtlVW50aWwodGhpcy5kZXN0cm95JCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRSZXF1ZXN0KG9mZnNldD86IG51bWJlciwgc2VhcmNoPzogc3RyaW5nKTogT2JzZXJ2YWJsZTxTZWxlY3RSZXNwb25zZU1vZGVsW10+IHtcbiAgICAgIGxldCBib2R5OiBhbnk7XG4gICAgICBpZiAodGhpcy5hcGkubWV0aG9kID09PSBIdHRwTWV0aG9kLlBPU1QpIHtcbiAgICAgICAgYm9keSA9IHtcbiAgICAgICAgICBvZmZzZXQ6IG9mZnNldCA/IG9mZnNldCA6IDAsXG4gICAgICAgICAgbGltaXQ6IHRoaXMubGltaXQsXG4gICAgICAgICAga2V5d29yZCA6IHtcbiAgICAgICAgICAgIF9sYWJlbDogc2VhcmNoLFxuICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICAgIGlmICh0aGlzLnF1ZXJ5UGFyYW0pIHtcbiAgICAgICAgICB0aGlzLnF1ZXJ5UGFyYW0uZm9yRWFjaCgocmVzdWx0OiBTZWxlY3RQYXJhbU1vZGVsKSA9PiB7XG4gICAgICAgICAgICBib2R5WydrZXl3b3JkJ11bcmVzdWx0LmtleV0gPSByZXN1bHQudmFsdWU7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICByZXR1cm4gdGhpcy5odHRwLkhUVFBfQVVUSCh0aGlzLmFwaSwgYm9keSlcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnRvdGFsUmVjb3JkID0gTnVtYmVyKHJlc3BvbnNlLnRvdGFsUmVjb3JkKTtcbiAgICAgICAgICAgIHRoaXMudG90YWwgPSB0aGlzLnRvdGFsICsgTnVtYmVyKHJlc3BvbnNlLnRvdGFsRmlsdGVyZWQpO1xuICAgICAgICAgICAgcmV0dXJuICg8U2VsZWN0UmVzcG9uc2VNb2RlbFtdPiByZXNwb25zZVsnZGF0YSddKTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjYXRjaEVycm9yKCgpID0+IG9mKFtdKSkpO1xuICAgIH1cblxuICAgIG9uS2V5RG93bihldmVudDogS2V5Ym9hcmRFdmVudCwgdGVybTogc3RyaW5nKSB7XG4gICAgICBpZiAoXG4gICAgICAgICAgWzQ2LCA4LCAyNywgMTMsIDMyLCAxMTAsIDE5MCwgMTg5LCAxNiwgMjAsIDE4LCAyMjIsIDE5MV0uaW5kZXhPZihldmVudC5rZXlDb2RlKSAhPT0gLTEgfHxcbiAgICAgICAgICAoZXZlbnQua2V5Q29kZSA9PT0gNjUgJiYgZXZlbnQuY3RybEtleSA9PT0gdHJ1ZSkgfHwgLy8gQWxsb3c6IEN0cmwrQVxuICAgICAgICAgIChldmVudC5rZXlDb2RlID09PSA2NyAmJiBldmVudC5jdHJsS2V5ID09PSB0cnVlKSB8fCAvLyBBbGxvdzogQ3RybCtDXG4gICAgICAgICAgKGV2ZW50LmtleUNvZGUgPT09IDg2ICYmIGV2ZW50LmN0cmxLZXkgPT09IHRydWUpIHx8IC8vIEFsbG93OiBDdHJsK1ZcbiAgICAgICAgICAoZXZlbnQua2V5Q29kZSA9PT0gODggJiYgZXZlbnQuY3RybEtleSA9PT0gdHJ1ZSkgfHwgLy8gQWxsb3c6IEN0cmwrWFxuICAgICAgICAgIChldmVudC5rZXlDb2RlID09PSA2NSAmJiBldmVudC5tZXRhS2V5ID09PSB0cnVlKSB8fCAvLyBDbWQrQSAoTWFjKVxuICAgICAgICAgIChldmVudC5rZXlDb2RlID09PSA2NyAmJiBldmVudC5tZXRhS2V5ID09PSB0cnVlKSB8fCAvLyBDbWQrQyAoTWFjKVxuICAgICAgICAgIChldmVudC5rZXlDb2RlID09PSA4NiAmJiBldmVudC5tZXRhS2V5ID09PSB0cnVlKSB8fCAvLyBDbWQrViAoTWFjKVxuICAgICAgICAgIChldmVudC5rZXlDb2RlID09PSA4OCAmJiBldmVudC5tZXRhS2V5ID09PSB0cnVlKSB8fCAvLyBDbWQrWCAoTWFjKVxuICAgICAgICAgIChldmVudC5rZXlDb2RlID49IDM1ICYmIGV2ZW50LmtleUNvZGUgPD0gMzkpIHx8IC8vIEhvbWUsIEVuZCwgTGVmdCwgUmlnaHRcbiAgICAgICAgICAoZXZlbnQua2V5Q29kZSA+PSA2NSAmJiBldmVudC5rZXlDb2RlIDw9IDkwKSB8fFxuICAgICAgICAgICghZXZlbnQuc2hpZnRLZXkgJiYgKGV2ZW50LmtleUNvZGUgPj0gNDggJiYgZXZlbnQua2V5Q29kZSA8PSA1NykpIHx8XG4gICAgICAgICAgKGV2ZW50LmtleUNvZGUgPj0gOTYgJiYgZXZlbnQua2V5Q29kZSA8PSAxMDUpKSB7XG4gICAgICAgICAgaWYgKCgoIWV2ZW50LmN0cmxLZXkgJiYgIWV2ZW50LmFsdEtleSAmJiAhZXZlbnQubWV0YUtleSkgJiZcbiAgICAgICAgICAgICAgKChbNDYsIDgsIDMyXS5pbmRleE9mKGV2ZW50LmtleUNvZGUpICE9PSAtMSkgfHxcbiAgICAgICAgICAgICAgKGV2ZW50LmtleUNvZGUgPj0gNjUgJiYgZXZlbnQua2V5Q29kZSA8PSA5MCkgfHxcbiAgICAgICAgICAgICAgKGV2ZW50LmtleUNvZGUgPj0gNDggJiYgZXZlbnQua2V5Q29kZSA8PSA1NykgfHxcbiAgICAgICAgICAgICAgKGV2ZW50LmtleUNvZGUgPj0gOTYgJiYgZXZlbnQua2V5Q29kZSA8PSAxMDUpKSkgfHxcbiAgICAgICAgICAgICAgKChldmVudC5jdHJsS2V5IHx8IGV2ZW50Lm1ldGFLZXkpICYmIGV2ZW50LmtleUNvZGUgPT09IDkwKSB8fFxuICAgICAgICAgICAgICAoKGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQubWV0YUtleSkgJiYgZXZlbnQua2V5Q29kZSA9PT0gODkpKSB7XG4gICAgICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0ZXJtKSB7XG4gICAgICAgICAgICBpZiAodGVybS5sZW5ndGggPiB0aGlzLm1heFRlcm1MZW5ndGgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbn1cbiJdfQ==