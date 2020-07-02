/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Injector } from '@angular/core';
import { BaseFormComponent } from '@xaphira/ngxa-common';
import { Router, ActivatedRoute } from '@angular/router';
import { ResponseCode } from '@xaphira/shared';
import { takeUntil } from 'rxjs/operators';
import { LanguageService } from '../services/language.service';
import { NbDialogService } from '@nebular/theme';
import { DialogFlagComponent } from './dialog-flag/dialog-flag.component';
var LanguageAddEditPageComponent = /** @class */ (function (_super) {
    tslib_1.__extends(LanguageAddEditPageComponent, _super);
    function LanguageAddEditPageComponent(injector, router, route, languageService, dialogService) {
        var _this = _super.call(this, injector, {
            'language': [],
            'icon': [],
            'default': [],
        }) || this;
        _this.injector = injector;
        _this.router = router;
        _this.route = route;
        _this.languageService = languageService;
        _this.dialogService = dialogService;
        _this.action = 'Add';
        _this.dataDefault = [
            {
                selected: false,
            },
        ];
        if ((_this.route.snapshot.params['action'] === 'edit')) {
            _this.action = 'Edit';
        }
        _this.apiSelectLanguage = _this.api['master']['select-language'];
        if (_this.languageService.getLocale()) {
            if (_this.languageService.getLocale().localeDefault) {
                _this.formGroup.get('default').setValue([{
                        selected: true,
                    }]);
                _this.formGroup.get('default').disable();
            }
            else {
                _this.formGroup.get('default').setValue([{
                        selected: false,
                    }]);
            }
            _this.formGroup.get('icon').setValue(_this.languageService.getLocale().icon);
            _this.formGroup.get('language').setValue(_this.languageService.getLocale().identifier);
            _this.formGroup.get('language').disable();
        }
        return _this;
    }
    /**
     * @return {?}
     */
    LanguageAddEditPageComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    LanguageAddEditPageComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    LanguageAddEditPageComponent.prototype.onSearchFlag = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.dialogService.open(DialogFlagComponent)
            .onClose.subscribe((/**
         * @param {?} flagIcon
         * @return {?}
         */
        function (flagIcon) {
            _this.formGroup.get('icon').setValue(flagIcon);
            _this.formGroup.get('icon').markAsDirty();
        }));
    };
    /**
     * @return {?}
     */
    LanguageAddEditPageComponent.prototype.onReset = /**
     * @return {?}
     */
    function () {
        this.router.navigate(['/app/sysconf/language']);
    };
    /**
     * @return {?}
     */
    LanguageAddEditPageComponent.prototype.onSubmit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var localeDefault = this.formGroup.get('default').value;
        /** @type {?} */
        var data = {
            icon: this.formGroup.get('icon').value,
            localeDefault: (localeDefault ? true : false),
            localeCode: this.formGroup.get('language').value['value'] ?
                this.formGroup.get('language').value['value'] : this.languageService.getLocale().localeCode,
            identifier: this.formGroup.get('language').value['label'] ?
                this.formGroup.get('language').value['label'] : this.languageService.getLocale().identifier,
            localeEnabled: true,
        };
        ((/** @type {?} */ (_super.prototype.onSubmit.call(this, data, 'master', 'post-locale'))))
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            if (response.respStatusCode === ResponseCode.OK_SCR010.toString()) {
                _this.router.navigate(['/app/sysconf/language']);
            }
        }));
    };
    LanguageAddEditPageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'xa-language-add-edit-page',
                    template: "<xa-page-outlet [header]=\"action+' Language'\">\n  <div class=\"row\">\n    <div class=\"col-md-12 col-lg-12 col-xxxl-6\">\n      <form [formGroup]=\"formGroup\">\n        <xa-select\n          [name]=\"'language'\"\n          [label]=\"'Language'\"\n          [required]=\"true\"\n          [api]=\"apiSelectLanguage\"\n          formControlName=\"language\">\n        </xa-select>\n        <xa-input-icon\n          [name]=\"'icon'\"\n          [label]=\"'Icon'\"\n          [required]=\"true\"\n          [icon]=\"'search-outline'\"\n          [iconcursor]=\"true\"\n          [eva]=\"true\"\n          (clickIcon)=\"onSearchFlag()\"\n          formControlName=\"icon\">\n        </xa-input-icon>\n        <xa-checkbox\n          [name]=\"'checkbox'\"\n          [label]=\"'System Default Language'\"\n          [data]=\"dataDefault\"\n          formControlName=\"default\">\n        </xa-checkbox>\n        <div class=\"form-group row\">\n          <div class=\"offset-sm-3 col-sm-9\">\n            <button\n              type=\"reset\"\n              status=\"danger\"\n              (click)=\"onReset()\"\n              class=\"reset-left\"\n              nbButton>\n              {{ 'Cancel' | translate}}\n            </button>\n            <button\n              type=\"submit\"\n              status=\"primary\"\n              (click)=\"onSubmit()\"\n              [disabled]=\"formGroup.invalid || formGroup.pristine || disabled\"\n              class=\"submit-right\"\n              nbButton>\n              {{ action | translate}}\n            </button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</xa-page-outlet>\n",
                    styles: [".reset-left{margin-right:.25rem}.submit-right{margin-left:.25rem}"]
                }] }
    ];
    /** @nocollapse */
    LanguageAddEditPageComponent.ctorParameters = function () { return [
        { type: Injector },
        { type: Router },
        { type: ActivatedRoute },
        { type: LanguageService },
        { type: NbDialogService }
    ]; };
    return LanguageAddEditPageComponent;
}(BaseFormComponent));
export { LanguageAddEditPageComponent };
if (false) {
    /** @type {?} */
    LanguageAddEditPageComponent.prototype.action;
    /** @type {?} */
    LanguageAddEditPageComponent.prototype.apiSelectLanguage;
    /** @type {?} */
    LanguageAddEditPageComponent.prototype.dataDefault;
    /** @type {?} */
    LanguageAddEditPageComponent.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    LanguageAddEditPageComponent.prototype.router;
    /**
     * @type {?}
     * @private
     */
    LanguageAddEditPageComponent.prototype.route;
    /**
     * @type {?}
     * @private
     */
    LanguageAddEditPageComponent.prototype.languageService;
    /**
     * @type {?}
     * @private
     */
    LanguageAddEditPageComponent.prototype.dialogService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZ3VhZ2UtYWRkLWVkaXQtcGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AeGFwaGlyYS9uZ3hhLXN5cy8iLCJzb3VyY2VzIjpbImxpYi9sYW5ndWFnZS9hZGQtZWRpdC9sYW5ndWFnZS1hZGQtZWRpdC1wYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsUUFBUSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxpQkFBaUIsRUFBaUIsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RSxPQUFPLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXpELE9BQU8sRUFBbUIsWUFBWSxFQUFpQixNQUFNLGlCQUFpQixDQUFDO0FBQy9FLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBRTFFO0lBS2tELHdEQUFzQjtJQVN0RSxzQ0FBbUIsUUFBa0IsRUFDM0IsTUFBYyxFQUNkLEtBQXFCLEVBQ3JCLGVBQWdDLEVBQ2hDLGFBQThCO1FBSnhDLFlBS0Usa0JBQU0sUUFBUSxFQUNaO1lBQ0UsVUFBVSxFQUFFLEVBQUU7WUFDZCxNQUFNLEVBQUUsRUFBRTtZQUNWLFNBQVMsRUFBRSxFQUFFO1NBQ2QsQ0FBQyxTQW9CTDtRQTlCa0IsY0FBUSxHQUFSLFFBQVEsQ0FBVTtRQUMzQixZQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsV0FBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIscUJBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLG1CQUFhLEdBQWIsYUFBYSxDQUFpQjtRQVhqQyxZQUFNLEdB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REFJRTs7SUFDVSxnREFBeUI7Ozs7O0lBQ25DLDhDQUFzQjs7Ozs7SUFDdEIsNkNBQTZCOzs7OztJQUM3Qix1REFBd0M7Ozs7O0lBQ3hDLHFEQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3RvciwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCYXNlRm9ybUNvbXBvbmVudCwgQ2hlY2tib3hNb2RlbCB9IGZyb20gJ0B4YXBoaXJhL25neGEtY29tbW9uJztcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQXBpQmFzZVJlc3BvbnNlLCBSZXNwb25zZUNvZGUsIEh0dHBCYXNlTW9kZWwgfSBmcm9tICdAeGFwaGlyYS9zaGFyZWQnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTG9jYWxlTW9kZWwgfSBmcm9tICcuLi9tb2RlbHMvbG9jYWxlLm1vZGVsJztcbmltcG9ydCB7IExhbmd1YWdlU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2xhbmd1YWdlLnNlcnZpY2UnO1xuaW1wb3J0IHsgTmJEaWFsb2dTZXJ2aWNlIH0gZnJvbSAnQG5lYnVsYXIvdGhlbWUnO1xuaW1wb3J0IHsgRGlhbG9nRmxhZ0NvbXBvbmVudCB9IGZyb20gJy4vZGlhbG9nLWZsYWcvZGlhbG9nLWZsYWcuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAneGEtbGFuZ3VhZ2UtYWRkLWVkaXQtcGFnZScsXG4gIHN0eWxlVXJsczogWycuL2xhbmd1YWdlLWFkZC1lZGl0LXBhZ2UuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2xhbmd1YWdlLWFkZC1lZGl0LXBhZ2UuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBMYW5ndWFnZUFkZEVkaXRQYWdlQ29tcG9uZW50IGV4dGVuZHMgQmFzZUZvcm1Db21wb25lbnQ8YW55PiBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICBwdWJsaWMgYWN0aW9uOiAnQWRkJyB8ICdFZGl0JyA9ICdBZGQnO1xuICBwdWJsaWMgYXBpU2VsZWN0TGFuZ3VhZ2U6IEh0dHBCYXNlTW9kZWw7XG4gIHB1YmxpYyBkYXRhRGVmYXVsdDogQ2hlY2tib3hNb2RlbFtdID0gW1xuICAgIHtcbiAgICAgIHNlbGVjdGVkOiBmYWxzZSxcbiAgICB9LFxuICBdO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSBsYW5ndWFnZVNlcnZpY2U6IExhbmd1YWdlU2VydmljZSxcbiAgICBwcml2YXRlIGRpYWxvZ1NlcnZpY2U6IE5iRGlhbG9nU2VydmljZSkge1xuICAgIHN1cGVyKGluamVjdG9yLFxuICAgICAge1xuICAgICAgICAnbGFuZ3VhZ2UnOiBbXSxcbiAgICAgICAgJ2ljb24nOiBbXSxcbiAgICAgICAgJ2RlZmF1bHQnOiBbXSxcbiAgICAgIH0pO1xuICAgIGlmICgodGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXNbJ2FjdGlvbiddID09PSAnZWRpdCcpKSB7XG4gICAgICB0aGlzLmFjdGlvbiA9ICdFZGl0JztcbiAgICB9XG4gICAgdGhpcy5hcGlTZWxlY3RMYW5ndWFnZSA9IHRoaXMuYXBpWydtYXN0ZXInXVsnc2VsZWN0LWxhbmd1YWdlJ107XG4gICAgaWYgKHRoaXMubGFuZ3VhZ2VTZXJ2aWNlLmdldExvY2FsZSgpKSB7XG4gICAgICBpZiAodGhpcy5sYW5ndWFnZVNlcnZpY2UuZ2V0TG9jYWxlKCkubG9jYWxlRGVmYXVsdCkge1xuICAgICAgICB0aGlzLmZvcm1Hcm91cC5nZXQoJ2RlZmF1bHQnKS5zZXRWYWx1ZShbe1xuICAgICAgICAgIHNlbGVjdGVkOiB0cnVlLFxuICAgICAgICB9XSk7XG4gICAgICAgIHRoaXMuZm9ybUdyb3VwLmdldCgnZGVmYXVsdCcpLmRpc2FibGUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZm9ybUdyb3VwLmdldCgnZGVmYXVsdCcpLnNldFZhbHVlKFt7XG4gICAgICAgICAgc2VsZWN0ZWQ6IGZhbHNlLFxuICAgICAgICB9XSk7XG4gICAgICB9XG4gICAgICB0aGlzLmZvcm1Hcm91cC5nZXQoJ2ljb24nKS5zZXRWYWx1ZSh0aGlzLmxhbmd1YWdlU2VydmljZS5nZXRMb2NhbGUoKS5pY29uKTtcbiAgICAgIHRoaXMuZm9ybUdyb3VwLmdldCgnbGFuZ3VhZ2UnKS5zZXRWYWx1ZSh0aGlzLmxhbmd1YWdlU2VydmljZS5nZXRMb2NhbGUoKS5pZGVudGlmaWVyKTtcbiAgICAgIHRoaXMuZm9ybUdyb3VwLmdldCgnbGFuZ3VhZ2UnKS5kaXNhYmxlKCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7fVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge31cblxuICBvblNlYXJjaEZsYWcoKTogdm9pZCB7XG4gICAgdGhpcy5kaWFsb2dTZXJ2aWNlLm9wZW4oRGlhbG9nRmxhZ0NvbXBvbmVudClcbiAgICAgIC5vbkNsb3NlLnN1YnNjcmliZSgoZmxhZ0ljb246IHN0cmluZykgPT4ge1xuICAgICAgICB0aGlzLmZvcm1Hcm91cC5nZXQoJ2ljb24nKS5zZXRWYWx1ZShmbGFnSWNvbik7XG4gICAgICAgIHRoaXMuZm9ybUdyb3VwLmdldCgnaWNvbicpLm1hcmtBc0RpcnR5KCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIG9uUmVzZXQoKTogdm9pZCB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvYXBwL3N5c2NvbmYvbGFuZ3VhZ2UnXSk7XG4gIH1cblxuICBvblN1Ym1pdCgpOiB2b2lkIHtcbiAgICBjb25zdCBsb2NhbGVEZWZhdWx0OiBDaGVja2JveE1vZGVsW10gPSB0aGlzLmZvcm1Hcm91cC5nZXQoJ2RlZmF1bHQnKS52YWx1ZTtcbiAgICBjb25zdCBkYXRhOiBMb2NhbGVNb2RlbCA9IHtcbiAgICAgIGljb246IHRoaXMuZm9ybUdyb3VwLmdldCgnaWNvbicpLnZhbHVlLFxuICAgICAgbG9jYWxlRGVmYXVsdDogKGxvY2FsZURlZmF1bHQgPyB0cnVlIDogZmFsc2UpLFxuICAgICAgbG9jYWxlQ29kZTogdGhpcy5mb3JtR3JvdXAuZ2V0KCdsYW5ndWFnZScpLnZhbHVlWyd2YWx1ZSddID9cbiAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybUdyb3VwLmdldCgnbGFuZ3VhZ2UnKS52YWx1ZVsndmFsdWUnXSA6IHRoaXMubGFuZ3VhZ2VTZXJ2aWNlLmdldExvY2FsZSgpLmxvY2FsZUNvZGUsXG4gICAgICBpZGVudGlmaWVyOiB0aGlzLmZvcm1Hcm91cC5nZXQoJ2xhbmd1YWdlJykudmFsdWVbJ2xhYmVsJ10gP1xuICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtR3JvdXAuZ2V0KCdsYW5ndWFnZScpLnZhbHVlWydsYWJlbCddIDogdGhpcy5sYW5ndWFnZVNlcnZpY2UuZ2V0TG9jYWxlKCkuaWRlbnRpZmllcixcbiAgICAgIGxvY2FsZUVuYWJsZWQ6IHRydWUsXG4gICAgfTtcbiAgICAoc3VwZXIub25TdWJtaXQoZGF0YSwgJ21hc3RlcicsICdwb3N0LWxvY2FsZScpICBhcyBPYnNlcnZhYmxlPEFwaUJhc2VSZXNwb25zZT4pXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnJlc3BTdGF0dXNDb2RlID09PSBSZXNwb25zZUNvZGUuT0tfU0NSMDEwLnRvU3RyaW5nKCkpIHtcbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9hcHAvc3lzY29uZi9sYW5ndWFnZSddKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxufVxuIl19