/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Injector } from '@angular/core';
import { BaseFormComponent } from '@xaphira/ngxa-common';
import { Router, ActivatedRoute } from '@angular/router';
import { ParameterService } from '../../services/parameter.service';
import { ParameterModel, ParameterGroupModel } from '../../models/parameter.model';
import { ResponseCode } from '@xaphira/shared';
import { LocaleModel } from '../../../language/models/locale.model';
import { FormControl } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
export class ParameterDoDetailPageComponent extends BaseFormComponent {
    /**
     * @param {?} injector
     * @param {?} router
     * @param {?} parameterService
     * @param {?} route
     */
    constructor(injector, router, parameterService, route) {
        super(injector, {
            'parameterCode': [],
            'en-US': [],
            'id-ID': [],
        });
        this.injector = injector;
        this.router = router;
        this.parameterService = parameterService;
        this.route = route;
        this.action = 'Add';
        this.parameter = new ParameterModel();
        this.parameterGroup = new ParameterGroupModel();
        this.allLocales = [];
        this.locales = [];
        this.localeDefault = new LocaleModel();
        this.isEdit = false;
        if (this.parameterService.getParameterGroup()) {
            this.parameterGroup = this.parameterService.getParameterGroup();
        }
        else {
            this.router.navigate(['/app/sysconf/parameter']);
        }
        if ((this.route.snapshot.params['action'] === 'edit')) {
            if (this.parameterService.getParameter()) {
                this.action = 'Edit';
                this.isEdit = true;
                this.parameter = this.parameterService.getParameter();
            }
            else {
                this.router.navigate(['/app/sysconf/parameter']);
            }
        }
        if (!this.parameterService.getLocales()) {
            this.apiPathLocale = this.api['master']['all-locale'];
            this.http.HTTP_AUTH(this.apiPathLocale).subscribe((/**
             * @param {?} response
             * @return {?}
             */
            response => {
                this.parameterService.setLocales(response);
                this.splitLocale(response);
            }));
        }
        else {
            this.splitLocale(this.parameterService.getLocales());
        }
        if (this.isEdit) {
            this.formGroup.get('parameterCode').setValue(this.parameter.parameterCode);
            this.formGroup.get('parameterCode').disable({ emitEvent: true });
            this.apiPathParameterI18n = this.api['master']['parameter-i18n'];
            this.loadingForm = true;
            this.http.HTTP_AUTH(this.apiPathParameterI18n, {
                'parameterCode': this.parameter.parameterCode,
            }).subscribe((/**
             * @param {?} response
             * @return {?}
             */
            (response) => {
                response.forEach((/**
                 * @param {?} data
                 * @return {?}
                 */
                data => {
                    this.formGroup.get(data.locale).setValue(data.parameterValue);
                    this.loadingForm = false;
                }));
            }));
        }
    }
    /**
     * @param {?} values
     * @return {?}
     */
    splitLocale(values) {
        this.allLocales = values;
        values.forEach((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            if (data.localeDefault) {
                this.localeDefault = data;
            }
            else {
                this.locales.push(data);
            }
            this.formGroup.removeControl(data.localeCode);
            this.formGroup.addControl(data.localeCode, new FormControl());
        }));
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
    onReset() {
        this.router.navigate(['/app/sysconf/parameter/detail']);
    }
    /**
     * @return {?}
     */
    onSubmit() {
        /** @type {?} */
        const data = this.formGroup.value;
        if (this.isEdit)
            data.parameterCode = this.parameter.parameterCode;
        data.parameterGroupCode = this.parameterGroup.parameterGroupCode;
        data.parameterValues = {};
        this.allLocales.forEach((/**
         * @param {?} value
         * @return {?}
         */
        value => {
            data.parameterValues[value.localeCode] = this.formGroup.get(value.localeCode).value;
        }));
        ((/** @type {?} */ (super.onSubmit(data, 'master', 'post-parameter-i18n'))))
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @param {?} response
         * @return {?}
         */
        response => {
            if (response.respStatusCode === ResponseCode.OK_SCR009.toString()) {
                this.router.navigate(['/app/sysconf/parameter/detail']);
            }
        }));
    }
}
ParameterDoDetailPageComponent.decorators = [
    { type: Component, args: [{
                selector: 'xa-parameter-do-detail-page',
                template: "<xa-page-outlet [header]=\"action + ' Parameter'\">\n  <div class=\"row\">\n    <div class=\"col-md-12 col-lg-12 col-xxxl-6\">\n      <form [formGroup]=\"formGroup\">\n        <xa-input-text\n          [name]=\"'parameterCode'\"\n          [label]=\"'Parameter Code'\"\n          [required]=\"!isEdit\"\n          [skeleton]=\"loadingForm\"\n          formControlName=\"parameterCode\">\n        </xa-input-text>\n        <div class=\"header\">\n          <div class=\"form-group row\">\n            <label\n              for=\"Parameter Value\"\n              class=\"label col-sm-3 col-form-label\"\n              *ngIf=\"!loadingForm; else labelskeleton\">\n              {{'Parameter Value' | translate}}\n            </label>\n            <ng-template #labelskeleton>\n              <div class=\"col-sm-3\">\n                <div\n                  [ngClass]=\"{\n                    'label-skeleton': true,\n                    'skeleton': loadingForm\n                  }\">\n                </div>\n              </div>\n            </ng-template>\n            <div class=\"col-sm-9\">\n              <xa-input-icon\n                [name]=\"localeDefault.localeCode\"\n                [nolabel]=\"true\"\n                [required]=\"true\"\n                [colLabel]=\"0\"\n                [colInput]=\"12\"\n                [icon]=\"'flag-icon flag-icon-' + localeDefault.icon\"\n                [skeleton]=\"loadingForm\"\n                formControlName=\"{{localeDefault.localeCode}}\">\n              </xa-input-icon>\n            </div>\n          </div>\n        </div>\n        <xa-input-icon *ngFor=\"let i18n of locales\"\n          [name]=\"i18n.localeCode\"\n          [nolabel]=\"true\"\n          [icon]=\"'flag-icon flag-icon-'+ i18n.icon\"\n          [skeleton]=\"loadingForm\"\n          formControlName=\"{{i18n.localeCode}}\">\n        </xa-input-icon>\n        <div class=\"form-group row\">\n          <div class=\"offset-sm-3 col-sm-9\" *ngIf=\"!loadingForm; else buttonskeleton\">\n            <button\n              type=\"reset\"\n              status=\"danger\"\n              (click)=\"onReset()\"\n              class=\"reset-left\"\n              nbButton>\n              {{ 'Cancel' | translate}}\n            </button>\n            <button\n              type=\"submit\"\n              status=\"primary\"\n              (click)=\"onSubmit()\"\n              [disabled]=\"formGroup.invalid || formGroup.pristine || disabled\"\n              class=\"submit-right\"\n              nbButton>\n              {{ action | translate}}\n            </button>\n          </div>\n          <ng-template #buttonskeleton>\n            <div class=\"offset-sm-3 col-sm-9\">\n              <div\n                [ngClass]=\"{\n                  'button-skeleton': true,\n                  'skeleton': loadingForm\n                }\">\n              </div>\n            </div>\n          </ng-template>\n        </div>\n      </form>\n    </div>\n  </div>\n</xa-page-outlet>\n",
                styles: [".reset-left{margin-right:.25rem}.submit-right{margin-left:.25rem}"]
            }] }
];
/** @nocollapse */
ParameterDoDetailPageComponent.ctorParameters = () => [
    { type: Injector },
    { type: Router },
    { type: ParameterService },
    { type: ActivatedRoute }
];
if (false) {
    /** @type {?} */
    ParameterDoDetailPageComponent.prototype.action;
    /** @type {?} */
    ParameterDoDetailPageComponent.prototype.parameter;
    /** @type {?} */
    ParameterDoDetailPageComponent.prototype.parameterGroup;
    /** @type {?} */
    ParameterDoDetailPageComponent.prototype.allLocales;
    /** @type {?} */
    ParameterDoDetailPageComponent.prototype.locales;
    /** @type {?} */
    ParameterDoDetailPageComponent.prototype.localeDefault;
    /** @type {?} */
    ParameterDoDetailPageComponent.prototype.isEdit;
    /** @type {?} */
    ParameterDoDetailPageComponent.prototype.apiPathParameterI18n;
    /** @type {?} */
    ParameterDoDetailPageComponent.prototype.apiPathLocale;
    /** @type {?} */
    ParameterDoDetailPageComponent.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    ParameterDoDetailPageComponent.prototype.router;
    /**
     * @type {?}
     * @private
     */
    ParameterDoDetailPageComponent.prototype.parameterService;
    /**
     * @type {?}
     * @private
     */
    ParameterDoDetailPageComponent.prototype.route;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyYW1ldGVyLWRvLWRldGFpbC1wYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B4YXBoaXJhL25neGEtc3lzLyIsInNvdXJjZXMiOlsibGliL3BhcmFtZXRlci9kZXRhaWwvZG8vcGFyYW1ldGVyLWRvLWRldGFpbC1wYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxRQUFRLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDcEUsT0FBTyxFQUFFLGNBQWMsRUFBc0IsbUJBQW1CLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN2RyxPQUFPLEVBQWtDLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9FLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUNwRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBTzNDLE1BQU0sT0FBTyw4QkFBK0IsU0FBUSxpQkFBc0I7Ozs7Ozs7SUFZeEUsWUFBbUIsUUFBa0IsRUFDM0IsTUFBYyxFQUNkLGdCQUFrQyxFQUNsQyxLQUFxQjtRQUM3QixLQUFLLENBQUMsUUFBUSxFQUFFO1lBQ2QsZUFBZSxFQUFFLEVBQUU7WUFDbkIsT0FBTyxFQUFFLEVBQUU7WUFDWCxPQUFPLEVBQUUsRUFBRTtTQUNaLENBQUMsQ0FBQztRQVJjLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDM0IsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FB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Y3RvciwgT25EZXN0cm95LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJhc2VGb3JtQ29tcG9uZW50IH0gZnJvbSAnQHhhcGhpcmEvbmd4YS1jb21tb24nO1xuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBQYXJhbWV0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvcGFyYW1ldGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGFyYW1ldGVyTW9kZWwsIFBhcmFtZXRlckkxOG5Nb2RlbCwgUGFyYW1ldGVyR3JvdXBNb2RlbCB9IGZyb20gJy4uLy4uL21vZGVscy9wYXJhbWV0ZXIubW9kZWwnO1xuaW1wb3J0IHsgSHR0cEJhc2VNb2RlbCwgQXBpQmFzZVJlc3BvbnNlLCBSZXNwb25zZUNvZGUgfSBmcm9tICdAeGFwaGlyYS9zaGFyZWQnO1xuaW1wb3J0IHsgTG9jYWxlTW9kZWwgfSBmcm9tICcuLi8uLi8uLi9sYW5ndWFnZS9tb2RlbHMvbG9jYWxlLm1vZGVsJztcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd4YS1wYXJhbWV0ZXItZG8tZGV0YWlsLXBhZ2UnLFxuICBzdHlsZVVybHM6IFsnLi9wYXJhbWV0ZXItZG8tZGV0YWlsLXBhZ2UuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL3BhcmFtZXRlci1kby1kZXRhaWwtcGFnZS5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFBhcmFtZXRlckRvRGV0YWlsUGFnZUNvbXBvbmVudCBleHRlbmRzIEJhc2VGb3JtQ29tcG9uZW50PGFueT4gaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgcHVibGljIGFjdGlvbjogJ0FkZCcgfCAnRWRpdCcgPSAnQWRkJztcbiAgcHVibGljIHBhcmFtZXRlcjogUGFyYW1ldGVyTW9kZWwgPSBuZXcgUGFyYW1ldGVyTW9kZWwoKTtcbiAgcHVibGljIHBhcmFtZXRlckdyb3VwOiBQYXJhbWV0ZXJHcm91cE1vZGVsID0gbmV3IFBhcmFtZXRlckdyb3VwTW9kZWwoKTtcbiAgcHVibGljIGFsbExvY2FsZXM6IExvY2FsZU1vZGVsW10gPSBbXTtcbiAgcHVibGljIGxvY2FsZXM6IExvY2FsZU1vZGVsW10gPSBbXTtcbiAgcHVibGljIGxvY2FsZURlZmF1bHQ6IExvY2FsZU1vZGVsID0gbmV3IExvY2FsZU1vZGVsKCk7XG4gIHB1YmxpYyBpc0VkaXQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIGFwaVBhdGhQYXJhbWV0ZXJJMThuOiBIdHRwQmFzZU1vZGVsO1xuICBwdWJsaWMgYXBpUGF0aExvY2FsZTogSHR0cEJhc2VNb2RlbDtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBwYXJhbWV0ZXJTZXJ2aWNlOiBQYXJhbWV0ZXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7XG4gICAgc3VwZXIoaW5qZWN0b3IsIHtcbiAgICAgICdwYXJhbWV0ZXJDb2RlJzogW10sXG4gICAgICAnZW4tVVMnOiBbXSxcbiAgICAgICdpZC1JRCc6IFtdLFxuICAgIH0pO1xuICAgIGlmICh0aGlzLnBhcmFtZXRlclNlcnZpY2UuZ2V0UGFyYW1ldGVyR3JvdXAoKSkge1xuICAgICAgdGhpcy5wYXJhbWV0ZXJHcm91cCA9IHRoaXMucGFyYW1ldGVyU2VydmljZS5nZXRQYXJhbWV0ZXJHcm91cCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9hcHAvc3lzY29uZi9wYXJhbWV0ZXInXSk7XG4gICAgfVxuICAgIGlmICgodGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXNbJ2FjdGlvbiddID09PSAnZWRpdCcpKSB7XG4gICAgICBpZiAodGhpcy5wYXJhbWV0ZXJTZXJ2aWNlLmdldFBhcmFtZXRlcigpKSB7XG4gICAgICAgIHRoaXMuYWN0aW9uID0gJ0VkaXQnO1xuICAgICAgICB0aGlzLmlzRWRpdCA9IHRydWU7XG4gICAgICAgIHRoaXMucGFyYW1ldGVyID0gdGhpcy5wYXJhbWV0ZXJTZXJ2aWNlLmdldFBhcmFtZXRlcigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvYXBwL3N5c2NvbmYvcGFyYW1ldGVyJ10pO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIXRoaXMucGFyYW1ldGVyU2VydmljZS5nZXRMb2NhbGVzKCkpIHtcbiAgICAgIHRoaXMuYXBpUGF0aExvY2FsZSA9IHRoaXMuYXBpWydtYXN0ZXInXVsnYWxsLWxvY2FsZSddO1xuICAgICAgdGhpcy5odHRwLkhUVFBfQVVUSCh0aGlzLmFwaVBhdGhMb2NhbGUpLnN1YnNjcmliZShyZXNwb25zZSA9PiB7XG4gICAgICAgIHRoaXMucGFyYW1ldGVyU2VydmljZS5zZXRMb2NhbGVzKHJlc3BvbnNlKTtcbiAgICAgICAgdGhpcy5zcGxpdExvY2FsZShyZXNwb25zZSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zcGxpdExvY2FsZSh0aGlzLnBhcmFtZXRlclNlcnZpY2UuZ2V0TG9jYWxlcygpKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuaXNFZGl0KSB7XG4gICAgICB0aGlzLmZvcm1Hcm91cC5nZXQoJ3BhcmFtZXRlckNvZGUnKS5zZXRWYWx1ZSh0aGlzLnBhcmFtZXRlci5wYXJhbWV0ZXJDb2RlKTtcbiAgICAgIHRoaXMuZm9ybUdyb3VwLmdldCgncGFyYW1ldGVyQ29kZScpLmRpc2FibGUoe2VtaXRFdmVudDogdHJ1ZX0pO1xuICAgICAgdGhpcy5hcGlQYXRoUGFyYW1ldGVySTE4biA9IHRoaXMuYXBpWydtYXN0ZXInXVsncGFyYW1ldGVyLWkxOG4nXTtcbiAgICAgIHRoaXMubG9hZGluZ0Zvcm0gPSB0cnVlO1xuICAgICAgdGhpcy5odHRwLkhUVFBfQVVUSCh0aGlzLmFwaVBhdGhQYXJhbWV0ZXJJMThuLCB7XG4gICAgICAgICdwYXJhbWV0ZXJDb2RlJzogdGhpcy5wYXJhbWV0ZXIucGFyYW1ldGVyQ29kZSxcbiAgICAgIH0pLnN1YnNjcmliZSgocmVzcG9uc2U6IFBhcmFtZXRlckkxOG5Nb2RlbFtdKSA9PiB7XG4gICAgICAgIHJlc3BvbnNlLmZvckVhY2goZGF0YSA9PiB7XG4gICAgICAgICAgdGhpcy5mb3JtR3JvdXAuZ2V0KGRhdGEubG9jYWxlKS5zZXRWYWx1ZShkYXRhLnBhcmFtZXRlclZhbHVlKTtcbiAgICAgICAgICB0aGlzLmxvYWRpbmdGb3JtID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgc3BsaXRMb2NhbGUodmFsdWVzOiBMb2NhbGVNb2RlbFtdKTogdm9pZCB7XG4gICAgdGhpcy5hbGxMb2NhbGVzID0gdmFsdWVzO1xuICAgIHZhbHVlcy5mb3JFYWNoKGRhdGEgPT4ge1xuICAgICAgaWYgKGRhdGEubG9jYWxlRGVmYXVsdCkge1xuICAgICAgICB0aGlzLmxvY2FsZURlZmF1bHQgPSBkYXRhO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5sb2NhbGVzLnB1c2goZGF0YSk7XG4gICAgICB9XG4gICAgICB0aGlzLmZvcm1Hcm91cC5yZW1vdmVDb250cm9sKGRhdGEubG9jYWxlQ29kZSk7XG4gICAgICB0aGlzLmZvcm1Hcm91cC5hZGRDb250cm9sKGRhdGEubG9jYWxlQ29kZSwgbmV3IEZvcm1Db250cm9sKCkpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7fVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge31cblxuICBvblJlc2V0KCk6IHZvaWQge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2FwcC9zeXNjb25mL3BhcmFtZXRlci9kZXRhaWwnXSk7XG4gIH1cblxuICBvblN1Ym1pdCgpIHtcbiAgICBjb25zdCBkYXRhOiBhbnkgPSB0aGlzLmZvcm1Hcm91cC52YWx1ZTtcbiAgICBpZiAodGhpcy5pc0VkaXQpIGRhdGEucGFyYW1ldGVyQ29kZSA9IHRoaXMucGFyYW1ldGVyLnBhcmFtZXRlckNvZGU7XG4gICAgZGF0YS5wYXJhbWV0ZXJHcm91cENvZGUgPSB0aGlzLnBhcmFtZXRlckdyb3VwLnBhcmFtZXRlckdyb3VwQ29kZTtcbiAgICBkYXRhLnBhcmFtZXRlclZhbHVlcyA9IHt9O1xuICAgIHRoaXMuYWxsTG9jYWxlcy5mb3JFYWNoKHZhbHVlID0+IHtcbiAgICAgIGRhdGEucGFyYW1ldGVyVmFsdWVzW3ZhbHVlLmxvY2FsZUNvZGVdID0gdGhpcy5mb3JtR3JvdXAuZ2V0KHZhbHVlLmxvY2FsZUNvZGUpLnZhbHVlO1xuICAgIH0pO1xuICAgIChzdXBlci5vblN1Ym1pdChkYXRhLCAnbWFzdGVyJywgJ3Bvc3QtcGFyYW1ldGVyLWkxOG4nKSAgYXMgT2JzZXJ2YWJsZTxBcGlCYXNlUmVzcG9uc2U+KVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgLnN1YnNjcmliZShyZXNwb25zZSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5yZXNwU3RhdHVzQ29kZSA9PT0gUmVzcG9uc2VDb2RlLk9LX1NDUjAwOS50b1N0cmluZygpKSB7XG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvYXBwL3N5c2NvbmYvcGFyYW1ldGVyL2RldGFpbCddKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxufVxuIl19