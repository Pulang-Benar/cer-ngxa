import { Injectable, Injector, ɵɵdefineInjectable, ɵɵinject, INJECTOR, Inject, Component, NgModule, LOCALE_ID } from '@angular/core';
import { NbLayoutModule, NbCardModule, NbIconModule, NbCheckboxModule, NbAlertModule, NbInputModule, NbButtonModule } from '@nebular/theme';
import { NgxaThemeModule } from '@xaphira/ngxa-theme';
import { Location, CommonModule, DatePipe } from '@angular/common';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpHeaders, HttpErrorResponse, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { oauthInfoModels, TypeDataOauth, oauthInfo, signatureHeader, HTTP_SERVICE, OAUTH_INFO, API, UserInfo, USER_INFO, AUTH_INDEXED_DB, PROFILE_INDEXED_DB, SETTINGS_INDEXED_DB } from '@xaphira/shared';
import { Router, RouterModule } from '@angular/router';
import { __awaiter } from 'tslib';
import { Subject, combineLatest, of, from, BehaviorSubject, Observable } from 'rxjs';
import { switchMap, tap, take, catchError, filter } from 'rxjs/operators';
import { DEFAULT_INTERRUPTSOURCES, Idle } from '@ng-idle/core';
import { IndexedDBService } from '@xaphira/ngxa-storage';
import { EncryptionService, DateFormat, Pattern } from '@xaphira/utils';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/empty';
import 'rxjs/add/operator/takeUntil';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AuthIndexedDBService extends IndexedDBService {
    /**
     * @param {?} injector
     */
    constructor(injector) {
        super(injector, 'xa-core', 1, '#xa-auth');
    }
    /**
     * @param {?} key
     * @param {?=} storeName
     * @return {?}
     */
    getEnc(key, storeName) {
        return __awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            const keyEncrypted = this.enc.getHmacSha256(this.oauthResource['private_key'], key, true);
            return ((yield this.$dbPromise).get(storeName ? storeName : '#xa-auth', keyEncrypted)).then((/**
             * @param {?} value
             * @return {?}
             */
            (value) => {
                return this.enc.decryptAES(this.oauthResource['aes_key'], value);
            }));
        });
    }
    /**
     * @param {?} key
     * @param {?} val
     * @param {?=} storeName
     * @return {?}
     */
    putEnc(key, val, storeName) {
        return __awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            const keyEncrypted = this.enc.getHmacSha256(this.oauthResource['private_key'], key, true);
            /** @type {?} */
            const valueEncrypted = this.enc.encryptAES(this.oauthResource['aes_key'], val);
            return (yield this.$dbPromise).put(storeName ? storeName : '#xa-auth', valueEncrypted, keyEncrypted);
        });
    }
    /**
     * @param {?} key
     * @param {?=} storeName
     * @return {?}
     */
    removeEnc(key, storeName) {
        return __awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            const keyEncrypted = this.enc.getHmacSha256(this.oauthResource['private_key'], key, true);
            return (yield this.$dbPromise).delete(storeName ? storeName : '#xa-auth', keyEncrypted);
        });
    }
    /**
     * @param {?} key
     * @param {?=} storeName
     * @return {?}
     */
    getOfEnc(key, storeName) {
        /** @type {?} */
        const result$ = new Subject();
        this.getEnc(key, storeName).then((/**
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
     * @param {?=} storeName
     * @return {?}
     */
    putOfEnc(key, val, storeName) {
        /** @type {?} */
        const result$ = new Subject();
        this.putEnc(key, val, storeName).then((/**
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
     * @param {?=} storeName
     * @return {?}
     */
    removeOfEnc(key, storeName) {
        /** @type {?} */
        const result$ = new Subject();
        this.removeEnc(key, storeName).then((/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            result$.next(value);
        }));
        return result$.asObservable();
    }
    /**
     * @param {?} response
     * @return {?}
     */
    loginStorage(response) {
        oauthInfoModels.forEach((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            if (response[data.key]) {
                if (data.type === TypeDataOauth.OAUTH) {
                    if (data.enc) {
                        this.putEnc(data.key, data.string ? response[data.key] : JSON.stringify(response[data.key])).then();
                    }
                    else {
                        this.put(data.key, data.string ? response[data.key] : JSON.stringify(response[data.key])).then();
                    }
                }
            }
        }));
    }
    /**
     * @return {?}
     */
    logout() {
        oauthInfoModels.forEach((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            if (data.enc) {
                if (data.type === TypeDataOauth.OAUTH) {
                    this.removeEnc(data.key).then();
                }
            }
        }));
    }
    /**
     * @return {?}
     */
    isLogin() {
        return __awaiter(this, void 0, void 0, function* () {
            if (yield this.getEnc(oauthInfo.access_token))
                return true;
            oauthInfoModels.forEach((/**
             * @param {?} data
             * @return {?}
             */
            data => {
                this.removeEnc(data.key).then();
            }));
            return false;
        });
    }
}
AuthIndexedDBService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
AuthIndexedDBService.ctorParameters = () => [
    { type: Injector }
];
/** @nocollapse */ AuthIndexedDBService.ngInjectableDef = ɵɵdefineInjectable({ factory: function AuthIndexedDBService_Factory() { return new AuthIndexedDBService(ɵɵinject(INJECTOR)); }, token: AuthIndexedDBService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProfileIndexedDBService extends IndexedDBService {
    /**
     * @param {?} injector
     */
    constructor(injector) {
        super(injector, 'xa-core', 1, '#xa-profile');
    }
    /**
     * @param {?} response
     * @return {?}
     */
    loginStorage(response) {
        oauthInfoModels.forEach((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            if (response[data.key]) {
                if (data.type === TypeDataOauth.PROFILE) {
                    this.put(data.key, data.string ? response[data.key] : JSON.stringify(response[data.key])).then();
                }
            }
        }));
    }
    /**
     * @return {?}
     */
    logout() {
        oauthInfoModels.forEach((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            if (data.type === TypeDataOauth.PROFILE) {
                this.remove(data.key);
            }
        }));
    }
}
ProfileIndexedDBService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
ProfileIndexedDBService.ctorParameters = () => [
    { type: Injector }
];
/** @nocollapse */ ProfileIndexedDBService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ProfileIndexedDBService_Factory() { return new ProfileIndexedDBService(ɵɵinject(INJECTOR)); }, token: ProfileIndexedDBService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SettingsIndexedDBService extends IndexedDBService {
    /**
     * @param {?} injector
     */
    constructor(injector) {
        super(injector, 'xa-core', 1, '#xa-settings');
        this.translate = injector.get(TranslateService);
    }
    /**
     * @param {?} response
     * @return {?}
     */
    loginStorage(response) {
        oauthInfoModels.forEach((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            if (response[data.key]) {
                if (data.type === TypeDataOauth.SETTINGS) {
                    this.put(data.key, data.string ? response[data.key] : JSON.stringify(response[data.key])).then();
                    if (data.key === 'locale') {
                        this.translate.getTranslation(response[data.key]).subscribe((/**
                         * @param {?} lang
                         * @return {?}
                         */
                        (lang) => {
                            this.translate.use(response[data.key]);
                            this.translate.setTranslation(response[data.key], lang, true);
                        }));
                    }
                }
            }
        }));
    }
}
SettingsIndexedDBService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
SettingsIndexedDBService.ctorParameters = () => [
    { type: Injector }
];
/** @nocollapse */ SettingsIndexedDBService.ngInjectableDef = ɵɵdefineInjectable({ factory: function SettingsIndexedDBService_Factory() { return new SettingsIndexedDBService(ɵɵinject(INJECTOR)); }, token: SettingsIndexedDBService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    SettingsIndexedDBService.prototype.translate;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AuthTokenService {
    /**
     * @param {?} httpBaseService
     * @param {?} oauthResource
     * @param {?} apiPath
     * @param {?} router
     * @param {?} authIndexedDB
     * @param {?} profileIndexedDB
     * @param {?} settingsIndexedDB
     * @param {?} idle
     */
    constructor(httpBaseService, oauthResource, apiPath, router, authIndexedDB, profileIndexedDB, settingsIndexedDB, idle) {
        this.httpBaseService = httpBaseService;
        this.oauthResource = oauthResource;
        this.apiPath = apiPath;
        this.router = router;
        this.authIndexedDB = authIndexedDB;
        this.profileIndexedDB = profileIndexedDB;
        this.settingsIndexedDB = settingsIndexedDB;
        this.idle = idle;
        idle.setIdle(oauthResource['session_idle']);
        idle.setTimeout(oauthResource['session_timeout']);
        idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);
        idle.onTimeout.subscribe((/**
         * @return {?}
         */
        () => {
            /* console.log('[RIP] Session Timeout'); */
            this.logout();
        }));
        idle.onIdleEnd.subscribe((/**
         * @return {?}
         */
        () => {
            /* console.log('[RIP] Session Idle End'); */
        }));
    }
    /**
     * @param {?} username
     * @param {?} password
     * @return {?}
     */
    login(username, password) {
        this.authIndexedDB.logout();
        return this.httpBaseService.
            HTTP_BASE(this.apiPath['auth']['token'], this.getAuthBody(username, password).toString(), this.getAuthHeader())
            .toPromise()
            .then((/**
         * @param {?} response
         * @return {?}
         */
        (response) => {
            this.idle.setIdle(response['expires_in']);
            this.idle.watch();
            /* console.log('[RIP] Session Idle Start'); */
            /* console.log('[RIP] Session Timeout in '+response['expires_in']+' seconds'); */
            this.authIndexedDB.loginStorage(response);
            this.profileIndexedDB.loginStorage(response);
            this.settingsIndexedDB.loginStorage(response);
        }));
    }
    /**
     * @return {?}
     */
    refresh() {
        return this.getBodyRefresh().pipe(switchMap((/**
         * @param {?} body
         * @return {?}
         */
        (body) => {
            return this.httpBaseService.
                HTTP_BASE(this.apiPath['auth']['token'], body, this.getAuthHeader())
                .pipe(tap((/**
             * @param {?} response
             * @return {?}
             */
            (response) => {
                this.idle.setIdle(response['expires_in']);
                this.authIndexedDB.logout();
                this.authIndexedDB.loginStorage(response);
            })));
        })));
    }
    /**
     * @return {?}
     */
    logout() {
        this.idle.stop();
        this.authIndexedDB.logout();
        this.profileIndexedDB.logout();
        this.router.navigate(['/auth']);
    }
    /**
     * @return {?}
     */
    isLogin() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.authIndexedDB.isLogin();
        });
    }
    /**
     * @param {?} request
     * @return {?}
     */
    oauthHeaders(request) {
        /** @type {?} */
        const result$ = new Subject();
        /** @type {?} */
        let httpHeaders = request.headers ? request.headers : new HttpHeaders();
        httpHeaders = httpHeaders.has(signatureHeader.authorization) ?
            httpHeaders.delete(signatureHeader.authorization) : httpHeaders;
        Promise.all([
            this.authIndexedDB.getEnc(oauthInfo.token_type),
            this.authIndexedDB.getEnc(oauthInfo.access_token)
        ])
            .then((/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            httpHeaders = httpHeaders.set(signatureHeader.authorization, value[0] + ' ' + value[1]);
            result$.next(request.clone({ headers: httpHeaders }));
        }));
        return result$.asObservable();
    }
    /**
     * @private
     * @return {?}
     */
    getAuthHeader() {
        return new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' +
                btoa(this.oauthResource['client_id'] + ':' + this.oauthResource['client_secret']),
            'Accept': 'application/json',
        });
    }
    /**
     * @private
     * @param {?} username
     * @param {?} password
     * @return {?}
     */
    getAuthBody(username, password) {
        /** @type {?} */
        const body = new URLSearchParams();
        body.append('client_id', this.oauthResource['client_id']);
        body.append('grant_type', this.oauthResource['grant_type']);
        body.append('username', username);
        body.append('password', password);
        return body;
    }
    /**
     * @private
     * @return {?}
     */
    getBodyRefresh() {
        /** @type {?} */
        const result$ = new Subject();
        this.authIndexedDB.getEnc(oauthInfo.refresh_token).then((/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            /** @type {?} */
            const body = new URLSearchParams();
            body.append('client_id', this.oauthResource['client_id']);
            body.append('grant_type', 'refresh_token');
            body.append('refresh_token', value);
            result$.next(body.toString());
        }));
        return result$.asObservable();
    }
}
AuthTokenService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
AuthTokenService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [HTTP_SERVICE,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [OAUTH_INFO,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [API,] }] },
    { type: Router },
    { type: AuthIndexedDBService },
    { type: ProfileIndexedDBService },
    { type: SettingsIndexedDBService },
    { type: Idle }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    AuthTokenService.prototype.httpBaseService;
    /**
     * @type {?}
     * @private
     */
    AuthTokenService.prototype.oauthResource;
    /**
     * @type {?}
     * @private
     */
    AuthTokenService.prototype.apiPath;
    /**
     * @type {?}
     * @private
     */
    AuthTokenService.prototype.router;
    /**
     * @type {?}
     * @private
     */
    AuthTokenService.prototype.authIndexedDB;
    /**
     * @type {?}
     * @private
     */
    AuthTokenService.prototype.profileIndexedDB;
    /**
     * @type {?}
     * @private
     */
    AuthTokenService.prototype.settingsIndexedDB;
    /**
     * @type {?}
     * @private
     */
    AuthTokenService.prototype.idle;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AuthGuardService {
    /**
     * @param {?} router
     * @param {?} authTokenService
     * @param {?} authService
     */
    constructor(router, authTokenService, authService) {
        this.router = router;
        this.authTokenService = authTokenService;
        this.authService = authService;
    }
    /**
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    canActivate(route, state) {
        /** @type {?} */
        const result$ = new Subject();
        this.authTokenService.isLogin().then((/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            result$.next(value);
            if (!value) {
                this.router.navigate(['/auth']);
            }
            else {
                this.authService.loadPhotoUser();
            }
        }));
        return result$.asObservable();
    }
}
AuthGuardService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
AuthGuardService.ctorParameters = () => [
    { type: Router },
    { type: AuthTokenService },
    { type: UserInfo, decorators: [{ type: Inject, args: [USER_INFO,] }] }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    AuthGuardService.prototype.router;
    /**
     * @type {?}
     * @private
     */
    AuthGuardService.prototype.authTokenService;
    /**
     * @type {?}
     * @private
     */
    AuthGuardService.prototype.authService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UnauthorizeGuardService {
    /**
     * @param {?} router
     * @param {?} authTokenService
     */
    constructor(router, authTokenService) {
        this.router = router;
        this.authTokenService = authTokenService;
    }
    /**
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    canActivate(route, state) {
        /** @type {?} */
        const result$ = new Subject();
        this.authTokenService.isLogin().then((/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            result$.next(!value);
            if (value) {
                this.router.navigate(['/app']);
            }
        }));
        return result$.asObservable();
    }
}
UnauthorizeGuardService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
UnauthorizeGuardService.ctorParameters = () => [
    { type: Router },
    { type: AuthTokenService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    UnauthorizeGuardService.prototype.router;
    /**
     * @type {?}
     * @private
     */
    UnauthorizeGuardService.prototype.authTokenService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AuthGuardChildService {
    /**
     * @param {?} router
     * @param {?} authTokenService
     * @param {?} enc
     * @param {?} storage
     */
    constructor(router, authTokenService, enc, storage) {
        this.router = router;
        this.authTokenService = authTokenService;
        this.enc = enc;
        this.storage = storage;
    }
    /**
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    canActivateChild(route, state) {
        /** @type {?} */
        const result$ = new Subject();
        this.authTokenService.isLogin().then((/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            result$.next(value);
            if (route.data) {
                Promise.all([
                    this.storage.getEnc('menus'),
                    this.storage.getEnc('extras'),
                ]).then((/**
                 * @param {?} strg
                 * @return {?}
                 */
                (strg) => {
                    if (!(strg[0].includes(route.data['code']) || strg[1].includes(route.data['code']))) {
                        this.router.navigate(['/app/home']);
                    }
                    return result$.asObservable();
                }));
            }
            if (!value) {
                this.router.navigate(['/auth']);
            }
        }));
        return result$.asObservable();
    }
}
AuthGuardChildService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
AuthGuardChildService.ctorParameters = () => [
    { type: Router },
    { type: AuthTokenService },
    { type: EncryptionService },
    { type: AuthIndexedDBService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    AuthGuardChildService.prototype.router;
    /**
     * @type {?}
     * @private
     */
    AuthGuardChildService.prototype.authTokenService;
    /**
     * @type {?}
     * @private
     */
    AuthGuardChildService.prototype.enc;
    /**
     * @type {?}
     * @private
     */
    AuthGuardChildService.prototype.storage;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LoginPageComponent {
    /**
     * @param {?} router
     * @param {?} authTokenService
     */
    constructor(router, authTokenService) {
        this.router = router;
        this.authTokenService = authTokenService;
        this.buttonLogin = false;
        this.progressBar = 25;
        this.form = new FormGroup({
            username: new FormControl(),
            password: new FormControl(),
        });
    }
    /**
     * @return {?}
     */
    login() {
        if (!this.form.invalid) {
            document.querySelectorAll('.pace-done').forEach((/**
             * @param {?} pace
             * @return {?}
             */
            pace => {
                pace.className = pace.className.replace('pace-done pace-done', 'pace-running');
                pace.className = pace.className.replace('pace-done', 'pace-running');
            }));
            document.querySelectorAll('.pace-inactive').forEach((/**
             * @param {?} pace
             * @return {?}
             */
            pace => {
                pace.className = pace.className.replace('pace-inactive pace-inactive', 'pace-active');
                pace.className = pace.className.replace('pace-inactive', 'pace-active');
            }));
            /** @type {?} */
            const progressDOM = (/** @type {?} */ (document.getElementsByClassName('pace-progress').item(0)));
            if (this.progressBar < 35) {
                this.progressBar = 35;
                progressDOM.style.transform = 'translate3d(' + this.progressBar + '%, 0px, 0px)';
                progressDOM.getAttributeNode('data-progress-text').value = this.progressBar + '%';
                progressDOM.getAttributeNode('data-progress').value = this.progressBar.toString();
            }
            this.buttonLogin = true;
            this.authTokenService.login(this.form.get('username').value, this.form.get('password').value)
                .then((/**
             * @return {?}
             */
            () => {
                this.progressBar = 90;
                progressDOM.style.transform = 'translate3d(' + this.progressBar + '%, 0px, 0px)';
                progressDOM.getAttributeNode('data-progress-text').value = this.progressBar + '%';
                progressDOM.getAttributeNode('data-progress').value = this.progressBar.toString();
                this.progressBar = 0;
                this.router.navigate(['/app/home']);
            }))
                .catch((/**
             * @param {?} error
             * @return {?}
             */
            (error) => {
                if (!(error instanceof HttpErrorResponse)) {
                    /** @type {?} */
                    const response = ((/** @type {?} */ (error)));
                    this.responseError = response.respStatusMessage[response.respStatusCode];
                }
                this.buttonLogin = false;
                this.progressBar = 85;
                progressDOM.style.transform = 'translate3d(' + this.progressBar + '%, 0px, 0px)';
                progressDOM.getAttributeNode('data-progress-text').value = this.progressBar + '%';
                progressDOM.getAttributeNode('data-progress').value = this.progressBar.toString();
                document.querySelectorAll('.pace-running').forEach((/**
                 * @param {?} pace
                 * @return {?}
                 */
                pace => {
                    pace.className = pace.className.replace('pace-running', 'pace-done');
                }));
                document.querySelectorAll('.pace-active').forEach((/**
                 * @param {?} pace
                 * @return {?}
                 */
                pace => {
                    pace.className = pace.className.replace('pace-active', 'pace-inactive');
                }));
                this.progressBar = 0;
            }));
            if (this.progressBar >= 35 && this.progressBar < 65) {
                this.progressBar = 65;
                progressDOM.style.transform = 'translate3d(' + this.progressBar + '%, 0px, 0px)';
                progressDOM.getAttributeNode('data-progress-text').value = this.progressBar + '%';
                progressDOM.getAttributeNode('data-progress').value = this.progressBar.toString();
            }
        }
    }
    /**
     * @return {?}
     */
    get hasErrorUsername() {
        return (this.form.controls['username'] &&
            this.form.controls['username'].invalid &&
            this.form.controls['username'].touched);
    }
    /**
     * @return {?}
     */
    get hasSuccessUsername() {
        return (this.form.controls['username'] &&
            this.form.controls['username'].valid &&
            this.form.controls['username'].touched);
    }
    /**
     * @return {?}
     */
    get hasErrorPassword() {
        return (this.form.controls['password'] &&
            this.form.controls['password'].invalid &&
            this.form.controls['password'].touched);
    }
    /**
     * @return {?}
     */
    get hasSuccessPassword() {
        return (this.form.controls['password'] &&
            this.form.controls['password'].valid &&
            this.form.controls['password'].touched);
    }
}
LoginPageComponent.decorators = [
    { type: Component, args: [{
                selector: 'xa-login-page',
                template: "<h1 id=\"title\" class=\"title\">{{ 'Login' | translate }}</h1>\n<p class=\"sub-title\">{{ 'subtitle.login' | translate }}</p>\n<nb-alert *ngIf=\"responseError\" outline=\"danger\" role=\"alert\">\n  <p class=\"alert-title\"><b>{{ 'alert.title.login' | translate }}</b></p>\n  <ul class=\"alert-message-list\">\n    <li class=\"alert-message\">{{ responseError }}</li>\n  </ul>\n</nb-alert>\n\n<form [formGroup]=\"form\" (ngSubmit)=\"login()\" aria-labelledby=\"title\">\n  <div class=\"form-control-group\">\n    <label class=\"label\">{{ 'Username' | translate }} :</label>\n    <input [formControlName]=\"'username'\"\n          [required]=\"true\"\n          [ngClass]=\"{\n            'status-danger': hasErrorUsername,\n            'status-success': hasSuccessUsername\n          }\"\n          name=\"username\"\n          id=\"inputUsername\"\n          placeholder=\"{{ 'Username' | translate }}\"\n          fieldSize=\"large\"\n          autofocus\n          nbInput\n          fullWidth>\n    <ng-container *ngIf=\"hasErrorUsername\">\n      <span class=\"caption status-danger\">{{'error.username' | translate}}</span>\n    </ng-container>\n  </div>\n\n  <div class=\"form-control-group\">\n    <label class=\"label\">{{ 'Password' | translate }} :</label>\n    <input [formControlName]=\"'password'\"\n          [required]=\"true\"\n          [ngClass]=\"{\n            'status-danger': hasErrorPassword,\n            'status-success': hasSuccessPassword\n          }\"\n          name=\"password\"\n          type=\"password\"\n          id=\"inputPassword\"\n          placeholder=\"{{ 'Password' | translate }}\"\n          fieldSize=\"large\"\n          nbInput\n          fullWidth>\n    <ng-container *ngIf=\"hasErrorPassword\">\n      <span class=\"caption status-danger\">{{ 'error.password' | translate}}</span>\n    </ng-container>\n  </div>\n\n  <button [disabled]=\"form.invalid || buttonLogin\"\n          fullWidth\n          nbButton\n          status=\"primary\"\n          size=\"large\"\n          [class.btn-pulse]=\"form.invalid || buttonLogin\">\n    {{ 'Login' | translate }}\n  </button>\n</form>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
LoginPageComponent.ctorParameters = () => [
    { type: Router },
    { type: AuthTokenService }
];
if (false) {
    /** @type {?} */
    LoginPageComponent.prototype.responseError;
    /** @type {?} */
    LoginPageComponent.prototype.buttonLogin;
    /**
     * @type {?}
     * @private
     */
    LoginPageComponent.prototype.progressBar;
    /** @type {?} */
    LoginPageComponent.prototype.form;
    /**
     * @type {?}
     * @private
     */
    LoginPageComponent.prototype.router;
    /**
     * @type {?}
     * @private
     */
    LoginPageComponent.prototype.authTokenService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LogoutComponent {
    /**
     * @param {?} authTokenService
     */
    constructor(authTokenService) {
        this.authTokenService = authTokenService;
        this.authTokenService.logout();
    }
}
LogoutComponent.decorators = [
    { type: Component, args: [{
                selector: 'xa-logout',
                template: ''
            }] }
];
/** @nocollapse */
LogoutComponent.ctorParameters = () => [
    { type: AuthTokenService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    LogoutComponent.prototype.authTokenService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AuthComponent {
    /**
     * @param {?} location
     */
    constructor(location) {
        this.location = location;
    }
    /**
     * @return {?}
     */
    back() {
        this.location.back();
        return false;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.alive = false;
    }
}
AuthComponent.decorators = [
    { type: Component, args: [{
                selector: 'xa-auth',
                template: "<nb-layout>\n    <nb-layout-column>\n        <nb-card>\n            <nb-card-header>\n                <nav class=\"navigation\">\n                    <a href=\"#\" (click)=\"back()\" class=\"link back-link\" aria-label=\"Back\">\n                        <nb-icon icon=\"arrow-back\"></nb-icon>\n                    </a>\n                </nav>\n            </nb-card-header>\n            <nb-card-body>\n                <xa-auth-block>\n                    <router-outlet></router-outlet>\n                </xa-auth-block>\n            </nb-card-body>\n        </nb-card>\n    </nb-layout-column>\n</nb-layout>",
                styles: ["/*!\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */:host nb-card{margin:0;height:calc(100vh - 2 * 2.5rem)}:host .navigation .link{display:inline-block;text-decoration:none}:host .navigation .link nb-icon{font-size:2rem;vertical-align:middle}:host .links nb-icon{font-size:2.5rem}:host nb-card-body{display:flex;width:100%}:host xa-auth-block{margin:auto}:host ::ng-deep nb-layout .layout .layout-container .content .columns nb-layout-column{padding:2.5rem}@media (max-width:767.98px){:host nb-card{border-radius:0;height:100vh}:host ::ng-deep nb-layout .layout .layout-container .content .columns nb-layout-column{padding:0}}"]
            }] }
];
/** @nocollapse */
AuthComponent.ctorParameters = () => [
    { type: Location }
];
if (false) {
    /** @type {?} */
    AuthComponent.prototype.alive;
    /** @type {?} */
    AuthComponent.prototype.subscription;
    /** @type {?} */
    AuthComponent.prototype.authenticated;
    /** @type {?} */
    AuthComponent.prototype.token;
    /**
     * @type {?}
     * @private
     */
    AuthComponent.prototype.location;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const routes = [{
        path: '',
        component: AuthComponent,
        children: [
            {
                path: '',
                component: LoginPageComponent,
                canActivate: [UnauthorizeGuardService],
            },
            {
                path: 'login',
                component: LoginPageComponent,
                canActivate: [UnauthorizeGuardService],
            },
            {
                path: 'logout',
                component: LogoutComponent,
                canActivate: [AuthGuardService],
            },
        ],
    }];
class NgxaAuthRoutingModule {
}
NgxaAuthRoutingModule.decorators = [
    { type: NgModule, args: [{
                imports: [RouterModule.forChild(routes)],
                exports: [RouterModule],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AuthBlockComponent {
}
AuthBlockComponent.decorators = [
    { type: Component, args: [{
                selector: 'xa-auth-block',
                template: `
    <ng-content></ng-content>
  `,
                styles: [":host{display:block;width:100%;max-width:35rem}:host ::ng-deep form{width:100%}:host ::ng-deep .label{display:block;margin-bottom:.5rem}:host ::ng-deep .forgot-password{text-decoration:none;margin-bottom:.5rem}:host ::ng-deep .caption{margin-top:.5rem}:host ::ng-deep .alert{text-align:center}:host ::ng-deep .title{margin-top:0;margin-bottom:.75rem;text-align:center}:host ::ng-deep .sub-title{margin-bottom:2rem;text-align:center}:host ::ng-deep .form-control-group{margin-bottom:2rem}:host ::ng-deep .form-control-group.accept-group{display:flex;justify-content:space-between;margin:2rem 0}:host ::ng-deep .label-with-link{display:flex;justify-content:space-between}:host ::ng-deep .links{text-align:center;margin-top:1.75rem}:host ::ng-deep .links .socials{margin-top:1.5rem}:host ::ng-deep .links .socials a{margin:0 1rem;text-decoration:none;vertical-align:middle}:host ::ng-deep .links .socials a.with-icon{font-size:2rem}:host ::ng-deep .another-action{margin-top:2rem;text-align:center}:host ::ng-deep .sign-in-or-up{margin-top:2rem;display:flex;justify-content:space-between}:host ::ng-deep nb-alert .alert-message,:host ::ng-deep nb-alert .alert-title{margin:0 0 .5rem}:host ::ng-deep nb-alert .alert-message-list{list-style-type:none;padding:0;margin:0}"]
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const components = [
    AuthComponent,
    AuthBlockComponent,
];
class NgxaLayoutAuthModule {
}
NgxaLayoutAuthModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    ...components,
                ],
                imports: [
                    NbLayoutModule,
                    NbCardModule,
                    NbIconModule,
                    CommonModule,
                    HttpClientModule,
                    NgxaThemeModule,
                    RouterModule,
                ],
                exports: [
                    ...components,
                ],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AuthSignatureService {
    /**
     * @param {?} translate
     * @param {?} enc
     * @param {?} oauthResource
     * @param {?} authStorage
     */
    constructor(translate, enc, oauthResource, authStorage) {
        this.translate = translate;
        this.enc = enc;
        this.oauthResource = oauthResource;
        this.authStorage = authStorage;
    }
    /**
     * @param {?} req
     * @return {?}
     */
    signHeaders(req) {
        return combineLatest([
            this.key(),
            this.signature(this.getPath(req.url)),
        ]).pipe(take(1), switchMap((/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            if (signatureHeader.signature) {
                /** @type {?} */
                let httpHeaders = req.headers ? req.headers : new HttpHeaders();
                httpHeaders.keys().forEach((/**
                 * @param {?} key
                 * @return {?}
                 */
                (key) => {
                    if (key === signatureHeader.key)
                        httpHeaders = httpHeaders.delete(signatureHeader.key);
                    if (key === signatureHeader.timestamp)
                        httpHeaders = httpHeaders.delete(signatureHeader.timestamp);
                    if (key === signatureHeader.signature)
                        httpHeaders = httpHeaders.delete(signatureHeader.signature);
                }));
                httpHeaders = httpHeaders.set(signatureHeader.key, value[0]);
                httpHeaders = httpHeaders.set(signatureHeader.timestamp, this.timestamp());
                httpHeaders = httpHeaders.set(signatureHeader.signature, value[1]);
                return of(req.clone({ headers: httpHeaders }));
            }
            return of(req);
        })));
    }
    /**
     * @return {?}
     */
    key() {
        return this.authStorage.getOfEnc(oauthInfo.public_key);
    }
    /**
     * @return {?}
     */
    timestamp() {
        return Math.floor(new Date().getTime() / 1000).toString();
    }
    /**
     * @return {?}
     */
    date() {
        return new DatePipe(this.translate.currentLang).transform(new Date(), DateFormat.DATE);
    }
    /**
     * @param {?} url
     * @return {?}
     */
    signature(url) {
        return combineLatest([
            this.key(),
            this.authStorage.getOfEnc(oauthInfo.access_token),
        ]).pipe(take(1), switchMap((/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            /** @type {?} */
            const key = value[0] + ':' +
                this.timestamp() + ':' +
                this.date() + ':' +
                url + ':' +
                value[1];
            return of(this.enc.getHmacSha256(this.oauthResource['private_key'], key));
        })));
    }
    /**
     * @private
     * @param {?} url
     * @return {?}
     */
    getPath(url) {
        return '/' + url
            .replace(/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*(:[0-9]{1,5})?(\/).*?/g, '');
    }
}
AuthSignatureService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
AuthSignatureService.ctorParameters = () => [
    { type: TranslateService },
    { type: EncryptionService },
    { type: undefined, decorators: [{ type: Inject, args: [OAUTH_INFO,] }] },
    { type: AuthIndexedDBService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    AuthSignatureService.prototype.translate;
    /**
     * @type {?}
     * @private
     */
    AuthSignatureService.prototype.enc;
    /**
     * @type {?}
     * @private
     */
    AuthSignatureService.prototype.oauthResource;
    /**
     * @type {?}
     * @private
     */
    AuthSignatureService.prototype.authStorage;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HttpInterceptorTokenService {
    /**
     * @param {?} authToken
     */
    constructor(authToken) {
        this.authToken = authToken;
        this.destroy$ = new Subject();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
        this.destroy$.unsubscribe();
    }
    /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    intercept(req, next) {
        if (req.headers) {
            if (req.headers.has(signatureHeader.mark)) {
                return this.authToken.oauthHeaders(req).pipe(switchMap((/**
                 * @param {?} reqAuth
                 * @return {?}
                 */
                (reqAuth) => {
                    return next.handle(reqAuth);
                })));
            }
        }
        return next.handle(req).takeUntil(this.destroy$);
    }
}
HttpInterceptorTokenService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
HttpInterceptorTokenService.ctorParameters = () => [
    { type: AuthTokenService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    HttpInterceptorTokenService.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    HttpInterceptorTokenService.prototype.authToken;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HttpInterceptorSignatureService {
    /**
     * @param {?} authSignature
     * @param {?} oauthResource
     */
    constructor(authSignature, oauthResource) {
        this.authSignature = authSignature;
        this.oauthResource = oauthResource;
        this.destroy$ = new Subject();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
        this.destroy$.unsubscribe();
    }
    /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    intercept(req, next) {
        if (req.headers) {
            if (req.headers.has(signatureHeader.mark) && this.oauthResource.signature) {
                return this.authSignature.signHeaders(req).pipe(switchMap((/**
                 * @param {?} value
                 * @return {?}
                 */
                (value) => {
                    return next.handle(value);
                })));
            }
        }
        return next.handle(req).takeUntil(this.destroy$);
    }
}
HttpInterceptorSignatureService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
HttpInterceptorSignatureService.ctorParameters = () => [
    { type: AuthSignatureService },
    { type: undefined, decorators: [{ type: Inject, args: [OAUTH_INFO,] }] }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    HttpInterceptorSignatureService.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    HttpInterceptorSignatureService.prototype.authSignature;
    /**
     * @type {?}
     * @private
     */
    HttpInterceptorSignatureService.prototype.oauthResource;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AuthLanguageService {
    /**
     * @param {?} locale
     * @param {?} settingsIndexedDB
     */
    constructor(locale, settingsIndexedDB) {
        this.locale = locale;
        this.settingsIndexedDB = settingsIndexedDB;
    }
    /**
     * @param {?} req
     * @return {?}
     */
    getLocale(req) {
        return from(this.settingsIndexedDB.get('locale')).pipe(take(1), switchMap((/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            /** @type {?} */
            let httpHeaders = req.headers ? req.headers : new HttpHeaders();
            /** @type {?} */
            const localeCode = value ?
                (value.match(new RegExp(Pattern.LOCALE, 'g')) ?
                    value :
                    this.locale) : this.locale;
            httpHeaders = httpHeaders.append('Accept-Language', localeCode);
            return of(req.clone({ headers: httpHeaders }));
        })));
    }
}
AuthLanguageService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
AuthLanguageService.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] },
    { type: SettingsIndexedDBService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    AuthLanguageService.prototype.locale;
    /**
     * @type {?}
     * @private
     */
    AuthLanguageService.prototype.settingsIndexedDB;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HttpInterceptorLangService {
    /**
     * @param {?} authLanguage
     */
    constructor(authLanguage) {
        this.authLanguage = authLanguage;
        this.destroy$ = new Subject();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
        this.destroy$.unsubscribe();
    }
    /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    intercept(req, next) {
        if (req.headers) {
            if (req.headers.has(signatureHeader.mark)) {
                return this.authLanguage.getLocale(req).pipe(switchMap((/**
                 * @param {?} value
                 * @return {?}
                 */
                (value) => {
                    return next.handle(value);
                })));
            }
        }
        return next.handle(req).takeUntil(this.destroy$);
    }
}
HttpInterceptorLangService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
HttpInterceptorLangService.ctorParameters = () => [
    { type: AuthLanguageService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    HttpInterceptorLangService.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    HttpInterceptorLangService.prototype.authLanguage;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HttpErrorHandler {
    /**
     * @param {?} translate
     * @param {?} authToken
     * @param {?} authStorage
     * @param {?} authSignature
     */
    constructor(translate, authToken, authStorage, authSignature) {
        this.translate = translate;
        this.authToken = authToken;
        this.authStorage = authStorage;
        this.authSignature = authSignature;
        this.isRefreshingToken = false;
        this.refreshTokenSubject = new BehaviorSubject(null);
    }
    /**
     * @protected
     * @param {?} error
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    errorHandler(error, req, next) {
        /** @type {?} */
        let err = new HttpErrorResponse({
            error: error.error,
            headers: error.headers,
            status: error.status,
            statusText: error.statusText,
            url: error.url,
        });
        if (error.error instanceof ArrayBuffer) {
            /** @type {?} */
            const decodedString = String.fromCharCode.apply(null, new Uint8Array(error.error));
            err = new HttpErrorResponse({
                error: JSON.parse(decodedString),
                headers: error.headers,
                status: error.status,
                statusText: error.statusText,
                url: error.url,
            });
        }
        switch (err.status) {
            case 200:
            case 201:
            case 304:
                return Observable.empty();
            case 400:
                return this.error400(err);
            case 401:
                return this.error401(err, req, next);
            case 404:
            case 403:
            case 500:
            case 504:
            case 0:
                return Observable.throw(this.errorDefault(err));
            default:
                break;
        }
        return Observable.throw(err);
    }
    /**
     * @protected
     * @param {?} error
     * @return {?}
     */
    errorDefault(error) {
        /** @type {?} */
        let err = {
            respStatusCode: error.status,
            respStatusMessage: {},
        };
        err.respStatusMessage[err.respStatusCode] = error.statusText;
        /** @type {?} */
        let msgKey = 'error.' + err.respStatusCode;
        if (error.error) {
            if (error.error['respStatusCode']) {
                err = error.error;
                msgKey = err.respStatusMessage[err.respStatusCode];
            }
        }
        this.translate.get(msgKey).subscribe((/**
         * @param {?} result
         * @return {?}
         */
        (result) => {
            err.respStatusMessage[err.respStatusCode] = result;
        }));
        return err;
    }
    /**
     * @protected
     * @param {?} error
     * @return {?}
     */
    error400(error) {
        if (error.error['respStatusCode']) {
            if (error.error['respStatusCode'] === 'invalid_grant') {
                switch (error.error['respStatusMessage']['invalid_grant']) {
                    case 'Bad credentials':
                    case 'User account is locked':
                    case 'User is disabled':
                    case 'User account has expired':
                        return Observable.throw(this.errorDefault(error));
                    default:
                        this.authToken.logout();
                        return Observable.throw(this.errorDefault(error));
                }
            }
            else {
                return Observable.throw(this.errorDefault(error));
            }
        }
        return Observable.throw(error);
    }
    /**
     * @protected
     * @param {?} error
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    error401(error, request, next) {
        if (error.error) {
            if (error.error['respStatusCode'] === 'invalid_token') {
                if (!this.isRefreshingToken) {
                    this.isRefreshingToken = true;
                    this.refreshTokenSubject.next(null);
                    return this.authToken.refresh().pipe(switchMap((/**
                     * @param {?} response
                     * @return {?}
                     */
                    (response) => {
                        this.isRefreshingToken = false;
                        this.refreshTokenSubject.next(response);
                        return this.authToken.oauthHeaders(request).pipe(switchMap((/**
                         * @param {?} req
                         * @return {?}
                         */
                        (req) => {
                            request = req;
                            return this.authSignature.signHeaders(request).pipe(switchMap((/**
                             * @param {?} valReq
                             * @return {?}
                             */
                            (valReq) => {
                                return next.handle(valReq);
                            })));
                        })));
                    })), catchError((/**
                     * @param {?} err
                     * @return {?}
                     */
                    (err) => {
                        return this.errorHandler(err, request, next);
                    })));
                }
                else {
                    /** @type {?} */
                    const msg = error.error['respStatusMessage']['invalid_token'];
                    if (msg.includes('expired')) {
                        this.authToken.logout();
                    }
                    else {
                        return this.refreshTokenSubject.pipe(filter((/**
                         * @param {?} response
                         * @return {?}
                         */
                        response => response != null)), take(1), switchMap((/**
                         * @return {?}
                         */
                        () => {
                            return this.authToken.oauthHeaders(request).pipe(switchMap((/**
                             * @param {?} req
                             * @return {?}
                             */
                            (req) => {
                                request = req;
                                return this.authSignature.signHeaders(request).pipe(switchMap((/**
                                 * @param {?} valReq
                                 * @return {?}
                                 */
                                (valReq) => {
                                    return next.handle(valReq);
                                })));
                            })));
                        })));
                    }
                }
            }
        }
        return Observable.throw(error);
    }
}
if (false) {
    /**
     * @type {?}
     * @protected
     */
    HttpErrorHandler.prototype.isRefreshingToken;
    /**
     * @type {?}
     * @protected
     */
    HttpErrorHandler.prototype.refreshTokenSubject;
    /**
     * @type {?}
     * @protected
     */
    HttpErrorHandler.prototype.translate;
    /**
     * @type {?}
     * @protected
     */
    HttpErrorHandler.prototype.authToken;
    /**
     * @type {?}
     * @protected
     */
    HttpErrorHandler.prototype.authStorage;
    /**
     * @type {?}
     * @protected
     */
    HttpErrorHandler.prototype.authSignature;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HttpInterceptorErrorService extends HttpErrorHandler {
    /**
     * @param {?} translate
     * @param {?} authToken
     * @param {?} authStorage
     * @param {?} authSignature
     */
    constructor(translate, authToken, authStorage, authSignature) {
        super(translate, authToken, authStorage, authSignature);
        this.translate = translate;
        this.authToken = authToken;
        this.authStorage = authStorage;
        this.authSignature = authSignature;
        this.destroy$ = new Subject();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
        this.destroy$.unsubscribe();
    }
    /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    intercept(req, next) {
        return next.handle(req).pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => {
            if (error instanceof HttpErrorResponse) {
                return this.errorHandler(error, req, next);
            }
            else {
                return Observable.throw(error);
            }
        }))).takeUntil(this.destroy$);
    }
}
HttpInterceptorErrorService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
HttpInterceptorErrorService.ctorParameters = () => [
    { type: TranslateService },
    { type: AuthTokenService },
    { type: AuthIndexedDBService },
    { type: AuthSignatureService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    HttpInterceptorErrorService.prototype.destroy$;
    /** @type {?} */
    HttpInterceptorErrorService.prototype.translate;
    /** @type {?} */
    HttpInterceptorErrorService.prototype.authToken;
    /** @type {?} */
    HttpInterceptorErrorService.prototype.authStorage;
    /** @type {?} */
    HttpInterceptorErrorService.prototype.authSignature;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AuthUserService extends UserInfo {
    /**
     * @param {?} profileIndexedDB
     * @param {?} apiPath
     * @param {?} httpBaseService
     */
    constructor(profileIndexedDB, apiPath, httpBaseService) {
        super();
        this.profileIndexedDB = profileIndexedDB;
        this.apiPath = apiPath;
        this.httpBaseService = httpBaseService;
        this.loaderUserSubject$ = new Subject();
    }
    /**
     * @return {?}
     */
    loadPhotoUser() {
        Promise.all([
            this.profileIndexedDB.get('image-b64'),
            this.profileIndexedDB.get('image'),
            this.profileIndexedDB.get('name'),
        ]).then((/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            if (!value[0]) {
                if (value[1] && value[2]) {
                    this.getImage(value[1], value[2]);
                }
                else {
                    this.httpBaseService.HTTP_AUTH(this.apiPath['profile']['get-profile'])
                        .subscribe((/**
                     * @param {?} response
                     * @return {?}
                     */
                    (response) => {
                        Promise.all([
                            this.profileIndexedDB.put('name', response['name']),
                            this.profileIndexedDB.put('email', response['email']),
                            this.profileIndexedDB.put('image', response['image']),
                        ]).then((/**
                         * @return {?}
                         */
                        () => {
                            this.getImage(response['image'], response['name']);
                        }));
                    }));
                }
            }
            else {
                Promise.all([
                    this.profileIndexedDB.get('name'),
                    this.profileIndexedDB.get('image-b64'),
                ]).then((/**
                 * @param {?} profile
                 * @return {?}
                 */
                (profile) => {
                    /** @type {?} */
                    const user = {
                        name: profile[0],
                        picture: profile[1],
                    };
                    this.loaderUserSubject$.next(user);
                }));
            }
        }));
    }
    /**
     * @param {?} file
     * @param {?} checksum
     * @return {?}
     */
    updatePhotoUser(file, checksum) {
        if (file && checksum) {
            /** @type {?} */
            let picture;
            /** @type {?} */
            const imageBlob = new Blob([file], {
                type: 'image/png',
            });
            this.profileIndexedDB.put(oauthInfo.image, checksum).then();
            this.profileIndexedDB.put('image-blob', imageBlob).then();
            this.profileIndexedDB.get('name').then((/**
             * @param {?} name
             * @return {?}
             */
            (name) => {
                /** @type {?} */
                const reader = new FileReader();
                reader.readAsDataURL(imageBlob);
                reader.onloadend = (/**
                 * @return {?}
                 */
                () => {
                    picture = reader.result.toString();
                    /** @type {?} */
                    const user = {
                        name: name,
                        picture: picture,
                    };
                    this.profileIndexedDB.put('image-b64', picture).then();
                    this.loaderUserSubject$.next(user);
                });
            }));
        }
        else {
            this.loaderUserSubject$.next(null);
        }
        return this.loaderUserSubject$.asObservable();
    }
    /**
     * @return {?}
     */
    getUser() {
        return this.loaderUserSubject$.asObservable();
    }
    /**
     * @private
     * @param {?} checksum
     * @param {?} name
     * @return {?}
     */
    getImage(checksum, name) {
        this.httpBaseService.HTTP_AUTH(this.apiPath['file']['vw-photo-profile'], null, null, null, [checksum], 'arraybuffer')
            .pipe(tap((/**
         * @param {?} response
         * @return {?}
         */
        (response) => {
            /** @type {?} */
            let picture;
            /** @type {?} */
            const imageBlob = new Blob([response], {
                type: 'image/png',
            });
            this.profileIndexedDB.put('image-blob', imageBlob).then();
            /** @type {?} */
            const reader = new FileReader();
            reader.readAsDataURL(imageBlob);
            reader.onloadend = (/**
             * @return {?}
             */
            () => {
                picture = reader.result.toString();
                /** @type {?} */
                const user = {
                    name: name,
                    picture: picture,
                };
                this.profileIndexedDB.put('image-b64', picture).then();
                this.loaderUserSubject$.next(user);
            });
        }))).subscribe();
    }
}
AuthUserService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
AuthUserService.ctorParameters = () => [
    { type: ProfileIndexedDBService },
    { type: undefined, decorators: [{ type: Inject, args: [API,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [HTTP_SERVICE,] }] }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    AuthUserService.prototype.loaderUserSubject$;
    /**
     * @type {?}
     * @private
     */
    AuthUserService.prototype.profileIndexedDB;
    /**
     * @type {?}
     * @private
     */
    AuthUserService.prototype.apiPath;
    /**
     * @type {?}
     * @private
     */
    AuthUserService.prototype.httpBaseService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const AUTH_PROVIDERS = [
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorTokenService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorSignatureService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorLangService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorErrorService, multi: true },
    { provide: USER_INFO, useClass: AuthUserService },
    { provide: AUTH_INDEXED_DB, useClass: AuthIndexedDBService },
    { provide: PROFILE_INDEXED_DB, useClass: ProfileIndexedDBService },
    { provide: SETTINGS_INDEXED_DB, useClass: SettingsIndexedDBService },
    AuthGuardService,
    UnauthorizeGuardService,
    AuthTokenService,
    AuthGuardChildService,
    AuthSignatureService,
    AuthLanguageService,
];
/** @type {?} */
const components$1 = [
    LoginPageComponent,
    LogoutComponent,
];
class NgxaAuthModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return (/** @type {?} */ ({
            ngModule: NgxaAuthModule,
            providers: [
                ...AUTH_PROVIDERS,
            ],
        }));
    }
}
NgxaAuthModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    ...components$1,
                ],
                imports: [
                    NbCheckboxModule,
                    NbAlertModule,
                    NbInputModule,
                    NbButtonModule,
                    NbIconModule,
                    CommonModule,
                    FormsModule,
                    TranslateModule,
                    ReactiveFormsModule,
                    HttpClientModule,
                    NgxaThemeModule,
                    NgxaLayoutAuthModule,
                    NgxaAuthRoutingModule,
                ],
                exports: [
                    ...components$1,
                ],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PageNotFoundComponent {
    /**
     * @param {?} location
     */
    constructor(location) {
        this.location = location;
    }
    /**
     * @return {?}
     */
    goToHome() {
        this.location.back();
        return;
    }
}
PageNotFoundComponent.decorators = [
    { type: Component, args: [{
                selector: 'xa-404',
                template: "<div class=\"flex-centered\">\n  <h2 class=\"title\">404</h2>\n  <h2 class=\"title\">Page Not Found</h2>\n  <small class=\"sub-title\">The page you were looking for doesn't exist</small>\n  <button nbButton fullWidth (click)=\"goToHome()\" type=\"button\" class=\"home-button\">\n    Take me home\n  </button>\n</div>\n",
                styles: [".flex-centered{margin:auto}nb-card-body{display:flex}.title{text-align:center}.sub-title{text-align:center;display:block;margin-bottom:3rem}.home-button{margin-bottom:2rem}"]
            }] }
];
/** @nocollapse */
PageNotFoundComponent.ctorParameters = () => [
    { type: Location }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    PageNotFoundComponent.prototype.location;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const routes$1 = [
    {
        path: '',
        component: AuthComponent,
        children: [
            {
                path: '404',
                component: PageNotFoundComponent,
            },
        ],
    },
];
class MiscellaneousRoutingModule {
}
MiscellaneousRoutingModule.decorators = [
    { type: NgModule, args: [{
                imports: [RouterModule.forChild(routes$1)],
                exports: [RouterModule],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MiscellaneousModule {
}
MiscellaneousModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    NbButtonModule,
                    NbIconModule,
                    CommonModule,
                    NgxaThemeModule,
                    NgxaLayoutAuthModule,
                    MiscellaneousRoutingModule,
                ],
                declarations: [
                    PageNotFoundComponent,
                ],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { AuthGuardChildService, AuthGuardService, AuthIndexedDBService, AuthSignatureService, AuthTokenService, AuthUserService, MiscellaneousModule, NgxaAuthModule, PageNotFoundComponent, ProfileIndexedDBService, SettingsIndexedDBService, UnauthorizeGuardService, LoginPageComponent as ɵa, LogoutComponent as ɵb, NgxaLayoutAuthModule as ɵc, AuthComponent as ɵd, AuthBlockComponent as ɵe, NgxaAuthRoutingModule as ɵf, HttpInterceptorTokenService as ɵg, HttpInterceptorSignatureService as ɵh, HttpInterceptorLangService as ɵi, AuthLanguageService as ɵj, HttpInterceptorErrorService as ɵk, HttpErrorHandler as ɵl, MiscellaneousRoutingModule as ɵm };
//# sourceMappingURL=xaphira-ngxa-auth.js.map
