import {AfterViewInit, Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {NgmLoadingService} from "../../services/ngm-loading.service";
import {NgmDialogRef} from "../../../ngm-dialog/models/ngm-dialog-ref.class";
import {NgmDialogService} from "../../../ngm-dialog/services/ngm-dialog.service";
import {NgmDialogConfig} from "../../../ngm-dialog/models/ngm-dialog.model";

@Component({
  selector: 'ngm-spinner',
  templateUrl: './ngm-spinner.component.html',
  styleUrls: ['./ngm-spinner.component.scss']
})
export class NgmSpinnerComponent implements OnInit, AfterViewInit {

  @ViewChild('content') private content: TemplateRef<HTMLElement>;

  public isLoading: boolean;
  private dialogRef: NgmDialogRef;

  constructor(public loadingService: NgmLoadingService,
              private dialogService: NgmDialogService) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.loadingService.getIsLoading().subscribe(isLoading => {
      this.isLoading = isLoading;
      if (this.isLoading) {
        const config: NgmDialogConfig = this.loadingService.dialogConfig;
        this.dialogRef = this.dialogService.open({content: this.content, config});
      } else {
        if (this.dialogRef) {
          this.dialogRef.close();
        }
      }
    })
  }

}
