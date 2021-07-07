import { Component } from '@angular/core';
import { MinMaxDirective } from 'min-max-popup';
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
    private minmaxservice: MinMaxDirective
  ) {}

  createComponent() {
    let data = {'test' : 'test'};
    this.minmaxservice.createComponent(TestComponent, data);
  }
}
