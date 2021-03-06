import { Component, Injector } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { NbDialogService } from '@nebular/theme';
import { ApiBaseResponse } from '@xaphira/shared';
import { ResponseCode, OAUTH_INFO, SecurityResourceModel } from '@xaphira/shared';
import { AuthTokenService } from '@xaphira/ngxa-auth';
import { BaseFormComponent } from '@xaphira/ngxa-common';
import { DeactivatedPromptComponent } from './prompt/deactivated-prompt.component';
import { Observable } from 'rxjs';
import { EncryptionService } from '@xaphira/utils';

@Component({
  selector: 'xa-security-page',
  styleUrls: ['./security-page.component.scss'],
  templateUrl: './security-page.component.html',
})
export class SecurityPageComponent extends BaseFormComponent<any> {

  private enc: EncryptionService;
  private oauthResource: SecurityResourceModel;
  private authToken: AuthTokenService;

  constructor(public injector: Injector,
    private dialogService: NbDialogService) {
    super(injector, {
      'password': [],
    });
    this.enc = injector.get(EncryptionService);
    this.oauthResource = injector.get(OAUTH_INFO);
    this.authToken = injector.get(AuthTokenService);
  }

  onSubmit(): void {
    this.disabled = true;
    this.dialogService.open(DeactivatedPromptComponent)
      .onClose.subscribe((password: string) => {
        if (password) {
          this.disabled = true;
          const data: any = {
            password: this.enc.encryptAES(this.oauthResource['aes_key'], password),
          };
          (super.onSubmit(data, 'security', 'deactivated') as Observable<ApiBaseResponse>)
            .pipe(takeUntil(this.destroy$))
            .subscribe((response: ApiBaseResponse) => {
              if (response) {
                if (response.respStatusCode === ResponseCode.OK_SCR003.toString()) {
                  this.authToken.logout();
                }
              }
            });
        } else {
          this.disabled = false;
        }
      });
  }

}
