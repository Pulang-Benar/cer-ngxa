import { Injector } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { BaseFormComponent } from '@xaphira/ngxa-common';
export declare class SecurityPageComponent extends BaseFormComponent<any> {
    injector: Injector;
    private dialogService;
    private enc;
    private oauthResource;
    private authToken;
    constructor(injector: Injector, dialogService: NbDialogService);
    onSubmit(): void;
}
