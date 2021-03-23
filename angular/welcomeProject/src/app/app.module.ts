import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildComponent } from './child.component';
import { Child1Component } from './child1.component';

@NgModule({
  declarations: [
    AppComponent, ChildComponent,Child1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [], // angular service provider
  bootstrap: [AppComponent] // first or parent component
})
export class AppModule { }
