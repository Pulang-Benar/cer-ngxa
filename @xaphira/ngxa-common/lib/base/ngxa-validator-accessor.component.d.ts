import { OnInit } from '@angular/core';
import { ControlValueAccessor, NgControl, Validator, AbstractControl, ValidationErrors } from '@angular/forms';
export declare abstract class NgxaValidatorAccessor implements ControlValueAccessor, Validator, OnInit {
    protected ngControl: NgControl;
    name: string;
    pattern: string;
    label: string;
    nolabel: boolean;
    disabled: boolean;
    required: boolean;
    paramError: any;
    onChange: (_: any) => void;
    onTouched: (_?: any) => void;
    protected onInit(): void;
    constructor(ngControl: NgControl);
    ngOnInit(): void;
    validate(c: AbstractControl): ValidationErrors;
    readonly hasErrors: boolean;
    readonly hasSuccess: boolean;
    readonly errorMessages: string[];
    registerOnValidatorChange(fn: () => void): void;
    abstract writeValue(obj: any): void;
    abstract registerOnChange(fn: any): void;
    abstract registerOnTouched(fn: any): void;
    abstract setDisabledState?(isDisabled: boolean): void;
}
