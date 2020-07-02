import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { HttpAbstractService } from './http-abstract.service';
import { HttpBaseModel } from '../models/http-base.model';
export declare class HttpCommonService extends HttpAbstractService {
    protected http: HttpClient;
    constructor(http: HttpClient);
    HTTP_AUTH(api: HttpBaseModel, body?: any, headers?: HttpHeaders, params?: HttpParams, pathVariable?: string[], responseType?: 'json' | 'arraybuffer'): Observable<any>;
    HTTP_BASE(api: HttpBaseModel, body?: any, headers?: HttpHeaders, params?: HttpParams, pathVariable?: string[], responseType?: 'json' | 'arraybuffer'): Observable<any>;
    GET(url: string, headers?: HttpHeaders, params?: HttpParams, responseType?: any): Observable<any>;
    POST(url: string, body: any, headers?: HttpHeaders, params?: HttpParams, responseType?: any): Observable<any>;
    PUT(url: string, body: any, headers?: HttpHeaders, params?: HttpParams): Observable<any>;
    DELETE(url: string, headers?: HttpHeaders, params?: HttpParams): Observable<any>;
}
