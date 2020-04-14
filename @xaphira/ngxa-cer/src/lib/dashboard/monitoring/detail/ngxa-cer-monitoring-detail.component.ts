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
import { NgxaCerMonitoringPreviewComponent } from '../preview/ngxa-cer-monitoring-preview.component';
import { NgxaFakeReportPromptComponent } from './prompt/ngxa-fake-report-prompt.component';

@Component({
  selector: 'xa-cer-monitoring-detail',
  templateUrl: './ngxa-cer-monitoring-detail.component.html',
  styleUrls: ['ngxa-cer-monitoring-detail.component.scss'],
})
export class NgxaCerMonitoringDetailComponent extends BaseFilterComponent<any> implements OnInit, OnDestroy {

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
    { name: 'Area', prop: 'location.area', width: 150, frozenLeft: true },
    { name: 'Address', prop: 'location.formattedAddress', width: 350 },
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
  private panicCode: string;
  private username: string;
  private oauthResource: SecurityResourceModel;
  private enc: EncryptionService;

  constructor(public injector: Injector, private router: Router,
    private route: ActivatedRoute, @Inject(PANIC) private panicService: PanicFactoryService,
    private dialogService: NbDialogService) {
    super(injector, null,
      {
        'status': [],
        'categoryEmergency': [],
      });
    this.enc = injector.get(EncryptionService);
    this.oauthResource = injector.get(OAUTH_INFO);
    this.apiSelectParameter = this.api['master']['select-parameter'];
    if (this.route.snapshot.params['code']) {
      this.panicCode = this.route.snapshot.params['code'];
      this.keyword = {
        panicCode: this.panicCode,
      };
    } else {
      this.router.navigate(['/app/dashboard']);
    }
    this.apiPath = this.api['panic']['datatable-panic-detail'];
  }

  ngOnDestroy(): void {}

  ngOnInit(): void {
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
    this.panicService.getPanic(this.panicCode).then((value: any) => {
      this.loadingForm = true;
      this.username = value.username;
      const data: any = {
        username: value.username,
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
    });
  }

  onPreview(data: any): void {
    this.dialogService.open(NgxaCerMonitoringPreviewComponent, {
      context: {
        checksum: data['checksum'],
        user: this.username,
        fileType: data['fileType'],
      },
    });
  }

  onSelectStatus(select: any): void {
  }

  onSelectUrgency(select: any): void {
  }

  onFake(): void {
    this.dialogService.open(NgxaFakeReportPromptComponent)
      .onClose.subscribe((password: string) => {
        if (password) {
          this.disabledFake = true;
          const data: any = {
            password: this.enc.encryptAES(this.oauthResource['aes_key'], password),
            panicCode: this.panicCode,
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

  }

}
