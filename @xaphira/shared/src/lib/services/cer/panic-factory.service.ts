import { Observable } from 'rxjs';

export interface PanicFactoryService {

  notifyPanic(data: any): void;

  getPanic(panicCode: string): Observable<any>;

  getAllPanic(): Observable<any[]>;

  onCheckPanic(): Observable<string>;

}
