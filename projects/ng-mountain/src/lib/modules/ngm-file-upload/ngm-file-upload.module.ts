import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgmFileUploadComponent} from './components/ngm-file-upload/ngm-file-upload.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    NgmFileUploadComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    NgmFileUploadComponent
  ]
})
export class NgmFileUploadModule {
}
