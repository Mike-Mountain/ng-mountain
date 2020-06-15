import {NgModule} from '@angular/core';
import {NgMountainComponent} from './components/ng-mountain.component';
import {DialogModule} from "./modules/dialog/dialog.module";
import {LoadingModule} from "./modules/loading/loading.module";


@NgModule({
  declarations: [
    NgMountainComponent
  ],
  imports: [
    DialogModule,
    LoadingModule
  ],
  exports: [
    NgMountainComponent,
    DialogModule,
    LoadingModule
  ]
})
export class NgMountainModule {
}
