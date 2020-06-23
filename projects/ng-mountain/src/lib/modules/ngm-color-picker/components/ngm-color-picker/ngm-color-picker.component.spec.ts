import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgmColorPickerComponent } from './ngm-color-picker.component';

describe('NgmColorPickerComponent', () => {
  let component: NgmColorPickerComponent;
  let fixture: ComponentFixture<NgmColorPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgmColorPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgmColorPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
