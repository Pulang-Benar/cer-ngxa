import { InjectionToken } from '@angular/core';
import { PanicFactoryService } from '../../services/cer/panic-factory.service';

export const PANIC: InjectionToken<PanicFactoryService> =
new InjectionToken<PanicFactoryService>('Panic Resource');
