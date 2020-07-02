import { EncryptionService } from '@xaphira/utils';
import { SecurityResourceModel } from '@xaphira/shared';
import { StorageFactoryService } from './storage-factory.service';
export declare class StorageMaskService implements StorageFactoryService {
    protected enc: EncryptionService;
    private oauthResource;
    constructor(enc: EncryptionService, oauthResource: SecurityResourceModel);
    getSessionStorageEnc(key: string): string;
    setSessionStorageEnc(key: string, value: string): void;
    removeSessionStorageEnc(key: string): void;
    getLocalStorageEnc(key: string): string;
    setLocalStorageEnc(key: string, value: string): void;
    removeLocalStorageEnc(key: string): void;
    getSessionStorage(key: string): string;
    setSessionStorage(key: string, value: string): void;
    removeSessionStorage(key: string): void;
    getLocalStorage(key: string): string;
    setLocalStorage(key: string, value: string): void;
    removeLocalStorage(key: string): void;
    clearSessionStorage(): void;
    clearLocalStorage(): void;
    clearAll(): void;
}
