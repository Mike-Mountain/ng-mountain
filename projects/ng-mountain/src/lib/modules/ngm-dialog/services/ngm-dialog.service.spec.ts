import { TestBed } from '@angular/core/testing';

import { NgmDialogService } from './ngm-dialog.service';

describe('DialogService', () => {
  let service: NgmDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgmDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
