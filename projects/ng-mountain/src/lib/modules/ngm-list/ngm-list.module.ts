import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgmListComponent} from './components/ngm-list/ngm-list.component';
import { NgmListItemDirective } from './directives/ngm-list-item.directive';

@NgModule({
  declarations: [
    NgmListComponent,
    NgmListItemDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NgmListComponent,
    NgmListItemDirective
  ]
})
export class NgmListModule {
}
