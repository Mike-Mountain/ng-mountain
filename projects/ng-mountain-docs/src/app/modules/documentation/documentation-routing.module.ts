import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DocsContainerComponent} from "./components/docs-container/docs-container.component";
import {DialogDocsComponent} from "./components/dialog-docs/dialog-docs.component";
import {FileUploadDocsComponent} from "./components/file-upload-docs/file-upload-docs.component";
import {ResizeDocsComponent} from "./components/resize-docs/resize-docs.component";


const routes: Routes = [
  {
    path: '',
    component: DocsContainerComponent,
    children: [
      {path: 'dialog', component: DialogDocsComponent},
      {path: 'resize', component: ResizeDocsComponent},
      {path: 'file-upload', component: FileUploadDocsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentationRoutingModule {
}
