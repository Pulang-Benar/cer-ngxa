import { NgControl } from '@angular/forms';
import { NgxaValueAccessor } from '../base/ngxa-value-accessor.component';
import { NbCalendarSize, NbDateService } from '@nebular/theme';
export declare class NgxaDatePickerComponent extends NgxaValueAccessor<Date> {
    dateService: NbDateService<Date>;
    locale: string;
    placeholder: string;
    colLabel: number;
    colInput: number;
    min: Date;
    max: Date;
    size: NbCalendarSize;
    constructor(ngControl: NgControl, dateService: NbDateService<Date>, locale: string);
    writeValue(value: any): void;
}
