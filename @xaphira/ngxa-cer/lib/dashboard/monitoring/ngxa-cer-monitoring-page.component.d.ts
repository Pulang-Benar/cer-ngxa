import { OnInit, OnDestroy, Injector } from '@angular/core';
import { LeafletModel } from '@xaphira/ngxa-common';
import { PanicFactoryService } from '@xaphira/shared';
export declare class NgxaCerMonitoringPageComponent implements OnInit, OnDestroy {
    private panicService;
    showInfo: boolean;
    markers: LeafletModel[];
    markerSelected: LeafletModel;
    private destroy$;
    private http;
    private api;
    constructor(injector: Injector, panicService: PanicFactoryService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    private getAllPanicServer;
    private getAllPanicStorage;
    onMarker(data: LeafletModel): void;
    onToggleInfo(showInfo: boolean): void;
}
