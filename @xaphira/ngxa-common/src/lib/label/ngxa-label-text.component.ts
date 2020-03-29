import { Component, Input, ViewEncapsulation, Optional, Self, Inject, LOCALE_ID } from '@angular/core';
import { NgControl } from '@angular/forms';
import { DateFormat } from '@xaphira/utils';

@Component({
  selector: 'xa-label-text',
  styleUrls: ['./ngxa-label-text.component.scss'],
  templateUrl: './ngxa-label-text.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class NgxaLabelTextComponent {

    @Input() colLabel: number = 3;
    @Input() colContent: number = 9;
    @Input() format: string = DateFormat.DATE;
    @Input() skeleton: boolean = false;
    @Input() name: string;
    @Input() pattern: string;
    @Input() content: string = '';
    @Input() label: string = '';
    @Input() nolabel: boolean = false;
    @Input() disabled: boolean = false;
    @Input() required: boolean = false;
    @Input() paramError: any;

    constructor(@Optional() @Self() ngControl: NgControl,
      @Inject(LOCALE_ID) public locale: string) {
    }
}
