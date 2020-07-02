import { Observable, Subject } from 'rxjs';
export declare class LayoutService {
    protected layoutSize$: Subject<{}>;
    changeLayoutSize(): void;
    onChangeLayoutSize(): Observable<any>;
}
