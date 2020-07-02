/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Injector, Inject } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { TranslateService } from '@ngx-translate/core';
import { BaseFormComponent } from '@xaphira/ngxa-common';
import { AUTH_INDEXED_DB, SETTINGS_INDEXED_DB, } from '@xaphira/shared';
import { ResponseCode } from '@xaphira/shared';
export class SettingsPageComponent extends BaseFormComponent {
    /**
     * @param {?} injector
     * @param {?} translate
     * @param {?} themeService
     * @param {?} settingsIndexedDB
     * @param {?} authIndexedDB
     */
    constructor(injector, translate, themeService, settingsIndexedDB, authIndexedDB) {
        super(injector, {
            'locale': [],
            'theme': [],
        });
        this.injector = injector;
        this.translate = translate;
        this.themeService = themeService;
        this.settingsIndexedDB = settingsIndexedDB;
        this.authIndexedDB = authIndexedDB;
        this.dataTheme = [
            {
                selected: false,
            },
        ];
        this.apiSelectLocale = this.api['master']['select-all-locale'];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.onInit('security', 'get-settings');
    }
    /**
     * @return {?}
     */
    ngOnDestroy() { }
    /**
     * @param {?} serviceName
     * @param {?} apiName
     * @return {?}
     */
    onInit(serviceName, apiName) {
        this.loadingForm = true;
        this.exec(serviceName, apiName)
            .subscribe((/**
         * @param {?} success
         * @return {?}
         */
        (success) => {
            this.loadingForm = false;
            this.localeCode = success['localeCode'];
            this.localeIdentifier = success['localeIdentifier'];
            this.localeIcon = success['localeIcon'] ? success['localeIcon'] : '';
            this.formGroup.controls['locale'].setValue(this.localeIdentifier);
            /** @type {?} */
            let darkMode = [{
                    selected: false,
                }];
            if (success['theme'] === 'dark') {
                darkMode = [{
                        selected: true,
                    }];
            }
            this.formGroup.controls['theme'].setValue(darkMode);
            this.formGroup.markAsPristine();
        }), (/**
         * @param {?} error
         * @return {?}
         */
        (error) => {
            this.loadingForm = true;
            if (error.respStatusMessage)
                this.toastr.showI18n(error.respStatusMessage[error.respStatusCode], true, null, 'danger');
        }));
    }
    /**
     * @return {?}
     */
    onSubmit() {
        if (this.formGroup.get('locale').value['value']) {
            this.localeCode = this.formGroup.get('locale').value['value'];
            this.localeIdentifier = this.formGroup.get('locale').value['label'];
            this.localeIcon = this.formGroup.get('locale').value['icon'];
        }
        /** @type {?} */
        const theme = this.formGroup.get('theme').value;
        /** @type {?} */
        const data = {
            'localeCode': this.localeCode,
            'localeIdentifier': this.localeIdentifier,
            'localeIcon': this.localeIcon,
            'theme': theme[0].selected ? 'dark' : 'default',
        };
        this.disabled = true;
        Promise.all([
            this.settingsIndexedDB.get('locale'),
            this.settingsIndexedDB.get('theme'),
        ]).then((/**
         * @param {?} current
         * @return {?}
         */
        (current) => {
            if ((current[0] !== this.localeCode) || (current[1] !== data['theme'])) {
                this.exec('security', 'change-settings', data).subscribe((/**
                 * @param {?} success
                 * @return {?}
                 */
                (success) => {
                    if (success) {
                        if (success.respStatusCode === ResponseCode.OK_SCR002.toString()) {
                            if (theme) {
                                this.changeTheme(theme[0].selected);
                            }
                            if (current[0] !== this.localeCode) {
                                this.settingsIndexedDB.put('locale', this.localeCode).then((/**
                                 * @return {?}
                                 */
                                () => {
                                    this.http.HTTP_AUTH(this.api['security']['get-menus']).subscribe((/**
                                     * @param {?} menus
                                     * @return {?}
                                     */
                                    (menus) => {
                                        Promise.all([
                                            this.authIndexedDB.putEnc('menus', JSON.stringify(menus['main'])),
                                            this.authIndexedDB.putEnc('extras', JSON.stringify(menus['extra'])),
                                        ]).then((/**
                                         * @return {?}
                                         */
                                        () => {
                                            this.translate.getTranslation(this.localeCode).subscribe((/**
                                             * @param {?} lang
                                             * @return {?}
                                             */
                                            (lang) => {
                                                this.translate.use(this.localeCode);
                                                this.translate.setTranslation(this.localeCode, lang, true);
                                                this.toastr.showI18n(success.respStatusMessage[success.respStatusCode], true);
                                                this.disabled = false;
                                                this.formGroup.markAsPristine();
                                            }));
                                        }));
                                    }), (/**
                                     * @param {?} error
                                     * @return {?}
                                     */
                                    (error) => {
                                        this.toastr.showI18n('error.translate', false, null, 'warning');
                                    }));
                                }));
                            }
                        }
                    }
                }), (/**
                 * @param {?} error
                 * @return {?}
                 */
                (error) => {
                    this.disabled = false;
                    this.toastr.showI18n(error.respStatusMessage[error.respStatusCode], true, null, 'danger');
                }));
            }
        }));
    }
    /**
     * @param {?} dark
     * @return {?}
     */
    changeTheme(dark) {
        /** @type {?} */
        const theme = dark ? 'dark' : 'default';
        this.settingsIndexedDB.put('theme', theme).then();
        this.themeService.changeTheme(theme);
    }
}
SettingsPageComponent.decorators = [
    { type: Component, args: [{
                selector: 'xa-settings-page',
                template: "<xa-page-outlet [header]=\"'Settings'\">\n  <form [formGroup]=\"formGroup\">\n    <xa-select\n      [name]=\"'locale'\"\n      [label]=\"'Locale'\"\n      [required]=\"true\"\n      [searchable]=\"false\"\n      [skeleton]=\"loadingForm\"\n      [api]=\"apiSelectLocale\"\n      formControlName=\"locale\">\n      <div *xaContentSelect=\"let item\">\n        <span class=\"{{item.icon ? item.icon : localeIcon}}\"></span>\n        <span class=\"label-select\">{{item.label ? item.label : item}}</span>\n      </div>\n    </xa-select>\n    <xa-checkbox\n      [name]=\"'checkbox'\"\n      [label]=\"'Dark Mode'\"\n      [data]=\"dataTheme\"\n      [skeleton]=\"loadingForm\"\n      formControlName=\"theme\">\n    </xa-checkbox>\n    <xa-button-submit\n      (onSubmit)=\"onSubmit()\"\n      [name]=\"'Update Settings'\"\n      [formGroupButton]=\"formGroup\"\n      [disabledButton]=\"disabled\"\n      [skeleton]=\"loadingForm\">\n    </xa-button-submit>\n  </form>\n</xa-page-outlet>\n",
                styles: [".label-select{padding-left:.5rem}"]
            }] }
];
/** @nocollapse */
SettingsPageComponent.ctorParameters = () => [
    { type: Injector },
    { type: TranslateService },
    { type: NbThemeService },
    { type: undefined, decorators: [{ type: Inject, args: [SETTINGS_INDEXED_DB,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [AUTH_INDEXED_DB,] }] }
];
if (false) {
    /** @type {?} */
    SettingsPageComponent.prototype.apiSelectLocale;
    /** @type {?} */
    SettingsPageComponent.prototype.localeIcon;
    /**
     * @type {?}
     * @private
     */
    SettingsPageComponent.prototype.localeCode;
    /**
     * @type {?}
     * @private
     */
    SettingsPageComponent.prototype.localeIdentifier;
    /** @type {?} */
    SettingsPageComponent.prototype.dataTheme;
    /** @type {?} */
    SettingsPageComponent.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    SettingsPageComponent.prototype.translate;
    /**
     * @type {?}
     * @private
     */
    SettingsPageComponent.prototype.themeService;
    /**
     * @type {?}
     * @private
     */
    SettingsPageComponent.prototype.settingsIndexedDB;
    /**
     * @type {?}
     * @private
     */
    SettingsPageComponent.prototype.authIndexedDB;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3MtcGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AeGFwaGlyYS9uZ3hhLWV4dHJhLyIsInNvdXJjZXMiOlsibGliL3NldHRpbmdzL3NldHRpbmdzLXBhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RCxPQUFPLEVBQWlCLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEUsT0FBTyxFQUtMLGVBQWUsRUFDZixtQkFBbUIsR0FDcEIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFPL0MsTUFBTSxPQUFPLHFCQUFzQixTQUFRLGlCQUFzQjs7Ozs7Ozs7SUFZL0QsWUFDUyxRQUFrQixFQUNqQixTQUEyQixFQUMzQixZQUE0QixFQUNDLGlCQUEwQyxFQUM5QyxhQUF5QztRQUN4RSxLQUFLLENBQUMsUUFBUSxFQUFFO1lBQ2QsUUFBUSxFQUFFLEVBQUU7WUFDWixPQUFPLEVBQUUsRUFBRTtTQUNaLENBQUMsQ0FBQztRQVJFLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDakIsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFDM0IsaUJBQVksR0FBWixZQUFZLENBQWdCO1FBQ0Msc0JBQWlCLEdBQWpCLGlCQUFpQixDQUF5QjtRQUM5QyxrQkFBYSxHQUFiLGFBQWEsQ0FBNEI7UUFYNUUsY0FBUyxHQUFvQjtZQUMzQjtnQkFDRSxRQUFRLEVBQUUsS0FBSzthQUNoQjtTQUNGLENBQUM7UUFZRSxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsUUFB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QUMsQ0FBQzs2QkFDSjt5QkFDRjtxQkFDRjtnQkFDSCxDQUFDOzs7O2dCQUNELENBQUMsS0FBc0IsRUFBRSxFQUFFO29CQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztvQkFDdEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO2dCQUM5RixDQUFDLEVBQ0YsQ0FBQzthQUNIO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxJQUFhOztjQUNqQixLQUFLLEdBQVcsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFNBQVM7UUFDL0MsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7O1lBaklGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUU1Qix1K0JBQTZDOzthQUM5Qzs7OztZQWxCc0MsUUFBUTtZQUV0QyxnQkFBZ0I7WUFEaEIsY0FBYzs0Q0FrQ2xCLE1BQU0sU0FBQyxtQkFBbUI7NENBQzFCLE1BQU0sU0FBQyxlQUFlOzs7O0lBZnpCLGdEQUFzQzs7SUFDdEMsMkNBQTBCOzs7OztJQUMxQiwyQ0FBd0I7Ozs7O0lBQ3hCLGlEQUE4Qjs7SUFDOUIsMENBSUU7O0lBR0EseUNBQXlCOzs7OztJQUN6QiwwQ0FBbUM7Ozs7O0lBQ25DLDZDQUFvQzs7Ozs7SUFDcEMsa0RBQStFOzs7OztJQUMvRSw4Q0FBMEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95LCBJbmplY3RvciwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYlRoZW1lU2VydmljZSB9IGZyb20gJ0BuZWJ1bGFyL3RoZW1lJztcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcbmltcG9ydCB7IENoZWNrYm94TW9kZWwsIEJhc2VGb3JtQ29tcG9uZW50IH0gZnJvbSAnQHhhcGhpcmEvbmd4YS1jb21tb24nO1xuaW1wb3J0IHtcbiAgSHR0cEJhc2VNb2RlbCxcbiAgQXBpQmFzZVJlc3BvbnNlLFxuICBJbmRleGVkREJGYWN0b3J5U2VydmljZSxcbiAgSW5kZXhlZERCRW5jRmFjdG9yeVNlcnZpY2UsXG4gIEFVVEhfSU5ERVhFRF9EQixcbiAgU0VUVElOR1NfSU5ERVhFRF9EQixcbn0gZnJvbSAnQHhhcGhpcmEvc2hhcmVkJztcbmltcG9ydCB7IFJlc3BvbnNlQ29kZSB9IGZyb20gJ0B4YXBoaXJhL3NoYXJlZCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3hhLXNldHRpbmdzLXBhZ2UnLFxuICBzdHlsZVVybHM6IFsnLi9zZXR0aW5ncy1wYWdlLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9zZXR0aW5ncy1wYWdlLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgU2V0dGluZ3NQYWdlQ29tcG9uZW50IGV4dGVuZHMgQmFzZUZvcm1Db21wb25lbnQ8YW55PiBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICBwdWJsaWMgYXBpU2VsZWN0TG9jYWxlOiBIdHRwQmFzZU1vZGVsO1xuICBwdWJsaWMgbG9jYWxlSWNvbjogc3RyaW5nO1xuICBwcml2YXRlIGxvY2FsZUNvZGU6IGFueTtcbiAgcHJpdmF0ZSBsb2NhbGVJZGVudGlmaWVyOiBhbnk7XG4gIGRhdGFUaGVtZTogQ2hlY2tib3hNb2RlbFtdID0gW1xuICAgIHtcbiAgICAgIHNlbGVjdGVkOiBmYWxzZSxcbiAgICB9LFxuICBdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgcHJpdmF0ZSB0cmFuc2xhdGU6IFRyYW5zbGF0ZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSB0aGVtZVNlcnZpY2U6IE5iVGhlbWVTZXJ2aWNlLFxuICAgIEBJbmplY3QoU0VUVElOR1NfSU5ERVhFRF9EQikgcHJpdmF0ZSBzZXR0aW5nc0luZGV4ZWREQjogSW5kZXhlZERCRmFjdG9yeVNlcnZpY2UsXG4gICAgQEluamVjdChBVVRIX0lOREVYRURfREIpIHByaXZhdGUgYXV0aEluZGV4ZWREQjogSW5kZXhlZERCRW5jRmFjdG9yeVNlcnZpY2UpIHtcbiAgICAgIHN1cGVyKGluamVjdG9yLCB7XG4gICAgICAgICdsb2NhbGUnOiBbXSxcbiAgICAgICAgJ3RoZW1lJzogW10sXG4gICAgICB9KTtcbiAgICAgIHRoaXMuYXBpU2VsZWN0TG9jYWxlID0gdGhpcy5hcGlbJ21hc3RlciddWydzZWxlY3QtYWxsLWxvY2FsZSddO1xuICAgIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLm9uSW5pdCgnc2VjdXJpdHknLCAnZ2V0LXNldHRpbmdzJyk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHt9XG5cbiAgb25Jbml0KHNlcnZpY2VOYW1lOiBzdHJpbmcsIGFwaU5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMubG9hZGluZ0Zvcm0gPSB0cnVlO1xuICAgIHRoaXMuZXhlYyhzZXJ2aWNlTmFtZSwgYXBpTmFtZSlcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChzdWNjZXNzOiBhbnkpID0+IHtcbiAgICAgICAgICB0aGlzLmxvYWRpbmdGb3JtID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5sb2NhbGVDb2RlID0gc3VjY2Vzc1snbG9jYWxlQ29kZSddO1xuICAgICAgICAgIHRoaXMubG9jYWxlSWRlbnRpZmllciA9IHN1Y2Nlc3NbJ2xvY2FsZUlkZW50aWZpZXInXTtcbiAgICAgICAgICB0aGlzLmxvY2FsZUljb24gPSBzdWNjZXNzWydsb2NhbGVJY29uJ10gPyBzdWNjZXNzWydsb2NhbGVJY29uJ10gOiAnJztcbiAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1snbG9jYWxlJ10uc2V0VmFsdWUodGhpcy5sb2NhbGVJZGVudGlmaWVyKTtcbiAgICAgICAgICBsZXQgZGFya01vZGU6IENoZWNrYm94TW9kZWxbXSA9IFt7XG4gICAgICAgICAgICBzZWxlY3RlZDogZmFsc2UsXG4gICAgICAgICAgfV07XG4gICAgICAgICAgaWYgKHN1Y2Nlc3NbJ3RoZW1lJ10gPT09ICdkYXJrJykge1xuICAgICAgICAgICAgZGFya01vZGUgPSBbe1xuICAgICAgICAgICAgICBzZWxlY3RlZDogdHJ1ZSxcbiAgICAgICAgICAgIH1dO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1sndGhlbWUnXS5zZXRWYWx1ZShkYXJrTW9kZSk7XG4gICAgICAgICAgdGhpcy5mb3JtR3JvdXAubWFya0FzUHJpc3RpbmUoKTtcbiAgICAgICAgfSxcbiAgICAgICAgKGVycm9yOiBBcGlCYXNlUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICB0aGlzLmxvYWRpbmdGb3JtID0gdHJ1ZTtcbiAgICAgICAgICBpZiAoZXJyb3IucmVzcFN0YXR1c01lc3NhZ2UpXG4gICAgICAgICAgICB0aGlzLnRvYXN0ci5zaG93STE4bihlcnJvci5yZXNwU3RhdHVzTWVzc2FnZVtlcnJvci5yZXNwU3RhdHVzQ29kZV0sIHRydWUsIG51bGwsICdkYW5nZXInKTtcbiAgICAgICAgfSxcbiAgICAgICk7XG4gIH1cblxuICBvblN1Ym1pdCgpIHtcbiAgICBpZiAodGhpcy5mb3JtR3JvdXAuZ2V0KCdsb2NhbGUnKS52YWx1ZVsndmFsdWUnXSkge1xuICAgICAgdGhpcy5sb2NhbGVDb2RlID0gdGhpcy5mb3JtR3JvdXAuZ2V0KCdsb2NhbGUnKS52YWx1ZVsndmFsdWUnXTtcbiAgICAgIHRoaXMubG9jYWxlSWRlbnRpZmllciA9IHRoaXMuZm9ybUdyb3VwLmdldCgnbG9jYWxlJykudmFsdWVbJ2xhYmVsJ107XG4gICAgICB0aGlzLmxvY2FsZUljb24gPSB0aGlzLmZvcm1Hcm91cC5nZXQoJ2xvY2FsZScpLnZhbHVlWydpY29uJ107XG4gICAgfVxuICAgIGNvbnN0IHRoZW1lOiBDaGVja2JveE1vZGVsW10gPSB0aGlzLmZvcm1Hcm91cC5nZXQoJ3RoZW1lJykudmFsdWU7XG4gICAgY29uc3QgZGF0YTogYW55ID0ge1xuICAgICAgJ2xvY2FsZUNvZGUnOiB0aGlzLmxvY2FsZUNvZGUsXG4gICAgICAnbG9jYWxlSWRlbnRpZmllcic6IHRoaXMubG9jYWxlSWRlbnRpZmllcixcbiAgICAgICdsb2NhbGVJY29uJzogdGhpcy5sb2NhbGVJY29uLFxuICAgICAgJ3RoZW1lJzogdGhlbWVbMF0uc2VsZWN0ZWQgPyAnZGFyaycgOiAnZGVmYXVsdCcsXG4gICAgfTtcbiAgICB0aGlzLmRpc2FibGVkID0gdHJ1ZTtcbiAgICBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLnNldHRpbmdzSW5kZXhlZERCLmdldCgnbG9jYWxlJyksXG4gICAgICB0aGlzLnNldHRpbmdzSW5kZXhlZERCLmdldCgndGhlbWUnKSxcbiAgICBdKS50aGVuKChjdXJyZW50OiBhbnlbXSkgPT4ge1xuICAgICAgaWYgKChjdXJyZW50WzBdICE9PSB0aGlzLmxvY2FsZUNvZGUpIHx8IChjdXJyZW50WzFdICE9PSBkYXRhWyd0aGVtZSddKSkge1xuICAgICAgICB0aGlzLmV4ZWMoJ3NlY3VyaXR5JywgJ2NoYW5nZS1zZXR0aW5ncycsIGRhdGEpLnN1YnNjcmliZShcbiAgICAgICAgICAoc3VjY2VzczogQXBpQmFzZVJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgICAgICAgICBpZiAoc3VjY2Vzcy5yZXNwU3RhdHVzQ29kZSA9PT0gUmVzcG9uc2VDb2RlLk9LX1NDUjAwMi50b1N0cmluZygpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoZW1lKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVRoZW1lKHRoZW1lWzBdLnNlbGVjdGVkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRbMF0gIT09IHRoaXMubG9jYWxlQ29kZSkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5zZXR0aW5nc0luZGV4ZWREQi5wdXQoJ2xvY2FsZScsIHRoaXMubG9jYWxlQ29kZSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaHR0cC5IVFRQX0FVVEgodGhpcy5hcGlbJ3NlY3VyaXR5J11bJ2dldC1tZW51cyddKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgICAgICAgKG1lbnVzOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hdXRoSW5kZXhlZERCLnB1dEVuYygnbWVudXMnLCBKU09OLnN0cmluZ2lmeShtZW51c1snbWFpbiddKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXV0aEluZGV4ZWREQi5wdXRFbmMoJ2V4dHJhcycsIEpTT04uc3RyaW5naWZ5KG1lbnVzWydleHRyYSddKSksXG4gICAgICAgICAgICAgICAgICAgICAgICBdKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50cmFuc2xhdGUuZ2V0VHJhbnNsYXRpb24odGhpcy5sb2NhbGVDb2RlKS5zdWJzY3JpYmUoKGxhbmc6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudHJhbnNsYXRlLnVzZSh0aGlzLmxvY2FsZUNvZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudHJhbnNsYXRlLnNldFRyYW5zbGF0aW9uKHRoaXMubG9jYWxlQ29kZSwgbGFuZywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b2FzdHIuc2hvd0kxOG4oc3VjY2Vzcy5yZXNwU3RhdHVzTWVzc2FnZVtzdWNjZXNzLnJlc3BTdGF0dXNDb2RlXSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybUdyb3VwLm1hcmtBc1ByaXN0aW5lKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAoZXJyb3I6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b2FzdHIuc2hvd0kxOG4oJ2Vycm9yLnRyYW5zbGF0ZScsIGZhbHNlLCBudWxsLCAnd2FybmluZycpO1xuICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICAoZXJyb3I6IEFwaUJhc2VSZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgIHRoaXMudG9hc3RyLnNob3dJMThuKGVycm9yLnJlc3BTdGF0dXNNZXNzYWdlW2Vycm9yLnJlc3BTdGF0dXNDb2RlXSwgdHJ1ZSwgbnVsbCwgJ2RhbmdlcicpO1xuICAgICAgICAgIH0sXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBjaGFuZ2VUaGVtZShkYXJrOiBib29sZWFuKSB7XG4gICAgY29uc3QgdGhlbWU6IHN0cmluZyA9IGRhcmsgPyAnZGFyaycgOiAnZGVmYXVsdCc7XG4gICAgdGhpcy5zZXR0aW5nc0luZGV4ZWREQi5wdXQoJ3RoZW1lJywgdGhlbWUpLnRoZW4oKTtcbiAgICB0aGlzLnRoZW1lU2VydmljZS5jaGFuZ2VUaGVtZSh0aGVtZSk7XG4gIH1cblxufVxuIl19