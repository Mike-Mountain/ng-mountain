import {NgModule} from '@angular/core';
import {NgMountainComponent} from './components/ng-mountain.component';
import {DialogModule} from "./modules/dialog/dialog.module";


@NgModule({
  declarations: [
    NgMountainComponent
  ],
  imports: [
    DialogModule
  ],
  exports: [
    NgMountainComponent,
    DialogModule
  ]
})
export class NgMountainModule {
}
