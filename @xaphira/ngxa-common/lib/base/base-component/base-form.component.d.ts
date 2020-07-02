import { Injector } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Subject } from 'rxjs';
import { ApiBaseResponse } from '@xaphira/shared';
import { BaseComponent } from './base.component';
import { NgxaToastrService } from '../../toastr/services/ngxa-toastr.service';
export declare abstract class BaseFormComponent<T> extends BaseComponent<T> {
    injector: Injector;
    protected toastr: NgxaToastrService;
    protected submitSubject$: Subject<ApiBaseResponse>;
    protected destroy$: Subject<void>;
    formGroup: FormGroup;
    formBuilder: FormBuilder;
    disabled: boolean;
    loadingForm: boolean;
    constructor(injector: Injector, controlsConfig?: {
        [key: string]: any;
    });
    onSubmit(body?: any, serviceName?: string, apiName?: string, disableToastr?: boolean): any;
    onReset(): void;
}
