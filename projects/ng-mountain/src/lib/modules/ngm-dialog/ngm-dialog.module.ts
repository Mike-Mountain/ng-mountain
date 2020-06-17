import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgmDialogComponent} from './components/ngm-dialog/ngm-dialog.component';
import {OverlayModule} from "@angular/cdk/overlay";


@NgModule({
  declarations: [
    NgmDialogComponent
  ],
  imports: [
    CommonModule,
    OverlayModule
  ],
  exports: [
    OverlayModule
  ]
})
export class NgmDialogModule {
}
