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
var /**
 * @template T
 */
IndexedDBService = /** @class */ (function () {
    function IndexedDBService(injector, dbname, version, storeName) {
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
    IndexedDBService.prototype.openSessionIDB = /**
     * @param {?} dbname
     * @param {?} version
     * @return {?}
     */
    function (dbname, version) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.$dbPromise = idb.openDB(dbname, version)];
            });
        });
    };
    /**
     * @return {?}
     */
    IndexedDBService.prototype.getAllOf = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result$ = new Subject();
        this.getAllVal(this.storeName).then((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            result$.next(value);
        }));
        return result$.asObservable();
    };
    /**
     * @param {?} key
     * @return {?}
     */
    IndexedDBService.prototype.getOf = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        /** @type {?} */
        var result$ = new Subject();
        this.getKeyVal(key, this.storeName).then((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            result$.next(value);
        }));
        return result$.asObservable();
    };
    /**
     * @param {?} key
     * @param {?} val
     * @return {?}
     */
    IndexedDBService.prototype.putOf = /**
     * @param {?} key
     * @param {?} val
     * @return {?}
     */
    function (key, val) {
        /** @type {?} */
        var result$ = new Subject();
        this.putKeyVal(key, val, this.storeName).then((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            result$.next(value);
        }));
        return result$.asObservable();
    };
    /**
     * @param {?} key
     * @return {?}
     */
    IndexedDBService.prototype.removeOf = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        /** @type {?} */
        var result$ = new Subject();
        this.removeKeyVal(key, this.storeName).then((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            result$.next(value);
        }));
        return result$.asObservable();
    };
    /**
     * @return {?}
     */
    IndexedDBService.prototype.getAll = /**
     * @return {?}
     */
    function () {
        return this.getAllVal(this.storeName);
    };
    /**
     * @param {?} key
     * @return {?}
     */
    IndexedDBService.prototype.get = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return this.getKeyVal(this.storeName, key);
    };
    /**
     * @param {?} key
     * @param {?} val
     * @return {?}
     */
    IndexedDBService.prototype.put = /**
     * @param {?} key
     * @param {?} val
     * @return {?}
     */
    function (key, val) {
        return this.putKeyVal(this.storeName, key, val);
    };
    /**
     * @param {?} key
     * @return {?}
     */
    IndexedDBService.prototype.remove = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return this.removeKeyVal(this.storeName, key);
    };
    /**
     * @return {?}
     */
    IndexedDBService.prototype.clearAll = /**
     * @return {?}
     */
    function () {
        return this.clearAllKeyVal(this.storeName);
    };
    /**
     * @return {?}
     */
    IndexedDBService.prototype.keys = /**
     * @return {?}
     */
    function () {
        return this.keysKeyVal(this.storeName);
    };
    /**
     * @param {?} storeName
     * @return {?}
     */
    IndexedDBService.prototype.getAllVal = /**
     * @param {?} storeName
     * @return {?}
     */
    function (storeName) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.$dbPromise];
                    case 1: return [2 /*return*/, (_a.sent()).getAll(storeName)];
                }
            });
        });
    };
    /**
     * @param {?} storeName
     * @param {?} key
     * @return {?}
     */
    IndexedDBService.prototype.getKeyVal = /**
     * @param {?} storeName
     * @param {?} key
     * @return {?}
     */
    function (storeName, key) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.$dbPromise];
                    case 1: return [2 /*return*/, (_a.sent()).get(storeName, key)];
                }
            });
        });
    };
    /**
     * @param {?} storeName
     * @param {?} key
     * @param {?} val
     * @return {?}
     */
    IndexedDBService.prototype.putKeyVal = /**
     * @param {?} storeName
     * @param {?} key
     * @param {?} val
     * @return {?}
     */
    function (storeName, key, val) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.$dbPromise];
                    case 1: return [2 /*return*/, (_a.sent()).put(storeName, val, key)];
                }
            });
        });
    };
    /**
     * @param {?} storeName
     * @param {?} key
     * @return {?}
     */
    IndexedDBService.prototype.removeKeyVal = /**
     * @param {?} storeName
     * @param {?} key
     * @return {?}
     */
    function (storeName, key) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.$dbPromise];
                    case 1: return [2 /*return*/, (_a.sent()).delete(storeName, key)];
                }
            });
        });
    };
    /**
     * @param {?} storeName
     * @return {?}
     */
    IndexedDBService.prototype.clearAllKeyVal = /**
     * @param {?} storeName
     * @return {?}
     */
    function (storeName) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.$dbPromise];
                    case 1: return [2 /*return*/, (_a.sent()).clear(storeName)];
                }
            });
        });
    };
    /**
     * @param {?} storeName
     * @return {?}
     */
    IndexedDBService.prototype.keysKeyVal = /**
     * @param {?} storeName
     * @return {?}
     */
    function (storeName) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.$dbPromise];
                    case 1: return [2 /*return*/, (_a.sent()).getAllKeys(storeName)];
                }
            });
        });
    };
    /**
     * @param {?} storeName
     * @param {?} value
     * @return {?}
     */
    IndexedDBService.prototype.addArticle = /**
     * @param {?} storeName
     * @param {?} value
     * @return {?}
     */
    function (storeName, value) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.$dbPromise];
                    case 1: return [2 /*return*/, (_a.sent()).add(storeName, value)];
                }
            });
        });
    };
    /**
     * @param {?} storeName
     * @param {?} values
     * @return {?}
     */
    IndexedDBService.prototype.addAllArticle = /**
     * @param {?} storeName
     * @param {?} values
     * @return {?}
     */
    function (storeName, values) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var tx;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.$dbPromise];
                    case 1:
                        tx = (_a.sent()).transaction(storeName, 'readwrite');
                        values.forEach((/**
                         * @param {?} value
                         * @return {?}
                         */
                        function (value) {
                            tx.store.add(value);
                        }));
                        return [4 /*yield*/, tx.done];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return IndexedDBService;
}());
/**
 * @template T
 */
