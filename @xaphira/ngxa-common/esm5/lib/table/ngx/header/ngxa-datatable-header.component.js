/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewEncapsulation, Output, EventEmitter, ViewChild, } from '@angular/core';
import { NgxaDatatableCollapseComponent } from './collapse/ngxa-datatable-collapse.component';
import { FormGroup } from '@angular/forms';
var NgxaDatatableHeaderComponent = /** @class */ (function () {
    function NgxaDatatableHeaderComponent() {
        this.header = true;
        this.footer = true;
        this.add = true;
        this.edit = true;
        this.delete = false;
        this.filter = true;
        this.onSearch = new EventEmitter();
        this.onFilter = new EventEmitter();
        this.onAdd = new EventEmitter();
        this.onDelete = new EventEmitter();
        this.showFilter = false;
        this.disabledButtonFilter = true;
    }
    /**
     * @return {?}
     */
    NgxaDatatableHeaderComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} search
     * @return {?}
     */
    NgxaDatatableHeaderComponent.prototype.doSearch = /**
     * @param {?} search
     * @return {?}
     */
    function (search) {
        if (this.showFilter)
            this.doFilterFunnel();
        this.onSearch.emit(search);
    };
    /**
     * @return {?}
     */
    NgxaDatatableHeaderComponent.prototype.doFilterFunnel = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._search = undefined;
        this.collapse.toggle();
        this.showFilter = !this.showFilter;
        if (!this.showFilter) {
            this.formGroupFilter.reset();
        }
        else {
            this.formGroupFilter.valueChanges.subscribe((/**
             * @param {?} val
             * @return {?}
             */
            function (val) {
                _this.disabledButtonFilter = false;
            }));
        }
    };
    /**
     * @return {?}
     */
    NgxaDatatableHeaderComponent.prototype.doFilter = /**
     * @return {?}
     */
    function () {
        this.onFilter.emit(this.formGroupFilter.value);
    };
    /**
     * @return {?}
     */
    NgxaDatatableHeaderComponent.prototype.doAdd = /**
     * @return {?}
     */
    function () {
        this.onAdd.emit(true);
    };
    /**
     * @return {?}
     */
    NgxaDatatableHeaderComponent.prototype.doDelete = /**
     * @return {?}
     */
    function () {
        this.onDelete.emit(true);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NgxaDatatableHeaderComponent.prototype.onKeyDown = /**
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
    NgxaDatatableHeaderComponent.prototype.onFocusSearch = /**
     * @return {?}
     */
    function () {
        if (this.showFilter)
            this.doFilterFunnel();
    };
    NgxaDatatableHeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'xa-datatable-header',
                    template: "<div class=\"header-datatable\" *ngIf=\"header\">\n    <div class=\"header-action\" *ngIf=\"add\">\n        <nb-icon\n            class=\"action-add\"\n            icon=\"file-add\"\n            (click)=\"doAdd()\">\n        </nb-icon>\n    </div>\n    <div class=\"header-action\" *ngIf=\"delete\">\n        <nb-icon\n            class=\"action-trash\"\n            icon=\"trash-2\"\n            (click)=\"doDelete()\">\n        </nb-icon>\n    </div>\n    <div class=\"header-filter\" *ngIf=\"filter\">\n        <xa-input-base-icon\n            [name]=\"'_filter.datatable'\"\n            [placeholder]=\"'datatable.typesearch'\"\n            [iconcursor]=\"true\"\n            [(ngModel)]=\"_search\"\n            (clickIcon)=\"doSearch($event)\"\n            (keydown)=\"onKeyDown($event)\"\n            (focus)=\"onFocusSearch()\">\n        </xa-input-base-icon>\n    </div>\n    <div class=\"filter-funnel\" *ngIf=\"filter && formGroupFilter\">\n        <nb-icon\n            class=\"filter-icon-funnel\"\n            [icon]=\"showFilter ? 'arrow-upward-outline' : 'funnel'\"\n            (click)=\"doFilterFunnel()\">\n        </nb-icon>\n    </div>\n</div>\n<div *ngIf=\"filter && formGroupFilter\" xa-datatable-collapse #collapse>\n    <ng-content></ng-content>\n    <div class=\"form-group row\">\n        <div class=\"offset-sm-3 col-sm-9\">\n          <button\n            type=\"submit\"\n            status=\"primary\"\n            (click)=\"doFilter()\"\n            nbButton>\n            {{ 'Search' | translate}}\n          </button>\n        </div>\n    </div>\n</div>",
                    encapsulation: ViewEncapsulation.None,
                    styles: [".header-datatable{width:100%;display:flex;padding-bottom:.3rem}.header-filter{width:100%}.filter-funnel{right:0;padding:10px 5px;cursor:pointer}.filter-icon-funnel:hover{color:#ffc94d}.header-action{left:0;padding:10px 5px;cursor:pointer}.action-add:hover{color:#598bff}.action-trash:hover{color:#ff708d}"]
                }] }
    ];
    NgxaDatatableHeaderComponent.propDecorators = {
        header: [{ type: Input }],
        footer: [{ type: Input }],
        add: [{ type: Input }],
        edit: [{ type: Input }],
        delete: [{ type: Input }],
        filter: [{ type: Input }],
        formGroupFilter: [{ type: Input }],
        onSearch: [{ type: Output }],
        onFilter: [{ type: Output }],
        onAdd: [{ type: Output }],
        onDelete: [{ type: Output }],
        collapse: [{ type: ViewChild, args: ['collapse', { static: false },] }]
    };
    return NgxaDatatableHeaderComponent;
}());
export { NgxaDatatableHeaderComponent };
if (false) {
    /** @type {?} */
    NgxaDatatableHeaderComponent.prototype.header;
    /** @type {?} */
    NgxaDatatableHeaderComponent.prototype.footer;
    /** @type {?} */
    NgxaDatatableHeaderComponent.prototype.add;
    /** @type {?} */
    NgxaDatatableHeaderComponent.prototype.edit;
    /** @type {?} */
    NgxaDatatableHeaderComponent.prototype.delete;
    /** @type {?} */
    NgxaDatatableHeaderComponent.prototype.filter;
    /** @type {?} */
    NgxaDatatableHeaderComponent.prototype.formGroupFilter;
    /** @type {?} */
    NgxaDatatableHeaderComponent.prototype.onSearch;
    /** @type {?} */
    NgxaDatatableHeaderComponent.prototype.onFilter;
    /** @type {?} */
    NgxaDatatableHeaderComponent.prototype.onAdd;
    /** @type {?} */
    NgxaDatatableHeaderComponent.prototype.onDelete;
    /** @type {?} */
    NgxaDatatableHeaderComponent.prototype.collapse;
    /** @type {?} */
    NgxaDatatableHeaderComponent.prototype._search;
    /** @type {?} */
    NgxaDatatableHeaderComponent.prototype.showFilter;
    /** @type {?} */
    NgxaDatatableHeaderComponent.prototype.disabledButtonFilter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4YS1kYXRhdGFibGUtaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B4YXBoaXJhL25neGEtY29tbW9uLyIsInNvdXJjZXMiOlsibGliL3RhYmxlL25neC9oZWFkZXIvbmd4YS1kYXRhdGFibGUtaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsaUJBQWlCLEVBRWpCLE1BQU0sRUFDTixZQUFZLEVBQ1osU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQzlGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQztJQUFBO1FBT1csV0FBTSxHQUFZLElBQUksQ0FBQztRQUN2QixXQUFNLEdBQVksSUFBSSxDQUFDO1FBQ3ZCLFFBQUcsR0FBWSxJQUFJLENBQUM7UUFDcEIsU0FBSSxHQUFZLElBQUksQ0FBQztRQUNyQixXQUFNLEdBQVksS0FBSyxDQUFDO1FBQ3hCLFdBQU0sR0FBWSxJQUFJLENBQUM7UUFFdEIsYUFBUSxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO1FBQzVELGFBQVEsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUN0RCxVQUFLLEdBQTBCLElBQUksWUFBWSxFQUFXLENBQUM7UUFDM0QsYUFBUSxHQUEwQixJQUFJLFlBQVksRUFBVyxDQUFDO1FBSWpFLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFDNUIseUJBQW9CLEdBQVksSUFBSSxDQUFDO0lBNEM5QyxDQUFDOzs7O0lBMUNDLGtEQUFXOzs7SUFBWCxjQUFxQixDQUFDOzs7OztJQUV0QiwrQ0FBUTs7OztJQUFSLFVBQVMsTUFBYztRQUNyQixJQUFJLElBQUksQ0FBQyxVQUFVO1lBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQzNDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzdCLENBQUM7Ozs7SUFFRCxxREFBYzs7O0lBQWQ7UUFBQSxpQkFXQztRQVZDLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDcEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUM5QjthQUFNO1lBQ0wsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsU0FBUzs7OztZQUFDLFVBQUEsR0FBRztnQkFDN0MsS0FBSSxDQUFDLG9CQUFvQixHQUFHLEtBQUssQ0FBQztZQUNwQyxDQUFDLEVBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7OztJQUVELCtDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakQsQ0FBQzs7OztJQUVELDRDQUFLOzs7SUFBTDtRQUNFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFFRCwrQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQixDQUFDOzs7OztJQUVELGdEQUFTOzs7O0lBQVQsVUFBVSxLQUFvQjtRQUM1QixJQUFJLEtBQUssQ0FBQyxPQUFPLEtBQUssRUFBRSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzdCO0lBQ0gsQ0FBQzs7OztJQUVELG9EQUFhOzs7SUFBYjtRQUNFLElBQUksSUFBSSxDQUFDLFVBQVU7WUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDN0MsQ0FBQzs7Z0JBaEVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUscUJBQXFCO29CQUUvQiwrakRBQXFEO29CQUNyRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7aUJBQ3RDOzs7eUJBRUUsS0FBSzt5QkFDTCxLQUFLO3NCQUNMLEtBQUs7dUJBQ0wsS0FBSzt5QkFDTCxLQUFLO3lCQUNMLEtBQUs7a0NBQ0wsS0FBSzsyQkFDTCxNQUFNOzJCQUNOLE1BQU07d0JBQ04sTUFBTTsyQkFDTixNQUFNOzJCQUNOLFNBQVMsU0FBQyxVQUFVLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDOztJQWdEeEMsbUNBQUM7Q0FBQSxBQWxFRCxJQWtFQztTQTVEWSw0QkFBNEI7OztJQUN2Qyw4Q0FBZ0M7O0lBQ2hDLDhDQUFnQzs7SUFDaEMsMkNBQTZCOztJQUM3Qiw0Q0FBOEI7O0lBQzlCLDhDQUFpQzs7SUFDakMsOENBQWdDOztJQUNoQyx1REFBb0M7O0lBQ3BDLGdEQUFzRTs7SUFDdEUsZ0RBQWdFOztJQUNoRSw2Q0FBcUU7O0lBQ3JFLGdEQUF3RTs7SUFDeEUsZ0RBQWlGOztJQUVqRiwrQ0FBdUI7O0lBQ3ZCLGtEQUFtQzs7SUFDbkMsNERBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIE9uRGVzdHJveSxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIFZpZXdDaGlsZCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ3hhRGF0YXRhYmxlQ29sbGFwc2VDb21wb25lbnQgfSBmcm9tICcuL2NvbGxhcHNlL25neGEtZGF0YXRhYmxlLWNvbGxhcHNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3hhLWRhdGF0YWJsZS1oZWFkZXInLFxuICBzdHlsZVVybHM6IFsnLi9uZ3hhLWRhdGF0YWJsZS1oZWFkZXIuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL25neGEtZGF0YXRhYmxlLWhlYWRlci5jb21wb25lbnQuaHRtbCcsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIE5neGFEYXRhdGFibGVIZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBoZWFkZXI6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBmb290ZXI6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBhZGQ6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBlZGl0OiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgZGVsZXRlOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGZpbHRlcjogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIGZvcm1Hcm91cEZpbHRlcjogRm9ybUdyb3VwO1xuICBAT3V0cHV0KCkgb25TZWFyY2g6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gIEBPdXRwdXQoKSBvbkZpbHRlcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIG9uQWRkOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIEBPdXRwdXQoKSBvbkRlbGV0ZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICBAVmlld0NoaWxkKCdjb2xsYXBzZScsIHtzdGF0aWM6IGZhbHNlfSkgY29sbGFwc2U6IE5neGFEYXRhdGFibGVDb2xsYXBzZUNvbXBvbmVudDtcblxuICBwdWJsaWMgX3NlYXJjaDogc3RyaW5nO1xuICBwdWJsaWMgc2hvd0ZpbHRlcjogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgZGlzYWJsZWRCdXR0b25GaWx0ZXI6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge31cblxuICBkb1NlYXJjaChzZWFyY2g6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLnNob3dGaWx0ZXIpIHRoaXMuZG9GaWx0ZXJGdW5uZWwoKTtcbiAgICB0aGlzLm9uU2VhcmNoLmVtaXQoc2VhcmNoKTtcbiAgfVxuXG4gIGRvRmlsdGVyRnVubmVsKCk6IHZvaWQge1xuICAgIHRoaXMuX3NlYXJjaCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmNvbGxhcHNlLnRvZ2dsZSgpO1xuICAgIHRoaXMuc2hvd0ZpbHRlciA9ICF0aGlzLnNob3dGaWx0ZXI7XG4gICAgaWYgKCF0aGlzLnNob3dGaWx0ZXIpIHtcbiAgICAgIHRoaXMuZm9ybUdyb3VwRmlsdGVyLnJlc2V0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZm9ybUdyb3VwRmlsdGVyLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUodmFsID0+IHtcbiAgICAgICAgdGhpcy5kaXNhYmxlZEJ1dHRvbkZpbHRlciA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZG9GaWx0ZXIoKTogdm9pZCB7XG4gICAgdGhpcy5vbkZpbHRlci5lbWl0KHRoaXMuZm9ybUdyb3VwRmlsdGVyLnZhbHVlKTtcbiAgfVxuXG4gIGRvQWRkKCk6IHZvaWQge1xuICAgIHRoaXMub25BZGQuZW1pdCh0cnVlKTtcbiAgfVxuXG4gIGRvRGVsZXRlKCk6IHZvaWQge1xuICAgIHRoaXMub25EZWxldGUuZW1pdCh0cnVlKTtcbiAgfVxuXG4gIG9uS2V5RG93bihldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMykge1xuICAgICAgdGhpcy5kb1NlYXJjaCh0aGlzLl9zZWFyY2gpO1xuICAgIH1cbiAgfVxuXG4gIG9uRm9jdXNTZWFyY2goKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc2hvd0ZpbHRlcikgdGhpcy5kb0ZpbHRlckZ1bm5lbCgpO1xuICB9XG5cbn1cbiJdfQ==