import { OnInit, Injector, OnDestroy } from '@angular/core';
import { BaseFormComponent } from '@xaphira/ngxa-common';
import { Router, ActivatedRoute } from '@angular/router';
import { ParameterService } from '../../services/parameter.service';
import { ParameterModel, ParameterGroupModel } from '../../models/parameter.model';
import { HttpBaseModel } from '@xaphira/shared';
import { LocaleModel } from '../../../language/models/locale.model';
export declare class ParameterDoDetailPageComponent extends BaseFormComponent<any> implements OnInit, OnDestroy {
    injector: Injector;
    private router;
    private parameterService;
    private route;
    action: 'Add' | 'Edit';
    parameter: ParameterModel;
    parameterGroup: ParameterGroupModel;
    allLocales: LocaleModel[];
    locales: LocaleModel[];
    localeDefault: LocaleModel;
    isEdit: boolean;
    apiPathParameterI18n: HttpBaseModel;
    apiPathLocale: HttpBaseModel;
    constructor(injector: Injector, router: Router, parameterService: ParameterService, route: ActivatedRoute);
    splitLocale(values: LocaleModel[]): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    onReset(): void;
    onSubmit(): void;
}
