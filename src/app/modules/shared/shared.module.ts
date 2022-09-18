import { HoverPreloadModule } from 'ngx-hover-preload-v2';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HoverPreloadModule,
  ],
  exports: [
    CommonModule,
    HoverPreloadModule,
  ]
})
export class SharedModule { }
