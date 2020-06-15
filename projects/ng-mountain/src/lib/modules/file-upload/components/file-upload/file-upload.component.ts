import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HTMLInputEvent} from '../../../../models/global.model';
import {FileItem} from "../../models/file-upload.model";

@Component({
  selector: 'ngm-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

  @Input() multiple: boolean;
  @Input() type: string;
  @Output() public files = new EventEmitter<Set<File> | File>();

  public fileSet: Set<File> | File;
  public fileUrls: FileItem[] = [];

  constructor() {
  }

  ngOnInit(): void {
    if (this.multiple) {
      this.fileSet = new Set();
    }
  }

  public addFile(event: Event): void {
    if (this.multiple) {
      Array.from((event as HTMLInputEvent).target.files).forEach(file => {
        (this.fileSet as Set<File>).add(file);
        this.createPreview(file);
      });
      this.files.emit(this.fileSet);
    } else {
      this.fileSet = (event as HTMLInputEvent).target.files[0];
      this.createPreview((event as HTMLInputEvent).target.files[0]);
      this.files.emit(this.fileSet);
    }
    this.files.emit(this.fileSet);
  }

  public removeFile(file: string) {
    this.fileUrls = this.fileUrls.filter(item => item.name !== file);
    if (this.multiple) {
      this.fileSet = new Set(Array.from(this.fileSet as Set<File>).filter(item => item.name !== file));
    } else {
      this.fileSet = undefined;
    }
    this.files.emit(this.fileSet);
  }

  private createPreview(file: File): void {
    const mimeType = file.type;
    if (mimeType.match(/image\/*/) == null) {
      const item: FileItem = {
        file: null,
        name: file.name
      }
      this.fileUrls.push(item);
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (_event) => {
      if (typeof reader.result === "string") {
        const item: FileItem = {
          file: reader.result,
          name: file.name
        }
        this.fileUrls.push(item);
      }
    }
  }
}
