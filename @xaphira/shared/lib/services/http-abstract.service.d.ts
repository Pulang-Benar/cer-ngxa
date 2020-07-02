import { Observable } from 'rxjs/Rx';
import { HttpBaseModel } from '../models/http-base.model';
import { HttpFactoryService } from './http-factory.service';
import { HttpHeaders, HttpParams } from '@angular/common/http';
export declare abstract class HttpAbstractService implements HttpFactoryService {
    abstract HTTP_AUTH(api: HttpBaseModel, body?: any, headers?: HttpHeaders, params?: HttpParams, pathVariable?: string[], responseType?: any): Observable<any>;
    abstract HTTP_BASE(api: HttpBaseModel, body?: any, headers?: HttpHeaders, params?: HttpParams, pathVariable?: string[], responseType?: any): Observable<any>;
    abstract GET(url: string, headers?: HttpHeaders, params?: HttpParams, responseType?: any): Observable<any>;
    abstract POST(url: string, body: any, headers?: HttpHeaders, params?: HttpParams, responseType?: any): Observable<any>;
    abstract PUT(url: string, body: any, headers?: HttpHeaders, params?: HttpParams): Observable<any>;
    abstract DELETE(url: string, headers?: HttpHeaders, params?: HttpParams): Observable<any>;
    API(api: HttpBaseModel, pathVariable?: string[]): string;
}
