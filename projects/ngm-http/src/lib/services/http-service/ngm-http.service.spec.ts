import { TestBed } from '@angular/core/testing';

import { NgmHttpService } from './ngm-http.service';

describe('NgmHttpService', () => {
  let service: NgmHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgmHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
