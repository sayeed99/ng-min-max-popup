import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MinMaxPopupModule, MinMaxDirective } from 'min-max-popup';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestComponent } from './test/test.component';
import { TestnewComponent } from './testnew/testnew.component';
import { Test3Component } from './test3/test3.component';
import { Test4Component } from './test4/test4.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TestnewComponent,
    Test3Component,
    Test4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MinMaxPopupModule,
    BrowserAnimationsModule
  ],
  providers: [
    MinMaxDirective
  ],
  entryComponents: [
    TestComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
