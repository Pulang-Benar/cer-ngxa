/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Output, Input, EventEmitter, HostBinding, HostListener } from '@angular/core';
export class DragDropDirective {
    constructor() {
        this.onFileDropped = new EventEmitter();
        this.opacity = '0.7';
        this.background = '#f7f9fc';
        this.styleOpacity = '0.7';
    }
    /**
     * @param {?} evt
     * @return {?}
     */
    onDragOver(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = '#edf1f7';
        this.styleOpacity = '0.5';
        this.opacity = this.styleOpacity;
    }
    /**
     * @param {?} evt
     * @return {?}
     */
    onDragLeave(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = '#f7f9fc';
        this.styleOpacity = '0.7';
        this.opacity = this.styleOpacity;
    }
    /**
     * @param {?} evt
     * @return {?}
     */
    ondrop(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = '#f7f9fc';
        this.styleOpacity = '0.7';
        this.opacity = this.styleOpacity;
        /** @type {?} */
        const files = evt.dataTransfer.files;
        if (files.length > 0) {
            this.onFileDropped.emit(files);
        }
    }
    /**
     * @param {?} evt
     * @return {?}
     */
    onMouseOver(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = '#f7f9fc';
        this.styleOpacity = '0.5';
        this.opacity = this.styleOpacity;
    }
    /**
     * @param {?} evt
     * @return {?}
     */
    onMouseLeave(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = '#f7f9fc';
        this.styleOpacity = '0.7';
        this.opacity = this.styleOpacity;
    }
}
DragDropDirective.decorators = [
    { type: Directive, args: [{
                selector: '[xaDragDrop]',
            },] }
];
DragDropDirective.propDecorators = {
    onFileDropped: [{ type: Output }],
    opacity: [{ type: Input }],
    background: [{ type: HostBinding, args: ['style.background-color',] }],
    styleOpacity: [{ type: HostBinding, args: ['style.opacity',] }],
    onDragOver: [{ type: HostListener, args: ['dragover', ['$event'],] }],
    onDragLeave: [{ type: HostListener, args: ['dragleave', ['$event'],] }],
    ondrop: [{ type: HostListener, args: ['drop', ['$event'],] }],
    onMouseOver: [{ type: HostListener, args: ['mouseover', ['$event'],] }],
    onMouseLeave: [{ type: HostListener, args: ['mouseleave', ['$event'],] }]
};
if (false) {
    /** @type {?} */
    DragDropDirective.prototype.onFileDropped;
    /** @type {?} */
    DragDropDirective.prototype.opacity;
    /** @type {?} */
    DragDropDirective.prototype.background;
    /** @type {?} */
    DragDropDirective.prototype.styleOpacity;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZy1kcm9wLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B4YXBoaXJhL25neGEtY29tbW9uLyIsInNvdXJjZXMiOlsibGliL2Jhc2UvZGlyZWN0aXZlL2RyYWctZHJvcC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUtsRyxNQUFNLE9BQU8saUJBQWlCO0lBSDlCO1FBSWMsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3pDLFlBQU8sR0FBVyxLQUFLLENBQUM7UUFFYSxlQUFVLEdBQUcsU0FBUyxDQUFDO1FBQ2hDLGlCQUFZLEdBQUcsS0FBSyxDQUFDO0lBOEM5RCxDQUFDOzs7OztJQTVDeUMsVUFBVSxDQUFDLEdBQUc7UUFDaEQsR0FBRyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3JCLEdBQUcsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztRQUM1QixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUMxQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDckMsQ0FBQzs7Ozs7SUFFNkMsV0FBVyxDQUFDLEdBQUc7UUFDekQsR0FBRyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3JCLEdBQUcsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztRQUM1QixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUMxQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDckMsQ0FBQzs7Ozs7SUFFd0MsTUFBTSxDQUFDLEdBQUc7UUFDL0MsR0FBRyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3JCLEdBQUcsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztRQUM1QixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUMxQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7O2NBQzNCLEtBQUssR0FBRyxHQUFHLENBQUMsWUFBWSxDQUFDLEtBQUs7UUFDcEMsSUFBSSxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNsQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNsQztJQUNMLENBQUM7Ozs7O0lBRTZDLFdBQVcsQ0FBQyxHQUFHO1FBQ3pELEdBQUcsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNyQixHQUFHLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7UUFDNUIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQ3JDLENBQUM7Ozs7O0lBRThDLFlBQVksQ0FBQyxHQUFHO1FBQzNELEdBQUcsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNyQixHQUFHLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7UUFDNUIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQ3JDLENBQUM7OztZQXBESixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7YUFDekI7Ozs0QkFFSSxNQUFNO3NCQUNOLEtBQUs7eUJBRUwsV0FBVyxTQUFDLHdCQUF3QjsyQkFDcEMsV0FBVyxTQUFDLGVBQWU7eUJBRTNCLFlBQVksU0FBQyxVQUFVLEVBQUUsQ0FBQyxRQUFRLENBQUM7MEJBUW5DLFlBQVksU0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUM7cUJBUXBDLFlBQVksU0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUM7MEJBWS9CLFlBQVksU0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUM7MkJBUXBDLFlBQVksU0FBQyxZQUFZLEVBQUUsQ0FBQyxRQUFRLENBQUM7Ozs7SUExQ3RDLDBDQUFrRDs7SUFDbEQsb0NBQWlDOztJQUVqQyx1Q0FBcUU7O0lBQ3JFLHlDQUEwRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgT3V0cHV0LCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBIb3N0QmluZGluZywgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t4YURyYWdEcm9wXScsXG59KVxuZXhwb3J0IGNsYXNzIERyYWdEcm9wRGlyZWN0aXZlIHtcbiAgICBAT3V0cHV0KCkgb25GaWxlRHJvcHBlZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAgIEBJbnB1dCgpIG9wYWNpdHk6IHN0cmluZyA9ICcwLjcnO1xuXG4gICAgQEhvc3RCaW5kaW5nKCdzdHlsZS5iYWNrZ3JvdW5kLWNvbG9yJykgcHVibGljIGJhY2tncm91bmQgPSAnI2Y3ZjlmYyc7XG4gICAgQEhvc3RCaW5kaW5nKCdzdHlsZS5vcGFjaXR5JykgcHVibGljIHN0eWxlT3BhY2l0eSA9ICcwLjcnO1xuXG4gICAgQEhvc3RMaXN0ZW5lcignZHJhZ292ZXInLCBbJyRldmVudCddKSBvbkRyYWdPdmVyKGV2dCkge1xuICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB0aGlzLmJhY2tncm91bmQgPSAnI2VkZjFmNyc7XG4gICAgICAgIHRoaXMuc3R5bGVPcGFjaXR5ID0gJzAuNSc7XG4gICAgICAgIHRoaXMub3BhY2l0eSA9IHRoaXMuc3R5bGVPcGFjaXR5O1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIFsnJGV2ZW50J10pIHB1YmxpYyBvbkRyYWdMZWF2ZShldnQpIHtcbiAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kID0gJyNmN2Y5ZmMnO1xuICAgICAgICB0aGlzLnN0eWxlT3BhY2l0eSA9ICcwLjcnO1xuICAgICAgICB0aGlzLm9wYWNpdHkgPSB0aGlzLnN0eWxlT3BhY2l0eTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdkcm9wJywgWyckZXZlbnQnXSkgcHVibGljIG9uZHJvcChldnQpIHtcbiAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kID0gJyNmN2Y5ZmMnO1xuICAgICAgICB0aGlzLnN0eWxlT3BhY2l0eSA9ICcwLjcnO1xuICAgICAgICB0aGlzLm9wYWNpdHkgPSB0aGlzLnN0eWxlT3BhY2l0eTtcbiAgICAgICAgY29uc3QgZmlsZXMgPSBldnQuZGF0YVRyYW5zZmVyLmZpbGVzO1xuICAgICAgICBpZiAoZmlsZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5vbkZpbGVEcm9wcGVkLmVtaXQoZmlsZXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcignbW91c2VvdmVyJywgWyckZXZlbnQnXSkgcHVibGljIG9uTW91c2VPdmVyKGV2dCkge1xuICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB0aGlzLmJhY2tncm91bmQgPSAnI2Y3ZjlmYyc7XG4gICAgICAgIHRoaXMuc3R5bGVPcGFjaXR5ID0gJzAuNSc7XG4gICAgICAgIHRoaXMub3BhY2l0eSA9IHRoaXMuc3R5bGVPcGFjaXR5O1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBbJyRldmVudCddKSBwdWJsaWMgb25Nb3VzZUxlYXZlKGV2dCkge1xuICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB0aGlzLmJhY2tncm91bmQgPSAnI2Y3ZjlmYyc7XG4gICAgICAgIHRoaXMuc3R5bGVPcGFjaXR5ID0gJzAuNyc7XG4gICAgICAgIHRoaXMub3BhY2l0eSA9IHRoaXMuc3R5bGVPcGFjaXR5O1xuICAgIH1cblxufVxuIl19