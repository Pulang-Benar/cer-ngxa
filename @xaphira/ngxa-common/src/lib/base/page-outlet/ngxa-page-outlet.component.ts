import { Component, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'xa-page-outlet',
  styleUrls: ['./ngxa-page-outlet.component.scss'],
  templateUrl: './ngxa-page-outlet.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class NgxaPageOutletComponent {
  @Input() public header: string;
  @Input() public url: string;
  @Input() public width: number = 12;
  @Input() public dataSelect: any[];
  @Input() public selected: any;
  @Output() public selectChange: EventEmitter<any> = new EventEmitter<any>();

  constructor(private router: Router) {}

  public back(): boolean {
    this.router.navigate([this.url]);
    return false;
  }

  public onChangeSelect(event: any) {
    this.selected = event;
    this.selectChange.emit(event);
  }

}
