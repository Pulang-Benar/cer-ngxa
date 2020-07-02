import { NbDialogRef } from '@nebular/theme';
export declare class NgxaFakePromptComponent {
    protected ref: NbDialogRef<NgxaFakePromptComponent>;
    disabled: boolean;
    password: string;
    constructor(ref: NbDialogRef<NgxaFakePromptComponent>);
    submit(password: any): void;
}
