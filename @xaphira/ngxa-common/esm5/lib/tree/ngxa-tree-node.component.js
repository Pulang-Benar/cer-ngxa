/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, EventEmitter, Output, ViewEncapsulation, TemplateRef, ChangeDetectionStrategy, } from '@angular/core';
var NgxaTreeNodeComponent = /** @class */ (function () {
    function NgxaTreeNodeComponent() {
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
    NgxaTreeNodeComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.data = {
            $implicit: this.node,
            label: this.label,
            children: this.children,
            model: this.model,
        };
    };
    /**
     * @return {?}
     */
    NgxaTreeNodeComponent.prototype.onExpandClick = /**
     * @return {?}
     */
    function () {
        if (this.disabled || !this.expandable)
            return;
        this.expanded = !this.expanded;
        if (this.expanded) {
            this.expand.emit(this.data);
        }
        else {
            this.collapse.emit(this.data);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NgxaTreeNodeComponent.prototype.onClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.stopPropagation();
        if (!this.selectable || this.disabled)
            return;
        this.selectNode.emit(this.data);
    };
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
    return NgxaTreeNodeComponent;
}());
export { NgxaTreeNodeComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4YS10cmVlLW5vZGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHhhcGhpcmEvbmd4YS1jb21tb24vIiwic291cmNlcyI6WyJsaWIvdHJlZS9uZ3hhLXRyZWUtbm9kZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLFlBQVksRUFDWixNQUFNLEVBRU4saUJBQWlCLEVBQ2pCLFdBQVcsRUFDWCx1QkFBdUIsR0FDeEIsTUFBTSxlQUFlLENBQUM7QUFJdkI7SUFBQTtRQWlCVyxVQUFLLEdBQUc7WUFDZixRQUFRLEVBQUUsYUFBYTtZQUN2QixNQUFNLEVBQUUsY0FBYztTQUN2QixDQUFDO1FBRVEsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDOUIsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDaEMsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7O1FBRWhDLFdBQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ3pCLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzVCLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBOEIxQyxDQUFDOzs7O0lBMUJDLDJDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxJQUFJLEdBQUc7WUFDVixTQUFTLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDcEIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7U0FDbEIsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCw2Q0FBYTs7O0lBQWI7UUFDRSxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVTtZQUFFLE9BQU87UUFFOUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFFL0IsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM3QjthQUFNO1lBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQy9CO0lBQ0gsQ0FBQzs7Ozs7SUFFRCx1Q0FBTzs7OztJQUFQLFVBQVEsS0FBSztRQUNYLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsUUFBUTtZQUFFLE9BQU87UUFDOUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7O2dCQXpERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLFFBQVEsRUFBRSxjQUFjO29CQUN4QixnK0JBQThDO29CQUM5QyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzs7d0JBRUUsS0FBSzt3QkFDTCxLQUFLO3VCQUNMLEtBQUs7MkJBQ0wsS0FBSzsyQkFDTCxLQUFLOzZCQUNMLEtBQUs7MkJBQ0wsS0FBSzs2QkFDTCxLQUFLOzJCQUNMLEtBQUs7d0JBQ0wsS0FBSzsyQkFLTCxNQUFNOzZCQUNOLE1BQU07NkJBQ04sTUFBTTt5QkFFTixNQUFNO3lCQUNOLE1BQU07MkJBQ04sTUFBTTs7SUE4QlQsNEJBQUM7Q0FBQSxBQTFERCxJQTBEQztTQW5EWSxxQkFBcUI7OztJQUNoQyxzQ0FBdUI7O0lBQ3ZCLHNDQUFvQjs7SUFDcEIscUNBQXdCOztJQUN4Qix5Q0FBeUI7O0lBQ3pCLHlDQUEyQjs7SUFDM0IsMkNBQTZCOztJQUM3Qix5Q0FBMkI7O0lBQzNCLDJDQUE2Qjs7SUFDN0IseUNBQW9DOztJQUNwQyxzQ0FHRTs7SUFFRix5Q0FBd0M7O0lBQ3hDLDJDQUEwQzs7SUFDMUMsMkNBQTBDOztJQUUxQyx1Q0FBbUM7O0lBQ25DLHVDQUFzQzs7SUFDdEMseUNBQXdDOztJQUV4QyxxQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgT3V0cHV0LFxuICBPbkNoYW5nZXMsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBUZW1wbGF0ZVJlZixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBUcmVlTm9kZSB9IGZyb20gJy4vdHJlZS1ub2RlLm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gIGV4cG9ydEFzOiAneGFUcmVlTm9kZScsXG4gIHNlbGVjdG9yOiAneGEtdHJlZS1ub2RlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL25neGEtdHJlZS1ub2RlLmNvbXBvbmVudC5odG1sJyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE5neGFUcmVlTm9kZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG1vZGVsOiBhbnk7XG4gIEBJbnB1dCgpIG5vZGU6IFRyZWVOb2RlO1xuICBASW5wdXQoKSBjaGlsZHJlbjogYW55W107XG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuO1xuICBASW5wdXQoKSBleHBhbmRhYmxlOiBib29sZWFuO1xuICBASW5wdXQoKSBleHBhbmRlZDogYm9vbGVhbjtcbiAgQElucHV0KCkgc2VsZWN0YWJsZTogYm9vbGVhbjtcbiAgQElucHV0KCkgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBJbnB1dCgpIGljb25zID0ge1xuICAgIGNvbGxhcHNlOiAncGx1cy1jaXJjbGUnLFxuICAgIGV4cGFuZDogJ21pbnVzLWNpcmNsZScsXG4gIH07XG5cbiAgQE91dHB1dCgpIGFjdGl2YXRlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgZGVhY3RpdmF0ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHNlbGVjdE5vZGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIC8vIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LiBVc2Ugc2VsZWN0Tm9kZVxuICBAT3V0cHV0KCkgc2VsZWN0ID0gdGhpcy5zZWxlY3ROb2RlO1xuICBAT3V0cHV0KCkgZXhwYW5kID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgY29sbGFwc2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgZGF0YTogYW55O1xuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIHRoaXMuZGF0YSA9IHtcbiAgICAgICRpbXBsaWNpdDogdGhpcy5ub2RlLFxuICAgICAgbGFiZWw6IHRoaXMubGFiZWwsXG4gICAgICBjaGlsZHJlbjogdGhpcy5jaGlsZHJlbixcbiAgICAgIG1vZGVsOiB0aGlzLm1vZGVsLFxuICAgIH07XG4gIH1cblxuICBvbkV4cGFuZENsaWNrKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmRpc2FibGVkIHx8ICF0aGlzLmV4cGFuZGFibGUpIHJldHVybjtcblxuICAgIHRoaXMuZXhwYW5kZWQgPSAhdGhpcy5leHBhbmRlZDtcblxuICAgIGlmICh0aGlzLmV4cGFuZGVkKSB7XG4gICAgICB0aGlzLmV4cGFuZC5lbWl0KHRoaXMuZGF0YSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29sbGFwc2UuZW1pdCh0aGlzLmRhdGEpO1xuICAgIH1cbiAgfVxuXG4gIG9uQ2xpY2soZXZlbnQpOiB2b2lkIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZiAoIXRoaXMuc2VsZWN0YWJsZSB8fCB0aGlzLmRpc2FibGVkKSByZXR1cm47XG4gICAgdGhpcy5zZWxlY3ROb2RlLmVtaXQodGhpcy5kYXRhKTtcbiAgfVxufVxuIl19