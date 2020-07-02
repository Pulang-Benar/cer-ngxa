/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Injector } from '@angular/core';
import { BaseFormComponent } from '@xaphira/ngxa-common';
import { Router, ActivatedRoute } from '@angular/router';
import { ParameterService } from '../../services/parameter.service';
import { ParameterModel, ParameterGroupModel } from '../../models/parameter.model';
import { ResponseCode } from '@xaphira/shared';
import { LocaleModel } from '../../../language/models/locale.model';
import { FormControl } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
var ParameterDoDetailPageComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ParameterDoDetailPageComponent, _super);
    function ParameterDoDetailPageComponent(injector, router, parameterService, route) {
        var _this = _super.call(this, injector, {
            'parameterCode': [],
            'en-US': [],
            'id-ID': [],
        }) || this;
        _this.injector = injector;
        _this.router = router;
        _this.parameterService = parameterService;
        _this.route = route;
        _this.action = 'Add';
        _this.parameter = new ParameterModel();
        _this.parameterGroup = new ParameterGroupModel();
        _this.allLocales = [];
        _this.locales = [];
        _this.localeDefault = new LocaleModel();
        _this.isEdit = false;
        if (_this.parameterService.getParameterGroup()) {
            _this.parameterGroup = _this.parameterService.getParameterGroup();
        }
        else {
            _this.router.navigate(['/app/sysconf/parameter']);
        }
        if ((_this.route.snapshot.params['action'] === 'edit')) {
            if (_this.parameterService.getParameter()) {
                _this.action = 'Edit';
                _this.isEdit = true;
                _this.parameter = _this.parameterService.getParameter();
            }
            else {
                _this.router.navigate(['/app/sysconf/parameter']);
            }
        }
        if (!_this.parameterService.getLocales()) {
            _this.apiPathLocale = _this.api['master']['all-locale'];
            _this.http.HTTP_AUTH(_this.apiPathLocale).subscribe((/**
             * @param {?} response
             * @return {?}
             */
            function (response) {
                _this.parameterService.setLocales(response);
                _this.splitLocale(response);
            }));
        }
        else {
            _this.splitLocale(_this.parameterService.getLocales());
        }
        if (_this.isEdit) {
            _this.formGroup.get('parameterCode').setValue(_this.parameter.parameterCode);
            _this.formGroup.get('parameterCode').disable({ emitEvent: true });
            _this.apiPathParameterI18n = _this.api['master']['parameter-i18n'];
            _this.loadingForm = true;
            _this.http.HTTP_AUTH(_this.apiPathParameterI18n, {
                'parameterCode': _this.parameter.parameterCode,
            }).subscribe((/**
             * @param {?} response
             * @return {?}
             */
            function (response) {
                response.forEach((/**
                 * @param {?} data
                 * @return {?}
                 */
                function (data) {
                    _this.formGroup.get(data.locale).setValue(data.parameterValue);
                    _this.loadingForm = false;
                }));
            }));
        }
        return _this;
    }
    /**
     * @param {?} values
     * @return {?}
     */
    ParameterDoDetailPageComponent.prototype.splitLocale = /**
     * @param {?} values
     * @return {?}
     */
    function (values) {
        var _this = this;
        this.allLocales = values;
        values.forEach((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            if (data.localeDefault) {
                _this.localeDefault = data;
            }
            else {
                _this.locales.push(data);
            }
            _this.formGroup.removeControl(data.localeCode);
            _this.formGroup.addControl(data.localeCode, new FormControl());
        }));
    };
    /**
     * @return {?}
     */
    ParameterDoDetailPageComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    ParameterDoDetailPageComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    ParameterDoDetailPageComponent.prototype.onReset = /**
     * @return {?}
     */
    function () {
        this.router.navigate(['/app/sysconf/parameter/detail']);
    };
    /**
     * @return {?}
     */
    ParameterDoDetailPageComponent.prototype.onSubmit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var data = this.formGroup.value;
        if (this.isEdit)
            data.parameterCode = this.parameter.parameterCode;
        data.parameterGroupCode = this.parameterGroup.parameterGroupCode;
        data.parameterValues = {};
        this.allLocales.forEach((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            data.parameterValues[value.localeCode] = _this.formGroup.get(value.localeCode).value;
        }));
        ((/** @type {?} */ (_super.prototype.onSubmit.call(this, data, 'master', 'post-parameter-i18n'))))
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            if (response.respStatusCode === ResponseCode.OK_SCR009.toString()) {
                _this.router.navigate(['/app/sysconf/parameter/detail']);
            }
        }));
    };
    ParameterDoDetailPageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'xa-parameter-do-detail-page',
                    template: "<xa-page-outlet [header]=\"action + ' Parameter'\">\n  <div class=\"row\">\n    <div class=\"col-md-12 col-lg-12 col-xxxl-6\">\n      <form [formGroup]=\"formGroup\">\n        <xa-input-text\n          [name]=\"'parameterCode'\"\n          [label]=\"'Parameter Code'\"\n          [required]=\"!isEdit\"\n          [skeleton]=\"loadingForm\"\n          formControlName=\"parameterCode\">\n        </xa-input-text>\n        <div class=\"header\">\n          <div class=\"form-group row\">\n            <label\n              for=\"Parameter Value\"\n              class=\"label col-sm-3 col-form-label\"\n              *ngIf=\"!loadingForm; else labelskeleton\">\n              {{'Parameter Value' | translate}}\n            </label>\n            <ng-template #labelskeleton>\n              <div class=\"col-sm-3\">\n                <div\n                  [ngClass]=\"{\n                    'label-skeleton': true,\n                    'skeleton': loadingForm\n                  }\">\n                </div>\n              </div>\n            </ng-template>\n            <div class=\"col-sm-9\">\n              <xa-input-icon\n                [name]=\"localeDefault.localeCode\"\n                [nolabel]=\"true\"\n                [required]=\"true\"\n                [colLabel]=\"0\"\n                [colInput]=\"12\"\n                [icon]=\"'flag-icon flag-icon-' + localeDefault.icon\"\n                [skeleton]=\"loadingForm\"\n                formControlName=\"{{localeDefault.localeCode}}\">\n              </xa-input-icon>\n            </div>\n          </div>\n        </div>\n        <xa-input-icon *ngFor=\"let i18n of locales\"\n          [name]=\"i18n.localeCode\"\n          [nolabel]=\"true\"\n          [icon]=\"'flag-icon flag-icon-'+ i18n.icon\"\n          [skeleton]=\"loadingForm\"\n          formControlName=\"{{i18n.localeCode}}\">\n        </xa-input-icon>\n        <div class=\"form-group row\">\n          <div class=\"offset-sm-3 col-sm-9\" *ngIf=\"!loadingForm; else buttonskeleton\">\n            <button\n              type=\"reset\"\n              status=\"danger\"\n              (click)=\"onReset()\"\n              class=\"reset-left\"\n              nbButton>\n              {{ 'Cancel' | translate}}\n            </button>\n            <button\n              type=\"submit\"\n              status=\"primary\"\n              (click)=\"onSubmit()\"\n              [disabled]=\"formGroup.invalid || formGroup.pristine || disabled\"\n              class=\"submit-right\"\n              nbButton>\n              {{ action | translate}}\n            </button>\n          </div>\n          <ng-template #buttonskeleton>\n            <div class=\"offset-sm-3 col-sm-9\">\n              <div\n                [ngClass]=\"{\n                  'button-skeleton': true,\n                  'skeleton': loadingForm\n                }\">\n              </div>\n            </div>\n          </ng-template>\n        </div>\n      </form>\n    </div>\n  </div>\n</xa-page-outlet>\n",
                    styles: [".reset-left{margin-right:.25rem}.submit-right{margin-left:.25rem}"]
                }] }
    ];
    /** @nocollapse */
    ParameterDoDetailPageComponent.ctorParameters = function () { return [
        { type: Injector },
        { type: Router },
        { type: ParameterService },
        { type: ActivatedRoute }
    ]; };
    return ParameterDoDetailPageComponent;
}(BaseFormComponent));
export { ParameterDoDetailPageComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyYW1ldGVyLWRvLWRldGFpbC1wYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B4YXBoaXJhL25neGEtc3lzLyIsInNvdXJjZXMiOlsibGliL3BhcmFtZXRlci9kZXRhaWwvZG8vcGFyYW1ldGVyLWRvLWRldGFpbC1wYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsUUFBUSxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxjQUFjLEVBQXNCLG1CQUFtQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDdkcsT0FBTyxFQUFrQyxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDcEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQztJQUtvRCwwREFBc0I7SUFZeEUsd0NBQW1CLFFBQWtCLEVBQzNCLE1BQWMsRUFDZCxnQkFBa0MsRUFDbEMsS0FBcUI7UUFIL0IsWUFJRSxrQkFBTSxRQUFRLEVBQUU7WUFDZCxlQUFlLEVBQUUsRUFBRTtZQUNuQixPQUFPLEVBQUUsRUFBRTtZQUNYLE9BQU8sRUFBRSxFQUFFO1NBQ1osQ0FBQyxTQXNDSDtRQTlDa0IsY0FBUSxHQUFSLFFBQVEsQ0FBVTtRQUMzQixZQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2Qsc0JBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxXQUFLLEdB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QTBDOzs7OztJQUMxQywrQ0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0b3IsIE9uRGVzdHJveSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCYXNlRm9ybUNvbXBvbmVudCB9IGZyb20gJ0B4YXBoaXJhL25neGEtY29tbW9uJztcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUGFyYW1ldGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3BhcmFtZXRlci5zZXJ2aWNlJztcbmltcG9ydCB7IFBhcmFtZXRlck1vZGVsLCBQYXJhbWV0ZXJJMThuTW9kZWwsIFBhcmFtZXRlckdyb3VwTW9kZWwgfSBmcm9tICcuLi8uLi9tb2RlbHMvcGFyYW1ldGVyLm1vZGVsJztcbmltcG9ydCB7IEh0dHBCYXNlTW9kZWwsIEFwaUJhc2VSZXNwb25zZSwgUmVzcG9uc2VDb2RlIH0gZnJvbSAnQHhhcGhpcmEvc2hhcmVkJztcbmltcG9ydCB7IExvY2FsZU1vZGVsIH0gZnJvbSAnLi4vLi4vLi4vbGFuZ3VhZ2UvbW9kZWxzL2xvY2FsZS5tb2RlbCc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAneGEtcGFyYW1ldGVyLWRvLWRldGFpbC1wYWdlJyxcbiAgc3R5bGVVcmxzOiBbJy4vcGFyYW1ldGVyLWRvLWRldGFpbC1wYWdlLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9wYXJhbWV0ZXItZG8tZGV0YWlsLXBhZ2UuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBQYXJhbWV0ZXJEb0RldGFpbFBhZ2VDb21wb25lbnQgZXh0ZW5kcyBCYXNlRm9ybUNvbXBvbmVudDxhbnk+IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gIHB1YmxpYyBhY3Rpb246ICdBZGQnIHwgJ0VkaXQnID0gJ0FkZCc7XG4gIHB1YmxpYyBwYXJhbWV0ZXI6IFBhcmFtZXRlck1vZGVsID0gbmV3IFBhcmFtZXRlck1vZGVsKCk7XG4gIHB1YmxpYyBwYXJhbWV0ZXJHcm91cDogUGFyYW1ldGVyR3JvdXBNb2RlbCA9IG5ldyBQYXJhbWV0ZXJHcm91cE1vZGVsKCk7XG4gIHB1YmxpYyBhbGxMb2NhbGVzOiBMb2NhbGVNb2RlbFtdID0gW107XG4gIHB1YmxpYyBsb2NhbGVzOiBMb2NhbGVNb2RlbFtdID0gW107XG4gIHB1YmxpYyBsb2NhbGVEZWZhdWx0OiBMb2NhbGVNb2RlbCA9IG5ldyBMb2NhbGVNb2RlbCgpO1xuICBwdWJsaWMgaXNFZGl0OiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBhcGlQYXRoUGFyYW1ldGVySTE4bjogSHR0cEJhc2VNb2RlbDtcbiAgcHVibGljIGFwaVBhdGhMb2NhbGU6IEh0dHBCYXNlTW9kZWw7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGluamVjdG9yOiBJbmplY3RvcixcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgcGFyYW1ldGVyU2VydmljZTogUGFyYW1ldGVyU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkge1xuICAgIHN1cGVyKGluamVjdG9yLCB7XG4gICAgICAncGFyYW1ldGVyQ29kZSc6IFtdLFxuICAgICAgJ2VuLVVTJzogW10sXG4gICAgICAnaWQtSUQnOiBbXSxcbiAgICB9KTtcbiAgICBpZiAodGhpcy5wYXJhbWV0ZXJTZXJ2aWNlLmdldFBhcmFtZXRlckdyb3VwKCkpIHtcbiAgICAgIHRoaXMucGFyYW1ldGVyR3JvdXAgPSB0aGlzLnBhcmFtZXRlclNlcnZpY2UuZ2V0UGFyYW1ldGVyR3JvdXAoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvYXBwL3N5c2NvbmYvcGFyYW1ldGVyJ10pO1xuICAgIH1cbiAgICBpZiAoKHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zWydhY3Rpb24nXSA9PT0gJ2VkaXQnKSkge1xuICAgICAgaWYgKHRoaXMucGFyYW1ldGVyU2VydmljZS5nZXRQYXJhbWV0ZXIoKSkge1xuICAgICAgICB0aGlzLmFjdGlvbiA9ICdFZGl0JztcbiAgICAgICAgdGhpcy5pc0VkaXQgPSB0cnVlO1xuICAgICAgICB0aGlzLnBhcmFtZXRlciA9IHRoaXMucGFyYW1ldGVyU2VydmljZS5nZXRQYXJhbWV0ZXIoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2FwcC9zeXNjb25mL3BhcmFtZXRlciddKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCF0aGlzLnBhcmFtZXRlclNlcnZpY2UuZ2V0TG9jYWxlcygpKSB7XG4gICAgICB0aGlzLmFwaVBhdGhMb2NhbGUgPSB0aGlzLmFwaVsnbWFzdGVyJ11bJ2FsbC1sb2NhbGUnXTtcbiAgICAgIHRoaXMuaHR0cC5IVFRQX0FVVEgodGhpcy5hcGlQYXRoTG9jYWxlKS5zdWJzY3JpYmUocmVzcG9uc2UgPT4ge1xuICAgICAgICB0aGlzLnBhcmFtZXRlclNlcnZpY2Uuc2V0TG9jYWxlcyhyZXNwb25zZSk7XG4gICAgICAgIHRoaXMuc3BsaXRMb2NhbGUocmVzcG9uc2UpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3BsaXRMb2NhbGUodGhpcy5wYXJhbWV0ZXJTZXJ2aWNlLmdldExvY2FsZXMoKSk7XG4gICAgfVxuICAgIGlmICh0aGlzLmlzRWRpdCkge1xuICAgICAgdGhpcy5mb3JtR3JvdXAuZ2V0KCdwYXJhbWV0ZXJDb2RlJykuc2V0VmFsdWUodGhpcy5wYXJhbWV0ZXIucGFyYW1ldGVyQ29kZSk7XG4gICAgICB0aGlzLmZvcm1Hcm91cC5nZXQoJ3BhcmFtZXRlckNvZGUnKS5kaXNhYmxlKHtlbWl0RXZlbnQ6IHRydWV9KTtcbiAgICAgIHRoaXMuYXBpUGF0aFBhcmFtZXRlckkxOG4gPSB0aGlzLmFwaVsnbWFzdGVyJ11bJ3BhcmFtZXRlci1pMThuJ107XG4gICAgICB0aGlzLmxvYWRpbmdGb3JtID0gdHJ1ZTtcbiAgICAgIHRoaXMuaHR0cC5IVFRQX0FVVEgodGhpcy5hcGlQYXRoUGFyYW1ldGVySTE4biwge1xuICAgICAgICAncGFyYW1ldGVyQ29kZSc6IHRoaXMucGFyYW1ldGVyLnBhcmFtZXRlckNvZGUsXG4gICAgICB9KS5zdWJzY3JpYmUoKHJlc3BvbnNlOiBQYXJhbWV0ZXJJMThuTW9kZWxbXSkgPT4ge1xuICAgICAgICByZXNwb25zZS5mb3JFYWNoKGRhdGEgPT4ge1xuICAgICAgICAgIHRoaXMuZm9ybUdyb3VwLmdldChkYXRhLmxvY2FsZSkuc2V0VmFsdWUoZGF0YS5wYXJhbWV0ZXJWYWx1ZSk7XG4gICAgICAgICAgdGhpcy5sb2FkaW5nRm9ybSA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHNwbGl0TG9jYWxlKHZhbHVlczogTG9jYWxlTW9kZWxbXSk6IHZvaWQge1xuICAgIHRoaXMuYWxsTG9jYWxlcyA9IHZhbHVlcztcbiAgICB2YWx1ZXMuZm9yRWFjaChkYXRhID0+IHtcbiAgICAgIGlmIChkYXRhLmxvY2FsZURlZmF1bHQpIHtcbiAgICAgICAgdGhpcy5sb2NhbGVEZWZhdWx0ID0gZGF0YTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubG9jYWxlcy5wdXNoKGRhdGEpO1xuICAgICAgfVxuICAgICAgdGhpcy5mb3JtR3JvdXAucmVtb3ZlQ29udHJvbChkYXRhLmxvY2FsZUNvZGUpO1xuICAgICAgdGhpcy5mb3JtR3JvdXAuYWRkQ29udHJvbChkYXRhLmxvY2FsZUNvZGUsIG5ldyBGb3JtQ29udHJvbCgpKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge31cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHt9XG5cbiAgb25SZXNldCgpOiB2b2lkIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9hcHAvc3lzY29uZi9wYXJhbWV0ZXIvZGV0YWlsJ10pO1xuICB9XG5cbiAgb25TdWJtaXQoKSB7XG4gICAgY29uc3QgZGF0YTogYW55ID0gdGhpcy5mb3JtR3JvdXAudmFsdWU7XG4gICAgaWYgKHRoaXMuaXNFZGl0KSBkYXRhLnBhcmFtZXRlckNvZGUgPSB0aGlzLnBhcmFtZXRlci5wYXJhbWV0ZXJDb2RlO1xuICAgIGRhdGEucGFyYW1ldGVyR3JvdXBDb2RlID0gdGhpcy5wYXJhbWV0ZXJHcm91cC5wYXJhbWV0ZXJHcm91cENvZGU7XG4gICAgZGF0YS5wYXJhbWV0ZXJWYWx1ZXMgPSB7fTtcbiAgICB0aGlzLmFsbExvY2FsZXMuZm9yRWFjaCh2YWx1ZSA9PiB7XG4gICAgICBkYXRhLnBhcmFtZXRlclZhbHVlc1t2YWx1ZS5sb2NhbGVDb2RlXSA9IHRoaXMuZm9ybUdyb3VwLmdldCh2YWx1ZS5sb2NhbGVDb2RlKS52YWx1ZTtcbiAgICB9KTtcbiAgICAoc3VwZXIub25TdWJtaXQoZGF0YSwgJ21hc3RlcicsICdwb3N0LXBhcmFtZXRlci1pMThuJykgIGFzIE9ic2VydmFibGU8QXBpQmFzZVJlc3BvbnNlPilcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgIC5zdWJzY3JpYmUocmVzcG9uc2UgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2UucmVzcFN0YXR1c0NvZGUgPT09IFJlc3BvbnNlQ29kZS5PS19TQ1IwMDkudG9TdHJpbmcoKSkge1xuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2FwcC9zeXNjb25mL3BhcmFtZXRlci9kZXRhaWwnXSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbn1cbiJdfQ==