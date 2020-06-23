import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DocumentationRoutingModule} from './documentation-routing.module';
import {DocsContainerComponent} from "./components/docs-container/docs-container.component";
import {DialogDocsComponent} from './components/dialog-docs/dialog-docs.component';
import {FileUploadDocsComponent} from './components/file-upload-docs/file-upload-docs.component';
import {ResizeDocsComponent} from './components/resize-docs/resize-docs.component';
import {NgmColorPickerModule} from "../../../../../ng-mountain/src/lib/modules/ngm-color-picker/ngm-color-picker.module";
import {NgmFileUploadModule} from "ng-mountain";


@NgModule({
  declarations: [
    DocsContainerComponent,
    DialogDocsComponent,
    FileUploadDocsComponent,
    ResizeDocsComponent
  ],
    imports: [
        CommonModule,
        DocumentationRoutingModule,
        NgmColorPickerModule,
        NgmFileUploadModule
    ]
})
export class DocumentationModule {
}
