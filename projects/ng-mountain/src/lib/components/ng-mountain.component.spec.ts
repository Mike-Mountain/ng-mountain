import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgMountainComponent } from './ng-mountain.component';

describe('NgMountainComponent', () => {
  let component: NgMountainComponent;
  let fixture: ComponentFixture<NgMountainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgMountainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgMountainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
