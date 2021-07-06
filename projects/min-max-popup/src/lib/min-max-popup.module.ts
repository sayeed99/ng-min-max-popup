import { NgModule } from '@angular/core';
import { MinMaxPopupComponent } from './min-max-popup.component';
import { CommonModule } from '@angular/common';
import { AngularDraggableModule } from 'angular2-draggable';

@NgModule({
  declarations: [
    MinMaxPopupComponent
  ],
  imports: [CommonModule, AngularDraggableModule],
  exports: [
    MinMaxPopupComponent
  ]
})
export class MinMaxPopupModule { }
