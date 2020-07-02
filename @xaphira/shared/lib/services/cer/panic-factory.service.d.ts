import { Observable } from 'rxjs';
export interface PanicFactoryService {
    notifyPanic(data: any): void;
    putAllPanic(datas: any[]): void;
    clearAllPanic(): Promise<void>;
    getPanic(panicCode: string): Promise<any>;
    getAllPanic(): Observable<any[]>;
    onCheckPanic(): Observable<string>;
}
