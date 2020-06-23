import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter, HostListener,
  Input,
  OnChanges,
  OnInit,
  Output, SimpleChanges,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'ngm-color-palette',
  templateUrl: './color-palette.component.html',
  styleUrls: ['./color-palette.component.scss']
})
export class ColorPaletteComponent implements OnChanges, OnInit, AfterViewInit {

  @HostListener('window:mouseup')
  public mouseUp(): void {
    this.mouseIsDown = false;
  }

  @ViewChild('canvas') private canvas: ElementRef<HTMLCanvasElement>;

  @Input() public hue: string;
  @Output() private color = new EventEmitter<string>(true);

  public selectedPosition: { x: number, y: number };
  private context: CanvasRenderingContext2D;
  private mouseIsDown: boolean;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes?.hue && !changes?.hue?.isFirstChange()) {
      this.draw();
      if (this.selectedPosition) {
        this.color.emit(this.getColorAtPosition(this.selectedPosition.x, this.selectedPosition.y));
      }
    }
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    if (!this.selectedPosition) {
      this.selectedPosition = {x: 0, y: 0};
    }
    this.draw();
  }

  public mouseDown(event: MouseEvent): void {
    this.mouseIsDown = true;
    this.selectedPosition = {x: event.offsetX, y: event.offsetY};
    this.draw();
    this.emitColor(event.offsetX, event.offsetY);
  }

  public mouseMove(event: MouseEvent): void {
    if (this.mouseIsDown) {
      this.selectedPosition = {x: event.offsetX, y: event.offsetY};
      this.draw();
      this.emitColor(event.offsetX, event.offsetY);
    }
  }

  private draw(): void {
    if (!this.context) {
      this.context = this.canvas.nativeElement.getContext('2d');
    }

    const width = this.canvas.nativeElement.width;
    const height = this.canvas.nativeElement.height;

    this.context.fillStyle = this.hue || 'rgba(255, 255, 255, 1)';
    this.context.fillRect(0, 0, width, height);

    this.context.fillStyle = this.createWhiteGradient(width);
    this.context.fillRect(0, 0, width, height);

    this.context.fillStyle = this.createBlackGradient(height);
    this.context.fillRect(0, 0, width, height);

    this.createSlider();
  }

  private createWhiteGradient(width: number): CanvasGradient {
    const gradient = this.context.createLinearGradient(0, 0, width, 0);
    gradient.addColorStop(0, 'rgba(255,255,255,1)')
    gradient.addColorStop(1, 'rgba(255,255,255,0)');

    return gradient;
  }

  private createBlackGradient(height: number): CanvasGradient {
    const gradient = this.context.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, 'rgba(0,0,0,0)')
    gradient.addColorStop(1, 'rgba(0,0,0,1)');

    return gradient;
  }

  private createSlider(): void {
    if (this.selectedPosition) {
      this.context.strokeStyle = 'white';
      this.context.fillStyle = 'white';
      this.context.beginPath();
      this.context.arc(
        this.selectedPosition.x,
        this.selectedPosition.y,
        10,
        0,
        2 * Math.PI
      );
      this.context.lineWidth = 5;
      this.context.stroke();
    }
  }

  private emitColor(x: number, y: number): void {
    const rgbaColor = this.getColorAtPosition(x, y);
    this.color.emit(rgbaColor)
  }

  private getColorAtPosition(x: number, y: number): string {
    const imageData = this.context.getImageData(x, y, 1, 1).data;
    return `rgba(${imageData[0]}, ${imageData[1]}, ${imageData[2]}, 1)`;
  }
}
