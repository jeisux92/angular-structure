import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { OneComponent } from './one.component';
import { RoutingModule } from './one.routing';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    OneComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RoutingModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [OneComponent]
})
export class OneModule { }
