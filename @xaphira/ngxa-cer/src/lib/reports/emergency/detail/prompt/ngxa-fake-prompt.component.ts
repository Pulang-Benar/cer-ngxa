import { Component } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'xa-fake-prompt',
  templateUrl: './ngxa-fake-prompt.component.html',
  styleUrls: ['ngxa-fake-prompt.component.scss'],
})
export class NgxaFakePromptComponent {

  public disabled: boolean = false;
  public password: string;

  constructor(protected ref: NbDialogRef<NgxaFakePromptComponent>) {
  }

  submit(password) {
    this.disabled = true;
    this.ref.close(password);
  }
}
