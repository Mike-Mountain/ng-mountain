import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'ngm-color-picker',
  templateUrl: './ngm-color-picker.component.html',
  styleUrls: ['./ngm-color-picker.component.scss']
})
export class NgmColorPickerComponent implements OnInit {

  @Input() public color: string
  @Output() public selectedColor = new EventEmitter<string>();
  public hue: string
  public textColor: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  setColor(event: string) {
    this.color = event;
    const array = this.color.split(',');
    array[0] = array[0].split('(')[1];
    array[array.length - 1] = array[array.length - 1].split(')')[0];
    array.splice(array.length - 1, 1);
    if (
      (parseInt(array[0], 10) * 0.299) +
      (parseInt(array[1], 10) * 0.587) +
      (parseInt(array[2], 10) * 0.114) <
      186
    ) {
      this.textColor = 'white';
    } else {
      this.textColor = 'black';
    }
  }

  setHue(event: string) {
    this.hue = event;
  }

  applyColor() {
    this.selectedColor.emit(this.hue);
  }
}
