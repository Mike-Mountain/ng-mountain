import {Component, OnInit, TemplateRef} from '@angular/core';
import {NgmDialogContent} from "../../models/ngm-dialog.model";
import {NgmDialogRef} from "../../models/ngm-dialog-ref.class";

@Component({
  selector: 'ngm-dialog',
  templateUrl: './ngm-dialog.component.html',
  styleUrls: ['./ngm-dialog.component.scss']
})
export class NgmDialogComponent implements OnInit {

  public renderMethod: 'template' | 'component' | 'text' = 'component';
  public content: NgmDialogContent;
  public context: any;

  constructor(public dialogRef: NgmDialogRef) {
  }

  ngOnInit(): void {
    this.content = this.dialogRef.content;

    switch (true) {
      case typeof this.content === "string":
        this.renderMethod = 'text';
        break;
      case this.content instanceof TemplateRef:
        this.renderMethod = 'template';
        this.context = {
          close: this.dialogRef.close.bind(this.dialogRef)
        };
        break;
    }
  }

}
