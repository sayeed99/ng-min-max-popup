import { NgModule } from '@angular/core';
import { MinMaxPopupComponent } from './min-max-popup.component';
import {BrowserModule} from '@angular/platform-browser';
import { AngularDraggableModule } from 'angular2-draggable';

@NgModule({
  declarations: [
    MinMaxPopupComponent
  ],
  imports: [
    BrowserModule,
    AngularDraggableModule
  ],
  exports: [
    MinMaxPopupComponent
  ]
})
export class MinMaxPopupModule { }
