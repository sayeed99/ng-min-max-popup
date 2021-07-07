import { Component } from '@angular/core';
import { MinMaxPopupOpenService } from 'min-max-popup';
import { TestComponent } from './test/test.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'matbox';
  inX: number = 800;
  inY: number = 200;

  constructor(
    private minmaxservice: MinMaxPopupOpenService
  ) {}

  createComponent() {
    this.minmaxservice.createComponent(TestComponent);
  }
}
