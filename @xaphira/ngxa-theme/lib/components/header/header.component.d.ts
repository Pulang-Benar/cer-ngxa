import { OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SwPush } from '@angular/service-worker';
import { NbMediaBreakpointsService, NbSidebarService, NbThemeService, NbMenuItem } from '@nebular/theme';
import { TranslateService } from '@ngx-translate/core';
import { IndexedDBFactoryService, IndexedDBEncFactoryService, User, UserInfo, HttpFactoryService, PanicFactoryService, APIModel, SecurityResourceModel } from '@xaphira/shared';
import { LayoutService } from '../../services/layout.service';
export declare class HeaderComponent implements OnInit, OnDestroy {
    private sidebarService;
    private themeService;
    private layoutService;
    private breakpointService;
    private translate;
    private router;
    private userService;
    private authIndexedDB;
    private profileIndexedDB;
    private panicService;
    private http;
    private api;
    private oauthResource;
    private swPush;
    private destroy$;
    userPictureOnly: boolean;
    user: User;
    themes: {
        value: string;
        name: string;
    }[];
    currentTheme: string;
    userMenu: NbMenuItem[];
    constructor(sidebarService: NbSidebarService, themeService: NbThemeService, layoutService: LayoutService, breakpointService: NbMediaBreakpointsService, translate: TranslateService, router: Router, userService: UserInfo, authIndexedDB: IndexedDBEncFactoryService, profileIndexedDB: IndexedDBFactoryService, panicService: PanicFactoryService, http: HttpFactoryService, api: APIModel, oauthResource: SecurityResourceModel, swPush: SwPush);
    ngOnInit(): void;
    ngOnDestroy(): void;
    setMenu(): void;
    changeTheme(themeName: string): void;
    toggleSidebar(): boolean;
    navigateHome(): boolean;
}
