import { OnInit, Injector, OnDestroy } from '@angular/core';
import { BaseFormComponent, CheckboxModel } from '@xaphira/ngxa-common';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpBaseModel } from '@xaphira/shared';
import { LanguageService } from '../services/language.service';
import { NbDialogService } from '@nebular/theme';
export declare class LanguageAddEditPageComponent extends BaseFormComponent<any> implements OnInit, OnDestroy {
    injector: Injector;
    private router;
    private route;
    private languageService;
    private dialogService;
    action: 'Add' | 'Edit';
    apiSelectLanguage: HttpBaseModel;
    dataDefault: CheckboxModel[];
    constructor(injector: Injector, router: Router, route: ActivatedRoute, languageService: LanguageService, dialogService: NbDialogService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    onSearchFlag(): void;
    onReset(): void;
    onSubmit(): void;
}
