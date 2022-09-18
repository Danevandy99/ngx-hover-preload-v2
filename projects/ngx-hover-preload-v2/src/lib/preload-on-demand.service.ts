import { Injectable } from "@angular/core";
import { ReplaySubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PreloadOnDemandService {
  private preloadOnDemandSource$: ReplaySubject<string> = new ReplaySubject<string>(1);
  public preloadOnDemand$ = this.preloadOnDemandSource$.asObservable();

  startPreload(routePath: string) {
    this.preloadOnDemandSource$.next(routePath);
  }
}
