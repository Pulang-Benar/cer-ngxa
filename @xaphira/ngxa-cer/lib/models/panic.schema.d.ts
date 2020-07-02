import { DBSchema } from 'idb';
export interface PanicIDB extends DBSchema {
    '#cer-panic': {
        key: string;
        value: any;
    };
}
