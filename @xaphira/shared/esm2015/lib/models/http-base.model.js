/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function APIModel() { }
/**
 * @record
 */
export function HttpBaseModel() { }
if (false) {
    /** @type {?} */
    HttpBaseModel.prototype.server;
    /** @type {?|undefined} */
    HttpBaseModel.prototype.path;
    /** @type {?|undefined} */
    HttpBaseModel.prototype.method;
    /** @type {?|undefined} */
    HttpBaseModel.prototype.file;
}
/**
 * @record
 */
export function FileModel() { }
if (false) {
    /** @type {?} */
    FileModel.prototype.filename;
    /** @type {?} */
    FileModel.prototype.extension;
}
/** @enum {string} */
const HttpMethod = {
    POST: 'POST',
    GET: 'GET',
    PUT: 'PUT',
    DELETE: 'DELETE',
};
export { HttpMethod };
export class HostModel {
    constructor() {
        this.protocol = 'https';
    }
}
if (false) {
    /** @type {?} */
    HostModel.prototype.protocol;
    /** @type {?} */
    HostModel.prototype.host;
    /** @type {?} */
    HostModel.prototype.port;
}
/**
 * @record
 */
export function ApiBaseResponse() { }
if (false) {
    /** @type {?} */
    ApiBaseResponse.prototype.respStatusCode;
    /** @type {?} */
    ApiBaseResponse.prototype.respStatusMessage;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1iYXNlLm1vZGVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHhhcGhpcmEvc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL21vZGVscy9odHRwLWJhc2UubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLDhCQUlDOzs7O0FBRUQsbUNBS0M7OztJQUpHLCtCQUFrQjs7SUFDbEIsNkJBQWM7O0lBQ2QsK0JBQW9COztJQUNwQiw2QkFBaUI7Ozs7O0FBR3JCLCtCQUdDOzs7SUFGRyw2QkFBaUI7O0lBQ2pCLDhCQUFrQjs7OztJQUlsQixNQUFPLE1BQU07SUFDYixLQUFNLEtBQUs7SUFDWCxLQUFNLEtBQUs7SUFDWCxRQUFTLFFBQVE7OztBQUdyQixNQUFNLE9BQU8sU0FBUztJQUF0QjtRQUNJLGFBQVEsR0FBWSxPQUFPLENBQUM7SUFHaEMsQ0FBQztDQUFBOzs7SUFIRyw2QkFBNEI7O0lBQzVCLHlCQUFhOztJQUNiLHlCQUFxQjs7Ozs7QUFHekIscUNBS0M7OztJQUpHLHlDQUF1Qjs7SUFDdkIsNENBRUUiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgaW50ZXJmYWNlIEFQSU1vZGVsIHtcbiAgICBbbmFtZTogc3RyaW5nXToge1xuICAgICAgICBbbmFtZTogc3RyaW5nXTogSHR0cEJhc2VNb2RlbCxcbiAgICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEh0dHBCYXNlTW9kZWwge1xuICAgIHNlcnZlcjogSG9zdE1vZGVsO1xuICAgIHBhdGg/OiBzdHJpbmc7XG4gICAgbWV0aG9kPzogSHR0cE1ldGhvZDtcbiAgICBmaWxlPzogRmlsZU1vZGVsO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZpbGVNb2RlbCB7XG4gICAgZmlsZW5hbWU6IHN0cmluZztcbiAgICBleHRlbnNpb246IHN0cmluZztcbn1cblxuZXhwb3J0IGVudW0gSHR0cE1ldGhvZCB7XG4gICAgUE9TVCA9ICdQT1NUJyxcbiAgICBHRVQgPSAnR0VUJyxcbiAgICBQVVQgPSAnUFVUJyxcbiAgICBERUxFVEUgPSAnREVMRVRFJyxcbn1cblxuZXhwb3J0IGNsYXNzIEhvc3RNb2RlbCB7XG4gICAgcHJvdG9jb2w/OiBzdHJpbmcgPSAnaHR0cHMnO1xuICAgIGhvc3Q6IHN0cmluZztcbiAgICBwb3J0PzogbnVtYmVyIHwgbnVsbDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBcGlCYXNlUmVzcG9uc2Uge1xuICAgIHJlc3BTdGF0dXNDb2RlOiBzdHJpbmc7XG4gICAgcmVzcFN0YXR1c01lc3NhZ2U6IHtcbiAgICAgICAgW25hbWU6IHN0cmluZ106IHN0cmluZyxcbiAgICB9O1xufVxuIl19