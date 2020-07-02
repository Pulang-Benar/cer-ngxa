/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, ViewEncapsulation, Input, forwardRef, Output, EventEmitter, Inject, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ENVIRONMENT, Environment } from '@xaphira/shared';
export class MCECoreComponent {
    /**
     * @param {?} host
     * @param {?} envi
     */
    constructor(host, envi) {
        this.host = host;
        this.envi = envi;
        this.plugins = ['link', 'paste', 'table'];
        this.height = 320;
        this.readonly = false;
        this.change = new EventEmitter();
        this.editorchange = new EventEmitter();
        this.focus = new EventEmitter();
        this.blur = new EventEmitter();
        this.onChange = (/**
         * @param {?} _
         * @return {?}
         */
        (_) => { });
        this.onTouched = (/**
         * @param {?=} _
         * @return {?}
         */
        (_) => { });
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        tinymce.init({
            target: this.host.nativeElement,
            plugins: this.plugins,
            skin_url: `${document.getElementsByTagName('base')[0].href}assets/skins/lightgray`,
            setup: (/**
             * @param {?} editor
             * @return {?}
             */
            editor => {
                this.editor = editor;
                editor.on('keyup', (/**
                 * @param {?} event
                 * @return {?}
                 */
                (event) => {
                    this.value = editor.getContent();
                    this.change.emit(this.value);
                    this.editorchange.emit(event);
                }));
                editor.on('focus', (/**
                 * @param {?} event
                 * @return {?}
                 */
                (event) => {
                    this.focus.emit(event);
                }));
                editor.on('blur', (/**
                 * @param {?} event
                 * @return {?}
                 */
                (event) => {
                    this.blur.emit(event);
                }));
            }),
            init_instance_callback: (/**
             * @param {?} editor
             * @return {?}
             */
            (editor) => {
                editor && this.value && this.editor.setContent(this.value);
            }),
            height: this.height,
            readonly: this.readonly,
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        tinymce.remove(this.editor);
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
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        if (value) {
            this._value = value;
            this.onChange(this.value);
        }
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) { this.onChange = fn; }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) { this.onTouched = fn; }
}
MCECoreComponent.decorators = [
    { type: Component, args: [{
                selector: 'xa-mce-core',
                template: '',
                encapsulation: ViewEncapsulation.None,
                providers: [{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => MCECoreComponent)),
                        multi: true,
                    }]
            }] }
];
/** @nocollapse */
MCECoreComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Environment, decorators: [{ type: Inject, args: [ENVIRONMENT,] }] }
];
MCECoreComponent.propDecorators = {
    plugins: [{ type: Input }],
    height: [{ type: Input }],
    readonly: [{ type: Input }],
    _value: [{ type: Input, args: ['value',] }],
    change: [{ type: Output }],
    editorchange: [{ type: Output }],
    focus: [{ type: Output }],
    blur: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    MCECoreComponent.prototype.plugins;
    /** @type {?} */
    MCECoreComponent.prototype.height;
    /** @type {?} */
    MCECoreComponent.prototype.readonly;
    /** @type {?} */
    MCECoreComponent.prototype._value;
    /** @type {?} */
    MCECoreComponent.prototype.change;
    /** @type {?} */
    MCECoreComponent.prototype.editorchange;
    /** @type {?} */
    MCECoreComponent.prototype.focus;
    /** @type {?} */
    MCECoreComponent.prototype.blur;
    /** @type {?} */
    MCECoreComponent.prototype.onChange;
    /** @type {?} */
    MCECoreComponent.prototype.onTouched;
    /** @type {?} */
    MCECoreComponent.prototype.editor;
    /**
     * @type {?}
     * @private
     */
    MCECoreComponent.prototype.host;
    /** @type {?} */
    MCECoreComponent.prototype.envi;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWNlLWNvcmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHhhcGhpcmEvbmd4YS1jb21tb24vIiwic291cmNlcyI6WyJsaWIvZWRpdG9yL3RpbnktbWNlL21jZS1jb3JlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFHVCxVQUFVLEVBQ1YsaUJBQWlCLEVBQ2pCLEtBQUssRUFDTCxVQUFVLEVBQ1YsTUFBTSxFQUNOLFlBQVksRUFDWixNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFjM0QsTUFBTSxPQUFPLGdCQUFnQjs7Ozs7SUFlM0IsWUFDVSxJQUFnQixFQUNJLElBQWlCO1FBRHJDLFNBQUksR0FBSixJQUFJLENBQVk7UUFDSSxTQUFJLEdBQUosSUFBSSxDQUFhO1FBZnRDLFlBQU8sR0FBYSxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDL0MsV0FBTSxHQUFXLEdBQUcsQ0FBQztRQUNyQixhQUFRLEdBQVksS0FBSyxDQUFDO1FBRXpCLFdBQU0sR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNwRCxpQkFBWSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBQzFELFVBQUssR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNuRCxTQUFJLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFDckQsYUFBUTs7OztRQUFHLENBQUMsQ0FBTSxFQUFFLEVBQUUsR0FBRSxDQUFDLEVBQUM7UUFDMUIsY0FBUzs7OztRQUFHLENBQUMsQ0FBTyxFQUFFLEVBQUUsR0FBRSxDQUFDLEVBQUM7SUFPL0IsQ0FBQzs7OztJQUVMLGVBQWU7UUFDYixPQUFPLENBQUMsSUFBSSxDQUFD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QkFDZCxDQUFDO2FBQ0g7Ozs7WUF0QkMsVUFBVTtZQVNVLFdBQVcsdUJBK0I1QixNQUFNLFNBQUMsV0FBVzs7O3NCQWZwQixLQUFLO3FCQUNMLEtBQUs7dUJBQ0wsS0FBSztxQkFDTCxLQUFLLFNBQUMsT0FBTztxQkFDYixNQUFNOzJCQUNOLE1BQU07b0JBQ04sTUFBTTttQkFDTixNQUFNOzs7O0lBUFAsbUNBQXdEOztJQUN4RCxrQ0FBOEI7O0lBQzlCLG9DQUFtQzs7SUFDbkMsa0NBQTZCOztJQUM3QixrQ0FBOEQ7O0lBQzlELHdDQUFvRTs7SUFDcEUsaUNBQTZEOztJQUM3RCxnQ0FBNEQ7O0lBQzVELG9DQUFpQzs7SUFDakMscUNBQW1DOztJQUVuQyxrQ0FBWTs7Ozs7SUFHVixnQ0FBd0I7O0lBQ3hCLGdDQUE2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgT25EZXN0cm95LFxuICBBZnRlclZpZXdJbml0LFxuICBFbGVtZW50UmVmLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgSW5wdXQsXG4gIGZvcndhcmRSZWYsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbmplY3QsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRU5WSVJPTk1FTlQsIEVudmlyb25tZW50IH0gZnJvbSAnQHhhcGhpcmEvc2hhcmVkJztcblxuZGVjbGFyZSB2YXIgdGlueW1jZTogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd4YS1tY2UtY29yZScsXG4gIHRlbXBsYXRlOiAnJyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgcHJvdmlkZXJzOiBbe1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBNQ0VDb3JlQ29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlLFxuICB9XSxcbn0pXG5leHBvcnQgY2xhc3MgTUNFQ29yZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuXG4gIEBJbnB1dCgpIHBsdWdpbnM6IHN0cmluZ1tdID0gWydsaW5rJywgJ3Bhc3RlJywgJ3RhYmxlJ107XG4gIEBJbnB1dCgpIGhlaWdodDogbnVtYmVyID0gMzIwO1xuICBASW5wdXQoKSByZWFkb25seTogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoJ3ZhbHVlJykgIF92YWx1ZTogYW55O1xuICBAT3V0cHV0KCkgY2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgZWRpdG9yY2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgZm9jdXM6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBibHVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBwdWJsaWMgb25DaGFuZ2UgPSAoXzogYW55KSA9PiB7fTtcbiAgcHVibGljIG9uVG91Y2hlZCA9IChfPzogYW55KSA9PiB7fTtcblxuICBlZGl0b3I6IGFueTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGhvc3Q6IEVsZW1lbnRSZWYsXG4gICAgQEluamVjdChFTlZJUk9OTUVOVCkgcHVibGljIGVudmk6IEVudmlyb25tZW50LFxuICApIHsgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aW55bWNlLmluaXQoe1xuICAgICAgdGFyZ2V0OiB0aGlzLmhvc3QubmF0aXZlRWxlbWVudCxcbiAgICAgIHBsdWdpbnM6IHRoaXMucGx1Z2lucyxcbiAgICAgIHNraW5fdXJsOiBgJHtkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYmFzZScpWzBdLmhyZWZ9YXNzZXRzL3NraW5zL2xpZ2h0Z3JheWAsXG4gICAgICBzZXR1cDogZWRpdG9yID0+IHtcbiAgICAgICAgdGhpcy5lZGl0b3IgPSBlZGl0b3I7XG4gICAgICAgIGVkaXRvci5vbigna2V5dXAnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICB0aGlzLnZhbHVlID0gZWRpdG9yLmdldENvbnRlbnQoKTtcbiAgICAgICAgICB0aGlzLmNoYW5nZS5lbWl0KHRoaXMudmFsdWUpO1xuICAgICAgICAgIHRoaXMuZWRpdG9yY2hhbmdlLmVtaXQoZXZlbnQpO1xuICAgICAgICB9KTtcbiAgICAgICAgZWRpdG9yLm9uKCdmb2N1cycsIChldmVudCkgPT4ge1xuICAgICAgICAgIHRoaXMuZm9jdXMuZW1pdChldmVudCk7XG4gICAgICAgIH0pO1xuICAgICAgICBlZGl0b3Iub24oJ2JsdXInLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICB0aGlzLmJsdXIuZW1pdChldmVudCk7XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIGluaXRfaW5zdGFuY2VfY2FsbGJhY2s6IChlZGl0b3I6IGFueSkgPT4ge1xuICAgICAgICBlZGl0b3IgJiYgdGhpcy52YWx1ZSAmJiB0aGlzLmVkaXRvci5zZXRDb250ZW50KHRoaXMudmFsdWUpO1xuICAgICAgfSxcbiAgICAgIGhlaWdodDogdGhpcy5oZWlnaHQsXG4gICAgICByZWFkb25seTogdGhpcy5yZWFkb25seSxcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRpbnltY2UucmVtb3ZlKHRoaXMuZWRpdG9yKTtcbiAgfVxuXG4gIGdldCB2YWx1ZSgpOiBhbnkgeyByZXR1cm4gdGhpcy5fdmFsdWU7IH1cblxuICBzZXQgdmFsdWUodmFsdWU6IGFueSkge1xuICAgIGlmICh0aGlzLl92YWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgICB0aGlzLm9uQ2hhbmdlKHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgICAgdGhpcy5vbkNoYW5nZSh0aGlzLnZhbHVlKTtcbiAgICB9XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHsgdGhpcy5vbkNoYW5nZSA9IGZuOyB9XG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHsgdGhpcy5vblRvdWNoZWQgPSBmbjsgfVxuXG59XG4iXX0=