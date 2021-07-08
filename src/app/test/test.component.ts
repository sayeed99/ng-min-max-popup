import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
  @Input() data: any = {};
  @Input() parentRef: any;
  @Input() unique_key: any;

  color: any = "";

  constructor() {}

  ngOnInit(): void {
    console.log(this.data);
    this.color = this.getRandomColor();
  }

  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  close() {
    this.parentRef.remove(this.unique_key);
  }
}
