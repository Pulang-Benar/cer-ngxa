/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { SwPush } from '@angular/service-worker';
import { map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { NbMediaBreakpointsService, NbSidebarService, NbThemeService } from '@nebular/theme';
import { TranslateService } from '@ngx-translate/core';
import { AUTH_INDEXED_DB, PROFILE_INDEXED_DB, PANIC, USER_INFO, UserInfo, HTTP_SERVICE, API, OAUTH_INFO, } from '@xaphira/shared';
import { LayoutService } from '../../services/layout.service';
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(sidebarService, themeService, layoutService, breakpointService, translate, router, userService, authIndexedDB, profileIndexedDB, panicService, http, api, oauthResource, swPush) {
        var _this = this;
        this.sidebarService = sidebarService;
        this.themeService = themeService;
        this.layoutService = layoutService;
        this.breakpointService = breakpointService;
        this.translate = translate;
        this.router = router;
        this.userService = userService;
        this.authIndexedDB = authIndexedDB;
        this.profileIndexedDB = profileIndexedDB;
        this.panicService = panicService;
        this.http = http;
        this.api = api;
        this.oauthResource = oauthResource;
        this.swPush = swPush;
        this.destroy$ = new Subject();
        this.userPictureOnly = false;
        this.themes = [
            {
                value: 'default',
                name: 'Light',
            },
            {
                value: 'dark',
                name: 'Dark',
            },
            {
                value: 'cosmic',
                name: 'Cosmic',
            },
            {
                value: 'corporate',
                name: 'Corporate',
            },
        ];
        this.currentTheme = 'default';
        this.userMenu = [];
        this.setMenu();
        this.translate.onTranslationChange.takeUntil(this.destroy$)
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this.setMenu();
        }));
        Promise.all([
            this.profileIndexedDB.get('name'),
            this.profileIndexedDB.get('image-b64'),
        ]).then((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            _this.user = {
                name: value[0],
                picture: value[1],
            };
        }));
        if (this.swPush.isEnabled) {
            this.swPush.subscription.subscribe((/**
             * @param {?} subscription
             * @return {?}
             */
            function (subscription) {
                if (subscription === null) {
                    _this.swPush.requestSubscription({ serverPublicKey: _this.oauthResource.vapid })
                        .then((/**
                     * @param {?} pushSubscription
                     * @return {?}
                     */
                    function (pushSubscription) {
                        /** @type {?} */
                        var sub = JSON.parse(JSON.stringify(pushSubscription));
                        _this.http.HTTP_AUTH(_this.api['notification']['push-subscribe'], sub)
                            .subscribe((/**
                         * @param {?} response
                         * @return {?}
                         */
                        function (response) { }));
                    }));
                }
            }));
            this.swPush.messages.subscribe((/**
             * @param {?} message
             * @return {?}
             */
            function (message) {
                /** @type {?} */
                var data = JSON.parse(message.notification.data);
                if (data['panicCode'] || message.notification.tag === 'panic') {
                    _this.panicService.notifyPanic(data);
                }
            }));
            this.swPush.notificationClicks.subscribe((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var action = _a.action, notification = _a.notification;
                console.log(action);
                console.log(notification);
            }));
        }
    }
    /**
     * @return {?}
     */
    HeaderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.currentTheme = this.themeService.currentTheme;
        this.userService.getUser()
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @param {?} user
         * @return {?}
         */
        function (user) { return _this.user = user; }));
        var xl = this.breakpointService.getBreakpointsMap().xl;
        this.themeService.onMediaQueryChange()
            .pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), currentBreakpoint = _b[1];
            return currentBreakpoint.width < xl;
        })), takeUntil(this.destroy$))
            .subscribe((/**
         * @param {?} isLessThanXl
         * @return {?}
         */
        function (isLessThanXl) { return _this.userPictureOnly = isLessThanXl; }));
        this.themeService.onThemeChange()
            .pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var name = _a.name;
            return name;
        })), takeUntil(this.destroy$))
            .subscribe((/**
         * @param {?} themeName
         * @return {?}
         */
        function (themeName) { return _this.currentTheme = themeName; }));
    };
    /**
     * @return {?}
     */
    HeaderComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    /**
     * @return {?}
     */
    HeaderComponent.prototype.setMenu = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.userMenu = [];
        this.userMenu.push({ title: '' });
        this.authIndexedDB.getEnc('extras').then((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /** @type {?} */
            var extras = JSON.parse(value);
            if (extras) {
                extras.forEach((/**
                 * @param {?} extra
                 * @return {?}
                 */
                function (extra) {
                    _this.userMenu.push({ title: extra.title, link: extra.link });
                }));
            }
            _this.translate.get('Logout').subscribe((/**
             * @param {?} result
             * @return {?}
             */
            function (result) {
                _this.userMenu.push({ title: result, link: '/auth/logout' });
            }));
            _this.userMenu.splice(0, 1);
        }));
    };
    /**
     * @param {?} themeName
     * @return {?}
     */
    HeaderComponent.prototype.changeTheme = /**
     * @param {?} themeName
     * @return {?}
     */
    function (themeName) {
        this.themeService.changeTheme(themeName);
    };
    /**
     * @return {?}
     */
    HeaderComponent.prototype.toggleSidebar = /**
     * @return {?}
     */
    function () {
        this.sidebarService.toggle(true, 'menu-sidebar');
        this.layoutService.changeLayoutSize();
        return false;
    };
    /**
     * @return {?}
     */
    HeaderComponent.prototype.navigateHome = /**
     * @return {?}
     */
    function () {
        this.router.navigate(['/app/home']);
        return false;
    };
    HeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'xa-header',
                    template: "<div class=\"header-container\">\n  <div class=\"logo-container\">\n    <a (click)=\"toggleSidebar()\" href=\"#\" class=\"sidebar-toggle\">\n      <nb-icon icon=\"menu-2-outline\"></nb-icon>\n    </a>\n    <a class=\"logo\" href=\"#\" (click)=\"navigateHome()\">\n      <nb-action class=\"icon-logo\" icon=\"home-outline\"></nb-action>\n      <span class=\"title-logo\">{{ 'Civilians Emergency Report' | translate }}</span>\n    </a>\n  </div>\n</div>\n\n<div class=\"header-container\">\n  <nb-actions size=\"small\">\n\n    <nb-action class=\"control-item\">\n      <nb-search type=\"rotate-layout\"></nb-search>\n    </nb-action>\n    <nb-action class=\"control-item\" icon=\"bell-outline\"></nb-action>\n    <nb-action class=\"user-action\" *nbIsGranted=\"['view', 'user']\" >\n      <nb-user [nbContextMenu]=\"userMenu\"\n               [onlyPicture]=\"userPictureOnly\"\n               [name]=\"user?.name\"\n               [picture]=\"user?.picture\">\n      </nb-user>\n    </nb-action>\n  </nb-actions>\n</div>\n",
                    styles: ["/*!\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */.nb-theme-default :host{display:flex;justify-content:space-between;width:100%}.nb-theme-default :host .logo-container{display:flex;align-items:center}.nb-theme-default :host nb-action{height:auto;display:flex;align-content:center}.nb-theme-default :host nb-user{cursor:pointer}.nb-theme-default :host ::ng-deep nb-search button{padding:0!important}.nb-theme-default :host .header-container{display:flex;align-items:center;width:auto}.nb-theme-default :host .header-container .sidebar-toggle{text-decoration:none;color:#8f9bb3}[dir=ltr] .nb-theme-default :host .header-container .sidebar-toggle{padding-right:1.25rem}[dir=rtl] .nb-theme-default :host .header-container .sidebar-toggle{padding-left:1.25rem}.nb-theme-default :host .header-container .sidebar-toggle nb-icon{font-size:1.75rem}.nb-theme-default :host .header-container .logo{padding:0 1.25rem;font-size:1.75rem;white-space:nowrap;text-decoration:none}[dir=ltr] .nb-theme-default :host .header-container .logo{border-left:1px solid #edf1f7}[dir=rtl] .nb-theme-default :host .header-container .logo{border-right:1px solid #edf1f7}.nb-theme-default :host .icon-logo{display:none}@media (max-width:767.98px){.nb-theme-default :host .control-item{border:none;padding-left:5px}.nb-theme-default :host .user-action{border:none;padding:0}.nb-theme-default :host .title-logo{display:none}.nb-theme-default :host .icon-logo{display:unset}}@media (max-width:575.98px){.nb-theme-default :host nb-select{display:none}}.nb-theme-dark :host{display:flex;justify-content:space-between;width:100%}.nb-theme-dark :host .logo-container{display:flex;align-items:center}.nb-theme-dark :host nb-action{height:auto;display:flex;align-content:center}.nb-theme-dark :host nb-user{cursor:pointer}.nb-theme-dark :host ::ng-deep nb-search button{padding:0!important}.nb-theme-dark :host .header-container{display:flex;align-items:center;width:auto}.nb-theme-dark :host .header-container .sidebar-toggle{text-decoration:none;color:#8f9bb3}[dir=ltr] .nb-theme-dark :host .header-container .sidebar-toggle{padding-right:1.25rem}[dir=rtl] .nb-theme-dark :host .header-container .sidebar-toggle{padding-left:1.25rem}.nb-theme-dark :host .header-container .sidebar-toggle nb-icon{font-size:1.75rem}.nb-theme-dark :host .header-container .logo{padding:0 1.25rem;font-size:1.75rem;white-space:nowrap;text-decoration:none}[dir=ltr] .nb-theme-dark :host .header-container .logo{border-left:1px solid #151a30}[dir=rtl] .nb-theme-dark :host .header-container .logo{border-right:1px solid #151a30}.nb-theme-dark :host .icon-logo{display:none}@media (max-width:767.98px){.nb-theme-dark :host .control-item{border:none;padding-left:5px}.nb-theme-dark :host .user-action{border:none;padding:0}.nb-theme-dark :host .title-logo{display:none}.nb-theme-dark :host .icon-logo{display:unset}}@media (max-width:575.98px){.nb-theme-dark :host nb-select{display:none}}.nb-theme-cosmic :host{display:flex;justify-content:space-between;width:100%}.nb-theme-cosmic :host .logo-container{display:flex;align-items:center}.nb-theme-cosmic :host nb-action{height:auto;display:flex;align-content:center}.nb-theme-cosmic :host nb-user{cursor:pointer}.nb-theme-cosmic :host ::ng-deep nb-search button{padding:0!important}.nb-theme-cosmic :host .header-container{display:flex;align-items:center;width:auto}.nb-theme-cosmic :host .header-container .sidebar-toggle{text-decoration:none;color:#b4b4db}[dir=ltr] .nb-theme-cosmic :host .header-container .sidebar-toggle{padding-right:1.25rem}[dir=rtl] .nb-theme-cosmic :host .header-container .sidebar-toggle{padding-left:1.25rem}.nb-theme-cosmic :host .header-container .sidebar-toggle nb-icon{font-size:1.75rem}.nb-theme-cosmic :host .header-container .logo{padding:0 1.25rem;font-size:1.75rem;white-space:nowrap;text-decoration:none}[dir=ltr] .nb-theme-cosmic :host .header-container .logo{border-left:1px solid #1b1b38}[dir=rtl] .nb-theme-cosmic :host .header-container .logo{border-right:1px solid #1b1b38}.nb-theme-cosmic :host .icon-logo{display:none}@media (max-width:767.98px){.nb-theme-cosmic :host .control-item{border:none;padding-left:5px}.nb-theme-cosmic :host .user-action{border:none;padding:0}.nb-theme-cosmic :host .title-logo{display:none}.nb-theme-cosmic :host .icon-logo{display:unset}}@media (max-width:575.98px){.nb-theme-cosmic :host nb-select{display:none}}.nb-theme-corporate :host{display:flex;justify-content:space-between;width:100%}.nb-theme-corporate :host .logo-container{display:flex;align-items:center}.nb-theme-corporate :host nb-action{height:auto;display:flex;align-content:center}.nb-theme-corporate :host nb-user{cursor:pointer}.nb-theme-corporate :host ::ng-deep nb-search button{padding:0!important}.nb-theme-corporate :host .header-container{display:flex;align-items:center;width:auto}.nb-theme-corporate :host .header-container .sidebar-toggle{text-decoration:none;color:#8f9bb3}[dir=ltr] .nb-theme-corporate :host .header-container .sidebar-toggle{padding-right:1.25rem}[dir=rtl] .nb-theme-corporate :host .header-container .sidebar-toggle{padding-left:1.25rem}.nb-theme-corporate :host .header-container .sidebar-toggle nb-icon{font-size:1.75rem}.nb-theme-corporate :host .header-container .logo{padding:0 1.25rem;font-size:1.75rem;white-space:nowrap;text-decoration:none}[dir=ltr] .nb-theme-corporate :host .header-container .logo{border-left:1px solid #edf1f7}[dir=rtl] .nb-theme-corporate :host .header-container .logo{border-right:1px solid #edf1f7}.nb-theme-corporate :host .icon-logo{display:none}@media (max-width:767.98px){.nb-theme-corporate :host .control-item{border:none;padding-left:5px}.nb-theme-corporate :host .user-action{border:none;padding:0}.nb-theme-corporate :host .title-logo{display:none}.nb-theme-corporate :host .icon-logo{display:unset}}@media (max-width:575.98px){.nb-theme-corporate :host nb-select{display:none}}"]
                }] }
    ];
    /** @nocollapse */
    HeaderComponent.ctorParameters = function () { return [
        { type: NbSidebarService },
        { type: NbThemeService },
        { type: LayoutService },
        { type: NbMediaBreakpointsService },
        { type: TranslateService },
        { type: Router },
        { type: UserInfo, decorators: [{ type: Inject, args: [USER_INFO,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [AUTH_INDEXED_DB,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [PROFILE_INDEXED_DB,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [PANIC,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [HTTP_SERVICE,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [API,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [OAUTH_INFO,] }] },
        { type: SwPush }
    ]; };
    return HeaderComponent;
}());
export { HeaderComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    HeaderComponent.prototype.destroy$;
    /** @type {?} */
    HeaderComponent.prototype.userPictureOnly;
    /** @type {?} */
    HeaderComponent.prototype.user;
    /** @type {?} */
    HeaderComponent.prototype.themes;
    /** @type {?} */
    HeaderComponent.prototype.currentTheme;
    /** @type {?} */
    HeaderComponent.prototype.userMenu;
    /**
     * @type {?}
     * @private
     */
    HeaderComponent.prototype.sidebarService;
    /**
     * @type {?}
     * @private
     */
    HeaderComponent.prototype.themeService;
    /**
     * @type {?}
     * @private
     */
    HeaderComponent.prototype.layoutService;
    /**
     * @type {?}
     * @private
     */
    HeaderComponent.prototype.breakpointService;
    /**
     * @type {?}
     * @private
     */
    HeaderComponent.prototype.translate;
    /**
     * @type {?}
     * @private
     */
    HeaderComponent.prototype.router;
    /**
     * @type {?}
     * @private
     */
    HeaderComponent.prototype.userService;
    /**
     * @type {?}
     * @private
     */
    HeaderComponent.prototype.authIndexedDB;
    /**
     * @type {?}
     * @private
     */
    HeaderComponent.prototype.profileIndexedDB;
    /**
     * @type {?}
     * @private
     */
    HeaderComponent.prototype.panicService;
    /**
     * @type {?}
     * @private
     */
    HeaderComponent.prototype.http;
    /**
     * @type {?}
     * @private
     */
    HeaderComponent.prototype.api;
    /**
     * @type {?}
     * @private
     */
    HeaderComponent.prototype.oauthResource;
    /**
     * @type {?}
     * @private
     */
    HeaderComponent.prototype.swPush;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B4YXBoaXJhL25neGEtdGhlbWUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUseUJBQXlCLEVBQUUsZ0JBQWdCLEVBQUUsY0FBYyxFQUFjLE1BQU0sZ0JBQWdCLENBQUM7QUFDekcsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUdMLGVBQWUsRUFDZixrQkFBa0IsRUFDbEIsS0FBSyxFQUNMLFNBQVMsRUFFVCxRQUFRLEVBQ1IsWUFBWSxFQUlaLEdBQUcsRUFFSCxVQUFVLEdBRVgsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFOUQ7SUFrQ0UseUJBQW9CLGNBQWdDLEVBQ2hDLFlBQTRCLEVBQzVCLGFBQTRCLEVBQzVCLGlCQUE0QyxFQUM1QyxTQUEyQixFQUMzQixNQUFjLEVBQ0ssV0FBcUIsRUFDZixhQUF5QyxFQUN0QyxnQkFBeUMsRUFDdEQsWUFBaUMsRUFDMUIsSUFBd0IsRUFDakMsR0FBYSxFQUNOLGFBQW9DLEVBQ3hELE1BQWM7UUFibEMsaUJBa0RDO1FBbERtQixtQkFBYyxHQUFkLGNBQWMsQ0FBa0I7UUFDaEMsaUJBQVks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TUFBTSxTQUFDLFVBQVU7Z0JBdkV2QixNQUFNOztJQTBLZixzQkFBQztDQUFBLEFBakpELElBaUpDO1NBNUlZLGVBQWU7Ozs7OztJQUUxQixtQ0FBc0Q7O0lBQ3RELDBDQUFpQzs7SUFDakMsK0JBQVc7O0lBRVgsaUNBaUJFOztJQUVGLHVDQUF5Qjs7SUFFekIsbUNBQTRCOzs7OztJQUVoQix5Q0FBd0M7Ozs7O0lBQ3hDLHVDQUFvQzs7Ozs7SUFDcEMsd0NBQW9DOzs7OztJQUNwQyw0Q0FBb0Q7Ozs7O0lBQ3BELG9DQUFtQzs7Ozs7SUFDbkMsaUNBQXNCOzs7OztJQUN0QixzQ0FBZ0Q7Ozs7O0lBQ2hELHdDQUEwRTs7Ozs7SUFDMUUsMkNBQTZFOzs7OztJQUM3RSx1Q0FBd0Q7Ozs7O0lBQ3hELCtCQUFzRDs7Ozs7SUFDdEQsOEJBQWtDOzs7OztJQUNsQyx3Q0FBZ0U7Ozs7O0lBQ2hFLGlDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFN3UHVzaCB9IGZyb20gJ0Bhbmd1bGFyL3NlcnZpY2Utd29ya2VyJztcbmltcG9ydCB7IG1hcCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgTmJNZWRpYUJyZWFrcG9pbnRzU2VydmljZSwgTmJTaWRlYmFyU2VydmljZSwgTmJUaGVtZVNlcnZpY2UsIE5iTWVudUl0ZW0gfSBmcm9tICdAbmVidWxhci90aGVtZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5pbXBvcnQge1xuICBJbmRleGVkREJGYWN0b3J5U2VydmljZSxcbiAgSW5kZXhlZERCRW5jRmFjdG9yeVNlcnZpY2UsXG4gIEFVVEhfSU5ERVhFRF9EQixcbiAgUFJPRklMRV9JTkRFWEVEX0RCLFxuICBQQU5JQyxcbiAgVVNFUl9JTkZPLFxuICBVc2VyLFxuICBVc2VySW5mbyxcbiAgSFRUUF9TRVJWSUNFLFxuICBIdHRwRmFjdG9yeVNlcnZpY2UsXG4gIFBhbmljRmFjdG9yeVNlcnZpY2UsXG4gIEFQSU1vZGVsLFxuICBBUEksXG4gIEFwaUJhc2VSZXNwb25zZSxcbiAgT0FVVEhfSU5GTyxcbiAgU2VjdXJpdHlSZXNvdXJjZU1vZGVsLFxufSBmcm9tICdAeGFwaGlyYS9zaGFyZWQnO1xuaW1wb3J0IHsgTGF5b3V0U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2xheW91dC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAneGEtaGVhZGVyJyxcbiAgc3R5bGVVcmxzOiBbJy4vaGVhZGVyLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9oZWFkZXIuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBIZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgcHJpdmF0ZSBkZXN0cm95JDogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIHVzZXJQaWN0dXJlT25seTogYm9vbGVhbiA9IGZhbHNlO1xuICB1c2VyOiBVc2VyO1xuXG4gIHRoZW1lcyA9IFtcbiAgICB7XG4gICAgICB2YWx1ZTogJ2RlZmF1bHQnLFxuICAgICAgbmFtZTogJ0xpZ2h0JyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHZhbHVlOiAnZGFyaycsXG4gICAgICBuYW1lOiAnRGFyaycsXG4gICAgfSxcbiAgICB7XG4gICAgICB2YWx1ZTogJ2Nvc21pYycsXG4gICAgICBuYW1lOiAnQ29zbWljJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHZhbHVlOiAnY29ycG9yYXRlJyxcbiAgICAgIG5hbWU6ICdDb3Jwb3JhdGUnLFxuICAgIH0sXG4gIF07XG5cbiAgY3VycmVudFRoZW1lID0gJ2RlZmF1bHQnO1xuXG4gIHVzZXJNZW51OiBOYk1lbnVJdGVtW10gPSBbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNpZGViYXJTZXJ2aWNlOiBOYlNpZGViYXJTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIHRoZW1lU2VydmljZTogTmJUaGVtZVNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgbGF5b3V0U2VydmljZTogTGF5b3V0U2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBicmVha3BvaW50U2VydmljZTogTmJNZWRpYUJyZWFrcG9pbnRzU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSB0cmFuc2xhdGU6IFRyYW5zbGF0ZVNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgICAgICAgIEBJbmplY3QoVVNFUl9JTkZPKSBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VySW5mbyxcbiAgICAgICAgICAgICAgQEluamVjdChBVVRIX0lOREVYRURfREIpIHByaXZhdGUgYXV0aEluZGV4ZWREQjogSW5kZXhlZERCRW5jRmFjdG9yeVNlcnZpY2UsXG4gICAgICAgICAgICAgIEBJbmplY3QoUFJPRklMRV9JTkRFWEVEX0RCKSBwcml2YXRlIHByb2ZpbGVJbmRleGVkREI6IEluZGV4ZWREQkZhY3RvcnlTZXJ2aWNlLFxuICAgICAgICAgICAgICBASW5qZWN0KFBBTklDKSBwcml2YXRlIHBhbmljU2VydmljZTogUGFuaWNGYWN0b3J5U2VydmljZSxcbiAgICAgICAgICAgICAgQEluamVjdChIVFRQX1NFUlZJQ0UpIHByaXZhdGUgaHR0cDogSHR0cEZhY3RvcnlTZXJ2aWNlLFxuICAgICAgICAgICAgICBASW5qZWN0KEFQSSkgcHJpdmF0ZSBhcGk6IEFQSU1vZGVsLFxuICAgICAgICAgICAgICBASW5qZWN0KE9BVVRIX0lORk8pIHByaXZhdGUgb2F1dGhSZXNvdXJjZTogU2VjdXJpdHlSZXNvdXJjZU1vZGVsLFxuICAgICAgICAgICAgICBwcml2YXRlIHN3UHVzaDogU3dQdXNoKSB7XG4gICAgICB0aGlzLnNldE1lbnUoKTtcbiAgICAgIHRoaXMudHJhbnNsYXRlLm9uVHJhbnNsYXRpb25DaGFuZ2UudGFrZVVudGlsKHRoaXMuZGVzdHJveSQpXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0TWVudSgpO1xuICAgICAgfSk7XG4gICAgICBQcm9taXNlLmFsbChbXG4gICAgICAgIHRoaXMucHJvZmlsZUluZGV4ZWREQi5nZXQoJ25hbWUnKSxcbiAgICAgICAgdGhpcy5wcm9maWxlSW5kZXhlZERCLmdldCgnaW1hZ2UtYjY0JyksXG4gICAgICBdKS50aGVuKCh2YWx1ZTogYW55W10pID0+IHtcbiAgICAgICAgdGhpcy51c2VyID0ge1xuICAgICAgICAgIG5hbWU6IHZhbHVlWzBdLFxuICAgICAgICAgIHBpY3R1cmU6IHZhbHVlWzFdLFxuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgICBpZiAodGhpcy5zd1B1c2guaXNFbmFibGVkKSB7XG4gICAgICAgIHRoaXMuc3dQdXNoLnN1YnNjcmlwdGlvbi5zdWJzY3JpYmUoKHN1YnNjcmlwdGlvbjogUHVzaFN1YnNjcmlwdGlvbikgPT4ge1xuICAgICAgICAgIGlmIChzdWJzY3JpcHRpb24gPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuc3dQdXNoLnJlcXVlc3RTdWJzY3JpcHRpb24oe3NlcnZlclB1YmxpY0tleTogdGhpcy5vYXV0aFJlc291cmNlLnZhcGlkfSlcbiAgICAgICAgICAgICAgLnRoZW4oKHB1c2hTdWJzY3JpcHRpb246IFB1c2hTdWJzY3JpcHRpb24pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdWI6IGFueSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkocHVzaFN1YnNjcmlwdGlvbikpO1xuICAgICAgICAgICAgICAgIHRoaXMuaHR0cC5IVFRQX0FVVEgodGhpcy5hcGlbJ25vdGlmaWNhdGlvbiddWydwdXNoLXN1YnNjcmliZSddLCBzdWIpXG4gICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKChyZXNwb25zZTogQXBpQmFzZVJlc3BvbnNlKSA9PiB7fSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnN3UHVzaC5tZXNzYWdlcy5zdWJzY3JpYmUoKG1lc3NhZ2U6IHtub3RpZmljYXRpb246IE5vdGlmaWNhdGlvbk9wdGlvbnN9KSA9PiB7XG4gICAgICAgICAgY29uc3QgZGF0YTogYW55ID0gSlNPTi5wYXJzZShtZXNzYWdlLm5vdGlmaWNhdGlvbi5kYXRhKTtcbiAgICAgICAgICBpZiAoZGF0YVsncGFuaWNDb2RlJ10gfHwgbWVzc2FnZS5ub3RpZmljYXRpb24udGFnID09PSAncGFuaWMnKSB7XG4gICAgICAgICAgICB0aGlzLnBhbmljU2VydmljZS5ub3RpZnlQYW5pYyhkYXRhKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnN3UHVzaC5ub3RpZmljYXRpb25DbGlja3Muc3Vic2NyaWJlKCh7YWN0aW9uLCBub3RpZmljYXRpb259KSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coYWN0aW9uKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhub3RpZmljYXRpb24pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuY3VycmVudFRoZW1lID0gdGhpcy50aGVtZVNlcnZpY2UuY3VycmVudFRoZW1lO1xuICAgIHRoaXMudXNlclNlcnZpY2UuZ2V0VXNlcigpXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAuc3Vic2NyaWJlKCh1c2VyOiBVc2VyKSA9PiB0aGlzLnVzZXIgPSB1c2VyKTtcblxuICAgIGNvbnN0IHsgeGwgfSA9IHRoaXMuYnJlYWtwb2ludFNlcnZpY2UuZ2V0QnJlYWtwb2ludHNNYXAoKTtcbiAgICB0aGlzLnRoZW1lU2VydmljZS5vbk1lZGlhUXVlcnlDaGFuZ2UoKVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgoWywgY3VycmVudEJyZWFrcG9pbnRdKSA9PiBjdXJyZW50QnJlYWtwb2ludC53aWR0aCA8IHhsKSxcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpLFxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoaXNMZXNzVGhhblhsOiBib29sZWFuKSA9PiB0aGlzLnVzZXJQaWN0dXJlT25seSA9IGlzTGVzc1RoYW5YbCk7XG5cbiAgICB0aGlzLnRoZW1lU2VydmljZS5vblRoZW1lQ2hhbmdlKClcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoKHsgbmFtZSB9KSA9PiBuYW1lKSxcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpLFxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSh0aGVtZU5hbWUgPT4gdGhpcy5jdXJyZW50VGhlbWUgPSB0aGVtZU5hbWUpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgc2V0TWVudSgpIHtcbiAgICB0aGlzLnVzZXJNZW51ID0gW107XG4gICAgdGhpcy51c2VyTWVudS5wdXNoKHsgdGl0bGU6ICcnIH0pO1xuICAgIHRoaXMuYXV0aEluZGV4ZWREQi5nZXRFbmMoJ2V4dHJhcycpLnRoZW4oKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGV4dHJhczogYW55W10gPSBKU09OLnBhcnNlKHZhbHVlKTtcbiAgICAgIGlmIChleHRyYXMpIHtcbiAgICAgICAgZXh0cmFzLmZvckVhY2goZXh0cmEgPT4ge1xuICAgICAgICAgIHRoaXMudXNlck1lbnUucHVzaCh7IHRpdGxlOiBleHRyYS50aXRsZSwgbGluayA6IGV4dHJhLmxpbmsgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgdGhpcy50cmFuc2xhdGUuZ2V0KCdMb2dvdXQnKS5zdWJzY3JpYmUoKHJlc3VsdDogc3RyaW5nKSA9PiB7XG4gICAgICAgIHRoaXMudXNlck1lbnUucHVzaCh7IHRpdGxlOiByZXN1bHQsIGxpbmsgOiAnL2F1dGgvbG9nb3V0JyB9KTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy51c2VyTWVudS5zcGxpY2UoMCwgMSk7XG4gICAgfSk7XG4gIH1cblxuICBjaGFuZ2VUaGVtZSh0aGVtZU5hbWU6IHN0cmluZykge1xuICAgIHRoaXMudGhlbWVTZXJ2aWNlLmNoYW5nZVRoZW1lKHRoZW1lTmFtZSk7XG4gIH1cblxuICB0b2dnbGVTaWRlYmFyKCk6IGJvb2xlYW4ge1xuICAgIHRoaXMuc2lkZWJhclNlcnZpY2UudG9nZ2xlKHRydWUsICdtZW51LXNpZGViYXInKTtcbiAgICB0aGlzLmxheW91dFNlcnZpY2UuY2hhbmdlTGF5b3V0U2l6ZSgpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgbmF2aWdhdGVIb21lKCkge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2FwcC9ob21lJ10pO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIl19