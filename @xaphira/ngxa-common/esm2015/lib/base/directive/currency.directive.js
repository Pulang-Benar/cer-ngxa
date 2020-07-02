/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostListener, Input, ElementRef } from '@angular/core';
import { NgControl } from '@angular/forms';
export class CurrencyMaskDirective {
    /**
     * @param {?} ngControl
     * @param {?} el
     */
    constructor(ngControl, el) {
        this.ngControl = ngControl;
        this.el = el;
        this.prefix = 'Rp';
        this.decimalSeparator = '.';
        this.thousandsSeparator = ',';
        this.suffix = ',-';
        this.padding = 5;
    }
    /**
     * @param {?} value
     * @param {?} event
     * @return {?}
     */
    onFocus(value, event) {
        value = value ? value : this.prefix.concat(' ');
        value = this.onLeave(value.replace(this.suffix, ''));
        event.target.toNumber = this.toNumber(value);
        this.ngControl.valueAccessor.writeValue(value);
    }
    /**
     * @param {?} value
     * @param {?} event
     * @return {?}
     */
    onBlur(value, event) {
        value = value.replace(/\D/g, '') ? this.onLeave(value).concat(this.suffix) : '';
        event.target.toNumber = this.toNumber(value);
        this.ngControl.valueAccessor.writeValue(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onModelChange(value) {
        value = this.toNumber(value);
        value = value.replace(new RegExp('[^0-9|^' + this.decimalSeparator + '|^-]', 'g'), '');
        if (value.toString().match(new RegExp('^\-?[0-9]*(' + this.decimalSeparator + '[0-9]*)?$', 'g'))) {
            let { val, frac } = this.onInputChange(value);
            if (value.toString().match(new RegExp('^\-?[0-9]*$', 'g'))) {
                val = (!isNaN(parseInt(val, 10)) && val !== '-0') ? parseInt(val, 10).toString() : val;
                value = this.onTransform(val, frac);
                this.value = this.prefix.concat(' ').concat(value);
            }
            if (value.toString().match(new RegExp('^(\-?[0-9])*[' + this.decimalSeparator + '][0-9]*$', 'g')) &&
                !value.toString().startsWith(this.decimalSeparator, 0)) {
                frac = frac.substring(0, this.padding);
                frac = this.decimalSeparator.concat(frac);
                value = this.onTransform(val, frac);
                this.value = this.prefix.concat(' ').concat(value);
            }
            this.el.nativeElement.toNumber = this.toNumber(this.prefix.concat(' ').concat(this.onTransform(val, (parseInt(frac.replace(this.decimalSeparator, ''), 10) > 0) ?
                this.pad(frac, this.padding + 1).substring(0, this.padding + 1) :
                '')));
        }
        this.ngControl.valueAccessor.writeValue(this.value);
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onKeyDown(e) {
        if ([46, 8, 9, 27, 13, 110, 190, 189].indexOf(e.keyCode) !== -1 ||
            (e.keyCode === 65 && e.ctrlKey === true) || // Allow: Ctrl+A
            (e.keyCode === 67 && e.ctrlKey === true) || // Allow: Ctrl+C
            (e.keyCode === 86 && e.ctrlKey === true) || // Allow: Ctrl+V
            (e.keyCode === 88 && e.ctrlKey === true) || // Allow: Ctrl+X
            (e.keyCode === 65 && e.metaKey === true) || // Cmd+A (Mac)
            (e.keyCode === 67 && e.metaKey === true) || // Cmd+C (Mac)
            (e.keyCode === 86 && e.metaKey === true) || // Cmd+V (Mac)
            (e.keyCode === 88 && e.metaKey === true) || // Cmd+X (Mac)
            (e.keyCode >= 35 && e.keyCode <= 39) // Home, End, Left, Right
        ) {
            return; // let it happen, don't do anything
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onLeave(value) {
        const { val, frac } = this.onInputChange(value);
        /** @type {?} */
        let fraction = '';
        if (frac) {
            if (parseInt(frac, 10) > 0) {
                fraction = this.decimalSeparator + this.pad(frac, this.padding).substring(0, this.padding);
            }
        }
        return this.onTransform(val, fraction);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onInputChange(value) {
        const [val = '', fraction = ''] = (value || '').split(this.decimalSeparator);
        return { val: val, frac: fraction };
    }
    /**
     * @param {?} val
     * @param {?} fraction
     * @return {?}
     */
    onTransform(val, fraction) {
        val = val.replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandsSeparator);
        return val + fraction;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    toNumber(val) {
        return val
            .replace(this.prefix, '')
            .replace(' ', '')
            .replace(this.suffix, '')
            .replace(new RegExp(this.thousandsSeparator, 'g'), '');
    }
    /**
     * @private
     * @param {?} val
     * @param {?} size
     * @return {?}
     */
    pad(val, size) {
        while (val.length < size)
            val = val + '0';
        return val;
    }
}
CurrencyMaskDirective.decorators = [
    { type: Directive, args: [{
                selector: 'input[xaCurrency]',
            },] }
];
/** @nocollapse */
CurrencyMaskDirective.ctorParameters = () => [
    { type: NgControl },
    { type: ElementRef }
];
CurrencyMaskDirective.propDecorators = {
    prefix: [{ type: Input, args: ['prefix',] }],
    decimalSeparator: [{ type: Input, args: ['decimal',] }],
    thousandsSeparator: [{ type: Input, args: ['thousand',] }],
    suffix: [{ type: Input, args: ['suffix',] }],
    padding: [{ type: Input, args: ['padding',] }],
    onFocus: [{ type: HostListener, args: ['focus', ['$event.target.value', '$event'],] }],
    onBlur: [{ type: HostListener, args: ['blur', ['$event.target.value', '$event'],] }],
    onModelChange: [{ type: HostListener, args: ['ngModelChange', ['$event'],] }],
    onKeyDown: [{ type: HostListener, args: ['keydown', ['$event'],] }]
};
if (false) {
    /** @type {?} */
    CurrencyMaskDirective.prototype.prefix;
    /** @type {?} */
    CurrencyMaskDirective.prototype.decimalSeparator;
    /** @type {?} */
    CurrencyMaskDirective.prototype.thousandsSeparator;
    /** @type {?} */
    CurrencyMaskDirective.prototype.suffix;
    /** @type {?} */
    CurrencyMaskDirective.prototype.padding;
    /**
     * @type {?}
     * @private
     */
    CurrencyMaskDirective.prototype.value;
    /**
     * @type {?}
     * @private
     */
    CurrencyMaskDirective.prototype.ngControl;
    /**
     * @type {?}
     * @private
     */
    CurrencyMaskDirective.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVuY3kuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHhhcGhpcmEvbmd4YS1jb21tb24vIiwic291cmNlcyI6WyJsaWIvYmFzZS9kaXJlY3RpdmUvY3VycmVuY3kuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUszQyxNQUFNLE9BQU8scUJBQXFCOzs7OztJQVE5QixZQUFvQixTQUFvQixFQUFVLEVBQWM7UUFBNUMsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUFVLE9BQUUsR0FBRixFQUFFLENBQVk7UUFQL0MsV0FBTSxHQUFXLElBQUksQ0FBQztRQUNyQixxQkFBZ0IsR0FBVyxHQUFHLENBQUM7UUFDOUIsdUJBQWtCLEdBQVcsR0FBRyxDQUFDO1FBQ25DLFdBQU0sR0FBVyxJQUFJLENBQUM7UUFDckIsWUFBTyxHQUFXLENBQUMsQ0FBQztJQUc4QixDQUFDOzs7Ozs7SUFHckUsT0FBTyxDQUFDLEtBQUssRUFBRSxLQUFLO1FBQ2hCLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEQsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDckQsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7SUFD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Q0FBQztRQUMxQyxPQUFPLEdBQUcsQ0FBQztJQUNmLENBQUM7OztZQS9HSixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLG1CQUFtQjthQUNoQzs7OztZQUpRLFNBQVM7WUFEdUIsVUFBVTs7O3FCQU85QyxLQUFLLFNBQUMsUUFBUTsrQkFDZCxLQUFLLFNBQUMsU0FBUztpQ0FDZixLQUFLLFNBQUMsVUFBVTtxQkFDaEIsS0FBSyxTQUFDLFFBQVE7c0JBQ2QsS0FBSyxTQUFDLFNBQVM7c0JBS2YsWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLHFCQUFxQixFQUFFLFFBQVEsQ0FBQztxQkFRdkQsWUFBWSxTQUFDLE1BQU0sRUFBRSxDQUFDLHFCQUFxQixFQUFFLFFBQVEsQ0FBQzs0QkFPdEQsWUFBWSxTQUFDLGVBQWUsRUFBRSxDQUFDLFFBQVEsQ0FBQzt3QkE0QnhDLFlBQVksU0FBQyxTQUFTLEVBQUUsQ0FBQyxRQUFRLENBQUM7Ozs7SUFwRG5DLHVDQUF1Qzs7SUFDdkMsaURBQWlEOztJQUNqRCxtREFBb0Q7O0lBQ3BELHVDQUF1Qzs7SUFDdkMsd0NBQXNDOzs7OztJQUN0QyxzQ0FBc0I7Ozs7O0lBRVYsMENBQTRCOzs7OztJQUFFLG1DQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdExpc3RlbmVyLCBJbnB1dCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ2lucHV0W3hhQ3VycmVuY3ldJyxcbn0pXG5leHBvcnQgY2xhc3MgQ3VycmVuY3lNYXNrRGlyZWN0aXZlIHtcbiAgICBASW5wdXQoJ3ByZWZpeCcpIHByZWZpeDogc3RyaW5nID0gJ1JwJztcbiAgICBASW5wdXQoJ2RlY2ltYWwnKSBkZWNpbWFsU2VwYXJhdG9yOiBzdHJpbmcgPSAnLic7XG4gICAgQElucHV0KCd0aG91c2FuZCcpIHRob3VzYW5kc1NlcGFyYXRvcjogc3RyaW5nID0gJywnO1xuICAgIEBJbnB1dCgnc3VmZml4Jykgc3VmZml4OiBzdHJpbmcgPSAnLC0nO1xuICAgIEBJbnB1dCgncGFkZGluZycpIHBhZGRpbmc6IG51bWJlciA9IDU7XG4gICAgcHJpdmF0ZSB2YWx1ZTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBuZ0NvbnRyb2w6IE5nQ29udHJvbCwgcHJpdmF0ZSBlbDogRWxlbWVudFJlZikgeyB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdmb2N1cycsIFsnJGV2ZW50LnRhcmdldC52YWx1ZScsICckZXZlbnQnXSlcbiAgICBvbkZvY3VzKHZhbHVlLCBldmVudCkge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlID8gdmFsdWUgOiB0aGlzLnByZWZpeC5jb25jYXQoJyAnKTtcbiAgICAgICAgdmFsdWUgPSB0aGlzLm9uTGVhdmUodmFsdWUucmVwbGFjZSh0aGlzLnN1ZmZpeCwgJycpKTtcbiAgICAgICAgZXZlbnQudGFyZ2V0LnRvTnVtYmVyID0gdGhpcy50b051bWJlcih2YWx1ZSk7XG4gICAgICAgIHRoaXMubmdDb250cm9sLnZhbHVlQWNjZXNzb3Iud3JpdGVWYWx1ZSh2YWx1ZSk7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcignYmx1cicsIFsnJGV2ZW50LnRhcmdldC52YWx1ZScsICckZXZlbnQnXSlcbiAgICBvbkJsdXIodmFsdWUsIGV2ZW50KSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvXFxEL2csICcnKSA/IHRoaXMub25MZWF2ZSh2YWx1ZSkuY29uY2F0KHRoaXMuc3VmZml4KSA6ICcnO1xuICAgICAgICBldmVudC50YXJnZXQudG9OdW1iZXIgPSB0aGlzLnRvTnVtYmVyKHZhbHVlKTtcbiAgICAgICAgdGhpcy5uZ0NvbnRyb2wudmFsdWVBY2Nlc3Nvci53cml0ZVZhbHVlKHZhbHVlKTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCduZ01vZGVsQ2hhbmdlJywgWyckZXZlbnQnXSlcbiAgICBvbk1vZGVsQ2hhbmdlKHZhbHVlKSB7XG4gICAgICAgIHZhbHVlID0gdGhpcy50b051bWJlcih2YWx1ZSk7XG4gICAgICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZShuZXcgUmVnRXhwKCdbXjAtOXxeJyArIHRoaXMuZGVjaW1hbFNlcGFyYXRvciArICd8Xi1dJywgJ2cnKSwgJycpO1xuICAgICAgICBpZiAodmFsdWUudG9TdHJpbmcoKS5tYXRjaChuZXcgUmVnRXhwKCdeXFwtP1swLTldKignICsgdGhpcy5kZWNpbWFsU2VwYXJhdG9yICsgJ1swLTldKik/JCcsICdnJykpKSB7XG4gICAgICAgICAgICBsZXQge3ZhbCwgZnJhY30gPSB0aGlzLm9uSW5wdXRDaGFuZ2UodmFsdWUpO1xuICAgICAgICAgICAgaWYgKHZhbHVlLnRvU3RyaW5nKCkubWF0Y2gobmV3IFJlZ0V4cCgnXlxcLT9bMC05XSokJywgJ2cnKSkpIHtcbiAgICAgICAgICAgICAgICB2YWwgPSAoIWlzTmFOKHBhcnNlSW50KHZhbCwgMTApKSAmJiB2YWwgIT09ICctMCcpID8gcGFyc2VJbnQodmFsLCAxMCkudG9TdHJpbmcoKSA6IHZhbDtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHRoaXMub25UcmFuc2Zvcm0odmFsLCBmcmFjKTtcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy5wcmVmaXguY29uY2F0KCcgJykuY29uY2F0KHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh2YWx1ZS50b1N0cmluZygpLm1hdGNoKG5ldyBSZWdFeHAoJ14oXFwtP1swLTldKSpbJyArIHRoaXMuZGVjaW1hbFNlcGFyYXRvciArICddWzAtOV0qJCcsICdnJykpICYmXG4gICAgICAgICAgICAgICAgIXZhbHVlLnRvU3RyaW5nKCkuc3RhcnRzV2l0aCh0aGlzLmRlY2ltYWxTZXBhcmF0b3IsIDApKSB7XG4gICAgICAgICAgICAgICAgZnJhYyA9IGZyYWMuc3Vic3RyaW5nKDAsIHRoaXMucGFkZGluZyk7XG4gICAgICAgICAgICAgICAgZnJhYyA9IHRoaXMuZGVjaW1hbFNlcGFyYXRvci5jb25jYXQoZnJhYyk7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB0aGlzLm9uVHJhbnNmb3JtKHZhbCwgZnJhYyk7XG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMucHJlZml4LmNvbmNhdCgnICcpLmNvbmNhdCh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQudG9OdW1iZXIgPSB0aGlzLnRvTnVtYmVyKFxuICAgICAgICAgICAgICAgIHRoaXMucHJlZml4LmNvbmNhdCgnICcpLmNvbmNhdChcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vblRyYW5zZm9ybSh2YWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAocGFyc2VJbnQoZnJhYy5yZXBsYWNlKHRoaXMuZGVjaW1hbFNlcGFyYXRvciwgJycpLCAxMCkgPiAwKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWQoZnJhYywgdGhpcy5wYWRkaW5nICsgMSkuc3Vic3RyaW5nKDAsIHRoaXMucGFkZGluZyArIDEpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJykpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm5nQ29udHJvbC52YWx1ZUFjY2Vzc29yLndyaXRlVmFsdWUodGhpcy52YWx1ZSk7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bicsIFsnJGV2ZW50J10pXG4gICAgb25LZXlEb3duKGU6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgWzQ2LCA4LCA5LCAyNywgMTMsIDExMCwgMTkwLCAxODldLmluZGV4T2YoZS5rZXlDb2RlKSAhPT0gLTEgfHxcbiAgICAgICAgICAgIChlLmtleUNvZGUgPT09IDY1ICYmIGUuY3RybEtleSA9PT0gdHJ1ZSkgfHwgLy8gQWxsb3c6IEN0cmwrQVxuICAgICAgICAgICAgKGUua2V5Q29kZSA9PT0gNjcgJiYgZS5jdHJsS2V5ID09PSB0cnVlKSB8fCAvLyBBbGxvdzogQ3RybCtDXG4gICAgICAgICAgICAoZS5rZXlDb2RlID09PSA4NiAmJiBlLmN0cmxLZXkgPT09IHRydWUpIHx8IC8vIEFsbG93OiBDdHJsK1ZcbiAgICAgICAgICAgIChlLmtleUNvZGUgPT09IDg4ICYmIGUuY3RybEtleSA9PT0gdHJ1ZSkgfHwgLy8gQWxsb3c6IEN0cmwrWFxuICAgICAgICAgICAgKGUua2V5Q29kZSA9PT0gNjUgJiYgZS5tZXRhS2V5ID09PSB0cnVlKSB8fCAvLyBDbWQrQSAoTWFjKVxuICAgICAgICAgICAgKGUua2V5Q29kZSA9PT0gNjcgJiYgZS5tZXRhS2V5ID09PSB0cnVlKSB8fCAvLyBDbWQrQyAoTWFjKVxuICAgICAgICAgICAgKGUua2V5Q29kZSA9PT0gODYgJiYgZS5tZXRhS2V5ID09PSB0cnVlKSB8fCAvLyBDbWQrViAoTWFjKVxuICAgICAgICAgICAgKGUua2V5Q29kZSA9PT0gODggJiYgZS5tZXRhS2V5ID09PSB0cnVlKSB8fCAvLyBDbWQrWCAoTWFjKVxuICAgICAgICAgICAgKGUua2V5Q29kZSA+PSAzNSAmJiBlLmtleUNvZGUgPD0gMzkpIC8vIEhvbWUsIEVuZCwgTGVmdCwgUmlnaHRcbiAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm47ICAvLyBsZXQgaXQgaGFwcGVuLCBkb24ndCBkbyBhbnl0aGluZ1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRW5zdXJlIHRoYXQgaXQgaXMgYSBudW1iZXIgYW5kIHN0b3AgdGhlIGtleXByZXNzXG4gICAgICAgIGlmICgoZS5zaGlmdEtleSB8fCAoZS5rZXlDb2RlIDwgNDggfHwgZS5rZXlDb2RlID4gNTcpKSAmJiAoZS5rZXlDb2RlIDwgOTYgfHwgZS5rZXlDb2RlID4gMTA1KSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25MZWF2ZSh2YWx1ZSk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IHt2YWwsIGZyYWN9ID0gdGhpcy5vbklucHV0Q2hhbmdlKHZhbHVlKTtcbiAgICAgICAgbGV0IGZyYWN0aW9uID0gJyc7XG4gICAgICAgIGlmIChmcmFjKSB7XG4gICAgICAgICAgICBpZiAocGFyc2VJbnQoZnJhYywgMTApID4gMCkge1xuICAgICAgICAgICAgICBmcmFjdGlvbiA9IHRoaXMuZGVjaW1hbFNlcGFyYXRvciArIHRoaXMucGFkKGZyYWMsIHRoaXMucGFkZGluZykuc3Vic3RyaW5nKDAsIHRoaXMucGFkZGluZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMub25UcmFuc2Zvcm0odmFsLCBmcmFjdGlvbik7XG4gICAgfVxuXG4gICAgb25JbnB1dENoYW5nZSh2YWx1ZSk6IHt2YWw6IHN0cmluZywgZnJhYzogc3RyaW5nfSB7XG4gICAgICAgIGNvbnN0IFsgdmFsID0gJycsIGZyYWN0aW9uID0gJyddID0gKHZhbHVlIHx8ICcnKS5zcGxpdCh0aGlzLmRlY2ltYWxTZXBhcmF0b3IpO1xuICAgICAgICByZXR1cm4ge3ZhbCA6IHZhbCwgZnJhYzogZnJhY3Rpb259O1xuICAgIH1cblxuICAgIG9uVHJhbnNmb3JtKHZhbDogc3RyaW5nLCBmcmFjdGlvbjogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIHZhbCA9IHZhbC5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCB0aGlzLnRob3VzYW5kc1NlcGFyYXRvcik7XG4gICAgICByZXR1cm4gdmFsICsgZnJhY3Rpb247XG4gICAgfVxuXG4gICAgdG9OdW1iZXIodmFsOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHZhbFxuICAgICAgICAgICAgLnJlcGxhY2UodGhpcy5wcmVmaXgsICcnKVxuICAgICAgICAgICAgLnJlcGxhY2UoJyAnLCAnJylcbiAgICAgICAgICAgIC5yZXBsYWNlKHRoaXMuc3VmZml4LCAnJylcbiAgICAgICAgICAgIC5yZXBsYWNlKG5ldyBSZWdFeHAodGhpcy50aG91c2FuZHNTZXBhcmF0b3IsICdnJyksICcnKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHBhZCh2YWwsIHNpemUpOiBzdHJpbmcge1xuICAgICAgICB3aGlsZSAodmFsLmxlbmd0aCA8IHNpemUpIHZhbCA9IHZhbCArICcwJztcbiAgICAgICAgcmV0dXJuIHZhbDtcbiAgICB9XG59XG4iXX0=