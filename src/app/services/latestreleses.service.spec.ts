import { TestBed } from '@angular/core/testing';

import { LatestrelesesService } from './latestreleses.service';

describe('LatestrelesesService', () => {
  let service: LatestrelesesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LatestrelesesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
