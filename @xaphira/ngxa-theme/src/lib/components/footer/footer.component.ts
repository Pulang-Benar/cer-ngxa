import { Component } from '@angular/core';

@Component({
  selector: 'xa-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
  <span class="created-by">© 2020 <b><a href="#" target="_blank">{{ 'Civilians Emergency Report' | translate }}</a></b></span>
  `,
})
export class FooterComponent {
}
