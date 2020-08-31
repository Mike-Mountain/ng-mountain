import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgmDataTableComponent } from './ngm-data-table.component';

describe('NgmDataTableComponent', () => {
  let component: NgmDataTableComponent;
  let fixture: ComponentFixture<NgmDataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgmDataTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgmDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
