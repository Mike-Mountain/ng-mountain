import {AfterViewInit, Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {LoadingService} from "../../services/loading.service";
import {DialogRef} from "../../../dialog/models/dialog-ref.class";
import {DialogService} from "../../../dialog/services/dialog.service";
import {OverlayConfig} from "@angular/cdk/overlay";
import {DialogConfig} from "../../../dialog/models/dialog.model";

@Component({
  selector: 'ngm-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit, AfterViewInit {

  @ViewChild('content') private content: TemplateRef<HTMLElement>;
  isLoading: boolean;
  dialogRef: DialogRef;

  constructor(public loadingService: LoadingService,
              private dialogService: DialogService) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.loadingService.getIsLoading().subscribe(isLoading => {
      this.isLoading = isLoading;
      if (this.isLoading) {
        const config: DialogConfig = this.loadingService.dialogConfig;
        this.dialogRef = this.dialogService.open({content: this.content, config});
      } else {
        if (this.dialogRef) {
          this.dialogRef.close();
        }
      }
    })
  }

}
