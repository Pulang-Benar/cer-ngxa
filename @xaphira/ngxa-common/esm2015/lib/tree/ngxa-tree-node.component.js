/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, EventEmitter, Output, ViewEncapsulation, TemplateRef, ChangeDetectionStrategy, } from '@angular/core';
export class NgxaTreeNodeComponent {
    constructor() {
        this.icons = {
            collapse: 'plus-circle',
            expand: 'minus-circle',
        };
        this.activate = new EventEmitter();
        this.deactivate = new EventEmitter();
        this.selectNode = new EventEmitter();
        // backwards compatibility. Use selectNode
        this.select = this.selectNode;
        this.expand = new EventEmitter();
        this.collapse = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.data = {
            $implicit: this.node,
            label: this.label,
            children: this.children,
            model: this.model,
        };
    }
    /**
     * @return {?}
     */
    onExpandClick() {
        if (this.disabled || !this.expandable)
            return;
        this.expanded = !this.expanded;
        if (this.expanded) {
            this.expand.emit(this.data);
        }
        else {
            this.collapse.emit(this.data);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onClick(event) {
        event.stopPropagation();
        if (!this.selectable || this.disabled)
            return;
        this.selectNode.emit(this.data);
    }
}
NgxaTreeNodeComponent.decorators = [
    { type: Component, args: [{
                exportAs: 'xaTreeNode',
                selector: 'xa-tree-node',
                template: "<li\n  class=\"xa-tree-node\"\n  [class.selectable]=\"selectable\"\n  (click)=\"onClick($event)\"\n  (focus)=\"activate.emit(this.data)\"\n  (blur)=\"deactivate.emit(this.data)\"\n  tabindex=\"-1\"\n>\n  <span\n    *ngIf=\"expandable\"\n    class=\"ngx-expander\"\n    (click)=\"onExpandClick()\"\n    [class.disabled]=\"disabled\"\n    [ngClass]=\"expanded ? icons.expand : icons.collapse\"\n  >\n  <nb-icon [icon]=\"expanded ? icons.expand : icons.collapse\" pack=\"eva\"></nb-icon>\n  </span>\n  <span *ngIf=\"!template\" [innerHTML]=\"label\" [class.disabled]=\"disabled\" class=\"ngx-node-label\"> </span>\n  <ng-template *ngIf=\"template\" [ngTemplateOutlet]=\"template\" [ngTemplateOutletContext]=\"data\"> </ng-template>\n  <ng-content *ngIf=\"expanded\"></ng-content>\n  <xa-tree\n    *ngIf=\"children?.length && expandable && expanded\"\n    class=\"ngx-sub-tree\"\n    [nodes]=\"children\"\n    [template]=\"template\"\n    [icons]=\"icons\"\n  >\n  </xa-tree>\n</li>\n",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
NgxaTreeNodeComponent.propDecorators = {
    label: [{ type: Input }],
    model: [{ type: Input }],
    node: [{ type: Input }],
    children: [{ type: Input }],
    disabled: [{ type: Input }],
    expandable: [{ type: Input }],
    expanded: [{ type: Input }],
    selectable: [{ type: Input }],
    template: [{ type: Input }],
    icons: [{ type: Input }],
    activate: [{ type: Output }],
    deactivate: [{ type: Output }],
    selectNode: [{ type: Output }],
    select: [{ type: Output }],
    expand: [{ type: Output }],
    collapse: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    NgxaTreeNodeComponent.prototype.label;
    /** @type {?} */
    NgxaTreeNodeComponent.prototype.model;
    /** @type {?} */
    NgxaTreeNodeComponent.prototype.node;
    /** @type {?} */
    NgxaTreeNodeComponent.prototype.children;
    /** @type {?} */
    NgxaTreeNodeComponent.prototype.disabled;
    /** @type {?} */
    NgxaTreeNodeComponent.prototype.expandable;
    /** @type {?} */
    NgxaTreeNodeComponent.prototype.expanded;
    /** @type {?} */
    NgxaTreeNodeComponent.prototype.selectable;
    /** @type {?} */
    NgxaTreeNodeComponent.prototype.template;
    /** @type {?} */
    NgxaTreeNodeComponent.prototype.icons;
    /** @type {?} */
    NgxaTreeNodeComponent.prototype.activate;
    /** @type {?} */
    NgxaTreeNodeComponent.prototype.deactivate;
    /** @type {?} */
    NgxaTreeNodeComponent.prototype.selectNode;
    /** @type {?} */
    NgxaTreeNodeComponent.prototype.select;
    /** @type {?} */
    NgxaTreeNodeComponent.prototype.expand;
    /** @type {?} */
    NgxaTreeNodeComponent.prototype.collapse;
    /** @type {?} */
    NgxaTreeNodeComponent.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4YS10cmVlLW5vZGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHhhcGhpcmEvbmd4YS1jb21tb24vIiwic291cmNlcyI6WyJsaWIvdHJlZS9uZ3hhLXRyZWUtbm9kZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLFlBQVksRUFDWixNQUFNLEVBRU4saUJBQWlCLEVBQ2pCLFdBQVcsRUFDWCx1QkFBdUIsR0FDeEIsTUFBTSxlQUFlLENBQUM7QUFXdkIsTUFBTSxPQUFPLHFCQUFxQjtJQVBsQztRQWlCVyxVQUFLLEdBQUc7WUFDZixRQUFRLEVBQUUsYUFBYTtZQUN2QixNQUFNLEVBQUUsY0FBYztTQUN2QixDQUFDO1FBRVEsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDOUIsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDaEMsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7O1FBRWhDLFdBQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ3pCLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzVCLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBOEIxQyxDQUFDOzs7O0lBMUJDLFdBQVc7UUFDVCxJQUFJLENBQUMsSUFBSSxHQUFHO1lBQ1YsU0FBUyxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ3BCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdkIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1NBQ2xCLENBQUM7SUFDSixDQUFDOzs7O0lBRUQsYUFBYTtRQUNYLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVO1lBQUUsT0FBTztRQUU5QyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUUvQixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzdCO2FBQU07WUFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDL0I7SUFDSCxDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxLQUFLO1FBQ1gsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxRQUFRO1lBQUUsT0FBTztRQUM5QyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7O1lBekRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLGcrQkFBOEM7Z0JBQzlDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7O29CQUVFLEtBQUs7b0JBQ0wsS0FBSzttQkFDTCxLQUFLO3VCQUNMLEtBQUs7dUJBQ0wsS0FBSzt5QkFDTCxLQUFLO3VCQUNMLEtBQUs7eUJBQ0wsS0FBSzt1QkFDTCxLQUFLO29CQUNMLEtBQUs7dUJBS0wsTUFBTTt5QkFDTixNQUFNO3lCQUNOLE1BQU07cUJBRU4sTUFBTTtxQkFDTixNQUFNO3VCQUNOLE1BQU07Ozs7SUFwQlAsc0NBQXVCOztJQUN2QixzQ0FBb0I7O0lBQ3BCLHFDQUF3Qjs7SUFDeEIseUNBQXlCOztJQUN6Qix5Q0FBMkI7O0lBQzNCLDJDQUE2Qjs7SUFDN0IseUNBQTJCOztJQUMzQiwyQ0FBNkI7O0lBQzdCLHlDQUFvQzs7SUFDcEMsc0NBR0U7O0lBRUYseUNBQXdDOztJQUN4QywyQ0FBMEM7O0lBQzFDLDJDQUEwQzs7SUFFMUMsdUNBQW1DOztJQUNuQyx1Q0FBc0M7O0lBQ3RDLHlDQUF3Qzs7SUFFeEMscUNBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIE91dHB1dCxcbiAgT25DaGFuZ2VzLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgVGVtcGxhdGVSZWYsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVHJlZU5vZGUgfSBmcm9tICcuL3RyZWUtbm9kZS5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBleHBvcnRBczogJ3hhVHJlZU5vZGUnLFxuICBzZWxlY3RvcjogJ3hhLXRyZWUtbm9kZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9uZ3hhLXRyZWUtbm9kZS5jb21wb25lbnQuaHRtbCcsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOZ3hhVHJlZU5vZGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xuICBASW5wdXQoKSBtb2RlbDogYW55O1xuICBASW5wdXQoKSBub2RlOiBUcmVlTm9kZTtcbiAgQElucHV0KCkgY2hpbGRyZW46IGFueVtdO1xuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbjtcbiAgQElucHV0KCkgZXhwYW5kYWJsZTogYm9vbGVhbjtcbiAgQElucHV0KCkgZXhwYW5kZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHNlbGVjdGFibGU6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBASW5wdXQoKSBpY29ucyA9IHtcbiAgICBjb2xsYXBzZTogJ3BsdXMtY2lyY2xlJyxcbiAgICBleHBhbmQ6ICdtaW51cy1jaXJjbGUnLFxuICB9O1xuXG4gIEBPdXRwdXQoKSBhY3RpdmF0ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGRlYWN0aXZhdGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBzZWxlY3ROb2RlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAvLyBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS4gVXNlIHNlbGVjdE5vZGVcbiAgQE91dHB1dCgpIHNlbGVjdCA9IHRoaXMuc2VsZWN0Tm9kZTtcbiAgQE91dHB1dCgpIGV4cGFuZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGNvbGxhcHNlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGRhdGE6IGFueTtcblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICB0aGlzLmRhdGEgPSB7XG4gICAgICAkaW1wbGljaXQ6IHRoaXMubm9kZSxcbiAgICAgIGxhYmVsOiB0aGlzLmxhYmVsLFxuICAgICAgY2hpbGRyZW46IHRoaXMuY2hpbGRyZW4sXG4gICAgICBtb2RlbDogdGhpcy5tb2RlbCxcbiAgICB9O1xuICB9XG5cbiAgb25FeHBhbmRDbGljaygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCAhdGhpcy5leHBhbmRhYmxlKSByZXR1cm47XG5cbiAgICB0aGlzLmV4cGFuZGVkID0gIXRoaXMuZXhwYW5kZWQ7XG5cbiAgICBpZiAodGhpcy5leHBhbmRlZCkge1xuICAgICAgdGhpcy5leHBhbmQuZW1pdCh0aGlzLmRhdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbGxhcHNlLmVtaXQodGhpcy5kYXRhKTtcbiAgICB9XG4gIH1cblxuICBvbkNsaWNrKGV2ZW50KTogdm9pZCB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgaWYgKCF0aGlzLnNlbGVjdGFibGUgfHwgdGhpcy5kaXNhYmxlZCkgcmV0dXJuO1xuICAgIHRoaXMuc2VsZWN0Tm9kZS5lbWl0KHRoaXMuZGF0YSk7XG4gIH1cbn1cbiJdfQ==