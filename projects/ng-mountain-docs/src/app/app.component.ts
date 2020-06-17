import {Component, OnInit, TemplateRef} from '@angular/core';
import {NgmDialogConfig, NgmDialogService, NgmLoadingService} from "ng-mountain";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng-mountain-docs';

  constructor(private dialogService: NgmDialogService,
              private loadingService: NgmLoadingService) {
  }

  ngOnInit(): void {
  }

  public open(content: TemplateRef<any>, origin?: HTMLElement): void {
    let data = {};
    const config: NgmDialogConfig = {
      dialogClass: 'dialog-box'
    }
    if (origin) {
      data = {content, origin, config};
    } else {
      data = {content, config};
    }
    this.dialogService.open(data);
  }

  public load() {
    this.loadingService.setIsLoading(true);
    setTimeout(() => {
      this.loadingService.setIsLoading(false);
    }, 5000);
  }

  log(event: any) {
    console.log(event)
  }
}
