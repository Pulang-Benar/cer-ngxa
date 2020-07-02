/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewEncapsulation, Optional, Self, Inject, LOCALE_ID, Injector, ChangeDetectorRef, Output, EventEmitter, ViewChild, ContentChild, TemplateRef, } from '@angular/core';
import { NgControl } from '@angular/forms';
import { NgxaValueAccessor } from '../base/ngxa-value-accessor.component';
import { Subject, of } from 'rxjs';
import { switchMap, catchError, map } from 'rxjs/operators';
import { HTTP_SERVICE, HttpMethod } from '@xaphira/shared';
import { NgSelectComponent } from '@ng-select/ng-select';
import { ContentSelectDirective } from './directive/content-select.directive';
export class NgxaSelectComponent extends NgxaValueAccessor {
    /**
     * @param {?} ngControl
     * @param {?} locale
     * @param {?} injector
     */
    constructor(ngControl, locale, injector) {
        super(ngControl, locale);
        this.locale = locale;
        this.injector = injector;
        this.colLabel = 3;
        this.colInput = 9;
        this.items = [];
        this.multiple = false;
        this.loading = false;
        this.addTag = false;
        this.closeOnSelect = true;
        this.clearable = true;
        this.searchable = true;
        this.hideSelected = true;
        this.minTermLength = 2;
        this.maxTermLength = 50;
        this.limit = 50;
        this.offsetNextLoad = this.limit - 35;
        this.onSelect = new EventEmitter();
        this.onClear = new EventEmitter();
        this.notFoundText = 'select.notfound';
        this.typeToSearchText = 'select.typesearch';
        this.virtualScroll = true;
        this.paramSearch = { value: this.minTermLength };
        this.typeahead$ = new Subject();
        this.destroy$ = new Subject();
        this.total = 0;
        this.totalRecord = 0;
        this.http = injector.get(HTTP_SERVICE);
        this.cdref = injector.get(ChangeDetectorRef);
    }
    /**
     * @return {?}
     */
    get value() { return this._value; }
    /**
     * @param {?} value
     * @return {?}
     */
    set value(value) {
        if (this._value !== value) {
            this._value = value;
            this.onChange(value);
            this.onSelect.emit(value);
            /** @type {?} */
            const control = this.ngControl.control;
            if (control) {
                control.updateValueAndValidity();
                control.markAsTouched();
                control.markAsDirty();
            }
        }
    }
    /**
     * @return {?}
     */
    onInit() {
        this.paramSearch = { value: this.minTermLength };
        if (this.api) {
            this.fetchSearch().subscribe((/**
             * @param {?} items
             * @return {?}
             */
            (items) => {
                this.fetchMore(items);
            }));
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
        this.destroy$.unsubscribe();
        this.typeahead$.next(null);
        this.typeahead$.complete();
        this.typeahead$.unsubscribe();
    }
    /**
     * @return {?}
     */
    onOpen() {
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
                (items) => {
                    this.fetchMore(items);
                }));
            }
        }
    }
    /**
     * @return {?}
     */
    onClose() {
        if (this.api) {
            this.reset();
        }
    }
    /**
     * @param {?} __0
     * @param {?} search
     * @return {?}
     */
    onScroll({ end }, search) {
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
                    (items) => {
                        this.fetchMore(items);
                    }));
                }
            }
        }
    }
    /**
     * @param {?} search
     * @return {?}
     */
    onScrollToEnd(search) {
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
                    (items) => {
                        this.fetchMore(items);
                    }));
                }
            }
        }
    }
    /**
     * @return {?}
     */
    doClear() {
        this.onClear.emit(true);
    }
    /**
     * @private
     * @return {?}
     */
    reset() {
        this.total = 0;
        this.items = [];
        this.loading = false;
    }
    /**
     * @private
     * @param {?} items
     * @return {?}
     */
    fetchMore(items) {
        this.items = [...this.items, ...items];
        this.cdref.detectChanges();
        this.loading = false;
    }
    /**
     * @private
     * @return {?}
     */
    fetchSearch() {
        return this.typeahead$.pipe(switchMap((/**
         * @param {?} term
         * @return {?}
         */
        (term) => {
            if (term) {
                if (term.length > this.maxTermLength) {
                    return of([]);
                }
                return this.getRequest(this.total, term);
            }
            else
                return of([]);
        }))).takeUntil(this.destroy$);
    }
    /**
     * @private
     * @return {?}
     */
    fetchNone() {
        return this.getRequest(this.total).takeUntil(this.destroy$);
    }
    /**
     * @private
     * @param {?=} offset
     * @param {?=} search
     * @return {?}
     */
    getRequest(offset, search) {
        /** @type {?} */
        let body;
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
                (result) => {
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
        (response) => {
            this.totalRecord = Number(response.totalRecord);
            this.total = this.total + Number(response.totalFiltered);
            return ((/** @type {?} */ (response['data'])));
        })), catchError((/**
         * @return {?}
         */
        () => of([]))));
    }
    /**
     * @param {?} event
     * @param {?} term
     * @return {?}
     */
    onKeyDown(event, term) {
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
    }
}
NgxaSelectComponent.decorators = [
    { type: Component, args: [{
                selector: 'xa-select',
                template: "<xa-container-outlet\n  [name]=\"name\" [label]=\"label\"\n  [colLabel]=\"colLabel\" [colContent]=\"colInput\"\n  [required]=\"required\" [hasErrors]=\"hasErrors\"\n  [errorMessages]=\"errorMessages\" [paramError]=\"paramError\"\n  [skeleton]=\"skeleton\">\n  <div class=\"col-sm-{{colInput}}\" *ngIf=\"!skeleton; else contentskeleton\">\n    <ng-select\n      [placeholder]=\"placeholder ? (placeholder | translate) : ''\"\n      [items]=\"items\"\n      [typeahead]=\"typeahead$\"\n      [multiple]=\"multiple\"\n      [loading]=\"loading\"\n      [notFoundText]=\"notFoundText | translate\"\n      [addTag]=\"addTag\"\n      [closeOnSelect]=\"closeOnSelect\"\n      [clearable]=\"required? false: clearable\"\n      [searchable]=\"searchable\"\n      [hideSelected]=\"hideSelected\"\n      [minTermLength]=\"minTermLength\"\n      [virtualScroll]=\"virtualScroll\"\n      [required]=\"required\"\n      [disabled]=\"disabled\"\n      (keydown)=\"onKeyDown($event, select.searchTerm)\"\n      (scroll)=\"onScroll($event, select.searchTerm)\"\n      (scrollToEnd)=\"onScrollToEnd(select.searchTerm)\"\n      (open)=\"onOpen()\"\n      (close)=\"onClose()\"\n      (clear)=\"doClear()\"\n      (change)=\"onChange($event)\"\n      (focus)=\"onTouched($event)\"\n      (blur)=\"onTouched($event)\"\n      [(ngModel)]=\"value\"\n      [ngClass]=\"{'required': required}\"\n      appendTo=\"body\"\n      typeToSearchText=\"{{typeToSearchText | translate:paramSearch}}\"\n      #select>\n        <ng-template *ngIf=\"contentTemplate\" ng-label-tmp let-item=\"item\">\n          <ng-container *ngTemplateOutlet=\"contentTemplate; context: {$implicit: item}\"></ng-container>\n        </ng-template>\n        <ng-template *ngIf=\"contentTemplate\" ng-option-tmp let-item=\"item\">\n          <ng-container *ngTemplateOutlet=\"contentTemplate; context: {$implicit: item}\"></ng-container>\n        </ng-template>\n    </ng-select>\n  </div>\n  <ng-template #contentskeleton>\n    <div class=\"col-sm-{{colInput}}\">\n      <div\n        [ngClass]=\"{\n          'input-skeleton': true,\n          'skeleton': skeleton\n        }\">\n      </div>\n    </div>\n  </ng-template>\n</xa-container-outlet>",
                encapsulation: ViewEncapsulation.None,
                styles: ["ng-select.ng-invalid.ng-touched .ng-select-container{border-color:#ff3d71}ng-select.ng-invalid.ng-touched:focus{border-color:#ff3d71;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 0 3px #fde6e8}ng-select.ng-valid.ng-touched.required .ng-select-container{border-color:#00d68f}ng-select.ng-valid.ng-touched.required:focus{border-color:#00d68f;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 0 3px #e4e9f2}body{font-size:1rem;font-weight:400;line-height:1.5;position:relative;font-family:Open Sans,sans-serif}.ng-select .ng-select-container{border-radius:.25rem;line-height:1.5rem;align-items:center;background-color:#f7f9fc;color:#1a2138;font-family:Open Sans,sans-serif;border:1px solid #edf1f7}"]
            }] }
];
/** @nocollapse */
NgxaSelectComponent.ctorParameters = () => [
    { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] },
    { type: Injector }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4YS1zZWxlY3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHhhcGhpcmEvbmd4YS1jb21tb24vIiwic291cmNlcyI6WyJsaWIvc2VsZWN0L25neGEtc2VsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsaUJBQWlCLEVBQ2pCLFFBQVEsRUFDUixJQUFJLEVBQ0osTUFBTSxFQUNOLFNBQVMsRUFDVCxRQUFRLEVBQ1IsaUJBQWlCLEVBRWpCLE1BQU0sRUFDTixZQUFZLEVBQ1osU0FBUyxFQUNULFlBQVksRUFDWixXQUFXLEdBQ1osTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzFFLE9BQU8sRUFBYyxPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9DLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVELE9BQU8sRUFBc0IsWUFBWSxFQUFpQixVQUFVLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUU5RixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQVE5RSxNQUFNLE9BQU8sbUJBQW9CLFNBQVEsaUJBQXNCOzs7Ozs7SUFrRDNELFlBQWdDLFNBQW9CLEVBQ3hCLE1BQWMsRUFDakMsUUFBa0I7UUFDekIsS0FBSyxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUZDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDakMsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQWxEbEIsYUFBUSxHQUFXLENBQUMsQ0FBQztRQUNyQixhQUFR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cUJBQ0wsS0FBSzs0QkFDTCxLQUFLO3dCQUNMLEtBQUs7eUJBQ0wsS0FBSzsyQkFDTCxLQUFLOzRCQUNMLEtBQUs7NEJBQ0wsS0FBSztrQkFDTCxLQUFLO29CQUNMLEtBQUs7NkJBQ0wsS0FBSzt5QkFDTCxLQUFLO3VCQUNMLE1BQU07c0JBQ04sTUFBTTtxQkFDTixTQUFTLFNBQUMsUUFBUSxFQUFFLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBQzs4QkFDbkMsWUFBWSxTQUFDLHNCQUFzQixFQUFFLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFDOzs7O0lBcEJ4RSwwQ0FBNkI7O0lBQzdCLHVDQUE4Qjs7SUFDOUIsdUNBQThCOztJQUM5QixvQ0FBMkM7O0lBQzNDLHVDQUFtQzs7SUFDbkMsc0NBQWtDOztJQUNsQyxxQ0FBaUM7O0lBQ2pDLDRDQUF1Qzs7SUFDdkMsd0NBQW1DOztJQUNuQyx5Q0FBb0M7O0lBQ3BDLDJDQUFzQzs7SUFDdEMsNENBQW1DOztJQUNuQyw0Q0FBb0M7O0lBQ3BDLGtDQUE0Qjs7SUFDNUIsb0NBQTRCOztJQUM1Qiw2Q0FBa0Q7O0lBQ2xELHlDQUF3Qzs7SUFDeEMsdUNBQWdFOztJQUNoRSxzQ0FBdUU7O0lBQ3ZFLHFDQUFnRTs7SUFDaEUsOENBQTBGOztJQUMxRiwyQ0FBZ0Q7O0lBQ2hELCtDQUFzRDs7SUFDdEQsNENBQXFDOztJQUNyQywwQ0FBd0Q7O0lBQ3hELHlDQUEyRDs7Ozs7SUFDM0QsbUNBQW1DOzs7OztJQUNuQyx1Q0FBb0Q7Ozs7O0lBQ3BELG9DQUEwQjs7Ozs7SUFDMUIsMENBQWdDOzs7OztJQUNoQyxvQ0FBaUM7O0lBQ2pDLHFDQUFtQjs7SUFtQmpCLHFDQUF3Qzs7SUFDeEMsdUNBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIE9wdGlvbmFsLFxuICBTZWxmLFxuICBJbmplY3QsXG4gIExPQ0FMRV9JRCxcbiAgSW5qZWN0b3IsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBPbkRlc3Ryb3ksXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBWaWV3Q2hpbGQsXG4gIENvbnRlbnRDaGlsZCxcbiAgVGVtcGxhdGVSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTmd4YVZhbHVlQWNjZXNzb3IgfSBmcm9tICcuLi9iYXNlL25neGEtdmFsdWUtYWNjZXNzb3IuY29tcG9uZW50JztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBzd2l0Y2hNYXAsIGNhdGNoRXJyb3IsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEh0dHBGYWN0b3J5U2VydmljZSwgSFRUUF9TRVJWSUNFLCBIdHRwQmFzZU1vZGVsLCBIdHRwTWV0aG9kIH0gZnJvbSAnQHhhcGhpcmEvc2hhcmVkJztcbmltcG9ydCB7IFNlbGVjdFBhcmFtTW9kZWwsIFNlbGVjdFJlc3BvbnNlTW9kZWwgfSBmcm9tICcuL3NlbGVjdC5tb2RlbCc7XG5pbXBvcnQgeyBOZ1NlbGVjdENvbXBvbmVudCB9IGZyb20gJ0BuZy1zZWxlY3Qvbmctc2VsZWN0JztcbmltcG9ydCB7IENvbnRlbnRTZWxlY3REaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZS9jb250ZW50LXNlbGVjdC5kaXJlY3RpdmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd4YS1zZWxlY3QnLFxuICBzdHlsZVVybHM6IFsnLi9uZ3hhLXNlbGVjdC5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vbmd4YS1zZWxlY3QuY29tcG9uZW50Lmh0bWwnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBOZ3hhU2VsZWN0Q29tcG9uZW50IGV4dGVuZHMgTmd4YVZhbHVlQWNjZXNzb3I8YW55PiBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gICAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgICBASW5wdXQoKSBjb2xMYWJlbDogbnVtYmVyID0gMztcbiAgICBASW5wdXQoKSBjb2xJbnB1dDogbnVtYmVyID0gOTtcbiAgICBASW5wdXQoKSBpdGVtczogU2VsZWN0UmVzcG9uc2VNb2RlbFtdID0gW107XG4gICAgQElucHV0KCkgbXVsdGlwbGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBASW5wdXQoKSBsb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XG4gICAgQElucHV0KCkgYWRkVGFnOiBib29sZWFuID0gZmFsc2U7XG4gICAgQElucHV0KCkgY2xvc2VPblNlbGVjdDogYm9vbGVhbiA9IHRydWU7XG4gICAgQElucHV0KCkgY2xlYXJhYmxlOiBib29sZWFuID0gdHJ1ZTtcbiAgICBASW5wdXQoKSBzZWFyY2hhYmxlOiBib29sZWFuID0gdHJ1ZTtcbiAgICBASW5wdXQoKSBoaWRlU2VsZWN0ZWQ6IGJvb2xlYW4gPSB0cnVlO1xuICAgIEBJbnB1dCgpIG1pblRlcm1MZW5ndGg6IG51bWJlciA9IDI7XG4gICAgQElucHV0KCkgbWF4VGVybUxlbmd0aDogbnVtYmVyID0gNTA7XG4gICAgQElucHV0KCkgYXBpOiBIdHRwQmFzZU1vZGVsO1xuICAgIEBJbnB1dCgpIGxpbWl0OiBudW1iZXIgPSA1MDtcbiAgICBASW5wdXQoKSBvZmZzZXROZXh0TG9hZDogbnVtYmVyID0gdGhpcy5saW1pdCAtIDM1O1xuICAgIEBJbnB1dCgpIHF1ZXJ5UGFyYW06IFNlbGVjdFBhcmFtTW9kZWxbXTtcbiAgICBAT3V0cHV0KCkgb25TZWxlY3Q6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gICAgQE91dHB1dCgpIG9uQ2xlYXI6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgICBAVmlld0NoaWxkKCdzZWxlY3QnLCB7c3RhdGljOiBmYWxzZX0pIHNlbGVjdDogTmdTZWxlY3RDb21wb25lbnQ7XG4gICAgQENvbnRlbnRDaGlsZChDb250ZW50U2VsZWN0RGlyZWN0aXZlLCB7c3RhdGljOiBmYWxzZSwgcmVhZDogVGVtcGxhdGVSZWZ9KSBjb250ZW50VGVtcGxhdGU7XG4gICAgcHVibGljIG5vdEZvdW5kVGV4dDogc3RyaW5nID0gJ3NlbGVjdC5ub3Rmb3VuZCc7XG4gICAgcHVibGljIHR5cGVUb1NlYXJjaFRleHQ6IHN0cmluZyA9ICdzZWxlY3QudHlwZXNlYXJjaCc7XG4gICAgcHVibGljIHZpcnR1YWxTY3JvbGw6IGJvb2xlYW4gPSB0cnVlO1xuICAgIHB1YmxpYyBwYXJhbVNlYXJjaDogYW55ID0geyB2YWx1ZTogdGhpcy5taW5UZXJtTGVuZ3RoIH07XG4gICAgcHVibGljIHR5cGVhaGVhZCQ6IFN1YmplY3Q8c3RyaW5nPiA9IG5ldyBTdWJqZWN0PHN0cmluZz4oKTtcbiAgICBwcm90ZWN0ZWQgaHR0cDogSHR0cEZhY3RvcnlTZXJ2aWNlO1xuICAgIHByaXZhdGUgZGVzdHJveSQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0PGFueT4oKTtcbiAgICBwcml2YXRlIHRvdGFsOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgdG90YWxSZWNvcmQ6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBjZHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWY7XG4gICAgcHVibGljIF92YWx1ZTogYW55O1xuXG4gICAgZ2V0IHZhbHVlKCk6IGFueSB7IHJldHVybiB0aGlzLl92YWx1ZTsgfVxuXG4gICAgc2V0IHZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICAgIGlmICh0aGlzLl92YWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgICAgICAgIHRoaXMub25DaGFuZ2UodmFsdWUpO1xuICAgICAgICAgIHRoaXMub25TZWxlY3QuZW1pdCh2YWx1ZSk7XG4gICAgICAgICAgY29uc3QgY29udHJvbCA9IHRoaXMubmdDb250cm9sLmNvbnRyb2w7XG4gICAgICAgICAgaWYgKGNvbnRyb2wpIHtcbiAgICAgICAgICAgICAgY29udHJvbC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gICAgICAgICAgICAgIGNvbnRyb2wubWFya0FzVG91Y2hlZCgpO1xuICAgICAgICAgICAgICBjb250cm9sLm1hcmtBc0RpcnR5KCk7XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBTZWxmKCkgbmdDb250cm9sOiBOZ0NvbnRyb2wsXG4gICAgICBASW5qZWN0KExPQ0FMRV9JRCkgcHVibGljIGxvY2FsZTogc3RyaW5nLFxuICAgICAgcHVibGljIGluamVjdG9yOiBJbmplY3Rvcikge1xuICAgICAgc3VwZXIobmdDb250cm9sLCBsb2NhbGUpO1xuICAgICAgdGhpcy5odHRwID0gaW5qZWN0b3IuZ2V0KEhUVFBfU0VSVklDRSk7XG4gICAgICB0aGlzLmNkcmVmID0gaW5qZWN0b3IuZ2V0KENoYW5nZURldGVjdG9yUmVmKTtcbiAgICB9XG5cbiAgICBvbkluaXQoKTogdm9pZCB7XG4gICAgICB0aGlzLnBhcmFtU2VhcmNoID0geyB2YWx1ZTogdGhpcy5taW5UZXJtTGVuZ3RoIH07XG4gICAgICBpZiAodGhpcy5hcGkpIHtcbiAgICAgICAgdGhpcy5mZXRjaFNlYXJjaCgpLnN1YnNjcmliZSgoaXRlbXM6IFNlbGVjdFJlc3BvbnNlTW9kZWxbXSkgPT4ge1xuICAgICAgICAgIHRoaXMuZmV0Y2hNb3JlKGl0ZW1zKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICB0aGlzLmRlc3Ryb3kkLm5leHQodHJ1ZSk7XG4gICAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gICAgICB0aGlzLmRlc3Ryb3kkLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLnR5cGVhaGVhZCQubmV4dChudWxsKTtcbiAgICAgIHRoaXMudHlwZWFoZWFkJC5jb21wbGV0ZSgpO1xuICAgICAgdGhpcy50eXBlYWhlYWQkLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgb25PcGVuKCk6IHZvaWQge1xuICAgICAgaWYgKHRoaXMuYXBpKSB7XG4gICAgICAgIGlmICh0aGlzLmxvYWRpbmcpIHJldHVybjtcbiAgICAgICAgdGhpcy50b3RhbCA9IDA7XG4gICAgICAgIHRoaXMuaXRlbXMgPSBbXTtcbiAgICAgICAgaWYgKCF0aGlzLnNlYXJjaGFibGUpIHtcbiAgICAgICAgICB0aGlzLmZldGNoTm9uZSgpLnN1YnNjcmliZSgoaXRlbXM6IFNlbGVjdFJlc3BvbnNlTW9kZWxbXSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5mZXRjaE1vcmUoaXRlbXMpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgb25DbG9zZSgpOiB2b2lkIHtcbiAgICAgIGlmICh0aGlzLmFwaSkge1xuICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgb25TY3JvbGwoeyBlbmQgfSwgc2VhcmNoOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgIGlmICghdGhpcy5sb2FkaW5nKSB7XG4gICAgICAgIGlmICgoTnVtYmVyKGVuZCkgKyB0aGlzLm9mZnNldE5leHRMb2FkKSA+PSB0aGlzLnRvdGFsICYmIHRoaXMudG90YWwgPiAwICAmJiB0aGlzLnRvdGFsIDwgdGhpcy50b3RhbFJlY29yZCkge1xuICAgICAgICAgIGlmICh0aGlzLnNlYXJjaGFibGUgJiYgc2VhcmNoKSB7XG4gICAgICAgICAgICB0aGlzLnR5cGVhaGVhZCQubmV4dChzZWFyY2gpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmZldGNoTm9uZSgpLnN1YnNjcmliZSgoaXRlbXM6IFNlbGVjdFJlc3BvbnNlTW9kZWxbXSkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmZldGNoTW9yZShpdGVtcyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBvblNjcm9sbFRvRW5kKHNlYXJjaDogc3RyaW5nKTogdm9pZCB7XG4gICAgICBpZiAoIXRoaXMubG9hZGluZykge1xuICAgICAgICBpZiAodGhpcy50b3RhbCA8IHRoaXMudG90YWxSZWNvcmQpIHtcbiAgICAgICAgICBpZiAodGhpcy5zZWFyY2hhYmxlICYmIHNlYXJjaCkge1xuICAgICAgICAgICAgdGhpcy50eXBlYWhlYWQkLm5leHQoc2VhcmNoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5mZXRjaE5vbmUoKS5zdWJzY3JpYmUoKGl0ZW1zOiBTZWxlY3RSZXNwb25zZU1vZGVsW10pID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5mZXRjaE1vcmUoaXRlbXMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZG9DbGVhcigpOiB2b2lkIHtcbiAgICAgIHRoaXMub25DbGVhci5lbWl0KHRydWUpO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVzZXQoKTogdm9pZCB7XG4gICAgICB0aGlzLnRvdGFsID0gMDtcbiAgICAgIHRoaXMuaXRlbXMgPSBbXTtcbiAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIHByaXZhdGUgZmV0Y2hNb3JlKGl0ZW1zOiBTZWxlY3RSZXNwb25zZU1vZGVsW10pOiB2b2lkIHtcbiAgICAgIHRoaXMuaXRlbXMgPSBbLi4udGhpcy5pdGVtcywgLi4uaXRlbXNdO1xuICAgICAgdGhpcy5jZHJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGZldGNoU2VhcmNoKCk6IE9ic2VydmFibGU8U2VsZWN0UmVzcG9uc2VNb2RlbFtdPiB7XG4gICAgICByZXR1cm4gdGhpcy50eXBlYWhlYWQkLnBpcGUoXG4gICAgICAgIHN3aXRjaE1hcCgodGVybTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgaWYgKHRlcm0pIHtcbiAgICAgICAgICAgIGlmICh0ZXJtLmxlbmd0aCA+IHRoaXMubWF4VGVybUxlbmd0aCkge1xuICAgICAgICAgICAgICByZXR1cm4gb2YoW10pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UmVxdWVzdCh0aGlzLnRvdGFsLCB0ZXJtKTtcbiAgICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgIHJldHVybiBvZihbXSk7XG4gICAgICAgIH0pKS50YWtlVW50aWwodGhpcy5kZXN0cm95JCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmZXRjaE5vbmUoKTogT2JzZXJ2YWJsZTxTZWxlY3RSZXNwb25zZU1vZGVsW10+IHtcbiAgICAgIHJldHVybiB0aGlzLmdldFJlcXVlc3QodGhpcy50b3RhbCkudGFrZVVudGlsKHRoaXMuZGVzdHJveSQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0UmVxdWVzdChvZmZzZXQ/OiBudW1iZXIsIHNlYXJjaD86IHN0cmluZyk6IE9ic2VydmFibGU8U2VsZWN0UmVzcG9uc2VNb2RlbFtdPiB7XG4gICAgICBsZXQgYm9keTogYW55O1xuICAgICAgaWYgKHRoaXMuYXBpLm1ldGhvZCA9PT0gSHR0cE1ldGhvZC5QT1NUKSB7XG4gICAgICAgIGJvZHkgPSB7XG4gICAgICAgICAgb2Zmc2V0OiBvZmZzZXQgPyBvZmZzZXQgOiAwLFxuICAgICAgICAgIGxpbWl0OiB0aGlzLmxpbWl0LFxuICAgICAgICAgIGtleXdvcmQgOiB7XG4gICAgICAgICAgICBfbGFiZWw6IHNlYXJjaCxcbiAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgICBpZiAodGhpcy5xdWVyeVBhcmFtKSB7XG4gICAgICAgICAgdGhpcy5xdWVyeVBhcmFtLmZvckVhY2goKHJlc3VsdDogU2VsZWN0UGFyYW1Nb2RlbCkgPT4ge1xuICAgICAgICAgICAgYm9keVsna2V5d29yZCddW3Jlc3VsdC5rZXldID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5IVFRQX0FVVEgodGhpcy5hcGksIGJvZHkpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcCgocmVzcG9uc2U6IGFueSkgPT4ge1xuICAgICAgICAgICAgdGhpcy50b3RhbFJlY29yZCA9IE51bWJlcihyZXNwb25zZS50b3RhbFJlY29yZCk7XG4gICAgICAgICAgICB0aGlzLnRvdGFsID0gdGhpcy50b3RhbCArIE51bWJlcihyZXNwb25zZS50b3RhbEZpbHRlcmVkKTtcbiAgICAgICAgICAgIHJldHVybiAoPFNlbGVjdFJlc3BvbnNlTW9kZWxbXT4gcmVzcG9uc2VbJ2RhdGEnXSk7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2F0Y2hFcnJvcigoKSA9PiBvZihbXSkpKTtcbiAgICB9XG5cbiAgICBvbktleURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQsIHRlcm06IHN0cmluZykge1xuICAgICAgaWYgKFxuICAgICAgICAgIFs0NiwgOCwgMjcsIDEzLCAzMiwgMTEwLCAxOTAsIDE4OSwgMTYsIDIwLCAxOCwgMjIyLCAxOTFdLmluZGV4T2YoZXZlbnQua2V5Q29kZSkgIT09IC0xIHx8XG4gICAgICAgICAgKGV2ZW50LmtleUNvZGUgPT09IDY1ICYmIGV2ZW50LmN0cmxLZXkgPT09IHRydWUpIHx8IC8vIEFsbG93OiBDdHJsK0FcbiAgICAgICAgICAoZXZlbnQua2V5Q29kZSA9PT0gNjcgJiYgZXZlbnQuY3RybEtleSA9PT0gdHJ1ZSkgfHwgLy8gQWxsb3c6IEN0cmwrQ1xuICAgICAgICAgIChldmVudC5rZXlDb2RlID09PSA4NiAmJiBldmVudC5jdHJsS2V5ID09PSB0cnVlKSB8fCAvLyBBbGxvdzogQ3RybCtWXG4gICAgICAgICAgKGV2ZW50LmtleUNvZGUgPT09IDg4ICYmIGV2ZW50LmN0cmxLZXkgPT09IHRydWUpIHx8IC8vIEFsbG93OiBDdHJsK1hcbiAgICAgICAgICAoZXZlbnQua2V5Q29kZSA9PT0gNjUgJiYgZXZlbnQubWV0YUtleSA9PT0gdHJ1ZSkgfHwgLy8gQ21kK0EgKE1hYylcbiAgICAgICAgICAoZXZlbnQua2V5Q29kZSA9PT0gNjcgJiYgZXZlbnQubWV0YUtleSA9PT0gdHJ1ZSkgfHwgLy8gQ21kK0MgKE1hYylcbiAgICAgICAgICAoZXZlbnQua2V5Q29kZSA9PT0gODYgJiYgZXZlbnQubWV0YUtleSA9PT0gdHJ1ZSkgfHwgLy8gQ21kK1YgKE1hYylcbiAgICAgICAgICAoZXZlbnQua2V5Q29kZSA9PT0gODggJiYgZXZlbnQubWV0YUtleSA9PT0gdHJ1ZSkgfHwgLy8gQ21kK1ggKE1hYylcbiAgICAgICAgICAoZXZlbnQua2V5Q29kZSA+PSAzNSAmJiBldmVudC5rZXlDb2RlIDw9IDM5KSB8fCAvLyBIb21lLCBFbmQsIExlZnQsIFJpZ2h0XG4gICAgICAgICAgKGV2ZW50LmtleUNvZGUgPj0gNjUgJiYgZXZlbnQua2V5Q29kZSA8PSA5MCkgfHxcbiAgICAgICAgICAoIWV2ZW50LnNoaWZ0S2V5ICYmIChldmVudC5rZXlDb2RlID49IDQ4ICYmIGV2ZW50LmtleUNvZGUgPD0gNTcpKSB8fFxuICAgICAgICAgIChldmVudC5rZXlDb2RlID49IDk2ICYmIGV2ZW50LmtleUNvZGUgPD0gMTA1KSkge1xuICAgICAgICAgIGlmICgoKCFldmVudC5jdHJsS2V5ICYmICFldmVudC5hbHRLZXkgJiYgIWV2ZW50Lm1ldGFLZXkpICYmXG4gICAgICAgICAgICAgICgoWzQ2LCA4LCAzMl0uaW5kZXhPZihldmVudC5rZXlDb2RlKSAhPT0gLTEpIHx8XG4gICAgICAgICAgICAgIChldmVudC5rZXlDb2RlID49IDY1ICYmIGV2ZW50LmtleUNvZGUgPD0gOTApIHx8XG4gICAgICAgICAgICAgIChldmVudC5rZXlDb2RlID49IDQ4ICYmIGV2ZW50LmtleUNvZGUgPD0gNTcpIHx8XG4gICAgICAgICAgICAgIChldmVudC5rZXlDb2RlID49IDk2ICYmIGV2ZW50LmtleUNvZGUgPD0gMTA1KSkpIHx8XG4gICAgICAgICAgICAgICgoZXZlbnQuY3RybEtleSB8fCBldmVudC5tZXRhS2V5KSAmJiBldmVudC5rZXlDb2RlID09PSA5MCkgfHxcbiAgICAgICAgICAgICAgKChldmVudC5jdHJsS2V5IHx8IGV2ZW50Lm1ldGFLZXkpICYmIGV2ZW50LmtleUNvZGUgPT09IDg5KSkge1xuICAgICAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodGVybSkge1xuICAgICAgICAgICAgaWYgKHRlcm0ubGVuZ3RoID4gdGhpcy5tYXhUZXJtTGVuZ3RoKSB7XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG59XG4iXX0=