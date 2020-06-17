import { Component, OnInit } from '@angular/core';
import {NgmListItem} from "ng-mountain";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  testItems: NgmListItem[] = [
    {label: 'Test Project', value: '1'},
    {label: 'Test Project 2', value: '2'},
    {label: 'Test Project 3', value: '3'},
    {label: 'Test Project 4', value: '4'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
