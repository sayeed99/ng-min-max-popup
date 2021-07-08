import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MinMaxPopupModule, MinMaxDirective } from 'min-max-popup';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestComponent } from './test/test.component';
import { TestnewComponent } from './testnew/testnew.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TestnewComponent
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
