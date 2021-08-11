import { Component, Inject, OnInit, OnDestroy, Injector } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NbDialogService } from '@nebular/theme';
import { EncryptionService } from '@xaphira/utils';
import { BaseFilterComponent, DatatableColumn, Sort, SelectParamModel } from '@xaphira/ngxa-common';
import {
  PANIC,
  PanicFactoryService,
  HttpBaseModel,
  ApiBaseResponse,
  SecurityResourceModel,
  ResponseCode,
  OAUTH_INFO,
} from '@xaphira/shared';
import { NgxaReportsPreviewComponent } from './preview/ngxa-reports-preview.component';
import { NgxaFakePromptComponent } from './prompt/ngxa-fake-prompt.component';
import { ReportsPanicService } from '../../services/reports-panic.service';

@Component({
  selector: 'xa-reports-emergency-detail.component',
  templateUrl: './ngxa-reports-emergency-detail.component.html',
  styleUrls: ['ngxa-reports-emergency-detail.component.scss'],
})
export class NgxaReportsEmergencyDetailComponent extends BaseFilterComponent<any> implements OnInit, OnDestroy {

  public profile: any = {};
  public image: string;
  public imageDefault: string = `${document.getElementsByTagName('base')[0].href}/assets/images/avatars/default.png`;

  public apiPath: HttpBaseModel;
  public columns: DatatableColumn[] = [
    { name: 'Evidence', prop: 'fileMetadata', width: 100, frozenLeft: true, type: 'button',
      button: 'Preview', buttonStatus: 'warning' },
    { name: 'File Size', prop: 'fileMetadata.size', width: 125, frozenLeft: true, type: 'prefix',
      prefix: 'bytes' },
    { name: 'Latitude', prop: 'location.latitude', width: 125, frozenLeft: true },
    { name: 'Longitude', prop: 'location.longitude', width: 125, frozenLeft: true },
    { name: 'Address', prop: 'location.formattedAddress', width: 350 },
    { name: 'Province', prop: 'location.province', width: 150 },
    { name: 'City', prop: 'location.city', width: 150 },
    { name: 'District', prop: 'location.district', width: 150 },
    { name: 'Device ID', prop: 'device.deviceID', width: 150 },
    { name: 'Device Name', prop: 'device.deviceName', width: 150 },
  ];
  public sort: Sort = {
    'desc': ['createdDate'],
  };
  public apiSelectParameter: HttpBaseModel;
  public paramSelectStatus: SelectParamModel[];
  public paramSelectEmergency: SelectParamModel[];
  public disabledFake: boolean;
  private username: string;
  private oauthResource: SecurityResourceModel;
  private enc: EncryptionService;
  private dataReport: any;
  public caseClosed: boolean = false;

  constructor(public injector: Injector, private router: Router,
    private route: ActivatedRoute,
    private dialogService: NbDialogService, private reportService: ReportsPanicService) {
    super(injector, null,
      {
        'status': [],
        'emergencyCategory': [],
      });
    this.enc = injector.get(EncryptionService);
    this.oauthResource = injector.get(OAUTH_INFO);
    this.apiSelectParameter = this.api['master']['select-parameter'];
    this.dataReport = this.reportService.getReports();
    this.keyword = {
      panicCode: this.dataReport['panicCode'],
    };
    this.username = this.dataReport['username'],
    this.apiPath = this.api['panic']['datatable-panic-detail'];
  }

  ngOnDestroy(): void {}

  ngOnInit(): void {
    this.formGroup.get('status').setValue(this.dataReport['status']);
    this.formGroup.get('emergencyCategory').setValue(this.dataReport['emergencyCategory']);
    if (this.dataReport['statusCode'] === 'STATUS_EMERGENCY.CASE_CLOSED') {
      this.caseClosed = true;
      this.formGroup.get('status').disable();
      this.formGroup.get('emergencyCategory').disable();
    }
    this.onInit('security', 'get-profile-personal');
    this.paramSelectStatus = [{
      key: 'parameterGroupCode',
      value: 'STATUS_EMERGENCY',
    }];
    this.paramSelectEmergency = [{
      key: 'parameterGroupCode',
      value: 'CATEGORY_EMERGENCY',
    }];
  }

  onInit(serviceName: string, apiName: string): void {
    this.loadingForm = true;
    const data: any = {
      username: this.username,
    };
    this.exec(serviceName, apiName, data)
      .subscribe(
        (success: any) => {
          this.loadingForm = false;
          this.profile = success;
          if (success['image']) {
            this.image = success['image'];
          }
        },
        (error: HttpErrorResponse) => {
          this.loadingForm = true;
          const err: ApiBaseResponse = error['error'];
          if (err) {
            this.toastr.showI18n(err.respStatusMessage[err.respStatusCode], true, null, 'danger');
          } else {
            this.toastr.showI18n(err as any, true, null, 'danger');
          }
        },
      );
  }

  valueSelect(prop: string): string {
    if (this.formGroup.get(prop).value) {
      if (this.formGroup.get(prop).value.value) {
        return this.formGroup.get(prop).value.value;
      } else {
        return null;
      }
    } else {
      return null;
    }
  }

  onPreview(data: any): void {
    this.dialogService.open(NgxaReportsPreviewComponent, {
      context: {
        checksum: data['checksum'],
        user: this.username,
        fileType: data['fileType'],
      },
    });
  }

  onFake(): void {
    this.dialogService.open(NgxaFakePromptComponent)
      .onClose.subscribe((password: string) => {
        if (password) {
          this.disabledFake = true;
          const data: any = {
            password: this.enc.encryptAES(this.oauthResource['aes_key'], password),
            panicCode: this.dataReport['panicCode'],
          };
          (super.onSubmit(data, 'panic', 'fake-report') as Observable<ApiBaseResponse>)
            .pipe(takeUntil(this.destroy$))
            .subscribe((response: ApiBaseResponse) => {
              if (response) {
                if (response.respStatusCode === ResponseCode.OK_SCR011.toString()) {
                  this.router.navigate(['/app/dashboard']);
                }
              }
            });
        } else {
          this.disabledFake = false;
        }
      });
  }

  onProcess(): void {
    const data: any = {
      panicCode: this.dataReport['panicCode'],
      status: this.valueSelect('status') ?
      this.valueSelect('status') : this.dataReport['statusCode'],
      emergencyCategory: this.valueSelect('emergencyCategory') ?
      this.valueSelect('emergencyCategory') : this.dataReport['emergencyCategoryCode'],
    };
    (super.onSubmit(data, 'panic', 'process-report') as Observable<ApiBaseResponse>)
      .pipe(takeUntil(this.destroy$))
      .subscribe((response: ApiBaseResponse) => {
        if (response) {
          if (response.respStatusCode === ResponseCode.OK_UPDATED.toString()) {
            this.router.navigate(['/app/dashboard']);
          }
        }
      });

  }

}
