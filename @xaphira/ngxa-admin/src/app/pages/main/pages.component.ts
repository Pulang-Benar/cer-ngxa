import { Component, Inject } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { TranslateService } from '@ngx-translate/core';
import { AUTH_INDEXED_DB, IndexedDBEncFactoryService } from '@xaphira/shared';
import { Subject } from 'rxjs';

@Component({
  selector: 'xa-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <xa-one-column-layout>
      <nb-menu [items]="menus"></nb-menu>
      <router-outlet></router-outlet>
    </xa-one-column-layout>
  `,
})
export class PagesComponent {

  public menus: NbMenuItem[] = [];
  private destroy$: Subject<void> = new Subject<void>();

  constructor(@Inject(AUTH_INDEXED_DB) private authIndexedDB: IndexedDBEncFactoryService,
    private translate: TranslateService) {
      this.setMenus();
      this.translate.onTranslationChange.takeUntil(this.destroy$)
        .subscribe(() => {
          this.setMenus();
      });
  }

  setMenus() {
    this.authIndexedDB.getEnc('menus').then((value: string) => {
      this.menus = JSON.parse(value);
    });
  }

}
