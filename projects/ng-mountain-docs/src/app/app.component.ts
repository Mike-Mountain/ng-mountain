import {Component, OnInit, TemplateRef} from '@angular/core';
import {DialogService} from "ng-mountain";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng-mountain-docs';

  constructor(private dialogService: DialogService) {
  }

  ngOnInit(): void {

  }

  public open(content: TemplateRef<any>, origin?: HTMLElement): void {
    let data = {};
    if (origin) {
      data = {content, origin};
    } else {
      data = {content};
    }
    this.dialogService.open(data);
  }
}
