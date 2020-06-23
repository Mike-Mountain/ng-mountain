import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgmResizeDirective} from './directives/ngm-resize.directive';


@NgModule({
    declarations: [
        NgmResizeDirective
    ],
    exports: [
        NgmResizeDirective
    ],
    imports: [
        CommonModule
    ]
})
export class NgmResizeModule {
}
