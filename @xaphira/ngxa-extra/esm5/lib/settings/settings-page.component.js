/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Injector, Inject } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { TranslateService } from '@ngx-translate/core';
import { BaseFormComponent } from '@xaphira/ngxa-common';
import { AUTH_INDEXED_DB, SETTINGS_INDEXED_DB, } from '@xaphira/shared';
import { ResponseCode } from '@xaphira/shared';
var SettingsPageComponent = /** @class */ (function (_super) {
    tslib_1.__extends(SettingsPageComponent, _super);
    function SettingsPageComponent(injector, translate, themeService, settingsIndexedDB, authIndexedDB) {
        var _this = _super.call(this, injector, {
            'locale': [],
            'theme': [],
        }) || this;
        _this.injector = injector;
        _this.translate = translate;
        _this.themeService = themeService;
        _this.settingsIndexedDB = settingsIndexedDB;
        _this.authIndexedDB = authIndexedDB;
        _this.dataTheme = [
            {
                selected: false,
            },
        ];
        _this.apiSelectLocale = _this.api['master']['select-all-locale'];
        return _this;
    }
    /**
     * @return {?}
     */
    SettingsPageComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.onInit('security', 'get-settings');
    };
    /**
     * @return {?}
     */
    SettingsPageComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} serviceName
     * @param {?} apiName
     * @return {?}
     */
    SettingsPageComponent.prototype.onInit = /**
     * @param {?} serviceName
     * @param {?} apiName
     * @return {?}
     */
    function (serviceName, apiName) {
        var _this = this;
        this.loadingForm = true;
        this.exec(serviceName, apiName)
            .subscribe((/**
         * @param {?} success
         * @return {?}
         */
        function (success) {
            _this.loadingForm = false;
            _this.localeCode = success['localeCode'];
            _this.localeIdentifier = success['localeIdentifier'];
            _this.localeIcon = success['localeIcon'] ? success['localeIcon'] : '';
            _this.formGroup.controls['locale'].setValue(_this.localeIdentifier);
            /** @type {?} */
            var darkMode = [{
                    selected: false,
                }];
            if (success['theme'] === 'dark') {
                darkMode = [{
                        selected: true,
                    }];
            }
            _this.formGroup.controls['theme'].setValue(darkMode);
            _this.formGroup.markAsPristine();
        }), (/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            _this.loadingForm = true;
            if (error.respStatusMessage)
                _this.toastr.showI18n(error.respStatusMessage[error.respStatusCode], true, null, 'danger');
        }));
    };
    /**
     * @return {?}
     */
    SettingsPageComponent.prototype.onSubmit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.formGroup.get('locale').value['value']) {
            this.localeCode = this.formGroup.get('locale').value['value'];
            this.localeIdentifier = this.formGroup.get('locale').value['label'];
            this.localeIcon = this.formGroup.get('locale').value['icon'];
        }
        /** @type {?} */
        var theme = this.formGroup.get('theme').value;
        /** @type {?} */
        var data = {
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
        function (current) {
            if ((current[0] !== _this.localeCode) || (current[1] !== data['theme'])) {
                _this.exec('security', 'change-settings', data).subscribe((/**
                 * @param {?} success
                 * @return {?}
                 */
                function (success) {
                    if (success) {
                        if (success.respStatusCode === ResponseCode.OK_SCR002.toString()) {
                            if (theme) {
                                _this.changeTheme(theme[0].selected);
                            }
                            if (current[0] !== _this.localeCode) {
                                _this.settingsIndexedDB.put('locale', _this.localeCode).then((/**
                                 * @return {?}
                                 */
                                function () {
                                    _this.http.HTTP_AUTH(_this.api['security']['get-menus']).subscribe((/**
                                     * @param {?} menus
                                     * @return {?}
                                     */
                                    function (menus) {
                                        Promise.all([
                                            _this.authIndexedDB.putEnc('menus', JSON.stringify(menus['main'])),
                                            _this.authIndexedDB.putEnc('extras', JSON.stringify(menus['extra'])),
                                        ]).then((/**
                                         * @return {?}
                                         */
                                        function () {
                                            _this.translate.getTranslation(_this.localeCode).subscribe((/**
                                             * @param {?} lang
                                             * @return {?}
                                             */
                                            function (lang) {
                                                _this.translate.use(_this.localeCode);
                                                _this.translate.setTranslation(_this.localeCode, lang, true);
                                                _this.toastr.showI18n(success.respStatusMessage[success.respStatusCode], true);
                                                _this.disabled = false;
                                                _this.formGroup.markAsPristine();
                                            }));
                                        }));
                                    }), (/**
                                     * @param {?} error
                                     * @return {?}
                                     */
                                    function (error) {
                                        _this.toastr.showI18n('error.translate', false, null, 'warning');
                                    }));
                                }));
                            }
                        }
                    }
                }), (/**
                 * @param {?} error
                 * @return {?}
                 */
                function (error) {
                    _this.disabled = false;
                    _this.toastr.showI18n(error.respStatusMessage[error.respStatusCode], true, null, 'danger');
                }));
            }
        }));
    };
    /**
     * @param {?} dark
     * @return {?}
     */
    SettingsPageComponent.prototype.changeTheme = /**
     * @param {?} dark
     * @return {?}
     */
    function (dark) {
        /** @type {?} */
        var theme = dark ? 'dark' : 'default';
        this.settingsIndexedDB.put('theme', theme).then();
        this.themeService.changeTheme(theme);
    };
    SettingsPageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'xa-settings-page',
                    template: "<xa-page-outlet [header]=\"'Settings'\">\n  <form [formGroup]=\"formGroup\">\n    <xa-select\n      [name]=\"'locale'\"\n      [label]=\"'Locale'\"\n      [required]=\"true\"\n      [searchable]=\"false\"\n      [skeleton]=\"loadingForm\"\n      [api]=\"apiSelectLocale\"\n      formControlName=\"locale\">\n      <div *xaContentSelect=\"let item\">\n        <span class=\"{{item.icon ? item.icon : localeIcon}}\"></span>\n        <span class=\"label-select\">{{item.label ? item.label : item}}</span>\n      </div>\n    </xa-select>\n    <xa-checkbox\n      [name]=\"'checkbox'\"\n      [label]=\"'Dark Mode'\"\n      [data]=\"dataTheme\"\n      [skeleton]=\"loadingForm\"\n      formControlName=\"theme\">\n    </xa-checkbox>\n    <xa-button-submit\n      (onSubmit)=\"onSubmit()\"\n      [name]=\"'Update Settings'\"\n      [formGroupButton]=\"formGroup\"\n      [disabledButton]=\"disabled\"\n      [skeleton]=\"loadingForm\">\n    </xa-button-submit>\n  </form>\n</xa-page-outlet>\n",
                    styles: [".label-select{padding-left:.5rem}"]
                }] }
    ];
    /** @nocollapse */
    SettingsPageComponent.ctorParameters = function () { return [
        { type: Injector },
        { type: TranslateService },
        { type: NbThemeService },
        { type: undefined, decorators: [{ type: Inject, args: [SETTINGS_INDEXED_DB,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [AUTH_INDEXED_DB,] }] }
    ]; };
    return SettingsPageComponent;
}(BaseFormComponent));
export { SettingsPageComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3MtcGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AeGFwaGlyYS9uZ3hhLWV4dHJhLyIsInNvdXJjZXMiOlsibGliL3NldHRpbmdzL3NldHRpbmdzLXBhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUFpQixpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hFLE9BQU8sRUFLTCxlQUFlLEVBQ2YsbUJBQW1CLEdBQ3BCLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DO0lBSzJDLGlEQUFzQjtJQVkvRCwrQkFDUyxRQUFrQixFQUNqQixTQUEyQixFQUMzQixZQUE0QixFQUNDLGlCQUEwQyxFQUM5QyxhQUF5QztRQUw1RSxZQU1JLGtCQUFNLFFBQVEsRUFBRTtZQUNkLFFBQVEsRUFBRSxFQUFFO1lBQ1osT0FBTyxFQUFFLEVBQUU7U0FDWixDQUFDLFNBRUg7UUFWTSxjQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2pCLGVBQVMsR0FBVCxTQUFTLENBQWtCO1FBQzNCLGtCQUFZLEdBQVosWUFBWSxDQUFnQjtRQUNDLHVCQUFpQixHQUFqQixpQkFBaUIsQ0FBeUI7UUFDOUMsbUJBQWEsR0FBYixhQUFhLENBQTRCO1FBWDVFLGVBQVMsR0FBb0I7WUFDM0I7Z0JBQ0UsUUFBUSxFQUFFLEtBQUs7YUFDaEI7U0FDRixDQUFDO1FBWUUsS0FBSSxDQUFDLGVBQWUsR0FBRyxLQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLG1CQUFtQixD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QUMsS0FBc0I7b0JBQ25CLEtBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO29CQUN0QixLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7Z0JBQzlGLENBQUMsRUFDRixDQUFDO2FBQ0g7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsMkNBQVc7Ozs7SUFBWCxVQUFZLElBQWE7O1lBQ2pCLEtBQUssR0FBVyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsU0FBUztRQUMvQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNsRCxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2QyxDQUFDOztnQkFqSUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBRTVCLHUrQkFBNkM7O2lCQUM5Qzs7OztnQkFsQnNDLFFBQVE7Z0JBRXRDLGdCQUFnQjtnQkFEaEIsY0FBYztnREFrQ2xCLE1BQU0sU0FBQyxtQkFBbUI7Z0RBQzFCLE1BQU0sU0FBQyxlQUFlOztJQTZHM0IsNEJBQUM7Q0FBQSxBQW5JRCxDQUsyQyxpQkFBaUIsR0E4SDNEO1NBOUhZLHFCQUFxQjs7O0lBRWhDLGdEQUFzQzs7SUFDdEMsMkNBQTBCOzs7OztJQUMxQiwyQ0FBd0I7Ozs7O0lBQ3hCLGlEQUE4Qjs7SUFDOUIsMENBSUU7O0lBR0EseUNBQXlCOzs7OztJQUN6QiwwQ0FBbUM7Ozs7O0lBQ25DLDZDQUFvQzs7Ozs7SUFDcEMsa0RBQStFOzs7OztJQUMvRSw4Q0FBMEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95LCBJbmplY3RvciwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYlRoZW1lU2VydmljZSB9IGZyb20gJ0BuZWJ1bGFyL3RoZW1lJztcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcbmltcG9ydCB7IENoZWNrYm94TW9kZWwsIEJhc2VGb3JtQ29tcG9uZW50IH0gZnJvbSAnQHhhcGhpcmEvbmd4YS1jb21tb24nO1xuaW1wb3J0IHtcbiAgSHR0cEJhc2VNb2RlbCxcbiAgQXBpQmFzZVJlc3BvbnNlLFxuICBJbmRleGVkREJGYWN0b3J5U2VydmljZSxcbiAgSW5kZXhlZERCRW5jRmFjdG9yeVNlcnZpY2UsXG4gIEFVVEhfSU5ERVhFRF9EQixcbiAgU0VUVElOR1NfSU5ERVhFRF9EQixcbn0gZnJvbSAnQHhhcGhpcmEvc2hhcmVkJztcbmltcG9ydCB7IFJlc3BvbnNlQ29kZSB9IGZyb20gJ0B4YXBoaXJhL3NoYXJlZCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3hhLXNldHRpbmdzLXBhZ2UnLFxuICBzdHlsZVVybHM6IFsnLi9zZXR0aW5ncy1wYWdlLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9zZXR0aW5ncy1wYWdlLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgU2V0dGluZ3NQYWdlQ29tcG9uZW50IGV4dGVuZHMgQmFzZUZvcm1Db21wb25lbnQ8YW55PiBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICBwdWJsaWMgYXBpU2VsZWN0TG9jYWxlOiBIdHRwQmFzZU1vZGVsO1xuICBwdWJsaWMgbG9jYWxlSWNvbjogc3RyaW5nO1xuICBwcml2YXRlIGxvY2FsZUNvZGU6IGFueTtcbiAgcHJpdmF0ZSBsb2NhbGVJZGVudGlmaWVyOiBhbnk7XG4gIGRhdGFUaGVtZTogQ2hlY2tib3hNb2RlbFtdID0gW1xuICAgIHtcbiAgICAgIHNlbGVjdGVkOiBmYWxzZSxcbiAgICB9LFxuICBdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgcHJpdmF0ZSB0cmFuc2xhdGU6IFRyYW5zbGF0ZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSB0aGVtZVNlcnZpY2U6IE5iVGhlbWVTZXJ2aWNlLFxuICAgIEBJbmplY3QoU0VUVElOR1NfSU5ERVhFRF9EQikgcHJpdmF0ZSBzZXR0aW5nc0luZGV4ZWREQjogSW5kZXhlZERCRmFjdG9yeVNlcnZpY2UsXG4gICAgQEluamVjdChBVVRIX0lOREVYRURfREIpIHByaXZhdGUgYXV0aEluZGV4ZWREQjogSW5kZXhlZERCRW5jRmFjdG9yeVNlcnZpY2UpIHtcbiAgICAgIHN1cGVyKGluamVjdG9yLCB7XG4gICAgICAgICdsb2NhbGUnOiBbXSxcbiAgICAgICAgJ3RoZW1lJzogW10sXG4gICAgICB9KTtcbiAgICAgIHRoaXMuYXBpU2VsZWN0TG9jYWxlID0gdGhpcy5hcGlbJ21hc3RlciddWydzZWxlY3QtYWxsLWxvY2FsZSddO1xuICAgIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLm9uSW5pdCgnc2VjdXJpdHknLCAnZ2V0LXNldHRpbmdzJyk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHt9XG5cbiAgb25Jbml0KHNlcnZpY2VOYW1lOiBzdHJpbmcsIGFwaU5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMubG9hZGluZ0Zvcm0gPSB0cnVlO1xuICAgIHRoaXMuZXhlYyhzZXJ2aWNlTmFtZSwgYXBpTmFtZSlcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChzdWNjZXNzOiBhbnkpID0+IHtcbiAgICAgICAgICB0aGlzLmxvYWRpbmdGb3JtID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5sb2NhbGVDb2RlID0gc3VjY2Vzc1snbG9jYWxlQ29kZSddO1xuICAgICAgICAgIHRoaXMubG9jYWxlSWRlbnRpZmllciA9IHN1Y2Nlc3NbJ2xvY2FsZUlkZW50aWZpZXInXTtcbiAgICAgICAgICB0aGlzLmxvY2FsZUljb24gPSBzdWNjZXNzWydsb2NhbGVJY29uJ10gPyBzdWNjZXNzWydsb2NhbGVJY29uJ10gOiAnJztcbiAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1snbG9jYWxlJ10uc2V0VmFsdWUodGhpcy5sb2NhbGVJZGVudGlmaWVyKTtcbiAgICAgICAgICBsZXQgZGFya01vZGU6IENoZWNrYm94TW9kZWxbXSA9IFt7XG4gICAgICAgICAgICBzZWxlY3RlZDogZmFsc2UsXG4gICAgICAgICAgfV07XG4gICAgICAgICAgaWYgKHN1Y2Nlc3NbJ3RoZW1lJ10gPT09ICdkYXJrJykge1xuICAgICAgICAgICAgZGFya01vZGUgPSBbe1xuICAgICAgICAgICAgICBzZWxlY3RlZDogdHJ1ZSxcbiAgICAgICAgICAgIH1dO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1sndGhlbWUnXS5zZXRWYWx1ZShkYXJrTW9kZSk7XG4gICAgICAgICAgdGhpcy5mb3JtR3JvdXAubWFya0FzUHJpc3RpbmUoKTtcbiAgICAgICAgfSxcbiAgICAgICAgKGVycm9yOiBBcGlCYXNlUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICB0aGlzLmxvYWRpbmdGb3JtID0gdHJ1ZTtcbiAgICAgICAgICBpZiAoZXJyb3IucmVzcFN0YXR1c01lc3NhZ2UpXG4gICAgICAgICAgICB0aGlzLnRvYXN0ci5zaG93STE4bihlcnJvci5yZXNwU3RhdHVzTWVzc2FnZVtlcnJvci5yZXNwU3RhdHVzQ29kZV0sIHRydWUsIG51bGwsICdkYW5nZXInKTtcbiAgICAgICAgfSxcbiAgICAgICk7XG4gIH1cblxuICBvblN1Ym1pdCgpIHtcbiAgICBpZiAodGhpcy5mb3JtR3JvdXAuZ2V0KCdsb2NhbGUnKS52YWx1ZVsndmFsdWUnXSkge1xuICAgICAgdGhpcy5sb2NhbGVDb2RlID0gdGhpcy5mb3JtR3JvdXAuZ2V0KCdsb2NhbGUnKS52YWx1ZVsndmFsdWUnXTtcbiAgICAgIHRoaXMubG9jYWxlSWRlbnRpZmllciA9IHRoaXMuZm9ybUdyb3VwLmdldCgnbG9jYWxlJykudmFsdWVbJ2xhYmVsJ107XG4gICAgICB0aGlzLmxvY2FsZUljb24gPSB0aGlzLmZvcm1Hcm91cC5nZXQoJ2xvY2FsZScpLnZhbHVlWydpY29uJ107XG4gICAgfVxuICAgIGNvbnN0IHRoZW1lOiBDaGVja2JveE1vZGVsW10gPSB0aGlzLmZvcm1Hcm91cC5nZXQoJ3RoZW1lJykudmFsdWU7XG4gICAgY29uc3QgZGF0YTogYW55ID0ge1xuICAgICAgJ2xvY2FsZUNvZGUnOiB0aGlzLmxvY2FsZUNvZGUsXG4gICAgICAnbG9jYWxlSWRlbnRpZmllcic6IHRoaXMubG9jYWxlSWRlbnRpZmllcixcbiAgICAgICdsb2NhbGVJY29uJzogdGhpcy5sb2NhbGVJY29uLFxuICAgICAgJ3RoZW1lJzogdGhlbWVbMF0uc2VsZWN0ZWQgPyAnZGFyaycgOiAnZGVmYXVsdCcsXG4gICAgfTtcbiAgICB0aGlzLmRpc2FibGVkID0gdHJ1ZTtcbiAgICBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLnNldHRpbmdzSW5kZXhlZERCLmdldCgnbG9jYWxlJyksXG4gICAgICB0aGlzLnNldHRpbmdzSW5kZXhlZERCLmdldCgndGhlbWUnKSxcbiAgICBdKS50aGVuKChjdXJyZW50OiBhbnlbXSkgPT4ge1xuICAgICAgaWYgKChjdXJyZW50WzBdICE9PSB0aGlzLmxvY2FsZUNvZGUpIHx8IChjdXJyZW50WzFdICE9PSBkYXRhWyd0aGVtZSddKSkge1xuICAgICAgICB0aGlzLmV4ZWMoJ3NlY3VyaXR5JywgJ2NoYW5nZS1zZXR0aW5ncycsIGRhdGEpLnN1YnNjcmliZShcbiAgICAgICAgICAoc3VjY2VzczogQXBpQmFzZVJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgICAgICAgICBpZiAoc3VjY2Vzcy5yZXNwU3RhdHVzQ29kZSA9PT0gUmVzcG9uc2VDb2RlLk9LX1NDUjAwMi50b1N0cmluZygpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoZW1lKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVRoZW1lKHRoZW1lWzBdLnNlbGVjdGVkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRbMF0gIT09IHRoaXMubG9jYWxlQ29kZSkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5zZXR0aW5nc0luZGV4ZWREQi5wdXQoJ2xvY2FsZScsIHRoaXMubG9jYWxlQ29kZSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaHR0cC5IVFRQX0FVVEgodGhpcy5hcGlbJ3NlY3VyaXR5J11bJ2dldC1tZW51cyddKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgICAgICAgKG1lbnVzOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hdXRoSW5kZXhlZERCLnB1dEVuYygnbWVudXMnLCBKU09OLnN0cmluZ2lmeShtZW51c1snbWFpbiddKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXV0aEluZGV4ZWREQi5wdXRFbmMoJ2V4dHJhcycsIEpTT04uc3RyaW5naWZ5KG1lbnVzWydleHRyYSddKSksXG4gICAgICAgICAgICAgICAgICAgICAgICBdKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50cmFuc2xhdGUuZ2V0VHJhbnNsYXRpb24odGhpcy5sb2NhbGVDb2RlKS5zdWJzY3JpYmUoKGxhbmc6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudHJhbnNsYXRlLnVzZSh0aGlzLmxvY2FsZUNvZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudHJhbnNsYXRlLnNldFRyYW5zbGF0aW9uKHRoaXMubG9jYWxlQ29kZSwgbGFuZywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b2FzdHIuc2hvd0kxOG4oc3VjY2Vzcy5yZXNwU3RhdHVzTWVzc2FnZVtzdWNjZXNzLnJlc3BTdGF0dXNDb2RlXSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybUdyb3VwLm1hcmtBc1ByaXN0aW5lKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAoZXJyb3I6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b2FzdHIuc2hvd0kxOG4oJ2Vycm9yLnRyYW5zbGF0ZScsIGZhbHNlLCBudWxsLCAnd2FybmluZycpO1xuICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICAoZXJyb3I6IEFwaUJhc2VSZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgIHRoaXMudG9hc3RyLnNob3dJMThuKGVycm9yLnJlc3BTdGF0dXNNZXNzYWdlW2Vycm9yLnJlc3BTdGF0dXNDb2RlXSwgdHJ1ZSwgbnVsbCwgJ2RhbmdlcicpO1xuICAgICAgICAgIH0sXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBjaGFuZ2VUaGVtZShkYXJrOiBib29sZWFuKSB7XG4gICAgY29uc3QgdGhlbWU6IHN0cmluZyA9IGRhcmsgPyAnZGFyaycgOiAnZGVmYXVsdCc7XG4gICAgdGhpcy5zZXR0aW5nc0luZGV4ZWREQi5wdXQoJ3RoZW1lJywgdGhlbWUpLnRoZW4oKTtcbiAgICB0aGlzLnRoZW1lU2VydmljZS5jaGFuZ2VUaGVtZSh0aGVtZSk7XG4gIH1cblxufVxuIl19