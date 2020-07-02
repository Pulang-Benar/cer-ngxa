import { EventEmitter } from '@angular/core';
import { NgControl } from '@angular/forms';
import { NgxaValueAccessor } from '../base/ngxa-value-accessor.component';
import { CheckboxModel } from './checkbox.model';
export declare class NgxaCheckboxComponent extends NgxaValueAccessor<CheckboxModel[]> {
    locale: string;
    colLabel: number;
    colInput: number;
    data: CheckboxModel[];
    onChecked: EventEmitter<any>;
    constructor(ngControl: NgControl, locale: string);
    onCheckedChange(): void;
}
