import { ElementRef } from '@angular/core';
import { NgxaValueAccessor } from '../../base/ngxa-value-accessor.component';
import { NgControl } from '@angular/forms';
export declare class TinyMCEComponent extends NgxaValueAccessor<string> {
    locale: string;
    private element;
    placeholder: string;
    colLabel: number;
    colInput: number;
    plugins: string[];
    height: number;
    constructor(ngControl: NgControl, locale: string, element: ElementRef);
    editorChange(element: Element): void;
}
