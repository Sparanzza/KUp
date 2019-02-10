import { TestBed } from '@angular/core/testing';

import { LoadingStartService } from './loading-start.service';

describe('LoadingStartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoadingStartService = TestBed.get(LoadingStartService);
    expect(service).toBeTruthy();
  });
});
