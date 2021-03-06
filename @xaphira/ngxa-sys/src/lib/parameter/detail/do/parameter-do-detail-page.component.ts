import { Component, OnInit, Injector, OnDestroy, Inject } from '@angular/core';
import { BaseFormComponent } from '@xaphira/ngxa-common';
import { Router, ActivatedRoute } from '@angular/router';
import { ParameterService } from '../../services/parameter.service';
import { ParameterModel, ParameterI18nModel, ParameterGroupModel } from '../../models/parameter.model';
import { HttpBaseModel, ApiBaseResponse, ResponseCode } from '@xaphira/shared';
import { LocaleModel } from '../../../language/models/locale.model';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'xa-parameter-do-detail-page',
  styleUrls: ['./parameter-do-detail-page.component.scss'],
  templateUrl: './parameter-do-detail-page.component.html',
})
export class ParameterDoDetailPageComponent extends BaseFormComponent<any> implements OnInit, OnDestroy {

  public action: 'Add' | 'Edit' = 'Add';
  public parameter: ParameterModel = new ParameterModel();
  public parameterGroup: ParameterGroupModel = new ParameterGroupModel();
  public allLocales: LocaleModel[] = [];
  public locales: LocaleModel[] = [];
  public localeDefault: LocaleModel = new LocaleModel();
  public isEdit: boolean = false;
  public apiPathParameterI18n: HttpBaseModel;
  public apiPathLocale: HttpBaseModel;

  constructor(public injector: Injector,
    private router: Router,
    private parameterService: ParameterService,
    private route: ActivatedRoute) {
    super(injector, {
      'parameterCode': [],
      'en-US': [],
      'id-ID': [],
    });
    if (this.parameterService.getParameterGroup()) {
      this.parameterGroup = this.parameterService.getParameterGroup();
    } else {
      this.router.navigate(['/app/sysconf/parameter']);
    }
    if ((this.route.snapshot.params['action'] === 'edit')) {
      if (this.parameterService.getParameter()) {
        this.action = 'Edit';
        this.isEdit = true;
        this.parameter = this.parameterService.getParameter();
      } else {
        this.router.navigate(['/app/sysconf/parameter']);
      }
    }
    if (!this.parameterService.getLocales()) {
      this.apiPathLocale = this.api['master']['all-locale'];
      this.http.HTTP_AUTH(this.apiPathLocale).subscribe(response => {
        this.parameterService.setLocales(response);
        this.splitLocale(response);
      });
    } else {
      this.splitLocale(this.parameterService.getLocales());
    }
    if (this.isEdit) {
      this.formGroup.get('parameterCode').setValue(this.parameter.parameterCode);
      this.formGroup.get('parameterCode').disable({emitEvent: true});
      this.apiPathParameterI18n = this.api['master']['parameter-i18n'];
      this.loadingForm = true;
      this.http.HTTP_AUTH(this.apiPathParameterI18n, {
        'parameterCode': this.parameter.parameterCode,
      }).subscribe((response: ParameterI18nModel[]) => {
        response.forEach(data => {
          this.formGroup.get(data.locale).setValue(data.parameterValue);
          this.loadingForm = false;
        });
      });
    }
  }

  splitLocale(values: LocaleModel[]): void {
    this.allLocales = values;
    values.forEach(data => {
      if (data.localeDefault) {
        this.localeDefault = data;
      } else {
        this.locales.push(data);
      }
      this.formGroup.removeControl(data.localeCode);
      this.formGroup.addControl(data.localeCode, new FormControl());
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {}

  onReset(): void {
    this.router.navigate(['/app/sysconf/parameter/detail']);
  }

  onSubmit() {
    const data: any = this.formGroup.value;
    if (this.isEdit) data.parameterCode = this.parameter.parameterCode;
    data.parameterGroupCode = this.parameterGroup.parameterGroupCode;
    data.parameterValues = {};
    this.allLocales.forEach(value => {
      data.parameterValues[value.localeCode] = this.formGroup.get(value.localeCode).value;
    });
    (super.onSubmit(data, 'master', 'post-parameter-i18n')  as Observable<ApiBaseResponse>)
      .pipe(takeUntil(this.destroy$))
      .subscribe(response => {
        if (response.respStatusCode === ResponseCode.OK_SCR009.toString()) {
          this.router.navigate(['/app/sysconf/parameter/detail']);
        }
      });
  }

}
