import {Component, OnInit, TemplateRef} from '@angular/core';
import {DialogConfig, DialogRef, DialogService} from "ng-mountain";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  dialogRef: DialogRef;

  constructor(private dialogService: DialogService) {
  }

  ngOnInit(): void {
  }

  openDropdown(content: TemplateRef<any>, origin: HTMLElement) {
    const config: DialogConfig = {
      dialogClass: 'dialog-box'
    };
    this.dialogRef = this.dialogService.open({content, origin, config});
  }

  closeDropdown() {
    this.dialogRef.close();
  }

}
