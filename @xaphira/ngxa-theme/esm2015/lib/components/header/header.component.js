/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { SwPush } from '@angular/service-worker';
import { map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { NbMediaBreakpointsService, NbSidebarService, NbThemeService } from '@nebular/theme';
import { TranslateService } from '@ngx-translate/core';
import { AUTH_INDEXED_DB, PROFILE_INDEXED_DB, PANIC, USER_INFO, UserInfo, HTTP_SERVICE, API, OAUTH_INFO, } from '@xaphira/shared';
import { LayoutService } from '../../services/layout.service';
export class HeaderComponent {
    /**
     * @param {?} sidebarService
     * @param {?} themeService
     * @param {?} layoutService
     * @param {?} breakpointService
     * @param {?} translate
     * @param {?} router
     * @param {?} userService
     * @param {?} authIndexedDB
     * @param {?} profileIndexedDB
     * @param {?} panicService
     * @param {?} http
     * @param {?} api
     * @param {?} oauthResource
     * @param {?} swPush
     */
    constructor(sidebarService, themeService, layoutService, breakpointService, translate, router, userService, authIndexedDB, profileIndexedDB, panicService, http, api, oauthResource, swPush) {
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
        () => {
            this.setMenu();
        }));
        Promise.all([
            this.profileIndexedDB.get('name'),
            this.profileIndexedDB.get('image-b64'),
        ]).then((/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            this.user = {
                name: value[0],
                picture: value[1],
            };
        }));
        if (this.swPush.isEnabled) {
            this.swPush.subscription.subscribe((/**
             * @param {?} subscription
             * @return {?}
             */
            (subscription) => {
                if (subscription === null) {
                    this.swPush.requestSubscription({ serverPublicKey: this.oauthResource.vapid })
                        .then((/**
                     * @param {?} pushSubscription
                     * @return {?}
                     */
                    (pushSubscription) => {
                        /** @type {?} */
                        const sub = JSON.parse(JSON.stringify(pushSubscription));
                        this.http.HTTP_AUTH(this.api['notification']['push-subscribe'], sub)
                            .subscribe((/**
                         * @param {?} response
                         * @return {?}
                         */
                        (response) => { }));
                    }));
                }
            }));
            this.swPush.messages.subscribe((/**
             * @param {?} message
             * @return {?}
             */
            (message) => {
                /** @type {?} */
                const data = JSON.parse(message.notification.data);
                if (data['panicCode'] || message.notification.tag === 'panic') {
                    this.panicService.notifyPanic(data);
                }
            }));
            this.swPush.notificationClicks.subscribe((/**
             * @param {?} __0
             * @return {?}
             */
            ({ action, notification }) => {
                console.log(action);
                console.log(notification);
            }));
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.currentTheme = this.themeService.currentTheme;
        this.userService.getUser()
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @param {?} user
         * @return {?}
         */
        (user) => this.user = user));
        const { xl } = this.breakpointService.getBreakpointsMap();
        this.themeService.onMediaQueryChange()
            .pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        ([, currentBreakpoint]) => currentBreakpoint.width < xl)), takeUntil(this.destroy$))
            .subscribe((/**
         * @param {?} isLessThanXl
         * @return {?}
         */
        (isLessThanXl) => this.userPictureOnly = isLessThanXl));
        this.themeService.onThemeChange()
            .pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        ({ name }) => name)), takeUntil(this.destroy$))
            .subscribe((/**
         * @param {?} themeName
         * @return {?}
         */
        themeName => this.currentTheme = themeName));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    /**
     * @return {?}
     */
    setMenu() {
        this.userMenu = [];
        this.userMenu.push({ title: '' });
        this.authIndexedDB.getEnc('extras').then((/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            /** @type {?} */
            const extras = JSON.parse(value);
            if (extras) {
                extras.forEach((/**
                 * @param {?} extra
                 * @return {?}
                 */
                extra => {
                    this.userMenu.push({ title: extra.title, link: extra.link });
                }));
            }
            this.translate.get('Logout').subscribe((/**
             * @param {?} result
             * @return {?}
             */
            (result) => {
                this.userMenu.push({ title: result, link: '/auth/logout' });
            }));
            this.userMenu.splice(0, 1);
        }));
    }
    /**
     * @param {?} themeName
     * @return {?}
     */
    changeTheme(themeName) {
        this.themeService.changeTheme(themeName);
    }
    /**
     * @return {?}
     */
    toggleSidebar() {
        this.sidebarService.toggle(true, 'menu-sidebar');
        this.layoutService.changeLayoutSize();
        return false;
    }
    /**
     * @return {?}
     */
    navigateHome() {
        this.router.navigate(['/app/home']);
        return false;
    }
}
HeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'xa-header',
                template: "<div class=\"header-container\">\n  <div class=\"logo-container\">\n    <a (click)=\"toggleSidebar()\" href=\"#\" class=\"sidebar-toggle\">\n      <nb-icon icon=\"menu-2-outline\"></nb-icon>\n    </a>\n    <a class=\"logo\" href=\"#\" (click)=\"navigateHome()\">\n      <nb-action class=\"icon-logo\" icon=\"home-outline\"></nb-action>\n      <span class=\"title-logo\">{{ 'Civilians Emergency Report' | translate }}</span>\n    </a>\n  </div>\n</div>\n\n<div class=\"header-container\">\n  <nb-actions size=\"small\">\n\n    <nb-action class=\"control-item\">\n      <nb-search type=\"rotate-layout\"></nb-search>\n    </nb-action>\n    <nb-action class=\"control-item\" icon=\"bell-outline\"></nb-action>\n    <nb-action class=\"user-action\" *nbIsGranted=\"['view', 'user']\" >\n      <nb-user [nbContextMenu]=\"userMenu\"\n               [onlyPicture]=\"userPictureOnly\"\n               [name]=\"user?.name\"\n               [picture]=\"user?.picture\">\n      </nb-user>\n    </nb-action>\n  </nb-actions>\n</div>\n",
                styles: ["/*!\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */.nb-theme-default :host{display:flex;justify-content:space-between;width:100%}.nb-theme-default :host .logo-container{display:flex;align-items:center}.nb-theme-default :host nb-action{height:auto;display:flex;align-content:center}.nb-theme-default :host nb-user{cursor:pointer}.nb-theme-default :host ::ng-deep nb-search button{padding:0!important}.nb-theme-default :host .header-container{display:flex;align-items:center;width:auto}.nb-theme-default :host .header-container .sidebar-toggle{text-decoration:none;color:#8f9bb3}[dir=ltr] .nb-theme-default :host .header-container .sidebar-toggle{padding-right:1.25rem}[dir=rtl] .nb-theme-default :host .header-container .sidebar-toggle{padding-left:1.25rem}.nb-theme-default :host .header-container .sidebar-toggle nb-icon{font-size:1.75rem}.nb-theme-default :host .header-container .logo{padding:0 1.25rem;font-size:1.75rem;white-space:nowrap;text-decoration:none}[dir=ltr] .nb-theme-default :host .header-container .logo{border-left:1px solid #edf1f7}[dir=rtl] .nb-theme-default :host .header-container .logo{border-right:1px solid #edf1f7}.nb-theme-default :host .icon-logo{display:none}@media (max-width:767.98px){.nb-theme-default :host .control-item{border:none;padding-left:5px}.nb-theme-default :host .user-action{border:none;padding:0}.nb-theme-default :host .title-logo{display:none}.nb-theme-default :host .icon-logo{display:unset}}@media (max-width:575.98px){.nb-theme-default :host nb-select{display:none}}.nb-theme-dark :host{display:flex;justify-content:space-between;width:100%}.nb-theme-dark :host .logo-container{display:flex;align-items:center}.nb-theme-dark :host nb-action{height:auto;display:flex;align-content:center}.nb-theme-dark :host nb-user{cursor:pointer}.nb-theme-dark :host ::ng-deep nb-search button{padding:0!important}.nb-theme-dark :host .header-container{display:flex;align-items:center;width:auto}.nb-theme-dark :host .header-container .sidebar-toggle{text-decoration:none;color:#8f9bb3}[dir=ltr] .nb-theme-dark :host .header-container .sidebar-toggle{padding-right:1.25rem}[dir=rtl] .nb-theme-dark :host .header-container .sidebar-toggle{padding-left:1.25rem}.nb-theme-dark :host .header-container .sidebar-toggle nb-icon{font-size:1.75rem}.nb-theme-dark :host .header-container .logo{padding:0 1.25rem;font-size:1.75rem;white-space:nowrap;text-decoration:none}[dir=ltr] .nb-theme-dark :host .header-container .logo{border-left:1px solid #151a30}[dir=rtl] .nb-theme-dark :host .header-container .logo{border-right:1px solid #151a30}.nb-theme-dark :host .icon-logo{display:none}@media (max-width:767.98px){.nb-theme-dark :host .control-item{border:none;padding-left:5px}.nb-theme-dark :host .user-action{border:none;padding:0}.nb-theme-dark :host .title-logo{display:none}.nb-theme-dark :host .icon-logo{display:unset}}@media (max-width:575.98px){.nb-theme-dark :host nb-select{display:none}}.nb-theme-cosmic :host{display:flex;justify-content:space-between;width:100%}.nb-theme-cosmic :host .logo-container{display:flex;align-items:center}.nb-theme-cosmic :host nb-action{height:auto;display:flex;align-content:center}.nb-theme-cosmic :host nb-user{cursor:pointer}.nb-theme-cosmic :host ::ng-deep nb-search button{padding:0!important}.nb-theme-cosmic :host .header-container{display:flex;align-items:center;width:auto}.nb-theme-cosmic :host .header-container .sidebar-toggle{text-decoration:none;color:#b4b4db}[dir=ltr] .nb-theme-cosmic :host .header-container .sidebar-toggle{padding-right:1.25rem}[dir=rtl] .nb-theme-cosmic :host .header-container .sidebar-toggle{padding-left:1.25rem}.nb-theme-cosmic :host .header-container .sidebar-toggle nb-icon{font-size:1.75rem}.nb-theme-cosmic :host .header-container .logo{padding:0 1.25rem;font-size:1.75rem;white-space:nowrap;text-decoration:none}[dir=ltr] .nb-theme-cosmic :host .header-container .logo{border-left:1px solid #1b1b38}[dir=rtl] .nb-theme-cosmic :host .header-container .logo{border-right:1px solid #1b1b38}.nb-theme-cosmic :host .icon-logo{display:none}@media (max-width:767.98px){.nb-theme-cosmic :host .control-item{border:none;padding-left:5px}.nb-theme-cosmic :host .user-action{border:none;padding:0}.nb-theme-cosmic :host .title-logo{display:none}.nb-theme-cosmic :host .icon-logo{display:unset}}@media (max-width:575.98px){.nb-theme-cosmic :host nb-select{display:none}}.nb-theme-corporate :host{display:flex;justify-content:space-between;width:100%}.nb-theme-corporate :host .logo-container{display:flex;align-items:center}.nb-theme-corporate :host nb-action{height:auto;display:flex;align-content:center}.nb-theme-corporate :host nb-user{cursor:pointer}.nb-theme-corporate :host ::ng-deep nb-search button{padding:0!important}.nb-theme-corporate :host .header-container{display:flex;align-items:center;width:auto}.nb-theme-corporate :host .header-container .sidebar-toggle{text-decoration:none;color:#8f9bb3}[dir=ltr] .nb-theme-corporate :host .header-container .sidebar-toggle{padding-right:1.25rem}[dir=rtl] .nb-theme-corporate :host .header-container .sidebar-toggle{padding-left:1.25rem}.nb-theme-corporate :host .header-container .sidebar-toggle nb-icon{font-size:1.75rem}.nb-theme-corporate :host .header-container .logo{padding:0 1.25rem;font-size:1.75rem;white-space:nowrap;text-decoration:none}[dir=ltr] .nb-theme-corporate :host .header-container .logo{border-left:1px solid #edf1f7}[dir=rtl] .nb-theme-corporate :host .header-container .logo{border-right:1px solid #edf1f7}.nb-theme-corporate :host .icon-logo{display:none}@media (max-width:767.98px){.nb-theme-corporate :host .control-item{border:none;padding-left:5px}.nb-theme-corporate :host .user-action{border:none;padding:0}.nb-theme-corporate :host .title-logo{display:none}.nb-theme-corporate :host .icon-logo{display:unset}}@media (max-width:575.98px){.nb-theme-corporate :host nb-select{display:none}}"]
            }] }
];
/** @nocollapse */
HeaderComponent.ctorParameters = () => [
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
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B4YXBoaXJhL25neGEtdGhlbWUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDakQsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxnQkFBZ0IsRUFBRSxjQUFjLEVBQWMsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RCxPQUFPLEVBR0wsZUFBZSxFQUNmLGtCQUFrQixFQUNsQixLQUFLLEVBQ0wsU0FBUyxFQUVULFFBQVEsRUFDUixZQUFZLEVBSVosR0FBRyxFQUVILFVBQVUsR0FFWCxNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQU85RCxNQUFNLE9BQU8sZUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7SUE2QjFCLFlBQW9CLGNBQWdDLEVBQ2hDLFlBQTRCLEVBQzVCLGFBQTRCLEVBQzVCLGlCQUE0QyxFQUM1QyxTQUEyQixFQUMzQixNQUFjLEVBQ0ssV0FBcUIsRUFDZixhQUF5QyxFQUN0QyxnQkFBeUMsRUFDdEQsWUFBaUMsRUFDMUIsSUFBd0IsRUFDakMsR0FBYSxFQUNOLGFBQW9DLEVBQ3hELE1BQWM7UUFiZCxtQkFBYyxHQUFkLGNBQWMsQ0FB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TSxTQUFDLEdBQUc7NENBQ1YsTUFBTSxTQUFDLFVBQVU7WUF2RXZCLE1BQU07Ozs7Ozs7SUFnQ2IsbUNBQXNEOztJQUN0RCwwQ0FBaUM7O0lBQ2pDLCtCQUFXOztJQUVYLGlDQWlCRTs7SUFFRix1Q0FBeUI7O0lBRXpCLG1DQUE0Qjs7Ozs7SUFFaEIseUNBQXdDOzs7OztJQUN4Qyx1Q0FBb0M7Ozs7O0lBQ3BDLHdDQUFvQzs7Ozs7SUFDcEMsNENBQW9EOzs7OztJQUNwRCxvQ0FBbUM7Ozs7O0lBQ25DLGlDQUFzQjs7Ozs7SUFDdEIsc0NBQWdEOzs7OztJQUNoRCx3Q0FBMEU7Ozs7O0lBQzFFLDJDQUE2RTs7Ozs7SUFDN0UsdUNBQXdEOzs7OztJQUN4RCwrQkFBc0Q7Ozs7O0lBQ3RELDhCQUFrQzs7Ozs7SUFDbEMsd0NBQWdFOzs7OztJQUNoRSxpQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTd1B1c2ggfSBmcm9tICdAYW5ndWxhci9zZXJ2aWNlLXdvcmtlcic7XG5pbXBvcnQgeyBtYXAsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE5iTWVkaWFCcmVha3BvaW50c1NlcnZpY2UsIE5iU2lkZWJhclNlcnZpY2UsIE5iVGhlbWVTZXJ2aWNlLCBOYk1lbnVJdGVtIH0gZnJvbSAnQG5lYnVsYXIvdGhlbWUnO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuaW1wb3J0IHtcbiAgSW5kZXhlZERCRmFjdG9yeVNlcnZpY2UsXG4gIEluZGV4ZWREQkVuY0ZhY3RvcnlTZXJ2aWNlLFxuICBBVVRIX0lOREVYRURfREIsXG4gIFBST0ZJTEVfSU5ERVhFRF9EQixcbiAgUEFOSUMsXG4gIFVTRVJfSU5GTyxcbiAgVXNlcixcbiAgVXNlckluZm8sXG4gIEhUVFBfU0VSVklDRSxcbiAgSHR0cEZhY3RvcnlTZXJ2aWNlLFxuICBQYW5pY0ZhY3RvcnlTZXJ2aWNlLFxuICBBUElNb2RlbCxcbiAgQVBJLFxuICBBcGlCYXNlUmVzcG9uc2UsXG4gIE9BVVRIX0lORk8sXG4gIFNlY3VyaXR5UmVzb3VyY2VNb2RlbCxcbn0gZnJvbSAnQHhhcGhpcmEvc2hhcmVkJztcbmltcG9ydCB7IExheW91dFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9sYXlvdXQuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3hhLWhlYWRlcicsXG4gIHN0eWxlVXJsczogWycuL2hlYWRlci5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vaGVhZGVyLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgSGVhZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gIHByaXZhdGUgZGVzdHJveSQ6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICB1c2VyUGljdHVyZU9ubHk6IGJvb2xlYW4gPSBmYWxzZTtcbiAgdXNlcjogVXNlcjtcblxuICB0aGVtZXMgPSBbXG4gICAge1xuICAgICAgdmFsdWU6ICdkZWZhdWx0JyxcbiAgICAgIG5hbWU6ICdMaWdodCcsXG4gICAgfSxcbiAgICB7XG4gICAgICB2YWx1ZTogJ2RhcmsnLFxuICAgICAgbmFtZTogJ0RhcmsnLFxuICAgIH0sXG4gICAge1xuICAgICAgdmFsdWU6ICdjb3NtaWMnLFxuICAgICAgbmFtZTogJ0Nvc21pYycsXG4gICAgfSxcbiAgICB7XG4gICAgICB2YWx1ZTogJ2NvcnBvcmF0ZScsXG4gICAgICBuYW1lOiAnQ29ycG9yYXRlJyxcbiAgICB9LFxuICBdO1xuXG4gIGN1cnJlbnRUaGVtZSA9ICdkZWZhdWx0JztcblxuICB1c2VyTWVudTogTmJNZW51SXRlbVtdID0gW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzaWRlYmFyU2VydmljZTogTmJTaWRlYmFyU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSB0aGVtZVNlcnZpY2U6IE5iVGhlbWVTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIGxheW91dFNlcnZpY2U6IExheW91dFNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgYnJlYWtwb2ludFNlcnZpY2U6IE5iTWVkaWFCcmVha3BvaW50c1NlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgICAgICAgICBASW5qZWN0KFVTRVJfSU5GTykgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlckluZm8sXG4gICAgICAgICAgICAgIEBJbmplY3QoQVVUSF9JTkRFWEVEX0RCKSBwcml2YXRlIGF1dGhJbmRleGVkREI6IEluZGV4ZWREQkVuY0ZhY3RvcnlTZXJ2aWNlLFxuICAgICAgICAgICAgICBASW5qZWN0KFBST0ZJTEVfSU5ERVhFRF9EQikgcHJpdmF0ZSBwcm9maWxlSW5kZXhlZERCOiBJbmRleGVkREJGYWN0b3J5U2VydmljZSxcbiAgICAgICAgICAgICAgQEluamVjdChQQU5JQykgcHJpdmF0ZSBwYW5pY1NlcnZpY2U6IFBhbmljRmFjdG9yeVNlcnZpY2UsXG4gICAgICAgICAgICAgIEBJbmplY3QoSFRUUF9TRVJWSUNFKSBwcml2YXRlIGh0dHA6IEh0dHBGYWN0b3J5U2VydmljZSxcbiAgICAgICAgICAgICAgQEluamVjdChBUEkpIHByaXZhdGUgYXBpOiBBUElNb2RlbCxcbiAgICAgICAgICAgICAgQEluamVjdChPQVVUSF9JTkZPKSBwcml2YXRlIG9hdXRoUmVzb3VyY2U6IFNlY3VyaXR5UmVzb3VyY2VNb2RlbCxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBzd1B1c2g6IFN3UHVzaCkge1xuICAgICAgdGhpcy5zZXRNZW51KCk7XG4gICAgICB0aGlzLnRyYW5zbGF0ZS5vblRyYW5zbGF0aW9uQ2hhbmdlLnRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKVxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICB0aGlzLnNldE1lbnUoKTtcbiAgICAgIH0pO1xuICAgICAgUHJvbWlzZS5hbGwoW1xuICAgICAgICB0aGlzLnByb2ZpbGVJbmRleGVkREIuZ2V0KCduYW1lJyksXG4gICAgICAgIHRoaXMucHJvZmlsZUluZGV4ZWREQi5nZXQoJ2ltYWdlLWI2NCcpLFxuICAgICAgXSkudGhlbigodmFsdWU6IGFueVtdKSA9PiB7XG4gICAgICAgIHRoaXMudXNlciA9IHtcbiAgICAgICAgICBuYW1lOiB2YWx1ZVswXSxcbiAgICAgICAgICBwaWN0dXJlOiB2YWx1ZVsxXSxcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgICAgaWYgKHRoaXMuc3dQdXNoLmlzRW5hYmxlZCkge1xuICAgICAgICB0aGlzLnN3UHVzaC5zdWJzY3JpcHRpb24uc3Vic2NyaWJlKChzdWJzY3JpcHRpb246IFB1c2hTdWJzY3JpcHRpb24pID0+IHtcbiAgICAgICAgICBpZiAoc3Vic2NyaXB0aW9uID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnN3UHVzaC5yZXF1ZXN0U3Vic2NyaXB0aW9uKHtzZXJ2ZXJQdWJsaWNLZXk6IHRoaXMub2F1dGhSZXNvdXJjZS52YXBpZH0pXG4gICAgICAgICAgICAgIC50aGVuKChwdXNoU3Vic2NyaXB0aW9uOiBQdXNoU3Vic2NyaXB0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3ViOiBhbnkgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHB1c2hTdWJzY3JpcHRpb24pKTtcbiAgICAgICAgICAgICAgICB0aGlzLmh0dHAuSFRUUF9BVVRIKHRoaXMuYXBpWydub3RpZmljYXRpb24nXVsncHVzaC1zdWJzY3JpYmUnXSwgc3ViKVxuICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZSgocmVzcG9uc2U6IEFwaUJhc2VSZXNwb25zZSkgPT4ge30pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zd1B1c2gubWVzc2FnZXMuc3Vic2NyaWJlKChtZXNzYWdlOiB7bm90aWZpY2F0aW9uOiBOb3RpZmljYXRpb25PcHRpb25zfSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGRhdGE6IGFueSA9IEpTT04ucGFyc2UobWVzc2FnZS5ub3RpZmljYXRpb24uZGF0YSk7XG4gICAgICAgICAgaWYgKGRhdGFbJ3BhbmljQ29kZSddIHx8IG1lc3NhZ2Uubm90aWZpY2F0aW9uLnRhZyA9PT0gJ3BhbmljJykge1xuICAgICAgICAgICAgdGhpcy5wYW5pY1NlcnZpY2Uubm90aWZ5UGFuaWMoZGF0YSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zd1B1c2gubm90aWZpY2F0aW9uQ2xpY2tzLnN1YnNjcmliZSgoe2FjdGlvbiwgbm90aWZpY2F0aW9ufSkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGFjdGlvbik7XG4gICAgICAgICAgY29uc29sZS5sb2cobm90aWZpY2F0aW9uKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmN1cnJlbnRUaGVtZSA9IHRoaXMudGhlbWVTZXJ2aWNlLmN1cnJlbnRUaGVtZTtcbiAgICB0aGlzLnVzZXJTZXJ2aWNlLmdldFVzZXIoKVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgLnN1YnNjcmliZSgodXNlcjogVXNlcikgPT4gdGhpcy51c2VyID0gdXNlcik7XG5cbiAgICBjb25zdCB7IHhsIH0gPSB0aGlzLmJyZWFrcG9pbnRTZXJ2aWNlLmdldEJyZWFrcG9pbnRzTWFwKCk7XG4gICAgdGhpcy50aGVtZVNlcnZpY2Uub25NZWRpYVF1ZXJ5Q2hhbmdlKClcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoKFssIGN1cnJlbnRCcmVha3BvaW50XSkgPT4gY3VycmVudEJyZWFrcG9pbnQud2lkdGggPCB4bCksXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSxcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKGlzTGVzc1RoYW5YbDogYm9vbGVhbikgPT4gdGhpcy51c2VyUGljdHVyZU9ubHkgPSBpc0xlc3NUaGFuWGwpO1xuXG4gICAgdGhpcy50aGVtZVNlcnZpY2Uub25UaGVtZUNoYW5nZSgpXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKCh7IG5hbWUgfSkgPT4gbmFtZSksXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSxcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUodGhlbWVOYW1lID0+IHRoaXMuY3VycmVudFRoZW1lID0gdGhlbWVOYW1lKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxuXG4gIHNldE1lbnUoKSB7XG4gICAgdGhpcy51c2VyTWVudSA9IFtdO1xuICAgIHRoaXMudXNlck1lbnUucHVzaCh7IHRpdGxlOiAnJyB9KTtcbiAgICB0aGlzLmF1dGhJbmRleGVkREIuZ2V0RW5jKCdleHRyYXMnKS50aGVuKCh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBleHRyYXM6IGFueVtdID0gSlNPTi5wYXJzZSh2YWx1ZSk7XG4gICAgICBpZiAoZXh0cmFzKSB7XG4gICAgICAgIGV4dHJhcy5mb3JFYWNoKGV4dHJhID0+IHtcbiAgICAgICAgICB0aGlzLnVzZXJNZW51LnB1c2goeyB0aXRsZTogZXh0cmEudGl0bGUsIGxpbmsgOiBleHRyYS5saW5rIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMudHJhbnNsYXRlLmdldCgnTG9nb3V0Jykuc3Vic2NyaWJlKChyZXN1bHQ6IHN0cmluZykgPT4ge1xuICAgICAgICB0aGlzLnVzZXJNZW51LnB1c2goeyB0aXRsZTogcmVzdWx0LCBsaW5rIDogJy9hdXRoL2xvZ291dCcgfSk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMudXNlck1lbnUuc3BsaWNlKDAsIDEpO1xuICAgIH0pO1xuICB9XG5cbiAgY2hhbmdlVGhlbWUodGhlbWVOYW1lOiBzdHJpbmcpIHtcbiAgICB0aGlzLnRoZW1lU2VydmljZS5jaGFuZ2VUaGVtZSh0aGVtZU5hbWUpO1xuICB9XG5cbiAgdG9nZ2xlU2lkZWJhcigpOiBib29sZWFuIHtcbiAgICB0aGlzLnNpZGViYXJTZXJ2aWNlLnRvZ2dsZSh0cnVlLCAnbWVudS1zaWRlYmFyJyk7XG4gICAgdGhpcy5sYXlvdXRTZXJ2aWNlLmNoYW5nZUxheW91dFNpemUoKTtcblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIG5hdmlnYXRlSG9tZSgpIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9hcHAvaG9tZSddKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiJdfQ==