import {Directive, ElementRef, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[ngmColorSlider]'
})
export class ColorSliderDirective implements OnInit {

  constructor(private el: ElementRef,
              private renderer: Renderer2) {
  }

  ngOnInit() {
    const gradient = 'linear-gradient(to right,hsl(0,100%,50%),hsl(60,100%,50%),hsl(120,100%,50%),hsl(180,100%,50%),hsl(240,100%,50%),hsl(300,100%,50%),hsl(360,100%,50%))';
    this.renderer.setStyle(
      this.el.nativeElement,
      'background-image',
      gradient
    )
  }

}
