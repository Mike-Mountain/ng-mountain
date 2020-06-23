import {
  Directive,
  ElementRef,
  EventEmitter, HostListener,
  Input,
  OnChanges,
  OnInit,
  Output,
  Renderer2,
  SimpleChanges
} from '@angular/core';

@Directive({
  selector: '[ngmColorPalette]'
})
export class ColorPaletteDirective implements OnInit, OnChanges {

  @HostListener('window:dragover', ['$event'])
  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  @Input() hue: string;
  @Output() color = new EventEmitter<string>(true);

  public selectedPosition: { x: number, y: number };

  constructor(private el: ElementRef,
              private renderer: Renderer2) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes?.hue && !changes?.hue?.isFirstChange()) {
      // this.draw();
      if (this.selectedPosition) {
        // this.color.emit(this.getColorAtPosition(this.selectedPosition.x, this.selectedPosition.y));
      }
    }
  }

  ngOnInit(): void {
    const gradient = 'linear-gradient(rgba(255, 255, 255, 1), rgba(255, 255, 255, 0)), linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))';
    this.renderer.setStyle(
      this.el.nativeElement,
      'background-image',
      gradient
    );
    this.createColorHandler();
  }

  createColorHandler() {
    const handler = this.renderer.createElement('div');
    this.renderer.addClass(handler, 'color-handler');
    this.renderer.setAttribute(handler, 'draggable', 'true');

    const dragHandler = this.renderer.createElement('div');
    this.renderer.addClass(dragHandler, 'drag-handler');
    this.renderer.setAttribute(dragHandler, 'draggable', 'true');

    this.renderer.appendChild(handler, dragHandler);
    this.renderer.appendChild(this.el.nativeElement, handler);

    this.renderer.listen(dragHandler, 'drag', (event: DragEvent) => {
      if ((event.clientX - 495) > -11 && (event.clientX - 495) < 586) {
        this.renderer.setStyle(handler, 'left', (event.clientX - 495) + 'px');
      }
      if ((event.clientY - 95) > -9 && (event.clientY - 95) < 305) {
        this.renderer.setStyle(handler, 'top', (event.clientY - 95) + 'px');
      }
    })
    this.renderer.listen(dragHandler, 'dragend', (event: DragEvent) => {
      if ((event.clientX - 495) > -11 && (event.clientX - 495) < 586) {
        this.renderer.setStyle(handler, 'left', (event.clientX - 495) + 'px');
      }
      if ((event.clientY - 95) > -9 && (event.clientY - 95) < 305) {
        this.renderer.setStyle(handler, 'top', (event.clientY - 95) + 'px');
      }
    })
  }

}
