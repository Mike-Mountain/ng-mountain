import {Component, OnInit, TemplateRef} from '@angular/core';
import {DialogContent} from "../../models/dialog.model";
import {DialogRef} from "../../models/dialog-ref.class";

@Component({
  selector: 'ngm-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  renderMethod: 'template' | 'component' | 'text' = 'component';
  content: DialogContent;
  context: any;

  constructor(public dialogRef: DialogRef) {
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
