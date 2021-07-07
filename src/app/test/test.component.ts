import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  @Input() data: any = {};
  @Input() parentRef: any;
  @Input() unique_key: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.data)
  }

  close() {
    this.parentRef.remove(this.unique_key)
  }

}
