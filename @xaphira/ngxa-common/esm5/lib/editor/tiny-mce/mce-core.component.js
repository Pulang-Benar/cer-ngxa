/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, ViewEncapsulation, Input, forwardRef, Output, EventEmitter, Inject, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ENVIRONMENT, Environment } from '@xaphira/shared';
var MCECoreComponent = /** @class */ (function () {
    function MCECoreComponent(host, envi) {
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
        function (_) { });
        this.onTouched = (/**
         * @param {?=} _
         * @return {?}
         */
        function (_) { });
    }
    /**
     * @return {?}
     */
    MCECoreComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        tinymce.init({
            target: this.host.nativeElement,
            plugins: this.plugins,
            skin_url: document.getElementsByTagName('base')[0].href + "assets/skins/lightgray",
            setup: (/**
             * @param {?} editor
             * @return {?}
             */
            function (editor) {
                _this.editor = editor;
                editor.on('keyup', (/**
                 * @param {?} event
                 * @return {?}
                 */
                function (event) {
                    _this.value = editor.getContent();
                    _this.change.emit(_this.value);
                    _this.editorchange.emit(event);
                }));
                editor.on('focus', (/**
                 * @param {?} event
                 * @return {?}
                 */
                function (event) {
                    _this.focus.emit(event);
                }));
                editor.on('blur', (/**
                 * @param {?} event
                 * @return {?}
                 */
                function (event) {
                    _this.blur.emit(event);
                }));
            }),
            init_instance_callback: (/**
             * @param {?} editor
             * @return {?}
             */
            function (editor) {
                editor && _this.value && _this.editor.setContent(_this.value);
            }),
            height: this.height,
            readonly: this.readonly,
        });
    };
    /**
     * @return {?}
     */
    MCECoreComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        tinymce.remove(this.editor);
    };
    Object.defineProperty(MCECoreComponent.prototype, "value", {
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
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    MCECoreComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value) {
            this._value = value;
            this.onChange(this.value);
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    MCECoreComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) { this.onChange = fn; };
    /**
     * @param {?} fn
     * @return {?}
     */
    MCECoreComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) { this.onTouched = fn; };
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
                            function () { return MCECoreComponent; })),
                            multi: true,
                        }]
                }] }
    ];
    /** @nocollapse */
    MCECoreComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Environment, decorators: [{ type: Inject, args: [ENVIRONMENT,] }] }
    ]; };
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
    return MCECoreComponent;
}());
export { MCECoreComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWNlLWNvcmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHhhcGhpcmEvbmd4YS1jb21tb24vIiwic291cmNlcyI6WyJsaWIvZWRpdG9yL3RpbnktbWNlL21jZS1jb3JlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFHVCxVQUFVLEVBQ1YsaUJBQWlCLEVBQ2pCLEtBQUssRUFDTCxVQUFVLEVBQ1YsTUFBTSxFQUNOLFlBQVksRUFDWixNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFJM0Q7SUF5QkUsMEJBQ1UsSUFBZ0IsRUFDSSxJQUFpQjtRQURyQyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ0ksU0FBSSxHQUFKLElBQUksQ0FBYTtRQWZ0QyxZQUFPLEdBQWEsQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQy9DLFdBQU0sR0FBVyxHQUFHLENBQUM7UUFDckIsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUV6QixXQUFNLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFDcEQsaUJBQVksR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUMxRCxVQUFLLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFDbkQsU0FBSSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3JELGFBQVE7Ozs7UUFBRyxVQUFDLENBQU0sSUFBTSxDQUFDLEVBQUM7UUFDMUIsY0FBUzs7OztRQUFHLFVBQUMsQ0FBTyxJQUFNLENBQUMsRUFBQztJQU8vQixDQUFDOzs7O0lBRUwsMENBQWU7OztJQUFmO1FBQUEsaUJBeUJDO1FBeEJDLE9BQU8sQ0FBQyxJQUFJLENBQUM7WUFDWCxNQUFNLEVBQUUsSUFB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SDs7OztnQkF0QkMsVUFBVTtnQkFTVSxXQUFXLHVCQStCNUIsTUFBTSxTQUFDLFdBQVc7OzswQkFmcEIsS0FBSzt5QkFDTCxLQUFLOzJCQUNMLEtBQUs7eUJBQ0wsS0FBSyxTQUFDLE9BQU87eUJBQ2IsTUFBTTsrQkFDTixNQUFNO3dCQUNOLE1BQU07dUJBQ04sTUFBTTs7SUE2RFQsdUJBQUM7Q0FBQSxBQWhGRCxJQWdGQztTQXRFWSxnQkFBZ0I7OztJQUUzQixtQ0FBd0Q7O0lBQ3hELGtDQUE4Qjs7SUFDOUIsb0NBQW1DOztJQUNuQyxrQ0FBNkI7O0lBQzdCLGtDQUE4RDs7SUFDOUQsd0NBQW9FOztJQUNwRSxpQ0FBNkQ7O0lBQzdELGdDQUE0RDs7SUFDNUQsb0NBQWlDOztJQUNqQyxxQ0FBbUM7O0lBRW5DLGtDQUFZOzs7OztJQUdWLGdDQUF3Qjs7SUFDeEIsZ0NBQTZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPbkRlc3Ryb3ksXG4gIEFmdGVyVmlld0luaXQsXG4gIEVsZW1lbnRSZWYsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBJbnB1dCxcbiAgZm9yd2FyZFJlZixcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIEluamVjdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBFTlZJUk9OTUVOVCwgRW52aXJvbm1lbnQgfSBmcm9tICdAeGFwaGlyYS9zaGFyZWQnO1xuXG5kZWNsYXJlIHZhciB0aW55bWNlOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3hhLW1jZS1jb3JlJyxcbiAgdGVtcGxhdGU6ICcnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBwcm92aWRlcnM6IFt7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE1DRUNvcmVDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWUsXG4gIH1dLFxufSlcbmV4cG9ydCBjbGFzcyBNQ0VDb3JlQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBBZnRlclZpZXdJbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG5cbiAgQElucHV0KCkgcGx1Z2luczogc3RyaW5nW10gPSBbJ2xpbmsnLCAncGFzdGUnLCAndGFibGUnXTtcbiAgQElucHV0KCkgaGVpZ2h0OiBudW1iZXIgPSAzMjA7XG4gIEBJbnB1dCgpIHJlYWRvbmx5OiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgndmFsdWUnKSAgX3ZhbHVlOiBhbnk7XG4gIEBPdXRwdXQoKSBjaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBlZGl0b3JjaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBmb2N1czogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGJsdXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIHB1YmxpYyBvbkNoYW5nZSA9IChfOiBhbnkpID0+IHt9O1xuICBwdWJsaWMgb25Ub3VjaGVkID0gKF8/OiBhbnkpID0+IHt9O1xuXG4gIGVkaXRvcjogYW55O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaG9zdDogRWxlbWVudFJlZixcbiAgICBASW5qZWN0KEVOVklST05NRU5UKSBwdWJsaWMgZW52aTogRW52aXJvbm1lbnQsXG4gICkgeyB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRpbnltY2UuaW5pdCh7XG4gICAgICB0YXJnZXQ6IHRoaXMuaG9zdC5uYXRpdmVFbGVtZW50LFxuICAgICAgcGx1Z2luczogdGhpcy5wbHVnaW5zLFxuICAgICAgc2tpbl91cmw6IGAke2RvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdiYXNlJylbMF0uaHJlZn1hc3NldHMvc2tpbnMvbGlnaHRncmF5YCxcbiAgICAgIHNldHVwOiBlZGl0b3IgPT4ge1xuICAgICAgICB0aGlzLmVkaXRvciA9IGVkaXRvcjtcbiAgICAgICAgZWRpdG9yLm9uKCdrZXl1cCcsIChldmVudCkgPT4ge1xuICAgICAgICAgIHRoaXMudmFsdWUgPSBlZGl0b3IuZ2V0Q29udGVudCgpO1xuICAgICAgICAgIHRoaXMuY2hhbmdlLmVtaXQodGhpcy52YWx1ZSk7XG4gICAgICAgICAgdGhpcy5lZGl0b3JjaGFuZ2UuZW1pdChldmVudCk7XG4gICAgICAgIH0pO1xuICAgICAgICBlZGl0b3Iub24oJ2ZvY3VzJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgdGhpcy5mb2N1cy5lbWl0KGV2ZW50KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGVkaXRvci5vbignYmx1cicsIChldmVudCkgPT4ge1xuICAgICAgICAgIHRoaXMuYmx1ci5lbWl0KGV2ZW50KTtcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgaW5pdF9pbnN0YW5jZV9jYWxsYmFjazogKGVkaXRvcjogYW55KSA9PiB7XG4gICAgICAgIGVkaXRvciAmJiB0aGlzLnZhbHVlICYmIHRoaXMuZWRpdG9yLnNldENvbnRlbnQodGhpcy52YWx1ZSk7XG4gICAgICB9LFxuICAgICAgaGVpZ2h0OiB0aGlzLmhlaWdodCxcbiAgICAgIHJlYWRvbmx5OiB0aGlzLnJlYWRvbmx5LFxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGlueW1jZS5yZW1vdmUodGhpcy5lZGl0b3IpO1xuICB9XG5cbiAgZ2V0IHZhbHVlKCk6IGFueSB7IHJldHVybiB0aGlzLl92YWx1ZTsgfVxuXG4gIHNldCB2YWx1ZSh2YWx1ZTogYW55KSB7XG4gICAgaWYgKHRoaXMuX3ZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICAgIHRoaXMub25DaGFuZ2UodmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgICB0aGlzLm9uQ2hhbmdlKHRoaXMudmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQgeyB0aGlzLm9uQ2hhbmdlID0gZm47IH1cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQgeyB0aGlzLm9uVG91Y2hlZCA9IGZuOyB9XG5cbn1cbiJdfQ==