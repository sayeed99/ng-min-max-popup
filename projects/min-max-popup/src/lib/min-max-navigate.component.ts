import { Component, OnInit, Input } from '@angular/core';
import { MinMaxPopupService } from './min-max-popup.service';
import { MinMaxDirective } from './min-max.directive';

@Component({
  selector: 'lib-min-max-navigate',
  templateUrl: './min-max-navigate.component.html',
  styleUrls: ['./min-max-navigate.component.scss'],
})
export class MinMaxNavigateComponent implements OnInit {

  constructor(public popupservice: MinMaxPopupService, public minMaxDirective: MinMaxDirective) {}
  currentInstance: any = 0;

  ngOnInit(): void {
    this.currentInstance = this.popupservice.initModal();
  }

  moveLeft() {

  }

  moveRight() {

  }
}