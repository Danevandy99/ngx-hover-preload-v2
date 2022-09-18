import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { EMPTY, mergeMap, Observable, ReplaySubject } from 'rxjs';
import { PreloadOnDemandService } from './preload-on-demand.service';

@Injectable({
  providedIn: null,
  deps: [PreloadOnDemandService]
})
export class HoverPreloadStrategy implements PreloadingStrategy {
  constructor(
    private preloadOnDemandService: PreloadOnDemandService,
  ) { }

  public preload(route: Route, load: () => Observable<any>): Observable<any> {
    return this.preloadOnDemandService.preloadOnDemand$.pipe(
      mergeMap(routePathToPreload => {
        const shouldPreload = this.preloadCheck(route, routePathToPreload);

        if (shouldPreload) {
          return load();
        } else {
          return EMPTY;
        }
      })
    );
  }

  private preloadCheck(route: Route, routePathToPreload: string): boolean {
    if (!route.path) {
      return false;
    }

    const routePathRegex = route.path
      .split('/')
      .map(segment => {
        if (segment.startsWith(':')) {
          return '[a-zA-Z0-9]*'
        } else {
          return segment;
        }
      })
      .join('\/');

    const doesMatchPattern = !!routePathToPreload.match(routePathRegex)?.length;

    return doesMatchPattern;
  }
}


