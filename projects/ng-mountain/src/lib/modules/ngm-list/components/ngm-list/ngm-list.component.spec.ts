import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgmListComponent } from './ngm-list.component';

describe('NgmListComponent', () => {
  let component: NgmListComponent;
  let fixture: ComponentFixture<NgmListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgmListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgmListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
