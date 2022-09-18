import { NgModule } from '@angular/core';
import { HoverPreloadStrategy } from './hover-preload.strategy';
import { HoverPreloadLinkDirective } from './hover-preload-link.directive';


@NgModule({
  declarations: [
    HoverPreloadLinkDirective,
  ],
  imports: [],
  providers: [
    HoverPreloadStrategy
  ],
  exports: [
    HoverPreloadLinkDirective,
  ]
})
export class HoverPreloadModule { }
