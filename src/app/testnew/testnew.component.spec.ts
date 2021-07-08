import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestnewComponent } from './testnew.component';

describe('TestnewComponent', () => {
  let component: TestnewComponent;
  let fixture: ComponentFixture<TestnewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestnewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
