import { ErrorHandler } from '@angular/core';
import { Observable } from 'rxjs';
export declare class ErrorHandlerService implements ErrorHandler {
    handleError(error: Error): Observable<never>;
}
