import { TestBed, async, inject } from '@angular/core/testing';

import { AutoguardGuard } from './autoguard.guard';

describe('AutoguardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AutoguardGuard]
    });
  });

  it('should ...', inject([AutoguardGuard], (guard: AutoguardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
