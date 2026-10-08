import { TestBed } from '@angular/core/testing';

import { LovedairiesService } from './lovedairies.service';

describe('LovedairiesService', () => {
  let service: LovedairiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LovedairiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