export { IndexedDBService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXhlZC1kYi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHhhcGhpcmEvbmd4YS1zdG9yYWdlLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2luZGV4ZWQtZGIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sS0FBSyxHQUFHLE1BQU0sS0FBSyxDQUFDO0FBQzNCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxVQUFVLEVBQXlCLE1BQU0saUJBQWlCLENBQUM7QUFDcEUsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7OztBQUUzQzs7OztJQUtFLDBCQUFZLFFBQWtCLEVBQUUsTUFBYyxFQUFFLE9BQWUsRUFBVSxTQUFjO1FBQWQsY0FBUyxHQUFULFNBQVMsQ0FBSztRQUNyRixJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsYUFBYSxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDaEQsQ0FBQzs7Ozs7O0lBRVkseUNBQWM7Ozs7O0lBQTNCLFVBQTRCLE1BQWMsRUFBRSxPQUFlOzs7Z0JBQ3pELHNCQUFPLElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBSSxNQUFNLEVBQUUsT0FBTyxDQUFDLEVBQUM7OztLQUN6RDs7OztJQUVNLG1DQUFROzs7SUFBZjs7WUFDUSxPQUFPLEdBQWlCLElBQUksT0FBTyxFQUFPO1FBQ2hELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUk7Ozs7UUFBQyxVQUFDLEtBQVU7WUFDN0MsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0QixDQUFDLEVBQUMsQ0FBQztRQUNILE9BQU8sT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ2hDLENBQUM7Ozs7O0lBQ00sZ0NBQUs7Ozs7SUFBWixVQUFhLEdBQUc7O1lBQ1IsT0FBTyxHQUFpQixJQUFJLE9BQU8sRUFBTztRQUNoRCxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSTs7OztRQUFDLFVBQUMsS0FBVTtZQUNsRCxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RCLENBQUMsRUFBQyxDQUFDO1FBQ0gsT0FBTyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDaEMsQ0FBQzs7Ozs7O0lBQ00sZ0NBQUs7Ozs7O0lBQVosVUFBYSxHQUFHLEVBQUUsR0FBRzs7WUFDYixPQUFPLEdBQWlCLElBQUksT0FBTyxFQUFPO1FBQ2hELElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSTs7OztRQUFDLFVBQUMsS0FBVTtZQUN2RCxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RCLENBQUMsRUFBQyxDQUFDO1FBQ0gsT0FBTyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDaEMsQ0FBQzs7Ozs7SUFDTSxtQ0FBUTs7OztJQUFmLFVBQWdCLEdBQUc7O1lBQ1gsT0FBTyxHQUFpQixJQUFJLE9BQU8sRUFBTztRQUNoRCxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSTs7OztRQUFDLFVBQUMsS0FBVTtZQUNyRCxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RCLENBQUMsRUFBQyxDQUFDO1FBQ0gsT0FBTyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDaEMsQ0FBQzs7OztJQUVNLGlDQUFNOzs7SUFBYjtRQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDeEMsQ0FBQzs7Ozs7SUFDTSw4QkFBRzs7OztJQUFWLFVBQVcsR0FBRztRQUNaLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzdDLENBQUM7Ozs7OztJQUNNLDhCQUFHOzs7OztJQUFWLFVBQVcsR0FBRyxFQUFFLEdBQUc7UUFDakIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ2xELENBQUM7Ozs7O0lBQ00saUNBQU07Ozs7SUFBYixVQUFjLEdBQUc7UUFDZixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNoRCxDQUFDOzs7O0lBQ00sbUNBQVE7OztJQUFmO1FBQ0UsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7O0lBQ00sK0JBQUk7OztJQUFYO1FBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN6QyxDQUFDOzs7OztJQUVZLG9DQUFTOzs7O0lBQXRCLFVBQXVCLFNBQWM7Ozs7NEJBQzNCLHFCQUFNLElBQUksQ0FBQyxVQUFVLEVBQUE7NEJBQTdCLHNCQUFPLENBQUMsU0FBcUIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBQzs7OztLQUNsRDs7Ozs7O0lBQ1ksb0NBQVM7Ozs7O0lBQXRCLFVBQXVCLFNBQWMsRUFBRSxHQUFHOzs7OzRCQUNoQyxxQkFBTSxJQUFJLENBQUMsVUFBVSxFQUFBOzRCQUE3QixzQkFBTyxDQUFDLFNBQXFCLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxFQUFDOzs7O0tBQ3BEOzs7Ozs7O0lBQ1ksb0NBQVM7Ozs7OztJQUF0QixVQUF1QixTQUFjLEVBQUUsR0FBRyxFQUFFLEdBQUc7Ozs7NEJBQ3JDLHFCQUFNLElBQUksQ0FBQyxVQUFVLEVBQUE7NEJBQTdCLHNCQUFPLENBQUMsU0FBcUIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFDOzs7O0tBQ3pEOzs7Ozs7SUFDWSx1Q0FBWTs7Ozs7SUFBekIsVUFBMEIsU0FBYyxFQUFFLEdBQUc7Ozs7NEJBQ25DLHFCQUFNLElBQUksQ0FBQyxVQUFVLEVBQUE7NEJBQTdCLHNCQUFPLENBQUMsU0FBcUIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLEVBQUM7Ozs7S0FDdkQ7Ozs7O0lBQ1kseUNBQWM7Ozs7SUFBM0IsVUFBNEIsU0FBYzs7Ozs0QkFDaEMscUJBQU0sSUFBSSxDQUFDLFVBQVUsRUFBQTs0QkFBN0Isc0JBQU8sQ0FBQyxTQUFxQixDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFDOzs7O0tBQ2pEOzs7OztJQUNZLHFDQUFVOzs7O0lBQXZCLFVBQXdCLFNBQWM7Ozs7NEJBQzVCLHFCQUFNLElBQUksQ0FBQyxVQUFVLEVBQUE7NEJBQTdCLHNCQUFPLENBQUMsU0FBcUIsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsRUFBQzs7OztLQUN0RDs7Ozs7O0lBRVkscUNBQVU7Ozs7O0lBQXZCLFVBQXdCLFNBQWMsRUFBRSxLQUFVOzs7OzRCQUN0QyxxQkFBTSxJQUFJLENBQUMsVUFBVSxFQUFBOzRCQUE3QixzQkFBTyxDQUFDLFNBQXFCLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxFQUFDOzs7O0tBQ3hEOzs7Ozs7SUFDWSx3Q0FBYTs7Ozs7SUFBMUIsVUFBMkIsU0FBYyxFQUFFLE1BQWE7Ozs7OzRCQUN4QyxxQkFBTSxJQUFJLENBQUMsVUFBVSxFQUFBOzt3QkFBM0IsRUFBRSxHQUFHLENBQUMsU0FBcUIsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsV0FBVyxDQUFDO3dCQUN0RSxNQUFNLENBQUMsT0FBTzs7Ozt3QkFBQyxVQUFDLEtBQVU7NEJBQ3RCLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUN4QixDQUFDLEVBQUMsQ0FBQzt3QkFDSSxxQkFBTSxFQUFFLENBQUMsSUFBSSxFQUFBOzRCQUFwQixzQkFBTyxTQUFhLEVBQUM7Ozs7S0FDeEI7SUFDSCx1QkFBQztBQUFELENBQUMsQUE1RkQsSUE0RkM7Ozs7Ozs7Ozs7SUEzRkMsc0NBQStDOzs7OztJQUMvQywrQkFBaUM7Ozs7O0lBQ2pDLHlDQUErQzs7Ozs7SUFFa0IscUNBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElEQlBEYXRhYmFzZSwgU3RvcmVWYWx1ZSwgU3RvcmVLZXkgfSBmcm9tICdpZGInO1xuaW1wb3J0ICogYXMgaWRiIGZyb20gJ2lkYic7XG5pbXBvcnQgeyBFbmNyeXB0aW9uU2VydmljZSB9IGZyb20gJ0B4YXBoaXJhL3V0aWxzJztcbmltcG9ydCB7IE9BVVRIX0lORk8sIFNlY3VyaXR5UmVzb3VyY2VNb2RlbCB9IGZyb20gJ0B4YXBoaXJhL3NoYXJlZCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBjbGFzcyBJbmRleGVkREJTZXJ2aWNlPFQ+IHtcbiAgcHJvdGVjdGVkICRkYlByb21pc2U6IFByb21pc2U8SURCUERhdGFiYXNlPFQ+PjtcbiAgcHJvdGVjdGVkIGVuYzogRW5jcnlwdGlvblNlcnZpY2U7XG4gIHByb3RlY3RlZCBvYXV0aFJlc291cmNlOiBTZWN1cml0eVJlc291cmNlTW9kZWw7XG5cbiAgY29uc3RydWN0b3IoaW5qZWN0b3I6IEluamVjdG9yLCBkYm5hbWU6IHN0cmluZywgdmVyc2lvbjogbnVtYmVyLCBwcml2YXRlIHN0b3JlTmFtZTogYW55KSB7XG4gICAgdGhpcy5vcGVuU2Vzc2lvbklEQihkYm5hbWUsIHZlcnNpb24pO1xuICAgIHRoaXMuZW5jID0gaW5qZWN0b3IuZ2V0KEVuY3J5cHRpb25TZXJ2aWNlKTtcbiAgICB0aGlzLm9hdXRoUmVzb3VyY2UgPSBpbmplY3Rvci5nZXQoT0FVVEhfSU5GTyk7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgb3BlblNlc3Npb25JREIoZGJuYW1lOiBzdHJpbmcsIHZlcnNpb246IG51bWJlcik6IFByb21pc2U8SURCUERhdGFiYXNlPFQ+PiB7XG4gICAgcmV0dXJuIHRoaXMuJGRiUHJvbWlzZSA9IGlkYi5vcGVuREI8VD4oZGJuYW1lLCB2ZXJzaW9uKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRBbGxPZigpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGNvbnN0IHJlc3VsdCQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0PGFueT4oKTtcbiAgICB0aGlzLmdldEFsbFZhbCh0aGlzLnN0b3JlTmFtZSkudGhlbigodmFsdWU6IGFueSkgPT4ge1xuICAgICAgcmVzdWx0JC5uZXh0KHZhbHVlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0JC5hc09ic2VydmFibGUoKTtcbiAgfVxuICBwdWJsaWMgZ2V0T2Yoa2V5KTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCByZXN1bHQkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdDxhbnk+KCk7XG4gICAgdGhpcy5nZXRLZXlWYWwoa2V5LCB0aGlzLnN0b3JlTmFtZSkudGhlbigodmFsdWU6IGFueSkgPT4ge1xuICAgICAgcmVzdWx0JC5uZXh0KHZhbHVlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0JC5hc09ic2VydmFibGUoKTtcbiAgfVxuICBwdWJsaWMgcHV0T2Yoa2V5LCB2YWwpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGNvbnN0IHJlc3VsdCQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0PGFueT4oKTtcbiAgICB0aGlzLnB1dEtleVZhbChrZXksIHZhbCwgdGhpcy5zdG9yZU5hbWUpLnRoZW4oKHZhbHVlOiBhbnkpID0+IHtcbiAgICAgIHJlc3VsdCQubmV4dCh2YWx1ZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdCQuYXNPYnNlcnZhYmxlKCk7XG4gIH1cbiAgcHVibGljIHJlbW92ZU9mKGtleSk6IE9ic2VydmFibGU8dm9pZD4ge1xuICAgIGNvbnN0IHJlc3VsdCQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0PGFueT4oKTtcbiAgICB0aGlzLnJlbW92ZUtleVZhbChrZXksIHRoaXMuc3RvcmVOYW1lKS50aGVuKCh2YWx1ZTogYW55KSA9PiB7XG4gICAgICByZXN1bHQkLm5leHQodmFsdWUpO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQkLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgcHVibGljIGdldEFsbCgpOiBQcm9taXNlPFN0b3JlVmFsdWU8VCwgYW55PltdPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0QWxsVmFsKHRoaXMuc3RvcmVOYW1lKTtcbiAgfVxuICBwdWJsaWMgZ2V0KGtleSk6IFByb21pc2U8U3RvcmVWYWx1ZTxULCBhbnk+PiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0S2V5VmFsKHRoaXMuc3RvcmVOYW1lLCBrZXkpO1xuICB9XG4gIHB1YmxpYyBwdXQoa2V5LCB2YWwpOiBQcm9taXNlPFN0b3JlS2V5PFQsIGFueT4+IHtcbiAgICByZXR1cm4gdGhpcy5wdXRLZXlWYWwodGhpcy5zdG9yZU5hbWUsIGtleSwgdmFsKTtcbiAgfVxuICBwdWJsaWMgcmVtb3ZlKGtleSk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnJlbW92ZUtleVZhbCh0aGlzLnN0b3JlTmFtZSwga2V5KTtcbiAgfVxuICBwdWJsaWMgY2xlYXJBbGwoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuY2xlYXJBbGxLZXlWYWwodGhpcy5zdG9yZU5hbWUpO1xuICB9XG4gIHB1YmxpYyBrZXlzKCk6IFByb21pc2U8U3RvcmVLZXk8VCwgYW55PltdPiB7XG4gICAgcmV0dXJuIHRoaXMua2V5c0tleVZhbCh0aGlzLnN0b3JlTmFtZSk7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgZ2V0QWxsVmFsKHN0b3JlTmFtZTogYW55KTogUHJvbWlzZTxTdG9yZVZhbHVlPFQsIGFueT5bXT4ge1xuICAgIHJldHVybiAoYXdhaXQgdGhpcy4kZGJQcm9taXNlKS5nZXRBbGwoc3RvcmVOYW1lKTtcbiAgfVxuICBwdWJsaWMgYXN5bmMgZ2V0S2V5VmFsKHN0b3JlTmFtZTogYW55LCBrZXkpOiBQcm9taXNlPFN0b3JlVmFsdWU8VCwgYW55Pj4ge1xuICAgIHJldHVybiAoYXdhaXQgdGhpcy4kZGJQcm9taXNlKS5nZXQoc3RvcmVOYW1lLCBrZXkpO1xuICB9XG4gIHB1YmxpYyBhc3luYyBwdXRLZXlWYWwoc3RvcmVOYW1lOiBhbnksIGtleSwgdmFsKTogUHJvbWlzZTxTdG9yZUtleTxULCBhbnk+PiB7XG4gICAgcmV0dXJuIChhd2FpdCB0aGlzLiRkYlByb21pc2UpLnB1dChzdG9yZU5hbWUsIHZhbCwga2V5KTtcbiAgfVxuICBwdWJsaWMgYXN5bmMgcmVtb3ZlS2V5VmFsKHN0b3JlTmFtZTogYW55LCBrZXkpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gKGF3YWl0IHRoaXMuJGRiUHJvbWlzZSkuZGVsZXRlKHN0b3JlTmFtZSwga2V5KTtcbiAgfVxuICBwdWJsaWMgYXN5bmMgY2xlYXJBbGxLZXlWYWwoc3RvcmVOYW1lOiBhbnkpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gKGF3YWl0IHRoaXMuJGRiUHJvbWlzZSkuY2xlYXIoc3RvcmVOYW1lKTtcbiAgfVxuICBwdWJsaWMgYXN5bmMga2V5c0tleVZhbChzdG9yZU5hbWU6IGFueSk6IFByb21pc2U8U3RvcmVLZXk8VCwgYW55PltdPiB7XG4gICAgcmV0dXJuIChhd2FpdCB0aGlzLiRkYlByb21pc2UpLmdldEFsbEtleXMoc3RvcmVOYW1lKTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBhZGRBcnRpY2xlKHN0b3JlTmFtZTogYW55LCB2YWx1ZTogYW55KTogUHJvbWlzZTxTdG9yZUtleTxULCBhbnk+PiB7XG4gICAgICByZXR1cm4gKGF3YWl0IHRoaXMuJGRiUHJvbWlzZSkuYWRkKHN0b3JlTmFtZSwgdmFsdWUpO1xuICB9XG4gIHB1YmxpYyBhc3luYyBhZGRBbGxBcnRpY2xlKHN0b3JlTmFtZTogYW55LCB2YWx1ZXM6IGFueVtdKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICBjb25zdCB0eCA9IChhd2FpdCB0aGlzLiRkYlByb21pc2UpLnRyYW5zYWN0aW9uKHN0b3JlTmFtZSwgJ3JlYWR3cml0ZScpO1xuICAgICAgdmFsdWVzLmZvckVhY2goKHZhbHVlOiBhbnkpID0+IHtcbiAgICAgICAgICB0eC5zdG9yZS5hZGQodmFsdWUpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gYXdhaXQgdHguZG9uZTtcbiAgfVxufVxuIl19