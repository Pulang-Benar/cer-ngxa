import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'xa-cer-slide-out',
  styleUrls: ['./ngxa-cer-slide-out.component.scss'],
  templateUrl: './ngxa-cer-slide-out.component.html',
})
export class NgxaCerSlideOutComponent {

  @Input() public showInfo: boolean = false;
  @Output() public onToggle: EventEmitter<boolean> = new EventEmitter<boolean>();

  toggleDetail() {
    this.showInfo = !this.showInfo;
    this.onToggle.emit(this.showInfo);
  }
}
