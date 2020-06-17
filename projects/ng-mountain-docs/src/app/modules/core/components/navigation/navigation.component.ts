import {Component, OnInit, TemplateRef} from '@angular/core';
import {NgmDialogConfig, NgmDialogRef, NgmDialogService} from "ng-mountain";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  dialogRef: NgmDialogRef;

  constructor(private dialogService: NgmDialogService) {
  }

  ngOnInit(): void {
  }

  openDropdown(content: TemplateRef<any>, origin: HTMLElement) {
    const config: NgmDialogConfig = {
      dialogClass: 'dialog-box'
    };
    this.dialogRef = this.dialogService.open({content, origin, config});
  }

  closeDropdown() {
    this.dialogRef.close();
  }

}
