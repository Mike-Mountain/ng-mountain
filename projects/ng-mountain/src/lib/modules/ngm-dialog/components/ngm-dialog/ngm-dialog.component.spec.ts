import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgmDialogComponent } from './ngm-dialog.component';

describe('DialogComponent', () => {
  let component: NgmDialogComponent;
  let fixture: ComponentFixture<NgmDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgmDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
