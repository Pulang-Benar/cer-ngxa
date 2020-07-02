import { OnInit, Injector, OnDestroy } from '@angular/core';
import { BaseFormComponent } from '@xaphira/ngxa-common';
import { Router } from '@angular/router';
export declare class ParameterAddGroupPageComponent extends BaseFormComponent<any> implements OnInit, OnDestroy {
    injector: Injector;
    private router;
    constructor(injector: Injector, router: Router);
    ngOnInit(): void;
    ngOnDestroy(): void;
    onReset(): void;
    onSubmit(): void;
}
