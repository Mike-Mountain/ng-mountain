import { TestBed } from '@angular/core/testing';

import { NgmLoadingService } from './ngm-loading.service';

describe('LoadingService', () => {
  let service: NgmLoadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgmLoadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
