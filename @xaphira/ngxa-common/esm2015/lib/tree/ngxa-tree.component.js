/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, EventEmitter, Output, ContentChild, ViewEncapsulation, ContentChildren, TemplateRef, QueryList, ChangeDetectionStrategy, ChangeDetectorRef, } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NgxaTreeNodeComponent } from './ngxa-tree-node.component';
export class NgxaTreeComponent {
    /**
     * @param {?} _cdr
     */
    constructor(_cdr) {
        this._cdr = _cdr;
        this.icons = {
            collapse: 'plus-circle',
            expand: 'minus-circle',
        };
        this.expand = new EventEmitter();
        this.collapse = new EventEmitter();
        this.activate = new EventEmitter();
        this.deactivate = new EventEmitter();
        this.selectNode = new EventEmitter();
        this._destroy$ = new Subject();
    }
    /**
     * @return {?}
     */
    get hasOneLeaf() {
        return (this.nodes && this.nodes.length === 1) || this.nodeElms.length === 1;
    }
    /**
     * @return {?}
     */
    get template() {
        return this._templateInput || this._templateQuery;
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.nodeElms.changes.pipe(takeUntil(this._destroy$)).subscribe((/**
         * @return {?}
         */
        () => this._cdr.markForCheck()));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._destroy$.next();
        this._destroy$.complete();
    }
}
NgxaTreeComponent.decorators = [
    { type: Component, args: [{
                selector: 'xa-tree',
                template: "<div class=\"xa-tree\" [class.one-leaf]=\"hasOneLeaf\">\n  <ul class=\"vertical-list\">\n    <xa-tree-node\n      *ngFor=\"let node of nodes\"\n      [node]=\"node\"\n      [expandable]=\"node.expandable\"\n      [expanded]=\"node.expanded\"\n      [icons]=\"icons\"\n      [label]=\"node.label\"\n      [model]=\"node.model\"\n      [children]=\"node.children\"\n      [template]=\"template\"\n      (expand)=\"expand.emit($event)\"\n      (collapse)=\"collapse.emit($event)\"\n      (activate)=\"activate.emit($event)\"\n      (deactivate)=\"deactivate.emit($event)\"\n      (selectNode)=\"selectNode.emit($event)\"\n    >\n    </xa-tree-node>\n    <ng-content *ngIf=\"!nodes\"></ng-content>\n  </ul>\n  <div class=\"ngx-tree-vr\" *ngIf=\"nodes?.length || nodeElms?.length\"></div>\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".nb-theme-default nb-icon{font-size:.75rem;display:-ms-inline-grid;display:inline-grid;background-color:#fff;color:#667080}.vertical-list{padding:0;margin:0;list-style:none}.xa-tree{position:relative}.xa-tree .xa-tree-node{position:relative;padding-left:20px;line-height:25px;min-height:25px}.xa-tree .xa-tree-node .ngx-expander{font-size:.75rem;color:#1a2138;position:absolute;left:-.03rem;top:3px;z-index:1;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.xa-tree .xa-tree-node .ngx-expander:not(.disabled){cursor:pointer}.xa-tree .xa-tree-node .ngx-expander.minus-circle::before,.xa-tree .xa-tree-node .ngx-expander.plus-circle::before{background:#1c2029;border-radius:50%}.xa-tree .xa-tree-node .ngx-node-label{color:#1a2138;font-size:.9rem}.xa-tree .xa-tree-node .ngx-tree{margin-left:5px}.xa-tree .xa-tree-node.selectable>.ngx-node-label:not(.disabled){cursor:pointer}.xa-tree.one-leaf>.ngx-tree-vr::before{display:none}.xa-tree .ngx-tree-vr{position:absolute;top:17px;bottom:12px;left:5px;border-left:1px dashed #667080;width:1px}.xa-tree .ngx-tree-vr::after{content:' ';width:5px;height:5px;border-radius:5px;background:#667080;position:absolute;bottom:-3px;left:-3px}.xa-tree .ngx-tree-vr::before{content:' ';width:5px;height:5px;border-radius:5px;background:0 0;border:1px solid #667080;position:absolute;top:-5px;left:-3px}"]
            }] }
];
/** @nocollapse */
NgxaTreeComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
NgxaTreeComponent.propDecorators = {
    nodes: [{ type: Input }],
    _templateInput: [{ type: Input, args: ['template',] }],
    icons: [{ type: Input }],
    _templateQuery: [{ type: ContentChild, args: [TemplateRef, { static: true },] }],
    nodeElms: [{ type: ContentChildren, args: [NgxaTreeNodeComponent,] }],
    expand: [{ type: Output }],
    collapse: [{ type: Output }],
    activate: [{ type: Output }],
    deactivate: [{ type: Output }],
    selectNode: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    NgxaTreeComponent.prototype.nodes;
    /** @type {?} */
    NgxaTreeComponent.prototype._templateInput;
    /** @type {?} */
    NgxaTreeComponent.prototype.icons;
    /** @type {?} */
    NgxaTreeComponent.prototype._templateQuery;
    /** @type {?} */
    NgxaTreeComponent.prototype.nodeElms;
    /** @type {?} */
    NgxaTreeComponent.prototype.expand;
    /** @type {?} */
    NgxaTreeComponent.prototype.collapse;
    /** @type {?} */
    NgxaTreeComponent.prototype.activate;
    /** @type {?} */
    NgxaTreeComponent.prototype.deactivate;
    /** @type {?} */
    NgxaTreeComponent.prototype.selectNode;
    /**
     * @type {?}
     * @private
     */
    NgxaTreeComponent.prototype._destroy$;
    /**
     * @type {?}
     * @private
     */
    NgxaTreeComponent.prototype._cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4YS10cmVlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B4YXBoaXJhL25neGEtY29tbW9uLyIsInNvdXJjZXMiOlsibGliL3RyZWUvbmd4YS10cmVlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsWUFBWSxFQUNaLE1BQU0sRUFDTixZQUFZLEVBQ1osaUJBQWlCLEVBQ2pCLGVBQWUsRUFDZixXQUFXLEVBQ1gsU0FBUyxFQUNULHVCQUF1QixFQUN2QixpQkFBaUIsR0FHbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFVbkUsTUFBTSxPQUFPLGlCQUFpQjs7OztJQWdDNUIsWUFBNkIsSUFBdUI7UUFBdkIsU0FBSSxHQUFKLElBQUksQ0FBbUI7UUExQjNDLFVBQUssR0FBRztZQUNmLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLE1BQU0sRUFBRSxjQUFjO1NBQ3ZCLENBQUM7UUFPUSxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM1QixhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM5QixhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM5QixlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNoQyxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQVV6QixjQUFTLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztJQUVNLENBQUM7Ozs7SUFWeEQsSUFBSSxVQUFVO1FBQ1osT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO0lBQy9FLENBQUM7Ozs7SUFFRCxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxjQUFjLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUNwRCxDQUFDOzs7O0lBTUQsa0JBQWtCO1FBQ2hCLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUzs7O1FBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFBQyxDQUFDO0lBQ2xHLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzVCLENBQUM7OztZQWhERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFNBQVM7Z0JBQ25CLHF5QkFBeUM7Z0JBRXpDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7YUFDaEQ7Ozs7WUFoQkMsaUJBQWlCOzs7b0JBa0JoQixLQUFLOzZCQUVMLEtBQUssU0FBQyxVQUFVO29CQUdoQixLQUFLOzZCQUtMLFlBQVksU0FBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO3VCQUcxQyxlQUFlLFNBQUMscUJBQXFCO3FCQUVyQyxNQUFNO3VCQUNOLE1BQU07dUJBQ04sTUFBTTt5QkFDTixNQUFNO3lCQUNOLE1BQU07Ozs7SUFuQlAsa0NBQTJCOztJQUUzQiwyQ0FDaUM7O0lBRWpDLGtDQUdFOztJQUVGLDJDQUNpQzs7SUFFakMscUNBQTRGOztJQUU1RixtQ0FBc0M7O0lBQ3RDLHFDQUF3Qzs7SUFDeEMscUNBQXdDOztJQUN4Qyx1Q0FBMEM7O0lBQzFDLHVDQUEwQzs7Ozs7SUFVMUMsc0NBQWlEOzs7OztJQUVyQyxpQ0FBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIE91dHB1dCxcbiAgQ29udGVudENoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgQ29udGVudENoaWxkcmVuLFxuICBUZW1wbGF0ZVJlZixcbiAgUXVlcnlMaXN0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIE9uRGVzdHJveSxcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IE5neGFUcmVlTm9kZUNvbXBvbmVudCB9IGZyb20gJy4vbmd4YS10cmVlLW5vZGUuY29tcG9uZW50JztcbmltcG9ydCB7IFRyZWVOb2RlIH0gZnJvbSAnLi90cmVlLW5vZGUubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd4YS10cmVlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL25neGEtdHJlZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL25neGEtdHJlZS5jb21wb25lbnQuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTmd4YVRyZWVDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBub2RlczogVHJlZU5vZGVbXTtcblxuICBASW5wdXQoJ3RlbXBsYXRlJylcbiAgX3RlbXBsYXRlSW5wdXQ6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQElucHV0KCkgaWNvbnMgPSB7XG4gICAgY29sbGFwc2U6ICdwbHVzLWNpcmNsZScsXG4gICAgZXhwYW5kOiAnbWludXMtY2lyY2xlJyxcbiAgfTtcblxuICBAQ29udGVudENoaWxkKFRlbXBsYXRlUmVmLCB7IHN0YXRpYzogdHJ1ZSB9KVxuICBfdGVtcGxhdGVRdWVyeTogVGVtcGxhdGVSZWY8YW55PjtcblxuICBAQ29udGVudENoaWxkcmVuKE5neGFUcmVlTm9kZUNvbXBvbmVudCkgcmVhZG9ubHkgbm9kZUVsbXM6IFF1ZXJ5TGlzdDxOZ3hhVHJlZU5vZGVDb21wb25lbnQ+O1xuXG4gIEBPdXRwdXQoKSBleHBhbmQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBjb2xsYXBzZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGFjdGl2YXRlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgZGVhY3RpdmF0ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHNlbGVjdE5vZGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgZ2V0IGhhc09uZUxlYWYoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICh0aGlzLm5vZGVzICYmIHRoaXMubm9kZXMubGVuZ3RoID09PSAxKSB8fCB0aGlzLm5vZGVFbG1zLmxlbmd0aCA9PT0gMTtcbiAgfVxuXG4gIGdldCB0ZW1wbGF0ZSgpOiBUZW1wbGF0ZVJlZjxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5fdGVtcGxhdGVJbnB1dCB8fCB0aGlzLl90ZW1wbGF0ZVF1ZXJ5O1xuICB9XG5cbiAgcHJpdmF0ZSByZWFkb25seSBfZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgX2NkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMubm9kZUVsbXMuY2hhbmdlcy5waXBlKHRha2VVbnRpbCh0aGlzLl9kZXN0cm95JCkpLnN1YnNjcmliZSgoKSA9PiB0aGlzLl9jZHIubWFya0ZvckNoZWNrKCkpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuX2Rlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cbn1cbiJdfQ==