import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { PanicFactoryService } from '@xaphira/shared';
import { PanicIndexedDBService } from '../storage/panic-indexeddb.service';

@Injectable({providedIn : 'root'})
export class PanicService implements PanicFactoryService {

    private loaderPanicSubject$ = new Subject<string>();

    constructor(private panicIndexedDB: PanicIndexedDBService) {
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
