import { Component } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'xa-fake-report-prompt',
  templateUrl: './ngxa-fake-report-prompt.component.html',
  styleUrls: ['ngxa-fake-report-prompt.component.scss'],
})
export class NgxaFakeReportPromptComponent {

  public disabled: boolean = false;
  public password: string;

  constructor(protected ref: NbDialogRef<NgxaFakeReportPromptComponent>) {
  }

  submit(password) {
    this.disabled = true;
    this.ref.close(password);
  }
}
