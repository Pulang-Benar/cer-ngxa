import { Injectable, Inject } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { PanicFactoryService, PANIC_INDEXED_DB, IndexedDBFactoryService } from '@xaphira/shared';

@Injectable()
export class PanicService implements PanicFactoryService {

    private loaderPanicSubject$ = new Subject<string>();

    constructor(@Inject(PANIC_INDEXED_DB) private panicIndexedDB: IndexedDBFactoryService) {
    }

    public notifyPanic(data: any): void {
        this.panicIndexedDB.put(data['panicCode'], data).then(() => {
            this.loaderPanicSubject$.next(data['panicCode']);
        });
    }

    public getPanic(panicCode: string): any {
        return this.panicIndexedDB.getOf(panicCode);
    }

    public getAllPanic(): Observable<any[]> {
        return this.panicIndexedDB.getAllOf();
    }

    public onCheckPanic(): Observable<string> {
        return this.loaderPanicSubject$.asObservable();
    }

}
