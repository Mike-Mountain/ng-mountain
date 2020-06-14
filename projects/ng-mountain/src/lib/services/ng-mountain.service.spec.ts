import { TestBed } from '@angular/core/testing';

import { NgMountainService } from './ng-mountain.service';

describe('NgMountainService', () => {
  let service: NgMountainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgMountainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
