import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  HostListener, Input,
  Output,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'ngm-color-slider',
  templateUrl: './color-slider.component.html',
  styleUrls: ['./color-slider.component.scss']
})
export class ColorSliderComponent implements AfterViewInit {

  @HostListener('window:mouseup', ['$event'])
  mouseUp(event: MouseEvent) {
    this.mouseIsDown = false;
  }

  @ViewChild('canvas') private canvas: ElementRef<HTMLCanvasElement>;
  @Output() color = new EventEmitter<string>();

  private context: CanvasRenderingContext2D;
  private mouseIsDown: boolean;
  private selectedPosition: {x: number, y: number};

  constructor() {
  }

  ngAfterViewInit(): void {
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
    this.context.clearRect(0, 0, width, height);

    const gradient = this.createGradient(width);
    this.drawSlider(gradient, width, height);
    this.drawSliderControl(height);
  }

  private createGradient(width: number): CanvasGradient {
    const gradient = this.context.createLinearGradient(width, 0, 0, 0);
    gradient.addColorStop(0, 'rgba(255, 0, 0, 1)');
    gradient.addColorStop(0.17, 'rgba(255, 255, 0, 1)');
    gradient.addColorStop(0.34, 'rgba(0, 255, 0, 1)');
    gradient.addColorStop(0.51, 'rgba(0, 255, 255, 1)');
    gradient.addColorStop(0.68, 'rgba(0, 0, 255, 1)');
    gradient.addColorStop(0.85, 'rgba(255, 0, 255, 1)');
    gradient.addColorStop(1, 'rgba(255, 0, 0, 1)');

    return gradient;
  }

  private drawSlider(gradient: CanvasGradient, width: number, height: number): void {
    this.context.beginPath();
    this.context.rect(0, 0, width, height);
    this.context.fillStyle = gradient;
    this.context.fill();
    this.context.closePath();
  }

  private drawSliderControl(height: number): void {
    if (this.selectedPosition) {
      this.context.beginPath()
      this.context.strokeStyle = 'white'
      this.context.lineWidth = 5
      this.context.rect(this.selectedPosition.x - 5, 0, 10, height)
      this.context.stroke()
      this.context.closePath()
    }
  }

  private emitColor(x: number, y: number): void {
    const rgbaColor = this.getColorAtPosition(x, y);
    this.color.emit(rgbaColor)
  }

  private getColorAtPosition(x: number, y: number): string {
    const imageData = this.context.getImageData(x, y, 1, 1).data;
    return `rgba(${imageData[0]}, ${imageData[1]}, ${imageData[2]}, 1)`
  }
}
