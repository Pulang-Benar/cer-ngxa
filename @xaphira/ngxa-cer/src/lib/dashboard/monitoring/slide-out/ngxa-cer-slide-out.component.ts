import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'xa-cer-slide-out',
  styleUrls: ['./ngxa-cer-slide-out.component.scss'],
  templateUrl: './ngxa-cer-slide-out.component.html',
})
export class NgxaCerSlideOutComponent {

  @Input() public showDetail: boolean = false;
  @Output() public onToggle: EventEmitter<boolean> = new EventEmitter<boolean>();

  toggleDetail() {
    this.showDetail = !this.showDetail;
    this.onToggle.emit(this.showDetail);
  }
}
