import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutComponent} from './components/layout/layout.component';
import {NavigationComponent} from './components/navigation/navigation.component';
import { LandingComponent } from './components/landing/landing.component';
import {RouterModule} from "@angular/router";
import {NgmDialogModule, NgmListModule} from "ng-mountain";


@NgModule({
  declarations: [
    LayoutComponent,
    NavigationComponent,
    LandingComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgmDialogModule,
    NgmListModule
  ],
  exports: [
    LayoutComponent,
    NavigationComponent
  ]
})
export class CoreModule {
}
