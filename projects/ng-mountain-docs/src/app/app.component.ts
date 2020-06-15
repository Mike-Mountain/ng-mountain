import {Component, TemplateRef} from '@angular/core';
import {DialogService} from "ng-mountain";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-mountain-docs';

  constructor(private dialogService: DialogService) {
  }

  open(content: TemplateRef<any>, origin?: HTMLElement) {
    let data = {};
    if (origin) {
      data = {content, origin};
    } else {
      data = {content};
    }
    this.dialogService.open(data);
  }
}
