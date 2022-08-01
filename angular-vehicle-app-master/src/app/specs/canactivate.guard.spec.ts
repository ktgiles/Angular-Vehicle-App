import { TestBed } from '@angular/core/testing';

import { CanactivateGuard } from '../guards/canactivate.guard';

describe('CanactivateGuard', () => {
  let guard: CanactivateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanactivateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
