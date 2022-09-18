import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HoverPreloadModule, OnDemandPreloadService } from 'ngx-hover-preload-v2';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HoverPreloadModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
