import { OnInit, OnDestroy } from '@angular/core';
import { IndexedDBFactoryService } from '@xaphira/shared';
export declare class HomePageComponent implements OnInit, OnDestroy {
    private profileIndexedDB;
    name: Promise<string>;
    constructor(profileIndexedDB: IndexedDBFactoryService);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
