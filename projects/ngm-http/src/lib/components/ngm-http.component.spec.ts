import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgmHttpComponent } from './ngm-http.component';

describe('NgmHttpComponent', () => {
  let component: NgmHttpComponent;
  let fixture: ComponentFixture<NgmHttpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgmHttpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgmHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
