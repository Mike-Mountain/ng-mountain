import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DialogComponent} from './components/dialog/dialog.component';
import {OverlayModule} from "@angular/cdk/overlay";


@NgModule({
  declarations: [
    DialogComponent
  ],
  imports: [
    CommonModule,
    OverlayModule
  ],
  exports: [
    OverlayModule
  ]
})
export class DialogModule {
}
