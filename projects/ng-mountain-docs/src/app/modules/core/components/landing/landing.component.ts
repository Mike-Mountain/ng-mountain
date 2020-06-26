import {Component, OnInit} from '@angular/core';
import {NgmLoadingService} from "ng-mountain";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(private loadingService: NgmLoadingService) {
  }

  ngOnInit(): void {
  }

  spin() {
    this.loadingService.setIsLoading(true);
    setTimeout(() => {
      this.loadingService.setIsLoading(false);
    }, 2000);
  }
}
