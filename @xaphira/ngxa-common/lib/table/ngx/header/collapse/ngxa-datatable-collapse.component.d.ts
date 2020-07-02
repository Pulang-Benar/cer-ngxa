import { Observable } from 'rxjs';
export declare class NgxaDatatableCollapseComponent {
    private openedSubject;
    opened$: Observable<boolean>;
    openedState$: Observable<string>;
    constructor();
    toggle: () => void;
}
