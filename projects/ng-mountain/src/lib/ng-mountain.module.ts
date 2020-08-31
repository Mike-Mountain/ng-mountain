import {NgModule} from '@angular/core';
import {NgMountainComponent} from './components/ng-mountain.component';
import {NgmDialogModule} from "./modules/ngm-dialog/ngm-dialog.module";
import {NgmLoadingModule} from "./modules/ngm-loading/ngm-loading.module";
import {NgmFileUploadModule} from "./modules/ngm-file-upload/ngm-file-upload.module";
import {NgmColorPickerModule} from "./modules/ngm-color-picker/ngm-color-picker.module";
import {NgmDataTableModule} from "./modules/ngm-data-table/ngm-data-table.module";


@NgModule({
  declarations: [
    NgMountainComponent
  ],
  imports: [
    NgmDialogModule,
    NgmLoadingModule,
    NgmFileUploadModule,
    NgmColorPickerModule,
    NgmDataTableModule,
  ],
  exports: [
    NgMountainComponent,
    NgmDialogModule,
    NgmLoadingModule,
    NgmFileUploadModule,
    NgmColorPickerModule,
    NgmDataTableModule,
  ]
})
export class NgMountainModule {
}
