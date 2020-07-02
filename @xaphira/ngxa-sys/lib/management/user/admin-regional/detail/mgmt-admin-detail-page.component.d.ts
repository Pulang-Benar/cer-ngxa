import { OnInit, Injector, OnDestroy } from '@angular/core';
import { BaseFormComponent } from '@xaphira/ngxa-common';
import { ManagementUserService } from '../../services/mgmt-user.service';
export declare class MgmtAdminDetailPageComponent extends BaseFormComponent<any> implements OnInit, OnDestroy {
    injector: Injector;
    private userService;
    profile: any;
    image: string;
    imageDefault: string;
    constructor(injector: Injector, userService: ManagementUserService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    onInit(serviceName: string, apiName: string): void;
}
