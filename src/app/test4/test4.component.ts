import { Component, OnInit } from '@angular/core';
import { MinMaxDirective } from 'min-max-popup';
import { TestComponent } from '../test/test.component'
import { TestnewComponent } from '../testnew/testnew.component'
import { Router } from '@angular/router';

@Component({
  selector: 'app-test4',
  templateUrl: './test4.component.html',
  styleUrls: ['./test4.component.scss']
})
export class Test4Component implements OnInit {

  constructor(
    private minmaxservice: MinMaxDirective,
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  createComponent() {
    let data = {'test' : 'test'};
    this.minmaxservice.createComponent(TestComponent, data);
  }

  createComponent2() {
    let data = {'test' : 'test'};
    this.minmaxservice.createComponent(TestnewComponent, data);    
  }

  moveRoute() {
    this.router.navigate(['']);
  }
}
