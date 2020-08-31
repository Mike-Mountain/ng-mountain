import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgmDataTableComponent} from './components/ngm-data-table/ngm-data-table.component';


@NgModule({
  declarations: [
    NgmDataTableComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NgmDataTableComponent
  ]
})
export class NgmDataTableModule {
}
