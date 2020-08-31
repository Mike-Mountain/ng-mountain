import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DocumentationRoutingModule} from './documentation-routing.module';
import {DocsContainerComponent} from "./components/docs-container/docs-container.component";
import {DialogDocsComponent} from './components/dialog-docs/dialog-docs.component';
import {FileUploadDocsComponent} from './components/file-upload-docs/file-upload-docs.component';
import {ResizeDocsComponent} from './components/resize-docs/resize-docs.component';
import {NgmColorPickerModule} from "../../../../../ng-mountain/src/lib/modules/ngm-color-picker/ngm-color-picker.module";
import {NgmFileUploadModule} from "ng-mountain";
import {DataTableDocsComponent} from './components/data-table-docs/data-table-docs.component';
import {NgmDataTableModule} from "../../../../../ng-mountain/src/lib/modules/ngm-data-table/ngm-data-table.module";


@NgModule({
  declarations: [
    DocsContainerComponent,
    DialogDocsComponent,
    FileUploadDocsComponent,
    ResizeDocsComponent,
    DataTableDocsComponent
  ],
  imports: [
    CommonModule,
    DocumentationRoutingModule,
    NgmColorPickerModule,
    NgmFileUploadModule,
    NgmDataTableModule
  ]
})
export class DocumentationModule {
}
