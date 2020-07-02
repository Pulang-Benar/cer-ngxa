import { NgControl } from '@angular/forms';
import { NgxaValueAccessor } from '../../base/ngxa-value-accessor.component';
export declare class NgxaInputTextComponent extends NgxaValueAccessor<string> {
    locale: string;
    placeholder: string;
    colLabel: number;
    colInput: number;
    minLength: number;
    maxLength: number;
    type: 'text' | 'password' | 'number';
    constructor(ngControl: NgControl, locale: string);
}
