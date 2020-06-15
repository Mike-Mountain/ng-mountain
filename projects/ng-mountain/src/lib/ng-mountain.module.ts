import {NgModule} from '@angular/core';
import {NgMountainComponent} from './components/ng-mountain.component';
import {DialogModule} from "./modules/dialog/dialog.module";
import {LoadingModule} from "./modules/loading/loading.module";
import {FileUploadModule} from "./modules/file-upload/file-upload.module";


@NgModule({
  declarations: [
    NgMountainComponent
  ],
  imports: [
    DialogModule,
    LoadingModule,
    FileUploadModule
  ],
  exports: [
    NgMountainComponent,
    DialogModule,
    LoadingModule,
    FileUploadModule
  ]
})
export class NgMountainModule {
}
