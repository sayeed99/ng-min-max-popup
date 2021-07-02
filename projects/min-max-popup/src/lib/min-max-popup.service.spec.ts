import { TestBed } from '@angular/core/testing';

import { MinMaxPopupService } from './min-max-popup.service';

describe('MinMaxPopupService', () => {
  let service: MinMaxPopupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MinMaxPopupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
