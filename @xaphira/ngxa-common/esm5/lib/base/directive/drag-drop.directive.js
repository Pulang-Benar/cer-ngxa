/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Output, Input, EventEmitter, HostBinding, HostListener } from '@angular/core';
var DragDropDirective = /** @class */ (function () {
    function DragDropDirective() {
        this.onFileDropped = new EventEmitter();
        this.opacity = '0.7';
        this.background = '#f7f9fc';
        this.styleOpacity = '0.7';
    }
    /**
     * @param {?} evt
     * @return {?}
     */
    DragDropDirective.prototype.onDragOver = /**
     * @param {?} evt
     * @return {?}
     */
    function (evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = '#edf1f7';
        this.styleOpacity = '0.5';
        this.opacity = this.styleOpacity;
    };
    /**
     * @param {?} evt
     * @return {?}
     */
    DragDropDirective.prototype.onDragLeave = /**
     * @param {?} evt
     * @return {?}
     */
    function (evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = '#f7f9fc';
        this.styleOpacity = '0.7';
        this.opacity = this.styleOpacity;
    };
    /**
     * @param {?} evt
     * @return {?}
     */
    DragDropDirective.prototype.ondrop = /**
     * @param {?} evt
     * @return {?}
     */
    function (evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = '#f7f9fc';
        this.styleOpacity = '0.7';
        this.opacity = this.styleOpacity;
        /** @type {?} */
        var files = evt.dataTransfer.files;
        if (files.length > 0) {
            this.onFileDropped.emit(files);
        }
    };
    /**
     * @param {?} evt
     * @return {?}
     */
    DragDropDirective.prototype.onMouseOver = /**
     * @param {?} evt
     * @return {?}
     */
    function (evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = '#f7f9fc';
        this.styleOpacity = '0.5';
        this.opacity = this.styleOpacity;
    };
    /**
     * @param {?} evt
     * @return {?}
     */
    DragDropDirective.prototype.onMouseLeave = /**
     * @param {?} evt
     * @return {?}
     */
    function (evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = '#f7f9fc';
        this.styleOpacity = '0.7';
        this.opacity = this.styleOpacity;
    };
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
    return DragDropDirective;
}());
export { DragDropDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZy1kcm9wLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B4YXBoaXJhL25neGEtY29tbW9uLyIsInNvdXJjZXMiOlsibGliL2Jhc2UvZGlyZWN0aXZlL2RyYWctZHJvcC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVsRztJQUFBO1FBSWMsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3pDLFlBQU8sR0FBVyxLQUFLLENBQUM7UUFFYSxlQUFVLEdBQUcsU0FBUyxDQUFDO1FBQ2hDLGlCQUFZLEdBQUcsS0FBSyxDQUFDO0lBOEM5RCxDQUFDOzs7OztJQTVDeUMsc0NBQVU7Ozs7SUFBaEQsVUFBaUQsR0FBRztRQUNoRCxHQUFHLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDckIsR0FBRyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1FBQzVCLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQzFCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztJQUNyQyxDQUFDOzs7OztJQUU2Qyx1Q0FBVzs7OztJQUF6RCxVQUEwRCxHQUFHO1FBQ3pELEdBQUcsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNyQixHQUFHLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7UUFDNUIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQ3JDLENBQUM7Ozs7O0lBRXdDLGtDQUFNOzs7O0lBQS9DLFVBQWdELEdBQUc7UUFDL0MsR0FBRyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3JCLEdBQUcsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztRQUM1QixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUMxQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7O1lBQzNCLEtBQUssR0FBRyxHQUFHLENBQUMsWUFBWSxDQUFDLEtBQUs7UUFDcEMsSUFBSSxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNsQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNsQztJQUNMLENBQUM7Ozs7O0lBRTZDLHVDQUFXOzs7O0lBQXpELFVBQTBELEdBQUc7UUFDekQsR0FBRyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3JCLEdBQUcsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztRQUM1QixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUMxQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDckMsQ0FBQzs7Ozs7SUFFOEMsd0NBQVk7Ozs7SUFBM0QsVUFBNEQsR0FBRztRQUMzRCxHQUFHLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDckIsR0FBRyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1FBQzVCLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQzFCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztJQUNyQyxDQUFDOztnQkFwREosU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO2lCQUN6Qjs7O2dDQUVJLE1BQU07MEJBQ04sS0FBSzs2QkFFTCxXQUFXLFNBQUMsd0JBQXdCOytCQUNwQyxXQUFXLFNBQUMsZUFBZTs2QkFFM0IsWUFBWSxTQUFDLFVBQVUsRUFBRSxDQUFDLFFBQVEsQ0FBQzs4QkFRbkMsWUFBWSxTQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQzt5QkFRcEMsWUFBWSxTQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQzs4QkFZL0IsWUFBWSxTQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQzsrQkFRcEMsWUFBWSxTQUFDLFlBQVksRUFBRSxDQUFDLFFBQVEsQ0FBQzs7SUFRMUMsd0JBQUM7Q0FBQSxBQXRERCxJQXNEQztTQW5EWSxpQkFBaUI7OztJQUMxQiwwQ0FBa0Q7O0lBQ2xELG9DQUFpQzs7SUFFakMsdUNBQXFFOztJQUNyRSx5Q0FBMEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIE91dHB1dCwgSW5wdXQsIEV2ZW50RW1pdHRlciwgSG9zdEJpbmRpbmcsIEhvc3RMaXN0ZW5lciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbeGFEcmFnRHJvcF0nLFxufSlcbmV4cG9ydCBjbGFzcyBEcmFnRHJvcERpcmVjdGl2ZSB7XG4gICAgQE91dHB1dCgpIG9uRmlsZURyb3BwZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgICBASW5wdXQoKSBvcGFjaXR5OiBzdHJpbmcgPSAnMC43JztcblxuICAgIEBIb3N0QmluZGluZygnc3R5bGUuYmFja2dyb3VuZC1jb2xvcicpIHB1YmxpYyBiYWNrZ3JvdW5kID0gJyNmN2Y5ZmMnO1xuICAgIEBIb3N0QmluZGluZygnc3R5bGUub3BhY2l0eScpIHB1YmxpYyBzdHlsZU9wYWNpdHkgPSAnMC43JztcblxuICAgIEBIb3N0TGlzdGVuZXIoJ2RyYWdvdmVyJywgWyckZXZlbnQnXSkgb25EcmFnT3ZlcihldnQpIHtcbiAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kID0gJyNlZGYxZjcnO1xuICAgICAgICB0aGlzLnN0eWxlT3BhY2l0eSA9ICcwLjUnO1xuICAgICAgICB0aGlzLm9wYWNpdHkgPSB0aGlzLnN0eWxlT3BhY2l0eTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdkcmFnbGVhdmUnLCBbJyRldmVudCddKSBwdWJsaWMgb25EcmFnTGVhdmUoZXZ0KSB7XG4gICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZCA9ICcjZjdmOWZjJztcbiAgICAgICAgdGhpcy5zdHlsZU9wYWNpdHkgPSAnMC43JztcbiAgICAgICAgdGhpcy5vcGFjaXR5ID0gdGhpcy5zdHlsZU9wYWNpdHk7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcignZHJvcCcsIFsnJGV2ZW50J10pIHB1YmxpYyBvbmRyb3AoZXZ0KSB7XG4gICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZCA9ICcjZjdmOWZjJztcbiAgICAgICAgdGhpcy5zdHlsZU9wYWNpdHkgPSAnMC43JztcbiAgICAgICAgdGhpcy5vcGFjaXR5ID0gdGhpcy5zdHlsZU9wYWNpdHk7XG4gICAgICAgIGNvbnN0IGZpbGVzID0gZXZ0LmRhdGFUcmFuc2Zlci5maWxlcztcbiAgICAgICAgaWYgKGZpbGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMub25GaWxlRHJvcHBlZC5lbWl0KGZpbGVzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ21vdXNlb3ZlcicsIFsnJGV2ZW50J10pIHB1YmxpYyBvbk1vdXNlT3ZlcihldnQpIHtcbiAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kID0gJyNmN2Y5ZmMnO1xuICAgICAgICB0aGlzLnN0eWxlT3BhY2l0eSA9ICcwLjUnO1xuICAgICAgICB0aGlzLm9wYWNpdHkgPSB0aGlzLnN0eWxlT3BhY2l0eTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdtb3VzZWxlYXZlJywgWyckZXZlbnQnXSkgcHVibGljIG9uTW91c2VMZWF2ZShldnQpIHtcbiAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kID0gJyNmN2Y5ZmMnO1xuICAgICAgICB0aGlzLnN0eWxlT3BhY2l0eSA9ICcwLjcnO1xuICAgICAgICB0aGlzLm9wYWNpdHkgPSB0aGlzLnN0eWxlT3BhY2l0eTtcbiAgICB9XG5cbn1cbiJdfQ==