import { NgControl } from '@angular/forms';
import { NgxaValueAccessor } from '../base/ngxa-value-accessor.component';
import { RadioModel } from './radio.model';
export declare class NgxaRadioComponent extends NgxaValueAccessor<any> {
    locale: string;
    placeholder: string;
    colLabel: number;
    colInput: number;
    data: RadioModel[];
    constructor(ngControl: NgControl, locale: string);
    onInit(): void;
}
