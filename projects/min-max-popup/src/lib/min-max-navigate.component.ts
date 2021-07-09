import { Component, OnInit, Input } from '@angular/core';
import { MinMaxDirective } from './min-max.directive';

@Component({
  selector: 'lib-min-max-navigate',
  templateUrl: './min-max-navigate.component.html',
  styleUrls: ['./min-max-navigate.component.scss'],
})
export class MinMaxNavigateComponent implements OnInit {

  constructor(public minMaxDirective: MinMaxDirective) {}
  currentInstance: any = 0;

  ngOnInit(): void {
  }

  moveLeft() {
      this.minMaxDirective.moveDockerComponent(-1)
  }

  moveRight() {
      this.minMaxDirective.moveDockerComponent(1)
  }
}