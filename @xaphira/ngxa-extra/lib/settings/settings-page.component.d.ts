import { OnInit, OnDestroy, Injector } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { TranslateService } from '@ngx-translate/core';
import { CheckboxModel, BaseFormComponent } from '@xaphira/ngxa-common';
import { HttpBaseModel, IndexedDBFactoryService, IndexedDBEncFactoryService } from '@xaphira/shared';
export declare class SettingsPageComponent extends BaseFormComponent<any> implements OnInit, OnDestroy {
    injector: Injector;
    private translate;
    private themeService;
    private settingsIndexedDB;
    private authIndexedDB;
    apiSelectLocale: HttpBaseModel;
    localeIcon: string;
    private localeCode;
    private localeIdentifier;
    dataTheme: CheckboxModel[];
    constructor(injector: Injector, translate: TranslateService, themeService: NbThemeService, settingsIndexedDB: IndexedDBFactoryService, authIndexedDB: IndexedDBEncFactoryService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    onInit(serviceName: string, apiName: string): void;
    onSubmit(): void;
    changeTheme(dark: boolean): void;
}
