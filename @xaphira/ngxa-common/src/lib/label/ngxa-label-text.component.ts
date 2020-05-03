import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'xa-label-text',
  styleUrls: ['./ngxa-label-text.component.scss'],
  templateUrl: './ngxa-label-text.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class NgxaLabelTextComponent {

    @Input() colLabel: number = 3;
    @Input() colContent: number = 9;
    @Input() skeleton: boolean = false;
    @Input() name: string;
    @Input() content: string = '';
    @Input() label: string = '';
    @Input() nolabel: boolean = false;
    @Input() required: boolean = false;
    @Input() paramError: any;

    constructor() {}
}
