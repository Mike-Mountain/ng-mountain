import {NgModule} from '@angular/core';
import {NgmHttpComponent} from './components/ngm-http.component';
import {NgmHttpService} from "./services/http-service/ngm-http.service";


@NgModule({
  declarations: [NgmHttpComponent],
  imports: [],
  exports: [
    NgmHttpComponent
  ],
  providers: [NgmHttpService]
})
export class NgmHttpModule {
}
