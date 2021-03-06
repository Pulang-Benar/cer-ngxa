import { Input, OnInit } from '@angular/core';
import {
    ControlValueAccessor,
    NgControl,
    Validator,
    AbstractControl,
    ValidationErrors,
    ValidatorFn,
    Validators,
} from '@angular/forms';

export abstract class NgxaValidatorAccessor implements ControlValueAccessor, Validator, OnInit {

    @Input() name: string;
    @Input() pattern: string;
    @Input() label: string = '';
    @Input() nolabel: boolean = false;
    @Input() disabled: boolean = false;
    @Input() required: boolean = false;
    @Input() paramError: any;
    public onChange = (_: any) => {};
    public onTouched = (_?: any) => {};
    protected onInit(): void {}

    constructor(protected ngControl: NgControl) {
        ngControl && (ngControl.valueAccessor = this);
    }

    public ngOnInit(): void {
        this.onInit();

        const control = this.ngControl.control;
        const validators: ValidatorFn[] = control.validator ? [control.validator] : [];
        if (this.ngControl.control.errors) {
            this.required = this.ngControl.control.errors['required'];
        }
        if (this.required) {
            validators.push(Validators.required);
        }
        if (this.pattern) {
            validators.push(Validators.pattern(this.pattern));
        }
        control.setValidators(validators);
        control.updateValueAndValidity();
    }

    validate(c: AbstractControl): ValidationErrors {
        const validators: ValidatorFn[] = [];
        if (this.required) {
            validators.push(Validators.required);
        }
        if (this.pattern) {
            validators.push(Validators.pattern(this.pattern));
        }
        return validators;
    }

    get hasErrors(): boolean {
        return (
            !this.disabled &&
            this.ngControl.control &&
            this.ngControl.control.invalid &&
            this.ngControl.touched
        );
    }

    get hasSuccess(): boolean {
        return (
            !this.disabled &&
            this.ngControl.control &&
            this.ngControl.control.valid &&
            this.ngControl.touched
        );
    }

    get errorMessages(): string[] {
        const errors: string[] = [];
        if (this.ngControl.errors)
            Object.keys(this.ngControl.errors).forEach(property => {
                switch (property) {
                    case 'required':
                        errors.push('error.required');
                        break;
                    case 'email':
                        errors.push('error.pattern.email');
                        break;
                    case 'minlength':
                        errors.push('error.minlength');
                        break;
                    default:
                        errors.push('error.'.concat(property).concat('.').concat(this.name));
                        break;
                }
            });
        return errors;
    }

    registerOnValidatorChange(fn: () => void): void {
        this.onChange = fn;
    }

    abstract writeValue(obj: any): void;
    abstract registerOnChange(fn: any): void;
    abstract registerOnTouched(fn: any): void;
    abstract setDisabledState?(isDisabled: boolean): void;
}
