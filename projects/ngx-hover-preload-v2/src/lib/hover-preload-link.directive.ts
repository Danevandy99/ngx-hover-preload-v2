/* eslint-disable @angular-eslint/directive-selector */
import { DOCUMENT } from '@angular/common';
import {
  Directive, HostListener, Inject, Optional,
} from '@angular/core';
import { RouterLink, RouterLinkWithHref } from '@angular/router';
import { PreloadOnDemandService } from './preload-on-demand.service';

@Directive({
  selector: '[routerLink]',
})
export class HoverPreloadLinkDirective {
  private window: (Window & typeof globalThis) | null = this.document.defaultView;
  private routerLink: RouterLink | RouterLinkWithHref;

  constructor(
    private onDemandPreloadService: PreloadOnDemandService,
    @Inject(DOCUMENT) private document: Document,
    @Optional() link: RouterLink,
    @Optional() linkWithHref: RouterLinkWithHref
  ) {
    this.routerLink = link || linkWithHref;
  }

  @HostListener('mouseenter')
  private onMouseEnter(): void {
    // Check whether we have the window. If so, use the requestIdleCallback and call our prefetch function.
    if (this.window) {
      this.window.requestIdleCallback(() => this.prefetch());
    } else {
      // If we don't have the window variable, just call the prefetch function directly.
      this.prefetch();
    }
  }

  private prefetch(): void {
    const path = this.getPath(this.routerLink);

    if (!!path) {
      this.onDemandPreloadService.startPreload(path);
    }
  }

  private getPath(routerLink: RouterLink | RouterLinkWithHref): string | null {
    if ("href" in routerLink && routerLink.href) {
      return routerLink.href;
    } else if ("urlTree" in routerLink && routerLink.urlTree) {
      return routerLink.urlTree.toString();
    } else {
      return null;
    }
  }
}
