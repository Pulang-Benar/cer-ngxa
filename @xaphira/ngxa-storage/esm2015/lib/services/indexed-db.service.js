/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import * as idb from 'idb';
import { EncryptionService } from '@xaphira/utils';
import { OAUTH_INFO } from '@xaphira/shared';
import { Subject } from 'rxjs';
/**
 * @template T
 */
export class IndexedDBService {
    /**
     * @param {?} injector
     * @param {?} dbname
     * @param {?} version
     * @param {?} storeName
     */
    constructor(injector, dbname, version, storeName) {
        this.storeName = storeName;
        this.openSessionIDB(dbname, version);
        this.enc = injector.get(EncryptionService);
        this.oauthResource = injector.get(OAUTH_INFO);
    }
    /**
     * @param {?} dbname
     * @param {?} version
     * @return {?}
     */
    openSessionIDB(dbname, version) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.$dbPromise = idb.openDB(dbname, version);
        });
    }
    /**
     * @return {?}
     */
    getAllOf() {
        /** @type {?} */
        const result$ = new Subject();
        this.getAllVal(this.storeName).then((/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            result$.next(value);
        }));
        return result$.asObservable();
    }
    /**
     * @param {?} key
     * @return {?}
     */
    getOf(key) {
        /** @type {?} */
        const result$ = new Subject();
        this.getKeyVal(key, this.storeName).then((/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            result$.next(value);
        }));
        return result$.asObservable();
    }
    /**
     * @param {?} key
     * @param {?} val
     * @return {?}
     */
    putOf(key, val) {
        /** @type {?} */
        const result$ = new Subject();
        this.putKeyVal(key, val, this.storeName).then((/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            result$.next(value);
        }));
        return result$.asObservable();
    }
    /**
     * @param {?} key
     * @return {?}
     */
    removeOf(key) {
        /** @type {?} */
        const result$ = new Subject();
        this.removeKeyVal(key, this.storeName).then((/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            result$.next(value);
        }));
        return result$.asObservable();
    }
    /**
     * @return {?}
     */
    getAll() {
        return this.getAllVal(this.storeName);
    }
    /**
     * @param {?} key
     * @return {?}
     */
    get(key) {
        return this.getKeyVal(this.storeName, key);
    }
    /**
     * @param {?} key
     * @param {?} val
     * @return {?}
     */
    put(key, val) {
        return this.putKeyVal(this.storeName, key, val);
    }
    /**
     * @param {?} key
     * @return {?}
     */
    remove(key) {
        return this.removeKeyVal(this.storeName, key);
    }
    /**
     * @return {?}
     */
    clearAll() {
        return this.clearAllKeyVal(this.storeName);
    }
    /**
     * @return {?}
     */
    keys() {
        return this.keysKeyVal(this.storeName);
    }
    /**
     * @param {?} storeName
     * @return {?}
     */
    getAllVal(storeName) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return (yield this.$dbPromise).getAll(storeName);
        });
    }
    /**
     * @param {?} storeName
     * @param {?} key
     * @return {?}
     */
    getKeyVal(storeName, key) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return (yield this.$dbPromise).get(storeName, key);
        });
    }
    /**
     * @param {?} storeName
     * @param {?} key
     * @param {?} val
     * @return {?}
     */
    putKeyVal(storeName, key, val) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return (yield this.$dbPromise).put(storeName, val, key);
        });
    }
    /**
     * @param {?} storeName
     * @param {?} key
     * @return {?}
     */
    removeKeyVal(storeName, key) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return (yield this.$dbPromise).delete(storeName, key);
        });
    }
    /**
     * @param {?} storeName
     * @return {?}
     */
    clearAllKeyVal(storeName) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return (yield this.$dbPromise).clear(storeName);
        });
    }
    /**
     * @param {?} storeName
     * @return {?}
     */
    keysKeyVal(storeName) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return (yield this.$dbPromise).getAllKeys(storeName);
        });
    }
    /**
     * @param {?} storeName
     * @param {?} value
     * @return {?}
     */
    addArticle(storeName, value) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return (yield this.$dbPromise).add(storeName, value);
        });
    }
    /**
     * @param {?} storeName
     * @param {?} values
     * @return {?}
     */
    addAllArticle(storeName, values) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            const tx = (yield this.$dbPromise).transaction(storeName, 'readwrite');
            values.forEach((/**
             * @param {?} value
             * @return {?}
             */
            (value) => {
                tx.store.add(value);
            }));
            return yield tx.done;
        });
    }
}
if (false) {
    /**
     * @type {?}
     * @protected
     */
    IndexedDBService.prototype.$dbPromise;
    /**
     * @type {?}
     * @protected
     */
    IndexedDBService.prototype.enc;
    /**
     * @type {?}
     * @protected
     */
    IndexedDBService.prototype.oauthResource;
    /**
     * @type {?}
     * @private
     */
    IndexedDBService.prototype.storeName;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXhlZC1kYi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHhhcGhpcmEvbmd4YS1zdG9yYWdlLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2luZGV4ZWQtZGIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sS0FBSyxHQUFHLE1BQU0sS0FBSyxDQUFDO0FBQzNCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxVQUFVLEVBQXlCLE1BQU0saUJBQWlCLENBQUM7QUFDcEUsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7OztBQUUzQyxNQUFNLE9BQU8sZ0JBQWdCOzs7Ozs7O0lBSzNCLFlBQVksUUFBa0IsRUFBRSxNQUFjLEVBQUUsT0FBZSxFQUFVLFNBQWM7UUFBZCxjQUFTLEdBQVQsU0FBUyxDQUFLO1FBQ3JGLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxhQUFhLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNoRCxDQUFDOzs7Ozs7SUFFWSxjQUFjLENBQUMsTUFBYyxFQUFFLE9BQWU7O1lBQ3pELE9BQU8sSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFJLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUMxRCxDQUFDO0tBQUE7Ozs7SUFFTSxRQUFROztjQUNQLE9BQU8sR0FBaUIsSUFBSSxPQUFPLEVBQU87UUFDaEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSTs7OztRQUFDLENBQUMsS0FBVSxFQUFFLEVBQUU7WUFDakQsT0FBTyxDQUFDLElBQUksQ0FB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ZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJREJQRGF0YWJhc2UsIFN0b3JlVmFsdWUsIFN0b3JlS2V5IH0gZnJvbSAnaWRiJztcbmltcG9ydCAqIGFzIGlkYiBmcm9tICdpZGInO1xuaW1wb3J0IHsgRW5jcnlwdGlvblNlcnZpY2UgfSBmcm9tICdAeGFwaGlyYS91dGlscyc7XG5pbXBvcnQgeyBPQVVUSF9JTkZPLCBTZWN1cml0eVJlc291cmNlTW9kZWwgfSBmcm9tICdAeGFwaGlyYS9zaGFyZWQnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgY2xhc3MgSW5kZXhlZERCU2VydmljZTxUPiB7XG4gIHByb3RlY3RlZCAkZGJQcm9taXNlOiBQcm9taXNlPElEQlBEYXRhYmFzZTxUPj47XG4gIHByb3RlY3RlZCBlbmM6IEVuY3J5cHRpb25TZXJ2aWNlO1xuICBwcm90ZWN0ZWQgb2F1dGhSZXNvdXJjZTogU2VjdXJpdHlSZXNvdXJjZU1vZGVsO1xuXG4gIGNvbnN0cnVjdG9yKGluamVjdG9yOiBJbmplY3RvciwgZGJuYW1lOiBzdHJpbmcsIHZlcnNpb246IG51bWJlciwgcHJpdmF0ZSBzdG9yZU5hbWU6IGFueSkge1xuICAgIHRoaXMub3BlblNlc3Npb25JREIoZGJuYW1lLCB2ZXJzaW9uKTtcbiAgICB0aGlzLmVuYyA9IGluamVjdG9yLmdldChFbmNyeXB0aW9uU2VydmljZSk7XG4gICAgdGhpcy5vYXV0aFJlc291cmNlID0gaW5qZWN0b3IuZ2V0KE9BVVRIX0lORk8pO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIG9wZW5TZXNzaW9uSURCKGRibmFtZTogc3RyaW5nLCB2ZXJzaW9uOiBudW1iZXIpOiBQcm9taXNlPElEQlBEYXRhYmFzZTxUPj4ge1xuICAgIHJldHVybiB0aGlzLiRkYlByb21pc2UgPSBpZGIub3BlbkRCPFQ+KGRibmFtZSwgdmVyc2lvbik7XG4gIH1cblxuICBwdWJsaWMgZ2V0QWxsT2YoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCByZXN1bHQkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdDxhbnk+KCk7XG4gICAgdGhpcy5nZXRBbGxWYWwodGhpcy5zdG9yZU5hbWUpLnRoZW4oKHZhbHVlOiBhbnkpID0+IHtcbiAgICAgIHJlc3VsdCQubmV4dCh2YWx1ZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdCQuYXNPYnNlcnZhYmxlKCk7XG4gIH1cbiAgcHVibGljIGdldE9mKGtleSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc3QgcmVzdWx0JDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3Q8YW55PigpO1xuICAgIHRoaXMuZ2V0S2V5VmFsKGtleSwgdGhpcy5zdG9yZU5hbWUpLnRoZW4oKHZhbHVlOiBhbnkpID0+IHtcbiAgICAgIHJlc3VsdCQubmV4dCh2YWx1ZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdCQuYXNPYnNlcnZhYmxlKCk7XG4gIH1cbiAgcHVibGljIHB1dE9mKGtleSwgdmFsKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCByZXN1bHQkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdDxhbnk+KCk7XG4gICAgdGhpcy5wdXRLZXlWYWwoa2V5LCB2YWwsIHRoaXMuc3RvcmVOYW1lKS50aGVuKCh2YWx1ZTogYW55KSA9PiB7XG4gICAgICByZXN1bHQkLm5leHQodmFsdWUpO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQkLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG4gIHB1YmxpYyByZW1vdmVPZihrZXkpOiBPYnNlcnZhYmxlPHZvaWQ+IHtcbiAgICBjb25zdCByZXN1bHQkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdDxhbnk+KCk7XG4gICAgdGhpcy5yZW1vdmVLZXlWYWwoa2V5LCB0aGlzLnN0b3JlTmFtZSkudGhlbigodmFsdWU6IGFueSkgPT4ge1xuICAgICAgcmVzdWx0JC5uZXh0KHZhbHVlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0JC5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRBbGwoKTogUHJvbWlzZTxTdG9yZVZhbHVlPFQsIGFueT5bXT4ge1xuICAgIHJldHVybiB0aGlzLmdldEFsbFZhbCh0aGlzLnN0b3JlTmFtZSk7XG4gIH1cbiAgcHVibGljIGdldChrZXkpOiBQcm9taXNlPFN0b3JlVmFsdWU8VCwgYW55Pj4ge1xuICAgIHJldHVybiB0aGlzLmdldEtleVZhbCh0aGlzLnN0b3JlTmFtZSwga2V5KTtcbiAgfVxuICBwdWJsaWMgcHV0KGtleSwgdmFsKTogUHJvbWlzZTxTdG9yZUtleTxULCBhbnk+PiB7XG4gICAgcmV0dXJuIHRoaXMucHV0S2V5VmFsKHRoaXMuc3RvcmVOYW1lLCBrZXksIHZhbCk7XG4gIH1cbiAgcHVibGljIHJlbW92ZShrZXkpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5yZW1vdmVLZXlWYWwodGhpcy5zdG9yZU5hbWUsIGtleSk7XG4gIH1cbiAgcHVibGljIGNsZWFyQWxsKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLmNsZWFyQWxsS2V5VmFsKHRoaXMuc3RvcmVOYW1lKTtcbiAgfVxuICBwdWJsaWMga2V5cygpOiBQcm9taXNlPFN0b3JlS2V5PFQsIGFueT5bXT4ge1xuICAgIHJldHVybiB0aGlzLmtleXNLZXlWYWwodGhpcy5zdG9yZU5hbWUpO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIGdldEFsbFZhbChzdG9yZU5hbWU6IGFueSk6IFByb21pc2U8U3RvcmVWYWx1ZTxULCBhbnk+W10+IHtcbiAgICByZXR1cm4gKGF3YWl0IHRoaXMuJGRiUHJvbWlzZSkuZ2V0QWxsKHN0b3JlTmFtZSk7XG4gIH1cbiAgcHVibGljIGFzeW5jIGdldEtleVZhbChzdG9yZU5hbWU6IGFueSwga2V5KTogUHJvbWlzZTxTdG9yZVZhbHVlPFQsIGFueT4+IHtcbiAgICByZXR1cm4gKGF3YWl0IHRoaXMuJGRiUHJvbWlzZSkuZ2V0KHN0b3JlTmFtZSwga2V5KTtcbiAgfVxuICBwdWJsaWMgYXN5bmMgcHV0S2V5VmFsKHN0b3JlTmFtZTogYW55LCBrZXksIHZhbCk6IFByb21pc2U8U3RvcmVLZXk8VCwgYW55Pj4ge1xuICAgIHJldHVybiAoYXdhaXQgdGhpcy4kZGJQcm9taXNlKS5wdXQoc3RvcmVOYW1lLCB2YWwsIGtleSk7XG4gIH1cbiAgcHVibGljIGFzeW5jIHJlbW92ZUtleVZhbChzdG9yZU5hbWU6IGFueSwga2V5KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIChhd2FpdCB0aGlzLiRkYlByb21pc2UpLmRlbGV0ZShzdG9yZU5hbWUsIGtleSk7XG4gIH1cbiAgcHVibGljIGFzeW5jIGNsZWFyQWxsS2V5VmFsKHN0b3JlTmFtZTogYW55KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIChhd2FpdCB0aGlzLiRkYlByb21pc2UpLmNsZWFyKHN0b3JlTmFtZSk7XG4gIH1cbiAgcHVibGljIGFzeW5jIGtleXNLZXlWYWwoc3RvcmVOYW1lOiBhbnkpOiBQcm9taXNlPFN0b3JlS2V5PFQsIGFueT5bXT4ge1xuICAgIHJldHVybiAoYXdhaXQgdGhpcy4kZGJQcm9taXNlKS5nZXRBbGxLZXlzKHN0b3JlTmFtZSk7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgYWRkQXJ0aWNsZShzdG9yZU5hbWU6IGFueSwgdmFsdWU6IGFueSk6IFByb21pc2U8U3RvcmVLZXk8VCwgYW55Pj4ge1xuICAgICAgcmV0dXJuIChhd2FpdCB0aGlzLiRkYlByb21pc2UpLmFkZChzdG9yZU5hbWUsIHZhbHVlKTtcbiAgfVxuICBwdWJsaWMgYXN5bmMgYWRkQWxsQXJ0aWNsZShzdG9yZU5hbWU6IGFueSwgdmFsdWVzOiBhbnlbXSk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgY29uc3QgdHggPSAoYXdhaXQgdGhpcy4kZGJQcm9taXNlKS50cmFuc2FjdGlvbihzdG9yZU5hbWUsICdyZWFkd3JpdGUnKTtcbiAgICAgIHZhbHVlcy5mb3JFYWNoKCh2YWx1ZTogYW55KSA9PiB7XG4gICAgICAgICAgdHguc3RvcmUuYWRkKHZhbHVlKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGF3YWl0IHR4LmRvbmU7XG4gIH1cbn1cbiJdfQ==