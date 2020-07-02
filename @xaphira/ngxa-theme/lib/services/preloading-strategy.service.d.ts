import 'rxjs/add/observable/of';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable } from 'rxjs/Observable';
export declare class CustomPreloadingStrategy implements PreloadingStrategy {
    preloadedModules: string[];
    preload(route: Route, load: () => Observable<any>): Observable<any>;
}
