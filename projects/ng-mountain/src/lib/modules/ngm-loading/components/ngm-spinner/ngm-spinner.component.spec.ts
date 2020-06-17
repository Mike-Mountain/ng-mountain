import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgmSpinnerComponent } from './ngm-spinner.component';

describe('SpinnerComponent', () => {
  let component: NgmSpinnerComponent;
  let fixture: ComponentFixture<NgmSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgmSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgmSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
