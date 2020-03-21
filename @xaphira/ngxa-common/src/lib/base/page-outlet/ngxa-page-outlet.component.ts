import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'xa-page-outlet',
  styleUrls: ['./ngxa-page-outlet.component.scss'],
  templateUrl: './ngxa-page-outlet.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class NgxaPageOutletComponent {
  @Input() header: string;
  @Input() url: string;
  @Input() width: number = 12;

  constructor(private router: Router) {}

  public back(): boolean {
      this.router.navigate([this.url]);
      return false;
  }

}
