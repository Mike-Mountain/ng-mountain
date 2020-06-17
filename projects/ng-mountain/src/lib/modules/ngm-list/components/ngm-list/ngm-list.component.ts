import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgmItemDirection, NgmListItem} from "../../models/ngm-list.model";
import {NgmColor} from "../../../../models/global.model";

@Component({
  selector: 'ngm-list',
  templateUrl: './ngm-list.component.html',
  styleUrls: ['./ngm-list.component.scss']
})
export class NgmListComponent implements OnInit {

  @Input() title: string;
  @Input() items: NgmListItem[];
  @Input() tagPosition: NgmItemDirection;
  @Input() tagColor: NgmColor;
  @Input() hoverColor: NgmColor;
  @Output() value = new EventEmitter<string>();

  public selectedValue: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  public selectValue(value: string): void {
    this.selectedValue = value;
    this.value.emit(value);
  }

}
