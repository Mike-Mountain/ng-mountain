import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgmSpinnerComponent} from './components/ngm-spinner/ngm-spinner.component';


@NgModule({
  declarations: [
    NgmSpinnerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NgmSpinnerComponent
  ]
})
export class NgmLoadingModule {
}
