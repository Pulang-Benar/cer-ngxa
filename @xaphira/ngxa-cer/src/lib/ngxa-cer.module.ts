import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PANIC_INDEXED_DB, PANIC } from '@xaphira/shared';
import { PanicIndexedDBService } from './storage/panic-indexeddb.service';
import { PanicService } from './services/panic.service';

const providers = [
  { provide: PANIC_INDEXED_DB, useClass: PanicIndexedDBService },
  { provide: PANIC, useClass: PanicService },
];

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [],
  declarations: [],
})
export class NgxaCerModule {

  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: NgxaCerModule,
      providers: [
        ...providers,
      ],
    };
  }

}
