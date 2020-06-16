import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileUploadDocsComponent } from './file-upload-docs.component';

describe('FileUploadDocsComponent', () => {
  let component: FileUploadDocsComponent;
  let fixture: ComponentFixture<FileUploadDocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileUploadDocsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileUploadDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
