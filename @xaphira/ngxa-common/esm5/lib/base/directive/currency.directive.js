/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, HostListener, Input, ElementRef } from '@angular/core';
import { NgControl } from '@angular/forms';
var CurrencyMaskDirective = /** @class */ (function () {
    function CurrencyMaskDirective(ngControl, el) {
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
    CurrencyMaskDirective.prototype.onFocus = /**
     * @param {?} value
     * @param {?} event
     * @return {?}
     */
    function (value, event) {
        value = value ? value : this.prefix.concat(' ');
        value = this.onLeave(value.replace(this.suffix, ''));
        event.target.toNumber = this.toNumber(value);
        this.ngControl.valueAccessor.writeValue(value);
    };
    /**
     * @param {?} value
     * @param {?} event
     * @return {?}
     */
    CurrencyMaskDirective.prototype.onBlur = /**
     * @param {?} value
     * @param {?} event
     * @return {?}
     */
    function (value, event) {
        value = value.replace(/\D/g, '') ? this.onLeave(value).concat(this.suffix) : '';
        event.target.toNumber = this.toNumber(value);
        this.ngControl.valueAccessor.writeValue(value);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CurrencyMaskDirective.prototype.onModelChange = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        value = this.toNumber(value);
        value = value.replace(new RegExp('[^0-9|^' + this.decimalSeparator + '|^-]', 'g'), '');
        if (value.toString().match(new RegExp('^\-?[0-9]*(' + this.decimalSeparator + '[0-9]*)?$', 'g'))) {
            var _a = this.onInputChange(value), val = _a.val, frac = _a.frac;
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
    };
    /**
     * @param {?} e
     * @return {?}
     */
    CurrencyMaskDirective.prototype.onKeyDown = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
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
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CurrencyMaskDirective.prototype.onLeave = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _a = this.onInputChange(value), val = _a.val, frac = _a.frac;
        /** @type {?} */
        var fraction = '';
        if (frac) {
            if (parseInt(frac, 10) > 0) {
                fraction = this.decimalSeparator + this.pad(frac, this.padding).substring(0, this.padding);
            }
        }
        return this.onTransform(val, fraction);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CurrencyMaskDirective.prototype.onInputChange = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _a = tslib_1.__read((value || '').split(this.decimalSeparator), 2), _b = _a[0], val = _b === void 0 ? '' : _b, _c = _a[1], fraction = _c === void 0 ? '' : _c;
        return { val: val, frac: fraction };
    };
    /**
     * @param {?} val
     * @param {?} fraction
     * @return {?}
     */
    CurrencyMaskDirective.prototype.onTransform = /**
     * @param {?} val
     * @param {?} fraction
     * @return {?}
     */
    function (val, fraction) {
        val = val.replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandsSeparator);
        return val + fraction;
    };
    /**
     * @param {?} val
     * @return {?}
     */
    CurrencyMaskDirective.prototype.toNumber = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        return val
            .replace(this.prefix, '')
            .replace(' ', '')
            .replace(this.suffix, '')
            .replace(new RegExp(this.thousandsSeparator, 'g'), '');
    };
    /**
     * @private
     * @param {?} val
     * @param {?} size
     * @return {?}
     */
    CurrencyMaskDirective.prototype.pad = /**
     * @private
     * @param {?} val
     * @param {?} size
     * @return {?}
     */
    function (val, size) {
        while (val.length < size)
            val = val + '0';
        return val;
    };
    CurrencyMaskDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'input[xaCurrency]',
                },] }
    ];
    /** @nocollapse */
    CurrencyMaskDirective.ctorParameters = function () { return [
        { type: NgControl },
        { type: ElementRef }
    ]; };
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
    return CurrencyMaskDirective;
}());
export { CurrencyMaskDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVuY3kuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHhhcGhpcmEvbmd4YS1jb21tb24vIiwic291cmNlcyI6WyJsaWIvYmFzZS9kaXJlY3RpdmUvY3VycmVuY3kuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0M7SUFXSSwrQkFBb0IsU0FBb0IsRUFBVSxFQUFjO1FBQTVDLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFBVSxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBUC9DLFdBQU0sR0FBVyxJQUFJLENBQUM7UUFDckIscUJBQWdCLEdBQVcsR0FBRyxDQUFDO1FBQzlCLHVCQUFrQixHQUFXLEdBQUcsQ0FBQztRQUNuQyxXQUFNLEdBQVcsSUFBSSxDQUFDO1FBQ3JCLFlBQU8sR0FBVyxDQUFDLENBQUM7SUFHOEIsQ0FBQzs7Ozs7O0lBR3JFLHVDQUFPOzs7OztJQURQLFVBQ1EsS0FBSyxFQUFFLEtBQUs7UUFDaEIsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoRCxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNyRCxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuRCxDQUFDOzs7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LFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsbUJBQW1CO2lCQUNoQzs7OztnQkFKUSxTQUFTO2dCQUR1QixVQUFVOzs7eUJBTzlDLEtBQUssU0FBQyxRQUFRO21DQUNkLEtBQUssU0FBQyxTQUFTO3FDQUNmLEtBQUssU0FBQyxVQUFVO3lCQUNoQixLQUFLLFNBQUMsUUFBUTswQkFDZCxLQUFLLFNBQUMsU0FBUzswQkFLZixZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMscUJBQXFCLEVBQUUsUUFBUSxDQUFDO3lCQVF2RCxZQUFZLFNBQUMsTUFBTSxFQUFFLENBQUMscUJBQXFCLEVBQUUsUUFBUSxDQUFDO2dDQU90RCxZQUFZLFNBQUMsZUFBZSxFQUFFLENBQUMsUUFBUSxDQUFDOzRCQTRCeEMsWUFBWSxTQUFDLFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7SUF3RHZDLDRCQUFDO0NBQUEsQUFoSEQsSUFnSEM7U0E3R1kscUJBQXFCOzs7SUFDOUIsdUNBQXVDOztJQUN2QyxpREFBaUQ7O0lBQ2pELG1EQUFvRDs7SUFDcEQsdUNBQXVDOztJQUN2Qyx3Q0FBc0M7Ozs7O0lBQ3RDLHNDQUFzQjs7Ozs7SUFFViwwQ0FBNEI7Ozs7O0lBQUUsbUNBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIsIElucHV0LCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ0NvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnaW5wdXRbeGFDdXJyZW5jeV0nLFxufSlcbmV4cG9ydCBjbGFzcyBDdXJyZW5jeU1hc2tEaXJlY3RpdmUge1xuICAgIEBJbnB1dCgncHJlZml4JykgcHJlZml4OiBzdHJpbmcgPSAnUnAnO1xuICAgIEBJbnB1dCgnZGVjaW1hbCcpIGRlY2ltYWxTZXBhcmF0b3I6IHN0cmluZyA9ICcuJztcbiAgICBASW5wdXQoJ3Rob3VzYW5kJykgdGhvdXNhbmRzU2VwYXJhdG9yOiBzdHJpbmcgPSAnLCc7XG4gICAgQElucHV0KCdzdWZmaXgnKSBzdWZmaXg6IHN0cmluZyA9ICcsLSc7XG4gICAgQElucHV0KCdwYWRkaW5nJykgcGFkZGluZzogbnVtYmVyID0gNTtcbiAgICBwcml2YXRlIHZhbHVlOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5nQ29udHJvbDogTmdDb250cm9sLCBwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7IH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ2ZvY3VzJywgWyckZXZlbnQudGFyZ2V0LnZhbHVlJywgJyRldmVudCddKVxuICAgIG9uRm9jdXModmFsdWUsIGV2ZW50KSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWUgPyB2YWx1ZSA6IHRoaXMucHJlZml4LmNvbmNhdCgnICcpO1xuICAgICAgICB2YWx1ZSA9IHRoaXMub25MZWF2ZSh2YWx1ZS5yZXBsYWNlKHRoaXMuc3VmZml4LCAnJykpO1xuICAgICAgICBldmVudC50YXJnZXQudG9OdW1iZXIgPSB0aGlzLnRvTnVtYmVyKHZhbHVlKTtcbiAgICAgICAgdGhpcy5uZ0NvbnRyb2wudmFsdWVBY2Nlc3Nvci53cml0ZVZhbHVlKHZhbHVlKTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdibHVyJywgWyckZXZlbnQudGFyZ2V0LnZhbHVlJywgJyRldmVudCddKVxuICAgIG9uQmx1cih2YWx1ZSwgZXZlbnQpIHtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9cXEQvZywgJycpID8gdGhpcy5vbkxlYXZlKHZhbHVlKS5jb25jYXQodGhpcy5zdWZmaXgpIDogJyc7XG4gICAgICAgIGV2ZW50LnRhcmdldC50b051bWJlciA9IHRoaXMudG9OdW1iZXIodmFsdWUpO1xuICAgICAgICB0aGlzLm5nQ29udHJvbC52YWx1ZUFjY2Vzc29yLndyaXRlVmFsdWUodmFsdWUpO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ25nTW9kZWxDaGFuZ2UnLCBbJyRldmVudCddKVxuICAgIG9uTW9kZWxDaGFuZ2UodmFsdWUpIHtcbiAgICAgICAgdmFsdWUgPSB0aGlzLnRvTnVtYmVyKHZhbHVlKTtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKG5ldyBSZWdFeHAoJ1teMC05fF4nICsgdGhpcy5kZWNpbWFsU2VwYXJhdG9yICsgJ3xeLV0nLCAnZycpLCAnJyk7XG4gICAgICAgIGlmICh2YWx1ZS50b1N0cmluZygpLm1hdGNoKG5ldyBSZWdFeHAoJ15cXC0/WzAtOV0qKCcgKyB0aGlzLmRlY2ltYWxTZXBhcmF0b3IgKyAnWzAtOV0qKT8kJywgJ2cnKSkpIHtcbiAgICAgICAgICAgIGxldCB7dmFsLCBmcmFjfSA9IHRoaXMub25JbnB1dENoYW5nZSh2YWx1ZSk7XG4gICAgICAgICAgICBpZiAodmFsdWUudG9TdHJpbmcoKS5tYXRjaChuZXcgUmVnRXhwKCdeXFwtP1swLTldKiQnLCAnZycpKSkge1xuICAgICAgICAgICAgICAgIHZhbCA9ICghaXNOYU4ocGFyc2VJbnQodmFsLCAxMCkpICYmIHZhbCAhPT0gJy0wJykgPyBwYXJzZUludCh2YWwsIDEwKS50b1N0cmluZygpIDogdmFsO1xuICAgICAgICAgICAgICAgIHZhbHVlID0gdGhpcy5vblRyYW5zZm9ybSh2YWwsIGZyYWMpO1xuICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnByZWZpeC5jb25jYXQoJyAnKS5jb25jYXQodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHZhbHVlLnRvU3RyaW5nKCkubWF0Y2gobmV3IFJlZ0V4cCgnXihcXC0/WzAtOV0pKlsnICsgdGhpcy5kZWNpbWFsU2VwYXJhdG9yICsgJ11bMC05XSokJywgJ2cnKSkgJiZcbiAgICAgICAgICAgICAgICAhdmFsdWUudG9TdHJpbmcoKS5zdGFydHNXaXRoKHRoaXMuZGVjaW1hbFNlcGFyYXRvciwgMCkpIHtcbiAgICAgICAgICAgICAgICBmcmFjID0gZnJhYy5zdWJzdHJpbmcoMCwgdGhpcy5wYWRkaW5nKTtcbiAgICAgICAgICAgICAgICBmcmFjID0gdGhpcy5kZWNpbWFsU2VwYXJhdG9yLmNvbmNhdChmcmFjKTtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHRoaXMub25UcmFuc2Zvcm0odmFsLCBmcmFjKTtcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy5wcmVmaXguY29uY2F0KCcgJykuY29uY2F0KHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC50b051bWJlciA9IHRoaXMudG9OdW1iZXIoXG4gICAgICAgICAgICAgICAgdGhpcy5wcmVmaXguY29uY2F0KCcgJykuY29uY2F0KFxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uVHJhbnNmb3JtKHZhbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIChwYXJzZUludChmcmFjLnJlcGxhY2UodGhpcy5kZWNpbWFsU2VwYXJhdG9yLCAnJyksIDEwKSA+IDApID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZChmcmFjLCB0aGlzLnBhZGRpbmcgKyAxKS5zdWJzdHJpbmcoMCwgdGhpcy5wYWRkaW5nICsgMSkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICcnKSkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubmdDb250cm9sLnZhbHVlQWNjZXNzb3Iud3JpdGVWYWx1ZSh0aGlzLnZhbHVlKTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdrZXlkb3duJywgWyckZXZlbnQnXSlcbiAgICBvbktleURvd24oZTogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICBbNDYsIDgsIDksIDI3LCAxMywgMTEwLCAxOTAsIDE4OV0uaW5kZXhPZihlLmtleUNvZGUpICE9PSAtMSB8fFxuICAgICAgICAgICAgKGUua2V5Q29kZSA9PT0gNjUgJiYgZS5jdHJsS2V5ID09PSB0cnVlKSB8fCAvLyBBbGxvdzogQ3RybCtBXG4gICAgICAgICAgICAoZS5rZXlDb2RlID09PSA2NyAmJiBlLmN0cmxLZXkgPT09IHRydWUpIHx8IC8vIEFsbG93OiBDdHJsK0NcbiAgICAgICAgICAgIChlLmtleUNvZGUgPT09IDg2ICYmIGUuY3RybEtleSA9PT0gdHJ1ZSkgfHwgLy8gQWxsb3c6IEN0cmwrVlxuICAgICAgICAgICAgKGUua2V5Q29kZSA9PT0gODggJiYgZS5jdHJsS2V5ID09PSB0cnVlKSB8fCAvLyBBbGxvdzogQ3RybCtYXG4gICAgICAgICAgICAoZS5rZXlDb2RlID09PSA2NSAmJiBlLm1ldGFLZXkgPT09IHRydWUpIHx8IC8vIENtZCtBIChNYWMpXG4gICAgICAgICAgICAoZS5rZXlDb2RlID09PSA2NyAmJiBlLm1ldGFLZXkgPT09IHRydWUpIHx8IC8vIENtZCtDIChNYWMpXG4gICAgICAgICAgICAoZS5rZXlDb2RlID09PSA4NiAmJiBlLm1ldGFLZXkgPT09IHRydWUpIHx8IC8vIENtZCtWIChNYWMpXG4gICAgICAgICAgICAoZS5rZXlDb2RlID09PSA4OCAmJiBlLm1ldGFLZXkgPT09IHRydWUpIHx8IC8vIENtZCtYIChNYWMpXG4gICAgICAgICAgICAoZS5rZXlDb2RlID49IDM1ICYmIGUua2V5Q29kZSA8PSAzOSkgLy8gSG9tZSwgRW5kLCBMZWZ0LCBSaWdodFxuICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybjsgIC8vIGxldCBpdCBoYXBwZW4sIGRvbid0IGRvIGFueXRoaW5nXG4gICAgICAgIH1cblxuICAgICAgICAvLyBFbnN1cmUgdGhhdCBpdCBpcyBhIG51bWJlciBhbmQgc3RvcCB0aGUga2V5cHJlc3NcbiAgICAgICAgaWYgKChlLnNoaWZ0S2V5IHx8IChlLmtleUNvZGUgPCA0OCB8fCBlLmtleUNvZGUgPiA1NykpICYmIChlLmtleUNvZGUgPCA5NiB8fCBlLmtleUNvZGUgPiAxMDUpKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkxlYXZlKHZhbHVlKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3Qge3ZhbCwgZnJhY30gPSB0aGlzLm9uSW5wdXRDaGFuZ2UodmFsdWUpO1xuICAgICAgICBsZXQgZnJhY3Rpb24gPSAnJztcbiAgICAgICAgaWYgKGZyYWMpIHtcbiAgICAgICAgICAgIGlmIChwYXJzZUludChmcmFjLCAxMCkgPiAwKSB7XG4gICAgICAgICAgICAgIGZyYWN0aW9uID0gdGhpcy5kZWNpbWFsU2VwYXJhdG9yICsgdGhpcy5wYWQoZnJhYywgdGhpcy5wYWRkaW5nKS5zdWJzdHJpbmcoMCwgdGhpcy5wYWRkaW5nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5vblRyYW5zZm9ybSh2YWwsIGZyYWN0aW9uKTtcbiAgICB9XG5cbiAgICBvbklucHV0Q2hhbmdlKHZhbHVlKToge3ZhbDogc3RyaW5nLCBmcmFjOiBzdHJpbmd9IHtcbiAgICAgICAgY29uc3QgWyB2YWwgPSAnJywgZnJhY3Rpb24gPSAnJ10gPSAodmFsdWUgfHwgJycpLnNwbGl0KHRoaXMuZGVjaW1hbFNlcGFyYXRvcik7XG4gICAgICAgIHJldHVybiB7dmFsIDogdmFsLCBmcmFjOiBmcmFjdGlvbn07XG4gICAgfVxuXG4gICAgb25UcmFuc2Zvcm0odmFsOiBzdHJpbmcsIGZyYWN0aW9uOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgdmFsID0gdmFsLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csIHRoaXMudGhvdXNhbmRzU2VwYXJhdG9yKTtcbiAgICAgIHJldHVybiB2YWwgKyBmcmFjdGlvbjtcbiAgICB9XG5cbiAgICB0b051bWJlcih2YWw6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gdmFsXG4gICAgICAgICAgICAucmVwbGFjZSh0aGlzLnByZWZpeCwgJycpXG4gICAgICAgICAgICAucmVwbGFjZSgnICcsICcnKVxuICAgICAgICAgICAgLnJlcGxhY2UodGhpcy5zdWZmaXgsICcnKVxuICAgICAgICAgICAgLnJlcGxhY2UobmV3IFJlZ0V4cCh0aGlzLnRob3VzYW5kc1NlcGFyYXRvciwgJ2cnKSwgJycpO1xuICAgIH1cblxuICAgIHByaXZhdGUgcGFkKHZhbCwgc2l6ZSk6IHN0cmluZyB7XG4gICAgICAgIHdoaWxlICh2YWwubGVuZ3RoIDwgc2l6ZSkgdmFsID0gdmFsICsgJzAnO1xuICAgICAgICByZXR1cm4gdmFsO1xuICAgIH1cbn1cbiJdfQ==