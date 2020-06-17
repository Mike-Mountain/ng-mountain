import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResizeDocsComponent } from './resize-docs.component';

describe('ResizeDocsComponent', () => {
  let component: ResizeDocsComponent;
  let fixture: ComponentFixture<ResizeDocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResizeDocsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResizeDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
