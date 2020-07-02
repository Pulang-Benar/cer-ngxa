import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { LeafletModel } from '@xaphira/ngxa-common';
import { PanicFactoryService } from '@xaphira/shared';
export declare class NgxaCerMonitoringInfoComponent implements OnInit {
    private router;
    private panicService;
    private dialogService;
    markerFn: LeafletModel;
    marker: LeafletModel;
    data: any;
    constructor(router: Router, panicService: PanicFactoryService, dialogService: NbDialogService);
    ngOnInit(): void;
    onViewDetails(): void;
    onPreview(): void;
}
