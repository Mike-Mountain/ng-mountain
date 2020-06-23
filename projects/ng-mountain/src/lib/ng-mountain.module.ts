import {NgModule} from '@angular/core';
import {NgMountainComponent} from './components/ng-mountain.component';
import {NgmDialogModule} from "./modules/ngm-dialog/ngm-dialog.module";
import {NgmLoadingModule} from "./modules/ngm-loading/ngm-loading.module";
import {NgmFileUploadModule} from "./modules/ngm-file-upload/ngm-file-upload.module";
import {NgmColorPickerModule} from "./modules/ngm-color-picker/ngm-color-picker.module";


@NgModule({
  declarations: [
    NgMountainComponent
  ],
  imports: [
    NgmDialogModule,
    NgmLoadingModule,
    NgmFileUploadModule,
  ],
  exports: [
    NgMountainComponent,
    NgmDialogModule,
    NgmLoadingModule,
    NgmFileUploadModule,
    NgmColorPickerModule
  ]
})
export class NgMountainModule {
}
