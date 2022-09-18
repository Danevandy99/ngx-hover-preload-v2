import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HoverPreloadStrategy } from 'ngx-hover-preload-v2';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./modules/about/about.module').then((m) => m.AboutModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: HoverPreloadStrategy })
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
