import {
  Component,
  Inject,
  OnDestroy,
  Input,
  ViewEncapsulation,
  Optional,
  Self,
  LOCALE_ID,
} from '@angular/core';
import { NgControl } from '@angular/forms';
import { NgxaValueAccessor } from '../../base/ngxa-value-accessor.component';

@Component({
  selector: 'xa-textarea',
  styleUrls: ['./textarea.component.scss'],
  templateUrl: './textarea.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class NgxaTextareaComponent extends NgxaValueAccessor<string> implements OnDestroy {
  @Input() placeholder: string;
  @Input() colLabel: number = 3;
  @Input() colInput: number = 9;
  @Input() minLength: number = 0;
  @Input() maxLength: number = 250;
  @Input() height: number = 120;

  constructor(@Optional() @Self() ngControl: NgControl,
    @Inject(LOCALE_ID) public locale: string) {
    super(ngControl, locale);
  }

  onInit(): void {
    this.paramError = {
      value: this.minLength,
    };
  }

  ngOnDestroy(): void {}

}
