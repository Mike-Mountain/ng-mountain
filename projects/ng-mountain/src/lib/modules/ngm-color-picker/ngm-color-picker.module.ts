import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgmColorPickerComponent} from './components/ngm-color-picker/ngm-color-picker.component';
import {ColorSliderComponent} from './components/color-slider/color-slider.component';
import {ColorPaletteComponent} from './components/color-palette/color-palette.component';
import {ColorPaletteDirective} from './directives/color-palette/color-palette.directive';
import {ColorSliderDirective} from './directives/color-slider/color-slider.directive';


@NgModule({
  declarations: [
    NgmColorPickerComponent,
    ColorSliderComponent,
    ColorPaletteComponent,
    ColorPaletteDirective,
    ColorSliderDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NgmColorPickerComponent
  ]
})
export class NgmColorPickerModule {
}
