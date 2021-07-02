import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinMaxPopupComponent } from './min-max-popup.component';

describe('MinMaxPopupComponent', () => {
  let component: MinMaxPopupComponent;
  let fixture: ComponentFixture<MinMaxPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinMaxPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinMaxPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
