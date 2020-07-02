/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Injector } from '@angular/core';
import { BaseFormComponent } from '@xaphira/ngxa-common';
import { Router, ActivatedRoute } from '@angular/router';
import { ResponseCode } from '@xaphira/shared';
import { takeUntil } from 'rxjs/operators';
import { LanguageService } from '../services/language.service';
import { NbDialogService } from '@nebular/theme';
import { DialogFlagComponent } from './dialog-flag/dialog-flag.component';
export class LanguageAddEditPageComponent extends BaseFormComponent {
    /**
     * @param {?} injector
     * @param {?} router
     * @param {?} route
     * @param {?} languageService
     * @param {?} dialogService
     */
    constructor(injector, router, route, languageService, dialogService) {
        super(injector, {
            'language': [],
            'icon': [],
            'default': [],
        });
        this.injector = injector;
        this.router = router;
        this.route = route;
        this.languageService = languageService;
        this.dialogService = dialogService;
        this.action = 'Add';
        this.dataDefault = [
            {
                selected: false,
            },
        ];
        if ((this.route.snapshot.params['action'] === 'edit')) {
            this.action = 'Edit';
        }
        this.apiSelectLanguage = this.api['master']['select-language'];
        if (this.languageService.getLocale()) {
            if (this.languageService.getLocale().localeDefault) {
                this.formGroup.get('default').setValue([{
                        selected: true,
                    }]);
                this.formGroup.get('default').disable();
            }
            else {
                this.formGroup.get('default').setValue([{
                        selected: false,
                    }]);
            }
            this.formGroup.get('icon').setValue(this.languageService.getLocale().icon);
            this.formGroup.get('language').setValue(this.languageService.getLocale().identifier);
            this.formGroup.get('language').disable();
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @return {?}
     */
    ngOnDestroy() { }
    /**
     * @return {?}
     */
    onSearchFlag() {
        this.dialogService.open(DialogFlagComponent)
            .onClose.subscribe((/**
         * @param {?} flagIcon
         * @return {?}
         */
        (flagIcon) => {
            this.formGroup.get('icon').setValue(flagIcon);
            this.formGroup.get('icon').markAsDirty();
        }));
    }
    /**
     * @return {?}
     */
    onReset() {
        this.router.navigate(['/app/sysconf/language']);
    }
    /**
     * @return {?}
     */
    onSubmit() {
        /** @type {?} */
        const localeDefault = this.formGroup.get('default').value;
        /** @type {?} */
        const data = {
            icon: this.formGroup.get('icon').value,
            localeDefault: (localeDefault ? true : false),
            localeCode: this.formGroup.get('language').value['value'] ?
                this.formGroup.get('language').value['value'] : this.languageService.getLocale().localeCode,
            identifier: this.formGroup.get('language').value['label'] ?
                this.formGroup.get('language').value['label'] : this.languageService.getLocale().identifier,
            localeEnabled: true,
        };
        ((/** @type {?} */ (super.onSubmit(data, 'master', 'post-locale'))))
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @param {?} response
         * @return {?}
         */
        response => {
            if (response.respStatusCode === ResponseCode.OK_SCR010.toString()) {
                this.router.navigate(['/app/sysconf/language']);
            }
        }));
    }
}
LanguageAddEditPageComponent.decorators = [
    { type: Component, args: [{
                selector: 'xa-language-add-edit-page',
                template: "<xa-page-outlet [header]=\"action+' Language'\">\n  <div class=\"row\">\n    <div class=\"col-md-12 col-lg-12 col-xxxl-6\">\n      <form [formGroup]=\"formGroup\">\n        <xa-select\n          [name]=\"'language'\"\n          [label]=\"'Language'\"\n          [required]=\"true\"\n          [api]=\"apiSelectLanguage\"\n          formControlName=\"language\">\n        </xa-select>\n        <xa-input-icon\n          [name]=\"'icon'\"\n          [label]=\"'Icon'\"\n          [required]=\"true\"\n          [icon]=\"'search-outline'\"\n          [iconcursor]=\"true\"\n          [eva]=\"true\"\n          (clickIcon)=\"onSearchFlag()\"\n          formControlName=\"icon\">\n        </xa-input-icon>\n        <xa-checkbox\n          [name]=\"'checkbox'\"\n          [label]=\"'System Default Language'\"\n          [data]=\"dataDefault\"\n          formControlName=\"default\">\n        </xa-checkbox>\n        <div class=\"form-group row\">\n          <div class=\"offset-sm-3 col-sm-9\">\n            <button\n              type=\"reset\"\n              status=\"danger\"\n              (click)=\"onReset()\"\n              class=\"reset-left\"\n              nbButton>\n              {{ 'Cancel' | translate}}\n            </button>\n            <button\n              type=\"submit\"\n              status=\"primary\"\n              (click)=\"onSubmit()\"\n              [disabled]=\"formGroup.invalid || formGroup.pristine || disabled\"\n              class=\"submit-right\"\n              nbButton>\n              {{ action | translate}}\n            </button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</xa-page-outlet>\n",
                styles: [".reset-left{margin-right:.25rem}.submit-right{margin-left:.25rem}"]
            }] }
];
/** @nocollapse */
LanguageAddEditPageComponent.ctorParameters = () => [
    { type: Injector },
    { type: Router },
    { type: ActivatedRoute },
    { type: LanguageService },
    { type: NbDialogService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZ3VhZ2UtYWRkLWVkaXQtcGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AeGFwaGlyYS9uZ3hhLXN5cy8iLCJzb3VyY2VzIjpbImxpYi9sYW5ndWFnZS9hZGQtZWRpdC9sYW5ndWFnZS1hZGQtZWRpdC1wYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxRQUFRLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDdkUsT0FBTyxFQUFFLGlCQUFpQixFQUFpQixNQUFNLHNCQUFzQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFekQsT0FBTyxFQUFtQixZQUFZLEVBQWlCLE1BQU0saUJBQWlCLENBQUM7QUFDL0UsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFPMUUsTUFBTSxPQUFPLDRCQUE2QixTQUFRLGlCQUFzQjs7Ozs7Ozs7SUFTdEUsWUFBbUIsUUFBa0IsRUFDM0IsTUFBYyxFQUNkLEtBQXFCLEVBQ3JCLGVBQWdDLEVBQ2hDLGFBQThCO1FBQ3RDLEtBQUssQ0FBQyxRQUFRLEVBQ1o7WUFDRSxVQUFVLEVBQUUsRUFBRTtZQUNkLE1BQU0sRUFBRSxFQUFFO1lBQ1YsU0FBUyxFQUFFLEVBQUU7U0FDZCxDQUFDLENBQUM7UUFWWSxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQzNCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsa0JBQWEsR0FBYixhQUFhLENB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c0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEluamVjdG9yLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJhc2VGb3JtQ29tcG9uZW50LCBDaGVja2JveE1vZGVsIH0gZnJvbSAnQHhhcGhpcmEvbmd4YS1jb21tb24nO1xuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBBcGlCYXNlUmVzcG9uc2UsIFJlc3BvbnNlQ29kZSwgSHR0cEJhc2VNb2RlbCB9IGZyb20gJ0B4YXBoaXJhL3NoYXJlZCc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBMb2NhbGVNb2RlbCB9IGZyb20gJy4uL21vZGVscy9sb2NhbGUubW9kZWwnO1xuaW1wb3J0IHsgTGFuZ3VhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvbGFuZ3VhZ2Uuc2VydmljZSc7XG5pbXBvcnQgeyBOYkRpYWxvZ1NlcnZpY2UgfSBmcm9tICdAbmVidWxhci90aGVtZSc7XG5pbXBvcnQgeyBEaWFsb2dGbGFnQ29tcG9uZW50IH0gZnJvbSAnLi9kaWFsb2ctZmxhZy9kaWFsb2ctZmxhZy5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd4YS1sYW5ndWFnZS1hZGQtZWRpdC1wYWdlJyxcbiAgc3R5bGVVcmxzOiBbJy4vbGFuZ3VhZ2UtYWRkLWVkaXQtcGFnZS5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vbGFuZ3VhZ2UtYWRkLWVkaXQtcGFnZS5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIExhbmd1YWdlQWRkRWRpdFBhZ2VDb21wb25lbnQgZXh0ZW5kcyBCYXNlRm9ybUNvbXBvbmVudDxhbnk+IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gIHB1YmxpYyBhY3Rpb246ICdBZGQnIHwgJ0VkaXQnID0gJ0FkZCc7XG4gIHB1YmxpYyBhcGlTZWxlY3RMYW5ndWFnZTogSHR0cEJhc2VNb2RlbDtcbiAgcHVibGljIGRhdGFEZWZhdWx0OiBDaGVja2JveE1vZGVsW10gPSBbXG4gICAge1xuICAgICAgc2VsZWN0ZWQ6IGZhbHNlLFxuICAgIH0sXG4gIF07XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcml2YXRlIGxhbmd1YWdlU2VydmljZTogTGFuZ3VhZ2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgZGlhbG9nU2VydmljZTogTmJEaWFsb2dTZXJ2aWNlKSB7XG4gICAgc3VwZXIoaW5qZWN0b3IsXG4gICAgICB7XG4gICAgICAgICdsYW5ndWFnZSc6IFtdLFxuICAgICAgICAnaWNvbic6IFtdLFxuICAgICAgICAnZGVmYXVsdCc6IFtdLFxuICAgICAgfSk7XG4gICAgaWYgKCh0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtc1snYWN0aW9uJ10gPT09ICdlZGl0JykpIHtcbiAgICAgIHRoaXMuYWN0aW9uID0gJ0VkaXQnO1xuICAgIH1cbiAgICB0aGlzLmFwaVNlbGVjdExhbmd1YWdlID0gdGhpcy5hcGlbJ21hc3RlciddWydzZWxlY3QtbGFuZ3VhZ2UnXTtcbiAgICBpZiAodGhpcy5sYW5ndWFnZVNlcnZpY2UuZ2V0TG9jYWxlKCkpIHtcbiAgICAgIGlmICh0aGlzLmxhbmd1YWdlU2VydmljZS5nZXRMb2NhbGUoKS5sb2NhbGVEZWZhdWx0KSB7XG4gICAgICAgIHRoaXMuZm9ybUdyb3VwLmdldCgnZGVmYXVsdCcpLnNldFZhbHVlKFt7XG4gICAgICAgICAgc2VsZWN0ZWQ6IHRydWUsXG4gICAgICAgIH1dKTtcbiAgICAgICAgdGhpcy5mb3JtR3JvdXAuZ2V0KCdkZWZhdWx0JykuZGlzYWJsZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5mb3JtR3JvdXAuZ2V0KCdkZWZhdWx0Jykuc2V0VmFsdWUoW3tcbiAgICAgICAgICBzZWxlY3RlZDogZmFsc2UsXG4gICAgICAgIH1dKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZm9ybUdyb3VwLmdldCgnaWNvbicpLnNldFZhbHVlKHRoaXMubGFuZ3VhZ2VTZXJ2aWNlLmdldExvY2FsZSgpLmljb24pO1xuICAgICAgdGhpcy5mb3JtR3JvdXAuZ2V0KCdsYW5ndWFnZScpLnNldFZhbHVlKHRoaXMubGFuZ3VhZ2VTZXJ2aWNlLmdldExvY2FsZSgpLmlkZW50aWZpZXIpO1xuICAgICAgdGhpcy5mb3JtR3JvdXAuZ2V0KCdsYW5ndWFnZScpLmRpc2FibGUoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHt9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7fVxuXG4gIG9uU2VhcmNoRmxhZygpOiB2b2lkIHtcbiAgICB0aGlzLmRpYWxvZ1NlcnZpY2Uub3BlbihEaWFsb2dGbGFnQ29tcG9uZW50KVxuICAgICAgLm9uQ2xvc2Uuc3Vic2NyaWJlKChmbGFnSWNvbjogc3RyaW5nKSA9PiB7XG4gICAgICAgIHRoaXMuZm9ybUdyb3VwLmdldCgnaWNvbicpLnNldFZhbHVlKGZsYWdJY29uKTtcbiAgICAgICAgdGhpcy5mb3JtR3JvdXAuZ2V0KCdpY29uJykubWFya0FzRGlydHkoKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgb25SZXNldCgpOiB2b2lkIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9hcHAvc3lzY29uZi9sYW5ndWFnZSddKTtcbiAgfVxuXG4gIG9uU3VibWl0KCk6IHZvaWQge1xuICAgIGNvbnN0IGxvY2FsZURlZmF1bHQ6IENoZWNrYm94TW9kZWxbXSA9IHRoaXMuZm9ybUdyb3VwLmdldCgnZGVmYXVsdCcpLnZhbHVlO1xuICAgIGNvbnN0IGRhdGE6IExvY2FsZU1vZGVsID0ge1xuICAgICAgaWNvbjogdGhpcy5mb3JtR3JvdXAuZ2V0KCdpY29uJykudmFsdWUsXG4gICAgICBsb2NhbGVEZWZhdWx0OiAobG9jYWxlRGVmYXVsdCA/IHRydWUgOiBmYWxzZSksXG4gICAgICBsb2NhbGVDb2RlOiB0aGlzLmZvcm1Hcm91cC5nZXQoJ2xhbmd1YWdlJykudmFsdWVbJ3ZhbHVlJ10gP1xuICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtR3JvdXAuZ2V0KCdsYW5ndWFnZScpLnZhbHVlWyd2YWx1ZSddIDogdGhpcy5sYW5ndWFnZVNlcnZpY2UuZ2V0TG9jYWxlKCkubG9jYWxlQ29kZSxcbiAgICAgIGlkZW50aWZpZXI6IHRoaXMuZm9ybUdyb3VwLmdldCgnbGFuZ3VhZ2UnKS52YWx1ZVsnbGFiZWwnXSA/XG4gICAgICAgICAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5nZXQoJ2xhbmd1YWdlJykudmFsdWVbJ2xhYmVsJ10gOiB0aGlzLmxhbmd1YWdlU2VydmljZS5nZXRMb2NhbGUoKS5pZGVudGlmaWVyLFxuICAgICAgbG9jYWxlRW5hYmxlZDogdHJ1ZSxcbiAgICB9O1xuICAgIChzdXBlci5vblN1Ym1pdChkYXRhLCAnbWFzdGVyJywgJ3Bvc3QtbG9jYWxlJykgIGFzIE9ic2VydmFibGU8QXBpQmFzZVJlc3BvbnNlPilcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgIC5zdWJzY3JpYmUocmVzcG9uc2UgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2UucmVzcFN0YXR1c0NvZGUgPT09IFJlc3BvbnNlQ29kZS5PS19TQ1IwMTAudG9TdHJpbmcoKSkge1xuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2FwcC9zeXNjb25mL2xhbmd1YWdlJ10pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG59XG4iXX0=