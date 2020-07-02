/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, EventEmitter, Output, ContentChild, ViewEncapsulation, ContentChildren, TemplateRef, QueryList, ChangeDetectionStrategy, ChangeDetectorRef, } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NgxaTreeNodeComponent } from './ngxa-tree-node.component';
var NgxaTreeComponent = /** @class */ (function () {
    function NgxaTreeComponent(_cdr) {
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
    Object.defineProperty(NgxaTreeComponent.prototype, "hasOneLeaf", {
        get: /**
         * @return {?}
         */
        function () {
            return (this.nodes && this.nodes.length === 1) || this.nodeElms.length === 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxaTreeComponent.prototype, "template", {
        get: /**
         * @return {?}
         */
        function () {
            return this._templateInput || this._templateQuery;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NgxaTreeComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.nodeElms.changes.pipe(takeUntil(this._destroy$)).subscribe((/**
         * @return {?}
         */
        function () { return _this._cdr.markForCheck(); }));
    };
    /**
     * @return {?}
     */
    NgxaTreeComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._destroy$.next();
        this._destroy$.complete();
    };
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
    NgxaTreeComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
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
    return NgxaTreeComponent;
}());
export { NgxaTreeComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4YS10cmVlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B4YXBoaXJhL25neGEtY29tbW9uLyIsInNvdXJjZXMiOlsibGliL3RyZWUvbmd4YS10cmVlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsWUFBWSxFQUNaLE1BQU0sRUFDTixZQUFZLEVBQ1osaUJBQWlCLEVBQ2pCLGVBQWUsRUFDZixXQUFXLEVBQ1gsU0FBUyxFQUNULHVCQUF1QixFQUN2QixpQkFBaUIsR0FHbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFHbkU7SUF1Q0UsMkJBQTZCLElBQXVCO1FBQXZCLFNBQUksR0FBSixJQUFJLENBQW1CO1FBMUIzQyxVQUFLLEdBQUc7WUFDZixRQUFRLEVBQUUsYUFBYTtZQUN2QixNQUFNLEVBQUUsY0FBYztTQUN2QixDQUFDO1FBT1EsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDNUIsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDOUIsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDOUIsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDaEMsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFVekIsY0FBUyxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7SUFFTSxDQUFDO0lBVnhELHNCQUFJLHlDQUFVOzs7O1FBQWQ7WUFDRSxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7UUFDL0UsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSx1Q0FBUTs7OztRQUFaO1lBQ0UsT0FBTyxJQUFJLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUM7UUFDcEQsQ0FBQzs7O09BQUE7Ozs7SUFNRCw4Q0FBa0I7OztJQUFsQjtRQUFBLGlCQUVDO1FBREMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxTQUFTOzs7UUFBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFBeEIsQ0FBd0IsRUFBQyxDQUFDO0lBQ2xHLENBQUM7Ozs7SUFFRCx1Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDNUIsQ0FBQzs7Z0JBaERGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsU0FBUztvQkFDbkIscXlCQUF5QztvQkFFekMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOztpQkFDaEQ7Ozs7Z0JBaEJDLGlCQUFpQjs7O3dCQWtCaEIsS0FBSztpQ0FFTCxLQUFLLFNBQUMsVUFBVTt3QkFHaEIsS0FBSztpQ0FLTCxZQUFZLFNBQUMsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTsyQkFHMUMsZUFBZSxTQUFDLHFCQUFxQjt5QkFFckMsTUFBTTsyQkFDTixNQUFNOzJCQUNOLE1BQU07NkJBQ04sTUFBTTs2QkFDTixNQUFNOztJQXNCVCx3QkFBQztDQUFBLEFBakRELElBaURDO1NBMUNZLGlCQUFpQjs7O0lBQzVCLGtDQUEyQjs7SUFFM0IsMkNBQ2lDOztJQUVqQyxrQ0FHRTs7SUFFRiwyQ0FDaUM7O0lBRWpDLHFDQUE0Rjs7SUFFNUYsbUNBQXNDOztJQUN0QyxxQ0FBd0M7O0lBQ3hDLHFDQUF3Qzs7SUFDeEMsdUNBQTBDOztJQUMxQyx1Q0FBMEM7Ozs7O0lBVTFDLHNDQUFpRDs7Ozs7SUFFckMsaUNBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBPdXRwdXQsXG4gIENvbnRlbnRDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgVGVtcGxhdGVSZWYsXG4gIFF1ZXJ5TGlzdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBPbkRlc3Ryb3ksXG4gIEFmdGVyQ29udGVudEluaXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBOZ3hhVHJlZU5vZGVDb21wb25lbnQgfSBmcm9tICcuL25neGEtdHJlZS1ub2RlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUcmVlTm9kZSB9IGZyb20gJy4vdHJlZS1ub2RlLm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAneGEtdHJlZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9uZ3hhLXRyZWUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9uZ3hhLXRyZWUuY29tcG9uZW50LnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE5neGFUcmVlQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgbm9kZXM6IFRyZWVOb2RlW107XG5cbiAgQElucHV0KCd0ZW1wbGF0ZScpXG4gIF90ZW1wbGF0ZUlucHV0OiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIEBJbnB1dCgpIGljb25zID0ge1xuICAgIGNvbGxhcHNlOiAncGx1cy1jaXJjbGUnLFxuICAgIGV4cGFuZDogJ21pbnVzLWNpcmNsZScsXG4gIH07XG5cbiAgQENvbnRlbnRDaGlsZChUZW1wbGF0ZVJlZiwgeyBzdGF0aWM6IHRydWUgfSlcbiAgX3RlbXBsYXRlUXVlcnk6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQENvbnRlbnRDaGlsZHJlbihOZ3hhVHJlZU5vZGVDb21wb25lbnQpIHJlYWRvbmx5IG5vZGVFbG1zOiBRdWVyeUxpc3Q8Tmd4YVRyZWVOb2RlQ29tcG9uZW50PjtcblxuICBAT3V0cHV0KCkgZXhwYW5kID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgY29sbGFwc2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBhY3RpdmF0ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGRlYWN0aXZhdGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBzZWxlY3ROb2RlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGdldCBoYXNPbmVMZWFmKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAodGhpcy5ub2RlcyAmJiB0aGlzLm5vZGVzLmxlbmd0aCA9PT0gMSkgfHwgdGhpcy5ub2RlRWxtcy5sZW5ndGggPT09IDE7XG4gIH1cblxuICBnZXQgdGVtcGxhdGUoKTogVGVtcGxhdGVSZWY8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuX3RlbXBsYXRlSW5wdXQgfHwgdGhpcy5fdGVtcGxhdGVRdWVyeTtcbiAgfVxuXG4gIHByaXZhdGUgcmVhZG9ubHkgX2Rlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IF9jZHI6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLm5vZGVFbG1zLmNoYW5nZXMucGlwZSh0YWtlVW50aWwodGhpcy5fZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5fY2RyLm1hcmtGb3JDaGVjaygpKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX2Rlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLl9kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG59XG4iXX0=