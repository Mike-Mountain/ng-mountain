import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {LoadingService} from "../../services/loading.service";

@Component({
  selector: 'ngm-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  @ViewChild('spin') private content: TemplateRef<HTMLElement>;
  isLoading: boolean;

  constructor(public loadingService: LoadingService) {
  }

  ngOnInit(): void {
    this.loadingService.getIsLoading().subscribe(isLoading => {
      this.isLoading = isLoading;
      // if (this.isLoading) {
      //   this.dialogRef = this.dialogService.open({content: this.content});
      // } else {
      //   this.dialogRef.close();
      // }
    })
  }

}
