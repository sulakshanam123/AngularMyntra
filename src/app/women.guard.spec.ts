import { TestBed } from '@angular/core/testing';

import { WomenGuard } from './women.guard';

describe('WomenGuard', () => {
  let guard: WomenGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(WomenGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
