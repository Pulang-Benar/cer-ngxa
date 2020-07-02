import { Observable } from 'rxjs';
import { PanicFactoryService, IndexedDBFactoryService } from '@xaphira/shared';
export declare class PanicService implements PanicFactoryService {
    private panicIndexedDB;
    private loaderPanicSubject$;
    constructor(panicIndexedDB: IndexedDBFactoryService);
    notifyPanic(data: any): void;
    putAllPanic(datas: any[]): void;
    clearAllPanic(): Promise<void>;
    getPanic(panicCode: string): Promise<any>;
    getAllPanic(): Observable<any[]>;
    onCheckPanic(): Observable<string>;
}
