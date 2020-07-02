import { NgControl } from '@angular/forms';
import { NgxaValidatorAccessor } from './ngxa-validator-accessor.component';
export declare abstract class NgxaValueAccessor<T> extends NgxaValidatorAccessor {
    ngControl: NgControl;
    locale: string;
    format: string;
    skeleton: boolean;
    protected _value: any;
    defaultValue: any;
    constructor(ngControl: NgControl, locale: string);
    value: T;
    writeValue(value: T): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState?(isDisabled: boolean): void;
}
